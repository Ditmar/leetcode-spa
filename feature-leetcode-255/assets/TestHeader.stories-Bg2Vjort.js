import{q as Q,r as y,V as U,s as A,T as H,j as t}from"./iframe-OsMjV1H6.js";import{c as R,S as N}from"./createSvgIcon-o8BK3eln.js";import{s as p,B as u,T as E}from"./Box-D6rqcNg1.js";import{u as W}from"./useTheme-Dz0VBCrs.js";import{g as _}from"./getThemeProps-DJbUidwz.js";import{C as j}from"./Card-DCtsDZy2.js";import{S as T}from"./Skeleton-Bn-b6OLQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-BdUH08dz.js";function V(e,o,r,a,s){const[n,d]=y.useState(()=>s&&r?r(e).matches:a?a(e).matches:o);return A(()=>{if(!r)return;const c=r(e),l=()=>{d(c.matches)};return l(),c.addEventListener("change",l),()=>{c.removeEventListener("change",l)}},[e,r]),n}const O={...U},k=O.useSyncExternalStore;function P(e,o,r,a,s){const n=y.useCallback(()=>o,[o]),d=y.useMemo(()=>{if(s&&r)return()=>r(e).matches;if(a!==null){const{matches:i}=a(e);return()=>i}return n},[n,e,a,s,r]),[c,l]=y.useMemo(()=>{if(r===null)return[n,()=>()=>{}];const i=r(e);return[()=>i.matches,g=>(i.addEventListener("change",g),()=>{i.removeEventListener("change",g)})]},[n,r,e]);return k(l,c,d)}function D(e={}){const{themeId:o}=e;return function(a,s={}){let n=Q();n&&o&&(n=n[o]||n);const d=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:c=!1,matchMedia:l=d?window.matchMedia:null,ssrMatchMedia:L=null,noSsr:i=!1}=_({name:"MuiUseMediaQuery",props:s,theme:n});let g=typeof a=="function"?a(n):a;return g=g.replace(/^@media( ?)/m,""),g.includes("print")&&console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.","Using the print media query to modify print styles can lead to unexpected results.","Consider using the `displayPrint` field in the `sx` prop instead.","More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)),(k!==void 0?P:V)(g,c,l,L,i)}}D();const q=D({themeId:H}),m=""+new URL("tcs-logo-i86t0D5v.svg",import.meta.url).href,B=R(t.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"})),F="TCS Quiz Competition",Y="TCS Campus Drive - 2023",C=p(u)(({theme:e,flexDirection:o})=>({display:"flex",alignItems:"center",justifyContent:o==="row"?"space-between":"center",flexDirection:o,padding:e.spacing(2),[e.breakpoints.down("sm")]:{flexDirection:"column",alignItems:"center",padding:e.spacing(1.5),gap:e.spacing(1.5)}})),z=p(u)(({theme:e})=>({display:"flex",alignItems:"center",gap:e.spacing(2),flex:"0 0 auto",[e.breakpoints.down("sm")]:{flexDirection:"column",gap:e.spacing(1),alignItems:"center"}})),I=p(u)(({theme:e})=>({display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"left",minWidth:0,flex:"0 1 auto",[e.breakpoints.down("sm")]:{alignItems:"center",textAlign:"center",width:"100%",maxWidth:"90vw",overflow:"hidden"}})),$=p(E)(({theme:e})=>({...e.typography.title,fontWeight:600,fontSize:e.typography.pxToRem(18),color:"#565656",width:e.spacing(25.375),overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",[e.breakpoints.down("sm")]:{maxWidth:"90vw",textAlign:"center",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}})),G=p(E)(({theme:e})=>({...e.typography.subtitle,fontWeight:400,fontSize:e.typography.pxToRem(16),color:"#A9A9A9",width:e.spacing(21.125),overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",[e.breakpoints.down("sm")]:{maxWidth:"90vw",textAlign:"center",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}})),J=p("img")(({theme:e,size:o})=>({width:o==="small"?e.spacing(12.5):o==="large"?e.spacing(30):e.spacing(25.125),height:o==="small"?e.spacing(5.25):o==="large"?e.spacing(12.75):e.spacing(10.625),borderRadius:e.spacing(.75),opacity:1,objectFit:"contain",backgroundColor:"transparent",flex:"0 0 auto",[e.breakpoints.down("sm")]:{margin:"0 auto",maxWidth:"100%"}}));p(N)(({theme:e,size:o})=>({width:o==="small"?e.spacing(12.5):o==="large"?e.spacing(30):e.spacing(25.125),height:o==="small"?e.spacing(5.25):o==="large"?e.spacing(12.75):e.spacing(10.625),borderRadius:e.spacing(.75),backgroundColor:"transparent",[e.breakpoints.down("sm")]:{margin:"0 auto",maxWidth:"100%"}}));const M=e=>{const{title:o=F,subtitle:r=Y,variant:a="horizontal",size:s="medium",isLoading:n=!1,logoSrc:d}=e,c=d??m,l=W(),i=q(l.breakpoints.down("sm"))||a==="vertical"?"column":"row";return n?t.jsx("div",{role:"banner","data-testid":"header-wrapper",style:{display:"flex",flexDirection:i},children:t.jsx(j,{sx:{boxShadow:"none",bgcolor:"transparent",width:"100%"},children:t.jsxs(C,{flexDirection:i,children:[t.jsxs(z,{children:[t.jsx(T,{variant:"rectangular",width:s==="small"?100:s==="large"?240:201,height:s==="small"?42:s==="large"?102:85,role:"progressbar"}),t.jsxs(I,{children:[t.jsx(T,{variant:"text",width:203,height:22,role:"progressbar"}),t.jsx(T,{variant:"text",width:169,height:19,role:"progressbar"})]})]}),t.jsx(u,{sx:{width:l.spacing(10),display:"flex",alignItems:"center"}})]})})}):t.jsx("div",{role:"banner","data-testid":"header-wrapper",style:{display:"flex",flexDirection:i},children:t.jsx(j,{sx:{boxShadow:"none",bgcolor:"transparent",width:"100%"},children:t.jsxs(C,{flexDirection:i,children:[t.jsxs(z,{children:[c?t.jsx(J,{src:c,alt:"TCS Logo",size:s}):t.jsx(u,{"data-testid":"placeholder-logo",sx:{width:s==="small"?100:s==="large"?240:201,height:s==="small"?42:s==="large"?102:85,display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"grey.100",borderRadius:1},children:t.jsx(B,{fontSize:s==="large"?"large":"medium",color:"disabled","aria-label":"Placeholder logo"})}),t.jsxs(I,{children:[t.jsx($,{children:o}),r&&t.jsx(G,{children:r})]})]}),t.jsx(u,{sx:{width:l.spacing(10),display:"flex",alignItems:"center"}})]})})})};M.__docgenInfo={description:"",methods:[],displayName:"TestHeader",props:{logoSrc:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""}}};const le={title:"Components/TestHeader",component:M,parameters:{layout:"fullscreen"},decorators:[e=>t.jsx("div",{style:{padding:"16px",backgroundColor:"#f5f5f5"},children:t.jsx(e,{})})]},h={args:{logoSrc:m,title:"TCS Quiz Competition",subtitle:"TCS Campus Drive-2023",size:"medium"}},f={args:{logoSrc:m,title:"Vertical Layout",subtitle:"Stacked version",variant:"vertical",size:"medium"}},x={args:{logoSrc:m,title:"This is a very long quiz name to test responsiveness and overflow handling in the header component",subtitle:"This is a longer subtitle to test wrapping behavior.",size:"medium"}},S={args:{isLoading:!0,size:"medium"}},b={args:{logoSrc:m,title:"Small Logo",subtitle:"Small Logo Subtitle",size:"small"}},w={args:{logoSrc:m,title:"Large Logo",subtitle:"Large Logo Subtitle",size:"large"}},v={args:{logoSrc:"",title:"No Logo Header",subtitle:"No Logo Subtitle",size:"medium"}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'TCS Quiz Competition',
    subtitle: 'TCS Campus Drive-2023',
    size: 'medium'
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'Vertical Layout',
    subtitle: 'Stacked version',
    variant: 'vertical',
    size: 'medium'
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'This is a very long quiz name to test responsiveness and overflow handling in the header component',
    subtitle: 'This is a longer subtitle to test wrapping behavior.',
    size: 'medium'
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    size: 'medium'
  }
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'Small Logo',
    subtitle: 'Small Logo Subtitle',
    size: 'small'
  }
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'Large Logo',
    subtitle: 'Large Logo Subtitle',
    size: 'large'
  }
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: '',
    title: 'No Logo Header',
    subtitle: 'No Logo Subtitle',
    size: 'medium'
  }
}`,...v.parameters?.docs?.source}}};const ce=["Default","Vertical","LongTitle","Loading","SmallLogo","LargeLogo","NoLogo"];export{h as Default,w as LargeLogo,S as Loading,x as LongTitle,v as NoLogo,b as SmallLogo,f as Vertical,ce as __namedExportsOrder,le as default};
