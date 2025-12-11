import{j as e}from"./iframe-BUhsRIXL.js";import{useMDXComponents as t}from"./index-CBHIxo9C.js";import{M as o}from"./index-9idZBL5p.js";import{S as s}from"./SearchBar.stories-DWK6-gyt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-YupCBZsX.js";import"./index-ANgT1R6O.js";import"./index-CMU5bB5T.js";import"./styled-DbGyQ3Da.js";import"./Box-BN8i3Tvn.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./IconButton-nRNpV8t0.js";import"./memoTheme-BRYm31pA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BZSI22s8.js";import"./useForkRef-C9Rks-C_.js";import"./CircularProgress-BrtQE9qf.js";import"./TextField-OnL-x8TH.js";import"./useSlot-ByxJPqPj.js";import"./FormLabel-BVSxsERk.js";import"./Menu-CYYx7DxU.js";import"./Paper-5ACXYKtl.js";import"./useTheme-jqJP0KYK.js";import"./createChainedFunction-BO_9K8Jh.js";import"./createSvgIcon-DYbw-1av.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:s}),`
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
