import{B as e}from"./iframe-C9DGdkmJ.js";import{useMDXComponents as o}from"./index-Cli_ZwK8.js";import{b as i}from"./index-Bu6v7qNu.js";import{L as a}from"./Label.stories-D8xhMoeO.js";import"./preload-helper-DyUpdmRI.js";import"./index-B2G1er-t.js";import"./index-6hU05Eyf.js";import"./index-CPkxEYaZ.js";import"./InfoOutlined-BoLzcWYk.js";import"./createSvgIcon-BWDz87oz.js";import"./memoTheme-BapBv5U1.js";import"./InputLabel-JC21doKK.js";import"./utils-B4rgn8VQ.js";import"./FormLabel-Cg2YhwuX.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Typography-B21giSbM.js";import"./IconButton-pxxI5Tp0.js";import"./ButtonBase-Div7wn49.js";import"./useTimeout-RYBQSn6j.js";import"./useForkRef-B1xcf9eS.js";import"./CircularProgress-B_SThJow.js";import"./Tooltip-BGDipkfN.js";import"./useTheme-CWFfUDeF.js";import"./useSlot-EqFBbpAY.js";import"./mergeSlotProps-BYeCZzma.js";import"./useControlled-Bi-DzPaC.js";import"./getReactElementRef-Bkqb9lC3.js";import"./Grow-BFnGCW3z.js";import"./utils-Peqd7aij.js";import"./Popper-CADa-I1Z.js";import"./Portal-D7L2iYju.js";import"./useSlotProps-Bvg1l6nW.js";import"./Box-Bj5ZpvW0.js";import"./TextField-DVDADO_G.js";import"./Select-BibG6t3M.js";import"./Menu-Dc4uIfdz.js";import"./Popover-Dt9PmPmN.js";import"./ownerWindow-BuLhj1Tg.js";import"./mergeSlotProps-Cx4eE931.js";import"./debounce-Be36O1Ab.js";import"./Modal-BkDqpIdL.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-DUFlGyrS.js";import"./Paper-BKKbKbwm.js";import"./List-CcZ5mQNc.js";import"./FormHelperText-Cl_gmyjk.js";import"./FormControl-DGxvugAc.js";import"./isMuiElement-CEggFNv8.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
`})})]})}function te(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{te as default};
