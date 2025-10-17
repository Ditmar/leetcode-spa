import{j as n}from"./iframe-BuEw5q_B.js";import{useMDXComponents as t}from"./index-miXgLpgp.js";import"./preload-helper-PPVm8Dsz.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"testcard-component-documentation",children:"TestCard Component Documentation"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"TestCard"})," component is a flexible and reusable card component built with ",n.jsx(e.strong,{children:"React"})," and ",n.jsx(e.strong,{children:"MUI"}),". It is designed to display a logo, title, and description in a visually appealing way while keeping accessibility and maintainability in mind."]}),`
`,n.jsx(e.h2,{id:"features",children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Layouts"}),": Supports both ",n.jsx(e.code,{children:"horizontal"})," and ",n.jsx(e.code,{children:"vertical"})," layouts."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Logo support"}),": Accepts a string (image URL) or a React node as a logo."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Text content"}),": Displays a title and description. Long text is truncated or wrapped to prevent layout breaking."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Centralized styling"}),": All sizes, paddings, and gaps are defined in ",n.jsx(e.code,{children:"TestCard.constants.ts"})," and applied consistently via ",n.jsx(e.code,{children:"TestCard.styles.ts"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Hover and interaction effects"}),": Supports hover transformations and shadows via the ",n.jsx(e.code,{children:"sx"})," prop."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Accessibility"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Fully navigable by keyboard using ",n.jsx(e.code,{children:"tabIndex={0}"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:'role="button"'})," is applied to the interactive area."]}),`
`,n.jsxs(e.li,{children:["Supports activation via ",n.jsx(e.code,{children:"Enter"})," or ",n.jsx(e.code,{children:"Space"})," keys."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Event handling"}),": ",n.jsx(e.code,{children:"onSelect"})," is compatible with mouse clicks and keyboard events."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ForwardRef support"}),": The DOM element can be accessed externally via ",n.jsx(e.code,{children:"ref"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"testing",children:"Testing"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Uses ",n.jsx(e.strong,{children:"Vitest"})," and ",n.jsx(e.strong,{children:"@testing-library/react"})," for automated testing."]}),`
`,n.jsxs(e.li,{children:["User interactions are simulated using ",n.jsx(e.code,{children:"user-event"}),"."]}),`
`,n.jsxs(e.li,{children:["Tests cover:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Mouse and keyboard activation."}),`
`,n.jsx(e.li,{children:"Horizontal and vertical layouts."}),`
`,n.jsx(e.li,{children:"Logo as string or React node."}),`
`,n.jsx(e.li,{children:"Handling of long text content."}),`
`,n.jsx(e.li,{children:"Proper rendering of all visual elements."}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"storybook",children:"Storybook"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Includes multiple stories demonstrating:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Basic card."}),`
`,n.jsx(e.li,{children:"Horizontal and vertical layouts."}),`
`,n.jsx(e.li,{children:"Hover effects."}),`
`,n.jsx(e.li,{children:"Interactive click actions."}),`
`,n.jsx(e.li,{children:"Long text content."}),`
`,n.jsx(e.li,{children:"Cards without images."}),`
`,n.jsx(e.li,{children:"Shadowed cards."}),`
`]}),`
`]}),`
`,n.jsx(e.li,{children:"Stories are isolated, self-contained, and reflect actual component behavior."}),`
`]}),`
`,n.jsx(e.h2,{id:"notes",children:"Notes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["All constants for sizing, padding, and logo dimensions are defined in ",n.jsx(e.code,{children:"TestCard.constants.ts"}),"."]}),`
`,n.jsxs(e.li,{children:["Styles are centralized in ",n.jsx(e.code,{children:"TestCard.styles.ts"})," to avoid magic numbers and maintain consistency."]}),`
`,n.jsxs(e.li,{children:["The component fully respects incoming ",n.jsx(e.code,{children:"sx"})," props while merging them with default styles."]}),`
`,n.jsx(e.li,{children:"ForwardRef allows advanced use cases, such as external animations or measurements."}),`
`]})]})}function o(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{o as default};
