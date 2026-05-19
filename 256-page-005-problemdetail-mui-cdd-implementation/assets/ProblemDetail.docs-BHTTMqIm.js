import{j as e}from"./iframe-D_u2Wuzz.js";import{useMDXComponents as o}from"./index-B-dADBeT.js";import{M as r,S as s,D as l}from"./blocks-R3Nzw-or.js";import{P as a}from"./ProblemDetail.stories-CwnRxFkv.js";import"./preload-helper-DjDFf_hp.js";import"./index-CICxZjGi.js";import"./index-Bro1krM9.js";import"./index-CistbImN.js";import"./Box-DeatSoTz.js";import"./memoTheme-C-8eP6tO.js";import"./Stack-Bq7goobR.js";import"./useThemeProps-Dv5udiXz.js";import"./getThemeProps-zxCgt9Lc.js";import"./Typography-CHeNl4t2.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Chip-CcMGbFRr.js";import"./createSvgIcon-lpdaF2eb.js";import"./useSlot-DxVdUuRE.js";import"./mergeSlotProps-BQHgXM_9.js";import"./useForkRef-d4pUkaqa.js";import"./ButtonBase-Cahw3CGk.js";import"./useTimeout-CXxVQGbi.js";import"./Divider-DtrTq52x.js";import"./dividerClasses-Bwf0ba-c.js";import"./Paper-IW1QJI6n.js";import"./useTheme-DvJoHRKN.js";function t(n){const i={code:"code",h1:"h1",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(i.h1,{id:"problemdetail",children:"ProblemDetail"}),`
`,e.jsx(s,{children:e.jsx(i.p,{children:"Responsive page-level coding problem statement component built with Material UI and CDD architecture."})}),`
`,e.jsxs(l,{children:[e.jsxs(i.p,{children:[e.jsx(i.code,{children:"ProblemDetail"})," is a fully responsive, presentational page-level component responsible for rendering the complete statement of a programming problem."]}),e.jsx(i.p,{children:"The component follows Component-Driven Development (CDD) principles and is implemented using Material UI primitives to ensure consistency, scalability, accessibility, and maintainability."}),e.jsx(i.p,{children:"This component was designed to function as the central reading panel inside coding workspace applications such as algorithm platforms, interview preparation systems, online coding judges, or educational development environments."}),e.jsxs(i.p,{children:["The component receives a fully structured ",e.jsx(i.code,{children:"problem"})," object and renders all problem-related information in a readable and accessible layout."]}),e.jsx(i.p,{children:"The component intentionally avoids internal business logic and asynchronous behavior in order to remain reusable, predictable, and easy to test."})]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h1,{id:"architectural-overview",children:"Architectural overview"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"ProblemDetail"})," component belongs to the presentation layer of the application."]}),`
`,e.jsx(i.p,{children:"Its responsibility is strictly limited to UI rendering."}),`
`,e.jsx(i.p,{children:"The component:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Receives data through props."}),`
`,e.jsx(i.li,{children:"Renders semantic and accessible UI."}),`
`,e.jsx(i.li,{children:"Applies responsive behavior."}),`
`,e.jsx(i.li,{children:"Uses centralized styling."}),`
`,e.jsx(i.li,{children:"Delegates utility logic to helper functions."}),`
`,e.jsx(i.li,{children:"Does not mutate data."}),`
`,e.jsx(i.li,{children:"Does not fetch external resources."}),`
`,e.jsx(i.li,{children:"Does not handle persistence."}),`
`,e.jsx(i.li,{children:"Does not manage editor state."}),`
`,e.jsx(i.li,{children:"Does not execute code."}),`
`]}),`
`,e.jsx(i.p,{children:"This separation improves:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Maintainability."}),`
`,e.jsx(i.li,{children:"Reusability."}),`
`,e.jsx(i.li,{children:"Testability."}),`
`,e.jsx(i.li,{children:"Scalability."}),`
`,e.jsx(i.li,{children:"Predictability."}),`
`,e.jsx(i.li,{children:"Long-term project stability."}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h1,{id:"component-role-inside-the-application",children:"Component role inside the application"}),`
`,e.jsx(i.p,{children:"The component is intended to work inside a larger coding workspace layout."}),`
`,e.jsx(i.p,{children:"Typical layout composition:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-txt",children:`Coding Workspace
├── ProblemsSidebar
├── ProblemDetail
├── CodeEditor
└── TestResults
`})})]})}function E(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{E as default};
