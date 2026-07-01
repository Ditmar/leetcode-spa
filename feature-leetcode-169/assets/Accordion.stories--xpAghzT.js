import{A as a,F as v}from"./iframe-PJoesEj1.js";import{c as T}from"./createSvgIcon-DXtTIKqC.js";import{E as W}from"./ExpandMore-COdbYInw.js";import{u as q}from"./useControlled-959IKqI2.js";import{e as A}from"./memoTheme-B64QqGhC.js";import{P as w}from"./Paper-D4Fd7wVq.js";import{A as C,b as E,a as M}from"./AccordionSummary-B783cOef.js";import{B as P}from"./Box-DGSKHnJQ.js";import{T as n}from"./Typography-BZIMnQU_.js";import{B as j}from"./Button-D891QX3I.js";const B=T(a.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}));function D(e){return e.filter(r=>r.defaultExpanded).map(r=>r.id)}function k(e,r,l){return l==="single"?e.includes(r)?[]:[r]:e.includes(r)?e.filter(o=>o!==r):[...e,r]}const _=e=>{const{items:r,expandedIds:l,onExpandedChange:o,variant:d="multiple"}=e,[m,S]=q({controlled:l,default:D(r),name:"Accordion",state:"expandedIds"}),p=v.useCallback(t=>()=>{const b=k(m,t,d);S(b),o&&o(b)},[m,d,S,o]);return{itemsWithState:r.map(t=>({...t,expanded:m.includes(t.id),onChange:p(t.id)}))}},z=A(w,{shouldForwardProp:e=>e!=="square"})(({theme:e,square:r})=>({maxWidth:e.spacing(152),width:"100%",padding:e.spacing(3),backgroundColor:e.palette.background.paper,border:`1px solid ${e.palette.divider}`,...!r&&{borderRadius:e.shape.borderRadius},transition:e.transitions.create(["border-radius"],{duration:e.transitions.duration.shortest})})),$=A(P)(({theme:e})=>({display:"flex",alignItems:"center",minHeight:e.spacing(5.5),minWidth:e.spacing(5.5)})),F=A(C,{shouldForwardProp:e=>e!=="square"})(({theme:e,square:r})=>({backgroundColor:"transparent",boxShadow:"none",margin:0,"&:before":{display:"none"},"&:not(:last-child)":{borderBottom:`1px solid ${e.palette.divider}`},...!r&&{borderRadius:0},[e.breakpoints.down("sm")]:{margin:0}})),R=A(E)(({theme:e})=>({padding:e.spacing(0,2),minHeight:e.spacing(5.5),"& .MuiAccordionSummary-content":{margin:e.spacing(1.5,0),"&.Mui-expanded":{margin:e.spacing(1.5,0)}},"& .MuiTypography-root":{color:e.palette.grey[900]},"& .MuiAccordionSummary-expandIconWrapper":{transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.short}),transform:"scale(1)"},"&.Mui-expanded .MuiAccordionSummary-expandIconWrapper":{transform:"scale(1.1)"},[e.breakpoints.down("sm")]:{padding:e.spacing(0,1.5),"& .MuiAccordionSummary-content":{margin:e.spacing(1,0)}}})),L=A(M)(({theme:e})=>({padding:e.spacing(2),[e.breakpoints.down("sm")]:{padding:e.spacing(1.5)}})),I=e=>{const{itemsWithState:r}=_(e),{disableAnimation:l,square:o,slotProps:d,expandIcon:m}=e,p=(()=>{const s={...d?.accordion},t={...d?.summary},b={...d?.details};return delete s.expanded,delete s.onChange,delete s.disabled,delete t.expandIcon,{accordionProps:s,summaryProps:t,detailsProps:b}})();return a.jsx(z,{square:o,"data-testid":"accordion-container",children:r.map(s=>{const t=m||(s.expanded?a.jsx(B,{}):a.jsx(W,{}));return a.jsxs(F,{disableGutters:!0,square:o,TransitionProps:{timeout:l?0:void 0},...p.accordionProps,expanded:s.expanded,onChange:s.onChange,disabled:s.disabled,"data-testid":`accordion-${s.id}`,children:[a.jsx(R,{...p.summaryProps,expandIcon:a.jsx($,{children:t}),"data-testid":`accordion-summary-${s.id}`,children:s.summary}),a.jsx(L,{...p.detailsProps,"data-testid":`accordion-details-${s.id}`,children:s.details})]},s.id)})})};I.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionItem"}],raw:"AccordionItem[]"},description:""},expandedIds:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onExpandedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(expandedIds: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"expandedIds"}],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'single' | 'multiple'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'multiple'"}]},description:""},disableAnimation:{required:!1,tsType:{name:"boolean"},description:""},square:{required:!1,tsType:{name:"boolean"},description:""},expandIcon:{required:!1,tsType:{name:"ReactNode"},description:""},slotProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  accordion?: Partial<MuiAccordionProps>;
  summary?: Partial<AccordionSummaryProps>;
  details?: Partial<AccordionDetailsProps>;
}`,signature:{properties:[{key:"accordion",value:{name:"Partial",elements:[{name:"MuiAccordionProps"}],raw:"Partial<MuiAccordionProps>",required:!1}},{key:"summary",value:{name:"Partial",elements:[{name:"AccordionSummaryProps"}],raw:"Partial<AccordionSummaryProps>",required:!1}},{key:"details",value:{name:"Partial",elements:[{name:"AccordionDetailsProps"}],raw:"Partial<AccordionDetailsProps>",required:!1}}]}},description:""}}};const N={title:"Components/Accordion",component:I,parameters:{layout:"centered"},decorators:[e=>a.jsx(P,{sx:{width:"100%",maxWidth:r=>r.spacing(152),mx:"auto",p:2},children:a.jsx(e,{})})]},c="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",i=[{id:"1",summary:a.jsx(n,{fontWeight:"medium",children:"Is it accessible?"}),details:a.jsx(n,{color:"text.secondary",children:c})},{id:"2",summary:a.jsx(n,{fontWeight:"medium",children:"Is it styled?"}),details:a.jsx(n,{color:"text.secondary",children:c}),defaultExpanded:!0},{id:"3",summary:a.jsx(n,{fontWeight:"medium",children:"Is it animated?"}),details:a.jsx(n,{color:"text.secondary",children:c})}],u={args:{items:i,variant:"multiple"}},g={args:{items:i,variant:"single"}},V=[...i,{id:"4",summary:a.jsx(n,{fontWeight:"medium",children:"Fourth panel"}),details:a.jsx(n,{color:"text.secondary",children:c})},{id:"5",summary:a.jsx(n,{fontWeight:"medium",children:"Fifth panel"}),details:a.jsx(n,{color:"text.secondary",children:c})}],x={args:{items:V,variant:"multiple"}},y={args:{items:i,square:!0,disableAnimation:!0}},f={args:{items:[...i,{id:"disabled",summary:a.jsx(n,{fontWeight:"medium",children:"Disabled panel"}),details:a.jsx(n,{color:"text.secondary",children:"You cannot expand this."}),disabled:!0}]}},h={args:{items:[i[0],i[1],{id:"actions",summary:a.jsx(n,{fontWeight:"medium",children:"Accordion Actions"}),details:a.jsxs(P,{children:[a.jsx(n,{color:"text.secondary",sx:{mb:2},children:c}),a.jsxs(P,{sx:{display:"flex",gap:1,justifyContent:"flex-end"},children:[a.jsx(j,{variant:"outlined",size:"small",children:"Cancel"}),a.jsx(j,{variant:"contained",size:"small",children:"Agree"})]})]})}]}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    variant: 'multiple'
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    variant: 'single'
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: manyItems,
    variant: 'multiple'
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    square: true,
    disableAnimation: true
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: [...defaultItems, {
      id: 'disabled',
      summary: <Typography fontWeight="medium">Disabled panel</Typography>,
      details: <Typography color="text.secondary">You cannot expand this.</Typography>,
      disabled: true
    }]
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: [defaultItems[0], defaultItems[1], {
      id: 'actions',
      summary: <Typography fontWeight="medium">Accordion Actions</Typography>,
      details: <Box>
            <Typography color="text.secondary" sx={{
          mb: 2
        }}>
              {lorem}
            </Typography>
            <Box sx={{
          display: 'flex',
          gap: 1,
          justifyContent: 'flex-end'
        }}>
              <Button variant="outlined" size="small">
                Cancel
              </Button>
              <Button variant="contained" size="small">
                Agree
              </Button>
            </Box>
          </Box>
    }]
  }
}`,...h.parameters?.docs?.source}}};const O=["Default","SingleVariant","WithManyItems","SquareNoAnimation","DisabledItem","WithActions"],ae=Object.freeze(Object.defineProperty({__proto__:null,Default:u,DisabledItem:f,SingleVariant:g,SquareNoAnimation:y,WithActions:h,WithManyItems:x,__namedExportsOrder:O,default:N},Symbol.toStringTag,{value:"Module"}));export{ae as A};
