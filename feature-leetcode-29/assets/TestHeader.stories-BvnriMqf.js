import{r as H,b as N,j as t,c as $,k as R,l as U}from"./iframe-DiGQfTj6.js";import{c as q}from"./createSvgIcon-CIWkoJ-i.js";import{H as j,a as z,b as k,L as A,T as E,S as V}from"./TestHeader.styles-DUd8m3D9.js";import{u as _}from"./useTheme-Cd_UZWsW.js";import{u as B}from"./index-CpsMgdGf.js";import{C as D}from"./Card-BBnWXaCt.js";import{c as Q,m as X}from"./memoTheme-DIVoediG.js";import{a as F,g as P}from"./generateUtilityClasses-CoM_PQv9.js";import{s as K}from"./styled-YhZ2JRNU.js";import{B as v}from"./Box-D5eWmJKx.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-C-NOhL6s.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./getThemeProps-C8Jz4A8e.js";import"./Paper-BTwYrD72.js";function O(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function W(e){return parseFloat(e)}function G(e){return F("MuiSkeleton",e)}P("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const J=e=>{const{classes:a,variant:r,animation:s,hasChildren:o,width:c,height:i}=e;return Q({root:["root",r,s,o&&"withChildren",o&&!c&&"fitContent",o&&!i&&"heightAuto"]},G,a)},L=U`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,y=U`
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
`,Y=typeof L!="string"?R`
        animation: ${L} 2s ease-in-out 0.5s infinite;
      `:null,Z=typeof y!="string"?R`
        &::after {
          animation: ${y} 2s linear 0.5s infinite;
        }
      `:null,ee=K("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.root,a[r.variant],r.animation!==!1&&a[r.animation],r.hasChildren&&a.withChildren,r.hasChildren&&!r.width&&a.fitContent,r.hasChildren&&!r.height&&a.heightAuto]}})(X(({theme:e})=>{const a=O(e.shape.borderRadius)||"px",r=W(e.shape.borderRadius);return{display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:e.alpha(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${a}/${Math.round(r/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:s})=>s.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:s})=>s.hasChildren&&!s.width,style:{maxWidth:"fit-content"}},{props:({ownerState:s})=>s.hasChildren&&!s.height,style:{height:"auto"}},{props:{animation:"pulse"},style:Y||{animation:`${L} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:Z||{"&::after":{animation:`${y} 2s linear 0.5s infinite`}}}]}})),x=H.forwardRef(function(a,r){const s=N({props:a,name:"MuiSkeleton"}),{animation:o="pulse",className:c,component:i="span",height:d,style:m,variant:C="text",width:n,...w}=s,T={...s,animation:o,component:i,variant:C,hasChildren:!!w.children},M=J(T);return t.jsx(ee,{as:i,ref:r,className:$(M.root,c),ownerState:T,...w,style:{width:n,height:d,...m}})}),te=q(t.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"})),l=""+new URL("tcs-logo-i86t0D5v.svg",import.meta.url).href,re="TCS Quiz Competition",oe="TCS Campus Drive - 2023",I=e=>{const{title:a=re,subtitle:r=oe,variant:s="horizontal",size:o="medium",isLoading:c=!1,logoSrc:i}=e,d=i??l,m=_(),n=B(m.breakpoints.down("sm"))||s==="vertical"?"column":"row";return c?t.jsx("div",{role:"banner","data-testid":"header-wrapper",style:{display:"flex",flexDirection:n},children:t.jsx(D,{sx:{boxShadow:"none",bgcolor:"transparent",width:"100%"},children:t.jsxs(j,{flexDirection:n,children:[t.jsxs(z,{children:[t.jsx(x,{variant:"rectangular",width:o==="small"?100:o==="large"?240:201,height:o==="small"?42:o==="large"?102:85,role:"progressbar"}),t.jsxs(k,{children:[t.jsx(x,{variant:"text",width:203,height:22,role:"progressbar"}),t.jsx(x,{variant:"text",width:169,height:19,role:"progressbar"})]})]}),t.jsx(v,{sx:{width:m.spacing(10),display:"flex",alignItems:"center"}})]})})}):t.jsx("div",{role:"banner","data-testid":"header-wrapper",style:{display:"flex",flexDirection:n},children:t.jsx(D,{sx:{boxShadow:"none",bgcolor:"transparent",width:"100%"},children:t.jsxs(j,{flexDirection:n,children:[t.jsxs(z,{children:[d?t.jsx(A,{src:d,alt:"TCS Logo",size:o}):t.jsx(v,{"data-testid":"placeholder-logo",sx:{width:o==="small"?100:o==="large"?240:201,height:o==="small"?42:o==="large"?102:85,display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"grey.100",borderRadius:1},children:t.jsx(te,{fontSize:o==="large"?"large":"medium",color:"disabled","aria-label":"Placeholder logo"})}),t.jsxs(k,{children:[t.jsx(E,{children:a}),r&&t.jsx(V,{children:r})]})]}),t.jsx(v,{sx:{width:m.spacing(10),display:"flex",alignItems:"center"}})]})})})};I.__docgenInfo={description:"",methods:[],displayName:"TestHeader",props:{logoSrc:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""}}};const ve={title:"Components/TestHeader",component:I,parameters:{layout:"fullscreen"},decorators:[e=>t.jsx("div",{style:{padding:"16px",backgroundColor:"#f5f5f5"},children:t.jsx(e,{})})]},p={args:{logoSrc:l,title:"TCS Quiz Competition",subtitle:"TCS Campus Drive-2023",size:"medium"}},g={args:{logoSrc:l,title:"Vertical Layout",subtitle:"Stacked version",variant:"vertical",size:"medium"}},u={args:{logoSrc:l,title:"This is a very long quiz name to test responsiveness and overflow handling in the header component",subtitle:"This is a longer subtitle to test wrapping behavior.",size:"medium"}},h={args:{isLoading:!0,size:"medium"}},f={args:{logoSrc:l,title:"Small Logo",subtitle:"Small Logo Subtitle",size:"small"}},b={args:{logoSrc:l,title:"Large Logo",subtitle:"Large Logo Subtitle",size:"large"}},S={args:{logoSrc:"",title:"No Logo Header",subtitle:"No Logo Subtitle",size:"medium"}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'TCS Quiz Competition',
    subtitle: 'TCS Campus Drive-2023',
    size: 'medium'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'Vertical Layout',
    subtitle: 'Stacked version',
    variant: 'vertical',
    size: 'medium'
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'This is a very long quiz name to test responsiveness and overflow handling in the header component',
    subtitle: 'This is a longer subtitle to test wrapping behavior.',
    size: 'medium'
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    size: 'medium'
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'Small Logo',
    subtitle: 'Small Logo Subtitle',
    size: 'small'
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'Large Logo',
    subtitle: 'Large Logo Subtitle',
    size: 'large'
  }
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    logoSrc: '',
    title: 'No Logo Header',
    subtitle: 'No Logo Subtitle',
    size: 'medium'
  }
}`,...S.parameters?.docs?.source}}};const xe=["Default","Vertical","LongTitle","Loading","SmallLogo","LargeLogo","NoLogo"];export{p as Default,b as LargeLogo,h as Loading,u as LongTitle,S as NoLogo,f as SmallLogo,g as Vertical,xe as __namedExportsOrder,ve as default};
