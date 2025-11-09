import{j as e}from"./jsx-runtime-BTt0U4fe.js";import{useMDXComponents as r}from"./index-CA_HyBnq.js";import"./index-DtJulBIN.js";import"./_commonjsHelpers-BosuxZz1.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"profilecard-component",children:"ProfileCard Component"}),`
`,e.jsx(n.h2,{id:"-overview",children:"📋 Overview"}),`
`,e.jsxs(n.p,{children:["This PR introduces the ",e.jsx(n.strong,{children:"ProfileCard"})," component — a fully reusable, responsive, and accessible UI component for displaying user profile information and statistics. Built following ",e.jsx(n.strong,{children:"Component-Driven Development (CDD)"})," principles and ",e.jsx(n.strong,{children:"Material-UI"})," design system."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-features",children:"✨ Features"}),`
`,e.jsx(n.h3,{id:"core-functionality",children:"Core Functionality"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"User Info Display"}),": Avatar, name, username, and optional role/title"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Smart Avatar Fallbacks"}),': Automatically shows initials (e.g., "JD" for "John Doe") or default icon when no avatar URL is provided']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Statistics Section"}),": Displays metrics (courses, points, ranking) with icons and proper formatting"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flexible Layouts"}),": Three variants (",e.jsx(n.code,{children:"default"}),", ",e.jsx(n.code,{children:"compact"}),", ",e.jsx(n.code,{children:"expanded"}),") for different use cases"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Size Options"}),": Three sizes (",e.jsx(n.code,{children:"small"}),", ",e.jsx(n.code,{children:"medium"}),", ",e.jsx(n.code,{children:"large"}),") for different contexts"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Responsive Design"}),": Adapts automatically to mobile, tablet, and desktop screens using MUI breakpoints"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Fully Accessible"}),": ARIA attributes, semantic HTML, keyboard navigation, and screen reader support"]}),`
`]}),`
`,e.jsx(n.h3,{id:"technical-highlights",children:"Technical Highlights"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type-Safe"}),": Full TypeScript support with proper prop types"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Theme Integration"}),": Uses MUI theme system (",e.jsx(n.code,{children:"theme.spacing"}),", ",e.jsx(n.code,{children:"theme.palette"}),") — no hardcoded values"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Customizable"}),": Supports custom ",e.jsx(n.code,{children:"className"})," and MUI ",e.jsx(n.code,{children:"sx"})," prop for style overrides"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Number Formatting"}),': Automatic locale formatting (e.g., "2,500" points) and ordinal ranking (1st, 2nd, 3rd, 21st, 22nd, etc.)']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Text Truncation"}),": Long names/usernames truncate gracefully with tooltips"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-usage-examples",children:"🚀 Usage Examples"}),`
`,e.jsx(n.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ProfileCard } from '@/components/ProfileCard/ProfileCard';

export const Example = () => {
  return (
    <ProfileCard
      name="Caleb Coronado"
      username="caleb.dev"
      role="Frontend Developer"
      avatarUrl="https://example.com/avatar.jpg"
      stats={{
        courses: 12,
        points: 1280,
        ranking: 5,
      }}
      size="medium"
      variant="default"
    />
  );
};
`})}),`
`,e.jsx(n.h3,{id:"compact-variant-for-lists",children:"Compact Variant (for lists)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ProfileCard
  name="Rosa Quispe"
  username="rosaq"
  role="UX Designer"
  stats={{ courses: 8, points: 2400, ranking: 12 }}
  variant="compact"
  size="small"
/>
`})}),`
`,e.jsx(n.h3,{id:"without-avatar-shows-initials",children:"Without Avatar (shows initials)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ProfileCard
  name="John Doe"
  username="johndoe"
  role="Developer"
  stats={{ courses: 10, points: 2500, ranking: 15 }}
/>
`})}),`
`,e.jsx(n.h3,{id:"without-stats",children:"Without Stats"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ProfileCard
  name="Jane Smith"
  username="janesmith"
  role="Product Manager"
  avatarUrl="https://example.com/jane.jpg"
  showStats={false}
/>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-component-variants",children:"🧩 Component Variants"}),`
`,e.jsx(n.h3,{id:"layout-variants",children:"Layout Variants"}),`
`,e.jsxs(n.p,{children:[`| Variant | Description | Best For |
|---------|-------------|----------|
| `,e.jsx(n.code,{children:"default"}),` | Vertical centered layout | Cards, grids, standalone displays |
| `,e.jsx(n.code,{children:"compact"}),` | Horizontal layout with avatar on left | Lists, comments, sidebars |
| `,e.jsx(n.code,{children:"expanded"})," | Vertical with column stats | Detailed profiles, modals |"]}),`
`,e.jsx(n.h3,{id:"size-variants",children:"Size Variants"}),`
`,e.jsxs(n.p,{children:[`| Size | Avatar | Padding | Best For |
|------|--------|---------|----------|
| `,e.jsx(n.code,{children:"small"}),` | 48px | 16px | Dense lists, mobile views |
| `,e.jsx(n.code,{children:"medium"}),` | 64px | 20px | General use, dashboards |
| `,e.jsx(n.code,{children:"large"})," | 80px | 24px | Profile pages, headers |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-documentation",children:"📘 Documentation"}),`
`,e.jsx(n.h3,{id:"storybook-stories",children:"Storybook Stories"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["✅ ",e.jsx(n.strong,{children:"Playground"}),": Interactive testing with all controls"]}),`
`,e.jsxs(n.li,{children:["✅ ",e.jsx(n.strong,{children:"Size Variations"}),": Visual comparison of all sizes"]}),`
`,e.jsxs(n.li,{children:["✅ ",e.jsx(n.strong,{children:"Layout Variants"}),": Showcase of default, compact, and expanded"]}),`
`,e.jsxs(n.li,{children:["✅ ",e.jsx(n.strong,{children:"Edge Cases"}),": Long names, missing avatars, empty stats"]}),`
`,e.jsxs(n.li,{children:["✅ ",e.jsx(n.strong,{children:"Gallery"}),": Comprehensive visual overview"]}),`
`]}),`
`,e.jsx(n.h2,{id:"-testing",children:"🧪 Testing"}),`
`,e.jsx(n.h3,{id:"test-coverage",children:"Test Coverage"}),`
`,e.jsxs(n.p,{children:["Comprehensive unit tests (",e.jsx(n.code,{children:"ProfileCard.test.tsx"}),") with ",e.jsx(n.strong,{children:"20 test cases"})," covering rendering, accessibility, edge cases, and all prop combinations."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-files-structure",children:"📁 Files Structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`ProfileCard/
├── ProfileCard.tsx
├── ProfileCard.types.ts
├── ProfileCard.constants.ts
├── ProfileCard.styles.ts
├── ProfileCard.test.tsx
├── ProfileCard.stories.tsx
└── ProfileCard.docs.mdx
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-code-quality",children:"✅ Code Quality"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Named exports only"}),`
`,e.jsx(n.li,{children:"Props suffix on types"}),`
`,e.jsx(n.li,{children:"MUI theme system (no hardcoded values)"}),`
`,e.jsx(n.li,{children:"Responsive breakpoints"}),`
`,e.jsx(n.li,{children:"Full TypeScript typing"}),`
`,e.jsx(n.li,{children:"Semantic HTML + ARIA attributes"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-checklist",children:"🧾 Checklist"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"[x] All tests passing"}),`
`,e.jsx(n.li,{children:"[x] Storybook stories ready"}),`
`,e.jsx(n.li,{children:"[x] Documentation completed"}),`
`,e.jsx(n.li,{children:"[x] Code reviewed and linted"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-visual-preview",children:"👀 Visual Preview"}),`
`,e.jsx(n.p,{children:"Run Storybook locally:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn storybook
`})}),`
`,e.jsxs(n.p,{children:["Then navigate to: ",e.jsx(n.strong,{children:"Components → ProfileCard"})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-how-to-test",children:"🧰 How to Test"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Install dependencies
yarn install

# Run tests
yarn test
`})})]})}function d(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{d as default};
