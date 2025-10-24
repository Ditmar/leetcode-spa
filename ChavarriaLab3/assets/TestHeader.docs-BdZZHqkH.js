import{j as e}from"./iframe-C7CtX-kj.js";import{useMDXComponents as l}from"./index-SW2sdWds.js";import"./preload-helper-PPVm8Dsz.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"testheader",children:"TestHeader"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"TestHeader"})," component displays the main identification section for a quiz or competition, featuring a logo, title, and subtitle in a clean, responsive layout. It automatically adapts to mobile and desktop views, ensuring a consistent experience across all devices."]}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Displays a logo, title, and subtitle with consistent spacing and hierarchy."}),`
`,e.jsx(n.li,{children:"Fully responsive: switches to a vertical (stacked) layout on smaller screens."}),`
`,e.jsxs(n.li,{children:["Flexible variants: supports horizontal and vertical orientations via the ",e.jsx(n.code,{children:"variant"})," prop."]}),`
`,e.jsx(n.li,{children:"Loading state: shows placeholders (MUI Skeleton) while data is loading."}),`
`,e.jsxs(n.li,{children:["Scalable sizes: allows choosing between ",e.jsx(n.code,{children:"small"}),", ",e.jsx(n.code,{children:"medium"}),", or ",e.jsx(n.code,{children:"large"})," for logo and text."]}),`
`,e.jsxs(n.li,{children:["Design system compliant: uses MUI ",e.jsx(n.code,{children:"Box"}),", ",e.jsx(n.code,{children:"Card"}),", and ",e.jsx(n.code,{children:"Typography"})," components with theme tokens."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessible:"})," includes semantic roles, ",e.jsx(n.code,{children:"alt"})," attributes, and ARIA descriptions for screen readers."]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"logoSrc"})," (string, optional): Path or URL of the logo image. Displays a placeholder if empty. Default: TCS default logo."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"title"})," (string, optional): Main title of the quiz or competition. Default: ",e.jsx(n.code,{children:'"TCS Quiz Competition"'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"subtitle"})," (string, optional): Secondary descriptive text shown below the title. Default: ",e.jsx(n.code,{children:'"TCS Campus Drive - 2023"'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"variant"})," (",e.jsx(n.code,{children:"horizontal"})," | ",e.jsx(n.code,{children:"vertical"}),", optional): Controls layout orientation. Default: ",e.jsx(n.code,{children:"horizontal"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"size"})," (",e.jsx(n.code,{children:"small"})," | ",e.jsx(n.code,{children:"medium"})," | ",e.jsx(n.code,{children:"large"}),", optional): Adjusts logo and typography sizes. Default: ",e.jsx(n.code,{children:"medium"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"isLoading"})," (boolean, optional): Displays loading placeholders when ",e.jsx(n.code,{children:"true"}),". Default: ",e.jsx(n.code,{children:"false"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"TestHeader"})," component is designed following accessibility (A11y) best practices to ensure an inclusive experience for all users."]}),`
`,e.jsx(n.h3,{id:"implementation-in-code",children:"Implementation in code"}),`
`,e.jsxs(n.p,{children:["Inside the ",e.jsx(n.code,{children:"TestHeader.tsx"})," file, the following accessibility features are applied:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Semantic banner role:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<div role="banner" data-testid="header-wrapper" ...>
`})}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import TestHeader from '@/components/TestHeader';
import tcsLogo from './assets/tcs-logo.svg';

function Example() {
  return (
    <TestHeader
      logoSrc={tcsLogo}
      title="TCS Quiz Competition"
      subtitle="Campus Drive - 2023"
      variant="horizontal"
      size="medium"
    />
  );
}
`})})]})}function c(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{c as default};
