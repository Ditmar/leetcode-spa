import{j as e}from"./iframe--zEGW4XW.js";import{useMDXComponents as o}from"./index-DNmxc1Wo.js";import"./preload-helper-PPVm8Dsz.js";function s(i){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"-signuppage---registration-page",children:"📝 SignUpPage - Registration Page"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"SignUpPage"})," component is the main interface for new user registration on the platform."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"️-important-note-implementation-as-skeleton-dev-build",children:'⚠️ Important Note: Implementation as "Skeleton" (DEV Build)'}),`
`,e.jsxs(n.p,{children:["It is crucial to understand that this implementation of ",e.jsx(n.code,{children:"SignUpPage"})," has been intentionally developed as a ",e.jsx(n.strong,{children:'"skeleton" (or "scaffolding")'}),"."]}),`
`,e.jsx(n.h3,{id:"reason-for-this-approach-pending-dependencies",children:"Reason for this Approach (Pending Dependencies)"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"SignUpPage"})," ticket has direct dependencies on three other shared UI components that belong to different tickets and, at the time of this development, ",e.jsxs(n.strong,{children:["have not yet been integrated (merged) into the ",e.jsx(n.code,{children:"master"})," branch"]}),"."]}),`
`,e.jsx(n.p,{children:"These components are:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Logo"})," (to display the company logo)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"FormInput"})," (for the email, username, and password fields)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"PrimaryButton"})," (for the registration button)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"solution-local-placeholders-fallbacks",children:"Solution: Local Placeholders (Fallbacks)"}),`
`,e.jsxs(n.p,{children:['Following the project guidelines for managing pending dependencies ("just build the skeleton"), this component ',e.jsx(n.strong,{children:"DOES NOT"})," attempt to import non-existent components."]}),`
`,e.jsxs(n.p,{children:["Instead, ",e.jsx(n.code,{children:"SignUpPage.tsx"})," ",e.jsx(n.strong,{children:"defines local 'Fallback' (placeholder) versions"})," of these three components. To address code review feedback on accessibility, these fallbacks use ",e.jsx(n.strong,{children:"semantic MUI components"})," (like ",e.jsx(n.code,{children:"<Button>"})," and ",e.jsx(n.code,{children:'<Box component="input">'}),") instead of simple ",e.jsx(n.code,{children:"<div>"})," elements. This ensures the page is accessible and testable, while still occupying the exact layout space."]}),`
`,e.jsx(n.h3,{id:"what-does-this-approach-enable",children:"What does this approach enable?"}),`
`,e.jsxs(n.p,{children:['This "skeleton" approach allows ',e.jsx(n.code,{children:"SignUpPage"})," to be a complete and functional component in itself, enabling:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Isolated Development:"})," Develop all state logic (",e.jsx(n.code,{children:"useState"})," for inputs) and validations (",e.jsx(n.code,{children:"handleSubmit"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Visual Testing:"})," Render the complete page in Storybook (",e.jsx(n.code,{children:"SignUpPage.stories.tsx"}),") to verify layout, responsiveness, and styles."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Exact Positioning:"})," The styles in ",e.jsx(n.code,{children:"SignUpPage.styles.ts"})," use the placeholders to absolutely position every element (inputs, button, logo, texts) based on the Figma coordinates."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Unit Testing:"})," The tests (",e.jsx(n.code,{children:"SignUpPage.test.tsx"}),") can verify the complete form validation logic (e.g., showing error messages on an empty submit) and user interaction."]}),`
`]}),`
`,e.jsxs(n.p,{children:["When the real components (",e.jsx(n.code,{children:"Logo"}),", ",e.jsx(n.code,{children:"FormInput"}),", ",e.jsx(n.code,{children:"PrimaryButton"}),") become available in ",e.jsx(n.code,{children:"master"}),", the final integration will be as simple as removing the local fallbacks and changing the imports."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-purpose-and-features-implemented-logic",children:"🎯 Purpose and Features (Implemented Logic)"}),`
`,e.jsx(n.h3,{id:"purpose",children:"Purpose"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Manage user registration using ",e.jsx(n.strong,{children:"email"}),", ",e.jsx(n.strong,{children:"username"}),", and ",e.jsx(n.strong,{children:"password"}),"."]}),`
`,e.jsx(n.li,{children:"Validate data input in real-time (length, email format)."}),`
`,e.jsxs(n.li,{children:["Provide ",e.jsx(n.strong,{children:"social authentication"})," options (Google, GitHub, Facebook)."]}),`
`,e.jsxs(n.li,{children:["Display a ",e.jsx(n.strong,{children:"loading spinner"})," (via the ",e.jsx(n.code,{children:"loading"})," prop) while processing information."]}),`
`]}),`
`,e.jsx(n.h3,{id:"-features",children:"✨ Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Input fields (placeholders) for ",e.jsx(n.strong,{children:"Email"}),", ",e.jsx(n.strong,{children:"Username"}),", and ",e.jsx(n.strong,{children:"Password"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Responsive Design:"})," The layout is 100% fluid and adapts to any screen size, maintaining the proportions defined in the Figma design."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Local validation logic"})," that checks email format, non-empty username, and password length before calling ",e.jsx(n.code,{children:"onSubmit"}),"."]}),`
`,e.jsxs(n.li,{children:["Loading functionality that disables the button (logic in ",e.jsx(n.code,{children:"isDisabled"}),") while the form is submitting."]}),`
`,e.jsxs(n.li,{children:["Inclusion of social login icons for ",e.jsx(n.strong,{children:"Google"}),", ",e.jsx(n.strong,{children:"GitHub"}),", and ",e.jsx(n.strong,{children:"Facebook"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Navigation links"})," to the Login page and legal policies (Terms of Service and Privacy Policy)."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"️-component-props-api",children:"⚙️ Component Props (API)"}),`
`,e.jsxs(n.p,{children:[`| Prop                | Type             | Description                                              |
| :------------------ | :--------------- | :------------------------------------------------------- |
| `,e.jsx(n.code,{children:"loading"}),"           | ",e.jsx(n.code,{children:"boolean"}),`        | Shows loading spinner and disables the button.           |
| `,e.jsx(n.code,{children:"buttonText"}),"        | ",e.jsx(n.code,{children:"string"}),`         | Text for the registration button.                        |
| `,e.jsx(n.code,{children:"disabled"}),"          | ",e.jsx(n.code,{children:"boolean"}),"        | Disables the button (independent of ",e.jsx(n.code,{children:"loading"}),`).          |
| `,e.jsx(n.code,{children:"onSubmit"}),"          | ",e.jsx(n.code,{children:"(data) => void"}),` | Callback on form submission (only if validation passes). |
| `,e.jsx(n.code,{children:"loginText"}),"         | ",e.jsx(n.code,{children:"string"}),`         | Text for the "Log In" link.                              |
| `,e.jsx(n.code,{children:"signupWithText"}),"    | ",e.jsx(n.code,{children:"string"}),`         | Text displayed above the social auth icons.              |
| `,e.jsx(n.code,{children:"showSocialIcons"}),"   | ",e.jsx(n.code,{children:"boolean"}),`        | Shows or hides the social icons.                         |
| `,e.jsx(n.code,{children:"showLegalText"}),"     | ",e.jsx(n.code,{children:"boolean"}),`        | Shows or hides the reCAPTCHA legal text.                 |
| `,e.jsx(n.code,{children:"googleLoginUrl"}),"    | ",e.jsx(n.code,{children:"string"}),`         | Redirect URL for Google login.                           |
| `,e.jsx(n.code,{children:"githubLoginUrl"}),"    | ",e.jsx(n.code,{children:"string"}),`         | Redirect URL for GitHub login.                           |
| `,e.jsx(n.code,{children:"facebookLoginUrl"}),"  | ",e.jsx(n.code,{children:"string"}),`         | Redirect URL for Facebook login.                         |
| `,e.jsx(n.code,{children:"privacyPolicyUrl"}),"  | ",e.jsx(n.code,{children:"string"}),`         | URL for the Privacy Policy.                              |
| `,e.jsx(n.code,{children:"termsOfServiceUrl"})," | ",e.jsx(n.code,{children:"string"}),"         | URL for the Terms of Service.                            |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-additional-implementation-details",children:"🧩 Additional Implementation Details"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Styling:"})," Styles are managed entirely with MUI (",e.jsx(n.code,{children:"sx"}),") via ",e.jsx(n.code,{children:"SignUpPage.styles.ts"}),". The layout is ",e.jsx(n.strong,{children:"fully responsive"})," and scalable, using percentages (",e.jsx(n.code,{children:"percentW"}),", ",e.jsx(n.code,{children:"percentH"}),") calculated from the exact Figma design dimensions (",e.jsx(n.code,{children:"GEOMETRY_PX"}),'), adhering to the "no hardcoded px" guideline.']}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Icon Handling (Assets):"})," The social icons (Google, GitHub, Facebook) are imported using Vite's ",e.jsx(n.code,{children:"?url"})," suffix to get the asset URL. A ",e.jsx(n.code,{children:"handleImgError"})," function is included as a ",e.jsx(n.em,{children:"fallback"})," mechanism in case the primary URL fails, attempting to load the assets from alternative paths (e.g., ",e.jsx(n.code,{children:"/assets/google.svg"}),")."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Testing:"})," The tests (",e.jsx(n.code,{children:"SignUpPage.test.tsx"}),") are configured to validate the component's ",e.jsx(n.strong,{children:"behavioral logic"}),". They simulate user input, trigger form submission, and verify that the correct validation error messages are displayed or that ",e.jsx(n.code,{children:"onSubmit"})," is called appropriately, adhering to best practices."]}),`
`]}),`
`]})]})}function d(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{d as default};
