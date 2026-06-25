import{B as e}from"./iframe-CNMMpan6.js";import{useMDXComponents as i}from"./index-I8NKPg-C.js";import{b as s,C as o,a as d}from"./index-C5k6YDI4.js";import{D as a,R as l,B as c}from"./Drawer.stories-D587bYeZ.js";import"./preload-helper-DqXJTOSk.js";import"./index-CngmJ5eA.js";import"./index-CCp-2aB7.js";import"./index-CSnIixLs.js";import"./Close-BBOA4jjD.js";import"./createSvgIcon-Drqq_-KG.js";import"./memoTheme-7cykwcLT.js";import"./useTheme-GpgQ2U1x.js";import"./index-M3fQueTX.js";import"./getThemeProps-D8rO-CP6.js";import"./Drawer-D7008H0g.js";import"./useSlot-DEkvIc43.js";import"./mergeSlotProps-56BhHCMG.js";import"./useForkRef-Cf-PtD7o.js";import"./mergeSlotProps-CujBXBJu.js";import"./Fade-BC_a8ruI.js";import"./useTimeout-rsB0pUEg.js";import"./getReactElementRef-DPVmUq3c.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-DTK0hzOP.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CMgg4aBF.js";import"./Paper-BhbmJrWB.js";import"./NoSsr-B1zGoMUk.js";import"./Box-ywnCnOw5.js";import"./Typography-WUQssbwx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./IconButton-BjGWWpiq.js";import"./ButtonBase-Czk3BWCd.js";import"./CircularProgress-BDNDzihM.js";import"./Button-CTdjSHH5.js";function t(n){const r={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(r.h1,{id:"drawer",children:"Drawer"}),`
`,e.jsxs(r.p,{children:["Responsive Drawer component built on top of MUI ",e.jsx(r.code,{children:"Drawer"})," and ",e.jsx(r.code,{children:"SwipeableDrawer"}),`.
On mobile breakpoints it automatically switches to `,e.jsx(r.code,{children:"SwipeableDrawer"})," for native swipe-to-close support."]}),`
`,e.jsx(r.h2,{id:"features",children:"Features"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Left, right, top and bottom anchors"}),`
`,e.jsx(r.li,{children:"Temporary, persistent and permanent variants"}),`
`,e.jsxs(r.li,{children:["Mobile swipe support via ",e.jsx(r.code,{children:"SwipeableDrawer"})]}),`
`,e.jsx(r.li,{children:"Responsive bottom sheet with drag handle"}),`
`,e.jsx(r.li,{children:"Optional close button (left/right anchors)"}),`
`,e.jsxs(r.li,{children:["Accessibility support (focus trap, ",e.jsx(r.code,{children:"aria-label"}),", ",e.jsx(r.code,{children:"aria-hidden"}),")"]}),`
`,e.jsx(r.li,{children:"Theme token support using responsive units and design tokens"}),`
`,e.jsx(r.li,{children:"Figma-aligned desktop and mobile layouts"}),`
`]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"desktop-example",children:"Desktop Example"}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(r.h2,{id:"mobile-bottom-sheet",children:"Mobile Bottom Sheet"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(d,{}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { useState } from 'react';
import { Drawer } from '@/component-catalog/Drawer/Drawer';

const MyComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        anchor="right"
        variant="temporary"
        title="Edit profile"
        description="Make changes to your profile here."
      >
        {/* Drawer content */}
      </Drawer>
    </>
  );
};
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"when-to-use-each-variant",children:"When to use each Variant"}),`
`,e.jsxs(r.p,{children:[`| Variant | Use case |
|---|---|
| `,e.jsx(r.code,{children:"temporary"}),` | Modal-style overlays: filters, settings, contextual actions. Closes on backdrop click or swipe. |
| `,e.jsx(r.code,{children:"persistent"}),` | Side panels that coexist with content, like navigation. User must explicitly close it. |
| `,e.jsx(r.code,{children:"permanent"})," | Always-visible sidebars for desktop layouts where persistent navigation is always required. |"]}),`
`,e.jsx(r.h2,{id:"when-to-use-each-anchor",children:"When to use each Anchor"}),`
`,e.jsxs(r.p,{children:[`| Anchor | Use case |
|---|---|
| `,e.jsx(r.code,{children:"right"}),` | Edit forms, detail panels, settings drawers. |
| `,e.jsx(r.code,{children:"left"}),` | Navigation menus, sidebars. |
| `,e.jsx(r.code,{children:"bottom"}),` | Mobile-first bottom sheets, action sheets. |
| `,e.jsx(r.code,{children:"top"})," | Contextual banners or filter panels sliding from the top. |"]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,e.jsx(r.p,{children:"The component adapts automatically based on the viewport:"}),`
`,e.jsxs(r.p,{children:[`| Breakpoint | Behavior |
|---|---|
| `,e.jsx(r.code,{children:"< 600px"})," (mobile) | Uses ",e.jsx(r.code,{children:"SwipeableDrawer"}),` — supports swipe-to-close gesture. Bottom anchor shows drag handle. |
| `,e.jsx(r.code,{children:"≥ 600px"})," (tablet/desktop) | Uses standard MUI ",e.jsx(r.code,{children:"Drawer"}),". Side anchors use configured width (",e.jsx(r.code,{children:"drawerSize"})," or default ",e.jsx(r.code,{children:"30%"}),"). |"]}),`
`,e.jsxs(r.p,{children:["Tested viewports: ",e.jsx(r.strong,{children:"320px"}),", ",e.jsx(r.strong,{children:"375px"}),", ",e.jsx(r.strong,{children:"768px"}),", ",e.jsx(r.strong,{children:"1024px"}),"."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsxs(r.h2,{id:"-prop--type--default--description--------------open--boolean--false--controls-the-drawer-open-state--anchor--left--right--top--bottom--right--edge-the-drawer-slides-from--variant--temporary--persistent--permanent--temporary--mui-drawer-variant--title--reactnode----optional-header-title--description--reactnode----optional-header-description-below-the-title--showclosebutton--boolean--true--showhide-the-close-icon-button-leftright-anchors-only--showdraghandle--boolean--true--showhide-the-drag-handle-indicator-top-and-bottom-anchors--drawersize--number--numbervh--numbervw--30--40vh--width-leftright-or-height-topbottom-relative-units-only--swipeable--boolean--true--enables-swipeabledrawer-on-mobile-breakpoints--drawerarialabel--string--drawer--accessible-label-applied-to-the-drawer-root-element--onclose--muidrawerpropsonclose----callback-fired-when-the-drawer-requests-to-close--onopen--swipeabledrawerpropsonopen----callback-fired-when-the-drawer-opens-via-swipe-interaction-",children:[`| Prop | Type | Default | Description |
|---|---|---|---|
| `,e.jsx(r.code,{children:"open"})," | ",e.jsx(r.code,{children:"boolean"})," | ",e.jsx(r.code,{children:"false"}),` | Controls the drawer open state. |
| `,e.jsx(r.code,{children:"anchor"})," | ",e.jsx(r.code,{children:"'left' \\| 'right' \\| 'top' \\| 'bottom'"})," | ",e.jsx(r.code,{children:"'right'"}),` | Edge the drawer slides from. |
| `,e.jsx(r.code,{children:"variant"})," | ",e.jsx(r.code,{children:"'temporary' \\| 'persistent' \\| 'permanent'"})," | ",e.jsx(r.code,{children:"'temporary'"}),` | MUI drawer variant. |
| `,e.jsx(r.code,{children:"title"})," | ",e.jsx(r.code,{children:"ReactNode"}),` | — | Optional header title. |
| `,e.jsx(r.code,{children:"description"})," | ",e.jsx(r.code,{children:"ReactNode"}),` | — | Optional header description below the title. |
| `,e.jsx(r.code,{children:"showCloseButton"})," | ",e.jsx(r.code,{children:"boolean"})," | ",e.jsx(r.code,{children:"true"}),` | Show/hide the close icon button (left/right anchors only). |
| `,e.jsx(r.code,{children:"showDragHandle"})," | ",e.jsx(r.code,{children:"boolean"})," | ",e.jsx(r.code,{children:"true"}),` | Show/hide the drag handle indicator (top and bottom anchors). |
| `,e.jsx(r.code,{children:"drawerSize"})," | ",e.jsx(r.code,{children:"`${number}%` \\| `${number}vh` \\| `${number}vw`"})," | ",e.jsx(r.code,{children:"'30%'"})," / ",e.jsx(r.code,{children:"'40vh'"}),` | Width (left/right) or height (top/bottom). Relative units only. |
| `,e.jsx(r.code,{children:"swipeable"})," | ",e.jsx(r.code,{children:"boolean"})," | ",e.jsx(r.code,{children:"true"})," | Enables ",e.jsx(r.code,{children:"SwipeableDrawer"}),` on mobile breakpoints. |
| `,e.jsx(r.code,{children:"drawerAriaLabel"})," | ",e.jsx(r.code,{children:"string"})," | ",e.jsx(r.code,{children:"'drawer'"}),` | Accessible label applied to the drawer root element. |
| `,e.jsx(r.code,{children:"onClose"})," | ",e.jsx(r.code,{children:"MuiDrawerProps['onClose']"}),` | — | Callback fired when the drawer requests to close. |
| `,e.jsx(r.code,{children:"onOpen"})," | ",e.jsx(r.code,{children:"SwipeableDrawerProps['onOpen']"})," | — | Callback fired when the drawer opens via swipe interaction. |"]}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Focus trap"}),": When the drawer is open, keyboard focus is trapped inside the panel. This is handled automatically by MUI's ",e.jsx(r.code,{children:"Modal"})," primitive."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"aria-label"}),": Set a descriptive ",e.jsx(r.code,{children:"drawerAriaLabel"})," for every instance so screen readers can identify the drawer."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Close button"}),": The ",e.jsx(r.code,{children:"IconButton"})," has ",e.jsx(r.code,{children:'aria-label="close drawer"'})," so screen reader users can activate it."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Drag handle"}),": Marked with ",e.jsx(r.code,{children:'aria-hidden="true"'})," — purely decorative, invisible to assistive technologies."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Color contrast"}),": All text colors use design tokens (",e.jsx(r.code,{children:"--foreground"}),", ",e.jsx(r.code,{children:"--muted-foreground"}),") which must meet WCAG AA contrast requirements in your ",e.jsx(r.code,{children:"colors.css"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Keyboard"}),": The drawer can be closed with the ",e.jsx(r.code,{children:"Escape"})," key. Focus returns to the trigger element after closing."]}),`
`]})]})}function H(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(t,{...n})}):t(n)}export{H as default};
