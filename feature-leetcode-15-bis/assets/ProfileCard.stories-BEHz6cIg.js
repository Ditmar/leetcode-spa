import{j as r,a as M,b as te,c as re,P as c,t as x,v as w}from"./iframe-D9nDwxz0.js";import{c as G}from"./createSvgIcon-BCQf4ElU.js";import{g as ne,a as oe,s as i,c as se,m as ie,B as p}from"./Box-Dyjl_rFT.js";import{C as J}from"./Card-C6wDm3UX.js";import{u as V}from"./useSlot-DVhDLyA2.js";import{T as k}from"./Typography-DOHvB2lZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-CcNiRuii.js";import"./useTheme-CEHFpdHH.js";import"./useForkRef-B_a9BzW6.js";const le=G(r.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}));function de(e){return ne("MuiAvatar",e)}oe("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const pe=e=>{const{classes:a,variant:t,colorDefault:n}=e;return se({root:["root",t,n&&"colorDefault"],img:["img"],fallback:["fallback"]},de,a)},ce=i("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[t.variant],t.colorDefault&&a.colorDefault]}})(ie(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(e.vars||e).palette.background.default,...e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.grey[400],...e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})}}}]}))),me=i("img",{name:"MuiAvatar",slot:"Img"})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),ue=i(le,{name:"MuiAvatar",slot:"Fallback"})({width:"75%",height:"75%"});function ge({crossOrigin:e,referrerPolicy:a,src:t,srcSet:n}){const[l,o]=M.useState(!1);return M.useEffect(()=>{if(!t&&!n)return;o(!1);let s=!0;const m=new Image;return m.onload=()=>{s&&o("loaded")},m.onerror=()=>{s&&o("error")},m.crossOrigin=e,m.referrerPolicy=a,m.src=t,n&&(m.srcset=n),()=>{s=!1}},[e,a,t,n]),l}const he=M.forwardRef(function(a,t){const n=te({props:a,name:"MuiAvatar"}),{alt:l,children:o,className:s,component:m="div",slots:S={},slotProps:g={},imgProps:d,sizes:O,src:y,srcSet:f,variant:b="circular",...I}=n;let h=null;const v={...n,component:m,variant:b},Y=ge({...d,...typeof g.img=="function"?g.img(v):g.img,src:y,srcSet:f}),H=y||f,q=H&&Y!=="error";v.colorDefault=!q,delete v.ownerState;const T=pe(v),[K,X]=V("root",{ref:t,className:re(T.root,s),elementType:ce,externalForwardedProps:{slots:S,slotProps:g,component:m,...I},ownerState:v}),[Z,Q]=V("img",{className:T.img,elementType:me,externalForwardedProps:{slots:S,slotProps:{img:{...d,...g.img}}},additionalProps:{alt:l,src:y,srcSet:f,sizes:O},ownerState:v}),[ee,ae]=V("fallback",{className:T.fallback,elementType:ue,externalForwardedProps:{slots:S,slotProps:g},shouldForwardComponentProp:!0,ownerState:v});return q?h=r.jsx(Z,{...Q}):o||o===0?h=o:H&&l?h=l[0]:h=r.jsx(ee,{...ae}),r.jsx(K,{...X,children:h})}),xe=G(r.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"})),fe={small:"small",medium:"medium",large:"large"},ve={default:"default",compact:"compact",expanded:"expanded"},_={default:{direction:"column",textAlign:"center",statsDirection:"row"},compact:{direction:"column",textAlign:"center",statsDirection:"row"},expanded:{direction:"column",textAlign:"center",statsDirection:"row"}},C={size:"medium",variant:"default",showStats:!0,stats:{courses:0,points:0,ranking:0}},N={courses:"Courses Enrolled",points:"Points",ranking:"Ranking"},Se=xe,ye=e=>{if(!e||!e.trim())return"";const a=e.trim().split(/\s+/);return a.length===1?a[0].charAt(0).toUpperCase():(a[0].charAt(0)+a[a.length-1].charAt(0)).toUpperCase()},be=i(p,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({$size:e})=>{const a=c[e];return{width:"100%",maxWidth:`${a.outerContainerWidth}px`,height:`${a.outerContainerHeight}px`,padding:a.outerContainerPadding,display:"flex",margin:"0 auto",flexDirection:"column",alignItems:"center",gap:`${a.userToStatsGap}px`,backgroundColor:"transparent",border:"none",flexShrink:0,boxSizing:"border-box",[`@media (max-width: ${a.mobileBreakpoint-1}px)`]:{width:"100%",maxWidth:"100%",height:"auto",gap:"24px"},[`@media (min-width: ${a.mobileBreakpoint}px) and (max-width: ${a.tabletBreakpoint-1}px)`]:{maxWidth:"90%",height:"auto",gap:"32px"}}}),we=i(J,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$size:a})=>{const t=c[a];return{backgroundColor:x.statCardBackground,width:"100%",maxWidth:`${t.userCardWidth}px`,height:`${t.userCardHeight}px`,padding:`${t.userCardPadding}px`,borderRadius:`${t.userCardBorderRadius}px`,boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)",transition:e.transitions.create(["box-shadow","transform"],{duration:e.transitions.duration.short}),display:"block",flexDirection:"column",alignItems:"center",textOverflow:"ellipsis",flexShrink:0,boxSizing:"border-box","&:hover":{boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.15)",transform:"translateY(-2px)"},[`@media (max-width: ${t.mobileBreakpoint-1}px)`]:{width:"100%",maxWidth:"100%",height:"auto",padding:"16px"},[`@media (min-width: ${t.mobileBreakpoint}px) and (max-width: ${t.tabletBreakpoint-1}px)`]:{maxWidth:"95%",height:"auto",minHeight:"280px"}}}),ke=i(p,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({$variant:e,$size:a})=>{const t=_[e],n=c[a];return{display:"flex",flexDirection:t.direction,alignItems:"center",gap:`${n.infoGap}px`,...e==="compact"&&{[`@media (max-width: ${n.mobileBreakpoint-1}px)`]:{flexDirection:"column",alignItems:"center",textAlign:"center"}},[`@media (min-width: ${n.mobileBreakpoint}px) and (max-width: ${n.tabletBreakpoint-1}px)`]:{gap:`${Math.floor(n.infoGap*.8)}px`}}}),Ce=i(he,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$size:a})=>{const t=c[a];return{width:`${t.avatarSize}px`,height:`${t.avatarSize}px`,backgroundColor:"blue",fontSize:`calc(${t.avatarSize}px * 0.4)`,fontWeight:600,border:`${t.avatarBorder}px solid ${e.palette.background.paper}`,boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)",flexShrink:0,[`@media (max-width: ${t.mobileBreakpoint-1}px)`]:{width:"80px",height:"80px",fontSize:"32px"},[`@media (min-width: ${t.mobileBreakpoint}px) and (max-width: ${t.tabletBreakpoint-1}px)`]:{width:`${Math.floor(t.avatarSize*.9)}px`,height:`${Math.floor(t.avatarSize*.9)}px`,fontSize:`calc(${Math.floor(t.avatarSize*.9)}px * 0.4)`}}}),$e=i(p,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({$variant:e,$size:a})=>{const t=_[e],n=c[a];return{display:"flex",flexDirection:"column",gap:`${n.textGap}px`,textAlign:t.textAlign,flex:e==="compact"?1:"initial",minWidth:0,width:"100%",[`@media (max-width: ${n.mobileBreakpoint-1}px)`]:{textAlign:"center"},[`@media (min-width: ${n.mobileBreakpoint}px) and (max-width: ${n.tabletBreakpoint-1}px)`]:{textAlign:"center"}}}),Pe=i(k,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({$size:e})=>{const a=w[e],t=c[e];return{fontFamily:a.nameFont,fontSize:a.nameSize,fontWeight:a.nameWeight,color:x.textPrimary,lineHeight:1.2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"block",[`@media (max-width: ${t.mobileBreakpoint-1}px)`]:{fontSize:"1.125rem"},[`@media (min-width: ${t.mobileBreakpoint}px) and (max-width: ${t.tabletBreakpoint-1}px)`]:{fontSize:"1.25rem"}}}),Be=i(k,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({$size:e})=>{const a=w[e],t=c[e];return{fontFamily:a.usernameFont,fontSize:a.usernameSize,fontWeight:a.usernameWeight,color:x.textSecondary,lineHeight:1.2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"block",[`@media (max-width: ${t.mobileBreakpoint-1}px)`]:{fontSize:"0.875rem"},[`@media (min-width: ${t.mobileBreakpoint}px) and (max-width: ${t.tabletBreakpoint-1}px)`]:{fontSize:"0.9rem"}}}),Ue=i(k,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({$size:e})=>{const a=w[e],t=c[e];return{fontFamily:a.roleFont,fontSize:a.roleSize,fontWeight:a.roleWeight,color:x.textSecondary,lineHeight:1.2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"block",[`@media (max-width: ${t.mobileBreakpoint-1}px)`]:{fontSize:"0.75rem"},[`@media (min-width: ${t.mobileBreakpoint}px) and (max-width: ${t.tabletBreakpoint-1}px)`]:{fontSize:"0.8rem"}}}),Ae=i(p,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({$size:e,$variant:a})=>{const t=c[e];return{display:"flex",flexDirection:_[a].statsDirection,gap:`${t.statsGap}px`,width:"100%",maxWidth:`${t.statsContainerWidth}px`,height:`${t.statsContainerHeight}px`,justifyContent:"center",flexShrink:0,boxSizing:"border-box",[`@media (max-width: ${t.mobileBreakpoint-1}px)`]:{flexDirection:"row",width:"100%",maxWidth:"100%",height:"auto",gap:"8px",flexWrap:"wrap"},[`@media (min-width: ${t.mobileBreakpoint}px) and (max-width: ${t.tabletBreakpoint-1}px)`]:{maxWidth:"95%",gap:`${Math.floor(t.statsGap*.7)}px`}}}),De=i(J,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({$size:e})=>{const a=c[e];return{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:`${a.statCardWidth}px`,height:`${a.statCardHeight}px`,padding:`${a.statPadding}px`,backgroundColor:x.statCardBackground,border:`${a.statCardBorderWidth}px solid ${x.statCardBorder}`,borderRadius:`${a.statCardBorderRadius}px`,boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)",transition:"box-shadow 200ms ease-in-out, transform 200ms ease-in-out",flexShrink:0,boxSizing:"border-box","&:hover":{boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.15)",transform:"translateY(-2px)"},[`@media (max-width: ${a.mobileBreakpoint-1}px)`]:{flex:"1 1 calc(33.333% - 8px)",width:"auto",minWidth:"90px",maxWidth:"120px",height:"120px",padding:"12px"},[`@media (min-width: ${a.mobileBreakpoint}px) and (max-width: ${a.tabletBreakpoint-1}px)`]:{width:`${Math.floor(a.statCardWidth*.85)}px`,height:`${Math.floor(a.statCardHeight*.85)}px`,padding:`${Math.floor(a.statPadding*.8)}px`}}}),ze=i(p,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(()=>({display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",textAlign:"center",width:"100%"})),je=i(k,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({$size:e})=>{const a=w[e],t=c[e];return{fontFamily:a.statValueFont,fontSize:a.statValueSize,fontWeight:a.statValueWeight,lineHeight:a.statValueLineHeight,color:x.statValueColor,letterSpacing:"0",textAlign:"center",[`@media (max-width: ${t.mobileBreakpoint-1}px)`]:{fontSize:"1.5rem"},[`@media (min-width: ${t.mobileBreakpoint}px) and (max-width: ${t.tabletBreakpoint-1}px)`]:{fontSize:"2.25rem"}}}),Le=i(k,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({$size:e})=>{const a=w[e],t=c[e];return{fontFamily:a.statLabelFont,fontSize:a.statLabelSize,fontWeight:a.statLabelWeight,padding:a.statLabelPadding,lineHeight:a.statLabelLineHeight,color:x.statLabelColor,letterSpacing:"0",textAlign:"center",whiteSpace:"nowrap",[`@media (max-width: ${t.mobileBreakpoint-1}px)`]:{fontSize:"0.75rem"},[`@media (min-width: ${t.mobileBreakpoint}px) and (max-width: ${t.tabletBreakpoint-1}px)`]:{fontSize:"0.875rem"}}}),E=({label:e,value:a,$variant:t,$size:n,locale:l,"data-testid":o})=>{const s=typeof a=="number"?a.toLocaleString(l):a;return r.jsx(De,{$variant:t,$size:n,"data-testid":o,children:r.jsxs(ze,{$variant:t,children:[r.jsx(je,{$size:n,children:s}),r.jsx(Le,{$size:n,children:e})]})})},u=({avatarUrl:e,name:a,username:t,role:n,stats:l=C.stats,size:o=C.size,variant:s=C.variant,showStats:m=C.showStats,locale:S,className:g,"data-testid":d="profile-card",...O})=>{if(!a||!t)throw new Error('ProfileCard: "name" and "username" are required props and cannot be empty.');const y=Se,f=ye(a),b=S||(typeof navigator<"u"?navigator.language:void 0),I=h=>h===0?"-":`-${h}`;return r.jsxs(be,{className:g,"data-testid":d,$size:o,$variant:s,role:"article","aria-label":`Profile card for ${a}`,...O,children:[r.jsx(we,{$size:o,$variant:s,children:r.jsxs(ke,{$size:o,$variant:s,children:[r.jsxs(Ce,{src:e,alt:`${a}'s avatar`,$size:o,"data-testid":`${d}-avatar`,children:[!e&&f&&f,!e&&!f&&r.jsx(y,{})]}),r.jsxs($e,{$size:o,$variant:s,children:[r.jsx(Pe,{variant:"h6",$size:o,title:a,"data-testid":`${d}-name`,children:a}),r.jsxs(Be,{variant:"body2",$size:o,title:t,"data-testid":`${d}-username`,children:["@",t]}),n&&r.jsx(Ue,{variant:"body2",$size:o,title:n,"data-testid":`${d}-role`,children:n})]})]})}),m&&r.jsxs(Ae,{$size:o,$variant:s,"data-testid":`${d}-stats`,role:"region","aria-label":"User statistics",children:[r.jsx(E,{label:N.courses,value:l.courses,$variant:s,$size:o,locale:b,"data-testid":`${d}-stat-courses`}),r.jsx(E,{label:N.points,value:l.points,$variant:s,$size:o,locale:b,"data-testid":`${d}-stat-points`}),r.jsx(E,{label:N.ranking,value:I(l.ranking),$variant:s,$size:o,locale:b,"data-testid":`${d}-stat-ranking`})]})]})};u.__docgenInfo={description:`@component
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
}`,computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size variant of the card",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'expanded'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'expanded'"}]},description:"Layout variant",defaultValue:{value:"'default'",computed:!1}},showStats:{required:!1,tsType:{name:"boolean"},description:"Whether to show the stats section",defaultValue:{value:"true",computed:!1}},locale:{required:!1,tsType:{name:"string"},description:"Locale for number formatting (defaults to user's browser locale)"},className:{required:!1,tsType:{name:"string"},description:"Custom className"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test id for testing purposes",defaultValue:{value:"'profile-card'",computed:!1}}},composes:["Omit"]};const _e={title:"Components/ProfileCard",component:u,parameters:{layout:"centered",docs:{description:{component:"A reusable profile card component for displaying user information and statistics."}}},argTypes:{name:{control:"text",description:"User full name",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},username:{control:"text",description:"User username/handle",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},avatarUrl:{control:"text",description:"URL for the user avatar image",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},role:{control:"text",description:"User role or title",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},size:{control:"select",options:Object.values(fe),description:"Size variant of the card",table:{type:{summary:"small | medium | large"},defaultValue:{summary:"medium"}}},variant:{control:"select",options:Object.values(ve),description:"Layout variant of the card",table:{type:{summary:"default | compact | expanded"},defaultValue:{summary:"default"}}},showStats:{control:"boolean",description:"Whether to show the statistics section",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},stats:{control:"object",description:"User statistics object containing courses, points, and ranking",table:{type:{summary:"{ courses: number; points: number; ranking: number }"},defaultValue:{summary:"{ courses: 0, points: 0, ranking: 0 }"}}},className:{control:"text",description:"Custom CSS class name",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},"data-testid":{control:"text",description:"Test ID for testing purposes",table:{type:{summary:"string"},defaultValue:{summary:"profile-card"}}}},args:{name:"John Doe",username:"johndoe",role:"Senior Developer",avatarUrl:"https://i.pravatar.cc/150?img=3",size:"medium",variant:"default",showStats:!0,stats:{courses:3,points:850,ranking:135}},tags:["autodocs"]},$={args:{name:"John Doe",username:"johndoe",role:"Senior Developer",avatarUrl:"https://i.pravatar.cc/150?img=3",size:"medium",variant:"default",showStats:!0,stats:{courses:3,points:850,ranking:23}}},P={args:{name:"Sarah Johnson",username:"sarahjohnson",role:"Product Designer",avatarUrl:"https://i.pravatar.cc/150?img=5",stats:{courses:8,points:850,ranking:125}}},B={args:{name:"Michael Chen",username:"mchen",role:"Data Scientist",avatarUrl:void 0,stats:{courses:15,points:4200,ranking:7}}},U={args:{name:"Alexander Christopher Montgomery III",username:"alexmontgomery",role:"Chief Technology Officer",avatarUrl:"https://i.pravatar.cc/150?img=8",stats:{courses:25,points:8950,ranking:1}}},A={args:{name:"Emily Davis",username:"emilyd",role:void 0,avatarUrl:"https://i.pravatar.cc/150?img=9",stats:{courses:5,points:1200,ranking:156}}},D={args:{name:"Robert Wilson",username:"rwilson",role:"Backend Engineer",avatarUrl:"https://i.pravatar.cc/150?img=12",showStats:!1}},z={args:{size:"small",name:"Lisa Anderson",username:"lisaa",role:"UX Researcher",avatarUrl:"https://i.pravatar.cc/150?img=16",stats:{courses:6,points:1800,ranking:89}}},j={args:{size:"large",name:"David Thompson",username:"dthompson",role:"DevOps Engineer",avatarUrl:"https://i.pravatar.cc/150?img=18",stats:{courses:10,points:3e3,ranking:34}}},L={args:{variant:"compact",name:"Jennifer Martinez",username:"jmartinez",role:"Frontend Developer",avatarUrl:"https://i.pravatar.cc/150?img=20",stats:{courses:9,points:2700,ranking:56}}},F={args:{variant:"expanded",name:"Thomas Brown",username:"tbrown",role:"Full Stack Developer",avatarUrl:"https://i.pravatar.cc/150?img=22",stats:{courses:14,points:4100,ranking:12}}},R={args:{name:"New User",username:"newbie",role:"Beginner",avatarUrl:void 0,stats:{courses:0,points:0,ranking:0}}},W={render:()=>r.jsxs(p,{sx:{display:"flex",flexDirection:"column",gap:4,padding:2},children:[r.jsxs(p,{children:[r.jsx("h3",{children:"Size Variations"}),r.jsxs(p,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[r.jsx(u,{size:"small",name:"Small Card",username:"smalluser",role:"Developer",avatarUrl:"https://i.pravatar.cc/150?img=1",stats:{courses:5,points:1500,ranking:45}}),r.jsx(u,{size:"medium",name:"Medium Card",username:"mediumuser",role:"Designer",avatarUrl:"https://i.pravatar.cc/150?img=2",stats:{courses:8,points:2400,ranking:23}}),r.jsx(u,{size:"large",name:"Large Card",username:"largeuser",role:"Manager",avatarUrl:"https://i.pravatar.cc/150?img=3",stats:{courses:12,points:3600,ranking:10}})]})]}),r.jsxs(p,{children:[r.jsx("h3",{children:"Variant Styles"}),r.jsxs(p,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[r.jsx(u,{variant:"default",name:"Default Layout",username:"defaultuser",role:"Engineer",avatarUrl:"https://i.pravatar.cc/150?img=4",stats:{courses:7,points:2100,ranking:34}}),r.jsx(u,{variant:"compact",name:"Compact Layout",username:"compactuser",role:"Analyst",avatarUrl:"https://i.pravatar.cc/150?img=5",stats:{courses:10,points:3e3,ranking:18}}),r.jsx(u,{variant:"expanded",name:"Expanded Layout",username:"expandeduser",role:"Architect",avatarUrl:"https://i.pravatar.cc/150?img=6",stats:{courses:15,points:4500,ranking:5}})]})]}),r.jsxs(p,{children:[r.jsx("h3",{children:"Edge Cases"}),r.jsxs(p,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[r.jsx(u,{name:"No Avatar User",username:"noavatar",role:"Tester",stats:{courses:3,points:900,ranking:123}}),r.jsx(u,{name:"Very Long Name That Should Be Truncated",username:"verylongusernamethatshouldalsobetruncated",role:"Senior Principal Staff Engineer",avatarUrl:"https://i.pravatar.cc/150?img=7",stats:{courses:20,points:6e3,ranking:2}}),r.jsx(u,{name:"No Stats User",username:"nostats",role:"Intern",avatarUrl:"https://i.pravatar.cc/150?img=8",showStats:!1})]})]})]}),parameters:{controls:{disable:!0}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    username: 'johndoe',
    role: 'Senior Developer',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    size: 'medium',
    variant: 'default',
    showStats: true,
    stats: {
      courses: 3,
      points: 850,
      ranking: 23
    }
  }
}`,...$.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Sarah Johnson',
    username: 'sarahjohnson',
    role: 'Product Designer',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
    stats: {
      courses: 8,
      points: 850,
      ranking: 125
    }
  }
}`,...P.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Robert Wilson',
    username: 'rwilson',
    role: 'Backend Engineer',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    showStats: false
  }
}`,...D.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};const He=["Playground","Default","NoAvatar","LongName","NoRole","NoStats","SmallSize","LargeSize","CompactVariant","ExpandedVariant","NewUser","Gallery"];export{L as CompactVariant,P as Default,F as ExpandedVariant,W as Gallery,j as LargeSize,U as LongName,R as NewUser,B as NoAvatar,A as NoRole,D as NoStats,$ as Playground,z as SmallSize,He as __namedExportsOrder,_e as default};
