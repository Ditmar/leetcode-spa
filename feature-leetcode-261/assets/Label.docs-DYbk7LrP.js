import{B as e}from"./iframe-C_BKvlc7.js";import{useMDXComponents as o}from"./index-Ce8n8oM3.js";import{b as i}from"./index-BHOgw7Rq.js";import{L as a}from"./Label.stories-CwyKKznf.js";import"./preload-helper-NTY61udR.js";import"./index-CvgzWifH.js";import"./index-_Z6Dv2Bn.js";import"./index-DHa-hYxX.js";import"./InfoOutlined-o4b-7pnM.js";import"./createSvgIcon-KT2r4Fsb.js";import"./memoTheme-gRwXzapv.js";import"./TextField-rfiGBstK.js";import"./useSlot-Ezl2r_zg.js";import"./mergeSlotProps-Rw7gjTRJ.js";import"./useForkRef-B9QkcmRh.js";import"./Select-DuXJ_5Fl.js";import"./Menu-BHVbAqb7.js";import"./useSlotProps-B58UH3H7.js";import"./Popover-BQOj6OP_.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow--ZyOfzfg.js";import"./useTheme-2MF8BD_S.js";import"./Fade-CxBMu4k_.js";import"./useTimeout-JPX9oB9T.js";import"./getReactElementRef-C87YFgp2.js";import"./mergeSlotProps-DO5fRASv.js";import"./Modal-vIAqixsy.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cd5SfFQM.js";import"./Paper-5wQhZNQV.js";import"./List-TzEfjTm-.js";import"./utils-Dx7gJC7r.js";import"./useControlled-CVibO7eP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-Dk5DfFaC.js";import"./FormHelperText-DOdqIGyw.js";import"./FormControl-BvqLuzfU.js";import"./Typography-CyvInm13.js";import"./IconButton-BvHKkZDr.js";import"./ButtonBase-DtiDGTyK.js";import"./CircularProgress-D2tCq0ji.js";import"./Tooltip-Dw7fgdl1.js";import"./Popper-9ppF7tGY.js";import"./Box-nwC9v9Sj.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
