import{j as e}from"./iframe-Baxr9WIg.js";import{useMDXComponents as t}from"./index-B346eyQC.js";import{M as s}from"./index-BvWkNt0V.js";import{S as o}from"./SearchBar.stories-BYPRpNCG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-u0UULbsk.js";import"./index-BZarGFdQ.js";import"./index-DY3KWbtt.js";import"./memoTheme-DYXsJOTj.js";import"./Box-A7YcHPNB.js";import"./IconButton-fjWktM6l.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-XxmdL7-7.js";import"./useForkRef-H9wpwUH5.js";import"./CircularProgress-Bl3B7Gn2.js";import"./TextField-B7jykpq8.js";import"./useSlot-DxN2MSwG.js";import"./FormLabel-BdgQgk93.js";import"./Menu-B0Gop1kS.js";import"./Paper-Bzra0EPD.js";import"./useTheme-DyQGUgQJ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./createSvgIcon-CU4svwev.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:o}),`
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
`})})]})}function z(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{z as default};
