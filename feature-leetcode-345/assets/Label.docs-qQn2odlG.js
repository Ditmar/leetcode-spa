import{B as e}from"./iframe-9lPkI3FW.js";import{useMDXComponents as o}from"./index-Ox1_z0wM.js";import{b as i}from"./index-biHB1h0X.js";import{L as a}from"./Label.stories-BJ78pLZW.js";import"./preload-helper-DZTZBIsU.js";import"./index-N7JWbLUp.js";import"./index-RkB_Gks4.js";import"./index-CEgU_mK4.js";import"./InfoOutlined-BKJ2JuTt.js";import"./createSvgIcon-aapNsnRP.js";import"./memoTheme-NAndHqmU.js";import"./TextField-CBc44_wM.js";import"./useSlot-DFfREBpw.js";import"./mergeSlotProps-BCe4I8sp.js";import"./useForkRef-BqWxzhAK.js";import"./Select-DkyI5b0o.js";import"./Menu-Ctol5d2p.js";import"./useSlotProps-CNu4zHz5.js";import"./Popover-B45xgNIQ.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-CQxNAXnn.js";import"./useTheme-xD1jfKLd.js";import"./Fade-0x4kJMIk.js";import"./useTimeout-BzEizFTI.js";import"./getReactElementRef-D_jJTACH.js";import"./mergeSlotProps-qi0c9-dB.js";import"./Modal-CmyJ_W7b.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CnHsz4bs.js";import"./Paper-b-4QqWD4.js";import"./List-C86a-xVZ.js";import"./utils-Cy_ktpb9.js";import"./useControlled-Cpb0Npo1.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-00P0kGu_.js";import"./FormHelperText-DeIuL-O6.js";import"./FormControl-CJEOP2-2.js";import"./Typography-5KQFy3FA.js";import"./IconButton-BbZ5EoWo.js";import"./ButtonBase-3BcchjBn.js";import"./CircularProgress-BSAr-xN0.js";import"./Tooltip-EhldEoXY.js";import"./Popper-BFHTq_-Q.js";import"./Box-CuPH7HZQ.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
