import{B as e}from"./iframe-BNSjcfNt.js";import{useMDXComponents as l}from"./index-C6D55451.js";import{b as a,C as n,a as d,A as c}from"./index-DXZQb8AI.js";import{P as i,D as s,A as p,E as h,L as m,M as x}from"./ProblemsPage.stories-LMVTLLC7.js";import"./preload-helper-DyUpdmRI.js";import"./index-GXM77MbO.js";import"./index-B440si1z.js";import"./index-BFk3RNQF.js";import"./createSvgIcon-Dj8y4V5W.js";import"./memoTheme-DBw7RWUi.js";import"./Close-DAxfXsgg.js";import"./Search-B30J62zi.js";import"./index-Cs2Zs4E-.js";import"./getThemeProps-CSBnE_kj.js";import"./Box-CIgn6KiE.js";import"./ListItemButton-C6imUTce.js";import"./List-Cb4UtVFR.js";import"./useForkRef-CnxwSjRO.js";import"./ButtonBase-BzA1GG5g.js";import"./useTimeout-BLyhA226.js";import"./CheckCircleOutline-BNVcUhsG.js";import"./RadioButtonUnchecked-1FCZV52B.js";import"./RemoveCircleOutline-4GkD6dOO.js";import"./Skeleton-if2qTyPw.js";import"./Typography-DoXSy7gn.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Chip-CW-Zdy5z.js";import"./useSlot-C7EhFcTE.js";import"./mergeSlotProps-C77WHapi.js";import"./Button-BUIcU4Iu.js";import"./CircularProgress-rSl1VZH6.js";import"./ListItemText-CNYU7iL8.js";import"./MenuItem-BR5_nezL.js";import"./dividerClasses-B_WQWJGD.js";import"./Stack-Cks6y9Qq.js";import"./styled-D4hiaYyM.js";import"./useThemeProps-dB-uPyfu.js";import"./Divider-DUHKZe3w.js";import"./LastPage-BVR7UDOw.js";import"./IconButton-Cl3RkJ1L.js";import"./Select-BsxVULbC.js";import"./Menu-DjDJoh1W.js";import"./useSlotProps-CYux4yBT.js";import"./Popover-CM3V7IwH.js";import"./Portal-C_7JX0vG.js";import"./getReactElementRef-CiAXNh-z.js";import"./ownerWindow-JC6BmS5B.js";import"./Grow-BDtsX9P5.js";import"./useTheme-D8Y0o9bs.js";import"./utils-DwhSo-BL.js";import"./mergeSlotProps-CmmYKtir.js";import"./debounce-Be36O1Ab.js";import"./Modal-BOLRwPIS.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-DpNVAzcp.js";import"./Paper-CN7VfzyX.js";import"./utils-CiqSlDFG.js";import"./useControlled-pDY-2P7O.js";import"./Toolbar-CbNZ8wln.js";import"./Drawer-Ll05X6PT.js";import"./TextField-ChBMYl69.js";import"./InputLabel-bYVgl35F.js";import"./FormLabel-qkWVkSPS.js";import"./FormHelperText-rKDy_ndI.js";import"./FormControl-DW4BmVVv.js";import"./isMuiElement-PIU_0uNg.js";import"./InputAdornment-ARH6ScBs.js";function o(t){const r={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...l(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:i}),`
`,e.jsx(r.h1,{id:"problemspage",children:"ProblemsPage"}),`
`,e.jsxs(r.p,{children:["Full-page organism that renders a searchable, filterable problem browser built with ",e.jsx(r.strong,{children:"Material UI"}),"."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"layout",children:"Layout"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{children:`┌──────────────────────────────────────────────────────┐
│ Problems                            X / Y Solved      │  header
│ 🔍 Search…  Difficulty ▾  Status ▾  Tag ▾  Clear      │  filter bar (desktop)
│ [Filters]   🔍 Search…                                │  filter bar (mobile)
│ # │ Title │ Difficulty │ Acceptance │ Status │ Action  │  table  (md+)
│ ● 1. Title   Easy • 49.2%                   [Solve]   │  list   (xs/sm)
│         No problems match your filters                │  empty state
└──────────────────────────────────────────────────────┘
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"stories",children:"Stories"}),`
`,e.jsx(r.h3,{id:"default",children:"Default"}),`
`,e.jsx(n,{of:s}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(r.h3,{id:"all-filters-applied",children:"All Filters Applied"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(r.h3,{id:"empty-state",children:"Empty State"}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(r.h3,{id:"loading-state",children:"Loading State"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(r.h3,{id:"mobile-view",children:"Mobile View"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsx(c,{of:i}),`
`,e.jsxs(r.p,{children:[`| Prop               | Type                   | Required | Description                                                                             |
| ------------------ | ---------------------- | -------- | --------------------------------------------------------------------------------------- |
| `,e.jsx(r.code,{children:"onSelectProblem"}),"  | ",e.jsx(r.code,{children:"(id: number) => void"}),` | ✅       | Fired when Solve is clicked                                                             |
| `,e.jsx(r.code,{children:"onNavigateToCode"})," | ",e.jsx(r.code,{children:"() => void"}),`           | ✅       | Fired when Review is clicked                                                            |
| `,e.jsx(r.code,{children:"problems"}),"         | ",e.jsx(r.code,{children:"Problem[]"}),"            | —        | Dataset to display. Defaults to the static file; pass API data or a fixture to override |"]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"architecture",children:"Architecture"}),`
`,e.jsx(r.h3,{id:"data-injection-via-props",children:"Data injection via props"}),`
`,e.jsxs(r.p,{children:["The component accepts a ",e.jsx(r.code,{children:"problems"})," prop so the data source is fully decoupled:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`// Default — uses the static dataset
<ProblemsPage onSelectProblem={fn} onNavigateToCode={fn} />

// API data — fetched by a parent, passed as prop
<ProblemsPage problems={apiProblems} onSelectProblem={fn} onNavigateToCode={fn} />

// Tests — inject a fixture directly, no module mocks needed
<ProblemsPage problems={FIXTURE} onSelectProblem={fn} onNavigateToCode={fn} />
`})}),`
`,e.jsxs(r.h3,{id:"hook--useproblemspage-problems-",children:["Hook — ",e.jsx(r.code,{children:"useProblemsPage({ problems })"})]}),`
`,e.jsxs(r.p,{children:["All state and derived data live in the hook. It receives ",e.jsx(r.code,{children:"problems"})," as a parameter and exposes:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`const {
  filteredProblems,
  solvedCount,
  totalCount,
  tagOptions,
  filterState,
  handleSearchChange,
  handleDifficultyChange,
  handleStatusChange,
  handleTagChange,
  handleClearFilters,
  drawerOpen,
  handleDrawerOpen,
  handleDrawerClose,
} = useProblemsPage({ problems });
`})}),`
`,e.jsxs(r.h3,{id:"status-filter--status_filter_map",children:["Status filter — ",e.jsx(r.code,{children:"STATUS_FILTER_MAP"})]}),`
`,e.jsx(r.p,{children:`Status matching uses a Record instead of scattered string comparisons.
Adding a new status only requires updating one object:`}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`const STATUS_FILTER_MAP: Record<Exclude<StatusFilter, 'All'>, ProblemStatus> = {
  Solved: 'solved',
  Attempted: 'attempted',
  Unsolved: 'unsolved',
};
`})}),`
`,e.jsxs(r.h3,{id:"tag-sentinel--all_tags_sentinel",children:["Tag sentinel — ",e.jsx(r.code,{children:"ALL_TAGS_SENTINEL"})]}),`
`,e.jsxs(r.p,{children:['The "no tag filter" state is handled in a single ',e.jsx(r.code,{children:"matchesTagFilter"}),` helper.
The sentinel never appears in the component template.`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`function matchesTagFilter(p: Problem, tagFilter: TagFilter): boolean {
  if (tagFilter === ALL_TAGS_SENTINEL) return true;
  return p.tags.includes(tagFilter);
}
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"filtering-logic",children:"Filtering logic"}),`
`,e.jsxs(r.p,{children:["All four filters are applied with ",e.jsx(r.code,{children:"&&"}),". A problem must match every active criterion."]}),`
`,e.jsxs(r.p,{children:[`| Filter     | Default | Options                                       |
| ---------- | ------- | --------------------------------------------- |
| Search     | `,e.jsx(r.code,{children:'""'}),`    | Free-text substring (title), debounced 300 ms |
| Difficulty | `,e.jsx(r.code,{children:'"All"'}),` | All · Easy · Medium · Hard                    |
| Status     | `,e.jsx(r.code,{children:'"All"'}),` | All · Solved · Attempted · Unsolved           |
| Tag        | `,e.jsx(r.code,{children:'"All"'})," | All · ",e.jsx(r.em,{children:"derived from dataset"}),"                  |"]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"visual-design",children:"Visual design"}),`
`,e.jsxs(r.p,{children:[`| Difficulty | Chip colour  | Status    | Icon                          |
| ---------- | ------------ | --------- | ----------------------------- |
| Easy       | `,e.jsx(r.code,{children:"success"})," 🟢 | solved    | ",e.jsx(r.code,{children:"CheckCircleOutline"}),` (green)  |
| Medium     | `,e.jsx(r.code,{children:"warning"})," 🟡 | attempted | ",e.jsx(r.code,{children:"RemoveCircleOutline"}),` (amber) |
| Hard       | `,e.jsx(r.code,{children:"error"})," 🔴   | unsolved  | ",e.jsx(r.code,{children:"RadioButtonUnchecked"})," (grey) |"]}),`
`,e.jsxs(r.p,{children:["Solved rows have a ",e.jsx(r.strong,{children:"4 px left border"})," in ",e.jsx(r.code,{children:"theme.palette.success.main"}),"."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"responsive-behaviour",children:"Responsive behaviour"}),`
`,e.jsxs(r.p,{children:[`| Breakpoint         | Filters               | Problems                  |
| ------------------ | --------------------- | ------------------------- |
| xs / sm (< 900 px) | Button → right Drawer | `,e.jsx(r.code,{children:"List"})," + ",e.jsx(r.code,{children:"ListItemButton"}),` |
| md+ (≥ 900 px)     | Inline filter bar     | `,e.jsx(r.code,{children:"Table"})," with 6 columns    |"]}),`
`,e.jsxs(r.p,{children:["All tap targets: ",e.jsx(r.code,{children:"minHeight: theme.spacing(5.5)"})," (≥ 44 px)."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.p,{children:[`| Element           | ARIA                                  |
| ----------------- | ------------------------------------- |
| Search field      | `,e.jsx(r.code,{children:'aria-label="Search problems"'}),`        |
| Difficulty select | `,e.jsx(r.code,{children:'aria-label="Difficulty filter"'}),`      |
| Status select     | `,e.jsx(r.code,{children:'aria-label="Status filter"'}),`          |
| Tag select        | `,e.jsx(r.code,{children:'aria-label="Tag filter"'}),`             |
| Table headers     | `,e.jsx(r.code,{children:'scope="col"'}),`                         |
| Solved/total chip | `,e.jsx(r.code,{children:'aria-label="X of Y problems solved"'}),` |
| Filter drawer     | `,e.jsx(r.code,{children:'aria-label="Filter drawer"'}),"          |"]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"file-structure",children:"File structure"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{children:`ProblemsPage/
├── ProblemsPage.tsx          # Page component
├── ProblemsPage.types.ts     # All TypeScript interfaces
├── ProblemsPage.constants.ts # Filter options, sentinel, config
├── ProblemsPage.hook.ts      # useProblemsPage — state & derived data
├── ProblemsPage.styles.ts    # MUI styled() / sx — no external CSS
├── ProblemsPage.utils.ts     # Pure helpers (chip colour, status icon, format)
├── ProblemsPage.test.tsx     # Vitest + Testing Library
├── ProblemsPage.stories.tsx  # Storybook CSF stories
└── ProblemsPage.docs.mdx     # This file
`})})]})}function De(t={}){const{wrapper:r}={...l(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(o,{...t})}):o(t)}export{De as default};
