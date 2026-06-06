import{F as k,N as E,A as r,d as M,c as R,E as t,l as u}from"./iframe-Cz1cSAwI.js";import{c as T}from"./createSvgIcon-DXZHRhwS.js";import{C as O}from"./CheckCircleOutline-CnLGaEgB.js";import{R as $}from"./RadioButtonUnchecked-C_Y8jKGp.js";import{g as D,b as A,c as N,e as d,r as _,m as F}from"./memoTheme-7lmrwlpD.js";import{B as p}from"./Box-CCulQnTS.js";import{L as V}from"./ListItemButton-AM54mk57.js";import{u as U}from"./useTheme-Dl4Kvnp4.js";import{u as X}from"./index-j-SxvfcM.js";import{T as m}from"./Typography-EJmNq0il.js";import{L as J}from"./List-C7lhbnxs.js";import{c as G}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{B as K}from"./ButtonBase-CICVepq0.js";import{D as q}from"./Drawer-yBiwcyN8.js";function Q(e){return D("MuiFab",e)}const B=A("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),Y=e=>{const{color:o,variant:a,classes:i,size:c}=e,n={root:["root",a,`size${R(c)}`,o==="inherit"?"colorInherit":o]},l=N(n,Q,i);return{...i,...l}},Z=d(K,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>_(e)||e==="classes",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,o[a.variant],o[`size${R(a.size)}`],a.color==="inherit"&&o.colorInherit,o[R(a.size)],o[a.color]]}})(F(({theme:e})=>({...e.typography.button,minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(e.vars||e).zIndex.fab,boxShadow:(e.vars||e).shadows[6],"&:active":{boxShadow:(e.vars||e).shadows[12]},color:e.vars?e.vars.palette.grey[900]:e.palette.getContrastText?.(e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],"&:hover":{backgroundColor:(e.vars||e).palette.grey.A100,"@media (hover: none)":{backgroundColor:(e.vars||e).palette.grey[300]},textDecoration:"none"},[`&.${B.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]},variants:[{props:{size:"small"},style:{width:40,height:40}},{props:{size:"medium"},style:{width:48,height:48}},{props:{variant:"extended"},style:{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48}},{props:{variant:"extended",size:"small"},style:{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34}},{props:{variant:"extended",size:"medium"},style:{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40}},{props:{color:"inherit"},style:{color:"inherit"}}]})),F(({theme:e})=>({variants:[...Object.entries(e.palette).filter(G(["dark","contrastText"])).map(([o])=>({props:{color:o},style:{color:(e.vars||e).palette[o].contrastText,backgroundColor:(e.vars||e).palette[o].main,"&:hover":{backgroundColor:(e.vars||e).palette[o].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[o].main}}}}))]})),F(({theme:e})=>({[`&.${B.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}}))),ee=k.forwardRef(function(o,a){const i=E({props:o,name:"MuiFab"}),{children:c,className:n,color:l="default",component:x="button",disabled:v=!1,disableFocusRipple:P=!1,focusVisibleClassName:w,size:s="large",variant:I="circular",...C}=i,L={...i,color:l,component:x,disabled:v,disableFocusRipple:P,size:s,variant:I},z=Y(L);return r.jsx(Z,{className:M(z.root,n),component:x,disabled:v,focusRipple:!P,focusVisibleClassName:M(z.focusVisible,w),ownerState:L,ref:a,...C,classes:z,children:c})}),te=T(r.jsx("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5m0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5M7 19h14v-2H7zm0-6h14v-2H7zm0-8v2h14V5z"})),re=T(r.jsx("path",{d:"M7 11v2h10v-2zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}));function oe(e){return{Easy:"success",Medium:"warning",Hard:"error"}[e]}function se(e){return{Easy:t.colors.easy,Medium:t.colors.medium,Hard:t.colors.hard}[e]}function ae(e){return{solved:"success",attempted:"warning",unsolved:"disabled"}[e]}function H(e){return`${e.toFixed(1)}%`}function ie(e){const o={fontSize:`${t.dimensions.statusIconSize}px`},a=u.useCallback(n=>{const l=ae(n);return n==="solved"?u.createElement(O,{color:l,sx:o,"aria-label":"Solved"}):n==="attempted"?u.createElement(re,{color:l,sx:o,"aria-label":"Attempted"}):u.createElement($,{color:l,sx:o,"aria-label":"Unsolved"})},[]),i=u.useCallback(n=>oe(n),[]),c=u.useCallback(n=>n===e,[e]);return{getStatusIcon:a,getDifficultyColor:i,isSelected:c}}const ne=d(p)(()=>({width:t.dimensions.containerWidth,height:t.dimensions.containerHeight,backgroundColor:t.colors.background,borderRight:`${t.dimensions.borderRightWidth} solid ${t.colors.border}`,...t.layout.container})),le=d(p)(()=>({height:t.dimensions.headerHeight,padding:t.dimensions.headerPadding,borderBottom:`${t.dimensions.headerBorderBottomWidth} solid ${t.colors.border}`,display:"flex",alignItems:"flex-start",flexShrink:0,backgroundColor:t.colors.background})),de=d(p)(()=>({...t.layout.listWrapper,...t.layout.hideScrollbar})),ce=d(V,{shouldForwardProp:e=>e!=="isSelected"})(({isSelected:e})=>({height:t.dimensions.itemHeight,borderBottom:`${t.dimensions.itemBorderBottomWidth} solid ${t.colors.border}`,backgroundColor:e?t.colors.selectedBackground:t.colors.itemBackground,borderLeft:e?`${t.dimensions.selectedBorderLeftWidth} solid ${t.colors.selectedBorderColor}`:`${t.dimensions.selectedBorderLeftWidth} solid transparent`,paddingLeft:e?t.dimensions.selectedPaddingLeft:t.dimensions.itemPaddingX,paddingRight:t.dimensions.itemPaddingX,paddingTop:0,paddingBottom:0,gap:t.dimensions.iconTextGap,...t.layout.itemButton,"&:hover":{backgroundColor:e?t.colors.selectedBackground:"rgba(239,246,255,0.55)"},"&.Mui-focusVisible":{outline:`2px solid ${t.colors.selectedBorderColor}`,outlineOffset:"-2px"}})),pe=d(p)(()=>({display:"flex",alignItems:"center",justifyContent:"center",width:t.dimensions.statusIconSize,height:t.dimensions.statusIconSize,flexShrink:0})),me=d(p)(()=>({...t.layout.textColumn,gap:t.dimensions.rowGap})),ue=d(p)(()=>({...t.layout.inlineRow,gap:t.dimensions.rowGap,lineHeight:t.typography.problemTitle.lineHeight})),ge=d(p)(()=>({...t.layout.inlineRow,gap:t.dimensions.rowGap,lineHeight:t.typography.meta.lineHeight})),j=({problems:e,selectedProblemId:o,onSelectProblem:a})=>{const i=U(),c=X(i.breakpoints.down("md")),[n,l]=k.useState(!1),{getStatusIcon:x,isSelected:v}=ie(o??-1),P=s=>{const I=v(s.id),C=se(s.difficulty);return r.jsxs(ce,{isSelected:I,onClick:()=>{a(s.id),c&&l(!1)},"aria-current":I?"true":void 0,"aria-label":`Problem ${s.id}: ${s.title}, ${s.difficulty}, ${H(s.acceptanceRate)} acceptance rate`,"data-testid":`problem-item-${s.id}`,children:[r.jsx(pe,{children:x(s.status)}),r.jsxs(me,{children:[r.jsxs(ue,{children:[r.jsxs(m,{component:"span",sx:{fontFamily:t.typography.fontFamily,fontSize:t.typography.problemNumber.fontSize,fontWeight:t.typography.problemNumber.fontWeight,lineHeight:t.typography.problemNumber.lineHeight,letterSpacing:t.typography.problemNumber.letterSpacing,color:t.colors.problemNumber,flexShrink:0},children:[s.id,"."]}),r.jsx(m,{component:"span",sx:{fontFamily:t.typography.fontFamily,fontSize:t.typography.problemTitle.fontSize,fontWeight:t.typography.problemTitle.fontWeight,lineHeight:t.typography.problemTitle.lineHeight,letterSpacing:t.typography.problemTitle.letterSpacing,color:t.colors.problemTitle,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:s.title})]}),r.jsxs(ge,{children:[r.jsx(m,{component:"span",sx:{fontFamily:t.typography.fontFamily,fontSize:t.typography.meta.fontSize,fontWeight:t.typography.meta.fontWeight,lineHeight:t.typography.meta.lineHeight,letterSpacing:t.typography.meta.letterSpacing,color:C},children:s.difficulty}),r.jsx(m,{component:"span",sx:{fontFamily:t.typography.fontFamily,fontSize:t.typography.meta.fontSize,fontWeight:t.typography.meta.fontWeight,lineHeight:t.typography.meta.lineHeight,color:t.colors.bullet},children:"•"}),r.jsx(m,{component:"span",sx:{fontFamily:t.typography.fontFamily,fontSize:t.typography.meta.fontSize,fontWeight:t.typography.meta.fontWeight,lineHeight:t.typography.meta.lineHeight,letterSpacing:t.typography.meta.letterSpacing,color:t.colors.acceptanceRate},children:H(s.acceptanceRate)})]})]})]},s.id)},w=r.jsxs(r.Fragment,{children:[r.jsx(le,{children:r.jsx(m,{sx:{fontFamily:t.typography.fontFamily,fontSize:t.typography.header.fontSize,fontWeight:t.typography.header.fontWeight,lineHeight:t.typography.header.lineHeight,letterSpacing:t.typography.header.letterSpacing,color:t.colors.headerText},children:"Problems"})}),r.jsx(de,{children:r.jsx(J,{disablePadding:!0,"aria-label":"Problems list",children:e.length===0?r.jsx(p,{sx:{display:"flex",alignItems:"center",justifyContent:"center",height:i.spacing(20)},children:r.jsx(m,{sx:{fontFamily:t.typography.fontFamily,fontSize:t.typography.problemNumber.fontSize,color:t.colors.problemNumber},children:"No problems found."})}):e.map(P)})})]});return c?r.jsxs(r.Fragment,{children:[r.jsx(ee,{size:"medium",color:"primary","aria-label":"Open problems list",onClick:()=>l(!0),"data-testid":"problem-list-fab",sx:{position:"fixed",bottom:i.spacing(3),left:i.spacing(3),zIndex:i.zIndex.fab},children:r.jsx(te,{})}),r.jsx(q,{anchor:"left",open:n,onClose:()=>l(!1),"data-testid":"problem-list-drawer",PaperProps:{sx:{width:i.spacing(t.dimensions.drawerWidth),backgroundColor:t.colors.background,...t.layout.hideScrollbar}},children:w})]}):r.jsx(ne,{children:w})};j.__docgenInfo={description:"",methods:[],displayName:"ProblemList",props:{problems:{required:!0,tsType:{name:"Array",elements:[{name:"Problem"}],raw:"Problem[]"},description:""},selectedProblemId:{required:!1,tsType:{name:"number"},description:""},onSelectProblem:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""}}};const W=[{id:1,title:"Two Sum",difficulty:"Easy",acceptanceRate:49.2,status:"solved"},{id:2,title:"Add Two Numbers",difficulty:"Medium",acceptanceRate:41.8,status:"attempted"},{id:3,title:"Longest Substring Without Repeating Characters",difficulty:"Medium",acceptanceRate:33.9,status:"unsolved"},{id:4,title:"Median of Two Sorted Arrays",difficulty:"Hard",acceptanceRate:38.2,status:"unsolved"},{id:5,title:"Valid Parentheses",difficulty:"Easy",acceptanceRate:40.1,status:"unsolved"},{id:6,title:"Merge Two Sorted Lists",difficulty:"Easy",acceptanceRate:62.3,status:"unsolved"}],be={title:"pages/ProblemList",component:j,parameters:{layout:"fullscreen",docs:{description:{component:"Sidebar organism that renders a scrollable list of coding problems with status icons, difficulty labels, and acceptance rates."}}},argTypes:{problems:{table:{disable:!0}},onSelectProblem:{table:{disable:!0}},selectedProblemId:{control:"number",description:"ID of the currently selected problem"}}},S=e=>{const[o,a]=k.useState(e.selectedProblemId);return r.jsx(j,{...e,selectedProblemId:o,onSelectProblem:a})},g={args:{problems:W,selectedProblemId:1},render:e=>r.jsx(S,{...e})},b={args:{problems:[{id:1,title:"Solved Problem",difficulty:"Easy",acceptanceRate:60,status:"solved"},{id:2,title:"Attempted Problem",difficulty:"Medium",acceptanceRate:45,status:"attempted"},{id:3,title:"Unsolved Problem",difficulty:"Hard",acceptanceRate:30,status:"unsolved"}],selectedProblemId:-1},render:e=>r.jsx(S,{...e}),parameters:{docs:{description:{story:"Displays all three status icon states: solved (green check), attempted (amber minus), unsolved (grey circle)."}}}},h={args:{problems:W,selectedProblemId:3},render:e=>r.jsx(S,{...e}),parameters:{docs:{description:{story:"Problem 3 is pre-selected — highlighted with a blue 3.52 px left border and a light blue background (#EFF6FF)."}}}},y={args:{problems:W,selectedProblemId:1},render:e=>r.jsx(S,{...e}),parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"On mobile (< 768 px) the list is hidden inside a Drawer toggled by the floating Fab button."}}}},f={args:{problems:[],selectedProblemId:-1},render:e=>r.jsx(S,{...e}),parameters:{docs:{description:{story:"Empty state — rendered when the problems array is empty."}}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    problems: MOCK_PROBLEMS,
    selectedProblemId: 1
  },
  render: (args: JSX.IntrinsicAttributes & ProblemListProps) => <InteractiveWrapper {...args} />
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    problems: [{
      id: 1,
      title: 'Solved Problem',
      difficulty: 'Easy',
      acceptanceRate: 60.0,
      status: 'solved'
    }, {
      id: 2,
      title: 'Attempted Problem',
      difficulty: 'Medium',
      acceptanceRate: 45.0,
      status: 'attempted'
    }, {
      id: 3,
      title: 'Unsolved Problem',
      difficulty: 'Hard',
      acceptanceRate: 30.0,
      status: 'unsolved'
    }] satisfies Problem[],
    selectedProblemId: -1
  },
  render: (args: JSX.IntrinsicAttributes & ProblemListProps) => <InteractiveWrapper {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Displays all three status icon states: solved (green check), attempted (amber minus), unsolved (grey circle).'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    problems: MOCK_PROBLEMS,
    selectedProblemId: 3
  },
  render: (args: JSX.IntrinsicAttributes & ProblemListProps) => <InteractiveWrapper {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Problem 3 is pre-selected — highlighted with a blue 3.52 px left border and a light blue background (#EFF6FF).'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    problems: MOCK_PROBLEMS,
    selectedProblemId: 1
  },
  render: (args: JSX.IntrinsicAttributes & ProblemListProps) => <InteractiveWrapper {...args} />,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'On mobile (< 768 px) the list is hidden inside a Drawer toggled by the floating Fab button.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    problems: [],
    selectedProblemId: -1
  },
  render: (args: JSX.IntrinsicAttributes & ProblemListProps) => <InteractiveWrapper {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Empty state — rendered when the problems array is empty.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};const he=["Default","AllStatuses","SelectedItem","MobileDrawer","EmptyList"],We=Object.freeze(Object.defineProperty({__proto__:null,AllStatuses:b,Default:g,EmptyList:f,MobileDrawer:y,SelectedItem:h,__namedExportsOrder:he,default:be},Symbol.toStringTag,{value:"Module"}));export{b as A,g as D,f as E,y as M,We as P,h as S};
