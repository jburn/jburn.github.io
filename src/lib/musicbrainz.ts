interface ReleaseGroup {
  'first-release-date'?: string;
  genres?: Array<{ name: string; count: number }>;
}

export interface AlbumMetadata {
  year?: number;
  genres: string[];
}

const cache = new Map<string, { expires: number; value: Promise<AlbumMetadata> }>();
let queue: Promise<unknown> = Promise.resolve();
let nextRequestAt = 0;

export function getAlbumMetadata(id: string): Promise<AlbumMetadata> {
  const cached = cache.get(id);
  if (cached && cached.expires > Date.now()) return cached.value;

  // Share one queue across all callers to respect MusicBrainz's rate limit.
  const value = queue.then(async () => {
    const wait = nextRequestAt - Date.now();
    if (wait > 0) await new Promise(resolve => setTimeout(resolve, wait));
    nextRequestAt = Date.now() + 1100;

    const response = await fetch(
      `https://musicbrainz.org/ws/2/release-group/${encodeURIComponent(id)}?inc=genres&fmt=json`,
      {
        headers: {
          'User-Agent': 'BruunPersonalSite/1.0 (https://jburn.github.io)',
          Accept: 'application/json',
        },
        signal: AbortSignal.timeout(15000),
      },
    );
    if (!response.ok) throw new Error(`MusicBrainz request failed (${response.status}) for ${id}`);

    const data: ReleaseGroup = await response.json();
    const year = Number(data['first-release-date']?.slice(0, 4));
    return {
      year: Number.isInteger(year) && year > 0 ? year : undefined,
      genres: [...(data.genres ?? [])]
        .filter(genre => genre.count > 0)
        .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
        .map(genre =>
          genre.name.replace(/\b\p{L}/gu, letter => letter.toUpperCase())
        ),
    };
  });

  cache.set(id, { expires: Date.now() + 24 * 60 * 60_000, value });
  queue = value.catch(() => {
    cache.delete(id);
  });
  return value;
}
