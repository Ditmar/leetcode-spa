import{H as a,P as pe,B as e,e as K,g as be,a as Se,C as we}from"./iframe-Dt7jQptI.js";import{c as E}from"./createSvgIcon-DKPF1DzT.js";import{A as je,T as Ce,M as ke}from"./Menu-D-G0vth6.js";import{R as Ie}from"./RadioButtonUnchecked-D4vfQd78.js";import{B as r}from"./Box-DraI5h5K.js";import{I as j}from"./IconButton-djm-_N3-.js";import{T as l}from"./Typography-B5Z9ZEib.js";import{B as ne}from"./Button-CtI9MaPo.js";import{A as Pe}from"./Avatar-BytuZRT8.js";import{M as Te}from"./Menu-Bgsggz5Q.js";import{M as $}from"./MenuItem-B1O-dN84.js";import{D as oe}from"./Drawer-BZ2CyQfF.js";import{a as F,L as re}from"./List-C-YNHZgU.js";import{g as xe,b as ue,c as me,e as X,m as Ae}from"./memoTheme-B7EyfrRJ.js";import{i as Re}from"./isMuiElement-DLuq-BTs.js";import{u as Me}from"./useForkRef-DFFlFZBd.js";import{i as se}from"./mergeSlotProps-CWafQdH2.js";import{l as Le,L as ae}from"./ListItemButton-C3FwIKX9.js";import"./preload-helper-BFbRC-vR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-C10N96fA.js";import"./useTheme-B34MzdL0.js";import"./ButtonBase-CJab0Sp9.js";import"./useTimeout-B-9WlZDA.js";import"./CircularProgress-D-Dp6dhm.js";import"./useSlot-5_AWUkRu.js";import"./useSlotProps-zQyR6Y7F.js";import"./Popover-BoOW5GRB.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-Dej72FsJ.js";import"./Fade-D163Y2kB.js";import"./index-CfFSY3XY.js";import"./index-DJe5obBp.js";import"./getReactElementRef-C397H-uI.js";import"./mergeSlotProps-NUlU7JkT.js";import"./Modal-CW8FCcph.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-k8SKMukv.js";import"./dividerClasses-7TqVjAqj.js";function Ee(t){return xe("MuiListItem",t)}ue("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"]);function We(t){return xe("MuiListItemSecondaryAction",t)}ue("MuiListItemSecondaryAction",["root","disableGutters"]);const ze=t=>{const{disableGutters:n,classes:o}=t;return me({root:["root",n&&"disableGutters"]},We,o)},Be=X("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:o}=t;return[n.root,o.disableGutters&&n.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:t})=>t.disableGutters,style:{right:0}}]}),he=a.forwardRef(function(n,o){const i=pe({props:n,name:"MuiListItemSecondaryAction"}),{className:x,...g}=i,u=a.useContext(F),m={...i,disableGutters:u.disableGutters},h=ze(m);return e.jsx(Be,{className:K(h.root,x),ownerState:m,ref:o,...g})});he.muiName="ListItemSecondaryAction";const Ne=(t,n)=>{const{ownerState:o}=t;return[n.root,o.dense&&n.dense,o.alignItems==="flex-start"&&n.alignItemsFlexStart,o.divider&&n.divider,!o.disableGutters&&n.gutters,!o.disablePadding&&n.padding,o.hasSecondaryAction&&n.secondaryAction]},De=t=>{const{alignItems:n,classes:o,dense:i,disableGutters:x,disablePadding:g,divider:u,hasSecondaryAction:m}=t;return me({root:["root",i&&"dense",!x&&"gutters",!g&&"padding",u&&"divider",n==="flex-start"&&"alignItemsFlexStart",m&&"secondaryAction"],container:["container"]},Ee,o)},He=X("div",{name:"MuiListItem",slot:"Root",overridesResolver:Ne})(Ae(({theme:t})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:n})=>!n.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:n})=>!n.disablePadding&&n.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:n})=>!n.disablePadding&&!n.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:n})=>!n.disablePadding&&!!n.secondaryAction,style:{paddingRight:48}},{props:({ownerState:n})=>!!n.secondaryAction,style:{[`& > .${Le.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:n})=>n.divider,style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:n})=>n.button,style:{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:n})=>n.hasSecondaryAction,style:{paddingRight:48}}]}))),Ue=X("li",{name:"MuiListItem",slot:"Container"})({position:"relative"}),ie=a.forwardRef(function(n,o){const i=pe({props:n,name:"MuiListItem"}),{alignItems:x="center",children:g,className:u,component:m,components:h={},componentsProps:w={},ContainerComponent:v="li",ContainerProps:{className:f,...S}={},dense:p=!1,disableGutters:y=!1,disablePadding:I=!1,divider:P=!1,secondaryAction:W,slotProps:V={},slots:q={},...z}=i,s=a.useContext(F),d=a.useMemo(()=>({dense:p||s.dense||!1,alignItems:x,disableGutters:y}),[x,s.dense,p,y]),B=a.useRef(null),C=a.Children.toArray(g),Z=C.length&&Re(C[C.length-1],["ListItemSecondaryAction"]),N={...i,alignItems:x,dense:d.dense,disableGutters:y,disablePadding:I,divider:P,hasSecondaryAction:Z},ee=De(N),te=Me(B,o),D=q.root||h.Root||He,T=V.root||w.root||{},A={className:K(ee.root,T.className,u),...z};let k=m||"li";return Z?(k=!A.component&&!m?"div":k,v==="li"&&(k==="li"?k="div":A.component==="li"&&(A.component="div")),e.jsx(F.Provider,{value:d,children:e.jsxs(Ue,{as:v,className:K(ee.container,f),ref:te,ownerState:N,...S,children:[e.jsx(D,{...T,...!se(D)&&{as:k,ownerState:{...N,...T.ownerState}},...A,children:C}),C.pop()]})})):e.jsx(F.Provider,{value:d,children:e.jsxs(D,{...T,as:k,ref:te,...!se(D)&&{ownerState:{...N,...T.ownerState}},...A,children:[C,W&&e.jsx(he,{children:W})]})})}),Oe=6e4,R={SIGN_IN:"/auth/signin",SIGN_UP:"/auth/signup",SIGN_OUT:"/auth/signout",REFRESH:"/auth/refresh",ME:"/auth/me"},Q="auth:signout";function Y(t){return typeof t=="object"&&t!==null&&"status"in t&&typeof t.status=="number"}let c=null;async function M(t,n={}){const o=await fetch(t,{credentials:"include",headers:{"Content-Type":"application/json",...n.headers??{}},...n});if(!o.ok){const i=await o.json().catch(()=>({}));throw{message:i.message??o.statusText,code:i.code??"UNKNOWN_ERROR",status:o.status,details:i}}return o.json().catch(()=>{throw{message:"Invalif response format",code:"PARSE_ERROR",status:o.status,details:null}})}function le(t){return{Authorization:`Bearer ${t}`}}const b={async signIn(t){const n=await M(R.SIGN_IN,{method:"POST",body:JSON.stringify(t)});return c=n,n},async signUp(t){return await M(R.SIGN_UP,{method:"POST",body:JSON.stringify(t)}),b.signIn({email:t.email,password:t.password})},async signOut(){c&&await M(R.SIGN_OUT,{method:"POST",headers:le(c.accessToken)}).catch(t=>{console.error("[authService] signOut request failed, clearing session anyway:",t)}),c=null,typeof window<"u"&&window.dispatchEvent(new CustomEvent(Q))},async refreshToken(){try{const t=await M(R.REFRESH,{method:"POST",...c?{headers:le(c.accessToken)}:{}});return c=t,t}catch(t){throw Y(t)&&t.status===401&&(c=null,await b.signOut(),typeof window<"u"&&(window.location.href="/")),t}},getSession(){return c?c.expiresAt<=Date.now()?null:c:null},isAuthenticated(){return b.getSession()!==null},needsRefresh(){return c?c.expiresAt-Date.now()<Oe:!1},async hydrateFromServer(){try{const t=await M(R.ME);return c=t,t}catch(t){return Y(t)&&t.status===401?(c=null,null):(console.error("[authService] hydrateFromServer: unexpected error —",Y(t)?`status=${t.status} code=${t.code} message=${t.message}`:t),c=null,null)}}},_e=a.createContext(null);function fe({children:t}){const[n,o]=a.useState(null),[i,x]=a.useState(!0),[g,u]=a.useState(null);a.useEffect(()=>{let f=!1;(async()=>{try{const y=await b.hydrateFromServer();f||o(y)}catch(y){console.error("[AuthProvider] Session hydration failed:",y),f||u(y instanceof Error?y:new Error("Session hydration failed"))}finally{f||x(!1)}})();function p(){o(null)}return window.addEventListener(Q,p),()=>{f=!0,window.removeEventListener(Q,p)}},[]);const m=a.useCallback(async f=>{const S=await b.signIn(f);o(S)},[]),h=a.useCallback(async f=>{const S=await b.signUp(f);o(S)},[]),w=a.useCallback(async()=>{await b.signOut(),o(null)},[]),v=a.useMemo(()=>({user:n?.user??null,isAuthenticated:b.isAuthenticated(),isLoading:i,hydrationError:g,signIn:m,signUp:h,signOut:w}),[n,i,g,m,h,w]);return e.jsx(_e.Provider,{value:v,children:t})}fe.__docgenInfo={description:"",methods:[],displayName:"AuthProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const ge=a.createContext({config:null,user:null});function Fe(){return a.useContext(ge)}function ye({children:t,config:n=null,user:o=null}){return e.jsx(ge.Provider,{value:{config:n,user:o},children:e.jsx(fe,{children:t})})}ye.__docgenInfo={description:"",methods:[],displayName:"AppProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},config:{required:!1,tsType:{name:"union",raw:"AppConfig | null",elements:[{name:"z.infer",elements:[{name:"configSchema"}],raw:"z.infer<typeof configSchema>"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},user:{required:!1,tsType:{name:"union",raw:"AuthUser | null",elements:[{name:"AuthUser"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}}}};const Ge=E(e.jsx("path",{d:"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6"})),Ve=E(e.jsx("path",{d:"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4"})),qe=E(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"})),ce=E(e.jsx("path",{d:"M3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm4 4h14v-2H7zm0 4h14v-2H7zM7 7v2h14V7z"})),$e=E(e.jsx("path",{d:"M19 13H5v-2h14z"})),Ye={display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden",color:"var(--foreground)",bgcolor:"var(--background)"},Je={bgcolor:"var(--nav-bg)",height:50,justifyContent:"center",boxShadow:"none",borderBottom:"1px solid var(--nav-border)",zIndex:1202},Ke={justifyContent:"space-between",px:2,minHeight:"50px !important"},Qe={color:"var(--primary-foreground)",textDecoration:"none",fontWeight:600,display:"flex",alignItems:"center",gap:.5,fontSize:"16px"},Xe={display:"flex",flex:1,width:"100%",height:"calc(100vh - 50px)",overflow:"hidden",bgcolor:"var(--background)"},Ze={width:260,minWidth:260,maxWidth:260,borderRight:"1px solid var(--border)",display:{xs:"none",sm:"flex"},flexDirection:"column",bgcolor:"var(--background)",color:"var(--foreground)",flexShrink:0,"& .MuiTypography-root":{color:"inherit"}},et={flexGrow:1,display:"flex",width:"100%",height:"100%",overflow:"hidden",bgcolor:"var(--background)"},tt={p:0,overflowY:"auto",flex:1,pt:"10px"},nt=t=>({px:"24px",py:"12px",display:"flex",alignItems:"flex-start",gap:"12px",bgcolor:t?"var(--sidebar-accent) !important":"transparent",borderLeft:t?"4px solid var(--sidebar-primary)":"4px solid transparent",borderBottom:"1px solid var(--border)","&:hover":{bgcolor:t?"var(--sidebar-accent)":"var(--chart-6)"}}),ot={mt:"3px",display:"flex",alignItems:"center",justifyContent:"center"},rt={display:"flex",flexDirection:"column",gap:"4px"},st=t=>({fontSize:"14px",color:"var(--foreground)",fontWeight:t?600:400,lineHeight:1.3}),at={display:"flex",alignItems:"center",gap:"8px"},de=[{label:"Premium",path:"/premium"},{label:"Explore",path:"/explore"},{label:"Problems",path:"/problems"},{label:"Contest",path:"/contest"},{label:"Discuss",path:"/discuss"}],it=[{id:1,title:"1. Two Sum",status:"completed",difficulty:"Easy",diffColor:"var(--nav-accent-green)",pct:"49.2%"},{id:2,title:"2. Add Two Numbers",status:"progress",difficulty:"Medium",diffColor:"var(--nav-yellow)",pct:"41.8%"},{id:3,title:"3. Longest Substring Without Repeating",status:"unstarted",difficulty:"Medium",diffColor:"var(--nav-yellow)",pct:"33.9%"},{id:4,title:"4. Median of Two Sorted Arrays",status:"unstarted",difficulty:"Hard",diffColor:"var(--nav-red)",pct:"38.2%"},{id:5,title:"5. Valid Parentheses",status:"unstarted",difficulty:"Easy",diffColor:"var(--nav-accent-green)",pct:"40.1%"},{id:6,title:"6. Merge Two Sorted Lists",status:"unstarted",difficulty:"Easy",diffColor:"var(--nav-accent-green)",pct:"62.3%"}];let J=null;const ve=({children:t,currentPath:n,onOpenAuthModal:o})=>{const{user:i}=Fe(),x=!!i,[g,u]=a.useState(!1),[m,h]=a.useState(!1),[w,v]=a.useState(null),[f,S]=a.useState(""),[p,y]=a.useState(()=>{if(typeof window<"u"){try{const s=localStorage.getItem("darkMode");if(s!==null)return s==="true"}catch{if(J!==null)return J==="true"}return window.matchMedia?.("prefers-color-scheme: dark").matches??!1}return!1});a.useEffect(()=>{if(typeof window<"u"){const s=window.document.documentElement;p?s.classList.add("dark"):s.classList.remove("dark")}},[p]),a.useEffect(()=>{typeof window<"u"&&S(window.location.pathname)},[]);const I=n||f,P=/^\/problems\/[^/]+$/.test(I)||I.includes("two-sum"),W=()=>{const s=!p;y(s);try{localStorage.setItem("darkMode",String(s))}catch{J=String(s)}},V=async()=>{if(v(null),await b.signOut(),typeof window<"u"){window.history.pushState(null,"","/");const s=new PopStateEvent("popstate");window.dispatchEvent(s)}},q=a.useMemo(()=>be({palette:{mode:p?"dark":"light",background:{default:"var(--background)",paper:"var(--card)"}}}),[p]),z=s=>e.jsx(re,{sx:tt,children:it.map(d=>{const B=d.id===1;return e.jsx(ie,{disablePadding:!0,children:e.jsxs(ae,{onClick:()=>{s&&s()},sx:nt(B),children:[e.jsxs(r,{sx:ot,children:[d.status==="completed"&&e.jsx(qe,{sx:{color:"var(--nav-accent-green)",fontSize:"18px"}}),d.status==="progress"&&e.jsx($e,{sx:{color:"var(--nav-yellow)",fontSize:"18px",fontWeight:"bold"}}),d.status==="unstarted"&&e.jsx(Ie,{sx:{color:"var(--muted-foreground)",fontSize:"18px"}})]}),e.jsxs(r,{sx:rt,children:[e.jsx(l,{variant:"body2",sx:st(B),children:d.title}),e.jsxs(r,{sx:at,children:[e.jsx(l,{sx:{fontSize:"11px",fontWeight:600,color:`${d.diffColor} !important`},children:d.difficulty}),e.jsxs(l,{sx:{fontSize:"11px",color:"var(--muted-foreground) !important"},children:["• ",d.pct]})]})]})]})},d.id)})});return e.jsxs(Se,{theme:q,children:[e.jsx(we,{}),e.jsxs(r,{sx:Ye,children:[e.jsx(je,{position:"static",sx:Je,children:e.jsxs(Ce,{sx:Ke,children:[e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:.5},children:[e.jsx(j,{color:"inherit","aria-label":"open main menu",onClick:()=>u(!0),sx:{display:{xs:"flex",sm:"none"},minWidth:40,minHeight:40,p:.5},children:e.jsx(ke,{})}),P&&!g&&e.jsx(j,{color:"inherit","aria-label":"open problems list",onClick:()=>h(!0),sx:{display:{xs:"flex",sm:"none"},minWidth:40,minHeight:40,p:.5,color:"var(--editor-text)"},children:e.jsx(ce,{})}),e.jsxs(l,{variant:"h6",component:"a",href:"/",sx:{...Qe,display:"flex",alignItems:"center"},children:[e.jsx(r,{component:"span",sx:{color:"var(--nav-accent-green)",fontWeight:"bold"},children:"</>"}),e.jsx(r,{component:"span",sx:{display:{xs:"none",sm:"inline"},ml:.5},children:"LeetCode"})]})]}),e.jsx(r,{sx:{flexGrow:1,display:{xs:"none",sm:"block"}}}),e.jsx(r,{sx:{display:{xs:"none",sm:"flex"},alignItems:"center",gap:3,mr:3},children:de.map(s=>{const d=I.startsWith(s.path)||s.label==="Problems"&&P;return e.jsx(ne,{href:s.path,sx:{minHeight:44,textTransform:"none",fontSize:"13px",color:"var(--editor-text)",fontWeight:d?600:400,padding:0,minWidth:"auto"},children:s.label},s.label)})}),e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:{xs:.5,sm:2}},children:[e.jsx(j,{onClick:W,color:"inherit","aria-label":"toggle theme",sx:{minWidth:40,minHeight:40,color:"var(--editor-text)"},children:p?e.jsx(Ge,{}):e.jsx(Ve,{})}),x?e.jsxs(e.Fragment,{children:[e.jsx(j,{onClick:s=>v(s.currentTarget),sx:{minWidth:40,minHeight:40},children:e.jsx(Pe,{alt:i?.username||"User",src:i?.avatarUrl||"",sx:{width:24,height:24}})}),e.jsxs(Te,{anchorEl:w,open:!!w,onClose:()=>v(null),children:[e.jsx($,{onClick:()=>v(null),children:"Profile"}),e.jsx($,{onClick:()=>v(null),children:"Settings"}),e.jsx($,{onClick:V,children:"Sign Out"})]})]}):e.jsx(ne,{variant:"contained",onClick:o,sx:{bgcolor:"var(--nav-accent-green)",color:"var(--editor-text)",textTransform:"none",fontWeight:600,fontSize:"12px",height:30,borderRadius:"4px",px:{xs:1.5,sm:2},whiteSpace:"nowrap","&:hover":{bgcolor:"var(--success-foreground)"}},children:"Sign In"})]})]})}),e.jsxs(r,{sx:Xe,children:[P&&e.jsxs(r,{sx:{...Ze,bgcolor:"var(--background)",color:"var(--foreground)",borderRight:"1px solid var(--border)",display:{xs:"none",sm:"flex"},flexDirection:"column"},children:[e.jsx(r,{sx:{px:3,py:2,borderBottom:"1px solid var(--border)"},children:e.jsx(l,{variant:"h6",sx:{fontWeight:700,fontSize:"16px"},children:"Problems"})}),z()]}),e.jsx(r,{component:"main",sx:et,children:t})]}),e.jsx(oe,{variant:"temporary",open:g,onClose:()=>u(!1),anchor:"left",sx:{display:{xs:"block",sm:"none"},zIndex:1400,"& .MuiDrawer-paper":{bgcolor:"var(--nav-bg)",boxShadow:"none",width:280,height:"100vh",borderRight:"none"},"& .MuiModal-backdrop":{bgcolor:"var(--chart-6)"}},children:e.jsxs(r,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[e.jsxs(r,{sx:{display:"flex",alignItems:"center",px:"24px",height:"50px",justifyContent:"space-between"},children:[e.jsxs(l,{variant:"h6",sx:{color:"var(--primary-foreground)",fontWeight:600,display:"flex",alignItems:"center",fontSize:"16px"},children:[e.jsx(r,{component:"span",sx:{color:"var(--nav-accent-green)",fontWeight:"bold",mr:.5},children:"</>"}),"LeetCode"]}),e.jsx(j,{onClick:()=>u(!1),sx:{color:"var(--editor-text)",p:0},children:e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),e.jsx(re,{sx:{pt:"24px",px:"24px",display:"flex",flexDirection:"column",gap:"24px"},children:de.map(s=>e.jsx(ie,{disablePadding:!0,children:e.jsx(ae,{href:s.path,onClick:()=>u(!1),sx:{p:0,bgcolor:"transparent !important","&:hover":{"& .MuiTypography-root":{color:"var(--primary-foreground)"}}},children:e.jsx(l,{sx:{fontSize:"15px",color:"var(--editor-text)"},children:s.label})})},s.label))})]})}),e.jsx(oe,{variant:"temporary",open:m,onClose:()=>h(!1),anchor:"left",sx:{display:{xs:"block",sm:"none"},zIndex:1300,"& .MuiDrawer-paper":{bgcolor:"var(--background)",boxShadow:"none",width:290,height:"100vh"}},children:e.jsxs(r,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[e.jsxs(r,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",px:"24px",height:"50px",bgcolor:p?"var(--nav-bg)":"var(--sidebar)",color:"var(--foreground)",borderBottom:"1px solid var(--border)"},children:[e.jsx(j,{disabled:!0,sx:{color:"var(--muted-foreground)",p:0},children:e.jsx(ce,{fontSize:"small"})}),e.jsx(l,{variant:"body1",sx:{fontWeight:600,fontSize:"15px"},children:"Problems"}),e.jsx(j,{onClick:()=>h(!1),sx:{color:"var(--muted-foreground)",p:0},children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),z(()=>h(!1))]})})]})]})};ve.__docgenInfo={description:"",methods:[],displayName:"AppShell",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},currentPath:{required:!1,tsType:{name:"string"},description:""},onOpenAuthModal:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const L={workspaceRootStyles:{display:"flex",width:"100%",height:"100%",bgcolor:"var(--background)"},leftWorkspaceStyles:{flex:1,p:3,display:{xs:"none",md:"flex"},alignItems:"center",justifyContent:"center",borderRight:"1px solid var(--sidebar-border)",bgcolor:"var(--background)"},rightWorkspaceStyles:{flex:1,maxWidth:{xs:"100%",md:"50%"},bgcolor:"var(--background)",display:"flex",flexDirection:"column",borderLeft:"1px solid var(--sidebar-border)"},codeEditorAreaStyles:{flex:1,p:3,display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"var(--nav-bg)"},consolePanelWrapperStyles:{bgcolor:"var(--editor-panel-bg)",display:"flex",flexDirection:"column"},consoleToolbarStyles:{display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:"center",gap:{xs:1.5,sm:0},px:"14px",py:{xs:"12px",sm:0},height:{xs:"auto",sm:"46px"},bgcolor:"var(--nav-border)",userSelect:"none",borderTop:"1px solid var(--editor-panel-border)"},tabsCapsuleStyles:{display:"flex",alignItems:"center",bgcolor:"var(--editor-panel)",borderRadius:"24px",p:"3px",width:{xs:"100%",sm:"auto"}},getTabItemStyles:t=>({cursor:"pointer",fontSize:"12.5px",fontWeight:500,borderRadius:"20px",px:"14px",py:"4px",flex:{xs:1,sm:"none"},textAlign:"center",whiteSpace:"nowrap",transition:"all 0.15s ease",color:"var(--card)",bgcolor:t?"var(--editor-panel-bg)":"transparent"}),actionButtonsContainerStyles:{display:"flex",gap:"8px",alignItems:"center",width:{xs:"100%",sm:"auto"}},runButtonStyles:{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",bgcolor:"var(--editor-panel-bg)",color:"var(--secondary)",height:"32px",width:"77.06px",borderRadius:"6px",flex:{xs:1,sm:"none"},fontSize:"12.5px",fontWeight:500,cursor:"pointer",whiteSpace:"nowrap",transition:"background-color 0.15s","&:hover":{bgcolor:"var(--nav-bg)"}},submitButtonStyles:{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",bgcolor:"var(--nav-accent-green)",color:"var(--editor-text)",height:"32px",width:"95.34px",borderRadius:"6px",flex:{xs:1,sm:"none"},fontSize:"12.5px",fontWeight:600,cursor:"pointer",whiteSpace:"nowrap",transition:"background-color 0.15s","&:hover":{bgcolor:"var(--success-foreground)"}},lowerPanelContextStyles:{p:"16px",display:"flex",flexDirection:"column",gap:"12px",minHeight:220,maxHeight:220,overflowY:"auto",bgcolor:"var(--nav-border)"},caseCardStyles:{width:"100%",backgroundColor:"var(--editor-panel)",borderRadius:"5px",padding:"12px 16px",boxSizing:"border-box",border:"1px solid var(--editor-panel-border)"},noResultsWrapperStyles:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",pt:4}},lt=()=>{const[t,n]=a.useState(0),o=L;return e.jsxs(r,{sx:o.workspaceRootStyles,children:[e.jsx(r,{sx:o.leftWorkspaceStyles,children:e.jsx(l,{variant:"body2",sx:{color:"var(--foreground)",fontFamily:"monospace"},children:"[ Left Workspace / Problem Details Area ]"})}),e.jsxs(r,{sx:o.rightWorkspaceStyles,children:[e.jsx(r,{sx:o.codeEditorAreaStyles,children:e.jsx(l,{variant:"body2",sx:{color:"var(--muted-foreground)",fontFamily:"monospace"},children:"[ Code Editor Area ]"})}),e.jsxs(r,{sx:o.consolePanelWrapperStyles,children:[e.jsxs(r,{sx:o.consoleToolbarStyles,children:[e.jsxs(r,{sx:o.tabsCapsuleStyles,children:[e.jsx(r,{onClick:()=>n(0),sx:o.getTabItemStyles(t===0),children:"Testcases"}),e.jsx(r,{onClick:()=>n(1),sx:o.getTabItemStyles(t===1),children:"Test Result"})]}),e.jsxs(r,{sx:o.actionButtonsContainerStyles,children:[e.jsxs(r,{onClick:()=>{},sx:o.runButtonStyles,children:[e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),"Run"]}),e.jsxs(r,{onClick:()=>{},sx:o.submitButtonStyles,children:[e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"}),e.jsx("polyline",{points:"17 8 12 3 7 8"}),e.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),"Submit"]})]})]}),e.jsx(r,{sx:o.lowerPanelContextStyles,children:t===0?e.jsxs(e.Fragment,{children:[e.jsxs(r,{sx:o.caseCardStyles,children:[e.jsx(l,{variant:"body2",sx:{color:"var(--editor-text)",fontWeight:600,fontFamily:"monospace",fontSize:"12px",mb:"6px"},children:"Case 1"}),e.jsx(l,{variant:"caption",sx:{color:"var(--editor-text)",fontFamily:"monospace",fontSize:"12px",display:"block",mb:"4px"},children:"Input: [2,7,11,15], 9"}),e.jsx(l,{variant:"caption",sx:{color:"var(--editor-text)",fontFamily:"monospace",fontSize:"12px",display:"block"},children:"Expected: [0,1]"})]}),e.jsxs(r,{sx:o.caseCardStyles,children:[e.jsx(l,{variant:"body2",sx:{color:"var(--editor-text)",fontWeight:600,fontFamily:"monospace",fontSize:"12px",mb:"6px"},children:"Case 2"}),e.jsx(l,{variant:"caption",sx:{color:"var(--editor-text)",fontFamily:"monospace",fontSize:"12px",display:"block",mb:"4px"},children:"Input: [3,2,4], 6"}),e.jsx(l,{variant:"caption",sx:{color:"var(--editor-text)",fontFamily:"monospace",fontSize:"12px",display:"block"},children:"Expected: [1,2]"})]})]}):e.jsx(r,{sx:o.noResultsWrapperStyles,children:e.jsx(l,{variant:"body2",sx:{color:"var(--editor-text)",textAlign:"center",fontFamily:"monospace",fontSize:"12px"},children:"No test results yet. Run your code to see results."})})})]})]})]})},Kt={title:"Components/AppShell",component:ve,parameters:{layout:"fullscreen"},args:{children:e.jsx(lt,{})}},G=t=>n=>e.jsx(ye,{user:t,config:{defaultCacheTTL:3600,basePath:"/api",environment:"development"},children:e.jsx(n,{})}),H={decorators:[G(null)],args:{currentPath:"/problems/two-sum"}},U={decorators:[G({username:"TestUser",avatarUrl:""})],args:{currentPath:"/problems/two-sum"}},O={decorators:[G(null)],args:{currentPath:"/problems/two-sum"},parameters:{viewport:{defaultViewport:"mobile1"}}},_={decorators:[G(null),t=>{try{localStorage.setItem("darkMode","true")}catch{}return typeof window<"u"&&document.documentElement.classList.add("dark"),e.jsx(t,{})}],args:{currentPath:"/problems/two-sum"}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  decorators: [authProviderMock(null)],
  args: {
    currentPath: '/problems/two-sum'
  }
}`,...H.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  decorators: [authProviderMock({
    username: 'TestUser',
    avatarUrl: ''
  } as AuthUser)],
  args: {
    currentPath: '/problems/two-sum'
  }
}`,...U.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  decorators: [authProviderMock(null)],
  args: {
    currentPath: '/problems/two-sum'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...O.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};const Qt=["storyWorkspaceStyles","Unauthenticated","Authenticated","MobileView","DarkMode"];export{U as Authenticated,_ as DarkMode,O as MobileView,H as Unauthenticated,Qt as __namedExportsOrder,Kt as default,L as storyWorkspaceStyles};
