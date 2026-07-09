import{B as e}from"./iframe-D-WY1RfA.js";import{useMDXComponents as o}from"./index-CKqmh6T-.js";import{b as i}from"./index-BNka3NCe.js";import{L as a}from"./Label.stories-CFqgVmQZ.js";import"./preload-helper-BTSWxhhu.js";import"./index-D2yGiyz5.js";import"./index-5IRIdkwT.js";import"./index-C88Akw9v.js";import"./InfoOutlined-DnFFFTVW.js";import"./createSvgIcon-BtQ8OGBr.js";import"./memoTheme-5s0N9Ytm.js";import"./TextField-DUJPGPkz.js";import"./useSlot-shIOuBWq.js";import"./mergeSlotProps-Am7h6Q8n.js";import"./useForkRef-CUe1FOjn.js";import"./Select-Bw0tLtcD.js";import"./Menu-BMYNIlwO.js";import"./useSlotProps-CEN2t5sR.js";import"./Popover-B6wZ3w1E.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-D7XbyQj9.js";import"./useTheme-_XFl-S7x.js";import"./Fade-BNsMPaFn.js";import"./useTimeout-CEGujuce.js";import"./getReactElementRef-Bm-jBV5k.js";import"./mergeSlotProps-2tdCBLkS.js";import"./Modal-DaTX1PrS.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-lln2tX4l.js";import"./Paper-D-Urxrwc.js";import"./List-C-ypmucJ.js";import"./utils-q7eDsTas.js";import"./useControlled-CHILzubj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-Bcjs97pY.js";import"./FormHelperText-ADzwSsD_.js";import"./FormControl-Bx5JnRxP.js";import"./isMuiElement-CFvwLuSK.js";import"./Typography-TLTgj9-0.js";import"./IconButton-5Sr__lhS.js";import"./ButtonBase-BP4THX__.js";import"./CircularProgress-PKu2nq59.js";import"./Tooltip-DGB4npfS.js";import"./Popper-CCJiFtSQ.js";import"./Box-CsX3qKdm.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
