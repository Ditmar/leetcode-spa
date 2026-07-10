import{B as e}from"./iframe-DkeQ2-4G.js";import{useMDXComponents as o}from"./index-BOBV5yMz.js";import{b as i}from"./index-CGn59f2v.js";import{L as a}from"./Label.stories-CmAJA9gU.js";import"./preload-helper-ASOJwovS.js";import"./index-B_6Qv3xW.js";import"./index-CufiVT0x.js";import"./index-Dl64zkTp.js";import"./InfoOutlined-CLJ8uqS0.js";import"./createSvgIcon-DIwMPfkl.js";import"./memoTheme-N2u8E1k1.js";import"./TextField-D75Sfaag.js";import"./useSlot-C3vs19P_.js";import"./mergeSlotProps-BtZFI7wB.js";import"./useForkRef-phbKsBOx.js";import"./Select-WPUlpR2Q.js";import"./Menu-CSAvJhY0.js";import"./useSlotProps-mnOPGvYi.js";import"./Popover-DoeGJUcX.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-CGl7VC50.js";import"./useTheme-BGpnBXuD.js";import"./Fade-CWeeoE2H.js";import"./useTimeout-BpWXNoZd.js";import"./getReactElementRef-jAKtoPkn.js";import"./mergeSlotProps-Bze_2eAY.js";import"./Modal-oYXOPFRP.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BZQIyi4e.js";import"./Paper-DYg3Jbw3.js";import"./List-X5o8DqNd.js";import"./utils-DttSC60X.js";import"./useControlled-BbxskJf4.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-nD7XXbfy.js";import"./FormHelperText-Dw2YGD1E.js";import"./FormControl-D6JdCBSC.js";import"./isMuiElement-BO4SQ0ky.js";import"./Typography-DVm3fi1R.js";import"./IconButton-PysaeEzW.js";import"./ButtonBase-B1wdAEq1.js";import"./CircularProgress-qBHOR7_o.js";import"./Tooltip-CuONjwL5.js";import"./Popper-D7a8dLem.js";import"./Box-DRDnsihD.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
