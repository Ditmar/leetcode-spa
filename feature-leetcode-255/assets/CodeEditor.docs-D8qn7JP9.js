import{B as e}from"./iframe-C_kAkfRu.js";import{useMDXComponents as o}from"./index-jA0Ybejl.js";import{b as l,C as s,c as t,a as d}from"./index-DHoo40QL.js";import{C as c,D as h,R as a,S as x,E as p,M as u}from"./CodeEditor.stories-Bsm9Y3By.js";import"./preload-helper-xjnZv7Jy.js";import"./index-zJicZ9wb.js";import"./index-ifzyUEbL.js";import"./index-kc9KeofI.js";import"./createSvgIcon-C7fVM8CS.js";import"./memoTheme-BNLy7gKb.js";import"./Paper-BDLYa-p3.js";import"./useTheme-Dn8oDk4L.js";import"./Stack-BEMjUO_F.js";import"./styled-B0g8GISw.js";import"./useThemeProps-CyZqAXJr.js";import"./getThemeProps-aGL9JZOm.js";import"./Box-DqTwMVBG.js";import"./index-BvJzdrrO.js";import"./FormControl-B-M4VtUh.js";import"./utils-C7nAshf8.js";import"./isMuiElement-MZ563FME.js";import"./Select-CHmwCiOJ.js";import"./Menu-C6TCzglF.js";import"./useSlot-BBs4Y9Oy.js";import"./mergeSlotProps-DnQVzt8c.js";import"./useForkRef-C2FMLNhK.js";import"./useSlotProps-BFE72a0i.js";import"./Popover-u8JLkb_5.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-Bxr6Msr0.js";import"./Fade-DwNGtxmb.js";import"./useTimeout-CDSAFJa6.js";import"./getReactElementRef-C5g8om7n.js";import"./mergeSlotProps-BoZPvXwv.js";import"./Modal-CLn9DwEV.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CWszKyHZ.js";import"./List-Q2vMz83Z.js";import"./useControlled-DMG7OMnZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./MenuItem-CqFgAF1h.js";import"./ButtonBase-BkwFrFXT.js";import"./dividerClasses-D4L1ajUv.js";import"./Tooltip-CIMxUqQE.js";import"./Popper-Bj7jyTi5.js";import"./Button-CufGEOwo.js";import"./CircularProgress-B0Y4bu1l.js";import"./Typography-W7IBLDSW.js";import"./Collapse-DiAxPNA1.js";import"./Skeleton-D0GZJ3_b.js";import"./IconButton-nynsmpdg.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
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
