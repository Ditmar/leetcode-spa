import{j as e}from"./iframe-CW4duQyu.js";import{useMDXComponents as s}from"./index-Dhl7TWUQ.js";import{M as t}from"./Menu-Badge-mi2RkWMx.js";import"./preload-helper-PPVm8Dsz.js";import"./styled-DyuMUp0B.js";import"./Box-DIIHrGcg.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./Card-DlXJEI8z.js";import"./memoTheme-B9gRcEkF.js";import"./Paper-D0QAv84G.js";import"./useTheme-C6gqCJOh.js";function a(i){const n={h2:"h2",p:"p",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"menubadge",children:"MenuBadge"}),`
`,e.jsx(n.p,{children:"The MenuBadge component displays a visual label for menus, combining an icon and text. It supports two styles: primary text with a dark icon (primaryText) and gradient text with a gradient icon (secondaryText), following the Figma design specifications."}),`
`,e.jsx(n.p,{children:`Features
Horizontally aligned icon and text.
Fixed sizes per design:
PrimaryText icon: 24px × 24px
SecondaryText icon: 19.5px × 19.5px
Text: Syne, 500, 18px, lineHeight: 1
Gradient in secondaryText: #B23DEB → #DE8FFF (defined in pillTagTokens).
Fixed separation between icon and text: 12px.
Accessibility: role="menuitem", alt on icons.
Uses labels by default if no label is passed.`}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.p,{children:"label (string, optional): Text to display."}),`
`,e.jsx(n.p,{children:`If not passed, uses 'Dashboard' (default value in both variants).
variant ('primaryText' | 'secondaryText', optional): Badge style.
Default value: 'primaryText'.`}),`
`,e.jsx(n.p,{children:"⚠️ The size prop exists for compatibility, but does not affect the icon size (it is fixed by design)."}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:`Container with role="menuitem" for semantic context.
Icons with descriptive alt attribute ("MenuBadge dark" / "MenuBadge gradient").
WCAG AA color contrast compliant.`}),`
`,e.jsx(n.h2,{id:"usage-example",children:"Usage example"}),`
`,`
`,e.jsx(n.p,{children:"// Primary style (default)"}),`
`,e.jsx(t,{label:"Dashboard"}),`
`,e.jsx(n.p,{children:"// Secondary style (with gradient)"}),`
`,e.jsx(t,{variant:"secondaryText",label:"Analytics"})]})}function g(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{g as default};
