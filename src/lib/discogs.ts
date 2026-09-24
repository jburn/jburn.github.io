export interface CollectionRecord {
  instanceId: number;
  title: string;
  artist: string;
  image: string;
  href: string;
  year: number;
  format: string;
  genres: string[];
  styles: string[];
}

interface CollectionPage {
  pagination: { pages: number };
  releases: Array<{
    instance_id: number;
    basic_information: {
      id: number;
      title: string;
      year: number;
      cover_image?: string;
      artists: Array<{ name: string }>;
      formats: Array<{ name: string; descriptions?: string[] }>;
      genres?: string[];
      styles?: string[];
    };
  }>;
}

let cached: { username: string; expires: number; records: Promise<CollectionRecord[]> } | undefined;

export function getDiscogsCollection(username: string): Promise<CollectionRecord[]> {
  if (cached?.username === username && cached.expires > Date.now()) {
    return cached.records;
  }

  const records = fetchCollection(username);
  const entry = { username, expires: Date.now() + 5 * 60_000, records };
  cached = entry;
  void records.catch(() => { if (cached === entry) cached = undefined; });
  return records;
}

async function fetchCollection(username: string): Promise<CollectionRecord[]> {
  const token = import.meta.env.DISCOGS_TOKEN;
  const headers: Record<string, string> = {
    'User-Agent': 'BruunPersonalSite/1.0 +https://jburn.github.io',
    Accept: 'application/json',
  };
  if (token) headers.Authorization = `Discogs token=${token}`;

  const records: CollectionRecord[] = [];
  let pages = 1;

  for (let page = 1; page <= pages; page++) {
    if (page > 1) await new Promise(resolve => setTimeout(resolve, 1100));
    const url = new URL(`https://api.discogs.com/users/${encodeURIComponent(username)}/collection/folders/0/releases`);
    url.search = new URLSearchParams({
      page: String(page), per_page: '100', sort: 'artist', sort_order: 'asc',
    }).toString();
    const response = await fetch(url, { headers, signal: AbortSignal.timeout(15000) });
    if (!response.ok) {
      throw new Error(`Discogs collection request failed (${response.status}). Check the username, collection visibility and DISCOGS_TOKEN.`);
    }
    const data: CollectionPage = await response.json();
    pages = data.pagination.pages;
    for (const item of data.releases) {
      const release = item.basic_information;
      records.push({
        instanceId: item.instance_id,
        title: release.title,
        artist: release.artists.map(artist => artist.name).join(', '),
        image: release.cover_image ?? '',
        href: `https://www.discogs.com/release/${release.id}`,
        year: release.year,
        format: release.formats.map(format =>
          [format.name, ...(format.descriptions ?? [])].join(', '),
        ).join(' · '),
        genres: release.genres ?? [],
        styles: release.styles ?? [],
      });
    }
  }
  return records;
}
