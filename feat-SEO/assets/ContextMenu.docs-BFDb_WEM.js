import{B as e}from"./iframe-BznxWzSL.js";import{useMDXComponents as r}from"./index-GSpq5NJN.js";import{b as c,C as t,a as d}from"./index-DePyi8dF.js";import{C as l,D as s,a as h,W as p}from"./ContextMenu.stories-UyFMqKHu.js";import"./preload-helper-Ds9E1W97.js";import"./index-DaYqKkR4.js";import"./index-DIXCAK8P.js";import"./index-DZxQ9Z1O.js";import"./Delete-DPA4FtEl.js";import"./memoTheme-B6rMeQ0d.js";import"./MenuItem-D9ir-5kf.js";import"./List-JBKPy0wu.js";import"./useForkRef-uftMKH9r.js";import"./ButtonBase-BZSpME8i.js";import"./useTimeout-CIUj2LBL.js";import"./dividerClasses-BKuUi0b7.js";import"./createSvgIcon-DzDMFhMi.js";import"./Menu-DPrKd2R4.js";import"./useSlot-DmEaZAsO.js";import"./mergeSlotProps-DQFkZ67W.js";import"./useSlotProps-BI0XKtL6.js";import"./Popover-CU2IBUW2.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-C_jWOFRJ.js";import"./useTheme-D5gpHPpR.js";import"./Fade-CbTmfElB.js";import"./getReactElementRef-WQH4VCQH.js";import"./mergeSlotProps-BEsrY6Qj.js";import"./Modal-Dnxoibla.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-z6L1ngzw.js";import"./Paper-CwJsX7gS.js";import"./Divider-CVl8A3Zr.js";function o(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:l}),`
`,e.jsx(n.h1,{id:"contextmenu",children:"ContextMenu"}),`
`,e.jsxs(n.p,{children:["A context-sensitive menu component built on MUI's ",e.jsx(n.code,{children:"Menu"}),` family. Opens on
`,e.jsx(n.strong,{children:"right-click"})," (desktop) or ",e.jsx(n.strong,{children:"long-press ≥ 600ms"}),` (mobile/touch) and always
positions itself within the viewport.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ContextMenu"}),` component wraps any element and attaches context menu behavior
to it. It supports grouped items with dividers, icons, disabled states, and full
keyboard navigation.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"quick-start",children:"Quick Start"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ContextMenu } from '@/component-catalog/ContextMenu';

const groups = [
  {
    id: 'clipboard',
    items: [
      { id: 'copy', label: 'Copy', onClick: () => {} },
      { id: 'paste', label: 'Paste', onClick: () => {} },
    ],
  },
];

function Example() {
  return (
    <ContextMenu groups={groups}>
      <div>Right click here</div>
    </ContextMenu>
  );
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"stories",children:"Stories"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(n.h3,{id:"with-groups",children:"With Groups"}),`
`,e.jsx(n.p,{children:"Items organized in groups separated by dividers."}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h3,{id:"with-disabled-items",children:"With Disabled Items"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"prop-reference",children:"Prop Reference"}),`
`,e.jsx(n.h3,{id:"contextmenuprops",children:"ContextMenuProps"}),`
`,e.jsxs(n.p,{children:[`| Prop       | Type                  | Required | Description                                        |
| ---------- | --------------------- | -------- | -------------------------------------------------- |
| `,e.jsx(n.code,{children:"children"})," | ",e.jsx(n.code,{children:"ReactNode"}),`           | ✅        | Element that listens for right-click / long-press  |
| `,e.jsx(n.code,{children:"groups"}),"   | ",e.jsx(n.code,{children:"ContextMenuGroup[]"}),`  | ✅        | List of item groups — dividers inserted between    |
| `,e.jsx(n.code,{children:"onClose"}),"  | ",e.jsx(n.code,{children:"() => void"}),"          | —        | Called whenever the menu closes                    |"]}),`
`,e.jsx(n.h3,{id:"contextmenugroup",children:"ContextMenuGroup"}),`
`,e.jsxs(n.p,{children:[`| Prop    | Type                | Required | Description                        |
| ------- | ------------------- | -------- | ---------------------------------- |
| `,e.jsx(n.code,{children:"id"}),"    | ",e.jsx(n.code,{children:"string"}),`            | ✅        | Unique group identifier             |
| `,e.jsx(n.code,{children:"items"})," | ",e.jsx(n.code,{children:"ContextMenuItem[]"})," | ✅        | Items belonging to this group       |"]}),`
`,e.jsx(n.h3,{id:"contextmenuitem",children:"ContextMenuItem"}),`
`,e.jsxs(n.p,{children:[`| Prop       | Type          | Required | Description                            |
| ---------- | ------------- | -------- | -------------------------------------- |
| `,e.jsx(n.code,{children:"id"}),"       | ",e.jsx(n.code,{children:"string"}),`      | ✅        | Unique item identifier                  |
| `,e.jsx(n.code,{children:"label"}),"    | ",e.jsx(n.code,{children:"string"}),`      | ✅        | Text displayed in the menu              |
| `,e.jsx(n.code,{children:"icon"}),"     | ",e.jsx(n.code,{children:"ReactNode"}),`   | —        | Icon rendered before the label          |
| `,e.jsx(n.code,{children:"disabled"})," | ",e.jsx(n.code,{children:"boolean"}),"     | —        | Prevents interaction when ",e.jsx(n.code,{children:"true"}),`        |
| `,e.jsx(n.code,{children:"onClick"}),"  | ",e.jsx(n.code,{children:"() => void"}),"  | —        | Called when the item is selected        |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"behaviour",children:"Behaviour"}),`
`,e.jsx(n.h3,{id:"desktop",children:"Desktop"}),`
`,e.jsxs(n.p,{children:["Opens on the native ",e.jsx(n.code,{children:"contextmenu"}),` event (right-click or keyboard menu key).
The browser's default context menu is suppressed via `,e.jsx(n.code,{children:"event.preventDefault()"}),"."]}),`
`,e.jsx(n.h3,{id:"mobile--touch",children:"Mobile / Touch"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.code,{children:"pointerdown"}),` event starts a 600ms timer. If the pointer is held without
being released or cancelled, the menu opens at the pointer position. Releasing
early cancels the timer.`]}),`
`,e.jsx(n.h3,{id:"viewport-clamping",children:"Viewport Clamping"}),`
`,e.jsxs(n.p,{children:["The position is clamped with ",e.jsx(n.code,{children:"clampToViewport()"}),` before rendering so the menu
never overflows the right or bottom edges of the screen at any breakpoint.`]}),`
`,e.jsx(n.h3,{id:"closing",children:"Closing"}),`
`,e.jsxs(n.p,{children:["The menu closes on item selection, click outside, or ",e.jsx(n.code,{children:"Escape"})," key."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Menu root renders with ",e.jsx(n.code,{children:'role="menu"'}),"."]}),`
`,e.jsxs(n.li,{children:["Each item renders with ",e.jsx(n.code,{children:'role="menuitem"'}),"."]}),`
`,e.jsxs(n.li,{children:["Disabled items expose ",e.jsx(n.code,{children:'aria-disabled="true"'})," and are skipped by interaction."]}),`
`,e.jsxs(n.li,{children:["Keyboard navigation (",e.jsx(n.code,{children:"Escape"}),") is handled natively by MUI's ",e.jsx(n.code,{children:"Menu"}),"."]}),`
`,e.jsxs(n.li,{children:["Touch targets meet WCAG 2.5.5 — minimum ",e.jsx(n.code,{children:"44px"})," height via ",e.jsx(n.code,{children:"theme.spacing(5.5)"}),"."]}),`
`,e.jsxs(n.li,{children:["Passes ",e.jsx(n.code,{children:"axe-core"})," / WCAG 2.1 AA checks via ",e.jsx(n.code,{children:"@storybook/addon-a11y"}),"."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"responsive-behaviour",children:"Responsive Behaviour"}),`
`,e.jsx(n.p,{children:`| Viewport | Behaviour                                              |
| -------- | ------------------------------------------------------ |
| 320 px   | Menu clamped to viewport, touch targets ≥ 44px         |
| 375 px   | Full functionality, comfortable spacing                |
| 768 px   | Desktop trigger (right-click) available                |
| 1024 px+ | Full desktop experience, viewport clamping active      |`}),`
`,e.jsxs(n.p,{children:["All sizing uses ",e.jsx(n.code,{children:"theme.spacing()"})," — no hardcoded ",e.jsx(n.code,{children:"px"})," values."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"file-structure",children:"File Structure"}),`
`,e.jsx(n.p,{children:`ContextMenu/
├── ContextMenu.tsx           # Component logic & JSX
├── ContextMenu.types.ts      # TypeScript interfaces
├── ContextMenu.constants.ts  # Long-press duration, fallback dimensions
├── ContextMenu.hook.ts       # Open state, position, long-press logic
├── ContextMenu.styles.ts     # MUI styled() components — no external CSS
├── ContextMenu.utils.ts      # Viewport clamping utility
├── ContextMenu.test.tsx      # Vitest + Testing Library test suite
├── ContextMenu.stories.tsx   # Storybook CSF stories
└── ContextMenu.docs.mdx      # This file`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"stack",children:"Stack"}),`
`,e.jsxs(n.p,{children:[`| Package              | Role                          |
| -------------------- | ----------------------------- |
| `,e.jsx(n.code,{children:"@mui/material"}),` v7   | Menu, MenuItem, Divider, styled |
| `,e.jsx(n.code,{children:"@mui/icons-material"}),`| Optional item icons           |
| `,e.jsx(n.code,{children:"@emotion/react"}),`     | CSS-in-JS runtime             |
| `,e.jsx(n.code,{children:"react"}),"              | Hooks — useState, useRef, useCallback, useEffect |"]})]})}function _(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{_ as default};
