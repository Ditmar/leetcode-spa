import{j as e,T as b,t as S}from"./iframe-D9KvGxsk.js";import{s,B as p,T as u}from"./Box-CqN_EzUr.js";import{c as m,C as j}from"./Card-Ba4_y0_z.js";const x=m(e.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 17H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2z"})),d=m(e.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"})),y=s(j)(()=>({position:"relative",width:"296px",height:"158px",boxShadow:"0px 2px 8px rgba(0, 0, 0, 0.1)",borderRadius:"12px",border:"1px solid #fafafa",backgroundColor:"#fafafa",padding:0,overflow:"hidden",transition:"all 0.3s ease-in-out","&:hover":{boxShadow:"0px 8px 24px rgba(0, 0, 0, 0.15)"}})),C=s(p)({position:"absolute",width:"62px",height:"62px",left:"30px",top:"48px",backgroundColor:"#f8f6ff",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"}),T=s(p)({display:"flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px","& .MuiSvgIcon-root":{fontSize:"40px",color:"#B23deb"}}),z=s(p)({position:"absolute",width:"95px",height:"57px",left:"118px",top:"48px",display:"flex",flexDirection:"column"}),R=s(u)({fontFamily:"'Poppins', sans-serif",fontWeight:600,fontSize:"28px",lineHeight:"42px",color:"rgba(13, 13, 13, 0.8)",width:"53px",height:"31px",margin:0,padding:0}),A=s(u)({fontFamily:"'Syne', sans-serif",fontWeight:500,fontSize:"15px",lineHeight:"18px",color:"rgba(13, 13, 13, 0.5)",width:"95px",height:"18px",margin:0,padding:0,marginTop:"8px"});var g=(r=>(r.PRIMARY="primary",r.SECONDARY="secondary",r.SUCCESS="success",r.WARNING="warning",r.ERROR="error",r))(g||{});const a=({icon:r=e.jsx(d,{}),value:f,label:c,variant:E=g.PRIMARY,sx:h,...v})=>e.jsxs(y,{sx:h,elevation:0,role:"group","aria-label":`${c} statistic`,...v,children:[e.jsx(C,{"aria-label":`${c} icon background`,children:e.jsx(T,{"data-testid":"icon-wrapper",children:r})}),e.jsxs(z,{children:[e.jsx(R,{variant:"h6","aria-label":"stat-value",children:f}),e.jsx(A,{variant:"body2","aria-label":"stat-label",children:c})]})]});a.__docgenInfo={description:"",methods:[],displayName:"StatsCard",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"<Edit />",computed:!1}},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"StatsCardVariant"},description:"",defaultValue:{value:"StatsCardVariant.PRIMARY",computed:!0}},iconColor:{required:!1,tsType:{name:"string"},description:""},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""}}};const W={title:"Components/StatsCard",component:a,decorators:[r=>e.jsx(b,{theme:S,children:e.jsx(r,{})})],parameters:{layout:"centered"}},t={args:{icon:e.jsx(d,{sx:{fontSize:"40px"}}),value:"32",label:"Tests Written"}},o={args:{icon:e.jsx(d,{sx:{fontSize:"40px"}}),value:"32",label:"Tests Written"}},n={args:{icon:e.jsx(x,{sx:{fontSize:"40px"}}),value:"80%",label:"Overall Average"}},i={render:()=>e.jsxs(p,{sx:{display:"flex",gap:3,padding:4,backgroundColor:"#f5f5f5",borderRadius:2,flexWrap:"wrap"},children:[e.jsx(a,{icon:e.jsx(d,{sx:{fontSize:"40px"}}),value:"32",label:"Tests Written"}),e.jsx(a,{icon:e.jsx(x,{sx:{fontSize:"40px"}}),value:"80%",label:"Overall Average"})]})},l={render:()=>e.jsxs(p,{sx:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:2,padding:4,backgroundColor:"#f5f5f5",borderRadius:2,maxWidth:"1000px"},children:[e.jsx(a,{icon:e.jsx(d,{sx:{fontSize:"40px"}}),value:"32",label:"Tests Written"}),e.jsx(a,{icon:e.jsx(x,{sx:{fontSize:"40px"}}),value:"80%",label:"Overall Average"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Edit sx={{
      fontSize: '40px'
    }} />,
    value: '32',
    label: 'Tests Written'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Edit sx={{
      fontSize: '40px'
    }} />,
    value: '32',
    label: 'Tests Written'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Assessment sx={{
      fontSize: '40px'
    }} />,
    value: '80%',
    label: 'Overall Average'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    gap: 3,
    padding: 4,
    backgroundColor: '#f5f5f5',
    borderRadius: 2,
    flexWrap: 'wrap'
  }}>
      <StatsCard icon={<Edit sx={{
      fontSize: '40px'
    }} />} value="32" label="Tests Written" />
      <StatsCard icon={<Assessment sx={{
      fontSize: '40px'
    }} />} value="80%" label="Overall Average" />
    </Box>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 2,
    padding: 4,
    backgroundColor: '#f5f5f5',
    borderRadius: 2,
    maxWidth: '1000px'
  }}>
      <StatsCard icon={<Edit sx={{
      fontSize: '40px'
    }} />} value="32" label="Tests Written" />
      <StatsCard icon={<Assessment sx={{
      fontSize: '40px'
    }} />} value="80%" label="Overall Average" />
    </Box>
}`,...l.parameters?.docs?.source}}};const w=["Default","StephenExample","OverallAverage","MultipleCards","NeoProgrammingLeague"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:t,MultipleCards:i,NeoProgrammingLeague:l,OverallAverage:n,StephenExample:o,__namedExportsOrder:w,default:W},Symbol.toStringTag,{value:"Module"}));export{P as S};
