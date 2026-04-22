import{j as g,a as s}from"./iframe-Buz5lkfP.js";import{c as v}from"./createSvgIcon-CXoT84qY.js";import{s as h}from"./CircularProgress-Cllmh7d_.js";import{B}from"./Button-B6o6al0M.js";import"./preload-helper-PPVm8Dsz.js";const x=v(g.jsx("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"})),f={contained:{backgroundColor:"var(--primary)",color:"var(--primary-foreground)"},outlined:{backgroundColor:"var(--primary-foreground)",color:"var(--primary)",border:"1px solid var(--border)"},text:{backgroundColor:"transparent",color:"var(--primary)"}},y=h(B)(({variant:r="contained"})=>({borderRadius:"var(--radius)",textTransform:"capitalize",...f[r]})),c=r=>{const{children:i,variant:d="contained",size:l="medium",disabled:m=!1,onClick:u,startIcon:p}=r;return s(y,{"data-testid":"button",variant:d,size:l,disabled:m,onClick:u,startIcon:p,children:i})};c.__docgenInfo={description:"",methods:[],displayName:"Button"};const z={title:"component-catalog/Button",component:c,decorators:[r=>s("div",{style:{padding:0,display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:s(r,{})})]},n={args:{variant:"contained",children:"Button"}},t={args:{variant:"outlined",children:"Button"}},a={args:{variant:"text",children:"Button"}},e={args:{variant:"contained",children:"Button",size:"small"}},o={args:{variant:"contained",children:"Button",startIcon:s(x,{})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    children: 'Button'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: 'Button'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    children: 'Button'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    children: 'Button',
    size: 'small'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    children: 'Button',
    startIcon: <SendIcon />
  }
}`,...o.parameters?.docs?.source}}};const k=["Contained","Outlined","Text","ContainedSmall","ContainedIcon"];export{n as Contained,o as ContainedIcon,e as ContainedSmall,t as Outlined,a as Text,k as __namedExportsOrder,z as default};
