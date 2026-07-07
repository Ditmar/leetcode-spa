import{B as e}from"./iframe-CPo_5Nf0.js";import{useMDXComponents as o}from"./index-BXOs_VHo.js";import{b as i}from"./index-Cb59kxoc.js";import{L as a}from"./Label.stories-DzGulKci.js";import"./preload-helper-Ds9E1W97.js";import"./index-WvTU1CnU.js";import"./index-SfS0sX3R.js";import"./index-CQ1SEiYN.js";import"./InfoOutlined-CX6Fm4kq.js";import"./createSvgIcon-B5FkGxdj.js";import"./memoTheme-DQUHAh-6.js";import"./TextField-BE-HQizg.js";import"./useSlot-5DX7vjcc.js";import"./mergeSlotProps-B291SrpC.js";import"./useForkRef-ZlqcgnnS.js";import"./Select-nxUPUa7s.js";import"./Menu-zk8OOjPP.js";import"./useSlotProps-C-ovkNJV.js";import"./Popover-BY3JZZts.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-Bc_I7pN-.js";import"./useTheme-BfvSQ5v5.js";import"./Fade-SE8qgXD6.js";import"./useTimeout-Atz3pE8E.js";import"./getReactElementRef-B978_7k7.js";import"./mergeSlotProps-C-LXmuLy.js";import"./Modal-Dhuvl-Mz.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CERqZ158.js";import"./Paper-JTvVLCRt.js";import"./List-DIpWoJn2.js";import"./utils-BB88ilWs.js";import"./useControlled-CFp1hOlA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-C2rCrUAQ.js";import"./FormHelperText-CpYJvMCZ.js";import"./FormControl-CcxdkF9t.js";import"./isMuiElement-DBOgjLqY.js";import"./Typography-BLyu9m01.js";import"./IconButton-CekpzaMA.js";import"./ButtonBase-BJ33qBVW.js";import"./CircularProgress-DAzFq28V.js";import"./Tooltip-CsBIcoX0.js";import"./Popper-CI39lgXM.js";import"./Box-dFVZQzgi.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
