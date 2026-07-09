import{B as e}from"./iframe-Y5g3EvZ5.js";import{useMDXComponents as o}from"./index-DeIzcfBo.js";import{b as i}from"./index-CYr-rL9_.js";import{L as a}from"./Label.stories-BPdTQywz.js";import"./preload-helper-DqXJTOSk.js";import"./index-jPs_ulAD.js";import"./index-CrNl_uLC.js";import"./index-Dt_hsijh.js";import"./InfoOutlined-DlplST4O.js";import"./createSvgIcon-C05H8EWP.js";import"./memoTheme-k6LRmvwn.js";import"./TextField-DQKOwMll.js";import"./useSlot-CBSnjBHh.js";import"./mergeSlotProps-DzneoNcg.js";import"./useForkRef-LcWWVGUk.js";import"./Select-DtYIpzBO.js";import"./Menu-C10ZbMWG.js";import"./useSlotProps-4RTuHNJI.js";import"./Popover-Je6PgYne.js";import"./Portal-Clqbd3cL.js";import"./getReactElementRef-Dc5RIU8g.js";import"./ownerWindow-CfPfFoTg.js";import"./Grow-CQ7ANorW.js";import"./useTheme-DJe7SmiW.js";import"./utils-4MQWD7s8.js";import"./useTimeout-BeEI68Yx.js";import"./mergeSlotProps-Ba3SaZ0K.js";import"./debounce-Be36O1Ab.js";import"./Modal-DHNiDLux.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-C3fpJBmn.js";import"./Paper-DgbT6gOQ.js";import"./List-B6d05vfl.js";import"./utils-qv__-5sX.js";import"./useControlled-BiBC0TeZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-C5nvhCDj.js";import"./FormHelperText-BE_DSrGu.js";import"./FormControl-DGai9F4E.js";import"./isMuiElement-CV3ESoxv.js";import"./Typography-rFXTozWH.js";import"./IconButton-s4Y6kwbP.js";import"./ButtonBase-5ZZ0Xoju.js";import"./CircularProgress-rjeleMjh.js";import"./Tooltip-19GzRrm3.js";import"./Popper-CCsdSUgb.js";import"./Box-DP2S8fvK.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
