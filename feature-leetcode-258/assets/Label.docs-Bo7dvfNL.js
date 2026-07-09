import{B as e}from"./iframe-BKbFvs6c.js";import{useMDXComponents as o}from"./index-CiRZ8U_e.js";import{b as i}from"./index-Dn7OBGjp.js";import{L as a}from"./Label.stories-cJH62oD1.js";import"./preload-helper-DtVaB8p0.js";import"./index-BLGXzD0d.js";import"./index-C08HePC6.js";import"./index-D113qryn.js";import"./InfoOutlined-DxIN_AxQ.js";import"./createSvgIcon-DsNM3wh5.js";import"./memoTheme-tNeNTQuv.js";import"./TextField-BSvnx-Q8.js";import"./useSlot-Cmed5j26.js";import"./mergeSlotProps-DQ_8KVGy.js";import"./useForkRef-Cl8TiCf5.js";import"./Select-BoO-xqQe.js";import"./Menu-C2PXaVTR.js";import"./useSlotProps-DzWdAbXE.js";import"./Popover-BHIo_Lu7.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-pmm9Y7Uz.js";import"./useTheme-asZs4EQK.js";import"./Fade-BwrUl96r.js";import"./useTimeout-gK171Pqr.js";import"./getReactElementRef-iq2-vjaq.js";import"./mergeSlotProps-DjNkIzW8.js";import"./Modal-zG4E6iYE.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CSaslbZ7.js";import"./Paper-D3tV9m74.js";import"./List-CtzCAj0v.js";import"./utils-Deeayygk.js";import"./useControlled-Be7sQEaM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-CVQQQldK.js";import"./FormHelperText-DAYteqm5.js";import"./FormControl-DrM2gGFN.js";import"./isMuiElement-DXX84BUm.js";import"./Typography-C3mZWFRB.js";import"./IconButton-BoWrEQHj.js";import"./ButtonBase-BU5Z8yXi.js";import"./CircularProgress-ClJU0zpN.js";import"./Tooltip-D0H1pVzu.js";import"./Popper-B0472BUL.js";import"./Box-DNHOHoY-.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
