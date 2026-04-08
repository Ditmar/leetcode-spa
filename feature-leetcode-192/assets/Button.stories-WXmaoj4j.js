import{j as n}from"./iframe-B0qLAZ4V.js";import{c as g}from"./createSvgIcon-y1uYfoy_.js";import{s as v,B as h}from"./Button-R_gPDtKp.js";import"./preload-helper-PPVm8Dsz.js";const x=g(n.jsx("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"})),B={contained:{backgroundColor:"var(--primary)",color:"var(--primary-foreground)"},outlined:{backgroundColor:"var(--primary-foreground)",color:"var(--primary)",border:"1px solid var(--border)"},text:{backgroundColor:"transparent",color:"var(--primary)"}},y=v(h)(({variant:r="contained"})=>({borderRadius:"var(--radius)",textTransform:"capitalize",...B[r]})),c=r=>{const{children:i,variant:d="contained",size:l="medium",disabled:u=!1,onClick:m,startIcon:p}=r;return n.jsx(y,{"data-testid":"button",variant:d,size:l,disabled:u,onClick:m,startIcon:p,children:i})};c.__docgenInfo={description:"",methods:[],displayName:"Button"};const b={title:"component-catalog/Button",component:c,decorators:[r=>n.jsx("div",{style:{padding:0,display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:n.jsx(r,{})})]},t={args:{variant:"contained",children:"Button"}},a={args:{variant:"outlined",children:"Button"}},e={args:{variant:"text",children:"Button"}},o={args:{variant:"contained",children:"Button",size:"small"}},s={args:{variant:"contained",children:"Button",startIcon:n.jsx(x,{})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    children: 'Button'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: 'Button'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    children: 'Button'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    children: 'Button',
    size: 'small'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    children: 'Button',
    startIcon: <SendIcon />
  }
}`,...s.parameters?.docs?.source}}};const j=["Contained","Outlined","Text","ContainedSmall","ContainedIcon"];export{t as Contained,s as ContainedIcon,o as ContainedSmall,a as Outlined,e as Text,j as __namedExportsOrder,b as default};
