import{B as e}from"./iframe-DxpdDQCe.js";import{useMDXComponents as o}from"./index-Dd5KqZBc.js";import{b as i}from"./index-B0OK-thA.js";import{L as a}from"./Label.stories-CTDpw7Xk.js";import"./preload-helper-C64AJ8dX.js";import"./index-DOwgGAw9.js";import"./index-c2tcjscC.js";import"./index-Bw4MbN3Y.js";import"./InfoOutlined-Bshgz7tO.js";import"./createSvgIcon-rH8PNmv8.js";import"./memoTheme-BPvq3qwr.js";import"./TextField-DgyCjMjm.js";import"./useSlot-C36_JvTJ.js";import"./mergeSlotProps-DQm1ocuj.js";import"./useForkRef--T-SA6nJ.js";import"./Select-CHs7GGw_.js";import"./Menu-BtfB3AVp.js";import"./useSlotProps-CcBT1stO.js";import"./Popover-DpUa3Lel.js";import"./Portal-CXn19ERW.js";import"./getReactElementRef-Bj6gwplN.js";import"./ownerWindow-CxkkwaMk.js";import"./Grow-CEnKa6CL.js";import"./useTheme-Dt4yOVAJ.js";import"./Fade-cSS8PVW_.js";import"./useTimeout-CTqQ0aaf.js";import"./mergeSlotProps-fM7Ieuj2.js";import"./debounce-Be36O1Ab.js";import"./Modal-TM0xbvMW.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Paper-B7OLPqVp.js";import"./List-heBMxiha.js";import"./utils-Z4Ym54FL.js";import"./useControlled-nK-VBN7D.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-CuaYr2mW.js";import"./FormHelperText-Cw1-fx6r.js";import"./FormControl-BhQwzNHz.js";import"./isMuiElement-QJELnPN0.js";import"./Typography-DsZMvXQy.js";import"./IconButton-BlWdtXUu.js";import"./ButtonBase-BBJGJqn2.js";import"./CircularProgress-C5CZmiSJ.js";import"./Tooltip-Bgf5bNB4.js";import"./Popper-DD6DmTbO.js";import"./Box-DqFNDtas.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
