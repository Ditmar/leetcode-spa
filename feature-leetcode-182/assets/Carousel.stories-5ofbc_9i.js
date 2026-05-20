import{r as v,b as F,F as rr,j as o,c as A,h as f,k as q,l as z}from"./iframe-X4gaZt09.js";import{c as er}from"./createSvgIcon-BVoWsbYm.js";import{C as tr}from"./ChevronRight-BlBlzAie.js";import{g as U,a as X,c as _,s as i,m as S,d as or}from"./memoTheme-DVmgVHuk.js";import{B as m}from"./Box-DtFszMI3.js";import{I as ar}from"./IconButton-D-MdWmYx.js";import{u as B}from"./useSlot-DtkU3OuL.js";import{P as sr}from"./Paper-BdDhTVOy.js";import{c as k}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./preload-helper-BAi431uf.js";import"./ButtonBase-Dw3fydWm.js";import"./useTimeout-Ep_6bsN1.js";import"./useForkRef-91d1T-bU.js";import"./CircularProgress-DLNLuigp.js";import"./mergeSlotProps-BM0Mf6AP.js";import"./useTheme-DIqS1bMY.js";function nr(e){return U("MuiLinearProgress",e)}X("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const L=4,T=z`
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
`,ir=typeof T!="string"?q`
        animation: ${T} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,N=z`
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
`,lr=typeof N!="string"?q`
        animation: ${N} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,D=z`
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
`,cr=typeof D!="string"?q`
        animation: ${D} 3s infinite linear;
      `:null,dr=e=>{const{classes:r,variant:t,color:s}=e,c={root:["root",`color${f(s)}`,t],dashed:["dashed",`dashedColor${f(s)}`],bar1:["bar","bar1",`barColor${f(s)}`,(t==="indeterminate"||t==="query")&&"bar1Indeterminate",t==="determinate"&&"bar1Determinate",t==="buffer"&&"bar1Buffer"],bar2:["bar","bar2",t!=="buffer"&&`barColor${f(s)}`,t==="buffer"&&`color${f(s)}`,(t==="indeterminate"||t==="query")&&"bar2Indeterminate",t==="buffer"&&"bar2Buffer"]};return _(c,nr,r)},E=(e,r)=>e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:e.palette.mode==="light"?e.lighten(e.palette[r].main,.62):e.darken(e.palette[r].main,.5),pr=i("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`color${f(t.color)}`],r[t.variant]]}})(S(({theme:e})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(e.palette).filter(k()).map(([r])=>({props:{color:r},style:{backgroundColor:E(e,r)}})),{props:({ownerState:r})=>r.color==="inherit"&&r.variant!=="buffer",style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),ur=i("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.dashed,r[`dashedColor${f(t.color)}`]]}})(S(({theme:e})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(e.palette).filter(k()).map(([r])=>{const t=E(e,r);return{props:{color:r},style:{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`}}})]})),cr||{animation:`${D} 3s infinite linear`}),fr=i("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r.bar1,r[`barColor${f(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&r.bar1Indeterminate,t.variant==="determinate"&&r.bar1Determinate,t.variant==="buffer"&&r.bar1Buffer]}})(S(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(e.palette).filter(k()).map(([r])=>({props:{color:r},style:{backgroundColor:(e.vars||e).palette[r].main}})),{props:{variant:"determinate"},style:{transition:`transform .${L}s linear`}},{props:{variant:"buffer"},style:{zIndex:1,transition:`transform .${L}s linear`}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:ir||{animation:`${T} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),mr=i("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r.bar2,r[`barColor${f(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&r.bar2Indeterminate,t.variant==="buffer"&&r.bar2Buffer]}})(S(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(e.palette).filter(k()).map(([r])=>({props:{color:r},style:{"--LinearProgressBar2-barColor":(e.vars||e).palette[r].main}})),{props:({ownerState:r})=>r.variant!=="buffer"&&r.color!=="inherit",style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:r})=>r.variant!=="buffer"&&r.color==="inherit",style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(e.palette).filter(k()).map(([r])=>({props:{color:r,variant:"buffer"},style:{backgroundColor:E(e,r),transition:`transform .${L}s linear`}})),{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:lr||{animation:`${N} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),br=v.forwardRef(function(r,t){const s=F({props:r,name:"MuiLinearProgress"}),{className:c,color:x="primary",value:b,valueBuffer:h,variant:d="indeterminate",...g}=s,n={...s,color:x,variant:d},p=dr(n),C=rr(),a={},u={bar1:{},bar2:{}};if((d==="determinate"||d==="buffer")&&b!==void 0){a["aria-valuenow"]=Math.round(b),a["aria-valuemin"]=0,a["aria-valuemax"]=100;let l=b-100;C&&(l=-l),u.bar1.transform=`translateX(${l}%)`}if(d==="buffer"&&h!==void 0){let l=(h||0)-100;C&&(l=-l),u.bar2.transform=`translateX(${l}%)`}return o.jsxs(pr,{className:A(p.root,c),ownerState:n,role:"progressbar",...a,ref:t,...g,children:[d==="buffer"?o.jsx(ur,{className:p.dashed,ownerState:n}):null,o.jsx(fr,{className:p.bar1,ownerState:n,style:u.bar1}),d==="determinate"?null:o.jsx(mr,{className:p.bar2,ownerState:n,style:u.bar2})]})});function gr(e){return U("MuiMobileStepper",e)}X("MuiMobileStepper",["root","positionBottom","positionTop","positionStatic","dots","dot","dotActive","progress"]);const yr=e=>{const{classes:r,position:t}=e,s={root:["root",`position${f(t)}`],dots:["dots"],dot:["dot"],dotActive:["dotActive"],progress:["progress"]};return _(s,gr,r)},vr=i(sr,{name:"MuiMobileStepper",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`position${f(t.position)}`]]}})(S(({theme:e})=>({display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",background:(e.vars||e).palette.background.default,padding:8,variants:[{props:({position:r})=>r==="top"||r==="bottom",style:{position:"fixed",left:0,right:0,zIndex:(e.vars||e).zIndex.mobileStepper}},{props:{position:"top"},style:{top:0}},{props:{position:"bottom"},style:{bottom:0}}]}))),xr=i("div",{name:"MuiMobileStepper",slot:"Dots"})({variants:[{props:{variant:"dots"},style:{display:"flex",flexDirection:"row"}}]}),hr=i("div",{name:"MuiMobileStepper",slot:"Dot",shouldForwardProp:e=>or(e)&&e!=="dotActive",overridesResolver:(e,r)=>{const{dotActive:t}=e;return[r.dot,t&&r.dotActive]}})(S(({theme:e})=>({variants:[{props:{variant:"dots"},style:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),backgroundColor:(e.vars||e).palette.action.disabled,borderRadius:"50%",width:8,height:8,margin:"0 2px"}},{props:{variant:"dots",dotActive:!0},style:{backgroundColor:(e.vars||e).palette.primary.main}}]}))),Cr=i(br,{name:"MuiMobileStepper",slot:"Progress"})({variants:[{props:{variant:"progress"},style:{width:"50%"}}]}),Sr=v.forwardRef(function(r,t){const s=F({props:r,name:"MuiMobileStepper"}),{activeStep:c=0,backButton:x,className:b,LinearProgressProps:h,nextButton:d,position:g="bottom",steps:n,variant:p="dots",slots:C={},slotProps:a={},...u}=s,l={...s,activeStep:c,position:g,variant:p};let R;p==="progress"&&(n===1?R=100:R=Math.ceil(c/(n-1)*100));const P=yr(l),w={slots:C,slotProps:{progress:h,...a}},[W,Y]=B("root",{ref:t,elementType:vr,shouldForwardComponentProp:!0,className:A(P.root,b),externalForwardedProps:{...w,...u},ownerState:l,additionalProps:{square:!0,elevation:0}}),[G,H]=B("dots",{className:P.dots,elementType:xr,externalForwardedProps:w,ownerState:l}),[J,O]=B("dot",{elementType:hr,externalForwardedProps:w,ownerState:l}),[Q,Z]=B("progress",{className:P.progress,elementType:Cr,shouldForwardComponentProp:!0,externalForwardedProps:w,ownerState:l,additionalProps:{value:R,variant:"determinate"}});return o.jsxs(W,{...Y,children:[x,p==="text"&&o.jsxs(v.Fragment,{children:[c+1," / ",n]}),p==="dots"&&o.jsx(G,{...H,children:[...new Array(n)].map((Mr,$)=>o.jsx(J,{...O,className:A(P.dot,O.className,$===c&&P.dotActive),dotActive:$===c},$))}),p==="progress"&&o.jsx(Q,{...Z}),d]})}),Pr=er(o.jsx("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),kr=i(m)(({theme:e})=>({width:"100%",maxWidth:"900px",margin:"0 auto",backgroundColor:"#f5f5f5",borderRadius:"16px",padding:e.spacing(6,4),position:"relative",overflow:"hidden"})),wr=i(m)(()=>({display:"flex",alignItems:"center",justifyContent:"center",position:"relative"})),Br=i(m)(({theme:e})=>({width:"240px",height:"240px",borderRadius:"16px",backgroundColor:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",boxShadow:e.shadows[1],transition:"all 0.3s ease",[e.breakpoints.down("sm")]:{width:"180px",height:"180px"}})),K=i(ar)(({theme:e})=>({position:"absolute",top:"50%",transform:"translateY(-50%)",backgroundColor:"#ffffff",boxShadow:e.shadows[2],zIndex:2,"&:hover":{backgroundColor:"#f0f0f0"}})),jr=i(K)(()=>({left:"24%"})),Ir=i(K)(()=>({right:"24%"})),V=({children:e,autoPlay:r=!1,autoPlayInterval:t=3e3})=>{const s=Array.isArray(e)?e:[e],[c,x]=v.useState(0),[b,h]=v.useState(0),d=s.length,g=()=>{x(a=>(a+1)%d)},n=()=>{x(a=>a===0?d-1:a-1)},p=a=>{h(a.changedTouches[0].screenX)},C=a=>{const u=a.changedTouches[0].screenX;b-u>50&&g(),u-b>50&&n()};return v.useEffect(()=>{if(!r)return;const a=setInterval(()=>{g()},t);return()=>clearInterval(a)},[r,t]),v.useEffect(()=>{const a=u=>{u.key==="ArrowRight"&&g(),u.key==="ArrowLeft"&&n()};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[]),o.jsxs(kr,{"aria-roledescription":"carousel",onTouchStart:p,onTouchEnd:C,children:[o.jsx(jr,{onClick:n,"aria-label":"Previous slide",children:o.jsx(Pr,{})}),o.jsx(wr,{children:o.jsx(Br,{children:s[c]})}),o.jsx(Ir,{onClick:g,"aria-label":"Next slide",children:o.jsx(tr,{})}),o.jsx(Sr,{steps:d,position:"static",activeStep:c,nextButton:null,backButton:null,sx:{width:"100%",justifyContent:"center",background:"transparent",mt:2}})]})};V.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:""},autoPlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoPlayInterval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}}}};const y={width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"48px",fontWeight:"bold",backgroundColor:"#fafafa",borderRadius:"16px"},Vr={title:"Component Catalog/Carousel",component:V,tags:["autodocs"],argTypes:{autoPlay:{control:"boolean"},autoPlayInterval:{control:"number"}}},j={args:{autoPlay:!1,autoPlayInterval:3e3,children:[o.jsx(m,{sx:y,children:"1"},1),o.jsx(m,{sx:y,children:"2"},2),o.jsx(m,{sx:y,children:"3"},3),o.jsx(m,{sx:y,children:"4"},4)]}},I={args:{autoPlay:!0,autoPlayInterval:2e3,children:[o.jsx(m,{sx:y,children:"1"},1),o.jsx(m,{sx:y,children:"2"},2),o.jsx(m,{sx:y,children:"3"},3)]}},M={args:{autoPlay:!1,autoPlayInterval:3e3,children:[o.jsx(m,{sx:y,children:"1"},1)]}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    autoPlay: false,
    autoPlayInterval: 3000,
    children: [<Box key={1} sx={slideStyle}>
        1
      </Box>, <Box key={2} sx={slideStyle}>
        2
      </Box>, <Box key={3} sx={slideStyle}>
        3
      </Box>, <Box key={4} sx={slideStyle}>
        4
      </Box>]
  }
}`,...j.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    autoPlay: true,
    autoPlayInterval: 2000,
    children: [<Box key={1} sx={slideStyle}>
        1
      </Box>, <Box key={2} sx={slideStyle}>
        2
      </Box>, <Box key={3} sx={slideStyle}>
        3
      </Box>]
  }
}`,...I.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    autoPlay: false,
    autoPlayInterval: 3000,
    children: [<Box key={1} sx={slideStyle}>
        1
      </Box>]
  }
}`,...M.parameters?.docs?.source}}};const Wr=["Default","AutoPlay","SingleSlide"];export{I as AutoPlay,j as Default,M as SingleSlide,Wr as __namedExportsOrder,Vr as default};
