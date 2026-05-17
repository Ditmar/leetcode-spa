import{A as e}from"./iframe-DevceBcn.js";import{useMDXComponents as i}from"./index-BUQwh5lD.js";import{b as s,P as l,a as d}from"./index-CLLPJPqk.js";import{R as t}from"./RadioGroup.stories-DW1VYrpX.js";import"./preload-helper-BSJmP7H2.js";import"./index-7zXfBPhA.js";import"./index-MLVgvdvf.js";import"./index-CwO39Xyl.js";import"./FormHelperText-CEgJ2894.js";import"./memoTheme-UjN-HeIc.js";import"./FormLabel-DBiKxBXI.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./RadioGroup-Ccz6MS_r.js";import"./FormControlLabel-BzTcxu_6.js";import"./useSlot-GnPlo1r3.js";import"./mergeSlotProps-An83cmy8.js";import"./useForkRef-CJgv2lof.js";import"./useControlled-CGUOpv1W.js";import"./ButtonBase-DfZp4ZDE.js";import"./useTimeout-CKE4LsfJ.js";import"./Typography-B0Ol6CM0.js";import"./createSvgIcon-D_1dbQzy.js";import"./createChainedFunction-BO_9K8Jh.js";function r(n){const o={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:t}),`
`,e.jsx(o.h1,{id:"radiogroup",children:"RadioGroup"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"RadioGroup"})," component lets users select a single option from a list. Built on top of MUI's ",e.jsx(o.code,{children:"RadioGroup"}),", it adds responsive layout switching, group-level disable, required state, and custom Figma-spec radio icons."]}),`
`,e.jsx(o.hr,{}),`
`,e.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { RadioGroup } from "./RadioGroup";

const options = [
  { label: "Option One", value: "1" },
  { label: "Option Two", value: "2" },
];

<RadioGroup
  label="Pick an option"
  options={options}
  direction="column"
/>
`})}),`
`,e.jsx(o.hr,{}),`
`,e.jsx(o.h2,{id:"controlled-usage",children:"Controlled usage"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { RadioGroup } from "./RadioGroup";
import { useRadioGroup } from "./RadioGroup.hook";

export const ControlledExample = () => {
  const { value, onChange } = useRadioGroup({ defaultValue: "1" });

  return (
    <RadioGroup
      label="Controlled group"
      options={[
        { label: "Option One", value: "1" },
        { label: "Option Two", value: "2" },
      ]}
      value={value}
      onChange={onChange}
    />
  );
};
`})}),`
`,e.jsx(o.hr,{}),`
`,e.jsx(o.h2,{id:"default-story",children:"Default story"}),`
`,e.jsx(l,{}),`
`,e.jsx(d,{}),`
`,e.jsx(o.hr,{}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsxs(o.p,{children:[`| Prop | Type | Default | Description |
|---|---|---|---|
| `,e.jsx(o.code,{children:"options"})," | ",e.jsx(o.code,{children:"Option[]"}),` | — | Array of radio options to render |
| `,e.jsx(o.code,{children:"label"})," | ",e.jsx(o.code,{children:"string"})," | — | Group label rendered as ",e.jsx(o.code,{children:"FormLabel"}),` |
| `,e.jsx(o.code,{children:"helperText"})," | ",e.jsx(o.code,{children:"string"}),` | — | Helper text below the group |
| `,e.jsx(o.code,{children:"error"})," | ",e.jsx(o.code,{children:"boolean"})," | ",e.jsx(o.code,{children:"false"}),` | Puts the group in an error state |
| `,e.jsx(o.code,{children:"direction"})," | ",e.jsx(o.code,{children:'"row" \\| "column"'})," | ",e.jsx(o.code,{children:'"column"'}),` | Layout direction on desktop (always column on mobile) |
| `,e.jsx(o.code,{children:"disabled"})," | ",e.jsx(o.code,{children:"boolean"})," | ",e.jsx(o.code,{children:"false"}),` | Disables the entire group |
The component also forwards all native MUI `,e.jsx(o.code,{children:"RadioGroupProps"}),"."]}),`
`,e.jsx(o.hr,{}),`
`,e.jsx(o.h2,{id:"option-shape",children:"Option shape"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}
`})}),`
`,e.jsx(o.hr,{}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"MuiRadioGroup"})," renders ",e.jsx(o.code,{children:'role="radiogroup"'})," automatically."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"aria-required"})," is forwarded when ",e.jsx(o.code,{children:"required={true}"}),"."]}),`
`,e.jsx(o.li,{children:"Each option has a minimum tap target of 44×44px (2.75rem)."}),`
`,e.jsxs(o.li,{children:["Custom icons are marked ",e.jsx(o.code,{children:'aria-hidden="true"'})," — the native ",e.jsx(o.code,{children:'<input type="radio">'})," handles all keyboard and screen reader interaction."]}),`
`]})]})}function q(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}export{q as default};
