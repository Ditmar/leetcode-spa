import{j as e}from"./iframe-CW4duQyu.js";import{useMDXComponents as o}from"./index-Dhl7TWUQ.js";import{M as t}from"./index-Bsy42Y_u.js";import{L as r}from"./LoginPage.stories-BKJGxb9B.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Byvv6OGu.js";import"./index-Bfc2mp1n.js";import"./index-CYgX5dvp.js";import"./Logo-BHExG055.js";import"./Button-YEL9tBf9.js";import"./styled-DyuMUp0B.js";import"./useTheme-C6gqCJOh.js";import"./Box-DIIHrGcg.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./Typography-BAdZWHvX.js";import"./memoTheme-B9gRcEkF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Link-Bvp64FB3.js";import"./ButtonBase-CqbDWRfe.js";import"./useForkRef-BjlqKogk.js";import"./IconButton-DBYZK5sV.js";import"./CircularProgress-DUsQBW_F.js";function s(i){const n={blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,e.jsx(t,{of:r}),`
`,e.jsx(n.h1,{id:"loginpage---authentication-page",children:"LoginPage - Authentication Page"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"LoginPage"})," component is the primary interface for users to authenticate and access the platform."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"️-important-note-implementation-as-skeleton-dev-build",children:'⚠️ Important Note: Implementation as "Skeleton" (DEV Build)'}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["It is crucial to understand that this implementation of ",e.jsx(n.code,{children:"LoginPage"}),' has been intentionally developed as a "skeleton" (or "scaffolding").']})}),`
`]}),`
`,e.jsx(n.h4,{id:"reason-for-this-approach-pending-dependencies",children:"Reason for this Approach (Pending Dependencies)"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"LoginPage"})," ticket has direct dependencies on three other shared UI components that belong to different tickets and, at the time of this development, ",e.jsx(n.strong,{children:"have not yet been integrated (merged)"})," into the ",e.jsx(n.code,{children:"master"})," branch."]}),`
`,e.jsx(n.p,{children:"These components are:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Logo"})," (to display the company logo)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"FormInput"})," (for the email/username and password fields)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"PrimaryButton"})," (for the login button)."]}),`
`]}),`
`,e.jsx(n.h4,{id:"solution-local-placeholders-fallbacks",children:"Solution: Local Placeholders (Fallbacks)"}),`
`,e.jsxs(n.p,{children:['Following the project guidelines for managing pending dependencies ("just build the skeleton"), this component ',e.jsx(n.strong,{children:"DOES NOT"})," attempt to import non-existent components."]}),`
`,e.jsxs(n.p,{children:["Instead, ",e.jsx(n.code,{children:"LoginPage.tsx"})," defines local 'Fallback' (placeholder) versions of these three components. To address code review feedback on accessibility, these fallbacks use ",e.jsx(n.strong,{children:"semantic MUI components"})," (like ",e.jsx(n.code,{children:"<Button>"})," and ",e.jsx(n.code,{children:'<Box component="input">'}),") instead of simple ",e.jsx(n.code,{children:"<div>"})," elements. This ensures the page is accessible and testable, while still occupying the exact layout space."]}),`
`,e.jsx(n.h3,{id:"solution-fallback",children:"Solution Fallback"}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Logo"})})," | ✅ ",e.jsx(n.strong,{children:"Integrated"})," | The official component has been successfully imported and integrated, replacing the initial fallback. |"]}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Button"})})," | ✅ ",e.jsx(n.strong,{children:"Integrated"})," | The official component has been successfully imported and integrated, replacing the initial fallback. |"]}),`
`,e.jsx(n.h4,{id:"what-does-this-approach-enable",children:"What does this approach enable?"}),`
`,e.jsxs(n.p,{children:['This "skeleton" approach allows ',e.jsx(n.code,{children:"LoginPage"})," to be a complete and functional component in itself, enabling:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Isolated Development:"})," Develop all state logic (",e.jsx(n.code,{children:"useState"})," for inputs) and validations (",e.jsx(n.code,{children:"handleSubmit"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Visual Testing:"})," Render the complete page in Storybook (",e.jsx(n.code,{children:"LoginPage.stories.tsx"}),") to verify layout, responsiveness, and styles."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Exact Positioning:"})," The styles in ",e.jsx(n.code,{children:"LoginPage.styles.ts"})," use the placeholders to absolutely position every element (inputs, button, logo, texts) based on the Figma coordinates."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Unit Testing:"})," The tests (",e.jsx(n.code,{children:"LoginPage.test.tsx"}),") can verify the complete form validation logic (e.g., showing error messages on an empty submit) and user interaction."]}),`
`]}),`
`,e.jsxs(n.p,{children:["When the real components (",e.jsx(n.code,{children:"Logo"}),", ",e.jsx(n.code,{children:"FormInput"}),", ",e.jsx(n.code,{children:"PrimaryButton"}),") become available in ",e.jsx(n.code,{children:"master"}),", the final integration will be as simple as removing the local fallbacks and changing the imports."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"-purpose-and-features-implemented-logic",children:"🎯 Purpose and Features (Implemented Logic)"}),`
`,e.jsx(n.h4,{id:"purpose",children:"Purpose"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Manage user login using ",e.jsx(n.code,{children:"email/username"})," and ",e.jsx(n.code,{children:"password"}),"."]}),`
`,e.jsx(n.li,{children:"Validate data input in real-time (non-empty fields)."}),`
`,e.jsxs(n.li,{children:["Provide ",e.jsx(n.strong,{children:"social authentication"})," options (Google, GitHub, Facebook)."]}),`
`,e.jsxs(n.li,{children:["Display a ",e.jsx(n.strong,{children:"loading spinner"})," (via the ",e.jsx(n.code,{children:"loading"})," prop) while processing information."]}),`
`]}),`
`,e.jsx(n.h4,{id:"-features",children:"✨ Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Input fields (placeholders) for ",e.jsx(n.strong,{children:"Email/Username"})," and ",e.jsx(n.strong,{children:"Password"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Responsive Design:"})," The layout is 100% fluid and adapts to any screen size, maintaining the proportions defined in the Figma design."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Local validation logic"})," that checks for non-empty fields before calling ",e.jsx(n.code,{children:"onSubmit"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Loading functionality"})," that disables the button (logic in ",e.jsx(n.code,{children:"isDisabled"}),") while the form is submitting."]}),`
`,e.jsxs(n.li,{children:["Inclusion of social login icons for ",e.jsx(n.strong,{children:"Google"}),", ",e.jsx(n.strong,{children:"GitHub"}),", and ",e.jsx(n.strong,{children:"Facebook"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Navigation links"}),' to the "Forgot Password" and "Sign Up" pages, and legal policies (Terms of Service and Privacy Policy).']}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"️-component-props-api",children:"⚙️ Component Props (API)"}),`
`,e.jsx(n.p,{children:"| Prop | Type | Description |"}),`
`,e.jsx(n.p,{children:"| :--- | :--- | :--- |"}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"loading"})," | boolean | Shows loading spinner and disables the button. |"]}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"buttonText"})," | string | Text for the login button. |"]}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"disabled"})," | boolean | Disables the button (independent of ",e.jsx(n.code,{children:"loading"}),"). |"]}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"onSubmit"})," | ",e.jsx(n.code,{children:"(data) => void"})," | Callback on form submission (only if validation passes). |"]}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"forgotPasswordText"}),' | string | Text for the "Forgot Password?" link. |']}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"signUpText"}),' | string | Text for the "Sign Up" link. |']}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"orYouCanText"})," | string | Text displayed above the social auth icons. |"]}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"showSocialIcons"})," | boolean | Shows or hides the social icons. |"]}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"showLegalText"})," | boolean | Shows or hides the reCAPTCHA legal text. |"]}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"googleLoginUrl"})," | string | Redirect URL for Google login. |"]}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"githubLoginUrl"})," | string | Redirect URL for GitHub login. |"]}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"facebookLoginUrl"})," | string | Redirect URL for Facebook login. |"]}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"privacyPolicyUrl"})," | string | URL for the Privacy Policy. |"]}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"termsOfServiceUrl"})," | string | URL for the Terms of Service. |"]}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"recaptchaText"})," | string | The reCAPTCHA protection text. |"]}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"privacyPolicyLinkText"})," | string | The link text for the Privacy Policy. |"]}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"termsOfServiceLinkText"})," | string | The link text for the Terms of Service. |"]}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"andText"}),' | string | The connecting word ("and"). |']}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"applyText"}),' | string | The closing word ("apply."). |']}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"️-project-convention-exception-storybook",children:"🏛️ Project Convention Exception: Storybook"}),`
`,e.jsx(n.p,{children:"The project maintains a strict rule: 'Named exports (no default)'."}),`
`,e.jsxs(n.p,{children:["However, the file ",e.jsx(n.code,{children:"LoginPage.stories.tsx"})," includes an ",e.jsx(n.code,{children:"export default meta;"})," statement:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export default meta;
`})})]})}function F(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{F as default};
