import{A as n}from"./iframe-DTPXyVSk.js";import{useMDXComponents as t}from"./index-BWNeTB0d.js";import{b as o,C as s,c as r,a as d}from"./index-B-Wua2tz.js";import{C as c,D as h,R as x,S as j,E as a,M as p}from"./CodeEditor.stories-HmRD_4GE.js";import"./preload-helper-CZzeAyVo.js";import"./index-61BfXWw-.js";import"./index-6Hv40EgZ.js";import"./index-BWpRGi4M.js";import"./createSvgIcon-BzFGJYPK.js";import"./memoTheme-Doz_0wJ4.js";import"./Paper-CP2vW46m.js";import"./useTheme-mXxdT6_M.js";import"./Stack-UpUycVnp.js";import"./useThemeProps-DhKDxcS5.js";import"./getThemeProps-BS24WoRd.js";import"./Box-BW-mgA0S.js";import"./index-DvQTmNqF.js";import"./FormControl-D7dek2QC.js";import"./Select-zPwxMOKA.js";import"./Menu-jI1uJzc_.js";import"./useSlot-De4zdH-H.js";import"./mergeSlotProps-DnBSumVe.js";import"./useForkRef-C32UtW1n.js";import"./useSlotProps-DtLjqKwp.js";import"./Portal-BSuicDqc.js";import"./getReactElementRef-DcK3ltYO.js";import"./ownerWindow-D5xlM7lo.js";import"./List-B0uXgBPj.js";import"./Grow-Ci3vP9gu.js";import"./Fade-BYV79PBg.js";import"./useTimeout-u-Nt-TDY.js";import"./mergeSlotProps-CkvuSDAX.js";import"./Modal-CPxyyEqR.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-DY3Si44s.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./MenuItem-OqhsELiE.js";import"./ButtonBase-Dw8_Afl3.js";import"./Tooltip-DFNHNvC2.js";import"./Popper-11R9isV9.js";import"./Button-gXz_x5ET.js";import"./CircularProgress-CM9hYtzS.js";import"./Collapse-F5Tj2GFo.js";import"./Skeleton-D15xiOUn.js";import"./Typography-CJcvC1HQ.js";import"./IconButton-C9_3Nxds.js";function l(e){const i={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:c}),`
`,n.jsx(i.h1,{id:"codeeditor",children:"CodeEditor"}),`
`,n.jsxs(i.p,{children:["The ",n.jsx(i.code,{children:"CodeEditor"})," component is an organism-level workspace component designed for solving coding challenges inside the platform."]}),`
`,n.jsx(i.p,{children:"It combines:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Monaco Editor integration"}),`
`,n.jsx(i.li,{children:"Language selection"}),`
`,n.jsx(i.li,{children:"Execution controls"}),`
`,n.jsx(i.li,{children:"Output visualization"}),`
`,n.jsx(i.li,{children:"Runtime and memory reporting"}),`
`,n.jsx(i.li,{children:"Responsive layouts"}),`
`,n.jsx(i.li,{children:"Theme switching"}),`
`,n.jsx(i.li,{children:"Font size controls"}),`
`]}),`
`,n.jsx(i.p,{children:"The component follows CDD (Component-Driven Development) principles and uses Material UI layout primitives and styling APIs."}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h1,{id:"component-responsibilities",children:"Component Responsibilities"}),`
`,n.jsx(i.p,{children:"The component is responsible for:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Rendering the code editor"}),`
`,n.jsx(i.li,{children:"Managing editor state"}),`
`,n.jsx(i.li,{children:"Executing run and submit actions"}),`
`,n.jsx(i.li,{children:"Displaying execution feedback"}),`
`,n.jsx(i.li,{children:"Handling responsive behavior"}),`
`,n.jsx(i.li,{children:"Providing accessibility support"}),`
`,n.jsx(i.li,{children:"Managing editor theme state"}),`
`,n.jsx(i.li,{children:"Managing editor font size state"}),`
`]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h1,{id:"file-structure",children:"File Structure"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-txt",children:`CodeEditor/
├── CodeEditor.tsx
├── CodeEditor.types.ts
├── CodeEditor.constants.ts
├── CodeEditor.hook.ts
├── CodeEditor.styles.ts
├── CodeEditor.utils.ts
├── CodeEditor.test.tsx
├── CodeEditor.stories.tsx
└── CodeEditor.docs.mdx
`})}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h1,{id:"architecture-overview",children:"Architecture Overview"}),`
`,n.jsx(i.h2,{id:"codeeditortsx",children:"CodeEditor.tsx"}),`
`,n.jsx(i.p,{children:"Main rendering layer."}),`
`,n.jsx(i.p,{children:"Responsibilities:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Layout composition"}),`
`,n.jsx(i.li,{children:"Rendering Monaco Editor"}),`
`,n.jsx(i.li,{children:"Rendering toolbar controls"}),`
`,n.jsx(i.li,{children:"Rendering output panel"}),`
`,n.jsx(i.li,{children:"Responsive desktop/mobile layout"}),`
`,n.jsx(i.li,{children:"Connecting hook state to UI"}),`
`]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"codeeditorhookts",children:"CodeEditor.hook.ts"}),`
`,n.jsx(i.p,{children:"Contains all component state logic."}),`
`,n.jsx(i.p,{children:"Responsibilities:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Language state"}),`
`,n.jsx(i.li,{children:"Editor code state"}),`
`,n.jsx(i.li,{children:"Run/Submit loading states"}),`
`,n.jsx(i.li,{children:"Execution result state"}),`
`,n.jsx(i.li,{children:"Keyboard shortcuts"}),`
`,n.jsx(i.li,{children:"Theme toggle state"}),`
`,n.jsx(i.li,{children:"Font size state"}),`
`]}),`
`,n.jsx(i.p,{children:"Keyboard shortcuts implemented:"}),`
`,n.jsx(i.p,{children:`| Shortcut | Action |
|---|---|
| Ctrl + Enter | Run code |
| Ctrl + Shift + Enter | Submit code |`}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"codeeditorstylests",children:"CodeEditor.styles.ts"}),`
`,n.jsxs(i.p,{children:["Contains reusable styled components using MUI ",n.jsx(i.code,{children:"styled()"})," API."]}),`
`,n.jsx(i.p,{children:"No external CSS files are used."}),`
`,n.jsx(i.p,{children:"Responsibilities:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Toolbar styling"}),`
`,n.jsx(i.li,{children:"Output panel styling"}),`
`,n.jsx(i.li,{children:"Resize handle styling"}),`
`,n.jsx(i.li,{children:"Layout containers"}),`
`,n.jsx(i.li,{children:"Theme-aware surfaces"}),`
`]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"codeeditorutilsts",children:"CodeEditor.utils.ts"}),`
`,n.jsx(i.p,{children:"Contains reusable utility functions."}),`
`,n.jsx(i.p,{children:"Responsibilities:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Default code templates"}),`
`,n.jsx(i.li,{children:"Mock execution results"}),`
`,n.jsx(i.li,{children:"Result formatting helpers"}),`
`]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"codeeditortypests",children:"CodeEditor.types.ts"}),`
`,n.jsx(i.p,{children:"Contains all TypeScript contracts."}),`
`,n.jsx(i.p,{children:"Responsibilities:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Language union types"}),`
`,n.jsx(i.li,{children:"Execution result models"}),`
`,n.jsx(i.li,{children:"Test case models"}),`
`,n.jsx(i.li,{children:"Component prop interfaces"}),`
`]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h1,{id:"supported-languages",children:"Supported Languages"}),`
`,n.jsx(i.p,{children:"The editor supports:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Python"}),`
`,n.jsx(i.li,{children:"JavaScript"}),`
`,n.jsx(i.li,{children:"TypeScript"}),`
`,n.jsx(i.li,{children:"Java"}),`
`,n.jsx(i.li,{children:"C++"}),`
`]}),`
`,n.jsx(i.p,{children:"Each language includes a default starter template."}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h1,{id:"toolbar-actions",children:"Toolbar Actions"}),`
`,n.jsx(i.h2,{id:"run-button",children:"Run Button"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Uses outlined variant"}),`
`,n.jsx(i.li,{children:"Executes temporary code execution"}),`
`,n.jsx(i.li,{children:"Displays loading state"}),`
`,n.jsx(i.li,{children:"Triggers execution event"}),`
`]}),`
`,n.jsx(i.h2,{id:"submit-button",children:"Submit Button"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Uses contained variant"}),`
`,n.jsx(i.li,{children:"Executes submission flow"}),`
`,n.jsx(i.li,{children:"Displays loading state"}),`
`,n.jsx(i.li,{children:"Triggers submit event"}),`
`]}),`
`,n.jsx(i.h2,{id:"reset-button",children:"Reset Button"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Restores default template"}),`
`,n.jsx(i.li,{children:"Clears execution results"}),`
`]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h1,{id:"output-panel",children:"Output Panel"}),`
`,n.jsx(i.p,{children:"The output panel displays:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Runtime information"}),`
`,n.jsx(i.li,{children:"Memory usage"}),`
`,n.jsx(i.li,{children:"Success state"}),`
`,n.jsx(i.li,{children:"Error state"}),`
`,n.jsx(i.li,{children:"Test case results"}),`
`,n.jsx(i.li,{children:"Expected vs received output"}),`
`]}),`
`,n.jsx(i.p,{children:"Failed tests show visual diffs using:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"✓ success indicator"}),`
`,n.jsx(i.li,{children:"✗ failure indicator"}),`
`]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h1,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,n.jsx(i.h2,{id:"desktop",children:"Desktop"}),`
`,n.jsx(i.p,{children:"Desktop uses:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Resizable split layout"}),`
`,n.jsx(i.li,{children:"Editor and output side-by-side resizing"}),`
`,n.jsx(i.li,{children:n.jsx(i.code,{children:"react-resizable-panels"})}),`
`]}),`
`,n.jsx(i.h2,{id:"mobile",children:"Mobile"}),`
`,n.jsx(i.p,{children:"Mobile uses:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Stacked layout"}),`
`,n.jsx(i.li,{children:"Editor on top"}),`
`,n.jsx(i.li,{children:"Output panel below"}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"Collapse"})," component for responsive rendering"]}),`
`]}),`
`,n.jsx(i.p,{children:"Tested breakpoints:"}),`
`,n.jsx(i.p,{children:`| Width | Behavior |
|---|---|
| 320px | Mobile |
| 375px | Mobile |
| 768px | Tablet |
| 1024px | Desktop |`}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h1,{id:"theme-support",children:"Theme Support"}),`
`,n.jsx(i.p,{children:"The component supports:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Dark editor theme"}),`
`,n.jsx(i.li,{children:"Light editor theme"}),`
`]}),`
`,n.jsxs(i.p,{children:["Theme switching is managed inside ",n.jsx(i.code,{children:"useCodeEditor"}),"."]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h1,{id:"font-size-controls",children:"Font Size Controls"}),`
`,n.jsx(i.p,{children:"Toolbar controls allow:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Increasing font size"}),`
`,n.jsx(i.li,{children:"Decreasing font size"}),`
`]}),`
`,n.jsx(i.p,{children:"Limits are controlled using constants:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:n.jsx(i.code,{children:"MIN_FONT_SIZE"})}),`
`,n.jsx(i.li,{children:n.jsx(i.code,{children:"MAX_FONT_SIZE"})}),`
`,n.jsx(i.li,{children:n.jsx(i.code,{children:"DEFAULT_FONT_SIZE"})}),`
`]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h1,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(i.p,{children:"Accessibility support includes:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"aria-label"})," on toolbar buttons"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:'role="status"'})," on output panel"]}),`
`,n.jsx(i.li,{children:"Keyboard shortcut support"}),`
`,n.jsx(i.li,{children:"Focusable controls"}),`
`,n.jsx(i.li,{children:"Responsive interaction areas"}),`
`]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h1,{id:"stories",children:"Stories"}),`
`,n.jsx(i.h2,{id:"default",children:"Default"}),`
`,n.jsx(s,{children:n.jsx(r,{of:h})}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"running",children:"Running"}),`
`,n.jsx(s,{children:n.jsx(r,{of:x})}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"success",children:"Success"}),`
`,n.jsx(s,{children:n.jsx(r,{of:j})}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"error",children:"Error"}),`
`,n.jsx(s,{children:n.jsx(r,{of:a})}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"mobile-1",children:"Mobile"}),`
`,n.jsx(s,{children:n.jsx(r,{of:p})}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h1,{id:"controls",children:"Controls"}),`
`,n.jsx(d,{}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h1,{id:"future-improvements",children:"Future Improvements"}),`
`,n.jsx(i.p,{children:"Possible future enhancements:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Real backend execution integration"}),`
`,n.jsx(i.li,{children:"Collapsible test sections"}),`
`,n.jsx(i.li,{children:"Multiple editor tabs"}),`
`,n.jsx(i.li,{children:"Persistent editor state"}),`
`,n.jsx(i.li,{children:"File upload support"}),`
`,n.jsx(i.li,{children:"Console output streaming"}),`
`,n.jsx(i.li,{children:"Custom Monaco themes"}),`
`,n.jsx(i.li,{children:"Execution history"}),`
`]})]})}function dn(e={}){const{wrapper:i}={...t(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(l,{...e})}):l(e)}export{dn as default};
