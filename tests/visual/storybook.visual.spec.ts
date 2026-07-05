import { test } from '@playwright/test';

import { getStories } from '../helpers/storybook';
import { testStoryScreenshot } from '../helpers/visual';
// use Playwright's page fixture provided to each test

const stories = await getStories();

for (const story of stories) {
  test(`Capture ${story.id}`, async ({ page }) => {
    await testStoryScreenshot(page, story.id, `${story.id}.png`);
  });
}
