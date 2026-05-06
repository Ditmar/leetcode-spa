import{j as e}from"./iframe-Cn1Aqfbs.js";import{useMDXComponents as l}from"./index-Dl0qMZq-.js";import{M as r,b as t,c as o}from"./index-C0zfUX_A.js";import{I as d,P as a}from"./InputOTP.stories-BQ2eq8lt.js";import"./preload-helper-BiuNoLlu.js";import"./index-BURl8eiM.js";import"./index-CBjU--rx.js";import"./index-IJyymuyb.js";import"./memoTheme-CKLIpEfq.js";import"./Box-DoLXu8Az.js";import"./Typography-CjtM0gUt.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./TextField-VYSUD8Iw.js";import"./useSlot-CeIvN8GL.js";import"./mergeSlotProps-BZ00vR7z.js";import"./useForkRef-w-8LwAJK.js";import"./FormHelperText-DQC0GKp-.js";import"./Portal-EohZCoGv.js";import"./getReactElementRef-C_a-WRm5.js";import"./useTimeout-D_ONMyD3.js";import"./List-CPp65GQv.js";import"./Menu-c3PePmRw.js";import"./useSlotProps-B_bf8cq6.js";import"./Paper-BpTo8XVO.js";import"./useTheme-Le1LLudS.js";import"./Fade-BG1X06gv.js";import"./mergeSlotProps-B_92Z-Gh.js";import"./Modal-Ds6NI6Wt.js";import"./useControlled-DWyoqgGy.js";import"./createSvgIcon-ULwf-nxN.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
`,e.jsx(n.h1,{id:"inputotp",children:"InputOTP"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"InputOTP"})," component allows users to enter a one-time password (OTP) or verification code using multiple individual input fields."]}),`
`,e.jsx(n.p,{children:"It is designed to be mobile-friendly, supporting numeric keyboards, focus navigation, backspace behavior, and paste-to-fill interaction."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Configurable number of digits"}),`
`,e.jsx(n.li,{children:"Auto-focus to next input"}),`
`,e.jsx(n.li,{children:"Backspace navigation"}),`
`,e.jsx(n.li,{children:"Paste full OTP support"}),`
`,e.jsx(n.li,{children:"Numeric-only input"}),`
`,e.jsx(n.li,{children:"Disabled and error states"}),`
`,e.jsx(n.li,{children:"Fully responsive layout"}),`
`,e.jsx(n.li,{children:"Uncontrolled internal state"}),`
`,e.jsxs(n.li,{children:["Completion callback through ",e.jsx(n.code,{children:"onComplete"})]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(t,{children:e.jsx(o,{of:a})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.p,{children:`| Prop       | Type                    | Default        | Description |
|------------|-------------------------|----------------|-------------|
| length     | number                  | 6              | Number of OTP digits |
| disabled   | boolean                 | false          | Disables all inputs |
| error      | boolean                 | false          | Shows error state |
| label      | string                  | Enter OTP Code | Text label displayed above the inputs |
| onComplete | (value: string) => void | —              | Callback fired when all OTP digits are filled |`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<InputOTP />
`})}),`
`,e.jsx(n.h3,{id:"custom-length",children:"Custom length"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<InputOTP length={4} />
`})}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<InputOTP disabled />
`})}),`
`,e.jsx(n.h3,{id:"error-state",children:"Error state"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<InputOTP error />
`})}),`
`,e.jsx(n.h3,{id:"completion-callback",children:"Completion callback"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<InputOTP
  onComplete={(value) => {
    console.log(value);
  }}
/>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(n.p,{children:["The component is uncontrolled. It manages its own internal value state through the ",e.jsx(n.code,{children:"useInputOTP"})," hook."]}),`
`,e.jsxs(n.p,{children:["When all inputs are filled, the ",e.jsx(n.code,{children:"onComplete"})," callback is called with the full OTP value."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"mobile-behavior",children:"Mobile Behavior"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Uses ",e.jsx(n.code,{children:'inputMode="numeric"'})," to trigger numeric keyboards"]}),`
`,e.jsxs(n.li,{children:["Uses ",e.jsx(n.code,{children:'pattern="[0-9]*"'})," for numeric input support"]}),`
`,e.jsx(n.li,{children:"Optimized for touch interaction"}),`
`,e.jsx(n.li,{children:"Supports pasting OTP codes from SMS or clipboard"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Wrapped with ",e.jsx(n.code,{children:'role="group"'})]}),`
`,e.jsxs(n.li,{children:["Each input includes an ",e.jsx(n.code,{children:"aria-label"})]}),`
`,e.jsxs(n.li,{children:["Each input label follows the format: ",e.jsx(n.code,{children:"Digit X of N"})]}),`
`,e.jsx(n.li,{children:"Screen reader friendly"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Only numeric input is allowed"}),`
`,e.jsx(n.li,{children:"Empty values are allowed internally to support deletion and backspace behavior"}),`
`,e.jsx(n.li,{children:"Pasted values are sanitized before being distributed across inputs"}),`
`,e.jsx(n.li,{children:"Focus automatically moves between inputs"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"design-considerations",children:"Design Considerations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Built with Material UI"}),`
`,e.jsxs(n.li,{children:["Styles use MUI ",e.jsx(n.code,{children:"styled()"})]}),`
`,e.jsx(n.li,{children:"Uses theme typography and spacing tokens"}),`
`,e.jsx(n.li,{children:"No external CSS"}),`
`,e.jsx(n.li,{children:"Matches the Figma design specifications"}),`
`]})]})}function W(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{W as default};
