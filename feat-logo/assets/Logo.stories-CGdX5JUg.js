import{L as t}from"./Logo-CYc3y1TX.js";import"./iframe-B0moQ8ia.js";import"./preload-helper-PPVm8Dsz.js";const n={title:"Components/Logo",component:t,parameters:{docs:{description:{component:"The **Logo** component displays the main application logo, either vertically or horizontally depending on the `orientation` prop."}}},argTypes:{orientation:{control:{type:"radio"},options:["vertical","horizontal"],description:"Defines the orientation of the displayed logo.",table:{type:{summary:'"vertical" | "horizontal"'},defaultValue:{summary:"vertical"}}},width:{control:{type:"number"},description:"Logo width in pixels.",table:{type:{summary:"number"},defaultValue:{summary:"192"}}},height:{control:{type:"number"},description:"Logo height in pixels.",table:{type:{summary:"number"},defaultValue:{summary:"88"}}}},args:{orientation:"vertical",width:192,height:88}},o={args:{orientation:"vertical",width:192,height:88},name:"Vertical logo"},e={args:{orientation:"horizontal",width:266,height:45},name:"Horizontal logo"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    width: 192,
    height: 88
  },
  name: 'Vertical logo'
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    width: 266,
    height: 45
  },
  name: 'Horizontal logo'
}`,...e.parameters?.docs?.source}}};const s=["Primary","Horizontal"];export{e as Horizontal,o as Primary,s as __namedExportsOrder,n as default};
