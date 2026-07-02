import{B as e}from"./iframe-DG01PJbI.js";import{useMDXComponents as o}from"./index-CWXOndp4.js";import{b as i}from"./index-BjZHbC2j.js";import{L as a}from"./Label.stories-BR5TwEPl.js";import"./preload-helper-xjnZv7Jy.js";import"./index-BoC24rPy.js";import"./index-ZriIJN2N.js";import"./index-q8DNFDLQ.js";import"./InfoOutlined-C7RymHKz.js";import"./createSvgIcon-DHqrq6ow.js";import"./memoTheme-CEPVQlw5.js";import"./TextField-J0AgOvUi.js";import"./useSlot-BGO--67-.js";import"./mergeSlotProps-DzqsGNTI.js";import"./useForkRef-BqKZ1Mxd.js";import"./Select-BoDZkpu3.js";import"./Menu-kStTci0j.js";import"./useSlotProps-BrAdMU7J.js";import"./Popover-Daw9GI_a.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-C3gLBbCz.js";import"./useTheme-BnB7pvkN.js";import"./Fade-CipVwlvR.js";import"./useTimeout-ChXg3jG3.js";import"./getReactElementRef-DqdPhTbd.js";import"./mergeSlotProps-itx8wcfr.js";import"./Modal-CKTG4XcC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BIi05MSt.js";import"./Paper-VhELVqRz.js";import"./List-C19t9meJ.js";import"./utils-LTdpQsjL.js";import"./useControlled-CspkG013.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-BfuZMgOX.js";import"./FormHelperText-BlPJT9Ah.js";import"./FormControl-DCVAZxP8.js";import"./isMuiElement-MBkAWyUq.js";import"./Typography-D3y6gvdE.js";import"./IconButton-DC429b8q.js";import"./ButtonBase-ChiD7IEi.js";import"./CircularProgress-CHmr4qXN.js";import"./Tooltip-DMitUMl4.js";import"./Popper-B7t9yt05.js";import"./Box-X8jIaALa.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
