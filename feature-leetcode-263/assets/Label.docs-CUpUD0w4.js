import{B as e}from"./iframe-BU-sGBYQ.js";import{useMDXComponents as o}from"./index-J46bBAXK.js";import{b as i}from"./index-B89eOQiw.js";import{L as a}from"./Label.stories-M9mbcolm.js";import"./preload-helper-ASOJwovS.js";import"./index-zm8FmVfU.js";import"./index-CTSSOBYG.js";import"./index-CMeIDvya.js";import"./InfoOutlined-BAKJstDz.js";import"./createSvgIcon-DCdKjLdd.js";import"./memoTheme-CBjeJ4D8.js";import"./TextField-CDYjtbon.js";import"./useSlot-B0d1yNxO.js";import"./mergeSlotProps-d_WdfG_c.js";import"./useForkRef-xCWbJJmR.js";import"./Select-ZruQlpNl.js";import"./Menu-B5u1ZRv4.js";import"./useSlotProps-CFUY5joL.js";import"./Popover-BZa_uqrC.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-kk1kJnOt.js";import"./useTheme-DogTZuZs.js";import"./Fade-B96ZrmIe.js";import"./useTimeout-zKKoSDh6.js";import"./getReactElementRef-D7uXfzMD.js";import"./mergeSlotProps-7sKhNzEt.js";import"./Modal-BVMR8BV-.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-pxZiNCxV.js";import"./Paper-B35j_-Hw.js";import"./List-XgWlvADS.js";import"./utils-Mk8XdKYb.js";import"./useControlled-D88ECKBH.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-CRFMLwvq.js";import"./FormHelperText-mS16SW1H.js";import"./FormControl-4Rs7kJB-.js";import"./isMuiElement-BwPR9hBz.js";import"./Typography-DASDYw2r.js";import"./IconButton-CPT35ggR.js";import"./ButtonBase-BwIpcprc.js";import"./CircularProgress-X3IsOE8b.js";import"./Tooltip-Zf5dnKdC.js";import"./Popper-Be565DRJ.js";import"./Box-DdUhLrZV.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
