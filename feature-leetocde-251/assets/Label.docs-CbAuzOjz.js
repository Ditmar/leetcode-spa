import{B as e}from"./iframe-D3RWhAO6.js";import{useMDXComponents as o}from"./index-5nuuNuvL.js";import{b as i}from"./index-DRuODweR.js";import{L as a}from"./Label.stories-DP1kwGGh.js";import"./preload-helper-BPd117aC.js";import"./index-DWEp14Op.js";import"./index-XDRoqARk.js";import"./index-CNmNHaqE.js";import"./InfoOutlined-D1oDihEq.js";import"./createSvgIcon-B-9F825q.js";import"./memoTheme-DGSz6Q91.js";import"./TextField-B-vQXifU.js";import"./useSlot-Cmf1zk6X.js";import"./mergeSlotProps-fwBPkOkL.js";import"./useForkRef-C3INAXdH.js";import"./Select-BultKxU0.js";import"./Menu-CwR-ER4P.js";import"./useSlotProps-BHjSxpWu.js";import"./Popover-CrWS7rfJ.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-DSl0v_I0.js";import"./useTheme-BIDREZdM.js";import"./Fade-BlLYp2nC.js";import"./useTimeout-DoeK4oRP.js";import"./getReactElementRef-DpDBwA97.js";import"./mergeSlotProps-D2qU2-S5.js";import"./Modal-DtdL-uIQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BtdpvbCI.js";import"./Paper-DdVJAn6e.js";import"./List-DkyC5EBA.js";import"./utils-C4Yg2ju1.js";import"./useControlled-WjmSgsHG.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-DhdvVvru.js";import"./FormHelperText-CHS72iez.js";import"./FormControl-Domwo90b.js";import"./isMuiElement-C5nPYlPV.js";import"./Typography-CvxFLBHZ.js";import"./IconButton-KSe4sKr2.js";import"./ButtonBase-DGmybk03.js";import"./CircularProgress-vE1iz0TI.js";import"./Tooltip-C-Ermj-j.js";import"./Popper-DQgPemTf.js";import"./Box-BoTxlhsd.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
