import{j as e}from"./iframe-DfLWDqDJ.js";import{useMDXComponents as l}from"./index-BLbCCx8a.js";import{M as o,b as i,C as t}from"./index-DP8hkSD0.js";import{L as d,D as a,R as c,O as h,E as x,a as p,W as j,b as m,P as u,N as b,A as g}from"./Label.stories-_2g1AZL_.js";import"./preload-helper-BmzZtkUX.js";import"./index-6P7sjQ0E.js";import"./index-WtRTaarv.js";import"./index-CjEZTRM4.js";import"./InfoOutlined-A394eD5K.js";import"./createSvgIcon-C9an_9YP.js";import"./memoTheme-DSYgZtCL.js";import"./TextField-Bo98U-sy.js";import"./useSlot-xVhPEk6t.js";import"./mergeSlotProps-DseW0rMb.js";import"./useForkRef-UXtfxQKB.js";import"./FormHelperText--D0cXTmM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Portal-BxZY6vdx.js";import"./getReactElementRef-D_H67cyK.js";import"./useTimeout-DLqEjcIC.js";import"./List-CSGqmk68.js";import"./Menu-Dm5Z9q-Z.js";import"./useSlotProps-CQvGK1fa.js";import"./Paper-C76kiyuB.js";import"./useTheme-DiBZP2sb.js";import"./Fade-D2xTkR4-.js";import"./mergeSlotProps-C1gKPjX1.js";import"./Modal-BZv9oB1D.js";import"./useControlled-mEu-2hbj.js";import"./Typography-Bcm6SQNp.js";import"./IconButton-CWAKJS3F.js";import"./ButtonBase-B2UZJXZw.js";import"./CircularProgress-CZrWhECa.js";import"./Popper-u6ebF8xc.js";import"./Box-B5aEYy2o.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d,title:"Component Catalog/Label/Docs"}),`
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
`,e.jsx(n.h1,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Accessible form labeling"}),`
`,e.jsx(n.li,{children:"Fully responsive layout"}),`
`,e.jsx(n.li,{children:"Theme-aware styling"}),`
`,e.jsx(n.li,{children:"Optional tooltip support"}),`
`,e.jsx(n.li,{children:"Required and optional indicators"}),`
`,e.jsx(n.li,{children:"Error and disabled states"}),`
`,e.jsx(n.li,{children:"Keyboard accessible interactions"}),`
`,e.jsx(n.li,{children:"Compatible with MUI form controls"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h1,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Label"}),` component visually and programmatically associates itself
with form controls through the `,e.jsx(n.code,{children:"htmlFor"})," prop."]}),`
`,e.jsxs(n.p,{children:[`| State | Description |
| --- | --- |
| `,e.jsx(n.code,{children:"required"}),` | Displays required indicator and accessibility metadata |
| `,e.jsx(n.code,{children:"optional"}),` | Displays optional helper text |
| `,e.jsx(n.code,{children:"error"}),` | Applies error styling from the theme |
| `,e.jsx(n.code,{children:"disabled"}),` | Applies disabled visual state |
| `,e.jsx(n.code,{children:"tooltip"})," | Displays contextual helper information |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h1,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add @mui/material @emotion/react @emotion/styled
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h1,{id:"quick-start",children:"Quick Start"}),`
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
`,e.jsx(n.h1,{id:"stories",children:"Stories"}),`
`,e.jsx(n.h2,{id:"default",children:"Default"}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"required",children:"Required"}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"optional",children:"Optional"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"error",children:"Error"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"with-tooltip",children:"With Tooltip"}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"required-error-with-tooltip",children:"Required Error With Tooltip"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"paired-with-input",children:"Paired With Input"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"narrow-viewport",children:"Narrow Viewport"}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"all-states",children:"All States"}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h1,{id:"controls",children:"Controls"}),`
`,e.jsx(t,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h1,{id:"prop-reference",children:"Prop Reference"}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `,e.jsx(n.code,{children:"htmlFor"})," | ",e.jsx(n.code,{children:"string"}),` | — | Required. Associates label with input id |
| `,e.jsx(n.code,{children:"children"})," | ",e.jsx(n.code,{children:"React.ReactNode"}),` | — | Label content |
| `,e.jsx(n.code,{children:"required"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Displays required indicator |
| `,e.jsx(n.code,{children:"optional"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Displays optional helper text |
| `,e.jsx(n.code,{children:"error"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Applies error visual state |
| `,e.jsx(n.code,{children:"disabled"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Applies disabled state |
| `,e.jsx(n.code,{children:"tooltip"})," | ",e.jsx(n.code,{children:"string"})," | — | Tooltip helper content |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h1,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"htmlFor"})," associates the label with its target form control"]}),`
`,e.jsxs(n.li,{children:["Required fields propagate ",e.jsx(n.code,{children:'aria-required="true"'})]}),`
`,e.jsxs(n.li,{children:["Required indicators use ",e.jsx(n.code,{children:'aria-hidden="true"'})]}),`
`,e.jsx(n.li,{children:"Tooltip buttons expose accessible labels"}),`
`,e.jsx(n.li,{children:"Tooltip interactions support keyboard navigation"}),`
`,e.jsx(n.li,{children:"Accessibility behaviour validated with Testing Library"}),`
`,e.jsx(n.li,{children:"Wrapped labels remain readable in narrow layouts"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h1,{id:"responsive-behaviour",children:"Responsive Behaviour"}),`
`,e.jsxs(n.p,{children:[`| Viewport | Behaviour |
| --- | --- |
| `,e.jsx(n.code,{children:"320px"}),` | Wrapped label text without clipping |
| `,e.jsx(n.code,{children:"375px"}),` | Comfortable spacing and inline layout |
| `,e.jsx(n.code,{children:"768px"}),` | Stable alignment with form controls |
| `,e.jsx(n.code,{children:"1024px+"})," | Inline layout within wider forms |"]}),`
`,e.jsx(n.p,{children:"All spacing and typography values are derived from the MUI theme."}),`
`,e.jsx(n.p,{children:"No external CSS is required."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h1,{id:"design-notes",children:"Design Notes"}),`
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
`,e.jsx(n.h1,{id:"file-structure",children:"File Structure"}),`
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
`,e.jsx(n.h1,{id:"stack",children:"Stack"}),`
`,e.jsxs(n.p,{children:[`| Package | Role |
| --- | --- |
| `,e.jsx(n.code,{children:"@mui/material"}),` v7 | InputLabel, Tooltip, IconButton |
| `,e.jsx(n.code,{children:"@emotion/react"}),` | CSS-in-JS runtime |
| `,e.jsx(n.code,{children:"@emotion/styled"}),` | Styled components |
| `,e.jsx(n.code,{children:"react"}),` | Component rendering |
| `,e.jsx(n.code,{children:"vitest"}),` | Unit testing |
| `,e.jsx(n.code,{children:"@testing-library/react"}),` | Accessibility and interaction testing |
| `,e.jsx(n.code,{children:"storybook"})," | Interactive component documentation |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h1,{id:"troubleshooting",children:"Troubleshooting"}),`
`,e.jsx(n.h2,{id:"if-the-storybook-docs-page-does-not-appear",children:"If the Storybook Docs page does not appear"}),`
`,e.jsx(n.p,{children:"Verify the following:"}),`
`,e.jsx(n.h3,{id:"1-story-export-exists",children:"1. Story Export Exists"}),`
`,e.jsx(n.p,{children:"Ensure all stories are exported correctly in:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`Label.stories.tsx
`})}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const Default = {};
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"2-storybook-main-configuration",children:"2. Storybook Main Configuration"}),`
`,e.jsxs(n.p,{children:["Ensure ",e.jsx(n.code,{children:".storybook/main.ts"})," contains:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`stories: [
  '../src/**/*.mdx',
  '../src/**/*.stories.@(js|jsx|ts|tsx)',
];
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"3-build-validation",children:"3. Build Validation"}),`
`,e.jsx(n.p,{children:"Run:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn build-storybook
`})}),`
`,e.jsx(n.p,{children:"If this command fails, the PR preview deployment will fail as well."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"4-linux-filename-validation",children:"4. Linux Filename Validation"}),`
`,e.jsx(n.p,{children:"Ensure filenames match exactly:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`Label.docs.mdx
`})}),`
`,e.jsx(n.p,{children:"Avoid mismatched casing like:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`label.docs.mdx
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"5-verify-storybook-deploy",children:"5. Verify Storybook Deploy"}),`
`,e.jsx(n.p,{children:"Check GitHub Actions or Chromatic build logs for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"MDX parsing errors"}),`
`,e.jsx(n.li,{children:"Missing exports"}),`
`,e.jsx(n.li,{children:"Invalid imports"}),`
`,e.jsx(n.li,{children:"Story loading failures"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h1,{id:"recommended-story-export-structure",children:"Recommended Story Export Structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Component Catalog/Label',
  component: Label,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Email',
    htmlFor: 'email',
  },
};
`})})]})}function ee(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{ee as default};
