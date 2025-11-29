import{j as t,a as M,b as ea,c as ra,P as v,t as w}from"./iframe-C3ECDSQi.js";import{c as G}from"./createSvgIcon--yM-CKfx.js";import{g as ta,a as sa,s as l,c as na,m as oa,B as d}from"./Box-C10VFau2.js";import{C as J}from"./Card-CbqoQJFh.js";import{u as B}from"./useSlot-DVzndV6W.js";import{T as C}from"./Typography-C2oTD4F_.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-CHwRp0SK.js";import"./useTheme-BvIJG99C.js";import"./useForkRef-Dx7Hu_89.js";const ia=G(t.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}));function la(a){return ta("MuiAvatar",a)}sa("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const ca=a=>{const{classes:r,variant:e,colorDefault:s}=a;return na({root:["root",e,s&&"colorDefault"],img:["img"],fallback:["fallback"]},la,r)},pa=l("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(a,r)=>{const{ownerState:e}=a;return[r.root,r[e.variant],e.colorDefault&&r.colorDefault]}})(oa(({theme:a})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(a.vars||a).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(a.vars||a).palette.background.default,...a.vars?{backgroundColor:a.vars.palette.Avatar.defaultBg}:{backgroundColor:a.palette.grey[400],...a.applyStyles("dark",{backgroundColor:a.palette.grey[600]})}}}]}))),da=l("img",{name:"MuiAvatar",slot:"Img"})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),ua=l(ia,{name:"MuiAvatar",slot:"Fallback"})({width:"75%",height:"75%"});function ma({crossOrigin:a,referrerPolicy:r,src:e,srcSet:s}){const[o,n]=M.useState(!1);return M.useEffect(()=>{if(!e&&!s)return;n(!1);let i=!0;const u=new Image;return u.onload=()=>{i&&n("loaded")},u.onerror=()=>{i&&n("error")},u.crossOrigin=a,u.referrerPolicy=r,u.src=e,s&&(u.srcset=s),()=>{i=!1}},[a,r,e,s]),o}const ga=M.forwardRef(function(r,e){const s=ea({props:r,name:"MuiAvatar"}),{alt:o,children:n,className:i,component:u="div",slots:x={},slotProps:f={},imgProps:p,sizes:V,src:y,srcSet:h,variant:S="circular",...I}=s;let c=null;const m={...s,component:u,variant:S},b=ma({...p,...typeof f.img=="function"?f.img(m):f.img,src:y,srcSet:h}),q=y||h,H=q&&b!=="error";m.colorDefault=!H,delete m.ownerState;const O=ca(m),[Y,K]=B("root",{ref:e,className:ra(O.root,i),elementType:pa,externalForwardedProps:{slots:x,slotProps:f,component:u,...I},ownerState:m}),[X,Z]=B("img",{className:O.img,elementType:da,externalForwardedProps:{slots:x,slotProps:{img:{...p,...f.img}}},additionalProps:{alt:o,src:y,srcSet:h,sizes:V},ownerState:m}),[Q,aa]=B("fallback",{className:O.fallback,elementType:ua,externalForwardedProps:{slots:x,slotProps:f},shouldForwardComponentProp:!0,ownerState:m});return H?c=t.jsx(X,{...Z}):n||n===0?c=n:q&&o?c=o[0]:c=t.jsx(Q,{...aa}),t.jsx(Y,{...K,children:c})}),fa=G(t.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"})),ha={small:"small",medium:"medium",large:"large"},va={default:"default",compact:"compact",expanded:"expanded"},_={default:{direction:"column",textAlign:"center",statsDirection:"row"},compact:{direction:"row",textAlign:"left",statsDirection:"row"},expanded:{direction:"column",textAlign:"center",statsDirection:"row"}},k={size:"medium",variant:"default",showStats:!0,stats:{courses:0,points:0,ranking:0}},E={courses:"Courses Enrolled",points:"Points",ranking:"Ranking"},xa=fa,ya=a=>{if(!a||!a.trim())return"";const r=a.trim().split(/\s+/);return r.length===1?r[0].charAt(0).toUpperCase():(r[0].charAt(0)+r[r.length-1].charAt(0)).toUpperCase()},Sa=l(d,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:r})=>{const e=v[r];return{width:e.outerContainerWidth,height:e.outerContainerHeight,padding:e.outerContainerPadding,display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing(e.userToStatsGap/8),backgroundColor:"transparent",border:"none",[a.breakpoints.down("sm")]:{width:"100%",height:"auto",gap:a.spacing(3)}}}),wa=l(J,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:r})=>{const e=v[r];return{width:e.userCardWidth,height:e.userCardHeight,padding:a.spacing(e.userCardPadding),borderRadius:a.spacing(2),boxShadow:a.shadows[2],transition:a.transitions.create(["box-shadow","transform"],{duration:a.transitions.duration.short}),display:"flex",flexDirection:"column",alignItems:"center","&:hover":{boxShadow:a.shadows[4],transform:`translateY(-${a.spacing(.25)})`},[a.breakpoints.down("sm")]:{width:"100%",height:"auto"}}}),Ca=l(d,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$variant:r,$size:e})=>{const s=_[r],o=v[e];return{display:"flex",flexDirection:s.direction,alignItems:"center",gap:a.spacing(o.infoGap),width:"100%",[a.breakpoints.down("sm")]:{flexDirection:"column",gap:a.spacing(1.5)}}}),ba=l(ga,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:r})=>{const e=v[r];return{width:e.avatarSize,height:e.avatarSize,backgroundColor:a.palette.primary.main,fontSize:`calc(${e.avatarSize}px * 0.4)`,fontWeight:a.typography.fontWeightBold||600,border:`${e.avatarBorder}px solid ${a.palette.background.paper}`,boxShadow:a.shadows[2],[a.breakpoints.down("sm")]:{width:80,height:80,fontSize:32}}}),ka=l(d,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$variant:r,$size:e})=>{const s=_[r],o=v[e];return{display:"flex",flexDirection:"column",gap:a.spacing(o.textGap),textAlign:s.textAlign,flex:r==="compact"?1:"initial",minWidth:0,width:"100%",[a.breakpoints.down("sm")]:{textAlign:"center"}}}),Ua=l(C,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:r})=>({fontSize:w[r].nameSize,fontWeight:a.typography.fontWeightBold||600,color:a.palette.text.primary,lineHeight:1.2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",[a.breakpoints.down("sm")]:{fontSize:a.typography.body1.fontSize}})),Pa=l(C,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:r})=>({fontSize:w[r].usernameSize,fontWeight:a.typography.fontWeightRegular||400,color:a.palette.grey[600],lineHeight:1.2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",[a.breakpoints.down("sm")]:{fontSize:a.typography.body2.fontSize}})),Da=l(C,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:r})=>({fontSize:w[r].roleSize,fontWeight:a.typography.fontWeightMedium||500,color:a.palette.grey[600],lineHeight:1.2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",[a.breakpoints.down("sm")]:{fontSize:a.typography.caption.fontSize}})),Aa=l(d,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:r,$variant:e})=>{const s=v[r];return{display:"flex",flexDirection:_[e].statsDirection,gap:a.spacing(s.statsGap/8),width:s.statsContainerWidth,height:s.statsContainerHeight,justifyContent:"center",[a.breakpoints.down("sm")]:{flexDirection:"row",width:"100%",height:"auto",gap:a.spacing(1)}}}),ja=l(J,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:r})=>{const e=v[r];return{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:e.statCardWidth,height:e.statCardHeight,padding:a.spacing(e.statPadding),backgroundColor:a.palette.background.paper,borderRadius:a.spacing(2),boxShadow:a.shadows[2],transition:a.transitions.create(["box-shadow","transform"],{duration:a.transitions.duration.short}),"&:hover":{boxShadow:a.shadows[4],transform:"translateY(-2px)"},[a.breakpoints.down("sm")]:{flex:1,width:"auto",minWidth:100,height:120,padding:a.spacing(1.5)}}}),za=l(d,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a})=>({display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing(1),textAlign:"center",width:"100%"})),$a=l(C,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:r})=>{const e=w[r];return{fontFamily:e.statValueFont,fontSize:e.statValueSize,fontWeight:e.statValueWeight,lineHeight:e.statValueLineHeight,color:a.palette.text.primary,letterSpacing:"0",textAlign:"center"}}),La=l(C,{shouldForwardProp:a=>a.toString().indexOf("$")!==0})(({theme:a,$size:r})=>{const e=w[r];return{fontFamily:e.statLabelFont,fontSize:e.statLabelSize,fontWeight:e.statLabelWeight,lineHeight:e.statLabelLineHeight,color:a.palette.grey[600],letterSpacing:"0",textAlign:"center",whiteSpace:"nowrap"}}),W=({label:a,value:r,$variant:e,$size:s,locale:o,"data-testid":n})=>{const i=typeof r=="number"?r.toLocaleString(o):r;return t.jsx(ja,{$variant:e,$size:s,"data-testid":n,children:t.jsxs(za,{$variant:e,children:[t.jsx($a,{$size:s,children:i}),t.jsx(La,{$size:s,children:a})]})})},g=({avatarUrl:a,name:r,username:e,role:s,stats:o=k.stats,size:n=k.size,variant:i=k.variant,showStats:u=k.showStats,locale:x,className:f,"data-testid":p="profile-card",...V})=>{if(!r||!e)throw new Error('ProfileCard: "name" and "username" are required props and cannot be empty.');const y=xa,h=ya(r),S=x||(typeof navigator<"u"?navigator.language:void 0),I=c=>{if(c===0)return"-";const m=c%10,b=c%100;return b>=11&&b<=13?`${c}th`:m===1?`${c}st`:m===2?`${c}nd`:m===3?`${c}rd`:`${c}th`};return t.jsxs(Sa,{className:f,"data-testid":p,$size:n,$variant:i,role:"article","aria-label":`Profile card for ${r}`,...V,children:[t.jsx(wa,{$size:n,$variant:i,children:t.jsxs(Ca,{$size:n,$variant:i,children:[t.jsxs(ba,{src:a,alt:`${r}'s avatar`,$size:n,"data-testid":`${p}-avatar`,children:[!a&&h&&h,!a&&!h&&t.jsx(y,{})]}),t.jsxs(ka,{$size:n,$variant:i,children:[t.jsx(Ua,{variant:"h6",$size:n,title:r,"data-testid":`${p}-name`,children:r}),t.jsxs(Pa,{variant:"body2",$size:n,title:e,"data-testid":`${p}-username`,children:["@",e]}),s&&t.jsx(Da,{variant:"body2",$size:n,title:s,"data-testid":`${p}-role`,children:s})]})]})}),u&&t.jsxs(Aa,{$size:n,$variant:i,"data-testid":`${p}-stats`,role:"region","aria-label":"User statistics",children:[t.jsx(W,{label:E.courses,value:o.courses,$variant:i,$size:n,locale:S,"data-testid":`${p}-stat-courses`}),t.jsx(W,{label:E.points,value:o.points,$variant:i,$size:n,locale:S,"data-testid":`${p}-stat-points`}),t.jsx(W,{label:E.ranking,value:I(o.ranking),$variant:i,$size:n,locale:S,"data-testid":`${p}-stat-ranking`})]})]})};g.__docgenInfo={description:`Profile card component for displaying user information and statistics

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
}`,computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size variant of the card",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'expanded'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'expanded'"}]},description:"Layout variant",defaultValue:{value:"'default'",computed:!1}},showStats:{required:!1,tsType:{name:"boolean"},description:"Whether to show the stats section",defaultValue:{value:"true",computed:!1}},locale:{required:!1,tsType:{name:"string"},description:"Locale for number formatting (defaults to user's browser locale)"},className:{required:!1,tsType:{name:"string"},description:"Custom className"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test id for testing purposes",defaultValue:{value:"'profile-card'",computed:!1}}},composes:["Omit"]};const Ma={title:"Components/ProfileCard",component:g,parameters:{layout:"centered",docs:{description:{component:"A reusable profile card component for displaying user information and statistics."}}},argTypes:{name:{control:"text",description:"User full name",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},username:{control:"text",description:"User username/handle",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},avatarUrl:{control:"text",description:"URL for the user avatar image",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},role:{control:"text",description:"User role or title",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},size:{control:"select",options:Object.values(ha),description:"Size variant of the card",table:{type:{summary:"small | medium | large"},defaultValue:{summary:"medium"}}},variant:{control:"select",options:Object.values(va),description:"Layout variant of the card",table:{type:{summary:"default | compact | expanded"},defaultValue:{summary:"default"}}},showStats:{control:"boolean",description:"Whether to show the statistics section",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},stats:{control:"object",description:"User statistics object containing courses, points, and ranking",table:{type:{summary:"{ courses: number; points: number; ranking: number }"},defaultValue:{summary:"{ courses: 0, points: 0, ranking: 0 }"}}},className:{control:"text",description:"Custom CSS class name",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},"data-testid":{control:"text",description:"Test ID for testing purposes",table:{type:{summary:"string"},defaultValue:{summary:"profile-card"}}}},args:{name:"John Doe",username:"johndoe",role:"Senior Developer",avatarUrl:"https://i.pravatar.cc/150?img=3",size:"medium",variant:"default",showStats:!0,stats:{courses:12,points:3450,ranking:23}},tags:["autodocs"]},U={args:{name:"John Doe",username:"johndoe",role:"Senior Developer",avatarUrl:"https://i.pravatar.cc/150?img=3",size:"medium",variant:"default",showStats:!0,stats:{courses:12,points:3450,ranking:23}}},P={args:{name:"Sarah Johnson",username:"sarahjohnson",role:"Product Designer",avatarUrl:"https://i.pravatar.cc/150?img=5",stats:{courses:8,points:2150,ranking:42}}},D={args:{name:"Michael Chen",username:"mchen",role:"Data Scientist",avatarUrl:void 0,stats:{courses:15,points:4200,ranking:7}}},A={args:{name:"Alexander Christopher Montgomery III",username:"alexmontgomery",role:"Chief Technology Officer",avatarUrl:"https://i.pravatar.cc/150?img=8",stats:{courses:25,points:8950,ranking:1}}},j={args:{name:"Emily Davis",username:"emilyd",role:void 0,avatarUrl:"https://i.pravatar.cc/150?img=9",stats:{courses:5,points:1200,ranking:156}}},z={args:{name:"Robert Wilson",username:"rwilson",role:"Backend Engineer",avatarUrl:"https://i.pravatar.cc/150?img=12",showStats:!1}},$={args:{size:"small",name:"Lisa Anderson",username:"lisaa",role:"UX Researcher",avatarUrl:"https://i.pravatar.cc/150?img=16",stats:{courses:6,points:1800,ranking:89}}},L={args:{size:"large",name:"David Thompson",username:"dthompson",role:"DevOps Engineer",avatarUrl:"https://i.pravatar.cc/150?img=18",stats:{courses:10,points:3e3,ranking:34}}},F={args:{variant:"compact",name:"Jennifer Martinez",username:"jmartinez",role:"Frontend Developer",avatarUrl:"https://i.pravatar.cc/150?img=20",stats:{courses:9,points:2700,ranking:56}}},R={args:{variant:"expanded",name:"Thomas Brown",username:"tbrown",role:"Full Stack Developer",avatarUrl:"https://i.pravatar.cc/150?img=22",stats:{courses:14,points:4100,ranking:12}}},T={args:{name:"New User",username:"newbie",role:"Beginner",avatarUrl:void 0,stats:{courses:0,points:0,ranking:0}}},N={render:()=>t.jsxs(d,{sx:{display:"flex",flexDirection:"column",gap:4,padding:2},children:[t.jsxs(d,{children:[t.jsx("h3",{children:"Size Variations"}),t.jsxs(d,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[t.jsx(g,{size:"small",name:"Small Card",username:"smalluser",role:"Developer",avatarUrl:"https://i.pravatar.cc/150?img=1",stats:{courses:5,points:1500,ranking:45}}),t.jsx(g,{size:"medium",name:"Medium Card",username:"mediumuser",role:"Designer",avatarUrl:"https://i.pravatar.cc/150?img=2",stats:{courses:8,points:2400,ranking:23}}),t.jsx(g,{size:"large",name:"Large Card",username:"largeuser",role:"Manager",avatarUrl:"https://i.pravatar.cc/150?img=3",stats:{courses:12,points:3600,ranking:10}})]})]}),t.jsxs(d,{children:[t.jsx("h3",{children:"Variant Styles"}),t.jsxs(d,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[t.jsx(g,{variant:"default",name:"Default Layout",username:"defaultuser",role:"Engineer",avatarUrl:"https://i.pravatar.cc/150?img=4",stats:{courses:7,points:2100,ranking:34}}),t.jsx(g,{variant:"compact",name:"Compact Layout",username:"compactuser",role:"Analyst",avatarUrl:"https://i.pravatar.cc/150?img=5",stats:{courses:10,points:3e3,ranking:18}}),t.jsx(g,{variant:"expanded",name:"Expanded Layout",username:"expandeduser",role:"Architect",avatarUrl:"https://i.pravatar.cc/150?img=6",stats:{courses:15,points:4500,ranking:5}})]})]}),t.jsxs(d,{children:[t.jsx("h3",{children:"Edge Cases"}),t.jsxs(d,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[t.jsx(g,{name:"No Avatar User",username:"noavatar",role:"Tester",stats:{courses:3,points:900,ranking:123}}),t.jsx(g,{name:"Very Long Name That Should Be Truncated",username:"verylongusernamethatshouldalsobetruncated",role:"Senior Principal Staff Engineer",avatarUrl:"https://i.pravatar.cc/150?img=7",stats:{courses:20,points:6e3,ranking:2}}),t.jsx(g,{name:"No Stats User",username:"nostats",role:"Intern",avatarUrl:"https://i.pravatar.cc/150?img=8",showStats:!1})]})]})]}),parameters:{controls:{disable:!0}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Robert Wilson',
    username: 'rwilson',
    role: 'Backend Engineer',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    showStats: false
  }
}`,...z.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};const _a=["Playground","Default","NoAvatar","LongName","NoRole","NoStats","SmallSize","LargeSize","CompactVariant","ExpandedVariant","NewUser","Gallery"];export{F as CompactVariant,P as Default,R as ExpandedVariant,N as Gallery,L as LargeSize,A as LongName,T as NewUser,D as NoAvatar,j as NoRole,z as NoStats,U as Playground,$ as SmallSize,_a as __namedExportsOrder,Ma as default};
