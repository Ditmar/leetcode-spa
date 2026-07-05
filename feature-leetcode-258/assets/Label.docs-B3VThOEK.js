import{B as e}from"./iframe-DcInekOV.js";import{useMDXComponents as o}from"./index-WUGc4yTT.js";import{b as i}from"./index-D0pyvKSt.js";import{L as a}from"./Label.stories-D2QvTaD-.js";import"./preload-helper-DtVaB8p0.js";import"./index-C3uHauUV.js";import"./index-vK00jgGv.js";import"./index-CmFqOEIO.js";import"./InfoOutlined-CguvUg1q.js";import"./createSvgIcon-CUlH0BXe.js";import"./memoTheme-BEdE2J9p.js";import"./TextField-B00i5ue_.js";import"./useSlot-C_K7OOlB.js";import"./mergeSlotProps-6ZlCFcq6.js";import"./useForkRef-DhQ0ERBh.js";import"./Select-DXb-oaKC.js";import"./Menu-CBcKotyi.js";import"./useSlotProps-DxrAMITI.js";import"./Popover-BHlHfZJ0.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BhJ26EtF.js";import"./useTheme-DjIFKwxx.js";import"./Fade-CdE9fuxu.js";import"./useTimeout-C9Xj8QXG.js";import"./getReactElementRef-Db9WQXNm.js";import"./mergeSlotProps-v895Fgfo.js";import"./Modal-DUryo4z1.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-D__3LEE4.js";import"./Paper-DwrfXu9g.js";import"./List-CAXt_-6T.js";import"./utils-rurf9Euj.js";import"./useControlled-CS980RQA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-BFd0QmDb.js";import"./FormHelperText-Bm7biNgf.js";import"./FormControl-D3j6UDth.js";import"./isMuiElement-Cd4qUxzu.js";import"./Typography-BMCmM75p.js";import"./IconButton-C8dFV8S7.js";import"./ButtonBase-6s3yVUE4.js";import"./CircularProgress-CxAoGUTb.js";import"./Tooltip-BffSNCvA.js";import"./Popper-BvcBHqUG.js";import"./Box-CAfCBqUA.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
