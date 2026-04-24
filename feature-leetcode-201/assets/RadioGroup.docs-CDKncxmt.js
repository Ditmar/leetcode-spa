import{j as e}from"./iframe-Cxls7jj2.js";import{useMDXComponents as i}from"./index-BCInCgtC.js";import{M as s,P as l,C as d}from"./index-D1sSi2n3.js";import{R as t}from"./RadioGroup.stories-Bxd43Dsu.js";import"./preload-helper-BSJmP7H2.js";import"./index-Bnd7rNXf.js";import"./index-Ds1MuRu9.js";import"./index-Bv4-MPOe.js";import"./FormHelperText-CzKE2RUs.js";import"./ButtonBase-XNnHcMkW.js";import"./useSlot-Bc04yXw_.js";import"./mergeSlotProps-qp0j04rZ.js";import"./Typography-CRTDeaLO.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-pkNc2Jgv.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Box-DypCzBob.js";function r(o){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:t}),`
`,e.jsx(n.h1,{id:"radiogroup",children:"RadioGroup"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"RadioGroup"})," component lets users select a single option from a list. Built on top of MUI's ",e.jsx(n.code,{children:"RadioGroup"}),", it adds responsive layout switching, group-level disable, required state, and custom Figma-spec radio icons."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { RadioGroup } from "./RadioGroup";

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
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"controlled-usage",children:"Controlled usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { RadioGroup } from "./RadioGroup";
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
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"default-story",children:"Default story"}),`
`,e.jsx(l,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|---|---|---|---|
| `,e.jsx(n.code,{children:"options"})," | ",e.jsx(n.code,{children:"Option[]"}),` | — | Array of radio options to render |
| `,e.jsx(n.code,{children:"label"})," | ",e.jsx(n.code,{children:"string"})," | — | Group label rendered as ",e.jsx(n.code,{children:"FormLabel"}),` |
| `,e.jsx(n.code,{children:"helperText"})," | ",e.jsx(n.code,{children:"string"}),` | — | Helper text below the group |
| `,e.jsx(n.code,{children:"error"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Puts the group in an error state |
| `,e.jsx(n.code,{children:"direction"})," | ",e.jsx(n.code,{children:'"row" \\| "column"'})," | ",e.jsx(n.code,{children:'"column"'}),` | Layout direction on desktop (always column on mobile) |
| `,e.jsx(n.code,{children:"disabled"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Disables the entire group |
The component also forwards all native MUI `,e.jsx(n.code,{children:"RadioGroupProps"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"option-shape",children:"Option shape"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MuiRadioGroup"})," renders ",e.jsx(n.code,{children:'role="radiogroup"'})," automatically."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-required"})," is forwarded when ",e.jsx(n.code,{children:"required={true}"}),"."]}),`
`,e.jsx(n.li,{children:"Each option has a minimum tap target of 44×44px (2.75rem)."}),`
`,e.jsxs(n.li,{children:["Custom icons are marked ",e.jsx(n.code,{children:'aria-hidden="true"'})," — the native ",e.jsx(n.code,{children:'<input type="radio">'})," handles all keyboard and screen reader interaction."]}),`
`]})]})}function M(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{M as default};
