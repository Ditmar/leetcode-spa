import{j as e,r as u}from"./iframe-Bvt0U7V_.js";import{I as B,S as W}from"./Search-CimIncCY.js";import{c as k}from"./createSvgIcon-yeQMH2ol.js";import{s as $}from"./memoTheme-CsB9GAwd.js";import{T as q}from"./TextField-Cf6rKWC1.js";import{B as c}from"./Box-DRsuoA1g.js";import{T}from"./Typography-B4pofbXb.js";import{I as N}from"./IconButton-DQtfcflD.js";const G=k(e.jsx("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"})),J=k(e.jsx("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"})),K={text:"text",email:"email",password:"text",number:"numeric",tel:"tel",url:"url",search:"search"};function Q(){const[r,o]=u.useState(!1),x=u.useCallback(()=>{o(p=>!p)},[]);return{showPassword:r,togglePassword:x}}const U=$(q)(({theme:r})=>({width:"100%","& .MuiInputBase-root":{borderRadius:"var(--radius-md)",backgroundColor:"var(--input-background)"},"& .MuiInputBase-input":{fontSize:"0.875rem",color:"var(--foreground)","&::placeholder":{color:"var(--muted-foreground)",opacity:1}},"& .MuiInputBase-input.Mui-disabled":{WebkitTextFillColor:"var(--muted-foreground)"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"transparent"},"&:hover fieldset":{borderColor:"var(--border)"},"&.Mui-focused fieldset":{borderColor:"var(--ring)",borderWidth:r.spacing(.125)},"&.Mui-error fieldset":{borderColor:"var(--destructive)"}},"& .MuiFilledInput-root":{backgroundColor:"var(--input-background)","&:before":{borderBottomColor:"transparent"},"&:hover:not(.Mui-disabled, .Mui-error):before":{borderBottomColor:"var(--border)"},"&:after":{borderBottomColor:"var(--ring)"}},"& .MuiInput-root":{"&:before":{borderBottomColor:"var(--border)"},"&:hover:not(.Mui-disabled, .Mui-error):before":{borderBottomColor:"var(--ring)"},"&:after":{borderBottomColor:"var(--ring)"}},"& .MuiInputAdornment-root":{color:"var(--muted-foreground)"},"& .MuiFormHelperText-root":{marginLeft:0,marginRight:0}}));function P(r){return typeof r=="string"?r.length:typeof r=="number"?String(r).length:Array.isArray(r)?r.join("").length:0}function t(r){const{type:o="text",variant:x="outlined",startAdornment:p,endAdornment:b,maxLength:a,showCharacterCount:f=!1,helperText:C,value:m,defaultValue:h,onChange:A,inputProps:R,InputProps:_,readOnly:E,id:D,...v}=r,O=u.useId(),y=D??`input-${O}`,I=`${y}-helper-text`,{showPassword:w,togglePassword:F}=Q(),[j,M]=u.useState(P(m??h));u.useEffect(()=>{M(P(m??h))},[m,h]);const H=o==="password"?w?"text":"password":o,L=g=>{M(g.target.value.length),A?.(g)},S=!!(C||f||a),V=()=>{if(!(!b&&o!=="password"))return e.jsx(B,{position:"end",children:e.jsxs(c,{sx:{display:"flex",alignItems:"center",gap:1},children:[b,o==="password"&&e.jsx(N,{"aria-label":"Toggle password visibility",onClick:F,onMouseDown:g=>g.preventDefault(),children:w?e.jsx(J,{}):e.jsx(G,{})})]})})},z=S?e.jsxs(c,{component:"span",sx:{display:"flex",justifyContent:"space-between",width:"100%"},children:[e.jsx(T,{variant:"caption",children:C}),(f||a)&&e.jsx(T,{variant:"caption",children:a?`${j}/${a}`:j})]}):null;return e.jsx(U,{...v,id:y,type:H,variant:x,onChange:L,value:m,defaultValue:h,helperText:z,FormHelperTextProps:{id:I},InputProps:{..._,readOnly:E,startAdornment:p?e.jsx(B,{position:"start",children:p}):void 0,endAdornment:V()},inputProps:{...R,maxLength:a,inputMode:K[o],"aria-invalid":v.error||void 0,"aria-describedby":S?I:void 0}})}t.__docgenInfo={description:"",methods:[],displayName:"Input"};const X={title:"component-catalog/Input",component:t},s={args:{label:"",placeholder:"email@example.com"}},n={args:{label:"",error:!0,helperText:"Required"}},l={args:{label:"",disabled:!0}},d={args:{label:"",maxLength:20,showCharacterCount:!0,defaultValue:"Hello"}},i={render:()=>e.jsx(c,{sx:r=>({width:"100%",maxWidth:r.breakpoints.values.lg,mx:"auto",p:3,border:"0.0625rem solid var(--border)",borderRadius:"var(--radius-lg)",backgroundColor:"var(--card)"}),children:e.jsxs(c,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",md:"1fr 1fr"},gap:3},children:[e.jsx(t,{type:"email",placeholder:"email@example.com"}),e.jsx(t,{type:"password",placeholder:"••••••••"}),e.jsx(t,{type:"search",placeholder:"Search...",startAdornment:e.jsx(W,{})}),e.jsx(t,{disabled:!0,placeholder:"Disabled"}),e.jsx(c,{sx:{gridColumn:{xs:"auto",md:"1 / -1"}},children:e.jsx(t,{multiline:!0,minRows:4,placeholder:"Tell us about yourself..."})})]})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: '',
    placeholder: 'email@example.com'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: '',
    error: true,
    helperText: 'Required'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: '',
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: '',
    maxLength: 20,
    showCharacterCount: true,
    defaultValue: 'Hello'
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Y=["Basic","ErrorState","Disabled","CharacterCount","ResponsiveShowcase"],le=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,CharacterCount:d,Disabled:l,ErrorState:n,ResponsiveShowcase:i,__namedExportsOrder:Y,default:X},Symbol.toStringTag,{value:"Module"}));export{s as B,le as I};
