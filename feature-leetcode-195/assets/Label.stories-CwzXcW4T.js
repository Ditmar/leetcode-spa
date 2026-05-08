import{r as i,b as co,F as uo,p as mo,c as je,j as t,k as We,e as ho,H as Ae,I as Me,v as fo}from"./iframe-Dyr5I5GH.js";import{I as go}from"./InfoOutlined-CTOvjxB7.js";import{g as bo,a as xo,c as yo,s as u,m as he}from"./memoTheme-CXibW_gT.js";import{I as To,T as wo}from"./TextField-kbj-6jXG.js";import{T as vo}from"./Typography-Bo4XnKr5.js";import{I as Ro}from"./IconButton-BQGfETBe.js";import{u as So}from"./useTheme-BBOAo0mZ.js";import{u as J}from"./useSlot-D0tuFnfX.js";import{u as Q,b as Be,c as Fo}from"./useTimeout-CJKakJUl.js";import{u as Oo}from"./useControlled-_97wmq5P.js";import{u as qo}from"./useForkRef-1XJZbfBS.js";import{g as Po}from"./getReactElementRef-CRDhuVcx.js";import{G as Io}from"./Menu-eMbSNKIN.js";import{P as De}from"./Popper-C5UEuuUB.js";import{i as Ee}from"./ButtonBase-rgM-leWU.js";import{B as p}from"./Box-CTw2c_om.js";function Lo(e){return bo("MuiTooltip",e)}const a=xo("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);function jo(e){return Math.round(e*1e5)/1e5}const Bo=e=>{const{classes:o,disableInteractive:s,arrow:n,touch:x,placement:m}=e,R={popper:["popper",!s&&"popperInteractive",n&&"popperArrow"],tooltip:["tooltip",n&&"tooltipArrow",x&&"touch",`tooltipPlacement${We(m.split("-")[0])}`],arrow:["arrow"]};return yo(R,Lo,o)},Eo=u(De,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.popper,!s.disableInteractive&&o.popperInteractive,s.arrow&&o.popperArrow,!s.open&&o.popperClose]}})(he(({theme:e})=>({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none",variants:[{props:({ownerState:o})=>!o.disableInteractive,style:{pointerEvents:"auto"}},{props:({open:o})=>!o,style:{pointerEvents:"none"}},{props:({ownerState:o})=>o.arrow,style:{[`&[data-popper-placement*="bottom"] .${a.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${a.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${a.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}},[`&[data-popper-placement*="left"] .${a.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}}}},{props:({ownerState:o})=>o.arrow&&!o.isRtl,style:{[`&[data-popper-placement*="right"] .${a.arrow}`]:{left:0,marginLeft:"-0.71em"}}},{props:({ownerState:o})=>o.arrow&&!!o.isRtl,style:{[`&[data-popper-placement*="right"] .${a.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:o})=>o.arrow&&!o.isRtl,style:{[`&[data-popper-placement*="left"] .${a.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:o})=>o.arrow&&!!o.isRtl,style:{[`&[data-popper-placement*="left"] .${a.arrow}`]:{left:0,marginLeft:"-0.71em"}}}]}))),Co=u("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.tooltip,s.touch&&o.touch,s.arrow&&o.tooltipArrow,o[`tooltipPlacement${We(s.placement.split("-")[0])}`]]}})(he(({theme:e})=>({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:e.alpha(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium,[`.${a.popper}[data-popper-placement*="left"] &`]:{transformOrigin:"right center"},[`.${a.popper}[data-popper-placement*="right"] &`]:{transformOrigin:"left center"},[`.${a.popper}[data-popper-placement*="top"] &`]:{transformOrigin:"center bottom",marginBottom:"14px"},[`.${a.popper}[data-popper-placement*="bottom"] &`]:{transformOrigin:"center top",marginTop:"14px"},variants:[{props:({ownerState:o})=>o.arrow,style:{position:"relative",margin:0}},{props:({ownerState:o})=>o.touch,style:{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${jo(16/14)}em`,fontWeight:e.typography.fontWeightRegular}},{props:({ownerState:o})=>!o.isRtl,style:{[`.${a.popper}[data-popper-placement*="left"] &`]:{marginRight:"14px"},[`.${a.popper}[data-popper-placement*="right"] &`]:{marginLeft:"14px"}}},{props:({ownerState:o})=>!o.isRtl&&o.touch,style:{[`.${a.popper}[data-popper-placement*="left"] &`]:{marginRight:"24px"},[`.${a.popper}[data-popper-placement*="right"] &`]:{marginLeft:"24px"}}},{props:({ownerState:o})=>!!o.isRtl,style:{[`.${a.popper}[data-popper-placement*="left"] &`]:{marginLeft:"14px"},[`.${a.popper}[data-popper-placement*="right"] &`]:{marginRight:"14px"}}},{props:({ownerState:o})=>!!o.isRtl&&o.touch,style:{[`.${a.popper}[data-popper-placement*="left"] &`]:{marginLeft:"24px"},[`.${a.popper}[data-popper-placement*="right"] &`]:{marginRight:"24px"}}},{props:({ownerState:o})=>o.touch,style:{[`.${a.popper}[data-popper-placement*="top"] &`]:{marginBottom:"24px"}}},{props:({ownerState:o})=>o.touch,style:{[`.${a.popper}[data-popper-placement*="bottom"] &`]:{marginTop:"24px"}}}]}))),Wo=u("span",{name:"MuiTooltip",slot:"Arrow"})(he(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:e.alpha(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let Z=!1;const Ce=new Fo;let L={x:0,y:0};function ee(e,o){return(s,...n)=>{o&&o(s,...n),e(s,...n)}}const Ao=i.forwardRef(function(o,s){const n=co({props:o,name:"MuiTooltip"}),{arrow:x=!1,children:m,classes:R,components:y={},componentsProps:T={},describeChild:z=!1,disableFocusListener:re=!1,disableHoverListener:_=!1,disableInteractive:te=!1,disableTouchListener:ae=!1,enterDelay:U=100,enterNextDelay:S=0,enterTouchDelay:ke=700,followCursor:se=!1,id:Ne,leaveDelay:fe=0,leaveTouchDelay:ze=1500,onClose:ge,onOpen:be,open:_e,placement:xe="bottom",PopperComponent:ye,PopperProps:w={},slotProps:h={},slots:Ue={},title:v,TransitionComponent:He,TransitionProps:Ve,...Te}=n,f=i.isValidElement(m)?m:t.jsx("span",{children:m}),we=So(),Ge=uo(),[F,ve]=i.useState(),[ie,Ke]=i.useState(null),H=i.useRef(!1),ne=te||se,Re=Q(),le=Q(),V=Q(),Se=Q(),[Xe,Fe]=Oo({controlled:_e,default:!1,name:"Tooltip",state:"open"});let d=Xe;const pe=mo(Ne),O=i.useRef(),G=Be(()=>{O.current!==void 0&&(document.body.style.WebkitUserSelect=O.current,O.current=void 0),Se.clear()});i.useEffect(()=>G,[G]);const Oe=r=>{Ce.clear(),Z=!0,Fe(!0),be&&!d&&be(r)},K=Be(r=>{Ce.start(800+fe,()=>{Z=!1}),Fe(!1),ge&&d&&ge(r),Re.start(we.transitions.duration.shortest,()=>{H.current=!1})}),X=r=>{H.current&&r.type!=="touchstart"||(F&&F.removeAttribute("title"),le.clear(),V.clear(),U||Z&&S?le.start(Z?S:U,()=>{Oe(r)}):Oe(r))},ce=r=>{le.clear(),V.start(fe,()=>{K(r)})},[,qe]=i.useState(!1),Pe=r=>{Ee(r.target)||(qe(!1),ce(r))},Ie=r=>{F||ve(r.currentTarget),Ee(r.target)&&(qe(!0),X(r))},Le=r=>{H.current=!0;const g=f.props;g.onTouchStart&&g.onTouchStart(r)},Ye=r=>{Le(r),V.clear(),Re.clear(),G(),O.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Se.start(ke,()=>{document.body.style.WebkitUserSelect=O.current,X(r)})},Je=r=>{f.props.onTouchEnd&&f.props.onTouchEnd(r),G(),V.start(ze,()=>{K(r)})};i.useEffect(()=>{if(!d)return;function r(g){g.key==="Escape"&&K(g)}return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[K,d]);const Qe=qo(Po(f),ve,s);!v&&v!==0&&(d=!1);const de=i.useRef(),Ze=r=>{const g=f.props;g.onMouseMove&&g.onMouseMove(r),L={x:r.clientX,y:r.clientY},de.current&&de.current.update()},q={},ue=typeof v=="string";z?(q.title=!d&&ue&&!_?v:null,q["aria-describedby"]=d?pe:null):(q["aria-label"]=ue?v:null,q["aria-labelledby"]=d&&!ue?pe:null);const l={...q,...Te,...f.props,className:je(Te.className,f.props.className),onTouchStart:Le,ref:Qe,...se?{onMouseMove:Ze}:{}},P={};ae||(l.onTouchStart=Ye,l.onTouchEnd=Je),_||(l.onMouseOver=ee(X,l.onMouseOver),l.onMouseLeave=ee(ce,l.onMouseLeave),ne||(P.onMouseOver=X,P.onMouseLeave=ce)),re||(l.onFocus=ee(Ie,l.onFocus),l.onBlur=ee(Pe,l.onBlur),ne||(P.onFocus=Ie,P.onBlur=Pe));const b={...n,isRtl:Ge,arrow:x,disableInteractive:ne,placement:xe,PopperComponentProp:ye,touch:H.current},I=typeof h.popper=="function"?h.popper(b):h.popper,eo=i.useMemo(()=>{let r=[{name:"arrow",enabled:!!ie,options:{element:ie,padding:4}}];return w.popperOptions?.modifiers&&(r=r.concat(w.popperOptions.modifiers)),I?.popperOptions?.modifiers&&(r=r.concat(I.popperOptions.modifiers)),{...w.popperOptions,...I?.popperOptions,modifiers:r}},[ie,w.popperOptions,I?.popperOptions]),me=Bo(b),oo=typeof h.transition=="function"?h.transition(b):h.transition,Y={slots:{popper:y.Popper,transition:y.Transition??He,tooltip:y.Tooltip,arrow:y.Arrow,...Ue},slotProps:{arrow:h.arrow??T.arrow,popper:{...w,...I??T.popper},tooltip:h.tooltip??T.tooltip,transition:{...Ve,...oo??T.transition}}},[ro,to]=J("popper",{elementType:Eo,externalForwardedProps:Y,ownerState:b,className:je(me.popper,w?.className)}),[ao,so]=J("transition",{elementType:Io,externalForwardedProps:Y,ownerState:b}),[io,no]=J("tooltip",{elementType:Co,className:me.tooltip,externalForwardedProps:Y,ownerState:b}),[lo,po]=J("arrow",{elementType:Wo,className:me.arrow,externalForwardedProps:Y,ownerState:b,ref:Ke});return t.jsxs(i.Fragment,{children:[i.cloneElement(f,l),t.jsx(ro,{as:ye??De,placement:xe,anchorEl:se?{getBoundingClientRect:()=>({top:L.y,left:L.x,right:L.x,bottom:L.y,width:0,height:0})}:F,popperRef:de,open:F?d:!1,id:pe,transition:!0,...P,...to,popperOptions:eo,children:({TransitionProps:r})=>t.jsx(ao,{timeout:we.transitions.duration.shorter,...r,...so,children:t.jsxs(io,{...no,children:[v,x?t.jsx(lo,{...po}):null]})})})]})}),$e={optionalIndicator:"(opcional)",tooltipIconAriaLabel:"Más información"},Mo=$e.optionalIndicator,Do=$e.tooltipIconAriaLabel;function $o(){const[e,o]=i.useState(!1),s=i.useCallback(()=>{o(n=>!n)},[]);return{open:e,handleToggle:s}}const ko=u(To)(({theme:e})=>({fontSize:e.typography.body2.fontSize,lineHeight:e.typography.body2.lineHeight,fontWeight:e.typography.fontWeightMedium,color:e.palette.text.primary,whiteSpace:"normal",wordBreak:"break-word",overflow:"visible",display:"inline-flex",alignItems:"center",flexWrap:"wrap",gap:e.spacing(.5),position:"static",transform:"none",transformOrigin:"unset"})),No=u("span")(({theme:e})=>({color:e.palette.error.main,marginInlineStart:e.spacing(.25),fontWeight:e.typography.fontWeightBold})),zo=u(vo)(({theme:e})=>({fontSize:e.typography.caption.fontSize,lineHeight:e.typography.caption.lineHeight,color:e.palette.text.secondary,marginInlineStart:e.spacing(.5),fontStyle:"italic",display:"inline"})),_o=u("span")(({theme:e})=>({display:"inline-flex",alignItems:"center",marginInlineStart:e.spacing(.25),flexShrink:0})),Uo=u(Ro)(({theme:e})=>({padding:e.spacing(.25)})),Ho=u("span")(({theme:e})=>({display:"inline-flex",alignItems:"center",fontSize:e.typography.body2.fontSize,lineHeight:1}));function Vo(e,o){return{showRequired:!!e,showOptional:!!(o&&!e)}}const c=ho.forwardRef(({htmlFor:e,children:o,required:s,optional:n,error:x,disabled:m,tooltip:R,...y},T)=>{const{showRequired:z,showOptional:re}=Vo(s,n),{open:_,handleOpen:te,handleClose:ae,handleToggle:U}=$o(),S=typeof R=="string"?R.trim():"";return t.jsxs(ko,{ref:T,htmlFor:e,error:x,disabled:m,"aria-required":z?!0:void 0,required:!1,...y,children:[o,z&&t.jsx(No,{"aria-hidden":"true",children:"*"}),re&&t.jsxs(zo,{component:"span",variant:"caption",children:[" ",Mo]}),S&&t.jsx(_o,{children:t.jsx(Ao,{title:S,open:_,onClose:ae,onOpen:te,arrow:!0,enterTouchDelay:0,leaveTouchDelay:3e3,children:t.jsx(Uo,{size:"small","aria-label":Do,onClick:U,type:"button",tabIndex:0,disabled:m,children:t.jsx(Ho,{as:go,fontSize:"inherit"})})})})]})});c.displayName="Label";c.__docgenInfo={description:"",methods:[],displayName:"Label",props:{htmlFor:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const oe=fo(),Go=e=>t.jsxs(Ae,{theme:oe,children:[t.jsx(Me,{}),t.jsx(p,{sx:{p:3,maxWidth:480},children:t.jsx(e,{})})]}),Ko={title:"Components/Label",component:c,decorators:[Go],argTypes:{children:{control:"text",description:"Visible label text"},htmlFor:{control:"text",description:"ID of the associated input element"},required:{control:"boolean",description:"Displays required indicator"},optional:{control:"boolean",description:"Displays optional helper text"},error:{control:"boolean",description:"Applies error styling"},disabled:{control:"boolean",description:"Applies disabled styling"},tooltip:{control:"text",description:"Tooltip content (renders info icon when provided)"}},args:{htmlFor:"label-default-input",children:"Email address",required:!1,optional:!1,error:!1,disabled:!1,tooltip:""}},j={args:{htmlFor:"label-default"}},B={args:{htmlFor:"label-required",required:!0}},E={args:{htmlFor:"label-optional",optional:!0}},C={args:{htmlFor:"label-error",error:!0}},W={args:{htmlFor:"label-disabled",disabled:!0}},A={args:{htmlFor:"label-tooltip",tooltip:"We'll only use this to send your receipt."}},M={args:{htmlFor:"label-required-error-tooltip",children:"Work email",required:!0,error:!0,tooltip:"A valid email is required to proceed."}},D={args:{htmlFor:"label-required-optional",children:"Username",required:!0,optional:!0,tooltip:"Required takes precedence over optional."}},$={render:e=>t.jsxs(p,{sx:{display:"flex",flexDirection:"column",gap:.5},children:[t.jsx(c,{...e}),t.jsx(wo,{id:e.htmlFor,size:"small",placeholder:"you@example.com",error:e.error,disabled:e.disabled,required:e.required,fullWidth:!0})]}),args:{htmlFor:"label-paired-input",children:"Email address",required:!0}},k={decorators:[e=>t.jsxs(Ae,{theme:oe,children:[t.jsx(Me,{}),t.jsx(p,{sx:{width:320,border:`1px dashed ${oe.palette.divider}`,p:oe.spacing(1)},children:t.jsx(e,{})})]})],args:{htmlFor:"label-narrow-viewport",children:"A very long label that might wrap on narrow screens",required:!0,tooltip:"Helpful tooltip content for this field"}},N={render:()=>t.jsxs(p,{sx:{display:"flex",flexDirection:"column",gap:2},children:[t.jsx(p,{children:t.jsx(c,{htmlFor:"s1",children:"Default"})}),t.jsx(p,{children:t.jsx(c,{htmlFor:"s2",required:!0,children:"Required"})}),t.jsx(p,{children:t.jsx(c,{htmlFor:"s3",optional:!0,children:"Optional"})}),t.jsx(p,{children:t.jsx(c,{htmlFor:"s4",error:!0,children:"Error"})}),t.jsx(p,{children:t.jsx(c,{htmlFor:"s5",disabled:!0,children:"Disabled"})}),t.jsx(p,{children:t.jsx(c,{htmlFor:"s6",tooltip:"Extra context here",children:"With Tooltip"})}),t.jsx(p,{children:t.jsx(c,{htmlFor:"s7",required:!0,error:!0,tooltip:"Fix this field",children:"Required + Error + Tooltip"})})]})};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    htmlFor: 'label-default'
  }
}`,...j.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    htmlFor: 'label-required',
    required: true
  }
}`,...B.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    htmlFor: 'label-optional',
    optional: true
  }
}`,...E.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    htmlFor: 'label-error',
    error: true
  }
}`,...C.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    htmlFor: 'label-disabled',
    disabled: true
  }
}`,...W.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    htmlFor: 'label-tooltip',
    tooltip: "We'll only use this to send your receipt."
  }
}`,...A.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    htmlFor: 'label-required-error-tooltip',
    children: 'Work email',
    required: true,
    error: true,
    tooltip: 'A valid email is required to proceed.'
  }
}`,...M.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    htmlFor: 'label-required-optional',
    children: 'Username',
    required: true,
    optional: true,
    tooltip: 'Required takes precedence over optional.'
  }
}`,...D.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <ThemeProvider theme={theme}>
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
    children: 'A very long label that might wrap on narrow screens',
    required: true,
    tooltip: 'Helpful tooltip content for this field'
  }
}`,...k.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  }}>
      {/* Basic states */}
      <Box>
        <Label htmlFor="s1">Default</Label>
      </Box>

      <Box>
        <Label htmlFor="s2" required>
          Required
        </Label>
      </Box>

      <Box>
        <Label htmlFor="s3" optional>
          Optional
        </Label>
      </Box>

      {/* Validation states */}
      <Box>
        <Label htmlFor="s4" error>
          Error
        </Label>
      </Box>

      <Box>
        <Label htmlFor="s5" disabled>
          Disabled
        </Label>
      </Box>

      {/* Tooltip states */}
      <Box>
        <Label htmlFor="s6" tooltip="Extra context here">
          With Tooltip
        </Label>
      </Box>

      <Box>
        <Label htmlFor="s7" required error tooltip="Fix this field">
          Required + Error + Tooltip
        </Label>
      </Box>
    </Box>
}`,...N.parameters?.docs?.source}}};const Xo=["Default","Required","Optional","Error","Disabled","WithTooltip","RequiredErrorWithTooltip","RequiredOverridesOptional","PairedWithInput","NarrowViewport","AllStates"],ur=Object.freeze(Object.defineProperty({__proto__:null,AllStates:N,Default:j,Disabled:W,Error:C,NarrowViewport:k,Optional:E,PairedWithInput:$,Required:B,RequiredErrorWithTooltip:M,RequiredOverridesOptional:D,WithTooltip:A,__namedExportsOrder:Xo,default:Ko},Symbol.toStringTag,{value:"Module"}));export{N as A,j as D,C as E,ur as L,k as N,E as O,$ as P,B as R,A as W,W as a,M as b};
