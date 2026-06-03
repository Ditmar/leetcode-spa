import{A as n}from"./iframe-DlzgM5CL.js";import{useMDXComponents as t}from"./index-CxENd-rc.js";import{b as r}from"./index-l0zZV9Ck.js";import{P as s}from"./Pagination.stories-C-IkeCq2.js";import"./preload-helper-CpNkTWuq.js";import"./index-MYNaHrwY.js";import"./index-De8kO_3_.js";import"./index-BC_DHlzP.js";import"./memoTheme-CP8vT6en.js";import"./Box-AYEBVf2s.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-B6lR5ZlH.js";import"./useSlot-l-IRVAUf.js";import"./mergeSlotProps-ClX9Txbx.js";import"./useForkRef-CQ3GEzE0.js";import"./ButtonBase-ymp6DFjz.js";import"./useTimeout-DdMtKfQ9.js";import"./useControlled-BtvdzQmh.js";import"./useTheme-DExgo06E.js";import"./index-DGOzeyum.js";import"./getThemeProps-SYw5r_-6.js";import"./Typography-BicQbDaz.js";import"./Select-5E5GZGJC.js";import"./Menu-C8FErpxZ.js";import"./useSlotProps-BQ4O4C3S.js";import"./Paper-CpyJY650.js";import"./Portal-BrJvgoz3.js";import"./getReactElementRef-C800mnh5.js";import"./ownerWindow-B62T87w7.js";import"./List-B5wtc-Sl.js";import"./Grow-CKH3dDkn.js";import"./Fade-CKJM46dQ.js";import"./mergeSlotProps-CoBByt-s.js";import"./Modal-1ul0piQO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./utils-CUSZq9Xo.js";import"./MenuItem-Bjxn0Ajs.js";function i(e){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:s}),`
`,n.jsx(o.h1,{id:"pagination",children:"Pagination"}),`
`,n.jsxs(o.p,{children:["A responsive, accessible pagination component built on top of Material UI's ",n.jsx(o.code,{children:"Pagination"}),". This component strictly follows the design system rules and Component-Driven architecture guidelines."]}),`
`,n.jsx(o.p,{children:n.jsx(o.strong,{children:"Key Features:"})}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"Responsive Design:"})," Gracefully collapses into ",n.jsx(o.code,{children:"44x44px"})," icon-only buttons on mobile breakpoints (",n.jsx(o.code,{children:"md"}),", ",n.jsx(o.code,{children:"< 768px"}),") to prevent layout overflows and optimize touch targets for accessibility."]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"Custom Iconography:"})," Implements custom SVG arrow components matching exact Figma specifications (",n.jsx(o.code,{children:"1.33333px"})," stroke width)."]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"Accessibility (a11y):"})," Utilizes ",n.jsx(o.code,{children:"aria-hidden"})," attributes on SVG elements and hidden text nodes to prevent screen reader duplication, relying purely on MUI's robust native ",n.jsx(o.code,{children:"aria-labels"}),"."]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"Theme Integration:"})," Dynamically inherits text colors via ",n.jsx(o.code,{children:"currentColor"}),", ensuring seamless adaptation to light/dark modes without hardcoded hex values."]}),`
`]}),`
`,n.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import Pagination from './Pagination';

export const Example = () => {
  return (
    <Pagination count={5} onChange="{(event,"> console.log('Current page:', page)} 
    />
  );
};
`})})]})}function q(e={}){const{wrapper:o}={...t(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(i,{...e})}):i(e)}export{q as default};
