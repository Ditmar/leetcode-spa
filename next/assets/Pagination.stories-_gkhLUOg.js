import{B as n}from"./iframe-BkVu22rR.js";import{e as g}from"./memoTheme-D5n3dAhp.js";import{B as h}from"./Box-C5qDw21Z.js";import{P as E,a as M}from"./Pagination-DImhIIh1.js";import{u as W}from"./useTheme-BedyvpZC.js";import{u as F}from"./index-B7SshPfr.js";import{T as A}from"./Typography-kIFuKlJC.js";import{S as D}from"./Select-BCSrTvA_.js";import{M as z}from"./MenuItem-Ckp1xAm9.js";const U="pagination-component",V="Previous",q="Next",G=3,X=[10,20,50],w=()=>n.jsxs(n.Fragment,{children:[n.jsx("svg",{width:"1rem",height:"1rem",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:n.jsx("path",{d:"M10 4L6 8L10 12",stroke:"currentColor",strokeWidth:"1.33333",strokeLinecap:"round",strokeLinejoin:"round"})}),n.jsx("span",{className:"button-text","aria-hidden":"true",children:V})]}),b=()=>n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"button-text","aria-hidden":"true",children:q}),n.jsx("svg",{width:"1rem",height:"1rem",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:n.jsx("path",{d:"M6 4L10 8L6 12",stroke:"currentColor",strokeWidth:"1.33333",strokeLinecap:"round",strokeLinejoin:"round"})})]});w.__docgenInfo={description:"",methods:[],displayName:"PrevIcon"};b.__docgenInfo={description:"",methods:[],displayName:"NextIcon"};const $=g(h)({display:"flex",alignItems:"center",justifyContent:"center",width:"100%"}),Q=g(E)(({theme:e})=>({"& .MuiPagination-ul":{gap:e.spacing(.5),flexWrap:"wrap"}})),H=g(M)(({theme:e})=>({height:e.spacing(4.5),minWidth:e.spacing(4.5),fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:"0.875rem",color:e.palette.text.primary,borderRadius:e.shape.borderRadius,padding:e.spacing(0,1.5),margin:0,"&.Mui-selected":{backgroundColor:e.palette.background.paper,border:`1px solid ${e.palette.divider}`,"&:hover":{backgroundColor:e.palette.action.hover}},"&.MuiPaginationItem-previousNext":{border:"none",display:"flex",alignItems:"center",gap:e.spacing(1),"& .button-text":{display:"inline"},[e.breakpoints.down("md")]:{padding:0,minWidth:e.spacing(5.5),height:e.spacing(5.5),justifyContent:"center","& .button-text":{display:"none"}}}})),f=e=>{const p=W(),P=F(p.breakpoints.down("sm")),{count:y=G,page:x,onChange:v,dataTestId:C=U,showFirstButton:T=!1,showLastButton:I=!1,siblingCount:_=P?0:1,boundaryCount:S=1,disabled:m=!1,size:j="medium",color:N,variant:B="text",shape:R="circular",rowsPerPage:u,rowsPerPageOptions:k=X,onRowsPerPageChange:l,...L}=e,O=o=>{u!==void 0&&l&&l(o)};return n.jsxs($,{"data-testid":C,children:[l&&u!==void 0&&n.jsxs(h,{display:"flex",alignItems:"center",gap:1,mr:3,children:[n.jsx(A,{variant:"body2",color:"text.secondary",children:"Rows per page:"}),n.jsx(D,{value:u,onChange:O,size:"small",disabled:m,sx:{minWidth:p.spacing(8.75),height:p.spacing(4),borderRadius:1},children:k.map(o=>n.jsx(z,{value:o,children:o},o))})]}),n.jsx(Q,{count:y,page:x,onChange:v,showFirstButton:T,showLastButton:I,siblingCount:_,boundaryCount:S,disabled:m,size:j,color:N,variant:B,shape:R,renderItem:o=>n.jsx(H,{...o,slots:{previous:w,next:b}}),...L})]})};f.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{dataTestId:{required:!1,tsType:{name:"string"},description:`Optional custom test ID for testing environments.
@default 'pagination-component'`},rowsPerPage:{required:!1,tsType:{name:"number"},description:"Current number of rows per page.\nPassing this prop along with `onRowsPerPageChange` enables the row selector."},rowsPerPageOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:`Available options for the rows per page selector dropdown.
@default [10, 20, 50]`},onRowsPerPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: SelectChangeEvent<number>) => void",signature:{arguments:[{type:{name:"SelectChangeEvent",elements:[{name:"number"}],raw:"SelectChangeEvent<number>"},name:"event"}],return:{name:"void"}}},description:"Callback fired when the user selects a new rows per page value."}},composes:["Omit"]};const J={title:"component-catalog/Pagination",component:f,parameters:{layout:"centered"},argTypes:{count:{control:"number",description:"Total number of pages."},page:{control:"number",description:"Current active page."},onChange:{action:"changed",description:"Callback fired when the page is changed."},showFirstButton:{control:"boolean",description:"If true, show the first-page button."},showLastButton:{control:"boolean",description:"If true, show the last-page button."},siblingCount:{control:"number",description:"Number of always visible pages before and after the current page."},boundaryCount:{control:"number",description:"Number of always visible pages at the beginning and end."},disabled:{control:"boolean",description:"If true, the component is disabled."},size:{control:"radio",options:["small","medium","large"],description:"The size of the component."},rowsPerPage:{control:"number",description:"Current number of rows per page."},onRowsPerPageChange:{action:"rowsPerPageChanged",description:"Callback fired when the rows per page value changes."}}},r={args:{count:3}},t={args:{count:10,page:1}},a={args:{count:10,page:5,showFirstButton:!0,showLastButton:!0}},s={args:{count:50,rowsPerPage:10,rowsPerPageOptions:[10,20,50],onRowsPerPageChange:()=>{}}},i={args:{count:5,disabled:!0}},c={args:{count:5,color:"secondary",variant:"outlined",shape:"rounded"}},d={args:{count:10},parameters:{viewport:{defaultViewport:"mobile1"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    count: 3
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    count: 10,
    page: 1
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    count: 10,
    page: 5,
    showFirstButton: true,
    showLastButton: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    count: 50,
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 20, 50],
    onRowsPerPageChange: () => {}
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    count: 5,
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    count: 5,
    color: 'secondary',
    variant: 'outlined',
    shape: 'rounded'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    count: 10
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...d.parameters?.docs?.source}}};const K=["Default","ManyPages","WithFirstLastButtons","WithRowsPerPage","Disabled","WithCustomStyling","MobileView"],ie=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Disabled:i,ManyPages:t,MobileView:d,WithCustomStyling:c,WithFirstLastButtons:a,WithRowsPerPage:s,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{ie as P};
