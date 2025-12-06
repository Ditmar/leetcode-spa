import{j as e}from"./iframe-BLkpsOqA.js";import{useMDXComponents as t}from"./index-VVAzVkLS.js";import{M as r,C as l}from"./index-BT-ERH4f.js";import{Desktop as o}from"./SettingsPage.stories-BRJCNNLm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CeBioQpZ.js";import"./index-BZkPf7f3.js";import"./index-CeNp4_Q8.js";import"./createSvgIcon-D9uHM1x1.js";import"./memoTheme-K-_jYewk.js";import"./Stack-CWBtV5Ou.js";import"./getThemeProps-Vpw8z9DM.js";import"./Typography-qsre9Iq8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BgXOFoh6.js";import"./Paper-CMgXiWiu.js";import"./useTheme-Dzz3X1iW.js";import"./MenuItem-Bz9oRZex.js";import"./Menu-CYiwEDz-.js";import"./useSlot-DIHReoAG.js";import"./useForkRef-C_s4FjP_.js";import"./ButtonBase-J5HaIzAC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./FormLabel-e3RCcsMi.js";import"./SwitchBase-Q6JZEcmI.js";import"./Select-DoXNHH-B.js";function s(i){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Pages/Settings Page"}),`
`,e.jsx(n.h1,{id:"settings-page",children:"Settings Page"}),`
`,e.jsx(n.p,{children:"User settings page that allows customization of:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Theme (light/dark)"}),`
`,e.jsx(n.li,{children:"Notifications"}),`
`,e.jsx(n.li,{children:"Language (English / Spanish)"}),`
`,e.jsx(n.li,{children:"Privacy settings"}),`
`]}),`
`,e.jsx(n.p,{children:"The page is fully responsive: on small screens it uses collapsible accordions, while on desktop it displays clean cards."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Automatic persistence in ",e.jsx(n.code,{children:"localStorage"})," using a versioned key (",e.jsx(n.code,{children:"app-user-preferences-v1"}),")"]}),`
`,e.jsx(n.li,{children:"Full internationalization (i18n) support from day one"}),`
`,e.jsxs(n.li,{children:["Theme applied globally via ",e.jsx(n.code,{children:'class="dark"'})," and ",e.jsx(n.code,{children:"data-theme"})," on ",e.jsx(n.code,{children:"<html>"})]}),`
`,e.jsx(n.li,{children:"Debounced saving (300ms) to prevent excessive writes"}),`
`,e.jsx(n.li,{children:"Migration-ready for future preference schema changes"}),`
`,e.jsx(n.li,{children:"Complete accessibility (ARIA labels, semantic IDs)"}),`
`,e.jsx(n.li,{children:"Full test coverage (unit, RTL, Storybook)"}),`
`,e.jsxs(n.li,{children:["Performance optimized with ",e.jsx(n.code,{children:"React.memo"}),", ",e.jsx(n.code,{children:"useMemo"}),", and ",e.jsx(n.code,{children:"useCallback"})]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { SettingsPage } from '@/pages/SettingsPage';

function App() {
  return <SettingsPage />;
}
`})}),`
`,e.jsx(n.h3,{id:"available-props",children:"Available Props"}),`
`,e.jsxs(n.p,{children:[`| Prop                  | Type                              | Description                                              | Default  |
|-----------------------|-----------------------------------|-----------------------------------------------------------|----------|
| `,e.jsx(n.code,{children:"initialPreferences"}),"  | ",e.jsx(n.code,{children:"Partial<UserPreferences>"}),`        | Initial values (useful for testing, SSR, or previews)     | —        |
| `,e.jsx(n.code,{children:"forceMobile"}),"         | ",e.jsx(n.code,{children:"boolean"}),"                         | Forces mobile layout (great for Storybook and testing)    | ",e.jsx(n.code,{children:"false"}),"  |"]}),`
`,e.jsx(n.h3,{id:"view",children:"View"}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(n.h3,{id:"supported-languages",children:"Supported Languages"}),`
`,e.jsxs(n.p,{children:[`| Code | Language | Labels Available |
|------|----------|------------------|
| `,e.jsx(n.code,{children:"en"}),` | English  | All              |
| `,e.jsx(n.code,{children:"es"})," | Spanish  | All              |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["To add a new language, simply extend the ",e.jsx(n.code,{children:"SETTINGS_LABELS"})," object in ",e.jsx(n.code,{children:"SettingsPage.constants.ts"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"accessibility-a11y",children:"Accessibility (a11y)"}),`
`,e.jsx(n.p,{children:"All interactive controls include:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Unique ",e.jsx(n.code,{children:"id"})," from ",e.jsx(n.code,{children:"ACCESSIBILITY_IDS"})]}),`
`,e.jsxs(n.li,{children:["Translated ",e.jsx(n.code,{children:"aria-label"})," based on current language"]}),`
`,e.jsx(n.li,{children:"Proper semantic roles for switches and selects"}),`
`,e.jsx(n.li,{children:"High contrast guaranteed in both light and dark modes"}),`
`]}),`
`,e.jsx(n.h3,{id:"testing",children:"Testing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Unit tests for the ",e.jsx(n.code,{children:"useSettingsPage"})," hook"]}),`
`,e.jsx(n.li,{children:"Component rendering and interaction tests with React Testing Library"}),`
`,e.jsx(n.li,{children:"Deterministic, safe mocks using Vitest"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data-testid"})," attributes on all major sections"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Available test IDs"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`SETTINGS_TEST_IDS.container           → Main page container
SETTINGS_TEST_IDS.themeSection        → Theme section
SETTINGS_TEST_IDS.notificationsSection → Notifications section
SETTINGS_TEST_IDS.languageSection     → Language selector
SETTINGS_TEST_IDS.privacySection      → Privacy settings
`})}),`
`,e.jsx(n.h3,{id:"implementation-notes",children:"Implementation Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Theme is synced directly to ",e.jsx(n.code,{children:"<html>"})," → works instantly with Tailwind’s ",e.jsx(n.code,{children:"dark:"})," variant"]}),`
`,e.jsxs(n.li,{children:["Component wrapped in ",e.jsx(n.code,{children:"React.memo"})," to prevent unnecessary re-renders"]}),`
`,e.jsxs(n.li,{children:["MUI theme created with ",e.jsx(n.code,{children:"useMemo"})," to avoid recreation on every render"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useSettingsPage"})," hook is pure and side-effect-contained, making it extremely testable and maintainable"]}),`
`]})]})}function L(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{L as default};
