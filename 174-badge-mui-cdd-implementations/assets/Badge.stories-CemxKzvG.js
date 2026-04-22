import{r as P,u as lr,c as cr,j as o,a as i}from"./iframe-DefNHfu_.js";import{a as gr,g as dr,c as pr,s as $,m as mr,b as ur}from"./useForkRef-sw_jmWpJ.js";import{u as E}from"./useSlot-CrATRl50.js";import{B as q}from"./Box-D5Fre9EC.js";const hr=99,fr={vertical:"top",horizontal:"right"};function Z(a){const r=P.useRef({});return P.useEffect(()=>{r.current=a}),r.current}function br(a){const{badgeContent:r,invisible:e=!1,max:s=99,showZero:c=!1}=a,p=Z({badgeContent:r,max:s});let g=e;e===!1&&r===0&&!c&&(g=!0);const{badgeContent:d,max:m=s}=g?p:a,B=d&&Number(d)>m?`${m}+`:d;return{badgeContent:d,invisible:g,max:m,displayValue:B}}function vr(a){return dr("MuiBadge",a)}const t=gr("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),j=10,z=4,xr=a=>{const{color:r,anchorOrigin:e,invisible:s,overlap:c,variant:p,classes:g={}}=a,d={root:["root"],badge:["badge",p,s&&"invisible",`anchorOrigin${i(e.vertical)}${i(e.horizontal)}`,`anchorOrigin${i(e.vertical)}${i(e.horizontal)}${i(c)}`,`overlap${i(c)}`,r!=="default"&&`color${i(r)}`]};return pr(d,vr,g)},yr=$("span",{name:"MuiBadge",slot:"Root"})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),Or=$("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(a,r)=>{const{ownerState:e}=a;return[r.badge,r[e.variant],r[`anchorOrigin${i(e.anchorOrigin.vertical)}${i(e.anchorOrigin.horizontal)}${i(e.overlap)}`],e.color!=="default"&&r[`color${i(e.color)}`],e.invisible&&r.invisible]}})(mr(({theme:a})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:a.typography.fontFamily,fontWeight:a.typography.fontWeightMedium,fontSize:a.typography.pxToRem(12),minWidth:j*2,lineHeight:1,padding:"0 6px",height:j*2,borderRadius:j,zIndex:1,transition:a.transitions.create("transform",{easing:a.transitions.easing.easeInOut,duration:a.transitions.duration.enteringScreen}),variants:[...Object.entries(a.palette).filter(ur(["contrastText"])).map(([r])=>({props:{color:r},style:{backgroundColor:(a.vars||a).palette[r].main,color:(a.vars||a).palette[r].contrastText}})),{props:{variant:"dot"},style:{borderRadius:z,height:z*2,minWidth:z*2,padding:0}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="rectangular",style:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${t.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="rectangular",style:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${t.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="rectangular",style:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${t.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="rectangular",style:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${t.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="circular",style:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${t.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="circular",style:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${t.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="circular",style:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${t.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="circular",style:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${t.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:{invisible:!0},style:{transition:a.transitions.create("transform",{easing:a.transitions.easing.easeInOut,duration:a.transitions.duration.leavingScreen})}}]})));function U(a){return{vertical:a?.vertical??"top",horizontal:a?.horizontal??"right"}}const Cr=P.forwardRef(function(r,e){const s=lr({props:r,name:"MuiBadge"}),{anchorOrigin:c,className:p,classes:g,component:d,components:m={},componentsProps:B={},children:k,overlap:S="rectangular",color:V="default",invisible:H=!1,max:G=99,badgeContent:W,slots:D,slotProps:_,showZero:A=!1,variant:T="standard",...X}=s,{badgeContent:L,invisible:J,max:K,displayValue:Q}=br({max:G,invisible:H,badgeContent:W,showZero:A}),Y=Z({anchorOrigin:U(c),color:V,overlap:S,variant:T,badgeContent:W}),F=J||L==null&&T!=="dot",{color:rr=V,overlap:ar=S,anchorOrigin:or,variant:M=T}=F?Y:s,er=U(or),w=M!=="dot"?Q:void 0,R={...s,badgeContent:L,invisible:F,max:K,displayValue:w,showZero:A,anchorOrigin:er,color:rr,overlap:ar,variant:M},I=xr(R),N={slots:{root:D?.root??m.Root,badge:D?.badge??m.Badge},slotProps:{root:_?.root??B.root,badge:_?.badge??B.badge}},[nr,tr]=E("root",{elementType:yr,externalForwardedProps:{...N,...X},ownerState:R,className:cr(I.root,p),ref:e,additionalProps:{as:d}}),[ir,sr]=E("badge",{elementType:Or,externalForwardedProps:N,ownerState:R,className:I.badge});return o.jsxs(nr,{...tr,children:[k,o.jsx(ir,{...sr,children:w})]})}),Br=$(Cr)(({theme:a})=>({display:"inline-flex",maxWidth:"100%",verticalAlign:"middle",[`& .${t.badge}`]:{minWidth:a.spacing(2.25),height:a.spacing(2.25),paddingInline:a.spacing(.75),borderRadius:a.spacing(1.125),fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(11),fontWeight:600,lineHeight:1,whiteSpace:"nowrap",boxSizing:"border-box",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},[`& .${t.dot}`]:{minWidth:a.spacing(1),height:a.spacing(1),borderRadius:"50%",padding:0},[a.breakpoints.down("sm")]:{[`& .${t.badge}`]:{minWidth:a.spacing(2),height:a.spacing(2),paddingInline:a.spacing(.5),fontSize:a.typography.pxToRem(10),maxWidth:a.spacing(8)}}}));function l({anchorOrigin:a=fr,color:r="default",invisible:e=!1,max:s=hr,showZero:c=!1,variant:p="standard",...g}){return o.jsx(Br,{anchorOrigin:a,color:r,invisible:e,max:s,showZero:c,variant:p,...g})}l.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{anchorOrigin:{defaultValue:{value:`{
  vertical: 'top',
  horizontal: 'right',
}`,computed:!1},required:!1},color:{defaultValue:{value:"'default'",computed:!1},required:!1},invisible:{defaultValue:{value:"false",computed:!1},required:!1},max:{defaultValue:{value:"99",computed:!1},required:!1},showZero:{defaultValue:{value:"false",computed:!1},required:!1},variant:{defaultValue:{value:"'standard'",computed:!1},required:!1}}};const Tr={title:"Component Catalog/Badges",component:l,parameters:{layout:"centered"},argTypes:{color:{control:"select",options:["default","primary","secondary","error","info","success","warning"]},variant:{control:"select",options:["standard","dot"]},anchorOrigin:{control:"object"},badgeContent:{control:"text"},showZero:{control:"boolean"},invisible:{control:"boolean"},max:{control:"number"},children:{control:!1}}},n=()=>o.jsx(q,{sx:{width:40,height:40,borderRadius:1,bgcolor:"grey.300"}}),u={args:{badgeContent:8,color:"primary",children:o.jsx(n,{})}},h={args:{badgeContent:120,max:99,color:"primary",children:o.jsx(n,{})}},f={args:{variant:"dot",color:"success",children:o.jsx(n,{})}},b={render:()=>o.jsxs(q,{sx:{display:"flex",gap:3,flexWrap:"wrap"},children:[o.jsx(l,{badgeContent:1,color:"default",children:o.jsx(n,{})}),o.jsx(l,{badgeContent:2,color:"primary",children:o.jsx(n,{})}),o.jsx(l,{badgeContent:3,color:"secondary",children:o.jsx(n,{})}),o.jsx(l,{badgeContent:4,color:"error",children:o.jsx(n,{})}),o.jsx(l,{badgeContent:5,color:"info",children:o.jsx(n,{})}),o.jsx(l,{badgeContent:6,color:"success",children:o.jsx(n,{})}),o.jsx(l,{badgeContent:7,color:"warning",children:o.jsx(n,{})})]})},v={args:{badgeContent:12,color:"primary",anchorOrigin:{vertical:"top",horizontal:"left"},children:o.jsx(n,{})}},x={args:{badgeContent:12,color:"primary",anchorOrigin:{vertical:"top",horizontal:"right"},children:o.jsx(n,{})}},y={args:{badgeContent:12,color:"primary",anchorOrigin:{vertical:"bottom",horizontal:"left"},children:o.jsx(n,{})}},O={args:{badgeContent:12,color:"primary",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:o.jsx(n,{})}},C={args:{badgeContent:4,color:"primary",variant:"standard",max:99,showZero:!1,invisible:!1,anchorOrigin:{vertical:"top",horizontal:"right"},children:o.jsx(n,{})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    badgeContent: 8,
    color: 'primary',
    children: <Target />
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    badgeContent: 120,
    max: 99,
    color: 'primary',
    children: <Target />
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dot',
    color: 'success',
    children: <Target />
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    gap: 3,
    flexWrap: 'wrap'
  }}>
      <Badge badgeContent={1} color="default">
        <Target />
      </Badge>
      <Badge badgeContent={2} color="primary">
        <Target />
      </Badge>
      <Badge badgeContent={3} color="secondary">
        <Target />
      </Badge>
      <Badge badgeContent={4} color="error">
        <Target />
      </Badge>
      <Badge badgeContent={5} color="info">
        <Target />
      </Badge>
      <Badge badgeContent={6} color="success">
        <Target />
      </Badge>
      <Badge badgeContent={7} color="warning">
        <Target />
      </Badge>
    </Box>
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    badgeContent: 12,
    color: 'primary',
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    children: <Target />
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    badgeContent: 12,
    color: 'primary',
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    children: <Target />
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    badgeContent: 12,
    color: 'primary',
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    children: <Target />
  }
}`,...y.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    badgeContent: 12,
    color: 'primary',
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    children: <Target />
  }
}`,...O.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    badgeContent: 4,
    color: 'primary',
    variant: 'standard',
    max: 99,
    showZero: false,
    invisible: false,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    children: <Target />
  }
}`,...C.parameters?.docs?.source}}};const Rr=["Numeric","MaxOverflow","DotVariant","ColorVariants","TopLeft","TopRight","BottomLeft","BottomRight","Playground"],Sr=Object.freeze(Object.defineProperty({__proto__:null,BottomLeft:y,BottomRight:O,ColorVariants:b,DotVariant:f,MaxOverflow:h,Numeric:u,Playground:C,TopLeft:v,TopRight:x,__namedExportsOrder:Rr,default:Tr},Symbol.toStringTag,{value:"Module"}));export{Sr as B,f as D,h as M,u as N};
