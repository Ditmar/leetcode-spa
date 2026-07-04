import{B as e}from"./iframe-BU-sGBYQ.js";import{useMDXComponents as o}from"./index-J46bBAXK.js";import{b as l,C as s,c as t,a as d}from"./index-B89eOQiw.js";import{C as c,D as h,R as a,S as x,E as p,M as u}from"./CodeEditor.stories-DNCn7gN9.js";import"./preload-helper-ASOJwovS.js";import"./index-zm8FmVfU.js";import"./index-CTSSOBYG.js";import"./index-CMeIDvya.js";import"./createSvgIcon-DCdKjLdd.js";import"./memoTheme-CBjeJ4D8.js";import"./Paper-B35j_-Hw.js";import"./useTheme-DogTZuZs.js";import"./Stack-DC5iDcSI.js";import"./styled-BZ3FAUnH.js";import"./useThemeProps-ZElKALmh.js";import"./getThemeProps-DiXB9lMP.js";import"./Box-DdUhLrZV.js";import"./index-1QNwBPb3.js";import"./FormControl-4Rs7kJB-.js";import"./utils-Mk8XdKYb.js";import"./isMuiElement-BwPR9hBz.js";import"./Select-ZruQlpNl.js";import"./Menu-B5u1ZRv4.js";import"./useSlot-B0d1yNxO.js";import"./mergeSlotProps-d_WdfG_c.js";import"./useForkRef-xCWbJJmR.js";import"./useSlotProps-CFUY5joL.js";import"./Popover-BZa_uqrC.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-kk1kJnOt.js";import"./Fade-B96ZrmIe.js";import"./useTimeout-zKKoSDh6.js";import"./getReactElementRef-D7uXfzMD.js";import"./mergeSlotProps-7sKhNzEt.js";import"./Modal-BVMR8BV-.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-pxZiNCxV.js";import"./List-XgWlvADS.js";import"./useControlled-D88ECKBH.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./MenuItem-DH3dl6WF.js";import"./ButtonBase-BwIpcprc.js";import"./dividerClasses-CcIyLRmO.js";import"./Tooltip-Zf5dnKdC.js";import"./Popper-Be565DRJ.js";import"./Button-DWR5miDU.js";import"./CircularProgress-X3IsOE8b.js";import"./Typography-DASDYw2r.js";import"./Collapse-BDV2Pgpz.js";import"./Skeleton-FIAdLumx.js";import"./IconButton-CPT35ggR.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
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
