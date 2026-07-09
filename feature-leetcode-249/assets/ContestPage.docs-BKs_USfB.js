import{B as t}from"./iframe-Y5g3EvZ5.js";import{useMDXComponents as o}from"./index-DeIzcfBo.js";import{b as r}from"./index-CYr-rL9_.js";import{C as i}from"./ContestPage.stories-B9HAaN4K.js";import"./preload-helper-DqXJTOSk.js";import"./index-jPs_ulAD.js";import"./index-CrNl_uLC.js";import"./index-Dt_hsijh.js";import"./schemas-CxL56DE6.js";import"./apiClient-DSpTvf5-.js";import"./Close-BksUUNsA.js";import"./createSvgIcon-C05H8EWP.js";import"./memoTheme-k6LRmvwn.js";function s(e){const n={h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:i}),`
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
