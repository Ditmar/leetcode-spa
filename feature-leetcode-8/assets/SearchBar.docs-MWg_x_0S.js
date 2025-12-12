import{j as e}from"./iframe-Q8noQFNg.js";import{useMDXComponents as t}from"./index-YJ5lq4AY.js";import{M as o}from"./index-Ba_3XHoc.js";import{S as s}from"./SearchBar.stories-DecbOLwv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BzZ0BjmY.js";import"./index-B_JwjFOB.js";import"./index-DsqKrecb.js";import"./styled-Bshuk3B5.js";import"./Box-C7c3azwk.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./IconButton-DexcRCOp.js";import"./memoTheme-M7dNXEqj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BVdJ7-4e.js";import"./useForkRef-BnvfgVdu.js";import"./CircularProgress-BPJXaI6b.js";import"./TextField-niGwqyNF.js";import"./useSlot-CJghYUSf.js";import"./FormLabel-C3qxfvxj.js";import"./Menu-FQbW4izu.js";import"./Paper-QQ6gvdVz.js";import"./useTheme-DI5kVwrg.js";import"./createChainedFunction-BO_9K8Jh.js";import"./createSvgIcon-fk6r7D7X.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:s}),`
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
