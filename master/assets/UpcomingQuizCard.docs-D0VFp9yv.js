import{j as e}from"./iframe-Daz-jIZZ.js";import{useMDXComponents as t}from"./index-D4d54bHW.js";import"./preload-helper-PPVm8Dsz.js";function r(i){const n={br:"br",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"-upcomingquizcard",children:"🧩 UpcomingQuizCard"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"UpcomingQuizCard"})," component displays concise information about an upcoming quiz or competition.",e.jsx(n.br,{}),`
`,"It highlights the event date, provides a short description, and includes a clear call-to-action for registration."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-features",children:"✨ Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"📅 Displays a formatted event date with an icon for quick recognition."}),`
`,e.jsx(n.li,{children:"📝 Optionally includes a brief description of the quiz or competition."}),`
`,e.jsxs(n.li,{children:["🚀 Includes a ",e.jsx(n.strong,{children:"“Register Now”"})," button that triggers a callback when clicked."]}),`
`,e.jsxs(n.li,{children:["🎨 Fully customizable through MUI’s theme and ",e.jsx(n.code,{children:"sx"})," prop."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"️-props",children:"⚙️ Props"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Prop"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx("code",{children:"title"})})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"✅"}),e.jsx("td",{children:"Title of the quiz or competition."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx("code",{children:"date"})})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"string"})," | ",e.jsx("code",{children:"Date"})]})}),e.jsx("td",{children:"✅"}),e.jsx("td",{children:e.jsxs(n.p,{children:["Date of the upcoming event. Formatted using the default pattern defined in"," ",`
`,e.jsx("code",{children:"UpcomingQuizCard.constants.ts"}),"."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx("code",{children:"description"})})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"❌"}),e.jsx("td",{children:"Additional text describing the event (optional)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx("code",{children:"onRegister"})})}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"✅"}),e.jsx("td",{children:e.jsxs(n.p,{children:["Callback executed when the user clicks the ",e.jsx("strong",{children:"Register Now"})," button."]})})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-usage-example",children:"🧱 Usage Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { UpcomingQuizCard } from '@/components/UpcomingQuizCard';

function Example() {
  return (
    <UpcomingQuizCard
      title="Upcoming Quiz Competition"
      date="2023-08-12"
      description="Join our next exciting quiz and test your knowledge!"
      onRegister={() => alert('Registered!')}
    />
  );
}
`})})]})}function o(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{o as default};
