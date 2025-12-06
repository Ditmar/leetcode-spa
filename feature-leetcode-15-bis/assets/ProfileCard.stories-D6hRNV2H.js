import{j as r,a as _,b as re,c as te,P as v,t as h,v as w}from"./iframe-DiOhoKTB.js";import{c as G}from"./createSvgIcon-MkQ0uKwA.js";import{g as se,a as ne,s as i,c as oe,m as ie,B as d}from"./Box-D0ew2_2d.js";import{C as J}from"./Card-BhSKyMY-.js";import{u as N}from"./useSlot-BmDCad_x.js";import{T as b}from"./Typography-CZRy2gYd.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-9TSYE8SZ.js";import"./useTheme-Dc6n7Pvg.js";import"./useForkRef-Dtseows7.js";const le=G(r.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}));function ce(e){return se("MuiAvatar",e)}ne("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const de=e=>{const{classes:a,variant:t,colorDefault:n}=e;return oe({root:["root",t,n&&"colorDefault"],img:["img"],fallback:["fallback"]},ce,a)},pe=i("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[t.variant],t.colorDefault&&a.colorDefault]}})(ie(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(e.vars||e).palette.background.default,...e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.grey[400],...e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})}}}]}))),me=i("img",{name:"MuiAvatar",slot:"Img"})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),ue=i(le,{name:"MuiAvatar",slot:"Fallback"})({width:"75%",height:"75%"});function ge({crossOrigin:e,referrerPolicy:a,src:t,srcSet:n}){const[l,s]=_.useState(!1);return _.useEffect(()=>{if(!t&&!n)return;s(!1);let o=!0;const p=new Image;return p.onload=()=>{o&&s("loaded")},p.onerror=()=>{o&&s("error")},p.crossOrigin=e,p.referrerPolicy=a,p.src=t,n&&(p.srcset=n),()=>{o=!1}},[e,a,t,n]),l}const he=_.forwardRef(function(a,t){const n=re({props:a,name:"MuiAvatar"}),{alt:l,children:s,className:o,component:p="div",slots:S={},slotProps:u={},imgProps:c,sizes:T,src:y,srcSet:f,variant:C="circular",...V}=n;let g=null;const x={...n,component:p,variant:C},Y=ge({...c,...typeof u.img=="function"?u.img(x):u.img,src:y,srcSet:f}),q=y||f,H=q&&Y!=="error";x.colorDefault=!H,delete x.ownerState;const I=de(x),[K,X]=N("root",{ref:t,className:te(I.root,o),elementType:pe,externalForwardedProps:{slots:S,slotProps:u,component:p,...V},ownerState:x}),[Z,Q]=N("img",{className:I.img,elementType:me,externalForwardedProps:{slots:S,slotProps:{img:{...c,...u.img}}},additionalProps:{alt:l,src:y,srcSet:f,sizes:T},ownerState:x}),[ee,ae]=N("fallback",{className:I.fallback,elementType:ue,externalForwardedProps:{slots:S,slotProps:u},shouldForwardComponentProp:!0,ownerState:x});return H?g=r.jsx(Z,{...Q}):s||s===0?g=s:q&&l?g=l[0]:g=r.jsx(ee,{...ae}),r.jsx(K,{...X,children:g})}),fe=G(r.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"})),xe={small:"small",medium:"medium",large:"large"},ve={default:"default",compact:"compact",expanded:"expanded"},M={default:{direction:"column",textAlign:"center",statsDirection:"row"},compact:{direction:"row",textAlign:"left",statsDirection:"row"},expanded:{direction:"column",textAlign:"center",statsDirection:"row"}},k={size:"medium",variant:"default",showStats:!0,stats:{courses:0,points:0,ranking:0}},E={courses:"Courses Enrolled",points:"Points",ranking:"Ranking"},Se=fe,ye=e=>{if(!e||!e.trim())return"";const a=e.trim().split(/\s+/);return a.length===1?a[0].charAt(0).toUpperCase():(a[0].charAt(0)+a[a.length-1].charAt(0)).toUpperCase()},Ce=i(d,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({$size:e})=>{const a=v[e];return{width:`${a.outerContainerWidth}px`,height:`${a.outerContainerHeight}px`,padding:a.outerContainerPadding,display:"flex",flexDirection:"column",alignItems:"center",gap:`${a.userToStatsGap}px`,backgroundColor:"transparent",border:"none",flexShrink:0,boxSizing:"border-box","@media (max-width: 600px)":{width:"100%",height:"auto",gap:"24px"}}}),we=i(J,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$size:a})=>{const t=v[a];return{backgroundColor:h.statCardBackground,width:`${t.userCardWidth}px`,height:`${t.userCardHeight}px`,padding:`${t.userCardPadding}px`,borderRadius:`${t.userCardBorderRadius}px`,boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)",transition:e.transitions.create(["box-shadow","transform"],{duration:e.transitions.duration.short}),display:"flex",flexDirection:"column",alignItems:"center",flexShrink:0,boxSizing:"border-box","&:hover":{boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.15)",transform:"translateY(-2px)"},"@media (max-width: 600px)":{width:"100%",height:"auto"}}}),be=i(d,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({$variant:e,$size:a})=>{const t=M[e],n=v[a];return{display:"flex",flexDirection:t.direction,alignItems:"center",gap:`${n.infoGap}px`,"@media (max-width: 600px)":{flexDirection:"column",gap:"12px"}}}),ke=i(he,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({theme:e,$size:a})=>{const t=v[a];return{width:`${t.avatarSize}px`,height:`${t.avatarSize}px`,backgroundColor:"blue",fontSize:`calc(${t.avatarSize}px * 0.4)`,fontWeight:600,border:`${t.avatarBorder}px solid ${e.palette.background.paper}`,boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)",flexShrink:0,"@media (max-width: 600px)":{width:"80px",height:"80px",fontSize:"32px"}}}),Ue=i(d,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({$variant:e,$size:a})=>{const t=M[e];return{display:"flex",flexDirection:"column",gap:`${v[a].textGap}px`,textAlign:t.textAlign,flex:e==="compact"?1:"initial",minWidth:0,width:"100%","@media (max-width: 600px)":{textAlign:"center"}}}),Pe=i(b,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({$size:e})=>{const a=w[e];return{fontFamily:a.nameFont,fontSize:a.nameSize,fontWeight:a.nameWeight,color:h.textPrimary,lineHeight:1.2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap","@media (max-width: 600px)":{fontSize:"1.125rem"}}}),Ae=i(b,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({$size:e})=>{const a=w[e];return{fontFamily:a.usernameFont,fontSize:a.usernameSize,fontWeight:a.usernameWeight,color:h.textSecondary,lineHeight:1.2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap","@media (max-width: 600px)":{fontSize:"0.875rem"}}}),$e=i(b,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({$size:e})=>{const a=w[e];return{fontFamily:a.roleFont,fontSize:a.roleSize,fontWeight:a.roleWeight,color:h.textSecondary,lineHeight:1.2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap","@media (max-width: 600px)":{fontSize:"0.75rem"}}}),De=i(d,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({$size:e,$variant:a})=>{const t=v[e];return{display:"flex",flexDirection:M[a].statsDirection,gap:`${t.statsGap}px`,width:`${t.statsContainerWidth}px`,height:`${t.statsContainerHeight}px`,justifyContent:"center",flexShrink:0,boxSizing:"border-box","@media (max-width: 600px)":{flexDirection:"row",width:"100%",height:"auto",gap:"8px"}}}),je=i(J,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({$size:e})=>{const a=v[e];return{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:`${a.statCardWidth}px`,height:`${a.statCardHeight}px`,padding:`${a.statPadding}px`,backgroundColor:h.statCardBackground,border:`${a.statCardBorderWidth}px solid ${h.statCardBorder}`,borderRadius:`${a.statCardBorderRadius}px`,boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)",transition:"box-shadow 200ms ease-in-out, transform 200ms ease-in-out",flexShrink:0,boxSizing:"border-box","&:hover":{boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.15)",transform:"translateY(-2px)"},"@media (max-width: 600px)":{flex:1,width:"auto",minWidth:"100px",height:"120px",padding:"12px"}}}),ze=i(d,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(()=>({display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",textAlign:"center",width:"100%"})),Fe=i(b,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({$size:e})=>{const a=w[e];return{fontFamily:a.statValueFont,fontSize:a.statValueSize,fontWeight:a.statValueWeight,lineHeight:a.statValueLineHeight,color:h.statValueColor,letterSpacing:"0",textAlign:"center"}}),Le=i(b,{shouldForwardProp:e=>e.toString().indexOf("$")!==0})(({$size:e})=>{const a=w[e];return{fontFamily:a.statLabelFont,fontSize:a.statLabelSize,fontWeight:a.statLabelWeight,lineHeight:a.statLabelLineHeight,color:h.statLabelColor,letterSpacing:"0",textAlign:"center",whiteSpace:"nowrap"}}),W=({label:e,value:a,$variant:t,$size:n,locale:l,"data-testid":s})=>{const o=typeof a=="number"?a.toLocaleString(l):a;return r.jsx(je,{$variant:t,$size:n,"data-testid":s,children:r.jsxs(ze,{$variant:t,children:[r.jsx(Fe,{$size:n,children:o}),r.jsx(Le,{$size:n,children:e})]})})},m=({avatarUrl:e,name:a,username:t,role:n,stats:l=k.stats,size:s=k.size,variant:o=k.variant,showStats:p=k.showStats,locale:S,className:u,"data-testid":c="profile-card",...T})=>{if(!a||!t)throw new Error('ProfileCard: "name" and "username" are required props and cannot be empty.');const y=Se,f=ye(a),C=S||(typeof navigator<"u"?navigator.language:void 0),V=g=>g===0?"-":`-${g}`;return r.jsxs(Ce,{className:u,"data-testid":c,$size:s,$variant:o,role:"article","aria-label":`Profile card for ${a}`,...T,children:[r.jsx(we,{$size:s,$variant:o,children:r.jsxs(be,{$size:s,$variant:o,children:[r.jsxs(ke,{src:e,alt:`${a}'s avatar`,$size:s,"data-testid":`${c}-avatar`,children:[!e&&f&&f,!e&&!f&&r.jsx(y,{})]}),r.jsxs(Ue,{$size:s,$variant:o,children:[r.jsx(Pe,{variant:"h6",$size:s,title:a,"data-testid":`${c}-name`,children:a}),r.jsxs(Ae,{variant:"body2",$size:s,title:t,"data-testid":`${c}-username`,children:["@",t]}),n&&r.jsx($e,{variant:"body2",$size:s,title:n,"data-testid":`${c}-role`,children:n})]})]})}),p&&r.jsxs(De,{$size:s,$variant:o,"data-testid":`${c}-stats`,role:"region","aria-label":"User statistics",children:[r.jsx(W,{label:E.courses,value:l.courses,$variant:o,$size:s,locale:C,"data-testid":`${c}-stat-courses`}),r.jsx(W,{label:E.points,value:l.points,$variant:o,$size:s,locale:C,"data-testid":`${c}-stat-points`}),r.jsx(W,{label:E.ranking,value:V(l.ranking),$variant:o,$size:s,locale:C,"data-testid":`${c}-stat-ranking`})]})]})};m.__docgenInfo={description:`@component
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
}`,computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size variant of the card",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'expanded'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'expanded'"}]},description:"Layout variant",defaultValue:{value:"'default'",computed:!1}},showStats:{required:!1,tsType:{name:"boolean"},description:"Whether to show the stats section",defaultValue:{value:"true",computed:!1}},locale:{required:!1,tsType:{name:"string"},description:"Locale for number formatting (defaults to user's browser locale)"},className:{required:!1,tsType:{name:"string"},description:"Custom className"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test id for testing purposes",defaultValue:{value:"'profile-card'",computed:!1}}},composes:["Omit"]};const Me={title:"Components/ProfileCard",component:m,parameters:{layout:"centered",docs:{description:{component:"A reusable profile card component for displaying user information and statistics."}}},argTypes:{name:{control:"text",description:"User full name",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},username:{control:"text",description:"User username/handle",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},avatarUrl:{control:"text",description:"URL for the user avatar image",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},role:{control:"text",description:"User role or title",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},size:{control:"select",options:Object.values(xe),description:"Size variant of the card",table:{type:{summary:"small | medium | large"},defaultValue:{summary:"medium"}}},variant:{control:"select",options:Object.values(ve),description:"Layout variant of the card",table:{type:{summary:"default | compact | expanded"},defaultValue:{summary:"default"}}},showStats:{control:"boolean",description:"Whether to show the statistics section",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},stats:{control:"object",description:"User statistics object containing courses, points, and ranking",table:{type:{summary:"{ courses: number; points: number; ranking: number }"},defaultValue:{summary:"{ courses: 0, points: 0, ranking: 0 }"}}},className:{control:"text",description:"Custom CSS class name",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},"data-testid":{control:"text",description:"Test ID for testing purposes",table:{type:{summary:"string"},defaultValue:{summary:"profile-card"}}}},args:{name:"John Doe",username:"johndoe",role:"Senior Developer",avatarUrl:"https://i.pravatar.cc/150?img=3",size:"medium",variant:"default",showStats:!0,stats:{courses:12,points:850,ranking:135}},tags:["autodocs"]},U={args:{name:"John Doe",username:"johndoe",role:"Senior Developer",avatarUrl:"https://i.pravatar.cc/150?img=3",size:"medium",variant:"default",showStats:!0,stats:{courses:12,points:850,ranking:23}}},P={args:{name:"Sarah Johnson",username:"sarahjohnson",role:"Product Designer",avatarUrl:"https://i.pravatar.cc/150?img=5",stats:{courses:8,points:850,ranking:125}}},A={args:{name:"Michael Chen",username:"mchen",role:"Data Scientist",avatarUrl:void 0,stats:{courses:15,points:4200,ranking:7}}},$={args:{name:"Alexander Christopher Montgomery III",username:"alexmontgomery",role:"Chief Technology Officer",avatarUrl:"https://i.pravatar.cc/150?img=8",stats:{courses:25,points:8950,ranking:1}}},D={args:{name:"Emily Davis",username:"emilyd",role:void 0,avatarUrl:"https://i.pravatar.cc/150?img=9",stats:{courses:5,points:1200,ranking:156}}},j={args:{name:"Robert Wilson",username:"rwilson",role:"Backend Engineer",avatarUrl:"https://i.pravatar.cc/150?img=12",showStats:!1}},z={args:{size:"small",name:"Lisa Anderson",username:"lisaa",role:"UX Researcher",avatarUrl:"https://i.pravatar.cc/150?img=16",stats:{courses:6,points:1800,ranking:89}}},F={args:{size:"large",name:"David Thompson",username:"dthompson",role:"DevOps Engineer",avatarUrl:"https://i.pravatar.cc/150?img=18",stats:{courses:10,points:3e3,ranking:34}}},L={args:{variant:"compact",name:"Jennifer Martinez",username:"jmartinez",role:"Frontend Developer",avatarUrl:"https://i.pravatar.cc/150?img=20",stats:{courses:9,points:2700,ranking:56}}},R={args:{variant:"expanded",name:"Thomas Brown",username:"tbrown",role:"Full Stack Developer",avatarUrl:"https://i.pravatar.cc/150?img=22",stats:{courses:14,points:4100,ranking:12}}},O={args:{name:"New User",username:"newbie",role:"Beginner",avatarUrl:void 0,stats:{courses:0,points:0,ranking:0}}},B={render:()=>r.jsxs(d,{sx:{display:"flex",flexDirection:"column",gap:4,padding:2},children:[r.jsxs(d,{children:[r.jsx("h3",{children:"Size Variations"}),r.jsxs(d,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[r.jsx(m,{size:"small",name:"Small Card",username:"smalluser",role:"Developer",avatarUrl:"https://i.pravatar.cc/150?img=1",stats:{courses:5,points:1500,ranking:45}}),r.jsx(m,{size:"medium",name:"Medium Card",username:"mediumuser",role:"Designer",avatarUrl:"https://i.pravatar.cc/150?img=2",stats:{courses:8,points:2400,ranking:23}}),r.jsx(m,{size:"large",name:"Large Card",username:"largeuser",role:"Manager",avatarUrl:"https://i.pravatar.cc/150?img=3",stats:{courses:12,points:3600,ranking:10}})]})]}),r.jsxs(d,{children:[r.jsx("h3",{children:"Variant Styles"}),r.jsxs(d,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[r.jsx(m,{variant:"default",name:"Default Layout",username:"defaultuser",role:"Engineer",avatarUrl:"https://i.pravatar.cc/150?img=4",stats:{courses:7,points:2100,ranking:34}}),r.jsx(m,{variant:"compact",name:"Compact Layout",username:"compactuser",role:"Analyst",avatarUrl:"https://i.pravatar.cc/150?img=5",stats:{courses:10,points:3e3,ranking:18}}),r.jsx(m,{variant:"expanded",name:"Expanded Layout",username:"expandeduser",role:"Architect",avatarUrl:"https://i.pravatar.cc/150?img=6",stats:{courses:15,points:4500,ranking:5}})]})]}),r.jsxs(d,{children:[r.jsx("h3",{children:"Edge Cases"}),r.jsxs(d,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[r.jsx(m,{name:"No Avatar User",username:"noavatar",role:"Tester",stats:{courses:3,points:900,ranking:123}}),r.jsx(m,{name:"Very Long Name That Should Be Truncated",username:"verylongusernamethatshouldalsobetruncated",role:"Senior Principal Staff Engineer",avatarUrl:"https://i.pravatar.cc/150?img=7",stats:{courses:20,points:6e3,ranking:2}}),r.jsx(m,{name:"No Stats User",username:"nostats",role:"Intern",avatarUrl:"https://i.pravatar.cc/150?img=8",showStats:!1})]})]})]}),parameters:{controls:{disable:!0}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
      points: 850,
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
      points: 850,
      ranking: 125
    }
  }
}`,...P.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Robert Wilson',
    username: 'rwilson',
    role: 'Backend Engineer',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    showStats: false
  }
}`,...j.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};const qe=["Playground","Default","NoAvatar","LongName","NoRole","NoStats","SmallSize","LargeSize","CompactVariant","ExpandedVariant","NewUser","Gallery"];export{L as CompactVariant,P as Default,R as ExpandedVariant,B as Gallery,F as LargeSize,$ as LongName,O as NewUser,A as NoAvatar,D as NoRole,j as NoStats,U as Playground,z as SmallSize,qe as __namedExportsOrder,Me as default};
