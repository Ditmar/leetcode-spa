import{B as e}from"./iframe-BiER7k_P.js";import{useMDXComponents as o}from"./index-CaT4-Xi0.js";import{M as i}from"./index-Dju_uUsX.js";import{L as a}from"./Label.stories-Cr6s3gDc.js";import"./preload-helper-DyFiQHOH.js";import"./index-BpxSnniq.js";import"./index-Bu5Jyvxf.js";import"./index-BVzpUdwA.js";import"./InfoOutlined-BmJr7haG.js";import"./createSvgIcon-CHNr-Nmk.js";import"./memoTheme-C59eoCwj.js";import"./TextField-DIR1kQPu.js";import"./useSlot-BFGpmyPM.js";import"./mergeSlotProps-m-CFqAn2.js";import"./useForkRef-CXxA8EIL.js";import"./Select-wYzzHwLw.js";import"./Menu-TlH1RMfi.js";import"./useSlotProps-Cz5OGkW0.js";import"./Popover-iKef_mGe.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BXBryi7s.js";import"./useTheme-Bz9V4Smd.js";import"./Fade-C7BcGD3V.js";import"./useTimeout-CKO4ukOH.js";import"./getReactElementRef-DrMvA2ri.js";import"./mergeSlotProps-08EoRgIH.js";import"./Modal-CVtRLaFX.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-J-VqQ6NA.js";import"./Paper-BiT9RvjS.js";import"./List-a1FkRFTZ.js";import"./utils-BJz4omx3.js";import"./useControlled-D-ZiWCCo.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-Bw5PPUSN.js";import"./FormHelperText-K8y5vSM6.js";import"./FormControl-3gVNeTCg.js";import"./isMuiElement-DLhXWCsj.js";import"./Typography-AW4hwX9q.js";import"./IconButton-CPA5LFVO.js";import"./ButtonBase-B3zD9fg5.js";import"./CircularProgress-bG8LQBqT.js";import"./Tooltip-BbwF6A0I.js";import"./Popper-DOqeK4IV.js";import"./Box-C8EIpJqx.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
