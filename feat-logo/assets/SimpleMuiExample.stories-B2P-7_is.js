import{r as c,j as r,M as s}from"./iframe-CKuvAM4k.js";import{B as m,T as a}from"./Box-DzMld3B0.js";import{P as d}from"./Paper-CJyNf3Pw.js";import{B as p}from"./Button-DdnA3WgW.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonBase-D5tNioFR.js";function n(){const[e,i]=c.useState(0);return r.jsx(m,{sx:{p:4,maxWidth:400,mx:"auto"},children:r.jsxs(d,{elevation:3,sx:{p:3},children:[r.jsx(a,{variant:"h4",component:"h1",gutterBottom:!0,children:"MUI + SSR Test"}),r.jsx(a,{variant:"body1",paragraph:!0,children:"Este componente usa Material-UI con soporte completo para SSR."}),r.jsxs(a,{variant:"h6",sx:{mb:2},children:["Contador: ",e]}),r.jsx(p,{variant:"contained",onClick:()=>i(e+1),fullWidth:!0,children:"Incrementar"})]})})}n.__docgenInfo={description:"",methods:[],displayName:"SimpleMuiExample"};const v={title:"Theme/SimpleMuiExample",component:n,decorators:[e=>r.jsx(s,{children:r.jsx(e,{})})],parameters:{layout:"fullscreen"},tags:["autodocs"]},o={},t={decorators:[e=>r.jsx(s,{children:r.jsx("div",{style:{backgroundColor:"#121212",minHeight:"100vh",padding:"1rem"},children:r.jsx(e,{})})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <MuiThemeProvider>
        <div style={{
      backgroundColor: '#121212',
      minHeight: '100vh',
      padding: '1rem'
    }}>
          <Story />
        </div>
      </MuiThemeProvider>]
}`,...t.parameters?.docs?.source}}};const S=["Default","WithDarkBackground"];export{o as Default,t as WithDarkBackground,S as __namedExportsOrder,v as default};
