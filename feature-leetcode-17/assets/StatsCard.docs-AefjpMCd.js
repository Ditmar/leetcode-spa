import{j as e}from"./iframe-Bqq4eweS.js";import{useMDXComponents as r}from"./index-7cxx0_LK.js";import"./preload-helper-PPVm8Dsz.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"statscard",children:"StatsCard"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"StatsCard"})," component displays key statistics and metrics in a visually appealing card format, designed specifically for dashboard interfaces."]}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Displays an icon, value, and label with consistent spacing and hierarchy."}),`
`,e.jsx(n.li,{children:"Theme-compliant: uses MUI theme tokens for colors, spacing, typography, and shadows."}),`
`,e.jsx(n.li,{children:"Responsive design: maintains proper proportions across different screen sizes."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessible:"})," includes semantic roles, proper ARIA attributes, and screen reader support."]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:[`| Prop    | Type               | Default     | Description                         |
| ------- | ------------------ | ----------- | ----------------------------------- |
| `,e.jsx(n.code,{children:"icon"}),"  | ",e.jsx(n.code,{children:"ReactNode"}),`        | Custom icon | Icon to display                     |
| `,e.jsx(n.code,{children:"value"})," | ",e.jsx(n.code,{children:"string \\| number"}),` | -           | The main statistic value            |
| `,e.jsx(n.code,{children:"label"})," | ",e.jsx(n.code,{children:"string"}),`           | -           | Descriptive label for the statistic |
| `,e.jsx(n.code,{children:"sx"}),"    | ",e.jsx(n.code,{children:"SxProps"}),"          | -           | Additional Material-UI styles       |"]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"StatsCard"})," component is designed following accessibility (A11y) best practices to ensure an inclusive experience for all users."]}),`
`,e.jsx(n.h3,{id:"implementation-in-code",children:"Implementation in code"}),`
`,e.jsxs(n.p,{children:["Inside the ",e.jsx(n.code,{children:"StatsCard.tsx"})," file, the following accessibility features are applied:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Semantic group role and aria-label:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<StyledCard
  {...rest}
  sx={sx}
  elevation={0}
  role="group"
  aria-label={\`\${label} statistic\`}
  aria-labelledby={\`\${labelId} \${valueId}\`}
>
`})}),`
`]}),`
`]})]})}function a(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{a as default};
