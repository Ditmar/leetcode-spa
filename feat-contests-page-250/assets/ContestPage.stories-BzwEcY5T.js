import{H as r,B as s}from"./iframe-DxpdDQCe.js";import{o as R,b as Y,a as ee,s as w,n as te}from"./schemas-CxL56DE6.js";import{C as ne}from"./Close-DmcsRGoF.js";R({defaultCacheTTL:te().positive().describe("Cache TTL in milliseconds"),basePath:w().describe("Base path for the application"),apiBaseUrl:w().url().describe("Base URL for the API"),navShell:ee(R({id:w(),label:w(),href:w()})).describe("Navigation menu structure"),featureFlags:R({contests:Y()}).default({contests:!0}).describe("Feature flags to enable or disable sections of the app")});const se=6e4,b={SIGN_IN:"/auth/signin",SIGN_UP:"/auth/signup",SIGN_OUT:"/auth/signout",REFRESH:"/auth/refresh",ME:"/auth/me"},U="auth:signout";function O(e){return typeof e=="object"&&e!==null&&"status"in e&&typeof e.status=="number"}let c=null;async function S(e,t={}){const n=await fetch(e,{credentials:"include",headers:{"Content-Type":"application/json",...t.headers??{}},...t});if(!n.ok){const a=await n.json().catch(()=>({}));throw{message:a.message??n.statusText,code:a.code??"UNKNOWN_ERROR",status:n.status,details:a}}return n.json().catch(()=>{throw{message:"Invalif response format",code:"PARSE_ERROR",status:n.status,details:null}})}function F(e){return{Authorization:`Bearer ${e}`}}const f={async signIn(e){const t=await S(b.SIGN_IN,{method:"POST",body:JSON.stringify(e)});return c=t,t},async signUp(e){return await S(b.SIGN_UP,{method:"POST",body:JSON.stringify(e)}),f.signIn({email:e.email,password:e.password})},async signOut(){c&&await S(b.SIGN_OUT,{method:"POST",headers:F(c.accessToken)}).catch(e=>{console.error("[authService] signOut request failed, clearing session anyway:",e)}),c=null,typeof window<"u"&&window.dispatchEvent(new CustomEvent(U))},async refreshToken(){try{const e=await S(b.REFRESH,{method:"POST",...c?{headers:F(c.accessToken)}:{}});return c=e,e}catch(e){throw O(e)&&e.status===401&&(c=null,await f.signOut(),typeof window<"u"&&(window.location.href="/")),e}},getSession(){return c?c.expiresAt<=Date.now()?null:c:null},isAuthenticated(){return f.getSession()!==null},needsRefresh(){return c?c.expiresAt-Date.now()<se:!1},async hydrateFromServer(){try{const e=await S(b.ME);return c=e,e}catch(e){return O(e)&&e.status===401?(c=null,null):(console.error("[authService] hydrateFromServer: unexpected error —",O(e)?`status=${e.status} code=${e.code} message=${e.message}`:e),c=null,null)}}},G=r.createContext(null);function J({children:e}){const[t,n]=r.useState(null),[a,o]=r.useState(!0),[i,h]=r.useState(null);r.useEffect(()=>{let l=!1;(async()=>{try{const g=await f.hydrateFromServer();l||n(g)}catch(g){console.error("[AuthProvider] Session hydration failed:",g),l||h(g instanceof Error?g:new Error("Session hydration failed"))}finally{l||o(!1)}})();function j(){n(null)}return window.addEventListener(U,j),()=>{l=!0,window.removeEventListener(U,j)}},[]);const m=r.useCallback(async l=>{const y=await f.signIn(l);n(y)},[]),u=r.useCallback(async l=>{const y=await f.signUp(l);n(y)},[]),p=r.useCallback(async()=>{await f.signOut(),n(null)},[]),d=r.useMemo(()=>({user:t?.user??null,isAuthenticated:f.isAuthenticated(),isLoading:a,hydrationError:i,signIn:m,signUp:u,signOut:p}),[t,a,i,m,u,p]);return s.jsx(G.Provider,{value:d,children:e})}J.__docgenInfo={description:"",methods:[],displayName:"AuthProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const W=r.createContext({config:null,user:null});function ae(){return r.useContext(W)}function V({children:e,config:t=null,user:n=null}){return s.jsx(W.Provider,{value:{config:t,user:n},children:s.jsx(J,{children:e})})}V.__docgenInfo={description:"",methods:[],displayName:"AppProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},config:{required:!1,tsType:{name:"union",raw:"AppConfig | null",elements:[{name:"z.infer",elements:[{name:"configSchema"}],raw:"z.infer<typeof configSchema>"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},user:{required:!1,tsType:{name:"union",raw:"AuthUser | null",elements:[{name:"AuthUser"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}}}};const re=e=>e instanceof Error,oe=e=>e instanceof DOMException&&e.name==="AbortError",T=e=>e===404?"NOT_FOUND":e===500?"INTERNAL_SERVER_ERROR":e===400?"BAD_REQUEST":e===401?"UNAUTHORIZED":e===403?"FORBIDDEN":"UNKNOWN_ERROR",ie=e=>oe(e)?{message:"Request was aborted",code:T(0),status:0}:re(e)?{message:e.message,code:T(500),status:500}:{message:"An unknown error occurred",code:T(0),status:0};var ce={};const L=typeof window>"u",k=L?ce.API_BASE_URL||"http://localhost:3000":"/api";function ue(e){const t=k.endsWith("/")?k.slice(0,-1):k,n=e.startsWith("/")?e:`/${e}`;return`${t}${n}`}function le(){try{const e=document.cookie.split(";").map(t=>t.trim()).find(t=>t.startsWith("auth_access_token="));return e?decodeURIComponent(e.split("=")[1]):null}catch{return null}}function de(e){try{const t=e.split(";").map(n=>n.trim()).find(n=>n.startsWith("auth_access_token="));return t?decodeURIComponent(t.split("=")[1]):null}catch{return null}}function me(e){if(!L){try{const t=localStorage.getItem("auth_access_token");if(t)return t}catch{console.warn("Failed to access localStorage for auth token retrieval")}return le()}return e?de(e):null}async function pe(e){let t={};try{const n=await e.json();typeof n=="object"&&n!==null&&(t=n)}catch{}return{status:e.status,code:typeof t.code=="string"?t.code:T(e.status),message:typeof t.message=="string"?t.message:e.statusText||"An unexpected error occurred",details:t.details}}async function x(e,t,n,a={}){const o=ue(t),i=a.headers?.Cookie??a.headers?.cookie,h=me(i),m=n!=null,u={...a.headers};h&&(u.Authorization=`Bearer ${h}`),m&&(u["Content-Type"]="application/json");const p={method:e,headers:u,signal:a.signal,...L?{}:{credentials:a.credentials??"include"},...m?{body:JSON.stringify(n)}:{}};let d;try{d=await fetch(o,p)}catch(l){throw ie(l)}if(!d.ok)throw await pe(d);try{return await d.json()}catch{throw{status:500,code:"PARSE_ERROR",message:"Failed to parse server response as JSON"}}}const E={get(e,t){return x("GET",e,void 0,t)},post(e,t,n){return x("POST",e,t,n)},put(e,t,n){return x("PUT",e,t,n)},patch(e,t,n){return x("PATCH",e,t,n)},delete(e,t){return x("DELETE",e,void 0,t)}};function H(e){const t=new URLSearchParams;Object.entries(e).forEach(([a,o])=>{o!==void 0&&t.set(a,String(o))});const n=t.toString();return n?`?${n}`:""}function A(e){if(e?.cookie)return{headers:{Cookie:e.cookie}}}function q(e,t,n,a){return{status:e,code:t,message:n,...a!==void 0?{details:a}:{}}}function he(e){return typeof e=="object"&&e!==null&&"status"in e&&"code"in e&&"message"in e}function ge(e){return he(e)?e:q(500,"CONTEST_STATUS_CHECK_FAILED","Failed to validate contest status",e)}function fe(e){return{contests:e.data.contests,meta:e.data.meta??e.meta}}function ye(e){return{entries:e.data.entries,meta:e.data.meta??e.meta}}async function K(e,t){return(await E.get(`/contests/${e}`,A(t))).data}async function B(e,t,n){try{const a=await K(e,n);if(a.status!=="upcoming")throw t;return a}catch(a){throw ge(a)}}const _e={async getContests(e,t){const n=H({status:e?.status,page:e?.page,pageSize:e?.pageSize}),a=await E.get(`/contests${n}`,A(t));return fe(a)},async getContestById(e,t){return K(e,t)},async getLeaderboard(e,t=1,n){const a=H({page:t}),o=await E.get(`/contests/${e}/leaderboard${a}`,A(n));return ye(o)},async joinContest(e,t){await B(e,q(409,"CONTEST_CLOSED","Contest is not open for registration"),t),await E.post(`/contests/${e}/register`,null,A(t))},async leaveContest(e,t){await B(e,q(409,"CONTEST_NOT_UPCOMING","Contest registration can only be cancelled for upcoming contests"),t),await E.delete(`/contests/${e}/register`,A(t))}};function Ce(){const e=r.useContext(G);if(e===null)throw new Error("<AuthContext> useAuth must be used within an <AuthProvider>.");return e}function M(){const e=new URL(window.location.href);e.searchParams.delete("authRequired"),window.history.replaceState({},document.title,`${e.pathname}${e.search}${e.hash}`)}function Z({isOpen:e}){const{signIn:t,signUp:n}=Ce(),[a,o]=r.useState(e),[i,h]=r.useState("signin"),[m,u]=r.useState(null),[p,d]=r.useState(!1);if(r.useEffect(()=>{o(e)},[e]),r.useEffect(()=>{if(!a)return;const _=C=>{C.key==="Escape"&&g()};return document.addEventListener("keydown",_),()=>{document.removeEventListener("keydown",_)}},[a]),!a)return null;const l=i==="signin"?"Sign in required":"Create your account",y=i==="signin"?"Sign in":"Sign up",j=async _=>{_.preventDefault();const C=new FormData(_.currentTarget),z=String(C.get("email")??""),D=String(C.get("password")??""),X=String(C.get("username")??"");try{d(!0),u(null),i==="signin"?await t({email:z,password:D}):await n({username:X,email:z,password:D}),M(),o(!1)}catch($){u($ instanceof Error?$.message:"Authentication failed")}finally{d(!1)}},g=()=>{M(),o(!1)};return s.jsxs("div",{className:"auth-modal",children:[s.jsx("button",{className:"auth-modal__backdrop",type:"button",onClick:g,"aria-label":"Close authentication dialog"}),s.jsxs("section",{className:"auth-modal__dialog",role:"dialog","aria-modal":"true","aria-labelledby":"auth-modal-title","aria-busy":p,children:[s.jsx("button",{className:"auth-modal__close",type:"button",onClick:g,"aria-label":"Close",children:s.jsx(ne,{fontSize:"small","aria-hidden":"true"})}),s.jsx("p",{className:"auth-modal__eyebrow",children:"Protected route"}),s.jsx("h2",{id:"auth-modal-title",children:l}),s.jsx("p",{className:"auth-modal__copy",children:"Continue with your account to access protected practice areas and keep your progress in sync."}),s.jsxs("div",{className:"auth-modal__tabs","aria-label":"Authentication mode",children:[s.jsx("button",{type:"button","aria-pressed":i==="signin",onClick:()=>{h("signin"),u(null)},children:"Sign in"}),s.jsx("button",{type:"button","aria-pressed":i==="signup",onClick:()=>{h("signup"),u(null)},children:"Sign up"})]}),s.jsxs("form",{className:"auth-modal__form",onSubmit:j,"aria-busy":p,children:[i==="signup"&&s.jsxs("label",{htmlFor:"auth-username",children:["Username",s.jsx("input",{id:"auth-username",name:"username",autoComplete:"username",required:!0})]}),s.jsxs("label",{htmlFor:"auth-email",children:["Email",s.jsx("input",{id:"auth-email",name:"email",type:"email",autoComplete:"email",required:!0})]}),s.jsxs("label",{htmlFor:"auth-password",children:["Password",s.jsx("input",{id:"auth-password",name:"password",type:"password",autoComplete:i==="signin"?"current-password":"new-password",required:!0})]}),m&&s.jsx("p",{className:"auth-modal__error",role:"alert",children:m}),s.jsx("button",{type:"submit",disabled:p,children:p?"Please wait...":y})]})]})]})}Z.__docgenInfo={description:"",methods:[],displayName:"AuthModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""}}};function we({contest:e,onAuthRequired:t}){const{user:n}=ae(),a=!!n,[o,i]=r.useState(e.isRegistered??!1),[h,m]=r.useState(!1);async function u(){if(!h){if(!a){t();return}if(!o){i(!0),m(!0);try{await _e.joinContest(e.id)}catch{i(!1)}finally{m(!1)}}}}const p=o?"Registered":a?"Join":"Sign in to join",d=o||h||!a;return s.jsxs("div",{className:"contest-card",children:[s.jsx("h3",{className:"contest-card__title",children:e.title}),e.description&&s.jsx("p",{className:"contest-card__description",children:e.description}),s.jsxs("p",{className:"contest-card__meta",children:[e.participantsCount??0," participants"]}),s.jsx("span",{className:"contest-card__action",title:a?void 0:"Sign in to join this contest",children:s.jsx("button",{className:"contest-card__btn",onClick:u,disabled:d,"aria-disabled":d,children:p})})]})}function P({title:e,contests:t,onAuthRequired:n}){return t.length===0?null:s.jsxs("section",{className:"contest-section",children:[s.jsx("h2",{className:"contest-section__title",children:e}),s.jsx("div",{className:"contest-section__grid",children:t.map(a=>s.jsx(we,{contest:a,onAuthRequired:n},a.id))})]})}function Q({activeContests:e,upcomingContests:t,pastContests:n}){const[a,o]=r.useState(!1);function i(){o(!0)}return s.jsxs("div",{className:"contest-page",children:[s.jsx("h1",{className:"contest-page__heading",children:"Contests"}),s.jsx(P,{title:"Active Contests",contests:e,onAuthRequired:i}),s.jsx(P,{title:"Upcoming Contests",contests:t,onAuthRequired:i}),s.jsx(P,{title:"Past Contests",contests:n,onAuthRequired:i}),s.jsx(Z,{isOpen:a}),s.jsx("style",{children:`
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
      `})]})}Q.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{activeContests:{required:!0,tsType:{name:"Array",elements:[{name:"ContestDetail"}],raw:"ContestDetail[]"},description:""},upcomingContests:{required:!0,tsType:{name:"Array",elements:[{name:"ContestDetail"}],raw:"ContestDetail[]"},description:""},pastContests:{required:!0,tsType:{name:"Array",elements:[{name:"ContestDetail"}],raw:"ContestDetail[]"},description:""}}};const I={id:1,title:"Sample Contest",status:"active",startTime:"2026-06-01T00:00:00Z",endTime:"2026-06-02T00:00:00Z",problems:[]},be={title:"Pages/ContestPage",component:Q,decorators:[e=>s.jsx(V,{children:s.jsx(e,{})})]},v={args:{activeContests:[I],upcomingContests:[{...I,id:2,status:"upcoming"}],pastContests:[{...I,id:3,status:"past"}]}},N={args:{activeContests:[],upcomingContests:[],pastContests:[]}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    activeContests: [],
    upcomingContests: [],
    pastContests: []
  }
}`,...N.parameters?.docs?.source}}};const Se=["Complete","Empty"],ve=Object.freeze(Object.defineProperty({__proto__:null,Complete:v,Empty:N,__namedExportsOrder:Se,default:be},Symbol.toStringTag,{value:"Module"}));export{ve as C};
