import{B as e}from"./iframe-XuBp7EEV.js";import{useMDXComponents as o}from"./index-BXNhLbGA.js";import{b as i}from"./index-Cn6D8ree.js";import{L as a}from"./Label.stories-BfYz-BjW.js";import"./preload-helper-DsaTGXN_.js";import"./index-DebmLqKP.js";import"./index--TQkxSCF.js";import"./index-DUBfu4EZ.js";import"./InfoOutlined-DMgLHUHc.js";import"./createSvgIcon-Cguhdu-0.js";import"./memoTheme-CmXdXK8z.js";import"./TextField-DrPCHyBF.js";import"./useSlot-BNIxiFAO.js";import"./mergeSlotProps-DdLBnfBq.js";import"./useForkRef-DRFqVO3h.js";import"./Select-hg7J9c0_.js";import"./Menu-BdFCJOdA.js";import"./useSlotProps-DqlOeMWk.js";import"./Popover-mAvj05cB.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-DUfk8SBS.js";import"./useTheme-D2cnlwej.js";import"./Fade-CVUR0oJE.js";import"./useTimeout-BYq1OWnu.js";import"./getReactElementRef-Ct3D52vC.js";import"./mergeSlotProps-C7RGcvlo.js";import"./Modal-B17Aipe3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-2cBjrKAT.js";import"./Paper-fX82JFoF.js";import"./List-BuziaUZI.js";import"./utils-DhSeMt1V.js";import"./useControlled-DgB2QRj6.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-C1r6kjHg.js";import"./FormHelperText-Brx8yaac.js";import"./FormControl-CIZUi9id.js";import"./isMuiElement-BuIbUan8.js";import"./Typography-DqEgPnn_.js";import"./IconButton-DmXNI0K9.js";import"./ButtonBase-BA7LJqW_.js";import"./CircularProgress-DGUr-cL9.js";import"./Tooltip-CLkYtXPx.js";import"./Popper-BBvUH-qX.js";import"./Box-BRctQ3mZ.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
