import{j as e}from"./iframe-Cd1UARUj.js";import{useMDXComponents as t}from"./index-ChoGWa0A.js";import"./preload-helper-PPVm8Dsz.js";function s(i){const n={code:"code",em:"em",h1:"h1",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.hr,{}),`
`,e.jsx(n.h1,{id:"sectionnav",children:"SectionNav"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"SectionNav"})," component renders a vertical navigation intended to separate sections of an assessment or test (for example: MCQ, Programming, Debugging). It is built on top of Material UI and uses the project's styling system to ensure visual consistency."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Summary"}),": ",e.jsx(n.code,{children:"SectionNav"})," displays a vertical list of sections and allows selecting one. It supports both controlled mode (via the ",e.jsx(n.code,{children:"activeSectionId"})," prop) and uncontrolled mode (internal state). The root element and items expose basic ARIA attributes for accessibility."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Typical usage"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';
import { SectionNav } from './SectionNav';

const sections = [
  { id: 'mcq', label: 'MCQ' },
  { id: 'programming', label: 'Programming' },
  { id: 'review', label: 'Review' },
];

export default function Example() {
  const [active, setActive] = React.useState('mcq');
  return (
    <SectionNav
      sections={sections}
      title="Sections"
      activeSectionId={active}
      onSelect={(id) => setActive(id)}
      bottomSpacing={24}
    />
  );
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Main props"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sections"}),": Array of objects ",e.jsx(n.code,{children:"{ id: string; label: string }"})," — Required. The list of sections to render."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"activeSectionId"})," ",e.jsx(n.em,{children:"(optional)"}),": ",e.jsx(n.code,{children:"string"})," — Id of the currently active section. When provided the component works in controlled mode."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onSelect"})," ",e.jsx(n.em,{children:"(optional)"}),": ",e.jsx(n.code,{children:"(id: string) => void"})," — Callback fired when a section is selected."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"title"})," ",e.jsx(n.em,{children:"(optional)"}),": ",e.jsx(n.code,{children:"string"})," — Title text rendered above the list."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bottomSpacing"})," ",e.jsx(n.em,{children:"(optional)"}),": ",e.jsx(n.code,{children:"string | number"})," — Adjusts the bottom padding of the ",e.jsx(n.code,{children:"Root"}),". Numeric values are interpreted as pixels."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"className"})," ",e.jsx(n.em,{children:"(optional)"}),": ",e.jsx(n.code,{children:"string"})," — Allows passing external CSS classes."]}),`
`,e.jsxs(n.li,{children:["Remaining props: forwarded to the root ",e.jsx(n.code,{children:"Box"})," component (for example ",e.jsx(n.code,{children:"sx"}),", ",e.jsx(n.code,{children:"data-*"}),", etc.)."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Behavior and considerations"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Controlled vs uncontrolled: If you pass ",e.jsx(n.code,{children:"activeSectionId"})," the component follows that value; otherwise it manages its own internal state and updates selection on click."]}),`
`,e.jsxs(n.li,{children:["The root element is a ",e.jsx(n.code,{children:"nav"})," with an ",e.jsx(n.code,{children:"aria-label"})," (uses ",e.jsx(n.code,{children:"title"})," when provided, otherwise defaults to ",e.jsx(n.code,{children:"Navigation"}),")."]}),`
`,e.jsxs(n.li,{children:["The selected item uses ",e.jsx(n.code,{children:'aria-current=\\"page\\"'})," to improve screen reader navigation."]}),`
`,e.jsxs(n.li,{children:["Items are ",e.jsx(n.code,{children:"ListItemButton"})," instances from MUI, so they inherit focus, hover and accessibility behavior from MUI."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Styling and theme tokens"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The component uses ",e.jsx(n.code,{children:"SectionNav.styles.ts"})," and theme tokens (via ",e.jsx(n.code,{children:"getSectionNavTokens"}),") for dimensions (width, item height), typography and colors. To adjust appearance, update the tokens in the theme helpers located in the style library."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Additional examples"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Long list (no internal scroll): If you need to render many sections, control the parent layout rather than forcing an internal scroll inside ",e.jsx(n.code,{children:"SectionNav"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:'<SectionNav\n  sections={Array.from({ length: 20 }, (_, i) => ({ id: `s${i+1}`, label: `Section ${i+1}` }))}\n  title="Sections"\n  onSelect={(id) => console.log(id)}\n/>\n'})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Storybook tips"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["In ",e.jsx(n.code,{children:"SectionNav.stories.tsx"})," there is a decorator that updates ",e.jsx(n.code,{children:"activeSectionId"})," when an item is selected. This helps to visualize interaction in stories."]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"argTypes"})," to expose ",e.jsx(n.code,{children:"activeSectionId"})," and ",e.jsx(n.code,{children:"bottomSpacing"})," in the controls panel."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Accessibility (a11y)"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"nav[aria-label]"})," describes the region; provide a descriptive ",e.jsx(n.code,{children:"title"})," when relevant."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'aria-current=\\"page\\"'})," identifies the active item to assistive technologies."]}),`
`,e.jsx(n.li,{children:"Ensure sufficient color contrast for text; the theme tokens aim to meet minimum contrast requirements."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Unit tests & validation"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Unit tests for this component should verify:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Rendering of sections and title."}),`
`,e.jsxs(n.li,{children:["Controlled behavior when ",e.jsx(n.code,{children:"activeSectionId"})," is provided."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onSelect"})," is called with the correct id on click."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-current"})," and ",e.jsx(n.code,{children:"aria-label"})," attributes are present and correct."]}),`
`,e.jsx(n.li,{children:"Disabled or keyboard navigation behaviors if applicable."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Files & implementation"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"src/components/SectionNav/SectionNav.tsx"})," — implementation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"src/components/SectionNav/SectionNav.styles.ts"})," — styles and tokens."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"src/components/SectionNav/SectionNav.types.ts"})," — TypeScript types."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"src/components/SectionNav/SectionNav.stories.tsx"})," — Storybook stories."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:"This document is intended as the component reference. Visual or behavior changes must be implemented in the component files or in the theme tokens."})]})}function l(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{l as default};
