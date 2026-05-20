import{j as e}from"./iframe-X4gaZt09.js";import{useMDXComponents as r}from"./index-BrHQREFp.js";import{M as a,b as o,c as i}from"./index-C5ATKsHC.js";import{B as h,N as c,P as l}from"./Badge.stories-BTGeBxoG.js";import"./preload-helper-BAi431uf.js";import"./index-D-WXGYcE.js";import"./index-C4sxLiWM.js";import"./index-CKjg4wG6.js";import"./memoTheme-DVmgVHuk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-DtkU3OuL.js";import"./mergeSlotProps-BM0Mf6AP.js";import"./useForkRef-91d1T-bU.js";import"./Box-DtFszMI3.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Component Catalog/Badges/Docs",of:h}),`
`,e.jsx(n.h1,{id:"badge",children:"Badge"}),`
`,e.jsxs(n.p,{children:["The Badge component is based on ",e.jsx(n.code,{children:"@mui/material/Badge"}),`.
It is used to show small pieces of information like numbers, notifications, or status indicators.
Usually, it is attached to another element like an icon, button, or small box.`]}),`
`,e.jsx(n.h2,{id:"what-this-component-supports",children:"What this component supports"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Numeric badge content"}),`
`,e.jsxs(n.li,{children:["Overflow with the ",e.jsx(n.code,{children:"max"})," prop, for example ",e.jsx(n.code,{children:"99+"})]}),`
`,e.jsx(n.li,{children:"Dot variant without content"}),`
`,e.jsxs(n.li,{children:["MUI colors: ",e.jsx(n.code,{children:"default"}),", ",e.jsx(n.code,{children:"primary"}),", ",e.jsx(n.code,{children:"secondary"}),", ",e.jsx(n.code,{children:"error"}),", ",e.jsx(n.code,{children:"info"}),", ",e.jsx(n.code,{children:"success"}),", ",e.jsx(n.code,{children:"warning"})]}),`
`,e.jsxs(n.li,{children:["Different anchor positions: ",e.jsx(n.code,{children:"top-right"}),", ",e.jsx(n.code,{children:"top-left"}),", ",e.jsx(n.code,{children:"bottom-right"}),", ",e.jsx(n.code,{children:"bottom-left"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"why-this-component-is-useful",children:"Why this component is useful"}),`
`,e.jsx(n.p,{children:`This component helps display short information in a small space.
For example, it can be used to show unread messages, notifications, or a simple status dot.
It is useful because the information is easy to see without taking too much space in the UI.`}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Badge badgeContent={8} color="primary">
  <button type="button">Inbox</button>
</Badge>
`})}),`
`,e.jsx(n.h2,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The component uses Material UI Badge as the base"}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"max"})," prop is useful when the number is too large"]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"dot"})," variant can be used when no number is needed"]}),`
`,e.jsxs(n.li,{children:["The position can be changed with ",e.jsx(n.code,{children:"anchorOrigin"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"stories",children:"Stories"}),`
`,e.jsx(n.p,{children:`The Storybook stories were created to show the main behaviors of the component in a simple way.
Instead of repeating many similar blocks in the docs page, the list below explains what each story is used for.`}),`
`,e.jsx(n.h3,{id:"main-examples",children:"Main examples"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Numeric"}),": shows a normal badge with numeric content"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MaxOverflow"}),": shows how the component behaves when the value is bigger than the max limit"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DotVariant"}),": shows the badge used only as a dot indicator"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ColorVariants"}),": shows the supported MUI color options"]}),`
`]}),`
`,e.jsx(o,{children:e.jsx(i,{of:c})}),`
`,e.jsx(n.h3,{id:"position-examples",children:"Position examples"}),`
`,e.jsx(n.p,{children:`Instead of repeating the same example four times, the positions are shown together below.
This makes it easier to compare how the badge moves around the same target element.`}),`
`,e.jsx(o,{children:e.jsx(i,{of:l})})]})}function I(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{I as default};
