import{r as m,a as r,b as n,M as s}from"./iframe-Buz5lkfP.js";import{B as d}from"./Box-C_a6LOGK.js";import{T as a,P as p}from"./Typography-Bv-qlMix.js";import{B as l}from"./Button-B6o6al0M.js";import"./preload-helper-PPVm8Dsz.js";import"./CircularProgress-Cllmh7d_.js";function i(){const[e,c]=m.useState(0);return r(d,{sx:{p:4,maxWidth:400,mx:"auto"},children:n(p,{elevation:3,sx:{p:3},children:[r(a,{variant:"h4",component:"h1",gutterBottom:!0,children:"MUI + SSR Test"}),r(a,{variant:"body1",paragraph:!0,children:"Este componente usa Material-UI con soporte completo para SSR."}),n(a,{variant:"h6",sx:{mb:2},children:["Contador: ",e]}),r(l,{variant:"contained",onClick:()=>c(e+1),fullWidth:!0,children:"Incrementar"})]})})}i.__docgenInfo={description:"",methods:[],displayName:"SimpleMuiExample"};const f={title:"Theme/SimpleMuiExample",component:i,decorators:[e=>r(s,{children:r(e,{})})],parameters:{layout:"fullscreen"},tags:["autodocs"]},o={},t={decorators:[e=>r(s,{children:r("div",{style:{backgroundColor:"#121212",minHeight:"100vh",padding:"1rem"},children:r(e,{})})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <MuiThemeProvider>
        <div style={{
      backgroundColor: '#121212',
      minHeight: '100vh',
      padding: '1rem'
    }}>
          <Story />
        </div>
      </MuiThemeProvider>]
}`,...t.parameters?.docs?.source}}};const y=["Default","WithDarkBackground"];export{o as Default,t as WithDarkBackground,y as __namedExportsOrder,f as default};
