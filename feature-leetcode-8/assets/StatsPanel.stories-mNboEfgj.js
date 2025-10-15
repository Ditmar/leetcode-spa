import{j as t,c as x}from"./iframe-CW2PdkKq.js";import{c as p}from"./createSvgIcon-BdtVNXn7.js";import{s}from"./memoTheme-Bbl0O1HT.js";import"./preload-helper-PPVm8Dsz.js";const g=p(t.jsx("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"})),h=p(t.jsx("path",{d:"M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2zm10 14.5V20H8v-3.5l4-4zm-4-5-4-4V4h8v3.5z"})),f=p(t.jsx("path",{d:"m10.89 18.28.57-2.89c.12-.59-.04-1.2-.42-1.66S10.1 13 9.5 13H4v-1.08L6.57 6h8.09c.18 0 .34.16.34.34v7.84zM10 22l6.41-6.41c.38-.38.59-.89.59-1.42V6.34C17 5.05 15.95 4 14.66 4h-8.1c-.71 0-1.36.37-1.72.97l-2.67 6.15c-.11.25-.17.52-.17.8V13c0 1.1.9 2 2 2h5.5l-.92 4.65c-.05.22-.02.46.08.66.23.45.52.86.88 1.22zm10-7h2V4h-2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1"})),v=p(t.jsx("path",{fillRule:"evenodd",d:"M14 6V4h-4v2zM4 8v11h16V8zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2z"})),l={total:{label:"No of Tests",value:32,icon:t.jsx(v,{}),color:"#5A6ACF"},passed:{label:"Passed",value:12,icon:t.jsx(g,{}),color:"#8FD16A"},failed:{label:"Failed",value:19,icon:t.jsx(f,{}),color:"#EF6D6D"},waiting:{label:"Waiting for result",value:1,icon:t.jsx(h,{}),color:"#8FA7E8"}},S=({totalTests:e,passed:o,failed:r,waiting:n})=>x.useMemo(()=>[{...l.total,value:e},{...l.passed,value:o},{...l.failed,value:r},{...l.waiting,value:n}],[e,o,r,n]),b=s("div")(({theme:e})=>({backgroundColor:e.palette.background.paper,borderRadius:"20px",padding:e.spacing(4),display:"flex",flexDirection:"column",gap:e.spacing(3),width:"260px",boxShadow:"0px 4px 10px rgba(0,0,0,0.1)"})),j=s("div")({display:"flex",alignItems:"center",gap:"14px"}),y=s("div")(({theme:e})=>({width:"48px",height:"48px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:e.palette.action.hover,opacity:.9})),T=s("div")(({color:e})=>({fontSize:"28px",color:e,display:"flex",alignItems:"center",justifyContent:"center"})),w=s("div")(({theme:e})=>({fontSize:"22px",fontWeight:700,color:e.palette.text.primary})),z=s("div")(({theme:e})=>({fontSize:"14px",color:e.palette.text.secondary})),u=({totalTests:e,passed:o,failed:r,waiting:n})=>{const m=S({totalTests:e,passed:o,failed:r,waiting:n});return t.jsx(b,{children:m.map(a=>t.jsxs(j,{children:[t.jsx(y,{children:t.jsx(T,{color:a.color,children:a.icon})}),t.jsxs("div",{children:[t.jsx(w,{children:a.value}),t.jsx(z,{children:a.label})]})]},a.label))})};u.__docgenInfo={description:"StatsPanel component",methods:[],displayName:"StatsPanel",props:{totalTests:{required:!0,tsType:{name:"number"},description:""},passed:{required:!0,tsType:{name:"number"},description:""},failed:{required:!0,tsType:{name:"number"},description:""},waiting:{required:!0,tsType:{name:"number"},description:""}}};const D={title:"Dashboard/StatsPanel",component:u,parameters:{layout:"centered"}},c={args:{totalTests:32,passed:12,failed:19,waiting:1}},i={args:{totalTests:20,passed:20,failed:0,waiting:0}},d={args:{totalTests:40,passed:25,failed:10,waiting:5}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    totalTests: 32,
    passed: 12,
    failed: 19,
    waiting: 1
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    totalTests: 20,
    passed: 20,
    failed: 0,
    waiting: 0
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    totalTests: 40,
    passed: 25,
    failed: 10,
    waiting: 5
  }
}`,...d.parameters?.docs?.source}}};const I=["Default","AllPassed","MixedResults"];export{i as AllPassed,c as Default,d as MixedResults,I as __namedExportsOrder,D as default};
