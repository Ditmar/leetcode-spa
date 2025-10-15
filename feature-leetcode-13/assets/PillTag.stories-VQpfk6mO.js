import{a as h,j as a}from"./iframe-BWsVUz24.js";import{s as f,B as o}from"./Box-yEV37XRT.js";import{C as v}from"./Chip-CEojCWaz.js";import"./preload-helper-PPVm8Dsz.js";const w=["primary","secondary"],T=f(v,{shouldForwardProp:s=>s!=="pillVariant"})(({theme:s,pillVariant:i="primary"})=>{const e=h(s),r=e.dimensions[i],n=e.shadows[i];return{fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeight,fontStyle:"normal",lineHeight:e.typography.lineHeight,fontSize:`${r.fontSize}px`,letterSpacing:e.typography.letterSpacing,textAlign:"center",textTransform:"none",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",border:"none",boxSizing:"border-box",width:`${r.width}px`,height:`${r.height}px`,backgroundColor:e.colors.background,borderRadius:i==="primary"?`${r.borderRadius} 0px ${r.borderRadius} ${r.borderRadius}`:`${r.borderRadius} ${r.borderRadius} ${r.borderRadius} 0px`,boxShadow:n.default,padding:s.spacing(r.padding.vertical,r.padding.horizontal),transition:s.transitions.create(["box-shadow","transform"],{duration:e.transitions.duration,easing:e.transitions.easing}),"& .MuiChip-label":{display:"block",width:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",padding:0,background:`linear-gradient(180deg, ${e.colors.gradientStart} 0%, ${e.colors.gradientEnd} 100%)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},"&:hover":{boxShadow:n.hover,transform:`translateY(${e.states.hover.translateY}px)`},"&:active":{boxShadow:n.active,transform:`scale(${e.states.active.scale})`},"&.Mui-disabled":{opacity:e.states.disabled.opacity,pointerEvents:"none",boxShadow:"none"},"&:focus-visible":{outline:`2px solid ${e.colors.gradientStart}`,outlineOffset:"2px"}}}),t=({label:s,variant:i="primary","data-testid":e="pill-tag",...r})=>{if(!s||s.trim()==="")return null;const x=w.includes(i)?i:"primary";return a.jsx(T,{label:s,pillVariant:x,"data-testid":e,...r})};t.__docgenInfo={description:"",methods:[],displayName:"PillTag",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof PILL_TAG_VARIANTS)[number]"},description:"",defaultValue:{value:"'primary'",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'pill-tag'",computed:!1}}},composes:["Omit"]};const j={title:"Components/PillTag",component:t,argTypes:{label:{control:"text",description:"Text to display in the tag",table:{type:{summary:"string"}}},variant:{control:"radio",options:["primary","secondary"],description:"Visual variant of the tag (defined in constants)",table:{type:{summary:"'primary' | 'secondary'"},defaultValue:{summary:"'primary'"}}},clickable:{control:"boolean",description:"Makes the tag clickable"},disabled:{control:"boolean",description:"Disables the tag"},onDelete:{description:"Callback fired when delete icon is clicked"},onClick:{description:"Callback fired when tag is clicked"}}},l={args:{label:"Courses",variant:"primary"}},c={args:{label:"Test",variant:"secondary"}},d={args:{label:"This is an extremely long label that will be truncated with ellipsis",variant:"primary"},parameters:{docs:{description:{story:"Long labels are automatically truncated with ellipsis (...)."}}}},p={args:{label:"Click me",variant:"primary",clickable:!0},parameters:{docs:{description:{story:"Clickable tag with hover effect. Press Enter or Space when focused."}}}},m={args:{label:"Delete me",variant:"secondary"},parameters:{docs:{description:{story:"Tag with delete functionality. Click the X icon to delete."}}}},y={args:{label:"Disabled",variant:"primary",disabled:!0},parameters:{docs:{description:{story:"Disabled state with reduced opacity. Not interactive."}}}},g={render:()=>a.jsxs(o,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[a.jsx(t,{label:"React",variant:"primary"}),a.jsx(t,{label:"TypeScript",variant:"secondary"}),a.jsx(t,{label:"Astro",variant:"primary"}),a.jsx(t,{label:"MUI",variant:"secondary"})]}),parameters:{docs:{description:{story:"Multiple tags displayed together with gap spacing."}}}},b={render:()=>a.jsxs(o,{sx:{display:"flex",flexDirection:"column",gap:7.5},children:[a.jsx(o,{children:a.jsx(t,{label:"Courses",variant:"primary"})}),a.jsx(o,{children:a.jsx(t,{label:"Test",variant:"secondary"})})]}),parameters:{docs:{description:{story:"Comparison between primary and secondary variants."}}}},u={render:()=>a.jsxs(o,{sx:{display:"flex",flexDirection:"column",gap:2},children:[a.jsxs("p",{style:{color:"#666",marginBottom:"8px"},children:[a.jsx("strong",{children:"Keyboard Navigation:"})," Tab to focus, Enter/Space to click"]}),a.jsxs(o,{sx:{display:"flex",gap:2},children:[a.jsx(t,{label:"Press Enter",variant:"primary",clickable:!0}),a.jsx(t,{label:"Press Space",variant:"secondary",clickable:!0})]})]}),parameters:{docs:{description:{story:"Demonstrates full keyboard accessibility (Tab, Enter, Space keys)."}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Courses',
    variant: 'primary'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Test',
    variant: 'secondary'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  }}>
      <p style={{
      color: '#666',
      marginBottom: '8px'
    }}>
        <strong>Keyboard Navigation:</strong> Tab to focus, Enter/Space to click
      </p>
      <Box sx={{
      display: 'flex',
      gap: 2
    }}>
        <PillTag label="Press Enter" variant="primary" clickable />
        <PillTag label="Press Space" variant="secondary" clickable />
      </Box>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates full keyboard accessibility (Tab, Enter, Space keys).'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};const D=["Primary","Secondary","LongLabel","Clickable","Deleteable","Disabled","MultipleTags","VariantComparison","KeyboardAccessible"];export{p as Clickable,m as Deleteable,y as Disabled,u as KeyboardAccessible,d as LongLabel,g as MultipleTags,l as Primary,c as Secondary,b as VariantComparison,D as __namedExportsOrder,j as default};
