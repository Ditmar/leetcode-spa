/* eslint-disable no-console */

import { mkdir, writeFile } from 'node:fs/promises';

const BASE_URL = process.env.TARGET_STORYBOOK_URL ?? 'https://ditmar.github.io/leetcode-spa';

interface StorybookEntry {
  id: string;
  type: string;
}

interface StorybookIndex {
  entries: Record<string, StorybookEntry>;
}

async function main() {
  console.log(`Downloading stories from ${BASE_URL}`);

  const response = await fetch(`${BASE_URL}/index.json`);

  if (!response.ok) {
    throw new Error(`Unable to download Storybook index (${response.status})`);
  }

  const index = (await response.json()) as StorybookIndex;

  const stories = Object.values(index.entries)
    .filter((entry) => entry.type === 'story')
    .map((entry) => ({
      id: entry.id,
    }));

  await mkdir('tests/data', { recursive: true });

  await writeFile('tests/data/stories.json', JSON.stringify(stories, null, 2));

  console.log(`Generated ${stories.length} stories.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
