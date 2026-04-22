import{j as e}from"./iframe-PkmfHJKy.js";import{c as g}from"./createSvgIcon-DEOMyVk2.js";import{s as t}from"./createSimplePaletteValueFilter-Ctp-8xdE.js";import{B as n,T as f}from"./Box-bz-uOknM.js";import"./preload-helper-PPVm8Dsz.js";const b=g(e.jsx("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"})),S=g(e.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"})),C=g(e.jsx("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"})),j=g(e.jsx("path",{d:"M12 5.99 19.53 19H4.47zM12 2 1 21h22zm1 14h-2v2h2zm0-6h-2v4h2z"})),s={info:{backgroundColor:"var(--info-bg)",borderColor:"var(--info-border)",titleColor:"var(--info-title)",descriptionColor:"var(--info-foreground)"},success:{backgroundColor:"var(--success-bg)",borderColor:"var(--success-border)",titleColor:"var(--success-title)",descriptionColor:"var(--success-foreground)"},warning:{backgroundColor:"var(--warning-bg)",borderColor:"var(--warning-border)",titleColor:"var(--warning-title)",descriptionColor:"var(--warning-foreground)"},error:{backgroundColor:"var(--error-bg)",borderColor:"var(--error-border)",titleColor:"var(--error-title)",descriptionColor:"var(--error-foreground)"}},A={info:C,success:b,warning:j,error:S},I=t(n,{shouldForwardProp:r=>r!=="severity"})(({severity:r})=>({display:"flex",flexDirection:"row",alignItems:"flex-start",padding:"13px 17px",gap:"12px",width:"100%",maxWidth:"1216px",minHeight:"68px",boxSizing:"border-box",borderRadius:"10px",backgroundColor:s[r].backgroundColor,border:`1px solid ${s[r].borderColor}`,position:"relative",overflow:"hidden",transition:"all 0.2s ease-in-out"})),T=t(n,{shouldForwardProp:r=>r!=="severity"})(({severity:r})=>({display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:"16px",height:"16px",marginTop:"2px",color:s[r].titleColor,"& svg":{width:"100%",height:"100%"}})),k=t(n)({display:"flex",flexDirection:"column",alignItems:"flex-start",padding:0,gap:"2px",flexGrow:1}),P=t(f,{shouldForwardProp:r=>r!=="severity"})(({severity:r})=>({fontFamily:"'Inter', sans-serif",fontStyle:"normal",fontWeight:500,fontSize:"14px",lineHeight:"20px",letterSpacing:"-0.35px",color:s[r].titleColor,margin:0,wordBreak:"break-word"})),z=t(f,{shouldForwardProp:r=>r!=="severity"})(({severity:r})=>({fontFamily:"'Inter', sans-serif",fontStyle:"normal",fontWeight:400,fontSize:"14px",lineHeight:"20px",color:s[r].descriptionColor,margin:0,wordBreak:"break-word"})),o=({severity:r="info",title:h,children:m,icon:u,className:x})=>{const v=A[r],y=r==="error"?"alert":"status",w=r==="error"?"assertive":"polite";return e.jsxs(I,{severity:r,className:x,role:y,"aria-live":w,"data-testid":`alert-${r}`,children:[e.jsx(T,{severity:r,"aria-hidden":"true",children:u||e.jsx(v,{"data-testid":"alert-default-icon"})}),e.jsxs(k,{children:[e.jsx(P,{severity:r,component:"h6",children:h}),m&&e.jsx(z,{severity:r,component:"p",children:m})]})]})};o.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{severity:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const B={title:"Component-Catalog/Alert",component:o,decorators:[r=>e.jsx(n,{sx:{p:4,width:"100%",maxWidth:"1216px",margin:"0 auto"},children:e.jsx(r,{})})],argTypes:{severity:{control:"select",options:["info","success","warning","error"]}}},a={args:{severity:"info",title:"Information",children:"This is a standard informational alert message."},render:r=>e.jsx(o,{...r})},i={args:{severity:"success",title:"Success",children:"Your changes have been saved successfully!"},render:r=>e.jsx(o,{...r})},l={args:{severity:"warning",title:"Warning",children:"Please review your information before submitting."},render:r=>e.jsx(o,{...r})},c={args:{severity:"error",title:"Error",children:"Something went wrong. Please try again."},render:r=>e.jsx(o,{...r})},d={args:{severity:"info",title:"This is a compact alert without a description."},render:r=>e.jsx(o,{...r})},p={render:()=>e.jsxs(n,{sx:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(o,{severity:"info",title:"Information",children:"This is a standard informational alert message."}),e.jsx(o,{severity:"success",title:"Success",children:"Your changes have been saved successfully!"}),e.jsx(o,{severity:"warning",title:"Warning",children:"Please review your information before submitting."}),e.jsx(o,{severity:"error",title:"Error",children:"Something went wrong. Please try again."})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'info',
    title: 'Information',
    children: 'This is a standard informational alert message.'
  },
  render: args => <Alert {...args} />
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'success',
    title: 'Success',
    children: 'Your changes have been saved successfully!'
  },
  render: args => <Alert {...args} />
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'warning',
    title: 'Warning',
    children: 'Please review your information before submitting.'
  },
  render: args => <Alert {...args} />
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'error',
    title: 'Error',
    children: 'Something went wrong. Please try again.'
  },
  render: args => <Alert {...args} />
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'info',
    title: 'This is a compact alert without a description.'
  },
  render: args => <Alert {...args} />
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Alert severity="info" title="Information">
        This is a standard informational alert message.
      </Alert>
      <Alert severity="success" title="Success">
        Your changes have been saved successfully!
      </Alert>
      <Alert severity="warning" title="Warning">
        Please review your information before submitting.
      </Alert>
      <Alert severity="error" title="Error">
        Something went wrong. Please try again.
      </Alert>
    </Box>
}`,...p.parameters?.docs?.source}}};const F=["Info","Success","Warning","Error","TitleOnly","AllAlertsStacked"];export{p as AllAlertsStacked,c as Error,a as Info,i as Success,d as TitleOnly,l as Warning,F as __namedExportsOrder,B as default};
