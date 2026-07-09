import{B as e}from"./iframe-oErozK25.js";import{useMDXComponents as o}from"./index-DGLMUL6-.js";import{b as i}from"./index-CN2IAvNZ.js";import{L as a}from"./Label.stories-CxQBavF7.js";import"./preload-helper-C3L6Q04T.js";import"./index-DscJOHkE.js";import"./index-CAOGLRAG.js";import"./index-BP4FS1Pl.js";import"./InfoOutlined-DNFoOxIO.js";import"./createSvgIcon-zI-pCpUv.js";import"./memoTheme-BKIpZ1Aq.js";import"./TextField-BDTKhmXU.js";import"./useSlot-y20szoAq.js";import"./mergeSlotProps-5jOoTde7.js";import"./useForkRef-Cx2yRqd2.js";import"./Select-DXMddYb7.js";import"./Menu-sqicHIxk.js";import"./useSlotProps-CH3AOZOL.js";import"./Popover-DV7syahB.js";import"./Portal-CGRe1j85.js";import"./getReactElementRef-BDJTLHeG.js";import"./ownerWindow-B3TZoa2Y.js";import"./Grow-C3cDMAmP.js";import"./useTheme-B6rT6Pst.js";import"./Fade-CUezFCPy.js";import"./useTimeout-Dh2xCq7t.js";import"./mergeSlotProps-BZTSjL7j.js";import"./debounce-Be36O1Ab.js";import"./Modal-BeB80-ou.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Paper-BoaH14M1.js";import"./List-BJ8XA5LW.js";import"./utils-CEW14NAT.js";import"./useControlled-B-2wRsFc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-DuLOIl_s.js";import"./FormHelperText-Bxx2uMJx.js";import"./FormControl-DW_JHfEc.js";import"./isMuiElement-D4vKPRvY.js";import"./Typography-CC2UWR9A.js";import"./IconButton-6x7Uchzm.js";import"./ButtonBase-BQj7DzMF.js";import"./CircularProgress-BGxt7oHU.js";import"./Tooltip-BxC11N64.js";import"./Popper-DeeE-L-f.js";import"./Box-DNcFwdZM.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
