import{j as t}from"./jsx-runtime-xF634gn_.js";import{c as k,C as Ee}from"./Card-C_nyDMh2.js";import{g as q}from"./theme.helpers-CkDgOx5U.js";import{c as H,u as Le,g as Ie,a as Pe,s as c,b as Re,m as Ve,B as g,T as z}from"./Box-5GWd4Xnv.js";import{r as _}from"./index-C-7etoUd.js";import{u as Oe}from"./DefaultPropsProvider-DIdQUhtL.js";function Be(e){return typeof e=="string"}function We(e,a,r){return e===void 0||Be(e)?a:{...a,ownerState:{...a.ownerState,...r}}}function Me(e,a=[]){if(e===void 0)return{};const r={};return Object.keys(e).filter(s=>s.match(/^on[A-Z]/)&&typeof e[s]=="function"&&!a.includes(s)).forEach(s=>{r[s]=e[s]}),r}function Z(e){if(e===void 0)return{};const a={};return Object.keys(e).filter(r=>!(r.match(/^on[A-Z]/)&&typeof e[r]=="function")).forEach(r=>{a[r]=e[r]}),a}function He(e){const{getSlotProps:a,additionalProps:r,externalSlotProps:s,externalForwardedProps:n,className:i}=e;if(!a){const m=H(r==null?void 0:r.className,i,n==null?void 0:n.className,s==null?void 0:s.className),y={...r==null?void 0:r.style,...n==null?void 0:n.style,...s==null?void 0:s.style},l={...r,...n,...s};return m.length>0&&(l.className=m),Object.keys(y).length>0&&(l.style=y),{props:l,internalRef:void 0}}const d=Me({...n,...s}),p=Z(s),w=Z(n),o=a(d),x=H(o==null?void 0:o.className,r==null?void 0:r.className,i,n==null?void 0:n.className,s==null?void 0:s.className),S={...o==null?void 0:o.style,...r==null?void 0:r.style,...n==null?void 0:n.style,...s==null?void 0:s.style},u={...o,...r,...w,...p};return x.length>0&&(u.className=x),Object.keys(S).length>0&&(u.style=S),{props:u,internalRef:o.ref}}function _e(e,a,r){return typeof e=="function"?e(a,r):e}function qe(e,a){const{className:r,elementType:s,ownerState:n,externalForwardedProps:i,internalForwardedProps:d,...p}=a,{component:w,slots:o={[e]:void 0},slotProps:x={[e]:void 0},...S}=i,u=o[e]||s,m=_e(x[e],n),{props:{component:y,...l},internalRef:v}=He({className:r,...p,externalForwardedProps:void 0,externalSlotProps:m}),f=Le(v,m==null?void 0:m.ref,a.ref),U=y,j=We(u,{...e==="root",...!o[e]&&d,...l,...U&&{as:U},ref:f},n);return[u,j]}const Ge=k(t.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function Je(e){return Ie("MuiAvatar",e)}Pe("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const Ze=e=>{const{classes:a,variant:r,colorDefault:s}=e;return Re({root:["root",r,s&&"colorDefault"],img:["img"],fallback:["fallback"]},Je,a)},Xe=c("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.root,a[r.variant],r.colorDefault&&a.colorDefault]}})(Ve(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(e.vars||e).palette.background.default,...e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.grey[400],...e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})}}}]}))),Ke=c("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,a)=>a.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Ye=c(Ge,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,a)=>a.fallback})({width:"75%",height:"75%"});function Qe({crossOrigin:e,referrerPolicy:a,src:r,srcSet:s}){const[n,i]=_.useState(!1);return _.useEffect(()=>{if(!r&&!s)return;i(!1);let d=!0;const p=new Image;return p.onload=()=>{d&&i("loaded")},p.onerror=()=>{d&&i("error")},p.crossOrigin=e,p.referrerPolicy=a,p.src=r,s&&(p.srcset=s),()=>{d=!1}},[e,a,r,s]),n}const ea=_.forwardRef(function(a,r){const s=Oe({props:a,name:"MuiAvatar"}),{alt:n,children:i,className:d,component:p="div",slots:w={},slotProps:o={},imgProps:x,sizes:S,src:u,srcSet:m,variant:y="circular",...l}=s;let v=null;const f={...s,component:p,variant:y},U=Qe({...x,...typeof o.img=="function"?o.img(f):o.img,src:u,srcSet:m}),j=u||m,J=j&&U!=="error";f.colorDefault=!J,delete f.ownerState;const O=Ze(f),[Fe,Te]=qe("img",{className:O.img,elementType:Ke,externalForwardedProps:{slots:w,slotProps:{img:{...x,...o.img}}},additionalProps:{alt:n,src:u,srcSet:m,sizes:S},ownerState:f});return J?v=t.jsx(Fe,{...Te}):i||i===0?v=i:j&&n?v=n[0]:v=t.jsx(Ye,{ownerState:f,className:O.fallback}),t.jsx(Xe,{as:p,className:H(O.root,d),ref:r,...l,ownerState:f,children:v})}),aa=k(t.jsx("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m14 0c0 1.3-.84 2.4-2 2.82V7h2z"}),"EmojiEvents"),ra=k(t.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person"),ta=k(t.jsx("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z"}),"School"),sa=k(t.jsx("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),na={small:"small",medium:"medium",large:"large"},oa={default:"default",compact:"compact",expanded:"expanded"},b={small:{avatarSize:48,padding:16,nameFontSize:"1rem",usernameFontSize:"0.875rem",roleFontSize:"0.75rem",statsGap:12},medium:{avatarSize:64,padding:20,nameFontSize:"1.125rem",usernameFontSize:"0.875rem",roleFontSize:"0.8125rem",statsGap:16},large:{avatarSize:80,padding:24,nameFontSize:"1.25rem",usernameFontSize:"1rem",roleFontSize:"0.875rem",statsGap:20}},G={default:{direction:"column",textAlign:"center",statsDirection:"row"},compact:{direction:"row",textAlign:"left",statsDirection:"row"},expanded:{direction:"column",textAlign:"center",statsDirection:"column"}},C={size:"medium",variant:"default",showStats:!0,stats:{courses:0,points:0,ranking:0}},B={courses:ta,points:sa,ranking:aa},W={courses:"Courses",points:"Points",ranking:"Ranking"},ia=ra,la=e=>{if(!e)return"?";const a=e.trim().split(/\s+/);return a.length===1?a[0].charAt(0).toUpperCase():(a[0].charAt(0)+a[a.length-1].charAt(0)).toUpperCase()},ca=c(Ee,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$size:a})=>{const r=b[a];return{padding:e.spacing(r.padding/8),borderRadius:e.spacing(2),boxShadow:e.shadows[2],transition:e.transitions.create(["box-shadow","transform"],{duration:e.transitions.duration.short}),"&:hover":{boxShadow:e.shadows[4],transform:"translateY(-2px)"},[e.breakpoints.down("sm")]:{padding:e.spacing(2)},[e.breakpoints.up("md")]:{padding:e.spacing(r.padding/8)}}}),pa=c(g,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$variant:a})=>{const r=G[a];return{display:"flex",flexDirection:r.direction,alignItems:"center",gap:e.spacing(2),width:"100%",[e.breakpoints.down("sm")]:{flexDirection:"column",gap:e.spacing(1.5)},[e.breakpoints.up("md")]:{flexDirection:r.direction}}}),da=c(ea,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$size:a})=>{const r=b[a];return{width:r.avatarSize,height:r.avatarSize,backgroundColor:e.palette.primary.main,fontSize:r.avatarSize*.4,fontWeight:e.typography.fontWeightBold||600,border:`${e.spacing(.375)} solid ${e.palette.background.paper}`,boxShadow:e.shadows[2],[e.breakpoints.down("sm")]:{width:e.spacing(6),height:e.spacing(6),fontSize:e.spacing(2.4)}}}),ua=c(g,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$variant:a})=>{const r=G[a];return{display:"flex",flexDirection:"column",gap:e.spacing(.5),textAlign:r.textAlign,flex:a==="compact"?1:"initial",minWidth:0,[e.breakpoints.down("sm")]:{textAlign:"center"}}}),ma=c(z,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$size:a})=>({fontSize:b[a].nameFontSize,fontWeight:e.typography.fontWeightBold||600,color:e.palette.text.primary,lineHeight:e.typography.body1.lineHeight,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",[e.breakpoints.down("sm")]:{fontSize:e.typography.body1.fontSize}})),ga=c(z,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$size:a})=>({fontSize:b[a].usernameFontSize,fontWeight:e.typography.fontWeightRegular||400,color:q[600],lineHeight:e.typography.body2.lineHeight,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",[e.breakpoints.down("sm")]:{fontSize:e.typography.body2.fontSize}})),fa=c(z,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$size:a})=>({fontSize:b[a].roleFontSize,fontWeight:e.typography.fontWeightMedium||500,color:e.palette.primary.main,lineHeight:e.typography.caption.lineHeight,marginTop:e.spacing(.5),overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",[e.breakpoints.down("sm")]:{fontSize:e.typography.caption.fontSize}})),va=c(g,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$size:a,$variant:r})=>{const s=b[a];return{display:"flex",flexDirection:G[r].statsDirection,gap:e.spacing(s.statsGap/8),marginTop:e.spacing(2),paddingTop:e.spacing(2),borderTop:`${e.spacing(.125)} solid ${q[200]}`,justifyContent:r==="expanded"?"space-between":"center",flexWrap:"wrap",[e.breakpoints.down("sm")]:{flexDirection:"column",gap:e.spacing(1.5)}}}),ha=c(g,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$variant:a})=>({display:"flex",flexDirection:a==="expanded"?"row":"column",alignItems:"center",gap:e.spacing(1),flex:a==="expanded"?"1 1 auto":"0 0 auto",justifyContent:a==="expanded"?"space-between":"center",padding:a==="expanded"?e.spacing(1,0):0,[e.breakpoints.down("sm")]:{flexDirection:"row",justifyContent:"space-between",width:"100%"}})),ya=c(g,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e})=>({display:"flex",alignItems:"center",justifyContent:"center",color:e.palette.primary.main,"& svg":{fontSize:e.spacing(2.5)}})),xa=c(g,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$variant:a})=>({display:"flex",flexDirection:"column",alignItems:a==="expanded"?"flex-end":"center",gap:e.spacing(.25),[e.breakpoints.down("sm")]:{alignItems:"flex-end"}})),Sa=c(z,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e})=>({fontSize:e.typography.body1.fontSize,fontWeight:e.typography.fontWeightBold||600,color:e.palette.text.primary,lineHeight:1})),wa=c(z,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e})=>({fontSize:e.typography.caption.fontSize,fontWeight:e.typography.fontWeightRegular||400,color:q[500],lineHeight:1,textTransform:"capitalize"})),M=({icon:e,label:a,value:r,"data-testid":s})=>{const n=typeof r=="number"?r.toLocaleString("en-US"):r;return t.jsxs(ha,{$variant:C.variant,"data-testid":s,children:[t.jsx(ya,{children:e}),t.jsxs(xa,{$variant:C.variant,children:[t.jsx(Sa,{children:n}),t.jsx(wa,{children:a})]})]})},h=({avatarUrl:e,name:a,username:r,role:s,stats:n={courses:0,points:0,ranking:0},size:i=C.size,variant:d=C.variant,showStats:p=C.showStats,className:w,"data-testid":o="profile-card",...x})=>{if(!a||!r)throw new Error('ProfileCard: "name" and "username" are required props and cannot be empty.');const S=ia,u=la(a),m=l=>{if(l===0)return"-";const v=l%10,f=l%100;return f>=11&&f<=13?`${l}th`:v===1?`${l}st`:v===2?`${l}nd`:v===3?`${l}rd`:`${l}th`},y=n||C.stats;return t.jsxs(ca,{...x,className:w,"data-testid":o,$size:i,$variant:d,role:"article","aria-label":`Profile card for ${a}`,children:[t.jsxs(pa,{$size:i,$variant:d,children:[t.jsxs(da,{src:e,alt:`${a}'s avatar`,$size:i,"data-testid":`${o}-avatar`,children:[!e&&u,!e&&!u&&t.jsx(S,{})]}),t.jsxs(ua,{$size:i,$variant:d,children:[t.jsx(ma,{variant:"h6",$size:i,title:a,"data-testid":`${o}-name`,children:a}),t.jsxs(ga,{variant:"body2",$size:i,title:r,"data-testid":`${o}-username`,children:["@",r]}),s&&t.jsx(fa,{variant:"body2",$size:i,title:s,"data-testid":`${o}-role`,children:s})]})]}),p&&t.jsxs(va,{$size:i,$variant:d,"data-testid":`${o}-stats`,role:"region","aria-label":"User statistics",children:[t.jsx(M,{icon:t.jsx(B.courses,{}),label:W.courses,value:y.courses,"data-testid":`${o}-stat-courses`}),t.jsx(M,{icon:t.jsx(B.points,{}),label:W.points,value:y.points,"data-testid":`${o}-stat-points`}),t.jsx(M,{icon:t.jsx(B.ranking,{}),label:W.ranking,value:m(y.ranking),"data-testid":`${o}-stat-ranking`})]})]})};h.__docgenInfo={description:"Profile card component for displaying user information and statistics",methods:[],displayName:"ProfileCard",props:{avatarUrl:{required:!1,tsType:{name:"string"},description:"User's avatar URL"},name:{required:!0,tsType:{name:"string"},description:"User's full name"},username:{required:!0,tsType:{name:"string"},description:"User's username/handle"},role:{required:!1,tsType:{name:"string"},description:"User's role or title"},stats:{required:!1,tsType:{name:"ProfileStatsProps"},description:"User statistics",defaultValue:{value:"{ courses: 0, points: 0, ranking: 0 }",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size variant of the card",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'expanded'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'expanded'"}]},description:"Layout variant",defaultValue:{value:"'default'",computed:!1}},showStats:{required:!1,tsType:{name:"boolean"},description:"Whether to show the stats section",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test id for testing purposes",defaultValue:{value:"'profile-card'",computed:!1}}},composes:["Omit"]};const Da={title:"Components/ProfileCard",component:h,parameters:{layout:"centered",docs:{description:{component:"A reusable profile card component for displaying user information and statistics."}}},argTypes:{name:{control:"text",description:"User full name",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},username:{control:"text",description:"User username/handle",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},avatarUrl:{control:"text",description:"URL for the user avatar image",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},role:{control:"text",description:"User role or title",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},size:{control:"select",options:Object.keys(na),description:"Size variant of the card",table:{type:{summary:"small | medium | large"},defaultValue:{summary:"medium"}}},variant:{control:"select",options:Object.keys(oa),description:"Layout variant of the card",table:{type:{summary:"default | compact | expanded"},defaultValue:{summary:"default"}}},showStats:{control:"boolean",description:"Whether to show the statistics section",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},stats:{control:"object",description:"User statistics object containing courses, points, and ranking",table:{type:{summary:"{ courses: number; points: number; ranking: number }"},defaultValue:{summary:"{ courses: 0, points: 0, ranking: 0 }"}}},className:{control:"text",description:"Custom CSS class name",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},"data-testid":{control:"text",description:"Test ID for testing purposes",table:{type:{summary:"string"},defaultValue:{summary:"profile-card"}}}},args:{name:"John Doe",username:"johndoe",role:"Senior Developer",avatarUrl:"https://i.pravatar.cc/150?img=3",size:"medium",variant:"default",showStats:!0,stats:{courses:12,points:3450,ranking:23}},tags:["autodocs"]},D={args:{name:"John Doe",username:"johndoe",role:"Senior Developer",avatarUrl:"https://i.pravatar.cc/150?img=3",size:"medium",variant:"default",showStats:!0,stats:{courses:12,points:3450,ranking:23}}},A={args:{name:"Sarah Johnson",username:"sarahjohnson",role:"Product Designer",avatarUrl:"https://i.pravatar.cc/150?img=5",stats:{courses:8,points:2150,ranking:42}}},N={args:{name:"Michael Chen",username:"mchen",role:"Data Scientist",avatarUrl:void 0,stats:{courses:15,points:4200,ranking:7}}},$={args:{name:"Alexander Christopher Montgomery III",username:"alexmontgomery",role:"Chief Technology Officer",avatarUrl:"https://i.pravatar.cc/150?img=8",stats:{courses:25,points:8950,ranking:1}}},F={args:{name:"Emily Davis",username:"emilyd",role:void 0,avatarUrl:"https://i.pravatar.cc/150?img=9",stats:{courses:5,points:1200,ranking:156}}},T={args:{name:"Robert Wilson",username:"rwilson",role:"Backend Engineer",avatarUrl:"https://i.pravatar.cc/150?img=12",showStats:!1}},E={args:{size:"small",name:"Lisa Anderson",username:"lisaa",role:"UX Researcher",avatarUrl:"https://i.pravatar.cc/150?img=16",stats:{courses:6,points:1800,ranking:89}}},L={args:{size:"large",name:"David Thompson",username:"dthompson",role:"DevOps Engineer",avatarUrl:"https://i.pravatar.cc/150?img=18",stats:{courses:10,points:3e3,ranking:34}}},I={args:{variant:"compact",name:"Jennifer Martinez",username:"jmartinez",role:"Frontend Developer",avatarUrl:"https://i.pravatar.cc/150?img=20",stats:{courses:9,points:2700,ranking:56}}},P={args:{variant:"expanded",name:"Thomas Brown",username:"tbrown",role:"Full Stack Developer",avatarUrl:"https://i.pravatar.cc/150?img=22",stats:{courses:14,points:4100,ranking:12}}},R={args:{name:"New User",username:"newbie",role:"Beginner",avatarUrl:void 0,stats:{courses:0,points:0,ranking:0}}},V={render:()=>t.jsxs(g,{sx:{display:"flex",flexDirection:"column",gap:4,padding:2},children:[t.jsxs(g,{children:[t.jsx("h3",{children:"Size Variations"}),t.jsxs(g,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[t.jsx(h,{size:"small",name:"Small Card",username:"smalluser",role:"Developer",avatarUrl:"https://i.pravatar.cc/150?img=1",stats:{courses:5,points:1500,ranking:45}}),t.jsx(h,{size:"medium",name:"Medium Card",username:"mediumuser",role:"Designer",avatarUrl:"https://i.pravatar.cc/150?img=2",stats:{courses:8,points:2400,ranking:23}}),t.jsx(h,{size:"large",name:"Large Card",username:"largeuser",role:"Manager",avatarUrl:"https://i.pravatar.cc/150?img=3",stats:{courses:12,points:3600,ranking:10}})]})]}),t.jsxs(g,{children:[t.jsx("h3",{children:"Variant Styles"}),t.jsxs(g,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[t.jsx(h,{variant:"default",name:"Default Layout",username:"defaultuser",role:"Engineer",avatarUrl:"https://i.pravatar.cc/150?img=4",stats:{courses:7,points:2100,ranking:34}}),t.jsx(h,{variant:"compact",name:"Compact Layout",username:"compactuser",role:"Analyst",avatarUrl:"https://i.pravatar.cc/150?img=5",stats:{courses:10,points:3e3,ranking:18}}),t.jsx(h,{variant:"expanded",name:"Expanded Layout",username:"expandeduser",role:"Architect",avatarUrl:"https://i.pravatar.cc/150?img=6",stats:{courses:15,points:4500,ranking:5}})]})]}),t.jsxs(g,{children:[t.jsx("h3",{children:"Edge Cases"}),t.jsxs(g,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[t.jsx(h,{name:"No Avatar User",username:"noavatar",role:"Tester",stats:{courses:3,points:900,ranking:123}}),t.jsx(h,{name:"Very Long Name That Should Be Truncated",username:"verylongusernamethatshouldalsobetruncated",role:"Senior Principal Staff Engineer",avatarUrl:"https://i.pravatar.cc/150?img=7",stats:{courses:20,points:6e3,ranking:2}}),t.jsx(h,{name:"No Stats User",username:"nostats",role:"Intern",avatarUrl:"https://i.pravatar.cc/150?img=8",showStats:!1})]})]})]}),parameters:{controls:{disable:!0}}};var X,K,Y;D.parameters={...D.parameters,docs:{...(X=D.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Y=(K=D.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var Q,ee,ae;A.parameters={...A.parameters,docs:{...(Q=A.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ae=(ee=A.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,se;N.parameters={...N.parameters,docs:{...(re=N.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(te=N.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ne,oe,ie;$.parameters={...$.parameters,docs:{...(ne=$.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ie=(oe=$.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,pe;F.parameters={...F.parameters,docs:{...(le=F.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(pe=(ce=F.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var de,ue,me;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    name: 'Robert Wilson',
    username: 'rwilson',
    role: 'Backend Engineer',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    showStats: false
  }
}`,...(me=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ge,fe,ve;E.parameters={...E.parameters,docs:{...(ge=E.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ve=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var he,ye,xe;L.parameters={...L.parameters,docs:{...(he=L.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(xe=(ye=L.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var Se,we,Ce;I.parameters={...I.parameters,docs:{...(Se=I.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ce=(we=I.parameters)==null?void 0:we.docs)==null?void 0:Ce.source}}};var be,ke,ze;P.parameters={...P.parameters,docs:{...(be=P.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ze=(ke=P.parameters)==null?void 0:ke.docs)==null?void 0:ze.source}}};var Ue,je,De;R.parameters={...R.parameters,docs:{...(Ue=R.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(De=(je=R.parameters)==null?void 0:je.docs)==null?void 0:De.source}}};var Ae,Ne,$e;V.parameters={...V.parameters,docs:{...(Ae=V.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...($e=(Ne=V.parameters)==null?void 0:Ne.docs)==null?void 0:$e.source}}};const Aa=["Playground","Default","NoAvatar","LongName","NoRole","NoStats","SmallSize","LargeSize","CompactVariant","ExpandedVariant","NewUser","Gallery"];export{I as CompactVariant,A as Default,P as ExpandedVariant,V as Gallery,L as LargeSize,$ as LongName,R as NewUser,N as NoAvatar,F as NoRole,T as NoStats,D as Playground,E as SmallSize,Aa as __namedExportsOrder,Da as default};
