import{B as e}from"./iframe-2rU4mVaD.js";import{useMDXComponents as o}from"./index-DVhrIeFv.js";import{b as i}from"./index-D_CNDIWp.js";import{L as a}from"./Label.stories-Dkp1_UeW.js";import"./preload-helper-CYpyWKzT.js";import"./index-EcOTX1pJ.js";import"./index-D3sDzNz4.js";import"./index-DJCvfc4q.js";import"./InfoOutlined-B3RawSB4.js";import"./createSvgIcon-BjCU1R2t.js";import"./memoTheme-BQ_LCa5n.js";import"./TextField-D3RDzNKi.js";import"./useSlot-CQtrnA6s.js";import"./mergeSlotProps-CtfYxtps.js";import"./useForkRef-DApV2m6O.js";import"./Select-FxUm3pcj.js";import"./Menu-LpmtCu_I.js";import"./useSlotProps-BpXh4MH1.js";import"./Popover-DYyTnSHb.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BzzSE0KT.js";import"./useTheme-4UGIVlt0.js";import"./Fade-B6w1utWv.js";import"./useTimeout-B-DU1Zsw.js";import"./getReactElementRef-DMyCAPrm.js";import"./mergeSlotProps-C18-7bVQ.js";import"./Modal-DwL0_Y6v.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Bsxbg4Xo.js";import"./Paper-BLAoU0IV.js";import"./List-CMmE8vsc.js";import"./utils-WZWLvGvq.js";import"./useControlled-DpdIXzB7.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-LRFK2j8B.js";import"./FormHelperText-BuFK-eB9.js";import"./FormControl-DKV9BlDR.js";import"./isMuiElement-DP1GM4e3.js";import"./Typography-Cqj3gAvh.js";import"./IconButton-D2Oz-If0.js";import"./ButtonBase-B6DJZMiE.js";import"./CircularProgress-ZVeKzZjC.js";import"./Tooltip-BzLFpM-o.js";import"./Popper-BznsK_Ly.js";import"./Box-CvvoK3eV.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
