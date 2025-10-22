import{j as r}from"./jsx-runtime-CBFqWUVk.js";import{M as d}from"./MuiThemeProvider-Cr6NIoRZ.js";import{r as h}from"./index-CgCoV-L-.js";import{B as x,T as a}from"./Box-zPJCsKhN.js";import{P as g}from"./Paper-gI8ZmHfM.js";import{B as f}from"./Button-BMrCFfud.js";import"./DefaultPropsProvider-DymgKFCc.js";import"./theme-Da2_6iEO.js";import"./useId-CoLTU8-u.js";import"./useEnhancedEffect-N7OWO1xF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./ButtonBase-CtRUfmQU.js";import"./useForkRef-BAkNGyFZ.js";function u(){const[e,l]=h.useState(0);return r.jsx(x,{sx:{p:4,maxWidth:400,mx:"auto"},children:r.jsxs(g,{elevation:3,sx:{p:3},children:[r.jsx(a,{variant:"h4",component:"h1",gutterBottom:!0,children:"MUI + SSR Test"}),r.jsx(a,{variant:"body1",paragraph:!0,children:"Este componente usa Material-UI con soporte completo para SSR."}),r.jsxs(a,{variant:"h6",sx:{mb:2},children:["Contador: ",e]}),r.jsx(f,{variant:"contained",onClick:()=>l(e+1),fullWidth:!0,children:"Incrementar"})]})})}u.__docgenInfo={description:"",methods:[],displayName:"SimpleMuiExample"};const I={title:"Theme/SimpleMuiExample",component:u,decorators:[e=>r.jsx(d,{children:r.jsx(e,{})})],parameters:{layout:"fullscreen"},tags:["autodocs"]},o={},t={decorators:[e=>r.jsx(d,{children:r.jsx("div",{style:{backgroundColor:"#121212",minHeight:"100vh",padding:"1rem"},children:r.jsx(e,{})})})]};var s,i,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(n=(i=o.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  decorators: [Story => <MuiThemeProvider>
        <div style={{
      backgroundColor: '#121212',
      minHeight: '100vh',
      padding: '1rem'
    }}>
          <Story />
        </div>
      </MuiThemeProvider>]
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const W=["Default","WithDarkBackground"];export{o as Default,t as WithDarkBackground,W as __namedExportsOrder,I as default};
