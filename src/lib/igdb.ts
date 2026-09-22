interface Game {
  id: number;
  name: string;
  slug: string;
  cover?: {
    image_id: string;
  };
}

export async function getGameCovers(slugs: string[]): Promise<string[]> {
  if (slugs.length === 0) return [];

  const clientId = import.meta.env.IGDB_CLIENT_ID;
  const clientSecret = import.meta.env.IGDB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('Missing IGDB credentials.');
  }

  const tokenResponse = await fetch(
    'https://id.twitch.tv/oauth2/token',
    {
      method: 'POST',
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'client_credentials',
      }),
      signal: AbortSignal.timeout(15000),
    }
  );

  if (!tokenResponse.ok) {
    throw new Error(`Twitch authentication failed: ${tokenResponse.status}`);
  }

  const { access_token } = await tokenResponse.json();

  const slugList = slugs.map(slug => JSON.stringify(slug)).join(',');

  const response = await fetch('https://api.igdb.com/v4/games', {
    method: 'POST',
    headers: {
      'Client-ID': clientId,
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'text/plain',
      Accept: 'application/json',
    },
    body: `
      fields name, slug, cover.image_id;
      where slug = (${slugList});
      limit 50;
    `,
    signal: AbortSignal.timeout(15000),
  });

  if (!response.ok) {
    throw new Error(`IGDB request failed: ${response.status}`);
  }

  const games: Game[] = await response.json();

  // Preserve the order of your chosen slugs.
  return slugs.flatMap(slug => {
    const game = games.find(game => game.slug === slug);

    if (!game?.cover?.image_id) {
      console.warn(`No IGDB cover found for: ${slug}`);
      return [];
    }

    return [
      `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`,
    ];
  });
}