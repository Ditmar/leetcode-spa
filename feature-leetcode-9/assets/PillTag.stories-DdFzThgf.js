import{p as k,j as r}from"./iframe-BsbtfWfu.js";import{s as T}from"./memoTheme-ZjIbEn5u.js";import{C}from"./Chip-MLtOrNIV.js";import{B as f}from"./Box-D4_gm7wt.js";import"./preload-helper-PPVm8Dsz.js";import"./createSvgIcon-DEAmFQG-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-CYFuRa_a.js";import"./ButtonBase-Be37PwV9.js";const $=["primary","secondary"],P=T(C,{shouldForwardProp:a=>a!=="pillVariant"})(({theme:a,pillVariant:o="primary"})=>{const e=k(a),t=e.dimensions[o].mobile,n=e.dimensions[o].tablet,i=e.dimensions[o].desktop,c=e.shadows[o],v=l=>{const s=l.borderRadius;return o==="primary"?`${s} 0px ${s} ${s}`:`${s} ${s} ${s} 0px`},w=l=>{const s=l.padding.vertical,S=l.padding.horizontal;return a.spacing(s,S)};return{display:"inline-flex",alignItems:"center",justifyContent:"center",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeight,fontStyle:"normal",letterSpacing:e.typography.letterSpacing,textAlign:"center",textTransform:"none",whiteSpace:"nowrap",border:"none",boxSizing:"border-box",backgroundColor:e.colors.background,color:"transparent",overflow:"hidden",transition:a.transitions.create(["box-shadow","transform","width","height","font-size","border-radius","padding"],{duration:e.transitions.duration,easing:e.transitions.easing}),width:`${t.width}px`,height:`${t.height}px`,minHeight:`${t.height}px`,fontSize:`${t.fontSize}px`,lineHeight:`${t.fontSize*t.lineHeight}px`,padding:w(t),borderRadius:v(t),boxShadow:c.default.replace(/(\d+(\.\d+)?)px/g,l=>`${(parseFloat(l)*(o==="primary"?.3767:.4358)).toFixed(2)}px`),[a.breakpoints.up("md")]:{minWidth:`${n.width}px`,height:`${n.height}px`,minHeight:`${n.height}px`,fontSize:`${n.fontSize}px`,lineHeight:`${n.fontSize*n.lineHeight}px`,padding:w(n),borderRadius:v(n),boxShadow:c.default.replace(/\d+(\.\d+)?px/g,l=>`${(parseFloat(l)*.75).toFixed(2)}px`)},[a.breakpoints.up("lg")]:{minWidth:`${i.width}px`,height:`${i.height}px`,minHeight:`${i.height}px`,fontSize:`${i.fontSize}px`,lineHeight:`${i.fontSize*i.lineHeight}px`,padding:w(i),borderRadius:v(i),boxShadow:c.default},"& .MuiChip-label":{display:"block",width:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",padding:0,lineHeight:"inherit",background:`linear-gradient(180deg, ${e.colors.gradientStart} 0%, ${e.colors.gradientEnd} 100%)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",textAlign:"center"},"&.MuiChip-root":{color:"transparent"},"&.MuiChip-clickable":{cursor:"pointer",userSelect:"none"},"&:hover":{transform:`translateY(${e.states.hover.translateY}px)`,backgroundColor:e.colors.background,[a.breakpoints.up("lg")]:{boxShadow:c.hover}},"&:active":{transform:`scale(${e.states.active.scale})`,[a.breakpoints.up("lg")]:{boxShadow:c.active}},"&.Mui-disabled":{opacity:e.states.disabled.opacity,pointerEvents:"none",boxShadow:"none"},"&:focus-visible":{outline:`2px solid ${e.colors.gradientStart}`,outlineOffset:"2px"}}}),d=({label:a,variant:o="primary","data-testid":e="pill-tag",...t})=>{if(!a||a.trim()==="")return null;const i=$.includes(o)?o:"primary";return r.jsx(P,{label:a,pillVariant:i,"data-testid":e,...t})};d.__docgenInfo={description:"",methods:[],displayName:"PillTag",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof PILL_TAG_VARIANTS)[number]"},description:"",defaultValue:{value:"'primary'",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'pill-tag'",computed:!1}}},composes:["Omit"]};const L={title:"Components/PillTag",component:d,argTypes:{label:{control:"text",description:"Text to display in the tag",table:{type:{summary:"string"}}},variant:{control:"radio",options:["primary","secondary"],description:"Visual variant of the tag (defined in constants)",table:{type:{summary:"'primary' | 'secondary'"},defaultValue:{summary:"'primary'"}}},clickable:{control:"boolean",description:"Makes the tag clickable"},disabled:{control:"boolean",description:"Disables the tag"},onDelete:{description:"Callback fired when delete icon is clicked"},onClick:{description:"Callback fired when tag is clicked"}}},p={args:{label:"Courses",variant:"primary"}},m={args:{label:"Test",variant:"secondary"}},g={args:{label:"This is an extremely long label that will be truncated with ellipsis",variant:"primary"},parameters:{docs:{description:{story:"Long labels are automatically truncated with ellipsis (...)."}}}},u={args:{label:"Click me",variant:"primary",clickable:!0},parameters:{docs:{description:{story:"Clickable tag with hover effect. Press Enter or Space when focused."}}}},y={args:{label:"Delete me",variant:"secondary"},parameters:{docs:{description:{story:"Tag with delete functionality. Click the X icon to delete."}}}},b={args:{label:"Disabled",variant:"primary",disabled:!0},parameters:{docs:{description:{story:"Disabled state with reduced opacity. Not interactive."}}}},h={render:()=>r.jsxs(f,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[r.jsx(d,{label:"React",variant:"primary"}),r.jsx(d,{label:"TypeScript",variant:"secondary"}),r.jsx(d,{label:"Astro",variant:"primary"}),r.jsx(d,{label:"MUI",variant:"secondary"})]}),parameters:{docs:{description:{story:"Multiple tags displayed together with gap spacing."}}}},x={render:()=>r.jsxs(f,{sx:{display:"flex",flexDirection:"column",gap:7.5},children:[r.jsx(f,{children:r.jsx(d,{label:"Courses",variant:"primary"})}),r.jsx(f,{children:r.jsx(d,{label:"Test",variant:"secondary"})})]}),parameters:{docs:{description:{story:"Comparison between primary and secondary variants."}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Courses',
    variant: 'primary'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Test',
    variant: 'secondary'
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const R=["Primary","Secondary","LongLabel","Clickable","Deleteable","Disabled","MultipleTags","VariantComparison"];export{u as Clickable,y as Deleteable,b as Disabled,g as LongLabel,h as MultipleTags,p as Primary,m as Secondary,x as VariantComparison,R as __namedExportsOrder,L as default};
