import{B as e}from"./iframe-Dt7jQptI.js";import{useMDXComponents as o}from"./index-B3IxPef8.js";import{b as i}from"./index-Bs0p9hMN.js";import{L as a}from"./Label.stories-C7V2BFa3.js";import"./preload-helper-BFbRC-vR.js";import"./index-CDSMI22S.js";import"./index-CfFSY3XY.js";import"./index-DJe5obBp.js";import"./InfoOutlined-BSkX6PRT.js";import"./createSvgIcon-DKPF1DzT.js";import"./memoTheme-B7EyfrRJ.js";import"./TextField-Cchzix98.js";import"./useSlot-5_AWUkRu.js";import"./mergeSlotProps-CWafQdH2.js";import"./useForkRef-DFFlFZBd.js";import"./Select-BDgbCq4U.js";import"./Menu-Bgsggz5Q.js";import"./useSlotProps-zQyR6Y7F.js";import"./Popover-BoOW5GRB.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-Dej72FsJ.js";import"./useTheme-B34MzdL0.js";import"./Fade-D163Y2kB.js";import"./useTimeout-B-9WlZDA.js";import"./getReactElementRef-C397H-uI.js";import"./mergeSlotProps-NUlU7JkT.js";import"./Modal-CW8FCcph.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-k8SKMukv.js";import"./Paper-C10N96fA.js";import"./List-C-YNHZgU.js";import"./utils-Dwb5RWqZ.js";import"./useControlled-CZEL-GVf.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-CGvCU7lo.js";import"./FormHelperText-4xjUpI0H.js";import"./FormControl-Cjnbh1P3.js";import"./isMuiElement-DLuq-BTs.js";import"./Typography-B5Z9ZEib.js";import"./IconButton-djm-_N3-.js";import"./ButtonBase-CJab0Sp9.js";import"./CircularProgress-D-Dp6dhm.js";import"./Tooltip-D5Dfe-ug.js";import"./Popper-C9vooti7.js";import"./Box-DraI5h5K.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
