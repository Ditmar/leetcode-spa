import{j as a}from"./iframe-B8Gl4Hy4.js";import{s as p}from"./styled-nVXdhern.js";import{B as u}from"./Box-Ckk0051w.js";const m={sm:{width:32,height:32,fontSize:11},md:{width:40,height:40,fontSize:13},lg:{width:48,height:48,fontSize:14},xl:{width:64,height:64,fontSize:16}},f=p(u,{shouldForwardProp:e=>!["$size","$variant"].includes(e)})(({theme:e,$size:c="md",$variant:l="default"})=>{const r=m[c],d=(()=>{switch(l){case"primary":return{bg:e.palette.primary.main,color:e.palette.primary.contrastText};case"success":return{bg:e.palette.success.main,color:e.palette.success.contrastText};case"default":default:return{bg:e.palette.action.selected,color:e.palette.text.primary}}})();return{display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",userSelect:"none",fontWeight:500,transition:"all 0.2s ease-in-out",width:`${r.width}px`,height:`${r.height}px`,fontSize:`${r.fontSize}px`,backgroundColor:d.bg,color:d.color}}),t=({children:e,size:c="md",variant:l="default",...r})=>a.jsx(f,{$size:c,$variant:l,"data-testid":"avatar-component","data-size":c,"data-variant":l,...r,children:e});t.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be displayed inside the avatar (initials)"},size:{required:!1,tsType:{name:"AvatarSizes"},description:`Defines the size of the component
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"AvatarVariants"},description:`Defines the color variant
@default 'default'`,defaultValue:{value:"'default'",computed:!1}}},composes:["BoxProps"]};const g={title:"component-catalog/Avatar",component:t,parameters:{layout:"centered"}},s={args:{children:"MD",size:"md",variant:"default"}},i={args:{children:"JD",size:"lg",variant:"primary"}},n={args:{children:"AB",size:"lg",variant:"success"}},o={render:()=>a.jsxs(u,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:2},children:[a.jsx(t,{size:"sm",variant:"default",children:"SM"}),a.jsx(t,{size:"md",variant:"default",children:"MD"}),a.jsx(t,{size:"lg",variant:"primary",children:"JD"}),a.jsx(t,{size:"xl",variant:"success",children:"AB"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'MD',
    size: 'md',
    variant: 'default'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'JD',
    size: 'lg',
    variant: 'primary'
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'AB',
    size: 'lg',
    variant: 'success'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 2
  }}>
      <Avatar size="sm" variant="default">
        SM
      </Avatar>
      <Avatar size="md" variant="default">
        MD
      </Avatar>
      <Avatar size="lg" variant="primary">
        JD
      </Avatar>
      <Avatar size="xl" variant="success">
        AB
      </Avatar>
    </Box>
}`,...o.parameters?.docs?.source}}};const h=["Default","Primary","Success","Showcase"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Primary:i,Showcase:o,Success:n,__namedExportsOrder:h,default:g},Symbol.toStringTag,{value:"Module"}));export{y as A,s as D,o as S,t as a};
