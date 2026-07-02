import{F as o,A as s}from"./iframe-M2TaxOvK.js";import{C as Q}from"./Close-D5tQ9J7C.js";const X=6e4,w={SIGN_IN:"/auth/signin",SIGN_UP:"/auth/signup",SIGN_OUT:"/auth/signout",REFRESH:"/auth/refresh",ME:"/auth/me"},P="auth:signout";function R(e){return typeof e=="object"&&e!==null&&"status"in e&&typeof e.status=="number"}let c=null;async function S(e,t={}){const n=await fetch(e,{credentials:"include",headers:{"Content-Type":"application/json",...t.headers??{}},...t});if(!n.ok){const r=await n.json().catch(()=>({}));throw{message:r.message??n.statusText,code:r.code??"UNKNOWN_ERROR",status:n.status,details:r}}return n.json().catch(()=>{throw{message:"Invalif response format",code:"PARSE_ERROR",status:n.status,details:null}})}function L(e){return{Authorization:`Bearer ${e}`}}const f={async signIn(e){const t=await S(w.SIGN_IN,{method:"POST",body:JSON.stringify(e)});return c=t,t},async signUp(e){return await S(w.SIGN_UP,{method:"POST",body:JSON.stringify(e)}),f.signIn({email:e.email,password:e.password})},async signOut(){c&&await S(w.SIGN_OUT,{method:"POST",headers:L(c.accessToken)}).catch(e=>{console.error("[authService] signOut request failed, clearing session anyway:",e)}),c=null,typeof window<"u"&&window.dispatchEvent(new CustomEvent(P))},async refreshToken(){try{const e=await S(w.REFRESH,{method:"POST",...c?{headers:L(c.accessToken)}:{}});return c=e,e}catch(e){throw R(e)&&e.status===401&&(c=null,await f.signOut(),typeof window<"u"&&(window.location.href="/")),e}},getSession(){return c?c.expiresAt<=Date.now()?null:c:null},isAuthenticated(){return f.getSession()!==null},needsRefresh(){return c?c.expiresAt-Date.now()<X:!1},async hydrateFromServer(){try{const e=await S(w.ME);return c=e,e}catch(e){return R(e)&&e.status===401?(c=null,null):(console.error("[authService] hydrateFromServer: unexpected error —",R(e)?`status=${e.status} code=${e.code} message=${e.message}`:e),c=null,null)}}},M=o.createContext(null);function B({children:e}){const[t,n]=o.useState(null),[r,a]=o.useState(!0),[i,h]=o.useState(null);o.useEffect(()=>{let l=!1;(async()=>{try{const g=await f.hydrateFromServer();l||n(g)}catch(g){console.error("[AuthProvider] Session hydration failed:",g),l||h(g instanceof Error?g:new Error("Session hydration failed"))}finally{l||a(!1)}})();function j(){n(null)}return window.addEventListener(P,j),()=>{l=!0,window.removeEventListener(P,j)}},[]);const m=o.useCallback(async l=>{const _=await f.signIn(l);n(_)},[]),u=o.useCallback(async l=>{const _=await f.signUp(l);n(_)},[]),p=o.useCallback(async()=>{await f.signOut(),n(null)},[]),d=o.useMemo(()=>({user:t?.user??null,isAuthenticated:f.isAuthenticated(),isLoading:r,hydrationError:i,signIn:m,signUp:u,signOut:p}),[t,r,i,m,u,p]);return s.jsx(M.Provider,{value:d,children:e})}B.__docgenInfo={description:"",methods:[],displayName:"AuthProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const G=o.createContext({config:null,user:null});function Y(){return o.useContext(G)}function J({children:e,config:t=null,user:n=null}){return s.jsx(G.Provider,{value:{config:t,user:n},children:s.jsx(B,{children:e})})}J.__docgenInfo={description:"",methods:[],displayName:"AppProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},config:{required:!1,tsType:{name:"union",raw:"AppConfig | null",elements:[{name:"z.infer",elements:[{name:"configSchema"}],raw:"z.infer<typeof configSchema>"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},user:{required:!1,tsType:{name:"union",raw:"AuthUser | null",elements:[{name:"AuthUser"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}}}};const ee=e=>e instanceof Error,te=e=>e instanceof DOMException&&e.name==="AbortError",v=e=>e===404?"NOT_FOUND":e===500?"INTERNAL_SERVER_ERROR":e===400?"BAD_REQUEST":e===401?"UNAUTHORIZED":e===403?"FORBIDDEN":"UNKNOWN_ERROR",ne=e=>te(e)?{message:"Request was aborted",code:v(0),status:0}:ee(e)?{message:e.message,code:v(500),status:500}:{message:"An unknown error occurred",code:v(0),status:0};var se={};const U=typeof window>"u",T=U?se.API_BASE_URL||"http://localhost:3000":"/api";function re(e){const t=T.endsWith("/")?T.slice(0,-1):T,n=e.startsWith("/")?e:`/${e}`;return`${t}${n}`}function oe(){try{const e=document.cookie.split(";").map(t=>t.trim()).find(t=>t.startsWith("auth_access_token="));return e?decodeURIComponent(e.split("=")[1]):null}catch{return null}}function ae(e){try{const t=e.split(";").map(n=>n.trim()).find(n=>n.startsWith("auth_access_token="));return t?decodeURIComponent(t.split("=")[1]):null}catch{return null}}function ie(e){if(!U){try{const t=localStorage.getItem("auth_access_token");if(t)return t}catch{console.warn("Failed to access localStorage for auth token retrieval")}return oe()}return e?ae(e):null}async function ce(e){let t={};try{const n=await e.json();typeof n=="object"&&n!==null&&(t=n)}catch{}return{status:e.status,code:typeof t.code=="string"?t.code:v(e.status),message:typeof t.message=="string"?t.message:e.statusText||"An unexpected error occurred",details:t.details}}async function x(e,t,n,r={}){const a=re(t),i=r.headers?.Cookie??r.headers?.cookie,h=ie(i),m=n!=null,u={...r.headers};h&&(u.Authorization=`Bearer ${h}`),m&&(u["Content-Type"]="application/json");const p={method:e,headers:u,signal:r.signal,...U?{}:{credentials:r.credentials??"include"},...m?{body:JSON.stringify(n)}:{}};let d;try{d=await fetch(a,p)}catch(l){throw ne(l)}if(!d.ok)throw await ce(d);try{return await d.json()}catch{throw{status:500,code:"PARSE_ERROR",message:"Failed to parse server response as JSON"}}}const b={get(e,t){return x("GET",e,void 0,t)},post(e,t,n){return x("POST",e,t,n)},put(e,t,n){return x("PUT",e,t,n)},patch(e,t,n){return x("PATCH",e,t,n)},delete(e,t){return x("DELETE",e,void 0,t)}};function $(e){const t=new URLSearchParams;Object.entries(e).forEach(([r,a])=>{a!==void 0&&t.set(r,String(a))});const n=t.toString();return n?`?${n}`:""}function E(e){if(e?.cookie)return{headers:{Cookie:e.cookie}}}function I(e,t,n,r){return{status:e,code:t,message:n,...r!==void 0?{details:r}:{}}}function ue(e){return typeof e=="object"&&e!==null&&"status"in e&&"code"in e&&"message"in e}function le(e){return ue(e)?e:I(500,"CONTEST_STATUS_CHECK_FAILED","Failed to validate contest status",e)}function de(e){return{contests:e.data.contests,meta:e.data.meta??e.meta}}function me(e){return{entries:e.data.entries,meta:e.data.meta??e.meta}}async function W(e,t){return(await b.get(`/contests/${e}`,E(t))).data}async function F(e,t,n){try{const r=await W(e,n);if(r.status!=="upcoming")throw t;return r}catch(r){throw le(r)}}const pe={async getContests(e,t){const n=$({status:e?.status,page:e?.page,pageSize:e?.pageSize}),r=await b.get(`/contests${n}`,E(t));return de(r)},async getContestById(e,t){return W(e,t)},async getLeaderboard(e,t=1,n){const r=$({page:t}),a=await b.get(`/contests/${e}/leaderboard${r}`,E(n));return me(a)},async joinContest(e,t){await F(e,I(409,"CONTEST_CLOSED","Contest is not open for registration"),t),await b.post(`/contests/${e}/register`,null,E(t))},async leaveContest(e,t){await F(e,I(409,"CONTEST_NOT_UPCOMING","Contest registration can only be cancelled for upcoming contests"),t),await b.delete(`/contests/${e}/register`,E(t))}};function he(){const e=o.useContext(M);if(e===null)throw new Error("<AuthContext> useAuth must be used within an <AuthProvider>.");return e}function H(){const e=new URL(window.location.href);e.searchParams.delete("authRequired"),window.history.replaceState({},document.title,`${e.pathname}${e.search}${e.hash}`)}function V({isOpen:e}){const{signIn:t,signUp:n}=he(),[r,a]=o.useState(e),[i,h]=o.useState("signin"),[m,u]=o.useState(null),[p,d]=o.useState(!1);if(o.useEffect(()=>{a(e)},[e]),o.useEffect(()=>{if(!r)return;const y=C=>{C.key==="Escape"&&g()};return document.addEventListener("keydown",y),()=>{document.removeEventListener("keydown",y)}},[r]),!r)return null;const l=i==="signin"?"Sign in required":"Create your account",_=i==="signin"?"Sign in":"Sign up",j=async y=>{y.preventDefault();const C=new FormData(y.currentTarget),q=String(C.get("email")??""),z=String(C.get("password")??""),Z=String(C.get("username")??"");try{d(!0),u(null),i==="signin"?await t({email:q,password:z}):await n({username:Z,email:q,password:z}),H(),a(!1)}catch(D){u(D instanceof Error?D.message:"Authentication failed")}finally{d(!1)}},g=()=>{H(),a(!1)};return s.jsxs("div",{className:"auth-modal",children:[s.jsx("button",{className:"auth-modal__backdrop",type:"button",onClick:g,"aria-label":"Close authentication dialog"}),s.jsxs("section",{className:"auth-modal__dialog",role:"dialog","aria-modal":"true","aria-labelledby":"auth-modal-title","aria-busy":p,children:[s.jsx("button",{className:"auth-modal__close",type:"button",onClick:g,"aria-label":"Close",children:s.jsx(Q,{fontSize:"small","aria-hidden":"true"})}),s.jsx("p",{className:"auth-modal__eyebrow",children:"Protected route"}),s.jsx("h2",{id:"auth-modal-title",children:l}),s.jsx("p",{className:"auth-modal__copy",children:"Continue with your account to access protected practice areas and keep your progress in sync."}),s.jsxs("div",{className:"auth-modal__tabs","aria-label":"Authentication mode",children:[s.jsx("button",{type:"button","aria-pressed":i==="signin",onClick:()=>{h("signin"),u(null)},children:"Sign in"}),s.jsx("button",{type:"button","aria-pressed":i==="signup",onClick:()=>{h("signup"),u(null)},children:"Sign up"})]}),s.jsxs("form",{className:"auth-modal__form",onSubmit:j,"aria-busy":p,children:[i==="signup"&&s.jsxs("label",{htmlFor:"auth-username",children:["Username",s.jsx("input",{id:"auth-username",name:"username",autoComplete:"username",required:!0})]}),s.jsxs("label",{htmlFor:"auth-email",children:["Email",s.jsx("input",{id:"auth-email",name:"email",type:"email",autoComplete:"email",required:!0})]}),s.jsxs("label",{htmlFor:"auth-password",children:["Password",s.jsx("input",{id:"auth-password",name:"password",type:"password",autoComplete:i==="signin"?"current-password":"new-password",required:!0})]}),m&&s.jsx("p",{className:"auth-modal__error",role:"alert",children:m}),s.jsx("button",{type:"submit",disabled:p,children:p?"Please wait...":_})]})]})]})}V.__docgenInfo={description:"",methods:[],displayName:"AuthModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""}}};function ge({contest:e,onAuthRequired:t}){const{user:n}=Y(),r=!!n,[a,i]=o.useState(e.isRegistered??!1),[h,m]=o.useState(!1);async function u(){if(!h){if(!r){t();return}if(!a){i(!0),m(!0);try{await pe.joinContest(e.id)}catch{i(!1)}finally{m(!1)}}}}const p=a?"Registered":"Join",d=a||h||!r;return s.jsxs("div",{className:"contest-card",children:[s.jsx("h3",{className:"contest-card__title",children:e.title}),e.description&&s.jsx("p",{className:"contest-card__description",children:e.description}),s.jsxs("p",{className:"contest-card__meta",children:[e.participantsCount??0," participants"]}),s.jsx("span",{className:"contest-card__action",title:r?void 0:"Sign in to join this contest",children:s.jsx("button",{className:"contest-card__btn",onClick:u,disabled:d,"aria-disabled":d,children:p})})]})}function O({title:e,contests:t,onAuthRequired:n}){return t.length===0?null:s.jsxs("section",{className:"contest-section",children:[s.jsx("h2",{className:"contest-section__title",children:e}),s.jsx("div",{className:"contest-section__grid",children:t.map(r=>s.jsx(ge,{contest:r,onAuthRequired:n},r.id))})]})}function K({activeContests:e,upcomingContests:t,pastContests:n}){const[r,a]=o.useState(!1);function i(){a(!0)}return s.jsxs("div",{className:"contest-page",children:[s.jsx("h1",{className:"contest-page__heading",children:"Contests"}),s.jsx(O,{title:"Active Contests",contests:e,onAuthRequired:i}),s.jsx(O,{title:"Upcoming Contests",contests:t,onAuthRequired:i}),s.jsx(O,{title:"Past Contests",contests:n,onAuthRequired:i}),s.jsx(V,{isOpen:r}),s.jsx("style",{children:`
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
      `})]})}K.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{activeContests:{required:!0,tsType:{name:"Array",elements:[{name:"ContestDetail"}],raw:"ContestDetail[]"},description:""},upcomingContests:{required:!0,tsType:{name:"Array",elements:[{name:"ContestDetail"}],raw:"ContestDetail[]"},description:""},pastContests:{required:!0,tsType:{name:"Array",elements:[{name:"ContestDetail"}],raw:"ContestDetail[]"},description:""}}};const k={id:1,title:"Sample Contest",status:"active",startTime:"2026-06-01T00:00:00Z",endTime:"2026-06-02T00:00:00Z",problems:[]},fe={title:"Pages/ContestPage",component:K,decorators:[e=>s.jsx(J,{children:s.jsx(e,{})})]},A={args:{activeContests:[k],upcomingContests:[{...k,id:2,status:"upcoming"}],pastContests:[{...k,id:3,status:"past"}]}},N={args:{activeContests:[],upcomingContests:[],pastContests:[]}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};const _e=["Complete","Empty"],we=Object.freeze(Object.defineProperty({__proto__:null,Complete:A,Empty:N,__namedExportsOrder:_e,default:fe},Symbol.toStringTag,{value:"Module"}));export{we as C};
