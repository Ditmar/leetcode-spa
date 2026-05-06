import{r as m,j as r,M as s}from"./iframe-CLqi4W39.js";import{B as p}from"./Box-BqQRDIm8.js";import{P as c}from"./Paper-BgwnE8QN.js";import{T as a}from"./Typography-CMa8vNhC.js";import{B as d}from"./Button-xA4cIpRI.js";import"./preload-helper-BzGEURK-.js";import"./memoTheme-rWOjl1Yu.js";import"./useTheme-BSjob9dC.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-C6xHuHzH.js";import"./useTimeout-B10xwKtC.js";import"./useForkRef-V_fwhT5k.js";import"./CircularProgress-DYCAL8o4.js";function i(){const[e,n]=m.useState(0);return r.jsx(p,{sx:{p:4,maxWidth:400,mx:"auto"},children:r.jsxs(c,{elevation:3,sx:{p:3},children:[r.jsx(a,{variant:"h4",component:"h1",gutterBottom:!0,children:"MUI + SSR Test"}),r.jsx(a,{variant:"body1",paragraph:!0,children:"Este componente usa Material-UI con soporte completo para SSR."}),r.jsxs(a,{variant:"h6",sx:{mb:2},children:["Contador: ",e]}),r.jsx(d,{variant:"contained",onClick:()=>n(e+1),fullWidth:!0,children:"Incrementar"})]})})}i.__docgenInfo={description:"",methods:[],displayName:"SimpleMuiExample"};const E={title:"Theme/SimpleMuiExample",component:i,decorators:[e=>r.jsx(s,{children:r.jsx(e,{})})],parameters:{layout:"fullscreen"},tags:["autodocs"]},o={},t={decorators:[e=>r.jsx(s,{children:r.jsx("div",{style:{backgroundColor:"#121212",minHeight:"100vh",padding:"1rem"},children:r.jsx(e,{})})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <MuiThemeProvider>
        <div style={{
      backgroundColor: '#121212',
      minHeight: '100vh',
      padding: '1rem'
    }}>
          <Story />
        </div>
      </MuiThemeProvider>]
}`,...t.parameters?.docs?.source}}};const T=["Default","WithDarkBackground"];export{o as Default,t as WithDarkBackground,T as __namedExportsOrder,E as default};
