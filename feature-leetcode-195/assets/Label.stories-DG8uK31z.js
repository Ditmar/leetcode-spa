import{r as n,b as po,F as lo,p as co,c as qe,j as t,k as Ce,e as uo,H as We,I as Me,v as Ae}from"./iframe-Cf17G9ph.js";import{I as mo}from"./InfoOutlined-kcY2owrh.js";import{g as ho,a as fo,c as go,s as b,m as de}from"./memoTheme-JgGvtxKZ.js";import{I as bo,T as yo}from"./TextField-Bi9reTAO.js";import{T as xo}from"./Typography-DiOueTg2.js";import{u as To}from"./useTheme-DMzThJR_.js";import{u as K}from"./useSlot-DNDXjemC.js";import{u as X,b as Fe,c as wo}from"./useTimeout-Do6GUb_M.js";import{u as vo}from"./useControlled-JnU9I825.js";import{u as So}from"./useForkRef-B1tAKSWF.js";import{g as Ro}from"./getReactElementRef-BLUD3pXT.js";import{G as Po}from"./Menu-DRF_kKD_.js";import{P as De}from"./Popper-Bsa_l72l.js";import{i as je}from"./ButtonBase-_5mOcEow.js";import{I as Oo}from"./IconButton-ChRYDwGB.js";import{B as Q}from"./Box-CDqaOus5.js";function Lo(e){return ho("MuiTooltip",e)}const s=fo("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);function Io(e){return Math.round(e*1e5)/1e5}const qo=e=>{const{classes:o,disableInteractive:a,arrow:i,touch:u,placement:c}=e,v={popper:["popper",!a&&"popperInteractive",i&&"popperArrow"],tooltip:["tooltip",i&&"tooltipArrow",u&&"touch",`tooltipPlacement${Ce(c.split("-")[0])}`],arrow:["arrow"]};return go(v,Lo,o)},Fo=b(De,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.popper,!a.disableInteractive&&o.popperInteractive,a.arrow&&o.popperArrow,!a.open&&o.popperClose]}})(de(({theme:e})=>({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none",variants:[{props:({ownerState:o})=>!o.disableInteractive,style:{pointerEvents:"auto"}},{props:({open:o})=>!o,style:{pointerEvents:"none"}},{props:({ownerState:o})=>o.arrow,style:{[`&[data-popper-placement*="bottom"] .${s.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${s.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${s.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}},[`&[data-popper-placement*="left"] .${s.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}}}},{props:({ownerState:o})=>o.arrow&&!o.isRtl,style:{[`&[data-popper-placement*="right"] .${s.arrow}`]:{left:0,marginLeft:"-0.71em"}}},{props:({ownerState:o})=>o.arrow&&!!o.isRtl,style:{[`&[data-popper-placement*="right"] .${s.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:o})=>o.arrow&&!o.isRtl,style:{[`&[data-popper-placement*="left"] .${s.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:o})=>o.arrow&&!!o.isRtl,style:{[`&[data-popper-placement*="left"] .${s.arrow}`]:{left:0,marginLeft:"-0.71em"}}}]}))),jo=b("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.tooltip,a.touch&&o.touch,a.arrow&&o.tooltipArrow,o[`tooltipPlacement${Ce(a.placement.split("-")[0])}`]]}})(de(({theme:e})=>({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:e.alpha(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium,[`.${s.popper}[data-popper-placement*="left"] &`]:{transformOrigin:"right center"},[`.${s.popper}[data-popper-placement*="right"] &`]:{transformOrigin:"left center"},[`.${s.popper}[data-popper-placement*="top"] &`]:{transformOrigin:"center bottom",marginBottom:"14px"},[`.${s.popper}[data-popper-placement*="bottom"] &`]:{transformOrigin:"center top",marginTop:"14px"},variants:[{props:({ownerState:o})=>o.arrow,style:{position:"relative",margin:0}},{props:({ownerState:o})=>o.touch,style:{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${Io(16/14)}em`,fontWeight:e.typography.fontWeightRegular}},{props:({ownerState:o})=>!o.isRtl,style:{[`.${s.popper}[data-popper-placement*="left"] &`]:{marginRight:"14px"},[`.${s.popper}[data-popper-placement*="right"] &`]:{marginLeft:"14px"}}},{props:({ownerState:o})=>!o.isRtl&&o.touch,style:{[`.${s.popper}[data-popper-placement*="left"] &`]:{marginRight:"24px"},[`.${s.popper}[data-popper-placement*="right"] &`]:{marginLeft:"24px"}}},{props:({ownerState:o})=>!!o.isRtl,style:{[`.${s.popper}[data-popper-placement*="left"] &`]:{marginLeft:"14px"},[`.${s.popper}[data-popper-placement*="right"] &`]:{marginRight:"14px"}}},{props:({ownerState:o})=>!!o.isRtl&&o.touch,style:{[`.${s.popper}[data-popper-placement*="left"] &`]:{marginLeft:"24px"},[`.${s.popper}[data-popper-placement*="right"] &`]:{marginRight:"24px"}}},{props:({ownerState:o})=>o.touch,style:{[`.${s.popper}[data-popper-placement*="top"] &`]:{marginBottom:"24px"}}},{props:({ownerState:o})=>o.touch,style:{[`.${s.popper}[data-popper-placement*="bottom"] &`]:{marginTop:"24px"}}}]}))),Eo=b("span",{name:"MuiTooltip",slot:"Arrow"})(de(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:e.alpha(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let Y=!1;const Ee=new wo;let I={x:0,y:0};function J(e,o){return(a,...i)=>{o&&o(a,...i),e(a,...i)}}const Co=n.forwardRef(function(o,a){const i=po({props:o,name:"MuiTooltip"}),{arrow:u=!1,children:c,classes:v,components:y={},componentsProps:x={},describeChild:k=!1,disableFocusListener:Z=!1,disableHoverListener:B=!1,disableInteractive:ee=!1,disableTouchListener:oe=!1,enterDelay:N=100,enterNextDelay:ue=0,enterTouchDelay:$e=700,followCursor:re=!1,id:ke,leaveDelay:me=0,leaveTouchDelay:Be=1500,onClose:he,onOpen:fe,open:Ne,placement:ge="bottom",PopperComponent:be,PopperProps:T={},slotProps:m={},slots:ze={},title:w,TransitionComponent:_e,TransitionProps:He,...ye}=i,h=n.isValidElement(c)?c:t.jsx("span",{children:c}),xe=To(),Ue=lo(),[S,Te]=n.useState(),[te,Ve]=n.useState(null),z=n.useRef(!1),se=ee||re,we=X(),ae=X(),_=X(),ve=X(),[Ge,Se]=vo({controlled:Ne,default:!1,name:"Tooltip",state:"open"});let d=Ge;const ne=co(ke),R=n.useRef(),H=Fe(()=>{R.current!==void 0&&(document.body.style.WebkitUserSelect=R.current,R.current=void 0),ve.clear()});n.useEffect(()=>H,[H]);const Re=r=>{Ee.clear(),Y=!0,Se(!0),fe&&!d&&fe(r)},U=Fe(r=>{Ee.start(800+me,()=>{Y=!1}),Se(!1),he&&d&&he(r),we.start(xe.transitions.duration.shortest,()=>{z.current=!1})}),V=r=>{z.current&&r.type!=="touchstart"||(S&&S.removeAttribute("title"),ae.clear(),_.clear(),N||Y&&ue?ae.start(Y?ue:N,()=>{Re(r)}):Re(r))},ie=r=>{ae.clear(),_.start(me,()=>{U(r)})},[,Pe]=n.useState(!1),Oe=r=>{je(r.target)||(Pe(!1),ie(r))},Le=r=>{S||Te(r.currentTarget),je(r.target)&&(Pe(!0),V(r))},Ie=r=>{z.current=!0;const f=h.props;f.onTouchStart&&f.onTouchStart(r)},Ke=r=>{Ie(r),_.clear(),we.clear(),H(),R.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",ve.start($e,()=>{document.body.style.WebkitUserSelect=R.current,V(r)})},Xe=r=>{h.props.onTouchEnd&&h.props.onTouchEnd(r),H(),_.start(Be,()=>{U(r)})};n.useEffect(()=>{if(!d)return;function r(f){f.key==="Escape"&&U(f)}return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[U,d]);const Ye=So(Ro(h),Te,a);!w&&w!==0&&(d=!1);const pe=n.useRef(),Je=r=>{const f=h.props;f.onMouseMove&&f.onMouseMove(r),I={x:r.clientX,y:r.clientY},pe.current&&pe.current.update()},P={},le=typeof w=="string";k?(P.title=!d&&le&&!B?w:null,P["aria-describedby"]=d?ne:null):(P["aria-label"]=le?w:null,P["aria-labelledby"]=d&&!le?ne:null);const p={...P,...ye,...h.props,className:qe(ye.className,h.props.className),onTouchStart:Ie,ref:Ye,...re?{onMouseMove:Je}:{}},O={};oe||(p.onTouchStart=Ke,p.onTouchEnd=Xe),B||(p.onMouseOver=J(V,p.onMouseOver),p.onMouseLeave=J(ie,p.onMouseLeave),se||(O.onMouseOver=V,O.onMouseLeave=ie)),Z||(p.onFocus=J(Le,p.onFocus),p.onBlur=J(Oe,p.onBlur),se||(O.onFocus=Le,O.onBlur=Oe));const g={...i,isRtl:Ue,arrow:u,disableInteractive:se,placement:ge,PopperComponentProp:be,touch:z.current},L=typeof m.popper=="function"?m.popper(g):m.popper,Qe=n.useMemo(()=>{let r=[{name:"arrow",enabled:!!te,options:{element:te,padding:4}}];return T.popperOptions?.modifiers&&(r=r.concat(T.popperOptions.modifiers)),L?.popperOptions?.modifiers&&(r=r.concat(L.popperOptions.modifiers)),{...T.popperOptions,...L?.popperOptions,modifiers:r}},[te,T.popperOptions,L?.popperOptions]),ce=qo(g),Ze=typeof m.transition=="function"?m.transition(g):m.transition,G={slots:{popper:y.Popper,transition:y.Transition??_e,tooltip:y.Tooltip,arrow:y.Arrow,...ze},slotProps:{arrow:m.arrow??x.arrow,popper:{...T,...L??x.popper},tooltip:m.tooltip??x.tooltip,transition:{...He,...Ze??x.transition}}},[eo,oo]=K("popper",{elementType:Fo,externalForwardedProps:G,ownerState:g,className:qe(ce.popper,T?.className)}),[ro,to]=K("transition",{elementType:Po,externalForwardedProps:G,ownerState:g}),[so,ao]=K("tooltip",{elementType:jo,className:ce.tooltip,externalForwardedProps:G,ownerState:g}),[no,io]=K("arrow",{elementType:Eo,className:ce.arrow,externalForwardedProps:G,ownerState:g,ref:Ve});return t.jsxs(n.Fragment,{children:[n.cloneElement(h,p),t.jsx(eo,{as:be??De,placement:ge,anchorEl:re?{getBoundingClientRect:()=>({top:I.y,left:I.x,right:I.x,bottom:I.y,width:0,height:0})}:S,popperRef:pe,open:S?d:!1,id:ne,transition:!0,...O,...oo,popperOptions:Qe,children:({TransitionProps:r})=>t.jsx(ro,{timeout:xe.transitions.duration.shorter,...r,...to,children:t.jsxs(so,{...ao,children:[w,u?t.jsx(no,{...io}):null]})})})]})}),Wo="(optional)",Mo="More information";function Ao(){const[e,o]=n.useState(!1),a=n.useCallback(()=>o(!0),[]),i=n.useCallback(()=>o(!1),[]),u=n.useCallback(()=>o(c=>!c),[]);return{open:e,handleOpen:a,handleClose:i,handleToggle:u}}const Do=b(bo)(({theme:e})=>({fontSize:e.typography.body2.fontSize,lineHeight:e.typography.body2.lineHeight,fontWeight:e.typography.fontWeightMedium,color:e.palette.text.primary,whiteSpace:"normal",wordBreak:"break-word",overflow:"visible",display:"inline-flex",alignItems:"center",flexWrap:"wrap",gap:e.spacing(.5),position:"static",transform:"none",transformOrigin:"unset",[e.breakpoints.down("sm")]:{fontSize:e.typography.body2.fontSize}})),$o=b("span")(({theme:e})=>({color:e.palette.error.main,marginInlineStart:e.spacing(.25),fontWeight:e.typography.fontWeightBold})),ko=b(xo)(({theme:e})=>({fontSize:e.typography.caption.fontSize,lineHeight:e.typography.caption.lineHeight,color:e.palette.text.secondary,marginInlineStart:e.spacing(.5),fontStyle:"italic"})),Bo=b("span")(({theme:e})=>({display:"inline-flex",alignItems:"center",marginInlineStart:e.spacing(.25),flexShrink:0}));function No(e,o){return{showRequired:!!e,showOptional:!!o&&!e}}const l=uo.forwardRef(({htmlFor:e,children:o,required:a,optional:i,error:u,disabled:c,tooltip:v,...y},x)=>{const{showRequired:k,showOptional:Z}=No(a,i),{open:B,handleOpen:ee,handleClose:oe,handleToggle:N}=Ao();return t.jsxs(Do,{ref:x,htmlFor:e,error:u,disabled:c,"aria-required":k?!0:void 0,required:!1,...y,children:[o,k&&t.jsx($o,{"aria-hidden":"true",children:" *"}),Z&&t.jsxs(ko,{component:"span",variant:"caption",children:[" ",Wo]}),v&&t.jsx(Bo,{children:t.jsx(Co,{title:v,open:B,onClose:oe,onOpen:ee,arrow:!0,enterTouchDelay:0,leaveTouchDelay:3e3,children:t.jsx(Oo,{size:"small","aria-label":Mo,onClick:N,type:"button",tabIndex:0,sx:{p:.25},disabled:!1,children:t.jsx(mo,{fontSize:"inherit",sx:{fontSize:"1rem"}})})})})]})});l.displayName="Label";l.__docgenInfo={description:"",methods:[],displayName:"Label",props:{htmlFor:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},optional:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const zo={title:"Atoms/Label",component:l,decorators:[e=>t.jsxs(We,{theme:Ae(),children:[t.jsx(Me,{}),t.jsx(Q,{sx:{p:3,maxWidth:480},children:t.jsx(e,{})})]})],argTypes:{children:{control:"text",description:"Visible label text"},htmlFor:{control:"text",description:"ID of the associated input element"},required:{control:"boolean"},optional:{control:"boolean"},error:{control:"boolean"},disabled:{control:"boolean"},tooltip:{control:"text",description:"Tooltip content (shows info icon when provided)"}},args:{htmlFor:"demo-input",children:"Email address",required:!1,optional:!1,error:!1,disabled:!1,tooltip:""}},q={},F={args:{required:!0}},j={args:{optional:!0}},E={args:{error:!0}},C={args:{disabled:!0}},W={args:{tooltip:"We'll only use this to send your receipt."}},M={args:{children:"Work email",required:!0,error:!0,tooltip:"A valid email is required to proceed."}},A={render:e=>t.jsxs(Q,{sx:{display:"flex",flexDirection:"column",gap:.5},children:[t.jsx(l,{...e}),t.jsx(yo,{id:e.htmlFor,size:"small",placeholder:"you@example.com",error:e.error,disabled:e.disabled,inputProps:{"aria-required":e.required},fullWidth:!0})]}),args:{children:"Email address",htmlFor:"demo-input",required:!0}},D={decorators:[e=>t.jsxs(We,{theme:Ae(),children:[t.jsx(Me,{}),t.jsx(Q,{sx:{width:320,border:"1px dashed grey",p:1},children:t.jsx(e,{})})]})],args:{children:"A very long label that might wrap on narrow screens",required:!0,tooltip:"Helpful tooltip content for this field"}},$={render:()=>t.jsxs(Q,{sx:{display:"flex",flexDirection:"column",gap:2},children:[t.jsx(l,{htmlFor:"s1",children:"Default"}),t.jsx(l,{htmlFor:"s2",required:!0,children:"Required"}),t.jsx(l,{htmlFor:"s3",optional:!0,children:"Optional"}),t.jsx(l,{htmlFor:"s4",error:!0,children:"Error"}),t.jsx(l,{htmlFor:"s5",disabled:!0,children:"Disabled"}),t.jsx(l,{htmlFor:"s6",tooltip:"Extra context here",children:"With Tooltip"}),t.jsx(l,{htmlFor:"s7",required:!0,error:!0,tooltip:"Fix this field",children:"Required + Error + Tooltip"})]})};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:"{}",...q.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...F.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    optional: true
  }
}`,...j.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    error: true
  }
}`,...E.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...C.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    tooltip: "We'll only use this to send your receipt."
  }
}`,...W.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Work email',
    required: true,
    error: true,
    tooltip: 'A valid email is required to proceed.'
  }
}`,...M.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 0.5
  }}>
      <Label {...args} />
      <TextField id={args.htmlFor} size="small" placeholder="you@example.com" error={args.error} disabled={args.disabled} inputProps={{
      'aria-required': args.required
    }} fullWidth />
    </Box>,
  args: {
    children: 'Email address',
    htmlFor: 'demo-input',
    required: true
  }
}`,...A.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        <Box sx={{
      width: 320,
      border: '1px dashed grey',
      p: 1
    }}>
          <Story />
        </Box>
      </ThemeProvider>],
  args: {
    children: 'A very long label that might wrap on narrow screens',
    required: true,
    tooltip: 'Helpful tooltip content for this field'
  }
}`,...D.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  }}>
      <Label htmlFor="s1">Default</Label>

      <Label htmlFor="s2" required>
        Required
      </Label>

      <Label htmlFor="s3" optional>
        Optional
      </Label>

      <Label htmlFor="s4" error>
        Error
      </Label>

      <Label htmlFor="s5" disabled>
        Disabled
      </Label>

      <Label htmlFor="s6" tooltip="Extra context here">
        With Tooltip
      </Label>

      <Label htmlFor="s7" required error tooltip="Fix this field">
        Required + Error + Tooltip
      </Label>
    </Box>
}`,...$.parameters?.docs?.source}}};const _o=["Default","Required","Optional","Error","Disabled","WithTooltip","RequiredErrorWithTooltip","PairedWithInput","NarrowViewport","AllStates"],nr=Object.freeze(Object.defineProperty({__proto__:null,AllStates:$,Default:q,Disabled:C,Error:E,NarrowViewport:D,Optional:j,PairedWithInput:A,Required:F,RequiredErrorWithTooltip:M,WithTooltip:W,__namedExportsOrder:_o,default:zo},Symbol.toStringTag,{value:"Module"}));export{$ as A,q as D,E,nr as L,D as N,j as O,A as P,F as R,W,C as a};
