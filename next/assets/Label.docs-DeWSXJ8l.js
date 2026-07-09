import{B as e}from"./iframe-C5ADcRmE.js";import{useMDXComponents as o}from"./index-CpslwBwR.js";import{b as i}from"./index-CsjcmaNq.js";import{L as a}from"./Label.stories-Cl8I1V2I.js";import"./preload-helper-B1AL8F-k.js";import"./index-B70QIV5F.js";import"./index-CrSpXYSm.js";import"./index-CYdabro6.js";import"./InfoOutlined-aEAiZyCM.js";import"./createSvgIcon-BaFNsBK7.js";import"./memoTheme-DCf9ne4O.js";import"./TextField-CK9eQVyf.js";import"./useSlot-BLCzfQHi.js";import"./mergeSlotProps-DpFoxwcW.js";import"./useForkRef-DzMvcYns.js";import"./Select-Ddbsf-JR.js";import"./Menu-j380np-2.js";import"./useSlotProps-DycNBwVv.js";import"./Popover-CMNIgHav.js";import"./Portal-Djm8APcl.js";import"./getReactElementRef-CwycCvVx.js";import"./ownerWindow-DlgqE8vB.js";import"./Grow-BCdQBcZd.js";import"./useTheme-DCkkWzFX.js";import"./utils-CwFvDe97.js";import"./useTimeout-zAwjN_Yw.js";import"./mergeSlotProps-D8StOXCW.js";import"./debounce-Be36O1Ab.js";import"./Modal-9vkLNO9V.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-BYLpDrD6.js";import"./Paper-YAh7usVz.js";import"./List-Bf_NUhlM.js";import"./utils-CmsyO2Fn.js";import"./useControlled-DYVWVYCL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-2yk_qVxj.js";import"./FormHelperText-DUyt5SBS.js";import"./FormControl-CMTmnBl0.js";import"./isMuiElement-hmRLFQMU.js";import"./Typography-Cet348xw.js";import"./IconButton-DXY-A8Ts.js";import"./ButtonBase-CYsLNU6B.js";import"./CircularProgress-cxnLAbMi.js";import"./Tooltip-DIL3ZRDa.js";import"./Popper-DfM98YIU.js";import"./Box-BNDL-s8h.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
