import{B as e}from"./iframe-BEjK0IOY.js";import{useMDXComponents as o}from"./index-Rg82e5nh.js";import{b as i}from"./index-VEDBZ5QU.js";import{L as a}from"./Label.stories-CfVURJiU.js";import"./preload-helper-Jbh6XRVR.js";import"./index-RsVKptkG.js";import"./index-NR-_Jtq-.js";import"./index-CMtIp1jR.js";import"./InfoOutlined-arRA14OZ.js";import"./createSvgIcon-CiY9Z8PM.js";import"./memoTheme-PwOf0wXw.js";import"./TextField-DBAUogx1.js";import"./useSlot-D_28gAG9.js";import"./mergeSlotProps-mtGrpeZt.js";import"./useForkRef-BUiEjHOd.js";import"./Select-BgXjIkeR.js";import"./Menu-DsI37uAJ.js";import"./useSlotProps-BuoNPQOt.js";import"./Popover-4x-oKSz2.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-CY36WJQQ.js";import"./useTheme-C3vqaIVe.js";import"./Fade-CDR4lK1F.js";import"./useTimeout-BdJgukNV.js";import"./getReactElementRef-Dh2JGq9K.js";import"./mergeSlotProps-BvJbilyx.js";import"./Modal-ptUBJlBg.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-MNoBQ_K4.js";import"./Paper-DvXHUboC.js";import"./List-4LW9I8kQ.js";import"./utils-DPC8gUyw.js";import"./useControlled-CLmuJXTu.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-SWfWDMqA.js";import"./FormHelperText-DMMrUss3.js";import"./FormControl-CHk2L_SV.js";import"./Typography-CKcYKrkq.js";import"./IconButton-3qAB93ZH.js";import"./ButtonBase-CvOuoS7Q.js";import"./CircularProgress-DK8KDLPm.js";import"./Tooltip-BUvZrv5D.js";import"./Popper-piJ7AMft.js";import"./Box-DUceWS-I.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
