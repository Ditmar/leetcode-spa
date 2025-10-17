import{j as r}from"./jsx-runtime-xF634gn_.js";import{M as p}from"./MuiThemeProvider-BLvS_hKc.js";import{r as h}from"./index-C-7etoUd.js";import{B as x,P as g,T as a}from"./Box-5GWd4Xnv.js";import{B as j}from"./Button-ZzaAmXft.js";import"./DefaultPropsProvider-DIdQUhtL.js";import"./theme.helpers-CkDgOx5U.js";import"./useEnhancedEffect-CIm8km6j.js";function u(){const[e,l]=h.useState(0);return r.jsx(x,{sx:{p:4,maxWidth:400,mx:"auto"},children:r.jsxs(g,{elevation:3,sx:{p:3},children:[r.jsx(a,{variant:"h4",component:"h1",gutterBottom:!0,children:"MUI + SSR Test"}),r.jsx(a,{variant:"body1",paragraph:!0,children:"Este componente usa Material-UI con soporte completo para SSR."}),r.jsxs(a,{variant:"h6",sx:{mb:2},children:["Contador: ",e]}),r.jsx(j,{variant:"contained",onClick:()=>l(e+1),fullWidth:!0,children:"Incrementar"})]})})}u.__docgenInfo={description:"",methods:[],displayName:"SimpleMuiExample"};const T={title:"Theme/SimpleMuiExample",component:u,decorators:[e=>r.jsx(p,{children:r.jsx(e,{})})],parameters:{layout:"fullscreen"},tags:["autodocs"]},o={},t={decorators:[e=>r.jsx(p,{children:r.jsx("div",{style:{backgroundColor:"#121212",minHeight:"100vh",padding:"1rem"},children:r.jsx(e,{})})})]};var s,n,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var m,c,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  decorators: [Story => <MuiThemeProvider>
        <div style={{
      backgroundColor: '#121212',
      minHeight: '100vh',
      padding: '1rem'
    }}>
          <Story />
        </div>
      </MuiThemeProvider>]
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const C=["Default","WithDarkBackground"];export{o as Default,t as WithDarkBackground,C as __namedExportsOrder,T as default};
