import{L as r}from"./Logo-BUPJouNX.js";import"./iframe-BgCzNBAo.js";import"./preload-helper-PPVm8Dsz.js";const s={title:"Components/Logo",component:r,parameters:{docs:{description:{component:"The **Logo** component displays the main application logo, either vertically or horizontally depending on the `orientation` prop."}}},argTypes:{orientation:{control:{type:"radio"},options:["vertical","horizontal"],description:"Defines the orientation of the displayed logo.",table:{type:{summary:'"vertical" | "horizontal"'},defaultValue:{summary:"vertical"}}},width:{control:{type:"number"},description:"Logo width in pixels.",table:{type:{summary:"number"},defaultValue:{summary:"192"}}},height:{control:{type:"number"},description:"Logo height in pixels.",table:{type:{summary:"number"},defaultValue:{summary:"88"}}}},args:{orientation:"vertical",width:192,height:88}},e={args:{orientation:"horizontal",width:266,height:45},name:"Default"},t={args:{orientation:"vertical",width:192,height:88},name:"Vertical"},o={args:{orientation:"horizontal",width:266,height:45},name:"Horizontal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    width: 266,
    height: 45
  },
  name: 'Default'
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    width: 192,
    height: 88
  },
  name: 'Vertical'
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    width: 266,
    height: 45
  },
  name: 'Horizontal'
}`,...o.parameters?.docs?.source}}};const l=["Default","Primary","Horizontal"];export{e as Default,o as Horizontal,t as Primary,l as __namedExportsOrder,s as default};
