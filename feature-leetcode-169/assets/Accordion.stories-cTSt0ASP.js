import{A as a,F as P}from"./iframe-8XyRltnI.js";import{c as v}from"./createSvgIcon-Bk-RypJJ.js";import{E as T}from"./ExpandMore-COv0gYWD.js";import{u as W}from"./useControlled-A5zdB2oZ.js";import{e as h}from"./memoTheme-CZ20iG9B.js";import{P as q}from"./Paper-BO_95rNT.js";import{A as w,b as C,a as E}from"./AccordionSummary-DdT4LC9C.js";import{B as A}from"./Box-Dez7nLso.js";import{T as s}from"./Typography-b-paDIyj.js";import{B as I}from"./Button-BFyLHUX1.js";const M=v(a.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}));function B(e){return e.filter(r=>r.defaultExpanded).map(r=>r.id)}function D(e,r,c){return c==="single"?e.includes(r)?[]:[r]:e.includes(r)?e.filter(t=>t!==r):[...e,r]}const k=e=>{const{items:r,expandedIds:c,onExpandedChange:t,variant:i="multiple"}=e,[l,n]=W({controlled:c,default:B(r),name:"Accordion",state:"expandedIds"}),b=P.useCallback(m=>()=>{const j=D(l,m,i);n(j),t&&t(j)},[l,i,n,t]);return{itemsWithState:r.map(m=>({...m,expanded:l.includes(m.id),onChange:b(m.id)}))}},_=h(q,{shouldForwardProp:e=>e!=="square"})(({theme:e,square:r})=>({maxWidth:e.spacing(152),width:"100%",padding:e.spacing(3),backgroundColor:e.palette.background.paper,border:`1px solid ${e.palette.divider}`,...!r&&{borderRadius:e.shape.borderRadius},transition:e.transitions.create(["border-radius"],{duration:e.transitions.duration.shortest})})),z=h(A)(({theme:e})=>({display:"flex",alignItems:"center",minHeight:e.spacing(5.5),minWidth:e.spacing(5.5)})),$=h(w,{shouldForwardProp:e=>e!=="square"})(({theme:e,square:r})=>({backgroundColor:"transparent",boxShadow:"none",margin:0,"&:before":{display:"none"},"&:not(:last-child)":{borderBottom:`1px solid ${e.palette.divider}`},...!r&&{borderRadius:0},[e.breakpoints.down("sm")]:{margin:0}})),F=h(C)(({theme:e})=>({padding:e.spacing(0,2),minHeight:e.spacing(5.5),"& .MuiAccordionSummary-content":{margin:e.spacing(1.5,0),"&.Mui-expanded":{margin:e.spacing(1.5,0)}},"& .MuiTypography-root":{color:e.palette.grey[900]},"& .MuiAccordionSummary-expandIconWrapper":{transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.short}),transform:"scale(1)"},"&.Mui-expanded .MuiAccordionSummary-expandIconWrapper":{transform:"scale(1.1)"},[e.breakpoints.down("sm")]:{padding:e.spacing(0,1.5),"& .MuiAccordionSummary-content":{margin:e.spacing(1,0)}}})),R=h(E)(({theme:e})=>({padding:e.spacing(2),[e.breakpoints.down("sm")]:{padding:e.spacing(1.5)}})),S=e=>{const{itemsWithState:r}=k(e),{disableAnimation:c,square:t,slotProps:i,expandIcon:l}=e;return a.jsx(_,{square:t,"data-testid":"accordion-container",children:r.map(n=>{const b=l||(n.expanded?a.jsx(M,{}):a.jsx(T,{}));return a.jsxs($,{disableGutters:!0,square:t,TransitionProps:{timeout:c?0:void 0},...i?.accordion,expanded:n.expanded,onChange:n.onChange,disabled:n.disabled,"data-testid":`accordion-${n.id}`,children:[a.jsx(F,{...i?.summary,expandIcon:a.jsx(z,{children:b}),"data-testid":`accordion-summary-${n.id}`,children:n.summary}),a.jsx(R,{...i?.details,"data-testid":`accordion-details-${n.id}`,children:n.details})]},n.id)})})};S.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionItem"}],raw:"AccordionItem[]"},description:""},expandedIds:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onExpandedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(expandedIds: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"expandedIds"}],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'single' | 'multiple'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'multiple'"}]},description:""},disableAnimation:{required:!1,tsType:{name:"boolean"},description:""},square:{required:!1,tsType:{name:"boolean"},description:""},expandIcon:{required:!1,tsType:{name:"ReactNode"},description:""},slotProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  accordion?: Partial<MuiAccordionProps>;
  summary?: Partial<AccordionSummaryProps>;
  details?: Partial<AccordionDetailsProps>;
}`,signature:{properties:[{key:"accordion",value:{name:"Partial",elements:[{name:"MuiAccordionProps"}],raw:"Partial<MuiAccordionProps>",required:!1}},{key:"summary",value:{name:"Partial",elements:[{name:"AccordionSummaryProps"}],raw:"Partial<AccordionSummaryProps>",required:!1}},{key:"details",value:{name:"Partial",elements:[{name:"AccordionDetailsProps"}],raw:"Partial<AccordionDetailsProps>",required:!1}}]}},description:""}}};const L={title:"Components/Accordion",component:S,parameters:{layout:"centered"},decorators:[e=>a.jsx(A,{sx:{width:"100%",maxWidth:r=>r.spacing(152),mx:"auto",p:2},children:a.jsx(e,{})})]},d="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",o=[{id:"1",summary:a.jsx(s,{fontWeight:"medium",children:"Is it accessible?"}),details:a.jsx(s,{color:"text.secondary",children:d})},{id:"2",summary:a.jsx(s,{fontWeight:"medium",children:"Is it styled?"}),details:a.jsx(s,{color:"text.secondary",children:d}),defaultExpanded:!0},{id:"3",summary:a.jsx(s,{fontWeight:"medium",children:"Is it animated?"}),details:a.jsx(s,{color:"text.secondary",children:d})}],p={args:{items:o,variant:"multiple"}},u={args:{items:o,variant:"single"}},N=[...o,{id:"4",summary:a.jsx(s,{fontWeight:"medium",children:"Fourth panel"}),details:a.jsx(s,{color:"text.secondary",children:d})},{id:"5",summary:a.jsx(s,{fontWeight:"medium",children:"Fifth panel"}),details:a.jsx(s,{color:"text.secondary",children:d})}],g={args:{items:N,variant:"multiple"}},x={args:{items:o,square:!0,disableAnimation:!0}},y={args:{items:[...o,{id:"disabled",summary:a.jsx(s,{fontWeight:"medium",children:"Disabled panel"}),details:a.jsx(s,{color:"text.secondary",children:"You cannot expand this."}),disabled:!0}]}},f={args:{items:[o[0],o[1],{id:"actions",summary:a.jsx(s,{fontWeight:"medium",children:"Accordion Actions"}),details:a.jsxs(A,{children:[a.jsx(s,{color:"text.secondary",sx:{mb:2},children:d}),a.jsxs(A,{sx:{display:"flex",gap:1,justifyContent:"flex-end"},children:[a.jsx(I,{variant:"outlined",size:"small",children:"Cancel"}),a.jsx(I,{variant:"contained",size:"small",children:"Agree"})]})]})}]}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    variant: 'multiple'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    variant: 'single'
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: manyItems,
    variant: 'multiple'
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    square: true,
    disableAnimation: true
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: [...defaultItems, {
      id: 'disabled',
      summary: <Typography fontWeight="medium">Disabled panel</Typography>,
      details: <Typography color="text.secondary">You cannot expand this.</Typography>,
      disabled: true
    }]
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const O=["Default","SingleVariant","WithManyItems","SquareNoAnimation","DisabledItem","WithActions"],ae=Object.freeze(Object.defineProperty({__proto__:null,Default:p,DisabledItem:y,SingleVariant:u,SquareNoAnimation:x,WithActions:f,WithManyItems:g,__namedExportsOrder:O,default:L},Symbol.toStringTag,{value:"Module"}));export{ae as A};
