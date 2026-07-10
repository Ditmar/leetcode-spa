import{B as e}from"./iframe-CX1og2HH.js";import{useMDXComponents as o}from"./index-Cj0cHQGW.js";import{b as i}from"./index-DWjQAehO.js";import{L as a}from"./Label.stories-CQq1IOJ4.js";import"./preload-helper-ASOJwovS.js";import"./index-Cd0CMK7K.js";import"./index-ClgnlDIS.js";import"./index-BQa5oByz.js";import"./InfoOutlined-CS8KONuW.js";import"./createSvgIcon-COBrVubV.js";import"./memoTheme-DEhvJDub.js";import"./TextField-Dp-Pz2Lh.js";import"./useSlot-CG5cmEok.js";import"./mergeSlotProps-BHqEHcEW.js";import"./useForkRef-C07sTitr.js";import"./Select-cKBvBf_8.js";import"./Menu-W_9Czk_K.js";import"./useSlotProps-Da643ieT.js";import"./Popover-OMyP2rGa.js";import"./Portal-poQLcLbm.js";import"./getReactElementRef-DuIqGZRD.js";import"./ownerWindow-Cp5qhQTh.js";import"./Grow-FzMJrpYr.js";import"./useTheme-BoJxZRW8.js";import"./utils-oBcr4ww4.js";import"./useTimeout-CIbTRVPu.js";import"./mergeSlotProps-CE6HEdWh.js";import"./debounce-Be36O1Ab.js";import"./Modal-Cb0AI1-v.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-qFWWY86U.js";import"./Paper-Q3NE90TK.js";import"./List-gkIamtFD.js";import"./utils-BFxWB4YK.js";import"./useControlled-CJsU7hwy.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-C6x_K1NT.js";import"./FormHelperText-DkC4VK2e.js";import"./FormControl-Cic76AJI.js";import"./isMuiElement-B5HVKxIh.js";import"./Typography-DQ0W0Plv.js";import"./IconButton-7JV6FhH2.js";import"./ButtonBase-DzAwK4Lm.js";import"./CircularProgress-DBb9Jpwp.js";import"./Tooltip-zYzqwe8w.js";import"./Popper-DTZBz_XD.js";import"./Box-Cr1RtU3F.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
