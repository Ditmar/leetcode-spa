import{d as $,r as f,V,f as _,j as s,u as W,c as P,h as E,k as U,T as B}from"./iframe-CxIFz1ly.js";import{g as O,c as F,S as X,C as I}from"./Card-UUzK3PuA.js";import{g as q,a as K,s as g,c as Y,m as G,B as u,T as A,u as J}from"./Box-BPOaU3FU.js";import"./preload-helper-PPVm8Dsz.js";function Z(e,t,a,n,o){const[r,d]=f.useState(()=>o&&a?a(e).matches:n?n(e).matches:t);return _(()=>{if(!a)return;const l=a(e),c=()=>{d(l.matches)};return c(),l.addEventListener("change",c),()=>{l.removeEventListener("change",c)}},[e,a]),r}const ee={...V},Q=ee.useSyncExternalStore;function te(e,t,a,n,o){const r=f.useCallback(()=>t,[t]),d=f.useMemo(()=>{if(o&&a)return()=>a(e).matches;if(n!==null){const{matches:i}=n(e);return()=>i}return r},[r,e,n,o,a]),[l,c]=f.useMemo(()=>{if(a===null)return[r,()=>()=>{}];const i=a(e);return[()=>i.matches,p=>(i.addEventListener("change",p),()=>{i.removeEventListener("change",p)})]},[r,a,e]);return Q(c,l,d)}function H(e={}){const{themeId:t}=e;return function(n,o={}){let r=$();r&&t&&(r=r[t]||r);const d=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:l=!1,matchMedia:c=d?window.matchMedia:null,ssrMatchMedia:h=null,noSsr:i=!1}=O({name:"MuiUseMediaQuery",props:o,theme:r});let p=typeof n=="function"?n(r):n;return p=p.replace(/^@media( ?)/m,""),p.includes("print")&&console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.","Using the print media query to modify print styles can lead to unexpected results.","Consider using the `displayPrint` field in the `sx` prop instead.","More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)),(Q!==void 0?te:Z)(p,l,c,h,i)}}H();function ae(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function ne(e){return parseFloat(e)}const m=""+new URL("tcs-logo-i86t0D5v.svg",import.meta.url).href,se=F(s.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"}));function oe(e){return q("MuiSkeleton",e)}K("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const re=e=>{const{classes:t,variant:a,animation:n,hasChildren:o,width:r,height:d}=e;return Y({root:["root",a,n,o&&"withChildren",o&&!r&&"fitContent",o&&!d&&"heightAuto"]},oe,t)},k=U`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,j=U`
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
`,ie=typeof k!="string"?E`
        animation: ${k} 2s ease-in-out 0.5s infinite;
      `:null,le=typeof j!="string"?E`
        &::after {
          animation: ${j} 2s linear 0.5s infinite;
        }
      `:null,ce=g("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],a.animation!==!1&&t[a.animation],a.hasChildren&&t.withChildren,a.hasChildren&&!a.width&&t.fitContent,a.hasChildren&&!a.height&&t.heightAuto]}})(G(({theme:e})=>{const t=ae(e.shape.borderRadius)||"px",a=ne(e.shape.borderRadius);return{display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:e.alpha(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${t}/${Math.round(a/.6*10)/10}${t}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:n})=>n.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:n})=>n.hasChildren&&!n.width,style:{maxWidth:"fit-content"}},{props:({ownerState:n})=>n.hasChildren&&!n.height,style:{height:"auto"}},{props:{animation:"pulse"},style:ie||{animation:`${k} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:le||{"&::after":{animation:`${j} 2s linear 0.5s infinite`}}}]}})),T=f.forwardRef(function(t,a){const n=W({props:t,name:"MuiSkeleton"}),{animation:o="pulse",className:r,component:d="span",height:l,style:c,variant:h="text",width:i,...p}=n,C={...n,animation:o,component:d,variant:h,hasChildren:!!p.children},z=re(C);return s.jsx(ce,{as:d,ref:a,className:P(z.root,r),ownerState:C,...p,style:{width:i,height:l,...c}})}),de=H({themeId:B}),pe="TCS Quiz Competition",ge="TCS Campus Drive - 2023",M=g(u)(({theme:e,flexDirection:t})=>({display:"flex",alignItems:"center",justifyContent:t==="row"?"space-between":"center",flexDirection:t,padding:e.spacing(2),[e.breakpoints.down("sm")]:{flexDirection:"column",alignItems:"center",padding:e.spacing(1.5),gap:e.spacing(1.5)}})),R=g(u)(({theme:e})=>({display:"flex",alignItems:"center",gap:e.spacing(2),flex:"0 0 auto",[e.breakpoints.down("sm")]:{flexDirection:"column",gap:e.spacing(1),alignItems:"center"}})),D=g(u)(({theme:e})=>({display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"left",minWidth:0,flex:"0 1 auto",[e.breakpoints.down("sm")]:{alignItems:"center",textAlign:"center",width:"100%"}})),ue=g(A)(({theme:e})=>({...e.typography.title,fontWeight:600,fontStyle:"normal",fontSize:e.typography.pxToRem(18),lineHeight:"100%",color:"#565656",width:e.spacing(25.375),height:e.spacing(2.75),textAlign:"left",opacity:1,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",[e.breakpoints.down("sm")]:{width:"100%",textAlign:"center"}})),me=g(A)(({theme:e})=>({...e.typography.subtitle,fontWeight:400,fontStyle:"normal",fontSize:e.typography.pxToRem(16),lineHeight:"100%",color:"#A9A9A9",width:e.spacing(21.125),height:e.spacing(2.375),textAlign:"left",opacity:1,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",[e.breakpoints.down("sm")]:{width:"100%",textAlign:"center"}})),he=g("img")(({theme:e,size:t})=>({width:t==="small"?e.spacing(12.5):t==="large"?e.spacing(30):e.spacing(25.125),height:t==="small"?e.spacing(5.25):t==="large"?e.spacing(12.75):e.spacing(10.625),borderRadius:e.spacing(.75),opacity:1,objectFit:"contain",backgroundColor:"transparent",flex:"0 0 auto",[e.breakpoints.down("sm")]:{margin:"0 auto",maxWidth:"100%"}}));g(X)(({theme:e,size:t})=>({width:t==="small"?e.spacing(12.5):t==="large"?e.spacing(30):e.spacing(25.125),height:t==="small"?e.spacing(5.25):t==="large"?e.spacing(12.75):e.spacing(10.625),borderRadius:e.spacing(.75),backgroundColor:"transparent",[e.breakpoints.down("sm")]:{margin:"0 auto",maxWidth:"100%"}}));const N=e=>{const{title:t=pe,subtitle:a=ge,variant:n="horizontal",size:o="medium",isLoading:r=!1,logoSrc:d}=e,l=d??m,c=J(),i=de(c.breakpoints.down("sm"))||n==="vertical"?"column":"row";return r?s.jsx("div",{role:"banner","data-testid":"header-wrapper",style:{display:"flex",flexDirection:i},children:s.jsx(I,{sx:{boxShadow:"none",bgcolor:"transparent",width:"100%"},children:s.jsxs(M,{flexDirection:i,children:[s.jsxs(R,{children:[s.jsx(T,{variant:"rectangular",width:o==="small"?100:o==="large"?240:201,height:o==="small"?42:o==="large"?102:85,role:"progressbar"}),s.jsxs(D,{children:[s.jsx(T,{variant:"text",width:203,height:22,role:"progressbar"}),s.jsx(T,{variant:"text",width:169,height:19,role:"progressbar"})]})]}),s.jsx(u,{sx:{width:c.spacing(10),display:"flex",alignItems:"center"}})]})})}):s.jsx("div",{role:"banner","data-testid":"header-wrapper",style:{display:"flex",flexDirection:i},children:s.jsx(I,{sx:{boxShadow:"none",bgcolor:"transparent",width:"100%"},children:s.jsxs(M,{flexDirection:i,children:[s.jsxs(R,{children:[l?s.jsx(he,{src:l,alt:"TCS Logo",size:o}):s.jsx(u,{"data-testid":"placeholder-logo",sx:{width:o==="small"?100:o==="large"?240:201,height:o==="small"?42:o==="large"?102:85,display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"grey.100",borderRadius:1},children:s.jsx(se,{fontSize:o==="large"?"large":"medium",color:"disabled","aria-label":"Placeholder logo"})}),s.jsxs(D,{children:[s.jsx(ue,{children:t}),a&&s.jsx(me,{children:a})]})]}),s.jsx(u,{sx:{width:c.spacing(10),display:"flex",alignItems:"center"}})]})})})};N.__docgenInfo={description:"",methods:[],displayName:"TestHeader",props:{logoSrc:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""}}};const Se={title:"Components/TestHeader",component:N,parameters:{layout:"fullscreen"},decorators:[e=>s.jsx("div",{style:{padding:"16px",backgroundColor:"#f5f5f5"},children:s.jsx(e,{})})]},x={args:{logoSrc:m,title:"TCS Quiz Competition",subtitle:"TCS Campus Drive-2023",size:"medium"}},y={args:{logoSrc:m,title:"Vertical Layout",subtitle:"Stacked version",variant:"vertical",size:"medium"}},b={args:{logoSrc:m,title:"This is a very long quiz name to test responsiveness and overflow handling in the header component",subtitle:"This is a longer subtitle to test wrapping behavior.",size:"medium"}},S={args:{isLoading:!0,size:"medium"}},v={args:{logoSrc:m,title:"Small Logo",subtitle:"Small Logo Subtitle",size:"small"}},w={args:{logoSrc:m,title:"Large Logo",subtitle:"Large Logo Subtitle",size:"large"}},L={args:{logoSrc:"",title:"No Logo Header",subtitle:"No Logo Subtitle",size:"medium"}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'TCS Quiz Competition',
    subtitle: 'TCS Campus Drive-2023',
    size: 'medium'
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'Vertical Layout',
    subtitle: 'Stacked version',
    variant: 'vertical',
    size: 'medium'
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'This is a very long quiz name to test responsiveness and overflow handling in the header component',
    subtitle: 'This is a longer subtitle to test wrapping behavior.',
    size: 'medium'
  }
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    size: 'medium'
  }
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'Small Logo',
    subtitle: 'Small Logo Subtitle',
    size: 'small'
  }
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'Large Logo',
    subtitle: 'Large Logo Subtitle',
    size: 'large'
  }
}`,...w.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: '',
    title: 'No Logo Header',
    subtitle: 'No Logo Subtitle',
    size: 'medium'
  }
}`,...L.parameters?.docs?.source}}};const ve=["Default","Vertical","LongTitle","Loading","SmallLogo","LargeLogo","NoLogo"];export{x as Default,w as LargeLogo,S as Loading,b as LongTitle,L as NoLogo,v as SmallLogo,y as Vertical,ve as __namedExportsOrder,Se as default};
