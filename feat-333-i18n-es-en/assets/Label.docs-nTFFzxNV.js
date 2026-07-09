import{B as e}from"./iframe-BNSjcfNt.js";import{useMDXComponents as o}from"./index-C6D55451.js";import{b as i}from"./index-DXZQb8AI.js";import{L as a}from"./Label.stories-1S10VctU.js";import"./preload-helper-DyUpdmRI.js";import"./index-GXM77MbO.js";import"./index-B440si1z.js";import"./index-BFk3RNQF.js";import"./InfoOutlined-Dj700Nx6.js";import"./createSvgIcon-Dj8y4V5W.js";import"./memoTheme-DBw7RWUi.js";import"./InputLabel-bYVgl35F.js";import"./utils-CiqSlDFG.js";import"./FormLabel-qkWVkSPS.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Typography-DoXSy7gn.js";import"./IconButton-Cl3RkJ1L.js";import"./ButtonBase-BzA1GG5g.js";import"./useTimeout-BLyhA226.js";import"./useForkRef-CnxwSjRO.js";import"./CircularProgress-rSl1VZH6.js";import"./Tooltip-DL6CzXPO.js";import"./useTheme-D8Y0o9bs.js";import"./useSlot-C7EhFcTE.js";import"./mergeSlotProps-C77WHapi.js";import"./useControlled-pDY-2P7O.js";import"./getReactElementRef-CiAXNh-z.js";import"./Grow-BDtsX9P5.js";import"./utils-DwhSo-BL.js";import"./Popper-Cp9Rfd-W.js";import"./Portal-C_7JX0vG.js";import"./useSlotProps-CYux4yBT.js";import"./Box-CIgn6KiE.js";import"./TextField-ChBMYl69.js";import"./Select-BsxVULbC.js";import"./Menu-DjDJoh1W.js";import"./Popover-CM3V7IwH.js";import"./ownerWindow-JC6BmS5B.js";import"./mergeSlotProps-CmmYKtir.js";import"./debounce-Be36O1Ab.js";import"./Modal-BOLRwPIS.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-DpNVAzcp.js";import"./Paper-CN7VfzyX.js";import"./List-Cb4UtVFR.js";import"./FormHelperText-rKDy_ndI.js";import"./FormControl-DW4BmVVv.js";import"./isMuiElement-PIU_0uNg.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
`})})]})}function te(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{te as default};
