import{j as e}from"./iframe-Cf17G9ph.js";import{useMDXComponents as o}from"./index-BZNdjGFL.js";import{M as l,A as d,b as i}from"./index-C55VZPgt.js";import{L as r,D as a,R as c,O as h,E as p,a as x,W as j,P as u,N as m,A as b}from"./Label.stories-DG8uK31z.js";import"./preload-helper-BmzZtkUX.js";import"./index-CSVSyRgj.js";import"./index-DdQl22B4.js";import"./index-CYCNLaqT.js";import"./InfoOutlined-kcY2owrh.js";import"./createSvgIcon-D-qtpTxG.js";import"./memoTheme-JgGvtxKZ.js";import"./TextField-Bi9reTAO.js";import"./useSlot-DNDXjemC.js";import"./mergeSlotProps-Drs--O44.js";import"./useForkRef-B1tAKSWF.js";import"./FormHelperText-B16ET2dv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Portal-CcbOyX_Z.js";import"./getReactElementRef-BLUD3pXT.js";import"./useTimeout-Do6GUb_M.js";import"./List-5HoOodNp.js";import"./Menu-DRF_kKD_.js";import"./useSlotProps-ckAqJi_C.js";import"./Paper-IKYurK_f.js";import"./useTheme-DMzThJR_.js";import"./Fade-DfiRTl68.js";import"./mergeSlotProps-DvmoKO_n.js";import"./Modal-DLh-b5pv.js";import"./useControlled-JnU9I825.js";import"./Typography-DiOueTg2.js";import"./Popper-Bsa_l72l.js";import"./ButtonBase-_5mOcEow.js";import"./IconButton-ChRYDwGB.js";import"./CircularProgress-B0BF8rN8.js";import"./Box-CDqaOus5.js";function s(t){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(l,{of:r}),`
`,e.jsx(n.h1,{id:"label",children:"Label"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Label"})," component renders an accessible form label that programmatically and visually associates with its input control. It is a ",e.jsx(n.strong,{children:"pure presentational atom"})," built on top of MUI ",e.jsx(n.code,{children:"InputLabel"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Label from '@/components/Label';

<Label htmlFor="email-input" required>
  Email address
</Label>
<input id="email-input" type="email" required />
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.p,{children:[`| Feature | Prop | Behaviour |
|---|---|---|
| Required indicator | `,e.jsx(n.code,{children:"required"})," | Appends a red ",e.jsx(n.code,{children:"*"})," glyph; sets ",e.jsx(n.code,{children:'aria-required="true"'})," on the ",e.jsx(n.code,{children:"<label>"}),` |
| Optional hint | `,e.jsx(n.code,{children:"optional"})," | Appends a grey italic ",e.jsx(n.code,{children:"(optional)"}),` span |
| Error state | `,e.jsx(n.code,{children:"error"})," | Text rendered in ",e.jsx(n.code,{children:"theme.palette.error.main"}),` |
| Disabled state | `,e.jsx(n.code,{children:"disabled"})," | Reduced opacity via MUI ",e.jsx(n.code,{children:"Mui-disabled"}),` class |
| Contextual tooltip | `,e.jsx(n.code,{children:"tooltip"})," | Renders an info icon button; tooltip opens on hover, focus, or tap |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," ",e.jsx(n.code,{children:"required"})," and ",e.jsx(n.code,{children:"optional"})," are mutually exclusive. If both are set, ",e.jsx(n.code,{children:"required"})," takes precedence and ",e.jsx(n.code,{children:"optional"})," is suppressed."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"htmlFor"})," prop ",e.jsx(n.strong,{children:"must"})," match the ",e.jsx(n.code,{children:"id"})," of the associated input — this creates the programmatic association required by WCAG 1.3.1 (Info and Relationships)."]}),`
`,e.jsxs(n.li,{children:["When ",e.jsx(n.code,{children:"required"})," is true, ",e.jsx(n.code,{children:'aria-required="true"'})," is set on the ",e.jsx(n.code,{children:"<label>"})," so screen readers announce the constraint even before the user interacts with the field."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"*"})," glyph is wrapped in ",e.jsx(n.code,{children:'aria-hidden="true"'})," to prevent double-announcement (the ",e.jsx(n.code,{children:"aria-required"})," attribute is the canonical signal)."]}),`
`,e.jsxs(n.li,{children:["The tooltip icon has an accessible ",e.jsx(n.code,{children:"aria-label"})," (",e.jsx(n.code,{children:'"More information"'}),") and is reachable by keyboard (",e.jsx(n.code,{children:"Tab"}),") and touch (",e.jsx(n.code,{children:"enterTouchDelay={0}"}),")."]}),`
`,e.jsxs(n.li,{children:["All text sizing uses ",e.jsx(n.code,{children:"rem"}),"-based MUI typography tokens, so the component respects OS-level font scaling (tested at 200%)."]}),`
`,e.jsx(n.li,{children:"No content truncates at a 320 px viewport width."}),`
`]}),`
`,e.jsx(n.h3,{id:"axe--aria-checklist",children:"axe / ARIA checklist"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["[x] ",e.jsx(n.code,{children:"<label>"})," element with valid ",e.jsx(n.code,{children:"for"})," attribute"]}),`
`,e.jsxs(n.li,{children:["[x] ",e.jsx(n.code,{children:"aria-required"})," propagated correctly"]}),`
`,e.jsx(n.li,{children:"[x] No orphaned ARIA attributes"}),`
`,e.jsx(n.li,{children:"[x] Tooltip icon has an accessible name"}),`
`,e.jsx(n.li,{children:"[x] Color contrast meets WCAG AA at all states"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(d,{of:r}),`
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
`,e.jsx(n.h3,{id:"paired-with-input",children:"Paired with Input"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h3,{id:"narrow-viewport-320-px",children:"Narrow Viewport (320 px)"}),`
`,e.jsx(n.p,{children:"Validates that no text is clipped or overflows at the minimum supported viewport width."}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"all-states",children:"All States"}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"design-tokens",children:"Design tokens"}),`
`,e.jsxs(n.p,{children:["The component exclusively uses MUI theme tokens — no hardcoded ",e.jsx(n.code,{children:"px"})," values."]}),`
`,e.jsxs(n.p,{children:[`| Token | Usage |
|---|---|
| `,e.jsx(n.code,{children:"theme.typography.body2"}),` | Base font size and line-height |
| `,e.jsx(n.code,{children:"theme.typography.caption"}),` | Optional hint text |
| `,e.jsx(n.code,{children:"theme.typography.fontWeightMedium"}),` | Label font weight |
| `,e.jsx(n.code,{children:"theme.palette.text.primary"}),` | Default text colour |
| `,e.jsx(n.code,{children:"theme.palette.text.secondary"}),` | Optional hint colour |
| `,e.jsx(n.code,{children:"theme.palette.error.main"})," | Required ",e.jsx(n.code,{children:"*"}),` and error state colour |
| `,e.jsx(n.code,{children:"theme.spacing(…)"})," | All internal gaps and padding |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"file-structure",children:"File structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Label/
├── Label.tsx              # Main component logic & JSX
├── Label.types.ts         # Props interface extending MUI InputLabelProps
├── Label.constants.ts     # Required / optional indicator strings
├── Label.hook.ts          # useLabelTooltip – tooltip open/close state
├── Label.styles.ts        # MUI styled() components – no external CSS, no px
├── Label.utils.ts         # resolveRequiredOptional, buildAccessibleLabel
├── Label.test.tsx         # Unit tests – Jest / Testing Library + axe
├── Label.stories.tsx      # Storybook stories (CSF)
└── Label.docs.mdx         # This file
`})})]})}function $(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{$ as default};
