import{F as f,A as o}from"./iframe-pcBEbKoL.js";import{C as I}from"./Close-DyIKC7lh.js";import{e as M}from"./memoTheme-CRL8Md_D.js";import{D as A,a as O}from"./DialogContent-CmIWmVkZ.js";import{u as _}from"./useTheme-D2KtHZ-L.js";import{u as F}from"./index-CxdJDPEU.js";import{a as E,D as N}from"./DialogTitle-C3UVaHJi.js";import{T as u}from"./Typography-CNY2nv5s.js";import{I as R}from"./IconButton-CbzsCJov.js";import{B as i}from"./Button-oSNl1Z4I.js";import{T as q}from"./TextField-B7YHWhBw.js";import{B as b}from"./Box-rq6hdyJk.js";const $={SM:"sm"},K=M(A)(({theme:e})=>({"& .MuiPaper-root":{borderRadius:e.shape.borderRadius,padding:e.spacing(1),backgroundColor:e.palette.background.paper}})),v=e=>{const{open:B,onClose:h,title:l,description:c,children:D,actions:g,showCloseButton:j=!0,persistent:S=!1,maxWidth:T=$.SM,fullScreen:k=!1}=e,d=_(),w=F(d.breakpoints.down("sm")),x=f.useId(),C=f.useId(),W=(p,m)=>{S&&(m==="backdropClick"||m==="escapeKeyDown")||h?.(p,m)},y=k||w;return o.jsxs(K,{open:B,onClose:W,maxWidth:y?!1:T,fullWidth:!0,fullScreen:y,"aria-labelledby":l?x:void 0,"aria-describedby":c?C:void 0,children:[l&&o.jsxs(E,{id:x,sx:{m:0,p:2},children:[o.jsx(u,{variant:"h6",component:"div",fontWeight:"700",children:l}),j&&o.jsx(R,{"aria-label":"close dialog",onClick:p=>h?.(p,"escapeKeyDown"),sx:{position:"absolute",right:d.spacing(1),top:d.spacing(1),color:"text.secondary"},children:o.jsx(I,{})})]}),o.jsxs(O,{dividers:!0,sx:{border:"none",p:2},children:[c&&o.jsx(u,{id:C,variant:"body2",color:"text.secondary",sx:{mb:2},children:c}),D]}),g&&o.jsx(N,{sx:{p:2},children:g})]})};v.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{title:{required:!1,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""},showCloseButton:{required:!1,tsType:{name:"boolean"},description:""},persistent:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const P=({children:e})=>o.jsx(b,{sx:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"400px",width:"100%",bgcolor:"background.default"},children:e}),s=()=>{},Y={title:"component-catalog/Dialog",component:v,decorators:[e=>o.jsx(P,{children:o.jsx(e,{})})]},t={name:"1. Base Structure",args:{open:!0,title:"Dialog Title",onClose:s}},r={name:"2. Content Space",args:{open:!0,title:"Dialog with Content",description:"This is the dedicated space for description or form instructions.",children:o.jsx(b,{sx:{p:2,border:e=>`1px dashed ${e.palette.divider}`,textAlign:"center"},children:o.jsx(u,{children:"Body message or inputs go here"})}),onClose:s}},n={name:"3. Actions Space",args:{open:!0,title:"Dialog with Buttons",actions:o.jsxs(o.Fragment,{children:[o.jsx(i,{fullWidth:!0,variant:"contained",sx:{backgroundColor:e=>e.palette.grey[900],color:e=>e.palette.common.white,"&:hover":{backgroundColor:e=>e.palette.grey[800]}},children:"Main Action"}),o.jsx(i,{fullWidth:!0,variant:"outlined",sx:{color:"text.primary",borderColor:"divider"},children:"Cancel"})]}),onClose:s}},a={name:"4. Final Implementation",args:{open:!0,title:"Dialog Title",description:"This is a dialog description. You can put any content here.",children:o.jsx(q,{fullWidth:!0,label:"Name",placeholder:"Enter your name",variant:"outlined",margin:"normal"}),actions:o.jsxs(o.Fragment,{children:[o.jsx(i,{fullWidth:!0,variant:"contained",sx:{mb:1,backgroundColor:e=>e.palette.grey[900],color:e=>e.palette.common.white,"&:hover":{backgroundColor:e=>e.palette.grey[800]}},children:"Save changes"}),o.jsx(i,{fullWidth:!0,variant:"outlined",sx:{borderColor:"divider",color:"text.primary"},children:"Cancel"})]}),onClose:s}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: '1. Base Structure',
  args: {
    open: true,
    title: 'Dialog Title',
    onClose: handleClose
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: '2. Content Space',
  args: {
    open: true,
    title: 'Dialog with Content',
    description: 'This is the dedicated space for description or form instructions.',
    children: <Box sx={{
      p: 2,
      border: theme => \`1px dashed \${theme.palette.divider}\`,
      textAlign: 'center'
    }}>
        <Typography>Body message or inputs go here</Typography>
      </Box>,
    onClose: handleClose
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '3. Actions Space',
  args: {
    open: true,
    title: 'Dialog with Buttons',
    actions: <>
        <Button fullWidth variant="contained" sx={{
        backgroundColor: theme => theme.palette.grey[900],
        color: theme => theme.palette.common.white,
        '&:hover': {
          backgroundColor: theme => theme.palette.grey[800]
        }
      }}>
          Main Action
        </Button>

        <Button fullWidth variant="outlined" sx={{
        color: 'text.primary',
        borderColor: 'divider'
      }}>
          Cancel
        </Button>
      </>,
    onClose: handleClose
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '4. Final Implementation',
  args: {
    open: true,
    title: 'Dialog Title',
    description: 'This is a dialog description. You can put any content here.',
    children: <TextField fullWidth label="Name" placeholder="Enter your name" variant="outlined" margin="normal" />,
    actions: <>
        <Button fullWidth variant="contained" sx={{
        mb: 1,
        backgroundColor: theme => theme.palette.grey[900],
        color: theme => theme.palette.common.white,
        '&:hover': {
          backgroundColor: theme => theme.palette.grey[800]
        }
      }}>
          Save changes
        </Button>

        <Button fullWidth variant="outlined" sx={{
        borderColor: 'divider',
        color: 'text.primary'
      }}>
          Cancel
        </Button>
      </>,
    onClose: handleClose
  }
}`,...a.parameters?.docs?.source}}};const z=["Base","OnlyContent","OnlyButtons","Complete"],re=Object.freeze(Object.defineProperty({__proto__:null,Base:t,Complete:a,OnlyButtons:n,OnlyContent:r,__namedExportsOrder:z,default:Y},Symbol.toStringTag,{value:"Module"}));export{a as C,re as D};
