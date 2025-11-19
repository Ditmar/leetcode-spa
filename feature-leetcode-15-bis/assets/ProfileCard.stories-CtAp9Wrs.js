import{j as r,a as M,b as ea,c as ra,P as _,t as q}from"./iframe-DCzu9fFt.js";import{c as S}from"./createSvgIcon-bV7In9jx.js";import{g as ta,a as sa,s as o,c as na,m as oa,B as p}from"./Box-DfIU4Wj4.js";import{C as ia}from"./Card-p33hm1r6.js";import{u as B}from"./useSlot-Bi0qqPL7.js";import{T as w}from"./Typography-DvnrxB2_.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-C1uMez1Z.js";import"./useTheme-DbSEZ93P.js";import"./useForkRef-FFXVZmXV.js";const la=S(r.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}));function ca(a){return ta("MuiAvatar",a)}sa("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const pa=a=>{const{classes:e,variant:t,colorDefault:s}=a;return na({root:["root",t,s&&"colorDefault"],img:["img"],fallback:["fallback"]},ca,e)},da=o("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:t}=a;return[e.root,e[t.variant],t.colorDefault&&e.colorDefault]}})(oa(({theme:a})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(a.vars||a).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(a.vars||a).palette.background.default,...a.vars?{backgroundColor:a.vars.palette.Avatar.defaultBg}:{backgroundColor:a.palette.grey[400],...a.applyStyles("dark",{backgroundColor:a.palette.grey[600]})}}}]}))),ua=o("img",{name:"MuiAvatar",slot:"Img"})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),ma=o(la,{name:"MuiAvatar",slot:"Fallback"})({width:"75%",height:"75%"});function ga({crossOrigin:a,referrerPolicy:e,src:t,srcSet:s}){const[c,n]=M.useState(!1);return M.useEffect(()=>{if(!t&&!s)return;n(!1);let i=!0;const u=new Image;return u.onload=()=>{i&&n("loaded")},u.onerror=()=>{i&&n("error")},u.crossOrigin=a,u.referrerPolicy=e,u.src=t,s&&(u.srcset=s),()=>{i=!1}},[a,e,t,s]),c}const fa=M.forwardRef(function(e,t){const s=ea({props:e,name:"MuiAvatar"}),{alt:c,children:n,className:i,component:u="div",slots:h={},slotProps:f={},imgProps:d,sizes:V,src:y,srcSet:v,variant:x="circular",...N}=s;let l=null;const m={...s,component:u,variant:x},b=ga({...d,...typeof f.img=="function"?f.img(m):f.img,src:y,srcSet:v}),J=y||v,G=J&&b!=="error";m.colorDefault=!G,delete m.ownerState;const F=pa(m),[Y,K]=B("root",{ref:t,className:ra(F.root,i),elementType:da,externalForwardedProps:{slots:h,slotProps:f,component:u,...N},ownerState:m}),[X,Z]=B("img",{className:F.img,elementType:ua,externalForwardedProps:{slots:h,slotProps:{img:{...d,...f.img}}},additionalProps:{alt:c,src:y,srcSet:v,sizes:V},ownerState:m}),[Q,aa]=B("fallback",{className:F.fallback,elementType:ma,externalForwardedProps:{slots:h,slotProps:f},shouldForwardComponentProp:!0,ownerState:m});return G?l=r.jsx(X,{...Z}):n||n===0?l=n:J&&c?l=c[0]:l=r.jsx(Q,{...aa}),r.jsx(Y,{...K,children:l})}),va=S(r.jsx("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m14 0c0 1.3-.84 2.4-2 2.82V7h2z"})),ha=S(r.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"})),ya=S(r.jsx("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z"})),xa=S(r.jsx("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})),Sa={small:"small",medium:"medium",large:"large"},wa={default:"default",compact:"compact",expanded:"expanded"},H={default:{direction:"column",textAlign:"center",statsDirection:"row"},compact:{direction:"row",textAlign:"left",statsDirection:"row"},expanded:{direction:"column",textAlign:"center",statsDirection:"column"}},C={size:"medium",variant:"default",showStats:!0,stats:{courses:0,points:0,ranking:0}},E={courses:ya,points:xa,ranking:va},O={courses:"Courses",points:"Points",ranking:"Ranking"},ba=ha,Ca=a=>{if(!a||!a.trim())return"";const e=a.trim().split(/\s+/);return e.length===1?e[0].charAt(0).toUpperCase():(e[0].charAt(0)+e[e.length-1].charAt(0)).toUpperCase()},ka=o(ia,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:e})=>{const t=_[e];return{padding:a.spacing(t.paddingUnits),borderRadius:a.spacing(2),boxShadow:a.shadows[2],transition:a.transitions.create(["box-shadow","transform"],{duration:a.transitions.duration.short}),"&:hover":{boxShadow:a.shadows[4],transform:`translateY(-${a.spacing(.25)})`},[a.breakpoints.down("sm")]:{padding:a.spacing(2)}}}),Ua=o(p,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$variant:e})=>({display:"flex",flexDirection:H[e].direction,alignItems:"center",gap:a.spacing(2),width:"100%",[a.breakpoints.down("sm")]:{flexDirection:"column",gap:a.spacing(1.5)}})),ja=o(fa,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:e})=>{const t=_[e];return{width:a.spacing(t.avatarSpacing),height:a.spacing(t.avatarSpacing),backgroundColor:a.palette.primary.main,fontSize:`calc(${a.spacing(t.avatarSpacing)} * 0.4)`,fontWeight:a.typography.fontWeightBold||600,border:`${a.spacing(t.borderWidth/8)} solid ${a.palette.background.paper}`,boxShadow:a.shadows[2],[a.breakpoints.down("sm")]:{width:a.spacing(6),height:a.spacing(6),fontSize:a.spacing(2.4)}}}),Pa=o(p,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$variant:e})=>{const t=H[e];return{display:"flex",flexDirection:"column",gap:a.spacing(.5),textAlign:t.textAlign,flex:e==="compact"?1:"initial",minWidth:0,[a.breakpoints.down("sm")]:{textAlign:"center"}}}),Da=o(w,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:e})=>({fontSize:q[e].nameSize,fontWeight:a.typography.fontWeightBold||600,color:a.palette.text.primary,lineHeight:a.typography.body1.lineHeight,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",[a.breakpoints.down("sm")]:{fontSize:a.typography.body1.fontSize}})),Aa=o(w,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:e})=>({fontSize:q[e].usernameSize,fontWeight:a.typography.fontWeightRegular||400,color:a.palette.grey[600],lineHeight:a.typography.body2.lineHeight,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",[a.breakpoints.down("sm")]:{fontSize:a.typography.body2.fontSize}})),za=o(w,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:e})=>({fontSize:q[e].roleSize,fontWeight:a.typography.fontWeightMedium||500,color:a.palette.primary.main,lineHeight:a.typography.caption.lineHeight,marginTop:a.spacing(.5),overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",[a.breakpoints.down("sm")]:{fontSize:a.typography.caption.fontSize}})),La=o(p,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:e,$variant:t})=>{const s=_[e];return{display:"flex",flexDirection:H[t].statsDirection,gap:a.spacing(s.statsGap),marginTop:a.spacing(s.statsPaddingTop),paddingTop:a.spacing(s.statsPaddingTop),borderTop:`${a.spacing(.125)} solid ${a.palette.divider}`,justifyContent:t==="expanded"?"space-between":"center",flexWrap:"wrap",[a.breakpoints.down("sm")]:{flexDirection:"column",gap:a.spacing(1.5)}}}),Ta=o(p,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$variant:e})=>({display:"flex",flexDirection:e==="expanded"?"row":"column",alignItems:"center",gap:a.spacing(1),flex:e==="expanded"?"1 1 auto":"0 0 auto",justifyContent:e==="expanded"?"space-between":"center",padding:e==="expanded"?a.spacing(1,0):0,[a.breakpoints.down("sm")]:{flexDirection:"row",justifyContent:"space-between",width:"100%"}})),$a=o(p)(({theme:a})=>({display:"flex",alignItems:"center",justifyContent:"center",color:a.palette.primary.main,"& svg":{fontSize:a.spacing(2.5)}})),Ia=o(p,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$variant:e})=>({display:"flex",flexDirection:"column",alignItems:e==="expanded"?"flex-end":"center",gap:a.spacing(.25),[a.breakpoints.down("sm")]:{alignItems:"flex-end"}})),Ra=o(w)(({theme:a})=>({fontSize:a.typography.body1.fontSize,fontWeight:a.typography.fontWeightBold||600,color:a.palette.text.primary,lineHeight:1})),Va=o(w)(({theme:a})=>({fontSize:a.typography.caption.fontSize,fontWeight:a.typography.fontWeightRegular||400,color:a.palette.grey[500],lineHeight:1,textTransform:"capitalize"})),W=({icon:a,label:e,value:t,$variant:s,locale:c,"data-testid":n})=>{const i=typeof t=="number"?t.toLocaleString(c):t;return r.jsxs(Ta,{$variant:s,"data-testid":n,children:[r.jsx($a,{children:a}),r.jsxs(Ia,{$variant:s,children:[r.jsx(Ra,{children:i}),r.jsx(Va,{children:e})]})]})},g=({avatarUrl:a,name:e,username:t,role:s,stats:c=C.stats,size:n=C.size,variant:i=C.variant,showStats:u=C.showStats,locale:h,className:f,"data-testid":d="profile-card",...V})=>{if(!e||!t)throw new Error('ProfileCard: "name" and "username" are required props and cannot be empty.');const y=ba,v=Ca(e),x=h||(typeof navigator<"u"?navigator.language:void 0),N=l=>{if(l===0)return"-";const m=l%10,b=l%100;return b>=11&&b<=13?`${l}th`:m===1?`${l}st`:m===2?`${l}nd`:m===3?`${l}rd`:`${l}th`};return r.jsxs(ka,{className:f,"data-testid":d,$size:n,$variant:i,role:"article","aria-label":`Profile card for ${e}`,...V,children:[r.jsxs(Ua,{$size:n,$variant:i,children:[r.jsxs(ja,{src:a,alt:`${e}'s avatar`,$size:n,"data-testid":`${d}-avatar`,children:[!a&&v&&v,!a&&!v&&r.jsx(y,{})]}),r.jsxs(Pa,{$size:n,$variant:i,children:[r.jsx(Da,{variant:"h6",$size:n,title:e,"data-testid":`${d}-name`,children:e}),r.jsxs(Aa,{variant:"body2",$size:n,title:t,"data-testid":`${d}-username`,children:["@",t]}),s&&r.jsx(za,{variant:"body2",$size:n,title:s,"data-testid":`${d}-role`,children:s})]})]}),u&&r.jsxs(La,{$size:n,$variant:i,"data-testid":`${d}-stats`,role:"region","aria-label":"User statistics",children:[r.jsx(W,{icon:r.jsx(E.courses,{}),label:O.courses,value:c.courses,$variant:i,locale:x,"data-testid":`${d}-stat-courses`}),r.jsx(W,{icon:r.jsx(E.points,{}),label:O.points,value:c.points,$variant:i,locale:x,"data-testid":`${d}-stat-points`}),r.jsx(W,{icon:r.jsx(E.ranking,{}),label:O.ranking,value:N(c.ranking),$variant:i,locale:x,"data-testid":`${d}-stat-ranking`})]})]})};g.__docgenInfo={description:`Profile card component for displaying user information and statistics

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
}`,computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size variant of the card",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'expanded'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'expanded'"}]},description:"Layout variant",defaultValue:{value:"'default'",computed:!1}},showStats:{required:!1,tsType:{name:"boolean"},description:"Whether to show the stats section",defaultValue:{value:"true",computed:!1}},locale:{required:!1,tsType:{name:"string"},description:"Locale for number formatting (defaults to user's browser locale)"},className:{required:!1,tsType:{name:"string"},description:"Custom className"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test id for testing purposes",defaultValue:{value:"'profile-card'",computed:!1}}},composes:["Omit"]};const Ja={title:"Components/ProfileCard",component:g,parameters:{layout:"centered",docs:{description:{component:"A reusable profile card component for displaying user information and statistics."}}},argTypes:{name:{control:"text",description:"User full name",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},username:{control:"text",description:"User username/handle",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},avatarUrl:{control:"text",description:"URL for the user avatar image",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},role:{control:"text",description:"User role or title",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},size:{control:"select",options:Object.values(Sa),description:"Size variant of the card",table:{type:{summary:"small | medium | large"},defaultValue:{summary:"medium"}}},variant:{control:"select",options:Object.values(wa),description:"Layout variant of the card",table:{type:{summary:"default | compact | expanded"},defaultValue:{summary:"default"}}},showStats:{control:"boolean",description:"Whether to show the statistics section",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},stats:{control:"object",description:"User statistics object containing courses, points, and ranking",table:{type:{summary:"{ courses: number; points: number; ranking: number }"},defaultValue:{summary:"{ courses: 0, points: 0, ranking: 0 }"}}},className:{control:"text",description:"Custom CSS class name",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},"data-testid":{control:"text",description:"Test ID for testing purposes",table:{type:{summary:"string"},defaultValue:{summary:"profile-card"}}}},args:{name:"John Doe",username:"johndoe",role:"Senior Developer",avatarUrl:"https://i.pravatar.cc/150?img=3",size:"medium",variant:"default",showStats:!0,stats:{courses:12,points:3450,ranking:23}},tags:["autodocs"]},k={args:{name:"John Doe",username:"johndoe",role:"Senior Developer",avatarUrl:"https://i.pravatar.cc/150?img=3",size:"medium",variant:"default",showStats:!0,stats:{courses:12,points:3450,ranking:23}}},U={args:{name:"Sarah Johnson",username:"sarahjohnson",role:"Product Designer",avatarUrl:"https://i.pravatar.cc/150?img=5",stats:{courses:8,points:2150,ranking:42}}},j={args:{name:"Michael Chen",username:"mchen",role:"Data Scientist",avatarUrl:void 0,stats:{courses:15,points:4200,ranking:7}}},P={args:{name:"Alexander Christopher Montgomery III",username:"alexmontgomery",role:"Chief Technology Officer",avatarUrl:"https://i.pravatar.cc/150?img=8",stats:{courses:25,points:8950,ranking:1}}},D={args:{name:"Emily Davis",username:"emilyd",role:void 0,avatarUrl:"https://i.pravatar.cc/150?img=9",stats:{courses:5,points:1200,ranking:156}}},A={args:{name:"Robert Wilson",username:"rwilson",role:"Backend Engineer",avatarUrl:"https://i.pravatar.cc/150?img=12",showStats:!1}},z={args:{size:"small",name:"Lisa Anderson",username:"lisaa",role:"UX Researcher",avatarUrl:"https://i.pravatar.cc/150?img=16",stats:{courses:6,points:1800,ranking:89}}},L={args:{size:"large",name:"David Thompson",username:"dthompson",role:"DevOps Engineer",avatarUrl:"https://i.pravatar.cc/150?img=18",stats:{courses:10,points:3e3,ranking:34}}},T={args:{variant:"compact",name:"Jennifer Martinez",username:"jmartinez",role:"Frontend Developer",avatarUrl:"https://i.pravatar.cc/150?img=20",stats:{courses:9,points:2700,ranking:56}}},$={args:{variant:"expanded",name:"Thomas Brown",username:"tbrown",role:"Full Stack Developer",avatarUrl:"https://i.pravatar.cc/150?img=22",stats:{courses:14,points:4100,ranking:12}}},I={args:{name:"New User",username:"newbie",role:"Beginner",avatarUrl:void 0,stats:{courses:0,points:0,ranking:0}}},R={render:()=>r.jsxs(p,{sx:{display:"flex",flexDirection:"column",gap:4,padding:2},children:[r.jsxs(p,{children:[r.jsx("h3",{children:"Size Variations"}),r.jsxs(p,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[r.jsx(g,{size:"small",name:"Small Card",username:"smalluser",role:"Developer",avatarUrl:"https://i.pravatar.cc/150?img=1",stats:{courses:5,points:1500,ranking:45}}),r.jsx(g,{size:"medium",name:"Medium Card",username:"mediumuser",role:"Designer",avatarUrl:"https://i.pravatar.cc/150?img=2",stats:{courses:8,points:2400,ranking:23}}),r.jsx(g,{size:"large",name:"Large Card",username:"largeuser",role:"Manager",avatarUrl:"https://i.pravatar.cc/150?img=3",stats:{courses:12,points:3600,ranking:10}})]})]}),r.jsxs(p,{children:[r.jsx("h3",{children:"Variant Styles"}),r.jsxs(p,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[r.jsx(g,{variant:"default",name:"Default Layout",username:"defaultuser",role:"Engineer",avatarUrl:"https://i.pravatar.cc/150?img=4",stats:{courses:7,points:2100,ranking:34}}),r.jsx(g,{variant:"compact",name:"Compact Layout",username:"compactuser",role:"Analyst",avatarUrl:"https://i.pravatar.cc/150?img=5",stats:{courses:10,points:3e3,ranking:18}}),r.jsx(g,{variant:"expanded",name:"Expanded Layout",username:"expandeduser",role:"Architect",avatarUrl:"https://i.pravatar.cc/150?img=6",stats:{courses:15,points:4500,ranking:5}})]})]}),r.jsxs(p,{children:[r.jsx("h3",{children:"Edge Cases"}),r.jsxs(p,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[r.jsx(g,{name:"No Avatar User",username:"noavatar",role:"Tester",stats:{courses:3,points:900,ranking:123}}),r.jsx(g,{name:"Very Long Name That Should Be Truncated",username:"verylongusernamethatshouldalsobetruncated",role:"Senior Principal Staff Engineer",avatarUrl:"https://i.pravatar.cc/150?img=7",stats:{courses:20,points:6e3,ranking:2}}),r.jsx(g,{name:"No Stats User",username:"nostats",role:"Intern",avatarUrl:"https://i.pravatar.cc/150?img=8",showStats:!1})]})]})]}),parameters:{controls:{disable:!0}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Robert Wilson',
    username: 'rwilson',
    role: 'Backend Engineer',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    showStats: false
  }
}`,...A.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};const Ga=["Playground","Default","NoAvatar","LongName","NoRole","NoStats","SmallSize","LargeSize","CompactVariant","ExpandedVariant","NewUser","Gallery"];export{T as CompactVariant,U as Default,$ as ExpandedVariant,R as Gallery,L as LargeSize,P as LongName,I as NewUser,j as NoAvatar,D as NoRole,A as NoStats,k as Playground,z as SmallSize,Ga as __namedExportsOrder,Ja as default};
