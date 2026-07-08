import{A as e}from"./iframe-BLBgDEba.js";import{useMDXComponents as t}from"./index-CMDzdzYZ.js";import{b as d,C as i,c as s,a as c}from"./index-DhzUpwtR.js";import{S as l,D as a,N as h}from"./HoverCard.stories-Bbr5jAWA.js";import"./preload-helper-Cj8zIMiQ.js";import"./index-CpWQNZXv.js";import"./index-CTEYM8bP.js";import"./index-BdBD8QIk.js";import"./memoTheme-BRKGu6yb.js";import"./Box-BArRe_nP.js";import"./Paper-C8okLxb3.js";import"./useTheme-CjRbQBlG.js";import"./Popper-DakP8j0A.js";import"./Portal-BTI3M8CP.js";import"./useForkRef-o6UA0YID.js";import"./getReactElementRef-RhwY40lI.js";import"./useSlotProps-DJOFMQ68.js";import"./mergeSlotProps-D_3NKMIS.js";import"./Fade-C6fMIbvT.js";import"./utils-C2DN5_gw.js";import"./useTimeout-ClxIiwqz.js";import"./Button-BNi3aG-m.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Bdowa_-B.js";import"./CircularProgress-DR7Vp5cC.js";import"./useSlot-BxDLCJWy.js";import"./useControlled-Cdb2h0Hh.js";import"./Grow-BSFbRe5t.js";import"./Typography-B_1JBVAz.js";import"./Stack-Bl7W_i4f.js";import"./useThemeProps-DBitAFjs.js";import"./getThemeProps-CBdVWbjT.js";function o(n){const r={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l}),`
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
`})})]})}function E(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(o,{...n})}):o(n)}export{E as default};
