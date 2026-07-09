import { expect } from '@playwright/test';

import type { Page } from '@playwright/test';

export async function testStoryScreenshot(
  page: Page,
  storyId: string,
  snapshotName: string
): Promise<void> {
  await page.goto(`/iframe.html?id=${storyId}`);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(300);
  // Small tolerance to avoid false positives across CI environments.
  await expect(page).toHaveScreenshot(snapshotName, {
    animations: 'disabled',
    caret: 'hide',
    maxDiffPixelRatio: 0.01,
  });
}
