import{B as e}from"./iframe-D57C2bs3.js";import{useMDXComponents as o}from"./index-WOCDwjbE.js";import{b as i}from"./index-B5syZBYz.js";import{L as a}from"./Label.stories-D2TwLIWP.js";import"./preload-helper-C5NKOYid.js";import"./index-CWWigrhP.js";import"./index-DHnCfoO1.js";import"./index-DwZ6eQiG.js";import"./InfoOutlined-Bcxa9CNV.js";import"./createSvgIcon-ly505Geb.js";import"./memoTheme-Ccq-XOTi.js";import"./TextField-CQ171Mw3.js";import"./useSlot-DDDCeOoa.js";import"./mergeSlotProps-Bw6tqCSB.js";import"./useForkRef-tZnwpMdp.js";import"./Select-78xJayW-.js";import"./Menu-EQDnLM1q.js";import"./useSlotProps-CaCtxwt2.js";import"./Popover-Cq4S0vJt.js";import"./Portal-6g1rKzmY.js";import"./getReactElementRef-C6HShLP6.js";import"./ownerWindow-BjxGMHil.js";import"./Grow-CQYT2hya.js";import"./useTheme-CIvl8rg0.js";import"./Fade-BzpdqxGC.js";import"./useTimeout-BW-cna5V.js";import"./mergeSlotProps-DcdvFxiG.js";import"./debounce-Be36O1Ab.js";import"./Modal-nN_GdKoe.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Paper-D3ZkPoV7.js";import"./List-C8YMXyWw.js";import"./utils-CwI1n8G_.js";import"./useControlled-De0C0JGe.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-BcOJ-HkN.js";import"./FormHelperText-DiAc7VoO.js";import"./FormControl-DCpW7mog.js";import"./isMuiElement-BloaocAm.js";import"./Typography-Dgw02VrH.js";import"./IconButton-Vgb9KLhA.js";import"./ButtonBase-9Qx7tXz5.js";import"./CircularProgress-DWOR1vvp.js";import"./Tooltip-B5QLUM2n.js";import"./Popper-BCKY9_v8.js";import"./Box-DsG7LB4X.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
