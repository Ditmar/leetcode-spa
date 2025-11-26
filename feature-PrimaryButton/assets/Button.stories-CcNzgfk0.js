import{r as x,j as g}from"./iframe-DP7EdniC.js";import{s as f}from"./styled-BIBBQ6Md.js";import"./preload-helper-PPVm8Dsz.js";const y=e=>typeof e=="object"&&e!==null&&"gradients"in e?e.gradients??{}:{},h=f("button")(({theme:e,$variant:r,$size:m,$shape:s,$loading:n})=>{const o=y(e),a=o.primary??"linear-gradient(60deg, #B33DEB 13.4%, #DE8FFF 86.6%)",i=o.primaryHover??a,t={position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:e.spacing(1.25),height:76,minWidth:289,padding:"20px 40px",borderRadius:50,fontFamily:"'Syne', sans-serif",fontWeight:400,fontSize:30,lineHeight:"36px",textTransform:"capitalize",border:"none",cursor:n?"default":"pointer",transition:e.transitions.create(["transform","background","box-shadow"],{duration:e.transitions.duration.shortest}),outline:"none","&:disabled":{cursor:"not-allowed"},"&:focus-visible":{outline:`2px solid ${e.palette.primary.light}`,outlineOffset:3,boxShadow:"0 0 0 2px rgba(255,255,255,0.3)"},[e.breakpoints.down("md")]:{height:64,minWidth:240,padding:"16px 32px",fontSize:24},[e.breakpoints.down("sm")]:{width:"100%",maxWidth:320,minWidth:"auto",height:56,padding:"12px 24px",fontSize:18}};if(Object.assign(t,{small:{height:48,minWidth:160,padding:"12px 24px",fontSize:18},medium:{height:60,minWidth:220,padding:"16px 32px",fontSize:22},large:{height:76,minWidth:289,padding:"20px 40px",fontSize:30}}[m]),s==="rounded"?t.borderRadius=16:s==="pill"&&(t.borderRadius=50),r==="primary")Object.assign(t,{backgroundImage:a,color:e.palette.common.white,boxShadow:"0 16px 40px rgba(179, 61, 235, 0.25)","&:hover":n?{}:{backgroundImage:i,transform:"translateY(-1px)"},"&:active":n?{}:{transform:"translateY(0)",boxShadow:"0 8px 24px rgba(179, 61, 235, 0.35)"},"&:disabled":{backgroundImage:a,opacity:.35,boxShadow:"none",color:"rgba(255,255,255,0.4)"}});else{const l=e.palette.background?.default??"#ffffff";Object.assign(t,{backgroundImage:`linear-gradient(${l}, ${l}), ${a}`,backgroundOrigin:"border-box",backgroundClip:"padding-box, border-box",border:"2px solid transparent",color:"transparent","& .btn-label":{backgroundImage:a,backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},"&:hover":n?{}:{backgroundImage:`linear-gradient(${l}, ${l}), ${i}`,transform:"translateY(-1px)","& .btn-label":{backgroundImage:i,backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}},"&:active":n?{}:{transform:"translateY(0)",opacity:.9},"&:disabled":{opacity:.35,"& .btn-label":{backgroundImage:a,backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",opacity:.5}}})}return t}),v=f("span")(({theme:e})=>({position:"absolute",insetInlineEnd:e.spacing(1.5),width:e.spacing(2),height:e.spacing(2),borderRadius:"50%",border:`${e.spacing(.25)} solid rgba(255,255,255,0.7)`,borderTopColor:"transparent",animation:"spin 750ms linear infinite","@keyframes spin":{to:{transform:"rotate(360deg)"}}})),b=x.forwardRef(({children:e,loading:r=!1,disabled:m,variant:s="primary",size:n="medium",shape:o="pill",...a},i)=>g.jsxs(h,{ref:i,$variant:s,$size:n,$shape:o,$loading:r,disabled:m||r,"aria-busy":r||void 0,...a,children:[g.jsx("span",{className:"btn-label",children:e}),r&&g.jsx(v,{"aria-hidden":"true"})]}));b.displayName="PrimaryButton";b.__docgenInfo={description:"",methods:[],displayName:"PrimaryButton",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'rounded' | 'square' | 'pill'",elements:[{name:"literal",value:"'rounded'"},{name:"literal",value:"'square'"},{name:"literal",value:"'pill'"}]},description:"",defaultValue:{value:"'pill'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:""}},composes:["Omit"]};const w={title:"Components/PrimaryButton",component:b,parameters:{layout:"centered"}},d={args:{children:"Create Account",variant:"primary",size:"large",shape:"pill"}},p={args:{children:"Create Account",variant:"secondary",size:"large",shape:"pill"}},c={args:{children:"Create Account",variant:"primary",size:"large",shape:"pill",disabled:!0}},u={args:{children:"Create Account",variant:"primary",size:"large",shape:"pill",loading:!0}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Create Account',
    variant: 'primary',
    size: 'large',
    shape: 'pill'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Create Account',
    variant: 'secondary',
    size: 'large',
    shape: 'pill'
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Create Account',
    variant: 'primary',
    size: 'large',
    shape: 'pill',
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Create Account',
    variant: 'primary',
    size: 'large',
    shape: 'pill',
    loading: true
  }
}`,...u.parameters?.docs?.source}}};const W=["Gradient","Outline","Disabled","Loading"];export{c as Disabled,d as Gradient,u as Loading,p as Outline,W as __namedExportsOrder,w as default};
