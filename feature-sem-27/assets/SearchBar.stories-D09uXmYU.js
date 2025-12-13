import{j as u}from"./iframe-BRX_71o6.js";import{S as p}from"./SearchBar-DN__Cj2O.js";import{u as i}from"./useTheme-D9Extguz.js";import{B as m}from"./Box-tMQBHcoo.js";const h={title:"Components/SearchBar",component:p,argTypes:{placeholder:{control:"text"},value:{control:"text"},defaultValue:{control:"text"},disabled:{control:"boolean"},autoSearch:{control:"boolean"},debounceDelay:{control:{type:"number",min:0,max:2e3,step:100}},buttonAriaLabel:{control:"text"},inputAriaLabel:{control:"text"},onSearch:{action:"searched"},onChange:{action:"changed"}}},e={args:{placeholder:"Search...",disabled:!1,autoSearch:!1,debounceDelay:300,buttonAriaLabel:"Search",inputAriaLabel:"Search content"}},r={args:{...e.args,autoSearch:!0}},o={args:{...e.args,defaultValue:"Initial search term"}},t={args:{...e.args}},s={args:{...e.args,autoSearch:!0,debounceDelay:1e3}},n={args:{...e.args,disabled:!0}},c={args:{...e.args,placeholder:"Search articles..."},decorators:[d=>{const a=i();return u.jsx(m,{sx:{maxWidth:320,mx:"auto",display:"flex",flexDirection:"column",gap:a.spacing(1.5)},children:u.jsx(d,{})})}]},l={args:{...e.args,placeholder:"Search across all documents..."},decorators:[d=>{const a=i();return u.jsx(m,{sx:{width:"100%",maxWidth:600,mx:"auto",display:"flex",flexDirection:"column",gap:a.spacing(2),padding:a.spacing(3),backgroundColor:a.palette.background.default,borderRadius:Number(a.shape.borderRadius)*2},children:u.jsx(d,{})})}]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    disabled: false,
    autoSearch: false,
    debounceDelay: 300,
    buttonAriaLabel: 'Search',
    inputAriaLabel: 'Search content'
  } as PropsSearchBar
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    autoSearch: true
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultValue: 'Initial search term'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    autoSearch: true,
    debounceDelay: 1000
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    placeholder: 'Search articles...'
  },
  decorators: [Story => {
    const theme = useTheme();
    return <Box sx={{
      maxWidth: 320,
      mx: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(1.5)
    }}>
          <Story />
        </Box>;
  }]
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    placeholder: 'Search across all documents...'
  },
  decorators: [Story => {
    const theme = useTheme();
    return <Box sx={{
      width: '100%',
      maxWidth: 600,
      mx: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
      padding: theme.spacing(3),
      backgroundColor: theme.palette.background.default,
      borderRadius: Number(theme.shape.borderRadius) * 2
    }}>
          <Story />
        </Box>;
  }]
}`,...l.parameters?.docs?.source}}};const g=["Default","WithAutoSearch","WithDefaultValue","Controlled","CustomDebounce","Disabled","MobileLayout","DesktopLayout"],D=Object.freeze(Object.defineProperty({__proto__:null,Controlled:t,CustomDebounce:s,Default:e,DesktopLayout:l,Disabled:n,MobileLayout:c,WithAutoSearch:r,WithDefaultValue:o,__namedExportsOrder:g,default:h},Symbol.toStringTag,{value:"Module"}));export{D as S};
