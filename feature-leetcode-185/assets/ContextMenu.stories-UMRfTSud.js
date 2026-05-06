import{j as n,r}from"./iframe-9Cy60jRN.js";import{D as j,L as R,C as M,a as v}from"./Delete-BAwgemN5.js";import{c as I}from"./createSvgIcon-BkVcn20y.js";import{s as y}from"./memoTheme-DHIsQIPR.js";import{M as D}from"./Menu-xEf6zpYO.js";import{M as _}from"./MenuItem-DlKpz5Hv.js";const S=I(n.jsx("path",{d:"M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m7 18H5V4h2v3h10V4h2z"})),k=600,T=200,w=250;function z(e,i,c,d){return{x:Math.max(0,Math.min(e,window.innerWidth-c)),y:Math.max(0,Math.min(i,window.innerHeight-d))}}function L(){const[e,i]=r.useState(!1),[c,d]=r.useState({x:0,y:0}),o=r.useRef(null),l=r.useCallback((t,p)=>{d(z(t,p,T,w)),i(!0)},[]),b=r.useCallback(t=>{t.preventDefault(),l(t.clientX,t.clientY)},[l]),x=r.useCallback(t=>{if(t.pointerType==="mouse")return;const{clientX:p,clientY:s}=t;o.current=setTimeout(()=>{l(p,s)},k)},[l]),C=r.useCallback(()=>{o.current&&(clearTimeout(o.current),o.current=null)},[]),f=r.useCallback(()=>i(!1),[]);return r.useEffect(()=>()=>{o.current&&(clearTimeout(o.current),o.current=null)},[]),{open:e,position:c,handleContextMenu:b,handlePointerDown:x,handlePointerUp:C,handleClose:f}}const E=y("div")({display:"block",userSelect:"none"}),H=y(D)(({theme:e})=>({"& .MuiPaper-root":{minWidth:e.spacing(25),borderRadius:e.shape.borderRadius,boxShadow:e.shadows[4]}})),W=y(_)(({theme:e})=>({minHeight:e.spacing(5.5),gap:e.spacing(1.5),paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}));function h({children:e,groups:i,onClose:c}){const{open:d,position:o,handleContextMenu:l,handlePointerDown:b,handlePointerUp:x,handleClose:C}=L(),f=s=>{s?.(),C(),c?.()},t=()=>{C(),c?.()},p=s=>()=>f(s);return n.jsxs(n.Fragment,{children:[n.jsx(E,{onContextMenu:l,onPointerDown:b,onPointerUp:x,onPointerLeave:x,"data-testid":"context-menu-trigger",children:e}),n.jsx(H,{open:d,onClose:t,anchorReference:"anchorPosition",anchorPosition:d?{top:o.y,left:o.x}:void 0,MenuListProps:{role:"menu"},"data-testid":"context-menu",children:i.map((s,P)=>n.jsxs(r.Fragment,{children:[P>0&&n.jsx(j,{}),s.items.map(a=>n.jsxs(W,{disabled:a.disabled,onClick:p(a.onClick),role:"menuitem","data-testid":`context-menu-item-${a.id}`,children:[a.icon&&n.jsx(R,{children:a.icon}),a.label]},a.id))]},s.id))})]})}h.__docgenInfo={description:"",methods:[],displayName:"ContextMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},groups:{required:!0,tsType:{name:"Array",elements:[{name:"ContextMenuGroup"}],raw:"ContextMenuGroup[]"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const A={title:"component-catalog/ContextMenu",component:h,decorators:[e=>n.jsx("div",{className:"context-menu-story-wrapper",children:n.jsx(e,{})})]},u={args:{groups:[{id:"group-1",items:[{id:"copy",label:"Copy",icon:n.jsx(M,{fontSize:"small"})},{id:"paste",label:"Paste",icon:n.jsx(S,{fontSize:"small"})}]}]},render:e=>n.jsx(h,{...e,children:n.jsx("div",{style:{padding:40,border:"2px dashed #ccc",borderRadius:8,color:"#888"},children:"Right click here"})})},m={args:{groups:[{id:"group-1",items:[{id:"copy",label:"Copy",icon:n.jsx(M,{fontSize:"small"})},{id:"paste",label:"Paste",icon:n.jsx(S,{fontSize:"small"})}]},{id:"group-2",items:[{id:"delete",label:"Delete",icon:n.jsx(v,{fontSize:"small"})}]}]},render:e=>n.jsx(h,{...e,children:n.jsx("div",{style:{padding:40,border:"2px dashed #ccc",borderRadius:8,color:"#888"},children:"Right click here"})})},g={args:{groups:[{id:"group-1",items:[{id:"copy",label:"Copy"},{id:"paste",label:"Paste (unavailable)",disabled:!0}]}]},render:e=>n.jsx(h,{...e,children:n.jsx("div",{style:{padding:40,border:"2px dashed #ccc",borderRadius:8,color:"#888"},children:"Right click here"})})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const N=["Default","WithGroups","WithDisabled"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:u,WithDisabled:g,WithGroups:m,__namedExportsOrder:N,default:A},Symbol.toStringTag,{value:"Module"}));export{q as C,u as D,m as W,g as a};
