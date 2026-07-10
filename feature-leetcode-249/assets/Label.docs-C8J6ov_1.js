import{B as e}from"./iframe-Dcn6YDFx.js";import{useMDXComponents as o}from"./index-C1W9_Yt_.js";import{b as i}from"./index-IWcivFoF.js";import{L as a}from"./Label.stories-BrHB1_sX.js";import"./preload-helper-DqXJTOSk.js";import"./index-C9r--GjX.js";import"./index-B_FpL5kS.js";import"./index-Bl3bNgBu.js";import"./InfoOutlined-YbWJ6cJ5.js";import"./createSvgIcon-DGG6Zyo9.js";import"./memoTheme-DPlfdpPe.js";import"./TextField-Dc_0-WMb.js";import"./useSlot-DliufaS0.js";import"./mergeSlotProps-CeBicmJi.js";import"./useForkRef-BN8UVOet.js";import"./Select-DDIin9RH.js";import"./Menu-B8KwizAV.js";import"./useSlotProps-Ar9TY5Xc.js";import"./Popover-DxvePN-q.js";import"./Portal-CTMnnWm3.js";import"./getReactElementRef-CF0B0WjN.js";import"./ownerWindow-Div3uMIb.js";import"./Grow-B5psjXda.js";import"./useTheme-D3CcGcgu.js";import"./utils-C_VJXjgC.js";import"./useTimeout-CShyh83E.js";import"./mergeSlotProps-DnPQepn4.js";import"./debounce-Be36O1Ab.js";import"./Modal-Bt_5mwsO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-BDmZ_Io_.js";import"./Paper-C4eayxax.js";import"./List-LEqzxXNc.js";import"./utils-CcHfNDT-.js";import"./useControlled-Bwbie3BZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-Biipu21e.js";import"./FormHelperText-DmwW3b61.js";import"./FormControl-CZo3EySQ.js";import"./isMuiElement-DfykzKwk.js";import"./Typography-DSMGf4V9.js";import"./IconButton-D20y_TMi.js";import"./ButtonBase-BgzGlZJq.js";import"./CircularProgress-CCL5Or5w.js";import"./Tooltip-dASulkIp.js";import"./Popper--04e1PwV.js";import"./Box-BX-xwAj4.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
