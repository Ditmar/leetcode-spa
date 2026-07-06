import{B as e}from"./iframe-DhHmd7A5.js";import{useMDXComponents as o}from"./index-DPtvy_jl.js";import{b as i}from"./index-CTpa83zm.js";import{L as a}from"./Label.stories-DRtAE8FX.js";import"./preload-helper-DzU63Kca.js";import"./index-DW2SUgCQ.js";import"./index-C1wkcYXF.js";import"./index-BkbyVqGj.js";import"./InfoOutlined-CYlQ09-_.js";import"./createSvgIcon-C3bTRCi4.js";import"./memoTheme-EHmtyHZ6.js";import"./TextField-Dy3bgmIA.js";import"./useSlot-CVCx0a8I.js";import"./mergeSlotProps-BhITioTJ.js";import"./useForkRef-BQgVBIdn.js";import"./Select-CEAVaEZq.js";import"./Menu-C0rceSJy.js";import"./useSlotProps-DwoM1Kvc.js";import"./Popover-B_RJkbTN.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BDWO2zzl.js";import"./useTheme-D78ju0RH.js";import"./Fade-uKty-a6y.js";import"./useTimeout-CK21CvBM.js";import"./getReactElementRef-BKn0swjt.js";import"./mergeSlotProps-MxIJ4p8r.js";import"./Modal-Dvh7Ussp.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CcyRZ4da.js";import"./Paper-D7hvu21e.js";import"./List-CAPp1ASv.js";import"./utils-0koxnKlf.js";import"./useControlled-C7QYPv8R.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-C9FPQ9DQ.js";import"./FormHelperText-B3LYFl7q.js";import"./FormControl-BVZfvSKb.js";import"./isMuiElement-DGZcFaYg.js";import"./Typography-COPWrNe1.js";import"./IconButton-Dsu592Gz.js";import"./ButtonBase--Q90G_BO.js";import"./CircularProgress-R-jv5nue.js";import"./Tooltip-CfkC0SRr.js";import"./Popper-DuxY46tS.js";import"./Box-DJR5_Puy.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
