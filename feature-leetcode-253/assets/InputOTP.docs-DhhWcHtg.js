import{A as e}from"./iframe-DAe-Jy2H.js";import{useMDXComponents as r}from"./index-BroUl8TU.js";import{b as l,C as t,c as o}from"./index-DFZ1Q852.js";import{I as d,P as a}from"./InputOTP.stories-dNa1R3zR.js";import"./preload-helper-CZzeAyVo.js";import"./index-qtCeitAx.js";import"./index-DDDWMZbz.js";import"./index-DbgDgJcN.js";import"./memoTheme-BghwEPj6.js";import"./Box-jhmH690-.js";import"./Typography-jFzVECsm.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./TextField-BLKdBHl_.js";import"./useSlot-C8v21pl3.js";import"./mergeSlotProps-BygUqJen.js";import"./useForkRef-BtKOSbq-.js";import"./Select-D6rk1D7N.js";import"./Menu-CjzrDWW9.js";import"./useSlotProps-BDwN7XWs.js";import"./Popover-BdhtR0Uw.js";import"./Portal-DoOgRtQY.js";import"./getReactElementRef-BpocU5SJ.js";import"./ownerWindow-BVO8jctn.js";import"./Grow-BpalCf3I.js";import"./useTheme-CFndGel4.js";import"./Fade-BK7ww6ks.js";import"./useTimeout-CW6h5Mho.js";import"./mergeSlotProps-DyCx_Ej8.js";import"./debounce-Be36O1Ab.js";import"./Modal-ri88sLH4.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Paper-C4B_1hGC.js";import"./List-CZXLafS_.js";import"./utils-CqMuWK2n.js";import"./useControlled-Ov9KWPlp.js";import"./createSvgIcon-UikH_IkD.js";import"./FormLabel-DgI7At73.js";import"./FormHelperText-D0q9-qQB.js";import"./FormControl-CvKNhvjX.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d}),`
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
`]})]})}function Q(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{Q as default};
