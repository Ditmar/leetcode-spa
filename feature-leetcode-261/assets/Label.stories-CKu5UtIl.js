import{H as h,m as C,B as r,a as F,C as w,f as _}from"./iframe-DHtBWT0-.js";import{I as D}from"./InfoOutlined-CGcdcFT8.js";import{e as a}from"./memoTheme-CJac86lv.js";import{I as E,T as k}from"./TextField-CQtipEQU.js";import{T as z}from"./Typography-BWjhg6T8.js";import{I as N}from"./IconButton-7wizH_UL.js";import{T as H}from"./Tooltip-Dv8GEO-h.js";import{B as T}from"./Box-BCQgJozS.js";const v={optionalIndicator:"(optional)",tooltipIconAriaLabel:"More information"},P=v.optionalIndicator,M=v.tooltipIconAriaLabel;function V(){const[e,o]=h.useState(!1),f=h.useCallback(()=>{o(!0)},[]),y=h.useCallback(()=>{o(!1)},[]),x=h.useCallback(()=>{o(t=>!t)},[]);return{open:e,handleOpen:f,handleClose:y,handleToggle:x}}const $=a(E)(({theme:e})=>({fontSize:e.typography.body2.fontSize,lineHeight:e.typography.body2.lineHeight,fontWeight:e.typography.fontWeightMedium,color:e.palette.text.primary,whiteSpace:"normal",wordBreak:"break-word",overflow:"visible",display:"inline-flex",alignItems:"center",flexWrap:"wrap",gap:e.spacing(.5),position:"static",transform:"none",transformOrigin:"unset","&.Mui-disabled":{color:e.palette.text.disabled,opacity:.6,cursor:"not-allowed"},"&.Mui-error":{color:e.palette.error.main}})),U=a("span")(({theme:e})=>({color:e.palette.error.main,marginInlineStart:"0.25rem",fontWeight:e.typography.fontWeightBold,display:"inline-block"})),G=a(z)(({theme:e})=>({fontSize:e.typography.caption.fontSize,lineHeight:e.typography.caption.lineHeight,color:e.palette.text.secondary,marginInlineStart:"0.25rem",fontStyle:"italic",display:"inline"})),J=a("span")({display:"inline-flex",alignItems:"center",marginInlineStart:"0.25rem",flexShrink:0}),K=a(N)(({theme:e})=>({padding:e.spacing(.25),color:e.palette.action.active,"&:disabled":{color:e.palette.action.disabled}})),Q=a(D)({fontSize:"1.125rem",display:"block"});function X(e,o){return{showRequired:!!e,showOptional:!!(o&&!e)}}const g=C.forwardRef(({htmlFor:e,children:o,required:f,optional:y,error:x,disabled:t,tooltip:q,...O},j)=>{const{showRequired:I,showOptional:L}=X(f,y),{open:W,handleOpen:R,handleClose:B,handleToggle:A}=V(),S=typeof q=="string"?q.trim():"";return r.jsxs($,{ref:j,htmlFor:e,error:x,disabled:t,"aria-required":I?!0:void 0,...O,children:[r.jsx("span",{children:o}),I&&r.jsx(U,{"aria-hidden":"true","data-testid":"required-indicator",children:"*"}),L&&r.jsx(G,{component:"span",variant:"caption","data-testid":"optional-hint",children:P}),S&&r.jsx(J,{children:r.jsx(H,{title:S,open:t?!1:W,onClose:B,onOpen:R,arrow:!0,enterTouchDelay:0,leaveTouchDelay:3e3,children:r.jsx(K,{size:"small","aria-label":M,onClick:A,type:"button",tabIndex:t?-1:0,disabled:t,children:r.jsx(Q,{fontSize:"inherit"})})})})]})});g.displayName="Label";g.__docgenInfo={description:"",methods:[],displayName:"Label",props:{htmlFor:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const b=_(),Y=e=>r.jsxs(F,{theme:b,children:[r.jsx(w,{}),r.jsx(T,{sx:{p:3,maxWidth:480},children:r.jsx(e,{})})]}),Z={title:"Components/Label",component:g,decorators:[Y],argTypes:{children:{control:"text",description:"Visible label text"},htmlFor:{control:"text",description:"ID of the associated input element"},required:{control:"boolean",description:"Displays required indicator"},optional:{control:"boolean",description:"Displays optional helper text"},error:{control:"boolean",description:"Applies error styling"},disabled:{control:"boolean",description:"Applies disabled styling"},tooltip:{control:"text",description:"Tooltip content (renders info icon when provided)"}},args:{htmlFor:"label-default-input",children:"Email address",required:!1,error:!1,disabled:!1,tooltip:""}},i={args:{htmlFor:"label-default"}},l={args:{htmlFor:"label-required",required:!0}},s={args:{htmlFor:"label-optional",optional:!0}},n={args:{htmlFor:"label-error",error:!0}},d={args:{htmlFor:"label-disabled",disabled:!0}},p={args:{htmlFor:"label-tooltip",tooltip:"We'll only use this to send your receipt."}},c={args:{htmlFor:"label-required-error-tooltip",children:"Work email",required:!0,error:!0,tooltip:"A valid email is required to proceed."}},u={render:e=>r.jsxs(T,{sx:{display:"flex",flexDirection:"column",gap:.5},children:[r.jsx(g,{...e}),r.jsx(k,{id:e.htmlFor,size:"small",placeholder:"you@example.com",error:e.error,disabled:e.disabled,required:e.required,fullWidth:!0})]}),args:{htmlFor:"label-paired-input",children:"Email address",required:!0}},m={decorators:[e=>r.jsxs(F,{theme:b,children:[r.jsx(w,{}),r.jsx(T,{sx:{width:320,border:`1px dashed ${b.palette.divider}`,p:b.spacing(1)},children:r.jsx(e,{})})]})],args:{htmlFor:"label-narrow-viewport",children:"A very long label text to safely test 200% mobile system font scale stability",required:!0,tooltip:"Helpful responsive validation tooltip content for this field layout."}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    htmlFor: 'label-default'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    htmlFor: 'label-required',
    required: true
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    htmlFor: 'label-optional',
    optional: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    htmlFor: 'label-error',
    error: true
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    htmlFor: 'label-disabled',
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    htmlFor: 'label-tooltip',
    tooltip: "We'll only use this to send your receipt."
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    htmlFor: 'label-required-error-tooltip',
    children: 'Work email',
    required: true,
    error: true,
    tooltip: 'A valid email is required to proceed.'
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 0.5
  }}>
      <Label {...args} />

      <TextField id={args.htmlFor} size="small" placeholder="you@example.com" error={args.error} disabled={args.disabled} required={args.required} fullWidth />
    </Box>,
  args: {
    htmlFor: 'label-paired-input',
    children: 'Email address',
    required: true
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  decorators: [(Story: React.ComponentType) => <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{
      width: 320,
      border: \`1px dashed \${theme.palette.divider}\`,
      p: theme.spacing(1)
    }}>
          <Story />
        </Box>
      </ThemeProvider>],
  args: {
    htmlFor: 'label-narrow-viewport',
    children: 'A very long label text to safely test 200% mobile system font scale stability',
    required: true,
    tooltip: 'Helpful responsive validation tooltip content for this field layout.'
  }
}`,...m.parameters?.docs?.source}}};const ee=["Default","Required","Optional","Error","Disabled","WithTooltip","RequiredErrorWithTooltip","PairedWithInput","NarrowViewport"],de=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Disabled:d,Error:n,NarrowViewport:m,Optional:s,PairedWithInput:u,Required:l,RequiredErrorWithTooltip:c,WithTooltip:p,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{de as L};
