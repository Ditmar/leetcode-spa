import{B as n}from"./iframe-Bc3yLYbu.js";import{useMDXComponents as o}from"./index-ZhtM779C.js";import{b as r}from"./index-BxlGvGZj.js";import{C as i}from"./ContestPage.stories-CMcoF-Un.js";import"./preload-helper-BAofFq-6.js";import"./index-DRNTb4St.js";import"./index-CaNQKFJr.js";import"./index-CWvCyf-2.js";import"./schemas-CxL56DE6.js";import"./Close-CdvGKYxd.js";import"./createSvgIcon-ePGeEcF9.js";import"./memoTheme-Cu4BbxR6.js";function s(e){const t={h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:i}),`
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
