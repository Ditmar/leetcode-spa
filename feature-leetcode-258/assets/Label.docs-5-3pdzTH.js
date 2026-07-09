import{B as e}from"./iframe-BzEYekHv.js";import{useMDXComponents as o}from"./index-D56gizcR.js";import{b as i}from"./index-DwruI6JN.js";import{L as a}from"./Label.stories-B5ZdAWQ_.js";import"./preload-helper-DtVaB8p0.js";import"./index-WToI4pDP.js";import"./index-C71fFIxB.js";import"./index-DBMtb3EX.js";import"./InfoOutlined-5PkZLFzY.js";import"./createSvgIcon-Cs-f4lPS.js";import"./memoTheme-CloqLPAi.js";import"./TextField-Cgsf2yBr.js";import"./useSlot-Ct8xC_mF.js";import"./mergeSlotProps-DCnL9pr7.js";import"./useForkRef-Bxgr38lt.js";import"./Select-BZevWKDS.js";import"./Menu-D3788wme.js";import"./useSlotProps-Dd_iR8dz.js";import"./Popover-VWt3zoIo.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BTkxvVKG.js";import"./useTheme-BzxaUFkq.js";import"./Fade-DCj83C3X.js";import"./useTimeout-DOuhej5V.js";import"./getReactElementRef-DP_Jkr-K.js";import"./mergeSlotProps-CxzzKLKa.js";import"./Modal-CUuPJJYV.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CJuPn5zK.js";import"./Paper-CIoFOb9y.js";import"./List-C1H86yAq.js";import"./utils-1HnZJXSP.js";import"./useControlled-ByhIylPD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-DzRVr-qC.js";import"./FormHelperText-Agubf5pj.js";import"./FormControl-Bw6SaLd2.js";import"./isMuiElement-Ci072MxR.js";import"./Typography-EZB-V06N.js";import"./IconButton-iCtBBoHa.js";import"./ButtonBase-JDCloG5j.js";import"./CircularProgress-DmtAqLmY.js";import"./Tooltip-BDyMX9lo.js";import"./Popper-DBHPI8pb.js";import"./Box-BQ7zKrPZ.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
