import{B as t}from"./iframe-CX1og2HH.js";import{useMDXComponents as o}from"./index-Cj0cHQGW.js";import{b as r}from"./index-DWjQAehO.js";import{C as i}from"./ContestPage.stories-BvyloPQs.js";import"./preload-helper-ASOJwovS.js";import"./index-Cd0CMK7K.js";import"./index-ClgnlDIS.js";import"./index-BQa5oByz.js";import"./AppConfigContext-dNFApS-M.js";import"./authService-trwwFCe5.js";import"./Close-BglbmrYK.js";import"./createSvgIcon-COBrVubV.js";import"./memoTheme-DEhvJDub.js";function s(e){const n={h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:i}),`
`,t.jsx(n.h1,{id:"contestpage",children:"ContestPage"}),`
`,t.jsx(n.p,{children:"Page component that displays all contests grouped by status."}),`
`,t.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(n.p,{children:"The page fetches contests server-side and renders them in three sections:"}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Active"}),": Currently running contests"]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Upcoming"}),": Contests open for registration"]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Past"}),": Completed contests (limited to 10 on SSR)"]}),`
`]}),`
`,t.jsx(n.h2,{id:"notes",children:"Notes"}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsx(n.li,{children:"Contest status is derived from the backend, never computed from timestamps"}),`
`,t.jsx(n.li,{children:"Join/Register actions require authentication"}),`
`,t.jsx(n.li,{children:"Past contests load more via API route on scroll"}),`
`]})]})}function P(e={}){const{wrapper:n}={...o(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(s,{...e})}):s(e)}export{P as default};
