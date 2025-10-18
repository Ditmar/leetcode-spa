import{j as e}from"./iframe-DJOTlb9o.js";import{useMDXComponents as r}from"./index-B522EQNK.js";import"./preload-helper-PPVm8Dsz.js";function i(s){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"avatarmenu",children:"AvatarMenu"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Component"}),": Contextual menu associated with the authenticated user — avatar + menu"]}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"AvatarMenu"})})," is a components component designed to display a ",e.jsx(n.strong,{children:"contextual menu"}),`
associated with the authenticated user's avatar. It's built with `,e.jsx(n.strong,{children:"React"}),`,
`,e.jsx(n.strong,{children:"TypeScript"}),", and ",e.jsx(n.strong,{children:"Material UI (MUI)"}),`, and encapsulates the access, focus,
and components logic using the `,e.jsx(n.code,{children:"useAvatarMenu"})," hook."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"goals-and-scope",children:"Goals and Scope"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Provide a visual trigger (avatar) that opens an ",e.jsx(n.strong,{children:"accessible menu"}),` with
user-related actions (profile, settings, logout).`]}),`
`,e.jsxs(n.li,{children:["Ensure ",e.jsx(n.strong,{children:"keyboard components"})," and compatibility with screen readers."]}),`
`,e.jsxs(n.li,{children:["Be flexible and customizable via ",e.jsx(n.code,{children:"menuItems"}),", ",e.jsx(n.code,{children:"avatarProps"}),", and ",e.jsx(n.code,{children:"fullWidth"}),"."]}),`
`,e.jsxs(n.li,{children:[`Maintain separation of concerns: logic in the hook, UI in the JSX,
styles in the `,e.jsx(n.code,{children:"styles"})," file."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props-and-api",children:"Props and API"}),`
`,e.jsx(n.h2,{id:"manual-props",children:"Manual Props"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Prop"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"avatarUrl"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"URL of the avatar image"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"username"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"Username for aria-label"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"menuItems"}),e.jsx("td",{children:e.jsx("code",{children:"AvatarMenuItem[]"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"List of menu items"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"avatarProps"}),e.jsx("td",{children:e.jsx("code",{children:"Omit<MuiAvatarProps, 'src' | 'alt'>"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"Additional props for MUI Avatar"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"fullWidth"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"Whether the trigger takes up the full width"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"data-testid"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"Identifier for testing"})]})]})]}),`
`,e.jsxs(n.h3,{id:"avatarmenuitem-structure",children:[e.jsx(n.code,{children:"AvatarMenuItem"})," Structure"]}),`
`,e.jsx(n.p,{children:"Each menu item has the following (simplified) shape:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`interface AvatarMenuItem {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  divider?: boolean;
  'data-testid'?: string;
  menuItemProps?: Omit<MuiMenuItemProps, 'onClick'>;
  key?: 'profile' | 'settings' | 'logout' | string;
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility-a11y",children:"Accessibility (A11y)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'aria-haspopup="true"'})," and ",e.jsx(n.code,{children:"aria-expanded"})," on the trigger."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-controls"})," on the trigger pointing to the ",e.jsx(n.code,{children:"menuId"})," when open."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-labelledby"})," on the ",e.jsx(n.code,{children:"MenuList"})," pointing to the trigger to link readings by screen-readers."]}),`
`,e.jsxs(n.li,{children:["Keyboard handling:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"Enter"})})," or ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Space"})}),": opens the menu from the trigger."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"Escape"})}),": closes the menu and restores focus."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"ArrowDown"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ArrowUp"})}),": navigates between items."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["**",e.jsx(n.code,{children:"MenuItem"}),"**s respect ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"disabled"})})," and expose ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"aria-disabled"})}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"focusedIndex"})})," and ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"autoFocus"})})," are used to indicate visual focus at the item level."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"styles-and-tokens",children:"Styles and Tokens"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"AvatarMenuRoot"})})," controls ",e.jsx(n.code,{children:"width"}),", ",e.jsx(n.code,{children:"padding"}),", and ",e.jsx(n.code,{children:"borderRadius"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"AvatarContainer"})})," is a flex container with gap dependent on ",e.jsx(n.code,{children:"theme.spacing"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"TriangleIndicator"})})," is a CSS triangle that rotates based on ",e.jsx(n.code,{children:"$isOpen"})," — animation via ",e.jsx(n.code,{children:"theme.transitions"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"UsernameText"})})," is hidden on small screens using breakpoints."]}),`
`]}),`
`,e.jsx(n.p,{children:"Reference Tokens (examples):"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"theme.palette.text.primary"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"theme.shape.borderRadius"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"theme.spacing(0.5)"})," / ",e.jsx(n.code,{children:"theme.spacing(1.25)"})]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"visual-behavior-and-ux",children:"Visual Behavior and UX"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The menu is anchored with ",e.jsx(n.code,{children:"anchorOrigin"})," and ",e.jsx(n.code,{children:"transformOrigin"})," to ",e.jsx(n.code,{children:"bottom/right"})," -> ",e.jsx(n.code,{children:"top/right"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"MenuListProps.autoFocus"})})," for automatic focus on opening and ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"dense"})})," to compact the list."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"MenuItem"})})," applies ",e.jsx(n.code,{children:"sx"})," when focused (shadow, border, borderRadius)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"menuItemProps.sx"})})," is respected if provided."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"testing-summary-of-existing-suite",children:"Testing (Summary of Existing Suite)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Initial rendering with ",e.jsx(n.code,{children:"aria-expanded=false"}),"."]}),`
`,e.jsxs(n.li,{children:["Opening / closing by click and verification of the ",e.jsx(n.code,{children:"menu"})," role."]}),`
`,e.jsxs(n.li,{children:["Execution of item's ",e.jsx(n.code,{children:"onClick"})," and subsequent closing."]}),`
`,e.jsxs(n.li,{children:["Use of ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"DEFAULT_AVATAR_MENU_ITEMS"})})," if no ",e.jsx(n.code,{children:"menuItems"})," are passed."]}),`
`,e.jsxs(n.li,{children:["Behavior with empty ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"avatarUrl"})})," (fallback)."]}),`
`,e.jsxs(n.li,{children:["Menu with disabled items (",e.jsx(n.code,{children:"aria-disabled"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"fullWidth"})})," propagation and DOM structure."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"included-stories",children:"Included Stories"}),`
`,e.jsx(n.h1,{id:"avatarmenu---stories",children:"AvatarMenu - Stories"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Links to each individual story for the AvatarMenu component."}),`
`]}),`
`,e.jsx("a",{href:"?/iframe.html?globals=&id=components-avatarmenu--standard",children:"Standard — Standard menu with default items"}),`
`,e.jsx("br",{}),`
`,e.jsx("a",{href:"?/iframe.html?globals=&id=components-avatarmenu--custom-actions&viewMode=story",children:"CustomActions — Menu with custom items"}),`
`,e.jsx("br",{}),`
`,e.jsx("a",{href:"?/iframe.html?globals=&args=&id=components-avatarmenu--avatar-fallback&viewMode=story",children:"AvatarFallback — No avatar image"}),`
`,e.jsx("br",{}),`
`,e.jsx("a",{href:"?/iframe.html?globals=&args=&id=components-avatarmenu--empty-menu&viewMode=story",children:"EmptyMenu — Empty menu"}),`
`,e.jsx("br",{}),`
`,e.jsx("a",{href:"?/iframe.html?globals=&args=&id=components-avatarmenu--disabled-items&viewMode=story",children:"DisabledItems — Disabled items"}),`
`,e.jsx("br",{}),`
`,e.jsx("a",{href:"?/iframe.html?globals=&args=&id=components-avatarmenu--layout-variants&viewMode=story",children:"LayoutVariants — fullWidth and without username"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<AvatarMenu
  avatarUrl="/images/user.jpg"
  username="Alex Méndez"
  menuItems={[
    { label: 'Profile', onClick: () => navigate('/profile') },
    { label: 'Log Out', onClick: logout, divider: true }
  ]}
/>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<AvatarMenu
  avatarUrl=""
  username="User"
  avatarProps={{ sx: { width: 36, height: 36 } }}
  menuItems={[
    { label: 'Dark Mode', onClick: toggleDarkMode },
    { label: 'Support', onClick: openHelp }
  ]}
  fullWidth
/>
`})}),`
`,e.jsx(n.hr,{})]})}function c(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{c as default};
