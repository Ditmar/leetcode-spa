import{j as s}from"./jsx-runtime-DSvmvvsx.js";import{c as ne,S as ie}from"./createSvgIcon-CCiTJlRR.js";import{g as le,a as ce,s as u,c as de,b as pe,m as ue,B as g,T as ee}from"./Box-Dr7reMH5.js";import{u as ge}from"./useTheme-D54ZAVwZ.js";import{f as me,T as he,a as fe,b as xe,h as te,k as oe}from"./DefaultPropsProvider-DRySmNQx.js";import{r as f,a as be}from"./index-B0WjJBI_.js";import{g as ve}from"./getThemeProps-Dky1t443.js";import{u as we}from"./useEnhancedEffect-CRRuWmhu.js";import{C as I}from"./Card-ByBq7ber.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Paper-BomRqOa7.js";function ye(e,t,o,a,r){const[n,d]=f.useState(()=>r&&o?o(e).matches:a?a(e).matches:t);return we(()=>{if(!o)return;const l=o(e),c=()=>{d(l.matches)};return c(),l.addEventListener("change",c),()=>{l.removeEventListener("change",c)}},[e,o]),n}const Se={...be},ae=Se.useSyncExternalStore;function Le(e,t,o,a,r){const n=f.useCallback(()=>t,[t]),d=f.useMemo(()=>{if(r&&o)return()=>o(e).matches;if(a!==null){const{matches:i}=a(e);return()=>i}return n},[n,e,a,r,o]),[l,c]=f.useMemo(()=>{if(o===null)return[n,()=>()=>{}];const i=o(e);return[()=>i.matches,p=>(i.addEventListener("change",p),()=>{i.removeEventListener("change",p)})]},[n,o,e]);return ae(c,l,d)}function se(e={}){const{themeId:t}=e;return function(a,r={}){let n=me();n&&t&&(n=n[t]||n);const d=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:l=!1,matchMedia:c=d?window.matchMedia:null,ssrMatchMedia:h=null,noSsr:i=!1}=ve({name:"MuiUseMediaQuery",props:r,theme:n});let p=typeof a=="function"?a(n):a;return p=p.replace(/^@media( ?)/m,""),p.includes("print")&&console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.","Using the print media query to modify print styles can lead to unexpected results.","Consider using the `displayPrint` field in the `sx` prop instead.","More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)),(ae!==void 0?Le:ye)(p,l,c,h,i)}}se();function Ce(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function Te(e){return parseFloat(e)}const ke=se({themeId:he});function je(e){return le("MuiSkeleton",e)}ce("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const ze=e=>{const{classes:t,variant:o,animation:a,hasChildren:r,width:n,height:d}=e;return pe({root:["root",o,a,r&&"withChildren",r&&!n&&"fitContent",r&&!d&&"heightAuto"]},je,t)},k=oe`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,j=oe`
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
`,Ie=typeof k!="string"?te`
        animation: ${k} 2s ease-in-out 0.5s infinite;
      `:null,Re=typeof j!="string"?te`
        &::after {
          animation: ${j} 2s linear 0.5s infinite;
        }
      `:null,Me=u("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],o.animation!==!1&&t[o.animation],o.hasChildren&&t.withChildren,o.hasChildren&&!o.width&&t.fitContent,o.hasChildren&&!o.height&&t.heightAuto]}})(ue(({theme:e})=>{const t=Ce(e.shape.borderRadius)||"px",o=Te(e.shape.borderRadius);return{display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:xe(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${t}/${Math.round(o/.6*10)/10}${t}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:a})=>a.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:a})=>a.hasChildren&&!a.width,style:{maxWidth:"fit-content"}},{props:({ownerState:a})=>a.hasChildren&&!a.height,style:{height:"auto"}},{props:{animation:"pulse"},style:Ie||{animation:`${k} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:Re||{"&::after":{animation:`${j} 2s linear 0.5s infinite`}}}]}})),T=f.forwardRef(function(t,o){const a=fe({props:t,name:"MuiSkeleton"}),{animation:r="pulse",className:n,component:d="span",height:l,style:c,variant:h="text",width:i,...p}=a,C={...a,animation:r,component:d,variant:h,hasChildren:!!p.children},z=ze(C);return s.jsx(Me,{as:d,ref:o,className:de(z.root,n),ownerState:C,...p,style:{width:i,height:l,...c}})}),m=""+new URL("tcs-logo-i86t0D5v.svg",import.meta.url).href,De=ne(s.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"}),"InsertPhoto"),Ee="TCS Quiz Competition",Ue="TCS Campus Drive - 2023",R=u(g)(({theme:e,flexDirection:t})=>({display:"flex",alignItems:"center",justifyContent:t==="row"?"space-between":"center",flexDirection:t,padding:e.spacing(2),[e.breakpoints.down("sm")]:{flexDirection:"column",alignItems:"center",padding:e.spacing(1.5),gap:e.spacing(1.5)}})),M=u(g)(({theme:e})=>({display:"flex",alignItems:"center",gap:e.spacing(2),flex:"0 0 auto",[e.breakpoints.down("sm")]:{flexDirection:"column",gap:e.spacing(1),alignItems:"center"}})),D=u(g)(({theme:e})=>({display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"left",minWidth:0,flex:"0 1 auto",[e.breakpoints.down("sm")]:{alignItems:"center",textAlign:"center",width:"100%",maxWidth:"90vw",overflow:"hidden"}})),Ae=u(ee)(({theme:e})=>({...e.typography.title,fontWeight:600,fontSize:e.typography.pxToRem(18),color:"#565656",width:e.spacing(25.375),overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",[e.breakpoints.down("sm")]:{maxWidth:"90vw",textAlign:"center",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}})),Qe=u(ee)(({theme:e})=>({...e.typography.subtitle,fontWeight:400,fontSize:e.typography.pxToRem(16),color:"#A9A9A9",width:e.spacing(21.125),overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",[e.breakpoints.down("sm")]:{maxWidth:"90vw",textAlign:"center",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}})),Ne=u("img")(({theme:e,size:t})=>({width:t==="small"?e.spacing(12.5):t==="large"?e.spacing(30):e.spacing(25.125),height:t==="small"?e.spacing(5.25):t==="large"?e.spacing(12.75):e.spacing(10.625),borderRadius:e.spacing(.75),opacity:1,objectFit:"contain",backgroundColor:"transparent",flex:"0 0 auto",[e.breakpoints.down("sm")]:{margin:"0 auto",maxWidth:"100%"}}));u(ie)(({theme:e,size:t})=>({width:t==="small"?e.spacing(12.5):t==="large"?e.spacing(30):e.spacing(25.125),height:t==="small"?e.spacing(5.25):t==="large"?e.spacing(12.75):e.spacing(10.625),borderRadius:e.spacing(.75),backgroundColor:"transparent",[e.breakpoints.down("sm")]:{margin:"0 auto",maxWidth:"100%"}}));const re=e=>{const{title:t=Ee,subtitle:o=Ue,variant:a="horizontal",size:r="medium",isLoading:n=!1,logoSrc:d}=e,l=d??m,c=ge(),i=ke(c.breakpoints.down("sm"))||a==="vertical"?"column":"row";return n?s.jsx("div",{role:"banner","data-testid":"header-wrapper",style:{display:"flex",flexDirection:i},children:s.jsx(I,{sx:{boxShadow:"none",bgcolor:"transparent",width:"100%"},children:s.jsxs(R,{flexDirection:i,children:[s.jsxs(M,{children:[s.jsx(T,{variant:"rectangular",width:r==="small"?100:r==="large"?240:201,height:r==="small"?42:r==="large"?102:85,role:"progressbar"}),s.jsxs(D,{children:[s.jsx(T,{variant:"text",width:203,height:22,role:"progressbar"}),s.jsx(T,{variant:"text",width:169,height:19,role:"progressbar"})]})]}),s.jsx(g,{sx:{width:c.spacing(10),display:"flex",alignItems:"center"}})]})})}):s.jsx("div",{role:"banner","data-testid":"header-wrapper",style:{display:"flex",flexDirection:i},children:s.jsx(I,{sx:{boxShadow:"none",bgcolor:"transparent",width:"100%"},children:s.jsxs(R,{flexDirection:i,children:[s.jsxs(M,{children:[l?s.jsx(Ne,{src:l,alt:"TCS Logo",size:r}):s.jsx(g,{"data-testid":"placeholder-logo",sx:{width:r==="small"?100:r==="large"?240:201,height:r==="small"?42:r==="large"?102:85,display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"grey.100",borderRadius:1},children:s.jsx(De,{fontSize:r==="large"?"large":"medium",color:"disabled","aria-label":"Placeholder logo"})}),s.jsxs(D,{children:[s.jsx(Ae,{children:t}),o&&s.jsx(Qe,{children:o})]})]}),s.jsx(g,{sx:{width:c.spacing(10),display:"flex",alignItems:"center"}})]})})})};re.__docgenInfo={description:"",methods:[],displayName:"TestHeader",props:{logoSrc:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""}}};const Ke={title:"Components/TestHeader",component:re,parameters:{layout:"fullscreen"},decorators:[e=>s.jsx("div",{style:{padding:"16px",backgroundColor:"#f5f5f5"},children:s.jsx(e,{})})]},x={args:{logoSrc:m,title:"TCS Quiz Competition",subtitle:"TCS Campus Drive-2023",size:"medium"}},b={args:{logoSrc:m,title:"Vertical Layout",subtitle:"Stacked version",variant:"vertical",size:"medium"}},v={args:{logoSrc:m,title:"This is a very long quiz name to test responsiveness and overflow handling in the header component",subtitle:"This is a longer subtitle to test wrapping behavior.",size:"medium"}},w={args:{isLoading:!0,size:"medium"}},y={args:{logoSrc:m,title:"Small Logo",subtitle:"Small Logo Subtitle",size:"small"}},S={args:{logoSrc:m,title:"Large Logo",subtitle:"Large Logo Subtitle",size:"large"}},L={args:{logoSrc:"",title:"No Logo Header",subtitle:"No Logo Subtitle",size:"medium"}};var E,U,A;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'TCS Quiz Competition',
    subtitle: 'TCS Campus Drive-2023',
    size: 'medium'
  }
}`,...(A=(U=x.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var Q,N,W;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'Vertical Layout',
    subtitle: 'Stacked version',
    variant: 'vertical',
    size: 'medium'
  }
}`,...(W=(N=b.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var $,H,_;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'This is a very long quiz name to test responsiveness and overflow handling in the header component',
    subtitle: 'This is a longer subtitle to test wrapping behavior.',
    size: 'medium'
  }
}`,...(_=(H=v.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var O,P,V;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    size: 'medium'
  }
}`,...(V=(P=w.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var B,F,X;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'Small Logo',
    subtitle: 'Small Logo Subtitle',
    size: 'small'
  }
}`,...(X=(F=y.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};var q,K,Y;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'Large Logo',
    subtitle: 'Large Logo Subtitle',
    size: 'large'
  }
}`,...(Y=(K=S.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var G,J,Z;L.parameters={...L.parameters,docs:{...(G=L.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    logoSrc: '',
    title: 'No Logo Header',
    subtitle: 'No Logo Subtitle',
    size: 'medium'
  }
}`,...(Z=(J=L.parameters)==null?void 0:J.docs)==null?void 0:Z.source}}};const Ye=["Default","Vertical","LongTitle","Loading","SmallLogo","LargeLogo","NoLogo"];export{x as Default,S as LargeLogo,w as Loading,v as LongTitle,L as NoLogo,y as SmallLogo,b as Vertical,Ye as __namedExportsOrder,Ke as default};
