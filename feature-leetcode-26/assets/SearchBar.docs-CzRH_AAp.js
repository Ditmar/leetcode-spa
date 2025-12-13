import{j as e}from"./iframe-BYnqHnf9.js";import{useMDXComponents as t}from"./index-Dlwsqb3J.js";import{M as o}from"./index-BuVHzE3K.js";import{S as s}from"./SearchBar.stories-JTidFkyM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DorL0gny.js";import"./index-BMb3R6Lf.js";import"./index-jc3_d-Ra.js";import"./styled-BLd1t_mp.js";import"./Box-B4sbdnWt.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./IconButton-CoDgz25U.js";import"./memoTheme-DpzkB_Fh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-AL3AkMuc.js";import"./useForkRef-IWBOgZX8.js";import"./CircularProgress-lEVFanJv.js";import"./TextField-dKkC0wpK.js";import"./useSlot-BmEGsPYf.js";import"./FormLabel-TYChV4dG.js";import"./Menu-DDldz-1g.js";import"./Paper-CikuVg2W.js";import"./useTheme-B4jJszbB.js";import"./createChainedFunction-BO_9K8Jh.js";import"./createSvgIcon-BIfm9kAC.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:s}),`
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
