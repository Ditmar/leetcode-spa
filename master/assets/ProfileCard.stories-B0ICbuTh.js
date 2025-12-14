import{j as n,P as s,F as U,G as D,H as m,I as c}from"./iframe-UfvxaGrD.js";import{c as T}from"./createSvgIcon-go7H1R2N.js";import{s as o}from"./styled-CNiaJYvB.js";import{B as u}from"./Box-DDQIJR2Z.js";import{C as L}from"./Card-CfSkeCu-.js";import{A as _}from"./Avatar-CWzQ_K6Y.js";import{T as g}from"./Typography-B_Jk-STm.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-B2sSAihM.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./Paper-BhRic0tz.js";import"./useTheme-BDtuhLw5.js";import"./useSlot-BqONm6c8.js";import"./useForkRef-DwAdpbqC.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const N=T(n.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"})),E={small:"small",medium:"medium",large:"large"},H={default:"default",compact:"compact",expanded:"expanded"},F={default:{direction:"column",textAlign:"center",statsDirection:"row"},compact:{direction:"column",textAlign:"center",statsDirection:"row"},expanded:{direction:"column",textAlign:"center",statsDirection:"row"}},h={size:"medium",variant:"default",showStats:!0,stats:{courses:0,points:0,ranking:0}},A={courses:"Courses Enrolled",points:"Points",ranking:"Ranking"},q=N,G=t=>{if(!t||!t.trim())return"";const e=t.trim().split(/\s+/);return e.length===1?e[0].charAt(0).toUpperCase():(e[0].charAt(0)+e[e.length-1].charAt(0)).toUpperCase()},M=o(u,{shouldForwardProp:t=>t.toString().indexOf("$")!==0})(({$size:t})=>{const e=s[t];return{width:"100%",maxWidth:`${e.outerContainerWidth}px`,height:`${e.outerContainerHeight}px`,padding:e.outerContainerPadding,display:"flex",margin:"0 auto",flexDirection:"column",alignItems:"center",gap:`${e.userToStatsGap}px`,backgroundColor:"transparent",border:"none",flexShrink:0,boxSizing:"border-box",[`@media (max-width: ${e.mobileBreakpoint-1}px)`]:{width:`${e.mobile.outerContainerWidth}px`,maxWidth:`${e.mobile.outerContainerWidth}px`,height:"auto",margin:"0 auto",padding:0,gap:`${e.mobile.gap}px`},[`@media (min-width: ${e.mobileBreakpoint}px) and (max-width: ${e.tabletBreakpoint-1}px)`]:{width:`${e.tablet.outerContainerWidth}px`,maxWidth:`${e.tablet.outerContainerWidth}px`,height:`${e.outerContainerHeight}px`,gap:`${e.tablet.gap}px`}}}),J=o(L,{shouldForwardProp:t=>t.toString().indexOf("$")!==0})(({theme:t,$size:e})=>{const a=s[e],r=D,l=U;return{backgroundColor:m.userCardBackground,width:"100%",maxWidth:`${a.userCardWidth}px`,height:`${a.userCardHeight}px`,padding:`${a.userCardPadding}px`,borderRadius:`${a.userCardBorderRadius}px`,boxShadow:r.card.default,transition:t.transitions.create([...l.properties],{duration:l.duration,easing:l.easing}),display:"block",flexDirection:"column",alignItems:"center",textOverflow:"ellipsis",flexShrink:0,boxSizing:"border-box","&:hover":{boxShadow:r.card.hover,transform:`translateY(${l.hover.translateY})`},[`@media (max-width: ${a.mobileBreakpoint-1}px)`]:{width:`${a.mobile.userCardWidth}px`,maxWidth:`${a.mobile.userCardWidth}px`,height:`${a.mobile.userCardHeight}px`,padding:`${a.mobile.userCardPadding}px`},[`@media (min-width: ${a.mobileBreakpoint}px) and (max-width: ${a.tabletBreakpoint-1}px)`]:{width:`${a.tablet.userCardWidth}px`,maxWidth:`${a.tablet.userCardWidth}px`,height:`${a.tablet.userCardHeight}px`,padding:`${a.tablet.userCardPadding}px`}}}),Y=o(u,{shouldForwardProp:t=>t.toString().indexOf("$")!==0})(({$variant:t,$size:e})=>{const a=F[t],r=s[e];return{display:"flex",flexDirection:a.direction,alignItems:"center",gap:`${r.infoGap}px`,width:"100%",...t==="compact"&&{[`@media (max-width: ${r.mobileBreakpoint-1}px)`]:{flexDirection:"column",alignItems:"center",textAlign:"center"}},[`@media (min-width: ${r.mobileBreakpoint}px) and (max-width: ${r.tabletBreakpoint-1}px)`]:{gap:`${r.tablet.gap}px`}}}),K=o(_,{shouldForwardProp:t=>t.toString().indexOf("$")!==0})(({$size:t})=>{const e=s[t],a=D;return{width:`${e.avatarSize}px`,height:`${e.avatarSize}px`,backgroundColor:m.avatarBackground,fontSize:`calc(${e.avatarSize}px * 0.4)`,fontWeight:600,border:`${e.avatarBorder}px solid #FFFFFF`,boxShadow:a.avatar,flexShrink:0,[`@media (max-width: ${e.mobileBreakpoint-1}px)`]:{width:`${e.mobile.avatarSize}px`,height:`${e.mobile.avatarSize}px`,fontSize:`calc(${e.mobile.avatarSize}px * 0.4)`},[`@media (min-width: ${e.mobileBreakpoint}px) and (max-width: ${e.tabletBreakpoint-1}px)`]:{width:`${e.tablet.avatarSize}px`,height:`${e.tablet.avatarSize}px`,fontSize:`calc(${e.tablet.avatarSize}px * 0.4)`}}}),X=o(u,{shouldForwardProp:t=>t.toString().indexOf("$")!==0})(({$variant:t,$size:e})=>{const a=F[t],r=s[e];return{display:"flex",flexDirection:"column",gap:`${r.textGap}px`,textAlign:a.textAlign,flex:t==="compact"?1:"initial",minWidth:0,width:"100%",[`@media (max-width: ${r.tabletBreakpoint-1}px)`]:{textAlign:"center"}}}),Z=o(g,{shouldForwardProp:t=>t.toString().indexOf("$")!==0})(({$size:t})=>{const e=c[t],a=s[t];return{fontFamily:e.nameFont,fontSize:e.nameSize,fontWeight:e.nameWeight,color:m.textPrimary,lineHeight:1.2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"block",[`@media (max-width: ${a.mobileBreakpoint-1}px)`]:{fontSize:e.mobile.nameSize},[`@media (min-width: ${a.mobileBreakpoint}px) and (max-width: ${a.tabletBreakpoint-1}px)`]:{fontSize:e.tablet.nameSize}}}),Q=o(g,{shouldForwardProp:t=>t.toString().indexOf("$")!==0})(({$size:t})=>{const e=c[t],a=s[t];return{fontFamily:e.usernameFont,fontSize:e.usernameSize,fontWeight:e.usernameWeight,color:m.textSecondary,lineHeight:1.2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"block",[`@media (max-width: ${a.mobileBreakpoint-1}px)`]:{fontSize:e.mobile.usernameSize},[`@media (min-width: ${a.mobileBreakpoint}px) and (max-width: ${a.tabletBreakpoint-1}px)`]:{fontSize:e.tablet.usernameSize}}}),ee=o(g,{shouldForwardProp:t=>t.toString().indexOf("$")!==0})(({$size:t})=>{const e=c[t],a=s[t];return{fontFamily:e.roleFont,fontSize:e.roleSize,fontWeight:e.roleWeight,color:m.textSecondary,lineHeight:1.2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"block",[`@media (max-width: ${a.mobileBreakpoint-1}px)`]:{fontSize:e.mobile.roleSize},[`@media (min-width: ${a.mobileBreakpoint}px) and (max-width: ${a.tabletBreakpoint-1}px)`]:{fontSize:e.tablet.roleSize}}}),te=o(u,{shouldForwardProp:t=>t.toString().indexOf("$")!==0})(({$size:t,$variant:e})=>{const a=s[t];return{display:"flex",flexDirection:F[e].statsDirection,gap:`${a.statsGap}px`,width:`${a.statsContainerWidth}px`,height:`${a.statsContainerHeight}px`,justifyContent:"center",flexShrink:0,boxSizing:"border-box",[`@media (max-width: ${a.mobileBreakpoint-1}px)`]:{flexDirection:"row",width:`${a.mobile.statsContainerWidth}px`,height:"auto",gap:`${a.mobile.statsGap}px`,flexWrap:"wrap"},[`@media (min-width: ${a.mobileBreakpoint}px) and (max-width: ${a.tabletBreakpoint-1}px)`]:{width:`${a.tablet.statsContainerWidth}px`,height:`${a.tablet.statsContainerHeight}px`,gap:`${a.tablet.statsGap}px`}}}),ae=o(L,{shouldForwardProp:t=>t.toString().indexOf("$")!==0})(({$size:t})=>{const e=s[t],a=D,r=U;return{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:`${e.statCardWidth}px`,height:`${e.statCardHeight}px`,padding:`${e.statPadding}px`,backgroundColor:m.statCardBackground,border:m.statCardBorder,borderRadius:`${e.statCardBorderRadius}px`,boxShadow:a.card.default,transition:`box-shadow ${r.duration} ${r.easing}, transform ${r.duration} ${r.easing}`,flexShrink:0,boxSizing:"border-box","&:hover":{boxShadow:a.card.hover,transform:`translateY(${r.hover.translateY})`},[`@media (max-width: ${e.mobileBreakpoint-1}px)`]:{flex:"1 1 calc(33.333% - 8px)",width:"auto",minWidth:`${e.mobile.statMinWidth}px`,maxWidth:`${e.mobile.statMaxWidth}px`,height:`${e.mobile.statHeight}px`,padding:`${e.mobile.statPadding}px`},[`@media (min-width: ${e.mobileBreakpoint}px) and (max-width: ${e.tabletBreakpoint-1}px)`]:{width:`${e.tablet.statCardWidth}px`,height:`${e.tablet.statCardHeight}px`,padding:`${e.tablet.statPadding}px`}}}),re=o(u,{shouldForwardProp:t=>t.toString().indexOf("$")!==0})(()=>({display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",textAlign:"center",width:"100%"})),ne=o(g,{shouldForwardProp:t=>t.toString().indexOf("$")!==0})(({$size:t})=>{const e=c[t],a=s[t];return{fontFamily:e.statValueFont,fontSize:e.statValueSize,fontWeight:e.statValueWeight,lineHeight:e.statValueLineHeight,color:m.statValueColor,letterSpacing:"0",textAlign:"center",[`@media (max-width: ${a.mobileBreakpoint-1}px)`]:{fontSize:e.mobile.statValueSize},[`@media (min-width: ${a.mobileBreakpoint}px) and (max-width: ${a.tabletBreakpoint-1}px)`]:{fontSize:e.tablet.statValueSize}}}),ie=o(g,{shouldForwardProp:t=>t.toString().indexOf("$")!==0})(({$size:t})=>{const e=c[t],a=s[t];return{fontFamily:e.statLabelFont,fontSize:e.statLabelSize,fontWeight:e.statLabelWeight,padding:e.statLabelPadding,lineHeight:e.statLabelLineHeight,color:m.statLabelColor,letterSpacing:"0",textAlign:"center",whiteSpace:"nowrap",[`@media (max-width: ${a.mobileBreakpoint-1}px)`]:{fontSize:e.mobile.statLabelSize},[`@media (min-width: ${a.mobileBreakpoint}px) and (max-width: ${a.tabletBreakpoint-1}px)`]:{fontSize:e.tablet.statLabelSize}}}),B=({label:t,value:e,$variant:a,$size:r,locale:l,"data-testid":i})=>{const d=typeof e=="number"?e.toLocaleString(l):e;return n.jsx(ae,{$variant:a,$size:r,"data-testid":i,children:n.jsxs(re,{$variant:a,children:[n.jsx(ne,{$size:r,children:d}),n.jsx(ie,{$size:r,children:t})]})})},O=({avatarUrl:t,name:e,username:a,role:r,stats:l=h.stats,size:i=h.size,variant:d=h.variant,showStats:W=h.showStats,locale:j,className:R,"data-testid":p="profile-card",...V})=>{if(!e||!a)throw new Error('ProfileCard: "name" and "username" are required props and cannot be empty.');const I=q,z=G(e),P=j||(typeof navigator<"u"?navigator.language:void 0);return n.jsxs(M,{className:R,"data-testid":p,$size:i,$variant:d,role:"article","aria-label":`Profile card for ${e}`,...V,children:[n.jsx(J,{$size:i,$variant:d,children:n.jsxs(Y,{$size:i,$variant:d,children:[n.jsxs(K,{src:t,alt:`${e}'s avatar`,$size:i,"data-testid":`${p}-avatar`,children:[!t&&z&&z,!t&&!z&&n.jsx(I,{})]}),n.jsxs(X,{$size:i,$variant:d,children:[n.jsx(Z,{variant:"h6",$size:i,title:e,"data-testid":`${p}-name`,children:e}),n.jsxs(Q,{variant:"body2",$size:i,title:a,"data-testid":`${p}-username`,children:["@",a]}),r&&n.jsx(ee,{variant:"body2",$size:i,title:r,"data-testid":`${p}-role`,children:r})]})]})}),W&&n.jsxs(te,{$size:i,$variant:d,"data-testid":`${p}-stats`,role:"region","aria-label":"User statistics",children:[n.jsx(B,{label:A.courses,value:l.courses,$variant:d,$size:i,locale:P,"data-testid":`${p}-stat-courses`}),n.jsx(B,{label:A.points,value:l.points,$variant:d,$size:i,locale:P,"data-testid":`${p}-stat-points`}),n.jsx(B,{label:A.ranking,value:l.ranking,$variant:d,$size:i,locale:P,"data-testid":`${p}-stat-ranking`})]})]})};O.__docgenInfo={description:`@component
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
}`,computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size variant of the card",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'expanded'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'expanded'"}]},description:"Layout variant",defaultValue:{value:"'default'",computed:!1}},showStats:{required:!1,tsType:{name:"boolean"},description:"Whether to show the stats section",defaultValue:{value:"true",computed:!1}},locale:{required:!1,tsType:{name:"string"},description:"Locale for number formatting (defaults to user's browser locale)"},className:{required:!1,tsType:{name:"string"},description:"Custom className"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test id for testing purposes",defaultValue:{value:"'profile-card'",computed:!1}}},composes:["Omit"]};const $e={title:"Components/ProfileCard",component:O,parameters:{layout:"centered",docs:{description:{component:"A reusable profile card component for displaying user information and statistics."}}},argTypes:{name:{control:"text",description:"User full name",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},username:{control:"text",description:"User username/handle",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},avatarUrl:{control:"text",description:"URL for the user avatar image",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},role:{control:"text",description:"User role or title",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},size:{control:"select",options:Object.values(E),description:"Size variant of the card",table:{type:{summary:"small | medium | large"},defaultValue:{summary:"medium"}}},variant:{control:"select",options:Object.values(H),description:"Layout variant of the card",table:{type:{summary:"default | compact | expanded"},defaultValue:{summary:"default"}}},showStats:{control:"boolean",description:"Whether to show the statistics section",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},stats:{control:"object",description:"User statistics object containing courses, points, and ranking",table:{type:{summary:"{ courses: number; points: number; ranking: number }"},defaultValue:{summary:"{ courses: 0, points: 0, ranking: 0 }"}}},className:{control:"text",description:"Custom CSS class name",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},"data-testid":{control:"text",description:"Test ID for testing purposes",table:{type:{summary:"string"},defaultValue:{summary:"profile-card"}}}},args:{name:"John Doe",username:"johndoe",role:"Senior Developer",avatarUrl:"https://i.pravatar.cc/150?img=3",size:"medium",variant:"default",showStats:!0,stats:{courses:3,points:850,ranking:-135}},tags:["autodocs"]},x={args:{name:"John Doe",username:"johndoe",role:"Senior Developer",avatarUrl:"https://i.pravatar.cc/150?img=3",size:"medium",variant:"default",showStats:!0,stats:{courses:3,points:850,ranking:-23}}},f={args:{name:"Sarah Johnson",username:"sarahjohnson",role:"Product Designer",avatarUrl:"https://i.pravatar.cc/150?img=5",stats:{courses:3,points:850,ranking:-124}}},b={args:{name:"Michael Chen",username:"mchen",role:"Data Scientist",avatarUrl:void 0,stats:{courses:15,points:4200,ranking:-7}}},S={args:{name:"Alexander Christopher Montgomery III",username:"alexmontgomery",role:"Chief Technology Officer",avatarUrl:"https://i.pravatar.cc/150?img=8",stats:{courses:25,points:8950,ranking:-1}}},v={args:{name:"Emily Davis",username:"emilyd",role:void 0,avatarUrl:"https://i.pravatar.cc/150?img=9",stats:{courses:5,points:1200,ranking:-156}}},$={args:{size:"small",name:"Lisa Anderson",username:"lisaa",role:"UX Researcher",avatarUrl:"https://i.pravatar.cc/150?img=16",stats:{courses:6,points:1800,ranking:-89}}},w={args:{size:"large",name:"David Thompson",username:"dthompson",role:"DevOps Engineer",avatarUrl:"https://i.pravatar.cc/150?img=18",stats:{courses:10,points:3e3,ranking:-34}}},C={args:{variant:"compact",name:"Jennifer Martinez",username:"jmartinez",role:"Frontend Developer",avatarUrl:"https://i.pravatar.cc/150?img=20",stats:{courses:9,points:2700,ranking:-56}}},y={args:{variant:"expanded",name:"Thomas Brown",username:"tbrown",role:"Full Stack Developer",avatarUrl:"https://i.pravatar.cc/150?img=22",stats:{courses:14,points:4100,ranking:-12}}},k={args:{name:"New User",username:"newbie",role:"Beginner",avatarUrl:void 0,stats:{courses:0,points:0,ranking:0}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
      ranking: -23
    }
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Sarah Johnson',
    username: 'sarahjohnson',
    role: 'Product Designer',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
    stats: {
      courses: 3,
      points: 850,
      ranking: -124
    }
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Michael Chen',
    username: 'mchen',
    role: 'Data Scientist',
    avatarUrl: undefined,
    stats: {
      courses: 15,
      points: 4200,
      ranking: -7
    }
  }
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Alexander Christopher Montgomery III',
    username: 'alexmontgomery',
    role: 'Chief Technology Officer',
    avatarUrl: 'https://i.pravatar.cc/150?img=8',
    stats: {
      courses: 25,
      points: 8950,
      ranking: -1
    }
  }
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Emily Davis',
    username: 'emilyd',
    role: undefined,
    avatarUrl: 'https://i.pravatar.cc/150?img=9',
    stats: {
      courses: 5,
      points: 1200,
      ranking: -156
    }
  }
}`,...v.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    name: 'Lisa Anderson',
    username: 'lisaa',
    role: 'UX Researcher',
    avatarUrl: 'https://i.pravatar.cc/150?img=16',
    stats: {
      courses: 6,
      points: 1800,
      ranking: -89
    }
  }
}`,...$.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    name: 'David Thompson',
    username: 'dthompson',
    role: 'DevOps Engineer',
    avatarUrl: 'https://i.pravatar.cc/150?img=18',
    stats: {
      courses: 10,
      points: 3000,
      ranking: -34
    }
  }
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'compact',
    name: 'Jennifer Martinez',
    username: 'jmartinez',
    role: 'Frontend Developer',
    avatarUrl: 'https://i.pravatar.cc/150?img=20',
    stats: {
      courses: 9,
      points: 2700,
      ranking: -56
    }
  }
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'expanded',
    name: 'Thomas Brown',
    username: 'tbrown',
    role: 'Full Stack Developer',
    avatarUrl: 'https://i.pravatar.cc/150?img=22',
    stats: {
      courses: 14,
      points: 4100,
      ranking: -12
    }
  }
}`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};const we=["Playground","Default","NoAvatar","LongName","NoRole","SmallSize","LargeSize","CompactVariant","ExpandedVariant","NewUser"];export{C as CompactVariant,f as Default,y as ExpandedVariant,w as LargeSize,S as LongName,k as NewUser,b as NoAvatar,v as NoRole,x as Playground,$ as SmallSize,we as __namedExportsOrder,$e as default};
