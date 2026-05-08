import{j as e}from"./iframe-Dyr5I5GH.js";import{useMDXComponents as t}from"./index-Dt00vGRK.js";import{M as o,b as i,C as l}from"./index-CYxhOHk1.js";import{L as d,D as a,R as c,O as h,E as p,a as x,W as j,b as m,P as u,N as b,A as f}from"./Label.stories-CwzXcW4T.js";import"./preload-helper-BmzZtkUX.js";import"./index-LJq_7nnR.js";import"./index-fc76_gB8.js";import"./index-CWlzbgcs.js";import"./InfoOutlined-CTOvjxB7.js";import"./createSvgIcon-CgiLK4IB.js";import"./memoTheme-CXibW_gT.js";import"./TextField-kbj-6jXG.js";import"./useSlot-D0tuFnfX.js";import"./mergeSlotProps-bIgk81xr.js";import"./useForkRef-1XJZbfBS.js";import"./FormHelperText-BKKD6OMw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Portal-I2JIczmT.js";import"./getReactElementRef-CRDhuVcx.js";import"./useTimeout-CJKakJUl.js";import"./List-ClNqA6Qk.js";import"./Menu-eMbSNKIN.js";import"./useSlotProps-BV031XLm.js";import"./Paper-FL8v-eHP.js";import"./useTheme-BBOAo0mZ.js";import"./Fade-DsXZ8ydM.js";import"./mergeSlotProps-DFCE0PnB.js";import"./Modal-BUXzry8C.js";import"./useControlled-_97wmq5P.js";import"./Typography-Bo4XnKr5.js";import"./IconButton-BQGfETBe.js";import"./ButtonBase-rgM-leWU.js";import"./CircularProgress-Ckvf1fmi.js";import"./Popper-C5UEuuUB.js";import"./Box-CTw2c_om.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(n.h1,{id:"label",children:"Label"}),`
`,e.jsxs(n.p,{children:["An ",e.jsx(n.strong,{children:"accessible"}),", ",e.jsx(n.strong,{children:"responsive"}),", and ",e.jsx(n.strong,{children:"theme-aware"}),` form label component
built on top of MUI `,e.jsx(n.code,{children:"InputLabel"}),"."]}),`
`,e.jsx(n.p,{children:"The component supports common form-label states such as:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"required"}),`
`,e.jsx(n.li,{children:"optional"}),`
`,e.jsx(n.li,{children:"error"}),`
`,e.jsx(n.li,{children:"disabled"}),`
`,e.jsx(n.li,{children:"tooltip messaging"}),`
`]}),`
`,e.jsx(n.p,{children:`It is designed as a lightweight presentational atom that integrates seamlessly
with form controls and accessibility workflows.`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Label"}),` component visually and programmatically associates itself
with form controls through the `,e.jsx(n.code,{children:"htmlFor"})," prop."]}),`
`,e.jsxs(n.p,{children:[`| State      | Description                                      |
| ----------- | ------------------------------------------------ |
| `,e.jsx(n.code,{children:"required"}),` | Displays required indicator and accessibility metadata |
| `,e.jsx(n.code,{children:"optional"}),` | Displays optional helper text                    |
| `,e.jsx(n.code,{children:"error"}),`    | Applies error styling from the theme             |
| `,e.jsx(n.code,{children:"disabled"}),` | Applies disabled visual state                    |
| `,e.jsx(n.code,{children:"tooltip"}),"  | Displays contextual helper information           |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Already available in your project
# Requires MUI v7

yarn add @mui/material @emotion/react @emotion/styled
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"quick-start",children:"Quick Start"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Label from './Label';

export default function Example() {
  return (
    <>
      <Label
        htmlFor="email-input"
        required
      >
        Email address
      </Label>

      <input
        id="email-input"
        type="email"
        required
      />
    </>
  );
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"stories",children:"Stories"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(n.h3,{id:"required",children:"Required"}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h3,{id:"optional",children:"Optional"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"error",children:"Error"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h3,{id:"with-tooltip",children:"With Tooltip"}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h3,{id:"required-error-with-tooltip",children:"Required Error With Tooltip"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"paired-with-input",children:"Paired With Input"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h3,{id:"narrow-viewport",children:"Narrow Viewport"}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(n.h3,{id:"all-states",children:"All States"}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"controls",children:"Controls"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"prop-reference",children:"Prop Reference"}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `,e.jsx(n.code,{children:"htmlFor"})," | ",e.jsx(n.code,{children:"string"})," | — | ",e.jsx(n.strong,{children:"Required."}),` Associates label with input id |
| `,e.jsx(n.code,{children:"children"})," | ",e.jsx(n.code,{children:"React.ReactNode"}),` | — | Label content |
| `,e.jsx(n.code,{children:"required"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Displays required indicator |
| `,e.jsx(n.code,{children:"optional"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Displays optional helper text |
| `,e.jsx(n.code,{children:"error"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Applies error visual state |
| `,e.jsx(n.code,{children:"disabled"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Applies disabled state |
| `,e.jsx(n.code,{children:"tooltip"})," | ",e.jsx(n.code,{children:"string"})," | — | Tooltip helper content |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"htmlFor"})," associates the label with its target form control."]}),`
`,e.jsxs(n.li,{children:["Required fields propagate ",e.jsx(n.code,{children:'aria-required="true"'}),"."]}),`
`,e.jsxs(n.li,{children:["Required indicators use ",e.jsx(n.code,{children:'aria-hidden="true"'})," to prevent duplicate announcements."]}),`
`,e.jsx(n.li,{children:"Tooltip buttons expose accessible labels."}),`
`,e.jsx(n.li,{children:"Tooltip interactions support keyboard navigation."}),`
`,e.jsx(n.li,{children:"Compatible with screen readers and keyboard-only interaction."}),`
`,e.jsx(n.li,{children:"Wrapped labels remain readable in narrow layouts."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"responsive-behaviour",children:"Responsive Behaviour"}),`
`,e.jsx(n.p,{children:`| Viewport | Behaviour |
| -------- | ---------- |
| 320 px | Wrapped label text without clipping |
| 375 px | Comfortable spacing and inline layout |
| 768 px | Stable alignment with form controls |
| 1024 px+ | Inline layout within wider forms |`}),`
`,e.jsx(n.p,{children:"All spacing and typography values are derived from the MUI theme."}),`
`,e.jsx(n.p,{children:"No external CSS is required."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"design-notes",children:"Design Notes"}),`
`,e.jsx(n.p,{children:"The component uses:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["MUI ",e.jsx(n.code,{children:"InputLabel"})]}),`
`,e.jsxs(n.li,{children:["MUI ",e.jsx(n.code,{children:"styled()"})]}),`
`,e.jsx(n.li,{children:"Theme typography tokens"}),`
`,e.jsx(n.li,{children:"Theme spacing tokens"}),`
`,e.jsx(n.li,{children:"Theme palette values"}),`
`]}),`
`,e.jsx(n.p,{children:"The tooltip state is internally managed through a dedicated custom hook."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"file-structure",children:"File Structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`Label/
├── Label.tsx
├── Label.types.ts
├── Label.constants.ts
├── Label.hook.ts
├── Label.styles.ts
├── Label.utils.ts
├── Label.test.tsx
├── Label.stories.tsx
└── Label.docs.mdx
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"stack",children:"Stack"}),`
`,e.jsxs(n.p,{children:[`| Package | Role |
| --- | --- |
| `,e.jsx(n.code,{children:"@mui/material"}),` v7 | InputLabel, Tooltip, IconButton |
| `,e.jsx(n.code,{children:"@emotion/react"}),` | CSS-in-JS runtime |
| `,e.jsx(n.code,{children:"@emotion/styled"}),` | Styled components |
| `,e.jsx(n.code,{children:"react"}),` | Component rendering |
| `,e.jsx(n.code,{children:"vitest"}),` | Unit testing |
| `,e.jsx(n.code,{children:"@testing-library/react"}),` | Accessibility and interaction testing |
| `,e.jsx(n.code,{children:"storybook"})," | Interactive component documentation |"]})]})}function ee(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{ee as default};
