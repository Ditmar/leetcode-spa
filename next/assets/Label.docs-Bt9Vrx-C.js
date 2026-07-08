import{B as e}from"./iframe-L8zodCmy.js";import{useMDXComponents as o}from"./index-DoJcCiJT.js";import{b as i}from"./index-zEGhKItf.js";import{L as a}from"./Label.stories-CTQx7WzM.js";import"./preload-helper-B1AL8F-k.js";import"./index-DVM8RFMW.js";import"./index-B1seoT90.js";import"./index-Chsfw8Yg.js";import"./InfoOutlined-bYOH3akc.js";import"./createSvgIcon-CjPa2cpM.js";import"./memoTheme-RK34737X.js";import"./TextField-xIR8InCF.js";import"./useSlot-Ce10z0ZF.js";import"./mergeSlotProps-C_F3GNE7.js";import"./useForkRef-BTdZJqR3.js";import"./Select-Dyk5n-fE.js";import"./Menu-C-0GOClT.js";import"./useSlotProps-BUMNld7g.js";import"./Popover-CfzUz8li.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-CW7VoYHS.js";import"./useTheme-BXtGiiBu.js";import"./Fade-CGBT749m.js";import"./useTimeout-BYJZK6ds.js";import"./getReactElementRef-C2BrNnqf.js";import"./mergeSlotProps-CP-iI82r.js";import"./Modal-CFA0uxSj.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BxLy5ov-.js";import"./Paper-Ddyp4PsT.js";import"./List-BzhxkV2d.js";import"./utils-CzMBEg7m.js";import"./useControlled-GaYt9Gie.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-kxx4geri.js";import"./FormHelperText-QIPg48zE.js";import"./FormControl-BlVtXPPR.js";import"./Typography-Dza4jedJ.js";import"./IconButton-DVtDnPxn.js";import"./ButtonBase-D2ngbebe.js";import"./CircularProgress-DEZnUKGS.js";import"./Tooltip-BO0O4ptj.js";import"./Popper-BDTllzTJ.js";import"./Box-BS7hj-XT.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
