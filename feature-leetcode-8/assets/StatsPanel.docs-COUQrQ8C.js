import{j as n}from"./iframe-Q8noQFNg.js";import{useMDXComponents as r}from"./index-YJ5lq4AY.js";import"./preload-helper-PPVm8Dsz.js";function i(e){const s={blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"-statspanel",children:"📊 StatsPanel"}),`
`,n.jsxs(s.p,{children:["The ",n.jsx(s.strong,{children:"StatsPanel"})," component provides a concise summary of test statistics such as total, passed, failed, and waiting results.",n.jsx(s.br,{}),`
`,"It presents the data visually with icons and colors to deliver an instant understanding of test performance and progress."]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{id:"-purpose",children:"🎯 Purpose"}),`
`,n.jsxs(s.p,{children:["The ",n.jsx(s.strong,{children:"StatsPanel"})," offers a clear and consistent way to display aggregated statistics in dashboards or evaluation panels.",n.jsx(s.br,{}),`
`,"It is built with ",n.jsx(s.strong,{children:"Material UI (MUI)"})," and designed following the ",n.jsx(s.strong,{children:"Component-Driven Development (CDD)"})," approach."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Core principles:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"✅ Clear visual distinction between statistics."}),`
`,n.jsx(s.li,{children:"🔁 Reusable and easy to theme."}),`
`,n.jsx(s.li,{children:"♿ Accessible and screen-reader friendly."}),`
`,n.jsx(s.li,{children:"🧩 Fully typed with TypeScript for safety and maintainability."}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{id:"️-props",children:"⚙️ Props"}),`
`,n.jsxs(s.p,{children:[`| Prop | Type | Description |
|------|------|-------------|
| `,n.jsx(s.code,{children:"totalTests"})," | ",n.jsx(s.code,{children:"number"}),` | Total number of tests. |
| `,n.jsx(s.code,{children:"passed"})," | ",n.jsx(s.code,{children:"number"}),` | Number of tests that passed successfully. |
| `,n.jsx(s.code,{children:"failed"})," | ",n.jsx(s.code,{children:"number"}),` | Number of tests that failed. |
| `,n.jsx(s.code,{children:"waiting"})," | ",n.jsx(s.code,{children:"number"})," | Number of tests pending or in progress. |"]}),`
`,n.jsxs(s.blockquote,{children:[`
`,n.jsx(s.p,{children:"⚠️ All props are required and must be numeric values."}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{id:"-structure",children:"🧱 Structure"}),`
`,n.jsx(s.p,{children:"The component is modular and easy to maintain:"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"StatsPanel.tsx"})," — Core component logic and rendering."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"StatsPanel.hook.ts"})," — Handles internal data calculations."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"StatsPanel.styles.ts"})," — Contains all style definitions."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"StatsPanel.types.ts"})," — Strict TypeScript typing."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"StatsPanel.constants.ts"})," — Icons, labels, and color mappings."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"StatsPanel.stories.tsx"})," — Storybook stories and demos."]}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{id:"-design",children:"🎨 Design"}),`
`,n.jsx(s.p,{children:"Each statistic card includes:"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["An ",n.jsx(s.strong,{children:"icon"})," (custom SVG or MUI icon)."]}),`
`,n.jsxs(s.li,{children:["A ",n.jsx(s.strong,{children:"number"})," showing the value."]}),`
`,n.jsxs(s.li,{children:["A ",n.jsx(s.strong,{children:"label"})," describing the metric."]}),`
`]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Visual highlights:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"Distinct colors for each category (passed, failed, waiting)."}),`
`,n.jsx(s.li,{children:"Modern, responsive card layout."}),`
`,n.jsx(s.li,{children:"Matches your MUI theme for brand consistency."}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{id:"-custom-icons",children:"🧩 Custom Icons"}),`
`,n.jsxs(s.p,{children:["You can use ",n.jsx(s.strong,{children:"custom SVG icons"})," exported from Figma or any design tool.",n.jsx(s.br,{}),`
`,"Simply add them to your assets folder and assign them to each statistic.",n.jsx(s.br,{}),`
`,"They will automatically adapt to MUI’s color and size settings for a consistent look."]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{id:"-example",children:"💡 Example"}),`
`,n.jsxs(s.p,{children:["A typical ",n.jsx(s.code,{children:"StatsPanel"})," might show:"]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"✅ 45 Passed"}),`
`,n.jsx(s.li,{children:"❌ 10 Failed"}),`
`,n.jsx(s.li,{children:"⏳ 5 Waiting"}),`
`]}),`
`,n.jsx(s.p,{children:"This gives users a quick and intuitive overview of overall performance."}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{id:"-best-practices",children:"🧠 Best Practices"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"Keep icon styles consistent."}),`
`,n.jsx(s.li,{children:"Use semantic colors (green for success, red for error, yellow for waiting)."}),`
`,n.jsx(s.li,{children:"Maintain high contrast for accessibility."}),`
`,n.jsx(s.li,{children:"Ensure responsiveness across screen sizes."}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsxs(s.p,{children:["✨ ",n.jsx(s.em,{children:"Built with Material UI and TypeScript for clarity, elegance, and performance."})]})]})}function o(e={}){const{wrapper:s}={...r(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{o as default};
