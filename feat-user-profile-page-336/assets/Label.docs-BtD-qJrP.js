import{B as e}from"./iframe-P37mdBew.js";import{useMDXComponents as o}from"./index-Do_epqs0.js";import{b as i}from"./index-CzYlamxO.js";import{L as a}from"./Label.stories-D6kVjulq.js";import"./preload-helper-CvOOIGAr.js";import"./index-Ce8ySwJ7.js";import"./index-BbcYcYOe.js";import"./index-BTVNt-g_.js";import"./InfoOutlined-As4Ot56u.js";import"./createSvgIcon-BT-2_dl9.js";import"./memoTheme-CBvkZZdB.js";import"./TextField-CCI4dtYf.js";import"./useSlot-egTSPaey.js";import"./mergeSlotProps-BQd8pJQM.js";import"./useForkRef-BDvAJKxw.js";import"./Select-Ct0gsDQ9.js";import"./Menu-BJrcEB3H.js";import"./useSlotProps-C-lO2c41.js";import"./Popover-fS89P8zI.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-DVABgh8v.js";import"./useTheme-By5hW5C_.js";import"./Fade-Bmo4OUyj.js";import"./useTimeout-DwP7dA6F.js";import"./getReactElementRef-DU1TueNT.js";import"./mergeSlotProps-30dKAEux.js";import"./Modal-RlkXrizy.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-cNkO6iOR.js";import"./Paper-CbRY0MhZ.js";import"./List-D70fPVm4.js";import"./utils-DUvNe_2T.js";import"./useControlled-BcI7Iwav.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-D5zs8bN0.js";import"./FormHelperText-BoVNxQf6.js";import"./FormControl-Bs4Tlv6o.js";import"./isMuiElement-BRDsxIkz.js";import"./Typography-CqdmR9l8.js";import"./IconButton-DXL1Tavz.js";import"./ButtonBase-CLjYP239.js";import"./CircularProgress-DJmx3f5B.js";import"./Tooltip-BqRtqGOQ.js";import"./Popper-Dff1T6Z9.js";import"./Box-CD1eM_tm.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
