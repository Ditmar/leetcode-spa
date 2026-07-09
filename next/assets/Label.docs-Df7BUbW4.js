import{B as e}from"./iframe-CGPzQEbA.js";import{useMDXComponents as o}from"./index-CtVOibdH.js";import{b as i}from"./index-C5z6aClY.js";import{L as a}from"./Label.stories-BdPvJZWZ.js";import"./preload-helper-B1AL8F-k.js";import"./index-B3s5lOgy.js";import"./index-DyYq-Bh1.js";import"./index-CsVPhTNP.js";import"./InfoOutlined-DcP7XqHk.js";import"./createSvgIcon-a0_hVUFa.js";import"./memoTheme-CDikIYNA.js";import"./TextField-BI7Y2wlW.js";import"./useSlot-Z4sTV71Z.js";import"./mergeSlotProps-BMCMelOH.js";import"./useForkRef-DYN3lF_g.js";import"./Select-CjzbDMLY.js";import"./Menu-kjc0UKKa.js";import"./useSlotProps-muueWeVt.js";import"./Popover-CKzL3Um-.js";import"./Portal-C27iR0VQ.js";import"./getReactElementRef-X7DdN5PQ.js";import"./ownerWindow-CBfEs6HN.js";import"./Grow-CRuHjJiN.js";import"./useTheme-BpaV8Ljx.js";import"./Fade-CgE8Du3o.js";import"./useTimeout-DlgU5Irg.js";import"./mergeSlotProps-Bcknjwc-.js";import"./debounce-Be36O1Ab.js";import"./Modal-DY4g7GSf.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Paper-B6chQqkV.js";import"./List-Np1-j5xD.js";import"./utils-BBmGSPZE.js";import"./useControlled-BGAObzme.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-B3DXyNSM.js";import"./FormHelperText-B6EU4R0m.js";import"./FormControl-N1psD6Ke.js";import"./isMuiElement-CQtYaoUK.js";import"./Typography-DJSibsiZ.js";import"./IconButton-CU32BWZV.js";import"./ButtonBase-DXq_11aq.js";import"./CircularProgress-KLzKjdNf.js";import"./Tooltip-9S5vGT18.js";import"./Popper-C8zN3f8l.js";import"./Box-B5deNiIA.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
