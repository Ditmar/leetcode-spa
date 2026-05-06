import{r as d,b as j,j as o,c as P}from"./iframe-CLqi4W39.js";import{c as S}from"./createSvgIcon-CbeEsfp-.js";import{c as D,s as x,m as R}from"./memoTheme-rWOjl1Yu.js";import{M as k}from"./Menu-CoLDfnrb.js";import{g as z,a as A,M as _}from"./MenuItem-Cq-ABVjp.js";import{L as W}from"./List-ConeyPrP.js";const H=e=>{const{absolute:t,children:r,classes:n,flexItem:i,light:s,orientation:l,textAlign:a,variant:c}=e;return D({root:["root",t&&"absolute",c,s&&"light",l==="vertical"&&"vertical",i&&"flexItem",r&&"withChildren",r&&l==="vertical"&&"withChildrenVertical",a==="right"&&l!=="vertical"&&"textAlignRight",a==="left"&&l!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",l==="vertical"&&"wrapperVertical"]},z,n)},N=x("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,r.orientation==="vertical"&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&r.orientation==="vertical"&&t.withChildrenVertical,r.textAlign==="right"&&r.orientation!=="vertical"&&t.textAlignRight,r.textAlign==="left"&&r.orientation!=="vertical"&&t.textAlignLeft]}})(R(({theme:e})=>({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:e.alpha((e.vars||e).palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:e.spacing(2),marginRight:e.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:({ownerState:t})=>!!t.children,style:{display:"flex",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}},{props:({ownerState:t})=>t.children&&t.orientation!=="vertical",style:{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,borderTopStyle:"inherit"}}},{props:({ownerState:t})=>t.orientation==="vertical"&&t.children,style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`,borderLeftStyle:"inherit"}}},{props:({ownerState:t})=>t.textAlign==="right"&&t.orientation!=="vertical",style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:({ownerState:t})=>t.textAlign==="left"&&t.orientation!=="vertical",style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}))),V=x("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,r.orientation==="vertical"&&t.wrapperVertical]}})(R(({theme:e})=>({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`,whiteSpace:"nowrap",variants:[{props:{orientation:"vertical"},style:{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}}]}))),I=d.forwardRef(function(t,r){const n=j({props:t,name:"MuiDivider"}),{absolute:i=!1,children:s,className:l,orientation:a="horizontal",component:c=s||a==="vertical"?"div":"hr",flexItem:m=!1,light:p=!1,role:g=c!=="hr"?"separator":void 0,textAlign:u="center",variant:y="fullWidth",...h}=n,M={...n,absolute:i,component:c,flexItem:m,light:p,orientation:a,role:g,textAlign:u,variant:y},w=H(M);return o.jsx(N,{as:c,className:P(w.root,l),role:g,ref:r,ownerState:M,"aria-orientation":g==="separator"&&(c!=="hr"||a==="vertical")?a:void 0,...h,children:s?o.jsx(V,{className:w.wrapper,ownerState:M,children:s}):null})});I&&(I.muiSkipListHighlight=!0);const U=e=>{const{alignItems:t,classes:r}=e;return D({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},A,r)},E=x("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(R(({theme:e})=>({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex",variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}))),$=d.forwardRef(function(t,r){const n=j({props:t,name:"MuiListItemIcon"}),{className:i,...s}=n,l=d.useContext(W),a={...n,alignItems:l.alignItems},c=U(a);return o.jsx(E,{className:P(c.root,i),ownerState:a,ref:r,...s})}),L=S(o.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"})),T=S(o.jsx("path",{d:"M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m7 18H5V4h2v3h10V4h2z"})),B=S(o.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"})),F=600,G=200,O=250;function X(e,t,r,n){return{x:Math.max(0,Math.min(e,window.innerWidth-r)),y:Math.max(0,Math.min(t,window.innerHeight-n))}}function q(){const[e,t]=d.useState(!1),[r,n]=d.useState({x:0,y:0}),i=d.useRef(null),s=d.useCallback((p,g)=>{n(X(p,g,G,O)),t(!0)},[]),l=d.useCallback(p=>{p.preventDefault(),s(p.clientX,p.clientY)},[s]),a=d.useCallback(p=>{if(p.pointerType==="mouse")return;const{clientX:g,clientY:u}=p;i.current=setTimeout(()=>{s(g,u)},F)},[s]),c=d.useCallback(()=>{i.current&&(clearTimeout(i.current),i.current=null)},[]),m=d.useCallback(()=>t(!1),[]);return d.useEffect(()=>()=>{i.current&&(clearTimeout(i.current),i.current=null)},[]),{open:e,position:r,handleContextMenu:l,handlePointerDown:a,handlePointerUp:c,handleClose:m}}const K=x("div")({display:"block",userSelect:"none"}),Y=x(k)(({theme:e})=>({"& .MuiPaper-root":{minWidth:e.spacing(25),borderRadius:e.shape.borderRadius,boxShadow:e.shadows[4]}})),J=x(_)(({theme:e})=>({minHeight:e.spacing(5.5),gap:e.spacing(1.5),paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}));function C({children:e,groups:t,onClose:r}){const{open:n,position:i,handleContextMenu:s,handlePointerDown:l,handlePointerUp:a,handleClose:c}=q(),m=u=>{u?.(),c(),r?.()},p=()=>{c(),r?.()},g=u=>()=>m(u);return o.jsxs(o.Fragment,{children:[o.jsx(K,{onContextMenu:s,onPointerDown:l,onPointerUp:a,onPointerLeave:a,"data-testid":"context-menu-trigger",children:e}),o.jsx(Y,{open:n,onClose:p,anchorReference:"anchorPosition",anchorPosition:n?{top:i.y,left:i.x}:void 0,MenuListProps:{role:"menu"},"data-testid":"context-menu",children:t.map((u,y)=>o.jsxs(d.Fragment,{children:[y>0&&o.jsx(I,{}),u.items.map(h=>o.jsxs(J,{disabled:h.disabled,onClick:g(h.onClick),role:"menuitem","data-testid":`context-menu-item-${h.id}`,children:[h.icon&&o.jsx($,{children:h.icon}),h.label]},h.id))]},u.id))})]})}C.__docgenInfo={description:"",methods:[],displayName:"ContextMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},groups:{required:!0,tsType:{name:"Array",elements:[{name:"ContextMenuGroup"}],raw:"ContextMenuGroup[]"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Q={title:"component-catalog/ContextMenu",component:C,decorators:[e=>o.jsx("div",{className:"context-menu-story-wrapper",children:o.jsx(e,{})})]},f={args:{groups:[{id:"group-1",items:[{id:"copy",label:"Copy",icon:o.jsx(L,{fontSize:"small"})},{id:"paste",label:"Paste",icon:o.jsx(T,{fontSize:"small"})}]}]},render:e=>o.jsx(C,{...e,children:o.jsx("div",{style:{padding:40,border:"2px dashed #ccc",borderRadius:8,color:"#888"},children:"Right click here"})})},v={args:{groups:[{id:"group-1",items:[{id:"copy",label:"Copy",icon:o.jsx(L,{fontSize:"small"})},{id:"paste",label:"Paste",icon:o.jsx(T,{fontSize:"small"})}]},{id:"group-2",items:[{id:"delete",label:"Delete",icon:o.jsx(B,{fontSize:"small"})}]}]},render:e=>o.jsx(C,{...e,children:o.jsx("div",{style:{padding:40,border:"2px dashed #ccc",borderRadius:8,color:"#888"},children:"Right click here"})})},b={args:{groups:[{id:"group-1",items:[{id:"copy",label:"Copy"},{id:"paste",label:"Paste (unavailable)",disabled:!0}]}]},render:e=>o.jsx(C,{...e,children:o.jsx("div",{style:{padding:40,border:"2px dashed #ccc",borderRadius:8,color:"#888"},children:"Right click here"})})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    groups: [{
      id: 'group-1',
      items: [{
        id: 'copy',
        label: 'Copy',
        icon: <ContentCopyIcon fontSize="small" />
      }, {
        id: 'paste',
        label: 'Paste',
        icon: <ContentPasteIcon fontSize="small" />
      }]
    }]
  },
  render: args => <ContextMenu {...args}>
      <div style={{
      padding: 40,
      border: '2px dashed #ccc',
      borderRadius: 8,
      color: '#888'
    }}>
        Right click here
      </div>
    </ContextMenu>
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    groups: [{
      id: 'group-1',
      items: [{
        id: 'copy',
        label: 'Copy',
        icon: <ContentCopyIcon fontSize="small" />
      }, {
        id: 'paste',
        label: 'Paste',
        icon: <ContentPasteIcon fontSize="small" />
      }]
    }, {
      id: 'group-2',
      items: [{
        id: 'delete',
        label: 'Delete',
        icon: <DeleteIcon fontSize="small" />
      }]
    }]
  },
  render: args => <ContextMenu {...args}>
      <div style={{
      padding: 40,
      border: '2px dashed #ccc',
      borderRadius: 8,
      color: '#888'
    }}>
        Right click here
      </div>
    </ContextMenu>
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    groups: [{
      id: 'group-1',
      items: [{
        id: 'copy',
        label: 'Copy'
      }, {
        id: 'paste',
        label: 'Paste (unavailable)',
        disabled: true
      }]
    }]
  },
  render: args => <ContextMenu {...args}>
      <div style={{
      padding: 40,
      border: '2px dashed #ccc',
      borderRadius: 8,
      color: '#888'
    }}>
        Right click here
      </div>
    </ContextMenu>
}`,...b.parameters?.docs?.source}}};const Z=["Default","WithGroups","WithDisabled"],ae=Object.freeze(Object.defineProperty({__proto__:null,Default:f,WithDisabled:b,WithGroups:v,__namedExportsOrder:Z,default:Q},Symbol.toStringTag,{value:"Module"}));export{ae as C,f as D,v as W,b as a};
