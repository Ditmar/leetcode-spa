import{B as e}from"./iframe-BaWIVN33.js";import{useMDXComponents as o}from"./index-4F03YhGt.js";import{b as i}from"./index-3Wv5fcOc.js";import{L as a}from"./Label.stories-5KBBifIw.js";import"./preload-helper-DtVaB8p0.js";import"./index-cKJwNuW-.js";import"./index-CFGjuhOb.js";import"./index-sadyiZVV.js";import"./InfoOutlined-DBN9jaRC.js";import"./createSvgIcon-Bp6-az0C.js";import"./memoTheme-BIBcca7-.js";import"./TextField-CXzy9ugL.js";import"./useSlot-BzCEPfXn.js";import"./mergeSlotProps-DB2mUThZ.js";import"./useForkRef-BJSqF2lJ.js";import"./Select-DCosR77L.js";import"./Menu-AYbNgp1p.js";import"./useSlotProps-aIXWhi9B.js";import"./Popover-CZhGe1yh.js";import"./Portal-Gpgn-7tH.js";import"./getReactElementRef-yxln_vNF.js";import"./ownerWindow-DBPBLPbw.js";import"./Grow-CqXnSGrs.js";import"./useTheme-C0epZ4jb.js";import"./Fade-D0o89_ed.js";import"./useTimeout-C5xWzQY2.js";import"./mergeSlotProps-BB_lD2oe.js";import"./debounce-Be36O1Ab.js";import"./Modal-DgTtpjr8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Paper-Cl8GVKqv.js";import"./List--roj9a80.js";import"./utils-ByUytT2l.js";import"./useControlled-CNlpWWhb.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-JJJyABdt.js";import"./FormHelperText-WVmVVfVE.js";import"./FormControl-BqXoFA-c.js";import"./isMuiElement-BoNfmC1z.js";import"./Typography-CRRC9uW-.js";import"./IconButton-CPIsIQZ6.js";import"./ButtonBase-sLYPRKvO.js";import"./CircularProgress-BbPviUAd.js";import"./Tooltip-Cr5NFCW1.js";import"./Popper-B1-1eKWJ.js";import"./Box-C4MT_Eo0.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
