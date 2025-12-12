import{j as e}from"./iframe-By9oDIFG.js";import{useMDXComponents as t}from"./index-3x0hwhBB.js";import{M as o}from"./index-DWPemJYS.js";import{S as s}from"./SearchBar.stories-CZyopj_L.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CKX3in54.js";import"./index-CF03PNIa.js";import"./index-DOUNwalG.js";import"./styled-BMa38GKl.js";import"./Box-CDY4kTgU.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./IconButton-Bo_RBjQ_.js";import"./memoTheme-CuFESvgY.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BG8klWe_.js";import"./useForkRef-Di-RfQfR.js";import"./CircularProgress-DWBpkfnl.js";import"./TextField-CbsdzQx0.js";import"./useSlot-BKTr1rLT.js";import"./FormLabel-C2OAZ_Yf.js";import"./Menu-AwVehJZQ.js";import"./Paper-B6E4hKUo.js";import"./useTheme-CaKopYfT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./createSvgIcon-B8i6Pyj3.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:s}),`
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
