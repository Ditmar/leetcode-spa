import{j as e}from"./iframe-BxwNHAxo.js";import{useMDXComponents as a}from"./index-CKWhecdy.js";import"./preload-helper-PPVm8Dsz.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"leaderboardpage",children:"LeaderboardPage"}),`
`,e.jsx(n.p,{children:"Page component to display a user ranking. Implements:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Table view (desktop) and cards (mobile)."}),`
`,e.jsx(n.li,{children:"Highlight the current user."}),`
`]}),`
`,e.jsx(n.h2,{id:"data-shape",children:"Data shape"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type LeaderboardUser = {
  id: string;
  rank: number;
  avatarUrl?: string;
  fullName: string;
  username: string;
  points: number;
  testsPassed: number;
  lastActiveAt?: string; // ISO date
  category?: string;
};
`})}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The page loads data from a mocked API (",e.jsx(n.code,{children:"mockData.fetchLeaderboard"}),")."]}),`
`,e.jsx(n.li,{children:"While loading, it shows a spinner; in case of an error, it shows a message."}),`
`,e.jsx(n.li,{children:"Recommended: decouple fetch into a real service for production."}),`
`]})]})}function d(r={}){const{wrapper:n}={...a(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{d as default};
