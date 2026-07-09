import{B as e}from"./iframe-B5e6Bmow.js";import{useMDXComponents as o}from"./index-D9hrjPF8.js";import{b as i}from"./index-DyXbuz38.js";import{L as a}from"./Label.stories-0H-ENqSZ.js";import"./preload-helper-DsaTGXN_.js";import"./index-C6ALJvjz.js";import"./index-BmWXjaoq.js";import"./index-ChPY6Y6i.js";import"./InfoOutlined-BOuncC_T.js";import"./createSvgIcon-CzcE-C85.js";import"./memoTheme-D6m2O2Fl.js";import"./TextField-ByYPOoM1.js";import"./useSlot-C63EYJKL.js";import"./mergeSlotProps-D795MJYy.js";import"./useForkRef-Dsa2j36I.js";import"./Select-Ciqd3ABs.js";import"./Menu-BjgCiLe2.js";import"./useSlotProps-CjnoLz5z.js";import"./Popover-Bl_aBhuB.js";import"./Portal-brubSElv.js";import"./getReactElementRef-DpGnmZGJ.js";import"./ownerWindow-v_dyswha.js";import"./Grow-CgroC6i9.js";import"./useTheme-BWGZXoAt.js";import"./utils-DKhC4HGF.js";import"./useTimeout-DBxOccEQ.js";import"./mergeSlotProps-3ETm94D0.js";import"./debounce-Be36O1Ab.js";import"./Modal-BhsUjdzh.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-D8sLrIqa.js";import"./Paper-Bw4M76p1.js";import"./List-2Ch1HcoS.js";import"./utils-DmeJv7a5.js";import"./useControlled-lMAdLip5.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-BXK8Ht7_.js";import"./FormHelperText-M6UXHCcA.js";import"./FormControl-2kegjfvh.js";import"./isMuiElement-B93n3TYI.js";import"./Typography-BoWj0Qyh.js";import"./IconButton-99cZtlhN.js";import"./ButtonBase-BVeHOmlG.js";import"./CircularProgress-DnZxX4C6.js";import"./Tooltip-BGE-BYI2.js";import"./Popper-p5vzxr0W.js";import"./Box-vulYjU-Q.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
