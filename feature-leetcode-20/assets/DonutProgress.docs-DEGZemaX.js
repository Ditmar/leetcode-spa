import{j as e}from"./iframe-DfMaC-78.js";import{useMDXComponents as o}from"./index-BvY6787U.js";import"./preload-helper-PPVm8Dsz.js";function r(s){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"donutprogress",children:"DonutProgress"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"DonutProgress"})," component provides a clean and modern circular progress indicator that visually represents percentage-based data.",e.jsx(n.br,{}),`
`,"It’s ideal for dashboards, analytics panels, and performance metrics, with customizable colors, sizes, and smooth animations."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Circular progress visualization"})," — from ",e.jsx(n.code,{children:"0%"})," to ",e.jsx(n.code,{children:"100%"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic color detection"})," when using ",e.jsx(n.code,{children:'"auto"'}),", adapting color based on progress."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Customizable size and stroke thickness"}),", allowing full design flexibility."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Smooth animations"})," for dynamic progress transitions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Centered percentage text"})," that updates automatically."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lightweight and easily integrated"})," into any layout or design system."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.strong,{children:"Name"})," | ",e.jsx(n.strong,{children:"Type"})," | ",e.jsx(n.strong,{children:"Default"})," | ",e.jsx(n.strong,{children:"Description"}),` |
|-----------|-----------|-------------|-----------------|
| `,e.jsx(n.code,{children:"percentage"})," | ",e.jsx(n.code,{children:"number"})," | — | The progress value to display (range ",e.jsx(n.code,{children:"0–100"}),`). |
| `,e.jsx(n.code,{children:"color"})," | ",e.jsx(n.code,{children:'"auto"'})," | ",e.jsx(n.code,{children:'"primary"'})," | ",e.jsx(n.code,{children:'"success"'})," | ",e.jsx(n.code,{children:'"error"'})," | ",e.jsx(n.code,{children:'"warning"'})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:'"auto"'})," | The color of the progress ring. ",e.jsx(n.code,{children:'"auto"'}),` changes color dynamically according to the percentage. |
| `,e.jsx(n.code,{children:"size"})," | ",e.jsx(n.code,{children:"number"})," | ",e.jsx(n.code,{children:"38"}),` | The total diameter of the donut in pixels. |
| `,e.jsx(n.code,{children:"strokeWidth"})," | ",e.jsx(n.code,{children:"number"})," | ",e.jsx(n.code,{children:"6"}),` | The thickness of the donut’s circular stroke. |
| `,e.jsx(n.code,{children:"animated"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"})," | Enables or disables transition animations when progress updates. |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"automatic-color-behavior",children:"Automatic Color Behavior"}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.code,{children:"color"})," prop is set to ",e.jsx(n.code,{children:'"auto"'}),", the component automatically adjusts the color based on the progress percentage:"]}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.strong,{children:"Range"})," | ",e.jsx(n.strong,{children:"Color"})," | ",e.jsx(n.strong,{children:"Meaning"}),` |
|------------|------------|-------------|
| `,e.jsx(n.code,{children:"< 50%"})," | ",e.jsx(n.code,{children:"#D21515"}),` | 🔴 Low |
| `,e.jsx(n.code,{children:"50% – 74%"})," | ",e.jsx(n.code,{children:"#fb8c00"}),` | 🟠 Medium |
| `,e.jsx(n.code,{children:"≥ 75%"})," | ",e.jsx(n.code,{children:"#0DD715"})," | 🟢 High |"]}),`
`,e.jsx(n.p,{children:"This allows for quick, intuitive understanding of the progress level without requiring manual color configuration."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,e.jsx(n.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<DonutProgress percentage={45} />
`})})]})}function t(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{t as default};
