import{r as H,u as j,c as E,j as s}from"./iframe-BuEw5q_B.js";import{u as M,C as k}from"./Card-Bpl0M_li.js";import{a as D,g as I,s as S,c as P,d as L,m as N,B as C,T}from"./Box-8a4dhQFI.js";import"./preload-helper-PPVm8Dsz.js";function q(e){return I("MuiCardActionArea",e)}const y=D("MuiCardActionArea",["root","focusVisible","focusHighlight"]),B=e=>{const{classes:t}=e;return P({root:["root"],focusHighlight:["focusHighlight"]},q,t)},O=S(L,{name:"MuiCardActionArea",slot:"Root"})(N(({theme:e})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${y.focusHighlight}`]:{opacity:(e.vars||e).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${y.focusVisible} .${y.focusHighlight}`]:{opacity:(e.vars||e).palette.action.focusOpacity}}))),U=S("span",{name:"MuiCardActionArea",slot:"FocusHighlight"})(N(({theme:e})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}))),G=H.forwardRef(function(t,o){const a=j({props:t,name:"MuiCardActionArea"}),{children:r,className:d,focusVisibleClassName:n,slots:i={},slotProps:p={},...l}=a,m=a,c=B(m),u={slots:i,slotProps:p},[h,b]=M("root",{elementType:O,externalForwardedProps:{...u,...l},shouldForwardComponentProp:!0,ownerState:m,ref:o,className:E(c.root,d),additionalProps:{focusVisibleClassName:E(n,c.focusVisible)}}),[F,z]=M("focusHighlight",{elementType:U,externalForwardedProps:u,ownerState:m,ref:o,className:c.focusHighlight});return s.jsxs(h,{...b,children:[r,s.jsx(F,{...z})]})});function V(e){return I("MuiCardMedia",e)}D("MuiCardMedia",["root","media","img"]);const $=e=>{const{classes:t,isMediaComponent:o,isImageComponent:a}=e;return P({root:["root",o&&"media",a&&"img"]},V,t)},K=S("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{isMediaComponent:a,isImageComponent:r}=o;return[t.root,a&&t.media,r&&t.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),W=["video","audio","picture","iframe","img"],X=["picture","img"],Y=H.forwardRef(function(t,o){const a=j({props:t,name:"MuiCardMedia"}),{children:r,className:d,component:n="div",image:i,src:p,style:l,...m}=a,c=W.includes(n),u=!c&&i?{backgroundImage:`url("${i}")`,...l}:l,h={...a,component:n,isMediaComponent:c,isImageComponent:X.includes(n)},b=$(h);return s.jsx(K,{className:E(b.root,d),as:n,role:!c&&i?"img":void 0,ref:o,style:u,ownerState:h,src:c?i||p:void 0,...m,children:r})}),R=1,Z=285,J=202,Q=10,A=2,w=288,ee=82,te=e=>({alignItems:e==="horizontal"?"center":"stretch",borderRadius:R,display:"flex",flexDirection:e==="horizontal"?"row":"column",gap:Q,height:e==="horizontal"?"auto":Z,justifyContent:"flex-start",overflow:"hidden",position:"relative",width:e==="horizontal"?"auto":J}),oe=e=>e==="horizontal"?{boxSizing:"border-box",flex:1,padding:A}:{backdroFilter:"blur(5px)",background:"linear-gradient(to top, rgba(0,0,0,0.8), transparent)",borderBottomLeftRadius:R,borderBottomRightRadius:R,boxSizing:"border-box",color:"#fff",height:ee,left:0,padding:A,position:"absolute",bottom:0,width:"100%"},ae=e=>e==="horizontal"?{flexShrink:0,height:"100%",maxHeight:w,maxWidth:w,objectFit:"cover",width:w}:{height:"100%",left:0,objectFit:"cover",position:"absolute",top:0,width:"100%"},_=({description:e,layout:t="horizontal",logo:o,onSelect:a,sx:r,title:d,...n})=>{const i={...te(t),...r},p=l=>{a?.(l)};return s.jsx(k,{sx:{...i,transition:"transform 0.3s ease, box-shadow 0.3s ease","&:hover":{transform:"translateY(-6px)",boxShadow:6}},...n,"data-testid":"test-card",children:s.jsxs(G,{component:"div",role:"button",tabIndex:0,onClick:p,sx:{height:"100%",width:"100%",display:"flex",flexDirection:t==="horizontal"?"row":"column"},children:[s.jsx(C,{sx:ae(t),children:typeof o=="string"?s.jsx(Y,{component:"img",image:o,alt:d,sx:{width:"100%",height:"100%",objectFit:"cover"}}):s.jsx(C,{sx:{width:"100%",height:"100%",objectFit:"cover"},children:o})}),s.jsxs(C,{sx:oe(t),children:[s.jsx(T,{variant:"h6",component:"div",sx:{fontWeight:"bold",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},"data-testid":"test-card-title",children:d}),s.jsx(T,{variant:"body2",sx:{opacity:.9},"data-testid":"test-card-description",children:e})]})]})})};_.__docgenInfo={description:"",methods:[],displayName:"TestCard",props:{description:{required:!0,tsType:{name:"string"},description:""},layout:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},logo:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>
) => void`,signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"string"},description:""},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""}},composes:["CardProps"]};const ce={title:"Components/TestCard",component:_,parameters:{layout:"centered"},argTypes:{description:{control:"text",description:"Descripción de la tarjeta"},logo:{control:"text",description:"URL o nodo de imagen"},onSelect:{action:"selected",description:"Función al hacer click"},title:{control:"text",description:"Título de la tarjeta"}}},g={args:{description:"Tarjeta con imagen de fondo y texto.",layout:"vertical",logo:"https://images.unsplash.com/photo-1538330496851-c475c75a7631?auto=format&fit=crop&w=800&q=80",sx:{},title:"Proyecto Básico"}},f={args:{description:"Pasa el mouse para ver el efecto.",layout:"vertical",logo:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80",sx:{boxShadow:1,transition:"box-shadow 0.3s","&:hover":{boxShadow:12},"& img":{transition:"transform 0.3s"},"&:hover img":{transform:"scale(1.1)"}},title:"Hover Effect"}},v={args:{description:"Esta tarjeta no tiene imagen de fondo.",layout:"vertical",title:"Sin Imagen"}},x={args:{description:"Esta tarjeta tiene sombra aplicada.",layout:"vertical",logo:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80",title:"Con Sombra"}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'Tarjeta con imagen de fondo y texto.',
    layout: 'vertical',
    logo: 'https://images.unsplash.com/photo-1538330496851-c475c75a7631?auto=format&fit=crop&w=800&q=80',
    sx: {},
    title: 'Proyecto Básico'
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'Pasa el mouse para ver el efecto.',
    layout: 'vertical',
    logo: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80',
    sx: {
      boxShadow: 1,
      transition: 'box-shadow 0.3s',
      '&:hover': {
        boxShadow: 12
      },
      '& img': {
        transition: 'transform 0.3s'
      },
      '&:hover img': {
        transform: 'scale(1.1)'
      }
    },
    title: 'Hover Effect'
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'Esta tarjeta no tiene imagen de fondo.',
    layout: 'vertical',
    title: 'Sin Imagen'
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'Esta tarjeta tiene sombra aplicada.',
    layout: 'vertical',
    logo: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80',
    title: 'Con Sombra'
  }
}`,...x.parameters?.docs?.source}}};const de=["Basic","HoverEffect","NoImage","ShadowedCard"];export{g as Basic,f as HoverEffect,v as NoImage,x as ShadowedCard,de as __namedExportsOrder,ce as default};
