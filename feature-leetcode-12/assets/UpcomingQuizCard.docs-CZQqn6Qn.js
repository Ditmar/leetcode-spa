import{j as e}from"./iframe-D7QogTOB.js";import{useMDXComponents as r}from"./index-CBD9uyyL.js";import"./preload-helper-PPVm8Dsz.js";function t(i){const n={br:"br",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"-upcomingquizcard",children:"🧩 UpcomingQuizCard"}),`
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
`,e.jsxs(n.p,{children:[`| Prop | Type | Required | Description |
|------|------|-----------|-------------|
| `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"title"})})," | ",e.jsx(n.code,{children:"string"}),` | ✅ Yes | Title of the quiz or competition. |
| `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"date"})})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"Date"})," | ✅ Yes | Date of the upcoming event. Formatted using the default pattern defined in ",e.jsx(n.code,{children:"UpcomingQuizCard.constants.ts"}),`. |
| `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"description"})})," | ",e.jsx(n.code,{children:"string"}),` | ❌ No | Additional text describing the event (optional). |
| `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"onRegister"})})," | ",e.jsx(n.code,{children:"() => void"})," | ✅ Yes | Callback executed when the user clicks the ",e.jsx(n.strong,{children:"Register Now"})," button. |"]}),`
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
`})})]})}function d(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{d as default};
