import{j as n,r as m,b as _,c as O,p as J,X as W,y as Q,v as Y,_ as ee}from"./iframe-Bqq4eweS.js";import{c as U}from"./createSvgIcon-CyNsGvAQ.js";import{s as C,r as te}from"./styled-B7yQUh6O.js";import{I as ae}from"./IconButton-CWi-4PbI.js";import{T as re}from"./Typography--hyPGGZA.js";import{u as ne}from"./useTheme-C4HzTL6a.js";import{A as oe}from"./Avatar-BH4bZlpo.js";import{M as se}from"./Menu-DmSvK-Ob.js";import{c as K,m as V}from"./memoTheme-BnJ5HKme.js";import{L as z}from"./List-Mf6bdDpE.js";import{g as G,a as X}from"./generateUtilityClasses-CoM_PQv9.js";import{u as ie}from"./useForkRef-DuoVP1Yq.js";import{B as le}from"./ButtonBase-T9Vs8j0h.js";import{l as F,L as de}from"./ListItemIcon-Ctu1K7Dl.js";import{l as q,L as ce}from"./ListItemText-C657GuAM.js";import"./preload-helper-PPVm8Dsz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-eYD_HJEr.js";import"./useSlot-bx01IdQM.js";import"./Paper-BBzy_CtU.js";import"./index-BwrfHHYS.js";import"./index-ctI-3u2d.js";import"./createChainedFunction-BO_9K8Jh.js";const pe=U(n.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"})),ue=U(n.jsx("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"})),me=U(n.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"}));function ge(e){return X("MuiDivider",e)}const N=G("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),fe=e=>{const{absolute:t,children:a,classes:l,flexItem:p,light:f,orientation:o,textAlign:u,variant:r}=e;return K({root:["root",t&&"absolute",r,f&&"light",o==="vertical"&&"vertical",p&&"flexItem",a&&"withChildren",a&&o==="vertical"&&"withChildrenVertical",u==="right"&&o!=="vertical"&&"textAlignRight",u==="left"&&o!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",o==="vertical"&&"wrapperVertical"]},ge,l)},ve=C("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.absolute&&t.absolute,t[a.variant],a.light&&t.light,a.orientation==="vertical"&&t.vertical,a.flexItem&&t.flexItem,a.children&&t.withChildren,a.children&&a.orientation==="vertical"&&t.withChildrenVertical,a.textAlign==="right"&&a.orientation!=="vertical"&&t.textAlignRight,a.textAlign==="left"&&a.orientation!=="vertical"&&t.textAlignLeft]}})(V(({theme:e})=>({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:e.alpha((e.vars||e).palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:e.spacing(2),marginRight:e.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:({ownerState:t})=>!!t.children,style:{display:"flex",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}},{props:({ownerState:t})=>t.children&&t.orientation!=="vertical",style:{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,borderTopStyle:"inherit"}}},{props:({ownerState:t})=>t.orientation==="vertical"&&t.children,style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`,borderLeftStyle:"inherit"}}},{props:({ownerState:t})=>t.textAlign==="right"&&t.orientation!=="vertical",style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:({ownerState:t})=>t.textAlign==="left"&&t.orientation!=="vertical",style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}))),be=C("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.wrapper,a.orientation==="vertical"&&t.wrapperVertical]}})(V(({theme:e})=>({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`,whiteSpace:"nowrap",variants:[{props:{orientation:"vertical"},style:{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}}]}))),P=m.forwardRef(function(t,a){const l=_({props:t,name:"MuiDivider"}),{absolute:p=!1,children:f,className:o,orientation:u="horizontal",component:r=f||u==="vertical"?"div":"hr",flexItem:y=!1,light:v=!1,role:d=r!=="hr"?"separator":void 0,textAlign:x="center",variant:k="fullWidth",...b}=l,c={...l,absolute:p,component:r,flexItem:y,light:v,orientation:u,role:d,textAlign:x,variant:k},w=fe(c);return n.jsx(ve,{as:r,className:O(w.root,o),role:d,ref:a,ownerState:c,"aria-orientation":d==="separator"&&(r!=="hr"||u==="vertical")?u:void 0,...b,children:f?n.jsx(be,{className:w.wrapper,ownerState:c,children:f}):null})});P&&(P.muiSkipListHighlight=!0);function he(e){return X("MuiMenuItem",e)}const M=G("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),ye=(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]},xe=e=>{const{disabled:t,dense:a,divider:l,disableGutters:p,selected:f,classes:o}=e,r=K({root:["root",a&&"dense",t&&"disabled",!p&&"gutters",l&&"divider",f&&"selected"]},he,o);return{...o,...r}},we=C(le,{shouldForwardProp:e=>te(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:ye})(V(({theme:e})=>({...e.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${M.selected}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity),[`&.${M.focusVisible}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.focusOpacity}`)}},[`&.${M.selected}:hover`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity)}},[`&.${M.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${M.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${N.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${N.inset}`]:{marginLeft:52},[`& .${q.root}`]:{marginTop:0,marginBottom:0},[`& .${q.inset}`]:{paddingLeft:36},[`& .${F.root}`]:{minWidth:36},variants:[{props:({ownerState:t})=>!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>!t.dense,style:{[e.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:t})=>t.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...e.typography.body2,[`& .${F.root} svg`]:{fontSize:"1.25rem"}}}]}))),Ce=m.forwardRef(function(t,a){const l=_({props:t,name:"MuiMenuItem"}),{autoFocus:p=!1,component:f="li",dense:o=!1,divider:u=!1,disableGutters:r=!1,focusVisibleClassName:y,role:v="menuitem",tabIndex:d,className:x,...k}=l,b=m.useContext(z),c=m.useMemo(()=>({dense:o||b.dense||!1,disableGutters:r}),[b.dense,o,r]),w=m.useRef(null);J(()=>{p&&w.current&&w.current.focus()},[p]);const s={...l,dense:c.dense,divider:u,disableGutters:r},g=xe(l),I=ie(w,a);let h;return l.disabled||(h=d!==void 0?d:-1),n.jsx(z.Provider,{value:c,children:n.jsx(we,{ref:I,role:v,tabIndex:h,component:f,focusVisibleClassName:O(g.focusVisible,y),className:O(g.root,x),...k,ownerState:s,classes:g})})}),Z=[{label:"Profile",onClick:()=>console.log("Action: Navigate to Profile"),key:"profile","data-testid":"menu-item-profile"},{label:"Account Settings",onClick:()=>console.log("Action: Open Settings"),"data-testid":"menu-item-settings",key:"settings"},{label:"Sign Out",onClick:()=>console.log("Action: Execute Logout"),key:"logout",divider:!0,"data-testid":"menu-item-logout"}],ke=()=>{const[e,t]=m.useState(null),[a,l]=m.useState(-1),p=m.useRef(1),f=m.useId(),o=`${f}-avatar-trigger`,u=`${f}-avatar-menu`,r=!!e,y=r,v=m.useCallback(s=>{s?.currentTarget&&(t(s.currentTarget),l(0),typeof window<"u"&&(p.current=window.outerWidth/window.innerWidth))},[]),d=m.useCallback(()=>{t(null),l(-1)},[]),x=m.useCallback(s=>{e?d():v(s)},[e,d,v]);m.useEffect(()=>{const s=()=>{if(typeof window<"u"){const g=window.outerWidth/window.innerWidth;Math.abs(g-p.current)>.01&&r&&(p.current=g,d())}};if(typeof window<"u")return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[r,d]);const k=m.useCallback((s,g)=>{const{key:I}=s;switch(I){case"Escape":s.preventDefault(),d();break;case"ArrowDown":s.preventDefault(),l(h=>h<g-1?h+1:0);break;case"ArrowUp":s.preventDefault(),l(h=>h>0?h-1:g-1);break}},[d]),b=m.useCallback(s=>{const{key:g}=s;if(g==="Escape"&&r){d();return}(g==="Enter"||g===" ")&&!r&&(s.preventDefault(),v(s))},[r,d,v]),c=m.useCallback(s=>({id:o,"aria-controls":r?u:void 0,"aria-haspopup":"menu","aria-expanded":String(r),onClick:x,onKeyDown:b,...s}),[o,u,r,x,b]),w=m.useCallback(s=>({id:u,anchorEl:e,open:r,onClose:d,"aria-labelledby":o,...s}),[u,e,r,d,o]);return{open:r,isOpen:y,anchorEl:e,triggerId:o,menuId:u,focusedIndex:a,handleOpen:v,handleClose:d,handleToggle:x,handleKeyDown:b,handleMenuKeyDown:k,setFocusedIndex:l,getTriggerProps:c,getMenuProps:w}},Ie=C(ae,{shouldForwardProp:e=>e!=="$fullWidth"&&e!=="$isOpen"})(e=>{const t=W.palette.mode="dark";return{borderRadius:e.theme.shape.borderRadius,padding:e.theme.spacing(1),width:e.$fullWidth?"100%":"auto",justifyContent:e.$fullWidth?"flex-end":"center",display:"flex","&:hover":{backgroundColor:t?W.palette.action.focus:W.palette.action.hover}}}),Me=C("div")(({theme:e,$fullWidth:t})=>({display:"flex",alignItems:"center",gap:e.spacing(1.125),position:"relative",width:t?"100%":"auto",justifyContent:t?"flex-end":"center"}));C(re)(({theme:e})=>({color:e.palette.text.primary,fontWeight:e.typography.fontWeightMedium,[e.breakpoints.down("sm")]:{display:"none"}}));const Ae=C("div")(({theme:e})=>({width:e.spacing(2),height:e.spacing(2),display:"flex",alignItems:"center",justifyContent:"center"})),Se=C("div")(({theme:e,$isOpen:t})=>({width:0,height:0,borderTop:`${e.spacing(1.25)} solid ${e.palette.text.primary}`,borderLeft:`${e.spacing(.833)} solid transparent`,borderRight:`${e.spacing(.833)} solid transparent`,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.short}),transform:t?"rotate(180deg)":"rotate(0deg)",display:"inline-block",verticalAlign:"middle"})),E=({avatarUrl:e,username:t,menuItems:a=Z,avatarProps:l,fullWidth:p=!1,"data-testid":f="avatar-menu"})=>{const{isOpen:o,anchorEl:u,handleToggle:r,handleClose:y,menuId:v,triggerId:d,focusedIndex:x,handleMenuKeyDown:k,setFocusedIndex:b}=ke(),c=ne(),s=a.filter(i=>!i.disabled).length,{sx:g,...I}=l||{},h={width:c.spacing(5.75),height:c.spacing(5.75)};return n.jsxs(n.Fragment,{children:[n.jsx(Ie,{id:d,"aria-label":`User menu${t?`: ${t}`:""}`,"aria-controls":o?v:void 0,"aria-haspopup":"true","aria-expanded":o?"true":"false",onClick:r,"data-testid":f,$fullWidth:p,$isOpen:o,children:n.jsxs(Me,{$fullWidth:p,children:[n.jsx(oe,{src:e,alt:t||"User avatar",sx:{...h,...g},...I}),n.jsx(Ae,{children:n.jsx(Se,{$isOpen:o})})]})}),n.jsx(se,{id:v,anchorEl:u,open:o,onClose:y,disablePortal:!1,keepMounted:!1,disableScrollLock:!0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},slotProps:{paper:{sx:i=>({marginTop:i.spacing(1),padding:i.spacing(.5),zIndex:i.zIndex.modal,border:"1px solid",borderColor:i.palette.divider,backgroundColor:i.palette.background.paper,borderRadius:i.spacing(.5),boxShadow:i.shadows[3]})}},MenuListProps:{"aria-labelledby":d,onKeyDown:i=>k(i,s),autoFocus:!0,dense:!0,sx:{paddingTop:0,paddingBottom:0}},children:a.map((i,A)=>{const R=!i.disabled,B=x===A&&R;return[n.jsxs(Ce,{onClick:()=>{R&&(i.onClick(),y())},onMouseEnter:()=>{R&&b(A)},disabled:i.disabled,"data-testid":i["data-testid"],autoFocus:B,...i.menuItemProps,sx:{padding:c.spacing(2),color:c.palette.text.primary,borderRadius:c.spacing(.5),"&:hover":{backgroundColor:c.palette.action.hover},"&.Mui-focusVisible":{outline:`1px solid ${c.palette.primary.main}`},...B&&{boxShadow:c.shadows[1]},transition:c.transitions.create(["all"],{duration:c.transitions.duration.shortest,easing:c.transitions.easing.easeInOut}),...i.menuItemProps?.sx},children:[i.icon&&n.jsx(de,{children:i.icon}),n.jsx(ce,{children:i.label})]},`${i.label}-${A}`),i.divider&&n.jsx(P,{},`divider-${i.label}-${A}`)]})})]})};E.__docgenInfo={description:"",methods:[],displayName:"AvatarMenu",props:{avatarUrl:{required:!0,tsType:{name:"string"},description:""},username:{required:!0,tsType:{name:"string"},description:""},menuItems:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
]`,computed:!1}},avatarProps:{required:!1,tsType:{name:"Omit",elements:[{name:"MuiAvatarProps"},{name:"union",raw:"'src' | 'alt'",elements:[{name:"literal",value:"'src'"},{name:"literal",value:"'alt'"}]}],raw:"Omit<MuiAvatarProps, 'src' | 'alt'>"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'avatar-menu'",computed:!1}}}};const $e=Y(),H={profile:n.jsx(pe,{fontSize:"small"}),settings:n.jsx(me,{fontSize:"small"}),logout:n.jsx(ue,{fontSize:"small"})},Te=Z.map(e=>{const t=e.key;return t&&H[t]?{...e,icon:e.icon??H[t]}:e}),Le=[{label:"Dark Mode",onClick:()=>console.log("Dark Mode"),"data-testid":"dark-mode-option"},{label:"Help",onClick:()=>console.log("Help"),"data-testid":"help-option"},{label:"Logout",onClick:()=>console.log("Logout"),divider:!0}],et={title:"Components/AvatarMenu",component:E,decorators:[e=>n.jsxs(Q,{theme:$e,children:[n.jsx(ee,{}),n.jsx(e,{})]})],parameters:{layout:"centered",docs:{description:{component:"Dropdown menu component for authenticated user"}}},argTypes:{avatarUrl:{control:"text"},username:{control:"text"},fullWidth:{control:"boolean"},menuItems:{control:"object"},dataTestId:{control:"text"},onItemClicked:{action:"menuItemClicked"}},args:{avatarUrl:"https://i.ibb.co/mV26g4B7/b2cc1d5a59644f92c2391dcdd5cde3c11e4770fe.jpg",username:"User Example",fullWidth:!1,onItemClicked:()=>{},menuItems:Te,dataTestId:"avatar-menu"},render:e=>{const{dataTestId:t,...a}=e,l=a.menuItems?.map(p=>({...p,onClick:()=>{p.onClick()}}))||[];return n.jsx(E,{...e,menuItems:l,"data-testid":t})}},S={args:{username:"Standard User"},parameters:{docs:{description:{story:"Standard menu with default items and avatar with image"}}}},$={args:{username:"Administrator",menuItems:Le},parameters:{docs:{description:{story:"Menu with custom items and specific actions"}}}},T={args:{avatarUrl:"",username:"Fallback User"},parameters:{docs:{description:{story:"Avatar without image"}}}},L={args:{username:"User Without Menu",menuItems:[]},parameters:{docs:{description:{story:"Empty menu with no options available"}}}},D={args:{username:"Disabled User",menuItems:[{label:"Option 1",onClick:()=>{},disabled:!0},{label:"Option 2",onClick:()=>{},disabled:!0,divider:!0}],fullWidth:!1},parameters:{docs:{description:{story:"Disabled items that cannot be selected"}}}},j={args:{username:"",fullWidth:!0},parameters:{layout:"padded",docs:{description:{story:"Layout variants: without username and fullWidth"}}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};const tt=["Standard","CustomActions","AvatarFallback","EmptyMenu","DisabledItems","LayoutVariants"];export{T as AvatarFallback,$ as CustomActions,D as DisabledItems,L as EmptyMenu,j as LayoutVariants,S as Standard,tt as __namedExportsOrder,et as default};
