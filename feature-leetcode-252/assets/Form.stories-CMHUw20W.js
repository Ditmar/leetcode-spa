import{r as c,u as L,j as t,c as P,h as k,p as ie}from"./iframe-B-ONXQuN.js";import{u as ce,a as ue,c as de,s as j,o as pe,n as me,b as be,F as he,C as fe}from"./schemas-CwulLXk1.js";import{S as xe}from"./Search-BSfRladw.js";import{g as M,a as G,c as D,s as i,r as W,m as K}from"./memoTheme-BOnLbDzn.js";import{u as Y,f as ye,a as ge,b as Ce}from"./FormHelperText-F1zkSzmT.js";import{B as ve}from"./Button-DdLfCON9.js";import{T as Fe,o as $,F as we}from"./TextField-ZMJGIF8j.js";import{u as Z}from"./useTheme-BpqcXsTO.js";import{I as Se}from"./InputAdornment-_u9CZOpj.js";import{S as Re,F as J,C as Te}from"./FormControlLabel-CtICKXZL.js";import{u as je}from"./useControlled-D6CiMFS8.js";import{u as ke}from"./useForkRef-C0pYz4D2.js";import{c as Q}from"./createSvgIcon-ioV-qjne.js";import{c as N}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{u as Be}from"./useSlot-C_vgHDSy.js";import{c as qe}from"./Modal-ZuV6lIVf.js";import{M as V}from"./MenuItem-BKQOSx20.js";function Ie(e){return M("MuiFormGroup",e)}G("MuiFormGroup",["root","row","error"]);const Pe=e=>{const{classes:a,row:r,error:o}=e;return D({root:["root",r&&"row",o&&"error"]},Ie,a)},Me=i("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.root,r.row&&a.row]}})({display:"flex",flexDirection:"column",flexWrap:"wrap",variants:[{props:{row:!0},style:{flexDirection:"row"}}]}),Ge=c.forwardRef(function(a,r){const o=L({props:a,name:"MuiFormGroup"}),{className:n,row:p=!1,...x}=o,m=Y(),d=ye({props:o,muiFormControl:m,states:["error"]}),b={...o,row:p,error:d.error},u=Pe(b);return t.jsx(Me,{className:P(u.root,n),ownerState:b,ref:r,...x})}),De=Q(t.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),ze=Q(t.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"})),Ee=i("span",{name:"MuiRadioButtonIcon",shouldForwardProp:W})({position:"relative",display:"flex"}),Oe=i(De,{name:"MuiRadioButtonIcon"})({transform:"scale(1)"}),_e=i(ze,{name:"MuiRadioButtonIcon"})(K(({theme:e})=>({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest}),variants:[{props:{checked:!0},style:{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}}]})));function X(e){const{checked:a=!1,classes:r={},fontSize:o}=e,n={...e,checked:a};return t.jsxs(Ee,{className:r.root,ownerState:n,children:[t.jsx(Oe,{fontSize:o,className:r.background,ownerState:n}),t.jsx(_e,{fontSize:o,className:r.dot,ownerState:n})]})}const ee=c.createContext(void 0);function Ue(){return c.useContext(ee)}function $e(e){return M("MuiRadio",e)}const A=G("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),Ne=e=>{const{classes:a,color:r,size:o}=e,n={root:["root",`color${k(r)}`,o!=="medium"&&`size${k(o)}`]};return{...a,...D(n,$e,a)}},Ve=i(Re,{shouldForwardProp:e=>W(e)||e==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.root,r.size!=="medium"&&a[`size${k(r.size)}`],a[`color${k(r.color)}`]]}})(K(({theme:e})=>({color:(e.vars||e).palette.text.secondary,[`&.${A.disabled}`]:{color:(e.vars||e).palette.action.disabled},variants:[{props:{color:"default",disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:e.alpha((e.vars||e).palette.action.active,(e.vars||e).palette.action.hoverOpacity)}}},...Object.entries(e.palette).filter(N()).map(([a])=>({props:{color:a,disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:e.alpha((e.vars||e).palette[a].main,(e.vars||e).palette.action.hoverOpacity)}}})),...Object.entries(e.palette).filter(N()).map(([a])=>({props:{color:a,disabled:!1},style:{[`&.${A.checked}`]:{color:(e.vars||e).palette[a].main}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]})));function Ae(e,a){return typeof a=="object"&&a!==null?e===a:String(e)===String(a)}const He=t.jsx(X,{checked:!0}),Le=t.jsx(X,{}),We=c.forwardRef(function(a,r){const o=L({props:a,name:"MuiRadio"}),{checked:n,checkedIcon:p=He,color:x="primary",icon:m=Le,name:d,onChange:b,size:u="medium",className:h,disabled:C,disableRipple:y=!1,slots:g={},slotProps:v={},inputProps:F,...w}=o,s=Y();let l=C;s&&typeof l>"u"&&(l=s.disabled),l??=!1;const f={...o,disabled:l,disableRipple:y,color:x,size:u},E=Ne(f),S=Ue();let B=n;const ne=qe(b,S&&S.onChange);let q=d;S&&(typeof B>"u"&&(B=Ae(S.value,o.value)),typeof q>"u"&&(q=S.name));const I=v.input??F,[se,le]=Be("root",{ref:r,elementType:Ve,className:P(E.root,h),shouldForwardComponentProp:!0,externalForwardedProps:{slots:g,slotProps:v,...w},getSlotProps:O=>({...O,onChange:(_,...U)=>{O.onChange?.(_,...U),ne(_,...U)}}),ownerState:f,additionalProps:{type:"radio",icon:c.cloneElement(m,{fontSize:m.props.fontSize??u}),checkedIcon:c.cloneElement(p,{fontSize:p.props.fontSize??u}),disabled:l,name:q,checked:B,slots:g,slotProps:{input:typeof I=="function"?I(f):I}}});return t.jsx(se,{...le,classes:E})});function Ke(e){return M("MuiRadioGroup",e)}G("MuiRadioGroup",["root","row","error"]);const Ye=e=>{const{classes:a,row:r,error:o}=e;return D({root:["root",r&&"row",o&&"error"]},Ke,a)},Ze=c.forwardRef(function(a,r){const{actions:o,children:n,className:p,defaultValue:x,name:m,onChange:d,value:b,...u}=a,h=c.useRef(null),C=Ye(a),[y,g]=je({controlled:b,default:x,name:"RadioGroup"});c.useImperativeHandle(o,()=>({focus:()=>{let s=h.current.querySelector("input:not(:disabled):checked");s||(s=h.current.querySelector("input:not(:disabled)")),s&&s.focus()}}),[]);const v=ke(r,h),F=ie(m),w=c.useMemo(()=>({name:F,onChange(s){g(s.target.value),d&&d(s,s.target.value)},value:y}),[F,d,g,y]);return t.jsx(ee.Provider,{value:w,children:t.jsx(Ge,{role:"radiogroup",ref:v,className:P(C.root,p),...u,children:n})})}),Je=i("form")(({theme:e})=>({width:"100%",maxWidth:e.breakpoints.values.xl,minHeight:e.spacing(38),display:"flex",flexDirection:"column",padding:e.spacing(3),borderRadius:e.shape.borderRadius*2,border:`1px solid ${e.palette.divider}`,backgroundColor:e.palette.background.paper,margin:"0 auto"})),Qe=i(ge)(()=>({width:"100%"})),Xe=i(Fe)(({theme:e})=>({width:"100%",[`& .${$.root}`]:{backgroundColor:e.palette.action.hover,[`& .${$.notchedOutline}`]:{border:"none"}}})),ea=i(Ce)(({theme:e})=>({marginLeft:0,color:e.palette.error.main})),aa=i("div")(({theme:e})=>({marginTop:e.spacing(2)})),H=i(ve)(({theme:e})=>({textTransform:"none",borderRadius:e.shape.borderRadius})),ra=i("div")(({theme:e})=>({display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gap:e.spacing(2),[e.breakpoints.down("sm")]:{gridTemplateColumns:"1fr"}})),oa=i("div")(({theme:e,span:a})=>({gridColumn:`span ${a}`,[e.breakpoints.down("sm")]:{gridColumn:"span 12"}})),ae=e=>a=>{e(a.target.value)},ta=e=>a=>{e(a.target.checked)},z=({field:e,ctrlField:a,disabled:r,errors:o,children:n})=>t.jsx(Xe,{id:e.name,label:e.label,fullWidth:!0,value:a.value??"",onChange:ae(a.onChange),placeholder:e.placeholder,disabled:r||e.disabled,error:!!o[e.name],children:n}),na=e=>t.jsxs(z,{field:e.field,ctrlField:e.ctrlField,disabled:e.disabled,errors:e.errors,children:[t.jsx(V,{value:"",children:t.jsx("em",{children:"Select an option"})}),e.field.options?.map(a=>t.jsx(V,{value:a.value,children:a.label},a.value))]}),sa=({field:e,ctrlField:a,disabled:r})=>{const o=Z();return t.jsxs(t.Fragment,{children:[t.jsx(we,{sx:{marginBottom:o.spacing(1)},children:e.label}),t.jsx(Ze,{value:a.value??"",onChange:ae(a.onChange),row:!0,children:e.options?.map(n=>t.jsx(J,{value:n.value,control:t.jsx(We,{size:"small"}),label:n.label,disabled:r||e.disabled},n.value))})]})},la=({field:e,ctrlField:a,disabled:r})=>t.jsx(J,{control:t.jsx(Te,{size:"small",checked:!!a.value,onChange:ta(a.onChange),disabled:r||e.disabled}),label:e.label}),ia=e=>t.jsx(z,{field:e.field,ctrlField:e.ctrlField,disabled:e.disabled,errors:e.errors}),ca=({field:e,ctrlField:a,disabled:r,errors:o})=>{const n=Z();return t.jsx(z,{field:e,ctrlField:a,disabled:r,errors:o,children:e.type==="search"&&t.jsx(Se,{position:"start",children:t.jsx(xe,{fontSize:"small",sx:{color:n.palette.text.secondary}})})})},re=({field:e,ctrlField:a,disabled:r,errors:o})=>{switch(e.type){case"select":return t.jsx(na,{field:e,ctrlField:a,disabled:r,errors:o});case"radio":return t.jsx(sa,{field:e,ctrlField:a,disabled:r,errors:o});case"checkbox":return t.jsx(la,{field:e,ctrlField:a,disabled:r,errors:o});case"textarea":return t.jsx(ia,{field:e,ctrlField:a,disabled:r,errors:o});default:return t.jsx(ca,{field:e,ctrlField:a,disabled:r,errors:o})}};re.__docgenInfo={description:"",methods:[],displayName:"renderFieldByType",props:{field:{required:!0,tsType:{name:"FormField"},description:""},ctrlField:{required:!0,tsType:{name:"ControllerRenderProps",elements:[{name:"T"},{name:"Path",elements:[{name:"T"}],raw:"Path<T>"}],raw:"ControllerRenderProps<T, Path<T>>"},description:""},disabled:{required:!0,tsType:{name:"boolean"},description:""},errors:{required:!0,tsType:{name:"FieldErrors",elements:[{name:"T"}],raw:"FieldErrors<T>"},description:""}}};const ua=(e,a)=>ce({resolver:e?ue(e):void 0,defaultValues:a,mode:"onChange",reValidateMode:"onChange",criteriaMode:"firstError"}),da=e=>{const a={};return e.forEach(r=>{let o;switch(r.type){case"email":o=j().email(`Invalid ${r.label.toLowerCase()}`);break;case"password":o=j().min(6,"Password must be at least 6 characters");break;case"checkbox":o=be(),r.required&&(o=o.refine(n=>n===!0,{message:`${r.label} must be accepted`}));break;case"select":case"radio":o=de([j(),me()]);break;case"textarea":case"text":case"search":default:o=j();break}r.required&&r.type!=="checkbox"?o=o.refine(n=>n!==""&&n!==null&&n!==void 0,{message:`${r.label} is required`}):r.required||(o=o.optional()),a[r.name]=o}),pe(a)},oe=({fields:e,onSubmit:a,defaultValues:r,disabled:o=!1,submitButtonText:n,resetButtonText:p,showResetButton:x=!0})=>{const m=c.useMemo(()=>r||e.reduce((l,f)=>(l[f.name]=f.type==="checkbox"?!1:"",l),{}),[e,r]),d=c.useMemo(()=>da(e),[e]),b=ua(d,m),{reset:u,control:h,handleSubmit:C,formState:y,watch:g,setValue:v,getValues:F,trigger:w}=b,s=y.errors;return t.jsx(he,{reset:u,control:h,handleSubmit:C,formState:y,watch:g,setValue:v,getValues:F,trigger:w,children:t.jsxs(Je,{onSubmit:C(a),children:[t.jsx(ra,{children:e.map(l=>t.jsx(oa,{span:l.span||12,children:t.jsxs(Qe,{error:!!s[l.name],children:[t.jsx(fe,{name:l.name,control:h,render:({field:f})=>re({field:l,ctrlField:f,disabled:o,errors:s})}),s[l.name]?.message&&t.jsx(ea,{children:String(s[l.name]?.message)})]})},l.name))}),t.jsxs(aa,{children:[t.jsx(H,{type:"submit",variant:"contained",children:n||"Submit"}),x&&t.jsx(H,{type:"button",variant:"outlined",onClick:()=>u(),children:p||"Reset"})]})]})})};oe.__docgenInfo={description:"",methods:[],displayName:"Form",props:{fields:{required:!0,tsType:{name:"Array",elements:[{name:"FormField"}],raw:"FormField[]"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: T) => void",signature:{arguments:[{type:{name:"T"},name:"data"}],return:{name:"void"}}},description:""},defaultValues:{required:!1,tsType:{name:"DefaultValues",elements:[{name:"T"}],raw:"DefaultValues<T>"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},submitButtonText:{required:!1,tsType:{name:"string"},description:""},resetButtonText:{required:!1,tsType:{name:"string"},description:""},showResetButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const{action:te}=__STORYBOOK_MODULE_ACTIONS__,pa={title:"component-catalog/Form",component:oe,parameters:{docs:{description:{component:"A flexible, schema-driven form builder built with React Hook Form and Material-UI."}}}},R={args:{fields:[{name:"email",label:"Email",type:"email",span:6,placeholder:"email@example.com",required:!0},{name:"password",label:"Password",type:"password",span:6,placeholder:"********",required:!0},{name:"search",label:"Search with icon",type:"search",span:6,placeholder:"Search...",required:!0},{name:"disabled",label:"Disabled Input",type:"text",span:6,disabled:!0,placeholder:"Disabled"},{name:"bio",label:"Bio",type:"textarea",span:12,rows:4,placeholder:"Tell us about yourself..."}],onSubmit:te("Form submitted"),submitButtonText:"Submit",resetButtonText:"Reset",showResetButton:!0}},T={args:{fields:[{name:"username",label:"Username",type:"text",span:6,placeholder:"Enter username",required:!0},{name:"email",label:"Email",type:"email",span:6,placeholder:"email@example.com",required:!0},{name:"password",label:"Password",type:"password",span:6,placeholder:"••••••••",required:!0},{name:"search",label:"Search with icon",type:"search",span:6,placeholder:"Search...",required:!0},{name:"role",label:"Role",type:"select",span:6,options:[{label:"Admin",value:"admin"},{label:"User",value:"user"},{label:"Guest",value:"guest"}],required:!0},{name:"gender",label:"Gender",type:"radio",span:4,options:[{label:"Male",value:"male"},{label:"Female",value:"female"},{label:"Other",value:"other"}]},{name:"terms",label:"Accept Terms",type:"checkbox",span:12,required:!0},{name:"disabled",label:"Disabled Input",type:"text",span:6,placeholder:"Disabled",disabled:!0},{name:"bio",label:"Bio",type:"textarea",span:12,rows:4,placeholder:"Tell us about yourself..."}],onSubmit:te("Form submitted"),submitButtonText:"Submit Form",resetButtonText:"Clear Form",showResetButton:!0}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};const ma=["Default","AllFieldTypes"],Ia=Object.freeze(Object.defineProperty({__proto__:null,AllFieldTypes:T,Default:R,__namedExportsOrder:ma,default:pa},Symbol.toStringTag,{value:"Module"}));export{R as D,Ia as F};
