import{A as e}from"./iframe-BQx6TL1m.js";import{useMDXComponents as r}from"./index-D3dwH85C.js";import{b as l,A as o,C as t}from"./index-DtmIj44V.js";import{P as c,D as d,A as a,E as h}from"./ProblemList.stories-TZ5WtY8w.js";import"./preload-helper-CC1qWaVK.js";import"./index-OKRSMc7U.js";import"./index-BX_0-3K6.js";import"./index-G9CdhvlA.js";import"./CheckCircleOutline-C94ag4KH.js";import"./createSvgIcon-CGUuAVc9.js";import"./memoTheme-v_dsB2Ar.js";import"./RadioButtonUnchecked-p01HCDNQ.js";import"./Box-ClY2lvP5.js";import"./Typography-CNuKNtlX.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./List-BZyPJap6.js";function i(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(n.h1,{id:"problemlist--complete-technical-reference",children:"ProblemList — Complete Technical Reference"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ProblemList"})," component is a left-side navigation sidebar for listing, displaying, and selecting coding problems in a LeetCode-style interface. It is built on ",e.jsx(n.strong,{children:"React + TypeScript + Material UI"}),", with pixel-perfect styles calibrated directly from Figma Dev Mode."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#file-structure",children:"File Structure"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#installation--dependencies",children:"Installation & Dependencies"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#props--types",children:"Props & Types"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#basic-usage",children:"Basic Usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#internal-architecture",children:"Internal Architecture"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#style-system",children:"Style System"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#constants--maps",children:"Constants & Maps"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#utilities",children:"Utilities"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#internal-hook",children:"Internal Hook"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#storybook-stories",children:"Storybook Stories"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tests",children:"Tests"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#technical-decisions",children:"Technical Decisions"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#extension-guide",children:"Extension Guide"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ProblemList"})," renders a fixed sidebar column with a scrollable list of coding problems. Each row displays:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.strong,{children:"status icon"})," (solved / attempted / unsolved)"]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.strong,{children:"sequential number"})," and ",e.jsx(n.strong,{children:"title"})," of the problem"]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.strong,{children:"colored difficulty tag"})," (Easy / Medium / Hard)"]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.strong,{children:"acceptance rate"})," percentage"]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.strong,{children:"vertical blue bar"})," on the currently selected item"]}),`
`]}),`
`,e.jsxs(n.p,{children:["The component is ",e.jsx(n.strong,{children:"fully controlled"}),": it holds no selection state of its own. The parent component decides which problem is selected via the ",e.jsx(n.code,{children:"selectedProblemId"})," prop and reacts to changes through the ",e.jsx(n.code,{children:"onSelectProblem"})," callback."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"file-structure",children:"File Structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`ProblemList/
├── ProblemList.tsx          # Main React component
├── ProblemList.types.ts     # TypeScript interfaces and types
├── ProblemList.styles.ts    # MUI style objects (sx props)
├── ProblemList.constants.ts # Static maps: icons, colors
├── ProblemList.utils.ts     # Pure helper functions
├── ProblemList.hook.ts      # Hook for mobile drawer state
├── ProblemList.stories.tsx  # Storybook stories
├── ProblemList.test.tsx     # Tests with Vitest + Testing Library
└── ProblemList.docs.mdx     # This reference
`})}),`
`,e.jsx(n.p,{children:"Each file has a single responsibility. This separation ensures that changes are isolated and that the linter does not penalize unnecessary cross-imports."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"installation--dependencies",children:"Installation & Dependencies"}),`
`,e.jsx(n.p,{children:"The component requires the following dependencies in your project:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Material UI (base components and style system)
npm install @mui/material @emotion/react @emotion/styled

# Material UI icons
npm install @mui/icons-material

# React (peer dependency)
npm install react react-dom
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Minimum recommended versions:"})}),`
`,e.jsx(n.p,{children:`| Package | Minimum version |
|---|---|
| react | 18.x |
| @mui/material | 5.x |
| @mui/icons-material | 5.x |
| typescript | 5.x |`}),`
`,e.jsxs(n.p,{children:["No custom context provider is required. If the project uses MUI's ",e.jsx(n.code,{children:"ThemeProvider"}),", the component automatically respects the global theme for anything not overridden by local styles."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props--types",children:"Props & Types"}),`
`,e.jsx(n.h3,{id:"problemlistprops",children:e.jsx(n.code,{children:"ProblemListProps"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface ProblemListProps {
  problems: Problem[];
  selectedProblemId?: number;
  onSelectProblem: (id: number) => void;
}
`})}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Required | Description |
|---|---|---|---|
| `,e.jsx(n.code,{children:"problems"})," | ",e.jsx(n.code,{children:"Problem[]"}),` | ✅ Yes | Array of objects containing each problem's data |
| `,e.jsx(n.code,{children:"selectedProblemId"})," | ",e.jsx(n.code,{children:"number"}),` | ❌ No | ID of the currently selected problem. If omitted, no item is highlighted |
| `,e.jsx(n.code,{children:"onSelectProblem"})," | ",e.jsx(n.code,{children:"(id: number) => void"})," | ✅ Yes | Callback fired when the user clicks an item. Receives the numeric ",e.jsx(n.code,{children:"id"})," of the problem |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"problem",children:e.jsx(n.code,{children:"Problem"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface Problem {
  id: number;
  idNumber: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  acceptanceRate: number;
  status: 'solved' | 'attempted' | 'unsolved';
}
`})}),`
`,e.jsxs(n.p,{children:[`| Field | Type | Description |
|---|---|---|
| `,e.jsx(n.code,{children:"id"})," | ",e.jsx(n.code,{children:"number"})," | Unique numeric identifier for the problem. Used internally for selection and as React's ",e.jsx(n.code,{children:"key"}),` |
| `,e.jsx(n.code,{children:"idNumber"})," | ",e.jsx(n.code,{children:"number"})," | Sequential number visible in the UI (e.g. ",e.jsx(n.code,{children:"1"}),", ",e.jsx(n.code,{children:"2"}),", ",e.jsx(n.code,{children:"3"}),"). May differ from ",e.jsx(n.code,{children:"id"}),` if the list is filtered |
| `,e.jsx(n.code,{children:"title"})," | ",e.jsx(n.code,{children:"string"})," | Problem name. Truncated with ",e.jsx(n.code,{children:"text-overflow: ellipsis"}),` if too long |
| `,e.jsx(n.code,{children:"difficulty"})," | ",e.jsx(n.code,{children:"ProblemDifficulty"}),` | Difficulty level. Determines the color of the difficulty tag text |
| `,e.jsx(n.code,{children:"acceptanceRate"})," | ",e.jsx(n.code,{children:"number"})," | Problem acceptance rate percentage. Displayed as-is with the ",e.jsx(n.code,{children:"%"}),` symbol |
| `,e.jsx(n.code,{children:"status"})," | ",e.jsx(n.code,{children:"ProblemStatus"})," | The user's status on this problem. Determines the icon and its color |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"problemdifficulty",children:e.jsx(n.code,{children:"ProblemDifficulty"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ProblemDifficulty = 'Easy' | 'Medium' | 'Hard';
`})}),`
`,e.jsx(n.h3,{id:"problemstatus",children:e.jsx(n.code,{children:"ProblemStatus"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ProblemStatus = 'solved' | 'attempted' | 'unsolved';
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"interactive-props-table-storybook",children:"Interactive Props Table (Storybook)"}),`
`,e.jsx(o,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.h3,{id:"minimal-example",children:"Minimal example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ProblemList } from './ProblemList';

const problems = [
  {
    id: 1,
    idNumber: 1,
    title: 'Two Sum',
    difficulty: 'Easy',
    acceptanceRate: 49.2,
    status: 'solved',
  },
];

function App() {
  const [selectedId, setSelectedId] = useState<number>(1);

  return (
    <ProblemList
      problems={problems}
      selectedProblemId={selectedId}
      onSelectProblem={(id) => setSelectedId(id)}
    />
  );
}
`})}),`
`,e.jsx(n.h3,{id:"with-external-state-zustand--redux",children:"With external state (Zustand / Redux)"}),`
`,e.jsx(n.p,{children:"The component is fully controlled, so it integrates seamlessly with any store:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// With Zustand
const selectedId = useStore((s) => s.selectedProblemId);
const setSelected = useStore((s) => s.setSelectedProblem);

<ProblemList
  problems={problems}
  selectedProblemId={selectedId}
  onSelectProblem={setSelected}
/>
`})}),`
`,e.jsx(n.h3,{id:"with-an-empty-list",children:"With an empty list"}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"problems"}),' is an empty array, the component renders the "Problems" header and an empty scroll area without errors:']}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ProblemList
  problems={[]}
  selectedProblemId={undefined}
  onSelectProblem={() => {}}
/>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"internal-architecture",children:"Internal Architecture"}),`
`,e.jsx(n.h3,{id:"component-tree",children:"Component tree"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`ProblemList (ProblemList.tsx)
└── Box [listContainerStyles]           ← Root container 344.15px
    ├── Box [headerStyles]              ← "Problems" header
    │   └── Typography                 ← "Problems" text
    └── Box [scrollableBoxStyles]       ← Scrollable area
        └── List (MUI, disablePadding)
            └── Box × N [itemButtonStyles(isSelected)]  ← One row per problem
                ├── Box [itemIconStyles]
                │   └── StatusIcon                      ← Dynamic MUI icon
                └── Box [contentContainerStyles]
                    ├── Typography [titleTypographyStyles]   ← "1. Two Sum"
                    └── Box [secondaryRowStyles]
                        ├── Typography                       ← Colored difficulty tag
                        ├── Typography [dotDividerStyles]    ← "•" separator
                        └── Typography                       ← "49.2%"
`})}),`
`,e.jsx(n.h3,{id:"data-flow",children:"Data flow"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`props.problems (array)
    │
    ▼
.map((problem) => ...)
    │
    ├── problem.status  →  STATUS_ICON_MAP  →  StatusIcon (MUI component)
    ├── problem.status  →  iconColor (hex string)
    ├── problem.id      →  isSelected (boolean)  →  itemButtonStyles(isSelected)
    ├── problem.difficulty  →  getDifficultyChipColor()  →  tag color
    └── onClick  →  onSelectProblem(problem.id)  →  callback to parent
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"style-system",children:"Style System"}),`
`,e.jsxs(n.p,{children:["All styles are centralized in ",e.jsx(n.code,{children:"ProblemList.styles.ts"}),". They are used as objects passed to MUI's ",e.jsx(n.code,{children:"sx"})," prop, which gives access to the theming system without needing ",e.jsx(n.code,{children:"styled()"})," or CSS modules."]}),`
`,e.jsx(n.h3,{id:"listcontainerstyles",children:e.jsx(n.code,{children:"listContainerStyles"})}),`
`,e.jsx(n.p,{children:"Root container of the sidebar."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export const listContainerStyles = {
  width: '344.15px',
  minWidth: '344.15px',
  maxWidth: '344.15px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#ffffff',
  borderRight: '1.17px solid #E5E7EB',
  boxSizing: 'border-box',
};
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["Why ",e.jsx(n.code,{children:"344.15px"}),":"]})," This measurement comes directly from Figma Dev Mode and ensures the layout fits precisely within the three-panel editor design (list / editor / output)."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"headerstyles",children:e.jsx(n.code,{children:"headerStyles"})}),`
`,e.jsx(n.p,{children:'Header containing the "Problems" text.'}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export const headerStyles = {
  height: '51.98px',
  minHeight: '51.98px',
  maxHeight: '51.98px',
  display: 'flex',
  alignItems: 'center',
  paddingTop: '16.37px',
  paddingBottom: '16.37px',
  paddingLeft: '24.56px',
  paddingRight: '16.37px',
  borderBottom: '1.17px solid #E5E7EB',
  backgroundColor: '#ffffff',
  boxSizing: 'border-box',
};
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"scrollableboxstyles",children:e.jsx(n.code,{children:"scrollableBoxStyles"})}),`
`,e.jsx(n.p,{children:"Scroll area that grows to fill the remaining space."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export const scrollableBoxStyles = {
  flexGrow: 1,
  overflowY: 'auto',
  backgroundColor: '#ffffff',
  '&::-webkit-scrollbar': {
    width: '0px', // Scrollbar hidden by design
  },
};
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"itembuttonstylesisselected-boolean",children:e.jsx(n.code,{children:"itemButtonStyles(isSelected: boolean)"})}),`
`,e.jsx(n.p,{children:"The most important style function. It receives a boolean and returns the style object for each row, including the CSS pseudo-elements for the blue bar."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export const itemButtonStyles = (isSelected: boolean): Record<string, unknown> => ({
  // Fixed dimensions: ensures ALL items have the same height
  height: '62.15px',
  minHeight: '62.15px',
  maxHeight: '62.15px',

  // Uniform padding in all states
  paddingTop: '12px',
  paddingBottom: '12px',
  paddingLeft: '12px',
  paddingRight: '12px',

  // Background color based on selection state
  backgroundColor: isSelected ? '#EFF6FF' : '#ffffff',

  // Left decorative bar (CSS pseudo-element via sx)
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '3.52px',
    backgroundColor: isSelected ? '#2B7FFF' : 'transparent',
  },

  // Hover only when not selected
  '&:hover': {
    backgroundColor: isSelected ? '#EFF6FF' : '#f9fafb',
  },
});
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["Note on ",e.jsx(n.code,{children:"Record<string, unknown>"}),":"]})," This type is used instead of ",e.jsx(n.code,{children:"SxProps<Theme>"})," to avoid strict compilation conflicts with nested pseudo-element properties inside MUI ",e.jsx(n.code,{children:"sx"})," objects built dynamically by a function. It is a pragmatic solution that maintains type safety without requiring ",e.jsx(n.code,{children:"any"}),"."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"component-color-palette",children:"Component color palette"}),`
`,e.jsxs(n.p,{children:[`| Token | Value | Usage |
|---|---|---|
| Base background | `,e.jsx(n.code,{children:"#ffffff"}),` | Container, header, and row backgrounds |
| Selected background | `,e.jsx(n.code,{children:"#EFF6FF"}),` | Active row |
| Selection bar | `,e.jsx(n.code,{children:"#2B7FFF"}),` | Left vertical bar on selected item |
| Border separator | `,e.jsx(n.code,{children:"#E5E7EB"}),` | Horizontal borders and right border |
| Problem title | `,e.jsx(n.code,{children:"#262626"}),` | Problem name text |
| Header text | `,e.jsx(n.code,{children:"#1a1a1a"}),` | "Problems" heading text |
| Meta text (acceptance) | `,e.jsx(n.code,{children:"#8a9298"}),` | Acceptance rate percentage |
| Dot divider | `,e.jsx(n.code,{children:"#bcc1c4"}),` | Separator dot in the secondary row |
| Unsolved icon | `,e.jsx(n.code,{children:"#bcc1c4"})," | Color of the ",e.jsx(n.code,{children:"unsolved"}),` icon |
| Non-selected hover | `,e.jsx(n.code,{children:"#f9fafb"})," | Background on hover for inactive items |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"constants--maps",children:"Constants & Maps"}),`
`,e.jsxs(n.p,{children:["Defined in ",e.jsx(n.code,{children:"ProblemList.constants.ts"}),"."]}),`
`,e.jsx(n.h3,{id:"status_icon_map",children:e.jsx(n.code,{children:"STATUS_ICON_MAP"})}),`
`,e.jsx(n.p,{children:"Maps each status to its corresponding MUI icon component."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export const STATUS_ICON_MAP = {
  solved: CheckCircleOutlineIcon,       // ✔ Green
  attempted: RemoveCircleOutlineIcon,   // — Yellow
  unsolved: RadioButtonUncheckedIcon,   // ○ Gray
} as const;
`})}),`
`,e.jsxs(n.p,{children:["The icon color is not defined here but inline in ",e.jsx(n.code,{children:"ProblemList.tsx"}),", since it depends on the status evaluated per item:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const iconColor =
  problem.status === 'solved'
    ? '#2db55d'
    : problem.status === 'attempted'
      ? '#feb800'
      : '#bcc1c4';
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"status_color_map",children:e.jsx(n.code,{children:"STATUS_COLOR_MAP"})}),`
`,e.jsx(n.p,{children:"Semantic color map in case a MUI variant color is needed in the future instead of a direct hex value."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export const STATUS_COLOR_MAP = {
  solved: 'success',
  attempted: 'warning',
  unsolved: 'neutral',
} as const;
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Not currently consumed in the main render, but available for future extensions (e.g. MUI Chips)."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"difficulty_color_map",children:e.jsx(n.code,{children:"DIFFICULTY_COLOR_MAP"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export const DIFFICULTY_COLOR_MAP: Record<ProblemDifficulty, string> = {
  Easy: '#2db55d',    // Green
  Medium: '#feb800',  // Yellow-orange
  Hard: '#ef4743',    // Red
};
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"utilities",children:"Utilities"}),`
`,e.jsxs(n.p,{children:["Defined in ",e.jsx(n.code,{children:"ProblemList.utils.ts"}),"."]}),`
`,e.jsx(n.h3,{id:"getdifficultychipcolor",children:e.jsx(n.code,{children:"getDifficultyChipColor"})}),`
`,e.jsxs(n.p,{children:["Pure function that returns the hex color corresponding to a given difficulty. Acts as a safe wrapper around ",e.jsx(n.code,{children:"DIFFICULTY_COLOR_MAP"})," with a gray fallback for unexpected values."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export const getDifficultyChipColor = (difficulty: ProblemDifficulty): string => {
  return DIFFICULTY_COLOR_MAP[difficulty] || '#8c8c8c';
};
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Usage examples:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`getDifficultyChipColor('Easy');   // '#2db55d'
getDifficultyChipColor('Medium'); // '#feb800'
getDifficultyChipColor('Hard');   // '#ef4743'
`})}),`
`,e.jsxs(n.p,{children:["Because it is typed with ",e.jsx(n.code,{children:"ProblemDifficulty"}),", TypeScript prevents calls with invalid values at compile time. The ",e.jsx(n.code,{children:"'#8c8c8c'"})," fallback only acts as a runtime safety net."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"internal-hook",children:"Internal Hook"}),`
`,e.jsxs(n.p,{children:["Defined in ",e.jsx(n.code,{children:"ProblemList.hook.ts"}),"."]}),`
`,e.jsx(n.h3,{id:"useproblemlist",children:e.jsx(n.code,{children:"useProblemList"})}),`
`,e.jsx(n.p,{children:"Hook that encapsulates the mobile drawer state. Exposes a minimal, clean API:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export const useProblemList = () => {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const handleToggleMobileDrawer = () => {
    setIsMobileDrawerOpen((prev) => !prev);
  };

  const handleCloseMobileDrawer = () => {
    setIsMobileDrawerOpen(false);
  };

  return {
    isMobileDrawerOpen,
    handleToggleMobileDrawer,
    handleCloseMobileDrawer,
  };
};
`})}),`
`,e.jsxs(n.p,{children:[`| Returned value | Type | Description |
|---|---|---|
| `,e.jsx(n.code,{children:"isMobileDrawerOpen"})," | ",e.jsx(n.code,{children:"boolean"}),` | Current drawer open/closed state |
| `,e.jsx(n.code,{children:"handleToggleMobileDrawer"})," | ",e.jsx(n.code,{children:"() => void"}),` | Toggles between open and closed |
| `,e.jsx(n.code,{children:"handleCloseMobileDrawer"})," | ",e.jsx(n.code,{children:"() => void"})," | Forces the drawer closed |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Current status:"})," The hook exists and is available, but the current version of ",e.jsx(n.code,{children:"ProblemList.tsx"})," consumes it optionally. It was prepared for when the responsive mobile drawer variant is implemented (screens < 768px)."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"storybook-stories",children:"Storybook Stories"}),`
`,e.jsxs(n.p,{children:["Defined in ",e.jsx(n.code,{children:"ProblemList.stories.tsx"}),". Each story represents a different usage scenario of the component."]}),`
`,e.jsxs(n.p,{children:["All stories share the same ",e.jsx(n.code,{children:"sampleProblems"})," dataset with 6 problems of varying difficulties and statuses."]}),`
`,e.jsx(n.h3,{id:"default",children:e.jsx(n.code,{children:"Default"})}),`
`,e.jsxs(n.p,{children:["Normal initial state. The selected problem is ",e.jsx(n.code,{children:"id: 1"})," (Two Sum)."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const Default: Story = {
  args: {
    problems: sampleProblems,
    selectedProblemId: 1,
    onSelectProblem: () => {},
  },
};
`})}),`
`,e.jsx(n.h3,{id:"allstatuses",children:e.jsx(n.code,{children:"AllStatuses"})}),`
`,e.jsxs(n.p,{children:["Displays all three status icon types simultaneously. The selected item is ",e.jsx(n.code,{children:"id: 4"})," (Hard / unsolved)."]}),`
`,e.jsx(n.h3,{id:"selecteditem",children:e.jsx(n.code,{children:"SelectedItem"})}),`
`,e.jsxs(n.p,{children:["Highlights the second item (",e.jsx(n.code,{children:"id: 2"}),", Medium / attempted) to verify the blue bar and background work correctly on intermediate items."]}),`
`,e.jsx(n.h3,{id:"mobiledrawer",children:e.jsx(n.code,{children:"MobileDrawer"})}),`
`,e.jsxs(n.p,{children:["Prepared for when the mobile variant is integrated. Currently renders the same as ",e.jsx(n.code,{children:"Default"}),"."]}),`
`,e.jsx(n.h3,{id:"emptylist",children:e.jsx(n.code,{children:"EmptyList"})}),`
`,e.jsxs(n.p,{children:["Validates behavior with ",e.jsx(n.code,{children:"problems: []"}),". The component should render the header without errors and with no items."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tests",children:"Tests"}),`
`,e.jsxs(n.p,{children:["Defined in ",e.jsx(n.code,{children:"ProblemList.test.tsx"})," using ",e.jsx(n.strong,{children:"Vitest"})," and ",e.jsx(n.strong,{children:"@testing-library/react"}),"."]}),`
`,e.jsx(n.h3,{id:"mock-strategy",children:"Mock strategy"}),`
`,e.jsx(n.p,{children:"MUI icons are complex SVG components that can generate noise in tests. They are mocked with a dummy component:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`vi.mock('./ProblemList.constants', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./ProblemList.constants')>();

  const DummyIcon = ({ 'data-testid': testId }: { 'data-testid'?: string }) => (
    <span data-testid={testId}>•</span>
  );

  return {
    ...actual, // Preserves DIFFICULTY_COLOR_MAP and STATUS_COLOR_MAP
    STATUS_ICON_MAP: {
      solved: DummyIcon,
      attempted: DummyIcon,
      unsolved: DummyIcon,
    },
  };
});
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"importOriginal"})," is used to preserve ",e.jsx(n.code,{children:"DIFFICULTY_COLOR_MAP"})," and other constants. Only ",e.jsx(n.code,{children:"STATUS_ICON_MAP"})," is replaced."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"test-cases",children:"Test cases"}),`
`,e.jsx(n.h4,{id:"-renders-the-header-correctly",children:"✅ Renders the header correctly"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`test('should render the "Problems" heading correctly', () => {
  render(<ProblemList problems={mockProblems} selectedProblemId={1} onSelectProblem={vi.fn()} />);
  expect(screen.getByText('Problems')).toBeInTheDocument();
});
`})}),`
`,e.jsx(n.h4,{id:"-lists-titles-with-sequential-number",children:"✅ Lists titles with sequential number"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`test('should list problem titles with their numeric ID', () => {
  render(<ProblemList problems={mockProblems} selectedProblemId={1} onSelectProblem={vi.fn()} />);
  expect(screen.getByText('1. Two Sum')).toBeInTheDocument();
  expect(screen.getByText('2. Add Two Numbers')).toBeInTheDocument();
});
`})}),`
`,e.jsxs(n.h4,{id:"-fires-the-callback-with-the-correct-id-on-click",children:["✅ Fires the callback with the correct ",e.jsx(n.code,{children:"id"})," on click"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`test('should fire onSelectProblem when an item is clicked', () => {
  const handleSelectProblem = vi.fn();
  render(<ProblemList problems={mockProblems} selectedProblemId={1} onSelectProblem={handleSelectProblem} />);

  const problemItem = screen.getByText('2. Add Two Numbers').closest('div');
  if (problemItem) fireEvent.click(problemItem);

  expect(handleSelectProblem).toHaveBeenCalledWith(2);
});
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"how-to-run-the-tests",children:"How to run the tests"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Run all tests once
npx vitest run

# Watch mode during development
npx vitest

# With coverage report
npx vitest run --coverage
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"technical-decisions",children:"Technical Decisions"}),`
`,e.jsxs(n.h3,{id:"why-are-id-and-idnumber-separate-fields",children:["Why are ",e.jsx(n.code,{children:"id"})," and ",e.jsx(n.code,{children:"idNumber"})," separate fields?"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"id"})," is the database / system identifier. It is used for selection, React keys, and callbacks."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"idNumber"}),' is the visual number the user sees in the list (e.g. "1. Two Sum"). When the list is filtered, ',e.jsx(n.code,{children:"id"})," might be ",e.jsx(n.code,{children:"47"})," but ",e.jsx(n.code,{children:"idNumber"})," would still be ",e.jsx(n.code,{children:"1"})," according to the filtered order."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"why-a-fixed-width-instead-of-width-100",children:["Why a fixed width instead of ",e.jsx(n.code,{children:"width: 100%"}),"?"]}),`
`,e.jsxs(n.p,{children:["The Figma design defines this sidebar as a fixed-width panel within a three-column layout (list / editor / output). Using ",e.jsx(n.code,{children:"width: 100%"})," would break the overall editor grid. If responsive behavior is needed, it should be handled from the parent layout."]}),`
`,e.jsxs(n.h3,{id:"why-inline-styles-sx-instead-of-styled-or-css-modules",children:["Why inline styles (",e.jsx(n.code,{children:"sx"}),") instead of ",e.jsx(n.code,{children:"styled()"})," or CSS Modules?"]}),`
`,e.jsxs(n.p,{children:["Centralized ",e.jsx(n.code,{children:"sx"})," objects in a dedicated ",e.jsx(n.code,{children:".styles.ts"})," file offer the best of both worlds: semantic organization and access to MUI's theming system, without needing additional styled components or managing class names. The separation into a dedicated file prevents ",e.jsx(n.code,{children:"ProblemList.tsx"})," from becoming unreadable."]}),`
`,e.jsxs(n.h3,{id:"why-recordstring-unknown-in-itembuttonstyles",children:["Why ",e.jsx(n.code,{children:"Record<string, unknown>"})," in ",e.jsx(n.code,{children:"itemButtonStyles"}),"?"]}),`
`,e.jsxs(n.p,{children:["MUI's ",e.jsx(n.code,{children:"SxProps<Theme>"})," is a highly restrictive type that sometimes rejects nested CSS pseudo-elements (",e.jsx(n.code,{children:"&::before"}),", ",e.jsx(n.code,{children:"&:hover"}),") when the object is built dynamically by a function. ",e.jsx(n.code,{children:"Record<string, unknown>"})," is the safest typed alternative without resorting to ",e.jsx(n.code,{children:"any"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"extension-guide",children:"Extension Guide"}),`
`,e.jsx(n.h3,{id:"adding-a-new-problem-status",children:"Adding a new problem status"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Add the new value to the type in ",e.jsx(n.code,{children:"ProblemList.types.ts"}),":"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export type ProblemStatus = 'solved' | 'attempted' | 'unsolved' | 'skipped';
`})}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsxs(n.li,{children:["Add the corresponding icon in ",e.jsx(n.code,{children:"ProblemList.constants.ts"}),":"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import SkipNextIcon from '@mui/icons-material/SkipNext';

export const STATUS_ICON_MAP = {
  solved: CheckCircleOutlineIcon,
  attempted: RemoveCircleOutlineIcon,
  unsolved: RadioButtonUncheckedIcon,
  skipped: SkipNextIcon, // new
} as const;
`})}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsxs(n.li,{children:["Add the color inline in ",e.jsx(n.code,{children:"ProblemList.tsx"}),":"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const iconColor =
  problem.status === 'solved' ? '#2db55d' :
  problem.status === 'attempted' ? '#feb800' :
  problem.status === 'skipped' ? '#a855f7' :
  '#bcc1c4';
`})}),`
`,e.jsxs(n.ol,{start:"4",children:[`
`,e.jsxs(n.li,{children:["Update the mock in ",e.jsx(n.code,{children:"ProblemList.test.tsx"})," if needed."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"adding-difficulty-filters",children:"Adding difficulty filters"}),`
`,e.jsx(n.p,{children:"The component does not currently include filters. To add them without breaking the existing interface, it is recommended to handle filtering in the parent component and pass the already-filtered array:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// In the parent component
const [filter, setFilter] = useState<ProblemDifficulty | 'All'>('All');

const filteredProblems = filter === 'All'
  ? problems
  : problems.filter((p) => p.difficulty === filter);

<ProblemList
  problems={filteredProblems}
  selectedProblemId={selectedId}
  onSelectProblem={setSelectedId}
/>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"implementing-the-mobile-drawer-variant",children:"Implementing the mobile Drawer variant"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useProblemList"})," hook already exposes the necessary state. Create a wrapper variant that wraps ",e.jsx(n.code,{children:"ProblemList"})," inside an MUI ",e.jsx(n.code,{children:"Drawer"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Drawer } from '@mui/material';
import { useProblemList } from './ProblemList.hook';

function ProblemListWithDrawer(props: ProblemListProps) {
  const { isMobileDrawerOpen, handleCloseMobileDrawer } = useProblemList();

  return (
    <Drawer open={isMobileDrawerOpen} onClose={handleCloseMobileDrawer}>
      <ProblemList {...props} />
    </Drawer>
  );
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"storybook-preview",children:"Storybook Preview"}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(t,{of:h})]})}function k(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{k as default};
