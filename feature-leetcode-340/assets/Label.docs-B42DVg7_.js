import{B as e}from"./iframe-Bxf6yV75.js";import{useMDXComponents as o}from"./index-Jlk8BMsk.js";import{b as i}from"./index-D9jqFjDW.js";import{L as a}from"./Label.stories-B1nKzZWR.js";import"./preload-helper-BAofFq-6.js";import"./index-Bjf_xud5.js";import"./index-D16v8ifs.js";import"./index-BXv6brXX.js";import"./InfoOutlined-2fGcFb4r.js";import"./createSvgIcon-BpeuzpWD.js";import"./memoTheme-CSNj3H5d.js";import"./TextField-Csi031xt.js";import"./useSlot-CBpdev74.js";import"./mergeSlotProps-CmDzSTMS.js";import"./useForkRef-BdgCcVIr.js";import"./Select-CBFGzv6H.js";import"./Menu-CLTBpqof.js";import"./useSlotProps-Bbo9GFRR.js";import"./Popover-DzfK3C6_.js";import"./Portal-GZeX9_ho.js";import"./getReactElementRef-Cx_yIjzZ.js";import"./ownerWindow-BoIJQydS.js";import"./Grow-Ds4WXpYs.js";import"./useTheme-pQEyuI6s.js";import"./Fade-CdL82xv_.js";import"./useTimeout-BTrJAbX6.js";import"./mergeSlotProps-Tr9y229K.js";import"./debounce-Be36O1Ab.js";import"./Modal-W5PaYvaV.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Paper-BQJVTJnd.js";import"./List-DErwtNy4.js";import"./utils-D1LxP6U_.js";import"./useControlled-Dqzq2jgo.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-DvCct4UV.js";import"./FormHelperText-CjEYfR-5.js";import"./FormControl-D_IscF-U.js";import"./isMuiElement-CZSiU8M3.js";import"./Typography-Bn2TsQ1m.js";import"./IconButton-Du6MsXEM.js";import"./ButtonBase-CLpZ-B6H.js";import"./CircularProgress-CpmRgd9O.js";import"./Tooltip-uZ1LvgHP.js";import"./Popper-BHWZ7hjH.js";import"./Box-CUoGy2jJ.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
