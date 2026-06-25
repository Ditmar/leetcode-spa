import{F as r,A as s}from"./iframe-CpSaSvcp.js";import{C as Q}from"./Close-CQrqdYhs.js";const X=6e4,C={SIGN_IN:"/auth/signin",SIGN_UP:"/auth/signup",SIGN_OUT:"/auth/signout",REFRESH:"/auth/refresh",ME:"/auth/me"},P="auth:signout";function R(e){return typeof e=="object"&&e!==null&&"status"in e&&typeof e.status=="number"}let c=null;async function S(e,t={}){const n=await fetch(e,{credentials:"include",headers:{"Content-Type":"application/json",...t.headers??{}},...t});if(!n.ok){const o=await n.json().catch(()=>({}));throw{message:o.message??n.statusText,code:o.code??"UNKNOWN_ERROR",status:n.status,details:o}}return n.json().catch(()=>{throw{message:"Invalif response format",code:"PARSE_ERROR",status:n.status,details:null}})}function L(e){return{Authorization:`Bearer ${e}`}}const f={async signIn(e){const t=await S(C.SIGN_IN,{method:"POST",body:JSON.stringify(e)});return c=t,t},async signUp(e){return await S(C.SIGN_UP,{method:"POST",body:JSON.stringify(e)}),f.signIn({email:e.email,password:e.password})},async signOut(){c&&await S(C.SIGN_OUT,{method:"POST",headers:L(c.accessToken)}).catch(e=>{console.error("[authService] signOut request failed, clearing session anyway:",e)}),c=null,typeof window<"u"&&window.dispatchEvent(new CustomEvent(P))},async refreshToken(){try{const e=await S(C.REFRESH,{method:"POST",...c?{headers:L(c.accessToken)}:{}});return c=e,e}catch(e){throw R(e)&&e.status===401&&(c=null,await f.signOut(),typeof window<"u"&&(window.location.href="/")),e}},getSession(){return c?c.expiresAt<=Date.now()?null:c:null},isAuthenticated(){return f.getSession()!==null},needsRefresh(){return c?c.expiresAt-Date.now()<X:!1},async hydrateFromServer(){try{const e=await S(C.ME);return c=e,e}catch(e){return R(e)&&e.status===401?(c=null,null):(console.error("[authService] hydrateFromServer: unexpected error —",R(e)?`status=${e.status} code=${e.code} message=${e.message}`:e),c=null,null)}}},M=r.createContext(null);function B({children:e}){const[t,n]=r.useState(null),[o,i]=r.useState(!0),[a,m]=r.useState(null);r.useEffect(()=>{let h=!1;(async()=>{try{const g=await f.hydrateFromServer();h||n(g)}catch(g){console.error("[AuthProvider] Session hydration failed:",g),h||m(g instanceof Error?g:new Error("Session hydration failed"))}finally{h||i(!1)}})();function j(){n(null)}return window.addEventListener(P,j),()=>{h=!0,window.removeEventListener(P,j)}},[]);const l=r.useCallback(async h=>{const y=await f.signIn(h);n(y)},[]),d=r.useCallback(async h=>{const y=await f.signUp(h);n(y)},[]),u=r.useCallback(async()=>{await f.signOut(),n(null)},[]),p=r.useMemo(()=>({user:t?.user??null,isAuthenticated:f.isAuthenticated(),isLoading:o,hydrationError:a,signIn:l,signUp:d,signOut:u}),[t,o,a,l,d,u]);return s.jsx(M.Provider,{value:p,children:e})}B.__docgenInfo={description:"",methods:[],displayName:"AuthProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const G=r.createContext({config:null,user:null});function Y(){return r.useContext(G)}function J({children:e,config:t=null,user:n=null}){return s.jsx(G.Provider,{value:{config:t,user:n},children:s.jsx(B,{children:e})})}J.__docgenInfo={description:"",methods:[],displayName:"AppProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},config:{required:!1,tsType:{name:"union",raw:"AppConfig | null",elements:[{name:"z.infer",elements:[{name:"configSchema"}],raw:"z.infer<typeof configSchema>"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},user:{required:!1,tsType:{name:"union",raw:"AuthUser | null",elements:[{name:"AuthUser"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}}}};const ee=e=>e instanceof Error,te=e=>e instanceof DOMException&&e.name==="AbortError",v=e=>e===404?"NOT_FOUND":e===500?"INTERNAL_SERVER_ERROR":e===400?"BAD_REQUEST":e===401?"UNAUTHORIZED":e===403?"FORBIDDEN":"UNKNOWN_ERROR",ne=e=>te(e)?{message:"Request was aborted",code:v(0),status:0}:ee(e)?{message:e.message,code:v(500),status:500}:{message:"An unknown error occurred",code:v(0),status:0};var se={};const U=typeof window>"u",T=U?se.API_BASE_URL||"http://localhost:3000":"/api";function oe(e){const t=T.endsWith("/")?T.slice(0,-1):T,n=e.startsWith("/")?e:`/${e}`;return`${t}${n}`}function re(){try{const e=document.cookie.split(";").map(t=>t.trim()).find(t=>t.startsWith("auth_token="));return e?decodeURIComponent(e.split("=")[1]):null}catch{return null}}function ae(){if(!U){try{const e=localStorage.getItem("auth_token");if(e)return e}catch{console.warn("Failed to access localStorage for auth token retrieval")}return re()}return null}async function ie(e){let t={};try{const n=await e.json();typeof n=="object"&&n!==null&&(t=n)}catch{}return{status:e.status,code:typeof t.code=="string"?t.code:v(e.status),message:typeof t.message=="string"?t.message:e.statusText||"An unexpected error occurred",details:t.details}}async function x(e,t,n,o={}){const i=oe(t),a=ae(),m=n!=null,l={...o.headers};a&&(l.Authorization=`Bearer ${a}`),m&&(l["Content-Type"]="application/json");const d={method:e,headers:l,signal:o.signal,...U?{}:{credentials:o.credentials??"include"},...m?{body:JSON.stringify(n)}:{}};let u;try{u=await fetch(i,d)}catch(p){throw ne(p)}if(!u.ok)throw await ie(u);try{return await u.json()}catch{throw{status:500,code:"PARSE_ERROR",message:"Failed to parse server response as JSON"}}}const b={get(e,t){return x("GET",e,void 0,t)},post(e,t,n){return x("POST",e,t,n)},put(e,t,n){return x("PUT",e,t,n)},patch(e,t,n){return x("PATCH",e,t,n)},delete(e,t){return x("DELETE",e,void 0,t)}};function $(e){const t=new URLSearchParams;Object.entries(e).forEach(([o,i])=>{i!==void 0&&t.set(o,String(i))});const n=t.toString();return n?`?${n}`:""}function E(e){if(e?.cookie)return{headers:{Cookie:e.cookie}}}function I(e,t,n,o){return{status:e,code:t,message:n,...o!==void 0?{details:o}:{}}}function ce(e){return typeof e=="object"&&e!==null&&"status"in e&&"code"in e&&"message"in e}function ue(e){return ce(e)?e:I(500,"CONTEST_STATUS_CHECK_FAILED","Failed to validate contest status",e)}function le(e){return{contests:e.data.contests,meta:e.data.meta??e.meta}}function de(e){return{entries:e.data.entries,meta:e.data.meta??e.meta}}async function W(e,t){return(await b.get(`/contests/${e}`,E(t))).data}async function F(e,t,n){try{const o=await W(e,n);if(o.status!=="upcoming")throw t;return o}catch(o){throw ue(o)}}const me={async getContests(e,t){const n=$({status:e?.status,page:e?.page,pageSize:e?.pageSize}),o=await b.get(`/contests${n}`,E(t));return le(o)},async getContestById(e,t){return W(e,t)},async getLeaderboard(e,t=1,n){const o=$({page:t}),i=await b.get(`/contests/${e}/leaderboard${o}`,E(n));return de(i)},async joinContest(e,t){await F(e,I(409,"CONTEST_CLOSED","Contest is not open for registration"),t),await b.post(`/contests/${e}/register`,null,E(t))},async leaveContest(e,t){await F(e,I(409,"CONTEST_NOT_UPCOMING","Contest registration can only be cancelled for upcoming contests"),t),await b.delete(`/contests/${e}/register`,E(t))}};function pe(){const e=r.useContext(M);if(e===null)throw new Error("<AuthContext> useAuth must be used within an <AuthProvider>.");return e}function H(){const e=new URL(window.location.href);e.searchParams.delete("authRequired"),window.history.replaceState({},document.title,`${e.pathname}${e.search}${e.hash}`)}function V({isOpen:e}){const{signIn:t,signUp:n}=pe(),[o,i]=r.useState(e),[a,m]=r.useState("signin"),[l,d]=r.useState(null),[u,p]=r.useState(!1);if(r.useEffect(()=>{i(e)},[e]),r.useEffect(()=>{if(!o)return;const _=w=>{w.key==="Escape"&&g()};return document.addEventListener("keydown",_),()=>{document.removeEventListener("keydown",_)}},[o]),!o)return null;const h=a==="signin"?"Sign in required":"Create your account",y=a==="signin"?"Sign in":"Sign up",j=async _=>{_.preventDefault();const w=new FormData(_.currentTarget),q=String(w.get("email")??""),z=String(w.get("password")??""),Z=String(w.get("username")??"");try{p(!0),d(null),a==="signin"?await t({email:q,password:z}):await n({username:Z,email:q,password:z}),H(),i(!1)}catch(D){d(D instanceof Error?D.message:"Authentication failed")}finally{p(!1)}},g=()=>{H(),i(!1)};return s.jsxs("div",{className:"auth-modal",children:[s.jsx("button",{className:"auth-modal__backdrop",type:"button",onClick:g,"aria-label":"Close authentication dialog"}),s.jsxs("section",{className:"auth-modal__dialog",role:"dialog","aria-modal":"true","aria-labelledby":"auth-modal-title","aria-busy":u,children:[s.jsx("button",{className:"auth-modal__close",type:"button",onClick:g,"aria-label":"Close",children:s.jsx(Q,{fontSize:"small","aria-hidden":"true"})}),s.jsx("p",{className:"auth-modal__eyebrow",children:"Protected route"}),s.jsx("h2",{id:"auth-modal-title",children:h}),s.jsx("p",{className:"auth-modal__copy",children:"Continue with your account to access protected practice areas and keep your progress in sync."}),s.jsxs("div",{className:"auth-modal__tabs","aria-label":"Authentication mode",children:[s.jsx("button",{type:"button","aria-pressed":a==="signin",onClick:()=>{m("signin"),d(null)},children:"Sign in"}),s.jsx("button",{type:"button","aria-pressed":a==="signup",onClick:()=>{m("signup"),d(null)},children:"Sign up"})]}),s.jsxs("form",{className:"auth-modal__form",onSubmit:j,"aria-busy":u,children:[a==="signup"&&s.jsxs("label",{htmlFor:"auth-username",children:["Username",s.jsx("input",{id:"auth-username",name:"username",autoComplete:"username",required:!0})]}),s.jsxs("label",{htmlFor:"auth-email",children:["Email",s.jsx("input",{id:"auth-email",name:"email",type:"email",autoComplete:"email",required:!0})]}),s.jsxs("label",{htmlFor:"auth-password",children:["Password",s.jsx("input",{id:"auth-password",name:"password",type:"password",autoComplete:a==="signin"?"current-password":"new-password",required:!0})]}),l&&s.jsx("p",{className:"auth-modal__error",role:"alert",children:l}),s.jsx("button",{type:"submit",disabled:u,children:u?"Please wait...":y})]})]})]})}V.__docgenInfo={description:"",methods:[],displayName:"AuthModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""}}};function he({contest:e,onAuthRequired:t}){const{user:n}=Y(),o=!!n,[i,a]=r.useState(e.isRegistered??!1),[m,l]=r.useState(!1);async function d(){if(!m){if(!o){t();return}if(!i){a(!0),l(!0);try{await me.joinContest(e.id)}catch{a(!1)}finally{l(!1)}}}}const u=i?"Registered":"Join",p=i||m;return s.jsxs("div",{className:"contest-card",children:[s.jsx("h3",{className:"contest-card__title",children:e.title}),e.description&&s.jsx("p",{className:"contest-card__description",children:e.description}),s.jsxs("p",{className:"contest-card__meta",children:[e.participantsCount??0," participants"]}),s.jsx("span",{className:"contest-card__action",title:o?void 0:"Sign in to join this contest",children:s.jsx("button",{className:"contest-card__btn",onClick:d,disabled:p,"aria-disabled":p,children:u})})]})}function O({title:e,contests:t,onAuthRequired:n}){return t.length===0?null:s.jsxs("section",{className:"contest-section",children:[s.jsx("h2",{className:"contest-section__title",children:e}),s.jsx("div",{className:"contest-section__grid",children:t.map(o=>s.jsx(he,{contest:o,onAuthRequired:n},o.id))})]})}function K({activeContests:e,upcomingContests:t,pastContests:n}){const[o,i]=r.useState(!1);function a(){i(!0)}return s.jsxs("div",{className:"contest-page",children:[s.jsx("h1",{className:"contest-page__heading",children:"Contests"}),s.jsx(O,{title:"Active Contests",contests:e,onAuthRequired:a}),s.jsx(O,{title:"Upcoming Contests",contests:t,onAuthRequired:a}),s.jsx(O,{title:"Past Contests",contests:n,onAuthRequired:a}),s.jsx(V,{isOpen:o}),s.jsx("style",{children:`
        /* Base — 320px */
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

        /* 375px — small phones */
        @media (min-width: 375px) {
          .contest-page {
            padding: 16px;
          }
        }

        /* 768px — tablets */
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

        /* 1024px — desktop */
        @media (min-width: 1024px) {
          .contest-page {
            padding: 32px;
          }

          .contest-section__grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `})]})}K.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{activeContests:{required:!0,tsType:{name:"Array",elements:[{name:"ContestDetail"}],raw:"ContestDetail[]"},description:""},upcomingContests:{required:!0,tsType:{name:"Array",elements:[{name:"ContestDetail"}],raw:"ContestDetail[]"},description:""},pastContests:{required:!0,tsType:{name:"Array",elements:[{name:"ContestDetail"}],raw:"ContestDetail[]"},description:""}}};const k={id:1,title:"Sample Contest",status:"active",startTime:"2026-06-01T00:00:00Z",endTime:"2026-06-02T00:00:00Z",problems:[]},ge={title:"Pages/ContestPage",component:K,decorators:[e=>s.jsx(J,{children:s.jsx(e,{})})]},A={args:{activeContests:[k],upcomingContests:[{...k,id:2,status:"upcoming"}],pastContests:[{...k,id:3,status:"past"}]}},N={args:{activeContests:[],upcomingContests:[],pastContests:[]}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    activeContests: [],
    upcomingContests: [],
    pastContests: []
  }
}`,...N.parameters?.docs?.source}}};const fe=["Complete","Empty"],we=Object.freeze(Object.defineProperty({__proto__:null,Complete:A,Empty:N,__namedExportsOrder:fe,default:ge},Symbol.toStringTag,{value:"Module"}));export{we as C};
