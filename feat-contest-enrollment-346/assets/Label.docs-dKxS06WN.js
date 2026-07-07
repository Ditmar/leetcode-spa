import{B as e}from"./iframe-CctSOg37.js";import{useMDXComponents as o}from"./index-BvQDA6Vs.js";import{b as i}from"./index-B9w21UhR.js";import{L as a}from"./Label.stories-C9UIoEGm.js";import"./preload-helper-DMzYX5Yq.js";import"./index-DAhejjRN.js";import"./index-DD3gVPT2.js";import"./index-ClnICqMQ.js";import"./InfoOutlined-bqSOkozf.js";import"./createSvgIcon-CVNH8czm.js";import"./memoTheme-DNjDmoMJ.js";import"./TextField-Q_NzYDZy.js";import"./useSlot-D7J8xHu8.js";import"./mergeSlotProps-CWKdIugq.js";import"./useForkRef-C4nNj4sn.js";import"./Select-CDXKAHaO.js";import"./Menu-D0e_ztlN.js";import"./useSlotProps-CaKVeuR8.js";import"./Popover-CUGJztGG.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-CzKGJpae.js";import"./useTheme-GF1pgtHp.js";import"./Fade-B0tLOhWi.js";import"./useTimeout-DBNQsm6n.js";import"./getReactElementRef-BZad6-D1.js";import"./mergeSlotProps-0eCP_u5q.js";import"./Modal-B6PkPDVX.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-B_dMXl5L.js";import"./Paper-CLm9O3mu.js";import"./List-DPUPiwPU.js";import"./utils-W56Flrwa.js";import"./useControlled-CNS-i1IJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-CyImaIE3.js";import"./FormHelperText-BfE0ODfH.js";import"./FormControl-eIgytxFd.js";import"./isMuiElement-BbejY-zq.js";import"./Typography-C0RFNdNI.js";import"./IconButton-54pe4ytH.js";import"./ButtonBase-X1qfSDYK.js";import"./CircularProgress-C3OU5AYI.js";import"./Tooltip-4h6fzJ5y.js";import"./Popper-CwrazS5W.js";import"./Box-B0FrCZQm.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
