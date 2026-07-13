export interface StorybookEntry {
  id: string;
  title: string;
  name: string;
  type: 'story' | 'docs';

  importPath?: string;
  componentPath?: string;
}

export interface StorybookIndex {
  v: number;
  entries: Record<string, StorybookEntry>;
}

const DEFAULT_STORYBOOK_URL =
  process.env.TARGET_STORYBOOK_URL ?? 'https://ditmar.github.io/leetcode-spa';

export async function getStorybookIndex(): Promise<StorybookIndex> {
  const response = await fetch(`${DEFAULT_STORYBOOK_URL}/index.json`);

  if (!response.ok) {
    throw new Error(
      `Unable to download Storybook index from ${DEFAULT_STORYBOOK_URL} (HTTP ${response.status})`
    );
  }

  return response.json();
}

export async function getStories(): Promise<StorybookEntry[]> {
  const index = await getStorybookIndex();

  return Object.values(index.entries)
    .filter((entry) => entry.type === 'story')
    .sort((a, b) => a.id.localeCompare(b.id));
}
