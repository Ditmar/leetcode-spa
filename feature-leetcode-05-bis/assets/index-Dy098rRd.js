import{y as C,a as d,V as S,z as k,b as x,j as M,f as R,l as y,m as v,T as E}from"./iframe-B5Q6yQus.js";import{a as U,g as Q,s as $,c as L,m as T}from"./memoTheme-BtLJshVk.js";import{g as A}from"./getThemeProps-OGHjUM8E.js";function I(t,s,e,n,o){const[a,r]=d.useState(()=>o&&e?e(t).matches:n?n(t).matches:s);return k(()=>{if(!e)return;const i=e(t),u=()=>{r(i.matches)};return u(),i.addEventListener("change",u),()=>{i.removeEventListener("change",u)}},[t,e]),a}const j={...S},b=j.useSyncExternalStore;function P(t,s,e,n,o){const a=d.useCallback(()=>s,[s]),r=d.useMemo(()=>{if(o&&e)return()=>e(t).matches;if(n!==null){const{matches:c}=n(t);return()=>c}return a},[a,t,n,o,e]),[i,u]=d.useMemo(()=>{if(e===null)return[a,()=>()=>{}];const c=e(t);return[()=>c.matches,l=>(c.addEventListener("change",l),()=>{c.removeEventListener("change",l)})]},[a,e,t]);return b(u,i,r)}function w(t={}){const{themeId:s}=t;return function(n,o={}){let a=C();a&&s&&(a=a[s]||a);const r=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:i=!1,matchMedia:u=r?window.matchMedia:null,ssrMatchMedia:p=null,noSsr:c=!1}=A({name:"MuiUseMediaQuery",props:o,theme:a});let l=typeof n=="function"?n(a):n;return l=l.replace(/^@media( ?)/m,""),l.includes("print")&&console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.","Using the print media query to modify print styles can lead to unexpected results.","Consider using the `displayPrint` field in the `sx` prop instead.","More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)),(b!==void 0?P:I)(l,i,u,p,c)}}w();function X(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function D(t){return parseFloat(t)}function N(t){return U("MuiSkeleton",t)}Q("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const V=t=>{const{classes:s,variant:e,animation:n,hasChildren:o,width:a,height:r}=t;return L({root:["root",e,n,o&&"withChildren",o&&!a&&"fitContent",o&&!r&&"heightAuto"]},N,s)},m=v`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,f=v`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,B=typeof m!="string"?y`
        animation: ${m} 2s ease-in-out 0.5s infinite;
      `:null,K=typeof f!="string"?y`
        &::after {
          animation: ${f} 2s linear 0.5s infinite;
        }
      `:null,O=$("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:e}=t;return[s.root,s[e.variant],e.animation!==!1&&s[e.animation],e.hasChildren&&s.withChildren,e.hasChildren&&!e.width&&s.fitContent,e.hasChildren&&!e.height&&s.heightAuto]}})(T(({theme:t})=>{const s=X(t.shape.borderRadius)||"px",e=D(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:t.alpha(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${e}${s}/${Math.round(e/.6*10)/10}${s}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:n})=>n.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:n})=>n.hasChildren&&!n.width,style:{maxWidth:"fit-content"}},{props:({ownerState:n})=>n.hasChildren&&!n.height,style:{height:"auto"}},{props:{animation:"pulse"},style:B||{animation:`${m} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:K||{"&::after":{animation:`${f} 2s linear 0.5s infinite`}}}]}})),F=d.forwardRef(function(s,e){const n=x({props:s,name:"MuiSkeleton"}),{animation:o="pulse",className:a,component:r="span",height:i,style:u,variant:p="text",width:c,...l}=n,h={...n,animation:o,component:r,variant:p,hasChildren:!!l.children},g=V(h);return M.jsx(O,{as:r,ref:e,className:R(g.root,a),ownerState:h,...l,style:{width:c,height:i,...u}})}),H=w({themeId:E});export{F as S,H as u};
