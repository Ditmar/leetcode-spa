import{B as e}from"./iframe-Cznw-rh6.js";import{useMDXComponents as o}from"./index-CRWCA3F5.js";import{b as i}from"./index-BJhg8Aca.js";import{L as a}from"./Label.stories-BnicPw3d.js";import"./preload-helper-DzU63Kca.js";import"./index-C2QcgXBG.js";import"./index-d7sJRLuN.js";import"./index-D24H3XNl.js";import"./InfoOutlined-BzcfZ3dN.js";import"./createSvgIcon-Dt2tHtAf.js";import"./memoTheme-QXv8oAJX.js";import"./TextField-fnJA1wNl.js";import"./useSlot-Cl6rY5W9.js";import"./mergeSlotProps-7SYuqLeN.js";import"./useForkRef-BFevZ1Vd.js";import"./Select-CtSJleaj.js";import"./Menu-BpAuVEm0.js";import"./useSlotProps-CdlJLl7T.js";import"./Popover-s1ushwKr.js";import"./Portal-DVXgEZ6D.js";import"./getReactElementRef-D-c3NBM0.js";import"./ownerWindow-CgIRcmwc.js";import"./Grow-DinnkajA.js";import"./useTheme-DQC-tMVO.js";import"./Fade-CRNgRl3w.js";import"./useTimeout-08WP5TyZ.js";import"./mergeSlotProps-DoUgHQGi.js";import"./debounce-Be36O1Ab.js";import"./Modal-CVsmR-iA.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Paper-Cv7k5goP.js";import"./List-m48Eclcc.js";import"./utils-Dmo5MkX9.js";import"./useControlled-BCg54Ydm.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-DXqar7qk.js";import"./FormHelperText-v1t7DkWs.js";import"./FormControl-DzCJbZxr.js";import"./isMuiElement-Bm5IvUsU.js";import"./Typography-q63PeSEb.js";import"./IconButton-CCuVfgij.js";import"./ButtonBase-BBOvj6yW.js";import"./CircularProgress-BbnR41Dr.js";import"./Tooltip-B8aWwB1u.js";import"./Popper-CK3s4yzv.js";import"./Box-C31ZwCbw.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
