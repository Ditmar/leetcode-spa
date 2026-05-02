import{r as l,j as e}from"./iframe-4w-3TVAp.js";import{s as B}from"./memoTheme-DjUmDoH6.js";import{B as O}from"./Box-Beoa0j-u.js";import{I as _}from"./IconButton-C-4kfoaF.js";import{a as k}from"./Popover-BPJM4BlA.js";import{T as s}from"./Typography-CCrdMwq_.js";import{B as z}from"./Button-CADVZksD.js";const L="bottom",i=1,q=r=>{const[o,t]=r.split("-");return o==="top"?{anchorOrigin:{vertical:"top",horizontal:t==="start"?"left":t==="end"?"right":"center"},transformOrigin:{vertical:"bottom",horizontal:t==="start"?"left":t==="end"?"right":"center"}}:o==="bottom"?{anchorOrigin:{vertical:"bottom",horizontal:t==="start"?"left":t==="end"?"right":"center"},transformOrigin:{vertical:"top",horizontal:t==="start"?"left":t==="end"?"right":"center"}}:o==="left"?{anchorOrigin:{vertical:t==="start"?"top":t==="end"?"bottom":"center",horizontal:"left"},transformOrigin:{vertical:t==="start"?"top":t==="end"?"bottom":"center",horizontal:"right"}}:{anchorOrigin:{vertical:t==="start"?"top":t==="end"?"bottom":"center",horizontal:"right"},transformOrigin:{vertical:t==="start"?"top":t==="end"?"bottom":"center",horizontal:"left"}}},j=r=>{const[o,t]=r.split("-"),a=t?`-${t}`:"";return o==="top"?`bottom${a}`:o==="bottom"?`top${a}`:o==="left"?`right${a}`:`left${a}`},F=({placement:r,anchorRect:o,popoverWidth:t,popoverHeight:a,viewportWidth:h,viewportHeight:u})=>{const p=r.split("-")[0],c=o.top>=a,n=u-o.bottom>=a,m=o.left>=t,g=h-o.right>=t;return p==="top"&&!c&&n||p==="bottom"&&!n&&c||p==="left"&&!m&&g||p==="right"&&!g&&m?j(r):r},I=r=>{const o=r.split("-")[0];return o==="top"?"bottom":o==="bottom"?"top":o==="left"?"right":"left"};function M({placement:r=L,onOpenChange:o}){const[t,a]=l.useState(null),[h,u]=l.useState(r),p=l.useRef(null),c=!!t,n=l.useCallback(g=>{a(g.currentTarget),o?.(!0)},[o]),m=l.useCallback(()=>{a(null),o?.(!1)},[o]);return l.useEffect(()=>{u(r)},[r]),l.useEffect(()=>{if(!t||!c)return;const g=window.requestAnimationFrame(()=>{const E=t.getBoundingClientRect(),A=p.current?.getBoundingClientRect(),$=F({placement:r,anchorRect:E,popoverWidth:A?.width??0,popoverHeight:A?.height??0,viewportWidth:window.innerWidth,viewportHeight:window.innerHeight});u($)});return()=>{window.cancelAnimationFrame(g)}},[t,c,r]),{anchorEl:t,open:c,activePlacement:h,contentRef:p,handleOpen:n,handleClose:m}}const N=B(O)(()=>({display:"inline-flex"})),H=B(O)(({theme:r})=>({position:"relative",maxWidth:r.spacing(40),padding:r.spacing(2),borderRadius:"var(--radius)",backgroundColor:"var(--popover)",color:"var(--popover-foreground)",border:"1px solid var(--border)",boxShadow:"var(--shadow-md)",boxSizing:"border-box",[r.breakpoints.down("sm")]:{width:`calc(100vw - ${r.spacing(4)})`,maxWidth:`calc(100vw - ${r.spacing(4)})`}})),V=B(O,{shouldForwardProp:r=>r!=="arrowSide"})(({theme:r,arrowSide:o})=>({position:"absolute",width:r.spacing(i),height:r.spacing(i),backgroundColor:"var(--popover)",border:"1px solid var(--border)",transform:"rotate(45deg)",boxSizing:"border-box",...o==="top"&&{top:`calc(-1 * ${r.spacing(i/2)})`,left:"50%",marginLeft:`calc(-1 * ${r.spacing(i/2)})`},...o==="bottom"&&{bottom:`calc(-1 * ${r.spacing(i/2)})`,left:"50%",marginLeft:`calc(-1 * ${r.spacing(i/2)})`},...o==="left"&&{left:`calc(-1 * ${r.spacing(i/2)})`,top:"50%",marginTop:`calc(-1 * ${r.spacing(i/2)})`},...o==="right"&&{right:`calc(-1 * ${r.spacing(i/2)})`,top:"50%",marginTop:`calc(-1 * ${r.spacing(i/2)})`}}));B(_)(({theme:r})=>({position:"absolute",top:r.spacing(.5),right:r.spacing(.5),color:"var(--popover-foreground)"}));function C({trigger:r,children:o,placement:t,showArrow:a=!1,onOpenChange:h,...u}){const{anchorEl:p,open:c,activePlacement:n,contentRef:m,handleOpen:g,handleClose:E}=M({placement:t,onOpenChange:h}),{anchorOrigin:A,transformOrigin:$}=l.useMemo(()=>q(n),[n]),W=l.useMemo(()=>I(n),[n]);return e.jsxs(e.Fragment,{children:[e.jsx(N,{onClick:g,"aria-haspopup":"dialog","aria-expanded":c,"data-testid":"popover-trigger",children:r}),e.jsx(k,{open:c,anchorEl:p,onClose:E,anchorOrigin:A,transformOrigin:$,slotProps:{paper:{sx:R=>({[R.breakpoints.down("sm")]:{width:`calc(100vw - ${R.spacing(4)})`,maxWidth:`calc(100vw - ${R.spacing(4)})`,top:"50% !important",left:"50% !important",transform:"translate(-50%, -50%) !important"}})}},...u,children:e.jsxs(H,{ref:m,role:"dialog","data-testid":"popover-content","data-placement":n,children:[a&&e.jsx(V,{arrowSide:W,"data-testid":"popover-arrow"}),o]})})]})}C.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{trigger:{required:!0,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:`| 'top'
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
| 'right-end'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left-end'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right-end'"}]},description:""},showArrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const d=B(z)(({theme:r})=>({textTransform:"none",color:"var(--foreground)",borderColor:"var(--border)",backgroundColor:"var(--background)",borderRadius:r.spacing(1),padding:`${r.spacing(1)} ${r.spacing(2)}`,fontWeight:r.typography.fontWeightMedium,"&:hover":{borderColor:"var(--ring)",backgroundColor:"var(--background)"}})),D=r=>e.jsx(O,{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100%",children:e.jsx(r,{})}),U={title:"component-catalog/Popover",component:C,decorators:[D]},v={args:{trigger:e.jsx(d,{variant:"outlined",children:"Open Popover"}),children:e.jsxs(O,{children:[e.jsx(s,{variant:"subtitle1",children:"Popover title"}),e.jsx(s,{variant:"body2",children:"This is custom content inside the popover."})]}),placement:"bottom",showArrow:!0}},y={args:{trigger:e.jsx(d,{variant:"outlined",children:"Open Top"}),children:e.jsx(s,{variant:"body2",children:"Popover displayed on top."}),placement:"top",showArrow:!0}},f={args:{trigger:e.jsx(d,{variant:"outlined",children:"Open Bottom Start"}),children:e.jsx(s,{variant:"body2",children:"Popover aligned to bottom-start."}),placement:"bottom-start",showArrow:!0}},b={args:{trigger:e.jsx(d,{variant:"outlined",children:"Open Bottom End"}),children:e.jsx(s,{variant:"body2",children:"Popover aligned to bottom-end."}),placement:"bottom-end",showArrow:!0}},w={args:{trigger:e.jsx(d,{variant:"outlined",children:"Open Left"}),children:e.jsx(s,{variant:"body2",children:"Popover displayed on the left."}),placement:"left",showArrow:!0}},T={args:{trigger:e.jsx(d,{variant:"outlined",children:"Open Right"}),children:e.jsx(s,{variant:"body2",children:"Popover displayed on the right."}),placement:"right",showArrow:!0}},P={args:{trigger:e.jsx(d,{variant:"outlined",children:"Open Top Start"}),children:e.jsx(s,{variant:"body2",children:"Popover aligned to top-start."}),placement:"top-start",showArrow:!0}},x={args:{trigger:e.jsx(d,{variant:"outlined",children:"Open Top End"}),children:e.jsx(s,{variant:"body2",children:"Popover aligned to top-end."}),placement:"top-end",showArrow:!0}},S={args:{trigger:e.jsx(d,{variant:"outlined",children:"Open Without Arrow"}),children:e.jsx(s,{variant:"body2",children:"Popover without arrow indicator."}),placement:"bottom",showArrow:!1}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const Z=["Primary","TopPlacement","BottomStartPlacement","BottomEndPlacement","LeftPlacement","RightPlacement","TopStartPlacement","TopEndPlacement","WithoutArrow"],tr=Object.freeze(Object.defineProperty({__proto__:null,BottomEndPlacement:b,BottomStartPlacement:f,LeftPlacement:w,Primary:v,RightPlacement:T,TopEndPlacement:x,TopPlacement:y,TopStartPlacement:P,WithoutArrow:S,__namedExportsOrder:Z,default:U},Symbol.toStringTag,{value:"Module"}));export{tr as P,v as a};
