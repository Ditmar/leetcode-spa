import{j as e}from"./iframe-XV78-a3E.js";import{useMDXComponents as t}from"./index-D-tmrxoI.js";import{M as r,C as l,S as o}from"./index-Bxp17AvX.js";import{C as c,D as x}from"./CountdownTimer.stories-CQlHOQns.js";import{T as h,B as d}from"./Box-DtnLL6Pi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cd3C0BpU.js";import"./index-DewQFhbq.js";import"./styled-CCwdBTGt.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c,title:"Components/CountdownTimer/Docs"}),`
`,e.jsx(n.h1,{id:"-countdowntimer",children:"⏱ CountdownTimer"}),`
`,e.jsx(h,{variant:"body1",sx:{fontFamily:"Syne, sans-serif",mb:2},children:e.jsxs(n.p,{children:["The ",e.jsx("code",{children:"CountdownTimer"})," component displays a countdown timer in ",e.jsx("code",{children:"mm:ss"})," format. It is ideal for time-sensitive interfaces such as quizzes, surveys, or form submissions. The timer updates every second and triggers a callback when it reaches zero."]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-purpose",children:"🎯 Purpose"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Display a countdown in ",e.jsx(n.code,{children:"mm:ss"})," format"]}),`
`,e.jsx(n.li,{children:"Trigger a callback when time runs out"}),`
`,e.jsx(n.li,{children:"Provide visual feedback for timed interactions"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-features",children:"✨ Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Accepts ",e.jsx(n.code,{children:"seconds"})," and ",e.jsx(n.code,{children:"onComplete"})," props"]}),`
`,e.jsxs(n.li,{children:["Uses a custom hook (",e.jsx(n.code,{children:"useCountdownTimer"}),") for time management"]}),`
`,e.jsx(n.li,{children:"Formats time with leading zeros"}),`
`,e.jsx(n.li,{children:"Styled with MUI and theme tokens"}),`
`,e.jsx(n.li,{children:"Fully responsive and accessible"}),`
`,e.jsx(n.li,{children:"Includes unit tests and Storybook stories"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"️-props",children:"⚙️ Props"}),`
`,e.jsx(d,{sx:{overflowX:"auto",border:"1px solid #333",borderRadius:2,mt:2,mb:3,fontFamily:"Syne, sans-serif"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",minWidth:"600px"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{textAlign:"left",padding:"8px",borderBottom:"1px solid #555"},children:"Prop"}),e.jsx("th",{style:{textAlign:"left",padding:"8px",borderBottom:"1px solid #555"},children:"Type"}),e.jsx("th",{style:{textAlign:"left",padding:"8px",borderBottom:"1px solid #555"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px"},children:e.jsx("code",{children:"seconds"})}),e.jsx("td",{style:{padding:"8px"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px"},children:"Total time in seconds from which the countdown begins."})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px"},children:e.jsx("code",{children:"onComplete"})}),e.jsx("td",{style:{padding:"8px"},children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{style:{padding:"8px"},children:"Callback function triggered when the timer reaches zero."})]})]})]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-component-structure",children:"🧩 Component Structure"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CountdownTimer.tsx"}),": main component"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CountdownTimer.hook.ts"}),": custom hook for countdown logic"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CountdownTimer.constants.ts"}),": formatting constants"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CountdownTimer.styles.ts"}),": styled components with MUI"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CountdownTimer.types.ts"}),": TypeScript types"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CountdownTimer.test.tsx"}),": unit tests"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CountdownTimer.stories.tsx"}),": Storybook stories"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CountdownTimer.docs.mdx"}),": documentation"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-design-and-styles",children:"🎨 Design and Styles"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Typography and layout based on MUI"}),`
`,e.jsx(n.li,{children:"Font: Syne, bold weight"}),`
`,e.jsxs(n.li,{children:["Responsive sizing with ",e.jsx(n.code,{children:"theme.spacing"})]}),`
`,e.jsx(n.li,{children:"Color tokens for consistency"}),`
`,e.jsx(n.li,{children:"Accessible contrast and readable formatting"}),`
`]}),`
`,e.jsx(n.h3,{id:"-visual-style-reference",children:"🧾 Visual Style Reference"}),`
`,e.jsx(d,{sx:{overflowX:"auto",border:"1px solid #333",borderRadius:2,mt:2,mb:3,fontFamily:"Syne, sans-serif"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",minWidth:"600px"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{padding:"8px",borderBottom:"1px solid #555"},children:"Element"}),e.jsx("th",{style:{padding:"8px",borderBottom:"1px solid #555"},children:"Property"}),e.jsx("th",{style:{padding:"8px",borderBottom:"1px solid #555"},children:"Value"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px"},rowSpan:8,children:e.jsx("strong",{children:"Countdown Text"})}),e.jsx("td",{style:{padding:"8px"},children:"Font Family"}),e.jsx("td",{style:{padding:"8px"},children:"Syne"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px"},children:"Font Weight"}),e.jsx("td",{style:{padding:"8px"},children:"700"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px"},children:"Font Style"}),e.jsx("td",{style:{padding:"8px"},children:"Bold"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px"},children:"Font Size"}),e.jsx("td",{style:{padding:"8px"},children:"40px"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px"},children:"Leading Trim"}),e.jsx("td",{style:{padding:"8px"},children:"NONE"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px"},children:"Line Height"}),e.jsx("td",{style:{padding:"8px"},children:"100%"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px"},children:"Letter Spacing"}),e.jsx("td",{style:{padding:"8px"},children:"0%"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px"},children:"Text Transform"}),e.jsx("td",{style:{padding:"8px"},children:"Capitalize"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px"},children:e.jsx("strong",{children:"Countdown Background"})}),e.jsx("td",{style:{padding:"8px"},children:"Background"}),e.jsx("td",{style:{padding:"8px"},children:"#A9A9A9"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px"},rowSpan:7,children:e.jsx("strong",{children:"Chronometer Icon"})}),e.jsx("td",{style:{padding:"8px"},children:"Width"}),e.jsx("td",{style:{padding:"8px"},children:"44.79px"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px"},children:"Height"}),e.jsx("td",{style:{padding:"8px"},children:"46.35px"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px"},children:"Top"}),e.jsx("td",{style:{padding:"8px"},children:"1.04px"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px"},children:"Left"}),e.jsx("td",{style:{padding:"8px"},children:"2.6px"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px"},children:"Angle"}),e.jsx("td",{style:{padding:"8px"},children:"0°"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px"},children:"Opacity"}),e.jsx("td",{style:{padding:"8px"},children:"1"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px"},children:"Background"}),e.jsx("td",{style:{padding:"8px"},children:"#AE8CFA"})]})]})]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-accessibility",children:"♿ Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Uses semantic roles (",e.jsx(n.code,{children:'role="img"'}),", ",e.jsx(n.code,{children:"aria-label"}),")"]}),`
`,e.jsx(n.li,{children:"Keyboard-friendly layout"}),`
`,e.jsx(n.li,{children:"Clear visual hierarchy"}),`
`,e.jsx(n.li,{children:"Screen-reader compatible"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-unit-tests",children:"🧪 Unit Tests"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Validates countdown decrement"}),`
`,e.jsxs(n.li,{children:["Ensures ",e.jsx(n.code,{children:"onComplete"})," is called"]}),`
`,e.jsx(n.li,{children:"Verifies interval cleanup on unmount"}),`
`,e.jsx(n.li,{children:"Uses mocked timers for precision"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-storybook-usage",children:"📦 Storybook Usage"}),`
`,e.jsx(n.h3,{id:"default-timer",children:"Default Timer"}),`
`,e.jsx(l,{children:e.jsx(o,{of:x})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-best-practices-applied",children:"✅ Best Practices Applied"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Component-Driven Development (CDD)"}),`
`,e.jsx(n.li,{children:"Separation of concerns (logic, styles, types)"}),`
`,e.jsx(n.li,{children:"Reusability and scalability"}),`
`,e.jsx(n.li,{children:"WCAG AA accessibility"}),`
`,e.jsx(n.li,{children:"Responsive design"}),`
`,e.jsx(n.li,{children:"Full test coverage"}),`
`]})]})}function w(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{w as default};
