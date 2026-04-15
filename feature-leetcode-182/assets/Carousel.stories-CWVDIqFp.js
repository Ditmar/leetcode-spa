import{r as y,u as _,t as or,j as o,c as A,a as d,v as D,w as q}from"./iframe-D8gEwxjF.js";import{c as X}from"./createSvgIcon-wpn77y8A.js";import{g as V,a as K,c as H,s as u,m as S,b as P,e as ar}from"./CircularProgress-Cpo2aUzx.js";import{P as sr,B as h}from"./Box-DZA6yty4.js";import{u as R,I as E}from"./IconButton-Bm2Z7TKd.js";import"./preload-helper-PPVm8Dsz.js";function nr(e){return V("MuiLinearProgress",e)}K("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const B=4,N=q`
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
`,ir=typeof N!="string"?D`
        animation: ${N} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,L=q`
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
`,lr=typeof L!="string"?D`
        animation: ${L} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,T=q`
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
`,cr=typeof T!="string"?D`
        animation: ${T} 3s infinite linear;
      `:null,pr=e=>{const{classes:r,variant:t,color:a}=e,s={root:["root",`color${d(a)}`,t],dashed:["dashed",`dashedColor${d(a)}`],bar1:["bar","bar1",`barColor${d(a)}`,(t==="indeterminate"||t==="query")&&"bar1Indeterminate",t==="determinate"&&"bar1Determinate",t==="buffer"&&"bar1Buffer"],bar2:["bar","bar2",t!=="buffer"&&`barColor${d(a)}`,t==="buffer"&&`color${d(a)}`,(t==="indeterminate"||t==="query")&&"bar2Indeterminate",t==="buffer"&&"bar2Buffer"]};return H(s,nr,r)},z=(e,r)=>e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:e.palette.mode==="light"?e.lighten(e.palette[r].main,.62):e.darken(e.palette[r].main,.5),dr=u("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`color${d(t.color)}`],r[t.variant]]}})(S(({theme:e})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(e.palette).filter(P()).map(([r])=>({props:{color:r},style:{backgroundColor:z(e,r)}})),{props:({ownerState:r})=>r.color==="inherit"&&r.variant!=="buffer",style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),ur=u("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.dashed,r[`dashedColor${d(t.color)}`]]}})(S(({theme:e})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(e.palette).filter(P()).map(([r])=>{const t=z(e,r);return{props:{color:r},style:{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`}}})]})),cr||{animation:`${T} 3s infinite linear`}),fr=u("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r.bar1,r[`barColor${d(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&r.bar1Indeterminate,t.variant==="determinate"&&r.bar1Determinate,t.variant==="buffer"&&r.bar1Buffer]}})(S(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(e.palette).filter(P()).map(([r])=>({props:{color:r},style:{backgroundColor:(e.vars||e).palette[r].main}})),{props:{variant:"determinate"},style:{transition:`transform .${B}s linear`}},{props:{variant:"buffer"},style:{zIndex:1,transition:`transform .${B}s linear`}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:ir||{animation:`${N} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),mr=u("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r.bar2,r[`barColor${d(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&r.bar2Indeterminate,t.variant==="buffer"&&r.bar2Buffer]}})(S(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(e.palette).filter(P()).map(([r])=>({props:{color:r},style:{"--LinearProgressBar2-barColor":(e.vars||e).palette[r].main}})),{props:({ownerState:r})=>r.variant!=="buffer"&&r.color!=="inherit",style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:r})=>r.variant!=="buffer"&&r.color==="inherit",style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(e.palette).filter(P()).map(([r])=>({props:{color:r,variant:"buffer"},style:{backgroundColor:z(e,r),transition:`transform .${B}s linear`}})),{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:lr||{animation:`${L} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),br=y.forwardRef(function(r,t){const a=_({props:r,name:"MuiLinearProgress"}),{className:s,color:f="primary",value:p,valueBuffer:g,variant:n="indeterminate",...x}=a,l={...a,color:f,variant:n},c=pr(l),m=or(),b={},v={bar1:{},bar2:{}};if((n==="determinate"||n==="buffer")&&p!==void 0){b["aria-valuenow"]=Math.round(p),b["aria-valuemin"]=0,b["aria-valuemax"]=100;let i=p-100;m&&(i=-i),v.bar1.transform=`translateX(${i}%)`}if(n==="buffer"&&g!==void 0){let i=(g||0)-100;m&&(i=-i),v.bar2.transform=`translateX(${i}%)`}return o.jsxs(dr,{className:A(c.root,s),ownerState:l,role:"progressbar",...b,ref:t,...x,children:[n==="buffer"?o.jsx(ur,{className:c.dashed,ownerState:l}):null,o.jsx(fr,{className:c.bar1,ownerState:l,style:v.bar1}),n==="determinate"?null:o.jsx(mr,{className:c.bar2,ownerState:l,style:v.bar2})]})});function gr(e){return V("MuiMobileStepper",e)}K("MuiMobileStepper",["root","positionBottom","positionTop","positionStatic","dots","dot","dotActive","progress"]);const vr=e=>{const{classes:r,position:t}=e,a={root:["root",`position${d(t)}`],dots:["dots"],dot:["dot"],dotActive:["dotActive"],progress:["progress"]};return H(a,gr,r)},yr=u(sr,{name:"MuiMobileStepper",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`position${d(t.position)}`]]}})(S(({theme:e})=>({display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",background:(e.vars||e).palette.background.default,padding:8,variants:[{props:({position:r})=>r==="top"||r==="bottom",style:{position:"fixed",left:0,right:0,zIndex:(e.vars||e).zIndex.mobileStepper}},{props:{position:"top"},style:{top:0}},{props:{position:"bottom"},style:{bottom:0}}]}))),hr=u("div",{name:"MuiMobileStepper",slot:"Dots"})({variants:[{props:{variant:"dots"},style:{display:"flex",flexDirection:"row"}}]}),xr=u("div",{name:"MuiMobileStepper",slot:"Dot",shouldForwardProp:e=>ar(e)&&e!=="dotActive",overridesResolver:(e,r)=>{const{dotActive:t}=e;return[r.dot,t&&r.dotActive]}})(S(({theme:e})=>({variants:[{props:{variant:"dots"},style:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),backgroundColor:(e.vars||e).palette.action.disabled,borderRadius:"50%",width:8,height:8,margin:"0 2px"}},{props:{variant:"dots",dotActive:!0},style:{backgroundColor:(e.vars||e).palette.primary.main}}]}))),Sr=u(br,{name:"MuiMobileStepper",slot:"Progress"})({variants:[{props:{variant:"progress"},style:{width:"50%"}}]}),Cr=y.forwardRef(function(r,t){const a=_({props:r,name:"MuiMobileStepper"}),{activeStep:s=0,backButton:f,className:p,LinearProgressProps:g,nextButton:n,position:x="bottom",steps:l,variant:c="dots",slots:m={},slotProps:b={},...v}=a,i={...a,activeStep:s,position:x,variant:c};let M;c==="progress"&&(l===1?M=100:M=Math.ceil(s/(l-1)*100));const C=vr(i),j={slots:m,slotProps:{progress:g,...b}},[G,J]=R("root",{ref:t,elementType:yr,shouldForwardComponentProp:!0,className:A(C.root,p),externalForwardedProps:{...j,...v},ownerState:i,additionalProps:{square:!0,elevation:0}}),[Q,Z]=R("dots",{className:C.dots,elementType:hr,externalForwardedProps:j,ownerState:i}),[rr,O]=R("dot",{elementType:xr,externalForwardedProps:j,ownerState:i}),[er,tr]=R("progress",{className:C.progress,elementType:Sr,shouldForwardComponentProp:!0,externalForwardedProps:j,ownerState:i,additionalProps:{value:M,variant:"determinate"}});return o.jsxs(G,{...J,children:[f,c==="text"&&o.jsxs(y.Fragment,{children:[s+1," / ",l]}),c==="dots"&&o.jsx(Q,{...Z,children:[...new Array(l)].map((Lr,$)=>o.jsx(rr,{...O,className:A(C.dot,O.className,$===s&&C.dotActive),dotActive:$===s},$))}),c==="progress"&&o.jsx(er,{...tr}),n]})}),Pr=X(o.jsx("path",{d:"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"})),jr=X(o.jsx("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"})),Rr=3e3,F=50,U=(e,r)=>e<0?r-1:e>=r?0:e;function wr(e,r,t){const[a,s]=y.useState(0),f=y.useRef(null),p=()=>{s(n=>U(n+1,e))},g=()=>{s(n=>U(n-1,e))};return y.useEffect(()=>{if(!(!r||e<=1))return f.current=setInterval(()=>{p()},t),()=>{f.current&&clearInterval(f.current)}},[r,t,e]),{activeStep:a,next:p,back:g,setActiveStep:s}}const kr=u(h)({position:"relative",width:"100%",overflow:"hidden"}),Ir=u(h)(({index:e})=>({display:"flex",width:"100%",transform:`translateX(-${e*100}%)`,transition:"transform 0.4s ease-in-out"})),Mr=u(h)({minWidth:"100%",display:"flex",justifyContent:"center",alignItems:"center"});function W({children:e,autoPlay:r=!1,interval:t=Rr,...a}){const s=Array.isArray(e)?e:[e],f=s.length,{activeStep:p,next:g,back:n}=wr(f,r,t),x=y.useRef(0),l=m=>{x.current=m.touches[0].clientX},c=m=>{const b=m.changedTouches[0].clientX,v=x.current-b;v>F&&g(),v<-F&&n()};return o.jsxs(kr,{...a,children:[o.jsx(Ir,{index:p,onTouchStart:l,onTouchEnd:c,children:s.map((m,b)=>o.jsx(Mr,{children:m},b))}),o.jsx(E,{onClick:n,sx:{position:"absolute",top:"50%",left:8,transform:"translateY(-50%)",zIndex:2},children:o.jsx(Pr,{})}),o.jsx(E,{onClick:g,sx:{position:"absolute",top:"50%",right:8,transform:"translateY(-50%)",zIndex:2},children:o.jsx(jr,{})}),o.jsx(Cr,{steps:f,position:"static",activeStep:p,nextButton:null,backButton:null,sx:{position:"absolute",bottom:0,width:"100%",background:"transparent",justifyContent:"center"}})]})}W.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{children:{required:!0,tsType:{name:"union",raw:"React.ReactNode[] | React.ReactNode",elements:[{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},autoPlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},interval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}}},composes:["BoxProps"]};const Fr={title:"Components/Carousel",component:W},$r=()=>o.jsx(h,{sx:{height:200,bgcolor:"red"},children:"Slide 1"}),Ar=()=>o.jsx(h,{sx:{height:200,bgcolor:"blue"},children:"Slide 2"}),Br=()=>o.jsx(h,{sx:{height:200,bgcolor:"green"},children:"Slide 3"}),Y=[o.jsx($r,{},1),o.jsx(Ar,{},2),o.jsx(Br,{},3)],w={args:{children:Y}},k={args:{children:Y,autoPlay:!0,interval:2e3}},Nr=()=>o.jsx(h,{sx:{height:200,bgcolor:"purple"},children:"Only"}),I={args:{children:[o.jsx(Nr,{},1)]}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: slides
  }
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    children: slides,
    autoPlay: true,
    interval: 2000
  }
}`,...k.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<OnlySlide key={1} />]
  }
}`,...I.parameters?.docs?.source}}};const Ur=["Default","AutoPlay","SingleSlide"];export{k as AutoPlay,w as Default,I as SingleSlide,Ur as __namedExportsOrder,Fr as default};
