import{a as d,u as D,j as i,c as w,x as O}from"./iframe-DQJJ3p-P.js";import{c as T}from"./createSvgIcon-BDlfdLds.js";import{g as $,a as R,s as v,c as z,m as j,u as F,B as E,r as G}from"./ButtonBase-CLji5q7M.js";import{L as P,M as X}from"./Menu-CRkJJd8L.js";function q(e){return $("MuiDivider",e)}const V=R("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),K=e=>{const{absolute:t,children:o,classes:r,flexItem:n,light:l,orientation:s,textAlign:c,variant:a}=e;return z({root:["root",t&&"absolute",a,l&&"light",s==="vertical"&&"vertical",n&&"flexItem",o&&"withChildren",o&&s==="vertical"&&"withChildrenVertical",c==="right"&&s!=="vertical"&&"textAlignRight",c==="left"&&s!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",s==="vertical"&&"wrapperVertical"]},q,r)},Y=v("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.absolute&&t.absolute,t[o.variant],o.light&&t.light,o.orientation==="vertical"&&t.vertical,o.flexItem&&t.flexItem,o.children&&t.withChildren,o.children&&o.orientation==="vertical"&&t.withChildrenVertical,o.textAlign==="right"&&o.orientation!=="vertical"&&t.textAlignRight,o.textAlign==="left"&&o.orientation!=="vertical"&&t.textAlignLeft]}})(j(({theme:e})=>({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:e.alpha((e.vars||e).palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:e.spacing(2),marginRight:e.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:({ownerState:t})=>!!t.children,style:{display:"flex",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}},{props:({ownerState:t})=>t.children&&t.orientation!=="vertical",style:{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,borderTopStyle:"inherit"}}},{props:({ownerState:t})=>t.orientation==="vertical"&&t.children,style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`,borderLeftStyle:"inherit"}}},{props:({ownerState:t})=>t.textAlign==="right"&&t.orientation!=="vertical",style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:({ownerState:t})=>t.textAlign==="left"&&t.orientation!=="vertical",style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}))),J=v("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.wrapper,o.orientation==="vertical"&&t.wrapperVertical]}})(j(({theme:e})=>({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`,whiteSpace:"nowrap",variants:[{props:{orientation:"vertical"},style:{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}}]}))),k=d.forwardRef(function(t,o){const r=D({props:t,name:"MuiDivider"}),{absolute:n=!1,children:l,className:s,orientation:c="horizontal",component:a=l||c==="vertical"?"div":"hr",flexItem:f=!1,light:p=!1,role:u=a!=="hr"?"separator":void 0,textAlign:g="center",variant:b="fullWidth",...m}=r,h={...r,absolute:n,component:a,flexItem:f,light:p,orientation:c,role:u,textAlign:g,variant:b},x=K(h);return i.jsx(Y,{as:a,className:w(x.root,s),role:u,ref:o,ownerState:h,"aria-orientation":u==="separator"&&(a!=="hr"||c==="vertical")?c:void 0,...m,children:l?i.jsx(J,{className:x.wrapper,ownerState:h,children:l}):null})});k&&(k.muiSkipListHighlight=!0);function Q(e){return $("MuiListItemIcon",e)}const W=R("MuiListItemIcon",["root","alignItemsFlexStart"]),Z=e=>{const{alignItems:t,classes:o}=e;return z({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},Q,o)},ee=v("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(j(({theme:e})=>({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex",variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}))),te=d.forwardRef(function(t,o){const r=D({props:t,name:"MuiListItemIcon"}),{className:n,...l}=r,s=d.useContext(P),c={...r,alignItems:s.alignItems},a=Z(c);return i.jsx(ee,{className:w(a.root,n),ownerState:c,ref:o,...l})}),H=R("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function oe(e){return $("MuiMenuItem",e)}const C=R("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),ie=(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.divider&&t.divider,!o.disableGutters&&t.gutters]},re=e=>{const{disabled:t,dense:o,divider:r,disableGutters:n,selected:l,classes:s}=e,a=z({root:["root",o&&"dense",t&&"disabled",!n&&"gutters",r&&"divider",l&&"selected"]},oe,s);return{...s,...a}},ne=v(E,{shouldForwardProp:e=>G(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:ie})(j(({theme:e})=>({...e.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${C.selected}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity),[`&.${C.focusVisible}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.focusOpacity}`)}},[`&.${C.selected}:hover`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity)}},[`&.${C.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${C.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${V.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${V.inset}`]:{marginLeft:52},[`& .${H.root}`]:{marginTop:0,marginBottom:0},[`& .${H.inset}`]:{paddingLeft:36},[`& .${W.root}`]:{minWidth:36},variants:[{props:({ownerState:t})=>!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>!t.dense,style:{[e.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:t})=>t.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...e.typography.body2,[`& .${W.root} svg`]:{fontSize:"1.25rem"}}}]}))),se=d.forwardRef(function(t,o){const r=D({props:t,name:"MuiMenuItem"}),{autoFocus:n=!1,component:l="li",dense:s=!1,divider:c=!1,disableGutters:a=!1,focusVisibleClassName:f,role:p="menuitem",tabIndex:u,className:g,...b}=r,m=d.useContext(P),h=d.useMemo(()=>({dense:s||m.dense||!1,disableGutters:a}),[m.dense,s,a]),x=d.useRef(null);O(()=>{n&&x.current&&x.current.focus()},[n]);const B={...r,dense:h.dense,divider:c,disableGutters:a},L=re(r),U=F(x,o);let A;return r.disabled||(A=u!==void 0?u:-1),i.jsx(P.Provider,{value:h,children:i.jsx(ne,{ref:U,role:p,tabIndex:A,component:l,focusVisibleClassName:w(L.focusVisible,f),className:w(L.root,g),...b,ownerState:B,classes:L})})}),_=T(i.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"})),N=T(i.jsx("path",{d:"M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m7 18H5V4h2v3h10V4h2z"})),ae=T(i.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"})),le=600,ce=200,de=250;function pe(e,t,o,r){return{x:Math.max(0,Math.min(e,window.innerWidth-o)),y:Math.max(0,Math.min(t,window.innerHeight-r))}}function ue(){const[e,t]=d.useState(!1),[o,r]=d.useState({x:0,y:0}),n=d.useRef(null),l=d.useCallback((p,u)=>{r(pe(p,u,ce,de)),t(!0)},[]),s=d.useCallback(p=>{p.preventDefault(),l(p.clientX,p.clientY)},[l]),c=d.useCallback(p=>{if(p.pointerType==="mouse")return;const{clientX:u,clientY:g}=p;n.current=setTimeout(()=>{l(u,g)},le)},[l]),a=d.useCallback(()=>{n.current&&(clearTimeout(n.current),n.current=null)},[]),f=d.useCallback(()=>t(!1),[]);return d.useEffect(()=>()=>{n.current&&(clearTimeout(n.current),n.current=null)},[]),{open:e,position:o,handleContextMenu:s,handlePointerDown:c,handlePointerUp:a,handleClose:f}}const ge=v("div")({display:"block",userSelect:"none"}),me=v(X)(({theme:e})=>({"& .MuiPaper-root":{minWidth:e.spacing(25),borderRadius:e.shape.borderRadius,boxShadow:e.shadows[4]}})),fe=v(se)(({theme:e})=>({minHeight:e.spacing(5.5),gap:e.spacing(1.5),paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}));function S({children:e,groups:t,onClose:o}){const{open:r,position:n,handleContextMenu:l,handlePointerDown:s,handlePointerUp:c,handleClose:a}=ue(),f=g=>{g?.(),a(),o?.()},p=()=>{a(),o?.()},u=g=>()=>f(g);return i.jsxs(i.Fragment,{children:[i.jsx(ge,{onContextMenu:l,onPointerDown:s,onPointerUp:c,onPointerLeave:c,"data-testid":"context-menu-trigger",children:e}),i.jsx(me,{open:r,onClose:p,anchorReference:"anchorPosition",anchorPosition:r?{top:n.y,left:n.x}:void 0,MenuListProps:{role:"menu"},"data-testid":"context-menu",children:t.map((g,b)=>i.jsxs(d.Fragment,{children:[b>0&&i.jsx(k,{}),g.items.map(m=>i.jsxs(fe,{disabled:m.disabled,onClick:u(m.onClick),role:"menuitem","data-testid":`context-menu-item-${m.id}`,children:[m.icon&&i.jsx(te,{children:m.icon}),m.label]},m.id))]},g.id))})]})}S.__docgenInfo={description:"",methods:[],displayName:"ContextMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},groups:{required:!0,tsType:{name:"Array",elements:[{name:"ContextMenuGroup"}],raw:"ContextMenuGroup[]"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ve={title:"component-catalog/ContextMenu",component:S,decorators:[e=>i.jsx("div",{className:"context-menu-story-wrapper",children:i.jsx(e,{})})]},y={args:{groups:[{id:"group-1",items:[{id:"copy",label:"Copy",icon:i.jsx(_,{fontSize:"small"})},{id:"paste",label:"Paste",icon:i.jsx(N,{fontSize:"small"})}]}]},render:e=>i.jsx(S,{...e,children:i.jsx("div",{style:{padding:40,border:"2px dashed #ccc",borderRadius:8,color:"#888"},children:"Right click here"})})},I={args:{groups:[{id:"group-1",items:[{id:"copy",label:"Copy",icon:i.jsx(_,{fontSize:"small"})},{id:"paste",label:"Paste",icon:i.jsx(N,{fontSize:"small"})}]},{id:"group-2",items:[{id:"delete",label:"Delete",icon:i.jsx(ae,{fontSize:"small"})}]}]},render:e=>i.jsx(S,{...e,children:i.jsx("div",{style:{padding:40,border:"2px dashed #ccc",borderRadius:8,color:"#888"},children:"Right click here"})})},M={args:{groups:[{id:"group-1",items:[{id:"copy",label:"Copy"},{id:"paste",label:"Paste (unavailable)",disabled:!0}]}]},render:e=>i.jsx(S,{...e,children:i.jsx("div",{style:{padding:40,border:"2px dashed #ccc",borderRadius:8,color:"#888"},children:"Right click here"})})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};const he=["Default","WithGroups","WithDisabled"],Ie=Object.freeze(Object.defineProperty({__proto__:null,Default:y,WithDisabled:M,WithGroups:I,__namedExportsOrder:he,default:ve},Symbol.toStringTag,{value:"Module"}));export{Ie as C,y as D,I as W,M as a};
