import{r as c,j as e,M as s}from"./iframe-DY6B_VHH.js";import{B as d,a as m}from"./Button-DtZSJXRP.js";import{P as p,T as a}from"./Typography-CfIMH13U.js";import"./preload-helper-PPVm8Dsz.js";function n(){const[r,i]=c.useState(0);return e.jsx(d,{sx:{p:4,maxWidth:400,mx:"auto"},children:e.jsxs(p,{elevation:3,sx:{p:3},children:[e.jsx(a,{variant:"h4",component:"h1",gutterBottom:!0,children:"MUI + SSR Test"}),e.jsx(a,{variant:"body1",paragraph:!0,children:"Este componente usa Material-UI con soporte completo para SSR."}),e.jsxs(a,{variant:"h6",sx:{mb:2},children:["Contador: ",r]}),e.jsx(m,{variant:"contained",onClick:()=>i(r+1),fullWidth:!0,children:"Incrementar"})]})})}n.__docgenInfo={description:"",methods:[],displayName:"SimpleMuiExample"};const g={title:"Theme/SimpleMuiExample",component:n,decorators:[r=>e.jsx(s,{children:e.jsx(r,{})})],parameters:{layout:"fullscreen"},tags:["autodocs"]},o={},t={decorators:[r=>e.jsx(s,{children:e.jsx("div",{style:{backgroundColor:"#121212",minHeight:"100vh",padding:"1rem"},children:e.jsx(r,{})})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <MuiThemeProvider>
        <div style={{
      backgroundColor: '#121212',
      minHeight: '100vh',
      padding: '1rem'
    }}>
          <Story />
        </div>
      </MuiThemeProvider>]
}`,...t.parameters?.docs?.source}}};const j=["Default","WithDarkBackground"];export{o as Default,t as WithDarkBackground,j as __namedExportsOrder,g as default};
