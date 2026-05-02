import{j as a,r as P}from"./iframe-DyrShmke.js";import{c as v}from"./createSvgIcon-CEmvsKSO.js";import{E as T}from"./ExpandMore-XKfshRJ5.js";import{u as W}from"./useControlled-C9hDI8Y6.js";import{s as f}from"./memoTheme-B8rdOO-C.js";import{P as q}from"./Paper-ByOtFkqy.js";import{A as w,a as C,b as E}from"./AccordionSummary-Df2xiAtY.js";import{B as h}from"./Box-Bhvvn0O_.js";import{T as n}from"./Typography-DSwdAlHq.js";import{B as j}from"./Button-Vd8NxLP_.js";const M=v(a.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}));function B(e){return e.filter(r=>r.defaultExpanded).map(r=>r.id)}function D(e,r,c){return c==="single"?e.includes(r)?[]:[r]:e.includes(r)?e.filter(t=>t!==r):[...e,r]}const k=e=>{const{items:r,expandedIds:c,onExpandedChange:t,variant:i="multiple"}=e,[s,A]=W({controlled:c,default:B(r),name:"Accordion",state:"expandedIds"}),I=P.useCallback(l=>()=>{const b=D(s,l,i);A(b),t?.(b)},[s,i,A,t]);return{itemsWithState:r.map(l=>({...l,expanded:s.includes(l.id),onChange:I(l.id)}))}},_=f(q,{shouldForwardProp:e=>e!=="square"})(({theme:e,square:r})=>({maxWidth:1216,width:"100%",padding:e.spacing(3),backgroundColor:e.palette.background.paper,border:`1px solid ${e.palette.divider}`,...!r&&{borderRadius:e.spacing(1.75)},transition:e.transitions.create(["border-radius"],{duration:e.transitions.duration.shortest})})),z=f(h)(({theme:e})=>({display:"flex",alignItems:"center",minHeight:e.spacing(5.5),minWidth:e.spacing(5.5)})),$=f(w,{shouldForwardProp:e=>e!=="square"})(({theme:e,square:r})=>({backgroundColor:"transparent",boxShadow:"none",margin:0,"&:before":{display:"none"},"&:not(:last-child)":{borderBottom:`1px solid ${e.palette.divider}`},...!r&&{borderRadius:0},[e.breakpoints.down("sm")]:{margin:0}})),F=f(C)(({theme:e})=>({padding:e.spacing(0,2),minHeight:e.spacing(5.5),"& .MuiAccordionSummary-content":{margin:e.spacing(1.5,0),"&.Mui-expanded":{margin:e.spacing(1.5,0)}},"& .MuiTypography-root":{color:e.palette.grey[900]},"& .MuiAccordionSummary-expandIconWrapper":{transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.short}),transform:"scale(1)"},"&.Mui-expanded .MuiAccordionSummary-expandIconWrapper":{transform:"scale(1.1)"},[e.breakpoints.down("sm")]:{padding:e.spacing(0,1.5),"& .MuiAccordionSummary-content":{margin:e.spacing(1,0)}}})),L=f(E)(({theme:e})=>({padding:e.spacing(2),[e.breakpoints.down("sm")]:{padding:e.spacing(1.5)}})),S=e=>{const{itemsWithState:r}=k(e),{disableAnimation:c,square:t,slotProps:i}=e;return a.jsx(_,{square:t,"data-testid":"accordion-container",children:r.map(s=>a.jsxs($,{expanded:s.expanded,onChange:s.onChange,disabled:s.disabled,disableGutters:!0,square:t,TransitionProps:{timeout:c?0:void 0},...i?.accordion,"data-testid":`accordion-${s.id}`,children:[a.jsx(F,{expandIcon:a.jsx(z,{children:s.expanded?a.jsx(M,{}):a.jsx(T,{})}),...i?.summary,"data-testid":`accordion-summary-${s.id}`,children:s.summary}),a.jsx(L,{...i?.details,"data-testid":`accordion-details-${s.id}`,children:s.details})]},s.id))})};S.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionItem"}],raw:"AccordionItem[]"},description:""},expandedIds:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onExpandedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(expandedIds: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"expandedIds"}],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'single' | 'multiple'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'multiple'"}]},description:""},disableAnimation:{required:!1,tsType:{name:"boolean"},description:""},square:{required:!1,tsType:{name:"boolean"},description:""},slotProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  accordion?: Partial<MuiAccordionProps>;
  summary?: Partial<AccordionSummaryProps>;
  details?: Partial<AccordionDetailsProps>;
}`,signature:{properties:[{key:"accordion",value:{name:"Partial",elements:[{name:"MuiAccordionProps"}],raw:"Partial<MuiAccordionProps>",required:!1}},{key:"summary",value:{name:"Partial",elements:[{name:"AccordionSummaryProps"}],raw:"Partial<AccordionSummaryProps>",required:!1}},{key:"details",value:{name:"Partial",elements:[{name:"AccordionDetailsProps"}],raw:"Partial<AccordionDetailsProps>",required:!1}}]}},description:""}}};const N={title:"Components/Accordion",component:S,parameters:{layout:"centered"},decorators:[e=>a.jsx(h,{sx:{width:"100%",maxWidth:1216,mx:"auto",p:2},children:a.jsx(e,{})})]},d="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",o=[{id:"1",summary:a.jsx(n,{fontWeight:"medium",children:"Is it accessible?"}),details:a.jsx(n,{color:"text.secondary",children:d})},{id:"2",summary:a.jsx(n,{fontWeight:"medium",children:"Is it styled?"}),details:a.jsx(n,{color:"text.secondary",children:d}),defaultExpanded:!0},{id:"3",summary:a.jsx(n,{fontWeight:"medium",children:"Is it animated?"}),details:a.jsx(n,{color:"text.secondary",children:d})}],m={args:{items:o,variant:"multiple"}},p={args:{items:o,variant:"single"}},O=[...o,{id:"4",summary:a.jsx(n,{fontWeight:"medium",children:"Fourth panel"}),details:a.jsx(n,{color:"text.secondary",children:d})},{id:"5",summary:a.jsx(n,{fontWeight:"medium",children:"Fifth panel"}),details:a.jsx(n,{color:"text.secondary",children:d})}],u={args:{items:O,variant:"multiple"}},g={args:{items:o,square:!0,disableAnimation:!0}},x={args:{items:[...o,{id:"disabled",summary:a.jsx(n,{fontWeight:"medium",children:"Disabled panel"}),details:a.jsx(n,{color:"text.secondary",children:"You cannot expand this."}),disabled:!0}]}},y={args:{items:[o[0],o[1],{id:"actions",summary:a.jsx(n,{fontWeight:"medium",children:"Accordion Actions"}),details:a.jsxs(h,{children:[a.jsx(n,{color:"text.secondary",sx:{mb:2},children:d}),a.jsxs(h,{sx:{display:"flex",gap:1,justifyContent:"flex-end"},children:[a.jsx(j,{variant:"outlined",size:"small",children:"Cancel"}),a.jsx(j,{variant:"contained",size:"small",children:"Agree"})]})]})}]}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    variant: 'multiple'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    variant: 'single'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: manyItems,
    variant: 'multiple'
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    square: true,
    disableAnimation: true
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: [...defaultItems, {
      id: 'disabled',
      summary: <Typography fontWeight="medium">Disabled panel</Typography>,
      details: <Typography color="text.secondary">You cannot expand this.</Typography>,
      disabled: true
    }]
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const R=["Default","SingleVariant","WithManyItems","SquareNoAnimation","DisabledItem","WithActions"],ae=Object.freeze(Object.defineProperty({__proto__:null,Default:m,DisabledItem:x,SingleVariant:p,SquareNoAnimation:g,WithActions:y,WithManyItems:u,__namedExportsOrder:R,default:N},Symbol.toStringTag,{value:"Module"}));export{ae as A};
