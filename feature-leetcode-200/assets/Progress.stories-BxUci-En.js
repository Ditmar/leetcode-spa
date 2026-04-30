import{r as B,b as O,F as q,j as t,c as U,k as l,l as $,m as A}from"./iframe-DUfy-dQu.js";import{g as V,a as _,c as W,s as o,m as L}from"./memoTheme-Es0hf3ac.js";import{B as g}from"./Box-X04_ITMV.js";import{c as C}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{B as F}from"./Button-Bn7cQD3d.js";import{u as K}from"./useTheme-BpdQUv7p.js";import{T as X}from"./Typography-8ZHa2_Qb.js";import{C as H}from"./CircularProgress-DAmHe_Wa.js";import"./preload-helper-B6DjJtXQ.js";import"./ButtonBase-7TchyLDF.js";import"./useTimeout-C7UJzl7J.js";import"./useForkRef-DU7_mvP9.js";function G(r){return V("MuiLinearProgress",r)}_("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const E=4,T=A`
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
`,J=typeof T!="string"?$`
        animation: ${T} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,j=A`
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
`,Q=typeof j!="string"?$`
        animation: ${j} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,N=A`
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
`,Y=typeof N!="string"?$`
        animation: ${N} 3s infinite linear;
      `:null,Z=r=>{const{classes:e,variant:a,color:i}=r,v={root:["root",`color${l(i)}`,a],dashed:["dashed",`dashedColor${l(i)}`],bar1:["bar","bar1",`barColor${l(i)}`,(a==="indeterminate"||a==="query")&&"bar1Indeterminate",a==="determinate"&&"bar1Determinate",a==="buffer"&&"bar1Buffer"],bar2:["bar","bar2",a!=="buffer"&&`barColor${l(i)}`,a==="buffer"&&`color${l(i)}`,(a==="indeterminate"||a==="query")&&"bar2Indeterminate",a==="buffer"&&"bar2Buffer"]};return W(v,G,e)},M=(r,e)=>r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:r.palette.mode==="light"?r.lighten(r.palette[e].main,.62):r.darken(r.palette[e].main,.5),rr=o("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.root,e[`color${l(a.color)}`],e[a.variant]]}})(L(({theme:r})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(r.palette).filter(C()).map(([e])=>({props:{color:e},style:{backgroundColor:M(r,e)}})),{props:({ownerState:e})=>e.color==="inherit"&&e.variant!=="buffer",style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),er=o("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.dashed,e[`dashedColor${l(a.color)}`]]}})(L(({theme:r})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(r.palette).filter(C()).map(([e])=>{const a=M(r,e);return{props:{color:e},style:{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`}}})]})),Y||{animation:`${N} 3s infinite linear`}),ar=o("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e.bar1,e[`barColor${l(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar1Indeterminate,a.variant==="determinate"&&e.bar1Determinate,a.variant==="buffer"&&e.bar1Buffer]}})(L(({theme:r})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(r.palette).filter(C()).map(([e])=>({props:{color:e},style:{backgroundColor:(r.vars||r).palette[e].main}})),{props:{variant:"determinate"},style:{transition:`transform .${E}s linear`}},{props:{variant:"buffer"},style:{zIndex:1,transition:`transform .${E}s linear`}},{props:({ownerState:e})=>e.variant==="indeterminate"||e.variant==="query",style:{width:"auto"}},{props:({ownerState:e})=>e.variant==="indeterminate"||e.variant==="query",style:J||{animation:`${T} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),tr=o("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e.bar2,e[`barColor${l(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar2Indeterminate,a.variant==="buffer"&&e.bar2Buffer]}})(L(({theme:r})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(r.palette).filter(C()).map(([e])=>({props:{color:e},style:{"--LinearProgressBar2-barColor":(r.vars||r).palette[e].main}})),{props:({ownerState:e})=>e.variant!=="buffer"&&e.color!=="inherit",style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:e})=>e.variant!=="buffer"&&e.color==="inherit",style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(r.palette).filter(C()).map(([e])=>({props:{color:e,variant:"buffer"},style:{backgroundColor:M(r,e),transition:`transform .${E}s linear`}})),{props:({ownerState:e})=>e.variant==="indeterminate"||e.variant==="query",style:{width:"auto"}},{props:({ownerState:e})=>e.variant==="indeterminate"||e.variant==="query",style:Q||{animation:`${j} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),or=B.forwardRef(function(e,a){const i=O({props:e,name:"MuiLinearProgress"}),{className:v,color:P="primary",value:y,valueBuffer:x,variant:s="indeterminate",...R}=i,c={...i,color:P,variant:s},u=Z(c),p=q(),m={},d={bar1:{},bar2:{}};if((s==="determinate"||s==="buffer")&&y!==void 0){m["aria-valuenow"]=Math.round(y),m["aria-valuemin"]=0,m["aria-valuemax"]=100;let n=y-100;p&&(n=-n),d.bar1.transform=`translateX(${n}%)`}if(s==="buffer"&&x!==void 0){let n=(x||0)-100;p&&(n=-n),d.bar2.transform=`translateX(${n}%)`}return t.jsxs(rr,{className:U(u.root,v),ownerState:c,role:"progressbar",...m,ref:a,...R,children:[s==="buffer"?t.jsx(er,{className:u.dashed,ownerState:c}):null,t.jsx(ar,{className:u.bar1,ownerState:c,style:d.bar1}),s==="determinate"?null:t.jsx(tr,{className:u.bar2,ownerState:c,style:d.bar2})]})});var f=(r=>(r.LINEAR="linear",r.CIRCULAR="circular",r))(f||{}),b=(r=>(r.DETERMINATE="determinate",r.INDETERMINATE="indeterminate",r))(b||{});const nr=r=>r===void 0?0:Math.min(100,Math.max(0,r)),ir=r=>{const e=nr(r);return{normalized:e,ariaValueNow:e}},sr=o(g)(({theme:r})=>({width:"100%",display:"flex",flexDirection:"column",gap:r.spacing(1)})),lr=o(g)(({theme:r})=>({fontSize:r.typography.caption.fontSize,textAlign:"right"})),cr=o(g)(()=>({display:"flex",justifyContent:"center",alignItems:"center",width:"100%"})),pr=o(or,{shouldForwardProp:r=>r!=="customcolor"})(({customcolor:r})=>({width:"100%",...r&&{"& .MuiLinearProgress-bar":{backgroundColor:r}}})),dr=o(g)(({theme:r})=>({width:"100%",gap:r.spacing(2),padding:r.spacing(2),borderRadius:r.spacing(1.75),border:`1px solid ${r.palette.divider}`,backgroundColor:r.palette.background.paper})),ur=o(g)(({theme:r})=>({display:"flex",gap:r.spacing(1)})),D=o(F)(({theme:r,bgcolor:e})=>({minWidth:r.spacing(10),height:r.spacing(4),paddingLeft:r.spacing(1.5),paddingRight:r.spacing(1.5),borderRadius:r.spacing(1),textTransform:"none",backgroundColor:e,color:r.palette.background.paper,"&:hover":{backgroundColor:e,opacity:.9}})),mr=o(g)(()=>({display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"})),w=r=>{const{variant:e=f.LINEAR,mode:a=b.DETERMINATE,value:i=60,showLabel:v=!0,color:P="primary",size:y="3rem",thickness:x=4}=r,s=K(),[R,c]=B.useState(i),u=s.palette[P],p=u.main,m=u.contrastText,{normalized:d}=ir(R),n=a===b.DETERMINATE,z=()=>c(k=>Math.min(100,k+10)),S=()=>c(k=>Math.max(0,k-10));return t.jsxs(dr,{children:[t.jsxs(mr,{children:[t.jsx(X,{sx:{color:s.palette.text.secondary},children:"Progress"}),v&&n&&t.jsxs(lr,{sx:{color:p},children:[d,"%"]})]}),e===f.CIRCULAR?t.jsx(cr,{children:t.jsx(H,{variant:n?"determinate":"indeterminate",value:d,size:y,thickness:x,sx:{color:p}})}):t.jsx(sr,{children:t.jsx(pr,{variant:n?"determinate":"indeterminate",value:d,sx:{backgroundColor:s.palette.grey[300],"& .MuiLinearProgress-bar":{backgroundColor:p}}})}),t.jsxs(ur,{sx:{mt:2},children:[t.jsx(D,{bgcolor:p,sx:{color:m},onClick:S,children:"Decrease"}),t.jsx(D,{bgcolor:p,sx:{color:m},onClick:z,children:"Increase"})]})]})};w.__docgenInfo={description:"",methods:[],displayName:"Progress"};const kr={title:"Component Catalog/Progress",component:w,argTypes:{variant:{control:"select",options:Object.values(f)},mode:{control:"select",options:Object.values(b)},color:{control:"select",options:["primary","secondary","success","error","warning","info","dark"]}}},h={args:{variant:f.LINEAR,mode:b.DETERMINATE,value:60,showLabel:!0,color:"primary"}},I={args:{variant:f.CIRCULAR,mode:b.INDETERMINATE,color:"success"}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: ProgressVariant.LINEAR,
    mode: ProgressMode.DETERMINATE,
    value: 60,
    showLabel: true,
    color: 'primary'
  }
}`,...h.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    variant: ProgressVariant.CIRCULAR,
    mode: ProgressMode.INDETERMINATE,
    color: 'success'
  }
}`,...I.parameters?.docs?.source}}};const Er=["LinearDeterminate","CircularIndeterminate"];export{I as CircularIndeterminate,h as LinearDeterminate,Er as __namedExportsOrder,kr as default};
