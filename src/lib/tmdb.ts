type MediaType = 'movie' | 'tv';

interface TmdbDetails {
  title?: string;
  name?: string;
  poster_path: string | null;
  backdrop_path: string | null;
}

export async function getTmdbMedia(
  type: MediaType,
  ids: number[],
  imageType: 'poster' | 'backdrop' = 'poster',
): Promise<Array<{ title: string; image: string }>> {
  if (ids.length === 0) return [];

  const token = import.meta.env.TMDB_READ_ACCESS_TOKEN;

  if (!token) {
    throw new Error('Missing TMDB_READ_ACCESS_TOKEN.');
  }

  const posters: Array<{ title: string; image: string }> = [];

  for (const id of ids) {
    const response = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
        signal: AbortSignal.timeout(15000),
      },
    );

    if (!response.ok) {
      throw new Error(
        `TMDB request failed for ${type}/${id}: ${response.status}`,
      );
    }

    const details: TmdbDetails = await response.json();

    const path = imageType === 'backdrop'
        ? details.backdrop_path
        : details.poster_path;


    const size = imageType === 'backdrop' ? 'w780' : 'w342';

    posters.push({
      title: details.title ?? details.name ?? 'Untitled',
      image: path ? `https://image.tmdb.org/t/p/${size}${path}` : '',
    });
  }

  return posters;
}

export async function getPosters(type: MediaType, ids: number[], imageType: 'poster' | 'backdrop' = 'poster'): Promise<string[]> {
  return (await getTmdbMedia(type, ids, imageType)).map(item => item.image).filter(Boolean);
}
