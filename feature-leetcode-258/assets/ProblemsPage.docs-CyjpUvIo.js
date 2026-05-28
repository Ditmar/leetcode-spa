import{B as e}from"./iframe-BcLFODxV.js";import{useMDXComponents as o}from"./index-Cy1kQqrs.js";import{b as c,C as i,a as d,A as a}from"./index-BbbKbWWQ.js";import{P as r,D as t,A as h,E as p,L as m,M as x}from"./ProblemsPage.stories-D22i5BAj.js";import"./preload-helper-DtVaB8p0.js";import"./index-B18P0rhJ.js";import"./index-BlpTPRrM.js";import"./index-Cn_BuB4i.js";import"./CheckCircleOutline-C81uB7w5.js";import"./createSvgIcon-BasbyxRz.js";import"./memoTheme-B0FnsNVF.js";import"./Close-CZmydSCb.js";import"./RadioButtonUnchecked-BKY--Dax.js";import"./List-B_JrJGxg.js";import"./MenuItem-BSvX6VaS.js";import"./useForkRef-8vCyo-9G.js";import"./ButtonBase-QHK5dPtL.js";import"./useTimeout-DTtLEMDt.js";import"./useSlot-DeqHp-FD.js";import"./mergeSlotProps-CpOmAr42.js";import"./Typography-YbZLHlm2.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Search-BXSlma8F.js";import"./FormHelperText-DkYLyGOd.js";import"./index-giZMlHNd.js";import"./getThemeProps-BznHRFlU.js";import"./ListItemButton-BBAB7CZM.js";import"./Box-mLYzd1tZ.js";import"./useTheme-Bd62Dxcl.js";import"./Chip-BRpEap09.js";import"./Button-Dcry3tmm.js";import"./CircularProgress-tPaWz8ko.js";import"./Stack-B0RNUgpH.js";import"./useThemeProps-2ZZFj5kK.js";import"./Divider-B5c_zU6P.js";import"./TextField-D6nAHhoE.js";import"./ownerWindow-C6Tulsdy.js";import"./Portal-DdBRagNy.js";import"./getReactElementRef-Dnih7ggD.js";import"./FormLabel-XArYVLXv.js";import"./Menu-D5T7XS1Q.js";import"./useSlotProps-BMJsui4b.js";import"./Paper-CqDRkR4i.js";import"./Grow-C3Xknr7B.js";import"./Fade-BOHUF9jn.js";import"./mergeSlotProps-DIL_IHD6.js";import"./Modal-BZuI25_z.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-NSD7cqhl.js";import"./Drawer-Dbjpyvan.js";import"./IconButton-CMV9yqKg.js";function l(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(c,{of:r}),`
`,e.jsx(n.h1,{id:"problemspage",children:"ProblemsPage"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ProblemsPage"}),` is a full-page organism component that renders a searchable,
filterable, and paginated browser for coding problems. It is built entirely with
`,e.jsx(n.strong,{children:"Material UI"}),` and follows the project's Component-Driven Development (CDD)
conventions.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`┌─────────────────────────────────────────────────────┐
│  Problems                          2 / 10 Solved    │  ← Header
├─────────────────────────────────────────────────────┤
│  🔍 Search…   Difficulty ▾  Status ▾  Tag ▾  Clear  │  ← Filter bar (desktop)
│  [Filters]  🔍 Search…                              │  ← Filter bar (mobile)
├─────────────────────────────────────────────────────┤
│  #   Title               Difficulty  Accept  Action │  ← Table (desktop)
│  ✅  Two Sum             Easy        49.2%   Review  │
│  ─   Add Two Numbers     Medium      41.8%   Solve   │
│  ○   Longest Substring   Medium      33.9%   Solve   │
│  …                                                  │
│                                                     │
│         No problems match your filters              │  ← Empty state
│               [ Clear Filters ]                     │
└─────────────────────────────────────────────────────┘
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"stories",children:"Stories"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(n.p,{children:"All problems are displayed with no active filters."}),`
`,e.jsx(i,{of:t}),`
`,e.jsx(d,{of:t}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"all-filters-applied",children:"All Filters Applied"}),`
`,e.jsx(n.p,{children:`Difficulty, Status, and Tag filters are all active simultaneously. Only problems
that match every criterion are shown.`}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"empty-state",children:"Empty State"}),`
`,e.jsxs(n.p,{children:[`When no problems match the current filters, a centred message is displayed along
with a `,e.jsx(n.strong,{children:"Clear Filters"}),` button that resets all filter controls to their default
values.`]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"loading-state",children:"Loading State"}),`
`,e.jsxs(n.p,{children:[`A dimmed visual representation of the loading state. In production, replace the
overlay with MUI `,e.jsx(n.code,{children:"Skeleton"})," components inside each table row or list item."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"mobile-view",children:"Mobile View"}),`
`,e.jsxs(n.p,{children:["On screens narrower than the ",e.jsx(n.code,{children:"md"})," breakpoint (< 900 px):"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The filter bar collapses into a ",e.jsx(n.strong,{children:"Filters"}),` button that opens a right-anchored
`,e.jsx(n.code,{children:"Drawer"})," (width ",e.jsx(n.code,{children:"theme.spacing(36)"}),")."]}),`
`,e.jsxs(n.li,{children:["The desktop ",e.jsx(n.code,{children:"Table"})," is replaced by a ",e.jsx(n.code,{children:"List"})," of ",e.jsx(n.code,{children:"ListItemButton"})," rows."]}),`
`,e.jsxs(n.li,{children:["A full-width ",e.jsx(n.code,{children:"TextField"})," for search remains always visible above the list."]}),`
`]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(a,{of:r}),`
`,e.jsxs(n.p,{children:[`| Prop               | Type                   | Required | Description                                             |
| ------------------ | ---------------------- | -------- | ------------------------------------------------------- |
| `,e.jsx(n.code,{children:"onSelectProblem"}),"  | ",e.jsx(n.code,{children:"(id: number) => void"})," | ✅       | Called when the user clicks ",e.jsx(n.strong,{children:"Solve"}),` on a problem row. |
| `,e.jsx(n.code,{children:"onNavigateToCode"})," | ",e.jsx(n.code,{children:"() => void"}),"           | ✅       | Called when the user clicks ",e.jsx(n.strong,{children:"Review"})," on a solved row. |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"file-structure",children:"File Structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`ProblemsPage/
├── ProblemsPage.tsx             # Main page component
├── ProblemsPage.types.ts        # Props, filter state, and hook return interfaces
├── ProblemsPage.constants.ts    # Filter option arrays and config constants
├── ProblemsPage.hook.ts         # useProblemsPage — all business logic
├── ProblemsPage.styles.ts       # MUI styled() components and sx helpers
├── ProblemsPage.utils.ts        # getDifficultyChipColor, getStatusIconName, formatAcceptance
├── ProblemsPage.test.tsx        # Jest / Testing Library unit tests
├── ProblemsPage.stories.tsx     # Storybook stories in CSF format
└── ProblemsPage.docs.mdx        # This file
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"architecture",children:"Architecture"}),`
`,e.jsxs(n.h3,{id:"hook--useproblemspage",children:["Hook — ",e.jsx(n.code,{children:"useProblemsPage"})]}),`
`,e.jsxs(n.p,{children:["All filter state and derived data live in the ",e.jsx(n.code,{children:"useProblemsPage"}),` hook so the
component template stays declarative and easy to test in isolation.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const {
  filteredProblems, // Problem[] — result of applying all active filters
  solvedCount, // number — problems with status === 'solved'
  totalCount, // number — full dataset length
  tagOptions, // string[] — unique tags derived from all problems
  filterState, // FilterState — { searchQuery, difficultyFilter, statusFilter, tagFilter }
  handleSearchChange,
  handleDifficultyChange,
  handleStatusChange,
  handleTagChange,
  handleClearFilters,
  drawerOpen,
  handleDrawerOpen,
  handleDrawerClose,
} = useProblemsPage();
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Search debounce"})," — the raw ",e.jsx(n.code,{children:"searchQuery"})," is debounced by ",e.jsx(n.strong,{children:"300 ms"}),` inside
`,e.jsx(n.code,{children:"useProblemsPage"})," before it is applied to ",e.jsx(n.code,{children:"filteredProblems"}),`, preventing
expensive re-renders on every keystroke.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tag options"})," — derived at hook initialisation via:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const tagOptions = useMemo(() => Array.from(new Set(PROBLEMS.flatMap((p) => p.tags))).sort(), []);
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"filtering-logic",children:"Filtering Logic"}),`
`,e.jsxs(n.p,{children:["All four filters are applied with a logical ",e.jsx(n.code,{children:"&&"}),` chain. A problem must satisfy
every active criterion to appear in the list.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`PROBLEMS.filter(
  (p) =>
    matchesSearch(p, debouncedSearch) &&
    matchesDifficulty(p, difficultyFilter) &&
    matchesStatus(p, statusFilter) &&
    matchesTag(p, tagFilter)
);
`})}),`
`,e.jsxs(n.p,{children:[`| Filter     | Default | Options                             |
| ---------- | ------- | ----------------------------------- |
| Search     | `,e.jsx(n.code,{children:'""'}),`    | Free-text substring (title)         |
| Difficulty | `,e.jsx(n.code,{children:'"All"'}),` | All · Easy · Medium · Hard          |
| Status     | `,e.jsx(n.code,{children:'"All"'}),` | All · Solved · Attempted · Unsolved |
| Tag        | `,e.jsx(n.code,{children:'"All"'})," | All · ",e.jsx(n.em,{children:"derived from dataset"}),"        |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"visual-design",children:"Visual Design"}),`
`,e.jsx(n.h3,{id:"difficulty-chips",children:"Difficulty Chips"}),`
`,e.jsxs(n.p,{children:[`| Difficulty | MUI Chip colour | Visual   |
| ---------- | --------------- | -------- |
| Easy       | `,e.jsx(n.code,{children:"success"}),`       | 🟢 Green |
| Medium     | `,e.jsx(n.code,{children:"warning"}),`       | 🟡 Amber |
| Hard       | `,e.jsx(n.code,{children:"error"}),"         | 🔴 Red   |"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// ProblemsPage.utils.ts
getDifficultyChipColor('Easy'); // → 'success'
getDifficultyChipColor('Medium'); // → 'warning'
getDifficultyChipColor('Hard'); // → 'error'
`})}),`
`,e.jsx(n.h3,{id:"status-icons",children:"Status Icons"}),`
`,e.jsxs(n.p,{children:[`| Status      | Icon component             | Colour     |
| ----------- | -------------------------- | ---------- |
| `,e.jsx(n.code,{children:"solved"}),"    | ",e.jsx(n.code,{children:"CheckCircleOutlineIcon"}),"   | ",e.jsx(n.code,{children:"success"}),`  |
| `,e.jsx(n.code,{children:"attempted"})," | ",e.jsx(n.code,{children:"RemoveCircleOutlineIcon"}),"  | ",e.jsx(n.code,{children:"warning"}),`  |
| `,e.jsx(n.code,{children:"unsolved"}),"  | ",e.jsx(n.code,{children:"RadioButtonUncheckedIcon"})," | ",e.jsx(n.code,{children:"disabled"})," |"]}),`
`,e.jsx(n.h3,{id:"solved-row-accent",children:"Solved Row Accent"}),`
`,e.jsxs(n.p,{children:["Desktop table rows and mobile list items where ",e.jsx(n.code,{children:"status === 'solved'"}),` receive a
`,e.jsx(n.strong,{children:"4 px left border"})," in ",e.jsx(n.code,{children:"theme.palette.success.main"}),` and a subtle
`,e.jsx(n.code,{children:"theme.palette.action.selected"})," background tint — matching the Figma reference."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"responsive-behaviour",children:"Responsive Behaviour"}),`
`,e.jsxs(n.p,{children:[`| Breakpoint                | Filter UI               | Problem UI                |
| ------------------------- | ----------------------- | ------------------------- |
| `,e.jsx(n.code,{children:"xs"})," / ",e.jsx(n.code,{children:"sm"})," (< 900 px)    | Filters button → Drawer | ",e.jsx(n.code,{children:"List"})," + ",e.jsx(n.code,{children:"ListItemButton"}),` |
| `,e.jsx(n.code,{children:"md"})," and above (≥ 900 px) | Inline filter bar       | ",e.jsx(n.code,{children:"Table"})," with 6 columns    |"]}),`
`,e.jsxs(n.p,{children:["All tap targets meet the ",e.jsx(n.strong,{children:"44 × 44 px minimum"}),` (enforced via
`,e.jsx(n.code,{children:"minHeight: theme.spacing(5.5)"})," on every interactive element)."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:[`| Element             | ARIA attribute / scope                               |
| ------------------- | ---------------------------------------------------- |
| Search `,e.jsx(n.code,{children:"TextField"}),"  | ",e.jsx(n.code,{children:"inputProps={{ 'aria-label': 'Search problems' }}"}),`   |
| Difficulty `,e.jsx(n.code,{children:"Select"})," | ",e.jsx(n.code,{children:"inputProps={{ 'aria-label': 'Difficulty filter' }}"}),` |
| Status `,e.jsx(n.code,{children:"Select"}),"     | ",e.jsx(n.code,{children:"inputProps={{ 'aria-label': 'Status filter' }}"}),`     |
| Tag `,e.jsx(n.code,{children:"Select"}),"        | ",e.jsx(n.code,{children:"inputProps={{ 'aria-label': 'Tag filter' }}"}),`        |
| Table header cells  | `,e.jsx(n.code,{children:'scope="col"'})," on every ",e.jsx(n.code,{children:"<StickyHeaderCell>"}),`          |
| Solved/total `,e.jsx(n.code,{children:"Chip"})," | ",e.jsx(n.code,{children:'aria-label="X of Y problems solved"'}),`                |
| Filter `,e.jsx(n.code,{children:"Drawer"}),"     | ",e.jsx(n.code,{children:'aria-label="Filter drawer"'}),`                         |
| Close `,e.jsx(n.code,{children:"IconButton"}),"  | ",e.jsx(n.code,{children:'aria-label="Close filters"'}),"                         |"]}),`
`,e.jsxs(n.p,{children:["The component passes ",e.jsx(n.code,{children:"axe"})," / ",e.jsx(n.code,{children:"jest-axe"})," checks out of the box. Run:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx axe-cli http://localhost:6006/iframe.html?id=pages-problemspage--default
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"styling-conventions",children:"Styling Conventions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["No hardcoded ",e.jsx(n.code,{children:"px"})," values"]})," — all spacing uses ",e.jsx(n.code,{children:"theme.spacing()"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No external CSS files"})," — all styles live in ",e.jsx(n.code,{children:"ProblemsPage.styles.ts"}),` via
MUI `,e.jsx(n.code,{children:"styled()"})," components or exported ",e.jsx(n.code,{children:"sx"})," objects."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styled()"})," components accept a ",e.jsx(n.code,{children:"isSolved"}),` transient prop
(`,e.jsx(n.code,{children:"shouldForwardProp"}),") to avoid forwarding it to the DOM."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"unit-tests",children:"Unit Tests"}),`
`,e.jsx(n.p,{children:"Run the test suite with:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx jest ProblemsPage/ProblemsPage.test.tsx --coverage
`})}),`
`,e.jsxs(n.p,{children:[`| Test case                                 | What it asserts                                   |
| ----------------------------------------- | ------------------------------------------------- |
| Renders all problems by default           | All 5 mock problems visible on mount              |
| Displays solved / total counter           | Header chip reads "1 / 5 Solved"                  |
| Search filter (debounced)                 | Only matching titles remain after 300 ms          |
| Difficulty filter                         | Only Hard problems shown after selecting Hard     |
| Status filter                             | Only Solved problems shown after selecting Solved |
| Combined filters                          | Easy + Unsolved leaves only Valid Parentheses     |
| Empty state                               | Message shown when nothing matches                |
| `,e.jsx(n.code,{children:"onSelectProblem"}),` called on Solve click   | Mock function receives the correct problem id     |
| `,e.jsx(n.code,{children:"onNavigateToCode"}),` called on Review click | Mock function invoked for a solved problem        |
| Clear Filters resets state                | All problems visible again after clearing         |`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(n.p,{children:`| Version | Change                                                        |
| ------- | ------------------------------------------------------------- |
| 1.0.0   | Initial implementation — MUI migration from Tailwind / shadcn |`})]})}function pe(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{pe as default};
