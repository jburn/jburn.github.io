import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { cacheAlbumArt } from './cache-album-art.mjs';
import { coverUrl } from '../src/data/music.ts';

const id = 'fe4373ed-5e89-46b3-b4c0-31433ce217df';
const jpeg = new Uint8Array([0xff, 0xd8, 0xff, 0xd9]);

test('downloads each size once, deduplicates albums, and reuses the disk cache', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'album-art-test-'));
  const requests = [];
  const fetchImage = async input => {
    requests.push(String(input));
    return new Response(jpeg);
  };
  try {
    await cacheAlbumArt([id, id], directory, fetchImage);
    assert.equal(requests.length, 2);
    for (const size of [250, 1200]) {
      assert.ok(requests.includes(`https://coverartarchive.org/release-group/${id}/front-${size}`));
      assert.deepEqual(new Uint8Array(await readFile(join(directory, `${id}-${size}.jpg`))), jpeg);
      assert.equal(coverUrl(id, size), `/assets/album-covers/${id}-${size}.jpg`);
    }
    await cacheAlbumArt([id], directory, async () => {
      throw new Error('Cached covers should not request the network');
    });
    // An interrupted or invalid file must be fetched again.
    await writeFile(join(directory, `${id}-250.jpg`), 'invalid');
    await cacheAlbumArt([id], directory, fetchImage);
    assert.equal(requests.length, 3);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
