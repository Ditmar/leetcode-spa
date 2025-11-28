import{j as e}from"./iframe-B5Q6yQus.js";import{useMDXComponents as a}from"./index-wNP7dkky.js";import{M as r,T as c,S as l,D as d,C as p,a as h,b as u,c as x}from"./index-DqDfvcUY.js";import{A as o,D as i}from"./AnswerOption.stories-CGApYhq5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tbZp7tP0.js";import"./index-CW2qRnG6.js";import"./index-uDekK7cg.js";import"./memoTheme-BtLJshVk.js";import"./useTheme-Cs8gXBHp.js";import"./index-Dy098rRd.js";import"./getThemeProps-OGHjUM8E.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",strong:"strong",...a(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,e.jsx(r,{of:o}),`
`,`
`,e.jsx(c,{}),`
`,e.jsx(l,{children:"Modular Component for Form Selections"}),`
`,`
`,e.jsx(d,{of:o}),`
`,e.jsxs(n.h1,{id:"answeroption-component",children:[e.jsx(n.code,{children:"AnswerOption"})," Component"]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"AnswerOption"})})," component is an abstraction designed to represent a selectable option (radio or checkbox) within a group of answers. It focuses on providing a large click area, clear visual feedback, and robust accessibility, decoupling the selection logic from the visual component."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-interactive-showcase",children:"🚀 Interactive Showcase"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"Canvas"})," to view the primary story and the ",e.jsx(n.code,{children:"Controls"})," to manipulate its properties in real time."]}),`
`,e.jsx(p,{of:i}),`
`,`
`,e.jsx(n.h2,{id:"️-properties-props",children:"⚙️ Properties (Props)"}),`
`,e.jsxs(n.p,{children:["The available properties for ",e.jsx(n.code,{children:"AnswerOption"})," are detailed below. Their typing and description come from the TypeScript interface (",e.jsx(n.code,{children:"AnswerOption.types.ts"}),") and the ",e.jsx(n.code,{children:"argTypes"})," in the stories file."]}),`
`,e.jsx(h,{of:i}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-variations-and-states",children:"🎨 Variations and States"}),`
`,e.jsx(n.p,{children:"Explore all predefined variations and states of the component to ensure its consistent use in different user interface contexts."}),`
`,`
`,e.jsx(u,{}),`
`,e.jsx(n.h3,{id:"implementation-example-tsx-code",children:"Implementation Example (TSX Code)"}),`
`,e.jsxs(n.p,{children:["Example of how to integrate ",e.jsx(n.code,{children:"AnswerOption"})," into a selection group, controlling the state of the chosen option."]}),`
`,e.jsx(x,{language:"tsx",code:`
import React, { useState, useCallback } from 'react';
import { AnswerOption } from './AnswerOption';
import { Box } from '@mui/material';

// Example data
const questionOptions = [
  { id: '1', value: 'opA', label: 'Option A: Default Selection' },
  { id: '2', value: 'opB', label: 'Option B: Unselected State' },
  { id: '3', value: 'opC', label: 'Option C: Disabled Option', disabled: true },
];

const QuizSelectionGroup = () => {
  const [selectedValue, setSelectedValue] = useState('opA');

  const handleChange = useCallback((newValue) => {
    setSelectedValue(newValue);
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px' }}>
      {questionOptions.map((option) => (
        <AnswerOption
          key={option.id}
          label={option.label}
          value={option.value}
          // Determines the 'selected' state
          selected={selectedValue === option.value}
          // Handler function that updates the state
          onChange={handleChange}
          disabled={option.disabled}
        />
      ))}
      <p>Selected: <b>{selectedValue}</b></p>
    </Box>
  );
};

export default QuizSelectionGroup;
`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-accessibility-a11y",children:"♿ Accessibility (A11y)"}),`
`,e.jsx(n.p,{children:"This component ensures accessibility (WAI-ARIA) by:"}),`
`,e.jsxs(n.p,{children:["1.  ",e.jsxs(n.strong,{children:["Wrapping the content in a ",e.jsx(n.code,{children:"<label>"})," tag:"]}),` This ensures that clicking anywhere on the component activates the option.
2.  `,e.jsx(n.strong,{children:"Using a Hidden Input:"}),' The actual "radio" or "checkbox" behavior is managed with a native (visually hidden) ',e.jsx(n.code,{children:"<input>"}),` so that assistive technologies (screen readers) recognize it and allow keyboard interaction.
3.  `,e.jsx(n.strong,{children:"Communicating States:"})," ARIA attributes, such as ",e.jsx(n.code,{children:"aria-checked"})," and ",e.jsx(n.code,{children:"disabled"}),", are dynamically configured to communicate the exact state of the component to the user."]})]})}function D(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{D as default};
