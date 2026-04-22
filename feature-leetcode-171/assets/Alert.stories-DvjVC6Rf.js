import{j as r}from"./iframe-CIw9CmWG.js";import{c as m}from"./createSvgIcon-BxLN610L.js";import{s}from"./createSimplePaletteValueFilter-BY-cX2sl.js";import{B as n,T as f}from"./Box-BSK8Zd2B.js";import"./preload-helper-PPVm8Dsz.js";const b=m(r.jsx("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"})),S=m(r.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"})),C=m(r.jsx("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"})),A=m(r.jsx("path",{d:"M12 5.99 19.53 19H4.47zM12 2 1 21h22zm1 14h-2v2h2zm0-6h-2v4h2z"})),t={info:{backgroundColor:"var(--info-bg)",borderColor:"var(--info-border)",titleColor:"var(--info-title)",descriptionColor:"var(--info-foreground)"},success:{backgroundColor:"var(--success-bg)",borderColor:"var(--success-border)",titleColor:"var(--success-title)",descriptionColor:"var(--success-foreground)"},warning:{backgroundColor:"var(--warning-bg)",borderColor:"var(--warning-border)",titleColor:"var(--warning-title)",descriptionColor:"var(--warning-foreground)"},error:{backgroundColor:"var(--error-bg)",borderColor:"var(--error-border)",titleColor:"var(--error-title)",descriptionColor:"var(--error-foreground)"}},I={info:C,success:b,warning:A,error:S},T=s(n,{shouldForwardProp:e=>e!=="severity"})(({severity:e})=>({display:"flex",flexDirection:"row",alignItems:"flex-start",padding:"13px 17px",gap:"12px",width:"100%",maxWidth:"1216px",minHeight:"68px",boxSizing:"border-box",borderRadius:"10px",backgroundColor:t[e].backgroundColor,border:`1px solid ${t[e].borderColor}`,position:"relative",overflow:"hidden",transition:"all 0.2s ease-in-out"})),j=s(n,{shouldForwardProp:e=>e!=="severity"})(({severity:e})=>({display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:"16px",height:"16px",marginTop:"2px",color:t[e].titleColor,"& svg":{width:"100%",height:"100%"}})),k=s(n)({display:"flex",flexDirection:"column",alignItems:"flex-start",padding:0,gap:"2px",flexGrow:1}),P=s(f,{shouldForwardProp:e=>e!=="severity"})(({severity:e})=>({fontFamily:"'Inter', sans-serif",fontStyle:"normal",fontWeight:500,fontSize:"14px",lineHeight:"20px",letterSpacing:"-0.35px",color:t[e].titleColor,margin:0,wordBreak:"break-word"})),z=s(f,{shouldForwardProp:e=>e!=="severity"})(({severity:e})=>({fontFamily:"'Inter', sans-serif",fontStyle:"normal",fontWeight:400,fontSize:"14px",lineHeight:"20px",color:t[e].descriptionColor,margin:0,wordBreak:"break-word"})),o=({severity:e="info",title:h,children:g,icon:u,className:x})=>{const v=I[e],y=e==="error"?"alert":"status",w=e==="error"?"assertive":"polite";return r.jsxs(T,{severity:e,className:x,role:y,"aria-live":w,"data-testid":`alert-${e}`,children:[r.jsx(j,{severity:e,"aria-hidden":"true",children:u||r.jsx(v,{"data-testid":"alert-default-icon"})}),r.jsxs(k,{children:[r.jsx(P,{severity:e,component:"h6",children:h}),g&&r.jsx(z,{severity:e,component:"p",children:g})]})]})};o.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{severity:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const B={title:"Component-Catalog/Alert",component:o,decorators:[e=>r.jsx(n,{sx:{p:4,width:"100%",maxWidth:"1216px",margin:"0 auto"},children:r.jsx(e,{})})],argTypes:{severity:{control:"select",options:["info","success","warning","error"]}}},a={args:{severity:"info",title:"Information",children:"This is a standard informational alert message."}},i={args:{severity:"success",title:"Success",children:"Your changes have been saved successfully!"}},l={args:{severity:"warning",title:"Warning",children:"Please review your information before submitting."}},c={args:{severity:"error",title:"Error",children:"Something went wrong. Please try again."}},d={args:{severity:"info",title:"This is a compact alert without a description."}},p={args:{title:"Stacked Alerts"},render:()=>r.jsxs(n,{sx:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx(o,{severity:"info",title:"Information",children:"This is a standard informational alert message."}),r.jsx(o,{severity:"success",title:"Success",children:"Your changes have been saved successfully!"}),r.jsx(o,{severity:"warning",title:"Warning",children:"Please review your information before submitting."}),r.jsx(o,{severity:"error",title:"Error",children:"Something went wrong. Please try again."})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'info',
    title: 'Information',
    children: 'This is a standard informational alert message.'
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'success',
    title: 'Success',
    children: 'Your changes have been saved successfully!'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'warning',
    title: 'Warning',
    children: 'Please review your information before submitting.'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'error',
    title: 'Error',
    children: 'Something went wrong. Please try again.'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'info',
    title: 'This is a compact alert without a description.'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Stacked Alerts'
  },
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
