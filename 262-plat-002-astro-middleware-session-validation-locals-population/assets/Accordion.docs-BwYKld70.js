import{B as n}from"./iframe-x3Q2xtIP.js";import{useMDXComponents as o}from"./index-DbJD_UIY.js";import{b as t,T as r,d as l,D as a,P as d,a as c,S as p}from"./index-BmCxgOJv.js";import{A as m}from"./Accordion.stories-BTNb-p6t.js";import"./preload-helper-BOJww6b9.js";import"./index-UbimzWZK.js";import"./index-DRjTvvKq.js";import"./index-Ccq98Wp3.js";import"./createSvgIcon-C-vsatkS.js";import"./memoTheme-DLTkJSdK.js";import"./ExpandMore-0t3NUpTz.js";import"./useControlled-Bt6hHFxZ.js";import"./Paper-kgJX3txz.js";import"./useTheme-S6oIV8jj.js";import"./AccordionSummary-W7jKFtv-.js";import"./useSlot-DjTyd8yU.js";import"./mergeSlotProps-BIP3B9XJ.js";import"./useForkRef-RRS7Yt5v.js";import"./Collapse-BmcS5F5q.js";import"./utils-BHzN0jcb.js";import"./useTimeout-DmgvS9RU.js";import"./ButtonBase-DslvqeQn.js";import"./Box-evTigIV3.js";import"./Typography-Bvixx_10.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Button-cgNO1jXA.js";import"./CircularProgress-CHiXIRF4.js";function s(i){const e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:m}),`
`,n.jsx(r,{}),`
`,n.jsx(l,{children:"A versatile component for organizing and toggling related content sections."}),`
`,n.jsx(a,{children:n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Accordion"}),` is a Material UI based component that allows users to expand and collapse sections of content.
It is ideal for managing large amounts of information in a limited vertical space.`]})}),`
`,n.jsx(e.h2,{id:"use-cases",children:"Use cases"}),`
`,n.jsxs(e.p,{children:["Use ",n.jsx(e.code,{children:"Accordion"})," when the interface must:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"group related information that doesn't need to be visible all at once"}),`
`,n.jsx(e.li,{children:"provide an overview of multiple categories or topics"}),`
`,n.jsx(e.li,{children:"reduce page scrolling and cognitive load by hiding secondary content"}),`
`,n.jsx(e.li,{children:"manage complex settings or FAQs in a structured manner"}),`
`]}),`
`,n.jsx(e.p,{children:"Do not use this component if the user needs to see all the information at the same time for comparison."}),`
`,n.jsx(e.h2,{id:"expansion-variants",children:"Expansion variants"}),`
`,n.jsx(e.p,{children:"The component supports two main interaction patterns:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Single expansion"}),": Only one panel can be open at a time. Opening a new one automatically closes the previous one."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Multiple expansion"}),": Allows several panels to stay open simultaneously, providing maximum flexibility."]}),`
`]}),`
`,n.jsxs(e.p,{children:["This behavior is controlled via the ",n.jsx(e.code,{children:"variant"})," prop."]}),`
`,n.jsx(e.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Custom Icons"}),": Support for overriding the default expand/collapse icon."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Controlled/Uncontrolled Modes"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Uncontrolled"}),": Default behavior where the component manages its own state internally."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Controlled"}),": Pass ",n.jsx(e.code,{children:"expandedIds"})," prop to control which items are expanded and ",n.jsx(e.code,{children:"onExpandedChange"})," callback to handle state updates."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Smooth Transitions"}),": Built-in animations for a fluid user experience when toggling content."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Validated Props"}),": ",n.jsx(e.code,{children:"slotProps"})," are validated to prevent unwanted prop overrides. ",n.jsx(e.code,{children:"onExpandedChange"})," callbacks are validated as functions before invocation."]}),`
`]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(e.p,{children:"The component implements standard WAI-ARIA patterns:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"aria-expanded"}),": Dynamically updated to indicate the state of each panel."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"aria-controls"}),": Connects the summary to its corresponding content panel."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Keyboard Navigation"}),": Full support for ",n.jsx(e.code,{children:"Space"})," and ",n.jsx(e.code,{children:"Enter"})," keys to toggle panels."]}),`
`]}),`
`,n.jsx(e.h2,{id:"responsive-behavior",children:"Responsive behavior"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Accordion"})," is fully responsive and adapts to any viewport:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Mobile (≥ 320px)"}),": Optimized touch targets (minimum 44x44px) and adjusted horizontal paddings for better readability on small screens."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Desktop"}),": Maintains a clean, aligned layout with a maximum content width for optimal line length."]}),`
`]}),`
`,n.jsx(e.h2,{id:"primary-example",children:"Primary example"}),`
`,n.jsx(d,{}),`
`,n.jsx(e.h2,{id:"controls",children:"Controls"}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h2,{id:"additional-stories",children:"Additional stories"}),`
`,n.jsx(p,{includePrimary:!1}),`
`,n.jsx(e.h2,{id:"code-examples",children:"Code Examples"}),`
`,n.jsx(e.h3,{id:"uncontrolled-implementation",children:"Uncontrolled Implementation"}),`
`,n.jsx(e.p,{children:"A quick example of how to implement the uncontrolled version of the component:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Accordion } from './Accordion';

const faqItems = [
  { id: 'item-1', summary: 'What is CDD?', details: 'Component-Driven Development is...' },
  { id: 'item-2', summary: 'Is it accessible?', details: 'Yes, it follows WAI-ARIA guidelines.' }
];

export const MyFAQ = () => <Accordion items={faqItems} variant="single"/>;
`})}),`
`,n.jsx(e.h3,{id:"controlled-implementation",children:"Controlled Implementation"}),`
`,n.jsx(e.p,{children:"Example of controlled mode with state management:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { useState } from 'react';
import { Accordion } from './Accordion';

const faqItems = [
  { id: 'item-1', summary: 'What is CDD?', details: 'Component-Driven Development is...' },
  { id: 'item-2', summary: 'Is it accessible?', details: 'Yes, it follows WAI-ARIA guidelines.' }
];

export const ControlledFAQ = () => {
  const [expanded, setExpanded] = useState<string[]>(['item-1']);

  return (
    <Accordion
      items={faqItems}
      expandedIds={expanded}
      onExpandedChange={setExpanded}
      variant="single"
    />
  );
};
`})}),`
`,n.jsx(e.h3,{id:"custom-slotprops-with-validation",children:"Custom SlotProps with Validation"}),`
`,n.jsxs(e.p,{children:["Example using validated ",n.jsx(e.code,{children:"slotProps"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Accordion
  items={faqItems}
  slotProps={{
    accordion: { TransitionProps: { timeout: 300 } },
    summary: { sx: { fontWeight: 600 } },
    details: { sx: { padding: 3 } }
  }}
/>
`})})]})}function O(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{O as default};
