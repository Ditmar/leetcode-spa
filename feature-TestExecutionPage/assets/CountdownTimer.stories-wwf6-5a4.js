import{C as s}from"./CountdownTimer-DkjuWIbo.js";const n={title:"Components/CountdownTimer",component:s,argTypes:{seconds:{control:"number"},onComplete:{action:"completed"}}},e={args:{seconds:1230}},r={args:{seconds:30}},o={args:{seconds:3600}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    seconds: 1230
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    seconds: 30
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    seconds: 3600
  }
}`,...o.parameters?.docs?.source}}};const a=["Default","ShortTimer","LongTimer"],c=Object.freeze(Object.defineProperty({__proto__:null,Default:e,LongTimer:o,ShortTimer:r,__namedExportsOrder:a,default:n},Symbol.toStringTag,{value:"Module"}));export{c as C,e as D};
