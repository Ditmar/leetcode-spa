import{r as L,u as vr,c as br,j as s,a as c}from"./iframe-S1sGaIcm.js";import{a as yr,g as Or,c as xr,s as D,m as Cr,b as Tr}from"./useForkRef-CDag4Q3f.js";import{u as Y}from"./useSlot-BQXr0m4C.js";import{B as Sr}from"./Box-D2kHAPlM.js";const K=99,Q={vertical:"top",horizontal:"right"},rr="default",ar="standalone",Br=(r,a,e)=>{if(e!=="dot")return typeof r=="number"&&r>a?`${a}+`:r},Rr=(r,a,e,n)=>e?!1:n==="dot"?!0:!(r===0&&!a||r==null||r===""),zr=({anchorOrigin:r=Q,badgeContent:a,display:e=ar,invisible:n=!1,max:t=K,showZero:d=!1,tone:i=rr,variant:o="standard"})=>{const p=e==="standalone"?Br(a,t,o):typeof a=="number"&&a>t?`${t}+`:a,g=e==="standalone"?Rr(a,d,n,o):!1;return{resolvedAnchorOrigin:r,resolvedContent:p,resolvedTone:i,shouldRenderStandalone:g}};function er(r){const a=L.useRef({});return L.useEffect(()=>{a.current=r}),a.current}function Pr(r){const{badgeContent:a,invisible:e=!1,max:n=99,showZero:t=!1}=r,d=er({badgeContent:a,max:n});let i=e;e===!1&&a===0&&!t&&(i=!0);const{badgeContent:o,max:p=n}=i?d:r,g=o&&Number(o)>p?`${p}+`:o;return{badgeContent:o,invisible:i,max:p,displayValue:g}}function wr(r){return Or("MuiBadge",r)}const l=yr("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),k=10,F=4,$r=r=>{const{color:a,anchorOrigin:e,invisible:n,overlap:t,variant:d,classes:i={}}=r,o={root:["root"],badge:["badge",d,n&&"invisible",`anchorOrigin${c(e.vertical)}${c(e.horizontal)}`,`anchorOrigin${c(e.vertical)}${c(e.horizontal)}${c(t)}`,`overlap${c(t)}`,a!=="default"&&`color${c(a)}`]};return xr(o,wr,i)},Dr=D("span",{name:"MuiBadge",slot:"Root"})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),jr=D("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.badge,a[e.variant],a[`anchorOrigin${c(e.anchorOrigin.vertical)}${c(e.anchorOrigin.horizontal)}${c(e.overlap)}`],e.color!=="default"&&a[`color${c(e.color)}`],e.invisible&&a.invisible]}})(Cr(({theme:r})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:r.typography.fontFamily,fontWeight:r.typography.fontWeightMedium,fontSize:r.typography.pxToRem(12),minWidth:k*2,lineHeight:1,padding:"0 6px",height:k*2,borderRadius:k,zIndex:1,transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.enteringScreen}),variants:[...Object.entries(r.palette).filter(Tr(["contrastText"])).map(([a])=>({props:{color:a},style:{backgroundColor:(r.vars||r).palette[a].main,color:(r.vars||r).palette[a].contrastText}})),{props:{variant:"dot"},style:{borderRadius:F,height:F*2,minWidth:F*2,padding:0}},{props:({ownerState:a})=>a.anchorOrigin.vertical==="top"&&a.anchorOrigin.horizontal==="right"&&a.overlap==="rectangular",style:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${l.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:a})=>a.anchorOrigin.vertical==="bottom"&&a.anchorOrigin.horizontal==="right"&&a.overlap==="rectangular",style:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${l.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:a})=>a.anchorOrigin.vertical==="top"&&a.anchorOrigin.horizontal==="left"&&a.overlap==="rectangular",style:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${l.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:a})=>a.anchorOrigin.vertical==="bottom"&&a.anchorOrigin.horizontal==="left"&&a.overlap==="rectangular",style:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${l.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:({ownerState:a})=>a.anchorOrigin.vertical==="top"&&a.anchorOrigin.horizontal==="right"&&a.overlap==="circular",style:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${l.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:a})=>a.anchorOrigin.vertical==="bottom"&&a.anchorOrigin.horizontal==="right"&&a.overlap==="circular",style:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${l.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:a})=>a.anchorOrigin.vertical==="top"&&a.anchorOrigin.horizontal==="left"&&a.overlap==="circular",style:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${l.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:a})=>a.anchorOrigin.vertical==="bottom"&&a.anchorOrigin.horizontal==="left"&&a.overlap==="circular",style:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${l.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:{invisible:!0},style:{transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.leavingScreen})}}]})));function J(r){return{vertical:r?.vertical??"top",horizontal:r?.horizontal??"right"}}const Ar=L.forwardRef(function(a,e){const n=vr({props:a,name:"MuiBadge"}),{anchorOrigin:t,className:d,classes:i,component:o,components:p={},componentsProps:g={},children:j,overlap:$="rectangular",color:u="default",invisible:A=!1,max:W=99,badgeContent:V,slots:E,slotProps:q,showZero:N=!1,variant:I="standard",...or}=n,{badgeContent:M,invisible:tr,max:sr,displayValue:ir}=Pr({max:W,invisible:A,badgeContent:V,showZero:N}),lr=er({anchorOrigin:J(t),color:u,overlap:$,variant:I,badgeContent:V}),U=tr||M==null&&I!=="dot",{color:cr=u,overlap:dr=$,anchorOrigin:pr,variant:H=I}=U?lr:n,gr=J(pr),Z=H!=="dot"?ir:void 0,_={...n,badgeContent:M,invisible:U,max:sr,displayValue:Z,showZero:N,anchorOrigin:gr,color:cr,overlap:dr,variant:H},G=$r(_),X={slots:{root:E?.root??p.Root,badge:E?.badge??p.Badge},slotProps:{root:q?.root??g.root,badge:q?.badge??g.badge}},[ur,mr]=Y("root",{elementType:Dr,externalForwardedProps:{...X,...or},ownerState:_,className:br(G.root,d),ref:e,additionalProps:{as:o}}),[fr,hr]=Y("badge",{elementType:jr,externalForwardedProps:X,ownerState:_,className:G.badge});return s.jsxs(ur,{...mr,children:[j,s.jsx(fr,{...hr,children:Z})]})}),Wr=r=>{switch(r){case"secondary":return{backgroundColor:"var(--secondaryy)",color:"var(--secondaryy-foreground)",border:"1px solid var(--secondaryy)"};case"outline":return{backgroundColor:"var(--background)",color:"var(--primary)",border:"1px solid var(--border)"};case"destructive":return{backgroundColor:"var(--destructive)",color:"var(--destructive-foreground)",border:"1px solid var(--destructive)"};case"success":return{backgroundColor:"var(--success)",color:"var(--success-foreground)",border:"1px solid var(--success)"};case"info":return{backgroundColor:"var(--info)",color:"var(--info-foreground)",border:"1px solid var(--info)"};case"warning":return{backgroundColor:"var(--warning)",color:"var(--warning-foreground)",border:"1px solid var(--warning)"};case"default":default:return{backgroundColor:"var(--primary)",color:"var(--primary-foreground)",border:"1px solid var(--primary)"}}},Ir=D(Ar)(({theme:r})=>({display:"inline-flex",maxWidth:"100%",verticalAlign:"middle",[`& .${l.badge}`]:{minWidth:r.spacing(2.25),height:r.spacing(2.25),paddingInline:r.spacing(.75),borderRadius:r.spacing(1.125),fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(11),fontWeight:600,lineHeight:1,whiteSpace:"nowrap",boxSizing:"border-box",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},[`& .${l.dot}`]:{minWidth:r.spacing(1),height:r.spacing(1),borderRadius:"50%",padding:0},[r.breakpoints.down("sm")]:{[`& .${l.badge}`]:{minWidth:r.spacing(2),height:r.spacing(2),paddingInline:r.spacing(.5),fontSize:r.typography.pxToRem(10),maxWidth:r.spacing(8)}}})),_r=D("span",{shouldForwardProp:r=>r!=="tone"})(({theme:r,tone:a})=>({display:"inline-flex",alignItems:"center",justifyContent:"center",minHeight:r.spacing(4),maxWidth:"100%",paddingInline:r.spacing(2),borderRadius:"var(--radius-lg)",fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(16),fontWeight:600,lineHeight:1.2,letterSpacing:0,whiteSpace:"nowrap",boxSizing:"border-box",overflow:"hidden",textOverflow:"ellipsis",...Wr(a),[r.breakpoints.down("sm")]:{minHeight:r.spacing(3.5),maxWidth:"100%",paddingInline:r.spacing(1.5),borderRadius:"var(--radius-md)",fontSize:r.typography.pxToRem(14)}}));function nr({badgeContent:r,children:a,color:e="default",display:n=ar,max:t=K,showZero:d=!1,invisible:i=!1,variant:o="standard",tone:p=rr,anchorOrigin:g=Q,...j}){const{resolvedAnchorOrigin:$,resolvedContent:u,resolvedTone:A,shouldRenderStandalone:W}=zr({anchorOrigin:g,badgeContent:r,display:n,invisible:i,max:t,showZero:d,tone:p,variant:o});return n==="standalone"?W?s.jsx(_r,{tone:A,role:"status","aria-label":o==="dot"?"Badge status indicator":`Badge content: ${String(u)}`,title:typeof u=="string"?u:void 0,children:u}):null:s.jsx(Ir,{badgeContent:u,color:e,max:t,showZero:d,invisible:i,variant:o,anchorOrigin:$,...j,children:a})}nr.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{badgeContent:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},color:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'primary'
| 'secondary'
| 'error'
| 'info'
| 'success'
| 'warning'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},tone:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'secondary'
| 'outline'
| 'destructive'
| 'success'
| 'info'
| 'warning'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'destructive'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"99",computed:!1}},showZero:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},invisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'standard' | 'dot'",elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'dot'"}]},description:"",defaultValue:{value:"'standard'",computed:!1}},display:{required:!1,tsType:{name:"union",raw:"'attached' | 'standalone'",elements:[{name:"literal",value:"'attached'"},{name:"literal",value:"'standalone'"}]},description:"",defaultValue:{value:"'standalone'",computed:!1}},anchorOrigin:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'right';
}`,signature:{properties:[{key:"vertical",value:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}],required:!0}},{key:"horizontal",value:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!0}}]}},description:"",defaultValue:{value:`{
  vertical: 'top',
  horizontal: 'right',
}`,computed:!1}}},composes:["Omit"]};const kr={title:"Component Catalog/Badges",component:nr,parameters:{layout:"centered"},argTypes:{color:{control:"select",options:["default","primary","secondary","error","info","success","warning"]},tone:{control:"select",options:["default","secondary","outline","destructive","success","info","warning"]},variant:{control:"select",options:["standard","dot"]},display:{control:"select",options:["attached","standalone"]},anchorOrigin:{control:"object"},badgeContent:{control:"text"},showZero:{control:"boolean"},invisible:{control:"boolean"},max:{control:"number"},children:{control:!1}}},m=()=>s.jsx(Sr,{sx:{width:40,height:40,borderRadius:1,bgcolor:"grey.300"}}),f={args:{display:"standalone",badgeContent:"Default",tone:"default"}},h={args:{display:"standalone",badgeContent:"Secondary",tone:"secondary"}},v={args:{display:"standalone",badgeContent:"Outline",tone:"outline"}},b={args:{display:"standalone",badgeContent:"Destructive",tone:"destructive"}},y={args:{display:"standalone",badgeContent:"Success",tone:"success"}},O={args:{display:"standalone",badgeContent:"Info",tone:"info"}},x={args:{display:"standalone",badgeContent:"Warning",tone:"warning"}},C={args:{display:"attached",badgeContent:8,children:s.jsx(m,{})}},T={args:{display:"attached",badgeContent:120,max:99,color:"default",children:s.jsx(m,{})}},S={args:{display:"attached",variant:"dot",color:"success",children:s.jsx(m,{})}},B={args:{display:"attached",badgeContent:12,color:"primary",anchorOrigin:{vertical:"top",horizontal:"right"},children:s.jsx(m,{})}},R={args:{display:"attached",badgeContent:12,color:"primary",anchorOrigin:{vertical:"top",horizontal:"left"},children:s.jsx(m,{})}},z={args:{display:"attached",badgeContent:12,color:"primary",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:s.jsx(m,{})}},P={args:{display:"attached",badgeContent:12,color:"primary",anchorOrigin:{vertical:"bottom",horizontal:"left"},children:s.jsx(m,{})}},w={args:{display:"attached",badgeContent:4,color:"primary",variant:"standard",max:99,showZero:!1,invisible:!1,anchorOrigin:{vertical:"top",horizontal:"right"},children:s.jsx(m,{})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    display: 'standalone',
    badgeContent: 'Default',
    tone: 'default'
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    display: 'standalone',
    badgeContent: 'Secondary',
    tone: 'secondary'
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    display: 'standalone',
    badgeContent: 'Outline',
    tone: 'outline'
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    display: 'standalone',
    badgeContent: 'Destructive',
    tone: 'destructive'
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    display: 'standalone',
    badgeContent: 'Success',
    tone: 'success'
  }
}`,...y.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    display: 'standalone',
    badgeContent: 'Info',
    tone: 'info'
  }
}`,...O.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    display: 'standalone',
    badgeContent: 'Warning',
    tone: 'warning'
  }
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    display: 'attached',
    badgeContent: 8,
    children: <Target />
  }
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    display: 'attached',
    badgeContent: 120,
    max: 99,
    color: 'default',
    children: <Target />
  }
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    display: 'attached',
    variant: 'dot',
    color: 'success',
    children: <Target />
  }
}`,...S.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    display: 'attached',
    badgeContent: 12,
    color: 'primary',
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    children: <Target />
  }
}`,...B.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    display: 'attached',
    badgeContent: 12,
    color: 'primary',
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    children: <Target />
  }
}`,...R.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    display: 'attached',
    badgeContent: 12,
    color: 'primary',
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    children: <Target />
  }
}`,...z.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    display: 'attached',
    badgeContent: 12,
    color: 'primary',
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    children: <Target />
  }
}`,...P.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    display: 'attached',
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
}`,...w.parameters?.docs?.source}}};const Fr=["Default","Secondary","Outline","Destructive","Success","Info","Warning","Numeric","MaxOverflow","DotVariant","TopRight","TopLeft","BottomRight","BottomLeft","Playground"],Nr=Object.freeze(Object.defineProperty({__proto__:null,BottomLeft:P,BottomRight:z,Default:f,Destructive:b,DotVariant:S,Info:O,MaxOverflow:T,Numeric:C,Outline:v,Playground:w,Secondary:h,Success:y,TopLeft:R,TopRight:B,Warning:x,__namedExportsOrder:Fr,default:kr},Symbol.toStringTag,{value:"Module"}));export{Nr as B};
