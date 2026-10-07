# SPA-024: Build the explore page

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Feature |
| Priority | P2 |
| Size | M |
| Phase | 4 - More features |
| Depends on | X-001, SPA-015, API-035 |

## Problem

`/explore` shows `<h1>EXPLORE PAGE</h1>`. `exploreService` has `getTopics`, `getTopicById`, `getFiltersMetadata` and `updateProgress`.

## Tasks

- [ ] Topic cards (icon, title, description, difficulty, progress bar) with category and difficulty filters.
- [ ] Topic detail page with the list of problems and a completed mark.
- [ ] Update progress when a problem is solved (do not rely only on a manual checkbox).
- [ ] Remove the strange env option `PUBLIC_EXPLORE_API_PATH` or document it (a fixed path is simpler).
- [ ] If `X-001` says Explore = Courses, use the courses API instead and rename the service.

## Acceptance criteria

- Users can filter topics and open a topic.
- Progress is saved and shown after reload.
