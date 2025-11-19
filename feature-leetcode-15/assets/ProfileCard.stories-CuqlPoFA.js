import{j as r}from"./jsx-runtime-BTt0U4fe.js";import{_ as B,a as Me,y as M}from"./identifier-BRg66tCp.js";import{r as W}from"./createSvgIcon-C8PKDOq8.js";import{P as K,a as X}from"./theme-CobV5kLG.js";import{g as We,a as qe,s as c,c as He,b as Je,B as u}from"./Box-Dhbcol59.js";import{C as Ge}from"./Card-gpU1cDlV.js";import{_ as f}from"./extends-BFqQA52f.js";import{r as Y}from"./index-DtJulBIN.js";import{c as Ye}from"./createSvgIcon-DVG9mO1A.js";import{r as Ke,m as Xe,a as Ze}from"./resolveComponentProps-1i28RnoU.js";import{u as Qe}from"./useIsFocusVisible-Dxr7n688.js";import{T as k}from"./Typography-CqcxMe6S.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useControlled-CAjPSr9L.js";import"./ownerWindow-DvT1GKkC.js";import"./useEnhancedEffect-B9e5S8q0.js";import"./useId-BdOt_5g2.js";import"./theme.helpers-COwRPMMj.js";import"./Paper-ByMEUBCv.js";const ea=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],aa=["component","slots","slotProps"],ra=["component"];function ta(e,a){const{className:t,elementType:s,ownerState:i,externalForwardedProps:n,getSlotOwnerState:o,internalForwardedProps:d}=a,b=B(a,ea),{component:U,slots:p={[e]:void 0},slotProps:C={[e]:void 0}}=n;B(n,aa);const v=p[e]||s,m=Ke(C[e],i),h=Xe(f({className:t},b,{externalForwardedProps:void 0,externalSlotProps:m})),{props:{component:P},internalRef:l}=h,y=B(h.props,ra),x=Qe(l,m==null?void 0:m.ref,a.ref),j=o?o(y):{},S=f({},i,j),w=P,D=Ze(v,f({},e==="root",!p[e]&&d,y,w&&{as:w},{ref:x}),S);return Object.keys(j).forEach(q=>{delete D[q]}),[v,D]}const sa=Ye(r.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function na(e){return We("MuiAvatar",e)}qe("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const oa=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],ia=e=>{const{classes:a,variant:t,colorDefault:s}=e;return Je({root:["root",t,s&&"colorDefault"],img:["img"],fallback:["fallback"]},na,a)},la=c("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[t.variant],t.colorDefault&&a.colorDefault]}})(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:f({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:f({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]})),ca=c("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,a)=>a.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),pa=c(sa,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,a)=>a.fallback})({width:"75%",height:"75%"});function da({crossOrigin:e,referrerPolicy:a,src:t,srcSet:s}){const[i,n]=Y.useState(!1);return Y.useEffect(()=>{if(!t&&!s)return;n(!1);let o=!0;const d=new Image;return d.onload=()=>{o&&n("loaded")},d.onerror=()=>{o&&n("error")},d.crossOrigin=e,d.referrerPolicy=a,d.src=t,s&&(d.srcset=s),()=>{o=!1}},[e,a,t,s]),i}const ua=Y.forwardRef(function(a,t){const s=Me({props:a,name:"MuiAvatar"}),{alt:i,children:n,className:o,component:d="div",slots:b={},slotProps:U={},imgProps:p,sizes:C,src:v,srcSet:m,variant:h="circular"}=s,P=B(s,oa);let l=null;const y=da(f({},p,{src:v,srcSet:m})),x=v||m,j=x&&y!=="error",S=f({},s,{colorDefault:!j,component:d,variant:h}),w=ia(S),[D,q]=ta("img",{className:w.img,elementType:ca,externalForwardedProps:{slots:b,slotProps:{img:f({},p,U.img)}},additionalProps:{alt:i,src:v,srcSet:m,sizes:C},ownerState:S});return j?l=r.jsx(D,f({},q)):n||n===0?l=n:x&&i?l=i[0]:l=r.jsx(pa,{ownerState:S,className:w.fallback}),r.jsx(la,f({as:d,ownerState:S,className:He(w.root,o),ref:t},P,{children:l}))});var Z={},ma=M;Object.defineProperty(Z,"__esModule",{value:!0});var Ve=Z.default=void 0,ga=ma(W()),fa=r;Ve=Z.default=(0,ga.default)((0,fa.jsx)("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m14 0c0 1.3-.84 2.4-2 2.82V7h2z"}),"EmojiEvents");var Q={},va=M;Object.defineProperty(Q,"__esModule",{value:!0});var Ee=Q.default=void 0,ha=va(W()),ya=r;Ee=Q.default=(0,ha.default)((0,ya.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person");var ee={},xa=M;Object.defineProperty(ee,"__esModule",{value:!0});var Fe=ee.default=void 0,Sa=xa(W()),wa=r;Fe=ee.default=(0,Sa.default)((0,wa.jsx)("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z"}),"School");var ae={},ba=M;Object.defineProperty(ae,"__esModule",{value:!0});var Be=ae.default=void 0,Ca=ba(W()),Pa=r;Be=ae.default=(0,Ca.default)((0,Pa.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");const ja={small:"small",medium:"medium",large:"large"},ka={default:"default",compact:"compact",expanded:"expanded"},re={default:{direction:"column",textAlign:"center",statsDirection:"row"},compact:{direction:"row",textAlign:"left",statsDirection:"row"},expanded:{direction:"column",textAlign:"center",statsDirection:"column"}},A={size:"medium",variant:"default",showStats:!0,stats:{courses:0,points:0,ranking:0}},H={courses:Fe,points:Be,ranking:Ve},J={courses:"Courses",points:"Points",ranking:"Ranking"},Ua=Ee,Da=e=>{if(!e||!e.trim())return"";const a=e.trim().split(/\s+/);return a.length===1?a[0].charAt(0).toUpperCase():(a[0].charAt(0)+a[a.length-1].charAt(0)).toUpperCase()},Aa=c(Ge,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$size:a})=>{const t=K[a];return{padding:e.spacing(t.paddingUnits),borderRadius:e.spacing(2),boxShadow:e.shadows[2],transition:e.transitions.create(["box-shadow","transform"],{duration:e.transitions.duration.short}),"&:hover":{boxShadow:e.shadows[4],transform:`translateY(-${e.spacing(.25)})`},[e.breakpoints.down("sm")]:{padding:e.spacing(2)}}}),za=c(u,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$variant:a})=>({display:"flex",flexDirection:re[a].direction,alignItems:"center",gap:e.spacing(2),width:"100%",[e.breakpoints.down("sm")]:{flexDirection:"column",gap:e.spacing(1.5)}})),$a=c(ua,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$size:a})=>{const t=K[a];return{width:e.spacing(t.avatarSpacing),height:e.spacing(t.avatarSpacing),backgroundColor:e.palette.primary.main,fontSize:`calc(${e.spacing(t.avatarSpacing)} * 0.4)`,fontWeight:e.typography.fontWeightBold||600,border:`${e.spacing(t.borderWidth/8)} solid ${e.palette.background.paper}`,boxShadow:e.shadows[2],[e.breakpoints.down("sm")]:{width:e.spacing(6),height:e.spacing(6),fontSize:e.spacing(2.4)}}}),_a=c(u,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$variant:a})=>{const t=re[a];return{display:"flex",flexDirection:"column",gap:e.spacing(.5),textAlign:t.textAlign,flex:a==="compact"?1:"initial",minWidth:0,[e.breakpoints.down("sm")]:{textAlign:"center"}}}),Ra=c(k,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$size:a})=>({fontSize:X[a].nameSize,fontWeight:e.typography.fontWeightBold||600,color:e.palette.text.primary,lineHeight:e.typography.body1.lineHeight,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",[e.breakpoints.down("sm")]:{fontSize:e.typography.body1.fontSize}})),La=c(k,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$size:a})=>({fontSize:X[a].usernameSize,fontWeight:e.typography.fontWeightRegular||400,color:e.palette.grey[600],lineHeight:e.typography.body2.lineHeight,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",[e.breakpoints.down("sm")]:{fontSize:e.typography.body2.fontSize}})),Ta=c(k,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$size:a})=>({fontSize:X[a].roleSize,fontWeight:e.typography.fontWeightMedium||500,color:e.palette.primary.main,lineHeight:e.typography.caption.lineHeight,marginTop:e.spacing(.5),overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",[e.breakpoints.down("sm")]:{fontSize:e.typography.caption.fontSize}})),Ia=c(u,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$size:a,$variant:t})=>{const s=K[a];return{display:"flex",flexDirection:re[t].statsDirection,gap:e.spacing(s.statsGap),marginTop:e.spacing(s.statsPaddingTop),paddingTop:e.spacing(s.statsPaddingTop),borderTop:`${e.spacing(.125)} solid ${e.palette.divider}`,justifyContent:t==="expanded"?"space-between":"center",flexWrap:"wrap",[e.breakpoints.down("sm")]:{flexDirection:"column",gap:e.spacing(1.5)}}}),Oa=c(u,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$variant:a})=>({display:"flex",flexDirection:a==="expanded"?"row":"column",alignItems:"center",gap:e.spacing(1),flex:a==="expanded"?"1 1 auto":"0 0 auto",justifyContent:a==="expanded"?"space-between":"center",padding:a==="expanded"?e.spacing(1,0):0,[e.breakpoints.down("sm")]:{flexDirection:"row",justifyContent:"space-between",width:"100%"}})),Na=c(u)(({theme:e})=>({display:"flex",alignItems:"center",justifyContent:"center",color:e.palette.primary.main,"& svg":{fontSize:e.spacing(2.5)}})),Va=c(u,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$variant:a})=>({display:"flex",flexDirection:"column",alignItems:a==="expanded"?"flex-end":"center",gap:e.spacing(.25),[e.breakpoints.down("sm")]:{alignItems:"flex-end"}})),Ea=c(k)(({theme:e})=>({fontSize:e.typography.body1.fontSize,fontWeight:e.typography.fontWeightBold||600,color:e.palette.text.primary,lineHeight:1})),Fa=c(k)(({theme:e})=>({fontSize:e.typography.caption.fontSize,fontWeight:e.typography.fontWeightRegular||400,color:e.palette.grey[500],lineHeight:1,textTransform:"capitalize"})),G=({icon:e,label:a,value:t,$variant:s,locale:i,"data-testid":n})=>{const o=typeof t=="number"?t.toLocaleString(i):t;return r.jsxs(Oa,{$variant:s,"data-testid":n,children:[r.jsx(Na,{children:e}),r.jsxs(Va,{$variant:s,children:[r.jsx(Ea,{children:o}),r.jsx(Fa,{children:a})]})]})},g=({avatarUrl:e,name:a,username:t,role:s,stats:i=A.stats,size:n=A.size,variant:o=A.variant,showStats:d=A.showStats,locale:b,className:U,"data-testid":p="profile-card",...C})=>{if(!a||!t)throw new Error('ProfileCard: "name" and "username" are required props and cannot be empty.');const v=Ua,m=Da(a),h=b||(typeof navigator<"u"?navigator.language:void 0),P=l=>{if(l===0)return"-";const y=l%10,x=l%100;return x>=11&&x<=13?`${l}th`:y===1?`${l}st`:y===2?`${l}nd`:y===3?`${l}rd`:`${l}th`};return r.jsxs(Aa,{className:U,"data-testid":p,$size:n,$variant:o,role:"article","aria-label":`Profile card for ${a}`,...C,children:[r.jsxs(za,{$size:n,$variant:o,children:[r.jsxs($a,{src:e,alt:`${a}'s avatar`,$size:n,"data-testid":`${p}-avatar`,children:[!e&&m&&m,!e&&!m&&r.jsx(v,{})]}),r.jsxs(_a,{$size:n,$variant:o,children:[r.jsx(Ra,{variant:"h6",$size:n,title:a,"data-testid":`${p}-name`,children:a}),r.jsxs(La,{variant:"body2",$size:n,title:t,"data-testid":`${p}-username`,children:["@",t]}),s&&r.jsx(Ta,{variant:"body2",$size:n,title:s,"data-testid":`${p}-role`,children:s})]})]}),d&&r.jsxs(Ia,{$size:n,$variant:o,"data-testid":`${p}-stats`,role:"region","aria-label":"User statistics",children:[r.jsx(G,{icon:r.jsx(H.courses,{}),label:J.courses,value:i.courses,$variant:o,locale:h,"data-testid":`${p}-stat-courses`}),r.jsx(G,{icon:r.jsx(H.points,{}),label:J.points,value:i.points,$variant:o,locale:h,"data-testid":`${p}-stat-points`}),r.jsx(G,{icon:r.jsx(H.ranking,{}),label:J.ranking,value:P(i.ranking),$variant:o,locale:h,"data-testid":`${p}-stat-ranking`})]})]})};g.__docgenInfo={description:`Profile card component for displaying user information and statistics

@component
@example
\`\`\`tsx
import { ProfileCard } from './ProfileCard';

<ProfileCard
  name="John Doe"
  username="johndoe"
  role="Developer"
  stats={{ courses: 10, points: 2500, ranking: 15 }}
/>
\`\`\``,methods:[],displayName:"ProfileCard",props:{avatarUrl:{required:!1,tsType:{name:"string"},description:"User's avatar URL"},name:{required:!0,tsType:{name:"string"},description:"User's full name"},username:{required:!0,tsType:{name:"string"},description:"User's username/handle"},role:{required:!1,tsType:{name:"string"},description:"User's role or title"},stats:{required:!1,tsType:{name:"ProfileStatsProps"},description:"User statistics",defaultValue:{value:`{
  courses: 0,
  points: 0,
  ranking: 0,
}`,computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size variant of the card",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'expanded'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'expanded'"}]},description:"Layout variant",defaultValue:{value:"'default'",computed:!1}},showStats:{required:!1,tsType:{name:"boolean"},description:"Whether to show the stats section",defaultValue:{value:"true",computed:!1}},locale:{required:!1,tsType:{name:"string"},description:"Locale for number formatting (defaults to user's browser locale)"},className:{required:!1,tsType:{name:"string"},description:"Custom className"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test id for testing purposes",defaultValue:{value:"'profile-card'",computed:!1}}},composes:["Omit"]};const ir={title:"Components/ProfileCard",component:g,parameters:{layout:"centered",docs:{description:{component:"A reusable profile card component for displaying user information and statistics."}}},argTypes:{name:{control:"text",description:"User full name",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},username:{control:"text",description:"User username/handle",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},avatarUrl:{control:"text",description:"URL for the user avatar image",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},role:{control:"text",description:"User role or title",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},size:{control:"select",options:Object.values(ja),description:"Size variant of the card",table:{type:{summary:"small | medium | large"},defaultValue:{summary:"medium"}}},variant:{control:"select",options:Object.values(ka),description:"Layout variant of the card",table:{type:{summary:"default | compact | expanded"},defaultValue:{summary:"default"}}},showStats:{control:"boolean",description:"Whether to show the statistics section",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},stats:{control:"object",description:"User statistics object containing courses, points, and ranking",table:{type:{summary:"{ courses: number; points: number; ranking: number }"},defaultValue:{summary:"{ courses: 0, points: 0, ranking: 0 }"}}},className:{control:"text",description:"Custom CSS class name",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},"data-testid":{control:"text",description:"Test ID for testing purposes",table:{type:{summary:"string"},defaultValue:{summary:"profile-card"}}}},args:{name:"John Doe",username:"johndoe",role:"Senior Developer",avatarUrl:"https://i.pravatar.cc/150?img=3",size:"medium",variant:"default",showStats:!0,stats:{courses:12,points:3450,ranking:23}},tags:["autodocs"]},z={args:{name:"John Doe",username:"johndoe",role:"Senior Developer",avatarUrl:"https://i.pravatar.cc/150?img=3",size:"medium",variant:"default",showStats:!0,stats:{courses:12,points:3450,ranking:23}}},$={args:{name:"Sarah Johnson",username:"sarahjohnson",role:"Product Designer",avatarUrl:"https://i.pravatar.cc/150?img=5",stats:{courses:8,points:2150,ranking:42}}},_={args:{name:"Michael Chen",username:"mchen",role:"Data Scientist",avatarUrl:void 0,stats:{courses:15,points:4200,ranking:7}}},R={args:{name:"Alexander Christopher Montgomery III",username:"alexmontgomery",role:"Chief Technology Officer",avatarUrl:"https://i.pravatar.cc/150?img=8",stats:{courses:25,points:8950,ranking:1}}},L={args:{name:"Emily Davis",username:"emilyd",role:void 0,avatarUrl:"https://i.pravatar.cc/150?img=9",stats:{courses:5,points:1200,ranking:156}}},T={args:{name:"Robert Wilson",username:"rwilson",role:"Backend Engineer",avatarUrl:"https://i.pravatar.cc/150?img=12",showStats:!1}},I={args:{size:"small",name:"Lisa Anderson",username:"lisaa",role:"UX Researcher",avatarUrl:"https://i.pravatar.cc/150?img=16",stats:{courses:6,points:1800,ranking:89}}},O={args:{size:"large",name:"David Thompson",username:"dthompson",role:"DevOps Engineer",avatarUrl:"https://i.pravatar.cc/150?img=18",stats:{courses:10,points:3e3,ranking:34}}},N={args:{variant:"compact",name:"Jennifer Martinez",username:"jmartinez",role:"Frontend Developer",avatarUrl:"https://i.pravatar.cc/150?img=20",stats:{courses:9,points:2700,ranking:56}}},V={args:{variant:"expanded",name:"Thomas Brown",username:"tbrown",role:"Full Stack Developer",avatarUrl:"https://i.pravatar.cc/150?img=22",stats:{courses:14,points:4100,ranking:12}}},E={args:{name:"New User",username:"newbie",role:"Beginner",avatarUrl:void 0,stats:{courses:0,points:0,ranking:0}}},F={render:()=>r.jsxs(u,{sx:{display:"flex",flexDirection:"column",gap:4,padding:2},children:[r.jsxs(u,{children:[r.jsx("h3",{children:"Size Variations"}),r.jsxs(u,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[r.jsx(g,{size:"small",name:"Small Card",username:"smalluser",role:"Developer",avatarUrl:"https://i.pravatar.cc/150?img=1",stats:{courses:5,points:1500,ranking:45}}),r.jsx(g,{size:"medium",name:"Medium Card",username:"mediumuser",role:"Designer",avatarUrl:"https://i.pravatar.cc/150?img=2",stats:{courses:8,points:2400,ranking:23}}),r.jsx(g,{size:"large",name:"Large Card",username:"largeuser",role:"Manager",avatarUrl:"https://i.pravatar.cc/150?img=3",stats:{courses:12,points:3600,ranking:10}})]})]}),r.jsxs(u,{children:[r.jsx("h3",{children:"Variant Styles"}),r.jsxs(u,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[r.jsx(g,{variant:"default",name:"Default Layout",username:"defaultuser",role:"Engineer",avatarUrl:"https://i.pravatar.cc/150?img=4",stats:{courses:7,points:2100,ranking:34}}),r.jsx(g,{variant:"compact",name:"Compact Layout",username:"compactuser",role:"Analyst",avatarUrl:"https://i.pravatar.cc/150?img=5",stats:{courses:10,points:3e3,ranking:18}}),r.jsx(g,{variant:"expanded",name:"Expanded Layout",username:"expandeduser",role:"Architect",avatarUrl:"https://i.pravatar.cc/150?img=6",stats:{courses:15,points:4500,ranking:5}})]})]}),r.jsxs(u,{children:[r.jsx("h3",{children:"Edge Cases"}),r.jsxs(u,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[r.jsx(g,{name:"No Avatar User",username:"noavatar",role:"Tester",stats:{courses:3,points:900,ranking:123}}),r.jsx(g,{name:"Very Long Name That Should Be Truncated",username:"verylongusernamethatshouldalsobetruncated",role:"Senior Principal Staff Engineer",avatarUrl:"https://i.pravatar.cc/150?img=7",stats:{courses:20,points:6e3,ranking:2}}),r.jsx(g,{name:"No Stats User",username:"nostats",role:"Intern",avatarUrl:"https://i.pravatar.cc/150?img=8",showStats:!1})]})]})]}),parameters:{controls:{disable:!0}}};var te,se,ne;z.parameters={...z.parameters,docs:{...(te=z.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    username: 'johndoe',
    role: 'Senior Developer',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    size: 'medium',
    variant: 'default',
    showStats: true,
    stats: {
      courses: 12,
      points: 3450,
      ranking: 23
    }
  }
}`,...(ne=(se=z.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,ie,le;$.parameters={...$.parameters,docs:{...(oe=$.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    name: 'Sarah Johnson',
    username: 'sarahjohnson',
    role: 'Product Designer',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
    stats: {
      courses: 8,
      points: 2150,
      ranking: 42
    }
  }
}`,...(le=(ie=$.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,pe,de;_.parameters={..._.parameters,docs:{...(ce=_.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    name: 'Michael Chen',
    username: 'mchen',
    role: 'Data Scientist',
    avatarUrl: undefined,
    stats: {
      courses: 15,
      points: 4200,
      ranking: 7
    }
  }
}`,...(de=(pe=_.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ue,me,ge;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    name: 'Alexander Christopher Montgomery III',
    username: 'alexmontgomery',
    role: 'Chief Technology Officer',
    avatarUrl: 'https://i.pravatar.cc/150?img=8',
    stats: {
      courses: 25,
      points: 8950,
      ranking: 1
    }
  }
}`,...(ge=(me=R.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var fe,ve,he;L.parameters={...L.parameters,docs:{...(fe=L.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    name: 'Emily Davis',
    username: 'emilyd',
    role: undefined,
    avatarUrl: 'https://i.pravatar.cc/150?img=9',
    stats: {
      courses: 5,
      points: 1200,
      ranking: 156
    }
  }
}`,...(he=(ve=L.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var ye,xe,Se;T.parameters={...T.parameters,docs:{...(ye=T.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    name: 'Robert Wilson',
    username: 'rwilson',
    role: 'Backend Engineer',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    showStats: false
  }
}`,...(Se=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var we,be,Ce;I.parameters={...I.parameters,docs:{...(we=I.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    size: 'small',
    name: 'Lisa Anderson',
    username: 'lisaa',
    role: 'UX Researcher',
    avatarUrl: 'https://i.pravatar.cc/150?img=16',
    stats: {
      courses: 6,
      points: 1800,
      ranking: 89
    }
  }
}`,...(Ce=(be=I.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};var Pe,je,ke;O.parameters={...O.parameters,docs:{...(Pe=O.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    size: 'large',
    name: 'David Thompson',
    username: 'dthompson',
    role: 'DevOps Engineer',
    avatarUrl: 'https://i.pravatar.cc/150?img=18',
    stats: {
      courses: 10,
      points: 3000,
      ranking: 34
    }
  }
}`,...(ke=(je=O.parameters)==null?void 0:je.docs)==null?void 0:ke.source}}};var Ue,De,Ae;N.parameters={...N.parameters,docs:{...(Ue=N.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    variant: 'compact',
    name: 'Jennifer Martinez',
    username: 'jmartinez',
    role: 'Frontend Developer',
    avatarUrl: 'https://i.pravatar.cc/150?img=20',
    stats: {
      courses: 9,
      points: 2700,
      ranking: 56
    }
  }
}`,...(Ae=(De=N.parameters)==null?void 0:De.docs)==null?void 0:Ae.source}}};var ze,$e,_e;V.parameters={...V.parameters,docs:{...(ze=V.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    variant: 'expanded',
    name: 'Thomas Brown',
    username: 'tbrown',
    role: 'Full Stack Developer',
    avatarUrl: 'https://i.pravatar.cc/150?img=22',
    stats: {
      courses: 14,
      points: 4100,
      ranking: 12
    }
  }
}`,...(_e=($e=V.parameters)==null?void 0:$e.docs)==null?void 0:_e.source}}};var Re,Le,Te;E.parameters={...E.parameters,docs:{...(Re=E.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    name: 'New User',
    username: 'newbie',
    role: 'Beginner',
    avatarUrl: undefined,
    stats: {
      courses: 0,
      points: 0,
      ranking: 0
    }
  }
}`,...(Te=(Le=E.parameters)==null?void 0:Le.docs)==null?void 0:Te.source}}};var Ie,Oe,Ne;F.parameters={...F.parameters,docs:{...(Ie=F.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: 2
  }}>
      <Box>
        <h3>Size Variations</h3>
        <Box sx={{
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap'
      }}>
          <ProfileCard size="small" name="Small Card" username="smalluser" role="Developer" avatarUrl="https://i.pravatar.cc/150?img=1" stats={{
          courses: 5,
          points: 1500,
          ranking: 45
        }} />
          <ProfileCard size="medium" name="Medium Card" username="mediumuser" role="Designer" avatarUrl="https://i.pravatar.cc/150?img=2" stats={{
          courses: 8,
          points: 2400,
          ranking: 23
        }} />
          <ProfileCard size="large" name="Large Card" username="largeuser" role="Manager" avatarUrl="https://i.pravatar.cc/150?img=3" stats={{
          courses: 12,
          points: 3600,
          ranking: 10
        }} />
        </Box>
      </Box>

      <Box>
        <h3>Variant Styles</h3>
        <Box sx={{
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap'
      }}>
          <ProfileCard variant="default" name="Default Layout" username="defaultuser" role="Engineer" avatarUrl="https://i.pravatar.cc/150?img=4" stats={{
          courses: 7,
          points: 2100,
          ranking: 34
        }} />
          <ProfileCard variant="compact" name="Compact Layout" username="compactuser" role="Analyst" avatarUrl="https://i.pravatar.cc/150?img=5" stats={{
          courses: 10,
          points: 3000,
          ranking: 18
        }} />
          <ProfileCard variant="expanded" name="Expanded Layout" username="expandeduser" role="Architect" avatarUrl="https://i.pravatar.cc/150?img=6" stats={{
          courses: 15,
          points: 4500,
          ranking: 5
        }} />
        </Box>
      </Box>

      <Box>
        <h3>Edge Cases</h3>
        <Box sx={{
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap'
      }}>
          <ProfileCard name="No Avatar User" username="noavatar" role="Tester" stats={{
          courses: 3,
          points: 900,
          ranking: 123
        }} />
          <ProfileCard name="Very Long Name That Should Be Truncated" username="verylongusernamethatshouldalsobetruncated" role="Senior Principal Staff Engineer" avatarUrl="https://i.pravatar.cc/150?img=7" stats={{
          courses: 20,
          points: 6000,
          ranking: 2
        }} />
          <ProfileCard name="No Stats User" username="nostats" role="Intern" avatarUrl="https://i.pravatar.cc/150?img=8" showStats={false} />
        </Box>
      </Box>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ne=(Oe=F.parameters)==null?void 0:Oe.docs)==null?void 0:Ne.source}}};const lr=["Playground","Default","NoAvatar","LongName","NoRole","NoStats","SmallSize","LargeSize","CompactVariant","ExpandedVariant","NewUser","Gallery"];export{N as CompactVariant,$ as Default,V as ExpandedVariant,F as Gallery,O as LargeSize,R as LongName,E as NewUser,_ as NoAvatar,L as NoRole,T as NoStats,z as Playground,I as SmallSize,lr as __namedExportsOrder,ir as default};
