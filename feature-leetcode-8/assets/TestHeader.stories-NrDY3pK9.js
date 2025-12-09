import{a as N,f as $,j as o,i as q,m as D,n as A}from"./iframe-XyPEag_w.js";import{c as H,S as E}from"./createSvgIcon-DVKNx3uJ.js";import{s as i}from"./styled-CnDRenFE.js";import{B as c}from"./Box-mZbbA3M7.js";import{T as U}from"./Typography-ESejC-Xt.js";import{u as O}from"./useTheme-Db4h2BPt.js";import{u as V}from"./index-ClCT8wi1.js";import{C as k}from"./Card-DbbU8x6r.js";import{c as _,m as B}from"./memoTheme-Bpr7ahH9.js";import{a as F,g as Q}from"./generateUtilityClasses-CoM_PQv9.js";import"./preload-helper-PPVm8Dsz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./getThemeProps-gVrl8V-2.js";import"./Paper-DXhjWTP3.js";function X(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function P(e){return parseFloat(e)}function K(e){return F("MuiSkeleton",e)}Q("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const G=e=>{const{classes:t,variant:a,animation:s,hasChildren:r,width:p,height:n}=e;return _({root:["root",a,s,r&&"withChildren",r&&!p&&"fitContent",r&&!n&&"heightAuto"]},K,t)},y=A`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,L=A`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,J=typeof y!="string"?D`
        animation: ${y} 2s ease-in-out 0.5s infinite;
      `:null,Y=typeof L!="string"?D`
        &::after {
          animation: ${L} 2s linear 0.5s infinite;
        }
      `:null,Z=i("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],a.animation!==!1&&t[a.animation],a.hasChildren&&t.withChildren,a.hasChildren&&!a.width&&t.fitContent,a.hasChildren&&!a.height&&t.heightAuto]}})(B(({theme:e})=>{const t=X(e.shape.borderRadius)||"px",a=P(e.shape.borderRadius);return{display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:e.alpha(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${t}/${Math.round(a/.6*10)/10}${t}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:s})=>s.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:s})=>s.hasChildren&&!s.width,style:{maxWidth:"fit-content"}},{props:({ownerState:s})=>s.hasChildren&&!s.height,style:{height:"auto"}},{props:{animation:"pulse"},style:J||{animation:`${y} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:Y||{"&::after":{animation:`${L} 2s linear 0.5s infinite`}}}]}})),S=N.forwardRef(function(t,a){const s=$({props:t,name:"MuiSkeleton"}),{animation:r="pulse",className:p,component:n="span",height:g,style:m,variant:C="text",width:l,...T}=s,j={...s,animation:r,component:n,variant:C,hasChildren:!!T.children},W=G(j);return o.jsx(Z,{as:n,ref:a,className:q(W.root,p),ownerState:j,...T,style:{width:l,height:g,...m}})}),ee=H(o.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"})),d=""+new URL("tcs-logo-i86t0D5v.svg",import.meta.url).href,te="TCS Quiz Competition",oe="TCS Campus Drive - 2023",z=i(c)(({theme:e,flexDirection:t})=>({display:"flex",alignItems:"center",justifyContent:t==="row"?"space-between":"center",flexDirection:t,padding:e.spacing(2),[e.breakpoints.down("sm")]:{flexDirection:"column",alignItems:"center",padding:e.spacing(1.5),gap:e.spacing(1.5)}})),I=i(c)(({theme:e})=>({display:"flex",alignItems:"center",gap:e.spacing(2),flex:"0 0 auto",[e.breakpoints.down("sm")]:{flexDirection:"column",gap:e.spacing(1),alignItems:"center"}})),R=i(c)(({theme:e})=>({display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"left",minWidth:0,flex:"0 1 auto",[e.breakpoints.down("sm")]:{alignItems:"center",textAlign:"center",width:"100%",maxWidth:"90vw",overflow:"hidden"}})),ae=i(U)(({theme:e})=>({...e.typography.title,fontWeight:600,fontSize:e.typography.pxToRem(18),color:"#565656",width:e.spacing(25.375),overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",[e.breakpoints.down("sm")]:{maxWidth:"90vw",textAlign:"center",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}})),re=i(U)(({theme:e})=>({...e.typography.subtitle,fontWeight:400,fontSize:e.typography.pxToRem(16),color:"#A9A9A9",width:e.spacing(21.125),overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",[e.breakpoints.down("sm")]:{maxWidth:"90vw",textAlign:"center",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}})),se=i("img")(({theme:e,size:t})=>({width:t==="small"?e.spacing(12.5):t==="large"?e.spacing(30):e.spacing(25.125),height:t==="small"?e.spacing(5.25):t==="large"?e.spacing(12.75):e.spacing(10.625),borderRadius:e.spacing(.75),opacity:1,objectFit:"contain",backgroundColor:"transparent",flex:"0 0 auto",[e.breakpoints.down("sm")]:{margin:"0 auto",maxWidth:"100%"}}));i(E)(({theme:e,size:t})=>({width:t==="small"?e.spacing(12.5):t==="large"?e.spacing(30):e.spacing(25.125),height:t==="small"?e.spacing(5.25):t==="large"?e.spacing(12.75):e.spacing(10.625),borderRadius:e.spacing(.75),backgroundColor:"transparent",[e.breakpoints.down("sm")]:{margin:"0 auto",maxWidth:"100%"}}));const M=e=>{const{title:t=te,subtitle:a=oe,variant:s="horizontal",size:r="medium",isLoading:p=!1,logoSrc:n}=e,g=n??d,m=O(),l=V(m.breakpoints.down("sm"))||s==="vertical"?"column":"row";return p?o.jsx("div",{role:"banner","data-testid":"header-wrapper",style:{display:"flex",flexDirection:l},children:o.jsx(k,{sx:{boxShadow:"none",bgcolor:"transparent",width:"100%"},children:o.jsxs(z,{flexDirection:l,children:[o.jsxs(I,{children:[o.jsx(S,{variant:"rectangular",width:r==="small"?100:r==="large"?240:201,height:r==="small"?42:r==="large"?102:85,role:"progressbar"}),o.jsxs(R,{children:[o.jsx(S,{variant:"text",width:203,height:22,role:"progressbar"}),o.jsx(S,{variant:"text",width:169,height:19,role:"progressbar"})]})]}),o.jsx(c,{sx:{width:m.spacing(10),display:"flex",alignItems:"center"}})]})})}):o.jsx("div",{role:"banner","data-testid":"header-wrapper",style:{display:"flex",flexDirection:l},children:o.jsx(k,{sx:{boxShadow:"none",bgcolor:"transparent",width:"100%"},children:o.jsxs(z,{flexDirection:l,children:[o.jsxs(I,{children:[g?o.jsx(se,{src:g,alt:"TCS Logo",size:r}):o.jsx(c,{"data-testid":"placeholder-logo",sx:{width:r==="small"?100:r==="large"?240:201,height:r==="small"?42:r==="large"?102:85,display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"grey.100",borderRadius:1},children:o.jsx(ee,{fontSize:r==="large"?"large":"medium",color:"disabled","aria-label":"Placeholder logo"})}),o.jsxs(R,{children:[o.jsx(ae,{children:t}),a&&o.jsx(re,{children:a})]})]}),o.jsx(c,{sx:{width:m.spacing(10),display:"flex",alignItems:"center"}})]})})})};M.__docgenInfo={description:"",methods:[],displayName:"TestHeader",props:{logoSrc:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""}}};const we={title:"Components/TestHeader",component:M,parameters:{layout:"fullscreen"},decorators:[e=>o.jsx("div",{style:{padding:"16px",backgroundColor:"#f5f5f5"},children:o.jsx(e,{})})]},u={args:{logoSrc:d,title:"TCS Quiz Competition",subtitle:"TCS Campus Drive-2023",size:"medium"}},h={args:{logoSrc:d,title:"Vertical Layout",subtitle:"Stacked version",variant:"vertical",size:"medium"}},f={args:{logoSrc:d,title:"This is a very long quiz name to test responsiveness and overflow handling in the header component",subtitle:"This is a longer subtitle to test wrapping behavior.",size:"medium"}},x={args:{isLoading:!0,size:"medium"}},b={args:{logoSrc:d,title:"Small Logo",subtitle:"Small Logo Subtitle",size:"small"}},v={args:{logoSrc:d,title:"Large Logo",subtitle:"Large Logo Subtitle",size:"large"}},w={args:{logoSrc:"",title:"No Logo Header",subtitle:"No Logo Subtitle",size:"medium"}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'TCS Quiz Competition',
    subtitle: 'TCS Campus Drive-2023',
    size: 'medium'
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'Vertical Layout',
    subtitle: 'Stacked version',
    variant: 'vertical',
    size: 'medium'
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'This is a very long quiz name to test responsiveness and overflow handling in the header component',
    subtitle: 'This is a longer subtitle to test wrapping behavior.',
    size: 'medium'
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    size: 'medium'
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'Small Logo',
    subtitle: 'Small Logo Subtitle',
    size: 'small'
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'Large Logo',
    subtitle: 'Large Logo Subtitle',
    size: 'large'
  }
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: '',
    title: 'No Logo Header',
    subtitle: 'No Logo Subtitle',
    size: 'medium'
  }
}`,...w.parameters?.docs?.source}}};const Se=["Default","Vertical","LongTitle","Loading","SmallLogo","LargeLogo","NoLogo"];export{u as Default,v as LargeLogo,x as Loading,f as LongTitle,w as NoLogo,b as SmallLogo,h as Vertical,Se as __namedExportsOrder,we as default};
