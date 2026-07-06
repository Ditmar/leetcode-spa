import{A as e}from"./iframe-CLrQJv_a.js";import{useMDXComponents as t}from"./index-DX1i1kl1.js";import{b as d,C as i,c as s,a as c}from"./index-DYA772t-.js";import{S as l,D as a,N as h}from"./HoverCard.stories-CReqH2yn.js";import"./preload-helper-Bw0f1Tue.js";import"./index-CLtPmIgC.js";import"./index-DfsYuhrK.js";import"./index-CK2XXBqq.js";import"./memoTheme-BO_7CdOi.js";import"./Box-DrFziY_N.js";import"./Paper-Br-zN32S.js";import"./useTheme-CbszIVMn.js";import"./Popper-NqP_0Mth.js";import"./Portal-Dqrbapn7.js";import"./useForkRef-CfQLQGRD.js";import"./getReactElementRef-OwzMr_RN.js";import"./useSlotProps-6CvjUKki.js";import"./mergeSlotProps-BgZUJYp4.js";import"./Fade-BZfV_J86.js";import"./useTimeout-ZK1ILCxH.js";import"./Button-D_xIGoak.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B_FMP5jY.js";import"./CircularProgress-RT6Mn_h6.js";import"./useSlot-BU1XSp-u.js";import"./useControlled-BZzIp_Ws.js";import"./Grow-cwg1yu3b.js";import"./Typography-LAe8pJxV.js";import"./Stack-ljB8koaQ.js";import"./useThemeProps-C5RAzerJ.js";import"./getThemeProps-jKeS8oQq.js";function o(n){const r={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l}),`
`,e.jsx(r.h1,{id:"hovercard-component",children:"HoverCard Component"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.strong,{children:"HoverCard"}),` component displays a rich floating preview card anchored to a
trigger element. It implements the `,e.jsx(r.strong,{children:"'Tooltips & Hover Cards'"}),` pattern from the
Figma design system and follows `,e.jsx(r.strong,{children:"Component-Driven Development (CDD)"}),` principles
using MUI primitives (`,e.jsx(r.code,{children:"Popper"}),", ",e.jsx(r.code,{children:"Paper"}),", ",e.jsx(r.code,{children:"Fade"}),", ",e.jsx(r.code,{children:"ClickAwayListener"}),")."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"features",children:"Features"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Built with ",e.jsx(r.code,{children:"@mui/material/Popper"})," and ",e.jsx(r.code,{children:"Paper"})]}),`
`,e.jsxs(r.li,{children:["Opens on ",e.jsx(r.code,{children:"mouseenter"})," / ",e.jsx(r.code,{children:"focus"})," (desktop) and ",e.jsx(r.code,{children:"click"})," (touch devices)"]}),`
`,e.jsx(r.li,{children:"Configurable open and close delay (default: 100 ms / 100 ms)"}),`
`,e.jsxs(r.li,{children:["Viewport-clamped via ",e.jsx(r.code,{children:"@popperjs/core"})," modifiers"]}),`
`,e.jsxs(r.li,{children:["Smooth ",e.jsx(r.code,{children:"Fade"})," transition on open/close"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"ClickAwayListener"})," closes the card on outside click/tap"]}),`
`,e.jsxs(r.li,{children:["Fully responsive — fluid width at 320 px and 375 px, capped at ",e.jsx(r.code,{children:"maxWidth"})," on wider screens"]}),`
`,e.jsxs(r.li,{children:["Figma-faithful ghost trigger button (",e.jsx(r.code,{children:"HoverTriggerButton"}),") included"]}),`
`]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"default",children:"Default"}),`
`,e.jsx(r.p,{children:"Matches the Figma 'Tooltips & Hover Cards' screen exactly."}),`
`,e.jsx(i,{children:e.jsx(s,{of:a})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"no-delay",children:"No Delay"}),`
`,e.jsx(i,{children:e.jsx(s,{of:h})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsx(c,{}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"interaction-model",children:"Interaction model"}),`
`,e.jsxs(r.p,{children:[`| Device          | Open gesture                     | Close gesture                          |
| --------------- | -------------------------------- | -------------------------------------- |
| Desktop / mouse | `,e.jsx(r.code,{children:"mouseenter"})," or keyboard ",e.jsx(r.code,{children:"focus"})," | ",e.jsx(r.code,{children:"mouseleave"}),", ",e.jsx(r.code,{children:"blur"}),", or click outside |"]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"responsive-behaviour",children:"Responsive behaviour"}),`
`,e.jsxs(r.p,{children:[`| Viewport | Card behaviour                          |
| -------- | --------------------------------------- |
| 320 px   | Fluid: `,e.jsx(r.code,{children:"calc(100vw - theme.spacing(4))"}),` |
| 375 px   | Fluid (same rule)                       |
| 768 px   | Capped at `,e.jsx(r.code,{children:"maxWidth"}),` (default 320 px)   |
| 1024 px  | Capped at `,e.jsx(r.code,{children:"maxWidth"})," (default 320 px)   |"]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["The card carries ",e.jsx(r.code,{children:"role='tooltip'"})," for screen-reader compatibility."]}),`
`,e.jsxs(r.li,{children:["Keyboard users can open via ",e.jsx(r.code,{children:"Tab"})," (focus) and close by navigating away."]}),`
`,e.jsx(r.li,{children:"Passes axe / WCAG 2.1 AA checks."}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"HoverTriggerButton"})," includes a ",e.jsx(r.code,{children:":focus-visible"})," outline using ",e.jsx(r.code,{children:"theme.palette.primary.main"}),"."]}),`
`]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"file-structure",children:"File structure"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{children:`src/component-catalog/HoverCard/
├── HoverCard.tsx            Main component
├── HoverCard.types.ts       TypeScript interfaces
├── HoverCard.constants.ts   Delay and transition constants
├── HoverCard.hook.ts        Open/close state with delay management
├── HoverCard.styles.ts      MUI styled() — HoverCardPaper, HoverTriggerButton, HoverCardDemoContainer
├── HoverCard.test.tsx       Vitest / Testing Library unit tests
├── HoverCard.stories.tsx    Storybook CSF stories
└── HoverCard.docs.mdx       This file
`})})]})}function _(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(o,{...n})}):o(n)}export{_ as default};
