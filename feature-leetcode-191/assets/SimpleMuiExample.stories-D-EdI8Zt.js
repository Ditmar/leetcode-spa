import{a as m,j as r,M as s}from"./iframe-uR7j7Ibo.js";import{B as c}from"./Box-DkpHB9F3.js";import{P as p}from"./Paper-DeleHRvW.js";import{T as a}from"./Typography-CzQtDnL4.js";import{B as d}from"./Button-ljUyTMuD.js";import"./preload-helper-Dl5QhH3x.js";import"./ButtonBase-D-f22hNh.js";import"./useTheme-B1Z-jYEC.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-DrfQGbzp.js";function n(){const[e,i]=m.useState(0);return r.jsx(c,{sx:{p:4,maxWidth:400,mx:"auto"},children:r.jsxs(p,{elevation:3,sx:{p:3},children:[r.jsx(a,{variant:"h4",component:"h1",gutterBottom:!0,children:"MUI + SSR Test"}),r.jsx(a,{variant:"body1",paragraph:!0,children:"Este componente usa Material-UI con soporte completo para SSR."}),r.jsxs(a,{variant:"h6",sx:{mb:2},children:["Contador: ",e]}),r.jsx(d,{variant:"contained",onClick:()=>i(e+1),fullWidth:!0,children:"Incrementar"})]})})}n.__docgenInfo={description:"",methods:[],displayName:"SimpleMuiExample"};const M={title:"Theme/SimpleMuiExample",component:n,decorators:[e=>r.jsx(s,{children:r.jsx(e,{})})],parameters:{layout:"fullscreen"},tags:["autodocs"]},o={},t={decorators:[e=>r.jsx(s,{children:r.jsx("div",{style:{backgroundColor:"#121212",minHeight:"100vh",padding:"1rem"},children:r.jsx(e,{})})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <MuiThemeProvider>
        <div style={{
      backgroundColor: '#121212',
      minHeight: '100vh',
      padding: '1rem'
    }}>
          <Story />
        </div>
      </MuiThemeProvider>]
}`,...t.parameters?.docs?.source}}};const k=["Default","WithDarkBackground"];export{o as Default,t as WithDarkBackground,k as __namedExportsOrder,M as default};
