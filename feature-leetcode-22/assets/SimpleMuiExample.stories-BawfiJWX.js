import{a as m,j as r,M as s}from"./iframe-DLF7k0pe.js";import{B as c}from"./Box-BtYdYFB9.js";import{P as p}from"./Paper-CZj7slif.js";import{T as a}from"./Typography-DTyt_baV.js";import{B as d}from"./Button-k6nIa3Kz.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-SkfCA_UI.js";import"./useTheme-C6TGdHuK.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CnAWeLsE.js";import"./useForkRef-BRczPy-y.js";import"./CircularProgress-Do984kVj.js";function i(){const[e,n]=m.useState(0);return r.jsx(c,{sx:{p:4,maxWidth:400,mx:"auto"},children:r.jsxs(p,{elevation:3,sx:{p:3},children:[r.jsx(a,{variant:"h4",component:"h1",gutterBottom:!0,children:"MUI + SSR Test"}),r.jsx(a,{variant:"body1",paragraph:!0,children:"Este componente usa Material-UI con soporte completo para SSR."}),r.jsxs(a,{variant:"h6",sx:{mb:2},children:["Contador: ",e]}),r.jsx(d,{variant:"contained",onClick:()=>n(e+1),fullWidth:!0,children:"Incrementar"})]})})}i.__docgenInfo={description:"",methods:[],displayName:"SimpleMuiExample"};const B={title:"Theme/SimpleMuiExample",component:i,decorators:[e=>r.jsx(s,{children:r.jsx(e,{})})],parameters:{layout:"fullscreen"},tags:["autodocs"]},o={},t={decorators:[e=>r.jsx(s,{children:r.jsx("div",{style:{backgroundColor:"#121212",minHeight:"100vh",padding:"1rem"},children:r.jsx(e,{})})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <MuiThemeProvider>
        <div style={{
      backgroundColor: '#121212',
      minHeight: '100vh',
      padding: '1rem'
    }}>
          <Story />
        </div>
      </MuiThemeProvider>]
}`,...t.parameters?.docs?.source}}};const E=["Default","WithDarkBackground"];export{o as Default,t as WithDarkBackground,E as __namedExportsOrder,B as default};
