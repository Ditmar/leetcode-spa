import{B as e}from"./iframe-C_ldbsfm.js";import{useMDXComponents as o}from"./index-Cer5NO2m.js";import{b as i}from"./index-C-jWpTsL.js";import{L as a}from"./Label.stories-CPaasODm.js";import"./preload-helper-DqXJTOSk.js";import"./index-BYojVjaJ.js";import"./index-BUQxVvzX.js";import"./index-BDLM6g5M.js";import"./InfoOutlined-Bv3rQiZ5.js";import"./createSvgIcon-dl3bjIGk.js";import"./memoTheme-fP8Effv6.js";import"./TextField-BoFQroYf.js";import"./useSlot-BihpR-yH.js";import"./mergeSlotProps-BACIqLuc.js";import"./useForkRef-DP7CwNnB.js";import"./Select-CfWH5F0n.js";import"./Menu-D-Rs_nwl.js";import"./useSlotProps-DB0RyjT0.js";import"./Popover-BVQR9YqP.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-xgn76QrZ.js";import"./useTheme-yPuGCA0c.js";import"./Fade-rVs6Igyi.js";import"./useTimeout-kKO_iDLF.js";import"./getReactElementRef-Cp64BnpI.js";import"./mergeSlotProps-D5mnbCQc.js";import"./Modal-D5SRGu_m.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CLnbONhw.js";import"./Paper-Du_JsILN.js";import"./List-_NyfQbkS.js";import"./utils-DL0juUSs.js";import"./useControlled-ztFG6fyo.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-CMHR83NP.js";import"./FormHelperText-Cu0m9xMq.js";import"./FormControl-Dp5V8Kqr.js";import"./isMuiElement-BFklTOXR.js";import"./Typography-IPWspW-6.js";import"./IconButton-DBTv8BcP.js";import"./ButtonBase-MGCswVII.js";import"./CircularProgress-DCYJaAF-.js";import"./Tooltip-XqjC_Z-C.js";import"./Popper-CViJvHMH.js";import"./Box-Da8ubA7O.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
