import{j as e}from"./iframe-DiGQfTj6.js";import{useMDXComponents as r}from"./index-CHfZsMMP.js";import"./preload-helper-PPVm8Dsz.js";function s(i){const n={br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"-forminput",children:"🧩 FormInput"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"FormInput"})," component is a reusable, styled input field built with React, TypeScript, and Material UI.",e.jsx(n.br,{}),`
`,"It provides consistent input appearance and behavior across the app, following Figma’s pixel-perfect design specifications."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-component-purpose",children:"🎯 Component Purpose"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"FormInput"})," component is designed to represent input fields such as ",e.jsx(n.strong,{children:'"Mail Id," "Username," or "Password"'}),", providing visual consistency and accessibility across forms."]}),`
`,e.jsx(n.p,{children:"It adheres to:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Component-Driven Development (CDD)"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Pixel-perfect design"})," based on Figma"]}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"WCAG AA accessibility compliance"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Extensibility and visual consistency"})," using Material UI (MUI)"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"️-props",children:"⚙️ Props"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"FormInput"})," component accepts the following properties:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"label"})," ",e.jsx(n.em,{children:"(string)"})," — Text label displayed above the input field."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"type"})," ",e.jsx(n.em,{children:"(“text” | “email” | “password”)"})," — Defines the input type. Default: ",e.jsx(n.code,{children:'"text"'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"variant"})," ",e.jsx(n.em,{children:"(“outlined” | “filled”)"})," — Visual variant of the input. Default: ",e.jsx(n.code,{children:'"outlined"'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"size"})," ",e.jsx(n.em,{children:"(“small” | “medium” | “large”)"})," — Adjusts font size, height, and padding. Default: ",e.jsx(n.code,{children:'"medium"'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"value"})," ",e.jsx(n.em,{children:"(string)"})," — Current input value (for controlled components)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"placeholder"})," ",e.jsx(n.em,{children:"(string)"})," — Text displayed when the field is empty."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"error"})," ",e.jsx(n.em,{children:"(boolean)"})," — When ",e.jsx(n.code,{children:"true"}),", applies error styling and sets accessibility attributes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"helperText"})," ",e.jsx(n.em,{children:"(string)"})," — Optional hint or validation message below the input."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"disabled"})," ",e.jsx(n.em,{children:"(boolean)"})," — Disables interaction and reduces opacity."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onChange"})," ",e.jsx(n.em,{children:"(function)"})," — Triggered when the input value changes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onFocus"})," ",e.jsx(n.em,{children:"(function)"})," — Triggered when the input gains focus."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onBlur"})," ",e.jsx(n.em,{children:"(function)"})," — Triggered when the input loses focus."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"-notes",children:"💡 Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Size logic:"}),e.jsx(n.br,{}),`
`,"Sizes are dynamically styled through the ",e.jsx(n.code,{children:"getSizeStyles()"})," function, which reads spacing and typography tokens from ",e.jsx(n.code,{children:"SIZE_CONFIGS"})," defined in ",e.jsx(n.code,{children:".constants.ts"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Accessibility:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The input automatically includes ",e.jsx(n.code,{children:"aria-label"})," (via the ",e.jsx(n.code,{children:"label"})," prop)."]}),`
`,e.jsxs(n.li,{children:["Error states toggle ",e.jsx(n.code,{children:"aria-invalid"})," for screen readers."]}),`
`,e.jsxs(n.li,{children:["Label is programmatically associated with the input via ",e.jsx(n.code,{children:"htmlFor"})," and ",e.jsx(n.code,{children:"id"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-component-structure",children:"🧱 Component Structure"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"FormInput"})," component follows a modular structure for scalability and maintainability:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"FormInput.tsx"})," → Main logic and rendering."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"FormInput.styles.ts"})," → Styled MUI TextField using the ",e.jsx(n.code,{children:"styled"})," API."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"FormInput.constants.ts"})," → Default values and size configuration."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"FormInput.types.ts"})," → TypeScript interfaces for props."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"FormInput.stories.tsx"})," → Storybook stories for visual testing."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"FormInput.test.tsx"})," → Unit tests with Vitest and React Testing Library."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-design-and-styles",children:"🎨 Design and Styles"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Built upon ",e.jsx(n.strong,{children:"MUI’s TextField"}),", extended with custom responsive styling via ",e.jsx(n.code,{children:"styled()"})," API."]}),`
`,e.jsxs(n.li,{children:["Uses ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"SIZE_CONFIGS"})})," to define per-size metrics such as:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"width"}),", ",e.jsx(n.code,{children:"height"}),", ",e.jsx(n.code,{children:"padding"}),", ",e.jsx(n.code,{children:"fontSize"}),", and ",e.jsx(n.code,{children:"borderRadius"})]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Each breakpoint (mobile, tablet, desktop) applies its own size configuration dynamically."}),`
`]}),`
`,e.jsx(n.p,{children:"Label behavior:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The label sits ",e.jsx(n.strong,{children:"inside the input"})," (placeholder-style)."]}),`
`,e.jsxs(n.li,{children:["It ",e.jsx(n.strong,{children:"disappears on focus or when text is filled"}),", matching the Figma design."]}),`
`,e.jsxs(n.li,{children:["The MUI ",e.jsx(n.strong,{children:"notch"})," is fully disabled (",e.jsx(n.code,{children:".MuiOutlinedInput-notchedOutline legend { width: 0 }"}),") to remove the floating label gap."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-accessibility-a11y",children:"♿ Accessibility (A11y)"}),`
`,e.jsx(n.p,{children:"Accessibility features:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Supports ",e.jsx(n.code,{children:"aria-label"}),", ",e.jsx(n.code,{children:"aria-invalid"}),", and ",e.jsx(n.code,{children:"aria-disabled"})," attributes automatically."]}),`
`,e.jsx(n.li,{children:"Fully compatible with screen readers."}),`
`,e.jsx(n.li,{children:"High color contrast for text and error states (AA compliant)."}),`
`,e.jsx(n.li,{children:"Keyboard navigation supported for all input types."}),`
`,e.jsx(n.li,{children:"Disabled state prevents pointer and keyboard interaction while maintaining semantic structure."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-unit-tests",children:"🧪 Unit Tests"}),`
`,e.jsxs(n.p,{children:["Implemented with ",e.jsx(n.strong,{children:"React Testing Library"})," and ",e.jsx(n.strong,{children:"Vitest"}),", verifying:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Proper rendering with label and placeholder."}),`
`,e.jsxs(n.li,{children:["Controlled value updates via ",e.jsx(n.code,{children:"onChange"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onFocus"})," and ",e.jsx(n.code,{children:"onBlur"})," event triggers."]}),`
`,e.jsx(n.li,{children:"Disabled state behavior."}),`
`,e.jsx(n.li,{children:"Error message rendering and ARIA attributes."}),`
`,e.jsxs(n.li,{children:["Typing interactions (with real keyboard simulation via ",e.jsx(n.code,{children:"userEvent"}),")."]}),`
`]}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<FormInput
  label="Email"
  type="email"
  placeholder="Enter your email"
  variant="outlined"
  size="medium"
  errorMessage="Invalid email format"
  onChange={(e) => console.log(e.target.value)}
/>
`})})]})}function c(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{c as default};
