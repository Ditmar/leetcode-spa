import{B as e}from"./iframe-dCz7l3le.js";import{useMDXComponents as o}from"./index-azSwcJbT.js";import{b as i}from"./index-DMtVAh3-.js";import{L as a}from"./Label.stories-h06UD9vc.js";import"./preload-helper-DsaTGXN_.js";import"./index-DY1OWIjo.js";import"./index-DbDLQh3h.js";import"./index-k3Z9rM0M.js";import"./InfoOutlined-DGTNj4Kd.js";import"./createSvgIcon-BdUwa8NI.js";import"./memoTheme-7GZLp9UD.js";import"./TextField-NbLi7zvC.js";import"./useSlot-BLRKkOPz.js";import"./mergeSlotProps-ClutALKs.js";import"./useForkRef-CirruXx9.js";import"./Select-tCVhTtpu.js";import"./Menu-gJNn4pOh.js";import"./useSlotProps-C3hNlJqG.js";import"./Popover-B5B1VcWM.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-CEqdXkkS.js";import"./useTheme-DFkP5uBe.js";import"./Fade-CUyddBYy.js";import"./useTimeout-X2x3G_b-.js";import"./getReactElementRef-DiRYaMUb.js";import"./mergeSlotProps-Bi7LRMmn.js";import"./Modal-C9kSSt02.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-5E2oBVR2.js";import"./Paper-b9UqMY6k.js";import"./List-CX3ycilt.js";import"./utils-B89qA1-h.js";import"./useControlled-Bbo30TmK.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-He7suQXc.js";import"./FormHelperText-CiJhBqgb.js";import"./FormControl-RuqRYjl8.js";import"./isMuiElement-E09E4B2_.js";import"./Typography-DcqlioOE.js";import"./IconButton-C7NEyC8D.js";import"./ButtonBase-D69jtnEV.js";import"./CircularProgress-eLSR4uRf.js";import"./Tooltip-CwD3fps3.js";import"./Popper-CQJ5sGje.js";import"./Box-jkTCFyTM.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
