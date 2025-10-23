import{r as c,j as e,M as s}from"./iframe-C17yYjq0.js";import{B as m}from"./createSimplePaletteValueFilter-mlKcgKQ2.js";import{P as d,T as a}from"./Typography-B4dSENmd.js";import{B as p}from"./Button-CK6WiCwh.js";import"./preload-helper-PPVm8Dsz.js";function n(){const[r,i]=c.useState(0);return e.jsx(m,{sx:{p:4,maxWidth:400,mx:"auto"},children:e.jsxs(d,{elevation:3,sx:{p:3},children:[e.jsx(a,{variant:"h4",component:"h1",gutterBottom:!0,children:"MUI + SSR Test"}),e.jsx(a,{variant:"body1",paragraph:!0,children:"Este componente usa Material-UI con soporte completo para SSR."}),e.jsxs(a,{variant:"h6",sx:{mb:2},children:["Contador: ",r]}),e.jsx(p,{variant:"contained",onClick:()=>i(r+1),fullWidth:!0,children:"Incrementar"})]})})}n.__docgenInfo={description:"",methods:[],displayName:"SimpleMuiExample"};const j={title:"Theme/SimpleMuiExample",component:n,decorators:[r=>e.jsx(s,{children:e.jsx(r,{})})],parameters:{layout:"fullscreen"},tags:["autodocs"]},o={},t={decorators:[r=>e.jsx(s,{children:e.jsx("div",{style:{backgroundColor:"#121212",minHeight:"100vh",padding:"1rem"},children:e.jsx(r,{})})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <MuiThemeProvider>
        <div style={{
      backgroundColor: '#121212',
      minHeight: '100vh',
      padding: '1rem'
    }}>
          <Story />
        </div>
      </MuiThemeProvider>]
}`,...t.parameters?.docs?.source}}};const v=["Default","WithDarkBackground"];export{o as Default,t as WithDarkBackground,v as __namedExportsOrder,j as default};
