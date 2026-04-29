import{j as t}from"./iframe-F4tpHHhG.js";import{c as g}from"./createSvgIcon-jKND8ExY.js";import{s as v}from"./memoTheme-BA2KUDAM.js";import{B as h}from"./Button-DPuHV201.js";import"./preload-helper-BAi431uf.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BsBPNuTJ.js";import"./useTimeout-yytv53wQ.js";import"./useForkRef-HvCbTo75.js";import"./CircularProgress-DOi5CFZl.js";const x=g(t.jsx("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"})),B={contained:{backgroundColor:"var(--primary)",color:"var(--primary-foreground)"},outlined:{backgroundColor:"var(--primary-foreground)",color:"var(--primary)",border:"1px solid var(--border)"},text:{backgroundColor:"transparent",color:"var(--primary)"}},f=v(h)(({variant:r="contained"})=>({borderRadius:"var(--radius)",textTransform:"capitalize",...B[r]})),i=r=>{const{children:c,variant:d="contained",size:m="medium",disabled:l=!1,onClick:p,startIcon:u}=r;return t.jsx(f,{"data-testid":"button",variant:d,size:m,disabled:l,onClick:p,startIcon:u,children:c})};i.__docgenInfo={description:"",methods:[],displayName:"Button"};const T={title:"component-catalog/Button",component:i,decorators:[r=>t.jsx("div",{style:{padding:0,display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:t.jsx(r,{})})]},n={args:{variant:"contained",children:"Button"}},a={args:{variant:"outlined",children:"Button"}},o={args:{variant:"text",children:"Button"}},e={args:{variant:"contained",children:"Button",size:"small"}},s={args:{variant:"contained",children:"Button",startIcon:t.jsx(x,{})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const E=["Contained","Outlined","Text","ContainedSmall","ContainedIcon"];export{n as Contained,s as ContainedIcon,e as ContainedSmall,a as Outlined,o as Text,E as __namedExportsOrder,T as default};
