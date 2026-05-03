import{t as O,r as R,j as r}from"./iframe-I7upWdzt.js";import{F as j,a as q}from"./FormHelperText-BJwRdaW4.js";import{F as I}from"./FormLabel-WnbOylVD.js";import{R as k,a as G}from"./RadioGroup-DieVycra.js";import{F as W}from"./FormControlLabel-mCL9d26Q.js";const D=e=>({minHeight:e.spacing(6),"& .MuiTypography-root":{...e.typography.body2,color:e.palette.text.primary,fontWeight:e.typography.fontWeightMedium,lineHeight:1}}),_={display:"flex",width:"100%",flexDirection:"column",alignItems:"flex-start",gap:2},E=e=>({color:e.palette.text.primary,...e.typography.subtitle1,fontWeight:e.typography.fontWeightMedium,lineHeight:1.5,"&.Mui-focused":{color:e.palette.text.primary}}),F=e=>({flexDirection:{xs:"column",sm:e},flexWrap:"wrap",gap:0}),V={width:"1rem",height:"1rem",borderRadius:"50%",boxShadow:e=>e.shadows[1],display:"flex",alignItems:"center",justifyContent:"center"},H={width:"1rem",height:"1rem",borderRadius:"50%",backgroundColor:"transparent",display:"flex",alignItems:"center",justifyContent:"center"},L={width:"0.5rem",height:"0.5rem",borderRadius:"50%",backgroundColor:O.palette.text.primary},M=()=>r.jsx("span",{style:V,"aria-hidden":"true"}),P=()=>r.jsx("span",{style:H,"aria-hidden":"true",children:r.jsx("span",{style:L})}),f=({options:e,label:d,helperText:u,error:c=!1,direction:p="column",disabled:h=!1,required:m=!1,value:b,defaultValue:y,onChange:x,name:v})=>{const T=R.useId(),g=d?`${T}-radio-group-label`:void 0,w=b!==void 0,S=(a,C)=>{x?.(C)};return r.jsxs(j,{component:"fieldset",error:c,fullWidth:!0,disabled:h,sx:_,children:[d&&r.jsx(I,{id:g,required:m,sx:E,children:d}),r.jsx(k,{"data-testid":"radio-group",name:v,onChange:S,"aria-required":m,"aria-invalid":c||void 0,"aria-labelledby":g,row:p==="row",sx:F(p),...w?{value:b}:{defaultValue:y},children:e.map(a=>r.jsx(W,{value:a.value,control:r.jsx(G,{icon:r.jsx(M,{}),checkedIcon:r.jsx(P,{})}),label:a.label,disabled:a.disabled,sx:D},a.value))}),u&&r.jsx(q,{children:u})]})};f.__docgenInfo={description:"",methods:[],displayName:"CustomRadioGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"OptionValues"}],raw:"OptionValues[]"},description:""},label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:"",defaultValue:{value:"'column'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},name:{required:!1,tsType:{name:"string"},description:""}}};const z={title:"Component Catalog/RadioGroup",component:f,args:{options:[{label:"Option One",value:"1"},{label:"Option Two",value:"2"},{label:"Option Three",value:"3"}]}},o={args:{label:"Radio Group",direction:"column"}},t={args:{label:"Row Layout",direction:"row"}},n={args:{label:"Pick an option",helperText:"Select the option that best applies.",direction:"column"}},s={args:{label:"Pick an option",helperText:"This field is required.",error:!0,direction:"column"}},i={args:{label:"Some options disabled",options:[{label:"Option One",value:"1"},{label:"Option Two (unavailable)",value:"2",disabled:!0},{label:"Option Three",value:"3"}],direction:"column"}},l={args:{label:"Entire group disabled",disabled:!0,direction:"column"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Radio Group',
    direction: 'column'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Row Layout',
    direction: 'row'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Pick an option',
    helperText: 'Select the option that best applies.',
    direction: 'column'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Pick an option',
    helperText: 'This field is required.',
    error: true,
    direction: 'column'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Some options disabled',
    options: [{
      label: 'Option One',
      value: '1'
    }, {
      label: 'Option Two (unavailable)',
      value: '2',
      disabled: true
    }, {
      label: 'Option Three',
      value: '3'
    }],
    direction: 'column'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Entire group disabled',
    disabled: true,
    direction: 'column'
  }
}`,...l.parameters?.docs?.source}}};const A=["Default","Row","WithHelperText","ErrorState","WithDisabledOption","GroupDisabled"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:o,ErrorState:s,GroupDisabled:l,Row:t,WithDisabledOption:i,WithHelperText:n,__namedExportsOrder:A,default:z},Symbol.toStringTag,{value:"Module"}));export{Q as R};
