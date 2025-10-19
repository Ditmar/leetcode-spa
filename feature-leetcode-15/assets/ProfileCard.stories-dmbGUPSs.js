import{j as t}from"./jsx-runtime-CBFqWUVk.js";import{c as C,C as Le}from"./Card-Bkgcz9cO.js";import{P as _,a as q}from"./theme-ozEUXcDv.js";import{c as M,u as Ee,g as Ie,a as $e,s as c,b as Ve,m as Oe,B as g,T as b}from"./Box-AgyjMRKj.js";import{r as H}from"./index-CgCoV-L-.js";import{u as Be}from"./DefaultPropsProvider-CYF72fVf.js";import"./_commonjsHelpers-CqkleIqs.js";function We(e){return typeof e=="string"}function Fe(e,a,r){return e===void 0||We(e)?a:{...a,ownerState:{...a.ownerState,...r}}}function Me(e,a=[]){if(e===void 0)return{};const r={};return Object.keys(e).filter(s=>s.match(/^on[A-Z]/)&&typeof e[s]=="function"&&!a.includes(s)).forEach(s=>{r[s]=e[s]}),r}function Y(e){if(e===void 0)return{};const a={};return Object.keys(e).filter(r=>!(r.match(/^on[A-Z]/)&&typeof e[r]=="function")).forEach(r=>{a[r]=e[r]}),a}function He(e){const{getSlotProps:a,additionalProps:r,externalSlotProps:s,externalForwardedProps:n,className:i}=e;if(!a){const m=M(r==null?void 0:r.className,i,n==null?void 0:n.className,s==null?void 0:s.className),d={...r==null?void 0:r.style,...n==null?void 0:n.style,...s==null?void 0:s.style},f={...r,...n,...s};return m.length>0&&(f.className=m),Object.keys(d).length>0&&(f.style=d),{props:f,internalRef:void 0}}const l=Me({...n,...s}),p=Y(s),w=Y(n),o=a(l),y=M(o==null?void 0:o.className,r==null?void 0:r.className,i,n==null?void 0:n.className,s==null?void 0:s.className),S={...o==null?void 0:o.style,...r==null?void 0:r.style,...n==null?void 0:n.style,...s==null?void 0:s.style},u={...o,...r,...w,...p};return y.length>0&&(u.className=y),Object.keys(S).length>0&&(u.style=S),{props:u,internalRef:o.ref}}function _e(e,a,r){return typeof e=="function"?e(a,r):e}function qe(e,a){const{className:r,elementType:s,ownerState:n,externalForwardedProps:i,internalForwardedProps:l,...p}=a,{component:w,slots:o={[e]:void 0},slotProps:y={[e]:void 0},...S}=i,u=o[e]||s,m=_e(y[e],n),{props:{component:d,...f},internalRef:v}=He({className:r,...p,externalForwardedProps:void 0,externalSlotProps:m}),x=Ee(v,m==null?void 0:m.ref,a.ref),k=d,U=Fe(u,{...e==="root",...!o[e]&&l,...f,...k&&{as:k},ref:x},n);return[u,U]}const Je=C(t.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function Ge(e){return Ie("MuiAvatar",e)}$e("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const Ye=e=>{const{classes:a,variant:r,colorDefault:s}=e;return Ve({root:["root",r,s&&"colorDefault"],img:["img"],fallback:["fallback"]},Ge,a)},Ze=c("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.root,a[r.variant],r.colorDefault&&a.colorDefault]}})(Oe(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(e.vars||e).palette.background.default,...e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.grey[400],...e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})}}}]}))),Xe=c("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,a)=>a.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Ke=c(Je,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,a)=>a.fallback})({width:"75%",height:"75%"});function Qe({crossOrigin:e,referrerPolicy:a,src:r,srcSet:s}){const[n,i]=H.useState(!1);return H.useEffect(()=>{if(!r&&!s)return;i(!1);let l=!0;const p=new Image;return p.onload=()=>{l&&i("loaded")},p.onerror=()=>{l&&i("error")},p.crossOrigin=e,p.referrerPolicy=a,p.src=r,s&&(p.srcset=s),()=>{l=!1}},[e,a,r,s]),n}const ea=H.forwardRef(function(a,r){const s=Be({props:a,name:"MuiAvatar"}),{alt:n,children:i,className:l,component:p="div",slots:w={},slotProps:o={},imgProps:y,sizes:S,src:u,srcSet:m,variant:d="circular",...f}=s;let v=null;const x={...s,component:p,variant:d},k=Qe({...y,...typeof o.img=="function"?o.img(x):o.img,src:u,srcSet:m}),U=u||m,G=U&&k!=="error";x.colorDefault=!G,delete x.ownerState;const O=Ye(x),[Re,Te]=qe("img",{className:O.img,elementType:Xe,externalForwardedProps:{slots:w,slotProps:{img:{...y,...o.img}}},additionalProps:{alt:n,src:u,srcSet:m,sizes:S},ownerState:x});return G?v=t.jsx(Re,{...Te}):i||i===0?v=i:U&&n?v=n[0]:v=t.jsx(Ke,{ownerState:x,className:O.fallback}),t.jsx(Ze,{as:p,className:M(O.root,l),ref:r,...f,ownerState:x,children:v})}),aa=C(t.jsx("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m14 0c0 1.3-.84 2.4-2 2.82V7h2z"}),"EmojiEvents"),ra=C(t.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person"),ta=C(t.jsx("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z"}),"School"),sa=C(t.jsx("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),na={small:"small",medium:"medium",large:"large"},oa={default:"default",compact:"compact",expanded:"expanded"},J={default:{direction:"column",textAlign:"center",statsDirection:"row"},compact:{direction:"row",textAlign:"left",statsDirection:"row"},expanded:{direction:"column",textAlign:"center",statsDirection:"column"}},j={size:"medium",variant:"default",showStats:!0,stats:{courses:0,points:0,ranking:0}},B={courses:ta,points:sa,ranking:aa},W={courses:"Courses",points:"Points",ranking:"Ranking"},ia=ra,la=e=>{if(!e||!e.trim())return"";const a=e.trim().split(/\s+/);return a.length===1?a[0].charAt(0).toUpperCase():(a[0].charAt(0)+a[a.length-1].charAt(0)).toUpperCase()},ca=c(Le,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$size:a})=>{const r=_[a];return{padding:e.spacing(r.paddingUnits),borderRadius:e.spacing(2),boxShadow:e.shadows[2],transition:e.transitions.create(["box-shadow","transform"],{duration:e.transitions.duration.short}),"&:hover":{boxShadow:e.shadows[4],transform:"translateY(-2px)"},[e.breakpoints.down("sm")]:{padding:e.spacing(2)}}}),pa=c(g,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$variant:a})=>({display:"flex",flexDirection:J[a].direction,alignItems:"center",gap:e.spacing(2),width:"100%",[e.breakpoints.down("sm")]:{flexDirection:"column",gap:e.spacing(1.5)}})),da=c(ea,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$size:a})=>{const r=_[a];return{width:e.spacing(r.avatarSpacing),height:e.spacing(r.avatarSpacing),backgroundColor:e.palette.primary.main,fontSize:`calc(${e.spacing(r.avatarSpacing)} * 0.4)`,fontWeight:e.typography.fontWeightBold||600,border:`${r.borderWidth}px solid ${e.palette.background.paper}`,boxShadow:e.shadows[2],[e.breakpoints.down("sm")]:{width:e.spacing(6),height:e.spacing(6),fontSize:e.spacing(2.4)}}}),ua=c(g,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$variant:a})=>{const r=J[a];return{display:"flex",flexDirection:"column",gap:e.spacing(.5),textAlign:r.textAlign,flex:a==="compact"?1:"initial",minWidth:0,[e.breakpoints.down("sm")]:{textAlign:"center"}}}),ma=c(b,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$size:a})=>({fontSize:q[a].nameSize,fontWeight:e.typography.fontWeightBold||600,color:e.palette.text.primary,lineHeight:e.typography.body1.lineHeight,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",[e.breakpoints.down("sm")]:{fontSize:e.typography.body1.fontSize}})),ga=c(b,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$size:a})=>({fontSize:q[a].usernameSize,fontWeight:e.typography.fontWeightRegular||400,color:e.palette.grey[600],lineHeight:e.typography.body2.lineHeight,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",[e.breakpoints.down("sm")]:{fontSize:e.typography.body2.fontSize}})),fa=c(b,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$size:a})=>({fontSize:q[a].roleSize,fontWeight:e.typography.fontWeightMedium||500,color:e.palette.primary.main,lineHeight:e.typography.caption.lineHeight,marginTop:e.spacing(.5),overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",[e.breakpoints.down("sm")]:{fontSize:e.typography.caption.fontSize}})),ha=c(g,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$size:a,$variant:r})=>{const s=_[a];return{display:"flex",flexDirection:J[r].statsDirection,gap:e.spacing(s.statsGap),marginTop:e.spacing(s.statsPaddingTop),paddingTop:e.spacing(s.statsPaddingTop),borderTop:`1px solid ${e.palette.grey[200]}`,justifyContent:r==="expanded"?"space-between":"center",flexWrap:"wrap",[e.breakpoints.down("sm")]:{flexDirection:"column",gap:e.spacing(1.5)}}}),va=c(g,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$variant:a})=>({display:"flex",flexDirection:a==="expanded"?"row":"column",alignItems:"center",gap:e.spacing(1),flex:a==="expanded"?"1 1 auto":"0 0 auto",justifyContent:a==="expanded"?"space-between":"center",padding:a==="expanded"?e.spacing(1,0):0,[e.breakpoints.down("sm")]:{flexDirection:"row",justifyContent:"space-between",width:"100%"}})),ya=c(g)(({theme:e})=>({display:"flex",alignItems:"center",justifyContent:"center",color:e.palette.primary.main,"& svg":{fontSize:e.spacing(2.5)}})),xa=c(g,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$variant:a})=>({display:"flex",flexDirection:"column",alignItems:a==="expanded"?"flex-end":"center",gap:e.spacing(.25),[e.breakpoints.down("sm")]:{alignItems:"flex-end"}})),Sa=c(b)(({theme:e})=>({fontSize:e.typography.body1.fontSize,fontWeight:e.typography.fontWeightBold||600,color:e.palette.text.primary,lineHeight:1})),wa=c(b)(({theme:e})=>({fontSize:e.typography.caption.fontSize,fontWeight:e.typography.fontWeightRegular||400,color:e.palette.grey[500],lineHeight:1,textTransform:"capitalize"})),F=({icon:e,label:a,value:r,$variant:s,"data-testid":n})=>{const i=typeof r=="number"?r.toLocaleString("en-US"):r;return t.jsxs(va,{$variant:s,"data-testid":n,children:[t.jsx(ya,{children:e}),t.jsxs(xa,{$variant:s,children:[t.jsx(Sa,{children:i}),t.jsx(wa,{children:a})]})]})},h=({avatarUrl:e,name:a,username:r,role:s,stats:n=j.stats,size:i=j.size,variant:l=j.variant,showStats:p=j.showStats,className:w,"data-testid":o="profile-card",...y})=>{if(!a||!r)throw new Error('ProfileCard: "name" and "username" are required props and cannot be empty.');const S=ia,u=la(a),m=d=>{if(d===0)return"-";const f=d%10,v=d%100;return v>=11&&v<=13?`${d}th`:f===1?`${d}st`:f===2?`${d}nd`:f===3?`${d}rd`:`${d}th`};return t.jsxs(ca,{className:w,"data-testid":o,$size:i,$variant:l,role:"article","aria-label":`Profile card for ${a}`,...y,children:[t.jsxs(pa,{$size:i,$variant:l,children:[t.jsxs(da,{src:e,alt:`${a}'s avatar`,$size:i,"data-testid":`${o}-avatar`,children:[!e&&u&&u,!e&&!u&&t.jsx(S,{})]}),t.jsxs(ua,{$size:i,$variant:l,children:[t.jsx(ma,{variant:"h6",$size:i,title:a,"data-testid":`${o}-name`,children:a}),t.jsxs(ga,{variant:"body2",$size:i,title:r,"data-testid":`${o}-username`,children:["@",r]}),s&&t.jsx(fa,{variant:"body2",$size:i,title:s,"data-testid":`${o}-role`,children:s})]})]}),p&&t.jsxs(ha,{$size:i,$variant:l,"data-testid":`${o}-stats`,role:"region","aria-label":"User statistics",children:[t.jsx(F,{icon:t.jsx(B.courses,{}),label:W.courses,value:n.courses,$variant:l,"data-testid":`${o}-stat-courses`}),t.jsx(F,{icon:t.jsx(B.points,{}),label:W.points,value:n.points,$variant:l,"data-testid":`${o}-stat-points`}),t.jsx(F,{icon:t.jsx(B.ranking,{}),label:W.ranking,value:m(n.ranking),$variant:l,"data-testid":`${o}-stat-ranking`})]})]})};h.__docgenInfo={description:"Profile card component for displaying user information and statistics",methods:[],displayName:"ProfileCard",props:{avatarUrl:{required:!1,tsType:{name:"string"},description:"User's avatar URL"},name:{required:!0,tsType:{name:"string"},description:"User's full name"},username:{required:!0,tsType:{name:"string"},description:"User's username/handle"},role:{required:!1,tsType:{name:"string"},description:"User's role or title"},stats:{required:!1,tsType:{name:"ProfileStatsProps"},description:"User statistics",defaultValue:{value:`{
  courses: 0,
  points: 0,
  ranking: 0,
}`,computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size variant of the card",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'expanded'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'expanded'"}]},description:"Layout variant",defaultValue:{value:"'default'",computed:!1}},showStats:{required:!1,tsType:{name:"boolean"},description:"Whether to show the stats section",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test id for testing purposes",defaultValue:{value:"'profile-card'",computed:!1}}},composes:["Omit"]};const za={title:"Components/ProfileCard",component:h,parameters:{layout:"centered",docs:{description:{component:"A reusable profile card component for displaying user information and statistics."}}},argTypes:{name:{control:"text",description:"User full name",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},username:{control:"text",description:"User username/handle",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},avatarUrl:{control:"text",description:"URL for the user avatar image",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},role:{control:"text",description:"User role or title",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},size:{control:"select",options:Object.values(na),description:"Size variant of the card",table:{type:{summary:"small | medium | large"},defaultValue:{summary:"medium"}}},variant:{control:"select",options:Object.values(oa),description:"Layout variant of the card",table:{type:{summary:"default | compact | expanded"},defaultValue:{summary:"default"}}},showStats:{control:"boolean",description:"Whether to show the statistics section",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},stats:{control:"object",description:"User statistics object containing courses, points, and ranking",table:{type:{summary:"{ courses: number; points: number; ranking: number }"},defaultValue:{summary:"{ courses: 0, points: 0, ranking: 0 }"}}},className:{control:"text",description:"Custom CSS class name",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},"data-testid":{control:"text",description:"Test ID for testing purposes",table:{type:{summary:"string"},defaultValue:{summary:"profile-card"}}}},args:{name:"John Doe",username:"johndoe",role:"Senior Developer",avatarUrl:"https://i.pravatar.cc/150?img=3",size:"medium",variant:"default",showStats:!0,stats:{courses:12,points:3450,ranking:23}},tags:["autodocs"]},A={args:{name:"John Doe",username:"johndoe",role:"Senior Developer",avatarUrl:"https://i.pravatar.cc/150?img=3",size:"medium",variant:"default",showStats:!0,stats:{courses:12,points:3450,ranking:23}}},D={args:{name:"Sarah Johnson",username:"sarahjohnson",role:"Product Designer",avatarUrl:"https://i.pravatar.cc/150?img=5",stats:{courses:8,points:2150,ranking:42}}},z={args:{name:"Michael Chen",username:"mchen",role:"Data Scientist",avatarUrl:void 0,stats:{courses:15,points:4200,ranking:7}}},N={args:{name:"Alexander Christopher Montgomery III",username:"alexmontgomery",role:"Chief Technology Officer",avatarUrl:"https://i.pravatar.cc/150?img=8",stats:{courses:25,points:8950,ranking:1}}},P={args:{name:"Emily Davis",username:"emilyd",role:void 0,avatarUrl:"https://i.pravatar.cc/150?img=9",stats:{courses:5,points:1200,ranking:156}}},R={args:{name:"Robert Wilson",username:"rwilson",role:"Backend Engineer",avatarUrl:"https://i.pravatar.cc/150?img=12",showStats:!1}},T={args:{size:"small",name:"Lisa Anderson",username:"lisaa",role:"UX Researcher",avatarUrl:"https://i.pravatar.cc/150?img=16",stats:{courses:6,points:1800,ranking:89}}},L={args:{size:"large",name:"David Thompson",username:"dthompson",role:"DevOps Engineer",avatarUrl:"https://i.pravatar.cc/150?img=18",stats:{courses:10,points:3e3,ranking:34}}},E={args:{variant:"compact",name:"Jennifer Martinez",username:"jmartinez",role:"Frontend Developer",avatarUrl:"https://i.pravatar.cc/150?img=20",stats:{courses:9,points:2700,ranking:56}}},I={args:{variant:"expanded",name:"Thomas Brown",username:"tbrown",role:"Full Stack Developer",avatarUrl:"https://i.pravatar.cc/150?img=22",stats:{courses:14,points:4100,ranking:12}}},$={args:{name:"New User",username:"newbie",role:"Beginner",avatarUrl:void 0,stats:{courses:0,points:0,ranking:0}}},V={render:()=>t.jsxs(g,{sx:{display:"flex",flexDirection:"column",gap:4,padding:2},children:[t.jsxs(g,{children:[t.jsx("h3",{children:"Size Variations"}),t.jsxs(g,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[t.jsx(h,{size:"small",name:"Small Card",username:"smalluser",role:"Developer",avatarUrl:"https://i.pravatar.cc/150?img=1",stats:{courses:5,points:1500,ranking:45}}),t.jsx(h,{size:"medium",name:"Medium Card",username:"mediumuser",role:"Designer",avatarUrl:"https://i.pravatar.cc/150?img=2",stats:{courses:8,points:2400,ranking:23}}),t.jsx(h,{size:"large",name:"Large Card",username:"largeuser",role:"Manager",avatarUrl:"https://i.pravatar.cc/150?img=3",stats:{courses:12,points:3600,ranking:10}})]})]}),t.jsxs(g,{children:[t.jsx("h3",{children:"Variant Styles"}),t.jsxs(g,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[t.jsx(h,{variant:"default",name:"Default Layout",username:"defaultuser",role:"Engineer",avatarUrl:"https://i.pravatar.cc/150?img=4",stats:{courses:7,points:2100,ranking:34}}),t.jsx(h,{variant:"compact",name:"Compact Layout",username:"compactuser",role:"Analyst",avatarUrl:"https://i.pravatar.cc/150?img=5",stats:{courses:10,points:3e3,ranking:18}}),t.jsx(h,{variant:"expanded",name:"Expanded Layout",username:"expandeduser",role:"Architect",avatarUrl:"https://i.pravatar.cc/150?img=6",stats:{courses:15,points:4500,ranking:5}})]})]}),t.jsxs(g,{children:[t.jsx("h3",{children:"Edge Cases"}),t.jsxs(g,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[t.jsx(h,{name:"No Avatar User",username:"noavatar",role:"Tester",stats:{courses:3,points:900,ranking:123}}),t.jsx(h,{name:"Very Long Name That Should Be Truncated",username:"verylongusernamethatshouldalsobetruncated",role:"Senior Principal Staff Engineer",avatarUrl:"https://i.pravatar.cc/150?img=7",stats:{courses:20,points:6e3,ranking:2}}),t.jsx(h,{name:"No Stats User",username:"nostats",role:"Intern",avatarUrl:"https://i.pravatar.cc/150?img=8",showStats:!1})]})]})]}),parameters:{controls:{disable:!0}}};var Z,X,K;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(K=(X=A.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var Q,ee,ae;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ae=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,se;z.parameters={...z.parameters,docs:{...(re=z.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(te=z.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ne,oe,ie;N.parameters={...N.parameters,docs:{...(ne=N.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ie=(oe=N.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,pe;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(pe=(ce=P.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var de,ue,me;R.parameters={...R.parameters,docs:{...(de=R.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    name: 'Robert Wilson',
    username: 'rwilson',
    role: 'Backend Engineer',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    showStats: false
  }
}`,...(me=(ue=R.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ge,fe,he;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(he=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ve,ye,xe;L.parameters={...L.parameters,docs:{...(ve=L.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(xe=(ye=L.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var Se,we,Ce;E.parameters={...E.parameters,docs:{...(Se=E.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ce=(we=E.parameters)==null?void 0:we.docs)==null?void 0:Ce.source}}};var be,ke,Ue;I.parameters={...I.parameters,docs:{...(be=I.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Ue=(ke=I.parameters)==null?void 0:ke.docs)==null?void 0:Ue.source}}};var je,Ae,De;$.parameters={...$.parameters,docs:{...(je=$.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(De=(Ae=$.parameters)==null?void 0:Ae.docs)==null?void 0:De.source}}};var ze,Ne,Pe;V.parameters={...V.parameters,docs:{...(ze=V.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Pe=(Ne=V.parameters)==null?void 0:Ne.docs)==null?void 0:Pe.source}}};const Na=["Playground","Default","NoAvatar","LongName","NoRole","NoStats","SmallSize","LargeSize","CompactVariant","ExpandedVariant","NewUser","Gallery"];export{E as CompactVariant,D as Default,I as ExpandedVariant,V as Gallery,L as LargeSize,N as LongName,$ as NewUser,z as NoAvatar,P as NoRole,R as NoStats,A as Playground,T as SmallSize,Na as __namedExportsOrder,za as default};
