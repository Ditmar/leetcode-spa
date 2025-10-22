import{j as r}from"./jsx-runtime-CBFqWUVk.js";import{c as x}from"./createSvgIcon-BB5_IIgw.js";import{P as W,a as M}from"./theme-Da2_6iEO.js";import{g as La,a as Ia,s as o,c as Ra,b as $a,m as Va,B as p,T as S}from"./Box-zPJCsKhN.js";import{C as Na}from"./Card-86H4dQBX.js";import{r as F}from"./index-CgCoV-L-.js";import{u as Ea}from"./useSlot-CdHFNWWO.js";import{u as Ba}from"./DefaultPropsProvider-DymgKFCc.js";import"./Paper-gI8ZmHfM.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useForkRef-BAkNGyFZ.js";const Oa=x(r.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function Fa(a){return La("MuiAvatar",a)}Ia("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const Wa=a=>{const{classes:e,variant:t,colorDefault:s}=a;return $a({root:["root",t,s&&"colorDefault"],img:["img"],fallback:["fallback"]},Fa,e)},Ma=o("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:t}=a;return[e.root,e[t.variant],t.colorDefault&&e.colorDefault]}})(Va(({theme:a})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(a.vars||a).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(a.vars||a).palette.background.default,...a.vars?{backgroundColor:a.vars.palette.Avatar.defaultBg}:{backgroundColor:a.palette.grey[400],...a.applyStyles("dark",{backgroundColor:a.palette.grey[600]})}}}]}))),_a=o("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(a,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),qa=o(Oa,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(a,e)=>e.fallback})({width:"75%",height:"75%"});function Ha({crossOrigin:a,referrerPolicy:e,src:t,srcSet:s}){const[l,n]=F.useState(!1);return F.useEffect(()=>{if(!t&&!s)return;n(!1);let c=!0;const d=new Image;return d.onload=()=>{c&&n("loaded")},d.onerror=()=>{c&&n("error")},d.crossOrigin=a,d.referrerPolicy=e,d.src=t,s&&(d.srcset=s),()=>{c=!1}},[a,e,t,s]),l}const Ja=F.forwardRef(function(e,t){const s=Ba({props:e,name:"MuiAvatar"}),{alt:l,children:n,className:c,component:d="div",slots:$={},slotProps:i={},imgProps:w,sizes:V,src:f,srcSet:v,variant:m="circular",...y}=s;let g=null;const h={...s,component:d,variant:m},za=Ha({...w,...typeof i.img=="function"?i.img(h):i.img,src:f,srcSet:v}),q=f||v,H=q&&za!=="error";h.colorDefault=!H,delete h.ownerState;const N=Wa(h),[Aa,Ta]=Ea("img",{className:N.img,elementType:_a,externalForwardedProps:{slots:$,slotProps:{img:{...w,...i.img}}},additionalProps:{alt:l,src:f,srcSet:v,sizes:V},ownerState:h});return H?g=r.jsx(Aa,{...Ta}):n||n===0?g=n:q&&l?g=l[0]:g=r.jsx(qa,{ownerState:h,className:N.fallback}),r.jsx(Ma,{as:d,className:Ra(N.root,c),ref:t,...y,ownerState:h,children:g})}),Ga=x(r.jsx("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m14 0c0 1.3-.84 2.4-2 2.82V7h2z"}),"EmojiEvents"),Ya=x(r.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person"),Xa=x(r.jsx("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z"}),"School"),Ka=x(r.jsx("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),Za={small:"small",medium:"medium",large:"large"},Qa={default:"default",compact:"compact",expanded:"expanded"},_={default:{direction:"column",textAlign:"center",statsDirection:"row"},compact:{direction:"row",textAlign:"left",statsDirection:"row"},expanded:{direction:"column",textAlign:"center",statsDirection:"column"}},b={size:"medium",variant:"default",showStats:!0,stats:{courses:0,points:0,ranking:0}},E={courses:Xa,points:Ka,ranking:Ga},B={courses:"Courses",points:"Points",ranking:"Ranking"},ae=Ya,ee=a=>{if(!a||!a.trim())return"";const e=a.trim().split(/\s+/);return e.length===1?e[0].charAt(0).toUpperCase():(e[0].charAt(0)+e[e.length-1].charAt(0)).toUpperCase()},re=o(Na,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:e})=>{const t=W[e];return{padding:a.spacing(t.paddingUnits),borderRadius:a.spacing(2),boxShadow:a.shadows[2],transition:a.transitions.create(["box-shadow","transform"],{duration:a.transitions.duration.short}),"&:hover":{boxShadow:a.shadows[4],transform:"translateY(-2px)"},[a.breakpoints.down("sm")]:{padding:a.spacing(2)}}}),te=o(p,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$variant:e})=>({display:"flex",flexDirection:_[e].direction,alignItems:"center",gap:a.spacing(2),width:"100%",[a.breakpoints.down("sm")]:{flexDirection:"column",gap:a.spacing(1.5)}})),se=o(Ja,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:e})=>{const t=W[e];return{width:a.spacing(t.avatarSpacing),height:a.spacing(t.avatarSpacing),backgroundColor:a.palette.primary.main,fontSize:`calc(${a.spacing(t.avatarSpacing)} * 0.4)`,fontWeight:a.typography.fontWeightBold||600,border:`${t.borderWidth}px solid ${a.palette.background.paper}`,boxShadow:a.shadows[2],[a.breakpoints.down("sm")]:{width:a.spacing(6),height:a.spacing(6),fontSize:a.spacing(2.4)}}}),ne=o(p,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$variant:e})=>{const t=_[e];return{display:"flex",flexDirection:"column",gap:a.spacing(.5),textAlign:t.textAlign,flex:e==="compact"?1:"initial",minWidth:0,[a.breakpoints.down("sm")]:{textAlign:"center"}}}),oe=o(S,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:e})=>({fontSize:M[e].nameSize,fontWeight:a.typography.fontWeightBold||600,color:a.palette.text.primary,lineHeight:a.typography.body1.lineHeight,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",[a.breakpoints.down("sm")]:{fontSize:a.typography.body1.fontSize}})),ie=o(S,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:e})=>({fontSize:M[e].usernameSize,fontWeight:a.typography.fontWeightRegular||400,color:a.palette.grey[600],lineHeight:a.typography.body2.lineHeight,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",[a.breakpoints.down("sm")]:{fontSize:a.typography.body2.fontSize}})),le=o(S,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:e})=>({fontSize:M[e].roleSize,fontWeight:a.typography.fontWeightMedium||500,color:a.palette.primary.main,lineHeight:a.typography.caption.lineHeight,marginTop:a.spacing(.5),overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",[a.breakpoints.down("sm")]:{fontSize:a.typography.caption.fontSize}})),ce=o(p,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:e,$variant:t})=>{const s=W[e];return{display:"flex",flexDirection:_[t].statsDirection,gap:a.spacing(s.statsGap),marginTop:a.spacing(s.statsPaddingTop),paddingTop:a.spacing(s.statsPaddingTop),borderTop:`1px solid ${a.palette.grey[200]}`,justifyContent:t==="expanded"?"space-between":"center",flexWrap:"wrap",[a.breakpoints.down("sm")]:{flexDirection:"column",gap:a.spacing(1.5)}}}),pe=o(p,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$variant:e})=>({display:"flex",flexDirection:e==="expanded"?"row":"column",alignItems:"center",gap:a.spacing(1),flex:e==="expanded"?"1 1 auto":"0 0 auto",justifyContent:e==="expanded"?"space-between":"center",padding:e==="expanded"?a.spacing(1,0):0,[a.breakpoints.down("sm")]:{flexDirection:"row",justifyContent:"space-between",width:"100%"}})),de=o(p)(({theme:a})=>({display:"flex",alignItems:"center",justifyContent:"center",color:a.palette.primary.main,"& svg":{fontSize:a.spacing(2.5)}})),ue=o(p,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$variant:e})=>({display:"flex",flexDirection:"column",alignItems:e==="expanded"?"flex-end":"center",gap:a.spacing(.25),[a.breakpoints.down("sm")]:{alignItems:"flex-end"}})),me=o(S)(({theme:a})=>({fontSize:a.typography.body1.fontSize,fontWeight:a.typography.fontWeightBold||600,color:a.palette.text.primary,lineHeight:1})),ge=o(S)(({theme:a})=>({fontSize:a.typography.caption.fontSize,fontWeight:a.typography.fontWeightRegular||400,color:a.palette.grey[500],lineHeight:1,textTransform:"capitalize"})),O=({icon:a,label:e,value:t,$variant:s,"data-testid":l})=>{const n=typeof t=="number"?t.toLocaleString("en-US"):t;return r.jsxs(pe,{$variant:s,"data-testid":l,children:[r.jsx(de,{children:a}),r.jsxs(ue,{$variant:s,children:[r.jsx(me,{children:n}),r.jsx(ge,{children:e})]})]})},u=({avatarUrl:a,name:e,username:t,role:s,stats:l=b.stats,size:n=b.size,variant:c=b.variant,showStats:d=b.showStats,className:$,"data-testid":i="profile-card",...w})=>{if(!e||!t)throw new Error('ProfileCard: "name" and "username" are required props and cannot be empty.');const V=ae,f=ee(e),v=m=>{if(m===0)return"-";const y=m%10,g=m%100;return g>=11&&g<=13?`${m}th`:y===1?`${m}st`:y===2?`${m}nd`:y===3?`${m}rd`:`${m}th`};return r.jsxs(re,{className:$,"data-testid":i,$size:n,$variant:c,role:"article","aria-label":`Profile card for ${e}`,...w,children:[r.jsxs(te,{$size:n,$variant:c,children:[r.jsxs(se,{src:a,alt:`${e}'s avatar`,$size:n,"data-testid":`${i}-avatar`,children:[!a&&f&&f,!a&&!f&&r.jsx(V,{})]}),r.jsxs(ne,{$size:n,$variant:c,children:[r.jsx(oe,{variant:"h6",$size:n,title:e,"data-testid":`${i}-name`,children:e}),r.jsxs(ie,{variant:"body2",$size:n,title:t,"data-testid":`${i}-username`,children:["@",t]}),s&&r.jsx(le,{variant:"body2",$size:n,title:s,"data-testid":`${i}-role`,children:s})]})]}),d&&r.jsxs(ce,{$size:n,$variant:c,"data-testid":`${i}-stats`,role:"region","aria-label":"User statistics",children:[r.jsx(O,{icon:r.jsx(E.courses,{}),label:B.courses,value:l.courses,$variant:c,"data-testid":`${i}-stat-courses`}),r.jsx(O,{icon:r.jsx(E.points,{}),label:B.points,value:l.points,$variant:c,"data-testid":`${i}-stat-points`}),r.jsx(O,{icon:r.jsx(E.ranking,{}),label:B.ranking,value:v(l.ranking),$variant:c,"data-testid":`${i}-stat-ranking`})]})]})};u.__docgenInfo={description:"Profile card component for displaying user information and statistics",methods:[],displayName:"ProfileCard",props:{avatarUrl:{required:!1,tsType:{name:"string"},description:"User's avatar URL"},name:{required:!0,tsType:{name:"string"},description:"User's full name"},username:{required:!0,tsType:{name:"string"},description:"User's username/handle"},role:{required:!1,tsType:{name:"string"},description:"User's role or title"},stats:{required:!1,tsType:{name:"ProfileStatsProps"},description:"User statistics",defaultValue:{value:`{
  courses: 0,
  points: 0,
  ranking: 0,
}`,computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size variant of the card",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'expanded'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'expanded'"}]},description:"Layout variant",defaultValue:{value:"'default'",computed:!1}},showStats:{required:!1,tsType:{name:"boolean"},description:"Whether to show the stats section",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test id for testing purposes",defaultValue:{value:"'profile-card'",computed:!1}}},composes:["Omit"]};const je={title:"Components/ProfileCard",component:u,parameters:{layout:"centered",docs:{description:{component:"A reusable profile card component for displaying user information and statistics."}}},argTypes:{name:{control:"text",description:"User full name",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},username:{control:"text",description:"User username/handle",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},avatarUrl:{control:"text",description:"URL for the user avatar image",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},role:{control:"text",description:"User role or title",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},size:{control:"select",options:Object.values(Za),description:"Size variant of the card",table:{type:{summary:"small | medium | large"},defaultValue:{summary:"medium"}}},variant:{control:"select",options:Object.values(Qa),description:"Layout variant of the card",table:{type:{summary:"default | compact | expanded"},defaultValue:{summary:"default"}}},showStats:{control:"boolean",description:"Whether to show the statistics section",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},stats:{control:"object",description:"User statistics object containing courses, points, and ranking",table:{type:{summary:"{ courses: number; points: number; ranking: number }"},defaultValue:{summary:"{ courses: 0, points: 0, ranking: 0 }"}}},className:{control:"text",description:"Custom CSS class name",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},"data-testid":{control:"text",description:"Test ID for testing purposes",table:{type:{summary:"string"},defaultValue:{summary:"profile-card"}}}},args:{name:"John Doe",username:"johndoe",role:"Senior Developer",avatarUrl:"https://i.pravatar.cc/150?img=3",size:"medium",variant:"default",showStats:!0,stats:{courses:12,points:3450,ranking:23}},tags:["autodocs"]},C={args:{name:"John Doe",username:"johndoe",role:"Senior Developer",avatarUrl:"https://i.pravatar.cc/150?img=3",size:"medium",variant:"default",showStats:!0,stats:{courses:12,points:3450,ranking:23}}},k={args:{name:"Sarah Johnson",username:"sarahjohnson",role:"Product Designer",avatarUrl:"https://i.pravatar.cc/150?img=5",stats:{courses:8,points:2150,ranking:42}}},U={args:{name:"Michael Chen",username:"mchen",role:"Data Scientist",avatarUrl:void 0,stats:{courses:15,points:4200,ranking:7}}},j={args:{name:"Alexander Christopher Montgomery III",username:"alexmontgomery",role:"Chief Technology Officer",avatarUrl:"https://i.pravatar.cc/150?img=8",stats:{courses:25,points:8950,ranking:1}}},D={args:{name:"Emily Davis",username:"emilyd",role:void 0,avatarUrl:"https://i.pravatar.cc/150?img=9",stats:{courses:5,points:1200,ranking:156}}},P={args:{name:"Robert Wilson",username:"rwilson",role:"Backend Engineer",avatarUrl:"https://i.pravatar.cc/150?img=12",showStats:!1}},z={args:{size:"small",name:"Lisa Anderson",username:"lisaa",role:"UX Researcher",avatarUrl:"https://i.pravatar.cc/150?img=16",stats:{courses:6,points:1800,ranking:89}}},A={args:{size:"large",name:"David Thompson",username:"dthompson",role:"DevOps Engineer",avatarUrl:"https://i.pravatar.cc/150?img=18",stats:{courses:10,points:3e3,ranking:34}}},T={args:{variant:"compact",name:"Jennifer Martinez",username:"jmartinez",role:"Frontend Developer",avatarUrl:"https://i.pravatar.cc/150?img=20",stats:{courses:9,points:2700,ranking:56}}},L={args:{variant:"expanded",name:"Thomas Brown",username:"tbrown",role:"Full Stack Developer",avatarUrl:"https://i.pravatar.cc/150?img=22",stats:{courses:14,points:4100,ranking:12}}},I={args:{name:"New User",username:"newbie",role:"Beginner",avatarUrl:void 0,stats:{courses:0,points:0,ranking:0}}},R={render:()=>r.jsxs(p,{sx:{display:"flex",flexDirection:"column",gap:4,padding:2},children:[r.jsxs(p,{children:[r.jsx("h3",{children:"Size Variations"}),r.jsxs(p,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[r.jsx(u,{size:"small",name:"Small Card",username:"smalluser",role:"Developer",avatarUrl:"https://i.pravatar.cc/150?img=1",stats:{courses:5,points:1500,ranking:45}}),r.jsx(u,{size:"medium",name:"Medium Card",username:"mediumuser",role:"Designer",avatarUrl:"https://i.pravatar.cc/150?img=2",stats:{courses:8,points:2400,ranking:23}}),r.jsx(u,{size:"large",name:"Large Card",username:"largeuser",role:"Manager",avatarUrl:"https://i.pravatar.cc/150?img=3",stats:{courses:12,points:3600,ranking:10}})]})]}),r.jsxs(p,{children:[r.jsx("h3",{children:"Variant Styles"}),r.jsxs(p,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[r.jsx(u,{variant:"default",name:"Default Layout",username:"defaultuser",role:"Engineer",avatarUrl:"https://i.pravatar.cc/150?img=4",stats:{courses:7,points:2100,ranking:34}}),r.jsx(u,{variant:"compact",name:"Compact Layout",username:"compactuser",role:"Analyst",avatarUrl:"https://i.pravatar.cc/150?img=5",stats:{courses:10,points:3e3,ranking:18}}),r.jsx(u,{variant:"expanded",name:"Expanded Layout",username:"expandeduser",role:"Architect",avatarUrl:"https://i.pravatar.cc/150?img=6",stats:{courses:15,points:4500,ranking:5}})]})]}),r.jsxs(p,{children:[r.jsx("h3",{children:"Edge Cases"}),r.jsxs(p,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[r.jsx(u,{name:"No Avatar User",username:"noavatar",role:"Tester",stats:{courses:3,points:900,ranking:123}}),r.jsx(u,{name:"Very Long Name That Should Be Truncated",username:"verylongusernamethatshouldalsobetruncated",role:"Senior Principal Staff Engineer",avatarUrl:"https://i.pravatar.cc/150?img=7",stats:{courses:20,points:6e3,ranking:2}}),r.jsx(u,{name:"No Stats User",username:"nostats",role:"Intern",avatarUrl:"https://i.pravatar.cc/150?img=8",showStats:!1})]})]})]}),parameters:{controls:{disable:!0}}};var J,G,Y;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(G=C.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var X,K,Z;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(K=k.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var Q,aa,ea;U.parameters={...U.parameters,docs:{...(Q=U.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ea=(aa=U.parameters)==null?void 0:aa.docs)==null?void 0:ea.source}}};var ra,ta,sa;j.parameters={...j.parameters,docs:{...(ra=j.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
}`,...(sa=(ta=j.parameters)==null?void 0:ta.docs)==null?void 0:sa.source}}};var na,oa,ia;D.parameters={...D.parameters,docs:{...(na=D.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(ia=(oa=D.parameters)==null?void 0:oa.docs)==null?void 0:ia.source}}};var la,ca,pa;P.parameters={...P.parameters,docs:{...(la=P.parameters)==null?void 0:la.docs,source:{originalSource:`{
  args: {
    name: 'Robert Wilson',
    username: 'rwilson',
    role: 'Backend Engineer',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    showStats: false
  }
}`,...(pa=(ca=P.parameters)==null?void 0:ca.docs)==null?void 0:pa.source}}};var da,ua,ma;z.parameters={...z.parameters,docs:{...(da=z.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(ma=(ua=z.parameters)==null?void 0:ua.docs)==null?void 0:ma.source}}};var ga,fa,ha;A.parameters={...A.parameters,docs:{...(ga=A.parameters)==null?void 0:ga.docs,source:{originalSource:`{
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
}`,...(ha=(fa=A.parameters)==null?void 0:fa.docs)==null?void 0:ha.source}}};var va,ya,xa;T.parameters={...T.parameters,docs:{...(va=T.parameters)==null?void 0:va.docs,source:{originalSource:`{
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
}`,...(xa=(ya=T.parameters)==null?void 0:ya.docs)==null?void 0:xa.source}}};var Sa,wa,ba;L.parameters={...L.parameters,docs:{...(Sa=L.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
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
}`,...(ba=(wa=L.parameters)==null?void 0:wa.docs)==null?void 0:ba.source}}};var Ca,ka,Ua;I.parameters={...I.parameters,docs:{...(Ca=I.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
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
}`,...(Ua=(ka=I.parameters)==null?void 0:ka.docs)==null?void 0:Ua.source}}};var ja,Da,Pa;R.parameters={...R.parameters,docs:{...(ja=R.parameters)==null?void 0:ja.docs,source:{originalSource:`{
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
}`,...(Pa=(Da=R.parameters)==null?void 0:Da.docs)==null?void 0:Pa.source}}};const De=["Playground","Default","NoAvatar","LongName","NoRole","NoStats","SmallSize","LargeSize","CompactVariant","ExpandedVariant","NewUser","Gallery"];export{T as CompactVariant,k as Default,L as ExpandedVariant,R as Gallery,A as LargeSize,j as LongName,I as NewUser,U as NoAvatar,D as NoRole,P as NoStats,C as Playground,z as SmallSize,De as __namedExportsOrder,je as default};
