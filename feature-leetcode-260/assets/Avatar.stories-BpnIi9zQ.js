import{B as a}from"./iframe-DPFNW-mA.js";import{e as m}from"./memoTheme-CPL6XXvD.js";import{A as p}from"./Avatar-mi7fKStU.js";import{B as v}from"./Box-CM_ANzlV.js";const f={sm:{width:32,height:32,fontSize:11},md:{width:40,height:40,fontSize:13},lg:{width:48,height:48,fontSize:14},xl:{width:64,height:64,fontSize:16}},g=m(p,{shouldForwardProp:e=>!["$size","$variant"].includes(e)})(({theme:e,$size:o="md",$variant:c="default"})=>{const t=f[o],u=(()=>{switch(c){case"primary":return{bg:e.palette.primary.main,color:e.palette.primary.contrastText};case"success":return{bg:e.palette.success.main,color:e.palette.success.contrastText};default:return{bg:e.palette.action.selected,color:e.palette.text.primary}}})();return{fontWeight:500,width:`${t.width}px`,height:`${t.height}px`,fontSize:`${t.fontSize}px`,backgroundColor:u.bg,color:u.color}}),r=({size:e="md",variant:o="default",shape:c="circular",children:t,...d})=>a.jsx(g,{$size:e,$variant:o,variant:c,"data-testid":"avatar-component","data-size":e,"data-variant":o,...d,children:t});r.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'success'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'circular' | 'rounded' | 'square'",elements:[{name:"literal",value:"'circular'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'square'"}]},description:"",defaultValue:{value:"'circular'",computed:!1}}},composes:["Omit"]};const h={title:"component-catalog/Avatar",component:r,parameters:{layout:"centered"}},s={args:{children:"MD",size:"md",variant:"default"}},i={args:{children:"JD",size:"lg",variant:"primary"}},l={args:{children:"AB",size:"lg",variant:"success"}},n={render:()=>a.jsxs(v,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:2},children:[a.jsx(r,{size:"sm",variant:"default",children:"SM"}),a.jsx(r,{size:"md",variant:"default",children:"MD"}),a.jsx(r,{size:"lg",variant:"primary",children:"JD"}),a.jsx(r,{size:"xl",variant:"success",children:"AB"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'AB',
    size: 'lg',
    variant: 'success'
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const x=["Default","Primary","Success","Showcase"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Primary:i,Showcase:n,Success:l,__namedExportsOrder:x,default:h},Symbol.toStringTag,{value:"Module"}));export{r as A,s as D,n as S,w as a};
