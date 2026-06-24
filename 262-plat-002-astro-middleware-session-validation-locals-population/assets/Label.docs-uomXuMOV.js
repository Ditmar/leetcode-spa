import{B as e}from"./iframe-DX1xOCrb.js";import{useMDXComponents as o}from"./index-BHUQZ6l-.js";import{b as i}from"./index-B0_1J8AR.js";import{L as a}from"./Label.stories-CxWUorxR.js";import"./preload-helper-BOJww6b9.js";import"./index-Dqu-ocrE.js";import"./index-DAUfQ7oi.js";import"./index-6wlVlNZo.js";import"./InfoOutlined-BUPNXMsU.js";import"./createSvgIcon-D170RJxN.js";import"./memoTheme-CrfwWSEg.js";import"./TextField-CQT841cw.js";import"./useSlot-BbVoC7yj.js";import"./mergeSlotProps-2bj3odsk.js";import"./useForkRef-yuRfImrj.js";import"./Select-D4yKBVci.js";import"./Menu-BtEVkzFy.js";import"./useSlotProps-BvE1W9qH.js";import"./Popover-CT8_AJV1.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-Kfc1Txus.js";import"./useTheme-PY5_YNbC.js";import"./Fade-C0Ucepw5.js";import"./useTimeout-dkRmt1XV.js";import"./getReactElementRef-dLytT1kO.js";import"./mergeSlotProps-BFJCUZDB.js";import"./Modal-BG1LQYln.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Uo_dIlMl.js";import"./Paper-D6HCgAO-.js";import"./List-CQVNZyjC.js";import"./utils-Cp139hXb.js";import"./useControlled-CnhjlM4P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-tzp7BaHK.js";import"./FormHelperText-BpQfE1XO.js";import"./FormControl-9wZ6W3Ji.js";import"./Typography-DjBUif4h.js";import"./IconButton-8gl8Zg4r.js";import"./ButtonBase-Dm4lkB8B.js";import"./CircularProgress-BuZ-h4V3.js";import"./Tooltip-BLW7civl.js";import"./Popper-DePW7TVA.js";import"./Box-CmVgLQFg.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
