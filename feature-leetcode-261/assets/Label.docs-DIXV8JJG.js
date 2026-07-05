import{B as e}from"./iframe-CXjweXxv.js";import{useMDXComponents as o}from"./index-SAyGAss6.js";import{b as i}from"./index-DTVU7Axo.js";import{L as a}from"./Label.stories-TzUt2F3W.js";import"./preload-helper-NTY61udR.js";import"./index-DbzNsARh.js";import"./index-CtezfR3A.js";import"./index-BF0DUUEx.js";import"./InfoOutlined-Dlk5qeyE.js";import"./createSvgIcon-BXCwD5bq.js";import"./memoTheme-C5_9Xdvo.js";import"./TextField-BDmu_D2e.js";import"./useSlot-CZW1JK_v.js";import"./mergeSlotProps-BCVK1Hxf.js";import"./useForkRef-CjoT-jYw.js";import"./Select-aYKqnRR7.js";import"./Menu-DiF_D8I5.js";import"./useSlotProps-BRDDpIKT.js";import"./Popover-DWCrO5L1.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-DnWYTCAV.js";import"./useTheme-zPpXPhfJ.js";import"./Fade-CoSC6wxU.js";import"./useTimeout-B2PIFFP5.js";import"./getReactElementRef-B6k4X_Kk.js";import"./mergeSlotProps-C6vRyy6Z.js";import"./Modal-BMQaRdVw.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-C7ZvIngI.js";import"./Paper-DvYYjW03.js";import"./List-C2aRhizE.js";import"./utils-DYSvlDY3.js";import"./useControlled-CXl4Lk2u.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-CJO9G5aa.js";import"./FormHelperText-Dwj4YXPu.js";import"./FormControl-DMDet5z3.js";import"./isMuiElement-BoZdy4QW.js";import"./Typography-C-ND5H6b.js";import"./IconButton-D7sK6CQF.js";import"./ButtonBase-dxi38rJy.js";import"./CircularProgress-RRfgbmpu.js";import"./Tooltip-DYvVC-Re.js";import"./Popper-pcYikcc4.js";import"./Box-BOsiFWYE.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
