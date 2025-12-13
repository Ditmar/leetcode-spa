import{j as e}from"./iframe-CbPWQJMI.js";import{useMDXComponents as t}from"./index-BJIdQmVP.js";import{M as o}from"./index-DpbkMEQN.js";import{S as s}from"./SearchBar.stories-CiAvIWYm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DHFYvFkY.js";import"./index-Df4x1yrX.js";import"./index-JKLECjmG.js";import"./styled-CWyBTFK3.js";import"./Box-De5YmTEK.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./IconButton-tG9qXBAx.js";import"./memoTheme-BZIGFcjn.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BEjIkexb.js";import"./useForkRef-DZ0jfNdT.js";import"./CircularProgress-Bf71ZnaK.js";import"./TextField-CzhVs3nr.js";import"./useSlot-PStbKkOJ.js";import"./FormLabel-BllX_Gpn.js";import"./Menu-BBO_g0SF.js";import"./Paper-C0G-UZo6.js";import"./useTheme-BUK6nqLM.js";import"./createChainedFunction-BO_9K8Jh.js";import"./createSvgIcon-BW2liwI2.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:s}),`
`,e.jsx(r.h1,{id:"searchbar-component",children:"SearchBar Component"}),`
`,e.jsx(r.p,{children:"A reusable and customizable search bar component built with Material-UI. Features debounced input handling, keyboard navigation support, and accessible design patterns."}),`
`,e.jsx(r.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(r.p,{children:"The SearchBar provides a user-friendly search interface with:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Debounced search queries"})," to optimize performance"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Material-UI integration"})," with consistent styling"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Keyboard support"})," (Enter key triggers search)"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Accessibility features"})," including ARIA labels"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Customizable styling"})," via theme props"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Comprehensive testing"})," with user interaction coverage"]}),`
`]}),`
`,e.jsx(r.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { SearchBar } from './SearchBar';

const MyComponent = () => {
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  return (
    <SearchBar 
      onSearch={handleSearch}
      placeholder="Search content..."
    />
  );
};
`})})]})}function U(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{U as default};
