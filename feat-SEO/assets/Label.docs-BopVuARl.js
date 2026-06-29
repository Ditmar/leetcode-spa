import{B as e}from"./iframe-BznxWzSL.js";import{useMDXComponents as o}from"./index-GSpq5NJN.js";import{b as i}from"./index-DePyi8dF.js";import{L as a}from"./Label.stories-CK9EnQ97.js";import"./preload-helper-Ds9E1W97.js";import"./index-DaYqKkR4.js";import"./index-DIXCAK8P.js";import"./index-DZxQ9Z1O.js";import"./InfoOutlined-B6NlWpuU.js";import"./createSvgIcon-DzDMFhMi.js";import"./memoTheme-B6rMeQ0d.js";import"./TextField-jGL-7opl.js";import"./useSlot-DmEaZAsO.js";import"./mergeSlotProps-DQFkZ67W.js";import"./useForkRef-uftMKH9r.js";import"./Select-BfVg8SHr.js";import"./Menu-DPrKd2R4.js";import"./useSlotProps-BI0XKtL6.js";import"./Popover-CU2IBUW2.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-C_jWOFRJ.js";import"./useTheme-D5gpHPpR.js";import"./Fade-CbTmfElB.js";import"./useTimeout-CIUj2LBL.js";import"./getReactElementRef-WQH4VCQH.js";import"./mergeSlotProps-BEsrY6Qj.js";import"./Modal-Dnxoibla.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-z6L1ngzw.js";import"./Paper-CwJsX7gS.js";import"./List-JBKPy0wu.js";import"./utils-BRz-6_DO.js";import"./useControlled-Bd0s3kKx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-CDcAgfx-.js";import"./FormHelperText-rarWjEHZ.js";import"./FormControl-CDNzTjU9.js";import"./Typography-C9Lexice.js";import"./IconButton-rMoL_Knt.js";import"./ButtonBase-BZSpME8i.js";import"./CircularProgress-DJlZxXhF.js";import"./Tooltip-Br2hpeRt.js";import"./Popper-CoVmjhRB.js";import"./Box-C5z37QrM.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
`})})]})}function $(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{$ as default};
