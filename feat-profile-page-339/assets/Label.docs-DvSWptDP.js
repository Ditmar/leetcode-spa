import{B as e}from"./iframe-C0KYtj3N.js";import{useMDXComponents as o}from"./index-kNewr1C0.js";import{b as i}from"./index-JSPe1MgZ.js";import{L as a}from"./Label.stories-BBQ9KVLP.js";import"./preload-helper-C5NKOYid.js";import"./index-xYxEgWLR.js";import"./index-D8aOS9uA.js";import"./index-ChlOpEpE.js";import"./InfoOutlined-DsJ3BjWg.js";import"./createSvgIcon-9oqprJ4o.js";import"./memoTheme-BzeKMO8a.js";import"./TextField-BVQ-e5H3.js";import"./useSlot-Dz3ujFr1.js";import"./mergeSlotProps-CA_rC9Z5.js";import"./useForkRef-CWU00as9.js";import"./Select-BMkCLTrJ.js";import"./Menu-BKMxL-g3.js";import"./useSlotProps-BE4V-nLr.js";import"./Popover-BaJn4QvD.js";import"./Portal-ClwsmD89.js";import"./getReactElementRef-CO45r11h.js";import"./ownerWindow-BE02GrTn.js";import"./Grow-w47sHZaO.js";import"./useTheme-DzTlVKzE.js";import"./utils-D9ZjFC46.js";import"./useTimeout-DazeGRbz.js";import"./mergeSlotProps-BEjCV2rN.js";import"./debounce-Be36O1Ab.js";import"./Modal-Bx_qXGHP.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-CSYh2Fqf.js";import"./Paper-CoTtCvFP.js";import"./List-Bs_jFeTR.js";import"./utils-ChDNxeIb.js";import"./useControlled-BpcpUR4T.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-CejNUhUx.js";import"./FormHelperText-CqMbjEp-.js";import"./FormControl-BpPxsKl-.js";import"./isMuiElement-C3WUzm_1.js";import"./Typography-BLeQbcXB.js";import"./IconButton-CZizpsZK.js";import"./ButtonBase-CeD50S_J.js";import"./CircularProgress-CK9TrBBQ.js";import"./Tooltip-e5ATNI1y.js";import"./Popper-Bb0Why4W.js";import"./Box-Dy20oNs4.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
