import{B as e}from"./iframe-9uf5bNUi.js";import{useMDXComponents as o}from"./index-CUDWPoM5.js";import{b as i}from"./index-DJoCjb7h.js";import{L as a}from"./Label.stories-CW33hHfI.js";import"./preload-helper-BFbRC-vR.js";import"./index-DyErPOwR.js";import"./index-DRnTlGP8.js";import"./index-CtqY-wh1.js";import"./InfoOutlined-DGpBr9Sa.js";import"./createSvgIcon-C-65vhIN.js";import"./memoTheme-BoOnGKgT.js";import"./TextField-DjTrBgj4.js";import"./useSlot-DEo6tuEz.js";import"./mergeSlotProps-By4hs0fe.js";import"./useForkRef-BgSbkzwl.js";import"./Select-D0ycJnxn.js";import"./Menu-D1I5jEGz.js";import"./useSlotProps-CUSgHA0L.js";import"./Popover-DbWZp9Gw.js";import"./Portal-C2epEo5L.js";import"./getReactElementRef-n5jKfw0L.js";import"./ownerWindow-CVF8CZiZ.js";import"./Grow-D24ueR9f.js";import"./useTheme-CF3cKOzv.js";import"./utils-gqmPWI7h.js";import"./useTimeout-BxIfc3vw.js";import"./mergeSlotProps-Be2YsJhi.js";import"./debounce-Be36O1Ab.js";import"./Modal-CPwKTj5J.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-DxhbNhJ2.js";import"./Paper-CWp4rMyB.js";import"./List-ChsYmoOW.js";import"./utils-CyHJ5hqy.js";import"./useControlled-B6xM_7U9.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-By11AGsN.js";import"./FormHelperText-2oNOjgwD.js";import"./FormControl-BMI9_X6x.js";import"./isMuiElement-DB4oeVAo.js";import"./Typography-DjX2OxdM.js";import"./IconButton-C88VFpgy.js";import"./ButtonBase-Q8BPcWcx.js";import"./CircularProgress-CleERK0k.js";import"./Tooltip-DHdWUDNi.js";import"./Popper-B2r_gK9P.js";import"./Box-JhpM3zIr.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
