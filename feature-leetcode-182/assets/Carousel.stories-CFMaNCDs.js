import{r as h,b as O,F as Z,j as o,c as $,h as f,k as D,l as q}from"./iframe-r1v6_R67.js";import{c as rr}from"./createSvgIcon-YX4TyXIq.js";import{C as er}from"./ChevronRight-BvzQPoH_.js";import{g as F,a as U,c as X,s as i,m as C,d as tr}from"./memoTheme-DMXJSkDa.js";import{B as m}from"./Box-t_oMcW6i.js";import{I as or}from"./IconButton-DumCwoD4.js";import{u as k}from"./useSlot-BoW9mLZQ.js";import{P as ar}from"./Paper-CWX8BRfR.js";import{c as S}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./preload-helper-BAi431uf.js";import"./ButtonBase-BUuqq9Z1.js";import"./useTimeout-BvBPUKVg.js";import"./useForkRef-N9BlOsNH.js";import"./CircularProgress-Clr799ko.js";import"./mergeSlotProps-CrkQaGlp.js";import"./useTheme-DZ8dXVEY.js";function nr(e){return F("MuiLinearProgress",e)}U("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const A=4,L=q`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,sr=typeof L!="string"?D`
        animation: ${L} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,T=q`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,ir=typeof T!="string"?D`
        animation: ${T} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,N=q`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,lr=typeof N!="string"?D`
        animation: ${N} 3s infinite linear;
      `:null,cr=e=>{const{classes:r,variant:t,color:n}=e,c={root:["root",`color${f(n)}`,t],dashed:["dashed",`dashedColor${f(n)}`],bar1:["bar","bar1",`barColor${f(n)}`,(t==="indeterminate"||t==="query")&&"bar1Indeterminate",t==="determinate"&&"bar1Determinate",t==="buffer"&&"bar1Buffer"],bar2:["bar","bar2",t!=="buffer"&&`barColor${f(n)}`,t==="buffer"&&`color${f(n)}`,(t==="indeterminate"||t==="query")&&"bar2Indeterminate",t==="buffer"&&"bar2Buffer"]};return X(c,nr,r)},z=(e,r)=>e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:e.palette.mode==="light"?e.lighten(e.palette[r].main,.62):e.darken(e.palette[r].main,.5),pr=i("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`color${f(t.color)}`],r[t.variant]]}})(C(({theme:e})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(e.palette).filter(S()).map(([r])=>({props:{color:r},style:{backgroundColor:z(e,r)}})),{props:({ownerState:r})=>r.color==="inherit"&&r.variant!=="buffer",style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),dr=i("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.dashed,r[`dashedColor${f(t.color)}`]]}})(C(({theme:e})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(e.palette).filter(S()).map(([r])=>{const t=z(e,r);return{props:{color:r},style:{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`}}})]})),lr||{animation:`${N} 3s infinite linear`}),ur=i("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r.bar1,r[`barColor${f(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&r.bar1Indeterminate,t.variant==="determinate"&&r.bar1Determinate,t.variant==="buffer"&&r.bar1Buffer]}})(C(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(e.palette).filter(S()).map(([r])=>({props:{color:r},style:{backgroundColor:(e.vars||e).palette[r].main}})),{props:{variant:"determinate"},style:{transition:`transform .${A}s linear`}},{props:{variant:"buffer"},style:{zIndex:1,transition:`transform .${A}s linear`}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:sr||{animation:`${L} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),fr=i("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r.bar2,r[`barColor${f(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&r.bar2Indeterminate,t.variant==="buffer"&&r.bar2Buffer]}})(C(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(e.palette).filter(S()).map(([r])=>({props:{color:r},style:{"--LinearProgressBar2-barColor":(e.vars||e).palette[r].main}})),{props:({ownerState:r})=>r.variant!=="buffer"&&r.color!=="inherit",style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:r})=>r.variant!=="buffer"&&r.color==="inherit",style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(e.palette).filter(S()).map(([r])=>({props:{color:r,variant:"buffer"},style:{backgroundColor:z(e,r),transition:`transform .${A}s linear`}})),{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:ir||{animation:`${T} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),mr=h.forwardRef(function(r,t){const n=O({props:r,name:"MuiLinearProgress"}),{className:c,color:v="primary",value:b,valueBuffer:y,variant:p="indeterminate",...g}=n,s={...n,color:v,variant:p},d=cr(s),x=Z(),a={},u={bar1:{},bar2:{}};if((p==="determinate"||p==="buffer")&&b!==void 0){a["aria-valuenow"]=Math.round(b),a["aria-valuemin"]=0,a["aria-valuemax"]=100;let l=b-100;x&&(l=-l),u.bar1.transform=`translateX(${l}%)`}if(p==="buffer"&&y!==void 0){let l=(y||0)-100;x&&(l=-l),u.bar2.transform=`translateX(${l}%)`}return o.jsxs(pr,{className:$(d.root,c),ownerState:s,role:"progressbar",...a,ref:t,...g,children:[p==="buffer"?o.jsx(dr,{className:d.dashed,ownerState:s}):null,o.jsx(ur,{className:d.bar1,ownerState:s,style:u.bar1}),p==="determinate"?null:o.jsx(fr,{className:d.bar2,ownerState:s,style:u.bar2})]})});function br(e){return F("MuiMobileStepper",e)}U("MuiMobileStepper",["root","positionBottom","positionTop","positionStatic","dots","dot","dotActive","progress"]);const gr=e=>{const{classes:r,position:t}=e,n={root:["root",`position${f(t)}`],dots:["dots"],dot:["dot"],dotActive:["dotActive"],progress:["progress"]};return X(n,br,r)},hr=i(ar,{name:"MuiMobileStepper",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`position${f(t.position)}`]]}})(C(({theme:e})=>({display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",background:(e.vars||e).palette.background.default,padding:8,variants:[{props:({position:r})=>r==="top"||r==="bottom",style:{position:"fixed",left:0,right:0,zIndex:(e.vars||e).zIndex.mobileStepper}},{props:{position:"top"},style:{top:0}},{props:{position:"bottom"},style:{bottom:0}}]}))),vr=i("div",{name:"MuiMobileStepper",slot:"Dots"})({variants:[{props:{variant:"dots"},style:{display:"flex",flexDirection:"row"}}]}),yr=i("div",{name:"MuiMobileStepper",slot:"Dot",shouldForwardProp:e=>tr(e)&&e!=="dotActive",overridesResolver:(e,r)=>{const{dotActive:t}=e;return[r.dot,t&&r.dotActive]}})(C(({theme:e})=>({variants:[{props:{variant:"dots"},style:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),backgroundColor:(e.vars||e).palette.action.disabled,borderRadius:"50%",width:8,height:8,margin:"0 2px"}},{props:{variant:"dots",dotActive:!0},style:{backgroundColor:(e.vars||e).palette.primary.main}}]}))),xr=i(mr,{name:"MuiMobileStepper",slot:"Progress"})({variants:[{props:{variant:"progress"},style:{width:"50%"}}]}),Cr=h.forwardRef(function(r,t){const n=O({props:r,name:"MuiMobileStepper"}),{activeStep:c=0,backButton:v,className:b,LinearProgressProps:y,nextButton:p,position:g="bottom",steps:s,variant:d="dots",slots:x={},slotProps:a={},...u}=n,l={...n,activeStep:c,position:g,variant:d};let I;d==="progress"&&(s===1?I=100:I=Math.ceil(c/(s-1)*100));const w=gr(l),P={slots:x,slotProps:{progress:y,...a}},[V,W]=k("root",{ref:t,elementType:hr,shouldForwardComponentProp:!0,className:$(w.root,b),externalForwardedProps:{...P,...u},ownerState:l,additionalProps:{square:!0,elevation:0}}),[Y,G]=k("dots",{className:w.dots,elementType:vr,externalForwardedProps:P,ownerState:l}),[H,E]=k("dot",{elementType:yr,externalForwardedProps:P,ownerState:l}),[J,Q]=k("progress",{className:w.progress,elementType:xr,shouldForwardComponentProp:!0,externalForwardedProps:P,ownerState:l,additionalProps:{value:I,variant:"determinate"}});return o.jsxs(V,{...W,children:[v,d==="text"&&o.jsxs(h.Fragment,{children:[c+1," / ",s]}),d==="dots"&&o.jsx(Y,{...G,children:[...new Array(s)].map((Mr,R)=>o.jsx(H,{...E,className:$(w.dot,E.className,R===c&&w.dotActive),dotActive:R===c},R))}),d==="progress"&&o.jsx(J,{...Q}),p]})}),wr=rr(o.jsx("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),Sr=i(m)(({theme:e})=>({width:"100%",maxWidth:"1200px",margin:"0 auto",position:"relative",overflow:"hidden",borderRadius:"16px",background:"#f5f5f5",padding:e.spacing(6,8),boxSizing:"border-box"})),Pr=i(m)(()=>({display:"flex",justifyContent:"center",alignItems:"center",width:"100%"})),kr=i(m)(({theme:e})=>({width:"260px",height:"320px",borderRadius:"16px",backgroundColor:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",fontSize:"48px",fontWeight:700,boxShadow:e.shadows[1],[e.breakpoints.down("sm")]:{width:"180px",height:"180px"}})),_=i(or)(({theme:e})=>({position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:2,backgroundColor:"#ffffff",boxShadow:e.shadows[2],"&:hover":{backgroundColor:"#eeeeee"}})),jr=i(_)(()=>({left:"280px"})),Br=i(_)(()=>({right:"280px"})),K=({children:e,autoPlay:r=!1,autoPlayInterval:t=3e3})=>{const n=Array.isArray(e)?e:[e],[c,v]=h.useState(0),[b,y]=h.useState(0),p=n.length,g=()=>{v(a=>(a+1)%p)},s=()=>{v(a=>a===0?p-1:a-1)},d=a=>{y(a.changedTouches[0].screenX)},x=a=>{const u=a.changedTouches[0].screenX;b-u>50&&g(),u-b>50&&s()};return h.useEffect(()=>{if(!r)return;const a=setInterval(()=>{g()},t);return()=>clearInterval(a)},[r,t]),h.useEffect(()=>{const a=u=>{u.key==="ArrowRight"&&g(),u.key==="ArrowLeft"&&s()};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[]),o.jsxs(Sr,{"aria-roledescription":"carousel",onTouchStart:d,onTouchEnd:x,children:[o.jsx(jr,{onClick:s,"aria-label":"Previous slide",children:o.jsx(wr,{})}),o.jsx(Pr,{children:o.jsx(kr,{children:n[c]})}),o.jsx(Br,{onClick:g,"aria-label":"Next slide",children:o.jsx(er,{})}),o.jsx(Cr,{steps:p,position:"static",activeStep:c,nextButton:null,backButton:null,sx:{width:"100%",justifyContent:"center",background:"transparent",mt:2}})]})};K.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:""},autoPlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoPlayInterval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}}}};const Kr={title:"Component Catalog/Carousel",component:K,tags:["autodocs"],argTypes:{autoPlay:{control:"boolean"},interval:{control:"number"}}},j={args:{autoPlay:!1,interval:3e3,children:[o.jsx(m,{sx:{height:200,width:"100%",bgcolor:"primary.main"}},1),o.jsx(m,{sx:{height:200,width:"100%",bgcolor:"secondary.main"}},2),o.jsx(m,{sx:{height:200,width:"100%",bgcolor:"success.main"}},3)]}},B={args:{autoPlay:!0,interval:2e3,children:[o.jsx(m,{sx:{height:200,width:"100%",bgcolor:"primary.main"}},1),o.jsx(m,{sx:{height:200,width:"100%",bgcolor:"secondary.main"}},2),o.jsx(m,{sx:{height:200,width:"100%",bgcolor:"success.main"}},3)]}},M={args:{autoPlay:!1,children:[o.jsx(m,{sx:{height:200,width:"100%",bgcolor:"warning.main"}},1)]}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    autoPlay: false,
    interval: 3000,
    children: [<Box key={1} sx={{
      height: 200,
      width: '100%',
      bgcolor: 'primary.main'
    }} />, <Box key={2} sx={{
      height: 200,
      width: '100%',
      bgcolor: 'secondary.main'
    }} />, <Box key={3} sx={{
      height: 200,
      width: '100%',
      bgcolor: 'success.main'
    }} />]
  }
}`,...j.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    autoPlay: true,
    interval: 2000,
    children: [<Box key={1} sx={{
      height: 200,
      width: '100%',
      bgcolor: 'primary.main'
    }} />, <Box key={2} sx={{
      height: 200,
      width: '100%',
      bgcolor: 'secondary.main'
    }} />, <Box key={3} sx={{
      height: 200,
      width: '100%',
      bgcolor: 'success.main'
    }} />]
  }
}`,...B.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    autoPlay: false,
    children: [<Box key={1} sx={{
      height: 200,
      width: '100%',
      bgcolor: 'warning.main'
    }} />]
  }
}`,...M.parameters?.docs?.source}}};const Vr=["Default","AutoPlay","SingleSlide"];export{B as AutoPlay,j as Default,M as SingleSlide,Vr as __namedExportsOrder,Kr as default};
