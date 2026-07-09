import{B as e}from"./iframe-Ce9hZxZ5.js";import{useMDXComponents as o}from"./index-Ca00BUZ_.js";import{b as i}from"./index-B-juY7mk.js";import{L as a}from"./Label.stories-Cr7nR0Vj.js";import"./preload-helper-C3L6Q04T.js";import"./index-DjxCmzXq.js";import"./index-Cn0fawlR.js";import"./index-DJEveicL.js";import"./InfoOutlined-DiPoBc45.js";import"./createSvgIcon-BqlQS3-6.js";import"./memoTheme-m36NS83i.js";import"./TextField-CJB-p7Xj.js";import"./useSlot-CBxtZQnW.js";import"./mergeSlotProps-IqKknA6H.js";import"./useForkRef-OyH5NZbM.js";import"./Select-Ce8Vw3NX.js";import"./Menu-Dao1GuJq.js";import"./useSlotProps-CQ34rjMQ.js";import"./Popover-CeDtGEOV.js";import"./Portal-ahVI1mbD.js";import"./getReactElementRef-BpR-Dddx.js";import"./ownerWindow-DiZDR_aR.js";import"./Grow-DEV9T-ET.js";import"./useTheme-DzuIiXtc.js";import"./utils-Bz2-kkP7.js";import"./useTimeout-DHAAI5ul.js";import"./mergeSlotProps-DgGEjHpf.js";import"./debounce-Be36O1Ab.js";import"./Modal-CWn8KOlw.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-BzFn3RLO.js";import"./Paper-BdqdtCrm.js";import"./List-CeoywoCg.js";import"./utils-C2SWJrki.js";import"./useControlled-Dq3OBevC.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-Bsp5hvoe.js";import"./FormHelperText-Bb9IwzKA.js";import"./FormControl-CUfZycsE.js";import"./isMuiElement-DlE3FfOK.js";import"./Typography-DihLaxM4.js";import"./IconButton-cYoPxea4.js";import"./ButtonBase-CbxLzMou.js";import"./CircularProgress-AqTMDoWa.js";import"./Tooltip-o-PoYmTt.js";import"./Popper-BOgt3Agw.js";import"./Box-DFY3RT_g.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
