import{j as e}from"./iframe-5VXRrWqE.js";import{useMDXComponents as t}from"./index-D1ORHX7U.js";import{M as o}from"./index-JFJwPP5p.js";import{S as s}from"./SearchBar.stories-2KlxrNm2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cc68Sm1g.js";import"./index-C0DnJ2et.js";import"./index-CFLHt0ON.js";import"./styled-18z__iGd.js";import"./Box-CYdzziKj.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./IconButton-C8eagZxB.js";import"./memoTheme-D58MgG1o.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Boeh_JOO.js";import"./useForkRef-R8NAS1Br.js";import"./CircularProgress-DVNrQOfa.js";import"./TextField-Dr6wX5dX.js";import"./useSlot-D_l99Ysw.js";import"./FormLabel-ByJbxAdz.js";import"./Menu-C4dNm0Hs.js";import"./Paper-BH0TnTg9.js";import"./useTheme-WaE9HCFI.js";import"./createChainedFunction-BO_9K8Jh.js";import"./createSvgIcon-DM_idUWZ.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:s}),`
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
