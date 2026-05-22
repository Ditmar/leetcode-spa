import{j as n}from"./iframe-zu6-297r.js";import{useMDXComponents as t}from"./index-CWcT0n0E.js";import{M as r}from"./index-DDQdo0pD.js";import{P as s}from"./Pagination.stories-4Zc-HTQP.js";import"./preload-helper-CpNkTWuq.js";import"./index-BZc9TH-8.js";import"./index-Bxs1CZgo.js";import"./index-lzPiMKNa.js";import"./memoTheme-BJbrIiWq.js";import"./Box-D8jztGZT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon--NSHC-Hr.js";import"./useSlot-CuHAh8z3.js";import"./mergeSlotProps-qHFBYhL5.js";import"./useForkRef-gsVn8ovA.js";import"./ButtonBase-VhIzEd2i.js";import"./useTimeout-Za5eRFCL.js";import"./useControlled-BZ7bQ0d5.js";import"./useTheme-DMsXR29k.js";import"./index-DmO4EDiU.js";import"./getThemeProps-BLYw_GMJ.js";import"./Typography-D3msUrSO.js";import"./Select-CTX1F2VI.js";import"./Menu-BPa3MLOX.js";import"./useSlotProps-B8pR_wEn.js";import"./Paper-CbFV_r2d.js";import"./Portal-Dl-qxWiS.js";import"./getReactElementRef-BgresWTf.js";import"./List-DgkyiYUz.js";import"./Fade-XDKoxu7r.js";import"./mergeSlotProps-DuVkWhSh.js";import"./Modal-BXO7didA.js";import"./utils-grRKEMug.js";import"./MenuItem-CY-3YJJM.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:s}),`
`,n.jsx(e.h1,{id:"pagination",children:"Pagination"}),`
`,n.jsxs(e.p,{children:["A responsive, accessible pagination component built on top of Material UI's ",n.jsx(e.code,{children:"Pagination"}),". This component strictly follows the design system rules and Component-Driven architecture guidelines."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Key Features:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Responsive Design:"})," Gracefully collapses into ",n.jsx(e.code,{children:"44x44px"})," icon-only buttons on mobile breakpoints (",n.jsx(e.code,{children:"md"}),", ",n.jsx(e.code,{children:"< 768px"}),") to prevent layout overflows and optimize touch targets for accessibility."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Custom Iconography:"})," Implements custom SVG arrow components matching exact Figma specifications (",n.jsx(e.code,{children:"1.33333px"})," stroke width)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Accessibility (a11y):"})," Utilizes ",n.jsx(e.code,{children:"aria-hidden"})," attributes on SVG elements and hidden text nodes to prevent screen reader duplication, relying purely on MUI's robust native ",n.jsx(e.code,{children:"aria-labels"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Theme Integration:"})," Dynamically inherits text colors via ",n.jsx(e.code,{children:"currentColor"}),", ensuring seamless adaptation to light/dark modes without hardcoded hex values."]}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import Pagination from './Pagination';

export const Example = () => {
  return (
    <Pagination count={5} onChange="{(event,"> console.log('Current page:', page)} 
    />
  );
};
`})})]})}function K(o={}){const{wrapper:e}={...t(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{K as default};
