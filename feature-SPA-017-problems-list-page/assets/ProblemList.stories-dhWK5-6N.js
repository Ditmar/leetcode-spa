import{F as j,N as M,A as r,d as L,c as C,E as e}from"./iframe-CuQJ7Lof.js";import{c as T}from"./createSvgIcon-PargAk8z.js";import{u as $,M as k}from"./ProblemList.hook-c9UFSCHv.js";import{g as O,b as E,c as D,e as n,r as A,m as z}from"./memoTheme-DNtaTH2X.js";import{B as l}from"./Box-CKcHIzeN.js";import{L as N}from"./ListItemButton-DBxxAQFB.js";import{u as _}from"./useTheme-B8UebmjW.js";import{u as V}from"./index-CPZt2bch.js";import{T as c}from"./Typography-qRSzQd5l.js";import{L as X}from"./List-CQtoELnh.js";import{c as U}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{B as J}from"./ButtonBase-B9Uh8uSh.js";import{D as G}from"./Drawer-6DdHV-U8.js";function K(t){return O("MuiFab",t)}const B=E("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),q=t=>{const{color:o,variant:a,classes:i,size:p}=t,m={root:["root",a,`size${C(p)}`,o==="inherit"?"colorInherit":o]},d=D(m,K,i);return{...i,...d}},Q=n(J,{name:"MuiFab",slot:"Root",shouldForwardProp:t=>A(t)||t==="classes",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,o[a.variant],o[`size${C(a.size)}`],a.color==="inherit"&&o.colorInherit,o[C(a.size)],o[a.color]]}})(z(({theme:t})=>({...t.typography.button,minHeight:36,transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(t.vars||t).zIndex.fab,boxShadow:(t.vars||t).shadows[6],"&:active":{boxShadow:(t.vars||t).shadows[12]},color:t.vars?t.vars.palette.grey[900]:t.palette.getContrastText?.(t.palette.grey[300]),backgroundColor:(t.vars||t).palette.grey[300],"&:hover":{backgroundColor:(t.vars||t).palette.grey.A100,"@media (hover: none)":{backgroundColor:(t.vars||t).palette.grey[300]},textDecoration:"none"},[`&.${B.focusVisible}`]:{boxShadow:(t.vars||t).shadows[6]},variants:[{props:{size:"small"},style:{width:40,height:40}},{props:{size:"medium"},style:{width:48,height:48}},{props:{variant:"extended"},style:{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48}},{props:{variant:"extended",size:"small"},style:{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34}},{props:{variant:"extended",size:"medium"},style:{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40}},{props:{color:"inherit"},style:{color:"inherit"}}]})),z(({theme:t})=>({variants:[...Object.entries(t.palette).filter(U(["dark","contrastText"])).map(([o])=>({props:{color:o},style:{color:(t.vars||t).palette[o].contrastText,backgroundColor:(t.vars||t).palette[o].main,"&:hover":{backgroundColor:(t.vars||t).palette[o].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[o].main}}}}))]})),z(({theme:t})=>({[`&.${B.disabled}`]:{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground}}))),Y=j.forwardRef(function(o,a){const i=M({props:o,name:"MuiFab"}),{children:p,className:m,color:d="default",component:x="button",disabled:S=!1,disableFocusRipple:P=!1,focusVisibleClassName:v,size:s="large",variant:w="circular",...I}=i,W={...i,color:d,component:x,disabled:S,disableFocusRipple:P,size:s,variant:w},F=q(W);return r.jsx(Q,{className:L(F.root,m),component:x,disabled:S,focusRipple:!P,focusVisibleClassName:L(F.focusVisible,v),ownerState:W,ref:a,...I,classes:F,children:p})}),Z=T(r.jsx("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5m0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5M7 19h14v-2H7zm0-6h14v-2H7zm0-8v2h14V5z"})),ee=n(l)(()=>({width:e.dimensions.containerWidth,height:e.dimensions.containerHeight,backgroundColor:e.colors.background,borderRight:`${e.dimensions.borderRightWidth} solid ${e.colors.border}`,...e.layout.container})),te=n(l)(()=>({height:e.dimensions.headerHeight,padding:e.dimensions.headerPadding,borderBottom:`${e.dimensions.headerBorderBottomWidth} solid ${e.colors.border}`,display:"flex",alignItems:"flex-start",flexShrink:0,backgroundColor:e.colors.background})),re=n(l)(()=>({...e.layout.listWrapper,...e.layout.hideScrollbar})),oe=n(N,{shouldForwardProp:t=>t!=="isSelected"})(({isSelected:t})=>({height:e.dimensions.itemHeight,borderBottom:`${e.dimensions.itemBorderBottomWidth} solid ${e.colors.border}`,backgroundColor:t?e.colors.selectedBackground:e.colors.itemBackground,borderLeft:t?`${e.dimensions.selectedBorderLeftWidth} solid ${e.colors.selectedBorderColor}`:`${e.dimensions.selectedBorderLeftWidth} solid transparent`,paddingLeft:t?e.dimensions.selectedPaddingLeft:e.dimensions.itemPaddingX,paddingRight:e.dimensions.itemPaddingX,paddingTop:0,paddingBottom:0,gap:e.dimensions.iconTextGap,...e.layout.itemButton,"&:hover":{backgroundColor:t?e.colors.selectedBackground:"rgba(239,246,255,0.55)"},"&.Mui-focusVisible":{outline:`2px solid ${e.colors.selectedBorderColor}`,outlineOffset:"-2px"}})),se=n(l)(()=>({display:"flex",alignItems:"center",justifyContent:"center",width:e.dimensions.statusIconSize,height:e.dimensions.statusIconSize,flexShrink:0})),ae=n(l)(()=>({...e.layout.textColumn,gap:e.dimensions.rowGap})),ie=n(l)(()=>({...e.layout.inlineRow,gap:e.dimensions.rowGap,lineHeight:e.typography.problemTitle.lineHeight})),ne=n(l)(()=>({...e.layout.inlineRow,gap:e.dimensions.rowGap,lineHeight:e.typography.meta.lineHeight}));function le(t){return{Easy:e.colors.easy,Medium:e.colors.medium,Hard:e.colors.hard}[t]}function H(t){return`${t.toFixed(1)}%`}const R=({problems:t,selectedProblemId:o,onSelectProblem:a})=>{const i=_(),p=V(i.breakpoints.down("md")),[m,d]=j.useState(!1),{getStatusIcon:x,isSelected:S}=$(o??-1),P=s=>{const w=S(s.id),I=le(s.difficulty);return r.jsxs(oe,{isSelected:w,onClick:()=>{a(s.id),p&&d(!1)},"aria-current":w?"true":void 0,"aria-label":`Problem ${s.id}: ${s.title}, ${s.difficulty}, ${H(s.acceptanceRate)} acceptance rate`,"data-testid":`problem-item-${s.id}`,children:[r.jsx(se,{children:x(s.status)}),r.jsxs(ae,{children:[r.jsxs(ie,{children:[r.jsxs(c,{component:"span",sx:{fontFamily:e.typography.fontFamily,fontSize:e.typography.problemNumber.fontSize,fontWeight:e.typography.problemNumber.fontWeight,lineHeight:e.typography.problemNumber.lineHeight,letterSpacing:e.typography.problemNumber.letterSpacing,color:e.colors.problemNumber,flexShrink:0},children:[s.id,"."]}),r.jsx(c,{component:"span",sx:{fontFamily:e.typography.fontFamily,fontSize:e.typography.problemTitle.fontSize,fontWeight:e.typography.problemTitle.fontWeight,lineHeight:e.typography.problemTitle.lineHeight,letterSpacing:e.typography.problemTitle.letterSpacing,color:e.colors.problemTitle,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:s.title})]}),r.jsxs(ne,{children:[r.jsx(c,{component:"span",sx:{fontFamily:e.typography.fontFamily,fontSize:e.typography.meta.fontSize,fontWeight:e.typography.meta.fontWeight,lineHeight:e.typography.meta.lineHeight,letterSpacing:e.typography.meta.letterSpacing,color:I},children:s.difficulty}),r.jsx(c,{component:"span",sx:{fontFamily:e.typography.fontFamily,fontSize:e.typography.meta.fontSize,fontWeight:e.typography.meta.fontWeight,lineHeight:e.typography.meta.lineHeight,color:e.colors.bullet},children:"•"}),r.jsx(c,{component:"span",sx:{fontFamily:e.typography.fontFamily,fontSize:e.typography.meta.fontSize,fontWeight:e.typography.meta.fontWeight,lineHeight:e.typography.meta.lineHeight,letterSpacing:e.typography.meta.letterSpacing,color:e.colors.acceptanceRate},children:H(s.acceptanceRate)})]})]})]},s.id)},v=r.jsxs(r.Fragment,{children:[r.jsx(te,{children:r.jsx(c,{sx:{fontFamily:e.typography.fontFamily,fontSize:e.typography.header.fontSize,fontWeight:e.typography.header.fontWeight,lineHeight:e.typography.header.lineHeight,letterSpacing:e.typography.header.letterSpacing,color:e.colors.headerText},children:"Problems"})}),r.jsx(re,{children:r.jsx(X,{disablePadding:!0,"aria-label":"Problems list",children:t.length===0?r.jsx(l,{sx:{display:"flex",alignItems:"center",justifyContent:"center",height:i.spacing(20)},children:r.jsx(c,{sx:{fontFamily:e.typography.fontFamily,fontSize:e.typography.problemNumber.fontSize,color:e.colors.problemNumber},children:"No problems found."})}):t.map(P)})})]});return p?r.jsxs(r.Fragment,{children:[r.jsx(Y,{size:"medium",color:"primary","aria-label":"Open problems list",onClick:()=>d(!0),"data-testid":"problem-list-fab",sx:{position:"fixed",bottom:i.spacing(3),left:i.spacing(3),zIndex:i.zIndex.fab},children:r.jsx(Z,{})}),r.jsx(G,{anchor:"left",open:m,onClose:()=>d(!1),"data-testid":"problem-list-drawer",PaperProps:{sx:{width:i.spacing(e.dimensions.drawerWidth),backgroundColor:e.colors.background,...e.layout.hideScrollbar}},children:v})]}):r.jsx(ee,{children:v})};R.__docgenInfo={description:"",methods:[],displayName:"ProblemList",props:{problems:{required:!0,tsType:{name:"Array",elements:[{name:"Problem"}],raw:"Problem[]"},description:""},selectedProblemId:{required:!1,tsType:{name:"number"},description:""},onSelectProblem:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""}}};const de={title:"pages/ProblemList",component:R,parameters:{layout:"fullscreen",docs:{description:{component:"Sidebar organism that renders a scrollable list of coding problems with status icons, difficulty labels, and acceptance rates."}}},argTypes:{problems:{table:{disable:!0}},onSelectProblem:{table:{disable:!0}},selectedProblemId:{control:"number",description:"ID of the currently selected problem"}}},f=t=>{const[o,a]=j.useState(t.selectedProblemId);return r.jsx(R,{...t,selectedProblemId:o,onSelectProblem:a})},g={args:{problems:k,selectedProblemId:1},render:t=>r.jsx(f,{...t})},u={args:{problems:[{id:1,title:"Solved Problem",difficulty:"Easy",acceptanceRate:60,status:"solved"},{id:2,title:"Attempted Problem",difficulty:"Medium",acceptanceRate:45,status:"attempted"},{id:3,title:"Unsolved Problem",difficulty:"Hard",acceptanceRate:30,status:"unsolved"}],selectedProblemId:-1},render:t=>r.jsx(f,{...t}),parameters:{docs:{description:{story:"Displays all three status icon states: solved (green check), attempted (amber minus), unsolved (grey circle)."}}}},b={args:{problems:k,selectedProblemId:3},render:t=>r.jsx(f,{...t}),parameters:{docs:{description:{story:"Problem 3 is pre-selected — highlighted with a blue 3.52 px left border and a light blue background (#EFF6FF)."}}}},h={args:{problems:k,selectedProblemId:1},render:t=>r.jsx(f,{...t}),parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"On mobile (< 768 px) the list is hidden inside a Drawer toggled by the floating Fab button."}}}},y={args:{problems:[],selectedProblemId:-1},render:t=>r.jsx(f,{...t}),parameters:{docs:{description:{story:"Empty state — rendered when the problems array is empty."}}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    problems: MOCK_PROBLEMS,
    selectedProblemId: 1
  },
  render: (args: JSX.IntrinsicAttributes & ProblemListProps) => <InteractiveWrapper {...args} />
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const ce=["Default","AllStatuses","SelectedItem","MobileDrawer","EmptyList"],Ie=Object.freeze(Object.defineProperty({__proto__:null,AllStatuses:u,Default:g,EmptyList:y,MobileDrawer:h,SelectedItem:b,__namedExportsOrder:ce,default:de},Symbol.toStringTag,{value:"Module"}));export{u as A,g as D,y as E,h as M,Ie as P,b as S};
