import{j as r}from"./jsx-runtime-BTt0U4fe.js";import{g as U}from"./theme.helpers-DAB0_Nud.js";import{s as X,B as f}from"./Box-DDmOFRI_.js";import{C as Y}from"./Chip-cns9IprP.js";import"./index-DtJulBIN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./identifier-Bm9izWyR.js";import"./extends-CF3RwP-h.js";import"./createSvgIcon-DZvsHXuK.js";import"./useIsFocusVisible-Dxr7n688.js";import"./useEnhancedEffect-B9e5S8q0.js";import"./ButtonBase-BvB5UX1y.js";import"./assertThisInitialized-C1KLUksq.js";const J=["primary","secondary"],K=X(Y,{shouldForwardProp:a=>a!=="pillVariant"})(({theme:a,pillVariant:o="primary"})=>{const e=U(a),t=e.dimensions[o].mobile,n=e.dimensions[o].tablet,i=e.dimensions[o].desktop,c=e.shadows[o],v=l=>{const s=l.borderRadius;return o==="primary"?`${s} 0px ${s} ${s}`:`${s} ${s} ${s} 0px`},w=l=>{const s=l.padding.vertical,S=l.padding.horizontal;return a.spacing(s,S)};return{display:"inline-flex",alignItems:"center",justifyContent:"center",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeight,fontStyle:"normal",letterSpacing:e.typography.letterSpacing,textAlign:"center",textTransform:"none",whiteSpace:"nowrap",border:"none",boxSizing:"border-box",backgroundColor:e.colors.background,color:"transparent",overflow:"hidden",transition:a.transitions.create(["box-shadow","transform","width","height","font-size","border-radius","padding"],{duration:e.transitions.duration,easing:e.transitions.easing}),width:`${t.width}px`,height:`${t.height}px`,minHeight:`${t.height}px`,fontSize:`${t.fontSize}px`,lineHeight:`${t.fontSize*t.lineHeight}px`,padding:w(t),borderRadius:v(t),boxShadow:c.default.replace(/(\d+(\.\d+)?)px/g,l=>`${(parseFloat(l)*(o==="primary"?.3767:.4358)).toFixed(2)}px`),[a.breakpoints.up("md")]:{minWidth:`${n.width}px`,height:`${n.height}px`,minHeight:`${n.height}px`,fontSize:`${n.fontSize}px`,lineHeight:`${n.fontSize*n.lineHeight}px`,padding:w(n),borderRadius:v(n),boxShadow:c.default.replace(/\d+(\.\d+)?px/g,l=>`${(parseFloat(l)*.75).toFixed(2)}px`)},[a.breakpoints.up("lg")]:{minWidth:`${i.width}px`,height:`${i.height}px`,minHeight:`${i.height}px`,fontSize:`${i.fontSize}px`,lineHeight:`${i.fontSize*i.lineHeight}px`,padding:w(i),borderRadius:v(i),boxShadow:c.default},"& .MuiChip-label":{display:"block",width:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",padding:0,lineHeight:"inherit",background:`linear-gradient(180deg, ${e.colors.gradientStart} 0%, ${e.colors.gradientEnd} 100%)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",textAlign:"center"},"&.MuiChip-root":{color:"transparent"},"&.MuiChip-clickable":{cursor:"pointer",userSelect:"none"},"&:hover":{transform:`translateY(${e.states.hover.translateY}px)`,backgroundColor:e.colors.background,[a.breakpoints.up("lg")]:{boxShadow:c.hover}},"&:active":{transform:`scale(${e.states.active.scale})`,[a.breakpoints.up("lg")]:{boxShadow:c.active}},"&.Mui-disabled":{opacity:e.states.disabled.opacity,pointerEvents:"none",boxShadow:"none"},"&:focus-visible":{outline:`2px solid ${e.colors.gradientStart}`,outlineOffset:"2px"}}}),d=({label:a,variant:o="primary","data-testid":e="pill-tag",...t})=>{if(!a||a.trim()==="")return null;const i=J.includes(o)?o:"primary";return r.jsx(K,{label:a,pillVariant:i,"data-testid":e,...t})};d.__docgenInfo={description:"",methods:[],displayName:"PillTag",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof PILL_TAG_VARIANTS)[number]"},description:"",defaultValue:{value:"'primary'",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'pill-tag'",computed:!1}}},composes:["Omit"]};const pe={title:"Components/PillTag",component:d,argTypes:{label:{control:"text",description:"Text to display in the tag",table:{type:{summary:"string"}}},variant:{control:"radio",options:["primary","secondary"],description:"Visual variant of the tag (defined in constants)",table:{type:{summary:"'primary' | 'secondary'"},defaultValue:{summary:"'primary'"}}},clickable:{control:"boolean",description:"Makes the tag clickable"},disabled:{control:"boolean",description:"Disables the tag"},onDelete:{description:"Callback fired when delete icon is clicked"},onClick:{description:"Callback fired when tag is clicked"}}},p={args:{label:"Courses",variant:"primary"}},m={args:{label:"Test",variant:"secondary"}},g={args:{label:"This is an extremely long label that will be truncated with ellipsis",variant:"primary"},parameters:{docs:{description:{story:"Long labels are automatically truncated with ellipsis (...)."}}}},u={args:{label:"Click me",variant:"primary",clickable:!0},parameters:{docs:{description:{story:"Clickable tag with hover effect. Press Enter or Space when focused."}}}},y={args:{label:"Delete me",variant:"secondary"},parameters:{docs:{description:{story:"Tag with delete functionality. Click the X icon to delete."}}}},b={args:{label:"Disabled",variant:"primary",disabled:!0},parameters:{docs:{description:{story:"Disabled state with reduced opacity. Not interactive."}}}},h={render:()=>r.jsxs(f,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[r.jsx(d,{label:"React",variant:"primary"}),r.jsx(d,{label:"TypeScript",variant:"secondary"}),r.jsx(d,{label:"Astro",variant:"primary"}),r.jsx(d,{label:"MUI",variant:"secondary"})]}),parameters:{docs:{description:{story:"Multiple tags displayed together with gap spacing."}}}},x={render:()=>r.jsxs(f,{sx:{display:"flex",flexDirection:"column",gap:7.5},children:[r.jsx(f,{children:r.jsx(d,{label:"Courses",variant:"primary"})}),r.jsx(f,{children:r.jsx(d,{label:"Test",variant:"secondary"})})]}),parameters:{docs:{description:{story:"Comparison between primary and secondary variants."}}}};var k,T,C;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Courses',
    variant: 'primary'
  }
}`,...(C=(T=p.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var $,P,D;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Test',
    variant: 'secondary'
  }
}`,...(D=(P=m.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var j,z,B;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(B=(z=g.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var H,M,V;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(V=(M=u.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var A,F,L;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(L=(F=y.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var R,I,W;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(W=(I=b.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var _,E,N;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(N=(E=h.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var O,q,G;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(G=(q=x.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const me=["Primary","Secondary","LongLabel","Clickable","Deleteable","Disabled","MultipleTags","VariantComparison"];export{u as Clickable,y as Deleteable,b as Disabled,g as LongLabel,h as MultipleTags,p as Primary,m as Secondary,x as VariantComparison,me as __namedExportsOrder,pe as default};
