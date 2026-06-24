import{B as e}from"./iframe-DHtBWT0-.js";import{useMDXComponents as o}from"./index-DCYgjNvv.js";import{b as i}from"./index-CGzGJRqr.js";import{L as a}from"./Label.stories-CKu5UtIl.js";import"./preload-helper-NTY61udR.js";import"./index-CtqfEq2c.js";import"./index-Cqr7aad2.js";import"./index-CfN3fFXg.js";import"./InfoOutlined-CGcdcFT8.js";import"./createSvgIcon-Q5scLrd3.js";import"./memoTheme-CJac86lv.js";import"./TextField-CQtipEQU.js";import"./useSlot-DoPKTEe2.js";import"./mergeSlotProps-GMFkJQzX.js";import"./useForkRef-6PSYpqNI.js";import"./Select-CP591G70.js";import"./Menu-B418f3ph.js";import"./useSlotProps-BZOJwaSX.js";import"./Popover-CPjKwSfo.js";import"./Portal-DBIYuhHK.js";import"./getReactElementRef-BIc21iyu.js";import"./ownerWindow-BXqh6CE1.js";import"./Grow-D8hADjOu.js";import"./useTheme-CRvnKBC4.js";import"./Fade-BJdSr99o.js";import"./useTimeout-Cv4euhdb.js";import"./mergeSlotProps-Btp-VPLo.js";import"./debounce-Be36O1Ab.js";import"./Modal-KvLRALSQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Paper-z7uqGu9s.js";import"./List-CafPJfg0.js";import"./utils-5e_m7Om7.js";import"./useControlled-D-z7I_mL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-C-iUB2um.js";import"./FormHelperText-BwPOBwFo.js";import"./FormControl-79eeBe9s.js";import"./Typography-BWjhg6T8.js";import"./IconButton-7wizH_UL.js";import"./ButtonBase-DIx2HD84.js";import"./CircularProgress-QwlTZhv2.js";import"./Tooltip-Dv8GEO-h.js";import"./Popper-BwOlFDRh.js";import"./Box-BCQgJozS.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
`})})]})}function Z(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{Z as default};
