import{A as e}from"./iframe-vd-CqHuI.js";import{useMDXComponents as r}from"./index-D6FQufS2.js";import{b as o}from"./index-DzsAFKtn.js";import"./preload-helper-5qi1Gm5S.js";import"./index-C0N1emcK.js";import"./index-BdZir46v.js";import"./index-D7aeWxC2.js";function i(s){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/AuthModal"}),`
`,e.jsx(n.h1,{id:"authmodal",children:"AuthModal"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"AuthModal"})," component provides a unified, highly accessible interface for user authentication. It seamlessly supports both ",e.jsx(n.strong,{children:"Sign In"})," and ",e.jsx(n.strong,{children:"Sign Up"})," flows within a responsive Material UI ",e.jsx(n.code,{children:"Dialog"}),", following strict Component-Driven Development (CDD) principles."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage",children:"Usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#props-reference",children:"Props Reference"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#dual-mode-behavior",children:"Dual-Mode Behavior"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#form-validation",children:"Form Validation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#accessibility-a11y",children:"Accessibility (a11y)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#responsive-behavior",children:"Responsive Behavior"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#architecture--file-structure",children:"Architecture & File Structure"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#stack--dependencies",children:"Stack & Dependencies"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"AuthModal"}),", you need to manage its ",e.jsx(n.code,{children:"isOpen"})," state from the parent component."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useState } from 'react';
import { Button } from '@mui/material';
import { AuthModal } from './AuthModal';
import { AuthMode } from './AuthModal.types';

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} variant="contained">
        Login
      </Button>

      <AuthModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialMode={AuthMode.SIGN_IN} 
      />
    </>
  );
};
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props-reference",children:"Props Reference"}),`
`,e.jsx(n.p,{children:"The component accepts the following properties to control its behavior and initial state:"}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"isOpen"})})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"})," | ",e.jsx(n.strong,{children:"Required."}),` Controls the visibility of the modal dialog. |
| `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"onClose"})})," | ",e.jsx(n.code,{children:"() => void"})," | ",e.jsx(n.code,{children:"undefined"})," | ",e.jsx(n.strong,{children:"Required."}),` Callback fired when the component requests to be closed (e.g., backdrop click, escape key, or close button click). |
| `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"initialMode"})})," | ",e.jsx(n.code,{children:"AuthMode"})," | ",e.jsx(n.code,{children:"AuthMode.SIGN_IN"})," | Optional. Determines which form (Sign In or Sign Up) is rendered when the modal initially opens. |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"dual-mode-behavior",children:"Dual-Mode Behavior"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"AuthModal"})," encapsulates two distinct user flows without requiring a page navigation or modal unmount, improving perceived performance."]}),`
`,e.jsx(n.h3,{id:"sign-in-mode",children:"Sign In Mode"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Fields:"})," Email, Password."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Features:"}),' Includes a "Remember me" checkbox and a "Forgot password?" hyperlink.']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Action:"})," Authenticates returning users."]}),`
`]}),`
`,e.jsx(n.h3,{id:"sign-up-mode",children:"Sign Up Mode"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Fields:"})," Full Name, Email, Password, Confirm Password."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Features:"}),' Focuses purely on account creation. Hides the "Remember me" and "Forgot password?" elements to reduce cognitive load.']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Action:"})," Registers new users."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"State persistence:"})," Toggling between modes triggers a form reset, clearing any previous inputs and validation errors to ensure a clean state."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"form-validation",children:"Form Validation"}),`
`,e.jsxs(n.p,{children:["Form state and validation are handled robustly via ",e.jsx(n.code,{children:"react-hook-form"})," and mapped to a strict schema using ",e.jsx(n.code,{children:"zod"})," (",e.jsx(n.code,{children:"signInSchema"})," and ",e.jsx(n.code,{children:"signUpSchema"}),"). Errors are displayed in real-time (",e.jsx(n.code,{children:"mode: 'onTouched'"}),") via MUI's ",e.jsx(n.code,{children:"helperText"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Validation Rules:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Full Name (Sign Up only):"})," Must be at least 2 characters long."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Email:"})," Must be a non-empty string matching a valid email format."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Password:"})," * Minimum of 8 characters.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Must contain at least one uppercase letter (",e.jsx(n.code,{children:"/[A-Z]/"}),")."]}),`
`,e.jsxs(n.li,{children:["Must contain at least one number (",e.jsx(n.code,{children:"/[0-9]/"}),")."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Confirm Password (Sign Up only):"})," Must perfectly match the Password field."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Remember Me (Sign In only):"})," Optional boolean."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility-a11y",children:"Accessibility (a11y)"}),`
`,e.jsx(n.p,{children:"Accessibility is a primary concern for authentication flows. This component implements the following WAI-ARIA standards:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus Management:"})," Utilizes MUI's native ",e.jsx(n.code,{children:"Dialog"})," focus trap. Focus is automatically shifted to the first interactive element upon opening and returned to the triggering element upon closing."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Roles & Attributes:"})," * The container has ",e.jsx(n.code,{children:'role="dialog"'})," and ",e.jsx(n.code,{children:'aria-modal="true"'}),".",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The title is linked via ",e.jsx(n.code,{children:'aria-labelledby="auth-modal-title"'}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keyboard Navigation:"})," * Pressing ",e.jsx(n.code,{children:"Escape"})," triggers the ",e.jsx(n.code,{children:"onClose"})," callback.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tab"})," navigation cycles logically through inputs, checkboxes, and buttons."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Touch Targets:"})," The top-right close ",e.jsx(n.code,{children:"IconButton"})," strictly adheres to mobile guidelines, featuring a minimum ",e.jsx(n.code,{children:"44x44px"})," touch target area."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Social Buttons:"})," Social authentication buttons (Google, GitHub) include explicit ",e.jsx(n.code,{children:"aria-label"})," attributes to ensure screen readers announce their specific function."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,e.jsxs(n.p,{children:["The modal adapts fluidly across device sizes, controlled via MUI's ",e.jsx(n.code,{children:"useMediaQuery"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Mobile (",e.jsx(n.code,{children:"< 600px"}),", ",e.jsx(n.code,{children:"sm"})," down):"]})," * Renders in ",e.jsx(n.code,{children:"fullScreen"})," mode.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Border radius is removed (",e.jsx(n.code,{children:"0px"}),") to blend seamlessly with the device viewport."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Tablet & Desktop (",e.jsx(n.code,{children:">= 600px"}),", ",e.jsx(n.code,{children:"sm"})," up):"]})," * Constrained to a maximum width of ",e.jsx(n.code,{children:"480px"})," (",e.jsx(n.code,{children:'maxWidth="xs"'}),").",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Centered vertically and horizontally with a subtle backdrop shadow."}),`
`,e.jsxs(n.li,{children:["Features a rounded aesthetic with ",e.jsx(n.code,{children:"border-radius: 12px"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"architecture--file-structure",children:"Architecture & File Structure"}),`
`,e.jsxs(n.p,{children:["This component adheres to the ",e.jsx(n.strong,{children:"Component-Driven Development (CDD)"})," methodology. Logic, types, styles, and tests are heavily encapsulated."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`src/component-catalog/AuthModal/
 ├── AuthModal.tsx           # Main JSX and UI structure
 ├── AuthModal.hook.ts       # State management, form handling, and submit logic
 ├── AuthModal.styles.ts     # Styled components and MUI sx definitions
 ├── AuthModal.types.ts      # TypeScript interfaces and Enums
 ├── AuthModal.constants.ts  # Default values and static label configurations
 ├── AuthModal.utils.ts      # Zod validation schemas
 ├── AuthModal.test.tsx      # RTL and Vitest unit testing
 ├── AuthModal.stories.tsx   # Storybook CSF configuration
 └── AuthModal.docs.mdx      # This documentation file
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"stack--dependencies",children:"Stack & Dependencies"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"UI Framework:"})," ",e.jsx(n.code,{children:"@mui/material"})," (v5)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icons:"})," ",e.jsx(n.code,{children:"@mui/icons-material"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Form State:"})," ",e.jsx(n.code,{children:"react-hook-form"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Schema Validation:"})," ",e.jsx(n.code,{children:"zod"})," & ",e.jsx(n.code,{children:"@hookform/resolvers/zod"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Testing:"})," ",e.jsx(n.code,{children:"vitest"})," & ",e.jsx(n.code,{children:"@testing-library/react"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Documentation:"})," Storybook Blocks (",e.jsx(n.code,{children:"MDX"}),")"]}),`
`]})]})}function j(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{j as default};
