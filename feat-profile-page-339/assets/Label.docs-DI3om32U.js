import{B as e}from"./iframe-CnTNbITx.js";import{useMDXComponents as o}from"./index-BJ9v-VEo.js";import{b as i}from"./index-CbaEy8o_.js";import{L as a}from"./Label.stories-BqjLDAvE.js";import"./preload-helper-C5NKOYid.js";import"./index-BEOWdSeI.js";import"./index-CAuLD8UX.js";import"./index-CMCkRvyG.js";import"./InfoOutlined-nOW8tSK2.js";import"./createSvgIcon-BNQHBHlN.js";import"./memoTheme-BmuWIPus.js";import"./TextField-ClzacpIi.js";import"./useSlot-B_fSwtN4.js";import"./mergeSlotProps-X1B6envA.js";import"./useForkRef-BTtVlZ3W.js";import"./Select-DspoX_M8.js";import"./Menu-Bjl_SnZ4.js";import"./useSlotProps-Ct4SbOHs.js";import"./Popover-9FEnLXBL.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-D5MYWQbg.js";import"./useTheme-L0oWWPil.js";import"./Fade-DjBfPt5o.js";import"./useTimeout-DUX2ftj1.js";import"./getReactElementRef-BWXMuOi1.js";import"./mergeSlotProps-DmJ4Ac1i.js";import"./Modal-CxBUuYDU.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-4QZtKo7R.js";import"./Paper-DeCaeDH5.js";import"./List-BGfb-egD.js";import"./utils-D6iwSIUq.js";import"./useControlled-C8aUlCji.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-Kt1Kt-O7.js";import"./FormHelperText-fAmdNdo4.js";import"./FormControl-2OVqvwt7.js";import"./isMuiElement-DgMA2TDj.js";import"./Typography-BPdkQ3g7.js";import"./IconButton-CFec4aq7.js";import"./ButtonBase-DYY-C_7f.js";import"./CircularProgress-OFPYIMWL.js";import"./Tooltip-DYGOOzJu.js";import"./Popper-Cfa4K3kS.js";import"./Box-Cu92SNoM.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
