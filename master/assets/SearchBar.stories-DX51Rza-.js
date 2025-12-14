import{r as c,o as f,j as i}from"./iframe--zEGW4XW.js";import{s as B}from"./styled-DQIlTDQ6.js";import{B as E}from"./Box-CdA0xkMC.js";import{I as w}from"./IconButton-DcbIImWb.js";import{T as R}from"./TextField-DBTGwGi0.js";import{u as A}from"./useTheme-rG4nieVU.js";const V="data:image/svg+xml,%3csvg%20width='19'%20height='19'%20viewBox='0%200%2019%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_254)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.70834%200.197876C4.4454%200.197876%200.989594%203.65368%200.989594%207.91663C0.989594%2012.1796%204.4454%2015.6354%208.70834%2015.6354C12.9713%2015.6354%2016.4271%2012.1796%2016.4271%207.91663C16.4271%203.65368%2012.9713%200.197876%208.70834%200.197876ZM2.17709%207.91663C2.17709%204.30952%205.10123%201.38538%208.70834%201.38538C12.3155%201.38538%2015.2396%204.30952%2015.2396%207.91663C15.2396%2011.5237%2012.3155%2014.4479%208.70834%2014.4479C5.10123%2014.4479%202.17709%2011.5237%202.17709%207.91663Z'%20fill='url(%23paint0_linear_1_254)'/%3e%3cpath%20d='M15.4616%2013.8302C15.2297%2013.5983%2014.8538%2013.5983%2014.6219%2013.8302C14.39%2014.0621%2014.39%2014.438%2014.6219%2014.6699L17.7885%2017.8365C18.0203%2018.0684%2018.3963%2018.0684%2018.6282%2017.8365C18.86%2017.6046%2018.86%2017.2287%2018.6282%2016.9968L15.4616%2013.8302Z'%20fill='url(%23paint1_linear_1_254)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_1_254'%20x1='2.1828'%20y1='13.5573'%20x2='17.6089'%20y2='4.65106'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23B33DEB'/%3e%3cstop%20offset='1'%20stop-color='%23DE8FFF'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_1_254'%20x1='2.1828'%20y1='13.5573'%20x2='17.6089'%20y2='4.65106'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23B33DEB'/%3e%3cstop%20offset='1'%20stop-color='%23DE8FFF'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_1_254'%3e%3crect%20width='19'%20height='19'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",j=300,F="Search",H="Search",W="Search content",U=e=>{const{value:a,defaultValue:T="",onSearch:t,debounceDelay:x=j,onChange:l,autoSearch:y=!1}=e,o=a!==void 0,[S,C]=c.useState(T),n=c.useMemo(()=>o?a??"":S,[o,a,S]);c.useEffect(()=>{o&&a!==void 0&&C(a)},[a,o]),c.useEffect(()=>{if(!y||!t)return;const s=setTimeout(()=>{n.trim()!==""&&t(n)},x);return()=>{clearTimeout(s)}},[n,x,t,y]);const D=c.useCallback(s=>{const _=s.target.value;o||C(_),l&&l(s)},[o,l]),L=c.useCallback(s=>{s.key==="Enter"&&t&&t(n)},[t,n]),v=c.useCallback(()=>{t&&t(n)},[t,n]);return{value:n,handleInputChange:D,handleKeyDown:L,handleButtonClick:v}},O=B(E)(({theme:e})=>({display:"flex",alignItems:"center",padding:e.spacing(1.5,2),backgroundColor:f(e.palette.background.paper,.75),backdropFilter:"blur(10px)",borderRadius:Number(e.shape.borderRadius)*2,border:`1px solid ${f(e.palette.divider,.2)}`,width:"100%",maxWidth:e.spacing(40),minHeight:e.spacing(8.375),boxSizing:"border-box",gap:e.spacing(1.5),[e.breakpoints.down("sm")]:{padding:e.spacing(1.5),maxWidth:"100%",minHeight:e.spacing(8.375)}})),P=B(w)(({theme:e})=>({padding:e.spacing(.75),color:e.palette.primary.main,flexShrink:0,"&:hover":{backgroundColor:f(e.palette.primary.main,.08)},"&.Mui-disabled":{color:e.palette.action.disabled},"& .MuiTouchRipple-root":{color:e.palette.primary.main}})),q=B(R)(({theme:e})=>({flex:1,minWidth:0,"& .MuiInputBase-root":{...e.typography.input,color:f(e.palette.text.primary,.5),backgroundColor:"transparent","&:before, &:after, &:hover:not(.Mui-disabled):before":{borderBottom:"none"},"&.Mui-focused":{color:e.palette.text.primary},"&.Mui-disabled":{color:e.palette.text.disabled}},"& .MuiInputBase-input":{padding:0,"&::placeholder":{color:f(e.palette.text.primary,.5),opacity:1,...e.typography.input},"&:disabled::placeholder":{color:e.palette.text.disabled}},[e.breakpoints.down("sm")]:{"& .MuiInputBase-root":{fontSize:e.typography.body2.fontSize},"& .MuiInputBase-input::placeholder":{fontSize:e.typography.body2.fontSize}}})),M=e=>{const a=A(),{placeholder:T=F,onSearch:t,debounceDelay:x,value:l,defaultValue:y,onChange:o,autoSearch:S=!1,buttonAriaLabel:C=H,inputAriaLabel:n=W,disabled:D,...L}=e,v={onSearch:t,debounceDelay:x,value:l,defaultValue:y,onChange:o,autoSearch:S},{value:s,handleInputChange:_,handleKeyDown:I,handleButtonClick:k}=U(v);return i.jsxs(O,{"data-testid":"search-bar-container",children:[i.jsx(P,{onClick:k,"aria-label":C,"data-testid":"search-button",disabled:D,size:"small",children:i.jsx("img",{src:V,alt:"","aria-hidden":"true","data-testid":"search-icon",style:{width:a.spacing(2.5),height:a.spacing(2.5)}})}),i.jsx(q,{value:s,onChange:_,placeholder:T,variant:"standard",inputProps:{"aria-label":n,"data-testid":"search-input",onKeyDown:I},disabled:D,...L})]})},z=c.memo(M);M.__docgenInfo={description:"",methods:[],displayName:"SearchBarComponent",props:{onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},debounceDelay:{required:!1,tsType:{name:"number"},description:""},autoSearch:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>",elements:[{name:"union",raw:"HTMLInputElement | HTMLTextAreaElement",elements:[{name:"HTMLInputElement"},{name:"HTMLTextAreaElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},buttonAriaLabel:{required:!1,tsType:{name:"string"},description:""},inputAriaLabel:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const N={title:"Components/SearchBar",component:z,argTypes:{placeholder:{control:"text"},value:{control:"text"},defaultValue:{control:"text"},disabled:{control:"boolean"},autoSearch:{control:"boolean"},debounceDelay:{control:{type:"number",min:0,max:2e3,step:100}},buttonAriaLabel:{control:"text"},inputAriaLabel:{control:"text"},onSearch:{action:"searched"},onChange:{action:"changed"}}},r={args:{placeholder:"Search...",disabled:!1,autoSearch:!1,debounceDelay:300,buttonAriaLabel:"Search",inputAriaLabel:"Search content"}},u={args:{...r.args,autoSearch:!0}},d={args:{...r.args,defaultValue:"Initial search term"}},p={args:{...r.args}},m={args:{...r.args,autoSearch:!0,debounceDelay:1e3}},g={args:{...r.args,disabled:!0}},h={args:{...r.args,placeholder:"Search articles..."},decorators:[e=>{const a=A();return i.jsx(E,{sx:{maxWidth:320,mx:"auto",display:"flex",flexDirection:"column",gap:a.spacing(1.5)},children:i.jsx(e,{})})}]},b={args:{...r.args,placeholder:"Search across all documents..."},decorators:[e=>{const a=A();return i.jsx(E,{sx:{width:"100%",maxWidth:600,mx:"auto",display:"flex",flexDirection:"column",gap:a.spacing(2),padding:a.spacing(3),backgroundColor:a.palette.background.default,borderRadius:Number(a.shape.borderRadius)*2},children:i.jsx(e,{})})}]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    disabled: false,
    autoSearch: false,
    debounceDelay: 300,
    buttonAriaLabel: 'Search',
    inputAriaLabel: 'Search content'
  } as PropsSearchBar
}`,...r.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    autoSearch: true
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultValue: 'Initial search term'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    autoSearch: true,
    debounceDelay: 1000
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const G=["Default","WithAutoSearch","WithDefaultValue","Controlled","CustomDebounce","Disabled","MobileLayout","DesktopLayout"],X=Object.freeze(Object.defineProperty({__proto__:null,Controlled:p,CustomDebounce:m,Default:r,DesktopLayout:b,Disabled:g,MobileLayout:h,WithAutoSearch:u,WithDefaultValue:d,__namedExportsOrder:G,default:N},Symbol.toStringTag,{value:"Module"}));export{X as S};
