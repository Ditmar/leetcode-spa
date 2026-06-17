import{B as e}from"./iframe-D4NL2jQP.js";import{useMDXComponents as o}from"./index-CLdL2wrI.js";import{b as i}from"./index-DdgtciSE.js";import{L as a}from"./Label.stories-Cmrcp1Ja.js";import"./preload-helper-BmzZtkUX.js";import"./index-DnHVYMf7.js";import"./index-BG3ueQml.js";import"./index-CZQ66tj4.js";import"./InfoOutlined-DfFBKB2T.js";import"./createSvgIcon-BSO3t1BD.js";import"./memoTheme-D8RofDGO.js";import"./TextField-UhJB4vLy.js";import"./useSlot-BGRueegY.js";import"./mergeSlotProps-DKpu20MF.js";import"./useForkRef-wumd-VD6.js";import"./Select-rPvXqj-f.js";import"./Menu-CJKyVZ_S.js";import"./useSlotProps-Ch7O_qgl.js";import"./Popover-Ct_Uwbug.js";import"./Portal-DD9x7tgL.js";import"./getReactElementRef-BYc4Ml28.js";import"./ownerWindow-3v6eiK8T.js";import"./Grow-CLBldzE2.js";import"./useTheme-BgSpLOaA.js";import"./Fade-CrJSceYE.js";import"./useTimeout-BlWXe-6c.js";import"./mergeSlotProps-BU5vaU7M.js";import"./debounce-Be36O1Ab.js";import"./Modal-BFdQcFNa.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Paper-BXSwlSKf.js";import"./List-CHVZhRhj.js";import"./utils-DCn-tNVR.js";import"./useControlled-uQ-zc7dM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-Bp3GxJS9.js";import"./FormHelperText-QX-RoNXW.js";import"./Typography-Dtns6REN.js";import"./IconButton-CRIxqxPa.js";import"./ButtonBase-Bl3JFAp9.js";import"./CircularProgress-CQXBvY_-.js";import"./Tooltip-BYtNwMa0.js";import"./Popper-D5VfC7_g.js";import"./Box-gFKjZ2qA.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
`})})]})}function Y(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{Y as default};
