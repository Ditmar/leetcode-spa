import{j as e}from"./iframe-CEn1ZBP7.js";import{useMDXComponents as t}from"./index-DyNtegzv.js";import{M as o}from"./index-DMGJPAMX.js";import{S as s}from"./SearchBar.stories-BwjvFqa0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bf4FHVoc.js";import"./index-B85ovEQ7.js";import"./index-Ct1CJF-j.js";import"./styled-BKjXqy8l.js";import"./Box-CKzBk-0Y.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./IconButton-CWVhoxeK.js";import"./memoTheme-BHjmkLdP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DX1_RF-D.js";import"./useForkRef-BzH44nra.js";import"./CircularProgress-9s_hQCQ9.js";import"./TextField-CxVTLzIE.js";import"./useSlot-DvePWZO4.js";import"./FormLabel-BDJeR9Fp.js";import"./Menu-B3CQ4XRb.js";import"./Paper-phXZrC-R.js";import"./useTheme-DMVEsciQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./createSvgIcon-BIROGdWJ.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:s}),`
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
