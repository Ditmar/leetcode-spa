import{B as r,H as g}from"./iframe-DHtBWT0-.js";import{c as M,a as O,s as c,u as G,n as V,b as $,o as H,F as U,C as L}from"./schemas-CZlruCVC.js";import{S as z}from"./Search-078DadoR.js";import{e as l}from"./memoTheme-CJac86lv.js";import{F as N}from"./FormControl-79eeBe9s.js";import{F as W}from"./FormHelperText-BwPOBwFo.js";import{B as K}from"./Button-CXi_58bN.js";import{T as Y}from"./TextField-CQtipEQU.js";import{o as T}from"./Select-CP591G70.js";import{u as w}from"./useTheme-CRvnKBC4.js";import{I as J}from"./InputAdornment-Cj6mQ3H4.js";import{F as v}from"./FormControlLabel-D5J7CffX.js";import{C as Q}from"./Checkbox--7j9iz7S.js";import{F as X}from"./FormLabel-C-iUB2um.js";import{a as Z,R as ee}from"./RadioGroup-cmH8eSwv.js";import{M as F}from"./MenuItem-D3IEJnXu.js";const ae=l("form")(({theme:e})=>({width:"100%",maxWidth:e.breakpoints.values.xl,minHeight:e.spacing(38),display:"flex",flexDirection:"column",padding:e.spacing(3),borderRadius:e.shape.borderRadius*2,border:`1px solid ${e.palette.divider}`,backgroundColor:e.palette.background.paper,margin:"0 auto"})),re=l(N)(()=>({width:"100%"})),ne=l(Y)(({theme:e})=>({width:"100%",[`& .${T.root}`]:{backgroundColor:e.palette.action.hover,[`& .${T.notchedOutline}`]:{border:"none"}}})),te=l(W)(({theme:e})=>({marginLeft:0,color:e.palette.error.main})),se=l("div")(({theme:e})=>({marginTop:e.spacing(2)})),f=l(K)(({theme:e})=>({textTransform:"none",borderRadius:e.shape.borderRadius})),oe=l("div")(({theme:e})=>({display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gap:e.spacing(2),[e.breakpoints.down("sm")]:{gridTemplateColumns:"1fr"}})),le=l("div")(({theme:e,span:a})=>({gridColumn:`span ${a}`,[e.breakpoints.down("sm")]:{gridColumn:"span 12"}})),S=e=>a=>{e(a.target.value)},ie=e=>a=>{e(a.target.checked)},p=({field:e,ctrlField:a,disabled:n,errors:t,children:s})=>r.jsx(ne,{id:e.name,label:e.label,fullWidth:!0,value:a.value??"",onChange:S(a.onChange),placeholder:e.placeholder,disabled:n||e.disabled,error:!!t[e.name],children:s}),de=e=>r.jsxs(p,{field:e.field,ctrlField:e.ctrlField,disabled:e.disabled,errors:e.errors,children:[r.jsx(F,{value:"",children:r.jsx("em",{children:"Select an option"})}),e.field.options?.map(a=>r.jsx(F,{value:a.value,children:a.label},a.value))]}),me=({field:e,ctrlField:a,disabled:n})=>{const t=w();return r.jsxs(r.Fragment,{children:[r.jsx(X,{sx:{marginBottom:t.spacing(1)},children:e.label}),r.jsx(Z,{value:a.value??"",onChange:S(a.onChange),row:!0,children:e.options?.map(s=>r.jsx(v,{value:s.value,control:r.jsx(ee,{size:"small"}),label:s.label,disabled:n||e.disabled},s.value))})]})},ue=({field:e,ctrlField:a,disabled:n})=>r.jsx(v,{control:r.jsx(Q,{size:"small",checked:!!a.value,onChange:ie(a.onChange),disabled:n||e.disabled}),label:e.label}),ce=e=>r.jsx(p,{field:e.field,ctrlField:e.ctrlField,disabled:e.disabled,errors:e.errors}),pe=({field:e,ctrlField:a,disabled:n,errors:t})=>{const s=w();return r.jsx(p,{field:e,ctrlField:a,disabled:n,errors:t,children:e.type==="search"&&r.jsx(J,{position:"start",children:r.jsx(z,{fontSize:"small",sx:{color:s.palette.text.secondary}})})})},j=({field:e,ctrlField:a,disabled:n,errors:t})=>{switch(e.type){case"select":return r.jsx(de,{field:e,ctrlField:a,disabled:n,errors:t});case"radio":return r.jsx(me,{field:e,ctrlField:a,disabled:n,errors:t});case"checkbox":return r.jsx(ue,{field:e,ctrlField:a,disabled:n,errors:t});case"textarea":return r.jsx(ce,{field:e,ctrlField:a,disabled:n,errors:t});default:return r.jsx(pe,{field:e,ctrlField:a,disabled:n,errors:t})}};j.__docgenInfo={description:"",methods:[],displayName:"renderFieldByType",props:{field:{required:!0,tsType:{name:"FormField"},description:""},ctrlField:{required:!0,tsType:{name:"ControllerRenderProps",elements:[{name:"T"},{name:"Path",elements:[{name:"T"}],raw:"Path<T>"}],raw:"ControllerRenderProps<T, Path<T>>"},description:""},disabled:{required:!0,tsType:{name:"boolean"},description:""},errors:{required:!0,tsType:{name:"FieldErrors",elements:[{name:"T"}],raw:"FieldErrors<T>"},description:""}}};const be=(e,a)=>M({resolver:e?O(e):void 0,defaultValues:a,mode:"onChange",reValidateMode:"onChange",criteriaMode:"firstError"}),he=e=>{const a={};return e.forEach(n=>{let t;switch(n.type){case"email":t=c().email(`Invalid ${n.label.toLowerCase()}`);break;case"password":t=c().min(6,"Password must be at least 6 characters");break;case"checkbox":t=$(),n.required&&(t=t.refine(s=>s===!0,{message:`${n.label} must be accepted`}));break;case"select":case"radio":t=G([c(),V()]);break;case"textarea":case"text":case"search":default:t=c();break}n.required&&n.type!=="checkbox"?t=t.refine(s=>s!==""&&s!==null&&s!==void 0,{message:`${n.label} is required`}):n.required||(t=t.optional()),a[n.name]=t}),H(a)},C=({fields:e,onSubmit:a,defaultValues:n,disabled:t=!1,submitButtonText:s,resetButtonText:B,showResetButton:k=!0})=>{const R=g.useMemo(()=>n||e.reduce((o,u)=>(o[u.name]=u.type==="checkbox"?!1:"",o),{}),[e,n]),D=g.useMemo(()=>he(e),[e]),I=be(D,R),{reset:b,control:h,handleSubmit:x,formState:y,watch:_,setValue:E,getValues:P,trigger:A}=I,m=y.errors;return r.jsx(U,{reset:b,control:h,handleSubmit:x,formState:y,watch:_,setValue:E,getValues:P,trigger:A,children:r.jsxs(ae,{onSubmit:x(a),children:[r.jsx(oe,{children:e.map(o=>r.jsx(le,{span:o.span||12,children:r.jsxs(re,{error:!!m[o.name],children:[r.jsx(L,{name:o.name,control:h,render:({field:u})=>j({field:o,ctrlField:u,disabled:t,errors:m})}),m[o.name]?.message&&r.jsx(te,{children:String(m[o.name]?.message)})]})},o.name))}),r.jsxs(se,{children:[r.jsx(f,{type:"submit",variant:"contained",children:s||"Submit"}),k&&r.jsx(f,{type:"button",variant:"outlined",onClick:()=>b(),children:B||"Reset"})]})]})})};C.__docgenInfo={description:"",methods:[],displayName:"Form",props:{fields:{required:!0,tsType:{name:"Array",elements:[{name:"FormField"}],raw:"FormField[]"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: T) => void",signature:{arguments:[{type:{name:"T"},name:"data"}],return:{name:"void"}}},description:""},defaultValues:{required:!1,tsType:{name:"DefaultValues",elements:[{name:"T"}],raw:"DefaultValues<T>"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},submitButtonText:{required:!1,tsType:{name:"string"},description:""},resetButtonText:{required:!1,tsType:{name:"string"},description:""},showResetButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const{action:q}=__STORYBOOK_MODULE_ACTIONS__,xe={title:"component-catalog/Form",component:C,parameters:{docs:{description:{component:"A flexible, schema-driven form builder built with React Hook Form and Material-UI."}}}},i={args:{fields:[{name:"email",label:"Email",type:"email",span:6,placeholder:"email@example.com",required:!0},{name:"password",label:"Password",type:"password",span:6,placeholder:"********",required:!0},{name:"search",label:"Search with icon",type:"search",span:6,placeholder:"Search...",required:!0},{name:"disabled",label:"Disabled Input",type:"text",span:6,disabled:!0,placeholder:"Disabled"},{name:"bio",label:"Bio",type:"textarea",span:12,rows:4,placeholder:"Tell us about yourself..."}],onSubmit:q("Form submitted"),submitButtonText:"Submit",resetButtonText:"Reset",showResetButton:!0}},d={args:{fields:[{name:"username",label:"Username",type:"text",span:6,placeholder:"Enter username",required:!0},{name:"email",label:"Email",type:"email",span:6,placeholder:"email@example.com",required:!0},{name:"password",label:"Password",type:"password",span:6,placeholder:"••••••••",required:!0},{name:"search",label:"Search with icon",type:"search",span:6,placeholder:"Search...",required:!0},{name:"role",label:"Role",type:"select",span:6,options:[{label:"Admin",value:"admin"},{label:"User",value:"user"},{label:"Guest",value:"guest"}],required:!0},{name:"gender",label:"Gender",type:"radio",span:4,options:[{label:"Male",value:"male"},{label:"Female",value:"female"},{label:"Other",value:"other"}]},{name:"terms",label:"Accept Terms",type:"checkbox",span:12,required:!0},{name:"disabled",label:"Disabled Input",type:"text",span:6,placeholder:"Disabled",disabled:!0},{name:"bio",label:"Bio",type:"textarea",span:12,rows:4,placeholder:"Tell us about yourself..."}],onSubmit:q("Form submitted"),submitButtonText:"Submit Form",resetButtonText:"Clear Form",showResetButton:!0}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    fields: [{
      name: 'email',
      label: 'Email',
      type: 'email',
      span: 6,
      placeholder: 'email@example.com',
      required: true
    }, {
      name: 'password',
      label: 'Password',
      type: 'password',
      span: 6,
      placeholder: '********',
      required: true
    }, {
      name: 'search',
      label: 'Search with icon',
      type: 'search',
      span: 6,
      placeholder: 'Search...',
      required: true
    }, {
      name: 'disabled',
      label: 'Disabled Input',
      type: 'text',
      span: 6,
      disabled: true,
      placeholder: 'Disabled'
    }, {
      name: 'bio',
      label: 'Bio',
      type: 'textarea',
      span: 12,
      rows: 4,
      placeholder: 'Tell us about yourself...'
    }] as FormField[],
    onSubmit: action('Form submitted'),
    submitButtonText: 'Submit',
    resetButtonText: 'Reset',
    showResetButton: true
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    fields: [{
      name: 'username',
      label: 'Username',
      type: 'text',
      span: 6,
      placeholder: 'Enter username',
      required: true
    }, {
      name: 'email',
      label: 'Email',
      type: 'email',
      span: 6,
      placeholder: 'email@example.com',
      required: true
    }, {
      name: 'password',
      label: 'Password',
      type: 'password',
      span: 6,
      placeholder: '••••••••',
      required: true
    }, {
      name: 'search',
      label: 'Search with icon',
      type: 'search',
      span: 6,
      placeholder: 'Search...',
      required: true
    }, {
      name: 'role',
      label: 'Role',
      type: 'select',
      span: 6,
      options: [{
        label: 'Admin',
        value: 'admin'
      }, {
        label: 'User',
        value: 'user'
      }, {
        label: 'Guest',
        value: 'guest'
      }],
      required: true
    } as FormField, {
      name: 'gender',
      label: 'Gender',
      type: 'radio',
      span: 4,
      options: [{
        label: 'Male',
        value: 'male'
      }, {
        label: 'Female',
        value: 'female'
      }, {
        label: 'Other',
        value: 'other'
      }]
    }, {
      name: 'terms',
      label: 'Accept Terms',
      type: 'checkbox',
      span: 12,
      required: true
    }, {
      name: 'disabled',
      label: 'Disabled Input',
      type: 'text',
      span: 6,
      placeholder: 'Disabled',
      disabled: true
    }, {
      name: 'bio',
      label: 'Bio',
      type: 'textarea',
      span: 12,
      rows: 4,
      placeholder: 'Tell us about yourself...'
    }] as FormField[],
    onSubmit: action('Form submitted'),
    submitButtonText: 'Submit Form',
    resetButtonText: 'Clear Form',
    showResetButton: true
  }
}`,...d.parameters?.docs?.source}}};const ye=["Default","AllFieldTypes"],Ee=Object.freeze(Object.defineProperty({__proto__:null,AllFieldTypes:d,Default:i,__namedExportsOrder:ye,default:xe},Symbol.toStringTag,{value:"Module"}));export{i as D,Ee as F};
