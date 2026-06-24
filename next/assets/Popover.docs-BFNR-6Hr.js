import{A as e}from"./iframe-DXPQWhz1.js";import{useMDXComponents as i}from"./index-C1DwBM-0.js";import{b as s,C as t,c as l}from"./index-BJ6juixr.js";import{P as d,a as c}from"./Popover.stories-CP2creAf.js";import"./preload-helper-B1AL8F-k.js";import"./index-CC_jMea1.js";import"./index-BXQ_Lgn4.js";import"./index-mlDhLdJR.js";import"./memoTheme-D9UzCdu4.js";import"./Box-BykTXfwr.js";import"./IconButton-C4_GfnK5.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BcXWX_5E.js";import"./useTimeout-BCOHv1ma.js";import"./useForkRef-DmkBCaeW.js";import"./CircularProgress-CmzDTtYu.js";import"./Popover-BpPO1QTv.js";import"./useSlot-RcJ8Pv78.js";import"./mergeSlotProps-D3mBHJrW.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-t_z5bXz_.js";import"./useTheme-D1e0HHbE.js";import"./Fade-C_oDoW-_.js";import"./getReactElementRef-RgX26x0k.js";import"./mergeSlotProps-DACNCT28.js";import"./Modal-0gkIP6eT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DaO0AqW6.js";import"./Paper-UfpP0lyv.js";import"./Typography-c3ptZkCi.js";import"./Button-DsgjN_dC.js";function o(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(n.h1,{id:"popover",children:"Popover"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Popover"})," component displays floating content anchored to a trigger element."]}),`
`,e.jsxs(n.p,{children:["It is built on top of Material UI's ",e.jsx(n.code,{children:"Popover"})," primitive and supports configurable placement, optional arrow indicator, responsive behavior, and accessible trigger attributes."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Built with Material UI ",e.jsx(n.code,{children:"Popover"})]}),`
`,e.jsx(n.li,{children:"Configurable placement"}),`
`,e.jsxs(n.li,{children:["Supports ",e.jsx(n.code,{children:"top"}),", ",e.jsx(n.code,{children:"bottom"}),", ",e.jsx(n.code,{children:"left"}),", ",e.jsx(n.code,{children:"right"})]}),`
`,e.jsxs(n.li,{children:["Supports ",e.jsx(n.code,{children:"-start"})," and ",e.jsx(n.code,{children:"-end"})," placement variants"]}),`
`,e.jsx(n.li,{children:"Auto-flips when there is not enough viewport space"}),`
`,e.jsx(n.li,{children:"Optional arrow indicator"}),`
`,e.jsx(n.li,{children:"Supports arbitrary custom content"}),`
`,e.jsx(n.li,{children:"Closes on click outside"}),`
`,e.jsx(n.li,{children:"Closes on Escape key"}),`
`,e.jsx(n.li,{children:"Mobile responsive layout"}),`
`,e.jsx(n.li,{children:"Accessible trigger attributes"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(t,{children:e.jsx(l,{of:c})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"trigger"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | Required | Element used to open the popover |
| `,e.jsx(n.code,{children:"children"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | Required | Content rendered inside the popover body |
| `,e.jsx(n.code,{children:"placement"})," | ",e.jsx(n.code,{children:"PopoverPlacement"})," | ",e.jsx(n.code,{children:"bottom"}),` | Preferred popover placement |
| `,e.jsx(n.code,{children:"showArrow"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Shows an arrow pointing to the trigger |
| `,e.jsx(n.code,{children:"showCloseButton"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Reserved for close button support |
| `,e.jsx(n.code,{children:"onOpenChange"})," | ",e.jsx(n.code,{children:"(open: boolean) => void"})," | ",e.jsx(n.code,{children:"undefined"})," | Callback fired when the popover open state changes |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"placement-values",children:"Placement Values"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"placement"})," prop supports the following values:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`'top'
'top-start'
'top-end'
'bottom'
'bottom-start'
'bottom-end'
'left'
'left-start'
'left-end'
'right'
'right-start'
'right-end'
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Popover trigger={<Button>Open Popover</Button>}>
  <Typography>Popover content</Typography>
</Popover>
`})}),`
`,e.jsx(n.h3,{id:"with-arrow",children:"With Arrow"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Popover trigger={<Button>Open Popover</Button>} showArrow>
  <Typography>Popover content</Typography>
</Popover>
`})}),`
`,e.jsx(n.h3,{id:"custom-placement",children:"Custom Placement"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Popover trigger={<Button>Open Popover</Button>} placement="top-start">
  <Typography>Popover content</Typography>
</Popover>
`})}),`
`,e.jsx(n.h3,{id:"custom-content",children:"Custom Content"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Popover trigger={<Button>Open Popover</Button>}>
  <Box>
    <Typography variant="subtitle1">Popover title</Typography>
    <Typography variant="body2">
      This is custom content inside the popover.
    </Typography>
  </Box>
</Popover>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"placement-behavior",children:"Placement Behavior"}),`
`,e.jsxs(n.p,{children:["The component uses Material UI ",e.jsx(n.code,{children:"anchorOrigin"})," and ",e.jsx(n.code,{children:"transformOrigin"})," to position the popover relative to its trigger."]}),`
`,e.jsx(n.p,{children:"When there is not enough space in the preferred direction, the component calculates the available viewport space and flips the placement to the opposite side."}),`
`,e.jsx(n.p,{children:"For example:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bottom"})," can flip to ",e.jsx(n.code,{children:"top"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"top"})," can flip to ",e.jsx(n.code,{children:"bottom"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"left"})," can flip to ",e.jsx(n.code,{children:"right"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"right"})," can flip to ",e.jsx(n.code,{children:"left"})]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,e.jsx(n.p,{children:"The Popover was visually tested in Storybook at the following viewport widths:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"320px"}),`
`,e.jsx(n.li,{children:"375px"}),`
`,e.jsx(n.li,{children:"768px"}),`
`,e.jsx(n.li,{children:"1024px"}),`
`]}),`
`,e.jsx(n.p,{children:"On mobile viewports below 600px, the popover renders with a full-width layout and is vertically centered within the viewport."}),`
`,e.jsx(n.p,{children:"On tablet and desktop viewports, the popover remains anchored to the trigger and uses its configured placement."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:"The trigger wrapper includes the following ARIA attributes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'aria-haspopup="dialog"'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"aria-expanded"})}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"aria-expanded"})," value updates based on the popover open state."]}),`
`,e.jsxs(n.p,{children:["The popover content is rendered with ",e.jsx(n.code,{children:'role="dialog"'}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"styling",children:"Styling"}),`
`,e.jsx(n.p,{children:"The component uses Material UI styling APIs and design tokens."}),`
`,e.jsx(n.p,{children:"Styling is implemented with:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["MUI ",e.jsx(n.code,{children:"styled()"})]}),`
`,e.jsxs(n.li,{children:["MUI ",e.jsx(n.code,{children:"sx"})," through slot props"]}),`
`,e.jsx(n.li,{children:"CSS design tokens"}),`
`,e.jsx(n.li,{children:"MUI theme spacing"}),`
`,e.jsx(n.li,{children:"MUI breakpoints"}),`
`]}),`
`,e.jsx(n.p,{children:"No external CSS files are used."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"design-notes",children:"Design Notes"}),`
`,e.jsx(n.p,{children:"The component uses the project design tokens for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Popover background"}),`
`,e.jsx(n.li,{children:"Text color"}),`
`,e.jsx(n.li,{children:"Border"}),`
`,e.jsx(n.li,{children:"Shadow"}),`
`,e.jsx(n.li,{children:"Border radius"}),`
`]}),`
`,e.jsx(n.p,{children:"The Storybook trigger button was visually aligned with the Figma reference using a neutral outlined style, normal text casing, border radius, and theme-based spacing."}),`
`,e.jsx(n.p,{children:"Figma design fidelity was visually checked in Storybook using the available reference."})]})}function L(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{L as default};
