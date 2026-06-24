import{B as e}from"./iframe-DX1xOCrb.js";import{useMDXComponents as o}from"./index-BHUQZ6l-.js";import{b as l,C as s,c as t,a as d}from"./index-B0_1J8AR.js";import{C as c,D as h,R as a,S as x,E as p,M as u}from"./CodeEditor.stories-DHQZm2Pe.js";import"./preload-helper-BOJww6b9.js";import"./index-Dqu-ocrE.js";import"./index-DAUfQ7oi.js";import"./index-6wlVlNZo.js";import"./createSvgIcon-D170RJxN.js";import"./memoTheme-CrfwWSEg.js";import"./Paper-D6HCgAO-.js";import"./useTheme-PY5_YNbC.js";import"./Stack-DPyoaWxH.js";import"./useThemeProps-B6WCAJoC.js";import"./getThemeProps-DFYnWGqa.js";import"./Box-CmVgLQFg.js";import"./index-CYTODUNr.js";import"./FormControl-9wZ6W3Ji.js";import"./utils-Cp139hXb.js";import"./Select-D4yKBVci.js";import"./Menu-BtEVkzFy.js";import"./useSlot-BbVoC7yj.js";import"./mergeSlotProps-2bj3odsk.js";import"./useForkRef-yuRfImrj.js";import"./useSlotProps-BvE1W9qH.js";import"./Popover-CT8_AJV1.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-Kfc1Txus.js";import"./Fade-C0Ucepw5.js";import"./useTimeout-dkRmt1XV.js";import"./getReactElementRef-dLytT1kO.js";import"./mergeSlotProps-BFJCUZDB.js";import"./Modal-BG1LQYln.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Uo_dIlMl.js";import"./List-CQVNZyjC.js";import"./useControlled-CnhjlM4P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./MenuItem-D2svQ7Jr.js";import"./ButtonBase-Dm4lkB8B.js";import"./dividerClasses-dlbWDKMI.js";import"./Tooltip-BLW7civl.js";import"./Popper-DePW7TVA.js";import"./Button-C0CFKNFB.js";import"./CircularProgress-BuZ-h4V3.js";import"./Typography-DjBUif4h.js";import"./Collapse-BSam8h7Z.js";import"./Skeleton-nb9zMZj0.js";import"./IconButton-8gl8Zg4r.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
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
`]})]})}function xe(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{xe as default};
