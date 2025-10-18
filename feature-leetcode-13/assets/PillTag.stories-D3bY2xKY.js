import{a as w,j as r}from"./iframe-BoP0Lbcw.js";import{s as S,B as f}from"./Box-C2GbWG7v.js";import{C as k}from"./Chip-Bq_qwX3l.js";import"./preload-helper-PPVm8Dsz.js";const T=["primary","secondary"],C=S(k,{shouldForwardProp:a=>a!=="pillVariant"})(({theme:a,pillVariant:t="primary"})=>{const e=w(a),i=e.dimensions[t].mobile,l=e.dimensions[t].tablet,s=e.dimensions[t].desktop,d=e.shadows[t],v=c=>{const o=c.borderRadius;return t==="primary"?`${o} ${o} ${o} 0px`:`${o} ${o} 0px ${o}`};return{fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeight,fontStyle:"normal",lineHeight:e.typography.lineHeight,letterSpacing:e.typography.letterSpacing,textAlign:"center",textTransform:"none",whiteSpace:"nowrap",border:"none",boxSizing:"border-box",backgroundColor:e.colors.background,color:"transparent",padding:0,transition:a.transitions.create(["box-shadow","transform","width","height","font-size","border-radius"],{duration:e.transitions.duration,easing:e.transitions.easing}),[a.breakpoints.down("sm")]:{width:`${i.width}px`,height:`${i.height}px`,fontSize:`${i.fontSize}px`,borderRadius:v(i),padding:`${i.padding.vertical}px ${i.padding.horizontal}px`,boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:d.default.replace(/\d+(\.\d+)?px/g,c=>`${(parseFloat(c)*.376).toFixed(2)}px`)},[a.breakpoints.between("sm","lg")]:{width:`${l.width}px`,height:`${l.height}px`,fontSize:`${l.fontSize}px`,borderRadius:v(l),padding:`${l.padding.vertical}px ${l.padding.horizontal}px`,boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:d.default.replace(/\d+(\.\d+)?px/g,c=>`${(parseFloat(c)*.75).toFixed(2)}px`)},[a.breakpoints.up("lg")]:{width:`${s.width}px`,height:`${s.height}px`,fontSize:`${s.fontSize}px`,borderRadius:v(s),padding:`${s.padding.vertical}px ${s.padding.horizontal}px`,boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:d.default},"& .MuiChip-label":{display:"block",width:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",textAlign:"center",lineHeight:e.typography.lineHeight,padding:0,background:`linear-gradient(180deg, ${e.colors.gradientStart} 0%, ${e.colors.gradientEnd} 100%)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},"&.MuiChip-root":{color:"transparent"},"&.MuiChip-clickable":{cursor:"pointer",userSelect:"none"},"&:hover":{transform:`translateY(${e.states.hover.translateY}px)`,backgroundColor:e.colors.background,[a.breakpoints.up("lg")]:{boxShadow:d.hover}},"&:active":{transform:`scale(${e.states.active.scale})`,[a.breakpoints.up("lg")]:{boxShadow:d.active}},"&.Mui-disabled":{opacity:e.states.disabled.opacity,pointerEvents:"none",boxShadow:"none"},"&:focus-visible":{outline:`2px solid ${e.colors.gradientStart}`,outlineOffset:"2px"}}}),n=({label:a,variant:t="primary","data-testid":e="pill-tag",...i})=>{if(!a||a.trim()==="")return null;const s=T.includes(t)?t:"primary";return r.jsx(C,{label:a,pillVariant:s,"data-testid":e,...i})};n.__docgenInfo={description:"",methods:[],displayName:"PillTag",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof PILL_TAG_VARIANTS)[number]"},description:"",defaultValue:{value:"'primary'",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'pill-tag'",computed:!1}}},composes:["Omit"]};const z={title:"Components/PillTag",component:n,argTypes:{label:{control:"text",description:"Text to display in the tag",table:{type:{summary:"string"}}},variant:{control:"radio",options:["primary","secondary"],description:"Visual variant of the tag (defined in constants)",table:{type:{summary:"'primary' | 'secondary'"},defaultValue:{summary:"'primary'"}}},clickable:{control:"boolean",description:"Makes the tag clickable"},disabled:{control:"boolean",description:"Disables the tag"},onDelete:{description:"Callback fired when delete icon is clicked"},onClick:{description:"Callback fired when tag is clicked"}}},p={args:{label:"Courses",variant:"primary"}},g={args:{label:"Test",variant:"secondary"}},m={args:{label:"This is an extremely long label that will be truncated with ellipsis",variant:"primary"},parameters:{docs:{description:{story:"Long labels are automatically truncated with ellipsis (...)."}}}},u={args:{label:"Click me",variant:"primary",clickable:!0},parameters:{docs:{description:{story:"Clickable tag with hover effect. Press Enter or Space when focused."}}}},b={args:{label:"Delete me",variant:"secondary"},parameters:{docs:{description:{story:"Tag with delete functionality. Click the X icon to delete."}}}},y={args:{label:"Disabled",variant:"primary",disabled:!0},parameters:{docs:{description:{story:"Disabled state with reduced opacity. Not interactive."}}}},x={render:()=>r.jsxs(f,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[r.jsx(n,{label:"React",variant:"primary"}),r.jsx(n,{label:"TypeScript",variant:"secondary"}),r.jsx(n,{label:"Astro",variant:"primary"}),r.jsx(n,{label:"MUI",variant:"secondary"})]}),parameters:{docs:{description:{story:"Multiple tags displayed together with gap spacing."}}}},h={render:()=>r.jsxs(f,{sx:{display:"flex",flexDirection:"column",gap:7.5},children:[r.jsx(f,{children:r.jsx(n,{label:"Courses",variant:"primary"})}),r.jsx(f,{children:r.jsx(n,{label:"Test",variant:"secondary"})})]}),parameters:{docs:{description:{story:"Comparison between primary and secondary variants."}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Courses',
    variant: 'primary'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Test',
    variant: 'secondary'
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'This is an extremely long label that will be truncated with ellipsis',
    variant: 'primary'
  },
  parameters: {
    docs: {
      description: {
        story: 'Long labels are automatically truncated with ellipsis (...).'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Click me',
    variant: 'primary',
    clickable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Clickable tag with hover effect. Press Enter or Space when focused.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Delete me',
    variant: 'secondary'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tag with delete functionality. Click the X icon to delete.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    variant: 'primary',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state with reduced opacity. Not interactive.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    gap: 2,
    flexWrap: 'wrap'
  }}>
      <PillTag label="React" variant="primary" />
      <PillTag label="TypeScript" variant="secondary" />
      <PillTag label="Astro" variant="primary" />
      <PillTag label="MUI" variant="secondary" />
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Multiple tags displayed together with gap spacing.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 7.5
  }}>
      <Box>
        <PillTag label="Courses" variant="primary" />
      </Box>
      <Box>
        <PillTag label="Test" variant="secondary" />
      </Box>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Comparison between primary and secondary variants.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};const B=["Primary","Secondary","LongLabel","Clickable","Deleteable","Disabled","MultipleTags","VariantComparison"];export{u as Clickable,b as Deleteable,y as Disabled,m as LongLabel,x as MultipleTags,p as Primary,g as Secondary,h as VariantComparison,B as __namedExportsOrder,z as default};
