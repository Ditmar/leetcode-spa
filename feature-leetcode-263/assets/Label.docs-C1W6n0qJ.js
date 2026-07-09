import{B as e}from"./iframe-BbykMG82.js";import{useMDXComponents as o}from"./index-DHHWr0JA.js";import{b as i}from"./index-Bc87X3KD.js";import{L as a}from"./Label.stories-CpRl8TqU.js";import"./preload-helper-ASOJwovS.js";import"./index-B_1iNWBo.js";import"./index-CJ9vniZT.js";import"./index-BE3XwSDK.js";import"./InfoOutlined-Dp0xIJiI.js";import"./createSvgIcon-wTCxzxKu.js";import"./memoTheme-D-RVRwN3.js";import"./TextField-DDyjB9vQ.js";import"./useSlot-Dp-5tXxC.js";import"./mergeSlotProps-B_yFJcKl.js";import"./useForkRef-BC332ZW7.js";import"./Select-D3AM6wf4.js";import"./Menu-BMU_fyuS.js";import"./useSlotProps-0TmLh-mh.js";import"./Popover-B1Cgr2SN.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-caRFxmkL.js";import"./useTheme-CPxnHitt.js";import"./Fade-Cxaboy6Y.js";import"./useTimeout-Dw-9lZuh.js";import"./getReactElementRef-pwU4c7jh.js";import"./mergeSlotProps-B_x55UAS.js";import"./Modal-B4b1Njol.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-y0SHCBDl.js";import"./Paper-B9IIe3sc.js";import"./List-qjr4rV4f.js";import"./utils-DzhCmUGG.js";import"./useControlled-uvZzr9qa.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-B1GSewsY.js";import"./FormHelperText-DSlYcavq.js";import"./FormControl-DvSDmnn4.js";import"./isMuiElement-BUWtpsXC.js";import"./Typography-qQZWH-26.js";import"./IconButton-CBX0lXoH.js";import"./ButtonBase-DpFOdCfR.js";import"./CircularProgress-BSVAw7kv.js";import"./Tooltip-Ck2SQvZh.js";import"./Popper-C2uY1KEj.js";import"./Box-BFon9JSF.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
