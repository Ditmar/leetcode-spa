import{d as $,r as f,V,f as _,j as n,u as W,c as F,h as A,k as D,T as P}from"./iframe-DNuoC9DH.js";import{g as B,c as O,S as X,C as z}from"./Card-C9NGKhjj.js";import{g as q,a as K,s as g,c as Y,m as G,B as u,T as E,u as J}from"./Box-CdMBGqbL.js";import"./preload-helper-PPVm8Dsz.js";function Z(e,t,s,a,o){const[i,d]=f.useState(()=>o&&s?s(e).matches:a?a(e).matches:t);return _(()=>{if(!s)return;const l=s(e),c=()=>{d(l.matches)};return c(),l.addEventListener("change",c),()=>{l.removeEventListener("change",c)}},[e,s]),i}const ee={...V},H=ee.useSyncExternalStore;function te(e,t,s,a,o){const i=f.useCallback(()=>t,[t]),d=f.useMemo(()=>{if(o&&s)return()=>s(e).matches;if(a!==null){const{matches:r}=a(e);return()=>r}return i},[i,e,a,o,s]),[l,c]=f.useMemo(()=>{if(s===null)return[i,()=>()=>{}];const r=s(e);return[()=>r.matches,p=>(r.addEventListener("change",p),()=>{r.removeEventListener("change",p)})]},[i,s,e]);return H(c,l,d)}function Q(e={}){const{themeId:t}=e;return function(a,o={}){let i=$();i&&t&&(i=i[t]||i);const d=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:l=!1,matchMedia:c=d?window.matchMedia:null,ssrMatchMedia:h=null,noSsr:r=!1}=B({name:"MuiUseMediaQuery",props:o,theme:i});let p=typeof a=="function"?a(i):a;return p=p.replace(/^@media( ?)/m,""),p.includes("print")&&console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.","Using the print media query to modify print styles can lead to unexpected results.","Consider using the `displayPrint` field in the `sx` prop instead.","More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)),(H!==void 0?te:Z)(p,l,c,h,r)}}Q();function se(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function ae(e){return parseFloat(e)}const m=""+new URL("tcs-logo-i86t0D5v.svg",import.meta.url).href,ne=O(n.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"}));function oe(e){return q("MuiSkeleton",e)}K("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const ie=e=>{const{classes:t,variant:s,animation:a,hasChildren:o,width:i,height:d}=e;return Y({root:["root",s,a,o&&"withChildren",o&&!i&&"fitContent",o&&!d&&"heightAuto"]},oe,t)},k=D`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,j=D`
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
`,re=typeof k!="string"?A`
        animation: ${k} 2s ease-in-out 0.5s infinite;
      `:null,le=typeof j!="string"?A`
        &::after {
          animation: ${j} 2s linear 0.5s infinite;
        }
      `:null,ce=g("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.variant],s.animation!==!1&&t[s.animation],s.hasChildren&&t.withChildren,s.hasChildren&&!s.width&&t.fitContent,s.hasChildren&&!s.height&&t.heightAuto]}})(G(({theme:e})=>{const t=se(e.shape.borderRadius)||"px",s=ae(e.shape.borderRadius);return{display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:e.alpha(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${s}${t}/${Math.round(s/.6*10)/10}${t}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:a})=>a.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:a})=>a.hasChildren&&!a.width,style:{maxWidth:"fit-content"}},{props:({ownerState:a})=>a.hasChildren&&!a.height,style:{height:"auto"}},{props:{animation:"pulse"},style:re||{animation:`${k} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:le||{"&::after":{animation:`${j} 2s linear 0.5s infinite`}}}]}})),T=f.forwardRef(function(t,s){const a=W({props:t,name:"MuiSkeleton"}),{animation:o="pulse",className:i,component:d="span",height:l,style:c,variant:h="text",width:r,...p}=a,C={...a,animation:o,component:d,variant:h,hasChildren:!!p.children},I=ie(C);return n.jsx(ce,{as:d,ref:s,className:F(I.root,i),ownerState:C,...p,style:{width:r,height:l,...c}})}),de=Q({themeId:P}),pe="TCS Quiz Competition",ge="TCS Campus Drive - 2023",R=g(u)(({theme:e,flexDirection:t})=>({display:"flex",alignItems:"center",justifyContent:t==="row"?"space-between":"center",flexDirection:t,padding:e.spacing(2),[e.breakpoints.down("sm")]:{flexDirection:"column",alignItems:"center",padding:e.spacing(1.5),gap:e.spacing(1.5)}})),M=g(u)(({theme:e})=>({display:"flex",alignItems:"center",gap:e.spacing(2),flex:"0 0 auto",[e.breakpoints.down("sm")]:{flexDirection:"column",gap:e.spacing(1),alignItems:"center"}})),U=g(u)(({theme:e})=>({display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"left",minWidth:0,flex:"0 1 auto",[e.breakpoints.down("sm")]:{alignItems:"center",textAlign:"center",width:"100%"}})),ue=g(E)(({theme:e})=>({fontFamily:"'Syne', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",fontWeight:600,fontStyle:"normal",fontSize:e.typography.pxToRem(18),lineHeight:"100%",color:"#565656",width:e.spacing(25.4),height:e.spacing(2.75),textAlign:"left",opacity:1,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",[e.breakpoints.down("sm")]:{width:"100%",textAlign:"center"}})),me=g(E)(({theme:e})=>({fontFamily:"'Syne', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",fontWeight:400,fontStyle:"normal",fontSize:e.typography.pxToRem(16),lineHeight:"100%",color:"#A9A9A9",width:e.spacing(21.125),height:e.spacing(2.375),textAlign:"left",opacity:1,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",[e.breakpoints.down("sm")]:{width:"100%",textAlign:"center"}})),he=g("img")(({theme:e,size:t})=>({width:t==="small"?e.spacing(12.5):t==="large"?e.spacing(30):e.spacing(25.125),height:t==="small"?e.spacing(5.25):t==="large"?e.spacing(12.75):e.spacing(10.625),borderRadius:e.spacing(.75),opacity:1,objectFit:"contain",backgroundColor:"transparent",flex:"0 0 auto",[e.breakpoints.down("sm")]:{margin:"0 auto",maxWidth:"100%"}}));g(X)(({theme:e,size:t})=>({width:t==="small"?e.spacing(12.5):t==="large"?e.spacing(30):e.spacing(25.125),height:t==="small"?e.spacing(5.25):t==="large"?e.spacing(12.75):e.spacing(10.625),borderRadius:e.spacing(.75),backgroundColor:"transparent",[e.breakpoints.down("sm")]:{margin:"0 auto",maxWidth:"100%"}}));const N=e=>{const{title:t=pe,subtitle:s=ge,variant:a="horizontal",size:o="medium",isLoading:i=!1,logoSrc:d}=e,l=d??m,c=J(),r=de(c.breakpoints.down("sm"))||a==="vertical"?"column":"row";return i?n.jsx("div",{role:"banner","data-testid":"header-wrapper",style:{display:"flex",flexDirection:r},children:n.jsx(z,{sx:{boxShadow:"none",bgcolor:"transparent",width:"100%"},children:n.jsxs(R,{flexDirection:r,children:[n.jsxs(M,{children:[n.jsx(T,{variant:"rectangular",width:o==="small"?100:o==="large"?240:201,height:o==="small"?42:o==="large"?102:85,role:"progressbar"}),n.jsxs(U,{children:[n.jsx(T,{variant:"text",width:203,height:22,role:"progressbar"}),n.jsx(T,{variant:"text",width:169,height:19,role:"progressbar"})]})]}),n.jsx(u,{sx:{width:c.spacing(10),display:"flex",alignItems:"center"}})]})})}):n.jsx("div",{role:"banner","data-testid":"header-wrapper",style:{display:"flex",flexDirection:r},children:n.jsx(z,{sx:{boxShadow:"none",bgcolor:"transparent",width:"100%"},children:n.jsxs(R,{flexDirection:r,children:[n.jsxs(M,{children:[l?n.jsx(he,{src:l,alt:"TCS Logo",size:o}):n.jsx(u,{"data-testid":"placeholder-logo",sx:{width:o==="small"?100:o==="large"?240:201,height:o==="small"?42:o==="large"?102:85,display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"grey.100",borderRadius:1},children:n.jsx(ne,{fontSize:o==="large"?"large":"medium",color:"disabled","aria-label":"Placeholder logo"})}),n.jsxs(U,{children:[n.jsx(ue,{children:t}),s&&n.jsx(me,{children:s})]})]}),n.jsx(u,{sx:{width:c.spacing(10),display:"flex",alignItems:"center"}})]})})})};N.__docgenInfo={description:"",methods:[],displayName:"TestHeader",props:{logoSrc:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""}}};const Se={title:"Components/TestHeader",component:N,parameters:{layout:"fullscreen"},decorators:[e=>n.jsx("div",{style:{padding:"16px",backgroundColor:"#f5f5f5"},children:n.jsx(e,{})})]},y={args:{logoSrc:m,title:"TCS Quiz Competition",subtitle:"TCS Campus Drive-2023",size:"medium"}},x={args:{logoSrc:m,title:"Vertical Layout",subtitle:"Stacked version",variant:"vertical",size:"medium"}},b={args:{logoSrc:m,title:"This is a very long quiz name to test responsiveness and overflow handling in the header component",subtitle:"This is a longer subtitle to test wrapping behavior.",size:"medium"}},S={args:{isLoading:!0,size:"medium"}},v={args:{logoSrc:m,title:"Small Logo",subtitle:"Small Logo Subtitle",size:"small"}},w={args:{logoSrc:m,title:"Large Logo",subtitle:"Large Logo Subtitle",size:"large"}},L={args:{logoSrc:"",title:"No Logo Header",subtitle:"No Logo Subtitle",size:"medium"}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'TCS Quiz Competition',
    subtitle: 'TCS Campus Drive-2023',
    size: 'medium'
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'Vertical Layout',
    subtitle: 'Stacked version',
    variant: 'vertical',
    size: 'medium'
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};const ve=["Default","Vertical","LongTitle","Loading","SmallLogo","LargeLogo","NoLogo"];export{y as Default,w as LargeLogo,S as Loading,b as LongTitle,L as NoLogo,v as SmallLogo,x as Vertical,ve as __namedExportsOrder,Se as default};
