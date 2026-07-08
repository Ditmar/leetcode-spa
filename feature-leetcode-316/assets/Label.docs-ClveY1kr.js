import{B as e}from"./iframe-wNO7_Pht.js";import{useMDXComponents as o}from"./index-OB4zmq_U.js";import{b as i}from"./index-BF9Cx4V8.js";import{L as a}from"./Label.stories-ZxCqbYHx.js";import"./preload-helper-C3L6Q04T.js";import"./index-DVUeElGA.js";import"./index-BqY9Uf76.js";import"./index-C6YjVnSj.js";import"./InfoOutlined-F1lCAkBS.js";import"./createSvgIcon-D4Rvdh5h.js";import"./memoTheme-D5qvI7S0.js";import"./TextField-Di4zuq41.js";import"./useSlot-CLT15oct.js";import"./mergeSlotProps-BwAThvWT.js";import"./useForkRef-Up77BCpa.js";import"./Select-DLX8j0hy.js";import"./Menu-d8HFa2-c.js";import"./useSlotProps-f_8GsHxW.js";import"./Popover-DGPtN9z_.js";import"./Portal-B1HUrO9D.js";import"./getReactElementRef-CGxRBM8m.js";import"./ownerWindow-TEtajX0v.js";import"./Grow-BnGChhgL.js";import"./useTheme-DGgQdOqT.js";import"./Fade-B3DgQTiE.js";import"./useTimeout-CX9vaE5o.js";import"./mergeSlotProps-DGUNOKRm.js";import"./debounce-Be36O1Ab.js";import"./Modal-enIEU26Z.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Paper-DiPIuCvE.js";import"./List-DTYyBd5w.js";import"./utils-GpADrlr0.js";import"./useControlled-C7oLKuy_.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-IH66zAnq.js";import"./FormHelperText-CWimdoC8.js";import"./FormControl-Ij_F38NW.js";import"./isMuiElement-BNA6AYWH.js";import"./Typography-PX_9kYBk.js";import"./IconButton-C052c_c7.js";import"./ButtonBase-DVCH_efu.js";import"./CircularProgress-BmKPJ3Ol.js";import"./Tooltip-f8LGxMqF.js";import"./Popper-Dbw5m19W.js";import"./Box-DXVTVjvG.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
