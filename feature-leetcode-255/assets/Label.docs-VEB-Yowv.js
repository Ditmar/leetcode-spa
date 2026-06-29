import{B as e}from"./iframe-C_kAkfRu.js";import{useMDXComponents as o}from"./index-jA0Ybejl.js";import{b as i}from"./index-DHoo40QL.js";import{L as a}from"./Label.stories-E4rKc4v1.js";import"./preload-helper-xjnZv7Jy.js";import"./index-zJicZ9wb.js";import"./index-ifzyUEbL.js";import"./index-kc9KeofI.js";import"./InfoOutlined-CJQgdcYr.js";import"./createSvgIcon-C7fVM8CS.js";import"./memoTheme-BNLy7gKb.js";import"./TextField-B3qAfEy0.js";import"./useSlot-BBs4Y9Oy.js";import"./mergeSlotProps-DnQVzt8c.js";import"./useForkRef-C2FMLNhK.js";import"./Select-CHmwCiOJ.js";import"./Menu-C6TCzglF.js";import"./useSlotProps-BFE72a0i.js";import"./Popover-u8JLkb_5.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-Bxr6Msr0.js";import"./useTheme-Dn8oDk4L.js";import"./Fade-DwNGtxmb.js";import"./useTimeout-CDSAFJa6.js";import"./getReactElementRef-C5g8om7n.js";import"./mergeSlotProps-BoZPvXwv.js";import"./Modal-CLn9DwEV.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CWszKyHZ.js";import"./Paper-BDLYa-p3.js";import"./List-Q2vMz83Z.js";import"./utils-C7nAshf8.js";import"./useControlled-DMG7OMnZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-DsAmS3ZT.js";import"./FormHelperText-BGNiVHe2.js";import"./FormControl-B-M4VtUh.js";import"./isMuiElement-MZ563FME.js";import"./Typography-W7IBLDSW.js";import"./IconButton-nynsmpdg.js";import"./ButtonBase-BkwFrFXT.js";import"./CircularProgress-B0Y4bu1l.js";import"./Tooltip-CIMxUqQE.js";import"./Popper-Bj7jyTi5.js";import"./Box-DqTwMVBG.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
