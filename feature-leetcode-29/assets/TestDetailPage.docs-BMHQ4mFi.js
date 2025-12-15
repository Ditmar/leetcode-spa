import{j as e}from"./iframe-DiGQfTj6.js";import{useMDXComponents as i}from"./index-CHfZsMMP.js";import"./preload-helper-PPVm8Dsz.js";function s(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"testdetailpage",children:"TestDetailPage"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"TestDetailPage"})," component shows detailed information for a selected test and provides the primary action to start that test. It is intended to be a page-level component used inside the app layout (including navigation and other chrome)."]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"️-integration-note-placeholder-components-used-for-scaffold",children:"⚠️ Integration note: placeholder components used for scaffold"}),`
`,e.jsxs(t.p,{children:["This implementation intentionally renders local placeholders for a few design-system building blocks that may be implemented elsewhere in the codebase (for example: ",e.jsx(t.code,{children:"PillTag"}),", ",e.jsx(t.code,{children:"MetricBadge"}),", and the project's ",e.jsx(t.code,{children:"NavigationSidebar"}),"). The page is built as a ",e.jsx(t.strong,{children:"complete scaffold"})," so it can be used in Storybook, unit tests and visual regression testing without requiring the full product integration."]}),`
`,e.jsx(t.p,{children:"When the real shared components become available, integration is a matter of removing the local placeholders and importing the real components."}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"-purpose",children:"🎯 Purpose"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Display test metadata (title, subtitle, duration, certificates) and a prominent ",e.jsx(t.strong,{children:"Start Test"})," action."]}),`
`,e.jsx(t.li,{children:"Provide contextual notices and preparatory recommendations for the test taker (environment, resources, timing)."}),`
`,e.jsx(t.li,{children:"Support loading / error states and be fully usable in Storybook for visual testing."}),`
`]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"-features",children:"✨ Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Title + subtitle area with logo and Start button."}),`
`,e.jsx(t.li,{children:"Certificate pill explaining certificate eligibility."}),`
`,e.jsx(t.li,{children:"Metric area and notices area with icon + text rows."}),`
`,e.jsx(t.li,{children:"Responsive layout: items stack on smaller viewports and maintain visual parity with the design system."}),`
`,e.jsx(t.li,{children:"Simple placeholder components used for missing shared UI pieces so the page remains functional in isolation."}),`
`]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"️-component-props-api",children:"⚙️ Component Props (API)"}),`
`,e.jsxs(t.p,{children:[`| Prop       | Type                        | Description |
| :--------- | :-------------------------- | :---------- |
| `,e.jsx(t.code,{children:"testId"}),"   | ",e.jsx(t.code,{children:"string"}),`                    | Id of the test to load (optional in stories/tests). |
| `,e.jsx(t.code,{children:"onStart"}),"  | ",e.jsx(t.code,{children:"(testId: string) => void"}),"  | Optional callback executed when the Start button is clicked. If omitted, the page navigates to ",e.jsx(t.code,{children:"/tests/{testId}/run"})," by setting ",e.jsx(t.code,{children:"window.location.href"}),`.
| `,e.jsx(t.code,{children:"loading"}),"  | ",e.jsx(t.code,{children:"boolean"}),`                   | Override loading state (useful in stories or tests). |
| `,e.jsx(t.code,{children:"error"}),"    | ",e.jsx(t.code,{children:"string \\u007F null"}),"        | Override error state (useful for testing error UI). |"]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"-behavior-and-usage-notes",children:"🧩 Behavior and usage notes"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["If ",e.jsx(t.code,{children:"loading"})," is true the page shows a centered spinner and hides content placeholder areas."]}),`
`,e.jsxs(t.li,{children:["If ",e.jsx(t.code,{children:"error"})," is set the page displays a simple alert-style placeholder with the error message."]}),`
`,e.jsxs(t.li,{children:["The component uses a local hook (",e.jsx(t.code,{children:"useTestDetail"}),") that currently fetches data from local mock data (",e.jsx(t.code,{children:"TestDetailPage.data.ts"}),"). In production this hook should be replaced or extended to call the real API."]}),`
`]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"-implementation-details",children:"🛠 Implementation details"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Styling"}),": The component is styled with MUI and ",e.jsx(t.code,{children:"styled()"})," helpers. The page sets a top-level font-family where appropriate (the Story uses the ",e.jsx(t.code,{children:"Syne"})," font in the project assets). Spacing and responsive breakpoints follow theme tokens."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Assets"}),": The page loads small PNG/SVG assets from ",e.jsx(t.code,{children:"src/pages/TestDetailPage/assets/"})," (icons for notices and an optional inline logo) using Vite-compatible ",e.jsx(t.code,{children:"new URL('./assets/..', import.meta.url).href"})," imports to ensure Storybook and the dev server can resolve them."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Placeholders"}),": The Certificate pill, MetricBadge, PillTag and Navigation box are intentionally simplified placeholders. They are present so Storybook shows the final layout — replace them with real components once available."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Accessibility"}),": Placeholders use semantic elements where appropriate to avoid harming automated accessibility checks; e.g., interactive placeholders are ",e.jsx(t.code,{children:"<button>"})," or MUI ",e.jsx(t.code,{children:"Button"})," equivalents."]}),`
`]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"-testing--storybook",children:"🧪 Testing & Storybook"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["The page ships with stories in ",e.jsx(t.code,{children:"TestDetailPage.stories.tsx"})," (Default, Loading, ErrorState, MobilePreview) so you can view and snapshot-test the different states."]}),`
`,e.jsxs(t.li,{children:["Unit tests (",e.jsx(t.code,{children:"TestDetailPage.test.tsx"}),") exercise key behaviors: rendering the page, showing loading/error states and calling ",e.jsx(t.code,{children:"onStart"})," when provided."]}),`
`]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"-integration-checklist-when-replacing-placeholders",children:"📌 Integration checklist (when replacing placeholders)"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:["Replace local ",e.jsx(t.code,{children:"PillTag"})," placeholder with the design-system ",e.jsx(t.code,{children:"PillTag"})," import."]}),`
`,e.jsxs(t.li,{children:["Replace ",e.jsx(t.code,{children:"MetricBadge"})," placeholder with the shared ",e.jsx(t.code,{children:"MetricBadge"})," and pass the real metrics data."]}),`
`,e.jsxs(t.li,{children:["Replace the ",e.jsx(t.code,{children:"NavigationSidebar"})," placeholder with the application navigation component."]}),`
`,e.jsxs(t.li,{children:["Remove the inline logo fallback and point the ",e.jsx(t.code,{children:"TestHeader"}),"/logo import to the official shared asset (avoid duplicating large SVGs; prefer the flattened PNG/SVG that the design system exports)."]}),`
`]}),`
`,e.jsx(t.hr,{}),`
`,e.jsxs(t.p,{children:["If you want, I can also convert this MDX to include an embedded ",e.jsx(t.code,{children:"<Meta of={...} />"})," referencing ",e.jsx(t.code,{children:"TestDetailPage.stories.tsx"})," so the docs page shows the interactive Canvas with the stories — tell me if you want that and I'll add it."]})]})}function a(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{a as default};
