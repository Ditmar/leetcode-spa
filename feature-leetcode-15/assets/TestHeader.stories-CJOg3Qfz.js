import{j as o}from"./jsx-runtime-BTt0U4fe.js";import{t as ue,v as _,w as me,a as he,_ as fe,x as z,q as ie,y as xe}from"./identifier-Bm9izWyR.js";import{r as be}from"./createSvgIcon-7-IA1sDG.js";import{g as ve,a as we,s as g,c as Se,b as ye,B as u}from"./Box-DDmOFRI_.js";import{T as ne}from"./Typography-FgKIGWry.js";import{S as Le}from"./createSvgIcon-DZvsHXuK.js";import{u as Ce}from"./useTheme-CmV6LEhL.js";import{r as m}from"./index-DtJulBIN.js";import{g as Te}from"./getThemeProps-C1YcXs40.js";import{u as je}from"./useEnhancedEffect-B9e5S8q0.js";import{C as I}from"./Card-CbAA_ReJ.js";import{_ as C}from"./extends-CF3RwP-h.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useControlled-CAjPSr9L.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-Dxr7n688.js";import"./useId-BdOt_5g2.js";import"./Paper-Bc337sqf.js";function ke(e,t,r,a,s){const[i,c]=m.useState(()=>s&&r?r(e).matches:a?a(e).matches:t);return je(()=>{let d=!0;if(!r)return;const n=r(e),p=()=>{d&&c(n.matches)};return p(),n.addListener(p),()=>{d=!1,n.removeListener(p)}},[e,r]),i}const le=m.useSyncExternalStore;function Re(e,t,r,a,s){const i=m.useCallback(()=>t,[t]),c=m.useMemo(()=>{if(s&&r)return()=>r(e).matches;if(a!==null){const{matches:l}=a(e);return()=>l}return i},[i,e,a,s,r]),[d,n]=m.useMemo(()=>{if(r===null)return[i,()=>()=>{}];const l=r(e);return[()=>l.matches,f=>(l.addListener(f),()=>{l.removeListener(f)})]},[i,r,e]);return le(n,d,c)}function _e(e,t={}){const r=ue(),a=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:s=!1,matchMedia:i=a?window.matchMedia:null,ssrMatchMedia:c=null,noSsr:d=!1}=Te({name:"MuiUseMediaQuery",props:t,theme:r});let n=typeof e=="function"?e(r):e;return n=n.replace(/^@media( ?)/m,""),(le!==void 0?Re:ke)(n,s,i,c,d)}function ze(e,t=0,r=1){return me(e,t,r)}function Ie(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let r=e.match(t);return r&&r[0].length===1&&(r=r.map(a=>a+a)),r?`rgb${r.length===4?"a":""}(${r.map((a,s)=>s<3?parseInt(a,16):Math.round(parseInt(a,16)/255*1e3)/1e3).join(", ")})`:""}function ce(e){if(e.type)return e;if(e.charAt(0)==="#")return ce(Ie(e));const t=e.indexOf("("),r=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(r)===-1)throw new Error(_(9,e));let a=e.substring(t+1,e.length-1),s;if(r==="color"){if(a=a.split(" "),s=a.shift(),a.length===4&&a[3].charAt(0)==="/"&&(a[3]=a[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(s)===-1)throw new Error(_(10,s))}else a=a.split(",");return a=a.map(i=>parseFloat(i)),{type:r,values:a,colorSpace:s}}function $e(e){const{type:t,colorSpace:r}=e;let{values:a}=e;return t.indexOf("rgb")!==-1?a=a.map((s,i)=>i<3?parseInt(s,10):s):t.indexOf("hsl")!==-1&&(a[1]=`${a[1]}%`,a[2]=`${a[2]}%`),t.indexOf("color")!==-1?a=`${r} ${a.join(" ")}`:a=`${a.join(", ")}`,`${t}(${a})`}function De(e,t){return e=ce(e),t=ze(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,$e(e)}function Ee(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function Me(e){return parseFloat(e)}function Ae(e){return ve("MuiSkeleton",e)}we("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const Oe=["animation","className","component","height","style","variant","width"];let T=e=>e,$,D,E,M;const Ue=e=>{const{classes:t,variant:r,animation:a,hasChildren:s,width:i,height:c}=e;return ye({root:["root",r,a,s&&"withChildren",s&&!i&&"fitContent",s&&!c&&"heightAuto"]},Ae,t)},Ne=ie($||($=T`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),We=ie(D||(D=T`
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
`)),Qe=g("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.animation!==!1&&t[r.animation],r.hasChildren&&t.withChildren,r.hasChildren&&!r.width&&t.fitContent,r.hasChildren&&!r.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{const r=Ee(e.shape.borderRadius)||"px",a=Me(e.shape.borderRadius);return C({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:De(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${r}/${Math.round(a/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&z(E||(E=T`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),Ne),({ownerState:e,theme:t})=>e.animation==="wave"&&z(M||(M=T`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),We,(t.vars||t).palette.action.hover)),j=m.forwardRef(function(t,r){const a=he({props:t,name:"MuiSkeleton"}),{animation:s="pulse",className:i,component:c="span",height:d,style:n,variant:p="text",width:l}=a,f=fe(a,Oe),R=C({},a,{animation:s,component:c,variant:p,hasChildren:!!f.children}),ge=Ue(R);return o.jsx(Qe,C({as:c,ref:r,className:Se(ge.root,i),ownerState:R},f,{style:C({width:l,height:d},n)}))}),h=""+new URL("tcs-logo-i86t0D5v.svg",import.meta.url).href;var k={},He=xe;Object.defineProperty(k,"__esModule",{value:!0});var de=k.default=void 0,Pe=He(be()),Fe=o;de=k.default=(0,Pe.default)((0,Fe.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"}),"InsertPhoto");const Ve="TCS Quiz Competition",qe="TCS Campus Drive - 2023",A=g(u)(({theme:e,flexDirection:t})=>({display:"flex",alignItems:"center",justifyContent:t==="row"?"space-between":"center",flexDirection:t,padding:e.spacing(2),[e.breakpoints.down("sm")]:{flexDirection:"column",alignItems:"center",padding:e.spacing(1.5),gap:e.spacing(1.5)}})),O=g(u)(({theme:e})=>({display:"flex",alignItems:"center",gap:e.spacing(2),flex:"0 0 auto",[e.breakpoints.down("sm")]:{flexDirection:"column",gap:e.spacing(1),alignItems:"center"}})),U=g(u)(({theme:e})=>({display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"left",minWidth:0,flex:"0 1 auto",[e.breakpoints.down("sm")]:{alignItems:"center",textAlign:"center",width:"100%",maxWidth:"90vw",overflow:"hidden"}})),Be=g(ne)(({theme:e})=>({...e.typography.title,fontWeight:600,fontSize:e.typography.pxToRem(18),color:"#565656",width:e.spacing(25.375),overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",[e.breakpoints.down("sm")]:{maxWidth:"90vw",textAlign:"center",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}})),Xe=g(ne)(({theme:e})=>({...e.typography.subtitle,fontWeight:400,fontSize:e.typography.pxToRem(16),color:"#A9A9A9",width:e.spacing(21.125),overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",[e.breakpoints.down("sm")]:{maxWidth:"90vw",textAlign:"center",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}})),Ke=g("img")(({theme:e,size:t})=>({width:t==="small"?e.spacing(12.5):t==="large"?e.spacing(30):e.spacing(25.125),height:t==="small"?e.spacing(5.25):t==="large"?e.spacing(12.75):e.spacing(10.625),borderRadius:e.spacing(.75),opacity:1,objectFit:"contain",backgroundColor:"transparent",flex:"0 0 auto",[e.breakpoints.down("sm")]:{margin:"0 auto",maxWidth:"100%"}}));g(Le)(({theme:e,size:t})=>({width:t==="small"?e.spacing(12.5):t==="large"?e.spacing(30):e.spacing(25.125),height:t==="small"?e.spacing(5.25):t==="large"?e.spacing(12.75):e.spacing(10.625),borderRadius:e.spacing(.75),backgroundColor:"transparent",[e.breakpoints.down("sm")]:{margin:"0 auto",maxWidth:"100%"}}));const pe=e=>{const{title:t=Ve,subtitle:r=qe,variant:a="horizontal",size:s="medium",isLoading:i=!1,logoSrc:c}=e,d=c??h,n=Ce(),l=_e(n.breakpoints.down("sm"))||a==="vertical"?"column":"row";return i?o.jsx("div",{role:"banner","data-testid":"header-wrapper",style:{display:"flex",flexDirection:l},children:o.jsx(I,{sx:{boxShadow:"none",bgcolor:"transparent",width:"100%"},children:o.jsxs(A,{flexDirection:l,children:[o.jsxs(O,{children:[o.jsx(j,{variant:"rectangular",width:s==="small"?100:s==="large"?240:201,height:s==="small"?42:s==="large"?102:85,role:"progressbar"}),o.jsxs(U,{children:[o.jsx(j,{variant:"text",width:203,height:22,role:"progressbar"}),o.jsx(j,{variant:"text",width:169,height:19,role:"progressbar"})]})]}),o.jsx(u,{sx:{width:n.spacing(10),display:"flex",alignItems:"center"}})]})})}):o.jsx("div",{role:"banner","data-testid":"header-wrapper",style:{display:"flex",flexDirection:l},children:o.jsx(I,{sx:{boxShadow:"none",bgcolor:"transparent",width:"100%"},children:o.jsxs(A,{flexDirection:l,children:[o.jsxs(O,{children:[d?o.jsx(Ke,{src:d,alt:"TCS Logo",size:s}):o.jsx(u,{"data-testid":"placeholder-logo",sx:{width:s==="small"?100:s==="large"?240:201,height:s==="small"?42:s==="large"?102:85,display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"grey.100",borderRadius:1},children:o.jsx(de,{fontSize:s==="large"?"large":"medium",color:"disabled","aria-label":"Placeholder logo"})}),o.jsxs(U,{children:[o.jsx(Be,{children:t}),r&&o.jsx(Xe,{children:r})]})]}),o.jsx(u,{sx:{width:n.spacing(10),display:"flex",alignItems:"center"}})]})})})};pe.__docgenInfo={description:"",methods:[],displayName:"TestHeader",props:{logoSrc:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""}}};const mt={title:"Components/TestHeader",component:pe,parameters:{layout:"fullscreen"},decorators:[e=>o.jsx("div",{style:{padding:"16px",backgroundColor:"#f5f5f5"},children:o.jsx(e,{})})]},x={args:{logoSrc:h,title:"TCS Quiz Competition",subtitle:"TCS Campus Drive-2023",size:"medium"}},b={args:{logoSrc:h,title:"Vertical Layout",subtitle:"Stacked version",variant:"vertical",size:"medium"}},v={args:{logoSrc:h,title:"This is a very long quiz name to test responsiveness and overflow handling in the header component",subtitle:"This is a longer subtitle to test wrapping behavior.",size:"medium"}},w={args:{isLoading:!0,size:"medium"}},S={args:{logoSrc:h,title:"Small Logo",subtitle:"Small Logo Subtitle",size:"small"}},y={args:{logoSrc:h,title:"Large Logo",subtitle:"Large Logo Subtitle",size:"large"}},L={args:{logoSrc:"",title:"No Logo Header",subtitle:"No Logo Subtitle",size:"medium"}};var N,W,Q;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'TCS Quiz Competition',
    subtitle: 'TCS Campus Drive-2023',
    size: 'medium'
  }
}`,...(Q=(W=x.parameters)==null?void 0:W.docs)==null?void 0:Q.source}}};var H,P,F;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'Vertical Layout',
    subtitle: 'Stacked version',
    variant: 'vertical',
    size: 'medium'
  }
}`,...(F=(P=b.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var V,q,B;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'This is a very long quiz name to test responsiveness and overflow handling in the header component',
    subtitle: 'This is a longer subtitle to test wrapping behavior.',
    size: 'medium'
  }
}`,...(B=(q=v.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var X,K,G;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    size: 'medium'
  }
}`,...(G=(K=w.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var J,Y,Z;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'Small Logo',
    subtitle: 'Small Logo Subtitle',
    size: 'small'
  }
}`,...(Z=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,re;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    logoSrc: tcsLogo,
    title: 'Large Logo',
    subtitle: 'Large Logo Subtitle',
    size: 'large'
  }
}`,...(re=(te=y.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,se,oe;L.parameters={...L.parameters,docs:{...(ae=L.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    logoSrc: '',
    title: 'No Logo Header',
    subtitle: 'No Logo Subtitle',
    size: 'medium'
  }
}`,...(oe=(se=L.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};const ht=["Default","Vertical","LongTitle","Loading","SmallLogo","LargeLogo","NoLogo"];export{x as Default,y as LargeLogo,w as Loading,v as LongTitle,L as NoLogo,S as SmallLogo,b as Vertical,ht as __namedExportsOrder,mt as default};
