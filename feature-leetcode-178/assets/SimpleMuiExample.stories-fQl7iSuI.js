import{r as h,j as e,M as p}from"./iframe-SNIzOh4R.js";import{B as x}from"./Box-30JZl8Ct.js";import{P as g,T as a}from"./Typography-Csae9BRV.js";import{B as j}from"./Button-BeLwE-kr.js";import"./preload-helper-Dp1pzeXC.js";function u(){const[r,l]=h.useState(0);return e.jsx(x,{sx:{p:4,maxWidth:400,mx:"auto"},children:e.jsxs(g,{elevation:3,sx:{p:3},children:[e.jsx(a,{variant:"h4",component:"h1",gutterBottom:!0,children:"MUI + SSR Test"}),e.jsx(a,{variant:"body1",paragraph:!0,children:"Este componente usa Material-UI con soporte completo para SSR."}),e.jsxs(a,{variant:"h6",sx:{mb:2},children:["Contador: ",r]}),e.jsx(j,{variant:"contained",onClick:()=>l(r+1),fullWidth:!0,children:"Incrementar"})]})})}u.__docgenInfo={description:"",methods:[],displayName:"SimpleMuiExample"};const k={title:"Theme/SimpleMuiExample",component:u,decorators:[r=>e.jsx(p,{children:e.jsx(r,{})})],parameters:{layout:"fullscreen"},tags:["autodocs"]},o={},t={decorators:[r=>e.jsx(p,{children:e.jsx("div",{style:{backgroundColor:"#121212",minHeight:"100vh",padding:"1rem"},children:e.jsx(r,{})})})]};var s,n,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  decorators: [Story => <MuiThemeProvider>
        <div style={{
      backgroundColor: '#121212',
      minHeight: '100vh',
      padding: '1rem'
    }}>
          <Story />
        </div>
      </MuiThemeProvider>]
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const B=["Default","WithDarkBackground"];export{o as Default,t as WithDarkBackground,B as __namedExportsOrder,k as default};
