import{A as e}from"./iframe-DXPQWhz1.js";import{useMDXComponents as t}from"./index-C1DwBM-0.js";import{b as r,C as o,c as d,a as l}from"./index-BJ6juixr.js";import{I as c,B as h}from"./Input.stories-DIJ3qSqk.js";import"./preload-helper-B1AL8F-k.js";import"./index-CC_jMea1.js";import"./index-BXQ_Lgn4.js";import"./index-mlDhLdJR.js";import"./Search-DMwn3mRg.js";import"./utils-Df1oJajn.js";import"./memoTheme-D9UzCdu4.js";import"./Typography-c3ptZkCi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-_8GQRpTp.js";import"./TextField-Bpp2am8c.js";import"./useSlot-RcJ8Pv78.js";import"./mergeSlotProps-D3mBHJrW.js";import"./useForkRef-DmkBCaeW.js";import"./Select-HJqcZ18Y.js";import"./Menu-Lz18ZQ-l.js";import"./useSlotProps-DWuCJuR7.js";import"./Popover-BpPO1QTv.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-t_z5bXz_.js";import"./useTheme-D1e0HHbE.js";import"./Fade-C_oDoW-_.js";import"./useTimeout-BCOHv1ma.js";import"./getReactElementRef-RgX26x0k.js";import"./mergeSlotProps-DACNCT28.js";import"./Modal-0gkIP6eT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DaO0AqW6.js";import"./Paper-UfpP0lyv.js";import"./List-B0E9xSjj.js";import"./useControlled-wbhHUahC.js";import"./FormLabel-rH3Vb88J.js";import"./FormHelperText-BLh-_OPs.js";import"./FormControl-DID4Mn0S.js";import"./Box-BykTXfwr.js";import"./IconButton-C4_GfnK5.js";import"./ButtonBase-BcXWX_5E.js";import"./CircularProgress-CmzDTtYu.js";function s(n){const i={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(i.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{children:e.jsx(d,{of:h})}),`
`,e.jsx(i.h1,{id:"input",children:"Input"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.strong,{children:"Input"})," component is a reusable text field built on top of MUI ",e.jsx(i.code,{children:"TextField"}),".",e.jsx(i.br,{}),`
`,"It is designed to be used across forms while supporting accessibility, responsiveness, and common input features."]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(i.p,{children:"The component was created to serve as the standard text input element in the component catalog."}),`
`,e.jsx(i.p,{children:"The implementation needed to support:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"multiple variants"}),`
`,e.jsx(i.li,{children:"multiple input types"}),`
`,e.jsx(i.li,{children:"adornments"}),`
`,e.jsx(i.li,{children:"helper text"}),`
`,e.jsx(i.li,{children:"password visibility toggle"}),`
`,e.jsx(i.li,{children:"optional character count"}),`
`,e.jsx(i.li,{children:"responsive behavior"}),`
`,e.jsx(i.li,{children:"accessibility support"}),`
`,e.jsx(i.li,{children:"mobile-friendly keyboard behavior"}),`
`]}),`
`,e.jsx(i.h2,{id:"the-component-was-also-designed-to-stay-reusable-and-consistent-with-the-project-design-tokens",children:"The component was also designed to stay reusable and consistent with the project design tokens."}),`
`,e.jsx(i.h2,{id:"file-structure-used",children:"File structure used"}),`
`,e.jsx(i.p,{children:"The ticket was organized using the required file structure."}),`
`,e.jsx(i.h3,{id:"inputtsx",children:e.jsx(i.code,{children:"Input.tsx"})}),`
`,e.jsxs(i.p,{children:["This file contains the main component logic.",e.jsx(i.br,{}),`
`,"It handles the rendering of the MUI ",e.jsx(i.code,{children:"TextField"}),", the password toggle behavior, the helper text rendering, and the character count behavior."]}),`
`,e.jsx(i.h3,{id:"inputtypests",children:e.jsx(i.code,{children:"Input.types.ts"})}),`
`,e.jsxs(i.p,{children:["This file defines the TypeScript props used by the component.",e.jsx(i.br,{}),`
`,"It extends the MUI ",e.jsx(i.code,{children:"TextField"})," props and adds custom props such as adornments, character count, supported input types, and read-only support."]}),`
`,e.jsx(i.h3,{id:"inputconstantsts",children:e.jsx(i.code,{children:"Input.constants.ts"})}),`
`,e.jsxs(i.p,{children:["This file stores the supported input types and the ",e.jsx(i.code,{children:"inputMode"})," mapping used for mobile keyboards."]}),`
`,e.jsx(i.h3,{id:"inputhookts",children:e.jsx(i.code,{children:"Input.hook.ts"})}),`
`,e.jsxs(i.p,{children:["This file contains the password toggle logic.",e.jsx(i.br,{}),`
`,"The visibility state was separated into its own hook to keep the main component cleaner."]}),`
`,e.jsx(i.h3,{id:"inputstylests",children:e.jsx(i.code,{children:"Input.styles.ts"})}),`
`,e.jsxs(i.p,{children:["This file contains the component styles using ",e.jsx(i.strong,{children:"MUI styled()"}),".",e.jsx(i.br,{}),`
`,"The styles were separated from the logic to keep the implementation easier to read and maintain."]}),`
`,e.jsx(i.h3,{id:"inpututilsts",children:e.jsx(i.code,{children:"Input.utils.ts"})}),`
`,e.jsx(i.p,{children:"This file contains the helper function used to calculate character count."}),`
`,e.jsx(i.h3,{id:"inputtesttsx",children:e.jsx(i.code,{children:"Input.test.tsx"})}),`
`,e.jsx(i.p,{children:"This file contains the unit tests for the component behavior."}),`
`,e.jsx(i.h3,{id:"inputstoriestsx",children:e.jsx(i.code,{children:"Input.stories.tsx"})}),`
`,e.jsx(i.h2,{id:"this-file-contains-the-storybook-story-used-to-visualize-the-component",children:"This file contains the Storybook story used to visualize the component."}),`
`,e.jsx(i.h2,{id:"base-behavior",children:"Base Behavior"}),`
`,e.jsxs(i.p,{children:["The component is built on top of MUI ",e.jsx(i.code,{children:"TextField"})," to provide a familiar and accessible text input experience."]}),`
`,e.jsx(i.p,{children:"It supports common form scenarios such as:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"different input types"}),`
`,e.jsx(i.li,{children:"multiple variants"}),`
`,e.jsx(i.li,{children:"start and end adornments"}),`
`,e.jsx(i.li,{children:"helper text"}),`
`,e.jsx(i.li,{children:"password visibility toggle"}),`
`,e.jsx(i.li,{children:"optional character count"}),`
`,e.jsx(i.li,{children:"responsive behavior"}),`
`,e.jsx(i.li,{children:"accessibility support"}),`
`,e.jsx(i.li,{children:"mobile-friendly input behavior"}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"types-and-props",children:"Types and props"}),`
`,e.jsxs(i.p,{children:["The component props were defined in ",e.jsx(i.code,{children:"Input.types.ts"}),"."]}),`
`,e.jsxs(i.p,{children:["The implementation extends the standard MUI ",e.jsx(i.code,{children:"TextField"})," props and adds custom properties for:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"type"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"variant"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"startAdornment"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"endAdornment"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"maxLength"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"showCharacterCount"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"readOnly"})}),`
`]}),`
`,e.jsx(i.h2,{id:"this-keeps-the-component-flexible-while-still-controlling-the-accepted-input-behavior-required-by-the-ticket",children:"This keeps the component flexible while still controlling the accepted input behavior required by the ticket."}),`
`,e.jsx(i.h2,{id:"supported-input-types",children:"Supported input types"}),`
`,e.jsx(i.p,{children:"The component supports the following input types:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"text"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"email"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"password"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"number"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"tel"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"url"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"search"})}),`
`]}),`
`,e.jsxs(i.p,{children:["These types were defined in ",e.jsx(i.code,{children:"Input.constants.ts"}),"."]}),`
`,e.jsxs(i.p,{children:["They were also connected to an ",e.jsx(i.code,{children:"inputMode"})," mapping so that mobile devices can show the correct software keyboard depending on the input type."]}),`
`,e.jsx(i.h2,{id:"this-was-an-important-part-of-the-implementation-because-mobile-keyboard-compatibility-was-explicitly-required",children:"This was an important part of the implementation because mobile keyboard compatibility was explicitly required."}),`
`,e.jsx(i.h2,{id:"password-toggle-implementation",children:"Password toggle implementation"}),`
`,e.jsx(i.p,{children:"For password inputs, a visibility toggle was added using an end adornment with an icon button."}),`
`,e.jsxs(i.p,{children:["The password visibility state was managed in ",e.jsx(i.code,{children:"Input.hook.ts"}),"."]}),`
`,e.jsx(i.p,{children:"This decision helped keep the logic isolated and made the main component easier to maintain."}),`
`,e.jsxs(i.p,{children:["When the input type is ",e.jsx(i.code,{children:"password"}),", the component switches between:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"password"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"text"})}),`
`]}),`
`,e.jsx(i.h2,{id:"depending-on-the-visibility-state",children:"depending on the visibility state."}),`
`,e.jsx(i.h2,{id:"adornments",children:"Adornments"}),`
`,e.jsx(i.p,{children:"The component supports both start and end adornments."}),`
`,e.jsxs(i.p,{children:["This was implemented using MUI ",e.jsx(i.code,{children:"InputAdornment"}),"."]}),`
`,e.jsx(i.p,{children:"The purpose of this feature was to allow icons or extra visual content inside the input field while preserving the structure of the MUI input."}),`
`,e.jsx(i.h2,{id:"this-is-especially-useful-for-fields-such-as-search-inputs-or-password-fields",children:"This is especially useful for fields such as search inputs or password fields."}),`
`,e.jsx(i.h2,{id:"helper-text-and-character-count",children:"Helper text and character count"}),`
`,e.jsxs(i.p,{children:["The helper text logic was added inside ",e.jsx(i.code,{children:"Input.tsx"}),"."]}),`
`,e.jsx(i.p,{children:"When helper text is provided, it is displayed below the input."}),`
`,e.jsxs(i.p,{children:["When ",e.jsx(i.code,{children:"maxLength"})," or ",e.jsx(i.code,{children:"showCharacterCount"})," is provided, the component also displays a character count."]}),`
`,e.jsx(i.p,{children:"This allows the component to handle more common form scenarios without requiring extra layout logic outside of the field."}),`
`,e.jsxs(i.h2,{id:"the-character-count-value-is-calculated-with-a-helper-function-stored-in-inpututilsts",children:["The character count value is calculated with a helper function stored in ",e.jsx(i.code,{children:"Input.utils.ts"}),"."]}),`
`,e.jsx(i.h2,{id:"styling-decisions",children:"Styling decisions"}),`
`,e.jsxs(i.p,{children:["All styling was implemented in ",e.jsx(i.code,{children:"Input.styles.ts"})," using ",e.jsx(i.strong,{children:"MUI styled()"}),"."]}),`
`,e.jsx(i.p,{children:"No external CSS file was used."}),`
`,e.jsx(i.p,{children:"The styling relies on the project design tokens, including values such as:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"--input-background"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"--foreground"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"--muted-foreground"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"--border"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"--ring"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"--destructive"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"--radius-md"})}),`
`]}),`
`,e.jsx(i.h2,{id:"this-decision-keeps-the-component-visually-aligned-with-the-rest-of-the-project-and-avoids-isolated-styling-rules",children:"This decision keeps the component visually aligned with the rest of the project and avoids isolated styling rules."}),`
`,e.jsx(i.h2,{id:"responsive-behavior",children:"Responsive behavior"}),`
`,e.jsx(i.p,{children:"The input component itself was implemented with full-width behavior so it can adapt to its container."}),`
`,e.jsx(i.p,{children:"The responsive layout was demonstrated in Storybook using a single showcase story."}),`
`,e.jsx(i.p,{children:"That story was structured to display the component in different common form states while still adapting across small and large screen sizes."}),`
`,e.jsx(i.h2,{id:"this-helped-verify-the-behavior-requested-in-the-ticket-for-responsive-widths",children:"This helped verify the behavior requested in the ticket for responsive widths."}),`
`,e.jsx(i.h2,{id:"accessibility-considerations",children:"Accessibility considerations"}),`
`,e.jsx(i.p,{children:"Accessibility was considered during the implementation."}),`
`,e.jsxs(i.p,{children:["The component keeps the base accessibility behavior provided by MUI ",e.jsx(i.code,{children:"TextField"})," and also includes an accessible ",e.jsx(i.code,{children:"aria-label"})," for the password visibility button."]}),`
`,e.jsxs(i.p,{children:["The implementation also passes ",e.jsx(i.code,{children:"aria-invalid"})," and ",e.jsx(i.code,{children:"aria-describedby"})," to the input element when needed."]}),`
`,e.jsx(i.h2,{id:"this-was-important-because-the-ticket-explicitly-mentioned-accessibility-checks",children:"This was important because the ticket explicitly mentioned accessibility checks."}),`
`,e.jsx(i.h2,{id:"testing-approach",children:"Testing approach"}),`
`,e.jsxs(i.p,{children:["The component includes tests in ",e.jsx(i.code,{children:"Input.test.tsx"}),"."]}),`
`,e.jsx(i.p,{children:"The tests were added to cover the most important behaviors:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"rendering"}),`
`,e.jsx(i.li,{children:"adornment rendering"}),`
`,e.jsx(i.li,{children:"password visibility toggle"}),`
`,e.jsx(i.li,{children:"error state"}),`
`,e.jsx(i.li,{children:"character count behavior"}),`
`,e.jsx(i.li,{children:"read-only behavior"}),`
`]}),`
`,e.jsx(i.p,{children:"These tests help confirm that the component works as expected and reduce the risk of breaking the main features later."}),`
`,e.jsx(i.h2,{id:"controls",children:"Controls"}),`
`,e.jsx(l,{})]})}function ie(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{ie as default};
