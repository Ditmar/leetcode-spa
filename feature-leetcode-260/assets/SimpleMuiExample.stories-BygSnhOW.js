import{H as m,B as r,M as s}from"./iframe-CQy82Avu.js";import{B as p}from"./Box-kwRxNVtJ.js";import{P as c}from"./Paper-D2yamQ8n.js";import{T as a}from"./Typography-DBEuKJ-D.js";import{B as d}from"./Button-D8tUW-Xs.js";import"./preload-helper-BFbRC-vR.js";import"./memoTheme-CX0d-ucX.js";import"./useTheme-D87gDqOx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BYF8q6p6.js";import"./useTimeout-5zOpL60U.js";import"./useForkRef-CmvM0aNx.js";import"./CircularProgress-CqvOAYKw.js";function i(){const[e,n]=m.useState(0);return r.jsx(p,{sx:{p:4,maxWidth:400,mx:"auto"},children:r.jsxs(c,{elevation:3,sx:{p:3},children:[r.jsx(a,{variant:"h4",component:"h1",gutterBottom:!0,children:"MUI + SSR Test"}),r.jsx(a,{variant:"body1",paragraph:!0,children:"Este componente usa Material-UI con soporte completo para SSR."}),r.jsxs(a,{variant:"h6",sx:{mb:2},children:["Contador: ",e]}),r.jsx(d,{variant:"contained",onClick:()=>n(e+1),fullWidth:!0,children:"Incrementar"})]})})}i.__docgenInfo={description:"",methods:[],displayName:"SimpleMuiExample"};const E={title:"Theme/SimpleMuiExample",component:i,decorators:[e=>r.jsx(s,{children:r.jsx(e,{})})],parameters:{layout:"fullscreen"},tags:["autodocs"]},o={},t={decorators:[e=>r.jsx(s,{children:r.jsx("div",{style:{backgroundColor:"#121212",minHeight:"100vh",padding:"1rem"},children:r.jsx(e,{})})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
