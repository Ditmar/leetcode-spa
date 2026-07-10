import{B as e}from"./iframe-BK4VGEPv.js";import{e as c}from"./memoTheme-BnQ5TlGJ.js";import{B as s}from"./Box-Bd57yNao.js";import{F as b}from"./FormControl-BwQz2xZy.js";import{F as g}from"./FormControlLabel-ZlLGdbd9.js";import{C as h}from"./Checkbox-D9lEpgIT.js";import{F as y}from"./FormHelperText-DlA9U6ab.js";import{T as k}from"./Typography-CpJ7RFbj.js";import{P as C}from"./Paper-jQ5nwEoa.js";const v=c(s)(()=>({display:"inline-flex",flexDirection:"column"})),j=c(s)(({theme:r})=>({display:"flex",alignItems:"center",minHeight:r.spacing(5.5),minWidth:r.spacing(5.5),padding:r.spacing(.5)})),T=(r,o)=>o?"mixed":r?"true":"false",i=({label:r,helperText:o,error:p=!1,disabled:t=!1,indeterminate:d=!1,size:m="medium",color:u="primary",checked:n,defaultChecked:x,onChange:f})=>e.jsx(b,{error:p,disabled:t,children:e.jsxs(v,{children:[e.jsx(g,{control:e.jsx(j,{children:e.jsx(h,{checked:n,defaultChecked:x,onChange:f,indeterminate:d,disabled:t,size:m,color:u,sx:l=>({color:l.palette.grey[500],"&.Mui-checked":{color:l.palette.primary.main},"& .MuiSvgIcon-root":{fontSize:20},"&.Mui-disabled":{color:l.palette.action.disabled}}),inputProps:{"aria-checked":T(n,d)}})}),label:r}),o&&e.jsx(y,{children:o})]})});i.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactNode"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1},indeterminate:{defaultValue:{value:"false",computed:!1},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1}},composes:["MuiCheckboxProps"]};const B={title:"Components/Checkbox",component:i},a={args:{label:"Accept terms and conditions",color:"primary"},render:r=>e.jsxs(s,{sx:{p:3,backgroundColor:"background.default",minHeight:"100vh"},children:[e.jsx(k,{variant:"h6",gutterBottom:!0,children:"Checkboxes"}),e.jsx(C,{elevation:0,sx:{p:2,borderRadius:o=>o.spacing(1),backgroundColor:"var(--background)",border:"1px solid",borderColor:"divider",maxWidth:o=>o.spacing(45)},children:e.jsxs(s,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e.jsx(i,{...r}),e.jsx(i,{label:"Receive marketing emails"}),e.jsx(i,{label:"Disabled option",disabled:!0})]})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
      backgroundColor: 'var(--background)',
      // 🌟 Mapeo dinámico para el fondo del área de detalles
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
}`,...a.parameters?.docs?.source}}};const S=["MaterialStyle"],W=Object.freeze(Object.defineProperty({__proto__:null,MaterialStyle:a,__namedExportsOrder:S,default:B},Symbol.toStringTag,{value:"Module"}));export{W as S};
