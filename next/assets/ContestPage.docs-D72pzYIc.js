import{B as t}from"./iframe-BK4VGEPv.js";import{useMDXComponents as o}from"./index-CqK1eNBr.js";import{b as r}from"./index-CBuQ0nrC.js";import{C as i}from"./ContestPage.stories-C26K4EdL.js";import"./preload-helper-B1AL8F-k.js";import"./index-Dz-flCJv.js";import"./index-Dp24jD42.js";import"./index-CAOiTG_8.js";import"./authService-DvqEhDAi.js";import"./schemas-CxL56DE6.js";import"./Close-CHstRLN3.js";import"./createSvgIcon-b1NoP750.js";import"./memoTheme-BnQ5TlGJ.js";function s(e){const n={h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:i}),`
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
