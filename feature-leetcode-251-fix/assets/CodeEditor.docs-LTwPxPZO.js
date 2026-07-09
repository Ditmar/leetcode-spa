import{B as e}from"./iframe-C2G20qM_.js";import{useMDXComponents as o}from"./index-CFOfi0Ni.js";import{b as l,C as s,c as t,a as d}from"./index-E3msggJ3.js";import{C as c,D as h,R as a,S as x,E as p,M as u}from"./CodeEditor.stories-DP9r9AmY.js";import"./preload-helper-DGCCE14-.js";import"./index-o_u-X7z7.js";import"./index-Bom-OQAR.js";import"./index-DTzZRHGj.js";import"./createSvgIcon-meOisykS.js";import"./memoTheme-DHffIrQd.js";import"./Paper-CbNPjh2K.js";import"./useTheme-CPDYltV8.js";import"./Stack-ruEW6e53.js";import"./styled-DxkgQYcv.js";import"./useThemeProps-C1ySaOuH.js";import"./getThemeProps-C-h9Cmwb.js";import"./Box-Do0mZ-yn.js";import"./index-BloA91lm.js";import"./FormControl-D5ck5B__.js";import"./utils-CtPIKOxC.js";import"./isMuiElement-DQF6QJJ6.js";import"./Select-CWJjLdTl.js";import"./Menu-C6BBRGpJ.js";import"./useSlot-skxyFX7O.js";import"./mergeSlotProps-DKeAbPE3.js";import"./useForkRef-BJo2j4kL.js";import"./useSlotProps-DcmLvmoc.js";import"./Popover-Uc_NuECB.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-Qu2J8_CE.js";import"./Fade-CW0wkNYm.js";import"./useTimeout-B0Psf3hq.js";import"./getReactElementRef-RrfqZraO.js";import"./mergeSlotProps-GH4cIIxw.js";import"./Modal-CXwu14wv.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-1B9ytfkO.js";import"./List-Cix4aqI9.js";import"./useControlled-lruElQXP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./MenuItem-CaDqkfyn.js";import"./ButtonBase-BGpdhA0w.js";import"./dividerClasses-ULrrzvuS.js";import"./Tooltip-BUtEcIJt.js";import"./Popper-C3g4u5bY.js";import"./Button-g0WGWVUO.js";import"./CircularProgress-DhGv1HWx.js";import"./Typography-CTr450FL.js";import"./Collapse-BnjGqtvB.js";import"./Skeleton-BG5TqoQq.js";import"./IconButton-79BzpGox.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(n.h1,{id:"codeeditor",children:"CodeEditor"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"CodeEditor"})," component provides an interactive coding workspace for solving programming challenges."]}),`
`,e.jsx(n.p,{children:"It combines a Monaco-based editor, language selection, execution controls, and test case visualization in a responsive layout that adapts to desktop and mobile screens."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Monaco Editor integration"}),`
`,e.jsx(n.li,{children:"Multiple programming languages"}),`
`,e.jsx(n.li,{children:"Run, Submit, and Reset actions"}),`
`,e.jsx(n.li,{children:"Loading states for code execution"}),`
`,e.jsx(n.li,{children:"Test case visualization"}),`
`,e.jsx(n.li,{children:"Error feedback"}),`
`,e.jsx(n.li,{children:"Responsive desktop and mobile layouts"}),`
`,e.jsx(n.li,{children:"Keyboard shortcuts"}),`
`,e.jsx(n.li,{children:"Accessibility support"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"supported-languages",children:"Supported Languages"}),`
`,e.jsx(n.p,{children:"The editor currently supports:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Python"}),`
`,e.jsx(n.li,{children:"JavaScript"}),`
`,e.jsx(n.li,{children:"TypeScript"}),`
`,e.jsx(n.li,{children:"Java"}),`
`,e.jsx(n.li,{children:"C++"}),`
`]}),`
`,e.jsx(n.p,{children:"Each language automatically loads a starter template when selected."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"user-actions",children:"User Actions"}),`
`,e.jsx(n.h3,{id:"run",children:"Run"}),`
`,e.jsx(n.p,{children:"Executes the current solution and displays the resulting test output."}),`
`,e.jsx(n.h3,{id:"submit",children:"Submit"}),`
`,e.jsx(n.p,{children:"Submits the current solution and displays execution feedback."}),`
`,e.jsx(n.h3,{id:"reset",children:"Reset"}),`
`,e.jsx(n.p,{children:"Restores the default template for the selected language and clears the current result."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"keyboard-shortcuts",children:"Keyboard Shortcuts"}),`
`,e.jsx(n.p,{children:`| Shortcut | Action |
|----------|---------|
| Ctrl + Enter | Run code |
| Ctrl + Shift + Enter | Submit code |`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"execution-output",children:"Execution Output"}),`
`,e.jsx(n.p,{children:"The output panel displays:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Test case results"}),`
`,e.jsx(n.li,{children:"Success and failure states"}),`
`,e.jsx(n.li,{children:"Error messages"}),`
`,e.jsx(n.li,{children:"Expected vs received values for failed tests"}),`
`]}),`
`,e.jsx(n.h3,{id:"success-example",children:"Success Example"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"✓ Test case 1"}),`
`,e.jsx(n.li,{children:"✓ Test case 2"}),`
`]}),`
`,e.jsx(n.h3,{id:"failure-example",children:"Failure Example"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"✗ Test case 1"}),`
`,e.jsxs(n.li,{children:["Expected: ",e.jsx(n.code,{children:"[0,1]"})]}),`
`,e.jsxs(n.li,{children:["Received: ",e.jsx(n.code,{children:"[1,0]"})]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,e.jsx(n.h3,{id:"desktop",children:"Desktop"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Full editor workspace"}),`
`,e.jsx(n.li,{children:"Dedicated output panel"}),`
`,e.jsx(n.li,{children:"Visual separator between sections"}),`
`]}),`
`,e.jsx(n.h3,{id:"mobile",children:"Mobile"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Stacked layout"}),`
`,e.jsx(n.li,{children:"Optimized spacing"}),`
`,e.jsx(n.li,{children:"output section displayed below the editor"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:"The component includes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Accessible button labels"}),`
`,e.jsx(n.li,{children:"Keyboard navigation support"}),`
`,e.jsx(n.li,{children:"Live region updates for execution results"}),`
`,e.jsx(n.li,{children:"Tooltip descriptions for actions"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"architecture",children:"Architecture"}),`
`,e.jsx(n.h3,{id:"codeeditortsx",children:"CodeEditor.tsx"}),`
`,e.jsx(n.p,{children:"Responsible for rendering the UI and connecting user interactions with component state."}),`
`,e.jsx(n.h3,{id:"codeeditorhookts",children:"CodeEditor.hook.ts"}),`
`,e.jsx(n.p,{children:"Contains editor state management and execution logic."}),`
`,e.jsx(n.h3,{id:"codeeditorconstantsts",children:"CodeEditor.constants.ts"}),`
`,e.jsx(n.p,{children:"Defines supported languages and default code templates."}),`
`,e.jsx(n.h3,{id:"codeeditorutilsts",children:"CodeEditor.utils.ts"}),`
`,e.jsx(n.p,{children:"Provides helper functions and mock execution results."}),`
`,e.jsx(n.h3,{id:"codeeditortypests",children:"CodeEditor.types.ts"}),`
`,e.jsx(n.p,{children:"Contains TypeScript contracts used throughout the component."}),`
`,e.jsx(n.h3,{id:"codeeditorstylests",children:"CodeEditor.styles.ts"}),`
`,e.jsx(n.p,{children:"Contains reusable styled components built with Material UI."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"stories",children:"Stories"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(s,{children:e.jsx(t,{of:h})}),`
`,e.jsx(n.h3,{id:"running",children:"Running"}),`
`,e.jsx(s,{children:e.jsx(t,{of:a})}),`
`,e.jsx(n.h3,{id:"success",children:"Success"}),`
`,e.jsx(s,{children:e.jsx(t,{of:x})}),`
`,e.jsx(n.h3,{id:"error",children:"Error"}),`
`,e.jsx(s,{children:e.jsx(t,{of:p})}),`
`,e.jsx(n.h3,{id:"mobile-1",children:"Mobile"}),`
`,e.jsx(s,{children:e.jsx(t,{of:u})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"controls",children:"Controls"}),`
`,e.jsx(d,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"future-improvements",children:"Future Improvements"}),`
`,e.jsx(n.p,{children:"Potential enhancements:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Real backend execution service"}),`
`,e.jsx(n.li,{children:"Persistent editor state"}),`
`,e.jsx(n.li,{children:"Multiple editor tabs"}),`
`,e.jsx(n.li,{children:"Execution history"}),`
`,e.jsx(n.li,{children:"Custom Monaco themes"}),`
`,e.jsx(n.li,{children:"Advanced test case management"}),`
`]})]})}function ue(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{ue as default};
