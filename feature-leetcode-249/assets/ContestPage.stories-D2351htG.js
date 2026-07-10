import{H as o,B as t}from"./iframe-Dcn6YDFx.js";import{o as T,b as Z,a as Q,s as _,n as W}from"./schemas-CxL56DE6.js";import{a as x}from"./apiClient-DSpTvf5-.js";import{C as X}from"./Close-j1W-IqXA.js";T({defaultCacheTTL:W().positive().describe("Cache TTL in milliseconds"),basePath:_().describe("Base path for the application"),apiBaseUrl:_().url().describe("Base URL for the API"),navShell:Q(T({id:_(),label:_(),href:_()})).describe("Navigation menu structure"),featureFlags:T({contests:Z()}).default({contests:!0}).describe("Feature flags to enable or disable sections of the app")});const Y=6e4,w={SIGN_IN:"/auth/signin",SIGN_UP:"/auth/signup",SIGN_OUT:"/auth/signout",REFRESH:"/auth/refresh",ME:"/auth/me"},O="auth:signout";function A(e){return typeof e=="object"&&e!==null&&"status"in e&&typeof e.status=="number"}let c=null;async function S(e,n={}){const s=await fetch(e,{credentials:"include",headers:{"Content-Type":"application/json",...n.headers??{}},...n});if(!s.ok){const a=await s.json().catch(()=>({}));throw{message:a.message??s.statusText,code:a.code??"UNKNOWN_ERROR",status:s.status,details:a}}return s.json().catch(()=>{throw{message:"Invalif response format",code:"PARSE_ERROR",status:s.status,details:null}})}function U(e){return{Authorization:`Bearer ${e}`}}const h={async signIn(e){const n=await S(w.SIGN_IN,{method:"POST",body:JSON.stringify(e)});return c=n,n},async signUp(e){return await S(w.SIGN_UP,{method:"POST",body:JSON.stringify(e)}),h.signIn({email:e.email,password:e.password})},async signOut(){c&&await S(w.SIGN_OUT,{method:"POST",headers:U(c.accessToken)}).catch(e=>{console.error("[authService] signOut request failed, clearing session anyway:",e)}),c=null,typeof window<"u"&&window.dispatchEvent(new CustomEvent(O))},async refreshToken(){try{const e=await S(w.REFRESH,{method:"POST",...c?{headers:U(c.accessToken)}:{}});return c=e,e}catch(e){throw A(e)&&e.status===401&&(c=null,await h.signOut(),typeof window<"u"&&(window.location.href="/")),e}},getSession(){return c?c.expiresAt<=Date.now()?null:c:null},isAuthenticated(){return h.getSession()!==null},needsRefresh(){return c?c.expiresAt-Date.now()<Y:!1},async hydrateFromServer(){try{const e=await S(w.ME);return c=e,e}catch(e){return A(e)&&e.status===401?(c=null,null):(console.error("[authService] hydrateFromServer: unexpected error —",A(e)?`status=${e.status} code=${e.code} message=${e.message}`:e),c=null,null)}}},$=o.createContext(null);function H({children:e}){const[n,s]=o.useState(null),[a,r]=o.useState(!0),[i,g]=o.useState(null);o.useEffect(()=>{let u=!1;(async()=>{try{const m=await h.hydrateFromServer();u||s(m)}catch(m){console.error("[AuthProvider] Session hydration failed:",m),u||g(m instanceof Error?m:new Error("Session hydration failed"))}finally{u||r(!1)}})();function N(){s(null)}return window.addEventListener(O,N),()=>{u=!0,window.removeEventListener(O,N)}},[]);const p=o.useCallback(async u=>{const C=await h.signIn(u);s(C)},[]),l=o.useCallback(async u=>{const C=await h.signUp(u);s(C)},[]),d=o.useCallback(async()=>{await h.signOut(),s(null)},[]),f=o.useMemo(()=>({user:n?.user??null,isAuthenticated:h.isAuthenticated(),isLoading:a,hydrationError:i,signIn:p,signUp:l,signOut:d}),[n,a,i,p,l,d]);return t.jsx($.Provider,{value:f,children:e})}H.__docgenInfo={description:"",methods:[],displayName:"AuthProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const M=o.createContext({config:null,user:null});function ee(){return o.useContext(M)}function G({children:e,config:n=null,user:s=null}){return t.jsx(M.Provider,{value:{config:n,user:s},children:t.jsx(H,{children:e})})}G.__docgenInfo={description:"",methods:[],displayName:"AppProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},config:{required:!1,tsType:{name:"union",raw:"PublicConfig | null",elements:[{name:"Pick",elements:[{name:"z.infer",elements:[{name:"configSchema"}],raw:"z.infer<typeof configSchema>"},{name:"union",raw:"'defaultCacheTTL' | 'basePath' | 'navShell'",elements:[{name:"literal",value:"'defaultCacheTTL'"},{name:"literal",value:"'basePath'"},{name:"literal",value:"'navShell'"}]}],raw:"Pick<Config, 'defaultCacheTTL' | 'basePath' | 'navShell'>"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},user:{required:!1,tsType:{name:"union",raw:"AuthUser | null",elements:[{name:"AuthUser"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}}}};function z(e){const n=new URLSearchParams;Object.entries(e).forEach(([a,r])=>{r!==void 0&&n.set(a,String(r))});const s=n.toString();return s?`?${s}`:""}function v(e){if(e?.cookie)return{headers:{Cookie:e.cookie}}}function k(e,n,s,a){return{status:e,code:n,message:s,...a!==void 0?{details:a}:{}}}function te(e){return typeof e=="object"&&e!==null&&"status"in e&&"code"in e&&"message"in e}function ne(e){return te(e)?e:k(500,"CONTEST_STATUS_CHECK_FAILED","Failed to validate contest status",e)}function se(e){return{contests:e.data.contests,meta:e.data.meta??e.meta}}function ae(e){return{entries:e.data.entries,meta:e.data.meta??e.meta}}async function B(e,n){return(await x.get(`/contests/${e}`,v(n))).data}async function D(e,n,s){try{const a=await B(e,s);if(a.status!=="upcoming")throw n;return a}catch(a){throw ne(a)}}const oe={async getContests(e,n){const s=z({status:e?.status,page:e?.page,pageSize:e?.pageSize}),a=await x.get(`/contests${s}`,v(n));return se(a)},async getContestById(e,n){return B(e,n)},async getLeaderboard(e,n=1,s){const a=z({page:n}),r=await x.get(`/contests/${e}/leaderboard${a}`,v(s));return ae(r)},async joinContest(e,n){await D(e,k(409,"CONTEST_CLOSED","Contest is not open for registration"),n),await x.post(`/contests/${e}/register`,null,v(n))},async leaveContest(e,n){await D(e,k(409,"CONTEST_NOT_UPCOMING","Contest registration can only be cancelled for upcoming contests"),n),await x.delete(`/contests/${e}/register`,v(n))}};function re(){const e=o.useContext($);if(e===null)throw new Error("<AuthContext> useAuth must be used within an <AuthProvider>.");return e}function F(){const e=new URL(window.location.href);e.searchParams.delete("authRequired"),window.history.replaceState({},document.title,`${e.pathname}${e.search}${e.hash}`)}function J({isOpen:e}){const{signIn:n,signUp:s}=re(),[a,r]=o.useState(e),[i,g]=o.useState("signin"),[p,l]=o.useState(null),[d,f]=o.useState(!1);if(o.useEffect(()=>{r(e)},[e]),o.useEffect(()=>{if(!a)return;const b=y=>{y.key==="Escape"&&m()};return document.addEventListener("keydown",b),()=>{document.removeEventListener("keydown",b)}},[a]),!a)return null;const u=i==="signin"?"Sign in required":"Create your account",C=i==="signin"?"Sign in":"Sign up",N=async b=>{b.preventDefault();const y=new FormData(b.currentTarget),I=String(y.get("email")??""),q=String(y.get("password")??""),K=String(y.get("username")??"");try{f(!0),l(null),i==="signin"?await n({email:I,password:q}):await s({username:K,email:I,password:q}),F(),r(!1)}catch(L){l(L instanceof Error?L.message:"Authentication failed")}finally{f(!1)}},m=()=>{F(),r(!1)};return t.jsxs("div",{className:"auth-modal",children:[t.jsx("button",{className:"auth-modal__backdrop",type:"button",onClick:m,"aria-label":"Close authentication dialog"}),t.jsxs("section",{className:"auth-modal__dialog",role:"dialog","aria-modal":"true","aria-labelledby":"auth-modal-title","aria-busy":d,children:[t.jsx("button",{className:"auth-modal__close",type:"button",onClick:m,"aria-label":"Close",children:t.jsx(X,{fontSize:"small","aria-hidden":"true"})}),t.jsx("p",{className:"auth-modal__eyebrow",children:"Protected route"}),t.jsx("h2",{id:"auth-modal-title",children:u}),t.jsx("p",{className:"auth-modal__copy",children:"Continue with your account to access protected practice areas and keep your progress in sync."}),t.jsxs("div",{className:"auth-modal__tabs","aria-label":"Authentication mode",children:[t.jsx("button",{type:"button","aria-pressed":i==="signin",onClick:()=>{g("signin"),l(null)},children:"Sign in"}),t.jsx("button",{type:"button","aria-pressed":i==="signup",onClick:()=>{g("signup"),l(null)},children:"Sign up"})]}),t.jsxs("form",{className:"auth-modal__form",onSubmit:N,"aria-busy":d,children:[i==="signup"&&t.jsxs("label",{htmlFor:"auth-username",children:["Username",t.jsx("input",{id:"auth-username",name:"username",autoComplete:"username",required:!0})]}),t.jsxs("label",{htmlFor:"auth-email",children:["Email",t.jsx("input",{id:"auth-email",name:"email",type:"email",autoComplete:"email",required:!0})]}),t.jsxs("label",{htmlFor:"auth-password",children:["Password",t.jsx("input",{id:"auth-password",name:"password",type:"password",autoComplete:i==="signin"?"current-password":"new-password",required:!0})]}),p&&t.jsx("p",{className:"auth-modal__error",role:"alert",children:p}),t.jsx("button",{type:"submit",disabled:d,children:d?"Please wait...":C})]})]})]})}J.__docgenInfo={description:"",methods:[],displayName:"AuthModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""}}};function ie({contest:e,onAuthRequired:n}){const{user:s}=ee(),a=!!s,[r,i]=o.useState(e.isRegistered??!1),[g,p]=o.useState(!1);async function l(){if(!g){if(!a){n();return}if(!r){i(!0),p(!0);try{await oe.joinContest(e.id)}catch{i(!1)}finally{p(!1)}}}}const d=r?"Registered":a?"Join":"Sign in to join",f=r||g||!a;return t.jsxs("div",{className:"contest-card",children:[t.jsx("h3",{className:"contest-card__title",children:e.title}),e.description&&t.jsx("p",{className:"contest-card__description",children:e.description}),t.jsxs("p",{className:"contest-card__meta",children:[e.participantsCount??0," participants"]}),t.jsx("span",{className:"contest-card__action",title:a?void 0:"Sign in to join this contest",children:t.jsx("button",{className:"contest-card__btn",onClick:l,disabled:f,"aria-disabled":f,children:d})})]})}function P({title:e,contests:n,onAuthRequired:s}){return n.length===0?null:t.jsxs("section",{className:"contest-section",children:[t.jsx("h2",{className:"contest-section__title",children:e}),t.jsx("div",{className:"contest-section__grid",children:n.map(a=>t.jsx(ie,{contest:a,onAuthRequired:s},a.id))})]})}function V({activeContests:e,upcomingContests:n,pastContests:s}){const[a,r]=o.useState(!1);function i(){r(!0)}return t.jsxs("div",{className:"contest-page",children:[t.jsx("h1",{className:"contest-page__heading",children:"Contests"}),t.jsx(P,{title:"Active Contests",contests:e,onAuthRequired:i}),t.jsx(P,{title:"Upcoming Contests",contests:n,onAuthRequired:i}),t.jsx(P,{title:"Past Contests",contests:s,onAuthRequired:i}),t.jsx(J,{isOpen:a}),t.jsx("style",{children:`
        .contest-page {
          padding: 12px;
          max-width: 1200px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .contest-page__heading {
          font-size: 1.5rem;
          margin-bottom: 20px;
        }

        .contest-section {
          margin-bottom: 32px;
        }

        .contest-section__title {
          font-size: 1.1rem;
          margin-bottom: 12px;
        }

        .contest-section__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .contest-card {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 12px;
          box-sizing: border-box;
        }

        .contest-card__title {
          font-size: 1rem;
          margin-bottom: 6px;
        }

        .contest-card__description {
          font-size: 0.875rem;
          color: #666;
          margin-bottom: 8px;
        }

        .contest-card__meta {
          font-size: 0.75rem;
          color: #999;
          margin-bottom: 10px;
        }

        .contest-card__action {
          display: inline-block;
        }

        .contest-card__btn {
          padding: 6px 14px;
          border-radius: 4px;
          border: none;
          background-color: #1a73e8;
          color: white;
          cursor: pointer;
          font-size: 0.875rem;
          }

        .contest-card__btn:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }

        @media (min-width: 375px) {
          .contest-page {
            padding: 16px;
          }
        }

        @media (min-width: 768px) {
          .contest-page {
            padding: 24px;
          }

          .contest-page__heading {
            font-size: 2rem;
          }

          .contest-section__title {
            font-size: 1.25rem;
          }

          .contest-section__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .contest-page {
            padding: 32px;
          }

          .contest-section__grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `})]})}V.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{activeContests:{required:!0,tsType:{name:"Array",elements:[{name:"ContestDetail"}],raw:"ContestDetail[]"},description:""},upcomingContests:{required:!0,tsType:{name:"Array",elements:[{name:"ContestDetail"}],raw:"ContestDetail[]"},description:""},pastContests:{required:!0,tsType:{name:"Array",elements:[{name:"ContestDetail"}],raw:"ContestDetail[]"},description:""}}};const R={id:1,title:"Sample Contest",status:"active",startTime:"2026-06-01T00:00:00Z",endTime:"2026-06-02T00:00:00Z",problems:[]},ce={title:"Pages/ContestPage",component:V,decorators:[e=>t.jsx(G,{children:t.jsx(e,{})})]},j={args:{activeContests:[R],upcomingContests:[{...R,id:2,status:"upcoming"}],pastContests:[{...R,id:3,status:"past"}]}},E={args:{activeContests:[],upcomingContests:[],pastContests:[]}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    activeContests: [mockContest],
    upcomingContests: [{
      ...mockContest,
      id: 2,
      status: 'upcoming' as const
    }],
    pastContests: [{
      ...mockContest,
      id: 3,
      status: 'past' as const
    }]
  }
}`,...j.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    activeContests: [],
    upcomingContests: [],
    pastContests: []
  }
}`,...E.parameters?.docs?.source}}};const ue=["Complete","Empty"],he=Object.freeze(Object.defineProperty({__proto__:null,Complete:j,Empty:E,__namedExportsOrder:ue,default:ce},Symbol.toStringTag,{value:"Module"}));export{he as C};
