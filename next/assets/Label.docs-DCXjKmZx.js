import{B as e}from"./iframe-BK4VGEPv.js";import{useMDXComponents as o}from"./index-CqK1eNBr.js";import{b as i}from"./index-CBuQ0nrC.js";import{L as a}from"./Label.stories-DwSZH9mW.js";import"./preload-helper-B1AL8F-k.js";import"./index-Dz-flCJv.js";import"./index-Dp24jD42.js";import"./index-CAOiTG_8.js";import"./InfoOutlined-BGCDS_9J.js";import"./createSvgIcon-b1NoP750.js";import"./memoTheme-BnQ5TlGJ.js";import"./TextField-4x_Z6EqU.js";import"./useSlot-BfSp94dQ.js";import"./mergeSlotProps-B-suu1wY.js";import"./useForkRef-ClxGxw5A.js";import"./Select-BUykonnt.js";import"./Menu-BKz-XNr6.js";import"./useSlotProps-BAdqBAJb.js";import"./Popover-fzNqm6mG.js";import"./Portal-CTI_wFaN.js";import"./getReactElementRef-BtrgnxNz.js";import"./ownerWindow-CicrE_as.js";import"./Grow-D16MjdpR.js";import"./useTheme-BCExkdZa.js";import"./utils-COuXMFCx.js";import"./useTimeout-Cm8Qh0Ub.js";import"./mergeSlotProps-_Fg4xLw7.js";import"./debounce-Be36O1Ab.js";import"./Modal-IfYYk-Md.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-BCx9fMo5.js";import"./Paper-jQ5nwEoa.js";import"./List-DIRfpxZM.js";import"./utils-CTgbn7zZ.js";import"./useControlled-BQfp0hBE.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-DegHi9kA.js";import"./FormHelperText-DlA9U6ab.js";import"./FormControl-BwQz2xZy.js";import"./isMuiElement-BJ_FYBLm.js";import"./Typography-CpJ7RFbj.js";import"./IconButton-B9IfAD7M.js";import"./ButtonBase-CGiT_geU.js";import"./CircularProgress-XZMrbsaG.js";import"./Tooltip-BrjUPsbL.js";import"./Popper-CLTDFAmC.js";import"./Box-Bd57yNao.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
