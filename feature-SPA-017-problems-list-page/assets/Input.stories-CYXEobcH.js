import{A as e}from"./iframe-CuQJ7Lof.js";import{S as c}from"./Search-DE-M-ynP.js";import{I as r}from"./Input-BnloZg4N.js";import{B as d}from"./Box-CKcHIzeN.js";const p={title:"component-catalog/Input",component:r},a={args:{label:"",placeholder:"email@example.com"}},o={args:{label:"",error:!0,helperText:"Required"}},s={args:{label:"",disabled:!0}},t={args:{label:"",maxLength:20,showCharacterCount:!0,defaultValue:"Hello"}},l={render:()=>e.jsx(d,{sx:n=>({width:"100%",maxWidth:n.breakpoints.values.lg,mx:"auto",p:3,border:"0.0625rem solid var(--border)",borderRadius:"var(--radius-lg)",backgroundColor:"var(--card)"}),children:e.jsxs(d,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",md:"1fr 1fr"},gap:3},children:[e.jsx(r,{type:"email",placeholder:"email@example.com"}),e.jsx(r,{type:"password",placeholder:"••••••••"}),e.jsx(r,{type:"search",placeholder:"Search...",startAdornment:e.jsx(c,{})}),e.jsx(r,{disabled:!0,placeholder:"Disabled"}),e.jsx(d,{sx:{gridColumn:{xs:"auto",md:"1 / -1"}},children:e.jsx(r,{multiline:!0,minRows:4,placeholder:"Tell us about yourself..."})})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: '',
    placeholder: 'email@example.com'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: '',
    error: true,
    helperText: 'Required'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: '',
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: '',
    maxLength: 20,
    showCharacterCount: true,
    defaultValue: 'Hello'
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={theme => ({
    width: '100%',
    maxWidth: theme.breakpoints.values.lg,
    mx: 'auto',
    p: 3,
    border: '0.0625rem solid var(--border)',
    borderRadius: 'var(--radius-lg)',
    backgroundColor: 'var(--card)'
  })}>
      <Box sx={{
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',
        md: '1fr 1fr'
      },
      gap: 3
    }}>
        <Input type="email" placeholder="email@example.com" />

        <Input type="password" placeholder="••••••••" />

        <Input type="search" placeholder="Search..." startAdornment={<SearchIcon />} />

        <Input disabled placeholder="Disabled" />

        <Box sx={{
        gridColumn: {
          xs: 'auto',
          md: '1 / -1'
        }
      }}>
          <Input multiline minRows={4} placeholder="Tell us about yourself..." />
        </Box>
      </Box>
    </Box>
}`,...l.parameters?.docs?.source}}};const m=["Basic","ErrorState","Disabled","CharacterCount","ResponsiveShowcase"],g=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,CharacterCount:t,Disabled:s,ErrorState:o,ResponsiveShowcase:l,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{a as B,g as I};
