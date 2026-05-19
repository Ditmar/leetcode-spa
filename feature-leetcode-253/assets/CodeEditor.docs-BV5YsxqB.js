import{j as n}from"./iframe-DZpKeU6R.js";import{useMDXComponents as t}from"./index-l8NH0xgV.js";import{M as o,b as s,c as r,C as d}from"./index-BBABuA2n.js";import{C as c,D as h,R as x,S as j,E as a,M as p}from"./CodeEditor.stories-DQdRvBGt.js";import"./preload-helper-CZzeAyVo.js";import"./index-BrIcZMVw.js";import"./index-BnIC_6BR.js";import"./index-Cireyl0O.js";import"./createSvgIcon-Cf7mlIeU.js";import"./memoTheme-Cv0Nli5j.js";import"./Paper-D_iyjM31.js";import"./useTheme-BYI0yL76.js";import"./Stack-DfekGKbD.js";import"./useThemeProps-Dv_JkMKF.js";import"./getThemeProps-CgUvifE_.js";import"./Box-DrVOgoCI.js";import"./index-8tJ6uA_z.js";import"./FormControl-BmftPlTr.js";import"./Select-BHmse-ME.js";import"./Menu-B8E3UNaf.js";import"./useSlot-CHIodPmW.js";import"./mergeSlotProps-D9BA2cFH.js";import"./useForkRef-D8qY3T5E.js";import"./useSlotProps-3lo5Azqi.js";import"./Portal-YVW9kkel.js";import"./getReactElementRef-B8bxcmDm.js";import"./List-DcvG6Uo0.js";import"./Fade-msEWl-WP.js";import"./useTimeout-Bb157Hrj.js";import"./mergeSlotProps-BBNUxjlo.js";import"./Modal-BJVsIqSV.js";import"./useControlled-CH9MJ9DZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./MenuItem-B_XwhX21.js";import"./ButtonBase-Dmm8qOh7.js";import"./Popper-Bo349stu.js";import"./IconButton-DGilQFJz.js";import"./CircularProgress-B88YNbS0.js";import"./Button-D39oS_OY.js";import"./Collapse-BeWvw8Nx.js";import"./Skeleton-CSKjOBOe.js";import"./Typography-DDDoV7e3.js";function l(i){const e={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:c}),`
`,n.jsx(e.h1,{id:"codeeditor",children:"CodeEditor"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"CodeEditor"})," component is an organism-level workspace component designed for solving coding challenges inside the platform."]}),`
`,n.jsx(e.p,{children:"It combines:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Monaco Editor integration"}),`
`,n.jsx(e.li,{children:"Language selection"}),`
`,n.jsx(e.li,{children:"Execution controls"}),`
`,n.jsx(e.li,{children:"Output visualization"}),`
`,n.jsx(e.li,{children:"Runtime and memory reporting"}),`
`,n.jsx(e.li,{children:"Responsive layouts"}),`
`,n.jsx(e.li,{children:"Theme switching"}),`
`,n.jsx(e.li,{children:"Font size controls"}),`
`]}),`
`,n.jsx(e.p,{children:"The component follows CDD (Component-Driven Development) principles and uses Material UI layout primitives and styling APIs."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{id:"component-responsibilities",children:"Component Responsibilities"}),`
`,n.jsx(e.p,{children:"The component is responsible for:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Rendering the code editor"}),`
`,n.jsx(e.li,{children:"Managing editor state"}),`
`,n.jsx(e.li,{children:"Executing run and submit actions"}),`
`,n.jsx(e.li,{children:"Displaying execution feedback"}),`
`,n.jsx(e.li,{children:"Handling responsive behavior"}),`
`,n.jsx(e.li,{children:"Providing accessibility support"}),`
`,n.jsx(e.li,{children:"Managing editor theme state"}),`
`,n.jsx(e.li,{children:"Managing editor font size state"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{id:"file-structure",children:"File Structure"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-txt",children:`CodeEditor/
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
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{id:"architecture-overview",children:"Architecture Overview"}),`
`,n.jsx(e.h2,{id:"codeeditortsx",children:"CodeEditor.tsx"}),`
`,n.jsx(e.p,{children:"Main rendering layer."}),`
`,n.jsx(e.p,{children:"Responsibilities:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Layout composition"}),`
`,n.jsx(e.li,{children:"Rendering Monaco Editor"}),`
`,n.jsx(e.li,{children:"Rendering toolbar controls"}),`
`,n.jsx(e.li,{children:"Rendering output panel"}),`
`,n.jsx(e.li,{children:"Responsive desktop/mobile layout"}),`
`,n.jsx(e.li,{children:"Connecting hook state to UI"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"codeeditorhookts",children:"CodeEditor.hook.ts"}),`
`,n.jsx(e.p,{children:"Contains all component state logic."}),`
`,n.jsx(e.p,{children:"Responsibilities:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Language state"}),`
`,n.jsx(e.li,{children:"Editor code state"}),`
`,n.jsx(e.li,{children:"Run/Submit loading states"}),`
`,n.jsx(e.li,{children:"Execution result state"}),`
`,n.jsx(e.li,{children:"Keyboard shortcuts"}),`
`,n.jsx(e.li,{children:"Theme toggle state"}),`
`,n.jsx(e.li,{children:"Font size state"}),`
`]}),`
`,n.jsx(e.p,{children:"Keyboard shortcuts implemented:"}),`
`,n.jsx(e.p,{children:`| Shortcut | Action |
|---|---|
| Ctrl + Enter | Run code |
| Ctrl + Shift + Enter | Submit code |`}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"codeeditorstylests",children:"CodeEditor.styles.ts"}),`
`,n.jsxs(e.p,{children:["Contains reusable styled components using MUI ",n.jsx(e.code,{children:"styled()"})," API."]}),`
`,n.jsx(e.p,{children:"No external CSS files are used."}),`
`,n.jsx(e.p,{children:"Responsibilities:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Toolbar styling"}),`
`,n.jsx(e.li,{children:"Output panel styling"}),`
`,n.jsx(e.li,{children:"Resize handle styling"}),`
`,n.jsx(e.li,{children:"Layout containers"}),`
`,n.jsx(e.li,{children:"Theme-aware surfaces"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"codeeditorutilsts",children:"CodeEditor.utils.ts"}),`
`,n.jsx(e.p,{children:"Contains reusable utility functions."}),`
`,n.jsx(e.p,{children:"Responsibilities:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Default code templates"}),`
`,n.jsx(e.li,{children:"Mock execution results"}),`
`,n.jsx(e.li,{children:"Result formatting helpers"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"codeeditortypests",children:"CodeEditor.types.ts"}),`
`,n.jsx(e.p,{children:"Contains all TypeScript contracts."}),`
`,n.jsx(e.p,{children:"Responsibilities:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Language union types"}),`
`,n.jsx(e.li,{children:"Execution result models"}),`
`,n.jsx(e.li,{children:"Test case models"}),`
`,n.jsx(e.li,{children:"Component prop interfaces"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{id:"supported-languages",children:"Supported Languages"}),`
`,n.jsx(e.p,{children:"The editor supports:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Python"}),`
`,n.jsx(e.li,{children:"JavaScript"}),`
`,n.jsx(e.li,{children:"TypeScript"}),`
`,n.jsx(e.li,{children:"Java"}),`
`,n.jsx(e.li,{children:"C++"}),`
`]}),`
`,n.jsx(e.p,{children:"Each language includes a default starter template."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{id:"toolbar-actions",children:"Toolbar Actions"}),`
`,n.jsx(e.h2,{id:"run-button",children:"Run Button"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Uses outlined variant"}),`
`,n.jsx(e.li,{children:"Executes temporary code execution"}),`
`,n.jsx(e.li,{children:"Displays loading state"}),`
`,n.jsx(e.li,{children:"Triggers execution event"}),`
`]}),`
`,n.jsx(e.h2,{id:"submit-button",children:"Submit Button"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Uses contained variant"}),`
`,n.jsx(e.li,{children:"Executes submission flow"}),`
`,n.jsx(e.li,{children:"Displays loading state"}),`
`,n.jsx(e.li,{children:"Triggers submit event"}),`
`]}),`
`,n.jsx(e.h2,{id:"reset-button",children:"Reset Button"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Restores default template"}),`
`,n.jsx(e.li,{children:"Clears execution results"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{id:"output-panel",children:"Output Panel"}),`
`,n.jsx(e.p,{children:"The output panel displays:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Runtime information"}),`
`,n.jsx(e.li,{children:"Memory usage"}),`
`,n.jsx(e.li,{children:"Success state"}),`
`,n.jsx(e.li,{children:"Error state"}),`
`,n.jsx(e.li,{children:"Test case results"}),`
`,n.jsx(e.li,{children:"Expected vs received output"}),`
`]}),`
`,n.jsx(e.p,{children:"Failed tests show visual diffs using:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✓ success indicator"}),`
`,n.jsx(e.li,{children:"✗ failure indicator"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,n.jsx(e.h2,{id:"desktop",children:"Desktop"}),`
`,n.jsx(e.p,{children:"Desktop uses:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Resizable split layout"}),`
`,n.jsx(e.li,{children:"Editor and output side-by-side resizing"}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"react-resizable-panels"})}),`
`]}),`
`,n.jsx(e.h2,{id:"mobile",children:"Mobile"}),`
`,n.jsx(e.p,{children:"Mobile uses:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Stacked layout"}),`
`,n.jsx(e.li,{children:"Editor on top"}),`
`,n.jsx(e.li,{children:"Output panel below"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Collapse"})," component for responsive rendering"]}),`
`]}),`
`,n.jsx(e.p,{children:"Tested breakpoints:"}),`
`,n.jsx(e.p,{children:`| Width | Behavior |
|---|---|
| 320px | Mobile |
| 375px | Mobile |
| 768px | Tablet |
| 1024px | Desktop |`}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{id:"theme-support",children:"Theme Support"}),`
`,n.jsx(e.p,{children:"The component supports:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Dark editor theme"}),`
`,n.jsx(e.li,{children:"Light editor theme"}),`
`]}),`
`,n.jsxs(e.p,{children:["Theme switching is managed inside ",n.jsx(e.code,{children:"useCodeEditor"}),"."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{id:"font-size-controls",children:"Font Size Controls"}),`
`,n.jsx(e.p,{children:"Toolbar controls allow:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Increasing font size"}),`
`,n.jsx(e.li,{children:"Decreasing font size"}),`
`]}),`
`,n.jsx(e.p,{children:"Limits are controlled using constants:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"MIN_FONT_SIZE"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"MAX_FONT_SIZE"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"DEFAULT_FONT_SIZE"})}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(e.p,{children:"Accessibility support includes:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"aria-label"})," on toolbar buttons"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:'role="status"'})," on output panel"]}),`
`,n.jsx(e.li,{children:"Keyboard shortcut support"}),`
`,n.jsx(e.li,{children:"Focusable controls"}),`
`,n.jsx(e.li,{children:"Responsive interaction areas"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{id:"stories",children:"Stories"}),`
`,n.jsx(e.h2,{id:"default",children:"Default"}),`
`,n.jsx(s,{children:n.jsx(r,{of:h})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"running",children:"Running"}),`
`,n.jsx(s,{children:n.jsx(r,{of:x})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"success",children:"Success"}),`
`,n.jsx(s,{children:n.jsx(r,{of:j})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"error",children:"Error"}),`
`,n.jsx(s,{children:n.jsx(r,{of:a})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"mobile-1",children:"Mobile"}),`
`,n.jsx(s,{children:n.jsx(r,{of:p})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{id:"controls",children:"Controls"}),`
`,n.jsx(d,{}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{id:"future-improvements",children:"Future Improvements"}),`
`,n.jsx(e.p,{children:"Possible future enhancements:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Real backend execution integration"}),`
`,n.jsx(e.li,{children:"Collapsible test sections"}),`
`,n.jsx(e.li,{children:"Multiple editor tabs"}),`
`,n.jsx(e.li,{children:"Persistent editor state"}),`
`,n.jsx(e.li,{children:"File upload support"}),`
`,n.jsx(e.li,{children:"Console output streaming"}),`
`,n.jsx(e.li,{children:"Custom Monaco themes"}),`
`,n.jsx(e.li,{children:"Execution history"}),`
`]})]})}function rn(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(l,{...i})}):l(i)}export{rn as default};
