import{j as o,r as b,b as $,c as q}from"./iframe-Afrtsqg9.js";import{g as N,a as E,c as J,s as h,m as O}from"./memoTheme-UIzRR2ns.js";import{c as U}from"./createSvgIcon-Cey1ggJo.js";import{u as z}from"./useSlot-msdg4suG.js";import{B as V}from"./Box-B8RCE6Xd.js";const L=U(o.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}));function H(e){return N("MuiAvatar",e)}E("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const W=e=>{const{classes:a,variant:t,colorDefault:r}=e;return J({root:["root",t,r&&"colorDefault"],img:["img"],fallback:["fallback"]},H,a)},Z=h("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[t.variant],t.colorDefault&&a.colorDefault]}})(O(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(e.vars||e).palette.background.default,...e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.grey[400],...e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})}}}]}))),G=h("img",{name:"MuiAvatar",slot:"Img"})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),K=h(L,{name:"MuiAvatar",slot:"Fallback"})({width:"75%",height:"75%"});function Q({crossOrigin:e,referrerPolicy:a,src:t,srcSet:r}){const[l,s]=b.useState(!1);return b.useEffect(()=>{if(!t&&!r)return;s(!1);let u=!0;const n=new Image;return n.onload=()=>{u&&s("loaded")},n.onerror=()=>{u&&s("error")},n.crossOrigin=e,n.referrerPolicy=a,n.src=t,r&&(n.srcset=r),()=>{u=!1}},[e,a,t,r]),l}const X=b.forwardRef(function(a,t){const r=$({props:a,name:"MuiAvatar"}),{alt:l,children:s,className:u,component:n="div",slots:x={},slotProps:c={},imgProps:w,sizes:j,src:y,srcSet:S,variant:k="circular",...C}=r;let m=null;const i={...r,component:n,variant:k},M=Q({...w,...typeof c.img=="function"?c.img(i):c.img,src:y,srcSet:S}),D=y||S,P=D&&M!=="error";i.colorDefault=!P,delete i.ownerState;const A=W(i),[T,I]=z("root",{ref:t,className:q(A.root,u),elementType:Z,externalForwardedProps:{slots:x,slotProps:c,component:n,...C},ownerState:i}),[F,R]=z("img",{className:A.img,elementType:G,externalForwardedProps:{slots:x,slotProps:{img:{...w,...c.img}}},additionalProps:{alt:l,src:y,srcSet:S,sizes:j},ownerState:i}),[B,_]=z("fallback",{className:A.fallback,elementType:K,externalForwardedProps:{slots:x,slotProps:c},shouldForwardComponentProp:!0,ownerState:i});return P?m=o.jsx(F,{...R}):s||s===0?m=s:D&&l?m=l[0]:m=o.jsx(B,{..._}),o.jsx(T,{...I,children:m})}),Y={sm:{width:32,height:32,fontSize:11},md:{width:40,height:40,fontSize:13},lg:{width:48,height:48,fontSize:14},xl:{width:64,height:64,fontSize:16}},ee=h(X,{shouldForwardProp:e=>!["$size","$variant"].includes(e)})(({theme:e,$size:a="md",$variant:t="default"})=>{const r=Y[a],s=(()=>{switch(t){case"primary":return{bg:e.palette.primary.main,color:e.palette.primary.contrastText};case"success":return{bg:e.palette.success.main,color:e.palette.success.contrastText};default:return{bg:e.palette.action.selected,color:e.palette.text.primary}}})();return{fontWeight:500,width:`${r.width}px`,height:`${r.height}px`,fontSize:`${r.fontSize}px`,backgroundColor:s.bg,color:s.color}}),d=({size:e="md",variant:a="default",shape:t="circular",children:r,...l})=>o.jsx(ee,{$size:e,$variant:a,variant:t,"data-testid":"avatar-component","data-size":e,"data-variant":a,...l,children:r});d.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'success'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'circular' | 'rounded' | 'square'",elements:[{name:"literal",value:"'circular'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'square'"}]},description:"",defaultValue:{value:"'circular'",computed:!1}}},composes:["Omit"]};const ae={title:"component-catalog/Avatar",component:d,parameters:{layout:"centered"}},p={args:{children:"MD",size:"md",variant:"default"}},f={args:{children:"JD",size:"lg",variant:"primary"}},g={args:{children:"AB",size:"lg",variant:"success"}},v={render:()=>o.jsxs(V,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:2},children:[o.jsx(d,{size:"sm",variant:"default",children:"SM"}),o.jsx(d,{size:"md",variant:"default",children:"MD"}),o.jsx(d,{size:"lg",variant:"primary",children:"JD"}),o.jsx(d,{size:"xl",variant:"success",children:"AB"})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'MD',
    size: 'md',
    variant: 'default'
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'JD',
    size: 'lg',
    variant: 'primary'
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'AB',
    size: 'lg',
    variant: 'success'
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 2
  }}>
      <Avatar size="sm" variant="default">
        SM
      </Avatar>
      <Avatar size="md" variant="default">
        MD
      </Avatar>
      <Avatar size="lg" variant="primary">
        JD
      </Avatar>
      <Avatar size="xl" variant="success">
        AB
      </Avatar>
    </Box>
}`,...v.parameters?.docs?.source}}};const re=["Default","Primary","Success","Showcase"],ie=Object.freeze(Object.defineProperty({__proto__:null,Default:p,Primary:f,Showcase:v,Success:g,__namedExportsOrder:re,default:ae},Symbol.toStringTag,{value:"Module"}));export{ie as A,p as D,v as S,d as a};
