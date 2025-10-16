import{L as t}from"./Logo-DOSG190w.js";import"./iframe-B2UgB6Xw.js";import"./preload-helper-PPVm8Dsz.js";const n={title:"Components/Logo",component:t,parameters:{docs:{description:{component:"The **Logo** component displays the main application logo, either vertically or horizontally depending on the `orientation` prop."}}},argTypes:{orientation:{control:{type:"radio"},options:["vertical","horizontal"],description:"Defines the orientation of the displayed logo.",table:{type:{summary:'"vertical" | "horizontal"'},defaultValue:{summary:"vertical"}}},width:{control:{type:"number"},description:"Logo width in pixels.",table:{type:{summary:"number"},defaultValue:{summary:"100"}}},height:{control:{type:"number"},description:"Logo height in pixels.",table:{type:{summary:"number"},defaultValue:{summary:"100"}}}},args:{orientation:"vertical",width:100,height:100}},o={args:{orientation:"vertical",width:100,height:100},name:"Vertical logo"},e={args:{orientation:"horizontal",width:150,height:80},name:"Horizontal logo"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    width: 100,
    height: 100
  },
  name: 'Vertical logo'
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    width: 150,
    height: 80
  },
  name: 'Horizontal logo'
}`,...e.parameters?.docs?.source}}};const s=["Primary","Horizontal"];export{e as Horizontal,o as Primary,s as __namedExportsOrder,n as default};
