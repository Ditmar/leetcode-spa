import{P as c}from"./Pagination-CtKA5j7A.js";const i={title:"component-catalog/Pagination",component:c,parameters:{layout:"centered"},argTypes:{count:{control:"number",description:"Total number of pages."},page:{control:"number",description:"Current active page."},onChange:{action:"changed",description:"Callback fired when the page is changed."},showFirstButton:{control:"boolean",description:"If true, show the first-page button."},showLastButton:{control:"boolean",description:"If true, show the last-page button."},siblingCount:{control:"number",description:"Number of always visible pages before and after the current page."},boundaryCount:{control:"number",description:"Number of always visible pages at the beginning and end."},disabled:{control:"boolean",description:"If true, the component is disabled."},size:{control:"radio",options:["small","medium","large"],description:"The size of the component."},rowsPerPage:{control:"number",description:"Current number of rows per page."},onRowsPerPageChange:{action:"rowsPerPageChanged",description:"Callback fired when the rows per page value changes."}}},e={args:{count:3}},r={args:{count:10,page:1}},o={args:{count:10,page:5,showFirstButton:!0,showLastButton:!0}},a={args:{count:50,rowsPerPage:10,rowsPerPageOptions:[10,20,50],onRowsPerPageChange:()=>{}}},t={args:{count:5,disabled:!0}},n={args:{count:5,color:"secondary",variant:"outlined",shape:"rounded"}},s={args:{count:10},parameters:{viewport:{defaultViewport:"mobile1"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    count: 3
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    count: 10,
    page: 1
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    count: 10,
    page: 5,
    showFirstButton: true,
    showLastButton: true
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    count: 50,
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 20, 50],
    onRowsPerPageChange: () => {}
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    count: 5,
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    count: 5,
    color: 'secondary',
    variant: 'outlined',
    shape: 'rounded'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    count: 10
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...s.parameters?.docs?.source}}};const u=["Default","ManyPages","WithFirstLastButtons","WithRowsPerPage","Disabled","WithCustomStyling","MobileView"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:t,ManyPages:r,MobileView:s,WithCustomStyling:n,WithFirstLastButtons:o,WithRowsPerPage:a,__namedExportsOrder:u,default:i},Symbol.toStringTag,{value:"Module"}));export{g as P};
