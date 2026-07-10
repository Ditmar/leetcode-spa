import{H as u,B as s}from"./iframe-CX1og2HH.js";import{a as $,u as F,A as B}from"./AppConfigContext-dNFApS-M.js";import{C as M}from"./Close-BglbmrYK.js";const H=t=>t instanceof Error,W=t=>t instanceof DOMException&&t.name==="AbortError",y=t=>t===404?"NOT_FOUND":t===500?"INTERNAL_SERVER_ERROR":t===400?"BAD_REQUEST":t===401?"UNAUTHORIZED":t===403?"FORBIDDEN":"UNKNOWN_ERROR",J=t=>W(t)?{message:"Request was aborted",code:y(0),status:0}:H(t)?{message:t.message,code:y(500),status:500}:{message:"An unknown error occurred",code:y(0),status:0};var Z={};const N=typeof window>"u",S=N?Z.API_BASE_URL||"http://localhost:3000":"/api";function G(t){const e=S.endsWith("/")?S.slice(0,-1):S,n=t.startsWith("/")?t:`/${t}`;return`${e}${n}`}function K(){try{const t=document.cookie.split(";").map(e=>e.trim()).find(e=>e.startsWith("auth_access_token="));return t?decodeURIComponent(t.split("=")[1]):null}catch{return null}}function Q(t){try{const e=t.split(";").map(n=>n.trim()).find(n=>n.startsWith("auth_access_token="));return e?decodeURIComponent(e.split("=")[1]):null}catch{return null}}function V(t){if(!N){try{const e=localStorage.getItem("auth_access_token");if(e)return e}catch{console.warn("Failed to access localStorage for auth token retrieval")}return K()}return t?Q(t):null}async function X(t){let e={};try{const n=await t.json();typeof n=="object"&&n!==null&&(e=n)}catch{}return{status:t.status,code:typeof e.code=="string"?e.code:y(t.status),message:typeof e.message=="string"?e.message:t.statusText||"An unexpected error occurred",details:e.details}}async function h(t,e,n,o={}){const a=G(e),r=o.headers?.Cookie??o.headers?.cookie,d=V(r),l=n!=null,i={...o.headers};d&&(i.Authorization=`Bearer ${d}`),l&&(i["Content-Type"]="application/json");const m={method:t,headers:i,signal:o.signal,...N?{}:{credentials:o.credentials??"include"},...l?{body:JSON.stringify(n)}:{}};let c;try{c=await fetch(a,m)}catch(b){throw J(b)}if(!c.ok)throw await X(c);try{return await c.json()}catch{throw{status:500,code:"PARSE_ERROR",message:"Failed to parse server response as JSON"}}}const f={get(t,e){return h("GET",t,void 0,e)},post(t,e,n){return h("POST",t,e,n)},put(t,e,n){return h("PUT",t,e,n)},patch(t,e,n){return h("PATCH",t,e,n)},delete(t,e){return h("DELETE",t,void 0,e)}};function T(t){const e=new URLSearchParams;Object.entries(t).forEach(([o,a])=>{a!==void 0&&e.set(o,String(a))});const n=e.toString();return n?`?${n}`:""}function _(t){if(t?.cookie)return{headers:{Cookie:t.cookie}}}function A(t,e,n,o){return{status:t,code:e,message:n,...o!==void 0?{details:o}:{}}}function Y(t){return typeof t=="object"&&t!==null&&"status"in t&&"code"in t&&"message"in t}function tt(t){return Y(t)?t:A(500,"CONTEST_STATUS_CHECK_FAILED","Failed to validate contest status",t)}function et(t){return{contests:t.data.contests,meta:t.data.meta??t.meta}}function nt(t){return{entries:t.data.entries,meta:t.data.meta??t.meta}}async function q(t,e){return(await f.get(`/contests/${t}`,_(e))).data}async function O(t,e,n){try{const o=await q(t,n);if(o.status!=="upcoming")throw e;return o}catch(o){throw tt(o)}}const st={async getContests(t,e){const n=T({status:t?.status,page:t?.page,pageSize:t?.pageSize}),o=await f.get(`/contests${n}`,_(e));return et(o)},async getContestById(t,e){return q(t,e)},async getLeaderboard(t,e=1,n){const o=T({page:e}),a=await f.get(`/contests/${t}/leaderboard${o}`,_(n));return nt(a)},async joinContest(t,e){await O(t,A(409,"CONTEST_CLOSED","Contest is not open for registration"),e),await f.post(`/contests/${t}/register`,null,_(e))},async leaveContest(t,e){await O(t,A(409,"CONTEST_NOT_UPCOMING","Contest registration can only be cancelled for upcoming contests"),e),await f.delete(`/contests/${t}/register`,_(e))}};function ot(){const t=u.useContext($);if(t===null)throw new Error("<AuthContext> useAuth must be used within an <AuthProvider>.");return t}function P(){const t=new URL(window.location.href);t.searchParams.delete("authRequired"),window.history.replaceState({},document.title,`${t.pathname}${t.search}${t.hash}`)}function z({isOpen:t}){const{signIn:e,signUp:n}=ot(),[o,a]=u.useState(t),[r,d]=u.useState("signin"),[l,i]=u.useState(null),[m,c]=u.useState(!1);if(u.useEffect(()=>{a(t)},[t]),u.useEffect(()=>{if(!o)return;const p=g=>{g.key==="Escape"&&w()};return document.addEventListener("keydown",p),()=>{document.removeEventListener("keydown",p)}},[o]),!o)return null;const b=r==="signin"?"Sign in required":"Create your account",U=r==="signin"?"Sign in":"Sign up",I=async p=>{p.preventDefault();const g=new FormData(p.currentTarget),R=String(g.get("email")??""),k=String(g.get("password")??""),L=String(g.get("username")??"");try{c(!0),i(null),r==="signin"?await e({email:R,password:k}):await n({username:L,email:R,password:k}),P(),a(!1)}catch(v){i(v instanceof Error?v.message:"Authentication failed")}finally{c(!1)}},w=()=>{P(),a(!1)};return s.jsxs("div",{className:"auth-modal",children:[s.jsx("button",{className:"auth-modal__backdrop",type:"button",onClick:w,"aria-label":"Close authentication dialog"}),s.jsxs("section",{className:"auth-modal__dialog",role:"dialog","aria-modal":"true","aria-labelledby":"auth-modal-title","aria-busy":m,children:[s.jsx("button",{className:"auth-modal__close",type:"button",onClick:w,"aria-label":"Close",children:s.jsx(M,{fontSize:"small","aria-hidden":"true"})}),s.jsx("p",{className:"auth-modal__eyebrow",children:"Protected route"}),s.jsx("h2",{id:"auth-modal-title",children:b}),s.jsx("p",{className:"auth-modal__copy",children:"Continue with your account to access protected practice areas and keep your progress in sync."}),s.jsxs("div",{className:"auth-modal__tabs","aria-label":"Authentication mode",children:[s.jsx("button",{type:"button","aria-pressed":r==="signin",onClick:()=>{d("signin"),i(null)},children:"Sign in"}),s.jsx("button",{type:"button","aria-pressed":r==="signup",onClick:()=>{d("signup"),i(null)},children:"Sign up"})]}),s.jsxs("form",{className:"auth-modal__form",onSubmit:I,"aria-busy":m,children:[r==="signup"&&s.jsxs("label",{htmlFor:"auth-username",children:["Username",s.jsx("input",{id:"auth-username",name:"username",autoComplete:"username",required:!0})]}),s.jsxs("label",{htmlFor:"auth-email",children:["Email",s.jsx("input",{id:"auth-email",name:"email",type:"email",autoComplete:"email",required:!0})]}),s.jsxs("label",{htmlFor:"auth-password",children:["Password",s.jsx("input",{id:"auth-password",name:"password",type:"password",autoComplete:r==="signin"?"current-password":"new-password",required:!0})]}),l&&s.jsx("p",{className:"auth-modal__error",role:"alert",children:l}),s.jsx("button",{type:"submit",disabled:m,children:m?"Please wait...":U})]})]})]})}z.__docgenInfo={description:"",methods:[],displayName:"AuthModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""}}};function at({contest:t,onAuthRequired:e}){const{user:n}=F(),o=!!n,[a,r]=u.useState(t.isRegistered??!1),[d,l]=u.useState(!1);async function i(){if(!d){if(!o){e();return}if(!a){r(!0),l(!0);try{await st.joinContest(t.id)}catch{r(!1)}finally{l(!1)}}}}const m=a?"Registered":o?"Join":"Sign in to join",c=a||d||!o;return s.jsxs("div",{className:"contest-card",children:[s.jsx("h3",{className:"contest-card__title",children:t.title}),t.description&&s.jsx("p",{className:"contest-card__description",children:t.description}),s.jsxs("p",{className:"contest-card__meta",children:[t.participantsCount??0," participants"]}),s.jsx("span",{className:"contest-card__action",title:o?void 0:"Sign in to join this contest",children:s.jsx("button",{className:"contest-card__btn",onClick:i,disabled:c,"aria-disabled":c,children:m})})]})}function j({title:t,contests:e,onAuthRequired:n}){return e.length===0?null:s.jsxs("section",{className:"contest-section",children:[s.jsx("h2",{className:"contest-section__title",children:t}),s.jsx("div",{className:"contest-section__grid",children:e.map(o=>s.jsx(at,{contest:o,onAuthRequired:n},o.id))})]})}function D({activeContests:t,upcomingContests:e,pastContests:n}){const[o,a]=u.useState(!1);function r(){a(!0)}return s.jsxs("div",{className:"contest-page",children:[s.jsx("h1",{className:"contest-page__heading",children:"Contests"}),s.jsx(j,{title:"Active Contests",contests:t,onAuthRequired:r}),s.jsx(j,{title:"Upcoming Contests",contests:e,onAuthRequired:r}),s.jsx(j,{title:"Past Contests",contests:n,onAuthRequired:r}),s.jsx(z,{isOpen:o}),s.jsx("style",{children:`
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
      `})]})}D.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{activeContests:{required:!0,tsType:{name:"Array",elements:[{name:"ContestDetail"}],raw:"ContestDetail[]"},description:""},upcomingContests:{required:!0,tsType:{name:"Array",elements:[{name:"ContestDetail"}],raw:"ContestDetail[]"},description:""},pastContests:{required:!0,tsType:{name:"Array",elements:[{name:"ContestDetail"}],raw:"ContestDetail[]"},description:""}}};const E={id:1,title:"Sample Contest",status:"active",startTime:"2026-06-01T00:00:00Z",endTime:"2026-06-02T00:00:00Z",problems:[]},rt={title:"Pages/ContestPage",component:D,decorators:[t=>s.jsx(B,{children:s.jsx(t,{})})]},C={args:{activeContests:[E],upcomingContests:[{...E,id:2,status:"upcoming"}],pastContests:[{...E,id:3,status:"past"}]}},x={args:{activeContests:[],upcomingContests:[],pastContests:[]}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    activeContests: [],
    upcomingContests: [],
    pastContests: []
  }
}`,...x.parameters?.docs?.source}}};const it=["Complete","Empty"],lt=Object.freeze(Object.defineProperty({__proto__:null,Complete:C,Empty:x,__namedExportsOrder:it,default:rt},Symbol.toStringTag,{value:"Module"}));export{lt as C};
