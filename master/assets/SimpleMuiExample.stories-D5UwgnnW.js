import{r as m,j as r,M as s}from"./iframe-Bex_yTzc.js";import{B as p}from"./Box-FtkLjhrY.js";import{P as c}from"./Paper-DsA1ffgW.js";import{T as a}from"./Typography-Doov3p0M.js";import{B as d}from"./Button-BbV_SWR_.js";import"./preload-helper-PPVm8Dsz.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./useTheme-C2fZNyVc.js";import"./styled-05_8ymuP.js";import"./memoTheme-eHZLbUHL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-RqVMq8SV.js";import"./useForkRef-B1u2YZsp.js";import"./CircularProgress-NdTuOsHS.js";function i(){const[e,n]=m.useState(0);return r.jsx(p,{sx:{p:4,maxWidth:400,mx:"auto"},children:r.jsxs(c,{elevation:3,sx:{p:3},children:[r.jsx(a,{variant:"h4",component:"h1",gutterBottom:!0,children:"MUI + SSR Test"}),r.jsx(a,{variant:"body1",paragraph:!0,children:"Este componente usa Material-UI con soporte completo para SSR."}),r.jsxs(a,{variant:"h6",sx:{mb:2},children:["Contador: ",e]}),r.jsx(d,{variant:"contained",onClick:()=>n(e+1),fullWidth:!0,children:"Incrementar"})]})})}i.__docgenInfo={description:"",methods:[],displayName:"SimpleMuiExample"};const T={title:"Theme/SimpleMuiExample",component:i,decorators:[e=>r.jsx(s,{children:r.jsx(e,{})})],parameters:{layout:"fullscreen"},tags:["autodocs"]},o={},t={decorators:[e=>r.jsx(s,{children:r.jsx("div",{style:{backgroundColor:"#121212",minHeight:"100vh",padding:"1rem"},children:r.jsx(e,{})})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <MuiThemeProvider>
        <div style={{
      backgroundColor: '#121212',
      minHeight: '100vh',
      padding: '1rem'
    }}>
          <Story />
        </div>
      </MuiThemeProvider>]
}`,...t.parameters?.docs?.source}}};const C=["Default","WithDarkBackground"];export{o as Default,t as WithDarkBackground,C as __namedExportsOrder,T as default};
