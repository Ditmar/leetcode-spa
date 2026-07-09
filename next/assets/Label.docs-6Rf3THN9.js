import{B as e}from"./iframe-DURhpaaH.js";import{useMDXComponents as o}from"./index-B9OVmcHI.js";import{b as i}from"./index-J77bmqfV.js";import{L as a}from"./Label.stories-C0vuI-_g.js";import"./preload-helper-B1AL8F-k.js";import"./index-DTloP9aM.js";import"./index-m_jTXz-3.js";import"./index-DyMeeYiU.js";import"./InfoOutlined-brFarlGM.js";import"./createSvgIcon-6btUYMW6.js";import"./memoTheme-CTvKxu0q.js";import"./TextField-B14L7bGL.js";import"./useSlot-DD5ePS0v.js";import"./mergeSlotProps-BFnWi6St.js";import"./useForkRef-DV61ZvAE.js";import"./Select-BsbkcIWR.js";import"./Menu-CqYryfsV.js";import"./useSlotProps-giDTNgti.js";import"./Popover-BVhnnWQD.js";import"./Portal-DDfHRHOl.js";import"./getReactElementRef-Ko6tI_vJ.js";import"./ownerWindow-BivQmS5B.js";import"./Grow-BF0lJpoT.js";import"./useTheme-CmyhLa_a.js";import"./utils-CRsKg0wS.js";import"./useTimeout-B5A8PLBk.js";import"./mergeSlotProps-DvGjsTDJ.js";import"./debounce-Be36O1Ab.js";import"./Modal-C8SZSBsN.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-BBjdBzwO.js";import"./Paper-ozPHqd81.js";import"./List-C_FAEe7N.js";import"./utils-B2zeKC0z.js";import"./useControlled-DNh806y4.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-ChTBv3Cy.js";import"./FormHelperText-_QEqy2U4.js";import"./FormControl-D0fAj4no.js";import"./isMuiElement-DDQK9Aeh.js";import"./Typography-uYR_mKDi.js";import"./IconButton-BqfWJEX1.js";import"./ButtonBase-stOD5ikd.js";import"./CircularProgress-D_COGUap.js";import"./Tooltip-BIuP3Ro7.js";import"./Popper-zI5QKfey.js";import"./Box-CXMKHXCU.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
