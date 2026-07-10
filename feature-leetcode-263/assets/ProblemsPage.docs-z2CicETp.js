import{B as e}from"./iframe-CX1og2HH.js";import{useMDXComponents as o}from"./index-Cj0cHQGW.js";import{b as a,C as n,a as d,A as c}from"./index-DWjQAehO.js";import{P as i,D as s,A as p,E as h,L as m,M as x}from"./ProblemsPage.stories-DsOlWMJW.js";import"./preload-helper-ASOJwovS.js";import"./index-Cd0CMK7K.js";import"./index-ClgnlDIS.js";import"./index-BQa5oByz.js";import"./createSvgIcon-COBrVubV.js";import"./memoTheme-DEhvJDub.js";import"./Close-BglbmrYK.js";import"./Search-DhZ6A0ej.js";import"./index-CrT6RIHi.js";import"./getThemeProps-DAS1NNjP.js";import"./Box-Cr1RtU3F.js";import"./ListItemButton-C2TyDsg7.js";import"./List-gkIamtFD.js";import"./useForkRef-C07sTitr.js";import"./ButtonBase-DzAwK4Lm.js";import"./useTimeout-CIbTRVPu.js";import"./CheckCircleOutline-azzrUKnt.js";import"./RadioButtonUnchecked-8OMrLtPu.js";import"./RemoveCircleOutline-CcL_TUSa.js";import"./Skeleton-Bsxz3MMZ.js";import"./Typography-DQ0W0Plv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Chip-Bqslj3gd.js";import"./useSlot-CG5cmEok.js";import"./mergeSlotProps-BHqEHcEW.js";import"./Button-B4StvXBN.js";import"./CircularProgress-DBb9Jpwp.js";import"./ListItemText-COmnmqNM.js";import"./MenuItem-BIjatb5h.js";import"./dividerClasses-CjVbS6M5.js";import"./Stack-MaMxd8Zn.js";import"./styled-BrG5HUNr.js";import"./useThemeProps-DRV1s6Cr.js";import"./Divider-D2p0_AUD.js";import"./LastPage-DLL5BiOC.js";import"./IconButton-7JV6FhH2.js";import"./Select-cKBvBf_8.js";import"./Menu-W_9Czk_K.js";import"./useSlotProps-Da643ieT.js";import"./Popover-OMyP2rGa.js";import"./Portal-poQLcLbm.js";import"./getReactElementRef-DuIqGZRD.js";import"./ownerWindow-Cp5qhQTh.js";import"./Grow-FzMJrpYr.js";import"./useTheme-BoJxZRW8.js";import"./utils-oBcr4ww4.js";import"./mergeSlotProps-CE6HEdWh.js";import"./debounce-Be36O1Ab.js";import"./Modal-Cb0AI1-v.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-qFWWY86U.js";import"./Paper-Q3NE90TK.js";import"./utils-BFxWB4YK.js";import"./useControlled-CJsU7hwy.js";import"./Toolbar-DR3TK1uD.js";import"./Drawer-DzdSJFHi.js";import"./TextField-Dp-Pz2Lh.js";import"./FormLabel-C6x_K1NT.js";import"./FormHelperText-DkC4VK2e.js";import"./FormControl-Cic76AJI.js";import"./isMuiElement-B5HVKxIh.js";import"./InputAdornment-CwE9g2O2.js";function l(t){const r={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...o(),...t.components};return e.jsxs(e.Fragment,{children:[`
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
`})})]})}function Ce(t={}){const{wrapper:r}={...o(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(l,{...t})}):l(t)}export{Ce as default};
