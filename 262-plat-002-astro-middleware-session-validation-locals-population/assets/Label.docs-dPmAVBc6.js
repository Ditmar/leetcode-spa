import{B as e}from"./iframe-CWUNiff6.js";import{useMDXComponents as o}from"./index-DfmDQSB3.js";import{b as i}from"./index-B7EK8LrK.js";import{L as a}from"./Label.stories-DFrjnJAb.js";import"./preload-helper-BOJww6b9.js";import"./index-BqjZeU5w.js";import"./index-BGiOSX2_.js";import"./index-DSwNrrq8.js";import"./InfoOutlined-CYhwgAx6.js";import"./createSvgIcon-BgMRyLsz.js";import"./memoTheme-BrbtfsWu.js";import"./TextField-BZnJmR1F.js";import"./useSlot-owjklEV6.js";import"./mergeSlotProps-BtCNLxsA.js";import"./useForkRef-NJAszugp.js";import"./Select-DCJoBih6.js";import"./Menu-BylkDx5U.js";import"./useSlotProps-CEM2J4PI.js";import"./Popover-NnlWsO2p.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-EBmMjgcH.js";import"./useTheme-CnAvZbIC.js";import"./Fade-WN6xa3C2.js";import"./useTimeout-CabDqWRy.js";import"./getReactElementRef-BWSJ7qJR.js";import"./mergeSlotProps-BcMaPMH2.js";import"./Modal-CqEjQZ69.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DRIZW8BJ.js";import"./Paper-JeKh8tfr.js";import"./List-Cbh45LsX.js";import"./utils-BHPjqX1e.js";import"./useControlled-HzhFIM2V.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-BRk-XRKM.js";import"./FormHelperText-DgoL3Ygy.js";import"./FormControl-BjPiqYpu.js";import"./isMuiElement-CfPb0LV5.js";import"./Typography-CKCcfm24.js";import"./IconButton-B4SC8gkw.js";import"./ButtonBase-C6jmUPsZ.js";import"./CircularProgress-B9VFph-7.js";import"./Tooltip-COQK0QK-.js";import"./Popper-CcwbaCPa.js";import"./Box-BBj--_el.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
