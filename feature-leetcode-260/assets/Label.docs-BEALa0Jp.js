import{B as e}from"./iframe-CQy82Avu.js";import{useMDXComponents as o}from"./index-O52iTMf2.js";import{b as i}from"./index-CbHkHm9m.js";import{L as a}from"./Label.stories-CvxGWYsz.js";import"./preload-helper-BFbRC-vR.js";import"./index-CpoVy7UW.js";import"./index-CzNwDalC.js";import"./index-Bs0Xf3Iu.js";import"./InfoOutlined-CIFm_ifa.js";import"./createSvgIcon-BvDyIMsH.js";import"./memoTheme-CX0d-ucX.js";import"./TextField-CPjHZnqU.js";import"./useSlot-BSHcCYeX.js";import"./mergeSlotProps-yIjqro2G.js";import"./useForkRef-CmvM0aNx.js";import"./Select-Up9UIj2n.js";import"./Menu-CLGUwppb.js";import"./useSlotProps-Di7t7x9L.js";import"./Popover-C1BzUpUn.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-CAaTMy-o.js";import"./useTheme-D87gDqOx.js";import"./Fade-BRSeoEoR.js";import"./useTimeout-5zOpL60U.js";import"./getReactElementRef-q-JJqELw.js";import"./mergeSlotProps-l8Pco58U.js";import"./Modal-CUxLXE1z.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-qCeZxWlV.js";import"./Paper-D2yamQ8n.js";import"./List-CqadsIaH.js";import"./utils-tyCTJm48.js";import"./useControlled-DQZUEyA8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-C3sN-LP9.js";import"./FormHelperText-BxUejy52.js";import"./FormControl-ySI-fO_0.js";import"./isMuiElement-B5PA_zoB.js";import"./Typography-DBEuKJ-D.js";import"./IconButton-C02snwGp.js";import"./ButtonBase-BYF8q6p6.js";import"./CircularProgress-CqvOAYKw.js";import"./Tooltip-Du1IW9x7.js";import"./Popper-DiJo6PAh.js";import"./Box-kwRxNVtJ.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
