import{F as k,N as A,A as o,d as M,c as z,l as I,E as e}from"./iframe-Dw-bi4UG.js";import{c as H}from"./createSvgIcon-Dw0-ZnJw.js";import{C as O}from"./CheckCircleOutline-DUkigOjD.js";import{R as E}from"./RadioButtonUnchecked-DWCiwQHa.js";import{g as $,b as _,c as D,e as d,r as N,m as F}from"./memoTheme-Dlvt2v3D.js";import{B as p}from"./Box-BhXwAWW-.js";import{L as U}from"./ListItemButton-DNZt6mDZ.js";import{u as V}from"./useTheme-KkX66NEG.js";import{u as X}from"./index-D9dyyNf3.js";import{T as m}from"./Typography-Di524Xyc.js";import{L as J}from"./List-k_PwzSnA.js";import{c as G}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{B as K}from"./ButtonBase-DIn-lg21.js";import{D as q}from"./Drawer-D4x6y_d-.js";function Q(t){return $("MuiFab",t)}const W=_("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),Y=t=>{const{color:r,variant:a,classes:i,size:c}=t,n={root:["root",a,`size${z(c)}`,r==="inherit"?"colorInherit":r]},l=D(n,Q,i);return{...i,...l}},Z=d(K,{name:"MuiFab",slot:"Root",shouldForwardProp:t=>N(t)||t==="classes",overridesResolver:(t,r)=>{const{ownerState:a}=t;return[r.root,r[a.variant],r[`size${z(a.size)}`],a.color==="inherit"&&r.colorInherit,r[z(a.size)],r[a.color]]}})(F(({theme:t})=>({...t.typography.button,minHeight:36,transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(t.vars||t).zIndex.fab,boxShadow:(t.vars||t).shadows[6],"&:active":{boxShadow:(t.vars||t).shadows[12]},color:t.vars?t.vars.palette.grey[900]:t.palette.getContrastText?.(t.palette.grey[300]),backgroundColor:(t.vars||t).palette.grey[300],"&:hover":{backgroundColor:(t.vars||t).palette.grey.A100,"@media (hover: none)":{backgroundColor:(t.vars||t).palette.grey[300]},textDecoration:"none"},[`&.${W.focusVisible}`]:{boxShadow:(t.vars||t).shadows[6]},variants:[{props:{size:"small"},style:{width:40,height:40}},{props:{size:"medium"},style:{width:48,height:48}},{props:{variant:"extended"},style:{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48}},{props:{variant:"extended",size:"small"},style:{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34}},{props:{variant:"extended",size:"medium"},style:{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40}},{props:{color:"inherit"},style:{color:"inherit"}}]})),F(({theme:t})=>({variants:[...Object.entries(t.palette).filter(G(["dark","contrastText"])).map(([r])=>({props:{color:r},style:{color:(t.vars||t).palette[r].contrastText,backgroundColor:(t.vars||t).palette[r].main,"&:hover":{backgroundColor:(t.vars||t).palette[r].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[r].main}}}}))]})),F(({theme:t})=>({[`&.${W.disabled}`]:{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground}}))),ee=k.forwardRef(function(r,a){const i=A({props:r,name:"MuiFab"}),{children:c,className:n,color:l="default",component:u="button",disabled:g=!1,disableFocusRipple:v=!1,focusVisibleClassName:P,size:s="large",variant:w="circular",...C}=i,T={...i,color:l,component:u,disabled:g,disableFocusRipple:v,size:s,variant:w},R=Y(T);return o.jsx(Z,{className:M(R.root,n),component:u,disabled:g,focusRipple:!v,focusVisibleClassName:M(R.focusVisible,P),ownerState:T,ref:a,...C,classes:R,children:c})}),te=H(o.jsx("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5m0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5M7 19h14v-2H7zm0-6h14v-2H7zm0-8v2h14V5z"})),oe=H(o.jsx("path",{d:"M7 11v2h10v-2zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"})),re={solved:"success",attempted:"warning",unsolved:"disabled"},se={Easy:"success",Medium:"warning",Hard:"error"},L=[{id:1,title:"Two Sum",difficulty:"Easy",acceptanceRate:49.2,status:"solved"},{id:2,title:"Add Two Numbers",difficulty:"Medium",acceptanceRate:41.8,status:"attempted"},{id:3,title:"Longest Substring Without Repeating Characters",difficulty:"Medium",acceptanceRate:33.9,status:"unsolved"},{id:4,title:"Median of Two Sorted Arrays",difficulty:"Hard",acceptanceRate:38.2,status:"unsolved"},{id:5,title:"Valid Parentheses",difficulty:"Easy",acceptanceRate:40.1,status:"unsolved"},{id:6,title:"Merge Two Sorted Lists",difficulty:"Easy",acceptanceRate:62.3,status:"unsolved"}],ae={solved:O,attempted:oe,unsolved:E},ie={solved:"Solved",attempted:"Attempted",unsolved:"Unsolved"};function ne(t){const r={fontSize:`${e.dimensions.statusIconSize}px`},a=I.useCallback(n=>{const l=ae[n],u=re[n],g=ie[n];return I.createElement(l,{color:u,sx:r,"aria-label":g})},[]),i=I.useCallback(n=>se[n],[]),c=I.useCallback(n=>n===t,[t]);return{getStatusIcon:a,getDifficultyColor:i,isSelected:c}}const le=d(p)(()=>({width:e.dimensions.containerWidth,height:e.dimensions.containerHeight,backgroundColor:e.colors.background,borderRight:`${e.dimensions.borderRightWidth} solid ${e.colors.border}`,...e.layout.container})),de=d(p)(()=>({height:e.dimensions.headerHeight,padding:e.dimensions.headerPadding,borderBottom:`${e.dimensions.headerBorderBottomWidth} solid ${e.colors.border}`,display:"flex",alignItems:"flex-start",flexShrink:0,backgroundColor:e.colors.background})),ce=d(p)(()=>({...e.layout.listWrapper,...e.layout.hideScrollbar})),pe=d(U,{shouldForwardProp:t=>t!=="isSelected"})(({isSelected:t})=>({height:e.dimensions.itemHeight,borderBottom:`${e.dimensions.itemBorderBottomWidth} solid ${e.colors.border}`,backgroundColor:t?e.colors.selectedBackground:e.colors.itemBackground,borderLeft:t?`${e.dimensions.selectedBorderLeftWidth} solid ${e.colors.selectedBorderColor}`:`${e.dimensions.selectedBorderLeftWidth} solid transparent`,paddingLeft:t?e.dimensions.selectedPaddingLeft:e.dimensions.itemPaddingX,paddingRight:e.dimensions.itemPaddingX,paddingTop:0,paddingBottom:0,gap:e.dimensions.iconTextGap,...e.layout.itemButton,"&:hover":{backgroundColor:t?e.colors.selectedBackground:"rgba(239,246,255,0.55)"},"&.Mui-focusVisible":{outline:`2px solid ${e.colors.selectedBorderColor}`,outlineOffset:"-2px"}})),me=d(p)(()=>({display:"flex",alignItems:"center",justifyContent:"center",width:e.dimensions.statusIconSize,height:e.dimensions.statusIconSize,flexShrink:0})),ue=d(p)(()=>({...e.layout.textColumn,gap:e.dimensions.rowGap})),ge=d(p)(()=>({...e.layout.inlineRow,gap:e.dimensions.rowGap,lineHeight:e.typography.problemTitle.lineHeight})),be=d(p)(()=>({...e.layout.inlineRow,gap:e.dimensions.rowGap,lineHeight:e.typography.meta.lineHeight}));function he(t){return{Easy:e.colors.easy,Medium:e.colors.medium,Hard:e.colors.hard}[t]}function B(t){return`${t.toFixed(1)}%`}const j=({problems:t,selectedProblemId:r,onSelectProblem:a})=>{const i=V(),c=X(i.breakpoints.down("md")),[n,l]=k.useState(!1),{getStatusIcon:u,isSelected:g}=ne(r??-1),v=s=>{const w=g(s.id),C=he(s.difficulty);return o.jsxs(pe,{isSelected:w,onClick:()=>{a(s.id),c&&l(!1)},"aria-current":w?"true":void 0,"aria-label":`Problem ${s.id}: ${s.title}, ${s.difficulty}, ${B(s.acceptanceRate)} acceptance rate`,"data-testid":`problem-item-${s.id}`,children:[o.jsx(me,{children:u(s.status)}),o.jsxs(ue,{children:[o.jsxs(ge,{children:[o.jsxs(m,{component:"span",sx:{fontFamily:e.typography.fontFamily,fontSize:e.typography.problemNumber.fontSize,fontWeight:e.typography.problemNumber.fontWeight,lineHeight:e.typography.problemNumber.lineHeight,letterSpacing:e.typography.problemNumber.letterSpacing,color:e.colors.problemNumber,flexShrink:0},children:[s.id,"."]}),o.jsx(m,{component:"span",sx:{fontFamily:e.typography.fontFamily,fontSize:e.typography.problemTitle.fontSize,fontWeight:e.typography.problemTitle.fontWeight,lineHeight:e.typography.problemTitle.lineHeight,letterSpacing:e.typography.problemTitle.letterSpacing,color:e.colors.problemTitle,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:s.title})]}),o.jsxs(be,{children:[o.jsx(m,{component:"span",sx:{fontFamily:e.typography.fontFamily,fontSize:e.typography.meta.fontSize,fontWeight:e.typography.meta.fontWeight,lineHeight:e.typography.meta.lineHeight,letterSpacing:e.typography.meta.letterSpacing,color:C},children:s.difficulty}),o.jsx(m,{component:"span",sx:{fontFamily:e.typography.fontFamily,fontSize:e.typography.meta.fontSize,fontWeight:e.typography.meta.fontWeight,lineHeight:e.typography.meta.lineHeight,color:e.colors.bullet},children:"•"}),o.jsx(m,{component:"span",sx:{fontFamily:e.typography.fontFamily,fontSize:e.typography.meta.fontSize,fontWeight:e.typography.meta.fontWeight,lineHeight:e.typography.meta.lineHeight,letterSpacing:e.typography.meta.letterSpacing,color:e.colors.acceptanceRate},children:B(s.acceptanceRate)})]})]})]},s.id)},P=o.jsxs(o.Fragment,{children:[o.jsx(de,{children:o.jsx(m,{sx:{fontFamily:e.typography.fontFamily,fontSize:e.typography.header.fontSize,fontWeight:e.typography.header.fontWeight,lineHeight:e.typography.header.lineHeight,letterSpacing:e.typography.header.letterSpacing,color:e.colors.headerText},children:"Problems"})}),o.jsx(ce,{children:o.jsx(J,{disablePadding:!0,"aria-label":"Problems list",children:t.length===0?o.jsx(p,{sx:{display:"flex",alignItems:"center",justifyContent:"center",height:i.spacing(20)},children:o.jsx(m,{sx:{fontFamily:e.typography.fontFamily,fontSize:e.typography.problemNumber.fontSize,color:e.colors.problemNumber},children:"No problems found."})}):t.map(v)})})]});return c?o.jsxs(o.Fragment,{children:[o.jsx(ee,{size:"medium",color:"primary","aria-label":"Open problems list",onClick:()=>l(!0),"data-testid":"problem-list-fab",sx:{position:"fixed",bottom:i.spacing(3),left:i.spacing(3),zIndex:i.zIndex.fab},children:o.jsx(te,{})}),o.jsx(q,{anchor:"left",open:n,onClose:()=>l(!1),"data-testid":"problem-list-drawer",PaperProps:{sx:{width:i.spacing(e.dimensions.drawerWidth),backgroundColor:e.colors.background,...e.layout.hideScrollbar}},children:P})]}):o.jsx(le,{children:P})};j.__docgenInfo={description:"",methods:[],displayName:"ProblemList",props:{problems:{required:!0,tsType:{name:"Array",elements:[{name:"Problem"}],raw:"Problem[]"},description:""},selectedProblemId:{required:!1,tsType:{name:"number"},description:""},onSelectProblem:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""}}};const ye={title:"components/ProblemList",component:j,parameters:{layout:"fullscreen",docs:{description:{component:"Sidebar organism that renders a scrollable list of coding problems with status icons, difficulty labels, and acceptance rates."}}},argTypes:{problems:{table:{disable:!0}},onSelectProblem:{table:{disable:!0}},selectedProblemId:{control:"number",description:"ID of the currently selected problem"}}},x=t=>{const[r,a]=k.useState(t.selectedProblemId);return o.jsx(j,{...t,selectedProblemId:r,onSelectProblem:a})},b={args:{problems:L,selectedProblemId:1},render:t=>o.jsx(x,{...t})},h={args:{problems:[{id:1,title:"Solved Problem",difficulty:"Easy",acceptanceRate:60,status:"solved"},{id:2,title:"Attempted Problem",difficulty:"Medium",acceptanceRate:45,status:"attempted"},{id:3,title:"Unsolved Problem",difficulty:"Hard",acceptanceRate:30,status:"unsolved"}],selectedProblemId:-1},render:t=>o.jsx(x,{...t}),parameters:{docs:{description:{story:"Displays all three status icon states: solved (green check), attempted (amber minus), unsolved (grey circle)."}}}},y={args:{problems:L,selectedProblemId:3},render:t=>o.jsx(x,{...t}),parameters:{docs:{description:{story:"Problem 3 is pre-selected — highlighted with a blue 3.52 px left border and a light blue background (#EFF6FF)."}}}},f={args:{problems:L,selectedProblemId:1},render:t=>o.jsx(x,{...t}),parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"On mobile (< 768 px) the list is hidden inside a Drawer toggled by the floating Fab button."}}}},S={args:{problems:[],selectedProblemId:-1},render:t=>o.jsx(x,{...t}),parameters:{docs:{description:{story:"Empty state — rendered when the problems array is empty."}}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
