import{j as e}from"./iframe-B_iitNTz.js";import{useMDXComponents as d}from"./index-0LxGQlm7.js";import{M as o,b as i,C as c}from"./index-C_ABTp1F.js";import{C as t,B as a,L as h,P as l,a as x}from"./Chart.stories-A-nI9QfC.js";import"./preload-helper-DwhB-lZM.js";import"./index-jIiAItpQ.js";import"./index-CGJTgZly.js";import"./index-DOn83Anm.js";import"./useTheme-Eewp-NFa.js";import"./memoTheme-ksSvtU1Q.js";import"./Portal-Ct1EhEWx.js";import"./useForkRef-BpEwIREP.js";import"./getReactElementRef-_KH7TpX7.js";import"./useSlotProps-CtSekwys.js";import"./mergeSlotProps-J3gHQ85u.js";import"./useTheme-BN5cMMPb.js";import"./Box-C0LMEkpf.js";import"./useTimeout-DG4TLwiL.js";import"./useThemeProps-BpAunXMt.js";import"./useThemeProps-B4asg9cr.js";import"./getThemeProps-DE3rGq0g.js";import"./Typography-CCeQAhea.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./index-XxTGKDw8.js";import"./IconButton-CcyIWCv6.js";import"./ButtonBase-CJ62Vgpb.js";import"./CircularProgress-B4cxczTo.js";import"./Button-ImHmbZCV.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:t}),`
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
`,e.jsx(i,{of:x}),`
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
always expands to 100 % of the parent container.`]})]})}function V(r={}){const{wrapper:n}={...d(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{V as default};
