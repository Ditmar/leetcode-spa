import{A as e}from"./iframe-DT3W3DUV.js";import{useMDXComponents as t}from"./index-1HiZVyF1.js";import"./preload-helper-_rqtPjae.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"contestpage-component-documentation",children:"ContestPage Component Documentation"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ContestPage"})," is a comprehensive page-level component (organism) built with ",e.jsx(n.strong,{children:"Material UI (MUI)"})," following Component-Driven Development (CDD) principles. It serves as the main dashboard for developers to explore, register for, and review programming contests."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"component-composition",children:"Component Composition"}),`
`,e.jsx(n.p,{children:"This page aggregates several atomic and molecular elements into a single cohesive layout:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Page Header"}),': Displays the main section title ("Contests") and an informative subtitle.']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"KPI Summary Stats Bar"}),": Consists of 4 responsive ",e.jsx(n.code,{children:"Paper"})," cards showcasing vital contest metrics (Live Now, Upcoming, Ranking, and Contests Joined)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tab Controls"}),": A fully interactive Material UI ",e.jsx(n.code,{children:"Tabs"})," navigation system filtering content into dynamic timeframes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Responsive Content Grid"}),": Displays individual instances of the ",e.jsx(n.code,{children:"ContestCard"})," molecule."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"technical-specifications--features",children:"Technical Specifications & Features"}),`
`,e.jsx(n.h3,{id:"1-responsiveness-matrix",children:"1. Responsiveness Matrix"}),`
`,e.jsx(n.p,{children:"The layouts are fully adaptive using MUI's semantic grid layout API:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Stats Bar"}),": Renders as a 2-column grid layout on mobile screens (",e.jsx(n.code,{children:"xs={12}"}),", ",e.jsx(n.code,{children:"sm={6}"}),") and automatically switches into a 4-column row on desktop views (",e.jsx(n.code,{children:"md={3}"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Contest Cards Grid"}),": Seamless scaling across breakpoints using ",e.jsx(n.code,{children:"<Grid item xs={12} sm={6} md={4}>"})," to maintain a perfect multi-row deck."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"2-state--filtering-workflow-usecontestpage",children:["2. State & Filtering Workflow (",e.jsx(n.code,{children:"useContestPage"}),")"]}),`
`,e.jsx(n.p,{children:"The internal state machine handles view synchronization through a custom React Hook:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Active (Live Now)"}),": Live contests featuring quick actions like green ",e.jsx(n.code,{children:"Join Contest"})," buttons."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Upcoming"}),": Informative cards providing calendar scheduling and standard blue ",e.jsx(n.code,{children:"Register"})," calls to action."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Past"}),": Finished matchups offering analytical split actions (",e.jsx(n.code,{children:"Problems"})," and ",e.jsx(n.code,{children:"Leaderboards"}),")."]}),`
`]}),`
`,e.jsx(n.h3,{id:"3-accessibility-compliance-axe--aria",children:"3. Accessibility Compliance (axe / ARIA)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Semantic landmarks (",e.jsx(n.code,{children:"Typography"})," variations) are used to declare strict header hierarchies."]}),`
`,e.jsxs(n.li,{children:["Interactive ",e.jsx(n.code,{children:"Tabs"})," leverage keyboard access and focus management properties."]}),`
`,e.jsx(n.li,{children:"Dynamic counts inside Tab labels ensure clear contexts for screen readers."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"styling-architecture",children:"Styling Architecture"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Built strictly using Material UI's ",e.jsx(n.code,{children:"styled()"})," structural API."]}),`
`,e.jsxs(n.li,{children:["All spacings rely dynamically on ",e.jsx(n.code,{children:"theme.spacing"})," units to avoid bad hardcoded pixel constraints."]}),`
`,e.jsxs(n.li,{children:["Theme-compliant colors map to semantical statuses (",e.jsx(n.code,{children:"success.main"}),", ",e.jsx(n.code,{children:"primary.main"}),", and ",e.jsx(n.code,{children:"text.secondary"}),")."]}),`
`]})]})}function a(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{a as default};
