import{j as n}from"./iframe-BhXiA5sQ.js";import{useMDXComponents as d}from"./index-B3rhVTSO.js";import"./preload-helper-PPVm8Dsz.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"title-landingpagesidebar_position-1",children:`title: LandingPage
sidebar_position: 1`}),`
`,n.jsx(e.h1,{id:"landingpage",children:"LandingPage"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.strong,{children:"LandingPage"})," is the main landing page of the site (route ",n.jsx(e.code,{children:"/"}),"). It is built with Material UI using ",n.jsx(e.code,{children:"Grid"}),", ",n.jsx(e.code,{children:"Box"}),", and ",n.jsx(e.code,{children:"styled()"})," to respect theme tokens and ensure responsiveness."]}),`
`,n.jsx(e.h2,{id:"architecture-and-responsibilities",children:"Architecture and Responsibilities"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"LandingPage.tsx"})," — Main component. Contains:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Navigation bar (links: ",n.jsx(e.code,{children:"Practice"}),", ",n.jsx(e.code,{children:"Explore"}),", ",n.jsx(e.code,{children:"Login"}),", ",n.jsx(e.code,{children:"Sign Up"}),")"]}),`
`,n.jsxs(e.li,{children:["Hero section with headline, description, and CTA ",n.jsx(e.code,{children:"Create Account"})]}),`
`,n.jsx(e.li,{children:"Example SearchBar"}),`
`,n.jsx(e.li,{children:"Visual area (avatar + container for decorative SVG)"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"LandingPage.styles.ts"})," — Styles using ",n.jsx(e.code,{children:"styled()"})," for:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"LandingRoot"})," (background with radial-gradient and linear-gradient as provided)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"HeroGrid"}),", ",n.jsx(e.code,{children:"HeroLeft"}),", ",n.jsx(e.code,{children:"HeroRight"}),", ",n.jsx(e.code,{children:"AvatarImage"}),", ",n.jsx(e.code,{children:"DecorativeSvgContainer"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"LandingPage.types.ts"})," — Props typings (",n.jsx(e.code,{children:"avatarSrc"}),", ",n.jsx(e.code,{children:"decorativeSvgSrc"}),", ",n.jsx(e.code,{children:"compact"}),")."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"LandingPage.test.tsx"})," — Unit tests that ensure:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Basic rendering"}),`
`,n.jsxs(e.li,{children:["Integration with ",n.jsx(e.code,{children:"react-router-dom"})," and navigation to ",n.jsx(e.code,{children:"/signup"})," and ",n.jsx(e.code,{children:"/login"})]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import LandingPage from 'src/components/LandingPage/LandingPage';

<LandingPage />
`})})]})}function l(i={}){const{wrapper:e}={...d(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{l as default};
