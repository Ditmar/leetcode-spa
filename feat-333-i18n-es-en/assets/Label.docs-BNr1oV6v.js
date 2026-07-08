import{B as e}from"./iframe-DfKgLu8G.js";import{useMDXComponents as o}from"./index-BiO8fG_K.js";import{b as i}from"./index-CWBHB3tm.js";import{L as a}from"./Label.stories-BPN3D78d.js";import"./preload-helper-DyUpdmRI.js";import"./index-BZTnuRjz.js";import"./index-BJTIJ7ls.js";import"./index-hMTwziZ0.js";import"./InfoOutlined--DJ-IGjh.js";import"./createSvgIcon-CR0FNv4Z.js";import"./memoTheme-BqEpauzM.js";import"./InputLabel-gPCKpUOt.js";import"./utils-DnouU61i.js";import"./FormLabel-nKsEkBDm.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Typography-D1pUHX0V.js";import"./IconButton-uAZ8Nliw.js";import"./ButtonBase-BsaYoeL-.js";import"./useTimeout-DXWUv1wM.js";import"./useForkRef-fU_FwSP0.js";import"./CircularProgress-rnXgkoXj.js";import"./Tooltip-BRG6s-8b.js";import"./useTheme-Hlb2aRpk.js";import"./useSlot-pNrbPXmT.js";import"./mergeSlotProps-T_W9WD-b.js";import"./useControlled-B6GP9yW3.js";import"./getReactElementRef-DPw-urYU.js";import"./Grow-DBeS4e2R.js";import"./Fade-JdsVBD0d.js";import"./Popper-DHr_zjXm.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CVkW7u-C.js";import"./useSlotProps-BOeU6Jc-.js";import"./Box-GXstN-rb.js";import"./TextField-BiTOYUqB.js";import"./Select-Ci4Whg9k.js";import"./Menu-B2-Faewi.js";import"./Popover-Bu3GbmOh.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-WLxX0B3R.js";import"./Modal-BDKMR39Z.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Paper-DwLQydi-.js";import"./List-CsJtNqqR.js";import"./FormHelperText-D4RFhdtu.js";import"./FormControl-DrNQuFfo.js";import"./isMuiElement-CKOWx0Lk.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
`})})]})}function te(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{te as default};
