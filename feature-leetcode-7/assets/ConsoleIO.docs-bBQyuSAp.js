import{j as n}from"./iframe-VBk2TfJO.js";import{useMDXComponents as l}from"./index-Cu5A-MY2.js";import"./preload-helper-PPVm8Dsz.js";function i(s){const e={br:"br",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"consoleio",children:"ConsoleIO"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.strong,{children:"ConsoleIO"})," component represents a ",n.jsx(e.strong,{children:"data entry console with two tabs"}),": ",n.jsx(e.strong,{children:"Sample"})," and ",n.jsx(e.strong,{children:"Custom"}),`.
It displays sample or custom values, captures changes using callbacks, and keeps tabs visible even if the content is large.
It is designed with `,n.jsx(e.strong,{children:"Material UI"}),", follows ",n.jsx(e.strong,{children:"Accessibility (ARIA)"})," and responsive design principles, and integrates easily with Storybook and automated testing."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"purpose",children:"Purpose"}),`
`,n.jsx(e.p,{children:"The component is used to simulate data entry in an interactive console, ideal for:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Testing example cases in algorithms."}),`
`,n.jsx(e.li,{children:"Custom user input."}),`
`,n.jsx(e.li,{children:"Integrating with educational simulations or interactive assessments."}),`
`,n.jsx(e.li,{children:"Maintaining a clean UI with invisible scrolling in large text areas."}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"sampleValue?: string"})}),n.jsx(e.br,{}),`
`,"Initial value of the tab ",n.jsx(e.strong,{children:"Sample"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"customValue?: string"})}),n.jsx(e.br,{}),`
`,"Initial value of the tab ",n.jsx(e.strong,{children:"Custom"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"onSampleChange?: (value: string) => void"})}),n.jsx(e.br,{}),`
`,"Callback that executes when the value in the tab changes ",n.jsx(e.strong,{children:"Sample"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"onCustomChange?: (value: string) => void"})}),n.jsx(e.br,{}),`
`,"Callback that executes when the value in the tab changes ",n.jsx(e.strong,{children:"Custom"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"defaultTab?: 'sample' | 'custom'"})}),n.jsx(e.br,{}),`
`,`Defines which tab is displayed by default.
Default value: `,n.jsx(e.code,{children:"'sample'"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"height?: number | string"})}),n.jsx(e.br,{}),`
`,`Console container height.
Default value: `,n.jsx(e.code,{children:"502px"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"width?: number | string"})}),n.jsx(e.br,{}),`
`,`Width of the console container.
Default value: `,n.jsx(e.code,{children:"100%"})," up to a maximum of ",n.jsx(e.code,{children:"260px"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"data-testid?: string"})}),n.jsx(e.br,{}),`
`,"Identifier for unit tests with ",n.jsx(e.code,{children:"React Testing Library"}),"."]}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"basic-usage-example",children:"Basic usage example"}),`
`,n.jsx(e.p,{children:"This example shows how to use the component with sample and custom values:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { ConsoleIO } from './ConsoleIO';

function App() {
  const handleSampleChange = (value: string) => {
    console.log('Sample changed:', value);
  };

  const handleCustomChange = (value: string) => {
    console.log('Custom changed:', value);
  };

  return (
    <ConsoleIO
      sampleValue={\`2\\n6 3\\n0 5 5 6 6 6\\n8 2\\n0 0 1 1 2 2 2 2\`}
      customValue="Here you can enter your own text"
      defaultTab="sample"
      height={502}
      width={260}
      onSampleChange={handleSampleChange}
      onCustomChange={handleCustomChange}
      data-testid="consoleio-root"
    />
  );
}
`})})]})}function a(s={}){const{wrapper:e}={...l(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{a as default};
