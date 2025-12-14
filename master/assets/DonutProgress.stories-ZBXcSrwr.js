import{D as b,z as M,A as W,r as A,j as a,B as L,v as N}from"./iframe-UfvxaGrD.js";import{u as v}from"./useTheme-BDtuhLw5.js";import{s as w}from"./styled-CNiaJYvB.js";import{B as $}from"./Box-DDQIJR2Z.js";import"./preload-helper-PPVm8Dsz.js";import"./generateUtilityClasses-CoM_PQv9.js";const H=38,U=6,D=M,c=W,O=b,q=(r,s)=>{const e=v();return A.useMemo(()=>r!=="auto"?r==="primary"?e.palette.primary.main:r==="success"?e.palette.success.main:r==="error"?e.palette.error.main:r==="warning"?e.palette.warning.main:String(r):s<50?D.low:s<75?D.medium:D.high,[r,s,e.palette])},F=w("div")(({size:r})=>({position:"relative",width:`${r}px`,height:`${r}px`,display:"flex",alignItems:"center",justifyContent:"center"})),G=w("div")(({size:r})=>({fontFamily:c.fontFamily,position:"absolute",fontWeight:c.fontWeight,fontSize:`${r*c.fontSizeScale}px`,lineHeight:1,color:c.color,userSelect:"none"})),o=({percentage:r,color:s="auto",size:e=H,strokeWidth:P=U,animated:j=!0})=>{const R=v(),t=Math.max(0,Math.min(100,Number(r)||0)),T=(e-P)/2,n=2*Math.PI*T,_=n-t/100*n,E=q(s,t),k=R.palette.mode==="dark"?O.dark:O.light;return a.jsxs(F,{size:e,role:"progressbar","aria-valuenow":Math.round(t),"aria-valuemin":0,"aria-valuemax":100,"aria-label":`Progress: ${Math.round(t)}%`,children:[a.jsxs("svg",{width:e,height:e,viewBox:`0 0 ${e} ${e}`,"aria-hidden":"true",children:[a.jsx("circle",{stroke:k,fill:"transparent",strokeWidth:P,r:T,cx:e/2,cy:e/2}),a.jsx("circle",{stroke:E,fill:"transparent",strokeWidth:P,strokeDasharray:`${n} ${n}`,strokeDashoffset:_,r:T,cx:e/2,cy:e/2,strokeLinecap:"round",style:{transition:j?"stroke-dashoffset 0.8s ease":"none",transform:"rotate(-90deg)",transformOrigin:"center"}})]}),a.jsxs(G,{size:e,"aria-hidden":"true",children:[Math.round(t),"%"]})]})};o.__docgenInfo={description:"",methods:[],displayName:"DonutProgress",props:{percentage:{required:!0,tsType:{name:"number"},description:""},color:{required:!1,tsType:{name:"union",raw:"'auto' | ColorName | string",elements:[{name:"literal",value:"'auto'"},{name:"union",raw:"'primary' | 'success' | 'error' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},{name:"string"}]},description:"",defaultValue:{value:"'auto'",computed:!1}},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"38",computed:!1}},strokeWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const I=N(),J={title:"Components/DonutProgress",component:o,decorators:[r=>a.jsx(L,{theme:I,children:a.jsx($,{sx:{padding:4,display:"flex",gap:3,flexWrap:"wrap"},children:a.jsx(r,{})})})],argTypes:{percentage:{control:{type:"range",min:0,max:100,step:1},description:"Progress percentage (0-100)"},color:{control:{type:"select"},options:["auto","primary","success","error","warning","#9c27b0"],description:"Color scheme for the progress indicator"},strokeWidth:{control:{type:"range",min:2,max:20,step:1},description:"Width of the progress stroke"},animated:{control:{type:"boolean"},description:"Enable smooth animations"},size:{control:{type:"range",min:24,max:200,step:4},description:"Size of the donut component"}}},i={args:{percentage:0}},p={args:{percentage:28,color:"auto"}},m={args:{percentage:60,color:"auto"}},l={args:{percentage:75,color:"auto"}},u={args:{percentage:75,color:"primary"}},g={args:{percentage:90,color:"auto"}},d={args:{percentage:25,color:"error"}},f={args:{percentage:55,color:"warning"}},h={args:{percentage:65,size:100,strokeWidth:15}},x={args:{percentage:80,size:38,strokeWidth:6}},S={args:{percentage:80,animated:!1}},y={args:{percentage:45,color:"#9c27b0"}},C={render:()=>a.jsxs(a.Fragment,{children:[a.jsx(o,{percentage:28,color:"auto"}),a.jsx(o,{percentage:75,color:"auto"}),a.jsx(o,{percentage:50,color:"primary"}),a.jsx(o,{percentage:90,color:"auto"})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    percentage: 0
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    percentage: 28,
    color: 'auto'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    percentage: 60,
    color: 'auto'
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    percentage: 75,
    color: 'auto'
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    percentage: 75,
    color: 'primary'
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    percentage: 90,
    color: 'auto'
  }
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    percentage: 25,
    color: 'error'
  }
}`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    percentage: 55,
    color: 'warning'
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    percentage: 65,
    size: 100,
    strokeWidth: 15
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    percentage: 80,
    size: 38,
    strokeWidth: 6
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    percentage: 80,
    animated: false
  }
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    percentage: 45,
    color: '#9c27b0'
  }
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <DonutProgress percentage={28} color="auto" />
      <DonutProgress percentage={75} color="auto" />
      <DonutProgress percentage={50} color="primary" />
      <DonutProgress percentage={90} color="auto" />
    </>
}`,...C.parameters?.docs?.source}}};const Q=["Default","LowProgress","MediumProgress","HighProgress","PrimaryColor","SuccessColor","ErrorColor","WarningColor","CustomSize","SmallSize","NoAnimation","CustomColor","MultipleExamples"];export{y as CustomColor,h as CustomSize,i as Default,d as ErrorColor,l as HighProgress,p as LowProgress,m as MediumProgress,C as MultipleExamples,S as NoAnimation,u as PrimaryColor,x as SmallSize,g as SuccessColor,f as WarningColor,Q as __namedExportsOrder,J as default};
