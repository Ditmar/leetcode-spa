import{A as n}from"./iframe-CpSaSvcp.js";import{useMDXComponents as o}from"./index-CwFFfI_I.js";import{M as r}from"./index-Bm-cYnCl.js";import{C as i}from"./ContestPage.stories-Bo-ohmeL.js";import"./preload-helper-C64AJ8dX.js";import"./index-BLLWcEft.js";import"./index-Dirk0Tvn.js";import"./index-BKozYtUU.js";import"./Close-CQrqdYhs.js";import"./createSvgIcon-BNNoOJhg.js";import"./memoTheme-Dty88Gue.js";function s(t){const e={h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:i}),`
`,n.jsx(e.h1,{id:"contestpage",children:"ContestPage"}),`
`,n.jsx(e.p,{children:"Page component that displays all contests grouped by status."}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.p,{children:"The page fetches contests server-side and renders them in three sections:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Active"}),": Currently running contests"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Upcoming"}),": Contests open for registration"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Past"}),": Completed contests (limited to 10 on SSR)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"notes",children:"Notes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Contest status is derived from the backend, never computed from timestamps"}),`
`,n.jsx(e.li,{children:"Join/Register actions require authentication"}),`
`,n.jsx(e.li,{children:"Past contests load more via API route on scroll"}),`
`]})]})}function f(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{f as default};
