import{B as e}from"./iframe-D_6ULxLv.js";import{useMDXComponents as o}from"./index-Ud7sR9-U.js";import{b as i}from"./index-DHAUHOeI.js";import{L as a}from"./Label.stories-CFJj_aJg.js";import"./preload-helper-I0W1Lj38.js";import"./index-Bgt7I-yM.js";import"./index-DBK9SPKG.js";import"./index-CLaPmcwp.js";import"./InfoOutlined-BrHsLkcf.js";import"./createSvgIcon-C4TfcgdZ.js";import"./memoTheme-FqbKm3TE.js";import"./TextField-CsmS4GAO.js";import"./useSlot-6CWRA_bG.js";import"./mergeSlotProps-D93biaoC.js";import"./useForkRef-DLWN9Psk.js";import"./Select-DEcdrN_y.js";import"./Menu-BHO6Y1Th.js";import"./useSlotProps-BMQ0gZlM.js";import"./Popover-SMjl398E.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-kp3d7x8s.js";import"./useTheme-B4RuPJM-.js";import"./Fade-CZrI8_pd.js";import"./useTimeout-BDK2b9Dv.js";import"./getReactElementRef-DL8NDfev.js";import"./mergeSlotProps-CCQ4lJjW.js";import"./Modal-ZKre8R5c.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CttBcyqT.js";import"./Paper-BHnc6ZS1.js";import"./List-DxBwXgH1.js";import"./utils-_bS3ODFU.js";import"./useControlled-C0cIPDKT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-BFtchgJz.js";import"./FormHelperText-CUvz6v1d.js";import"./FormControl-qifw-d5-.js";import"./isMuiElement-CZCoK8M2.js";import"./Typography-DXyd7_Ds.js";import"./IconButton-D4OlFrWq.js";import"./ButtonBase-Cmh1Cg7c.js";import"./CircularProgress-D0zI6RBU.js";import"./Tooltip-CZoekmqn.js";import"./Popper-DXhuriNk.js";import"./Box-B7GLDVbQ.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
