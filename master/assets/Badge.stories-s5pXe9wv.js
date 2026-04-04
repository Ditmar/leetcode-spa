import{r as F,u as be,c as he,j as n,a as d}from"./iframe-51bG1J4E.js";import{a as ye,g as xe,s as $,c as Oe,m as Ce,b as Be}from"./useForkRef-Cz2Jq56s.js";import{u as Y}from"./useSlot-DiM3ZzO5.js";import{B as K}from"./Box-ssYb-gwE.js";const Q=99,ee={vertical:"top",horizontal:"right"},re="default",ae="standalone",Te=(e,r,a)=>{if(a!=="dot")return typeof e=="number"&&e>r?`${r}+`:e},Se=(e,r,a,o)=>a?!1:o==="dot"?!0:!(e===0&&!r||e==null||e===""),Re=({anchorOrigin:e=ee,badgeContent:r,display:a=ae,invisible:o=!1,max:i=Q,showZero:g=!1,tone:l=re,variant:t="standard"})=>{const p=a==="standalone"?Te(r,i,t):r,m=a==="standalone"?Se(r,g,o,t):!1;return{resolvedAnchorOrigin:e,resolvedContent:p,resolvedTone:l,shouldRenderStandalone:m}};function ne(e){const r=F.useRef({});return F.useEffect(()=>{r.current=e}),r.current}function je(e){const{badgeContent:r,invisible:a=!1,max:o=99,showZero:i=!1}=e,g=ne({badgeContent:r,max:o});let l=a;a===!1&&r===0&&!i&&(l=!0);const{badgeContent:t,max:p=o}=l?g:e,m=t&&Number(t)>p?`${p}+`:t;return{badgeContent:t,invisible:l,max:p,displayValue:m}}function ze(e){return xe("MuiBadge",e)}const c=ye("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),W=10,k=4,Pe=e=>{const{color:r,anchorOrigin:a,invisible:o,overlap:i,variant:g,classes:l={}}=e,t={root:["root"],badge:["badge",g,o&&"invisible",`anchorOrigin${d(a.vertical)}${d(a.horizontal)}`,`anchorOrigin${d(a.vertical)}${d(a.horizontal)}${d(i)}`,`overlap${d(i)}`,r!=="default"&&`color${d(r)}`]};return Oe(t,ze,l)},De=$("span",{name:"MuiBadge",slot:"Root"})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),$e=$("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.badge,r[a.variant],r[`anchorOrigin${d(a.anchorOrigin.vertical)}${d(a.anchorOrigin.horizontal)}${d(a.overlap)}`],a.color!=="default"&&r[`color${d(a.color)}`],a.invisible&&r.invisible]}})(Ce(({theme:e})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(12),minWidth:W*2,lineHeight:1,padding:"0 6px",height:W*2,borderRadius:W,zIndex:1,transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.enteringScreen}),variants:[...Object.entries(e.palette).filter(Be(["contrastText"])).map(([r])=>({props:{color:r},style:{backgroundColor:(e.vars||e).palette[r].main,color:(e.vars||e).palette[r].contrastText}})),{props:{variant:"dot"},style:{borderRadius:k,height:k*2,minWidth:k*2,padding:0}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="rectangular",style:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${c.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="rectangular",style:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${c.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="rectangular",style:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${c.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="rectangular",style:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${c.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="circular",style:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${c.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="circular",style:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${c.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="circular",style:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${c.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="circular",style:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${c.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:{invisible:!0},style:{transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.leavingScreen})}}]})));function J(e){return{vertical:e?.vertical??"top",horizontal:e?.horizontal??"right"}}const we=F.forwardRef(function(r,a){const o=be({props:r,name:"MuiBadge"}),{anchorOrigin:i,className:g,classes:l,component:t,components:p={},componentsProps:m={},children:w,overlap:P="rectangular",color:D="default",invisible:A=!1,max:I=99,badgeContent:L,slots:E,slotProps:q,showZero:M=!1,variant:_="standard",...oe}=o,{badgeContent:N,invisible:te,max:se,displayValue:ie}=je({max:I,invisible:A,badgeContent:L,showZero:M}),le=ne({anchorOrigin:J(i),color:D,overlap:P,variant:_,badgeContent:L}),U=te||N==null&&_!=="dot",{color:ce=D,overlap:de=P,anchorOrigin:ge,variant:H=_}=U?le:o,pe=J(ge),G=H!=="dot"?ie:void 0,V={...o,badgeContent:N,invisible:U,max:se,displayValue:G,showZero:M,anchorOrigin:pe,color:ce,overlap:de,variant:H},Z=Pe(V),X={slots:{root:E?.root??p.Root,badge:E?.badge??p.Badge},slotProps:{root:q?.root??m.root,badge:q?.badge??m.badge}},[ue,me]=Y("root",{elementType:De,externalForwardedProps:{...X,...oe},ownerState:V,className:he(Z.root,g),ref:a,additionalProps:{as:t}}),[fe,ve]=Y("badge",{elementType:$e,externalForwardedProps:X,ownerState:V,className:Z.badge});return n.jsxs(ue,{...me,children:[w,n.jsx(fe,{...ve,children:G})]})}),Ae=e=>{switch(e){case"secondary":return{backgroundColor:"var(--secondary)",color:"var(--secondary-foreground)",border:"1px solid var(--secondary)"};case"outline":return{backgroundColor:"var(--background)",color:"var(--primary)",border:"1px solid var(--border)"};case"destructive":return{backgroundColor:"var(--destructive)",color:"var(--destructive-foreground)",border:"1px solid var(--destructive)"};case"success":return{backgroundColor:"var(--accent)",color:"var(--chart-3)",border:"1px solid var(--accent)"};case"info":return{backgroundColor:"var(--accent)",color:"var(--chart-3)",border:"1px solid var(--accent)"};case"warning":return{backgroundColor:"var(--secondary)",color:"var(--chart-3)",border:"1px solid var(--secondary)"};case"default":default:return{backgroundColor:"var(--primary)",color:"var(--primary-foreground)",border:"1px solid var(--primary)"}}},Ie=$(we)(({theme:e})=>({[`& .${c.badge}`]:{minWidth:e.spacing(2.25),height:e.spacing(2.25),paddingInline:e.spacing(.75),borderRadius:e.spacing(1.125),fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(11),fontWeight:600,lineHeight:1,whiteSpace:"nowrap",boxSizing:"border-box"},[`& .${c.dot}`]:{minWidth:e.spacing(1),height:e.spacing(1),borderRadius:"50%",padding:0},[e.breakpoints.down("sm")]:{[`& .${c.badge}`]:{minWidth:e.spacing(2),height:e.spacing(2),paddingInline:e.spacing(.5),fontSize:e.typography.pxToRem(10)}}})),_e=$("span",{shouldForwardProp:e=>e!=="tone"})(({theme:e,tone:r})=>({display:"inline-flex",alignItems:"center",justifyContent:"center",minHeight:e.spacing(4),paddingInline:e.spacing(2),borderRadius:"var(--radius-lg)",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(16),fontWeight:600,lineHeight:1.2,letterSpacing:0,whiteSpace:"nowrap",boxSizing:"border-box",...Ae(r),[e.breakpoints.down("sm")]:{minHeight:e.spacing(3.5),paddingInline:e.spacing(1.5),borderRadius:"var(--radius-md)",fontSize:e.typography.pxToRem(14)}}));function u({badgeContent:e,children:r,color:a="default",display:o=ae,max:i=Q,showZero:g=!1,invisible:l=!1,variant:t="standard",tone:p=re,anchorOrigin:m=ee,...w}){const{resolvedAnchorOrigin:P,resolvedContent:D,resolvedTone:A,shouldRenderStandalone:I}=Re({anchorOrigin:m,badgeContent:e,display:o,invisible:l,max:i,showZero:g,tone:p,variant:t});return o==="standalone"?I?n.jsx(_e,{tone:A,children:D}):null:n.jsx(Ie,{badgeContent:e,color:a,max:i,showZero:g,invisible:l,variant:t,anchorOrigin:P,...w,children:r})}u.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{badgeContent:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},color:{required:!1,tsType:{name:"union",raw:`| 'default'
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
}`,computed:!1}}},composes:["Omit"]};const Ve={title:"Component Catalog/Badges",component:u,parameters:{layout:"centered"}},s=()=>n.jsx(K,{sx:{width:40,height:40,borderRadius:1,bgcolor:"grey.300"}}),f={args:{display:"standalone",badgeContent:"Default",tone:"default"}},v={args:{display:"standalone",badgeContent:"Secondary",tone:"secondary"}},b={args:{display:"standalone",badgeContent:"Outline",tone:"outline"}},h={args:{display:"standalone",badgeContent:"Destructive",tone:"destructive"}},y={args:{display:"standalone",badgeContent:"Success",tone:"success"}},x={args:{display:"standalone",badgeContent:"Info",tone:"info"}},O={args:{display:"standalone",badgeContent:"Warning",tone:"warning"}},C={args:{badgeContent:8,children:n.jsx(s,{})}},B={args:{badgeContent:120,max:99,color:"error",children:n.jsx(s,{})}},T={args:{variant:"dot",color:"success",children:n.jsx(s,{})}},S={args:{badgeContent:4,anchorOrigin:{vertical:"top",horizontal:"left"},children:n.jsx(s,{})}},R={args:{badgeContent:7,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:n.jsx(s,{})}},j={args:{badgeContent:3,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:n.jsx(s,{})}},z={render:()=>n.jsxs(K,{display:"flex",gap:2,flexWrap:"wrap",children:[n.jsx(u,{badgeContent:4,color:"default",children:n.jsx(s,{})}),n.jsx(u,{badgeContent:4,color:"primary",children:n.jsx(s,{})}),n.jsx(u,{badgeContent:4,color:"secondary",children:n.jsx(s,{})}),n.jsx(u,{badgeContent:4,color:"error",children:n.jsx(s,{})}),n.jsx(u,{badgeContent:4,color:"info",children:n.jsx(s,{})}),n.jsx(u,{badgeContent:4,color:"success",children:n.jsx(s,{})}),n.jsx(u,{badgeContent:4,color:"warning",children:n.jsx(s,{})})]})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    display: 'standalone',
    badgeContent: 'Default',
    tone: 'default'
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    display: 'standalone',
    badgeContent: 'Secondary',
    tone: 'secondary'
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    display: 'standalone',
    badgeContent: 'Outline',
    tone: 'outline'
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    display: 'standalone',
    badgeContent: 'Destructive',
    tone: 'destructive'
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    display: 'standalone',
    badgeContent: 'Success',
    tone: 'success'
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    display: 'standalone',
    badgeContent: 'Info',
    tone: 'info'
  }
}`,...x.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    display: 'standalone',
    badgeContent: 'Warning',
    tone: 'warning'
  }
}`,...O.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    badgeContent: 8,
    children: <Target />
  }
}`,...C.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    badgeContent: 120,
    max: 99,
    color: 'error',
    children: <Target />
  }
}`,...B.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dot',
    color: 'success',
    children: <Target />
  }
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    badgeContent: 4,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    children: <Target />
  }
}`,...S.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    badgeContent: 7,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    children: <Target />
  }
}`,...R.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    badgeContent: 3,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    children: <Target />
  }
}`,...j.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap={2} flexWrap="wrap">
      <Badge badgeContent={4} color="default">
        <Target />
      </Badge>
      <Badge badgeContent={4} color="primary">
        <Target />
      </Badge>
      <Badge badgeContent={4} color="secondary">
        <Target />
      </Badge>
      <Badge badgeContent={4} color="error">
        <Target />
      </Badge>
      <Badge badgeContent={4} color="info">
        <Target />
      </Badge>
      <Badge badgeContent={4} color="success">
        <Target />
      </Badge>
      <Badge badgeContent={4} color="warning">
        <Target />
      </Badge>
    </Box>
}`,...z.parameters?.docs?.source}}};const We=["Default","Secondary","Outline","Destructive","Success","Info","Warning","Numeric","MaxOverflow","DotVariant","TopLeft","BottomRight","BottomLeft","MuiColorVariants"],qe=Object.freeze(Object.defineProperty({__proto__:null,BottomLeft:j,BottomRight:R,Default:f,Destructive:h,DotVariant:T,Info:x,MaxOverflow:B,MuiColorVariants:z,Numeric:C,Outline:b,Secondary:v,Success:y,TopLeft:S,Warning:O,__namedExportsOrder:We,default:Ve},Symbol.toStringTag,{value:"Module"}));export{qe as B};
