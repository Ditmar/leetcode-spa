import{B as e}from"./iframe-GGmwdmef.js";import{useMDXComponents as o}from"./index-nZ_vxy5o.js";import{b as i}from"./index-D_xlRRWF.js";import{L as a}from"./Label.stories-3uDU__1i.js";import"./preload-helper-d4NgKMIF.js";import"./index-Ck542hlD.js";import"./index-DbYLbxPX.js";import"./index-BdG-VySA.js";import"./InfoOutlined-BmmKFXZm.js";import"./createSvgIcon-BuG5WtDY.js";import"./memoTheme-1ZANC0n5.js";import"./TextField-C82F_IwX.js";import"./useSlot-D9WIaykA.js";import"./mergeSlotProps-CkLkzbLW.js";import"./useForkRef-S36ndtfk.js";import"./Select--8WyGIPe.js";import"./Menu-7vmUXj32.js";import"./useSlotProps-BY7zVEwP.js";import"./Popover-0qWjnmyK.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-DJ8byrmv.js";import"./useTheme-WYhuZ9Cu.js";import"./Fade-DAac37yq.js";import"./useTimeout-BjZTR8rF.js";import"./getReactElementRef-toyuHlKp.js";import"./mergeSlotProps-BqW8vrg3.js";import"./Modal-DQk44Dwc.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BDZMVMgC.js";import"./Paper-CplGUDHV.js";import"./List-Cwb0W11m.js";import"./utils-CLHOw4R7.js";import"./useControlled-B2n2j61s.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-BoA0kJ1m.js";import"./FormHelperText-CEiI2j0S.js";import"./FormControl-DvrdjMt1.js";import"./Typography-gIvs6I4g.js";import"./IconButton-MSx3jTEx.js";import"./ButtonBase-BunHsHz4.js";import"./CircularProgress-BMMGcxlJ.js";import"./Tooltip-BAGtDIoB.js";import"./Popper-ClTszKm9.js";import"./Box-DiAoakt9.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
