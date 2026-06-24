import{B as e}from"./iframe-FCDi2Aqk.js";import{useMDXComponents as o}from"./index-BAcoxzaC.js";import{b as i}from"./index-B-1EZe8K.js";import{L as a}from"./Label.stories-CcH_vMIJ.js";import"./preload-helper-B1AL8F-k.js";import"./index-BuDuIuno.js";import"./index-BQDtdoDo.js";import"./index-CSa4jah5.js";import"./InfoOutlined-D6RPfp_G.js";import"./createSvgIcon-Do9ZOWMu.js";import"./memoTheme-C1AjvIFo.js";import"./TextField-CFZgI3Ps.js";import"./useSlot-BKPg8bKH.js";import"./mergeSlotProps-HVDsfeuo.js";import"./useForkRef-DOGXk2fQ.js";import"./Select-C3J_rbDS.js";import"./Menu-DkDGV7eu.js";import"./useSlotProps-GgyROt26.js";import"./Popover-BBcSxa27.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BvT_M476.js";import"./useTheme-DLQFKH87.js";import"./Fade-CiBfAabG.js";import"./useTimeout-Dd4cEEXg.js";import"./getReactElementRef-ByyBIpSq.js";import"./mergeSlotProps-GkqNZhfG.js";import"./Modal-BSl5GkwS.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DNNytdO5.js";import"./Paper-DT-9RH9U.js";import"./List-Cg60204N.js";import"./utils-DB6Ysq3n.js";import"./useControlled-DFXMFx3I.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-DAS3Hyzv.js";import"./FormHelperText-DTO1Wq6x.js";import"./FormControl-Brnzku_r.js";import"./Typography-DAc6pwKH.js";import"./IconButton-Bu5ZW9e9.js";import"./ButtonBase-BqbM7key.js";import"./CircularProgress-N0-rD2Sj.js";import"./Tooltip-B6xzh8qC.js";import"./Popper-Nkc6N6h4.js";import"./Box-uhCC79Yp.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
