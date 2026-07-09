import{H as l,P as de,B as e,e as K,g as fe,a as ye,C as be,m as pe}from"./iframe-DYvJtG78.js";import{c as A}from"./createSvgIcon-KYQpPD1R.js";import{A as ve,T as Se,M as we}from"./Menu-CuO3fhQV.js";import{R as je}from"./RadioButtonUnchecked-CTa2hM57.js";import{B as r}from"./Box-BXhib4Sm.js";import{I as b}from"./IconButton-CJod3ChS.js";import{T as i}from"./Typography-CIMhb5YC.js";import{B as te}from"./Button-DZpIjwYg.js";import{A as Ce}from"./Avatar-93QkmUs6.js";import{M as ke}from"./Menu-D4kTveBL.js";import{M as q}from"./MenuItem-bn2HN3nv.js";import{D as oe}from"./Drawer-DmErp_gG.js";import{a as U,L as ne}from"./List-Dr-rxtnG.js";import{g as xe,b as ue,c as me,e as Q,m as Ie}from"./memoTheme-BF6-3y2Q.js";import{i as Pe}from"./isMuiElement-BAwlneet.js";import{u as Te}from"./useForkRef-gHv0hw9b.js";import{i as re}from"./mergeSlotProps-Dxsq_kEE.js";import{l as Re,L as se}from"./ListItemButton-QfFEDEMv.js";import"./preload-helper-BFbRC-vR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-B6sjv5mh.js";import"./useTheme-DKfz_ig_.js";import"./ButtonBase-SJDKWdE-.js";import"./useTimeout-CAIu7NkF.js";import"./CircularProgress-BXM4oC0a.js";import"./useSlot-BSFUgiee.js";import"./useSlotProps-Dbis28LV.js";import"./Popover-DvDyIhwQ.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-Sl_6y8Hh.js";import"./Fade-BMxnv1Mn.js";import"./index-CWJW8VD9.js";import"./index-XteZBMVs.js";import"./getReactElementRef-DqGMkN-g.js";import"./mergeSlotProps-DXcvqVZg.js";import"./Modal-D71xbzdb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BS3lzQRu.js";import"./dividerClasses-C7_-jODM.js";function Me(t){return xe("MuiListItem",t)}ue("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"]);function Ae(t){return xe("MuiListItemSecondaryAction",t)}ue("MuiListItemSecondaryAction",["root","disableGutters"]);const Le=t=>{const{disableGutters:o,classes:n}=t;return me({root:["root",o&&"disableGutters"]},Ae,n)},We=Q("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,n.disableGutters&&o.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:t})=>t.disableGutters,style:{right:0}}]}),he=l.forwardRef(function(o,n){const c=de({props:o,name:"MuiListItemSecondaryAction"}),{className:x,...f}=c,u=l.useContext(U),h={...c,disableGutters:u.disableGutters},g=Le(h);return e.jsx(We,{className:K(g.root,x),ownerState:h,ref:n,...f})});he.muiName="ListItemSecondaryAction";const Ee=(t,o)=>{const{ownerState:n}=t;return[o.root,n.dense&&o.dense,n.alignItems==="flex-start"&&o.alignItemsFlexStart,n.divider&&o.divider,!n.disableGutters&&o.gutters,!n.disablePadding&&o.padding,n.hasSecondaryAction&&o.secondaryAction]},ze=t=>{const{alignItems:o,classes:n,dense:c,disableGutters:x,disablePadding:f,divider:u,hasSecondaryAction:h}=t;return me({root:["root",c&&"dense",!x&&"gutters",!f&&"padding",u&&"divider",o==="flex-start"&&"alignItemsFlexStart",h&&"secondaryAction"],container:["container"]},Me,n)},Be=Q("div",{name:"MuiListItem",slot:"Root",overridesResolver:Ee})(Ie(({theme:t})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:o})=>!o.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:o})=>!o.disablePadding&&o.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:o})=>!o.disablePadding&&!o.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:o})=>!o.disablePadding&&!!o.secondaryAction,style:{paddingRight:48}},{props:({ownerState:o})=>!!o.secondaryAction,style:{[`& > .${Re.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:o})=>o.divider,style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:o})=>o.button,style:{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:o})=>o.hasSecondaryAction,style:{paddingRight:48}}]}))),De=Q("li",{name:"MuiListItem",slot:"Container"})({position:"relative"}),ae=l.forwardRef(function(o,n){const c=de({props:o,name:"MuiListItem"}),{alignItems:x="center",children:f,className:u,component:h,components:g={},componentsProps:L={},ContainerComponent:y="li",ContainerProps:{className:_,...S}={},dense:m=!1,disableGutters:w=!1,disablePadding:W=!1,divider:j=!1,secondaryAction:E,slotProps:C={},slots:V={},...$}=c,k=l.useContext(U),s=l.useMemo(()=>({dense:m||k.dense||!1,alignItems:x,disableGutters:w}),[x,k.dense,m,w]),a=l.useRef(null),p=l.Children.toArray(f),X=p.length&&Pe(p[p.length-1],["ListItemSecondaryAction"]),z={...c,alignItems:x,dense:s.dense,disableGutters:w,disablePadding:W,divider:j,hasSecondaryAction:X},Z=ze(z),ee=Te(a,n),B=V.root||g.Root||Be,I=C.root||L.root||{},P={className:K(Z.root,I.className,u),...$};let v=h||"li";return X?(v=!P.component&&!h?"div":v,y==="li"&&(v==="li"?v="div":P.component==="li"&&(P.component="div")),e.jsx(U.Provider,{value:s,children:e.jsxs(De,{as:y,className:K(Z.container,_),ref:ee,ownerState:z,...S,children:[e.jsx(B,{...I,...!re(B)&&{as:v,ownerState:{...z,...I.ownerState}},...P,children:p}),p.pop()]})})):e.jsx(U.Provider,{value:s,children:e.jsxs(B,{...I,as:v,ref:ee,...!re(B)&&{ownerState:{...z,...I.ownerState}},...P,children:[p,E&&e.jsx(he,{children:E})]})})}),Ne=A(e.jsx("path",{d:"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6"})),He=A(e.jsx("path",{d:"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4"})),Oe=A(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"})),ie=A(e.jsx("path",{d:"M3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm4 4h14v-2H7zm0 4h14v-2H7zM7 7v2h14V7z"})),Ue=A(e.jsx("path",{d:"M19 13H5v-2h14z"})),Fe=6e4,T={SIGN_IN:"/auth/signin",SIGN_UP:"/auth/signup",SIGN_OUT:"/auth/signout",REFRESH:"/auth/refresh",ME:"/auth/me"},Ge="auth:signout";function Y(t){return typeof t=="object"&&t!==null&&"status"in t&&typeof t.status=="number"}let d=null;async function R(t,o={}){const n=await fetch(t,{credentials:"include",headers:{"Content-Type":"application/json",...o.headers??{}},...o});if(!n.ok){const c=await n.json().catch(()=>({}));throw{message:c.message??n.statusText,code:c.code??"UNKNOWN_ERROR",status:n.status,details:c}}return n.json().catch(()=>{throw{message:"Invalif response format",code:"PARSE_ERROR",status:n.status,details:null}})}function le(t){return{Authorization:`Bearer ${t}`}}const F={async signIn(t){const o=await R(T.SIGN_IN,{method:"POST",body:JSON.stringify(t)});return d=o,o},async signUp(t){return await R(T.SIGN_UP,{method:"POST",body:JSON.stringify(t)}),F.signIn({email:t.email,password:t.password})},async signOut(){d&&await R(T.SIGN_OUT,{method:"POST",headers:le(d.accessToken)}).catch(t=>{console.error("[authService] signOut request failed, clearing session anyway:",t)}),d=null,typeof window<"u"&&window.dispatchEvent(new CustomEvent(Ge))},async refreshToken(){try{const t=await R(T.REFRESH,{method:"POST",...d?{headers:le(d.accessToken)}:{}});return d=t,t}catch(t){throw Y(t)&&t.status===401&&(d=null,await F.signOut(),typeof window<"u"&&(window.location.href="/")),t}},getSession(){return d?d.expiresAt<=Date.now()?null:d:null},isAuthenticated(){return F.getSession()!==null},needsRefresh(){return d?d.expiresAt-Date.now()<Fe:!1},async hydrateFromServer(){try{const t=await R(T.ME);return d=t,t}catch(t){return Y(t)&&t.status===401?(d=null,null):(console.error("[authService] hydrateFromServer: unexpected error —",Y(t)?`status=${t.status} code=${t.code} message=${t.message}`:t),d=null,null)}}},_e={display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden",color:"var(--foreground)",bgcolor:"var(--background)"},Ve={bgcolor:"var(--nav-bg)",height:50,justifyContent:"center",boxShadow:"none",borderBottom:"1px solid var(--nav-border)",zIndex:1202},$e={justifyContent:"space-between",px:2,minHeight:"50px !important"},qe={color:"var(--primary-foreground)",textDecoration:"none",fontWeight:600,display:"flex",alignItems:"center",gap:.5,fontSize:"16px"},Ye={display:"flex",flex:1,width:"100%",height:"calc(100vh - 50px)",overflow:"hidden",bgcolor:"var(--background)"},Je={width:260,minWidth:260,maxWidth:260,borderRight:"1px solid var(--border)",display:{xs:"none",sm:"flex"},flexDirection:"column",bgcolor:"var(--background)",color:"var(--foreground)",flexShrink:0,"& .MuiTypography-root":{color:"inherit"}},Ke={flexGrow:1,display:"flex",width:"100%",height:"100%",overflow:"hidden",bgcolor:"var(--background)"},Qe={p:0,overflowY:"auto",flex:1,pt:"10px"},Xe=t=>({px:"24px",py:"12px",display:"flex",alignItems:"flex-start",gap:"12px",bgcolor:t?"var(--sidebar-accent) !important":"transparent",borderLeft:t?"4px solid var(--sidebar-primary)":"4px solid transparent",borderBottom:"1px solid var(--border)","&:hover":{bgcolor:t?"var(--sidebar-accent)":"var(--chart-6)"}}),Ze={mt:"3px",display:"flex",alignItems:"center",justifyContent:"center"},et={display:"flex",flexDirection:"column",gap:"4px"},tt=t=>({fontSize:"14px",color:"var(--foreground)",fontWeight:t?600:400,lineHeight:1.3}),ot={display:"flex",alignItems:"center",gap:"8px"},ce=[{label:"Premium",path:"/premium"},{label:"Explore",path:"/explore"},{label:"Problems",path:"/problems"},{label:"Contest",path:"/contest"},{label:"Discuss",path:"/discuss"}],nt=[{id:1,title:"1. Two Sum",status:"completed",difficulty:"Easy",diffColor:"var(--nav-accent-green)",pct:"49.2%"},{id:2,title:"2. Add Two Numbers",status:"progress",difficulty:"Medium",diffColor:"var(--nav-yellow)",pct:"41.8%"},{id:3,title:"3. Longest Substring Without Repeating",status:"unstarted",difficulty:"Medium",diffColor:"var(--nav-yellow)",pct:"33.9%"},{id:4,title:"4. Median of Two Sorted Arrays",status:"unstarted",difficulty:"Hard",diffColor:"var(--nav-red)",pct:"38.2%"},{id:5,title:"5. Valid Parentheses",status:"unstarted",difficulty:"Easy",diffColor:"var(--nav-accent-green)",pct:"40.1%"},{id:6,title:"6. Merge Two Sorted Lists",status:"unstarted",difficulty:"Easy",diffColor:"var(--nav-accent-green)",pct:"62.3%"}];let J=null;const rt=pe.createContext(null),st=()=>pe.useContext(rt)||{user:null},ge=({children:t,currentPath:o,onOpenAuthModal:n})=>{const{user:c}=st(),x=!!c,[f,u]=l.useState(!1),[h,g]=l.useState(!1),[L,y]=l.useState(null),[_,S]=l.useState(""),[m,w]=l.useState(()=>{if(typeof window<"u"){try{const s=localStorage.getItem("darkMode");if(s!==null)return s==="true"}catch{if(J!==null)return J==="true"}return window.matchMedia?.("(prefers-color-scheme: dark)").matches??!1}return!1});l.useEffect(()=>{if(typeof window<"u"){const s=window.document.documentElement;m?s.classList.add("dark"):s.classList.remove("dark")}},[m]),l.useEffect(()=>{typeof window<"u"&&S(window.location.pathname)},[]);const W=o||_,j=/^\/problems\/[^/]+$/.test(W),E=()=>{const s=!m;w(s);try{localStorage.setItem("darkMode",String(s))}catch{J=String(s)}},C=(s,a)=>{s.preventDefault(),typeof window<"u"&&(window.history.pushState({},"",a),window.dispatchEvent(new PopStateEvent("popstate")),S(a))},V=async()=>{y(null);try{await F.signOut()}catch{}typeof window<"u"&&(window.history.pushState({},"","/"),window.dispatchEvent(new PopStateEvent("popstate")),S("/"))},$=l.useMemo(()=>fe({palette:{mode:m?"dark":"light",background:{default:"var(--background)",paper:"var(--card)"}}}),[m]),k=s=>e.jsx(ne,{sx:Qe,children:nt.map(a=>{const p=a.id===1;return e.jsx(ae,{disablePadding:!0,children:e.jsxs(se,{onClick:()=>{s&&s()},sx:Xe(p),children:[e.jsxs(r,{sx:Ze,children:[a.status==="completed"&&e.jsx(Oe,{sx:{color:"var(--nav-accent-green)",fontSize:"18px"}}),a.status==="progress"&&e.jsx(Ue,{sx:{color:"var(--nav-yellow)",fontSize:"18px",fontWeight:"bold"}}),a.status==="unstarted"&&e.jsx(je,{sx:{color:"var(--muted-foreground)",fontSize:"18px"}})]}),e.jsxs(r,{sx:et,children:[e.jsx(i,{variant:"body2",sx:tt(p),children:a.title}),e.jsxs(r,{sx:ot,children:[e.jsx(i,{sx:{fontSize:"11px",fontWeight:600,color:`${a.diffColor} !important`},children:a.difficulty}),e.jsxs(i,{sx:{fontSize:"11px",color:"var(--muted-foreground) !important"},children:["• ",a.pct]})]})]})]})},a.id)})});return e.jsxs(ye,{theme:$,children:[e.jsx(be,{}),e.jsxs(r,{sx:_e,children:[e.jsx(ve,{position:"static",sx:Ve,children:e.jsxs(Se,{sx:$e,children:[e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:.5},children:[e.jsx(b,{color:"inherit","aria-label":"open main menu",onClick:()=>u(!0),sx:{display:{xs:"flex",sm:"none"},minWidth:40,minHeight:40,p:.5},children:e.jsx(we,{})}),j&&!f&&e.jsx(b,{color:"inherit","aria-label":"open problems list",onClick:()=>g(!0),sx:{display:{xs:"flex",sm:"none"},minWidth:40,minHeight:40,p:.5,color:"var(--editor-text)"},children:e.jsx(ie,{})}),e.jsxs(i,{variant:"h6",component:"a",href:"/",onClick:s=>C(s,"/"),sx:{...qe,display:"flex",alignItems:"center"},children:[e.jsx(r,{component:"span",sx:{color:"var(--nav-accent-green)",fontWeight:"bold"},children:"</>"}),e.jsx(r,{component:"span",sx:{display:{xs:"none",sm:"inline"},ml:.5},children:"LeetCode"})]})]}),e.jsx(r,{sx:{flexGrow:1,display:{xs:"none",sm:"block"}}}),e.jsx(r,{sx:{display:{xs:"none",sm:"flex"},alignItems:"center",gap:3,mr:3},children:ce.map(s=>{const a=W.startsWith(s.path)||s.label==="Problems"&&j;return e.jsx(te,{href:s.path,onClick:p=>C(p,s.path),sx:{minHeight:44,textTransform:"none",fontSize:"13px",color:"var(--editor-text)",fontWeight:a?600:400,padding:0,minWidth:"auto"},children:s.label},s.label)})}),e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:{xs:.5,sm:2}},children:[e.jsx(b,{onClick:E,color:"inherit","aria-label":"toggle theme",sx:{minWidth:40,minHeight:40,color:"var(--editor-text)"},children:m?e.jsx(Ne,{}):e.jsx(He,{})}),x?e.jsxs(e.Fragment,{children:[e.jsx(b,{onClick:s=>y(s.currentTarget),sx:{minWidth:40,minHeight:40},children:e.jsx(Ce,{alt:c?.username||"User",src:c?.avatarUrl||"",sx:{width:24,height:24}})}),e.jsxs(ke,{anchorEl:L,open:!!L,onClose:()=>y(null),children:[e.jsx(q,{onClick:()=>y(null),children:"Profile"}),e.jsx(q,{onClick:()=>y(null),children:"Settings"}),e.jsx(q,{onClick:V,children:"Sign Out"})]})]}):e.jsx(te,{variant:"contained",onClick:n,sx:{bgcolor:"var(--nav-accent-green)",color:"var(--editor-text)",textTransform:"none",fontWeight:600,fontSize:"12px",height:30,borderRadius:"4px",px:{xs:1.5,sm:2},whiteSpace:"nowrap","&:hover":{bgcolor:"var(--success-foreground)"}},children:"Sign In"})]})]})}),e.jsxs(r,{sx:Ye,children:[j&&e.jsxs(r,{sx:{...Je,bgcolor:"var(--background)",color:"var(--foreground)",borderRight:"1px solid var(--border)",display:{xs:"none",sm:"flex"},flexDirection:"column"},children:[e.jsx(r,{sx:{px:3,py:2,borderBottom:"1px solid var(--border)"},children:e.jsx(i,{variant:"h6",sx:{fontWeight:700,fontSize:"16px"},children:"Problems"})}),k()]}),e.jsx(r,{component:"main",sx:Ke,children:t})]}),e.jsx(oe,{variant:"temporary",open:f,onClose:()=>u(!1),anchor:"left",sx:{display:{xs:"block",sm:"none"},zIndex:1400,"& .MuiDrawer-paper":{bgcolor:"var(--nav-bg)",boxShadow:"none",width:280,height:"100vh",borderRight:"none"},"& .MuiModal-backdrop":{bgcolor:"var(--chart-6)"}},children:e.jsxs(r,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[e.jsxs(r,{sx:{display:"flex",alignItems:"center",px:"24px",height:"50px",justifyContent:"space-between"},children:[e.jsxs(i,{variant:"h6",sx:{color:"var(--primary-foreground)",fontWeight:600,display:"flex",alignItems:"center",fontSize:"16px"},children:[e.jsx(r,{component:"span",sx:{color:"var(--nav-accent-green)",fontWeight:"bold",mr:.5},children:"</>"}),"LeetCode"]}),e.jsx(b,{onClick:()=>u(!1),sx:{color:"var(--editor-text)",p:0},children:e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),e.jsx(ne,{sx:{pt:"24px",px:"24px",display:"flex",flexDirection:"column",gap:"24px"},children:ce.map(s=>e.jsx(ae,{disablePadding:!0,children:e.jsx(se,{href:s.path,onClick:a=>{u(!1),C(a,s.path)},sx:{p:0,bgcolor:"transparent !important","&:hover":{"& .MuiTypography-root":{color:"var(--primary-foreground)"}}},children:e.jsx(i,{sx:{fontSize:"15px",color:"var(--editor-text)"},children:s.label})})},s.label))})]})}),e.jsx(oe,{variant:"temporary",open:h,onClose:()=>g(!1),anchor:"left",sx:{display:{xs:"block",sm:"none"},zIndex:1300,"& .MuiDrawer-paper":{bgcolor:"var(--background)",boxShadow:"none",width:290,height:"100vh"}},children:e.jsxs(r,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[e.jsxs(r,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",px:"24px",height:"50px",bgcolor:m?"var(--nav-bg)":"var(--sidebar)",color:"var(--foreground)",borderBottom:"1px solid var(--border)"},children:[e.jsx(b,{disabled:!0,sx:{color:"var(--muted-foreground)",p:0},children:e.jsx(ie,{fontSize:"small"})}),e.jsx(i,{variant:"body1",sx:{fontWeight:600,fontSize:"15px"},children:"Problems"}),e.jsx(b,{onClick:()=>g(!1),sx:{color:"var(--muted-foreground)",p:0},children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),k(()=>g(!1))]})})]})]})};ge.__docgenInfo={description:"",methods:[],displayName:"AppShell",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},currentPath:{required:!1,tsType:{name:"string"},description:""},onOpenAuthModal:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const M={workspaceRootStyles:{display:"flex",width:"100%",height:"100%",bgcolor:"var(--background)"},leftWorkspaceStyles:{flex:1,p:3,display:{xs:"none",md:"flex"},alignItems:"center",justifyContent:"center",borderRight:"1px solid var(--sidebar-border)",bgcolor:"var(--background)"},rightWorkspaceStyles:{flex:1,maxWidth:{xs:"100%",md:"50%"},bgcolor:"var(--background)",display:"flex",flexDirection:"column",borderLeft:"1px solid var(--sidebar-border)"},codeEditorAreaStyles:{flex:1,p:3,display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"var(--nav-bg)"},consolePanelWrapperStyles:{bgcolor:"var(--editor-panel-bg)",display:"flex",flexDirection:"column"},consoleToolbarStyles:{display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:"center",gap:{xs:1.5,sm:0},px:"14px",py:{xs:"12px",sm:0},height:{xs:"auto",sm:"46px"},bgcolor:"var(--nav-border)",userSelect:"none",borderTop:"1px solid var(--editor-panel-border)"},tabsCapsuleStyles:{display:"flex",alignItems:"center",bgcolor:"var(--editor-panel)",borderRadius:"24px",p:"3px",width:{xs:"100%",sm:"auto"}},getTabItemStyles:t=>({cursor:"pointer",fontSize:"12.5px",fontWeight:500,borderRadius:"20px",px:"14px",py:"4px",flex:{xs:1,sm:"none"},textAlign:"center",whiteSpace:"nowrap",transition:"all 0.15s ease",color:"var(--card)",bgcolor:t?"var(--editor-panel-bg)":"transparent"}),actionButtonsContainerStyles:{display:"flex",gap:"8px",alignItems:"center",width:{xs:"100%",sm:"auto"}},runButtonStyles:{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",bgcolor:"var(--editor-panel-bg)",color:"var(--secondary)",height:"32px",width:"77.06px",borderRadius:"6px",flex:{xs:1,sm:"none"},fontSize:"12.5px",fontWeight:500,cursor:"pointer",whiteSpace:"nowrap",transition:"background-color 0.15s","&:hover":{bgcolor:"var(--nav-bg)"}},submitButtonStyles:{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",bgcolor:"var(--nav-accent-green)",color:"var(--editor-text)",height:"32px",width:"95.34px",borderRadius:"6px",flex:{xs:1,sm:"none"},fontSize:"12.5px",fontWeight:600,cursor:"pointer",whiteSpace:"nowrap",transition:"background-color 0.15s","&:hover":{bgcolor:"var(--success-foreground)"}},lowerPanelContextStyles:{p:"16px",display:"flex",flexDirection:"column",gap:"12px",minHeight:220,maxHeight:220,overflowY:"auto",bgcolor:"var(--nav-border)"},caseCardStyles:{width:"100%",backgroundColor:"var(--editor-panel)",borderRadius:"5px",padding:"12px 16px",boxSizing:"border-box",border:"1px solid var(--editor-panel-border)"},noResultsWrapperStyles:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",pt:4}},at=()=>{const[t,o]=l.useState(0),n=M;return e.jsxs(r,{sx:n.workspaceRootStyles,children:[e.jsx(r,{sx:n.leftWorkspaceStyles,children:e.jsx(i,{variant:"body2",sx:{color:"var(--foreground)",fontFamily:"monospace"},children:"[ Left Workspace / Problem Details Area ]"})}),e.jsxs(r,{sx:n.rightWorkspaceStyles,children:[e.jsx(r,{sx:n.codeEditorAreaStyles,children:e.jsx(i,{variant:"body2",sx:{color:"var(--muted-foreground)",fontFamily:"monospace"},children:"[ Code Editor Area ]"})}),e.jsxs(r,{sx:n.consolePanelWrapperStyles,children:[e.jsxs(r,{sx:n.consoleToolbarStyles,children:[e.jsxs(r,{sx:n.tabsCapsuleStyles,children:[e.jsx(r,{onClick:()=>o(0),sx:n.getTabItemStyles(t===0),children:"Testcases"}),e.jsx(r,{onClick:()=>o(1),sx:n.getTabItemStyles(t===1),children:"Test Result"})]}),e.jsxs(r,{sx:n.actionButtonsContainerStyles,children:[e.jsxs(r,{onClick:()=>{},sx:n.runButtonStyles,children:[e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),"Run"]}),e.jsxs(r,{onClick:()=>{},sx:n.submitButtonStyles,children:[e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"}),e.jsx("polyline",{points:"17 8 12 3 7 8"}),e.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),"Submit"]})]})]}),e.jsx(r,{sx:n.lowerPanelContextStyles,children:t===0?e.jsxs(e.Fragment,{children:[e.jsxs(r,{sx:n.caseCardStyles,children:[e.jsx(i,{variant:"body2",sx:{color:"var(--editor-text)",fontWeight:600,fontFamily:"monospace",fontSize:"12px",mb:"6px"},children:"Case 1"}),e.jsx(i,{variant:"caption",sx:{color:"var(--editor-text)",fontFamily:"monospace",fontSize:"12px",display:"block",mb:"4px"},children:"Input: [2,7,11,15], 9"}),e.jsx(i,{variant:"caption",sx:{color:"var(--editor-text)",fontFamily:"monospace",fontSize:"12px",display:"block"},children:"Expected: [0,1]"})]}),e.jsxs(r,{sx:n.caseCardStyles,children:[e.jsx(i,{variant:"body2",sx:{color:"var(--editor-text)",fontWeight:600,fontFamily:"monospace",fontSize:"12px",mb:"6px"},children:"Case 2"}),e.jsx(i,{variant:"caption",sx:{color:"var(--editor-text)",fontFamily:"monospace",fontSize:"12px",display:"block",mb:"4px"},children:"Input: [3,2,4], 6"}),e.jsx(i,{variant:"caption",sx:{color:"var(--editor-text)",fontFamily:"monospace",fontSize:"12px",display:"block"},children:"Expected: [1,2]"})]})]}):e.jsx(r,{sx:n.noResultsWrapperStyles,children:e.jsx(i,{variant:"body2",sx:{color:"var(--editor-text)",textAlign:"center",fontFamily:"monospace",fontSize:"12px"},children:"No test results yet. Run your code to see results."})})})]})]})]})},it=l.createContext(null),G=t=>o=>e.jsx(it.Provider,{value:{user:t,config:{defaultCacheTTL:3600,basePath:"/api",environment:"development"}},children:e.jsx(o,{})}),Jt={title:"Components/AppShell",component:ge,parameters:{layout:"fullscreen"},args:{children:e.jsx(at,{})}},D={decorators:[G(null)],args:{currentPath:"/problems/two-sum"}},N={decorators:[G({username:"TestUser",avatarUrl:""})],args:{currentPath:"/problems/two-sum"}},H={decorators:[G(null)],args:{currentPath:"/problems/two-sum"},parameters:{viewport:{defaultViewport:"mobile1"}}},O={decorators:[G(null),t=>{try{localStorage.setItem("darkMode","true")}catch{}return typeof window<"u"&&document.documentElement.classList.add("dark"),e.jsx(t,{})}],args:{currentPath:"/problems/two-sum"}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  decorators: [authProviderMock(null)],
  args: {
    currentPath: '/problems/two-sum'
  }
}`,...D.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  decorators: [authProviderMock({
    username: 'TestUser',
    avatarUrl: ''
  } as AuthUser)],
  args: {
    currentPath: '/problems/two-sum'
  }
}`,...N.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  decorators: [authProviderMock(null)],
  args: {
    currentPath: '/problems/two-sum'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...H.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};const Kt=["storyWorkspaceStyles","Unauthenticated","Authenticated","MobileView","DarkMode"];export{N as Authenticated,O as DarkMode,H as MobileView,D as Unauthenticated,Kt as __namedExportsOrder,Jt as default,M as storyWorkspaceStyles};
