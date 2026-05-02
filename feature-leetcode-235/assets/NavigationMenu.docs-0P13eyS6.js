import{j as e}from"./iframe-CKl824gZ.js";import{useMDXComponents as r}from"./index-Cglf5Weu.js";import{M as t,b as i,C as a}from"./index-CLCvYSap.js";import{N as c,D as l,W as d,A as h,S as x,a as p,V as g,C as m}from"./NavigationMenu.stories-xZqDk0j1.js";import"./preload-helper-Dgx73s6z.js";import"./index-DFav9hU1.js";import"./index-C7kR6GsW.js";import"./index-BHliEELb.js";import"./createSvgIcon-CNPSM__O.js";import"./memoTheme-DL6m90rI.js";import"./Menu-DWM9qPeu.js";import"./useTheme-B8kWpzcq.js";import"./Fade-BZi_W-mB.js";import"./useTimeout-olROxnyq.js";import"./useForkRef-BWdN8tDd.js";import"./getReactElementRef-B2LynDOv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-DXeR6tYj.js";import"./useSlot-XPuHpuhf.js";import"./mergeSlotProps-CtAjI8Mj.js";import"./mergeSlotProps-CgsuJLR7.js";import"./Portal-Cs5a5Cy6.js";import"./List-Dhjq8mEx.js";import"./Modal-B6iAlyma.js";import"./useTheme-BZ6_7U3r.js";import"./useSlotProps-CuJgaPEb.js";import"./index-mkl__K9r.js";import"./getThemeProps-BNKRaIjr.js";import"./Box-_ofePS2U.js";import"./useControlled-BFH0e1u0.js";import"./ListItemButton-qmPw8nYQ.js";import"./ButtonBase-BjSnlcVR.js";import"./IconButton-Xr4IuB_v.js";import"./CircularProgress-DG4jbYRE.js";import"./Button-CgIi_ygr.js";function o(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsx(n.h1,{id:"navigationmenu",children:"NavigationMenu"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"fully-responsive"}),", ",e.jsx(n.strong,{children:"accessible"}),` navigation component built on
`,e.jsxs(n.a,{href:"https://mui.com/material-ui/react-app-bar/",rel:"nofollow",children:["MUI ",e.jsx(n.code,{children:"AppBar"})]}),`,
`,e.jsx(n.a,{href:"https://mui.com/material-ui/react-toolbar/",rel:"nofollow",children:e.jsx(n.code,{children:"Toolbar"})}),`, and
`,e.jsx(n.a,{href:"https://mui.com/material-ui/react-drawer/",rel:"nofollow",children:e.jsx(n.code,{children:"Drawer"})})," with ",e.jsx(n.strong,{children:"keyboard navigation"}),`
and `,e.jsx(n.strong,{children:"mobile-friendly"})," dropdown support."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"NavigationMenu"}),` component renders a primary navigation structure that adapts
to screen size:`]}),`
`,e.jsx(n.p,{children:`| Viewport  | Layout                                         |
| --------- | ---------------------------------------------- |
| Desktop   | Horizontal nav bar with optional flyout panels |
| Mobile    | Hamburger icon → Drawer with accordion nav     |`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"✓ Horizontal nav bar on desktop (≥ 768px)"}),`
`,e.jsx(n.li,{children:"✓ Hamburger drawer on mobile (< 768px)"}),`
`,e.jsxs(n.li,{children:["✓ Active item highlighted via ",e.jsx(n.code,{children:'aria-current="page"'})]}),`
`,e.jsx(n.li,{children:"✓ Optional logo/brand slot"}),`
`,e.jsxs(n.li,{children:["✓ Keyboard navigation (",e.jsx(n.code,{children:"Tab"}),", ",e.jsx(n.code,{children:"Arrow keys"}),", ",e.jsx(n.code,{children:"Escape"}),")"]}),`
`,e.jsx(n.li,{children:"✓ Touch targets ≥ 44×44px on mobile"}),`
`,e.jsx(n.li,{children:"✓ Fully-responsive: 320px → 1440px tested"}),`
`]}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.p,{children:"The component is already bundled. Import directly from the component catalog:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { NavigationMenu } from '@/component-catalog/NavigationMenu';
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Your project already ships ",e.jsx(n.code,{children:"@mui/material"})," v7 and ",e.jsx(n.code,{children:"@emotion/*"}),". No extra dependencies needed."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"quick-start",children:"Quick Start"}),`
`,e.jsx(n.h3,{id:"basic-navigation-desktop--mobile",children:"Basic Navigation (Desktop + Mobile)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { NavigationMenu } from '@/component-catalog/NavigationMenu';

const navSections = [
  {
    id: 'main',
    items: [
      { id: 'premium', label: 'Premium', href: '/premium' },
      { id: 'explore', label: 'Explore', href: '/explore' },
      { id: 'problems', label: 'Problems', href: '/problems' },
    ],
  },
];

export function App() {
  const [currentPath, setCurrentPath] = React.useState('/premium');

  const handleNavigation = (item: NavItem) => {
    if (item.href) {
      setCurrentPath(item.href);
      // Implement your routing logic here
    }
  };

  return (
    <NavigationMenu
      navSections={navSections}
      currentPath={currentPath}
      onItemClick={handleNavigation}
    />
  );
}
`})}),`
`,e.jsx(n.h3,{id:"with-logo",children:"With Logo"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<NavigationMenu
  navSections={navSections}
  logo="https://example.com/logo.svg"
  currentPath="/explore"
/>
`})}),`
`,e.jsx(n.h3,{id:"size-variants",children:"Size Variants"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Small, medium (default), or large
<NavigationMenu navSections={navSections} size="large" />
`})}),`
`,e.jsx(n.h3,{id:"color-variants",children:"Color Variants"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Primary (default) or secondary
<NavigationMenu navSections={navSections} variant="secondary" />
`})}),`
`,e.jsx(n.h3,{id:"svg-icon-customization",children:"SVG Icon Customization"}),`
`,e.jsxs(n.p,{children:["The navigation menu uses SVG icons (",e.jsx(n.code,{children:"NavigationMenu.svg"}),", ",e.jsx(n.code,{children:"NavigationMenu2.svg"}),") with green strokes by default. The stroke color can be customized using the CSS variable ",e.jsx(n.code,{children:"--nav-stroke-color"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Default: green accent */
--nav-stroke-color: #00C950;

/* To override globally, add to your CSS/SCSS */
:root {
  --nav-stroke-color: #your-custom-color;
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"No component code changes required"})," — the SVGs automatically adapt when the CSS variable is defined in your stylesheet."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"stories",children:"Stories"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(n.p,{children:"Basic navigation menu without logo."}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h3,{id:"with-logo-1",children:"With Logo"}),`
`,e.jsx(n.p,{children:"Logo adapts to desktop/mobile breakpoint."}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h3,{id:"active-state",children:"Active State"}),`
`,e.jsx(n.p,{children:"Premium item is marked as active."}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"size-small",children:"Size Small"}),`
`,e.jsx(n.p,{children:"Compact variant."}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h3,{id:"size-large",children:"Size Large"}),`
`,e.jsx(n.p,{children:"Expanded variant."}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"variant-secondary",children:"Variant Secondary"}),`
`,e.jsx(n.p,{children:"Alternate color scheme."}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.h3,{id:"custom-labels",children:"Custom Labels"}),`
`,e.jsxs(n.p,{children:["Edit ",e.jsx(n.code,{children:"navSections"})," to see different menu items."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h2,{id:"controls",children:"Controls"}),`
`,e.jsx(a,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"prop-reference",children:"Prop Reference"}),`
`,e.jsx(n.h3,{id:"navigationmenuprops",children:"NavigationMenuProps"}),`
`,e.jsxs(n.p,{children:[`| Prop                  | Type                                  | Default       | Description                                    |
| --------------------- | ------------------------------------- | ------------- | ---------------------------------------------- |
| `,e.jsx(n.code,{children:"navSections"}),"         | ",e.jsx(n.code,{children:"NavSection[]"}),"                        | ",e.jsx(n.strong,{children:"Required"}),`  | Array of navigation sections with items        |
| `,e.jsx(n.code,{children:"currentPath"}),"         | ",e.jsx(n.code,{children:"string"}),"                              | ",e.jsx(n.code,{children:"''"}),`          | Active route path for highlighting             |
| `,e.jsx(n.code,{children:"onItemClick"}),"         | ",e.jsx(n.code,{children:"(item: NavItem) => void"}),`             | —             | Callback when user clicks a menu item          |
| `,e.jsx(n.code,{children:"ariaLabel"}),"           | ",e.jsx(n.code,{children:"string"}),"                              | ",e.jsx(n.code,{children:"'Main navigation'"}),` | Accessible label for screen readers            |
| `,e.jsx(n.code,{children:"logo"}),"                | ",e.jsx(n.code,{children:"string \\| ReactNode"}),`                 | —             | Logo URL or React component                    |
| `,e.jsx(n.code,{children:"size"}),"                | ",e.jsx(n.code,{children:"'small' \\| 'medium' \\| 'large'"}),"      | ",e.jsx(n.code,{children:"'medium'"}),`    | Navigation menu size variant                   |
| `,e.jsx(n.code,{children:"variant"}),"             | ",e.jsx(n.code,{children:"'primary' \\| 'secondary'"}),"            | ",e.jsx(n.code,{children:"'primary'"}),`   | Color scheme variant                           |
| `,e.jsx(n.code,{children:"useScrollHide"}),"       | ",e.jsx(n.code,{children:"boolean"}),"                             | ",e.jsx(n.code,{children:"false"}),`       | Hide nav on scroll down (requires SSR-safe wrapper) |
| `,e.jsx(n.code,{children:"rightContent"}),"        | ",e.jsx(n.code,{children:"ReactNode"}),`                           | —             | Custom content on nav bar right side           |
| `,e.jsx(n.code,{children:"onMobileMenuToggle"}),"  | ",e.jsx(n.code,{children:"(isOpen: boolean) => void"}),`           | —             | Callback for mobile drawer state               |
| `,e.jsx(n.code,{children:"forceHamburger"}),"      | ",e.jsx(n.code,{children:"boolean"}),"                             | ",e.jsx(n.code,{children:"false"}),`       | Always show hamburger button (skip responsive logic). For debugging/Storybook only. |
| `,e.jsx(n.code,{children:"drawerProps"}),"         | ",e.jsx(n.code,{children:"Partial<DrawerProps>"}),`                | —             | Additional MUI Drawer props                    |
| `,e.jsx(n.code,{children:"toolbarProps"}),"        | ",e.jsx(n.code,{children:"Partial<ToolbarProps>"}),"               | —             | Additional MUI Toolbar props                   |"]}),`
`,e.jsx(n.h3,{id:"navsection",children:"NavSection"}),`
`,e.jsxs(n.p,{children:[`| Prop          | Type        | Required | Description                    |
| ------------- | ----------- | -------- | ------------------------------ |
| `,e.jsx(n.code,{children:"id"}),"          | ",e.jsx(n.code,{children:"string"}),`    | Yes      | Unique section identifier      |
| `,e.jsx(n.code,{children:"title"}),"       | ",e.jsx(n.code,{children:"string"}),`    | —        | Optional section heading       |
| `,e.jsx(n.code,{children:"items"}),"       | ",e.jsx(n.code,{children:"NavItem[]"}),` | Yes      | Array of menu items            |
| `,e.jsx(n.code,{children:"subheader"}),"   | ",e.jsx(n.code,{children:"ReactNode"}),` | —        | Custom subheader component     |
| `,e.jsx(n.code,{children:"showDivider"})," | ",e.jsx(n.code,{children:"boolean"}),"   | —        | Display divider after section  |"]}),`
`,e.jsx(n.h3,{id:"navitem",children:"NavItem"}),`
`,e.jsxs(n.p,{children:[`| Prop                | Type                    | Required | Description                          |
| ------------------- | ----------------------- | -------- | ------------------------------------ |
| `,e.jsx(n.code,{children:"id"}),"                | ",e.jsx(n.code,{children:"string"}),`                | Yes      | Unique item identifier               |
| `,e.jsx(n.code,{children:"label"}),"             | ",e.jsx(n.code,{children:"string"}),`                | Yes      | Display text                         |
| `,e.jsx(n.code,{children:"href"}),"              | ",e.jsx(n.code,{children:"string"}),`                | —        | Link destination                     |
| `,e.jsx(n.code,{children:"icon"}),"              | ",e.jsx(n.code,{children:"ReactNode"}),`             | —        | Icon component                       |
| `,e.jsx(n.code,{children:"disabled"}),"          | ",e.jsx(n.code,{children:"boolean"}),`               | —        | Disable interaction                  |
| `,e.jsx(n.code,{children:"badge"}),"             | ",e.jsx(n.code,{children:"ReactNode"}),"             | —        | Badge or notification indicator      |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Screen reader support:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Navigation container marked with ",e.jsx(n.code,{children:'role="navigation"'})," and ",e.jsx(n.code,{children:"aria-label"})]}),`
`,e.jsxs(n.li,{children:["Active item annotated with ",e.jsx(n.code,{children:'aria-current="page"'})]}),`
`,e.jsxs(n.li,{children:["Disabled items carry ",e.jsx(n.code,{children:'aria-disabled="true"'})]}),`
`,e.jsxs(n.li,{children:["Hamburger button has descriptive ",e.jsx(n.code,{children:'aria-label="Toggle menu"'})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Keyboard navigation:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tab"})," / ",e.jsx(n.code,{children:"Shift+Tab"})," → Move focus between menu items"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Arrow keys"})," → Navigate within nav groups (future enhancement)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Escape"})," → Close mobile drawer"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Enter"})," / ",e.jsx(n.code,{children:"Space"})," → Activate menu item or toggle drawer"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Touch targets:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"All interactive elements ≥ 44×44 px on mobile (WCAG 2.5.5 compliance)"}),`
`,e.jsx(n.li,{children:"Desktop buttons maintain minimum 32×32 px"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Testing:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Component passes ",e.jsx(n.code,{children:"axe-core"})," accessibility audit"]}),`
`,e.jsx(n.li,{children:"Supports JAWS, NVDA, and VoiceOver screen readers"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"responsive-behaviour",children:"Responsive Behaviour"}),`
`,e.jsx(n.p,{children:`| Breakpoint | Viewport | Layout                                         |
| ---------- | -------- | ---------------------------------------------- |
| xs         | 320 px   | Full-width mobile drawer, hamburger button     |
| sm         | 375 px   | Full-width mobile drawer, comfortable spacing |
| md (768px) | 768 px   | Desktop horizontal nav bar                     |
| lg         | 1024 px  | Horizontal nav bar, wider container            |
| xl         | 1440 px+ | Horizontal nav bar, max-width constraint       |`}),`
`,e.jsxs(n.p,{children:["Spacing and size values use ",e.jsx(n.code,{children:"rem"})," strings or unitless multiples of ",e.jsx(n.code,{children:"theme.spacing()"}),". See ",e.jsx(n.strong,{children:"Design Tokens"})," section for details on each token type."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"file-structure",children:"File Structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`NavigationMenu/
├── NavigationMenu.tsx           # Component logic & JSX
├── NavigationMenu.types.ts      # TypeScript interfaces
├── NavigationMenu.constants.ts  # Constants (ARIA labels)
├── NavigationMenu.hook.ts       # useNavigationMenuState hook
├── NavigationMenu.styles.ts     # MUI styled() components
├── NavigationMenu.utils.ts      # getSizeConfig, getVariantConfig
├── NavigationMenu.test.tsx      # Vitest + Testing Library suite
├── NavigationMenu.stories.tsx   # Storybook 9 CSF format
└── NavigationMenu.docs.mdx      # This documentation
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsx(n.h3,{id:"theme-imports",children:"Theme Imports"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"NavigationMenu"})," component imports multiple utilities and tokens from the theme system. Here's a detailed breakdown of all imports across the component files:"]}),`
`,e.jsx(n.h4,{id:"navigationmenutsx",children:e.jsx(n.strong,{children:"NavigationMenu.tsx"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { navigationMenuTokens } from '../../style-library/theme/theme';
import { useTheme } from '@mui/material';
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Uses ",e.jsx(n.code,{children:"navigationMenuTokens.layout.iconContainer"})," for icon rendering"]}),`
`,e.jsxs(n.li,{children:["Uses ",e.jsx(n.code,{children:"theme"})," hook for theme breakpoints and spacing"]}),`
`]}),`
`,e.jsx(n.h4,{id:"navigationmenustylests",children:e.jsx(n.strong,{children:"NavigationMenu.styles.ts"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { alpha } from '../../style-library';
import { navigationMenuTokens } from '../../style-library/theme/theme';
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"navigationMenuTokens"})," for all styled component definitions (AppBar, Toolbar, Buttons, Drawer, etc.)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"alpha"})," from style-library for color opacity utilities"]}),`
`]}),`
`,e.jsx(n.h4,{id:"navigationmenuhookts",children:e.jsx(n.strong,{children:"NavigationMenu.hook.ts"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useTheme } from '../../style-library';
import { navigationMenuTokens } from '../../style-library/theme/theme';
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"navigationMenuTokens.scroll.hideThreshold"})," for scroll trigger behavior"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useTheme"})," hook for responsive breakpoints"]}),`
`]}),`
`,e.jsx(n.h4,{id:"navigationmenuutilsts",children:e.jsx(n.strong,{children:"NavigationMenu.utils.ts"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { navigationMenuTokens } from '../../style-library/theme/theme';
import type { Theme } from '@mui/material';
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"navigationMenuTokens.sizes"})," for responsive AppBar heights"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"navigationMenuTokens.spacing"})," for padding and margin calculations"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"token-import",children:"Token Import"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"NavigationMenu"})," component utilizes centralized design tokens from the theme system:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { navigationMenuTokens } from '../../style-library/theme/theme';
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Used in 4 files:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"NavigationMenu.tsx"})," → Component layout and rendering"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"NavigationMenu.styles.ts"})," → Styled component definitions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"NavigationMenu.utils.ts"})," → Size and variant configurations"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"NavigationMenu.hook.ts"})," → Scroll behavior thresholds"]}),`
`]}),`
`,e.jsx(n.h3,{id:"navigationmenutokens-structure",children:"navigationMenuTokens Structure"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"navigationMenuTokens"})," object contains all styling, spacing, and sizing configuration:"]}),`
`,e.jsxs(n.p,{children:[`| Category | Properties | Usage |
|----------|-----------|-------|
| `,e.jsx(n.strong,{children:"colors"})," | ",e.jsx(n.code,{children:"background"}),", ",e.jsx(n.code,{children:"border"}),", ",e.jsx(n.code,{children:"text"}),` | AppBar, drawer, and text colors |
| `,e.jsx(n.strong,{children:"sizes"})," | ",e.jsx(n.code,{children:"appBarHeight"})," (3 variants), ",e.jsx(n.code,{children:"logoHeight"}),", ",e.jsx(n.code,{children:"drawerWidth"}),", ",e.jsx(n.code,{children:"megaPanel"}),` | Responsive dimensions |
| `,e.jsx(n.strong,{children:"minTouchTarget"})," | ",e.jsx(n.code,{children:"5.5"}),` | WCAG touch target minimum (→ 44px with theme.spacing) |
| `,e.jsx(n.strong,{children:"spacing"})," | ",e.jsx(n.code,{children:"itemPaddingY/X"}),", ",e.jsx(n.code,{children:"toolbarGap"}),", ",e.jsx(n.code,{children:"iconMargin"}),", ",e.jsx(n.code,{children:"logoMargin"}),`, etc | Layout spacing |
| `,e.jsx(n.strong,{children:"signInButton"})," | ",e.jsx(n.code,{children:"fontWeight"}),", ",e.jsx(n.code,{children:"height"}),", ",e.jsx(n.code,{children:"paddingX"}),", ",e.jsx(n.code,{children:"fontSize"}),", ",e.jsx(n.code,{children:"borderRadius"}),` | Sign-in button styling |
| `,e.jsx(n.strong,{children:"layout"})," | ",e.jsx(n.code,{children:"appBar"}),", ",e.jsx(n.code,{children:"toolbar"}),", ",e.jsx(n.code,{children:"iconContainer"}),", ",e.jsx(n.code,{children:"logoContainer"}),", ",e.jsx(n.code,{children:"desktopNav"}),", ",e.jsx(n.code,{children:"mobileNav"}),", ",e.jsx(n.code,{children:"drawer"}),", ",e.jsx(n.code,{children:"scrollbar"}),` | Flexbox & position configs |
| `,e.jsx(n.strong,{children:"listItem"})," | ",e.jsx(n.code,{children:"position"}),", ",e.jsx(n.code,{children:"fontSize"}),", ",e.jsx(n.code,{children:"fontWeight"}),", ",e.jsx(n.code,{children:"hover"}),", ",e.jsx(n.code,{children:"active"}),", ",e.jsx(n.code,{children:"disabled"}),` | Menu item states |
| `,e.jsx(n.strong,{children:"accordion"})," | ",e.jsx(n.code,{children:"boxShadow"}),", ",e.jsx(n.code,{children:"expanded"}),", ",e.jsx(n.code,{children:"summaryButton"}),", ",e.jsx(n.code,{children:"summaryFocused"}),` | Mobile accordion styling |
| `,e.jsx(n.strong,{children:"megaPanel"})," | ",e.jsx(n.code,{children:"popperOffset"}),", ",e.jsx(n.code,{children:"borderRadius"}),` | Flyout panel positioning |
| `,e.jsx(n.strong,{children:"opacity"})," | ",e.jsx(n.code,{children:"accordion"}),", ",e.jsx(n.code,{children:"border"}),` | Transparency values |
| `,e.jsx(n.strong,{children:"borders"})," | ",e.jsx(n.code,{children:"width"}),` | Border thickness |
| `,e.jsx(n.strong,{children:"scroll"})," | ",e.jsx(n.code,{children:"hideThreshold"})," | Scroll hide trigger (100px) |"]}),`
`,e.jsx(n.h3,{id:"size-token-values",children:"Size Token Values"}),`
`,e.jsxs(n.p,{children:["All size values are expressed in ",e.jsx(n.strong,{children:"rem"})," (relative em units) for consistency with the project's design system. This allows for scalable, accessible sizing that respects user font-size preferences."]}),`
`,e.jsxs(n.p,{children:[`| Token | Value | Equivalent |
|-------|-------|------------|
| `,e.jsx(n.strong,{children:"appBarHeight.small"})," | ",e.jsx(n.code,{children:"'3rem'"}),` | 48px |
| `,e.jsx(n.strong,{children:"appBarHeight.medium"})," | ",e.jsx(n.code,{children:"'3.5625rem'"}),` | 57px |
| `,e.jsx(n.strong,{children:"appBarHeight.large"})," | ",e.jsx(n.code,{children:"'4rem'"}),` | 64px |
| `,e.jsx(n.strong,{children:"logoHeight"})," | ",e.jsx(n.code,{children:"'1.5rem'"}),` | 24px |
| `,e.jsx(n.strong,{children:"drawerWidth"})," | ",e.jsx(n.code,{children:"'16rem'"}),` | 256px |
| `,e.jsx(n.strong,{children:"megaPanel.minWidth"})," | ",e.jsx(n.code,{children:"'17.5rem'"}),` | 280px |
| `,e.jsx(n.strong,{children:"megaPanel.maxWidth"})," | ",e.jsx(n.code,{children:"'25rem'"})," | 400px |"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Conversion formula:"})," ",e.jsx(n.code,{children:"px ÷ 16 = rem"})," (assuming base font-size of 16px)"]}),`
`,e.jsx(n.h3,{id:"token-unit-consistency",children:"Token Unit Consistency"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"navigationMenuTokens"})," object uses standardized unit representations to avoid ambiguity:"]}),`
`,e.jsxs(n.p,{children:[`| Unit Type | Usage | Examples |
|-----------|-------|----------|
| `,e.jsx(n.strong,{children:"String rem"})," | Direct CSS values (no conversion) | ",e.jsx(n.code,{children:"fontSize: '0.875rem'"}),", ",e.jsx(n.code,{children:"height: '1.75rem'"}),", ",e.jsx(n.code,{children:"logoHeight: '1.5rem'"}),` |
| `,e.jsx(n.strong,{children:"Number multiplier"})," | Values passed to ",e.jsx(n.code,{children:"theme.spacing()"})," | ",e.jsx(n.code,{children:"paddingX: 2"}),", ",e.jsx(n.code,{children:"letterSpacing: 0.05"}),", ",e.jsx(n.code,{children:"borderRadius: 0.5"}),` |
| `,e.jsx(n.strong,{children:"Pure number"})," | Unitless CSS properties | ",e.jsx(n.code,{children:"fontWeight: 600"})," |"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example from signInButton:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`signInButton: {
  fontWeight: 600,           // Pure number (unitless)
  height: '1.75rem',         // String rem (28px)
  paddingX: 2,               // Multiplier → theme.spacing(2) = 16px
  fontSize: '0.875rem',      // String rem
  letterSpacing: 0.05,       // Multiplier → theme.spacing(0.05) for conversion
  borderRadius: 0.5,         // Multiplier → theme.spacing(0.5) = 4px
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Usage in NavigationMenu.tsx:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const signInButtonSx = {
  ...navigationMenuTokens.signInButton,
  letterSpacing: theme.spacing(navigationMenuTokens.signInButton.letterSpacing),
  borderRadius: theme.spacing(navigationMenuTokens.signInButton.borderRadius),
  // ... other properties
};
`})}),`
`,e.jsx(n.p,{children:"Example usage in styles:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: navigationMenuTokens.sizes.appBarHeight.medium, // '3.5625rem'
  backgroundColor: navigationMenuTokens.colors.background,
}));
`})}),`
`,e.jsx(n.h3,{id:"scroll-hide-threshold",children:"Scroll Hide Threshold"}),`
`,e.jsx(n.p,{children:"The scroll hide feature uses a 100px threshold before triggering the hide animation:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const isScrollHidden = useScrollTrigger({
  threshold: navigationMenuTokens.scroll.hideThreshold, // 100px
});
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const StyledAppBar = styled(AppBar)(({ theme }) => ({
  ...navigationMenuTokens.layout.appBar,
  height: navigationMenuTokens.sizes.appBarHeight.medium,
  backgroundColor: navigationMenuTokens.colors.background,
  borderBottom: \`\${navigationMenuTokens.borders.width}px solid \${navigationMenuTokens.colors.border}\`,
}));
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"In NavigationMenu.utils.ts:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`function getSizeConfig(size: NavigationMenuSize = 'medium', theme: Theme) {
  const sizeConfigs = {
    small: {
      appBarHeight: navigationMenuTokens.sizes.appBarHeight.small,
      itemPadding: theme.spacing(
        navigationMenuTokens.spacing.itemPaddingY.small,
        navigationMenuTokens.spacing.itemPaddingX.small
      ),
    },
    medium: {
      appBarHeight: navigationMenuTokens.sizes.appBarHeight.medium,
      // ... medium config
    },
    large: {
      appBarHeight: navigationMenuTokens.sizes.appBarHeight.large,
      // ... large config
    },
  };
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"In NavigationMenu.hook.ts:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const isScrollHidden = useScrollTrigger({
  disableHysteresis: true,
  threshold: navigationMenuTokens.scroll.hideThreshold, // 100px
});
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"import-architecture",children:"Import Architecture"}),`
`,e.jsx(n.h3,{id:"complete-import-map",children:"Complete Import Map"}),`
`,e.jsxs(n.p,{children:["This section shows all imports from ",e.jsx(n.code,{children:"theme.ts"})," across the NavigationMenu component:"]}),`
`,e.jsx(n.h4,{id:"1-navigationmenutsx-component-logic",children:e.jsx(n.strong,{children:"1. NavigationMenu.tsx (Component Logic)"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// ✅ From theme.ts
import { navigationMenuTokens } from '../../style-library/theme/theme';
import { useTheme } from '@mui/material';

// Usage in component:
const renderIcon = (icon: React.ReactNode, fontSize: string | number | undefined) =>
  icon ? (
    <Box sx={{ ...navigationMenuTokens.layout.iconContainer, fontSize: fontSize || 'inherit' }}>
      {icon}
    </Box>
  ) : null;
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Tokens Used:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"navigationMenuTokens.layout.iconContainer"})," → Icon container flexbox styling"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h4,{id:"2-navigationmenustylests-styled-components",children:e.jsx(n.strong,{children:"2. NavigationMenu.styles.ts (Styled Components)"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// ✅ From theme.ts and style-library
import { alpha } from '../../style-library';
import { navigationMenuTokens } from '../../style-library/theme/theme';

// Usage example:
const StyledAppBar = styled(AppBar)(({ theme }) =>
  mergeTokens(
    {
      height: navigationMenuTokens.sizes.appBarHeight.medium,
      backgroundColor: navigationMenuTokens.colors.background,
      color: theme.palette.common.white,
      boxShadow: theme.shadows[8],
      borderBottom: \`\${navigationMenuTokens.borders.width}px solid \${navigationMenuTokens.colors.border}\`,
      zIndex: theme.zIndex.appBar,
      transition: theme.transitions.create(['top', 'box-shadow'], {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut,
      }),
    },
    navigationMenuTokens.layout.appBar
  )
);
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Tokens Used:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"navigationMenuTokens.sizes.appBarHeight"})," → AppBar responsive heights"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"navigationMenuTokens.colors"})," → Background, border, and text colors"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"navigationMenuTokens.borders.width"})," → Border thickness"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"navigationMenuTokens.layout.*"})," → Flexbox and positioning for all styled components"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"navigationMenuTokens.listItem.*"})," → Menu item hover/active/disabled states"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"navigationMenuTokens.spacing.*"})," → Padding, margin, and gaps"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"navigationMenuTokens.accordion.*"})," → Mobile accordion styling"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"alpha"})," → Color opacity for hover effects"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h4,{id:"3-navigationmenuhookts-state-management-hook",children:e.jsx(n.strong,{children:"3. NavigationMenu.hook.ts (State Management Hook)"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// ✅ From theme.ts and style-library
import { useTheme } from '../../style-library';
import { navigationMenuTokens } from '../../style-library/theme/theme';

// Usage in hook:
const isScrollHidden = useScrollTrigger({
  disableHysteresis: true,
  threshold: navigationMenuTokens.scroll.hideThreshold,  // 100px
});

const isMobile = useMediaQuery(theme.breakpoints.down('md'), { noSsr: true });
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Tokens Used:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"navigationMenuTokens.scroll.hideThreshold"})," → Scroll hide trigger (100px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useTheme"})," hook → Access to breakpoints for responsive queries"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h4,{id:"4-navigationmenuutilsts-configuration-helpers",children:e.jsx(n.strong,{children:"4. NavigationMenu.utils.ts (Configuration Helpers)"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// ✅ From theme.ts
import { navigationMenuTokens } from '../../style-library/theme/theme';
import type { Theme } from '@mui/material';

// Usage in utility function:
function getSizeConfig(size: NavigationMenuSize = 'medium', theme: Theme) {
  const sizeConfigs = {
    small: {
      appBarHeight: navigationMenuTokens.sizes.appBarHeight.small,
      itemPadding: \`\${theme.spacing(navigationMenuTokens.spacing.itemPaddingY.small)} \${theme.spacing(navigationMenuTokens.spacing.itemPaddingX.small)}\`,
      itemFontSize: theme.typography.caption.fontSize,
      toolbarGap: navigationMenuTokens.spacing.toolbarGap.small,
    },
    medium: {
      appBarHeight: navigationMenuTokens.sizes.appBarHeight.medium,
      itemPadding: \`\${theme.spacing(navigationMenuTokens.spacing.itemPaddingY.medium)} \${theme.spacing(navigationMenuTokens.spacing.itemPaddingX.medium)}\`,
      itemFontSize: theme.typography.body2.fontSize,
      toolbarGap: navigationMenuTokens.spacing.toolbarGap.medium,
    },
    large: {
      appBarHeight: navigationMenuTokens.sizes.appBarHeight.large,
      itemPadding: \`\${theme.spacing(navigationMenuTokens.spacing.itemPaddingY.large)} \${theme.spacing(navigationMenuTokens.spacing.itemPaddingX.large)}\`,
      itemFontSize: theme.typography.body1.fontSize,
      toolbarGap: navigationMenuTokens.spacing.toolbarGap.large,
    },
  };
  return sizeConfigs[size];
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Tokens Used:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"navigationMenuTokens.sizes.appBarHeight"})," → For each size variant"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"navigationMenuTokens.spacing.itemPaddingY"})," → Vertical padding by size"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"navigationMenuTokens.spacing.itemPaddingX"})," → Horizontal padding by size"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"navigationMenuTokens.spacing.toolbarGap"})," → Gap between toolbar items"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"token-usage-summary",children:"Token Usage Summary"}),`
`,e.jsxs(n.p,{children:[`| Token Category | Used In | Purpose |
|----------------|---------|---------|
| `,e.jsx(n.code,{children:"colors"}),` | styles.ts | AppBar background, borders, text colors |
| `,e.jsx(n.code,{children:"sizes.appBarHeight"}),` | styles.ts, utils.ts, tsx | Responsive AppBar heights (48/57/64px) |
| `,e.jsx(n.code,{children:"sizes.logoHeight"}),` | styles.ts | Logo sizing |
| `,e.jsx(n.code,{children:"sizes.drawerWidth"}),` | styles.ts | Mobile drawer width (256px) |
| `,e.jsx(n.code,{children:"minTouchTarget"}),` | styles.ts | WCAG touch target minimum (→ 44px with theme.spacing) |
| `,e.jsx(n.code,{children:"spacing.*"}),` | styles.ts, utils.ts, tsx | Padding, margins, gaps throughout |
| `,e.jsx(n.code,{children:"signInButton.*"}),` | styles.ts | Sign-in button styling |
| `,e.jsx(n.code,{children:"layout.*"}),` | styles.ts, tsx | Flexbox, positioning, layout props |
| `,e.jsx(n.code,{children:"listItem.*"}),` | styles.ts | Menu item states (hover, active, disabled) |
| `,e.jsx(n.code,{children:"accordion.*"}),` | styles.ts | Mobile accordion styling |
| `,e.jsx(n.code,{children:"megaPanel.*"}),` | styles.ts | Flyout panel positioning |
| `,e.jsx(n.code,{children:"opacity.*"}),` | styles.ts | Element transparency |
| `,e.jsx(n.code,{children:"borders.width"}),` | styles.ts | Border thickness |
| `,e.jsx(n.code,{children:"scroll.hideThreshold"})," | hook.ts | Scroll hide trigger distance |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"how-navigationmenutokens-integrates-with-theme",children:"How navigationMenuTokens Integrates with Theme"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"navigationMenuTokens"})," object is exported from ",e.jsx(n.code,{children:"theme.ts"})," alongside other token exports:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// src/style-library/theme/theme.ts

// Other token exports (existing)
export const PROFILE_CARD_SPACING = { ... };
export const PROFILE_CARD_TYPOGRAPHY = { ... };
export const PROFILE_CARD_COLORS = { ... };
export const pillTagTokens = { ... };
export const formInputTokens = { ... };
export const typographyTokens = { ... };

// ✅ NEW: NavigationMenu tokens
export const navigationMenuTokens = {
  colors: { ... },
  sizes: { ... },
  spacing: { ... },
  layout: { ... },
  listItem: { ... },
  // ... and more
} as const;

// Theme configuration and export
const theme = createCustomTheme(themeConfig);
export default theme;
`})}),`
`,e.jsx(n.p,{children:"This structure allows:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"✅ Centralized token management"}),`
`,e.jsx(n.li,{children:"✅ Type-safe styling across multiple components"}),`
`,e.jsx(n.li,{children:"✅ Easy token reuse and maintenance"}),`
`,e.jsx(n.li,{children:"✅ Consistent design system implementation"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"stack",children:"Stack"}),`
`,e.jsxs(n.p,{children:[`| Package              | Version | Role                       |
| -------------------- | ------- | -------------------------- |
| `,e.jsx(n.code,{children:"@mui/material"}),`      | ^7      | AppBar, Toolbar, Drawer    |
| `,e.jsx(n.code,{children:"@mui/icons-material"}),`| ^7      | Menu, Close icons          |
| `,e.jsx(n.code,{children:"@emotion/react"}),`     | ^11     | CSS-in-JS via MUI styled() |
| `,e.jsx(n.code,{children:"react"}),`              | ^18     | UI framework               |
| `,e.jsx(n.code,{children:"typescript"}),"         | ^5      | Type safety                |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"integration-example",children:"Integration Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// pages/App.tsx
import { NavigationMenu } from '@/component-catalog/navigation-menu';
import type { NavSection } from '@/component-catalog/NavigationMenu';

const navigationStructure: NavSection[] = [
  {
    id: 'main-menu',
    items: [
      {
        id: 'home',
        label: 'Home',
        href: '/',
        icon: <HomeIcon />,
      },
      {
        id: 'explore',
        label: 'Explore',
        href: '/explore',
        icon: <ExploreIcon />,
      },
      {
        id: 'contest',
        label: 'Contest',
        href: '/contest',
        icon: <EmojiEventsIcon />,
      },
    ],
  },
];

export function App() {
  const [currentPath, setCurrentPath] = React.useState('/');

  return (
    <>
      <NavigationMenu
        navSections={navigationStructure}
        logo={<YourLogo />}
        currentPath={currentPath}
        size="medium"
        variant="primary"
        onItemClick={(item) => {
          if (item.href) {
            setCurrentPath(item.href);
          }
        }}
      />
      <main>{/* Page content */}</main>
    </>
  );
}
`})})]})}function K(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{K as default};
