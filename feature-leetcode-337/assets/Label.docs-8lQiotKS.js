import{B as e}from"./iframe-BZ-BbDkT.js";import{useMDXComponents as o}from"./index-B7FSPnok.js";import{b as i}from"./index-CLTgau0z.js";import{L as a}from"./Label.stories-CH9SNzYh.js";import"./preload-helper-DmuEUn68.js";import"./index-CsQ3LSM7.js";import"./index-DENqvoMT.js";import"./index-C7WdeKcK.js";import"./InfoOutlined-BlgvGjeA.js";import"./createSvgIcon-Dt7Fw4hj.js";import"./memoTheme-CmFYl6xk.js";import"./TextField-BvsmrUFE.js";import"./useSlot-D_siWnO8.js";import"./mergeSlotProps-BDIC0WOq.js";import"./useForkRef-Ds9AV2EJ.js";import"./Select-A4FugORt.js";import"./Menu-DitLhsVi.js";import"./useSlotProps-Gy-L5vMn.js";import"./Popover-BC_juaB9.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-VGem0G3m.js";import"./useTheme-TYA7SoHR.js";import"./Fade-C_Y4w2aJ.js";import"./useTimeout-Dr3NqjAD.js";import"./getReactElementRef-D9nvCFI4.js";import"./mergeSlotProps-BwMq2w5F.js";import"./Modal-AK2A0iA5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BYCnKRXe.js";import"./Paper-C4Ep5H3_.js";import"./List-BCgT-4QX.js";import"./utils-BrXalw-A.js";import"./useControlled-C7xwYBZ-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-Dswh9J3A.js";import"./FormHelperText-DfjXne9Z.js";import"./FormControl-DriGMQi3.js";import"./isMuiElement-6AVlUk7d.js";import"./Typography-BFpYCEQG.js";import"./IconButton-BYYkJTI2.js";import"./ButtonBase-BQ4KaDdo.js";import"./CircularProgress-Dk9maDKI.js";import"./Tooltip-BDP8K-MK.js";import"./Popper-BaVroPh7.js";import"./Box-CvbqmcPr.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
