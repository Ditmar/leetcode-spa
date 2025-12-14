import{j as o,r as m,b as B,c as j,p as J,X as P,G as Q,v as Y,_ as ee}from"./iframe-BhIraoNK.js";import{c as F}from"./createSvgIcon-CiOy65gO.js";import{s as w,r as te}from"./styled-CDix4qOv.js";import{I as ae}from"./IconButton-CcUuS0QM.js";import{T as ne}from"./Typography-Cif8zEHZ.js";import{u as re}from"./useTheme-q-nAjRf9.js";import{A as oe}from"./Avatar-Bj7Cx-Gd.js";import{M as se}from"./Menu-g7vuHUDt.js";import{c as z,m as W}from"./memoTheme-CfBQ7MGA.js";import{L as U}from"./List-FYGGmMxQ.js";import{g as N,a as q}from"./generateUtilityClasses-CoM_PQv9.js";import{u as ie}from"./useForkRef-om1Mk_dr.js";import{B as le}from"./ButtonBase-GUNRSdUH.js";import{l as _,L as de}from"./ListItemText-Nz7OEHd9.js";import"./preload-helper-PPVm8Dsz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-CD4EjXsP.js";import"./useSlot-xq19d0qV.js";import"./Paper-CsLbGIff.js";import"./index-dQIyptpK.js";import"./index-0Txto5VU.js";import"./createChainedFunction-BO_9K8Jh.js";const ce=F(o.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"})),ue=F(o.jsx("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"})),pe=F(o.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"}));function me(e){return q("MuiDivider",e)}const K=N("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),ge=e=>{const{absolute:t,children:a,classes:s,flexItem:u,light:g,orientation:r,textAlign:d,variant:n}=e;return z({root:["root",t&&"absolute",n,g&&"light",r==="vertical"&&"vertical",u&&"flexItem",a&&"withChildren",a&&r==="vertical"&&"withChildrenVertical",d==="right"&&r!=="vertical"&&"textAlignRight",d==="left"&&r!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",r==="vertical"&&"wrapperVertical"]},me,s)},fe=w("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.absolute&&t.absolute,t[a.variant],a.light&&t.light,a.orientation==="vertical"&&t.vertical,a.flexItem&&t.flexItem,a.children&&t.withChildren,a.children&&a.orientation==="vertical"&&t.withChildrenVertical,a.textAlign==="right"&&a.orientation!=="vertical"&&t.textAlignRight,a.textAlign==="left"&&a.orientation!=="vertical"&&t.textAlignLeft]}})(W(({theme:e})=>({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:e.alpha((e.vars||e).palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:e.spacing(2),marginRight:e.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:({ownerState:t})=>!!t.children,style:{display:"flex",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}},{props:({ownerState:t})=>t.children&&t.orientation!=="vertical",style:{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,borderTopStyle:"inherit"}}},{props:({ownerState:t})=>t.orientation==="vertical"&&t.children,style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`,borderLeftStyle:"inherit"}}},{props:({ownerState:t})=>t.textAlign==="right"&&t.orientation!=="vertical",style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:({ownerState:t})=>t.textAlign==="left"&&t.orientation!=="vertical",style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}))),ve=w("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.wrapper,a.orientation==="vertical"&&t.wrapperVertical]}})(W(({theme:e})=>({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`,whiteSpace:"nowrap",variants:[{props:{orientation:"vertical"},style:{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}}]}))),E=m.forwardRef(function(t,a){const s=B({props:t,name:"MuiDivider"}),{absolute:u=!1,children:g,className:r,orientation:d="horizontal",component:n=g||d==="vertical"?"div":"hr",flexItem:y=!1,light:v=!1,role:c=n!=="hr"?"separator":void 0,textAlign:x="center",variant:C="fullWidth",...b}=s,p={...s,absolute:u,component:n,flexItem:y,light:v,orientation:d,role:c,textAlign:x,variant:C},I=ge(p);return o.jsx(fe,{as:n,className:j(I.root,r),role:c,ref:a,ownerState:p,"aria-orientation":c==="separator"&&(n!=="hr"||d==="vertical")?d:void 0,...b,children:g?o.jsx(ve,{className:I.wrapper,ownerState:p,children:g}):null})});E&&(E.muiSkipListHighlight=!0);function be(e){return q("MuiListItemIcon",e)}const G=N("MuiListItemIcon",["root","alignItemsFlexStart"]),he=e=>{const{alignItems:t,classes:a}=e;return z({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},be,a)},ye=w("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(W(({theme:e})=>({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex",variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}))),xe=m.forwardRef(function(t,a){const s=B({props:t,name:"MuiListItemIcon"}),{className:u,...g}=s,r=m.useContext(U),d={...s,alignItems:r.alignItems},n=he(d);return o.jsx(ye,{className:j(n.root,u),ownerState:d,ref:a,...g})});function Ie(e){return q("MuiMenuItem",e)}const M=N("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),we=(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]},Ce=e=>{const{disabled:t,dense:a,divider:s,disableGutters:u,selected:g,classes:r}=e,n=z({root:["root",a&&"dense",t&&"disabled",!u&&"gutters",s&&"divider",g&&"selected"]},Ie,r);return{...r,...n}},ke=w(le,{shouldForwardProp:e=>te(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:we})(W(({theme:e})=>({...e.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${M.selected}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity),[`&.${M.focusVisible}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.focusOpacity}`)}},[`&.${M.selected}:hover`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity)}},[`&.${M.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${M.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${K.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${K.inset}`]:{marginLeft:52},[`& .${_.root}`]:{marginTop:0,marginBottom:0},[`& .${_.inset}`]:{paddingLeft:36},[`& .${G.root}`]:{minWidth:36},variants:[{props:({ownerState:t})=>!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>!t.dense,style:{[e.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:t})=>t.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...e.typography.body2,[`& .${G.root} svg`]:{fontSize:"1.25rem"}}}]}))),Me=m.forwardRef(function(t,a){const s=B({props:t,name:"MuiMenuItem"}),{autoFocus:u=!1,component:g="li",dense:r=!1,divider:d=!1,disableGutters:n=!1,focusVisibleClassName:y,role:v="menuitem",tabIndex:c,className:x,...C}=s,b=m.useContext(U),p=m.useMemo(()=>({dense:r||b.dense||!1,disableGutters:n}),[b.dense,r,n]),I=m.useRef(null);J(()=>{u&&I.current&&I.current.focus()},[u]);const i={...s,dense:p.dense,divider:d,disableGutters:n},f=Ce(s),k=ie(I,a);let h;return s.disabled||(h=c!==void 0?c:-1),o.jsx(U.Provider,{value:p,children:o.jsx(ke,{ref:k,role:v,tabIndex:h,component:g,focusVisibleClassName:j(f.focusVisible,y),className:j(f.root,x),...C,ownerState:i,classes:f})})}),Z=[{label:"Profile",onClick:()=>console.log("Action: Navigate to Profile"),key:"profile","data-testid":"menu-item-profile"},{label:"Account Settings",onClick:()=>console.log("Action: Open Settings"),"data-testid":"menu-item-settings",key:"settings"},{label:"Sign Out",onClick:()=>console.log("Action: Execute Logout"),key:"logout",divider:!0,"data-testid":"menu-item-logout"}],Se=()=>{const[e,t]=m.useState(null),[a,s]=m.useState(-1),u=m.useRef(1),g=m.useId(),r=`${g}-avatar-trigger`,d=`${g}-avatar-menu`,n=!!e,y=n,v=m.useCallback(i=>{i?.currentTarget&&(t(i.currentTarget),s(0),typeof window<"u"&&(u.current=window.outerWidth/window.innerWidth))},[]),c=m.useCallback(()=>{t(null),s(-1)},[]),x=m.useCallback(i=>{e?c():v(i)},[e,c,v]);m.useEffect(()=>{const i=()=>{if(typeof window<"u"){const f=window.outerWidth/window.innerWidth;Math.abs(f-u.current)>.01&&n&&(u.current=f,c())}};if(typeof window<"u")return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[n,c]);const C=m.useCallback((i,f)=>{const{key:k}=i;switch(k){case"Escape":i.preventDefault(),c();break;case"ArrowDown":i.preventDefault(),s(h=>h<f-1?h+1:0);break;case"ArrowUp":i.preventDefault(),s(h=>h>0?h-1:f-1);break}},[c]),b=m.useCallback(i=>{const{key:f}=i;if(f==="Escape"&&n){c();return}(f==="Enter"||f===" ")&&!n&&(i.preventDefault(),v(i))},[n,c,v]),p=m.useCallback(i=>({id:r,"aria-controls":n?d:void 0,"aria-haspopup":"menu","aria-expanded":String(n),onClick:x,onKeyDown:b,...i}),[r,d,n,x,b]),I=m.useCallback(i=>({id:d,anchorEl:e,open:n,onClose:c,"aria-labelledby":r,...i}),[d,e,n,c,r]);return{open:n,isOpen:y,anchorEl:e,triggerId:r,menuId:d,focusedIndex:a,handleOpen:v,handleClose:c,handleToggle:x,handleKeyDown:b,handleMenuKeyDown:C,setFocusedIndex:s,getTriggerProps:p,getMenuProps:I}},Ae=w(ae,{shouldForwardProp:e=>e!=="$fullWidth"&&e!=="$isOpen"})(e=>{const t=P.palette.mode="dark";return{borderRadius:e.theme.shape.borderRadius,padding:e.theme.spacing(1),width:e.$fullWidth?"100%":"auto",justifyContent:e.$fullWidth?"flex-end":"center",display:"flex","&:hover":{backgroundColor:t?P.palette.action.focus:P.palette.action.hover}}}),$e=w("div")(({theme:e,$fullWidth:t})=>({display:"flex",alignItems:"center",gap:e.spacing(1.125),position:"relative",width:t?"100%":"auto",justifyContent:t?"flex-end":"center"}));w(ne)(({theme:e})=>({color:e.palette.text.primary,fontWeight:e.typography.fontWeightMedium,[e.breakpoints.down("sm")]:{display:"none"}}));const Le=w("div")(({theme:e})=>({width:e.spacing(2),height:e.spacing(2),display:"flex",alignItems:"center",justifyContent:"center"})),Te=w("div")(({theme:e,$isOpen:t})=>({width:0,height:0,borderTop:`${e.spacing(1.25)} solid ${e.palette.text.primary}`,borderLeft:`${e.spacing(.833)} solid transparent`,borderRight:`${e.spacing(.833)} solid transparent`,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.short}),transform:t?"rotate(180deg)":"rotate(0deg)",display:"inline-block",verticalAlign:"middle"})),V=({avatarUrl:e,username:t,menuItems:a=Z,avatarProps:s,fullWidth:u=!1,"data-testid":g="avatar-menu"})=>{const{isOpen:r,anchorEl:d,handleToggle:n,handleClose:y,menuId:v,triggerId:c,focusedIndex:x,handleMenuKeyDown:C,setFocusedIndex:b}=Se(),p=re(),i=a.filter(l=>!l.disabled).length,{sx:f,...k}=s||{},h={width:p.spacing(5.75),height:p.spacing(5.75)};return o.jsxs(o.Fragment,{children:[o.jsx(Ae,{id:c,"aria-label":`User menu${t?`: ${t}`:""}`,"aria-controls":r?v:void 0,"aria-haspopup":"true","aria-expanded":r?"true":"false",onClick:n,"data-testid":g,$fullWidth:u,$isOpen:r,children:o.jsxs($e,{$fullWidth:u,children:[o.jsx(oe,{src:e,alt:t||"User avatar",sx:{...h,...f},...k}),o.jsx(Le,{children:o.jsx(Te,{$isOpen:r})})]})}),o.jsx(se,{id:v,anchorEl:d,open:r,onClose:y,disablePortal:!1,keepMounted:!1,disableScrollLock:!0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},slotProps:{paper:{sx:l=>({marginTop:l.spacing(1),padding:l.spacing(.5),zIndex:l.zIndex.modal,border:"1px solid",borderColor:l.palette.divider,backgroundColor:l.palette.background.paper,borderRadius:l.spacing(.5),boxShadow:l.shadows[3]})}},MenuListProps:{"aria-labelledby":c,onKeyDown:l=>C(l,i),autoFocus:!0,dense:!0,sx:{paddingTop:0,paddingBottom:0}},children:a.map((l,S)=>{const O=!l.disabled,H=x===S&&O;return[o.jsxs(Me,{onClick:()=>{O&&(l.onClick(),y())},onMouseEnter:()=>{O&&b(S)},disabled:l.disabled,"data-testid":l["data-testid"],autoFocus:H,...l.menuItemProps,sx:{padding:p.spacing(2),color:p.palette.text.primary,borderRadius:p.spacing(.5),"&:hover":{backgroundColor:p.palette.action.hover},"&.Mui-focusVisible":{outline:`1px solid ${p.palette.primary.main}`},...H&&{boxShadow:p.shadows[1]},transition:p.transitions.create(["all"],{duration:p.transitions.duration.shortest,easing:p.transitions.easing.easeInOut}),...l.menuItemProps?.sx},children:[l.icon&&o.jsx(xe,{children:l.icon}),o.jsx(de,{children:l.label})]},`${l.label}-${S}`),l.divider&&o.jsx(E,{},`divider-${l.label}-${S}`)]})})]})};V.__docgenInfo={description:"",methods:[],displayName:"AvatarMenu",props:{avatarUrl:{required:!0,tsType:{name:"string"},description:""},username:{required:!0,tsType:{name:"string"},description:""},menuItems:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
]`,computed:!1}},avatarProps:{required:!1,tsType:{name:"Omit",elements:[{name:"MuiAvatarProps"},{name:"union",raw:"'src' | 'alt'",elements:[{name:"literal",value:"'src'"},{name:"literal",value:"'alt'"}]}],raw:"Omit<MuiAvatarProps, 'src' | 'alt'>"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'avatar-menu'",computed:!1}}}};const Re=Y(),X={profile:o.jsx(ce,{fontSize:"small"}),settings:o.jsx(pe,{fontSize:"small"}),logout:o.jsx(ue,{fontSize:"small"})},De=Z.map(e=>{const t=e.key;return t&&X[t]?{...e,icon:e.icon??X[t]}:e}),je=[{label:"Dark Mode",onClick:()=>console.log("Dark Mode"),"data-testid":"dark-mode-option"},{label:"Help",onClick:()=>console.log("Help"),"data-testid":"help-option"},{label:"Logout",onClick:()=>console.log("Logout"),divider:!0}],at={title:"Components/AvatarMenu",component:V,decorators:[e=>o.jsxs(Q,{theme:Re,children:[o.jsx(ee,{}),o.jsx(e,{})]})],parameters:{layout:"centered",docs:{description:{component:"Dropdown menu component for authenticated user"}}},argTypes:{avatarUrl:{control:"text"},username:{control:"text"},fullWidth:{control:"boolean"},menuItems:{control:"object"},dataTestId:{control:"text"},onItemClicked:{action:"menuItemClicked"}},args:{avatarUrl:"https://i.ibb.co/mV26g4B7/b2cc1d5a59644f92c2391dcdd5cde3c11e4770fe.jpg",username:"User Example",fullWidth:!1,onItemClicked:()=>{},menuItems:De,dataTestId:"avatar-menu"},render:e=>{const{dataTestId:t,...a}=e,s=a.menuItems?.map(u=>({...u,onClick:()=>{u.onClick()}}))||[];return o.jsx(V,{...e,menuItems:s,"data-testid":t})}},A={args:{username:"Standard User"},parameters:{docs:{description:{story:"Standard menu with default items and avatar with image"}}}},$={args:{username:"Administrator",menuItems:je},parameters:{docs:{description:{story:"Menu with custom items and specific actions"}}}},L={args:{avatarUrl:"",username:"Fallback User"},parameters:{docs:{description:{story:"Avatar without image"}}}},T={args:{username:"User Without Menu",menuItems:[]},parameters:{docs:{description:{story:"Empty menu with no options available"}}}},R={args:{username:"Disabled User",menuItems:[{label:"Option 1",onClick:()=>{},disabled:!0},{label:"Option 2",onClick:()=>{},disabled:!0,divider:!0}],fullWidth:!1},parameters:{docs:{description:{story:"Disabled items that cannot be selected"}}}},D={args:{username:"",fullWidth:!0},parameters:{layout:"padded",docs:{description:{story:"Layout variants: without username and fullWidth"}}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};const nt=["Standard","CustomActions","AvatarFallback","EmptyMenu","DisabledItems","LayoutVariants"];export{L as AvatarFallback,$ as CustomActions,R as DisabledItems,T as EmptyMenu,D as LayoutVariants,A as Standard,nt as __namedExportsOrder,at as default};
