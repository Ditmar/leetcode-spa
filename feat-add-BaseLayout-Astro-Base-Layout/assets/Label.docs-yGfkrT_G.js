import{B as e}from"./iframe-vQ0umSZh.js";import{useMDXComponents as o}from"./index-D2uN14WY.js";import{b as i}from"./index-Dn12XGad.js";import{L as a}from"./Label.stories-CBRb59IF.js";import"./preload-helper-B5STKH-6.js";import"./index-DZN-JQCD.js";import"./index-xPiBjljq.js";import"./index-BBc_U91o.js";import"./InfoOutlined-yPyFucrK.js";import"./createSvgIcon-ChFqqkwl.js";import"./memoTheme-Cmv_Kj7a.js";import"./TextField-C_ibQ5g1.js";import"./useSlot-Dn5W10Rd.js";import"./mergeSlotProps-DtyzmKlu.js";import"./useForkRef-BnJNh8IZ.js";import"./Select-Cjd2z3CR.js";import"./Menu-CHwB9YWc.js";import"./useSlotProps-BuvYFk3V.js";import"./Popover-D7frAJi6.js";import"./Portal-BGUVdmm0.js";import"./getReactElementRef-yoVNFtbn.js";import"./ownerWindow-C5R61fms.js";import"./Grow-C1RzjNb-.js";import"./useTheme-DX8XvOdc.js";import"./utils-7Q21ENqf.js";import"./useTimeout-D9GB-QOK.js";import"./mergeSlotProps-DQmfSJo_.js";import"./debounce-Be36O1Ab.js";import"./Modal-1Q1JLWfK.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-CuqoCtD3.js";import"./Paper-Bc01jEP3.js";import"./List-LuH2nL1n.js";import"./utils-CwmauRnD.js";import"./useControlled-M2Tzd185.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-s3dlsPDq.js";import"./FormHelperText-DEsIKues.js";import"./FormControl-xuVR8KpG.js";import"./isMuiElement-DORneUsX.js";import"./Typography-oLPmfo7E.js";import"./IconButton-Bw0cR3m-.js";import"./ButtonBase-C-q-fr0a.js";import"./CircularProgress-D2ietLwC.js";import"./Tooltip-h-6Z-7Va.js";import"./Popper-Dw8H4F0G.js";import"./Box-D-99u6I-.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
