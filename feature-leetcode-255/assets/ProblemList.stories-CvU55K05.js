import{H as k,P as O,B as r,e as M,d as z,m as I,G as e}from"./iframe-DG01PJbI.js";import{c as H}from"./createSvgIcon-DHqrq6ow.js";import{C as A}from"./CheckCircleOutline-nTtGe_fF.js";import{R as E}from"./RadioButtonUnchecked-DYAxTEHD.js";import{g as $,b as _,c as D,e as d,r as N,m as F}from"./memoTheme-CEPVQlw5.js";import{B as p}from"./Box-X8jIaALa.js";import{L as U}from"./ListItemButton-DP18BD8j.js";import{u as V}from"./useTheme-BnB7pvkN.js";import{u as X}from"./index-6wblqZOf.js";import{T as m}from"./Typography-D3y6gvdE.js";import{L as G}from"./List-C19t9meJ.js";import{c as J}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{B as K}from"./ButtonBase-ChiD7IEi.js";import{D as q}from"./Drawer-BExFDGvB.js";function Q(t){return $("MuiFab",t)}const W=_("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),Y=t=>{const{color:o,variant:a,classes:i,size:c}=t,n={root:["root",a,`size${z(c)}`,o==="inherit"?"colorInherit":o]},l=D(n,Q,i);return{...i,...l}},Z=d(K,{name:"MuiFab",slot:"Root",shouldForwardProp:t=>N(t)||t==="classes",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,o[a.variant],o[`size${z(a.size)}`],a.color==="inherit"&&o.colorInherit,o[z(a.size)],o[a.color]]}})(F(({theme:t})=>({...t.typography.button,minHeight:36,transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(t.vars||t).zIndex.fab,boxShadow:(t.vars||t).shadows[6],"&:active":{boxShadow:(t.vars||t).shadows[12]},color:t.vars?t.vars.palette.grey[900]:t.palette.getContrastText?.(t.palette.grey[300]),backgroundColor:(t.vars||t).palette.grey[300],"&:hover":{backgroundColor:(t.vars||t).palette.grey.A100,"@media (hover: none)":{backgroundColor:(t.vars||t).palette.grey[300]},textDecoration:"none"},[`&.${W.focusVisible}`]:{boxShadow:(t.vars||t).shadows[6]},variants:[{props:{size:"small"},style:{width:40,height:40}},{props:{size:"medium"},style:{width:48,height:48}},{props:{variant:"extended"},style:{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48}},{props:{variant:"extended",size:"small"},style:{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34}},{props:{variant:"extended",size:"medium"},style:{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40}},{props:{color:"inherit"},style:{color:"inherit"}}]})),F(({theme:t})=>({variants:[...Object.entries(t.palette).filter(J(["dark","contrastText"])).map(([o])=>({props:{color:o},style:{color:(t.vars||t).palette[o].contrastText,backgroundColor:(t.vars||t).palette[o].main,"&:hover":{backgroundColor:(t.vars||t).palette[o].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[o].main}}}}))]})),F(({theme:t})=>({[`&.${W.disabled}`]:{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground}}))),ee=k.forwardRef(function(o,a){const i=O({props:o,name:"MuiFab"}),{children:c,className:n,color:l="default",component:u="button",disabled:g=!1,disableFocusRipple:v=!1,focusVisibleClassName:P,size:s="large",variant:w="circular",...C}=i,T={...i,color:l,component:u,disabled:g,disableFocusRipple:v,size:s,variant:w},R=Y(T);return r.jsx(Z,{className:M(R.root,n),component:u,disabled:g,focusRipple:!v,focusVisibleClassName:M(R.focusVisible,P),ownerState:T,ref:a,...C,classes:R,children:c})}),te=H(r.jsx("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5m0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5M7 19h14v-2H7zm0-6h14v-2H7zm0-8v2h14V5z"})),re=H(r.jsx("path",{d:"M7 11v2h10v-2zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"})),oe={solved:"success",attempted:"warning",unsolved:"disabled"},se={Easy:"success",Medium:"warning",Hard:"error"},L=[{id:1,title:"Two Sum",difficulty:"Easy",acceptanceRate:49.2,status:"solved"},{id:2,title:"Add Two Numbers",difficulty:"Medium",acceptanceRate:41.8,status:"attempted"},{id:3,title:"Longest Substring Without Repeating Characters",difficulty:"Medium",acceptanceRate:33.9,status:"unsolved"},{id:4,title:"Median of Two Sorted Arrays",difficulty:"Hard",acceptanceRate:38.2,status:"unsolved"},{id:5,title:"Valid Parentheses",difficulty:"Easy",acceptanceRate:40.1,status:"unsolved"},{id:6,title:"Merge Two Sorted Lists",difficulty:"Easy",acceptanceRate:62.3,status:"unsolved"}],ae={solved:A,attempted:re,unsolved:E},ie={solved:"Solved",attempted:"Attempted",unsolved:"Unsolved"};function ne(t){const o={fontSize:`${e.dimensions.statusIconSize}px`},a=I.useCallback(n=>{const l=ae[n],u=oe[n],g=ie[n];return I.createElement(l,{color:u,sx:o,"aria-label":g})},[]),i=I.useCallback(n=>se[n],[]),c=I.useCallback(n=>n===t,[t]);return{getStatusIcon:a,getDifficultyColor:i,isSelected:c}}const le=d(p)(()=>({width:e.dimensions.containerWidth,height:e.dimensions.containerHeight,backgroundColor:e.colors.background,borderRight:`${e.dimensions.borderRightWidth} solid ${e.colors.border}`,...e.layout.container})),de=d(p)(()=>({height:e.dimensions.headerHeight,padding:e.dimensions.headerPadding,borderBottom:`${e.dimensions.headerBorderBottomWidth} solid ${e.colors.border}`,display:"flex",alignItems:"flex-start",flexShrink:0,backgroundColor:e.colors.background})),ce=d(p)(()=>({...e.layout.listWrapper,...e.layout.hideScrollbar})),pe=d(U,{shouldForwardProp:t=>t!=="isSelected"})(({isSelected:t})=>({height:e.dimensions.itemHeight,borderBottom:`${e.dimensions.itemBorderBottomWidth} solid ${e.colors.border}`,backgroundColor:t?e.colors.selectedBackground:e.colors.itemBackground,borderLeft:t?`${e.dimensions.selectedBorderLeftWidth} solid ${e.colors.selectedBorderColor}`:`${e.dimensions.selectedBorderLeftWidth} solid transparent`,paddingLeft:t?e.dimensions.selectedPaddingLeft:e.dimensions.itemPaddingX,paddingRight:e.dimensions.itemPaddingX,paddingTop:0,paddingBottom:0,gap:e.dimensions.iconTextGap,...e.layout.itemButton,"&:hover":{backgroundColor:t?e.colors.selectedBackground:"rgba(239,246,255,0.55)"},"&.Mui-focusVisible":{outline:`2px solid ${e.colors.selectedBorderColor}`,outlineOffset:"-2px"}})),me=d(p)(()=>({display:"flex",alignItems:"center",justifyContent:"center",width:e.dimensions.statusIconSize,height:e.dimensions.statusIconSize,flexShrink:0})),ue=d(p)(()=>({...e.layout.textColumn,gap:e.dimensions.rowGap})),ge=d(p)(()=>({...e.layout.inlineRow,gap:e.dimensions.rowGap,lineHeight:e.typography.problemTitle.lineHeight})),be=d(p)(()=>({...e.layout.inlineRow,gap:e.dimensions.rowGap,lineHeight:e.typography.meta.lineHeight}));function he(t){return{Easy:e.colors.easy,Medium:e.colors.medium,Hard:e.colors.hard}[t]}function B(t){return`${t.toFixed(1)}%`}const j=({problems:t,selectedProblemId:o,onSelectProblem:a})=>{const i=V(),c=X(i.breakpoints.down("md")),[n,l]=k.useState(!1),{getStatusIcon:u,isSelected:g}=ne(o??-1),v=s=>{const w=g(s.id),C=he(s.difficulty);return r.jsxs(pe,{isSelected:w,onClick:()=>{a(s.id),c&&l(!1)},"aria-current":w?"true":void 0,"aria-label":`Problem ${s.id}: ${s.title}, ${s.difficulty}, ${B(s.acceptanceRate)} acceptance rate`,"data-testid":`problem-item-${s.id}`,children:[r.jsx(me,{children:u(s.status)}),r.jsxs(ue,{children:[r.jsxs(ge,{children:[r.jsxs(m,{component:"span",sx:{fontFamily:e.typography.fontFamily,fontSize:e.typography.problemNumber.fontSize,fontWeight:e.typography.problemNumber.fontWeight,lineHeight:e.typography.problemNumber.lineHeight,letterSpacing:e.typography.problemNumber.letterSpacing,color:e.colors.problemNumber,flexShrink:0},children:[s.id,"."]}),r.jsx(m,{component:"span",sx:{fontFamily:e.typography.fontFamily,fontSize:e.typography.problemTitle.fontSize,fontWeight:e.typography.problemTitle.fontWeight,lineHeight:e.typography.problemTitle.lineHeight,letterSpacing:e.typography.problemTitle.letterSpacing,color:e.colors.problemTitle,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:s.title})]}),r.jsxs(be,{children:[r.jsx(m,{component:"span",sx:{fontFamily:e.typography.fontFamily,fontSize:e.typography.meta.fontSize,fontWeight:e.typography.meta.fontWeight,lineHeight:e.typography.meta.lineHeight,letterSpacing:e.typography.meta.letterSpacing,color:C},children:s.difficulty}),r.jsx(m,{component:"span",sx:{fontFamily:e.typography.fontFamily,fontSize:e.typography.meta.fontSize,fontWeight:e.typography.meta.fontWeight,lineHeight:e.typography.meta.lineHeight,color:e.colors.bullet},children:"•"}),r.jsx(m,{component:"span",sx:{fontFamily:e.typography.fontFamily,fontSize:e.typography.meta.fontSize,fontWeight:e.typography.meta.fontWeight,lineHeight:e.typography.meta.lineHeight,letterSpacing:e.typography.meta.letterSpacing,color:e.colors.acceptanceRate},children:B(s.acceptanceRate)})]})]})]},s.id)},P=r.jsxs(r.Fragment,{children:[r.jsx(de,{children:r.jsx(m,{sx:{fontFamily:e.typography.fontFamily,fontSize:e.typography.header.fontSize,fontWeight:e.typography.header.fontWeight,lineHeight:e.typography.header.lineHeight,letterSpacing:e.typography.header.letterSpacing,color:e.colors.headerText},children:"Problems"})}),r.jsx(ce,{children:r.jsx(G,{disablePadding:!0,"aria-label":"Problems list",children:t.length===0?r.jsx(p,{sx:{display:"flex",alignItems:"center",justifyContent:"center",height:i.spacing(20)},children:r.jsx(m,{sx:{fontFamily:e.typography.fontFamily,fontSize:e.typography.problemNumber.fontSize,color:e.colors.problemNumber},children:"No problems found."})}):t.map(v)})})]});return c?r.jsxs(r.Fragment,{children:[r.jsx(ee,{size:"medium",color:"primary","aria-label":"Open problems list",onClick:()=>l(!0),"data-testid":"problem-list-fab",sx:{position:"fixed",bottom:i.spacing(3),left:i.spacing(3),zIndex:i.zIndex.fab},children:r.jsx(te,{})}),r.jsx(q,{anchor:"left",open:n,onClose:()=>l(!1),"data-testid":"problem-list-drawer",PaperProps:{sx:{width:i.spacing(e.dimensions.drawerWidth),backgroundColor:e.colors.background,...e.layout.hideScrollbar}},children:P})]}):r.jsx(le,{children:P})};j.__docgenInfo={description:"",methods:[],displayName:"ProblemList",props:{problems:{required:!0,tsType:{name:"Array",elements:[{name:"Problem"}],raw:"Problem[]"},description:""},selectedProblemId:{required:!1,tsType:{name:"number"},description:""},onSelectProblem:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""}}};const ye={title:"pages/ProblemList",component:j,parameters:{layout:"fullscreen",docs:{description:{component:"Sidebar organism that renders a scrollable list of coding problems with status icons, difficulty labels, and acceptance rates."}}},argTypes:{problems:{table:{disable:!0}},onSelectProblem:{table:{disable:!0}},selectedProblemId:{control:"number",description:"ID of the currently selected problem"}}},x=t=>{const[o,a]=k.useState(t.selectedProblemId);return r.jsx(j,{...t,selectedProblemId:o,onSelectProblem:a})},b={args:{problems:L,selectedProblemId:1},render:t=>r.jsx(x,{...t})},h={args:{problems:[{id:1,title:"Solved Problem",difficulty:"Easy",acceptanceRate:60,status:"solved"},{id:2,title:"Attempted Problem",difficulty:"Medium",acceptanceRate:45,status:"attempted"},{id:3,title:"Unsolved Problem",difficulty:"Hard",acceptanceRate:30,status:"unsolved"}],selectedProblemId:-1},render:t=>r.jsx(x,{...t}),parameters:{docs:{description:{story:"Displays all three status icon states: solved (green check), attempted (amber minus), unsolved (grey circle)."}}}},y={args:{problems:L,selectedProblemId:3},render:t=>r.jsx(x,{...t}),parameters:{docs:{description:{story:"Problem 3 is pre-selected — highlighted with a blue 3.52 px left border and a light blue background (#EFF6FF)."}}}},f={args:{problems:L,selectedProblemId:1},render:t=>r.jsx(x,{...t}),parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"On mobile (< 768 px) the list is hidden inside a Drawer toggled by the floating Fab button."}}}},S={args:{problems:[],selectedProblemId:-1},render:t=>r.jsx(x,{...t}),parameters:{docs:{description:{story:"Empty state — rendered when the problems array is empty."}}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    problems: MOCK_PROBLEMS,
    selectedProblemId: 1
  },
  render: (args: JSX.IntrinsicAttributes & ProblemListProps) => <InteractiveWrapper {...args} />
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const fe=["Default","AllStatuses","SelectedItem","MobileDrawer","EmptyList"],Me=Object.freeze(Object.defineProperty({__proto__:null,AllStatuses:h,Default:b,EmptyList:S,MobileDrawer:f,SelectedItem:y,__namedExportsOrder:fe,default:ye},Symbol.toStringTag,{value:"Module"}));export{h as A,b as D,S as E,f as M,Me as P,y as S};
