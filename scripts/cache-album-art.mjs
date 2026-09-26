import { mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { favouriteAlbums, previewAlbums } from '../src/data/music.ts';

const sizes = [250, 1200];
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const isJpeg = bytes =>
  bytes.length > 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;

export async function cacheAlbumArt(
  ids,
  directory,
  fetchImage = fetch,
) {
  await mkdir(directory, { recursive: true });

  for (const id of new Set(ids)) {
    if (!/^[0-9a-f-]{36}$/i.test(id)) throw new Error(`Invalid release group ID: ${id}`);

    for (const size of sizes) {
      const filename = join(directory, `${id}-${size}.jpg`);
      const cached = await readFile(filename).catch(error => {
        if (error.code !== 'ENOENT') throw error;
        return undefined;
      });
      if (cached && isJpeg(cached)) continue;

      const url = `https://coverartarchive.org/release-group/${id}/front-${size}`;
      console.log(`Downloading album cover ${id} (${size}px)`);

      for (let attempt = 0; attempt < 3; attempt++) {
        try {
          const response = await fetchImage(url, {
            headers: { 'User-Agent': 'BruunPersonalSite/1.0 (https://jburn.github.io)' },
            signal: AbortSignal.timeout(60_000),
          });
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          const bytes = new Uint8Array(await response.arrayBuffer());
          if (!isJpeg(bytes)) throw new Error('Expected a JPEG thumbnail');

          // Only complete, validated downloads become cache entries.
          const temporary = `${filename}.tmp`;
          try {
            await writeFile(temporary, bytes);
            await rename(temporary, filename);
          } finally {
            await rm(temporary, { force: true });
          }
          break;
        } catch (error) {
          if (attempt === 2) {
            throw new Error(`Could not cache ${url}. Retry the build.`, { cause: error });
          }
          await delay(2000 * (attempt + 1));
        }
      }
      // Keep archive requests sequential and spaced apart.
      await delay(1100);
    }
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  await cacheAlbumArt(
    [...previewAlbums, ...favouriteAlbums].map(album => album.releaseGroupId),
    resolve('public/assets/album-covers'),
  );
}
