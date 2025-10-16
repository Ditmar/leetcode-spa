import{j as e}from"./iframe-DlDRpU06.js";import"./preload-helper-PPVm8Dsz.js";const p=e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",children:[e.jsx("circle",{cx:"16",cy:"16",r:"16",fill:"url(#paint0_linear)"}),e.jsx("path",{d:"M10 17L15 22L22 13",stroke:"white",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("defs",{children:e.jsxs("linearGradient",{id:"paint0_linear",x1:"0",y1:"0",x2:"32",y2:"31",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#CA81FF"}),e.jsx("stop",{offset:"1",stopColor:"#995AFE"})]})})]}),o=({label:l,value:i,selected:a,onChange:d,disabled:n=!1,className:c})=>e.jsx("div",{style:{display:"inline-block",border:"2px dashed #A881FE",borderRadius:"16px",padding:"24px 36px",background:"#272436",boxSizing:"border-box"},className:c,children:e.jsxs("label",{style:{display:"flex",alignItems:"center",cursor:n?"not-allowed":"pointer",opacity:n?.5:1,fontWeight:a?700:500,fontSize:a?28:24,color:a?"#CA81FF":"#7A6BA3",borderRadius:"12px",background:a?"rgba(202,129,255,0.06)":"transparent",gap:16,transition:"background 0.2s, color 0.2s",minWidth:220,minHeight:64},"aria-disabled":n,children:[e.jsx("input",{type:"radio",checked:a,onChange:()=>d(i),value:i,disabled:n,style:{display:"none"},"aria-label":l}),e.jsx("span",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:50,height:50,borderRadius:"50%",background:a?"linear-gradient(135deg, #CA81FF 0%, #995AFE 100%)":"transparent",border:a?"none":"2px solid #7A6BA3",marginRight:16},children:a?p:null}),e.jsx("span",{children:l})]})});o.__docgenInfo={description:"",methods:[],displayName:"AnswerOption",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},selected:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'filled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'filled'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const g={title:"Forms/AnswerOption",component:o,tags:["autodocs"]},r={args:{label:"Female",value:"female",selected:!0,onChange:()=>{}}},s={args:{label:"Female",value:"female",selected:!1,onChange:()=>{}}},t={args:{label:"Female",value:"female",selected:!1,disabled:!0,onChange:()=>{}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Female',
    value: 'female',
    selected: true,
    onChange: () => {}
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Female',
    value: 'female',
    selected: false,
    onChange: () => {}
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Female',
    value: 'female',
    selected: false,
    disabled: true,
    onChange: () => {}
  }
}`,...t.parameters?.docs?.source}}};const f=["Selected","Unselected","Disabled"];export{t as Disabled,r as Selected,s as Unselected,f as __namedExportsOrder,g as default};
