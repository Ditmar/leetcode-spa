import{B as e}from"./iframe-CKO5keqQ.js";import{useMDXComponents as o}from"./index-DKR6wF-q.js";import{b as i}from"./index-qk0ELhQN.js";import{L as a}from"./Label.stories-hpYbE-H2.js";import"./preload-helper-DvqeKrQo.js";import"./index-BeevKFSS.js";import"./index-CkRr8BOp.js";import"./index-Cjxi_tUX.js";import"./InfoOutlined-CFM2ZZYj.js";import"./createSvgIcon-DwMy1Wl4.js";import"./memoTheme-DIdPnFko.js";import"./TextField-bgjrwBq-.js";import"./useSlot-PKlYkgAE.js";import"./mergeSlotProps-Cqyxp5jU.js";import"./useForkRef-YPwaPk1Z.js";import"./Select-DY9IaPIm.js";import"./Menu-BFubLgtO.js";import"./useSlotProps-D4c_yGRJ.js";import"./Popover-CQDJhnhI.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-DbdXu2wX.js";import"./useTheme-DwigwIjM.js";import"./Fade-BLN7siP8.js";import"./useTimeout-BZ8ZlAY1.js";import"./getReactElementRef-Cmjf-N-Q.js";import"./mergeSlotProps-X4E0Rhbp.js";import"./Modal-DqBzcoxR.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Bmhww6xq.js";import"./Paper-CDFpntoR.js";import"./List-1sXX3JlN.js";import"./utils-D0P9uHEX.js";import"./useControlled--_Ovb55r.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-BAKatFfo.js";import"./FormHelperText-DEDlUfBm.js";import"./FormControl-B_ySbnVm.js";import"./isMuiElement-CIMG5uEv.js";import"./Typography-C0abYJzd.js";import"./IconButton-CTVQ8h7f.js";import"./ButtonBase-R2eiqGcC.js";import"./CircularProgress-BbEL0box.js";import"./Tooltip-UrZ3x5GC.js";import"./Popper-CpNPvG9f.js";import"./Box-De5FP00S.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
