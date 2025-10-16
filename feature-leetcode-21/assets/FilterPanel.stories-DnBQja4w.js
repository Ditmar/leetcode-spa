import{F as t,D as r}from"./FilterPanel-BLDAwSmt.js";import"./iframe-tLaT90pD.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-C-a4hFE2.js";const c={title:"Components/FilterPanel",component:t,argTypes:{panelVariant:{control:{type:"select"},options:["primary","secondary"]},onSelect:{action:"onSelect"}}},e={args:{filters:r,selectedValue:"all",panelVariant:"primary"}},a={args:{filters:r,selectedValue:"all",panelVariant:"secondary"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    filters: DEFAULT_FILTERS,
    selectedValue: 'all',
    panelVariant: 'primary'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    filters: DEFAULT_FILTERS,
    selectedValue: 'all',
    panelVariant: 'secondary'
  }
}`,...a.parameters?.docs?.source}}};const i=["Primary","Secondary"];export{e as Primary,a as Secondary,i as __namedExportsOrder,c as default};
