import{j as e}from"./iframe-B_A5R6B2.js";import{useMDXComponents as i}from"./index-U67S15Ep.js";import"./preload-helper-PPVm8Dsz.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"consoleio",children:"ConsoleIO"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"ConsoleIO"})," component provides an interactive console interface with two tabs: ",e.jsx(n.strong,{children:"Sample"})," and ",e.jsx(n.strong,{children:"Custom"}),`.
It allows users to view predefined data samples or input their own custom values. The component is fully responsive, accessible, and integrated with the application theme via `,e.jsx(n.strong,{children:"Material UI"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"purpose",children:"Purpose"}),`
`,e.jsx(n.p,{children:`The component is designed to simulate data input in a console-like environment.
It is particularly useful for:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Testing and visualizing sample input for algorithms."}),`
`,e.jsx(n.li,{children:"Allowing users to provide custom test cases."}),`
`,e.jsx(n.li,{children:"Educational or assessment tools that require interactive text areas."}),`
`,e.jsx(n.li,{children:"Maintaining consistent layout and scroll behavior in limited space."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"sampleValue?: string"}),`
Initial text for the `,e.jsx(n.strong,{children:"Sample"})," tab. Default is an empty string."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"customValue?: string"}),`
Initial text for the `,e.jsx(n.strong,{children:"Custom"})," tab. Default is an empty string."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"onSampleChange?: (value: string) => void"}),`
Callback triggered when the text in the `,e.jsx(n.strong,{children:"Sample"})," tab changes."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"onCustomChange?: (value: string) => void"}),`
Callback triggered when the text in the `,e.jsx(n.strong,{children:"Custom"})," tab changes."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"defaultTab?: 'sample' | 'custom'"}),`
Specifies which tab is active when the component is rendered.
Default value: `,e.jsx(n.code,{children:"'sample'"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"height?: number | string"}),`
Height of the console container.
If not defined, it uses the theme value: `,e.jsx(n.code,{children:"theme.consoleIO.dimensions.containerHeight"})," (default 502px)."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"width?: number | string"}),`
Width of the console container.
If not defined, it uses the theme value: `,e.jsx(n.code,{children:"theme.consoleIO.dimensions.containerWidth"})," (default 260px, up to 100%)."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"data-testid?: string"}),`
Identifier for testing with React Testing Library.
Default value: `,e.jsx(n.code,{children:"'consoleio-root'"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"behavior-and-accessibility",children:"Behavior and Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tabs remain visible even when text content is large."}),`
`,e.jsx(n.li,{children:"Each text area supports scrolling and multi-line input."}),`
`,e.jsxs(n.li,{children:["Implements ARIA roles (",e.jsx(n.code,{children:'role="region"'}),", ",e.jsx(n.code,{children:"aria-label"}),") for screen readers."]}),`
`,e.jsx(n.li,{children:"Fully compatible with responsive layouts defined in the project theme."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ConsoleIO
  sampleValue={\`2\\n6 3\\n0 5 5 6 6 6\\n8 2\\n0 0 1 1 2 2 2 2\`}
  customValue="Enter your own test data here"
  defaultTab="sample"
  onSampleChange={(value) => console.log('Sample changed:', value)}
  onCustomChange={(value) => console.log('Custom changed:', value)}
  height={502}
  width={260}
  data-testid="consoleio-root"
/>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"height"})," and ",e.jsx(n.code,{children:"width"})," adapt dynamically if the theme values change."]}),`
`,e.jsx(n.li,{children:"Works seamlessly with automated tests and Storybook examples."}),`
`,e.jsxs(n.li,{children:["Styling and structure are defined in ",e.jsx(n.code,{children:"ConsoleIO.styles.ts"})," for consistent visual behavior."]}),`
`]}),`
`,e.jsx(n.hr,{})]})}function a(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{a as default};
