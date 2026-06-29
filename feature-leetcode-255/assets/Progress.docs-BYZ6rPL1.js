import{B as e}from"./iframe-C_kAkfRu.js";import{useMDXComponents as a}from"./index-jA0Ybejl.js";import{b as o,C as s,c as i}from"./index-DHoo40QL.js";import{P as c,L as t,c as d,a as h,b as x,d as j,W as m,C as p}from"./Progress.stories-DyzvXTbP.js";import"./preload-helper-xjnZv7Jy.js";import"./index-zJicZ9wb.js";import"./index-ifzyUEbL.js";import"./index-kc9KeofI.js";import"./memoTheme-BNLy7gKb.js";import"./Box-DqTwMVBG.js";import"./LinearProgress-Cz6-cqI7.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-Dn8oDk4L.js";import"./Typography-W7IBLDSW.js";import"./CircularProgress-B0Y4bu1l.js";function l(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(n.h1,{id:"progress-component",children:"Progress Component"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Progress"})," component provides visual feedback about the status of an ongoing process or task."]}),`
`,e.jsx(n.p,{children:"It supports both linear and circular indicators, determinate and indeterminate modes, and integrates with the design system theme tokens."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Linear and Circular variants"}),`
`,e.jsx(n.li,{children:"Determinate and Indeterminate modes"}),`
`,e.jsx(n.li,{children:"Optional progress label"}),`
`,e.jsx(n.li,{children:"Theme-based colors and sizing"}),`
`,e.jsx(n.li,{children:"Responsive layout"}),`
`,e.jsx(n.li,{children:"Accessible (ARIA compliant)"}),`
`,e.jsx(n.li,{children:"Customizable thickness and size for circular indicators"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Progress
  variant="linear"
  mode="determinate"
  value={70}
  showLabel
/>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(n.h3,{id:"linear-determinate",children:"Linear Determinate"}),`
`,e.jsx(n.p,{children:"Used when the progress value is known."}),`
`,e.jsx(s,{children:e.jsx(i,{of:t})}),`
`,e.jsx(n.h3,{id:"linear-indeterminate",children:"Linear Indeterminate"}),`
`,e.jsx(n.p,{children:"Used when progress duration or completion percentage is unknown."}),`
`,e.jsx(s,{children:e.jsx(i,{of:d})}),`
`,e.jsx(n.h3,{id:"circular-determinate",children:"Circular Determinate"}),`
`,e.jsx(n.p,{children:"Circular progress with a known completion value."}),`
`,e.jsx(s,{children:e.jsx(i,{of:h})}),`
`,e.jsx(n.h3,{id:"circular-indeterminate",children:"Circular Indeterminate"}),`
`,e.jsx(n.p,{children:"Circular loading indicator for ongoing processes."}),`
`,e.jsx(s,{children:e.jsx(i,{of:x})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"labels",children:"Labels"}),`
`,e.jsxs(n.p,{children:["The progress label can be enabled using the ",e.jsx(n.code,{children:"showLabel"})," prop."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Progress
  variant="linear"
  mode="determinate"
  value={45}
  showLabel
/>
`})}),`
`,e.jsx(s,{children:e.jsx(i,{of:j})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"colors",children:"Colors"}),`
`,e.jsx(n.p,{children:"The component supports theme palette colors."}),`
`,e.jsx(n.p,{children:"Available color tokens:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"primary"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"secondary"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"success"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"error"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"warning"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"info"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"dark"})}),`
`]}),`
`,e.jsx(s,{children:e.jsx(i,{of:m})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"circular-size--thickness",children:"Circular Size & Thickness"}),`
`,e.jsx(n.p,{children:"Circular progress indicators support custom sizing and thickness values."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Progress
  variant="circular"
  mode="determinate"
  value={80}
  size="5rem"
  thickness={8}
/>
`})}),`
`,e.jsx(s,{children:e.jsx(i,{of:p})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Progress"})," component follows accessibility best practices:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Uses native MUI progress components with ARIA support"}),`
`,e.jsx(n.li,{children:"Supports determinate and indeterminate semantics"}),`
`,e.jsx(n.li,{children:"Labels improve readability for assistive technologies"}),`
`,e.jsx(n.li,{children:"Color usage should maintain sufficient contrast ratios"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The component adapts to the width of its container"}),`
`,e.jsx(n.li,{children:"Circular indicators scale using theme spacing tokens"}),`
`,e.jsx(n.li,{children:"Suitable for dashboards, cards, forms, and loading states"}),`
`]}),`
`,e.jsx(n.hr,{})]})}function T(r={}){const{wrapper:n}={...a(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}export{T as default};
