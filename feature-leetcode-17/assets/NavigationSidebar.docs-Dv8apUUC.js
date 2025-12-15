import{j as e}from"./iframe-Bqq4eweS.js";import{useMDXComponents as t}from"./index-7cxx0_LK.js";import"./preload-helper-PPVm8Dsz.js";function r(n){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"navigationsidebar",children:"NavigationSidebar"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"NavigationSidebar"})," component renders the vertical navigation used across the dashboard layout. It includes the vertical ",e.jsx(i.code,{children:"Logo"}),", a list of navigation items (icon + label) and supports highlighting the active route with a gradient for both icon and label."]}),`
`,e.jsx(i.h2,{id:"responsibilities",children:"Responsibilities"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Render a vertical sidebar with configurable ",e.jsx(i.code,{children:"items"}),"."]}),`
`,e.jsxs(i.li,{children:["Expose ",e.jsx(i.code,{children:"onNavigate"})," so parent can handle routing."]}),`
`,e.jsxs(i.li,{children:["Support ",e.jsx(i.code,{children:"currentPath"})," to control which item is active."]}),`
`]}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsx(i.p,{children:"Manual Props"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Prop"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"items"}),e.jsx("td",{children:e.jsx("code",{children:"NavItem[]"})}),e.jsx("td",{children:"No"}),e.jsxs("td",{children:["Array of navigation items: ",e.jsx("code",{children:"{ label, route, iconSvg? }"}),". Defaults provided by the component."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"currentPath"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"No"}),e.jsxs("td",{children:["Current active route. If omitted, the component will default to ",e.jsx("code",{children:"/dashboard"})," or infer from ",e.jsx("code",{children:"window.location.pathname"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"onNavigate"}),e.jsx("td",{children:e.jsx("code",{children:"(route: string) => void"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"Callback fired when an item is clicked. Receives the target route."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"width"}),e.jsx("td",{children:e.jsx("code",{children:"number | string"})}),e.jsx("td",{children:"No"}),e.jsxs("td",{children:["Sidebar width (e.g. ",e.jsx("code",{children:"80"})," or ",e.jsx("code",{children:"'80px'"}),")."]})]})]})]}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Items are keyboard-focusable via ",e.jsx(i.code,{children:"ListItemButton"}),"."]}),`
`,e.jsxs(i.li,{children:["Use proper ",e.jsx(i.code,{children:"aria-label"})," on Logo or top container when needed."]}),`
`]}),`
`,e.jsx(i.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import NavigationSidebar from 'src/components/NavigationSidebar/NavigationSidebar';

<NavigationSidebar
	onNavigate={(r) =&gt; navigate(r)}
	currentPath="/dashboard"
/>
`})}),`
`,e.jsx(i.h2,{id:"included-stories",children:"Included Stories"}),`
`,e.jsx("a",{href:"?/iframe.html?globals=&id=components-navigationsidebar--default&viewMode=story",children:"Default"}),`
`,e.jsx("br",{}),`
`,e.jsx("a",{href:"?/iframe.html?globals=&id=components-navigationsidebar--active-tests&viewMode=story",children:"ActiveTests"})]})}function c(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{c as default};
