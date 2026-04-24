import{j as a}from"./iframe-DGxIX1MK.js";import{s as u}from"./styled-Clf3n9GJ.js";import{B as d}from"./Box-B3cJ2Ffs.js";const m={sm:{width:32,height:32,fontSize:12},md:{width:40,height:40,fontSize:14},lg:{width:48,height:48,fontSize:16},xl:{width:64,height:64,fontSize:20}},p={default:{bg:"var(--avatar-default-bg)",color:"var(--avatar-default-text)"},primary:{bg:"var(--avatar-primary-bg)",color:"var(--avatar-text-light)"},success:{bg:"var(--avatar-success-bg)",color:"var(--avatar-text-light)"}},f=u(d,{shouldForwardProp:t=>!["$size","$variant"].includes(t)})(({$size:t="md",$variant:c="default"})=>{const e=m[t],l=p[c];return{display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",userSelect:"none",fontWeight:500,transition:"all 0.2s ease-in-out",width:`${e.width}px`,height:`${e.height}px`,fontSize:`${e.fontSize}px`,backgroundColor:l.bg,color:l.color}}),r=({children:t,size:c="md",variant:e="default",...l})=>a.jsx(f,{$size:c,$variant:e,"data-testid":"avatar-component","data-size":c,"data-variant":e,...l,children:t});r.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be displayed inside the avatar (initials)"},size:{required:!1,tsType:{name:"AvatarSizes"},description:`Defines the size of the component
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"AvatarVariants"},description:`Defines the color variant
@default 'default'`,defaultValue:{value:"'default'",computed:!1}}},composes:["BoxProps"]};const v={title:"component-catalog/Avatar",component:r,parameters:{layout:"centered"}},s={args:{children:"MD",size:"md",variant:"default"}},i={args:{children:"JD",size:"lg",variant:"primary"}},o={args:{children:"AB",size:"lg",variant:"success"}},n={render:()=>a.jsxs(d,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:2},children:[a.jsx(r,{size:"sm",variant:"default",children:"SM"}),a.jsx(r,{size:"md",variant:"default",children:"MD"}),a.jsx(r,{size:"lg",variant:"primary",children:"JD"}),a.jsx(r,{size:"xl",variant:"success",children:"AB"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'AB',
    size: 'lg',
    variant: 'success'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const g=["Default","Primary","Success","Showcase"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Primary:i,Showcase:n,Success:o,__namedExportsOrder:g,default:v},Symbol.toStringTag,{value:"Module"}));export{z as A,s as D,n as S,r as a};
