import{j as e}from"./iframe-BRX_71o6.js";import{useMDXComponents as t}from"./index-myxheGJr.js";import{M as o}from"./index-Dv3u-99W.js";import{S as s}from"./SearchBar.stories-D09uXmYU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ct54OZN_.js";import"./index-DXeo632p.js";import"./index-BkCMgsg5.js";import"./SearchBar-DN__Cj2O.js";import"./styled-Dgl-pF-t.js";import"./Box-tMQBHcoo.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./IconButton-Dqcwngt5.js";import"./memoTheme-BlWuTX7k.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-cafSKK66.js";import"./useForkRef-C5tm8CUz.js";import"./CircularProgress-DNquG6yz.js";import"./TextField-mobzyVLn.js";import"./useSlot-B3TPH8by.js";import"./FormLabel-CvBnt9fQ.js";import"./Menu-DcYQ44pu.js";import"./Paper-Cw_AY7ot.js";import"./useTheme-D9Extguz.js";import"./createChainedFunction-BO_9K8Jh.js";import"./createSvgIcon-C1PUI8r_.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:s}),`
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
`})})]})}function X(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{X as default};
