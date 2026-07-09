import{B as e}from"./iframe-x3Q2xtIP.js";import{useMDXComponents as o}from"./index-DbJD_UIY.js";import{b as i}from"./index-BmCxgOJv.js";import{L as a}from"./Label.stories-D8je9Ggp.js";import"./preload-helper-BOJww6b9.js";import"./index-UbimzWZK.js";import"./index-DRjTvvKq.js";import"./index-Ccq98Wp3.js";import"./InfoOutlined-BDakR7qE.js";import"./createSvgIcon-C-vsatkS.js";import"./memoTheme-DLTkJSdK.js";import"./TextField-B_hyXHFX.js";import"./useSlot-DjTyd8yU.js";import"./mergeSlotProps-BIP3B9XJ.js";import"./useForkRef-RRS7Yt5v.js";import"./Select-BaztFpHv.js";import"./Menu-BSAIXGao.js";import"./useSlotProps-DcU6RdvQ.js";import"./Popover-D6pfxVYB.js";import"./Portal-C6NHUzxk.js";import"./getReactElementRef-GiQ2xpTe.js";import"./ownerWindow-DZNV0FR6.js";import"./Grow-ClYobsRv.js";import"./useTheme-S6oIV8jj.js";import"./utils-BHzN0jcb.js";import"./useTimeout-DmgvS9RU.js";import"./mergeSlotProps-CZAKLLaD.js";import"./debounce-Be36O1Ab.js";import"./Modal-B14g67Lu.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-BLbI-HxM.js";import"./Paper-kgJX3txz.js";import"./List-CDZ5P255.js";import"./utils-BkC3jCeZ.js";import"./useControlled-Bt6hHFxZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-BbIpyBVR.js";import"./FormHelperText-D8JQfZ_k.js";import"./FormControl-BHZaFYuy.js";import"./isMuiElement-b8Fmdlu-.js";import"./Typography-Bvixx_10.js";import"./IconButton-CG1piwTK.js";import"./ButtonBase-DslvqeQn.js";import"./CircularProgress-CHiXIRF4.js";import"./Tooltip-6R08Msdl.js";import"./Popper-YeHN2slo.js";import"./Box-evTigIV3.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
