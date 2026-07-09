import{B as e}from"./iframe-C2G20qM_.js";import{useMDXComponents as o}from"./index-CFOfi0Ni.js";import{b as i}from"./index-E3msggJ3.js";import{L as a}from"./Label.stories-D20Lso1H.js";import"./preload-helper-DGCCE14-.js";import"./index-o_u-X7z7.js";import"./index-Bom-OQAR.js";import"./index-DTzZRHGj.js";import"./InfoOutlined-hG484fK7.js";import"./createSvgIcon-meOisykS.js";import"./memoTheme-DHffIrQd.js";import"./TextField-CAkhJCPN.js";import"./useSlot-skxyFX7O.js";import"./mergeSlotProps-DKeAbPE3.js";import"./useForkRef-BJo2j4kL.js";import"./Select-CWJjLdTl.js";import"./Menu-C6BBRGpJ.js";import"./useSlotProps-DcmLvmoc.js";import"./Popover-Uc_NuECB.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-Qu2J8_CE.js";import"./useTheme-CPDYltV8.js";import"./Fade-CW0wkNYm.js";import"./useTimeout-B0Psf3hq.js";import"./getReactElementRef-RrfqZraO.js";import"./mergeSlotProps-GH4cIIxw.js";import"./Modal-CXwu14wv.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-1B9ytfkO.js";import"./Paper-CbNPjh2K.js";import"./List-Cix4aqI9.js";import"./utils-CtPIKOxC.js";import"./useControlled-lruElQXP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-MFWOiADy.js";import"./FormHelperText-CefLnlXL.js";import"./FormControl-D5ck5B__.js";import"./isMuiElement-DQF6QJJ6.js";import"./Typography-CTr450FL.js";import"./IconButton-79BzpGox.js";import"./ButtonBase-BGpdhA0w.js";import"./CircularProgress-DhGv1HWx.js";import"./Tooltip-BUtEcIJt.js";import"./Popper-C3g4u5bY.js";import"./Box-Do0mZ-yn.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
