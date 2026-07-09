import{B as e}from"./iframe-DYvJtG78.js";import{useMDXComponents as o}from"./index-DYlfxDBt.js";import{b as i}from"./index-C--6tcte.js";import{L as a}from"./Label.stories-DpFXi89H.js";import"./preload-helper-BFbRC-vR.js";import"./index-sxsXC-Ik.js";import"./index-CWJW8VD9.js";import"./index-XteZBMVs.js";import"./InfoOutlined-Csj91hT4.js";import"./createSvgIcon-KYQpPD1R.js";import"./memoTheme-BF6-3y2Q.js";import"./TextField-D3yw_yGB.js";import"./useSlot-BSFUgiee.js";import"./mergeSlotProps-Dxsq_kEE.js";import"./useForkRef-gHv0hw9b.js";import"./Select-CDZ5Bpsn.js";import"./Menu-D4kTveBL.js";import"./useSlotProps-Dbis28LV.js";import"./Popover-DvDyIhwQ.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-Sl_6y8Hh.js";import"./useTheme-DKfz_ig_.js";import"./Fade-BMxnv1Mn.js";import"./useTimeout-CAIu7NkF.js";import"./getReactElementRef-DqGMkN-g.js";import"./mergeSlotProps-DXcvqVZg.js";import"./Modal-D71xbzdb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BS3lzQRu.js";import"./Paper-B6sjv5mh.js";import"./List-Dr-rxtnG.js";import"./utils-BcdU8BlP.js";import"./useControlled-DeRSGtE8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-DMzlq-hP.js";import"./FormHelperText-CaBqnlyK.js";import"./FormControl-Bauo7jun.js";import"./isMuiElement-BAwlneet.js";import"./Typography-CIMhb5YC.js";import"./IconButton-CJod3ChS.js";import"./ButtonBase-SJDKWdE-.js";import"./CircularProgress-BXM4oC0a.js";import"./Tooltip-DoQPXbty.js";import"./Popper-DUAm3kam.js";import"./Box-BXhib4Sm.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
`,e.jsx(t.h1,{id:"label",children:"Label"}),`
`,e.jsxs(t.p,{children:[`An accessible, responsive, and theme-aware form label component built on top
of MUI's `,e.jsx(t.code,{children:"InputLabel"})," family. It links text with form controls programmatically."]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Label"})," component provides proper HTML association via ",e.jsx(t.code,{children:"htmlFor"}),`, manages
mutually exclusive indicators (required vs. optional), handles error and disabled visual states,
and supports an optional contextual help tooltip.`]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"quick-start",children:"Quick Start"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import Label from './Label';

function Example() {
  return (
    <>
      <Label htmlFor="email-input" required>
        Email address
      </Label>
      <input id="email-input" type="email" required />
    </>
  );
}

Stories 
DefaultThe baseline presentation of a structural form label.

Required
Appends an asterisk and forces screen reader compliance.

Optional
Displays a fallback indicator text when fields are non-mandatory.

Error
Applies semantic error feedback colors derived from the active theme palette.

Disabled
Reduces parent element opacity to 60% and strips nested element interactivity.

With Tooltip
Includes an interactive help icon trigger for contextual descriptions.

Narrow Viewport
Validates wrap thresholds at 320px screen boundaries under 200% font scaling.

Prop Reference
LabelComponentProps



├── Label.tsx            # Component logic & JSX layout
├── Label.types.ts       # TypeScript interface rules and unions
├── Label.constants.ts   # Core string templates and indicator symbols
├── Label.hook.ts        # Isolated state control managing tooltips
├── Label.styles.ts      # MUI styled() styling declarations — no external CSS
├── Label.utils.ts       # Logic resolving exclusive visual parameters
├── Label.test.tsx       # Vitest + Testing Library structural test suite
├── Label.stories.tsx    # Component Story Format stories configuration
└── Label.docs.mdx       # This fileStackPackageRole@mui/materialv7InputLabel, Tooltip, IconButton, styled@mui/icons-materialContextual helper icons@emotion/reactCSS-in-JS style runtime environmentreactFunctional hooks and rendering engine
`})})]})}function ee(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{ee as default};
