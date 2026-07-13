# Visual Regression Testing with Playwright

## Overview

This ticket adds an automated visual regression testing system for the project's Storybook using Playwright.

Instead of manually maintaining a list of Storybook stories, the test suite automatically downloads the Storybook index, discovers every available story, and executes a screenshot comparison against the existing visual snapshots.

This allows visual changes to components to be detected automatically during development or Continuous Integration (CI).

---

# Features

* Automatic Storybook story discovery.
* Visual regression testing using Playwright.
* Automatic comparison against stored snapshots.
* Snapshot update command.
* HTML test report generation.
* Ready for CI environments.
* Stable screenshots with animations disabled.

---

# Project Structure

```text
playwright.config.ts

scripts/
└── generate-story-list.ts

tests/
├── data/
│   └── stories.json
├── helpers/
│   ├── story-list.ts
│   ├── storybook.ts
│   └── visual.ts
└── visual/
    ├── storybook.visual.spec.ts
    └── storybook.visual.spec.ts-snapshots/
```

---

# Components

## playwright.config.ts

Configures Playwright execution.

Configuration includes:

* Chromium browser
* Headless execution
* 1440 × 900 viewport
* HTML reporter
* Screenshot on failure
* CI retry support
* Base Storybook URL

---

## scripts/generate-story-list.ts

Downloads the Storybook `index.json` file and generates:

```text
tests/data/stories.json
```

This removes the need to manually maintain the list of stories.

Example:

```bash
yarn run generate:stories
```

---

## tests/helpers/storybook.ts

Responsible for:

* Downloading Storybook's `index.json`
* Parsing the response
* Returning only entries whose type is `"story"`

---

## tests/helpers/story-list.ts

Loads the generated `stories.json` file.

This avoids downloading the Storybook index during every test execution.

---

## tests/helpers/visual.ts

Contains the reusable helper responsible for:

* Opening a Storybook story
* Waiting until the page finishes loading
* Waiting for rendering stability
* Capturing the screenshot
* Comparing it against the stored snapshot

Current screenshot options:

* animations disabled
* hidden caret
* maxDiffPixelRatio = 0.01

---

## tests/visual/storybook.visual.spec.ts

Creates one Playwright test for every Storybook story.

Pseudo workflow:

```
Load stories
        ↓
For each story
        ↓
Open Storybook iframe
        ↓
Take screenshot
        ↓
Compare against snapshot
```

---

# Available Scripts

## Generate story list

```bash
yarn run generate:stories
```

Downloads all Storybook stories.

---

## Execute visual tests

```bash
npm run test:visual
```

Runs every visual regression test.

---

## Update snapshots

```bash
yarn run test:visual:update
```

Regenerates all baseline screenshots.

Use this command only after intentionally changing component visuals.

---

# Storybook URL

By default:

```text
https://ditmar.github.io/leetcode-spa
```

Can be overridden using:

```bash
TARGET_STORYBOOK_URL
```

Example:

```bash
TARGET_STORYBOOK_URL=http://localhost:6006 npm run test:visual
```

---

# Snapshot Storage

Snapshots are stored automatically in:

```text
tests/visual/storybook.visual.spec.ts-snapshots/
```

Playwright compares new screenshots against these baseline images.

---

# Reports

After execution an HTML report is generated.

Open it with:

```bash
npx playwright show-report
```

---

# Running the Tests

Install dependencies:

```bash
yarn install
```

or

```bash
npm install
```

Generate the story list:

```bash
yarn run generate:stories
```

Execute the visual regression suite:

```bash
yarn run test:visual
```

Expected output:

```text
118 passed
```

---

# CI Support

The configuration is compatible with CI environments.

Features include:

* automatic retries in CI
* deterministic screenshots
* HTML reports
* snapshot comparison

---

# Notes

* Animations are disabled to reduce flaky tests.
* Caret rendering is hidden.
* Screenshot comparison uses a `maxDiffPixelRatio` of `0.01`.
* Reports and temporary test results are ignored through `.gitignore`.
* Snapshots should only be updated when visual changes are intentional.

---

# Files Added

```text
playwright.config.ts

scripts/
└── generate-story-list.ts

tests/
├── data/
│   └── stories.json
├── helpers/
│   ├── story-list.ts
│   ├── storybook.ts
│   └── visual.ts
└── visual/
    ├── storybook.visual.spec.ts
    └── storybook.visual.spec.ts-snapshots/
```

---

# Validation Performed

The implementation was validated successfully with the following checks:

* ESLint passed without errors.
* Playwright visual regression suite executed successfully.
* All visual snapshots matched.
* HTML report generated successfully.

Example execution:

```text
Running 118 tests...

118 passed
```

---

# Summary

This implementation provides a complete automated visual regression testing workflow for Storybook using Playwright.

It automatically discovers stories, executes screenshot comparisons, generates reports, supports CI execution, and allows snapshots to be updated when component designs intentionally change.
