import{j as e}from"./iframe-Ye7EZXcd.js";import{useMDXComponents as o}from"./index-C7uFMKYl.js";import{M as d,b as i,C as c}from"./index-YT1hvnD9.js";import{C as t,B as a,L as h,P as l,a as p}from"./Chart.stories-iNhchZGt.js";import"./preload-helper-BmzZtkUX.js";import"./index-B_SbP9QT.js";import"./index-DGz6fKmf.js";import"./index-uhSjecF3.js";import"./useTheme-D85gq2MK.js";import"./useTheme-Db4Ki_I8.js";import"./memoTheme-CApF4auh.js";import"./Box-FFfTI-Qf.js";import"./useTimeout-DC_OpWro.js";import"./useForkRef-Da5GFmiJ.js";import"./useThemeProps-CfW93udD.js";import"./useThemeProps-DnwsWlbT.js";import"./getThemeProps-DH73R2c1.js";import"./useSlotProps-DZT8vJAM.js";import"./mergeSlotProps-BGK6nFuh.js";import"./Typography-BFmPOQc8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./index-CLzTyUx6.js";import"./Popper-BQP2_7C8.js";import"./Portal-6P8DdYY1.js";import"./getReactElementRef-vYkNVS8u.js";import"./IconButton-b5AF9rEp.js";import"./ButtonBase-CuzrZX9i.js";import"./CircularProgress-BqB6zbcM.js";import"./Button-Q3HBBqu7.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:t}),`
`,e.jsx(n.h1,{id:"chart",children:"Chart"}),`
`,e.jsxs(n.p,{children:["A unified, responsive chart component built on top of ",e.jsx(n.code,{children:"@mui/x-charts"}),`.
It supports `,e.jsx(n.strong,{children:"bar"}),", ",e.jsx(n.strong,{children:"line"}),", and ",e.jsx(n.strong,{children:"pie"})," chart types through a single ",e.jsx(n.code,{children:"type"}),` prop
and adapts fluidly to any container width — from 320 px mobile screens to wide desktop layouts.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Chart } from './Chart';

<Chart
  type="bar"
  title="Monthly Revenue"
  series={[{ data: [180, 320, 240, 280, 210], label: 'Revenue' }]}
  xAxis={{ labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] }}
/>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(n.h3,{id:"bar",children:"Bar"}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(n.h3,{id:"line",children:"Line"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"pie",children:"Pie"}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h3,{id:"loading-skeleton",children:"Loading skeleton"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(c,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"design-tokens",children:"Design tokens"}),`
`,e.jsxs(n.p,{children:["Series colours reference the CSS variables defined in ",e.jsx(n.code,{children:"colors.css"}),`
(`,e.jsx(n.code,{children:"--chart-1"})," … ",e.jsx(n.code,{children:"--chart-5"}),`) so the chart adapts to light and dark mode
automatically — no hardcoded hex values anywhere in the component.`]}),`
`,e.jsxs(n.p,{children:[`| Token | Light | Dark |
|---|---|---|
| `,e.jsx(n.code,{children:"--chart-1"})," | ",e.jsx(n.code,{children:"#e8622a"})," | ",e.jsx(n.code,{children:"#3b6fd4"}),` |
| `,e.jsx(n.code,{children:"--chart-2"})," | ",e.jsx(n.code,{children:"#3ba89c"})," | ",e.jsx(n.code,{children:"#4db896"}),` |
| `,e.jsx(n.code,{children:"--chart-3"})," | ",e.jsx(n.code,{children:"#2e5f8a"})," | ",e.jsx(n.code,{children:"#c97a10"}),` |
| `,e.jsx(n.code,{children:"--chart-4"})," | ",e.jsx(n.code,{children:"#d4a017"})," | ",e.jsx(n.code,{children:"#a855f7"}),` |
| `,e.jsx(n.code,{children:"--chart-5"})," | ",e.jsx(n.code,{children:"#c97a10"})," | ",e.jsx(n.code,{children:"#ef4444"})," |"]}),`
`,e.jsxs(n.p,{children:["The loading skeleton uses ",e.jsx(n.code,{children:"--muted"})," (",e.jsx(n.code,{children:"#ececf0"})," light / ",e.jsx(n.code,{children:"#2a2a2a"}),` dark) — the
correct semantic token for placeholder surfaces in the design system.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The wrapper carries ",e.jsx(n.code,{children:'role="img"'}),"."]}),`
`,e.jsxs(n.li,{children:["A visually-hidden ",e.jsx(n.code,{children:"<span>"})," linked via ",e.jsx(n.code,{children:"aria-labelledby"})," provides the chart title to screen readers."]}),`
`,e.jsxs(n.li,{children:["The optional ",e.jsx(n.code,{children:"description"})," prop adds a second visually-hidden ",e.jsx(n.code,{children:"<span>"})," via ",e.jsx(n.code,{children:"aria-describedby"}),"."]}),`
`,e.jsx(n.li,{children:"All interactive elements (tooltips) are keyboard and touch accessible."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"responsive-behaviour",children:"Responsive behaviour"}),`
`,e.jsxs(n.p,{children:[`| Breakpoint | Behaviour |
|---|---|
| 320 px | Axis labels scale to `,e.jsx(n.code,{children:"11px"}),`; chart fills full width |
| 375 px | Standard rendering; chart fills full width |
| 768 px | Standard rendering |
| 1024 px + | Width capped by parent container |`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"height"})," prop (default ",e.jsx(n.code,{children:"320"}),`) controls the fixed vertical dimension; width
always expands to 100 % of the parent container.`]})]})}function W(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{W as default};
