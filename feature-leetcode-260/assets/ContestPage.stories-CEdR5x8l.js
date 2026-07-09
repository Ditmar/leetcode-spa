import{H as a,B as s}from"./iframe-9uf5bNUi.js";import{A as U,a as _}from"./authService-DvqEhDAi.js";import{C as J}from"./Close-DsX5ECuf.js";const L=a.createContext(null);function D({children:e}){const[t,n]=a.useState(null),[o,i]=a.useState(!0),[r,p]=a.useState(null);a.useEffect(()=>{let u=!1;(async()=>{try{const h=await _.hydrateFromServer();u||n(h)}catch(h){console.error("[AuthProvider] Session hydration failed:",h),u||p(h instanceof Error?h:new Error("Session hydration failed"))}finally{u||i(!1)}})();function E(){n(null)}return window.addEventListener(U,E),()=>{u=!0,window.removeEventListener(U,E)}},[]);const d=a.useCallback(async u=>{const g=await _.signIn(u);n(g)},[]),c=a.useCallback(async u=>{const g=await _.signUp(u);n(g)},[]),m=a.useCallback(async()=>{await _.signOut(),n(null)},[]),l=a.useMemo(()=>({user:t?.user??null,isAuthenticated:_.isAuthenticated(),isLoading:o,hydrationError:r,signIn:d,signUp:c,signOut:m}),[t,o,r,d,c,m]);return s.jsx(L.Provider,{value:l,children:e})}D.__docgenInfo={description:"",methods:[],displayName:"AuthProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const $=a.createContext({config:null,user:null});function V(){return a.useContext($)}function F({children:e,config:t=null,user:n=null}){return s.jsx($.Provider,{value:{config:t,user:n},children:s.jsx(D,{children:e})})}F.__docgenInfo={description:"",methods:[],displayName:"AppProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},config:{required:!1,tsType:{name:"union",raw:"AppConfig | null",elements:[{name:"z.infer",elements:[{name:"configSchema"}],raw:"z.infer<typeof configSchema>"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},user:{required:!1,tsType:{name:"union",raw:"AuthUser | null",elements:[{name:"AuthUser"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}}}};const G=e=>e instanceof Error,Z=e=>e instanceof DOMException&&e.name==="AbortError",A=e=>e===404?"NOT_FOUND":e===500?"INTERNAL_SERVER_ERROR":e===400?"BAD_REQUEST":e===401?"UNAUTHORIZED":e===403?"FORBIDDEN":"UNKNOWN_ERROR",K=e=>Z(e)?{message:"Request was aborted",code:A(0),status:0}:G(e)?{message:e.message,code:A(500),status:500}:{message:"An unknown error occurred",code:A(0),status:0};var Q={};const T=typeof window>"u",j=T?Q.API_BASE_URL||"http://localhost:3000":"/api";function X(e){const t=j.endsWith("/")?j.slice(0,-1):j,n=e.startsWith("/")?e:`/${e}`;return`${t}${n}`}function Y(){try{const e=document.cookie.split(";").map(t=>t.trim()).find(t=>t.startsWith("auth_access_token="));return e?decodeURIComponent(e.split("=")[1]):null}catch{return null}}function ee(e){try{const t=e.split(";").map(n=>n.trim()).find(n=>n.startsWith("auth_access_token="));return t?decodeURIComponent(t.split("=")[1]):null}catch{return null}}function te(e){if(!T){try{const t=localStorage.getItem("auth_access_token");if(t)return t}catch{console.warn("Failed to access localStorage for auth token retrieval")}return Y()}return e?ee(e):null}async function ne(e){let t={};try{const n=await e.json();typeof n=="object"&&n!==null&&(t=n)}catch{}return{status:e.status,code:typeof t.code=="string"?t.code:A(e.status),message:typeof t.message=="string"?t.message:e.statusText||"An unexpected error occurred",details:t.details}}async function y(e,t,n,o={}){const i=X(t),r=o.headers?.Cookie??o.headers?.cookie,p=te(r),d=n!=null,c={...o.headers};p&&(c.Authorization=`Bearer ${p}`),d&&(c["Content-Type"]="application/json");const m={method:e,headers:c,signal:o.signal,...T?{}:{credentials:o.credentials??"include"},...d?{body:JSON.stringify(n)}:{}};let l;try{l=await fetch(i,m)}catch(u){throw K(u)}if(!l.ok)throw await ne(l);try{return await l.json()}catch{throw{status:500,code:"PARSE_ERROR",message:"Failed to parse server response as JSON"}}}const x={get(e,t){return y("GET",e,void 0,t)},post(e,t,n){return y("POST",e,t,n)},put(e,t,n){return y("PUT",e,t,n)},patch(e,t,n){return y("PATCH",e,t,n)},delete(e,t){return y("DELETE",e,void 0,t)}};function q(e){const t=new URLSearchParams;Object.entries(e).forEach(([o,i])=>{i!==void 0&&t.set(o,String(i))});const n=t.toString();return n?`?${n}`:""}function b(e){if(e?.cookie)return{headers:{Cookie:e.cookie}}}function R(e,t,n,o){return{status:e,code:t,message:n,...o!==void 0?{details:o}:{}}}function se(e){return typeof e=="object"&&e!==null&&"status"in e&&"code"in e&&"message"in e}function oe(e){return se(e)?e:R(500,"CONTEST_STATUS_CHECK_FAILED","Failed to validate contest status",e)}function ae(e){return{contests:e.data.contests,meta:e.data.meta??e.meta}}function re(e){return{entries:e.data.entries,meta:e.data.meta??e.meta}}async function B(e,t){return(await x.get(`/contests/${e}`,b(t))).data}async function I(e,t,n){try{const o=await B(e,n);if(o.status!=="upcoming")throw t;return o}catch(o){throw oe(o)}}const ie={async getContests(e,t){const n=q({status:e?.status,page:e?.page,pageSize:e?.pageSize}),o=await x.get(`/contests${n}`,b(t));return ae(o)},async getContestById(e,t){return B(e,t)},async getLeaderboard(e,t=1,n){const o=q({page:t}),i=await x.get(`/contests/${e}/leaderboard${o}`,b(n));return re(i)},async joinContest(e,t){await I(e,R(409,"CONTEST_CLOSED","Contest is not open for registration"),t),await x.post(`/contests/${e}/register`,null,b(t))},async leaveContest(e,t){await I(e,R(409,"CONTEST_NOT_UPCOMING","Contest registration can only be cancelled for upcoming contests"),t),await x.delete(`/contests/${e}/register`,b(t))}};function ce(){const e=a.useContext(L);if(e===null)throw new Error("<AuthContext> useAuth must be used within an <AuthProvider>.");return e}function z(){const e=new URL(window.location.href);e.searchParams.delete("authRequired"),window.history.replaceState({},document.title,`${e.pathname}${e.search}${e.hash}`)}function M({isOpen:e}){const{signIn:t,signUp:n}=ce(),[o,i]=a.useState(e),[r,p]=a.useState("signin"),[d,c]=a.useState(null),[m,l]=a.useState(!1);if(a.useEffect(()=>{i(e)},[e]),a.useEffect(()=>{if(!o)return;const f=C=>{C.key==="Escape"&&h()};return document.addEventListener("keydown",f),()=>{document.removeEventListener("keydown",f)}},[o]),!o)return null;const u=r==="signin"?"Sign in required":"Create your account",g=r==="signin"?"Sign in":"Sign up",E=async f=>{f.preventDefault();const C=new FormData(f.currentTarget),k=String(C.get("email")??""),O=String(C.get("password")??""),W=String(C.get("username")??"");try{l(!0),c(null),r==="signin"?await t({email:k,password:O}):await n({username:W,email:k,password:O}),z(),i(!1)}catch(P){c(P instanceof Error?P.message:"Authentication failed")}finally{l(!1)}},h=()=>{z(),i(!1)};return s.jsxs("div",{className:"auth-modal",children:[s.jsx("button",{className:"auth-modal__backdrop",type:"button",onClick:h,"aria-label":"Close authentication dialog"}),s.jsxs("section",{className:"auth-modal__dialog",role:"dialog","aria-modal":"true","aria-labelledby":"auth-modal-title","aria-busy":m,children:[s.jsx("button",{className:"auth-modal__close",type:"button",onClick:h,"aria-label":"Close",children:s.jsx(J,{fontSize:"small","aria-hidden":"true"})}),s.jsx("p",{className:"auth-modal__eyebrow",children:"Protected route"}),s.jsx("h2",{id:"auth-modal-title",children:u}),s.jsx("p",{className:"auth-modal__copy",children:"Continue with your account to access protected practice areas and keep your progress in sync."}),s.jsxs("div",{className:"auth-modal__tabs","aria-label":"Authentication mode",children:[s.jsx("button",{type:"button","aria-pressed":r==="signin",onClick:()=>{p("signin"),c(null)},children:"Sign in"}),s.jsx("button",{type:"button","aria-pressed":r==="signup",onClick:()=>{p("signup"),c(null)},children:"Sign up"})]}),s.jsxs("form",{className:"auth-modal__form",onSubmit:E,"aria-busy":m,children:[r==="signup"&&s.jsxs("label",{htmlFor:"auth-username",children:["Username",s.jsx("input",{id:"auth-username",name:"username",autoComplete:"username",required:!0})]}),s.jsxs("label",{htmlFor:"auth-email",children:["Email",s.jsx("input",{id:"auth-email",name:"email",type:"email",autoComplete:"email",required:!0})]}),s.jsxs("label",{htmlFor:"auth-password",children:["Password",s.jsx("input",{id:"auth-password",name:"password",type:"password",autoComplete:r==="signin"?"current-password":"new-password",required:!0})]}),d&&s.jsx("p",{className:"auth-modal__error",role:"alert",children:d}),s.jsx("button",{type:"submit",disabled:m,children:m?"Please wait...":g})]})]})]})}M.__docgenInfo={description:"",methods:[],displayName:"AuthModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""}}};function ue({contest:e,onAuthRequired:t}){const{user:n}=V(),o=!!n,[i,r]=a.useState(e.isRegistered??!1),[p,d]=a.useState(!1);async function c(){if(!p){if(!o){t();return}if(!i){r(!0),d(!0);try{await ie.joinContest(e.id)}catch{r(!1)}finally{d(!1)}}}}const m=i?"Registered":o?"Join":"Sign in to join",l=i||p||!o;return s.jsxs("div",{className:"contest-card",children:[s.jsx("h3",{className:"contest-card__title",children:e.title}),e.description&&s.jsx("p",{className:"contest-card__description",children:e.description}),s.jsxs("p",{className:"contest-card__meta",children:[e.participantsCount??0," participants"]}),s.jsx("span",{className:"contest-card__action",title:o?void 0:"Sign in to join this contest",children:s.jsx("button",{className:"contest-card__btn",onClick:c,disabled:l,"aria-disabled":l,children:m})})]})}function v({title:e,contests:t,onAuthRequired:n}){return t.length===0?null:s.jsxs("section",{className:"contest-section",children:[s.jsx("h2",{className:"contest-section__title",children:e}),s.jsx("div",{className:"contest-section__grid",children:t.map(o=>s.jsx(ue,{contest:o,onAuthRequired:n},o.id))})]})}function H({activeContests:e,upcomingContests:t,pastContests:n}){const[o,i]=a.useState(!1);function r(){i(!0)}return s.jsxs("div",{className:"contest-page",children:[s.jsx("h1",{className:"contest-page__heading",children:"Contests"}),s.jsx(v,{title:"Active Contests",contests:e,onAuthRequired:r}),s.jsx(v,{title:"Upcoming Contests",contests:t,onAuthRequired:r}),s.jsx(v,{title:"Past Contests",contests:n,onAuthRequired:r}),s.jsx(M,{isOpen:o}),s.jsx("style",{children:`
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
      `})]})}H.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{activeContests:{required:!0,tsType:{name:"Array",elements:[{name:"ContestDetail"}],raw:"ContestDetail[]"},description:""},upcomingContests:{required:!0,tsType:{name:"Array",elements:[{name:"ContestDetail"}],raw:"ContestDetail[]"},description:""},pastContests:{required:!0,tsType:{name:"Array",elements:[{name:"ContestDetail"}],raw:"ContestDetail[]"},description:""}}};const N={id:1,title:"Sample Contest",status:"active",startTime:"2026-06-01T00:00:00Z",endTime:"2026-06-02T00:00:00Z",problems:[]},le={title:"Pages/ContestPage",component:H,decorators:[e=>s.jsx(F,{children:s.jsx(e,{})})]},w={args:{activeContests:[N],upcomingContests:[{...N,id:2,status:"upcoming"}],pastContests:[{...N,id:3,status:"past"}]}},S={args:{activeContests:[],upcomingContests:[],pastContests:[]}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    activeContests: [],
    upcomingContests: [],
    pastContests: []
  }
}`,...S.parameters?.docs?.source}}};const de=["Complete","Empty"],ge=Object.freeze(Object.defineProperty({__proto__:null,Complete:w,Empty:S,__namedExportsOrder:de,default:le},Symbol.toStringTag,{value:"Module"}));export{ge as C};
