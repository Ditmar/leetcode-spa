import{j as e}from"./iframe-CkkD4bSJ.js";import{useMDXComponents as t}from"./index-DSALbdyf.js";import"./preload-helper-PPVm8Dsz.js";function i(s){const n={code:"code",em:"em",h1:"h1",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.hr,{}),`
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
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Dark mode support"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SectionNav"})," supports dark mode via the theme: when ",e.jsx(n.code,{children:"theme.palette.mode === 'dark'"})," the component will use the dark token set returned by ",e.jsx(n.code,{children:"getSectionNavTokens"}),"."]}),`
`,e.jsxs(n.li,{children:["Default dark tokens are defined in ",e.jsx(n.code,{children:"src/style-library/types/theme.helpers.ts"})," under ",e.jsx(n.code,{children:"sectionNavDarkTokens"}),". The default values include (but are not limited to):",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"background"}),": ",e.jsx(n.code,{children:"#0b1220"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"text"}),": ",e.jsx(n.code,{children:"#E6F0FF"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"gradientStart"}),": ",e.jsx(n.code,{children:"#8F3DEB"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"gradientEnd"}),": ",e.jsx(n.code,{children:"#C89BFF"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hoverBackground"}),": ",e.jsx(n.code,{children:"rgba(230,240,255,0.06)"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["To enable dark mode at runtime wrap your app with MUI's ",e.jsx(n.code,{children:"ThemeProvider"})," using a theme created with ",e.jsx(n.code,{children:"createDarkTheme()"})," or ",e.jsx(n.code,{children:"createCustomTheme({ mode: 'dark' })"})," so ",e.jsx(n.code,{children:"theme.palette.mode"})," is set to ",e.jsx(n.code,{children:"'dark'"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createCustomTheme } from 'src/style-library/types/theme.helpers';
import { SectionNav } from './SectionNav';

const darkTheme = createCustomTheme({ mode: 'dark' });

export default function ExampleDark() {
  return (
    <ThemeProvider theme={darkTheme}>
      <SectionNav sections={[{ id: 'a', label: 'A' }]} title="Sections" />
    </ThemeProvider>
  );
}
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["To customize dark colors for ",e.jsx(n.code,{children:"SectionNav"}),", provide ",e.jsx(n.code,{children:"componentTokens.sectionNavDark"})," when creating your custom theme; ",e.jsx(n.code,{children:"getSectionNavTokens"})," will prefer ",e.jsx(n.code,{children:"theme.componentTokens.sectionNavDark"})," over the defaults."]}),`
`,e.jsx(n.li,{children:"When customizing, ensure sufficient contrast for readability and accessibility (hover/selected states are also token-driven)."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Responsive behavior"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SectionNav"})," is responsive and adapts to three breakpoint categories: ",e.jsx(n.code,{children:"desktop"}),", ",e.jsx(n.code,{children:"tablet"})," and ",e.jsx(n.code,{children:"mobile"}),". The component relies on theme tokens and CSS-in-JS breakpoints to adjust dimensions, typography and spacing."]}),`
`,e.jsxs(n.li,{children:["Key tokens used for responsiveness (via ",e.jsx(n.code,{children:"getSectionNavTokens"}),"):",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dimensions.navWidth.{desktop|tablet|mobile}"})," — controls the navigation column width and min-width."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dimensions.itemHeight.{desktop|tablet|mobile}"})," — controls the list item height and vertical rhythm."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"typography.titleFontSize.{desktop|tablet|mobile}"})," — title font sizes per breakpoint."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"typography.itemFontSize.{desktop|tablet|mobile}"})," — item font sizes per breakpoint."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["In ",e.jsx(n.code,{children:"SectionNav.styles.ts"})," the styles use ",e.jsx(n.code,{children:"theme.customBreakpoints.tablet"})," and ",e.jsx(n.code,{children:"theme.customBreakpoints.mobile"})," to apply different paddings, border radii and size rules for smaller screens. For example, ",e.jsx(n.code,{children:"Root"})," adjusts ",e.jsx(n.code,{children:"width"})," and ",e.jsx(n.code,{children:"borderRadius"}),", while ",e.jsx(n.code,{children:"StyledItemButton"})," and ",e.jsx(n.code,{children:"Title"})," change ",e.jsx(n.code,{children:"height"}),", ",e.jsx(n.code,{children:"fontSize"})," and paddings."]}),`
`,e.jsxs(n.li,{children:["To customize responsive values:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Provide custom values for ",e.jsx(n.code,{children:"componentTokens.sectionNav"})," (or ",e.jsx(n.code,{children:"sectionNavDark"}),") when creating your theme. Update the ",e.jsx(n.code,{children:"dimensions"})," and ",e.jsx(n.code,{children:"typography"})," nested fields to change widths, item heights and font sizes per breakpoint."]}),`
`,e.jsxs(n.li,{children:["If you need different breakpoint thresholds, adjust ",e.jsx(n.code,{children:"theme.customBreakpoints"})," when creating the theme factory (",e.jsx(n.code,{children:"createCustomTheme"}),")."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Example — overriding nav widths and item heights for responsive breakpoints:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// pseudo-code: merge your tokens into the theme's componentTokens
import { createCustomTheme } from 'src/style-library/types/theme.helpers';

const theme = createCustomTheme({ mode: 'light' });

theme.componentTokens = {
  ...theme.componentTokens,
  sectionNav: {
    ...theme.componentTokens.sectionNav,
    dimensions: {
      navWidth: { desktop: 280, tablet: 200, mobile: 140 },
      itemHeight: { desktop: 88, tablet: 64, mobile: 44 },
    },
  },
};

// Wrap your app with ThemeProvider using the modified theme
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Testing tips: view the component at multiple viewport sizes in Storybook or in the browser DevTools device toolbar to verify padding, font sizes and selected/hover states remain usable and accessible."}),`
`,e.jsxs(n.li,{children:["Accessibility note: ensure that font sizes and touch target heights remain large enough on mobile; consider increasing ",e.jsx(n.code,{children:"itemHeight.mobile"})," if users need larger tappable areas."]}),`
`]}),`
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
`,e.jsx(n.p,{children:"This document is intended as the component reference. Visual or behavior changes must be implemented in the component files or in the theme tokens."})]})}function d(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{d as default};
