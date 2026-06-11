import{G as c,B as e}from"./iframe-DQfbnjEu.js";import{e as B}from"./memoTheme-DROHF_5Y.js";import{B as O}from"./Box-CFuaWRG7.js";import{I as _}from"./IconButton-BQssOHgW.js";import{P as k}from"./Popover-DTf0eqRn.js";import{T as s}from"./Typography-B8K2Egb3.js";import{B as z}from"./Button-CBLJd6T9.js";const L="bottom",i=1,q=r=>{const[t,o]=r.split("-");return t==="top"?{anchorOrigin:{vertical:"top",horizontal:o==="start"?"left":o==="end"?"right":"center"},transformOrigin:{vertical:"bottom",horizontal:o==="start"?"left":o==="end"?"right":"center"}}:t==="bottom"?{anchorOrigin:{vertical:"bottom",horizontal:o==="start"?"left":o==="end"?"right":"center"},transformOrigin:{vertical:"top",horizontal:o==="start"?"left":o==="end"?"right":"center"}}:t==="left"?{anchorOrigin:{vertical:o==="start"?"top":o==="end"?"bottom":"center",horizontal:"left"},transformOrigin:{vertical:o==="start"?"top":o==="end"?"bottom":"center",horizontal:"right"}}:{anchorOrigin:{vertical:o==="start"?"top":o==="end"?"bottom":"center",horizontal:"right"},transformOrigin:{vertical:o==="start"?"top":o==="end"?"bottom":"center",horizontal:"left"}}},j=r=>{const[t,o]=r.split("-"),a=o?`-${o}`:"";return t==="top"?`bottom${a}`:t==="bottom"?`top${a}`:t==="left"?`right${a}`:`left${a}`},F=({placement:r,anchorRect:t,popoverWidth:o,popoverHeight:a,viewportWidth:h,viewportHeight:u})=>{const p=r.split("-")[0],l=t.top>=a,n=u-t.bottom>=a,m=t.left>=o,g=h-t.right>=o;return p==="top"&&!l&&n||p==="bottom"&&!n&&l||p==="left"&&!m&&g||p==="right"&&!g&&m?j(r):r},I=r=>{const t=r.split("-")[0];return t==="top"?"bottom":t==="bottom"?"top":t==="left"?"right":"left"};function M({placement:r=L,onOpenChange:t}){const[o,a]=c.useState(null),[h,u]=c.useState(r),p=c.useRef(null),l=!!o,n=c.useCallback(g=>{a(g.currentTarget),t&&t(!0)},[t]),m=c.useCallback(()=>{a(null),t&&t(!1)},[t]);return c.useEffect(()=>{u(r)},[r]),c.useEffect(()=>{if(!o||!l)return;const g=window.requestAnimationFrame(()=>{const E=o.getBoundingClientRect(),A=p.current?.getBoundingClientRect(),$=F({placement:r,anchorRect:E,popoverWidth:A?.width??0,popoverHeight:A?.height??0,viewportWidth:window.innerWidth,viewportHeight:window.innerHeight});u($)});return()=>{window.cancelAnimationFrame(g)}},[o,l,r]),{anchorEl:o,open:l,activePlacement:h,contentRef:p,handleOpen:n,handleClose:m}}const N=B(O)(()=>({display:"inline-flex"})),H=B(O)(({theme:r})=>({position:"relative",maxWidth:r.spacing(40),padding:r.spacing(2),borderRadius:"var(--radius)",backgroundColor:"var(--popover)",color:"var(--popover-foreground)",border:"1px solid var(--border)",boxShadow:"var(--shadow-md)",boxSizing:"border-box",[r.breakpoints.down("sm")]:{width:`calc(100vw - ${r.spacing(4)})`,maxWidth:`calc(100vw - ${r.spacing(4)})`}})),V=B(O,{shouldForwardProp:r=>r!=="arrowSide"})(({theme:r,arrowSide:t})=>({position:"absolute",width:r.spacing(i),height:r.spacing(i),backgroundColor:"var(--popover)",border:"1px solid var(--border)",transform:"rotate(45deg)",boxSizing:"border-box",...t==="top"&&{top:`calc(-1 * ${r.spacing(i/2)})`,left:"50%",marginLeft:`calc(-1 * ${r.spacing(i/2)})`},...t==="bottom"&&{bottom:`calc(-1 * ${r.spacing(i/2)})`,left:"50%",marginLeft:`calc(-1 * ${r.spacing(i/2)})`},...t==="left"&&{left:`calc(-1 * ${r.spacing(i/2)})`,top:"50%",marginTop:`calc(-1 * ${r.spacing(i/2)})`},...t==="right"&&{right:`calc(-1 * ${r.spacing(i/2)})`,top:"50%",marginTop:`calc(-1 * ${r.spacing(i/2)})`}}));B(_)(({theme:r})=>({position:"absolute",top:r.spacing(.5),right:r.spacing(.5),color:"var(--popover-foreground)"}));function C({trigger:r,children:t,placement:o,showArrow:a=!1,onOpenChange:h,...u}){const{anchorEl:p,open:l,activePlacement:n,contentRef:m,handleOpen:g,handleClose:E}=M({placement:o,onOpenChange:h}),{anchorOrigin:A,transformOrigin:$}=c.useMemo(()=>q(n),[n]),W=c.useMemo(()=>I(n),[n]);return r==null?null:e.jsxs(e.Fragment,{children:[e.jsx(N,{onClick:g,"aria-haspopup":"dialog","aria-expanded":l,"data-testid":"popover-trigger",children:r}),e.jsx(k,{open:l,anchorEl:p,onClose:E,anchorOrigin:A,transformOrigin:$,slotProps:{paper:{sx:R=>({[R.breakpoints.down("sm")]:{width:`calc(100vw - ${R.spacing(4)})`,maxWidth:`calc(100vw - ${R.spacing(4)})`,top:"50% !important",left:"50% !important",transform:"translate(-50%, -50%) !important"}})}},...u,children:e.jsxs(H,{ref:m,role:"dialog","data-testid":"popover-content","data-placement":n,children:[a&&e.jsx(V,{arrowSide:W,"data-testid":"popover-arrow"}),t]})})]})}C.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{trigger:{required:!0,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:`| 'top'
| 'top-start'
| 'top-end'
| 'bottom'
| 'bottom-start'
| 'bottom-end'
| 'left'
| 'left-start'
| 'left-end'
| 'right'
| 'right-start'
| 'right-end'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left-end'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right-end'"}]},description:""},showArrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const d=B(z)(({theme:r})=>({textTransform:"none",color:"var(--foreground)",borderColor:"var(--border)",backgroundColor:"var(--background)",borderRadius:r.spacing(1),padding:`${r.spacing(1)} ${r.spacing(2)}`,fontWeight:r.typography.fontWeightMedium,"&:hover":{borderColor:"var(--ring)",backgroundColor:"var(--background)"}})),D=r=>e.jsx(O,{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100%",children:e.jsx(r,{})}),G={title:"component-catalog/Popover",component:C,decorators:[D]},v={args:{trigger:e.jsx(d,{variant:"outlined",children:"Open Popover"}),children:e.jsxs(O,{children:[e.jsx(s,{variant:"subtitle1",children:"Popover title"}),e.jsx(s,{variant:"body2",children:"This is custom content inside the popover."})]}),placement:"bottom",showArrow:!0}},y={args:{trigger:e.jsx(d,{variant:"outlined",children:"Open Top"}),children:e.jsx(s,{variant:"body2",children:"Popover displayed on top."}),placement:"top",showArrow:!0}},f={args:{trigger:e.jsx(d,{variant:"outlined",children:"Open Bottom Start"}),children:e.jsx(s,{variant:"body2",children:"Popover aligned to bottom-start."}),placement:"bottom-start",showArrow:!0}},b={args:{trigger:e.jsx(d,{variant:"outlined",children:"Open Bottom End"}),children:e.jsx(s,{variant:"body2",children:"Popover aligned to bottom-end."}),placement:"bottom-end",showArrow:!0}},w={args:{trigger:e.jsx(d,{variant:"outlined",children:"Open Left"}),children:e.jsx(s,{variant:"body2",children:"Popover displayed on the left."}),placement:"left",showArrow:!0}},T={args:{trigger:e.jsx(d,{variant:"outlined",children:"Open Right"}),children:e.jsx(s,{variant:"body2",children:"Popover displayed on the right."}),placement:"right",showArrow:!0}},P={args:{trigger:e.jsx(d,{variant:"outlined",children:"Open Top Start"}),children:e.jsx(s,{variant:"body2",children:"Popover aligned to top-start."}),placement:"top-start",showArrow:!0}},x={args:{trigger:e.jsx(d,{variant:"outlined",children:"Open Top End"}),children:e.jsx(s,{variant:"body2",children:"Popover aligned to top-end."}),placement:"top-end",showArrow:!0}},S={args:{trigger:e.jsx(d,{variant:"outlined",children:"Open Without Arrow"}),children:e.jsx(s,{variant:"body2",children:"Popover without arrow indicator."}),placement:"bottom",showArrow:!1}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <StoryTriggerButton variant="outlined">Open Popover</StoryTriggerButton>,
    children: <Box>
        <Typography variant="subtitle1">Popover title</Typography>
        <Typography variant="body2">This is custom content inside the popover.</Typography>
      </Box>,
    placement: 'bottom',
    showArrow: true
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <StoryTriggerButton variant="outlined">Open Top</StoryTriggerButton>,
    children: <Typography variant="body2">Popover displayed on top.</Typography>,
    placement: 'top',
    showArrow: true
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <StoryTriggerButton variant="outlined">Open Bottom Start</StoryTriggerButton>,
    children: <Typography variant="body2">Popover aligned to bottom-start.</Typography>,
    placement: 'bottom-start',
    showArrow: true
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <StoryTriggerButton variant="outlined">Open Bottom End</StoryTriggerButton>,
    children: <Typography variant="body2">Popover aligned to bottom-end.</Typography>,
    placement: 'bottom-end',
    showArrow: true
  }
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <StoryTriggerButton variant="outlined">Open Left</StoryTriggerButton>,
    children: <Typography variant="body2">Popover displayed on the left.</Typography>,
    placement: 'left',
    showArrow: true
  }
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <StoryTriggerButton variant="outlined">Open Right</StoryTriggerButton>,
    children: <Typography variant="body2">Popover displayed on the right.</Typography>,
    placement: 'right',
    showArrow: true
  }
}`,...T.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <StoryTriggerButton variant="outlined">Open Top Start</StoryTriggerButton>,
    children: <Typography variant="body2">Popover aligned to top-start.</Typography>,
    placement: 'top-start',
    showArrow: true
  }
}`,...P.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <StoryTriggerButton variant="outlined">Open Top End</StoryTriggerButton>,
    children: <Typography variant="body2">Popover aligned to top-end.</Typography>,
    placement: 'top-end',
    showArrow: true
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <StoryTriggerButton variant="outlined">Open Without Arrow</StoryTriggerButton>,
    children: <Typography variant="body2">Popover without arrow indicator.</Typography>,
    placement: 'bottom',
    showArrow: false
  }
}`,...S.parameters?.docs?.source}}};const U=["Primary","TopPlacement","BottomStartPlacement","BottomEndPlacement","LeftPlacement","RightPlacement","TopStartPlacement","TopEndPlacement","WithoutArrow"],tr=Object.freeze(Object.defineProperty({__proto__:null,BottomEndPlacement:b,BottomStartPlacement:f,LeftPlacement:w,Primary:v,RightPlacement:T,TopEndPlacement:x,TopPlacement:y,TopStartPlacement:P,WithoutArrow:S,__namedExportsOrder:U,default:G},Symbol.toStringTag,{value:"Module"}));export{tr as P,v as a};
