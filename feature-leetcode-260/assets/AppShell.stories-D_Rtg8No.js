import{H as l,P as re,B as e,e as _,g as pe,a as xe,C as me,m as se}from"./iframe-9uf5bNUi.js";import{c as M}from"./createSvgIcon-C-65vhIN.js";import{A as ue,M as he}from"./Menu-8924rS2H.js";import{R as ge}from"./RadioButtonUnchecked-BviAaqUZ.js";import{a as fe}from"./authService-DvqEhDAi.js";import{B as r}from"./Box-JhpM3zIr.js";import{T as ye}from"./Toolbar-F2wrV-hL.js";import{I as y}from"./IconButton-C88VFpgy.js";import{T as i}from"./Typography-DjX2OxdM.js";import{B as K}from"./Button-rw5iapKE.js";import{A as be}from"./Avatar-B15E4J-L.js";import{M as ve}from"./Menu-D1I5jEGz.js";import{M as V}from"./MenuItem-EOXOW2Qq.js";import{D as Q}from"./Drawer-knLoKCWB.js";import{a as H,L as X}from"./List-ChsYmoOW.js";import{g as ae,b as ie,c as le,e as $,m as Se}from"./memoTheme-BoOnGKgT.js";import{i as je}from"./isMuiElement-DB4oeVAo.js";import{u as we}from"./useForkRef-BgSbkzwl.js";import{i as Z}from"./mergeSlotProps-By4hs0fe.js";import{l as Ce,L as ee}from"./ListItemButton-Dc7enLm0.js";import"./preload-helper-BFbRC-vR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-CWp4rMyB.js";import"./useTheme-CF3cKOzv.js";import"./schemas-CxL56DE6.js";import"./ButtonBase-Q8BPcWcx.js";import"./useTimeout-BxIfc3vw.js";import"./CircularProgress-CleERK0k.js";import"./useSlot-DEo6tuEz.js";import"./useSlotProps-CUSgHA0L.js";import"./Popover-DbWZp9Gw.js";import"./Portal-C2epEo5L.js";import"./index-DRnTlGP8.js";import"./index-CtqY-wh1.js";import"./getReactElementRef-n5jKfw0L.js";import"./ownerWindow-CVF8CZiZ.js";import"./Grow-D24ueR9f.js";import"./utils-gqmPWI7h.js";import"./mergeSlotProps-Be2YsJhi.js";import"./debounce-Be36O1Ab.js";import"./Modal-CPwKTj5J.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-DxhbNhJ2.js";import"./dividerClasses-CMWSXLHT.js";function ke(o){return ae("MuiListItem",o)}ie("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"]);function Ie(o){return ae("MuiListItemSecondaryAction",o)}ie("MuiListItemSecondaryAction",["root","disableGutters"]);const Pe=o=>{const{disableGutters:t,classes:n}=o;return le({root:["root",t&&"disableGutters"]},Ie,n)},Me=$("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:n}=o;return[t.root,n.disableGutters&&t.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:o})=>o.disableGutters,style:{right:0}}]}),ce=l.forwardRef(function(t,n){const c=re({props:t,name:"MuiListItemSecondaryAction"}),{className:m,...g}=c,p=l.useContext(H),u={...c,disableGutters:p.disableGutters},h=Pe(u);return e.jsx(Me,{className:_(h.root,m),ownerState:u,ref:n,...g})});ce.muiName="ListItemSecondaryAction";const Le=(o,t)=>{const{ownerState:n}=o;return[t.root,n.dense&&t.dense,n.alignItems==="flex-start"&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.hasSecondaryAction&&t.secondaryAction]},Te=o=>{const{alignItems:t,classes:n,dense:c,disableGutters:m,disablePadding:g,divider:p,hasSecondaryAction:u}=o;return le({root:["root",c&&"dense",!m&&"gutters",!g&&"padding",p&&"divider",t==="flex-start"&&"alignItemsFlexStart",u&&"secondaryAction"],container:["container"]},ke,n)},Re=$("div",{name:"MuiListItem",slot:"Root",overridesResolver:Le})(Se(({theme:o})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:t})=>!t.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:t})=>!t.disablePadding&&t.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:t})=>!t.disablePadding&&!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>!t.disablePadding&&!!t.secondaryAction,style:{paddingRight:48}},{props:({ownerState:t})=>!!t.secondaryAction,style:{[`& > .${Ce.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(o.vars||o).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>t.button,style:{transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(o.vars||o).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:t})=>t.hasSecondaryAction,style:{paddingRight:48}}]}))),Ae=$("li",{name:"MuiListItem",slot:"Container"})({position:"relative"}),te=l.forwardRef(function(t,n){const c=re({props:t,name:"MuiListItem"}),{alignItems:m="center",children:g,className:p,component:u,components:h={},componentsProps:L={},ContainerComponent:f="li",ContainerProps:{className:N,...v}={},dense:x=!1,disableGutters:S=!1,disablePadding:T=!1,divider:j=!1,secondaryAction:R,slotProps:w={},slots:F={},...G}=c,C=l.useContext(H),s=l.useMemo(()=>({dense:x||C.dense||!1,alignItems:m,disableGutters:S}),[m,C.dense,x,S]),a=l.useRef(null),d=l.Children.toArray(g),Y=d.length&&je(d[d.length-1],["ListItemSecondaryAction"]),A={...c,alignItems:m,dense:s.dense,disableGutters:S,disablePadding:T,divider:j,hasSecondaryAction:Y},q=Te(A),J=we(a,n),W=F.root||h.Root||Re,k=w.root||L.root||{},I={className:_(q.root,k.className,p),...G};let b=u||"li";return Y?(b=!I.component&&!u?"div":b,f==="li"&&(b==="li"?b="div":I.component==="li"&&(I.component="div")),e.jsx(H.Provider,{value:s,children:e.jsxs(Ae,{as:f,className:_(q.container,N),ref:J,ownerState:A,...v,children:[e.jsx(W,{...k,...!Z(W)&&{as:b,ownerState:{...A,...k.ownerState}},...I,children:d}),d.pop()]})})):e.jsx(H.Provider,{value:s,children:e.jsxs(W,{...k,as:b,ref:J,...!Z(W)&&{ownerState:{...A,...k.ownerState}},...I,children:[d,R&&e.jsx(ce,{children:R})]})})}),We=M(e.jsx("path",{d:"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6"})),ze=M(e.jsx("path",{d:"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4"})),Be=M(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"})),oe=M(e.jsx("path",{d:"M3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm4 4h14v-2H7zm0 4h14v-2H7zM7 7v2h14V7z"})),De=M(e.jsx("path",{d:"M19 13H5v-2h14z"})),Ee={display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden",color:"var(--foreground)",bgcolor:"var(--background)"},He={bgcolor:"var(--nav-bg)",height:50,justifyContent:"center",boxShadow:"none",borderBottom:"1px solid var(--nav-border)",zIndex:1202},Ue={justifyContent:"space-between",px:2,minHeight:"50px !important"},Ne={color:"var(--primary-foreground)",textDecoration:"none",fontWeight:600,display:"flex",alignItems:"center",gap:.5,fontSize:"16px"},Fe={display:"flex",flex:1,width:"100%",height:"calc(100vh - 50px)",overflow:"hidden",bgcolor:"var(--background)"},Ge={width:260,minWidth:260,maxWidth:260,borderRight:"1px solid var(--border)",display:{xs:"none",sm:"flex"},flexDirection:"column",bgcolor:"var(--background)",color:"var(--foreground)",flexShrink:0,"& .MuiTypography-root":{color:"inherit"}},Ve={flexGrow:1,display:"flex",width:"100%",height:"100%",overflow:"hidden",bgcolor:"var(--background)"},Oe={p:0,overflowY:"auto",flex:1,pt:"10px"},_e=o=>({px:"24px",py:"12px",display:"flex",alignItems:"flex-start",gap:"12px",bgcolor:o?"var(--sidebar-accent) !important":"transparent",borderLeft:o?"4px solid var(--sidebar-primary)":"4px solid transparent",borderBottom:"1px solid var(--border)","&:hover":{bgcolor:o?"var(--sidebar-accent)":"var(--chart-6)"}}),$e={mt:"3px",display:"flex",alignItems:"center",justifyContent:"center"},Ye={display:"flex",flexDirection:"column",gap:"4px"},qe=o=>({fontSize:"14px",color:"var(--foreground)",fontWeight:o?600:400,lineHeight:1.3}),Je={display:"flex",alignItems:"center",gap:"8px"},ne=[{label:"Premium",path:"/premium"},{label:"Explore",path:"/explore"},{label:"Problems",path:"/problems"},{label:"Contest",path:"/contest"},{label:"Discuss",path:"/discuss"}],Ke=[{id:1,title:"1. Two Sum",status:"completed",difficulty:"Easy",diffColor:"var(--nav-accent-green)",pct:"49.2%"},{id:2,title:"2. Add Two Numbers",status:"progress",difficulty:"Medium",diffColor:"var(--nav-yellow)",pct:"41.8%"},{id:3,title:"3. Longest Substring Without Repeating",status:"unstarted",difficulty:"Medium",diffColor:"var(--nav-yellow)",pct:"33.9%"},{id:4,title:"4. Median of Two Sorted Arrays",status:"unstarted",difficulty:"Hard",diffColor:"var(--nav-red)",pct:"38.2%"},{id:5,title:"5. Valid Parentheses",status:"unstarted",difficulty:"Easy",diffColor:"var(--nav-accent-green)",pct:"40.1%"},{id:6,title:"6. Merge Two Sorted Lists",status:"unstarted",difficulty:"Easy",diffColor:"var(--nav-accent-green)",pct:"62.3%"}];let O=null;const Qe=se.createContext(null),Xe=()=>se.useContext(Qe)||{user:null},de=({children:o,currentPath:t,onOpenAuthModal:n})=>{const{user:c}=Xe(),m=!!c,[g,p]=l.useState(!1),[u,h]=l.useState(!1),[L,f]=l.useState(null),[N,v]=l.useState(""),[x,S]=l.useState(()=>{if(typeof window<"u"){try{const s=localStorage.getItem("darkMode");if(s!==null)return s==="true"}catch{if(O!==null)return O==="true"}return window.matchMedia?.("(prefers-color-scheme: dark)").matches??!1}return!1});l.useEffect(()=>{if(typeof window<"u"){const s=window.document.documentElement;x?s.classList.add("dark"):s.classList.remove("dark")}},[x]),l.useEffect(()=>{typeof window<"u"&&v(window.location.pathname)},[]);const T=t||N,j=/^\/problems\/[^/]+$/.test(T),R=()=>{const s=!x;S(s);try{localStorage.setItem("darkMode",String(s))}catch{O=String(s)}},w=(s,a)=>{s.preventDefault(),typeof window<"u"&&(window.history.pushState({},"",a),window.dispatchEvent(new PopStateEvent("popstate")),v(a))},F=async()=>{f(null);try{await fe.signOut()}catch{}typeof window<"u"&&(window.history.pushState({},"","/"),window.dispatchEvent(new PopStateEvent("popstate")),v("/"))},G=l.useMemo(()=>pe({palette:{mode:x?"dark":"light",background:{default:"var(--background)",paper:"var(--card)"}}}),[x]),C=s=>e.jsx(X,{sx:Oe,children:Ke.map(a=>{const d=a.id===1;return e.jsx(te,{disablePadding:!0,children:e.jsxs(ee,{onClick:()=>{s&&s()},sx:_e(d),children:[e.jsxs(r,{sx:$e,children:[a.status==="completed"&&e.jsx(Be,{sx:{color:"var(--nav-accent-green)",fontSize:"18px"}}),a.status==="progress"&&e.jsx(De,{sx:{color:"var(--nav-yellow)",fontSize:"18px",fontWeight:"bold"}}),a.status==="unstarted"&&e.jsx(ge,{sx:{color:"var(--muted-foreground)",fontSize:"18px"}})]}),e.jsxs(r,{sx:Ye,children:[e.jsx(i,{variant:"body2",sx:qe(d),children:a.title}),e.jsxs(r,{sx:Je,children:[e.jsx(i,{sx:{fontSize:"11px",fontWeight:600,color:`${a.diffColor} !important`},children:a.difficulty}),e.jsxs(i,{sx:{fontSize:"11px",color:"var(--muted-foreground) !important"},children:["• ",a.pct]})]})]})]})},a.id)})});return e.jsxs(xe,{theme:G,children:[e.jsx(me,{}),e.jsxs(r,{sx:Ee,children:[e.jsx(ue,{position:"static",sx:He,children:e.jsxs(ye,{sx:Ue,children:[e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:.5},children:[e.jsx(y,{color:"inherit","aria-label":"open main menu",onClick:()=>p(!0),sx:{display:{xs:"flex",sm:"none"},minWidth:40,minHeight:40,p:.5},children:e.jsx(he,{})}),j&&!g&&e.jsx(y,{color:"inherit","aria-label":"open problems list",onClick:()=>h(!0),sx:{display:{xs:"flex",sm:"none"},minWidth:40,minHeight:40,p:.5,color:"var(--editor-text)"},children:e.jsx(oe,{})}),e.jsxs(i,{variant:"h6",component:"a",href:"/",onClick:s=>w(s,"/"),sx:{...Ne,display:"flex",alignItems:"center"},children:[e.jsx(r,{component:"span",sx:{color:"var(--nav-accent-green)",fontWeight:"bold"},children:"</>"}),e.jsx(r,{component:"span",sx:{display:{xs:"none",sm:"inline"},ml:.5},children:"LeetCode"})]})]}),e.jsx(r,{sx:{flexGrow:1,display:{xs:"none",sm:"block"}}}),e.jsx(r,{sx:{display:{xs:"none",sm:"flex"},alignItems:"center",gap:3,mr:3},children:ne.map(s=>{const a=T.startsWith(s.path)||s.label==="Problems"&&j;return e.jsx(K,{href:s.path,onClick:d=>w(d,s.path),sx:{minHeight:44,textTransform:"none",fontSize:"13px",color:"var(--editor-text)",fontWeight:a?600:400,padding:0,minWidth:"auto"},children:s.label},s.label)})}),e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:{xs:.5,sm:2}},children:[e.jsx(y,{onClick:R,color:"inherit","aria-label":"toggle theme",sx:{minWidth:40,minHeight:40,color:"var(--editor-text)"},children:x?e.jsx(We,{}):e.jsx(ze,{})}),m?e.jsxs(e.Fragment,{children:[e.jsx(y,{onClick:s=>f(s.currentTarget),sx:{minWidth:40,minHeight:40},children:e.jsx(be,{alt:c?.username||"User",src:c?.avatarUrl||"",sx:{width:24,height:24}})}),e.jsxs(ve,{anchorEl:L,open:!!L,onClose:()=>f(null),children:[e.jsx(V,{onClick:()=>f(null),children:"Profile"}),e.jsx(V,{onClick:()=>f(null),children:"Settings"}),e.jsx(V,{onClick:F,children:"Sign Out"})]})]}):e.jsx(K,{variant:"contained",onClick:n,sx:{bgcolor:"var(--nav-accent-green)",color:"var(--editor-text)",textTransform:"none",fontWeight:600,fontSize:"12px",height:30,borderRadius:"4px",px:{xs:1.5,sm:2},whiteSpace:"nowrap","&:hover":{bgcolor:"var(--success-foreground)"}},children:"Sign In"})]})]})}),e.jsxs(r,{sx:Fe,children:[j&&e.jsxs(r,{sx:{...Ge,bgcolor:"var(--background)",color:"var(--foreground)",borderRight:"1px solid var(--border)",display:{xs:"none",sm:"flex"},flexDirection:"column"},children:[e.jsx(r,{sx:{px:3,py:2,borderBottom:"1px solid var(--border)"},children:e.jsx(i,{variant:"h6",sx:{fontWeight:700,fontSize:"16px"},children:"Problems"})}),C()]}),e.jsx(r,{component:"main",sx:Ve,children:o})]}),e.jsx(Q,{variant:"temporary",open:g,onClose:()=>p(!1),anchor:"left",sx:{display:{xs:"block",sm:"none"},zIndex:1400,"& .MuiDrawer-paper":{bgcolor:"var(--nav-bg)",boxShadow:"none",width:280,height:"100vh",borderRight:"none"},"& .MuiModal-backdrop":{bgcolor:"var(--chart-6)"}},children:e.jsxs(r,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[e.jsxs(r,{sx:{display:"flex",alignItems:"center",px:"24px",height:"50px",justifyContent:"space-between"},children:[e.jsxs(i,{variant:"h6",sx:{color:"var(--primary-foreground)",fontWeight:600,display:"flex",alignItems:"center",fontSize:"16px"},children:[e.jsx(r,{component:"span",sx:{color:"var(--nav-accent-green)",fontWeight:"bold",mr:.5},children:"</>"}),"LeetCode"]}),e.jsx(y,{onClick:()=>p(!1),sx:{color:"var(--editor-text)",p:0},children:e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),e.jsx(X,{sx:{pt:"24px",px:"24px",display:"flex",flexDirection:"column",gap:"24px"},children:ne.map(s=>e.jsx(te,{disablePadding:!0,children:e.jsx(ee,{href:s.path,onClick:a=>{p(!1),w(a,s.path)},sx:{p:0,bgcolor:"transparent !important","&:hover":{"& .MuiTypography-root":{color:"var(--primary-foreground)"}}},children:e.jsx(i,{sx:{fontSize:"15px",color:"var(--editor-text)"},children:s.label})})},s.label))})]})}),e.jsx(Q,{variant:"temporary",open:u,onClose:()=>h(!1),anchor:"left",sx:{display:{xs:"block",sm:"none"},zIndex:1300,"& .MuiDrawer-paper":{bgcolor:"var(--background)",boxShadow:"none",width:290,height:"100vh"}},children:e.jsxs(r,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[e.jsxs(r,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",px:"24px",height:"50px",bgcolor:x?"var(--nav-bg)":"var(--sidebar)",color:"var(--foreground)",borderBottom:"1px solid var(--border)"},children:[e.jsx(y,{disabled:!0,sx:{color:"var(--muted-foreground)",p:0},children:e.jsx(oe,{fontSize:"small"})}),e.jsx(i,{variant:"body1",sx:{fontWeight:600,fontSize:"15px"},children:"Problems"}),e.jsx(y,{onClick:()=>h(!1),sx:{color:"var(--muted-foreground)",p:0},children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),C(()=>h(!1))]})})]})]})};de.__docgenInfo={description:"",methods:[],displayName:"AppShell",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},currentPath:{required:!1,tsType:{name:"string"},description:""},onOpenAuthModal:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const P={workspaceRootStyles:{display:"flex",width:"100%",height:"100%",bgcolor:"var(--background)"},leftWorkspaceStyles:{flex:1,p:3,display:{xs:"none",md:"flex"},alignItems:"center",justifyContent:"center",borderRight:"1px solid var(--sidebar-border)",bgcolor:"var(--background)"},rightWorkspaceStyles:{flex:1,maxWidth:{xs:"100%",md:"50%"},bgcolor:"var(--background)",display:"flex",flexDirection:"column",borderLeft:"1px solid var(--sidebar-border)"},codeEditorAreaStyles:{flex:1,p:3,display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"var(--nav-bg)"},consolePanelWrapperStyles:{bgcolor:"var(--editor-panel-bg)",display:"flex",flexDirection:"column"},consoleToolbarStyles:{display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:"center",gap:{xs:1.5,sm:0},px:"14px",py:{xs:"12px",sm:0},height:{xs:"auto",sm:"46px"},bgcolor:"var(--nav-border)",userSelect:"none",borderTop:"1px solid var(--editor-panel-border)"},tabsCapsuleStyles:{display:"flex",alignItems:"center",bgcolor:"var(--editor-panel)",borderRadius:"24px",p:"3px",width:{xs:"100%",sm:"auto"}},getTabItemStyles:o=>({cursor:"pointer",fontSize:"12.5px",fontWeight:500,borderRadius:"20px",px:"14px",py:"4px",flex:{xs:1,sm:"none"},textAlign:"center",whiteSpace:"nowrap",transition:"all 0.15s ease",color:"var(--card)",bgcolor:o?"var(--editor-panel-bg)":"transparent"}),actionButtonsContainerStyles:{display:"flex",gap:"8px",alignItems:"center",width:{xs:"100%",sm:"auto"}},runButtonStyles:{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",bgcolor:"var(--editor-panel-bg)",color:"var(--secondary)",height:"32px",width:"77.06px",borderRadius:"6px",flex:{xs:1,sm:"none"},fontSize:"12.5px",fontWeight:500,cursor:"pointer",whiteSpace:"nowrap",transition:"background-color 0.15s","&:hover":{bgcolor:"var(--nav-bg)"}},submitButtonStyles:{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",bgcolor:"var(--nav-accent-green)",color:"var(--editor-text)",height:"32px",width:"95.34px",borderRadius:"6px",flex:{xs:1,sm:"none"},fontSize:"12.5px",fontWeight:600,cursor:"pointer",whiteSpace:"nowrap",transition:"background-color 0.15s","&:hover":{bgcolor:"var(--success-foreground)"}},lowerPanelContextStyles:{p:"16px",display:"flex",flexDirection:"column",gap:"12px",minHeight:220,maxHeight:220,overflowY:"auto",bgcolor:"var(--nav-border)"},caseCardStyles:{width:"100%",backgroundColor:"var(--editor-panel)",borderRadius:"5px",padding:"12px 16px",boxSizing:"border-box",border:"1px solid var(--editor-panel-border)"},noResultsWrapperStyles:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",pt:4}},Ze=()=>{const[o,t]=l.useState(0),n=P;return e.jsxs(r,{sx:n.workspaceRootStyles,children:[e.jsx(r,{sx:n.leftWorkspaceStyles,children:e.jsx(i,{variant:"body2",sx:{color:"var(--foreground)",fontFamily:"monospace"},children:"[ Left Workspace / Problem Details Area ]"})}),e.jsxs(r,{sx:n.rightWorkspaceStyles,children:[e.jsx(r,{sx:n.codeEditorAreaStyles,children:e.jsx(i,{variant:"body2",sx:{color:"var(--muted-foreground)",fontFamily:"monospace"},children:"[ Code Editor Area ]"})}),e.jsxs(r,{sx:n.consolePanelWrapperStyles,children:[e.jsxs(r,{sx:n.consoleToolbarStyles,children:[e.jsxs(r,{sx:n.tabsCapsuleStyles,children:[e.jsx(r,{onClick:()=>t(0),sx:n.getTabItemStyles(o===0),children:"Testcases"}),e.jsx(r,{onClick:()=>t(1),sx:n.getTabItemStyles(o===1),children:"Test Result"})]}),e.jsxs(r,{sx:n.actionButtonsContainerStyles,children:[e.jsxs(r,{onClick:()=>{},sx:n.runButtonStyles,children:[e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),"Run"]}),e.jsxs(r,{onClick:()=>{},sx:n.submitButtonStyles,children:[e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"}),e.jsx("polyline",{points:"17 8 12 3 7 8"}),e.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),"Submit"]})]})]}),e.jsx(r,{sx:n.lowerPanelContextStyles,children:o===0?e.jsxs(e.Fragment,{children:[e.jsxs(r,{sx:n.caseCardStyles,children:[e.jsx(i,{variant:"body2",sx:{color:"var(--editor-text)",fontWeight:600,fontFamily:"monospace",fontSize:"12px",mb:"6px"},children:"Case 1"}),e.jsx(i,{variant:"caption",sx:{color:"var(--editor-text)",fontFamily:"monospace",fontSize:"12px",display:"block",mb:"4px"},children:"Input: [2,7,11,15], 9"}),e.jsx(i,{variant:"caption",sx:{color:"var(--editor-text)",fontFamily:"monospace",fontSize:"12px",display:"block"},children:"Expected: [0,1]"})]}),e.jsxs(r,{sx:n.caseCardStyles,children:[e.jsx(i,{variant:"body2",sx:{color:"var(--editor-text)",fontWeight:600,fontFamily:"monospace",fontSize:"12px",mb:"6px"},children:"Case 2"}),e.jsx(i,{variant:"caption",sx:{color:"var(--editor-text)",fontFamily:"monospace",fontSize:"12px",display:"block",mb:"4px"},children:"Input: [3,2,4], 6"}),e.jsx(i,{variant:"caption",sx:{color:"var(--editor-text)",fontFamily:"monospace",fontSize:"12px",display:"block"},children:"Expected: [1,2]"})]})]}):e.jsx(r,{sx:n.noResultsWrapperStyles,children:e.jsx(i,{variant:"body2",sx:{color:"var(--editor-text)",textAlign:"center",fontFamily:"monospace",fontSize:"12px"},children:"No test results yet. Run your code to see results."})})})]})]})]})},et=l.createContext(null),U=o=>t=>e.jsx(et.Provider,{value:{user:o,config:{defaultCacheTTL:3600,basePath:"/api",environment:"development"}},children:e.jsx(t,{})}),_t={title:"Components/AppShell",component:de,parameters:{layout:"fullscreen"},args:{children:e.jsx(Ze,{})}},z={decorators:[U(null)],args:{currentPath:"/problems/two-sum"}},B={decorators:[U({username:"TestUser",avatarUrl:""})],args:{currentPath:"/problems/two-sum"}},D={decorators:[U(null)],args:{currentPath:"/problems/two-sum"},parameters:{viewport:{defaultViewport:"mobile1"}}},E={decorators:[U(null),o=>{try{localStorage.setItem("darkMode","true")}catch{}return typeof window<"u"&&document.documentElement.classList.add("dark"),e.jsx(o,{})}],args:{currentPath:"/problems/two-sum"}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  workspaceRootStyles: {
    display: 'flex',
    width: '100%',
    height: '100%',
    bgcolor: 'var(--background)'
  } as SxProps<Theme>,
  leftWorkspaceStyles: {
    flex: 1,
    p: 3,
    display: {
      xs: 'none',
      md: 'flex'
    },
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: '1px solid var(--sidebar-border)',
    bgcolor: 'var(--background)'
  } as SxProps<Theme>,
  rightWorkspaceStyles: {
    flex: 1,
    maxWidth: {
      xs: '100%',
      md: '50%'
    },
    bgcolor: 'var(--background)',
    display: 'flex',
    flexDirection: 'column',
    borderLeft: '1px solid var(--sidebar-border)'
  } as SxProps<Theme>,
  codeEditorAreaStyles: {
    flex: 1,
    p: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bgcolor: 'var(--nav-bg)'
  } as SxProps<Theme>,
  consolePanelWrapperStyles: {
    bgcolor: 'var(--editor-panel-bg)',
    display: 'flex',
    flexDirection: 'column'
  } as SxProps<Theme>,
  consoleToolbarStyles: {
    display: 'flex',
    flexDirection: {
      xs: 'column',
      sm: 'row'
    },
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: {
      xs: 1.5,
      sm: 0
    },
    px: '14px',
    py: {
      xs: '12px',
      sm: 0
    },
    height: {
      xs: 'auto',
      sm: '46px'
    },
    bgcolor: 'var(--nav-border)',
    userSelect: 'none',
    borderTop: '1px solid var(--editor-panel-border)'
  } as SxProps<Theme>,
  tabsCapsuleStyles: {
    display: 'flex',
    alignItems: 'center',
    bgcolor: 'var(--editor-panel)',
    borderRadius: '24px',
    p: '3px',
    width: {
      xs: '100%',
      sm: 'auto'
    }
  } as SxProps<Theme>,
  getTabItemStyles: (isActive: boolean): SxProps<Theme> => ({
    cursor: 'pointer',
    fontSize: '12.5px',
    fontWeight: 500,
    borderRadius: '20px',
    px: '14px',
    py: '4px',
    flex: {
      xs: 1,
      sm: 'none'
    },
    textAlign: 'center',
    whiteSpace: 'nowrap',
    transition: 'all 0.15s ease',
    color: 'var(--card)',
    bgcolor: isActive ? 'var(--editor-panel-bg)' : 'transparent'
  }),
  actionButtonsContainerStyles: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    width: {
      xs: '100%',
      sm: 'auto'
    }
  } as SxProps<Theme>,
  runButtonStyles: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    bgcolor: 'var(--editor-panel-bg)',
    color: 'var(--secondary)',
    height: '32px',
    width: '77.06px',
    borderRadius: '6px',
    flex: {
      xs: 1,
      sm: 'none'
    },
    fontSize: '12.5px',
    fontWeight: 500,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'background-color 0.15s',
    '&:hover': {
      bgcolor: 'var(--nav-bg)'
    }
  } as SxProps<Theme>,
  submitButtonStyles: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    bgcolor: 'var(--nav-accent-green)',
    color: 'var(--editor-text)',
    height: '32px',
    width: '95.34px',
    borderRadius: '6px',
    flex: {
      xs: 1,
      sm: 'none'
    },
    fontSize: '12.5px',
    fontWeight: 600,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'background-color 0.15s',
    '&:hover': {
      bgcolor: 'var(--success-foreground)'
    }
  } as SxProps<Theme>,
  lowerPanelContextStyles: {
    p: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    minHeight: 220,
    maxHeight: 220,
    overflowY: 'auto',
    bgcolor: 'var(--nav-border)'
  } as SxProps<Theme>,
  caseCardStyles: {
    width: '100%',
    backgroundColor: 'var(--editor-panel)',
    borderRadius: '5px',
    padding: '12px 16px',
    boxSizing: 'border-box',
    border: '1px solid var(--editor-panel-border)'
  } as SxProps<Theme>,
  noResultsWrapperStyles: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    pt: 4
  } as SxProps<Theme>
}`,...P.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  decorators: [authProviderMock(null)],
  args: {
    currentPath: '/problems/two-sum'
  }
}`,...z.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  decorators: [authProviderMock({
    username: 'TestUser',
    avatarUrl: ''
  } as AuthUser)],
  args: {
    currentPath: '/problems/two-sum'
  }
}`,...B.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  decorators: [authProviderMock(null)],
  args: {
    currentPath: '/problems/two-sum'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...D.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  decorators: [authProviderMock(null), (StoryComponent: React.ComponentType) => {
    try {
      localStorage.setItem('darkMode', 'true');
    } catch {
      // Prevent blocking if the Storybook sandbox restricts storage
    }
    if (typeof window !== 'undefined') {
      document.documentElement.classList.add('dark');
    }
    return <StoryComponent />;
  }],
  args: {
    currentPath: '/problems/two-sum'
  }
}`,...E.parameters?.docs?.source}}};const $t=["storyWorkspaceStyles","Unauthenticated","Authenticated","MobileView","DarkMode"];export{B as Authenticated,E as DarkMode,D as MobileView,z as Unauthenticated,$t as __namedExportsOrder,_t as default,P as storyWorkspaceStyles};
