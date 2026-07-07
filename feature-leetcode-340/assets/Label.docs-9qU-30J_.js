import{B as e}from"./iframe-D0ekwquE.js";import{useMDXComponents as o}from"./index-C55hQT7c.js";import{b as i}from"./index-Bus62G4o.js";import{L as a}from"./Label.stories-BTQ77Voq.js";import"./preload-helper-BAofFq-6.js";import"./index-BTbbfHdO.js";import"./index-CnGDnsU7.js";import"./index-PatpaKEX.js";import"./InfoOutlined-JblutH2s.js";import"./createSvgIcon-CpeiJpRL.js";import"./memoTheme-CykOlMRP.js";import"./TextField-D5dMLoyl.js";import"./useSlot-DSSZWBDa.js";import"./mergeSlotProps-DpFuq-2Q.js";import"./useForkRef-BvtfLVj4.js";import"./Select-Dp301qeZ.js";import"./Menu-BFQQNywN.js";import"./useSlotProps-BZcY15VS.js";import"./Popover-Bq7e8Cji.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BQL8T2Qq.js";import"./useTheme-CHpb9Kp3.js";import"./Fade-BC3VhejJ.js";import"./useTimeout-BTdJq20w.js";import"./getReactElementRef-DmSL_4TU.js";import"./mergeSlotProps-CwLtO1LO.js";import"./Modal-B2A98d5U.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-WedGd6lK.js";import"./Paper-BANI_M5G.js";import"./List-B5t205VI.js";import"./utils-DVOyQSw3.js";import"./useControlled-CFTzAXQ0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-C9pxVtv1.js";import"./FormHelperText-DJWy7bm4.js";import"./FormControl-BMUqRXoM.js";import"./isMuiElement-D69ugWnE.js";import"./Typography-Bu7hSaFU.js";import"./IconButton-D9liNyjM.js";import"./ButtonBase-DlvzAIEH.js";import"./CircularProgress-caee_Aen.js";import"./Tooltip-CiW4cFj_.js";import"./Popper-DYQ0Ep6Z.js";import"./Box-8Sevu455.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
