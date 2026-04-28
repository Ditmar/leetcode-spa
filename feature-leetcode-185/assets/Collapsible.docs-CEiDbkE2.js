import{j as e}from"./iframe-D0HkvEHP.js";import{useMDXComponents as s}from"./index-Cbjct9rS.js";import{M as i,b as r}from"./index-xXu7pgVG.js";import{C as l,F as d}from"./Collapsible.stories-CWvfOu0q.js";import"./preload-helper-MFNisOH2.js";import"./index-BMSJT8AP.js";import"./index-IiRFyfvg.js";import"./index-v4NybTwY.js";import"./Add-6D7hp2fJ.js";import"./createSvgIcon-BnV1oUBR.js";import"./memoTheme-Hsc52r-A.js";import"./Box-TCVWWiWR.js";import"./Stack-DPRYCYXi.js";import"./useThemeProps-CRu9T20H.js";import"./getThemeProps-CJ8sQshv.js";import"./Button-LycMiH8e.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-H1gWxVb_.js";import"./useTimeout-3kA3z-RC.js";import"./CircularProgress-DJQ4eoGA.js";import"./Typography-illqdCI_.js";import"./Collapse-MgvyGjdT.js";import"./useTheme-B22OZGoF.js";import"./Fade-BvmIn5aT.js";import"./getReactElementRef-CK2Bjofv.js";import"./TextField-B_6V3AI5.js";import"./useSlot-B4lfjjg-.js";import"./mergeSlotProps-CuXO47av.js";import"./FormHelperText-P8PG9ABD.js";import"./Portal-D2paBl2C.js";import"./List-BsSDYQES.js";import"./Menu-DGPG3E0_.js";import"./useSlotProps-Cv0xJV8U.js";import"./Paper-C1g9NM_N.js";import"./mergeSlotProps-CQKZxvof.js";import"./Modal-CZvVXEDX.js";import"./useControlled-DdcNjyed.js";function t(o){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(n.h1,{id:"collapsible",children:"Collapsible"}),`
`,e.jsxs(n.p,{children:["An accessible accordion component that shows or hides content with a smooth animation. It supports both ",e.jsx(n.strong,{children:"controlled"})," and ",e.jsx(n.strong,{children:"uncontrolled"})," modes, and is fully compatible with screen readers through its ARIA attributes."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"preview",children:"Preview"}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"installation--usage",children:"Installation & Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Collapsible from './Collapsible';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Collapsible title="@peduarte starred 3 repositories">
  <p>Hidden content goes here</p>
</Collapsible>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:[`| Prop           | Type                        | Default                              | Description                                                    |
|----------------|-----------------------------|--------------------------------------|----------------------------------------------------------------|
| `,e.jsx(n.code,{children:"title"}),"        | ",e.jsx(n.code,{children:"string"}),"                    | ",e.jsx(n.code,{children:"'@peduarte starred 3 repositories'"})," | Header text displayed when ",e.jsx(n.code,{children:"headerSlot"}),` is not provided.       |
| `,e.jsx(n.code,{children:"headerSlot"}),"   | ",e.jsx(n.code,{children:"ReactNode"}),"                 | ",e.jsx(n.code,{children:"undefined"}),`                          | Replaces the entire header content with a custom node.         |
| `,e.jsx(n.code,{children:"children"}),"     | ",e.jsx(n.code,{children:"ReactNode"}),"                 | —                                    | ",e.jsx(n.em,{children:"(Required)"}),` Collapsible content that is shown or hidden.      |
| `,e.jsx(n.code,{children:"open"}),"         | ",e.jsx(n.code,{children:"boolean"}),"                   | ",e.jsx(n.code,{children:"undefined"}),`                          | Controls the open/closed state externally (controlled mode).   |
| `,e.jsx(n.code,{children:"onOpenChange"})," | ",e.jsx(n.code,{children:"(isOpen: boolean) => void"})," | ",e.jsx(n.code,{children:"undefined"}),`                          | Callback fired whenever the open state changes.                |
| `,e.jsx(n.code,{children:"defaultOpen"}),"  | ",e.jsx(n.code,{children:"boolean"}),"                   | ",e.jsx(n.code,{children:"false"}),`                              | Initial open state in uncontrolled mode.                       |
| `,e.jsx(n.code,{children:"...BoxProps"}),"  | ",e.jsx(n.code,{children:"BoxProps"}),"                  | —                                    | All MUI ",e.jsx(n.code,{children:"Box"})," props are valid (e.g. ",e.jsx(n.code,{children:"sx"}),", ",e.jsx(n.code,{children:"className"}),").        |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," The component extends MUI's ",e.jsx(n.code,{children:"BoxProps"}),", so any valid ",e.jsx(n.code,{children:"Box"})," prop can be passed to the outer wrapper."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"how-it-works",children:"How It Works"}),`
`,e.jsx(n.h3,{id:"state--control",children:"State & Control"}),`
`,e.jsxs(n.p,{children:["The component implements the ",e.jsx(n.strong,{children:"controlled / uncontrolled"})," pattern:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Uncontrolled mode"})," (default): maintains its own internal state via ",e.jsx(n.code,{children:"useState"}),". The initial value is set by ",e.jsx(n.code,{children:"defaultOpen"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Controlled mode"}),": when the ",e.jsx(n.code,{children:"open"})," prop is provided, the external state takes priority over the internal one. The component does not modify its internal state and delegates control to the parent."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
`})}),`
`,e.jsx(n.h3,{id:"controlled-mode-example",children:"Controlled mode example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [open, setOpen] = useState(false);

<Collapsible
  title="External control"
  open={open}
  onOpenChange={setOpen}
>
  <p>State is managed by the parent.</p>
</Collapsible>
`})}),`
`,e.jsx(n.h3,{id:"accessibility-aria",children:"Accessibility (ARIA)"}),`
`,e.jsx(n.p,{children:"The component follows the WAI-ARIA disclosure pattern:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The toggle button has ",e.jsx(n.code,{children:"aria-expanded"})," to indicate whether the panel is open."]}),`
`,e.jsxs(n.li,{children:["The button has ",e.jsx(n.code,{children:"aria-controls"})," pointing to the ",e.jsx(n.code,{children:"id"})," of the content region."]}),`
`,e.jsxs(n.li,{children:["The header has a unique ",e.jsx(n.code,{children:"id"})," and the content region has ",e.jsx(n.code,{children:"aria-labelledby"})," pointing back to it."]}),`
`,e.jsxs(n.li,{children:["IDs are generated uniquely via React's ",e.jsx(n.code,{children:"useId()"})," hook to prevent collisions across multiple instances."]}),`
`]}),`
`,e.jsx(n.h3,{id:"animation",children:"Animation"}),`
`,e.jsxs(n.p,{children:["The content uses MUI's ",e.jsx(n.code,{children:"Collapse"})," component, which applies a smooth CSS height transition when showing or hiding."]}),`
`,e.jsx(n.h3,{id:"button-icon",children:"Button Icon"}),`
`,e.jsxs(n.p,{children:["The black toggle button (",e.jsx(n.code,{children:"BlackButton"}),") renders:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<AddIcon />"})," when the panel is ",e.jsx(n.strong,{children:"closed"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<RemoveIcon />"})," when the panel is ",e.jsx(n.strong,{children:"open"})]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"styles",children:"Styles"}),`
`,e.jsxs(n.p,{children:["Styles are defined in ",e.jsx(n.code,{children:"Collapsible.styles.ts"})," using MUI's ",e.jsx(n.code,{children:"styled"}),":"]}),`
`,e.jsxs(n.p,{children:[`| Component    | Description                                                                  |
|--------------|------------------------------------------------------------------------------|
| `,e.jsx(n.code,{children:"StyledCard"}),` | Main container. White background, border, padding, and a max-width of 400px. |
| `,e.jsx(n.code,{children:"Header"}),`     | Flex row between the title and the toggle button. Minimum height of 44px.   |
| `,e.jsx(n.code,{children:"BlackButton"}),"| Square black button with no additional state-based styles.                   |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tests",children:"Tests"}),`
`,e.jsxs(n.p,{children:["Tests are located in ",e.jsx(n.code,{children:"Collapsible.test.tsx"})," and cover:"]}),`
`,e.jsxs(n.p,{children:[`| Test                                   | Description                                                                        |
|----------------------------------------|------------------------------------------------------------------------------------|
| Toggle visibility and `,e.jsx(n.code,{children:"aria-expanded"}),"  | Verifies that clicking the button changes ",e.jsx(n.code,{children:"aria-expanded"})," from ",e.jsx(n.code,{children:"false"})," to ",e.jsx(n.code,{children:"true"}),`.  |
| `,e.jsx(n.code,{children:"onOpenChange"})," callback                | Checks that the callback is called with the new state (",e.jsx(n.code,{children:"true"}),`) when opening.       |
| ARIA link between trigger and content  | Verifies that the button's `,e.jsx(n.code,{children:"aria-controls"})," points to the region containing the content. |"]}),`
`,e.jsx(n.p,{children:"Run the tests:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`vitest
`})})]})}function z(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{z as default};
