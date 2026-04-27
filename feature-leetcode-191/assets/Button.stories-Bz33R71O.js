import{j as t}from"./iframe-v6lO3Qbn.js";import{c as g}from"./createSvgIcon-BocDKXrq.js";import{s as v}from"./memoTheme-Dkp6jtCs.js";import{B as h}from"./Button-DNfrNzmO.js";import"./preload-helper-Dl5QhH3x.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CXEJe_si.js";import"./useTimeout-CIM3l0zS.js";import"./CircularProgress-CIUS-QRB.js";const x=g(t.jsx("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"})),B={contained:{backgroundColor:"var(--primary)",color:"var(--primary-foreground)"},outlined:{backgroundColor:"var(--primary-foreground)",color:"var(--primary)",border:"1px solid var(--border)"},text:{backgroundColor:"transparent",color:"var(--primary)"}},f=v(h)(({variant:r="contained"})=>({borderRadius:"var(--radius)",textTransform:"capitalize",...B[r]})),i=r=>{const{children:c,variant:d="contained",size:l="medium",disabled:m=!1,onClick:u,startIcon:p}=r;return t.jsx(f,{"data-testid":"button",variant:d,size:l,disabled:m,onClick:u,startIcon:p,children:c})};i.__docgenInfo={description:"",methods:[],displayName:"Button"};const O={title:"component-catalog/Button",component:i,decorators:[r=>t.jsx("div",{style:{padding:0,display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:t.jsx(r,{})})]},n={args:{variant:"contained",children:"Button"}},a={args:{variant:"outlined",children:"Button"}},o={args:{variant:"text",children:"Button"}},e={args:{variant:"contained",children:"Button",size:"small"}},s={args:{variant:"contained",children:"Button",startIcon:t.jsx(x,{})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    children: 'Button'
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const T=["Contained","Outlined","Text","ContainedSmall","ContainedIcon"];export{n as Contained,s as ContainedIcon,e as ContainedSmall,a as Outlined,o as Text,T as __namedExportsOrder,O as default};
