import{j as e}from"./iframe-USR614Te.js";import{useMDXComponents as s}from"./index-BIBZhWZh.js";import"./preload-helper-PPVm8Dsz.js";function a(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"leaderboardpage",children:"LeaderboardPage"}),`
`,e.jsx(n.p,{children:"Componente de página para mostrar un ranking de usuarios. Implementa:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Vista de tabla (desktop) y cartas (mobile)."}),`
`,e.jsx(n.li,{children:"Resalta al usuario actual."}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"currentUserId?: string"})," — id del usuario actual para destacar su fila."]}),`
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
`,e.jsxs(n.li,{children:["La página carga datos desde una API simulada (",e.jsx(n.code,{children:"mockData.fetchLeaderboard"}),")."]}),`
`,e.jsx(n.li,{children:"Mientras carga muestra un spinner; en error muestra mensaje."}),`
`,e.jsx(n.li,{children:"Recomendado: desacoplar fetch en un servicio real para producción."}),`
`]})]})}function l(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(a,{...r})}):a(r)}export{l as default};
