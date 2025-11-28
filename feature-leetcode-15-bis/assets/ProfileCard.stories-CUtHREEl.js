import{j as e,a as _,b as ra,c as ta,P as v,t as q}from"./iframe-BxQYZeuC.js";import{c as w}from"./createSvgIcon-rkT8YObi.js";import{g as sa,a as na,s as i,c as oa,m as ia,B as d}from"./Box-Cr4pfvbt.js";import{C as Y}from"./Card-DAduTI_R.js";import{u as E}from"./useSlot-rFhjq9gd.js";import{T as C}from"./Typography-DjF0Daoj.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-BW4sRdQh.js";import"./useTheme-CpK7xzTP.js";import"./useForkRef-ClM57vvX.js";const la=w(e.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}));function ca(a){return sa("MuiAvatar",a)}na("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const pa=a=>{const{classes:r,variant:t,colorDefault:s}=a;return oa({root:["root",t,s&&"colorDefault"],img:["img"],fallback:["fallback"]},ca,r)},da=i("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(a,r)=>{const{ownerState:t}=a;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})(ia(({theme:a})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(a.vars||a).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(a.vars||a).palette.background.default,...a.vars?{backgroundColor:a.vars.palette.Avatar.defaultBg}:{backgroundColor:a.palette.grey[400],...a.applyStyles("dark",{backgroundColor:a.palette.grey[600]})}}}]}))),ua=i("img",{name:"MuiAvatar",slot:"Img"})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),ma=i(la,{name:"MuiAvatar",slot:"Fallback"})({width:"75%",height:"75%"});function ga({crossOrigin:a,referrerPolicy:r,src:t,srcSet:s}){const[o,n]=_.useState(!1);return _.useEffect(()=>{if(!t&&!s)return;n(!1);let l=!0;const p=new Image;return p.onload=()=>{l&&n("loaded")},p.onerror=()=>{l&&n("error")},p.crossOrigin=a,p.referrerPolicy=r,p.src=t,s&&(p.srcset=s),()=>{l=!1}},[a,r,t,s]),o}const fa=_.forwardRef(function(r,t){const s=ra({props:r,name:"MuiAvatar"}),{alt:o,children:n,className:l,component:p="div",slots:x={},slotProps:f={},imgProps:u,sizes:F,src:y,srcSet:h,variant:S="circular",...N}=s;let c=null;const m={...s,component:p,variant:S},b=ga({...u,...typeof f.img=="function"?f.img(m):f.img,src:y,srcSet:h}),G=y||h,J=G&&b!=="error";m.colorDefault=!J,delete m.ownerState;const B=pa(m),[K,X]=E("root",{ref:t,className:ta(B.root,l),elementType:da,externalForwardedProps:{slots:x,slotProps:f,component:p,...N},ownerState:m}),[Z,Q]=E("img",{className:B.img,elementType:ua,externalForwardedProps:{slots:x,slotProps:{img:{...u,...f.img}}},additionalProps:{alt:o,src:y,srcSet:h,sizes:F},ownerState:m}),[aa,ea]=E("fallback",{className:B.fallback,elementType:ma,externalForwardedProps:{slots:x,slotProps:f},shouldForwardComponentProp:!0,ownerState:m});return J?c=e.jsx(Z,{...Q}):n||n===0?c=n:G&&o?c=o[0]:c=e.jsx(aa,{...ea}),e.jsx(K,{...X,children:c})}),ha=w(e.jsx("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m14 0c0 1.3-.84 2.4-2 2.82V7h2z"})),va=w(e.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"})),xa=w(e.jsx("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z"})),ya=w(e.jsx("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})),Sa={small:"small",medium:"medium",large:"large"},wa={default:"default",compact:"compact",expanded:"expanded"},H={default:{direction:"column",textAlign:"center",statsDirection:"row"},compact:{direction:"row",textAlign:"left",statsDirection:"row"},expanded:{direction:"column",textAlign:"center",statsDirection:"column"}},k={size:"medium",variant:"default",showStats:!0,stats:{courses:0,points:0,ranking:0}},O={courses:xa,points:ya,ranking:ha},W={courses:"Courses Enrolled",points:"Points",ranking:"Ranking"},Ca=va,ba=a=>{if(!a||!a.trim())return"";const r=a.trim().split(/\s+/);return r.length===1?r[0].charAt(0).toUpperCase():(r[0].charAt(0)+r[r.length-1].charAt(0)).toUpperCase()},ka=i(d,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:r})=>{const t=v[r];return{width:t.outerContainerWidth,height:t.outerContainerHeight,padding:t.outerContainerPadding,display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing(t.userToStatsGap/8),backgroundColor:"transparent",border:"none",[a.breakpoints.down("sm")]:{width:"100%",height:"auto",gap:a.spacing(3)}}}),Ua=i(Y,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:r})=>{const t=v[r];return{width:t.userCardWidth,height:t.userCardHeight,padding:a.spacing(t.userCardPadding),borderRadius:a.spacing(2),boxShadow:a.shadows[2],transition:a.transitions.create(["box-shadow","transform"],{duration:a.transitions.duration.short}),display:"flex",flexDirection:"column",alignItems:"center","&:hover":{boxShadow:a.shadows[4],transform:`translateY(-${a.spacing(.25)})`},[a.breakpoints.down("sm")]:{width:"100%",height:"auto"}}}),ja=i(d,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$variant:r,$size:t})=>{const s=H[r],o=v[t];return{display:"flex",flexDirection:s.direction,alignItems:"center",gap:a.spacing(o.infoGap),width:"100%",[a.breakpoints.down("sm")]:{flexDirection:"column",gap:a.spacing(1.5)}}}),Pa=i(fa,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:r})=>{const t=v[r];return{width:t.avatarSize,height:t.avatarSize,backgroundColor:a.palette.primary.main,fontSize:`calc(${t.avatarSize}px * 0.4)`,fontWeight:a.typography.fontWeightBold||600,border:`${t.avatarBorder}px solid ${a.palette.background.paper}`,boxShadow:a.shadows[2],[a.breakpoints.down("sm")]:{width:80,height:80,fontSize:32}}}),Da=i(d,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$variant:r,$size:t})=>{const s=H[r],o=v[t];return{display:"flex",flexDirection:"column",gap:a.spacing(o.textGap),textAlign:s.textAlign,flex:r==="compact"?1:"initial",minWidth:0,width:"100%",[a.breakpoints.down("sm")]:{textAlign:"center"}}}),za=i(C,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:r})=>({fontSize:q[r].nameSize,fontWeight:a.typography.fontWeightBold||600,color:a.palette.text.primary,lineHeight:1.2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",[a.breakpoints.down("sm")]:{fontSize:a.typography.body1.fontSize}})),Aa=i(C,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:r})=>({fontSize:q[r].usernameSize,fontWeight:a.typography.fontWeightRegular||400,color:a.palette.grey[600],lineHeight:1.2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",[a.breakpoints.down("sm")]:{fontSize:a.typography.body2.fontSize}})),$a=i(C,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:r})=>({fontSize:q[r].roleSize,fontWeight:a.typography.fontWeightMedium||500,color:a.palette.grey[600],lineHeight:1.2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",[a.breakpoints.down("sm")]:{fontSize:a.typography.caption.fontSize}})),La=i(d,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:r,$variant:t})=>{const s=v[r];return{display:"flex",flexDirection:H[t].statsDirection,gap:a.spacing(s.statsGap/8),width:s.statsContainerWidth,height:s.statsContainerHeight,justifyContent:"center",[a.breakpoints.down("sm")]:{flexDirection:"row",width:"100%",height:"auto",gap:a.spacing(1)}}}),Ia=i(Y,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:r})=>{const t=v[r];return{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:t.statCardWidth,height:t.statCardHeight,padding:a.spacing(t.statPadding),backgroundColor:a.palette.background.paper,borderRadius:a.spacing(2),boxShadow:a.shadows[2],transition:a.transitions.create(["box-shadow","transform"],{duration:a.transitions.duration.short}),"&:hover":{boxShadow:a.shadows[4],transform:"translateY(-2px)"},[a.breakpoints.down("sm")]:{flex:1,width:"auto",minWidth:100,height:120,padding:a.spacing(1.5)}}}),Ra=i(d)(({theme:a})=>({display:"flex",alignItems:"center",justifyContent:"center",color:a.palette.primary.main,marginBottom:a.spacing(1),"& svg":{fontSize:a.spacing(3.5)}})),Ta=i(d,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a})=>({display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing(.5),textAlign:"center",width:"100%"})),Va=i(C)(({theme:a})=>({fontSize:a.typography.h5.fontSize,fontWeight:a.typography.fontWeightBold||700,color:a.palette.text.primary,lineHeight:1})),Fa=i(C)(({theme:a})=>({fontSize:a.typography.caption.fontSize,fontWeight:a.typography.fontWeightRegular||400,color:a.palette.grey[600],lineHeight:1.2,textTransform:"capitalize",whiteSpace:"nowrap"})),M=({icon:a,label:r,value:t,$variant:s,$size:o,locale:n,"data-testid":l})=>{const p=typeof t=="number"?t.toLocaleString(n):t;return e.jsxs(Ia,{$variant:s,$size:o,"data-testid":l,children:[e.jsx(Ra,{children:a}),e.jsxs(Ta,{$variant:s,children:[e.jsx(Va,{children:p}),e.jsx(Fa,{children:r})]})]})},g=({avatarUrl:a,name:r,username:t,role:s,stats:o=k.stats,size:n=k.size,variant:l=k.variant,showStats:p=k.showStats,locale:x,className:f,"data-testid":u="profile-card",...F})=>{if(!r||!t)throw new Error('ProfileCard: "name" and "username" are required props and cannot be empty.');const y=Ca,h=ba(r),S=x||(typeof navigator<"u"?navigator.language:void 0),N=c=>{if(c===0)return"-";const m=c%10,b=c%100;return b>=11&&b<=13?`${c}th`:m===1?`${c}st`:m===2?`${c}nd`:m===3?`${c}rd`:`${c}th`};return e.jsxs(ka,{className:f,"data-testid":u,$size:n,$variant:l,role:"article","aria-label":`Profile card for ${r}`,...F,children:[e.jsx(Ua,{$size:n,$variant:l,children:e.jsxs(ja,{$size:n,$variant:l,children:[e.jsxs(Pa,{src:a,alt:`${r}'s avatar`,$size:n,"data-testid":`${u}-avatar`,children:[!a&&h&&h,!a&&!h&&e.jsx(y,{})]}),e.jsxs(Da,{$size:n,$variant:l,children:[e.jsx(za,{variant:"h6",$size:n,title:r,"data-testid":`${u}-name`,children:r}),e.jsxs(Aa,{variant:"body2",$size:n,title:t,"data-testid":`${u}-username`,children:["@",t]}),s&&e.jsx($a,{variant:"body2",$size:n,title:s,"data-testid":`${u}-role`,children:s})]})]})}),p&&e.jsxs(La,{$size:n,$variant:l,"data-testid":`${u}-stats`,role:"region","aria-label":"User statistics",children:[e.jsx(M,{icon:e.jsx(O.courses,{}),label:W.courses,value:o.courses,$variant:l,$size:n,locale:S,"data-testid":`${u}-stat-courses`}),e.jsx(M,{icon:e.jsx(O.points,{}),label:W.points,value:o.points,$variant:l,$size:n,locale:S,"data-testid":`${u}-stat-points`}),e.jsx(M,{icon:e.jsx(O.ranking,{}),label:W.ranking,value:N(o.ranking),$variant:l,$size:n,locale:S,"data-testid":`${u}-stat-ranking`})]})]})};g.__docgenInfo={description:`Profile card component for displaying user information and statistics

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
}`,computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size variant of the card",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'expanded'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'expanded'"}]},description:"Layout variant",defaultValue:{value:"'default'",computed:!1}},showStats:{required:!1,tsType:{name:"boolean"},description:"Whether to show the stats section",defaultValue:{value:"true",computed:!1}},locale:{required:!1,tsType:{name:"string"},description:"Locale for number formatting (defaults to user's browser locale)"},className:{required:!1,tsType:{name:"string"},description:"Custom className"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test id for testing purposes",defaultValue:{value:"'profile-card'",computed:!1}}},composes:["Omit"]};const Ja={title:"Components/ProfileCard",component:g,parameters:{layout:"centered",docs:{description:{component:"A reusable profile card component for displaying user information and statistics."}}},argTypes:{name:{control:"text",description:"User full name",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},username:{control:"text",description:"User username/handle",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},avatarUrl:{control:"text",description:"URL for the user avatar image",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},role:{control:"text",description:"User role or title",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},size:{control:"select",options:Object.values(Sa),description:"Size variant of the card",table:{type:{summary:"small | medium | large"},defaultValue:{summary:"medium"}}},variant:{control:"select",options:Object.values(wa),description:"Layout variant of the card",table:{type:{summary:"default | compact | expanded"},defaultValue:{summary:"default"}}},showStats:{control:"boolean",description:"Whether to show the statistics section",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},stats:{control:"object",description:"User statistics object containing courses, points, and ranking",table:{type:{summary:"{ courses: number; points: number; ranking: number }"},defaultValue:{summary:"{ courses: 0, points: 0, ranking: 0 }"}}},className:{control:"text",description:"Custom CSS class name",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},"data-testid":{control:"text",description:"Test ID for testing purposes",table:{type:{summary:"string"},defaultValue:{summary:"profile-card"}}}},args:{name:"John Doe",username:"johndoe",role:"Senior Developer",avatarUrl:"https://i.pravatar.cc/150?img=3",size:"medium",variant:"default",showStats:!0,stats:{courses:12,points:3450,ranking:23}},tags:["autodocs"]},U={args:{name:"John Doe",username:"johndoe",role:"Senior Developer",avatarUrl:"https://i.pravatar.cc/150?img=3",size:"medium",variant:"default",showStats:!0,stats:{courses:12,points:3450,ranking:23}}},j={args:{name:"Sarah Johnson",username:"sarahjohnson",role:"Product Designer",avatarUrl:"https://i.pravatar.cc/150?img=5",stats:{courses:8,points:2150,ranking:42}}},P={args:{name:"Michael Chen",username:"mchen",role:"Data Scientist",avatarUrl:void 0,stats:{courses:15,points:4200,ranking:7}}},D={args:{name:"Alexander Christopher Montgomery III",username:"alexmontgomery",role:"Chief Technology Officer",avatarUrl:"https://i.pravatar.cc/150?img=8",stats:{courses:25,points:8950,ranking:1}}},z={args:{name:"Emily Davis",username:"emilyd",role:void 0,avatarUrl:"https://i.pravatar.cc/150?img=9",stats:{courses:5,points:1200,ranking:156}}},A={args:{name:"Robert Wilson",username:"rwilson",role:"Backend Engineer",avatarUrl:"https://i.pravatar.cc/150?img=12",showStats:!1}},$={args:{size:"small",name:"Lisa Anderson",username:"lisaa",role:"UX Researcher",avatarUrl:"https://i.pravatar.cc/150?img=16",stats:{courses:6,points:1800,ranking:89}}},L={args:{size:"large",name:"David Thompson",username:"dthompson",role:"DevOps Engineer",avatarUrl:"https://i.pravatar.cc/150?img=18",stats:{courses:10,points:3e3,ranking:34}}},I={args:{variant:"compact",name:"Jennifer Martinez",username:"jmartinez",role:"Frontend Developer",avatarUrl:"https://i.pravatar.cc/150?img=20",stats:{courses:9,points:2700,ranking:56}}},R={args:{variant:"expanded",name:"Thomas Brown",username:"tbrown",role:"Full Stack Developer",avatarUrl:"https://i.pravatar.cc/150?img=22",stats:{courses:14,points:4100,ranking:12}}},T={args:{name:"New User",username:"newbie",role:"Beginner",avatarUrl:void 0,stats:{courses:0,points:0,ranking:0}}},V={render:()=>e.jsxs(d,{sx:{display:"flex",flexDirection:"column",gap:4,padding:2},children:[e.jsxs(d,{children:[e.jsx("h3",{children:"Size Variations"}),e.jsxs(d,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[e.jsx(g,{size:"small",name:"Small Card",username:"smalluser",role:"Developer",avatarUrl:"https://i.pravatar.cc/150?img=1",stats:{courses:5,points:1500,ranking:45}}),e.jsx(g,{size:"medium",name:"Medium Card",username:"mediumuser",role:"Designer",avatarUrl:"https://i.pravatar.cc/150?img=2",stats:{courses:8,points:2400,ranking:23}}),e.jsx(g,{size:"large",name:"Large Card",username:"largeuser",role:"Manager",avatarUrl:"https://i.pravatar.cc/150?img=3",stats:{courses:12,points:3600,ranking:10}})]})]}),e.jsxs(d,{children:[e.jsx("h3",{children:"Variant Styles"}),e.jsxs(d,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[e.jsx(g,{variant:"default",name:"Default Layout",username:"defaultuser",role:"Engineer",avatarUrl:"https://i.pravatar.cc/150?img=4",stats:{courses:7,points:2100,ranking:34}}),e.jsx(g,{variant:"compact",name:"Compact Layout",username:"compactuser",role:"Analyst",avatarUrl:"https://i.pravatar.cc/150?img=5",stats:{courses:10,points:3e3,ranking:18}}),e.jsx(g,{variant:"expanded",name:"Expanded Layout",username:"expandeduser",role:"Architect",avatarUrl:"https://i.pravatar.cc/150?img=6",stats:{courses:15,points:4500,ranking:5}})]})]}),e.jsxs(d,{children:[e.jsx("h3",{children:"Edge Cases"}),e.jsxs(d,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[e.jsx(g,{name:"No Avatar User",username:"noavatar",role:"Tester",stats:{courses:3,points:900,ranking:123}}),e.jsx(g,{name:"Very Long Name That Should Be Truncated",username:"verylongusernamethatshouldalsobetruncated",role:"Senior Principal Staff Engineer",avatarUrl:"https://i.pravatar.cc/150?img=7",stats:{courses:20,points:6e3,ranking:2}}),e.jsx(g,{name:"No Stats User",username:"nostats",role:"Intern",avatarUrl:"https://i.pravatar.cc/150?img=8",showStats:!1})]})]})]}),parameters:{controls:{disable:!0}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Robert Wilson',
    username: 'rwilson',
    role: 'Backend Engineer',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    showStats: false
  }
}`,...A.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};const Ya=["Playground","Default","NoAvatar","LongName","NoRole","NoStats","SmallSize","LargeSize","CompactVariant","ExpandedVariant","NewUser","Gallery"];export{I as CompactVariant,j as Default,R as ExpandedVariant,V as Gallery,L as LargeSize,D as LongName,T as NewUser,P as NoAvatar,z as NoRole,A as NoStats,U as Playground,$ as SmallSize,Ya as __namedExportsOrder,Ja as default};
