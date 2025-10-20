import{F as s,D as a}from"./FilterPanel-DTSNjk1p.js";import"./iframe-DH8Zlrqo.js";import"./preload-helper-PPVm8Dsz.js";import"./createSimplePaletteValueFilter-IrCRW_Na.js";import"./Button-Dfub4ZIa.js";const c={title:"Components/FilterPanel",component:s,argTypes:{panelVariant:{control:{type:"select"},options:["primary","secondary"]},onSelect:{action:"onSelect"}}},e={args:{filters:a,selectedValue:"all",panelVariant:"primary"}},r={args:{filters:a,selectedValue:"all",panelVariant:"secondary",size:"medium"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    filters: DEFAULT_FILTERS,
    selectedValue: 'all',
    panelVariant: 'primary'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    filters: DEFAULT_FILTERS,
    selectedValue: 'all',
    panelVariant: 'secondary',
    size: 'medium'
  }
}`,...r.parameters?.docs?.source}}};const p=["Primary","Secondary"];export{e as Primary,r as Secondary,p as __namedExportsOrder,c as default};
