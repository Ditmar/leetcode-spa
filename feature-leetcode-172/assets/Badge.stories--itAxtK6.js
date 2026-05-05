import{r as $,b as cr,c as gr,j as a,k as l}from"./iframe-DBh7H_pS.js";import{a as dr,g as pr,s as D}from"./styled-DWJ_81DA.js";import{c as mr,m as hr}from"./memoTheme-Dvg-hM6y.js";import{c as fr}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{u as k}from"./useSlot-Cq6EWyAP.js";import{B as i}from"./Box-DR9V9TS2.js";function Z(o){const r=$.useRef({});return $.useEffect(()=>{r.current=o}),r.current}function ur(o){const{badgeContent:r,invisible:e=!1,max:c=99,showZero:g=!1}=o,m=Z({badgeContent:r,max:c});let d=e;e===!1&&r===0&&!g&&(d=!0);const{badgeContent:p,max:h=c}=d?m:o,T=p&&Number(p)>h?`${h}+`:p;return{badgeContent:p,invisible:d,max:h,displayValue:T}}function xr(o){return pr("MuiBadge",o)}const s=dr("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),P=10,S=4,br=o=>{const{color:r,anchorOrigin:e,invisible:c,overlap:g,variant:m,classes:d={}}=o,p={root:["root"],badge:["badge",m,c&&"invisible",`anchorOrigin${l(e.vertical)}${l(e.horizontal)}`,`anchorOrigin${l(e.vertical)}${l(e.horizontal)}${l(g)}`,`overlap${l(g)}`,r!=="default"&&`color${l(r)}`]};return mr(p,xr,d)},vr=D("span",{name:"MuiBadge",slot:"Root"})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),yr=D("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(o,r)=>{const{ownerState:e}=o;return[r.badge,r[e.variant],r[`anchorOrigin${l(e.anchorOrigin.vertical)}${l(e.anchorOrigin.horizontal)}${l(e.overlap)}`],e.color!=="default"&&r[`color${l(e.color)}`],e.invisible&&r.invisible]}})(hr(({theme:o})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(12),minWidth:P*2,lineHeight:1,padding:"0 6px",height:P*2,borderRadius:P,zIndex:1,transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.enteringScreen}),variants:[...Object.entries(o.palette).filter(fr(["contrastText"])).map(([r])=>({props:{color:r},style:{backgroundColor:(o.vars||o).palette[r].main,color:(o.vars||o).palette[r].contrastText}})),{props:{variant:"dot"},style:{borderRadius:S,height:S*2,minWidth:S*2,padding:0}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="rectangular",style:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${s.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="rectangular",style:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${s.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="rectangular",style:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${s.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="rectangular",style:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${s.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="circular",style:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${s.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="circular",style:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${s.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="circular",style:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${s.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="circular",style:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${s.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:{invisible:!0},style:{transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.leavingScreen})}}]})));function q(o){return{vertical:o?.vertical??"top",horizontal:o?.horizontal??"right"}}const Br=$.forwardRef(function(r,e){const c=cr({props:r,name:"MuiBadge"}),{anchorOrigin:g,className:m,classes:d,component:p,components:h={},componentsProps:T={},children:H,overlap:I="rectangular",color:L="default",invisible:G=!1,max:X=99,badgeContent:V,slots:W,slotProps:_,showZero:A=!1,variant:z="standard",...J}=c,{badgeContent:E,invisible:K,max:Q,displayValue:Y}=ur({max:X,invisible:G,badgeContent:V,showZero:A}),rr=Z({anchorOrigin:q(g),color:L,overlap:I,variant:z,badgeContent:V}),F=K||E==null&&z!=="dot",{color:or=L,overlap:ar=I,anchorOrigin:er,variant:w=z}=F?rr:c,nr=q(er),M=w!=="dot"?Y:void 0,R={...c,badgeContent:E,invisible:F,max:Q,displayValue:M,showZero:A,anchorOrigin:nr,color:or,overlap:ar,variant:w},N=br(R),U={slots:{root:W?.root??h.Root,badge:W?.badge??h.Badge},slotProps:{root:_?.root??T.root,badge:_?.badge??T.badge}},[tr,ir]=k("root",{elementType:vr,externalForwardedProps:{...U,...J},ownerState:R,className:gr(N.root,m),ref:e,additionalProps:{as:p}}),[sr,lr]=k("badge",{elementType:yr,externalForwardedProps:U,ownerState:R,className:N.badge});return a.jsxs(tr,{...ir,children:[H,a.jsx(sr,{...lr,children:M})]})}),Or=99,Cr={vertical:"top",horizontal:"right"},jr=D(Br)(({theme:o})=>({display:"inline-flex",maxWidth:"100%",verticalAlign:"middle",[`& .${s.badge}`]:{minWidth:o.spacing(2.25),height:o.spacing(2.25),paddingInline:o.spacing(.75),borderRadius:o.spacing(1.125),fontFamily:o.typography.fontFamily,fontSize:o.typography.pxToRem(11),fontWeight:600,lineHeight:1,whiteSpace:"nowrap",boxSizing:"border-box",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},[`& .${s.dot}`]:{minWidth:o.spacing(1),height:o.spacing(1),borderRadius:"50%",padding:0},[o.breakpoints.down("sm")]:{[`& .${s.badge}`]:{minWidth:o.spacing(2),height:o.spacing(2),paddingInline:o.spacing(.5),fontSize:o.typography.pxToRem(10),maxWidth:o.spacing(8)}}}));function t({anchorOrigin:o=Cr,color:r="default",invisible:e=!1,max:c=Or,showZero:g=!1,variant:m="standard",...d}){return a.jsx(jr,{anchorOrigin:o,color:r,invisible:e,max:c,showZero:g,variant:m,...d})}t.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{anchorOrigin:{defaultValue:{value:`{
  vertical: 'top',
  horizontal: 'right',
}`,computed:!1},required:!1},color:{defaultValue:{value:"'default'",computed:!1},required:!1},invisible:{defaultValue:{value:"false",computed:!1},required:!1},max:{defaultValue:{value:"99",computed:!1},required:!1},showZero:{defaultValue:{value:"false",computed:!1},required:!1},variant:{defaultValue:{value:"'standard'",computed:!1},required:!1}}};const Tr={title:"Component Catalog/Badges",component:t,parameters:{layout:"centered"},argTypes:{color:{control:"select",options:["default","primary","secondary","error","info","success","warning"]},variant:{control:"select",options:["standard","dot"]},anchorOrigin:{control:"object"},badgeContent:{control:"text"},showZero:{control:"boolean"},invisible:{control:"boolean"},max:{control:"number"},children:{control:!1}}},n=()=>a.jsx(i,{sx:{width:40,height:40,borderRadius:1,bgcolor:"grey.300"}}),f={args:{badgeContent:8,color:"primary",children:a.jsx(n,{})}},u={args:{badgeContent:120,max:99,color:"primary",children:a.jsx(n,{})}},x={args:{variant:"dot",color:"success",children:a.jsx(n,{})}},b={render:()=>a.jsxs(i,{sx:{display:"flex",gap:3,flexWrap:"wrap"},children:[a.jsx(t,{badgeContent:1,color:"default",children:a.jsx(n,{})}),a.jsx(t,{badgeContent:2,color:"primary",children:a.jsx(n,{})}),a.jsx(t,{badgeContent:3,color:"secondary",children:a.jsx(n,{})}),a.jsx(t,{badgeContent:4,color:"error",children:a.jsx(n,{})}),a.jsx(t,{badgeContent:5,color:"info",children:a.jsx(n,{})}),a.jsx(t,{badgeContent:6,color:"success",children:a.jsx(n,{})}),a.jsx(t,{badgeContent:7,color:"warning",children:a.jsx(n,{})})]})},v={args:{badgeContent:12,color:"primary",anchorOrigin:{vertical:"top",horizontal:"left"},children:a.jsx(n,{})}},y={args:{badgeContent:12,color:"primary",anchorOrigin:{vertical:"top",horizontal:"right"},children:a.jsx(n,{})}},B={args:{badgeContent:12,color:"primary",anchorOrigin:{vertical:"bottom",horizontal:"left"},children:a.jsx(n,{})}},O={args:{badgeContent:12,color:"primary",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:a.jsx(n,{})}},C={render:()=>a.jsxs(i,{sx:{display:"grid",gridTemplateColumns:"repeat(2, minmax(120px, 1fr))",gap:3},children:[a.jsxs(i,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:1},children:[a.jsx(i,{component:"span",sx:{fontSize:14,color:"text.secondary"},children:"Top Left"}),a.jsx(t,{badgeContent:12,color:"primary",anchorOrigin:{vertical:"top",horizontal:"left"},children:a.jsx(n,{})})]}),a.jsxs(i,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:1},children:[a.jsx(i,{component:"span",sx:{fontSize:14,color:"text.secondary"},children:"Top Right"}),a.jsx(t,{badgeContent:12,color:"primary",anchorOrigin:{vertical:"top",horizontal:"right"},children:a.jsx(n,{})})]}),a.jsxs(i,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:1},children:[a.jsx(i,{component:"span",sx:{fontSize:14,color:"text.secondary"},children:"Bottom Left"}),a.jsx(t,{badgeContent:12,color:"primary",anchorOrigin:{vertical:"bottom",horizontal:"left"},children:a.jsx(n,{})})]}),a.jsxs(i,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:1},children:[a.jsx(i,{component:"span",sx:{fontSize:14,color:"text.secondary"},children:"Bottom Right"}),a.jsx(t,{badgeContent:12,color:"primary",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:a.jsx(n,{})})]})]})},j={args:{badgeContent:4,color:"primary",variant:"standard",max:99,showZero:!1,invisible:!1,anchorOrigin:{vertical:"top",horizontal:"right"},children:a.jsx(n,{})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    badgeContent: 8,
    color: 'primary',
    children: <Target />
  }
}`,...f.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    badgeContent: 120,
    max: 99,
    color: 'primary',
    children: <Target />
  }
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dot',
    color: 'success',
    children: <Target />
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    badgeContent: 12,
    color: 'primary',
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    children: <Target />
  }
}`,...y.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    badgeContent: 12,
    color: 'primary',
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    children: <Target />
  }
}`,...B.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
  render: () => <Box sx={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(120px, 1fr))',
    gap: 3
  }}>
      <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 1
    }}>
        <Box component="span" sx={{
        fontSize: 14,
        color: 'text.secondary'
      }}>
          Top Left
        </Box>
        <Badge badgeContent={12} color="primary" anchorOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}>
          <Target />
        </Badge>
      </Box>
      <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 1
    }}>
        <Box component="span" sx={{
        fontSize: 14,
        color: 'text.secondary'
      }}>
          Top Right
        </Box>
        <Badge badgeContent={12} color="primary" anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}>
          <Target />
        </Badge>
      </Box>
      <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 1
    }}>
        <Box component="span" sx={{
        fontSize: 14,
        color: 'text.secondary'
      }}>
          Bottom Left
        </Box>
        <Badge badgeContent={12} color="primary" anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}>
          <Target />
        </Badge>
      </Box>
      <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 1
    }}>
        <Box component="span" sx={{
        fontSize: 14,
        color: 'text.secondary'
      }}>
          Bottom Right
        </Box>
        <Badge badgeContent={12} color="primary" anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}>
          <Target />
        </Badge>
      </Box>
    </Box>
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};const zr=["Numeric","MaxOverflow","DotVariant","ColorVariants","TopLeft","TopRight","BottomLeft","BottomRight","PositionExamples","Playground"],Lr=Object.freeze(Object.defineProperty({__proto__:null,BottomLeft:B,BottomRight:O,ColorVariants:b,DotVariant:x,MaxOverflow:u,Numeric:f,Playground:j,PositionExamples:C,TopLeft:v,TopRight:y,__namedExportsOrder:zr,default:Tr},Symbol.toStringTag,{value:"Module"}));export{Lr as B,f as N,C as P};
