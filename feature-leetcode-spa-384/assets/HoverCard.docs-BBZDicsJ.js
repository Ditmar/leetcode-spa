import{A as e}from"./iframe-K--wHrin.js";import{useMDXComponents as t}from"./index-D9My8yXI.js";import{b as d,C as i,c as s,a as c}from"./index-Ck6Q_DyA.js";import{S as l,D as a,N as h}from"./HoverCard.stories-Cp9-SVaS.js";import"./preload-helper-BRCJ-Lm3.js";import"./index-B2NeBGfs.js";import"./index-BramyaUy.js";import"./index-BBxlc46r.js";import"./memoTheme-Bj4gjl5k.js";import"./Box-BncOlawL.js";import"./Paper-Do_V3OCK.js";import"./useTheme-D18GWKj6.js";import"./Popper-B5--OENh.js";import"./Portal-CpD6PjBJ.js";import"./useForkRef-BBy6sD7t.js";import"./getReactElementRef-CuDTMuSF.js";import"./useSlotProps-B22OQ-K9.js";import"./mergeSlotProps-C4oYL9-G.js";import"./Fade-56SfDmYJ.js";import"./useTimeout-C3iQz2Kd.js";import"./Button-B7EJaVzx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D4JFNDec.js";import"./CircularProgress-2fLUC-_m.js";import"./useSlot-BTJTGoHr.js";import"./useControlled-REahV_YM.js";import"./Grow-Bc7DStkA.js";import"./Typography-CZa5KCXC.js";import"./Stack-DKwoK7mj.js";import"./useThemeProps-CVsRr4fR.js";import"./getThemeProps-DC4l5qMI.js";function o(n){const r={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l}),`
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
