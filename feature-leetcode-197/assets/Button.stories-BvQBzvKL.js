import{j as n}from"./iframe-DLWKv2PE.js";import{c as g}from"./createSvgIcon-BEIs6itb.js";import{s as v}from"./ButtonBase-cuzFhH4_.js";import{B as h}from"./Button-DNu1NJFx.js";import"./preload-helper-Ce9fAdsH.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-CgHAjRR3.js";const x=g(n.jsx("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"})),B={contained:{backgroundColor:"var(--primary)",color:"var(--primary-foreground)"},outlined:{backgroundColor:"var(--primary-foreground)",color:"var(--primary)",border:"1px solid var(--border)"},text:{backgroundColor:"transparent",color:"var(--primary)"}},f=v(h)(({variant:r="contained"})=>({borderRadius:"var(--radius)",textTransform:"capitalize",...B[r]})),c=r=>{const{children:i,variant:d="contained",size:l="medium",disabled:m=!1,onClick:u,startIcon:p}=r;return n.jsx(f,{"data-testid":"button",variant:d,size:l,disabled:m,onClick:u,startIcon:p,children:i})};c.__docgenInfo={description:"",methods:[],displayName:"Button"};const k={title:"component-catalog/Button",component:c,decorators:[r=>n.jsx("div",{style:{padding:0,display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:n.jsx(r,{})})]},t={args:{variant:"contained",children:"Button"}},a={args:{variant:"outlined",children:"Button"}},o={args:{variant:"text",children:"Button"}},e={args:{variant:"contained",children:"Button",size:"small"}},s={args:{variant:"contained",children:"Button",startIcon:n.jsx(x,{})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    children: 'Button'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: 'Button'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    children: 'Button'
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    children: 'Button',
    size: 'small'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    children: 'Button',
    startIcon: <SendIcon />
  }
}`,...s.parameters?.docs?.source}}};const _=["Contained","Outlined","Text","ContainedSmall","ContainedIcon"];export{t as Contained,s as ContainedIcon,e as ContainedSmall,a as Outlined,o as Text,_ as __namedExportsOrder,k as default};
