import{B as e}from"./iframe-3-m0r3Vs.js";import{useMDXComponents as o}from"./index-Bxz7gXXA.js";import{b as i}from"./index-CGzqQSo9.js";import{L as a}from"./Label.stories-B50KGa3o.js";import"./preload-helper-DGCCE14-.js";import"./index-DBvSAXNi.js";import"./index-DX3lDpIq.js";import"./index-BQFO-4T1.js";import"./InfoOutlined-DUoGN_px.js";import"./createSvgIcon-Vlz5ze7i.js";import"./memoTheme-AhyynNen.js";import"./TextField-bFsJWkSS.js";import"./useSlot-BUYxRP3U.js";import"./mergeSlotProps-D0hmtvfi.js";import"./useForkRef-CWpwSVwZ.js";import"./Select-D-OG3-os.js";import"./Menu-iqXOtD-d.js";import"./useSlotProps-UxJoR13I.js";import"./Popover-CCbYliNJ.js";import"./Portal-D4HyVH-0.js";import"./getReactElementRef-BDhGNHHP.js";import"./ownerWindow-sCUKNMrD.js";import"./Grow-V1BePCkp.js";import"./useTheme-CVKtKjDI.js";import"./utils-BRrUAkDQ.js";import"./useTimeout-C6TeU8r3.js";import"./mergeSlotProps-Doj9nz8C.js";import"./debounce-Be36O1Ab.js";import"./Modal-DVGaqFOD.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-DPuuCuYC.js";import"./Paper-CTktzvdu.js";import"./List-DTI4NHJr.js";import"./utils-C3791yyT.js";import"./useControlled-D1IMppDA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-Cy8j-N4z.js";import"./FormHelperText-Ce9tFzTE.js";import"./FormControl-D98Td2H5.js";import"./isMuiElement-CRqZJ4KF.js";import"./Typography-OZZd4z1x.js";import"./IconButton-DrH4n-Bj.js";import"./ButtonBase-CybfTfRs.js";import"./CircularProgress-9rE9DQsk.js";import"./Tooltip-uzdY5vFr.js";import"./Popper-C659nvtB.js";import"./Box-Cis0PRMS.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
