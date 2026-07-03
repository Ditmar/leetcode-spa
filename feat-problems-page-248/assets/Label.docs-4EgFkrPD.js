import{B as e}from"./iframe-ByM1xzBM.js";import{useMDXComponents as o}from"./index-C7s025Lq.js";import{b as i}from"./index-FKcuJCfr.js";import{L as a}from"./Label.stories-Dt8QDX62.js";import"./preload-helper-DsaTGXN_.js";import"./index-DFGw3zIK.js";import"./index-TPeb6Pn-.js";import"./index-1rvuZ2V5.js";import"./InfoOutlined-DQAEnzHQ.js";import"./createSvgIcon-rhtlsI2S.js";import"./memoTheme-BCYBmpnL.js";import"./TextField-BvS-YdM_.js";import"./useSlot-qUV_KDV0.js";import"./mergeSlotProps-Dqf78tiE.js";import"./useForkRef-BvUQIRR4.js";import"./Select-DuvTzZj1.js";import"./Menu-cFr-pKj_.js";import"./useSlotProps-Dh7suvwZ.js";import"./Popover-BMslGYHc.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-C21JN_C0.js";import"./useTheme-CDyfJ11J.js";import"./Fade-rhPYmJgZ.js";import"./useTimeout-PUPHkdLD.js";import"./getReactElementRef-CJnwJdFD.js";import"./mergeSlotProps-BpS9wxcF.js";import"./Modal-Du4A0Q-b.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-ez6DW7mm.js";import"./Paper-rq-4NTOc.js";import"./List-RFcl_yh5.js";import"./utils-CXXXPtWJ.js";import"./useControlled-wtF6T8kZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-B_ldjQ62.js";import"./FormHelperText-DSBOSgCz.js";import"./FormControl-D0RW-GAL.js";import"./isMuiElement-DjYDpL8p.js";import"./Typography-CqKh_p0z.js";import"./IconButton-CtvVpw_8.js";import"./ButtonBase-DZPwjHBU.js";import"./CircularProgress-kAcvY0Jf.js";import"./Tooltip-BFNsVPkl.js";import"./Popper-CneOucPO.js";import"./Box-C6MIg1LH.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
