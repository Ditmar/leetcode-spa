import{B as e}from"./iframe-CHN44os1.js";import{useMDXComponents as o}from"./index-DIxH3EJ_.js";import{b as i}from"./index-DSQZhbuJ.js";import{L as a}from"./Label.stories-BYAO8Kca.js";import"./preload-helper-DMzYX5Yq.js";import"./index-DTrzIFFr.js";import"./index-DTCEip5B.js";import"./index-CAYRkcZ-.js";import"./InfoOutlined-BpYC3ewA.js";import"./createSvgIcon-Dx2CrnX3.js";import"./memoTheme-BSGq_kzm.js";import"./TextField-C1bpTzxO.js";import"./useSlot-CzoGl2Tr.js";import"./mergeSlotProps-Cq1hkp_v.js";import"./useForkRef-BuU676MJ.js";import"./Select-ZzfdVnPd.js";import"./Menu-BAJsUTb-.js";import"./useSlotProps-Db9TaQLV.js";import"./Popover-CxIE6iss.js";import"./Portal-E6ryEt2B.js";import"./getReactElementRef-DTtEw1E_.js";import"./ownerWindow-D3YqGZ1B.js";import"./Grow-B0JcnmnJ.js";import"./useTheme-Dg1uBLUL.js";import"./utils-BkaD4ThF.js";import"./useTimeout-BhvTWZ6H.js";import"./mergeSlotProps-ChmpUGo8.js";import"./debounce-Be36O1Ab.js";import"./Modal-CieMqkkM.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-C8FvEqLN.js";import"./Paper-ByrO4jrs.js";import"./List-DJLV91Y4.js";import"./utils-uZbnogSK.js";import"./useControlled-BOIPrY5P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-gNmLEBDP.js";import"./FormHelperText-MEMLIxZD.js";import"./FormControl-BUXo4IT5.js";import"./isMuiElement-DTQZABMQ.js";import"./Typography-OEVPT_GD.js";import"./IconButton-DsaCOY50.js";import"./ButtonBase-DiI9h6zg.js";import"./CircularProgress-DhOY9PJ0.js";import"./Tooltip-DyhSfOR9.js";import"./Popper-DQ89u_DV.js";import"./Box-1JC36yOX.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
