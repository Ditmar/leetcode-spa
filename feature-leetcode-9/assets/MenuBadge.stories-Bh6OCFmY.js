import{j as e}from"./iframe-1P7fd-58.js";import{B as o}from"./Box-jZCnBE4t.js";import{T as l}from"./Typography-BquoLW-R.js";import"./preload-helper-PPVm8Dsz.js";const d={primary:"linear-gradient(60deg, #B33DEB 13.4%, #DE8FFF 86.6%)"},n=({label:i,variant:s="default"})=>{const r=s==="color";return e.jsxs(o,{sx:{display:"flex",alignItems:"center",gap:"1.8rem",background:"transparent",cursor:"pointer",padding:"6px 12px"},"data-testid":"menuBadge",children:[e.jsxs(o,{component:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",sx:{width:32,height:32},children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"gradient",x1:"2",y1:"20",x2:"24",y2:"24",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"13.4%",stopColor:"#B33DEB"}),e.jsx("stop",{offset:"86.6%",stopColor:"#DE8FFF"})]})}),e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"4",ry:"5",fill:"none",stroke:r?"url(#gradient)":"black",strokeWidth:"1.4"}),e.jsx("rect",{x:"7",y:"11",width:"2",height:"5",rx:"1",fill:r?"url(#gradient)":"black"}),e.jsx("rect",{x:"11",y:"7",width:"2",height:"9",rx:"1",fill:r?"url(#gradient)":"black"}),e.jsx("rect",{x:"15",y:"10",width:"2",height:"6",rx:"1",fill:r?"url(#gradient)":"black"})]}),e.jsx(l,{"data-variant":s,variant:"body1",sx:{fontWeight:500,fontSize:"18px",fontFamily:"Syne, sans-serif",background:r?d.primary:"none",WebkitBackgroundClip:r?"text":"none",WebkitTextFillColor:r?"transparent":"black"},children:i})]})};n.__docgenInfo={description:"",methods:[],displayName:"MenuBadge",props:{variant:{defaultValue:{value:"'default'",computed:!1},required:!1}}};const u={title:"Components/MenuBadge",component:n},a={args:{label:"Dashboard",variant:"default"}},t={args:{label:"Dashboard",variant:"color"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dashboard',
    variant: 'default'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dashboard',
    variant: 'color'
  }
}`,...t.parameters?.docs?.source}}};const m=["Default","Color"];export{t as Color,a as Default,m as __namedExportsOrder,u as default};
