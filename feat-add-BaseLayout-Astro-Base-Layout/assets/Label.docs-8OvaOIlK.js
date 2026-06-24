import{B as e}from"./iframe-DrmYn44i.js";import{useMDXComponents as o}from"./index-Bz22nJRW.js";import{b as i}from"./index-1Le0OQP2.js";import{L as a}from"./Label.stories-5e2rDdED.js";import"./preload-helper-B5STKH-6.js";import"./index-bwgIJAn3.js";import"./index-CvuG8POa.js";import"./index-8kz8FZyL.js";import"./InfoOutlined-BVouW7XH.js";import"./createSvgIcon-hhK4ali-.js";import"./memoTheme-DA016cWb.js";import"./TextField-CUR6eeV-.js";import"./useSlot-B7wWLDgS.js";import"./mergeSlotProps-6E6lyHq7.js";import"./useForkRef-UMpMHwa1.js";import"./Select-CM5a-XQG.js";import"./Menu-M3ZSeaRe.js";import"./useSlotProps-CfUHdDVg.js";import"./Popover-Do-a-4Ts.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-DNvPEm7q.js";import"./useTheme-DzhlwSqc.js";import"./Fade-BlwTqb8O.js";import"./useTimeout-CKK12oSs.js";import"./getReactElementRef-DhQJpAJC.js";import"./mergeSlotProps-CCHc2Y56.js";import"./Modal-D-5OreJu.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Dev11_pN.js";import"./Paper-CnOvxoTa.js";import"./List-CDq8e1Km.js";import"./utils-a3ew1dNI.js";import"./useControlled-Ctey3EOp.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-DQIKAcD-.js";import"./FormHelperText-Da7tMGIU.js";import"./FormControl-J5MMiubU.js";import"./Typography-Dv3VvC3T.js";import"./IconButton-Cpbw8Qrk.js";import"./ButtonBase-aqhqIlC2.js";import"./CircularProgress-VexvH6m9.js";import"./Tooltip-BIHHUPtl.js";import"./Popper-KX-W-P_K.js";import"./Box-BJUvCKGk.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
