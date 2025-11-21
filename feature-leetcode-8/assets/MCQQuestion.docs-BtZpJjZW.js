import{j as e}from"./iframe-0X0d_CYM.js";import{useMDXComponents as t}from"./index-Ca1jWP09.js";import"./preload-helper-PPVm8Dsz.js";function i(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"-mcqquestion",children:"🧩 MCQQuestion"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"MCQQuestion"}),` component represents a multiple-choice question.
It allows the user to select a single answer from several available options.
It is designed to be reusable, accessible, and easily integrated into assessment environments or interactive questionnaires.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-purpose",children:"🎯 Purpose"}),`
`,e.jsx(n.p,{children:"The main purpose of the component is to offer a standardized way of displaying multiple-choice questions within an exam system, survey, or educational form."}),`
`,e.jsxs(n.p,{children:["It is developed following the ",e.jsx(n.strong,{children:"Component-Driven Development"})," approach, which guarantees:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Clear separation of responsibilities."}),`
`,e.jsx(n.li,{children:"Ease of testing and maintenance."}),`
`,e.jsx(n.li,{children:"Reuse in different contexts (Storybook, production, testing, etc.)."}),`
`,e.jsx(n.li,{children:"Compliance with accessibility standards (WAI-ARIA)."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"️-props",children:"⚙️ Props"}),`
`,e.jsx(n.p,{children:"The component receives the following properties:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"question"}),": The main text of the question to display."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"options"}),": The list of available options to select."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Each option has a ",e.jsx(n.code,{children:"label"})," (visible text) and a ",e.jsx(n.code,{children:"value"})," (an associated internal value)."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"selectedValue"})," ",e.jsx(n.em,{children:"(optional)"}),": The currently selected value."]}),`
`]}),`
`,e.jsxs(n.p,{children:["If provided, the component operates in ",e.jsx(n.strong,{children:"controlled"})," mode."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onChange"}),": The function executed when the user selects an option."]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns the value of the selected option."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"number"})," ",e.jsx(n.em,{children:"(optional)"}),": The number or index of the question. Displayed before the text (for example, “1.”)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"disabled"})," ",e.jsx(n.em,{children:"(optional)"}),": Disables all options and prevents user interaction."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-component-structure",children:"🧱 Component Structure"}),`
`,e.jsx(n.p,{children:"The component is divided into several files to maintain a modular and scalable architecture:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MCQQuestion.tsx"}),": Main logic and rendering of the component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MCQQuestion.styles.ts"}),": Custom styles using the MUI Styled API."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MCQQuestion.types.ts"}),": Strict typing with TypeScript."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MCQQuestion.stories.tsx"}),": Storybook stories for visualization."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MCQQuestion.test.tsx"}),": Unit tests with the React Testing Library and Vitest."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-design-and-styles",children:"🎨 Design and Styles"}),`
`,e.jsxs(n.p,{children:["The design is based on ",e.jsx(n.strong,{children:"Material UI (MUI)"}),". Fonts (Montserrat, Syne) must be imported globally via the theme."]}),`
`,e.jsx(n.p,{children:"Design Features:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Vertical layout with even spacing."}),`
`,e.jsx(n.li,{children:"Use of a grid to organize options responsibly."}),`
`,e.jsx(n.li,{children:"Colors consistent with the overall theme."}),`
`,e.jsx(n.li,{children:"A clean appearance."}),`
`,e.jsx(n.li,{children:"Responsive styling that automatically adapts to small screens."}),`
`]}),`
`,e.jsx(n.p,{children:"Internal visual structure:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<QuestionContainer>
<QuestionText> (with optional number)
<RadioGroup>
<OptionsGrid>
<StyledFormControlLabel> (an option with its radio)
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-accessibility-a11y",children:"♿ Accessibility (A11y)"}),`
`,e.jsxs(n.p,{children:["The component complies with ",e.jsx(n.strong,{children:"WAI-ARIA"})," accessibility standards, ensuring that it is usable by all users, including those using assistive technologies."]}),`
`,e.jsx(n.p,{children:"Accessibility Features:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use of semantic roles (",e.jsx(n.code,{children:"radiogroup"}),", ",e.jsx(n.code,{children:"radio"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-labelledby"}),", ",e.jsx(n.code,{children:"aria-checked"}),", and ",e.jsx(n.code,{children:"aria-disabled"})," attributes."]}),`
`,e.jsx(n.li,{children:"Full support for keyboard navigation."}),`
`,e.jsxs(n.li,{children:["Appropriate semantic structure (",e.jsx(n.code,{children:"FormLabel"}),", ",e.jsx(n.code,{children:"fieldset"}),", ",e.jsx(n.code,{children:"legend"}),")."]}),`
`,e.jsx(n.li,{children:"Predictable and consistent behavior for screen readers."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-unit-tests",children:"🧪 Unit Tests"}),`
`,e.jsxs(n.p,{children:["The component is covered by unit tests using the ",e.jsx(n.strong,{children:"React Testing Library"})," and ",e.jsx(n.strong,{children:"Vitest"}),`.
The tests verify the following behaviors:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Correct rendering of the question text and options."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Execution of the ",e.jsx(n.code,{children:"onChange"})," function when an option is selected."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Updating the state controlled by the ",e.jsx(n.code,{children:"selectedValue"})," prop."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Disabled state when ",e.jsx(n.code,{children:"disabled"})," is ",e.jsx(n.code,{children:"true"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Validation of ARIA roles and attributes for accessibility."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Correct handling of long or multi-line text."}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"These tests ensure that the component is reliable, accessible, and behaves consistently when state and prop changes occur."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-usage-example",children:"📘 Usage Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<MCQQuestion
number={1}
question="Which of the following is a programming language?"
options={[
{ label: "HTML", value: "html" },
{ label: "Python", value: "python" },
{ label: "CSS", value: "css" },
]}
onChange={(value) => console.log("Selected:", value)}
/>
`})}),`
`,e.jsx(n.p,{children:"This example shows a basic use of the component in an assessment or form context."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-use-in-storybook",children:"🧰 Use in Storybook"}),`
`,e.jsx(n.p,{children:"The component has different stories in Storybook to display its variants:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," Normal and interactive state."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Disabled:"})," Disabled version, no interaction possible."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"LongQuestion:"})," Example with long question text."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"MobileLayout:"})," View adapted to small screens (320px)."]}),`
`]}),`
`,e.jsx(n.p,{children:"These stories allow you to visually validate the component's design, behavior, and accessibility before integrating it into production."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-applied-best-practices",children:"🧩 Applied Best Practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Development following ",e.jsx(n.strong,{children:"CDD (Component-Driven Development)"}),"."]}),`
`,e.jsxs(n.li,{children:["Strict typing with ",e.jsx(n.strong,{children:"TypeScript"}),"."]}),`
`,e.jsxs(n.li,{children:["Consistent and responsive styles with ",e.jsx(n.strong,{children:"Material UI Styled API"}),"."]}),`
`,e.jsxs(n.li,{children:["Full compliance with ",e.jsx(n.strong,{children:"Accessibility (ARIA)"})," standards."]}),`
`,e.jsx(n.li,{children:"Complete and automated unit testing."}),`
`,e.jsxs(n.li,{children:["Integration with ",e.jsx(n.strong,{children:"Storybook"})," for visual documentation."]}),`
`,e.jsx(n.li,{children:"Modular, clear, and scalable structure."}),`
`]})]})}function c(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{c as default};
