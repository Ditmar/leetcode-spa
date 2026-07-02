import{B as e}from"./iframe-DyB6bCjU.js";import{useMDXComponents as o}from"./index-C2kdS9j1.js";import{b as i}from"./index-Di1l9lVq.js";import{L as a}from"./Label.stories-BFEfCOWa.js";import"./preload-helper-d4NgKMIF.js";import"./index-D_CcgepX.js";import"./index-DeHcJLuS.js";import"./index-CFusjCyZ.js";import"./InfoOutlined-CCDg3K8A.js";import"./createSvgIcon-VZhPDZ_l.js";import"./memoTheme-CRBcTzh2.js";import"./TextField-C_j_3LFF.js";import"./useSlot-B9jiZM1D.js";import"./mergeSlotProps-UoTXSNOO.js";import"./useForkRef-1XtgK2Rm.js";import"./Select-NO2N-uzX.js";import"./Menu-C_SkA7n5.js";import"./useSlotProps-qiUE5Kcg.js";import"./Popover-GlK93YrD.js";import"./Portal-CZsagoVV.js";import"./getReactElementRef-DV6Ogsm2.js";import"./ownerWindow-CarmgltP.js";import"./Grow-Bs-8FzW-.js";import"./useTheme-B2LyRrSZ.js";import"./Fade-BwdT69Ex.js";import"./useTimeout-D3heJy6s.js";import"./mergeSlotProps-zAbwsQPX.js";import"./debounce-Be36O1Ab.js";import"./Modal-BToJbUq9.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Paper-CFlvhs90.js";import"./List-CUkF58u_.js";import"./utils-CSPa5476.js";import"./useControlled-Be5sKHfw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-BYg5d1nU.js";import"./FormHelperText-DrFVw18W.js";import"./FormControl-C6BbE5JM.js";import"./Typography-CQxU8r4Y.js";import"./IconButton-BamWD_k5.js";import"./ButtonBase-DnfbQoYb.js";import"./CircularProgress-druYZbog.js";import"./Tooltip-CcaaVV3Z.js";import"./Popper-BVNK5PFp.js";import"./Box-C_s-cla5.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
`})})]})}function Z(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{Z as default};
