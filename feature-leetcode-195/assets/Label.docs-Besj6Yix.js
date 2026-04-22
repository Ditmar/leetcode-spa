import{j as e}from"./iframe-Buz5lkfP.js";import{useMDXComponents as o}from"./index-BGxgFTYh.js";import"./preload-helper-PPVm8Dsz.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"label-component",children:"Label Component"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Label"})," component is a wrapper around MUI's ",e.jsx(n.code,{children:"InputLabel"}),", enhanced with accessibility features and built-in support for required/optional indicators."]}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Responsive"}),": Text wraps correctly on mobile devices and supports 200% font scaling."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessible"}),": Automatically manages ",e.jsx(n.code,{children:"aria-required"})," and ",e.jsx(n.code,{children:"htmlFor"})," associations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Contextual"}),": Integrated Tooltip support for extra guidance."]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Description |
| :--- | :--- | :--- |
| `,e.jsx(n.code,{children:"children"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | The label text. |
| `,e.jsx(n.code,{children:"required"})," | ",e.jsx(n.code,{children:"boolean"}),` | Adds a red asterisk and ARIA required attribute. |
| `,e.jsx(n.code,{children:"optional"})," | ",e.jsx(n.code,{children:"boolean"}),` | Adds an "(optional)" suffix. |
| `,e.jsx(n.code,{children:"tooltip"})," | ",e.jsx(n.code,{children:"string"}),` | Adds a help icon with a tooltip message. |
| `,e.jsx(n.code,{children:"error"})," | ",e.jsx(n.code,{children:"boolean"})," | Colors the label with the theme's error palette. |"]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Label htmlFor="email" required tooltip="We'll never share your email">
  Email Address
</Label>
<input id="email" type="email" />
`})})]})}function d(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{d as default};
