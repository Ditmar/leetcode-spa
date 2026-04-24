import{j as n}from"./iframe-f3d307B9.js";import{useMDXComponents as o}from"./index-C-5RC7ab.js";import{M as t}from"./index-BgD6NeZ6.js";import{M as s}from"./Menubar.stories-YcgXpqUv.js";import"./preload-helper-MFNisOH2.js";import"./index-DI38BPma.js";import"./index-c9KyqlCX.js";import"./index-Cic1_HQy.js";import"./createSvgIcon-BfkvCvwi.js";import"./ButtonBase-BSbrZmmz.js";import"./index-Bel3bsIV.js";import"./getThemeProps-D3Bz4dwl.js";import"./useTheme-CVXa2ma5.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-UYg39ne5.js";import"./IconButton-DEDKDPSg.js";import"./CircularProgress-DPdrCYxY.js";import"./Menu-BiSkh4nr.js";import"./useSlot-CbzKJB7C.js";import"./mergeSlotProps-gylB1LjV.js";import"./useSlotProps-C0G7yyKu.js";import"./Modal-CiCvjEmz.js";import"./Fade-BQVFFylG.js";import"./mergeSlotProps-ws8DNicX.js";import"./MenuItem-CgTbwmdo.js";import"./Box-B2y2oCuq.js";import"./Button-C7MPt4PF.js";import"./Collapse-BYj8Zc3O.js";function i(r){const e={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:s}),`
`,n.jsx(e.h1,{id:"menubar",children:"Menubar"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.strong,{children:"Menubar"})," component provides a responsive navigation system built with Material UI. It displays a horizontal menu on desktop and collapses into a hamburger menu with a drawer on mobile devices."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"features",children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Horizontal navigation bar for desktop"}),`
`,n.jsxs(e.li,{children:["Dropdown menus using Material UI ",n.jsx(e.code,{children:"Menu"})]}),`
`,n.jsxs(e.li,{children:["Mobile responsive design with ",n.jsx(e.code,{children:"Drawer"})]}),`
`,n.jsx(e.li,{children:"Keyboard navigation support"}),`
`,n.jsx(e.li,{children:"Accessible (ARIA roles supported)"}),`
`,n.jsx(e.li,{children:"Supports icons and nested menu items"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Menubar } from '@/component-catalog/Menubar';

const items = [
  {
    label: 'File',
    children: [
      { label: 'New' },
      { label: 'Open' },
    ],
  },
  {
    label: 'Edit',
    children: [
      { label: 'Undo' },
      { label: 'Redo' },
    ],
  },
];

<Menubar items={items} />;
`})})]})}function N(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{N as default};
