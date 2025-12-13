import{j as e}from"./iframe-CJPkHst1.js";import{useMDXComponents as t}from"./index-DY48i7ig.js";import{M as o}from"./index-BvkGRF8d.js";import{S as s}from"./SearchBar.stories-Dus3A2WG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CK0_T2ki.js";import"./index-BvE6mbir.js";import"./index-BAQMrmLo.js";import"./styled-BSb4GgNo.js";import"./Box-Dgrd9adr.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./IconButton-DwtDL6wq.js";import"./memoTheme-CP52nyml.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Dl1vsfgk.js";import"./useForkRef-B_zzh6yk.js";import"./CircularProgress-gpPny69h.js";import"./TextField-BAJAxUj4.js";import"./useSlot-CWM-VmPF.js";import"./FormLabel-Ccu8T5Pp.js";import"./Menu-1ItcTNQS.js";import"./Paper-4vgbF-3M.js";import"./useTheme-n0w4Q_Pb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./createSvgIcon-B9fmqOlm.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:s}),`
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
