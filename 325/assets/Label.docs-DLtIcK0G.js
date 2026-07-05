import{B as e}from"./iframe-BO7-sDeV.js";import{useMDXComponents as o}from"./index-CuoUZY6j.js";import{b as i}from"./index-B6HlQ_rT.js";import{L as a}from"./Label.stories-BF-PTHA0.js";import"./preload-helper-CvDb8Pzr.js";import"./index-CBoEy6HL.js";import"./index-DPUK1M52.js";import"./index-BtQgAj01.js";import"./InfoOutlined-MD_k1pKX.js";import"./createSvgIcon-DwY6hVpA.js";import"./memoTheme-DxPXNEh7.js";import"./TextField-Cd1_ReEf.js";import"./useSlot-BqWWKibK.js";import"./mergeSlotProps-DuPxIUaP.js";import"./useForkRef-DBQeG6eq.js";import"./Select-BSzrvkbt.js";import"./Menu-B1osFBZ4.js";import"./useSlotProps-CbK4-CuM.js";import"./Popover-DkSYl5rV.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-DVajOLM3.js";import"./useTheme-B6zAbYas.js";import"./Fade-DHlYAj7A.js";import"./useTimeout-B129OvHM.js";import"./getReactElementRef-8Azc_Wyn.js";import"./mergeSlotProps-B6fNO9P_.js";import"./Modal-DyBloRPr.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BpieNPRz.js";import"./Paper-5uq9hk_Y.js";import"./List-HZcBFRa9.js";import"./utils-DVJ45mue.js";import"./useControlled-BeOE8iUF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-BKnOKnkR.js";import"./FormHelperText-BfrJloJJ.js";import"./FormControl-CXxMcFci.js";import"./isMuiElement-Cf12_Iq-.js";import"./Typography-D_bRnSbX.js";import"./IconButton-B_oK5t_7.js";import"./ButtonBase-B8aUDFkk.js";import"./CircularProgress-2NAQJOyN.js";import"./Tooltip-C4xqt_Tw.js";import"./Popper-BuVeRLZR.js";import"./Box-CRqMStrn.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
