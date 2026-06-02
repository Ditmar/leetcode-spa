import{A as e}from"./iframe-BsDYe1yH.js";import{useMDXComponents as i}from"./index-DN-IJ2tQ.js";import{b as s,P as l,a as d}from"./index-DwBn2PT_.js";import{R as t}from"./RadioGroup.stories-Dwj9ygu6.js";import"./preload-helper-BhHu6lZj.js";import"./index-D0xpxI3T.js";import"./index-DTr6eyBx.js";import"./index-01fLfTJm.js";import"./FormHelperText-jJ6SmrtF.js";import"./memoTheme-D3N9DNiy.js";import"./FormLabel-Bml2zBol.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./RadioGroup-9E6VgALc.js";import"./FormControlLabel-BYXYhQs2.js";import"./useSlot-BwDqMNX7.js";import"./mergeSlotProps-dalSF7zM.js";import"./useForkRef-CDpgrcf1.js";import"./useControlled-SRWJlh41.js";import"./ButtonBase-D3BJuwsu.js";import"./useTimeout-BMp1WbkW.js";import"./Typography-B3iKSI60.js";import"./createSvgIcon-BzBLABdB.js";import"./createChainedFunction-BO_9K8Jh.js";function r(n){const o={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:t}),`
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
