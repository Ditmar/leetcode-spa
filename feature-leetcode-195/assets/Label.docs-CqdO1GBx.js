import{j as e}from"./iframe-CHEuJQns.js";import{useMDXComponents as o}from"./index-BqOcXm3b.js";import{M as i}from"./index-CFWfkbDf.js";import{L as a}from"./Label.stories-DYtzety8.js";import"./preload-helper-BmzZtkUX.js";import"./index-jQgW3QXy.js";import"./index-apSmAoQP.js";import"./index-BfrkhSE3.js";import"./InfoOutlined-C7UV5uE8.js";import"./createSvgIcon-B75J--WQ.js";import"./memoTheme-CmnWIrXS.js";import"./TextField-B77XoUKV.js";import"./useSlot-D4decJhR.js";import"./mergeSlotProps-CRG-xk5y.js";import"./useForkRef-DiPsax3O.js";import"./FormHelperText-DNczKYaL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Portal-CTSd-iSS.js";import"./getReactElementRef-Bf79q2xo.js";import"./useTimeout-DZr7VemI.js";import"./List-D1qdx6eC.js";import"./Menu-Ctutih_m.js";import"./useSlotProps-DOqvRDNc.js";import"./Paper-CwQUMoFB.js";import"./useTheme-DvG_dD8k.js";import"./Fade-5z7u5Jja.js";import"./mergeSlotProps-CjHn4Sde.js";import"./Modal-BgYc6pJG.js";import"./useControlled-B-Cu1PWa.js";import"./Typography-c9ZS_1vD.js";import"./IconButton-CyWQaUpJ.js";import"./ButtonBase-DsSDEI7R.js";import"./CircularProgress-IevMG7bt.js";import"./Popper-CXXGz9W3.js";import"./Box-Bbez69k0.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
`})})]})}function U(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{U as default};
