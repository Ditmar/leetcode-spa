import{j as o}from"./iframe-B5Q6yQus.js";import{c as I,S as k}from"./createSvgIcon-DU-tRrSD.js";import{s as a}from"./memoTheme-BtLJshVk.js";import{B as s}from"./Box-CWUHPB4C.js";import{T as y}from"./Typography-xJQ3y0eD.js";import{u as D}from"./useTheme-Cs8gXBHp.js";import{u as A,S as h}from"./index-Dy098rRd.js";import{C as b}from"./Card-DcYqkT7k.js";import"./preload-helper-PPVm8Dsz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./getThemeProps-OGHjUM8E.js";import"./Paper-D0zh3o8s.js";const i=""+new URL("tcs-logo-i86t0D5v.svg",import.meta.url).href,q=I(o.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"})),H="TCS Quiz Competition",W="TCS Campus Drive - 2023",w=a(s)(({theme:e,flexDirection:t})=>({display:"flex",alignItems:"center",justifyContent:t==="row"?"space-between":"center",flexDirection:t,padding:e.spacing(2),[e.breakpoints.down("sm")]:{flexDirection:"column",alignItems:"center",padding:e.spacing(1.5),gap:e.spacing(1.5)}})),v=a(s)(({theme:e})=>({display:"flex",alignItems:"center",gap:e.spacing(2),flex:"0 0 auto",[e.breakpoints.down("sm")]:{flexDirection:"column",gap:e.spacing(1),alignItems:"center"}})),L=a(s)(({theme:e})=>({display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"left",minWidth:0,flex:"0 1 auto",[e.breakpoints.down("sm")]:{alignItems:"center",textAlign:"center",width:"100%",maxWidth:"90vw",overflow:"hidden"}})),N=a(y)(({theme:e})=>({...e.typography.title,fontWeight:600,fontSize:e.typography.pxToRem(18),color:"#565656",width:e.spacing(25.375),overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",[e.breakpoints.down("sm")]:{maxWidth:"90vw",textAlign:"center",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}})),R=a(y)(({theme:e})=>({...e.typography.subtitle,fontWeight:400,fontSize:e.typography.pxToRem(16),color:"#A9A9A9",width:e.spacing(21.125),overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",[e.breakpoints.down("sm")]:{maxWidth:"90vw",textAlign:"center",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}})),E=a("img")(({theme:e,size:t})=>({width:t==="small"?e.spacing(12.5):t==="large"?e.spacing(30):e.spacing(25.125),height:t==="small"?e.spacing(5.25):t==="large"?e.spacing(12.75):e.spacing(10.625),borderRadius:e.spacing(.75),opacity:1,objectFit:"contain",backgroundColor:"transparent",flex:"0 0 auto",[e.breakpoints.down("sm")]:{margin:"0 auto",maxWidth:"100%"}}));a(k)(({theme:e,size:t})=>({width:t==="small"?e.spacing(12.5):t==="large"?e.spacing(30):e.spacing(25.125),height:t==="small"?e.spacing(5.25):t==="large"?e.spacing(12.75):e.spacing(10.625),borderRadius:e.spacing(.75),backgroundColor:"transparent",[e.breakpoints.down("sm")]:{margin:"0 auto",maxWidth:"100%"}}));const T=e=>{const{title:t=H,subtitle:f=W,variant:j="horizontal",size:r="medium",isLoading:C=!1,logoSrc:z}=e,S=z??i,x=D(),n=A(x.breakpoints.down("sm"))||j==="vertical"?"column":"row";return C?o.jsx("div",{role:"banner","data-testid":"header-wrapper",style:{display:"flex",flexDirection:n},children:o.jsx(b,{sx:{boxShadow:"none",bgcolor:"transparent",width:"100%"},children:o.jsxs(w,{flexDirection:n,children:[o.jsxs(v,{children:[o.jsx(h,{variant:"rectangular",width:r==="small"?100:r==="large"?240:201,height:r==="small"?42:r==="large"?102:85,role:"progressbar"}),o.jsxs(L,{children:[o.jsx(h,{variant:"text",width:203,height:22,role:"progressbar"}),o.jsx(h,{variant:"text",width:169,height:19,role:"progressbar"})]})]}),o.jsx(s,{sx:{width:x.spacing(10),display:"flex",alignItems:"center"}})]})})}):o.jsx("div",{role:"banner","data-testid":"header-wrapper",style:{display:"flex",flexDirection:n},children:o.jsx(b,{sx:{boxShadow:"none",bgcolor:"transparent",width:"100%"},children:o.jsxs(w,{flexDirection:n,children:[o.jsxs(v,{children:[S?o.jsx(E,{src:S,alt:"TCS Logo",size:r}):o.jsx(s,{"data-testid":"placeholder-logo",sx:{width:r==="small"?100:r==="large"?240:201,height:r==="small"?42:r==="large"?102:85,display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"grey.100",borderRadius:1},children:o.jsx(q,{fontSize:r==="large"?"large":"medium",color:"disabled","aria-label":"Placeholder logo"})}),o.jsxs(L,{children:[o.jsx(N,{children:t}),f&&o.jsx(R,{children:f})]})]}),o.jsx(s,{sx:{width:x.spacing(10),display:"flex",alignItems:"center"}})]})})})};T.__docgenInfo={description:"",methods:[],displayName:"TestHeader",props:{logoSrc:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""}}};const Y={title:"Components/TestHeader",component:T,parameters:{layout:"fullscreen"},decorators:[e=>o.jsx("div",{style:{padding:"16px",backgroundColor:"#f5f5f5"},children:o.jsx(e,{})})]},l={args:{logoSrc:i,title:"TCS Quiz Competition",subtitle:"TCS Campus Drive-2023",size:"medium"}},c={args:{logoSrc:i,title:"Vertical Layout",subtitle:"Stacked version",variant:"vertical",size:"medium"}},g={args:{logoSrc:i,title:"This is a very long quiz name to test responsiveness and overflow handling in the header component",subtitle:"This is a longer subtitle to test wrapping behavior.",size:"medium"}},d={args:{isLoading:!0,size:"medium"}},p={args:{logoSrc:i,title:"Small Logo",subtitle:"Small Logo Subtitle",size:"small"}},m={args:{logoSrc:i,title:"Large Logo",subtitle:"Large Logo Subtitle",size:"large"}},u={args:{logoSrc:"",title:"No Logo Header",subtitle:"No Logo Subtitle",size:"medium"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'TCS Quiz Competition',
    subtitle: 'TCS Campus Drive-2023',
    size: 'medium'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'Vertical Layout',
    subtitle: 'Stacked version',
    variant: 'vertical',
    size: 'medium'
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'This is a very long quiz name to test responsiveness and overflow handling in the header component',
    subtitle: 'This is a longer subtitle to test wrapping behavior.',
    size: 'medium'
  }
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    size: 'medium'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'Small Logo',
    subtitle: 'Small Logo Subtitle',
    size: 'small'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'Large Logo',
    subtitle: 'Large Logo Subtitle',
    size: 'large'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: '',
    title: 'No Logo Header',
    subtitle: 'No Logo Subtitle',
    size: 'medium'
  }
}`,...u.parameters?.docs?.source}}};const Z=["Default","Vertical","LongTitle","Loading","SmallLogo","LargeLogo","NoLogo"];export{l as Default,m as LargeLogo,d as Loading,g as LongTitle,u as NoLogo,p as SmallLogo,c as Vertical,Z as __namedExportsOrder,Y as default};
