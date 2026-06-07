import{A as s}from"./iframe-CVvsG3Sa.js";import{e as o}from"./memoTheme-CCAXn7xf.js";import{B as p}from"./Box-D5-13xom.js";import{L as f}from"./LinearProgress-16HP07jE.js";import{u as M}from"./useTheme-Bn7ihbMV.js";import{T as D}from"./Typography-Nlc6eiDQ.js";import{C as w}from"./CircularProgress-BDoTKJTr.js";var e=(r=>(r.LINEAR="linear",r.CIRCULAR="circular",r))(e||{}),a=(r=>(r.DETERMINATE="determinate",r.INDETERMINATE="indeterminate",r))(a||{});const y=r=>r===void 0?0:Math.min(100,Math.max(0,r)),P=r=>{const n=y(r);return{normalized:n,ariaValueNow:n}},x=o(p)(()=>({width:"100%"})),S=o(p)(({theme:r})=>({fontSize:r.typography.caption.fontSize})),z=o(p)(()=>({display:"flex",justifyContent:"center",alignItems:"center"})),j=o(f)(({theme:r})=>({borderRadius:r.spacing(1),height:r.spacing(1),backgroundColor:r.palette.grey[300]})),k=o(p)(({theme:r})=>({width:"100%",gap:r.spacing(2),padding:r.spacing(2),borderRadius:r.spacing(1.75),border:`1px solid ${r.palette.divider}`,backgroundColor:r.palette.background.paper})),U=o(p)(()=>({display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"})),_=6,V=4,A=r=>{const{variant:n=e.LINEAR,mode:R=a.DETERMINATE,value:C=60,showLabel:h=!0,color:L="primary",size:v,thickness:N=V}=r,E=M(),T=E.palette[L].main,b=v??E.spacing(_),{normalized:g}=P(C),I=R===a.DETERMINATE;return s.jsxs(k,{children:[s.jsxs(U,{children:[s.jsx(D,{sx:{color:E.palette.text.secondary},children:"Progress"}),h&&I&&n===e.LINEAR&&R===a.DETERMINATE&&s.jsxs(S,{sx:{color:T},children:[g,"%"]})]}),n===e.CIRCULAR?s.jsx(z,{children:s.jsx(w,{variant:I?"determinate":"indeterminate",value:g,size:b,thickness:N,sx:{color:T}})}):s.jsx(x,{children:s.jsx(j,{variant:I?"determinate":"indeterminate",value:g,color:L})})]})};A.__docgenInfo={description:"",methods:[],displayName:"Progress"};const W={title:"component-catalog/Progress",component:A,argTypes:{variant:{control:"select",options:Object.values(e)},mode:{control:"select",options:Object.values(a)},color:{control:"select",options:["primary","secondary","success","error","warning","info","dark"]}}},t={args:{variant:e.LINEAR,mode:a.DETERMINATE,value:60,showLabel:!0,color:"primary"}},i={args:{variant:e.LINEAR,mode:a.INDETERMINATE,showLabel:!1,color:"secondary"}},c={args:{variant:e.CIRCULAR,mode:a.DETERMINATE,value:75,showLabel:!0,color:"success",size:"4rem",thickness:6}},l={args:{variant:e.CIRCULAR,mode:a.INDETERMINATE,showLabel:!1,color:"info",size:"3rem",thickness:4}},d={args:{variant:e.LINEAR,mode:a.DETERMINATE,value:45,showLabel:!0,color:"warning"}},m={args:{variant:e.LINEAR,mode:a.DETERMINATE,value:80,showLabel:!1,color:"error"}},u={args:{variant:e.CIRCULAR,mode:a.DETERMINATE,value:90,showLabel:!0,color:"dark",size:"5rem",thickness:8}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: ProgressVariant.LINEAR,
    mode: ProgressMode.DETERMINATE,
    value: 60,
    showLabel: true,
    color: 'primary'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: ProgressVariant.LINEAR,
    mode: ProgressMode.INDETERMINATE,
    showLabel: false,
    color: 'secondary'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: ProgressVariant.CIRCULAR,
    mode: ProgressMode.DETERMINATE,
    value: 75,
    showLabel: true,
    color: 'success',
    size: '4rem',
    thickness: 6
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: ProgressVariant.CIRCULAR,
    mode: ProgressMode.INDETERMINATE,
    showLabel: false,
    color: 'info',
    size: '3rem',
    thickness: 4
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: ProgressVariant.LINEAR,
    mode: ProgressMode.DETERMINATE,
    value: 45,
    showLabel: true,
    color: 'warning'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: ProgressVariant.LINEAR,
    mode: ProgressMode.DETERMINATE,
    value: 80,
    showLabel: false,
    color: 'error'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: ProgressVariant.CIRCULAR,
    mode: ProgressMode.DETERMINATE,
    value: 90,
    showLabel: true,
    color: 'dark',
    size: '5rem',
    thickness: 8
  }
}`,...u.parameters?.docs?.source}}};const O=["LinearDeterminate","LinearIndeterminate","CircularDeterminate","CircularIndeterminate","WithCustomColors","WithoutLabel","CircularCustomSizeAndThickness"],J=Object.freeze(Object.defineProperty({__proto__:null,CircularCustomSizeAndThickness:u,CircularDeterminate:c,CircularIndeterminate:l,LinearDeterminate:t,LinearIndeterminate:i,WithCustomColors:d,WithoutLabel:m,__namedExportsOrder:O,default:W},Symbol.toStringTag,{value:"Module"}));export{u as C,t as L,J as P,d as W,c as a,l as b,i as c,m as d};
