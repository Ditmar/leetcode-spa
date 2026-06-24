import{B as e}from"./iframe-C-iJE3jj.js";import{useMDXComponents as o}from"./index-CF_8-5nh.js";import{b as i}from"./index-BVtHcYrw.js";import{L as a}from"./Label.stories-BL6hwmF-.js";import"./preload-helper-B1AL8F-k.js";import"./index-ywmQTPs1.js";import"./index-CmHT21bd.js";import"./index-Mn_bf4U2.js";import"./InfoOutlined-BIaZFwA6.js";import"./createSvgIcon-PTGlfa_C.js";import"./memoTheme-zMTea_qc.js";import"./TextField-CtcAbf3j.js";import"./useSlot-DfKkbMyV.js";import"./mergeSlotProps-BjM-1W44.js";import"./useForkRef-C6Z1Wo22.js";import"./Select-mXGpGLf8.js";import"./Menu-Bse87sdU.js";import"./useSlotProps-23QREqhW.js";import"./Popover-qGJCUdka.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-p9Rim79X.js";import"./useTheme-BTQl03Z8.js";import"./Fade-PXJQROX3.js";import"./useTimeout-CZNrG8oF.js";import"./getReactElementRef-CgVlb-YV.js";import"./mergeSlotProps-BqEUnhqK.js";import"./Modal-D8lqmqSp.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BVGUDwfF.js";import"./Paper-CiJV2Ab-.js";import"./List-Dl3w6xch.js";import"./utils-DF5N_JtK.js";import"./useControlled-DWnTOyl3.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-D5PRRxhK.js";import"./FormHelperText-9XKlCOTN.js";import"./FormControl-CiIpEKq5.js";import"./Typography-BY6BPoXa.js";import"./IconButton-DP5QnydD.js";import"./ButtonBase-fAwS3Mbj.js";import"./CircularProgress-DLjVek3J.js";import"./Tooltip-NKeejwc-.js";import"./Popper-Dka0i6Dt.js";import"./Box-Bqa9VTBk.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
`})})]})}function $(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{$ as default};
