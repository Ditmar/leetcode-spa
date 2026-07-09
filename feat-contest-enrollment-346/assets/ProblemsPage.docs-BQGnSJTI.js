import{B as e}from"./iframe-CHN44os1.js";import{useMDXComponents as o}from"./index-DIxH3EJ_.js";import{b as a,C as n,a as d,A as c}from"./index-DSQZhbuJ.js";import{P as i,D as s,A as p,E as h,L as m,M as x}from"./ProblemsPage.stories-DlRsPc2-.js";import"./preload-helper-DMzYX5Yq.js";import"./index-DTrzIFFr.js";import"./index-DTCEip5B.js";import"./index-CAYRkcZ-.js";import"./createSvgIcon-Dx2CrnX3.js";import"./memoTheme-BSGq_kzm.js";import"./Close-CZRaSmJG.js";import"./Search-ButqLrcL.js";import"./index-BvrQxstx.js";import"./getThemeProps-BfdAU-bx.js";import"./Box-1JC36yOX.js";import"./ListItemButton-DPXg6rYE.js";import"./List-DJLV91Y4.js";import"./useForkRef-BuU676MJ.js";import"./ButtonBase-DiI9h6zg.js";import"./useTimeout-BhvTWZ6H.js";import"./CheckCircleOutline-CKi67kw4.js";import"./RadioButtonUnchecked-BPm3Gyq0.js";import"./RemoveCircleOutline-BzbpCVXg.js";import"./Skeleton-DOeTjDhM.js";import"./Typography-OEVPT_GD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Chip-CIrr8Vfg.js";import"./useSlot-CzoGl2Tr.js";import"./mergeSlotProps-Cq1hkp_v.js";import"./Button-BG4UtU_q.js";import"./CircularProgress-DhOY9PJ0.js";import"./ListItemText-TZMyFBl5.js";import"./MenuItem-DGw0_7vm.js";import"./dividerClasses-B5_IeAQO.js";import"./Stack-DP6AdtBt.js";import"./styled-DAXZZfZN.js";import"./useThemeProps-BaQI8Vvj.js";import"./Divider-B_0zt28o.js";import"./LastPage-wF0RV2bt.js";import"./IconButton-DsaCOY50.js";import"./Select-ZzfdVnPd.js";import"./Menu-BAJsUTb-.js";import"./useSlotProps-Db9TaQLV.js";import"./Popover-CxIE6iss.js";import"./Portal-E6ryEt2B.js";import"./getReactElementRef-DTtEw1E_.js";import"./ownerWindow-D3YqGZ1B.js";import"./Grow-B0JcnmnJ.js";import"./useTheme-Dg1uBLUL.js";import"./utils-BkaD4ThF.js";import"./mergeSlotProps-ChmpUGo8.js";import"./debounce-Be36O1Ab.js";import"./Modal-CieMqkkM.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-C8FvEqLN.js";import"./Paper-ByrO4jrs.js";import"./utils-uZbnogSK.js";import"./useControlled-BOIPrY5P.js";import"./Toolbar-Dc-w-BTK.js";import"./Drawer-C8twy_9m.js";import"./TextField-C1bpTzxO.js";import"./FormLabel-gNmLEBDP.js";import"./FormHelperText-MEMLIxZD.js";import"./FormControl-BUXo4IT5.js";import"./isMuiElement-DTQZABMQ.js";import"./InputAdornment-DCmrz3E2.js";function l(t){const r={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...o(),...t.components};return e.jsxs(e.Fragment,{children:[`
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
