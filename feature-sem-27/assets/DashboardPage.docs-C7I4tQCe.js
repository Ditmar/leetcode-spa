import{j as e}from"./iframe-MChe8Sk-.js";import{useMDXComponents as t}from"./index-DPeJJMkp.js";import"./preload-helper-PPVm8Dsz.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"dashboard-page",children:"Dashboard Page"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"DashboardPage"})," is the main component of the application, displaying user information, recent tests, statistics, and the leaderboard."]}),`
`,e.jsx(n.h2,{id:"integrated-components",children:"Integrated Components"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Logo"}),": Displays the application's logo."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"AvatarMenu"}),": User menu with avatar and options such as Profile and Log Out."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"SearchBar"}),": Search bar with debounce functionality."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TestCard"}),": Card that shows information about each test."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"UpcomingQuizCard"}),": Card showing upcoming quizzes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"StatsCard"}),": Displays statistics like number of tests taken and overall average."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DonutProgress"}),": Circular progress chart representing percentages."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"LeaderboardPage"}),": Leaderboard table (mocked for testing purposes)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"navigation",children:"Navigation"}),`
`,e.jsx(n.p,{children:"The dashboard includes a sidebar on desktop and a drawer menu on mobile, allowing access to:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tests"}),`
`,e.jsx(n.li,{children:"Dashboard"}),`
`,e.jsx(n.li,{children:"Courses"}),`
`,e.jsx(n.li,{children:"Profile"}),`
`,e.jsx(n.li,{children:"Leaderboard"}),`
`,e.jsx(n.li,{children:"Dark Mode"}),`
`,e.jsx(n.li,{children:"Settings"}),`
`,e.jsx(n.li,{children:"Log Out"}),`
`]}),`
`,e.jsx(n.h2,{id:"responsive-design",children:"Responsive Design"}),`
`,e.jsxs(n.p,{children:["The layout adapts to mobile screens using ",e.jsx(n.code,{children:"useMediaQuery"})," and ",e.jsx(n.code,{children:"theme.breakpoints"}),". Many components use the ",e.jsx(n.code,{children:"isMobile"})," prop to adjust styles such as position, size, and alignment."]}),`
`,e.jsx(n.h2,{id:"tests",children:"Tests"}),`
`,e.jsxs(n.p,{children:["During development, heavy components like ",e.jsx(n.strong,{children:"LeaderboardPage"})," have been mocked, and test data has been used for cards and statistics. It's recommended to update the tests and mocks when integrating with the real backend."]}),`
`,e.jsx(n.h2,{id:"notifications",children:"Notifications"}),`
`,e.jsx(n.p,{children:"A notification icon is displayed on desktop. Clicking it shows a notice with the number of pending user actions."})]})}function d(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{d as default};
