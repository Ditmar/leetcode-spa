import{j as n}from"./iframe-CeayY_nG.js";import{useMDXComponents as o}from"./index-BTLoFcVq.js";import"./preload-helper-PPVm8Dsz.js";function l(i){const e={h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...o(),...i.components},{InputOTP:s,Story:r}=e;return s||t("InputOTP"),r||t("Story"),n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"inputotp",children:"InputOTP"}),`
`,n.jsx(e.p,{children:"The InputOTP component allows users to enter a one-time password (OTP) or verification code using multiple individual input fields."}),`
`,n.jsx(e.p,{children:"It is designed to be mobile-friendly, supporting numeric keyboards and smooth input navigation."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"features",children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Configurable number of digits"}),`
`,n.jsx(e.li,{children:"Auto-focus to next input"}),`
`,n.jsx(e.li,{children:"Backspace navigation"}),`
`,n.jsx(e.li,{children:"Paste full OTP support"}),`
`,n.jsx(e.li,{children:"Numeric-only input"}),`
`,n.jsx(e.li,{children:"Disabled and error states"}),`
`,n.jsx(e.li,{children:"Fully responsive layout"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(r,{of:InputOTPStories.Primary}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(e.p,{children:`| Prop     | Type                     | Default | Description |
|----------|--------------------------|--------|-------------|
| length   | number                   | 6      | Number of OTP digits |
| disabled | boolean                  | false  | Disables all inputs |
| error    | boolean                  | false  | Shows error state |
| value    | string                   | —      | Controlled value (optional) |
| onChange | (value: string) => void  | —      | Callback when value changes |`}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"default-6-digits",children:"Default (6 digits)"}),`
`,n.jsx(s,{}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"custom-length",children:"Custom length"}),`
`,n.jsx(s,{length:4}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"disabled",children:"Disabled"}),`
`,n.jsx(s,{disabled:!0}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"error-state",children:"Error state"}),`
`,n.jsx(s,{error:!0}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"mobile-behavior",children:"Mobile Behavior"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:'Uses inputMode="numeric" to trigger numeric keyboard'}),`
`,n.jsx(e.li,{children:"Optimized for touch interaction"}),`
`,n.jsx(e.li,{children:"Each input is touch-friendly in size"}),`
`,n.jsx(e.li,{children:"Supports pasting OTP codes from SMS"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:'Wrapped with role="group"'}),`
`,n.jsx(e.li,{children:"Each input includes an aria-label:"}),`
`]}),`
`,n.jsx(e.p,{children:"Digit X of N"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Screen reader friendly"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"notes",children:"Notes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Only numeric input is allowed"}),`
`,n.jsx(e.li,{children:"Pasted values are sanitized (non-numeric removed)"}),`
`,n.jsx(e.li,{children:"Focus automatically moves between inputs"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"design-considerations",children:"Design Considerations"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Built with Material UI"}),`
`,n.jsx(e.li,{children:"Uses theme.spacing (no hardcoded px)"}),`
`,n.jsx(e.li,{children:"Matches Figma design specifications"}),`
`]})]})}function a(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(l,{...i})}):l(i)}function t(i,e){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};
