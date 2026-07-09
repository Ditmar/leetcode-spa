import{B as e}from"./iframe-Bc3yLYbu.js";import{useMDXComponents as o}from"./index-ZhtM779C.js";import{b as i}from"./index-BxlGvGZj.js";import{L as a}from"./Label.stories-WGEldM58.js";import"./preload-helper-BAofFq-6.js";import"./index-DRNTb4St.js";import"./index-CaNQKFJr.js";import"./index-CWvCyf-2.js";import"./InfoOutlined-CBUpqUQR.js";import"./createSvgIcon-ePGeEcF9.js";import"./memoTheme-Cu4BbxR6.js";import"./TextField-Sm-fvpe9.js";import"./useSlot-DPI7w5uZ.js";import"./mergeSlotProps-CJDPG30t.js";import"./useForkRef-DMiHDoFa.js";import"./Select-CjNjtJOi.js";import"./Menu-BD7qu7m3.js";import"./useSlotProps-lXNA54r3.js";import"./Popover-JS_R-ga6.js";import"./Portal-Duep_LMQ.js";import"./getReactElementRef-C4o_g9tQ.js";import"./ownerWindow-C3ZXL_LT.js";import"./Grow-agZYeVNq.js";import"./useTheme-QLbqqFv1.js";import"./utils-jQSDB03h.js";import"./useTimeout-BjI7GVT0.js";import"./mergeSlotProps-B1tPEesb.js";import"./debounce-Be36O1Ab.js";import"./Modal-03JMXPru.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-BDWx43j8.js";import"./Paper-C3YsNOp7.js";import"./List-Btk5EH8g.js";import"./utils-CMY1c5CY.js";import"./useControlled-BhPnAL8_.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-CH8MQqIo.js";import"./FormHelperText-t87gHC1J.js";import"./FormControl-Cxlj6AO7.js";import"./isMuiElement-CNFHW4UL.js";import"./Typography-C1zqvFwI.js";import"./IconButton-4JAP7NaO.js";import"./ButtonBase-DclPsXEn.js";import"./CircularProgress-CB2ufUGa.js";import"./Tooltip-YIf-A8EK.js";import"./Popper-DtK05_8q.js";import"./Box-xxvylW-R.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
