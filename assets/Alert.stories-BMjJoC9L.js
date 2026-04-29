import{j as r}from"./iframe-CBYi6jY5.js";import{c as a}from"./createSvgIcon-DMRWrMQ9.js";import{s}from"./memoTheme-BXO0MjCJ.js";import{B as o}from"./Box-CmNSs21T.js";import{T as d}from"./Typography-CCLByjkH.js";import"./preload-helper-BiuNoLlu.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const f=a(r.jsx("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"})),x=a(r.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"})),y=a(r.jsx("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"})),v=a(r.jsx("path",{d:"M12 5.99 19.53 19H4.47zM12 2 1 21h22zm1 14h-2v2h2zm0-6h-2v4h2z"})),S={info:y,success:f,warning:v,error:x},w=s(o,{shouldForwardProp:e=>e!=="severity"})(({theme:e})=>({display:"flex",flexDirection:"row",alignItems:"flex-start",padding:`${e.spacing(1.5)} ${e.spacing(2)}`,gap:e.spacing(1.5),width:"100%",maxWidth:e.breakpoints.values.lg,boxSizing:"border-box",borderRadius:e.shape.borderRadius})),j=s(o,{shouldForwardProp:e=>e!=="severity"})(({theme:e})=>({display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:e.spacing(2),height:e.spacing(2),marginTop:e.spacing(.25)})),A=s(o)(({theme:e})=>({display:"flex",flexDirection:"column",alignItems:"flex-start",padding:0,gap:e.spacing(.25)})),b=s(d,{shouldForwardProp:e=>e!=="severity"})(({theme:e})=>({...e.typography.subtitle2,fontStyle:"normal"})),I=s(d,{shouldForwardProp:e=>e!=="severity"})(({theme:e})=>({...e.typography.body2,fontStyle:"normal"})),t=({severity:e="info",title:i,children:l,icon:c,className:p,...m})=>{const u=S[e],g=e==="error"?"alert":"status",h=e==="error"?"assertive":"polite";return r.jsxs(w,{severity:e,className:p,role:g,"aria-live":h,"data-testid":`alert-${e}`,...m,children:[r.jsx(j,{severity:e,"aria-hidden":"true",children:c||r.jsx(u,{"data-testid":"alert-default-icon"})}),r.jsxs(A,{children:[r.jsx(b,{severity:e,children:i}),l&&r.jsx(I,{severity:e,children:l})]})]})};t.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{severity:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactElement"},description:""}},composes:["Omit"]};const C=e=>r.jsx(o,{sx:{p:4,width:"100%",maxWidth:i=>i.breakpoints.values.lg,margin:"0 auto"},children:r.jsx(e,{})}),R={title:"Component-Catalog/Alert",component:t,decorators:[C],argTypes:{severity:{control:"select",options:["info","success","warning","error"]}}},n={args:{title:"Stacked Alerts"},render:()=>r.jsxs(o,{sx:{display:"flex",flexDirection:"column",gap:2},children:[r.jsx(t,{severity:"info",title:"Information",children:"This is a standard informational alert message."}),r.jsx(t,{severity:"success",title:"Success",children:"Your changes have been saved successfully!"}),r.jsx(t,{severity:"warning",title:"Warning",children:"Please review your information before submitting."}),r.jsx(t,{severity:"error",title:"Error",children:"Something went wrong. Please try again."})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Stacked Alerts'
  },
  render: () => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 2
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
}`,...n.parameters?.docs?.source}}};const D=["AllAlertsStacked"];export{n as AllAlertsStacked,D as __namedExportsOrder,R as default};
