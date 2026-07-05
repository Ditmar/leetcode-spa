import { readFile } from 'node:fs/promises';

export interface StoryData {
  id: string;
}

export async function getStoryList(): Promise<StoryData[]> {
  const content = await readFile('tests/data/stories.json', 'utf8');

  return JSON.parse(content) as StoryData[];
}
