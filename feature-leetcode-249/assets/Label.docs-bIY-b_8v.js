import{B as e}from"./iframe-CNMMpan6.js";import{useMDXComponents as o}from"./index-I8NKPg-C.js";import{b as i}from"./index-C5k6YDI4.js";import{L as a}from"./Label.stories-C-ioWCUV.js";import"./preload-helper-DqXJTOSk.js";import"./index-CngmJ5eA.js";import"./index-CCp-2aB7.js";import"./index-CSnIixLs.js";import"./InfoOutlined-CiRBsyvx.js";import"./createSvgIcon-Drqq_-KG.js";import"./memoTheme-7cykwcLT.js";import"./TextField-DuZAtDxT.js";import"./useSlot-DEkvIc43.js";import"./mergeSlotProps-56BhHCMG.js";import"./useForkRef-Cf-PtD7o.js";import"./Select-76UKKO5e.js";import"./Menu-EjZFcrOO.js";import"./useSlotProps-CH7b8XWg.js";import"./Popover-B7HoXXK5.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BNzBLl5j.js";import"./useTheme-GpgQ2U1x.js";import"./Fade-BC_a8ruI.js";import"./useTimeout-rsB0pUEg.js";import"./getReactElementRef-DPVmUq3c.js";import"./mergeSlotProps-CujBXBJu.js";import"./Modal-DTK0hzOP.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CMgg4aBF.js";import"./Paper-BhbmJrWB.js";import"./List-D7nBz8us.js";import"./utils-bjuGoVNF.js";import"./useControlled-Om9lNU-X.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-CMfYKB6W.js";import"./FormHelperText-uf6afb0n.js";import"./FormControl-CFjTnlcw.js";import"./Typography-WUQssbwx.js";import"./IconButton-BjGWWpiq.js";import"./ButtonBase-Czk3BWCd.js";import"./CircularProgress-BDNDzihM.js";import"./Tooltip-Cl7DPtpc.js";import"./Popper-PYmlAcCJ.js";import"./Box-ywnCnOw5.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
