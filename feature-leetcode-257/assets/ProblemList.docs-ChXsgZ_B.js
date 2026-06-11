import{A as e}from"./iframe-j1SiIiu4.js";import{useMDXComponents as t}from"./index-BOyF_Qhi.js";import{b as o,C as s,a as d}from"./index-DvmVGRJr.js";import{P as l,D as c,A as h,S as a,M as x,E as p}from"./ProblemList.stories-BmVIIoGx.js";import"./preload-helper-CC1qWaVK.js";import"./index-Bh5zpOo9.js";import"./index-CkuxIHyC.js";import"./index-B2m9EL26.js";import"./createSvgIcon-JfEpPgqg.js";import"./memoTheme-CZg9tk5i.js";import"./CheckCircleOutline-CpJyBthj.js";import"./RadioButtonUnchecked-DMesvQjA.js";import"./Box-BiEyWhJV.js";import"./ListItemButton-BaAUik-c.js";import"./List-DOlXIIot.js";import"./useForkRef-CazU6g_h.js";import"./ButtonBase-z-9BQ3in.js";import"./useTimeout-DKc6Zxd_.js";import"./useTheme-ac9a9fyS.js";import"./index-rrheQ3-Q.js";import"./getThemeProps-CB4QQQAA.js";import"./Typography-DxprhRWi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Drawer-D8uSIYYh.js";import"./useSlot-CdTbEdiI.js";import"./mergeSlotProps-D-SuvJ1-.js";import"./mergeSlotProps-DNbbOuZa.js";import"./Fade-Oi8d0Vnu.js";import"./getReactElementRef-O3yfAmEx.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-D6APHS9I.js";import"./Portal-DoRFWLvo.js";import"./Modal-DGoZBhvD.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Paper-DvRtoG3Z.js";function n(i){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(r.h1,{id:"problemlist",children:"ProblemList"}),`
`,e.jsxs(r.p,{children:["A ",e.jsx(r.strong,{children:"scrollable sidebar"}),` organism that renders a list of coding problems with status
indicators, difficulty labels, and acceptance rates.
Built with `,e.jsx(r.strong,{children:"Material UI"})," and the project's centralised design-token system."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(r.p,{children:[`| Feature | Detail |
| ------- | ------ |
| Status icons | Solved → green `,e.jsx(r.code,{children:"CheckCircleOutline"}),", Attempted → amber ",e.jsx(r.code,{children:"RemoveCircleOutline"}),", Unsolved → grey ",e.jsx(r.code,{children:"RadioButtonUnchecked"}),` |
| Difficulty | Coloured plain text — Easy `,e.jsx(r.code,{children:"#00C950"}),", Medium ",e.jsx(r.code,{children:"#F0B100"}),", Hard ",e.jsx(r.code,{children:"#FB2C36"}),` |
| Selection | Active item: `,e.jsx(r.code,{children:"3.52 px"})," blue left border + ",e.jsx(r.code,{children:"#EFF6FF"}),` background |
| Responsive | Desktop ≥ 768 px: fixed sidebar. Mobile < 768 px: Drawer toggled by a Fab |
| Accessibility | `,e.jsx(r.code,{children:"aria-current"}),", icon ",e.jsx(r.code,{children:"aria-label"}),`, keyboard navigation |
| Font | `,e.jsx(r.strong,{children:"Inter"})," (500 / 600) — registered in ",e.jsx(r.code,{children:"theme.ts"})," ",e.jsx(r.code,{children:"@font-face"})," |"]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"quick-start",children:"Quick Start"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { ProblemList } from '@/pages/ProblemList';
import type { Problem } from '@/pages/ProblemList/ProblemList.types';

const problems: Problem[] = [
  { id: 1, title: 'Two Sum', difficulty: 'Easy', acceptanceRate: 49.2, status: 'solved' },
  { id: 2, title: 'Add Two Numbers', difficulty: 'Medium', acceptanceRate: 41.8, status: 'attempted' },
];

export function App() {
  const [selected, setSelected] = React.useState(1);
  return (
    <ProblemList
      problems={problems}
      selectedProblemId={selected}
      onSelectProblem={setSelected}
    />
  );
}
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"stories",children:"Stories"}),`
`,e.jsx(r.h3,{id:"default",children:"Default"}),`
`,e.jsx(r.p,{children:"Full list with mixed statuses; problem 1 selected."}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(r.h3,{id:"all-statuses",children:"All Statuses"}),`
`,e.jsx(r.p,{children:"Shows all three status icon variants."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(r.h3,{id:"selected-item",children:"Selected Item"}),`
`,e.jsx(r.p,{children:"Problem 3 pre-selected — blue left border + light blue background."}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(r.h3,{id:"mobile-drawer",children:"Mobile Drawer"}),`
`,e.jsx(r.p,{children:"Viewport below 768 px: sidebar replaced by Drawer + Fab."}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(r.h3,{id:"empty-list",children:"Empty List"}),`
`,e.jsxs(r.p,{children:["Empty state when ",e.jsx(r.code,{children:"problems"})," is an empty array."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"controls",children:"Controls"}),`
`,e.jsx(d,{}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"prop-reference",children:"Prop Reference"}),`
`,e.jsx(r.h3,{id:"problemlistprops",children:"ProblemListProps"}),`
`,e.jsxs(r.p,{children:[`| Prop | Type | Required | Description |
| ---- | ---- | :------: | ----------- |
| `,e.jsx(r.code,{children:"problems"})," | ",e.jsx(r.code,{children:"Problem[]"}),` | ✓ | Array of problem objects to display |
| `,e.jsx(r.code,{children:"selectedProblemId"})," | ",e.jsx(r.code,{children:"number"}),` | ✓ | ID of the currently highlighted problem |
| `,e.jsx(r.code,{children:"onSelectProblem"})," | ",e.jsx(r.code,{children:"(id: number) => void"})," | ✓ | Callback fired when a row is clicked |"]}),`
`,e.jsx(r.h3,{id:"problem",children:"Problem"}),`
`,e.jsxs(r.p,{children:[`| Field | Type | Description |
| ----- | ---- | ----------- |
| `,e.jsx(r.code,{children:"id"})," | ",e.jsx(r.code,{children:"number"}),` | Unique identifier |
| `,e.jsx(r.code,{children:"title"})," | ",e.jsx(r.code,{children:"string"}),` | Display name |
| `,e.jsx(r.code,{children:"difficulty"})," | ",e.jsx(r.code,{children:"'Easy' \\| 'Medium' \\| 'Hard'"}),` | Difficulty level |
| `,e.jsx(r.code,{children:"acceptanceRate"})," | ",e.jsx(r.code,{children:"number"})," | Percentage value (e.g. ",e.jsx(r.code,{children:"49.2"}),`) |
| `,e.jsx(r.code,{children:"status"})," | ",e.jsx(r.code,{children:"'solved' \\| 'attempted' \\| 'unsolved'"})," | User progress |"]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsxs(r.p,{children:["Tokens live in ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"src/style-library/theme/theme.ts"})})," → ",e.jsx(r.code,{children:"problemListTokens"}),`.
CSS custom properties live in `,e.jsx(r.strong,{children:e.jsx(r.code,{children:"src/style-library/theme/colors.css"})})," → ",e.jsx(r.code,{children:"--problem-list-*"}),"."]}),`
`,e.jsxs(r.p,{children:[`| Token path | Figma value | Purpose |
| ---------- | ----------- | ------- |
| `,e.jsx(r.code,{children:"dimensions.containerWidth"})," | ",e.jsx(r.code,{children:"331.96 px"}),` | Sidebar width |
| `,e.jsx(r.code,{children:"dimensions.containerHeight"})," | ",e.jsx(r.code,{children:"735.47 px"}),` | Sidebar height |
| `,e.jsx(r.code,{children:"dimensions.borderRightWidth"})," | ",e.jsx(r.code,{children:"1.17 px"}),` | Right edge border |
| `,e.jsx(r.code,{children:"dimensions.headerHeight"})," | ",e.jsx(r.code,{children:"45.14 px"}),` | Header bar height |
| `,e.jsx(r.code,{children:"dimensions.itemHeight"})," | ",e.jsx(r.code,{children:"62.15 px"}),` | Each problem row height |
| `,e.jsx(r.code,{children:"dimensions.itemBorderBottomWidth"})," | ",e.jsx(r.code,{children:"1.17 px"}),` | Row separator |
| `,e.jsx(r.code,{children:"dimensions.selectedBorderLeftWidth"})," | ",e.jsx(r.code,{children:"3.52 px"}),` | Active left border |
| `,e.jsx(r.code,{children:"dimensions.drawerWidth"})," | ",e.jsx(r.code,{children:"36"})," (× ",e.jsx(r.code,{children:"theme.spacing"}),`) | Mobile drawer width |
| `,e.jsx(r.code,{children:"colors.selectedBackground"})," | ",e.jsx(r.code,{children:"#EFF6FF"}),` | Active row background |
| `,e.jsx(r.code,{children:"colors.selectedBorderColor"})," | ",e.jsx(r.code,{children:"#2B7FFF"}),` | Active left border color |
| `,e.jsx(r.code,{children:"colors.easy / medium / hard"})," | ",e.jsx(r.code,{children:"#00C950 / #F0B100 / #FB2C36"}),` | Difficulty text colors |
| `,e.jsx(r.code,{children:"typography.header"}),` | Inter 600 14 px / 20 px | "Problems" title |
| `,e.jsx(r.code,{children:"typography.problemNumber"})," | Inter 500 12 px / 16 px | Index prefix (e.g. ",e.jsx(r.code,{children:"1."}),`) |
| `,e.jsx(r.code,{children:"typography.problemTitle"}),` | Inter 500 12 px / 16 px | Problem name |
| `,e.jsx(r.code,{children:"typography.meta"})," | Inter 500 10 px / 15 px | Difficulty + acceptance row |"]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Every ",e.jsx(r.code,{children:"ListItemButton"})," has a descriptive ",e.jsx(r.code,{children:"aria-label"})," including title, difficulty, and acceptance rate."]}),`
`,e.jsxs(r.li,{children:["The selected item receives ",e.jsx(r.code,{children:'aria-current="true"'}),"."]}),`
`,e.jsxs(r.li,{children:["Status icons carry ",e.jsx(r.code,{children:"aria-label"}),": ",e.jsx(r.code,{children:'"Solved"'}),", ",e.jsx(r.code,{children:'"Attempted"'}),", ",e.jsx(r.code,{children:'"Unsolved"'}),"."]}),`
`,e.jsxs(r.li,{children:["All items are keyboard-focusable and activatable via ",e.jsx(r.code,{children:"Enter"})," / ",e.jsx(r.code,{children:"Space"}),"."]}),`
`,e.jsxs(r.li,{children:["Mobile Fab: ",e.jsx(r.code,{children:'aria-label="Open problems list"'}),"."]}),`
`]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"file-structure",children:"File Structure"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{children:`src/pages/ProblemList/
├── ProblemList.tsx           # Main component
├── ProblemList.types.ts      # TypeScript interfaces
├── ProblemList.constants.ts  # Mock data (tokens live in theme.ts)
├── ProblemList.hook.ts       # useProblemList hook
├── ProblemList.styles.ts     # MUI styled() — imports problemListTokens
├── ProblemList.utils.ts      # Pure helpers — imports problemListTokens
├── ProblemList.test.tsx      # Vitest + Testing Library
├── ProblemList.stories.tsx   # Storybook 9 CSF
└── ProblemList.docs.mdx      # This file
`})}),`
`,e.jsx(r.h2,{id:"related-files-modified",children:"Related files modified"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{children:`src/style-library/theme/theme.ts    # Added: problemListTokens export + Inter @font-face
src/style-library/theme/colors.css  # Added: --problem-list-* CSS custom properties
`})})]})}function J(i={}){const{wrapper:r}={...t(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(n,{...i})}):n(i)}export{J as default};
