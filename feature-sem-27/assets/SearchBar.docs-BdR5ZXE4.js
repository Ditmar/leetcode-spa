import{j as e}from"./iframe-C35K96RD.js";import{useMDXComponents as t}from"./index-B7twQZhL.js";import{M as o}from"./index-D4clM3DN.js";import{S as s}from"./SearchBar.stories-L6Vns0I7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-78TEFU4M.js";import"./index-CTcBBn0L.js";import"./index-CXTHnBoN.js";import"./SearchBar-D4ToPFsd.js";import"./styled-CnzOWJBU.js";import"./Box-D6xhJ_8i.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./IconButton-BMtOeneD.js";import"./memoTheme-D5_KbJsb.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-eecn1FeX.js";import"./useForkRef--WX6nZ_r.js";import"./CircularProgress-BVleUHa2.js";import"./TextField-BAFBzmg8.js";import"./useSlot-BJmFq45F.js";import"./FormLabel-DfC6DWJP.js";import"./Menu-OvsZF9pF.js";import"./Paper-ByygLgf8.js";import"./useTheme-dUF3IGmu.js";import"./createChainedFunction-BO_9K8Jh.js";import"./createSvgIcon-3fXcQLFb.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:s}),`
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
