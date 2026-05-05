import{j as t}from"./iframe-DBh7H_pS.js";import{s as p}from"./styled-DWJ_81DA.js";import{B as c}from"./Box-DR9V9TS2.js";const u=p(c)(()=>({width:"100%",position:"relative",overflow:"hidden"})),l=p(c)(()=>({position:"absolute",inset:0,width:"100%",height:"100%",display:"flex"})),b=e=>{if(!e)return 1;if(typeof e=="number")return e;const i=e.includes("/")?"/":":",[n,a]=e.split(i).map(Number);return!n||!a?1:n/a},d=({ratio:e=1,children:i,sx:n})=>{const a=b(e);return t.jsx(u,{sx:{aspectRatio:a,width:"100%",minHeight:120,...n},children:t.jsx(l,{children:i})})};d.__docgenInfo={description:"",methods:[],displayName:"AspectRatio",props:{ratio:{required:!1,tsType:{name:"union",raw:"number | `${number}/${number}` | `${number}:${number}`",elements:[{name:"number"},{name:"literal",value:"`${number}/${number}`"},{name:"literal",value:"`${number}:${number}`"}]},description:"",defaultValue:{value:"1",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["BoxProps"]};const h={title:"Components/AspectRatio",component:d},m=()=>t.jsx(c,{sx:e=>({backgroundColor:e.palette.grey[300],width:"100%",height:"100%"})}),r={args:{ratio:"16/9",children:t.jsx(m,{})}},o={args:{ratio:"4/3",children:t.jsx(m,{})}},s={args:{ratio:1,children:t.jsx(m,{})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ratio: '16/9',
    children: <DemoContent />
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ratio: '4/3',
    children: <DemoContent />
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ratio: 1,
    children: <DemoContent />
  }
}`,...s.parameters?.docs?.source}}};const R=["Ratio16by9","Ratio4by3","Ratio1by1"],y=Object.freeze(Object.defineProperty({__proto__:null,Ratio16by9:r,Ratio1by1:s,Ratio4by3:o,__namedExportsOrder:R,default:h},Symbol.toStringTag,{value:"Module"}));export{r as R,y as S};
