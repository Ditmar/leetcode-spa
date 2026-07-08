import{B as e}from"./iframe-D6tzs7Ji.js";import{useMDXComponents as o}from"./index-BkhNAnrJ.js";import{b as i}from"./index-D0s1MgDJ.js";import{L as a}from"./Label.stories-BcvktBS1.js";import"./preload-helper-DvqeKrQo.js";import"./index-Bb1UhS-b.js";import"./index-DnkuxFmE.js";import"./index-B5LISr-K.js";import"./InfoOutlined-BmOC-zHK.js";import"./createSvgIcon-BPZktwTJ.js";import"./memoTheme-Cfy0aoPN.js";import"./TextField-DWt8Eu7G.js";import"./useSlot-BuG761ov.js";import"./mergeSlotProps-BRy302k5.js";import"./useForkRef-Bitw09kV.js";import"./Select-Cnj-WvLT.js";import"./Menu-BWvPVFqN.js";import"./useSlotProps-CLFGTU9f.js";import"./Popover-Cvfch-Vq.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-rkf46VAv.js";import"./useTheme-zNf40JxC.js";import"./Fade-CxaFjfJj.js";import"./useTimeout-BPkdFvOa.js";import"./getReactElementRef-C90scMlJ.js";import"./mergeSlotProps-9LbFO-_6.js";import"./Modal-266m2ewc.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CjE6ztAK.js";import"./Paper-B6UfsTU4.js";import"./List-3VO8V_w_.js";import"./utils-BYG197S_.js";import"./useControlled-C1oSePzV.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-DheEUaFJ.js";import"./FormHelperText-lUzwY7Nf.js";import"./FormControl-DWNxVi0h.js";import"./isMuiElement-BjwzmMob.js";import"./Typography-CHYvUk77.js";import"./IconButton-CijjhLEb.js";import"./ButtonBase-DOs1IkO1.js";import"./CircularProgress-D2TblLh2.js";import"./Tooltip-BJpWeOG1.js";import"./Popper-Div0XyvO.js";import"./Box-B6Ykg-QD.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
