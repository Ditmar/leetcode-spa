import{j as e}from"./iframe-Cwf2WsBQ.js";import{s as m}from"./styled-BRFreOwv.js";import{B as x}from"./Box-Clcn1Pt8.js";const d={sm:32,md:40,lg:48,xl:64},c={default:{bg:"var(--avatar-default-bg, #EAECEF)",color:"var(--avatar-default-text, #1A1D20)"},primary:{bg:"var(--avatar-primary-bg, #2D7AF1)",color:"var(--avatar-text-light, #FFFFFF)"},success:{bg:"var(--avatar-success-bg, #10C955)",color:"var(--avatar-text-light, #FFFFFF)"}},u=m(x,{shouldForwardProp:a=>!["$size","$variant"].includes(a)})(({$size:a="md",$variant:t="default"})=>({display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",userSelect:"none",fontWeight:500,transition:"all 0.2s ease-in-out",width:`${d[a]}px`,height:`${d[a]}px`,fontSize:a==="sm"?"11px":a==="md"?"13px":a==="xl"?"16px":"14px",backgroundColor:c[t].bg,color:c[t].color})),r=({children:a,size:t="md",variant:o="default",...p})=>e.jsx(u,{$size:t,$variant:o,"data-testid":"avatar-component","data-size":t,"data-variant":o,...p,children:a});r.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be displayed inside the avatar (initials)"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:`Defines the size of the component
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'success'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"}]},description:`Defines the color variant
@default 'default'`,defaultValue:{value:"'default'",computed:!1}}},composes:["BoxProps"]};const f={title:"component-catalog/Avatar",component:r,decorators:[a=>e.jsx("div",{style:{padding:"2rem",display:"flex",justifyContent:"center",width:"100%",boxSizing:"border-box"},children:e.jsx(a,{})})],argTypes:{size:{control:"select",options:["sm","md","lg","xl"],description:"Defines the dimensions of the avatar"},variant:{control:"select",options:["default","primary","success"],description:"Defines the color scheme based on the design system"}}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"16px",width:"100%",maxWidth:"1216px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx("h2",{style:{margin:0,fontSize:"24px",fontWeight:600,color:"#1A1D20",lineHeight:"32px"},children:"Avatar"}),e.jsx("p",{style:{margin:0,fontSize:"14px",color:"#6C757D",lineHeight:"20px"},children:"User profile pictures"})]}),e.jsx("div",{style:{boxSizing:"border-box",display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"24px 0px 24px 24px",width:"100%",background:"#FFFFFF",border:"1px solid rgba(0, 0, 0, 0.1)",borderRadius:"14px",overflowX:"auto"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"16px",minWidth:"max-content"},children:[e.jsx(r,{size:"sm",children:"SM"}),e.jsx(r,{size:"md",children:"MD"}),e.jsx(r,{size:"lg",children:"LG"}),e.jsx(r,{size:"xl",children:"XL"}),e.jsx(r,{size:"lg",variant:"primary",children:"JD"}),e.jsx(r,{size:"lg",variant:"success",children:"AB"})]})})]})},i={args:{children:"MD",size:"md",variant:"default"}},l={args:{children:"JD",size:"lg",variant:"primary"}},n={args:{children:"AB",size:"xl",variant:"success"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '16px',
    width: '100%',
    maxWidth: '1216px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }}>
        <h2 style={{
        margin: 0,
        fontSize: '24px',
        fontWeight: 600,
        color: '#1A1D20',
        lineHeight: '32px'
      }}>
          Avatar
        </h2>
        <p style={{
        margin: 0,
        fontSize: '14px',
        color: '#6C757D',
        lineHeight: '20px'
      }}>
          User profile pictures
        </p>
      </div>

      <div style={{
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '24px 0px 24px 24px',
      width: '100%',
      background: '#FFFFFF',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '14px',
      overflowX: 'auto'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '16px',
        minWidth: 'max-content'
      }}>
          <Avatar size="sm">SM</Avatar>
          <Avatar size="md">MD</Avatar>
          <Avatar size="lg">LG</Avatar>
          <Avatar size="xl">XL</Avatar>
          <Avatar size="lg" variant="primary">
            JD
          </Avatar>
          <Avatar size="lg" variant="success">
            AB
          </Avatar>
        </div>
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'MD',
    size: 'md',
    variant: 'default'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'JD',
    size: 'lg',
    variant: 'primary'
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'AB',
    size: 'xl',
    variant: 'success'
  }
}`,...n.parameters?.docs?.source}}};const g=["Showcase","Default","Primary","Success"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Primary:l,Showcase:s,Success:n,__namedExportsOrder:g,default:f},Symbol.toStringTag,{value:"Module"}));export{A,i as D};
