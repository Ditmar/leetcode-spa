import{j as r,r as g,a as F,c as H,h as m}from"./iframe-BIT9YYy4.js";import{a as w,g as O,s as C,c as _,r as $,m as q}from"./ButtonBase-CMiYqO9K.js";import{B as x}from"./Box-CjHG53Uu.js";import{S as D,F as E,a as N,b as U}from"./FormHelperText-1BaPIxGs.js";import{c as v}from"./createSvgIcon-D6FD0M_a.js";import{c as M}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{u as W}from"./useSlot-BxwCL-sU.js";import{m as A}from"./mergeSlotProps-C3-gAWU1.js";import{T as L}from"./Typography-D-gYcsrx.js";import{P as G}from"./Paper-C6mFr8Wt.js";const J=v(r.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})),K=v(r.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})),Q=v(r.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}));function X(e){return O("MuiCheckbox",e)}const k=w("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),Y=e=>{const{classes:o,indeterminate:a,color:t,size:l}=e,n={root:["root",a&&"indeterminate",`color${m(t)}`,`size${m(l)}`]},c=_(n,X,o);return{...o,...c}},Z=C(D,{shouldForwardProp:e=>$(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,a.indeterminate&&o.indeterminate,o[`size${m(a.size)}`],a.color!=="default"&&o[`color${m(a.color)}`]]}})(q(({theme:e})=>({color:(e.vars||e).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:e.alpha((e.vars||e).palette.action.active,(e.vars||e).palette.action.hoverOpacity)}}},...Object.entries(e.palette).filter(M()).map(([o])=>({props:{color:o,disableRipple:!1},style:{"&:hover":{backgroundColor:e.alpha((e.vars||e).palette[o].main,(e.vars||e).palette.action.hoverOpacity)}}})),...Object.entries(e.palette).filter(M()).map(([o])=>({props:{color:o},style:{[`&.${k.checked}, &.${k.indeterminate}`]:{color:(e.vars||e).palette[o].main},[`&.${k.disabled}`]:{color:(e.vars||e).palette.action.disabled}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),ee=r.jsx(K,{}),oe=r.jsx(J,{}),re=r.jsx(Q,{}),ae=g.forwardRef(function(o,a){const t=F({props:o,name:"MuiCheckbox"}),{checkedIcon:l=ee,color:n="primary",icon:c=oe,indeterminate:s=!1,indeterminateIcon:u=re,inputProps:f,size:i="medium",disableRipple:y=!1,className:R,slots:j={},slotProps:S={},...B}=t,P=s?u:c,z=s?u:l,b={...t,disableRipple:y,color:n,indeterminate:s,size:i},I=Y(b),h=S.input??f,[T,V]=W("root",{ref:a,elementType:Z,className:H(I.root,R),shouldForwardComponentProp:!0,externalForwardedProps:{slots:j,slotProps:S,...B},ownerState:b,additionalProps:{type:"checkbox",icon:g.cloneElement(P,{fontSize:P.props.fontSize??i}),checkedIcon:g.cloneElement(z,{fontSize:z.props.fontSize??i}),disableRipple:y,slots:j,slotProps:{input:A(typeof h=="function"?h(b):h,{"data-indeterminate":s})}}});return r.jsx(T,{...V,classes:I})}),te=C(x)(()=>({display:"inline-flex",flexDirection:"column"})),se=C(x)(({theme:e})=>({display:"flex",alignItems:"center",minHeight:e.spacing(5.5),minWidth:e.spacing(5.5),padding:e.spacing(.5)})),ie=(e,o)=>o?"mixed":e?"true":"false",d=({label:e,helperText:o,error:a=!1,disabled:t=!1,indeterminate:l=!1,size:n="medium",color:c="primary",checked:s,defaultChecked:u,onChange:f})=>r.jsx(E,{error:a,disabled:t,children:r.jsxs(te,{children:[r.jsx(N,{control:r.jsx(se,{children:r.jsx(ae,{checked:s,defaultChecked:u,onChange:f,indeterminate:l,disabled:t,size:n,color:c,sx:i=>({color:i.palette.grey[500],"&.Mui-checked":{color:i.palette.primary.main},"& .MuiSvgIcon-root":{fontSize:20},"&.Mui-disabled":{color:i.palette.action.disabled}}),inputProps:{"aria-checked":ie(s,l)}})}),label:e}),o&&r.jsx(U,{children:o})]})});d.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactNode"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1},indeterminate:{defaultValue:{value:"false",computed:!1},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1}},composes:["MuiCheckboxProps"]};const le={title:"Components/Checkbox",component:d},p={args:{label:"Accept terms and conditions",color:"primary"},render:e=>r.jsxs(x,{sx:{p:3,backgroundColor:"background.default",minHeight:"100vh"},children:[r.jsx(L,{variant:"h6",gutterBottom:!0,children:"Checkboxes"}),r.jsx(G,{elevation:0,sx:{p:2,borderRadius:o=>o.spacing(1),backgroundColor:"background.paper",border:"1px solid",borderColor:"divider",maxWidth:o=>o.spacing(45)},children:r.jsxs(x,{sx:{display:"flex",flexDirection:"column",gap:1},children:[r.jsx(d,{...e}),r.jsx(d,{label:"Receive marketing emails"}),r.jsx(d,{label:"Disabled option",disabled:!0})]})})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    color: 'primary'
  },
  render: args => <Box sx={{
    p: 3,
    backgroundColor: 'background.default',
    minHeight: '100vh'
  }}>
      <Typography variant="h6" gutterBottom>
        Checkboxes
      </Typography>

      <Paper elevation={0} sx={{
      p: 2,
      borderRadius: theme => theme.spacing(1),
      backgroundColor: 'background.paper',
      border: '1px solid',
      borderColor: 'divider',
      maxWidth: theme => theme.spacing(45)
    }}>
        <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }}>
          <Checkbox {...args} />
          <Checkbox label="Receive marketing emails" />
          <Checkbox label="Disabled option" disabled />
        </Box>
      </Paper>
    </Box>
}`,...p.parameters?.docs?.source}}};const ne=["MaterialStyle"],ke=Object.freeze(Object.defineProperty({__proto__:null,MaterialStyle:p,__namedExportsOrder:ne,default:le},Symbol.toStringTag,{value:"Module"}));export{ke as S};
