import{j as s,a as m,h as N,k as B,H as O,G as J,w as Z,J as Q}from"./iframe-BLkpsOqA.js";import{c as F}from"./createSvgIcon-D9uHM1x1.js";import{s as k,c as V,m as X}from"./memoTheme-K-_jYewk.js";import{I as Y}from"./IconButton-OB8E9RMh.js";import{T as A,t as q}from"./Typography-qsre9Iq8.js";import{u as ee}from"./useTheme-Dzz3X1iW.js";import{A as te}from"./Avatar-CbBnLrMt.js";import{L as _,M as ae}from"./Menu-CYiwEDz-.js";import{g as ne,a as se,l as P,M as oe,D as re}from"./MenuItem-Bz9oRZex.js";import{u as U}from"./useSlot-DIHReoAG.js";import"./preload-helper-PPVm8Dsz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-J5HaIzAC.js";import"./useForkRef-C_s4FjP_.js";import"./CircularProgress-cY_hscFC.js";import"./Paper-CMgXiWiu.js";import"./index-BZkPf7f3.js";import"./index-CeNp4_Q8.js";import"./createChainedFunction-BO_9K8Jh.js";const ie=F(s.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"})),le=F(s.jsx("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"})),de=F(s.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"})),ce=e=>{const{alignItems:t,classes:o}=e;return V({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},ne,o)},ue=k("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(X(({theme:e})=>({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex",variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}))),me=m.forwardRef(function(t,o){const i=N({props:t,name:"MuiListItemIcon"}),{className:p,...f}=i,l=m.useContext(_),g={...i,alignItems:l.alignItems},r=ce(g);return s.jsx(ue,{className:B(r.root,p),ownerState:g,ref:o,...f})}),pe=e=>{const{classes:t,inset:o,primary:i,secondary:p,dense:f}=e;return V({root:["root",o&&"inset",f&&"dense",i&&p&&"multiline"],primary:["primary"],secondary:["secondary"]},se,t)},ge=k("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${P.primary}`]:t.primary},{[`& .${P.secondary}`]:t.secondary},t.root,o.inset&&t.inset,o.primary&&o.secondary&&t.multiline,o.dense&&t.dense]}})({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4,[`.${q.root}:where(& .${P.primary})`]:{display:"block"},[`.${q.root}:where(& .${P.secondary})`]:{display:"block"},variants:[{props:({ownerState:e})=>e.primary&&e.secondary,style:{marginTop:6,marginBottom:6}},{props:({ownerState:e})=>e.inset,style:{paddingLeft:56}}]}),ye=m.forwardRef(function(t,o){const i=N({props:t,name:"MuiListItemText"}),{children:p,className:f,disableTypography:l=!1,inset:g=!1,primary:r,primaryTypographyProps:w,secondary:h,secondaryTypographyProps:d,slots:v={},slotProps:S={},...x}=i,{dense:c}=m.useContext(_);let b=r??p,a=h;const u={...i,disableTypography:l,inset:g,primary:!!b,secondary:!!a,dense:c},I=pe(u),y={slots:v,slotProps:{primary:w,secondary:d,...S}},[n,C]=U("root",{className:B(I.root,f),elementType:ge,externalForwardedProps:{...y,...x},ownerState:u,ref:o}),[M,T]=U("primary",{className:I.primary,elementType:A,externalForwardedProps:y,ownerState:u}),[K,G]=U("secondary",{className:I.secondary,elementType:A,externalForwardedProps:y,ownerState:u});return b!=null&&b.type!==A&&!l&&(b=s.jsx(M,{variant:c?"body2":"body1",component:T?.variant?void 0:"span",...T,children:b})),a!=null&&a.type!==A&&!l&&(a=s.jsx(K,{variant:"body2",color:"textSecondary",...G,children:a})),s.jsxs(n,{...C,children:[b,a]})}),H=[{label:"Profile",onClick:()=>console.log("Action: Navigate to Profile"),key:"profile","data-testid":"menu-item-profile"},{label:"Account Settings",onClick:()=>console.log("Action: Open Settings"),"data-testid":"menu-item-settings",key:"settings"},{label:"Sign Out",onClick:()=>console.log("Action: Execute Logout"),key:"logout",divider:!0,"data-testid":"menu-item-logout"}],fe=()=>{const[e,t]=m.useState(null),[o,i]=m.useState(-1),p=m.useRef(1),f=m.useId(),l=`${f}-avatar-trigger`,g=`${f}-avatar-menu`,r=!!e,w=r,h=m.useCallback(a=>{a?.currentTarget&&(t(a.currentTarget),i(0),typeof window<"u"&&(p.current=window.outerWidth/window.innerWidth))},[]),d=m.useCallback(()=>{t(null),i(-1)},[]),v=m.useCallback(a=>{e?d():h(a)},[e,d,h]);m.useEffect(()=>{const a=()=>{if(typeof window<"u"){const u=window.outerWidth/window.innerWidth;Math.abs(u-p.current)>.01&&r&&(p.current=u,d())}};if(typeof window<"u")return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[r,d]);const S=m.useCallback((a,u)=>{const{key:I}=a;switch(I){case"Escape":a.preventDefault(),d();break;case"ArrowDown":a.preventDefault(),i(y=>y<u-1?y+1:0);break;case"ArrowUp":a.preventDefault(),i(y=>y>0?y-1:u-1);break}},[d]),x=m.useCallback(a=>{const{key:u}=a;if(u==="Escape"&&r){d();return}(u==="Enter"||u===" ")&&!r&&(a.preventDefault(),h(a))},[r,d,h]),c=m.useCallback(a=>({id:l,"aria-controls":r?g:void 0,"aria-haspopup":"menu","aria-expanded":String(r),onClick:v,onKeyDown:x,...a}),[l,g,r,v,x]),b=m.useCallback(a=>({id:g,anchorEl:e,open:r,onClose:d,"aria-labelledby":l,...a}),[g,e,r,d,l]);return{open:r,isOpen:w,anchorEl:e,triggerId:l,menuId:g,focusedIndex:o,handleOpen:h,handleClose:d,handleToggle:v,handleKeyDown:x,handleMenuKeyDown:S,setFocusedIndex:i,getTriggerProps:c,getMenuProps:b}},he=k(Y,{shouldForwardProp:e=>e!=="$fullWidth"&&e!=="$isOpen"})(e=>{const t=O.palette.mode="dark";return{borderRadius:e.theme.shape.borderRadius,padding:e.theme.spacing(1),width:e.$fullWidth?"100%":"auto",justifyContent:e.$fullWidth?"flex-end":"center",display:"flex","&:hover":{backgroundColor:t?O.palette.action.focus:O.palette.action.hover}}}),be=k("div")(({theme:e,$fullWidth:t})=>({display:"flex",alignItems:"center",gap:e.spacing(1.125),position:"relative",width:t?"100%":"auto",justifyContent:t?"flex-end":"center"}));k(A)(({theme:e})=>({color:e.palette.text.primary,fontWeight:e.typography.fontWeightMedium,[e.breakpoints.down("sm")]:{display:"none"}}));const ve=k("div")(({theme:e})=>({width:e.spacing(2),height:e.spacing(2),display:"flex",alignItems:"center",justifyContent:"center"})),xe=k("div")(({theme:e,$isOpen:t})=>({width:0,height:0,borderTop:`${e.spacing(1.25)} solid ${e.palette.text.primary}`,borderLeft:`${e.spacing(.833)} solid transparent`,borderRight:`${e.spacing(.833)} solid transparent`,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.short}),transform:t?"rotate(180deg)":"rotate(0deg)",display:"inline-block",verticalAlign:"middle"})),R=({avatarUrl:e,username:t,menuItems:o=H,avatarProps:i,fullWidth:p=!1,"data-testid":f="avatar-menu"})=>{const{isOpen:l,anchorEl:g,handleToggle:r,handleClose:w,menuId:h,triggerId:d,focusedIndex:v,handleMenuKeyDown:S,setFocusedIndex:x}=fe(),c=ee(),a=o.filter(n=>!n.disabled).length,{sx:u,...I}=i||{},y={width:c.spacing(5.75),height:c.spacing(5.75)};return s.jsxs(s.Fragment,{children:[s.jsx(he,{id:d,"aria-label":`User menu${t?`: ${t}`:""}`,"aria-controls":l?h:void 0,"aria-haspopup":"true","aria-expanded":l?"true":"false",onClick:r,"data-testid":f,$fullWidth:p,$isOpen:l,children:s.jsxs(be,{$fullWidth:p,children:[s.jsx(te,{src:e,alt:t||"User avatar",sx:{...y,...u},...I}),s.jsx(ve,{children:s.jsx(xe,{$isOpen:l})})]})}),s.jsx(ae,{id:h,anchorEl:g,open:l,onClose:w,disablePortal:!1,keepMounted:!1,disableScrollLock:!0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},slotProps:{paper:{sx:n=>({marginTop:n.spacing(1),padding:n.spacing(.5),zIndex:n.zIndex.modal,border:"1px solid",borderColor:n.palette.divider,backgroundColor:n.palette.background.paper,borderRadius:n.spacing(.5),boxShadow:n.shadows[3]})}},MenuListProps:{"aria-labelledby":d,onKeyDown:n=>S(n,a),autoFocus:!0,dense:!0,sx:{paddingTop:0,paddingBottom:0}},children:o.map((n,C)=>{const M=!n.disabled,T=v===C&&M;return[s.jsxs(oe,{onClick:()=>{M&&(n.onClick(),w())},onMouseEnter:()=>{M&&x(C)},disabled:n.disabled,"data-testid":n["data-testid"],autoFocus:T,...n.menuItemProps,sx:{padding:c.spacing(2),color:c.palette.text.primary,borderRadius:c.spacing(.5),"&:hover":{backgroundColor:c.palette.action.hover},"&.Mui-focusVisible":{outline:`1px solid ${c.palette.primary.main}`},...T&&{boxShadow:c.shadows[1]},transition:c.transitions.create(["all"],{duration:c.transitions.duration.shortest,easing:c.transitions.easing.easeInOut}),...n.menuItemProps?.sx},children:[n.icon&&s.jsx(me,{children:n.icon}),s.jsx(ye,{children:n.label})]},`${n.label}-${C}`),n.divider&&s.jsx(re,{},`divider-${n.label}-${C}`)]})})]})};R.__docgenInfo={description:"",methods:[],displayName:"AvatarMenu",props:{avatarUrl:{required:!0,tsType:{name:"string"},description:""},username:{required:!0,tsType:{name:"string"},description:""},menuItems:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  onClick: () => void;
  icon?: ReactNode;
  disabled?: boolean;
  divider?: boolean;
  'data-testid'?: string;
  menuItemProps?: Omit<MuiMenuItemProps, 'onClick'>;
  key?: 'profile' | 'settings' | 'logout' | string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"divider",value:{name:"boolean",required:!1}},{key:"data-testid",value:{name:"string",required:!1}},{key:"menuItemProps",value:{name:"Omit",elements:[{name:"MuiMenuItemProps"},{name:"literal",value:"'onClick'"}],raw:"Omit<MuiMenuItemProps, 'onClick'>",required:!1}},{key:"key",value:{name:"union",raw:"'profile' | 'settings' | 'logout' | string",elements:[{name:"literal",value:"'profile'"},{name:"literal",value:"'settings'"},{name:"literal",value:"'logout'"},{name:"string"}],required:!1}}]}}],raw:"AvatarMenuItemProps[]"},description:"",defaultValue:{value:`[
  {
    label: 'Profile',
    // eslint-disable-next-line no-console
    onClick: () => console.log('Action: Navigate to Profile'),
    key: 'profile',
    'data-testid': 'menu-item-profile',
  },
  {
    label: 'Account Settings',
    // eslint-disable-next-line no-console
    onClick: () => console.log('Action: Open Settings'),
    'data-testid': 'menu-item-settings',
    key: 'settings',
  },
  {
    label: 'Sign Out',
    // eslint-disable-next-line no-console
    onClick: () => console.log('Action: Execute Logout'),
    key: 'logout',
    divider: true,
    'data-testid': 'menu-item-logout',
  },
]`,computed:!1}},avatarProps:{required:!1,tsType:{name:"Omit",elements:[{name:"MuiAvatarProps"},{name:"union",raw:"'src' | 'alt'",elements:[{name:"literal",value:"'src'"},{name:"literal",value:"'alt'"}]}],raw:"Omit<MuiAvatarProps, 'src' | 'alt'>"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'avatar-menu'",computed:!1}}}};const Ie=Z(),z={profile:s.jsx(ie,{fontSize:"small"}),settings:s.jsx(de,{fontSize:"small"}),logout:s.jsx(le,{fontSize:"small"})},ke=H.map(e=>{const t=e.key;return t&&z[t]?{...e,icon:e.icon??z[t]}:e}),we=[{label:"Dark Mode",onClick:()=>console.log("Dark Mode"),"data-testid":"dark-mode-option"},{label:"Help",onClick:()=>console.log("Help"),"data-testid":"help-option"},{label:"Logout",onClick:()=>console.log("Logout"),divider:!0}],Be={title:"Components/AvatarMenu",component:R,decorators:[e=>s.jsxs(J,{theme:Ie,children:[s.jsx(Q,{}),s.jsx(e,{})]})],parameters:{layout:"centered",docs:{description:{component:"Dropdown menu component for authenticated user"}}},argTypes:{avatarUrl:{control:"text"},username:{control:"text"},fullWidth:{control:"boolean"},menuItems:{control:"object"},dataTestId:{control:"text"},onItemClicked:{action:"menuItemClicked"}},args:{avatarUrl:"https://i.ibb.co/mV26g4B7/b2cc1d5a59644f92c2391dcdd5cde3c11e4770fe.jpg",username:"User Example",fullWidth:!1,onItemClicked:()=>{},menuItems:ke,dataTestId:"avatar-menu"},render:e=>{const{dataTestId:t,...o}=e,i=o.menuItems?.map(p=>({...p,onClick:()=>{p.onClick()}}))||[];return s.jsx(R,{...e,menuItems:i,"data-testid":t})}},L={args:{username:"Standard User"},parameters:{docs:{description:{story:"Standard menu with default items and avatar with image"}}}},j={args:{username:"Administrator",menuItems:we},parameters:{docs:{description:{story:"Menu with custom items and specific actions"}}}},$={args:{avatarUrl:"",username:"Fallback User"},parameters:{docs:{description:{story:"Avatar without image"}}}},D={args:{username:"User Without Menu",menuItems:[]},parameters:{docs:{description:{story:"Empty menu with no options available"}}}},E={args:{username:"Disabled User",menuItems:[{label:"Option 1",onClick:()=>{},disabled:!0},{label:"Option 2",onClick:()=>{},disabled:!0,divider:!0}],fullWidth:!1},parameters:{docs:{description:{story:"Disabled items that cannot be selected"}}}},W={args:{username:"",fullWidth:!0},parameters:{layout:"padded",docs:{description:{story:"Layout variants: without username and fullWidth"}}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    username: 'Standard User'
  },
  parameters: {
    docs: {
      description: {
        story: 'Standard menu with default items and avatar with image'
      }
    }
  }
}`,...L.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    username: 'Administrator',
    menuItems: customItems
  },
  parameters: {
    docs: {
      description: {
        story: 'Menu with custom items and specific actions'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    avatarUrl: '',
    username: 'Fallback User'
  },
  parameters: {
    docs: {
      description: {
        story: 'Avatar without image'
      }
    }
  }
}`,...$.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    username: 'User Without Menu',
    menuItems: []
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty menu with no options available'
      }
    }
  }
}`,...D.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    username: 'Disabled User',
    menuItems: [{
      label: 'Option 1',
      onClick: () => {},
      disabled: true
    }, {
      label: 'Option 2',
      onClick: () => {},
      disabled: true,
      divider: true
    }],
    fullWidth: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled items that cannot be selected'
      }
    }
  }
}`,...E.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    username: '',
    fullWidth: true
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Layout variants: without username and fullWidth'
      }
    }
  }
}`,...W.parameters?.docs?.source}}};const Ve=["Standard","CustomActions","AvatarFallback","EmptyMenu","DisabledItems","LayoutVariants"];export{$ as AvatarFallback,j as CustomActions,E as DisabledItems,D as EmptyMenu,W as LayoutVariants,L as Standard,Ve as __namedExportsOrder,Be as default};
