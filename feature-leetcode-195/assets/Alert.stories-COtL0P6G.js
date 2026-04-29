import{j as r}from"./iframe-Cf17G9ph.js";import{c as i}from"./createSvgIcon-D-qtpTxG.js";import{I as h}from"./InfoOutlined-kcY2owrh.js";import{s}from"./memoTheme-JgGvtxKZ.js";import{B as o}from"./Box-CDqaOus5.js";import{T as d}from"./Typography-DiOueTg2.js";import"./preload-helper-BmzZtkUX.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const x=i(r.jsx("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"})),y=i(r.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"})),v=i(r.jsx("path",{d:"M12 5.99 19.53 19H4.47zM12 2 1 21h22zm1 14h-2v2h2zm0-6h-2v4h2z"})),S={info:h,success:x,warning:v,error:y},w=s(o,{shouldForwardProp:e=>e!=="severity"})(({theme:e})=>({display:"flex",flexDirection:"row",alignItems:"flex-start",padding:`${e.spacing(1.5)} ${e.spacing(2)}`,gap:e.spacing(1.5),width:"100%",maxWidth:e.breakpoints.values.lg,boxSizing:"border-box",borderRadius:e.shape.borderRadius})),j=s(o,{shouldForwardProp:e=>e!=="severity"})(({theme:e})=>({display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:e.spacing(2),height:e.spacing(2),marginTop:e.spacing(.25)})),A=s(o)(({theme:e})=>({display:"flex",flexDirection:"column",alignItems:"flex-start",padding:0,gap:e.spacing(.25)})),b=s(d,{shouldForwardProp:e=>e!=="severity"})(({theme:e})=>({...e.typography.subtitle2,fontStyle:"normal"})),I=s(d,{shouldForwardProp:e=>e!=="severity"})(({theme:e})=>({...e.typography.body2,fontStyle:"normal"})),t=({severity:e="info",title:a,children:l,icon:c,className:p,...m})=>{const u=S[e],g=e==="error"?"alert":"status",f=e==="error"?"assertive":"polite";return r.jsxs(w,{severity:e,className:p,role:g,"aria-live":f,"data-testid":`alert-${e}`,...m,children:[r.jsx(j,{severity:e,"aria-hidden":"true",children:c||r.jsx(u,{"data-testid":"alert-default-icon"})}),r.jsxs(A,{children:[r.jsx(b,{severity:e,children:a}),l&&r.jsx(I,{severity:e,children:l})]})]})};t.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{severity:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactElement"},description:""}},composes:["Omit"]};const C=e=>r.jsx(o,{sx:{p:4,width:"100%",maxWidth:a=>a.breakpoints.values.lg,margin:"0 auto"},children:r.jsx(e,{})}),M={title:"Component-Catalog/Alert",component:t,decorators:[C],argTypes:{severity:{control:"select",options:["info","success","warning","error"]}}},n={args:{title:"Stacked Alerts"},render:()=>r.jsxs(o,{sx:{display:"flex",flexDirection:"column",gap:2},children:[r.jsx(t,{severity:"info",title:"Information",children:"This is a standard informational alert message."}),r.jsx(t,{severity:"success",title:"Success",children:"Your changes have been saved successfully!"}),r.jsx(t,{severity:"warning",title:"Warning",children:"Please review your information before submitting."}),r.jsx(t,{severity:"error",title:"Error",children:"Something went wrong. Please try again."})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const W=["AllAlertsStacked"];export{n as AllAlertsStacked,W as __namedExportsOrder,M as default};
