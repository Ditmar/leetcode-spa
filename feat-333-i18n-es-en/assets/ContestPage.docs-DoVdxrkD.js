import{B as n}from"./iframe-C9DGdkmJ.js";import{useMDXComponents as o}from"./index-Cli_ZwK8.js";import{b as r}from"./index-Bu6v7qNu.js";import{C as i}from"./ContestPage.stories-73LT0C6y.js";import"./preload-helper-DyUpdmRI.js";import"./index-B2G1er-t.js";import"./index-6hU05Eyf.js";import"./index-CPkxEYaZ.js";import"./schemas-CxL56DE6.js";import"./Close-UmHc8erN.js";import"./createSvgIcon-BWDz87oz.js";import"./memoTheme-BapBv5U1.js";function s(e){const t={h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:i}),`
`,n.jsx(t.h1,{id:"contestpage",children:"ContestPage"}),`
`,n.jsx(t.p,{children:"Page component that displays all contests grouped by status."}),`
`,n.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(t.p,{children:"The page fetches contests server-side and renders them in three sections:"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Active"}),": Currently running contests"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Upcoming"}),": Contests open for registration"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Past"}),": Completed contests (limited to 10 on SSR)"]}),`
`]}),`
`,n.jsx(t.h2,{id:"notes",children:"Notes"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsx(t.li,{children:"Contest status is derived from the backend, never computed from timestamps"}),`
`,n.jsx(t.li,{children:"Join/Register actions require authentication"}),`
`,n.jsx(t.li,{children:"Past contests load more via API route on scroll"}),`
`]})]})}function C(e={}){const{wrapper:t}={...o(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(s,{...e})}):s(e)}export{C as default};
