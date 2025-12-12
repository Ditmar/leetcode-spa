import{j as e,T as i,t as m}from"./iframe-C35K96RD.js";import{S as a}from"./StatsCard-BeXMrT8x.js";import{c as g}from"./createSvgIcon-3fXcQLFb.js";import{B as n}from"./Box-D6xhJ_8i.js";import"./preload-helper-PPVm8Dsz.js";import"./styled-CnzOWJBU.js";import"./Card-ClNP9fUq.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./memoTheme-D5_KbJsb.js";import"./Paper-ByygLgf8.js";import"./useTheme-dUF3IGmu.js";import"./Typography-C24xOlwb.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./index-Dv-A-G9R.js";import"./getThemeProps-DossmNUs.js";const x=g(e.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"})),B={title:"Components/StatsCard",component:a,parameters:{layout:"centered"},decorators:[r=>e.jsx(i,{theme:m,children:e.jsx(r,{})})]},s={args:{value:"32",label:"Tests Written"}},l={args:{value:"%80",label:"Overall Average"}},t={args:{icon:e.jsx(x,{fontSize:"large"}),value:"42",label:"Custom Icon"}},o={render:()=>e.jsxs(n,{sx:{display:"flex",gap:3,padding:4,backgroundColor:r=>r.palette.background.default,borderRadius:2,flexWrap:"wrap"},children:[e.jsx(a,{value:"32",label:"Tests Written"}),e.jsx(a,{value:"%80",label:"Overall Average"})]})},d={render:()=>e.jsxs(n,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",md:"repeat(2, 1fr)"},gap:2,padding:4,backgroundColor:r=>r.palette.background.default,borderRadius:2,maxWidth:{xs:"100%",md:"1000px"}},children:[e.jsx(a,{value:"32",label:"Tests Written"}),e.jsx(a,{value:"%80",label:"Overall Average"}),e.jsx(a,{value:"15",label:"Projects"}),e.jsx(a,{value:"%80",label:"Success Rate"})]})},u={args:{value:"100",label:"No Icon Example"}},c={render:()=>e.jsxs(n,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},gap:3,padding:4,backgroundColor:r=>r.palette.background.default,borderRadius:2,maxWidth:"1200px"},children:[e.jsx(a,{value:"%80",label:"Overall Average"}),e.jsx(a,{value:"%95",label:"Success Rate"}),e.jsx(a,{value:"%87",label:"Completion Rate"}),e.jsx(a,{value:"%92",label:"Accuracy"}),e.jsx(a,{value:"%78",label:"Progress"}),e.jsx(a,{value:"%85",label:"Efficiency"})]})},p={render:()=>e.jsxs(n,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",sm:"repeat(2, 1fr)",md:"repeat(4, 1fr)"},gap:2,padding:4,backgroundColor:r=>r.palette.background.default,borderRadius:2,maxWidth:"1400px"},children:[e.jsx(a,{value:"32",label:"Tests Written"}),e.jsx(a,{value:"%80",label:"Overall Average"}),e.jsx(a,{value:"15",label:"Projects"}),e.jsx(a,{value:"%95",label:"Success Rate"}),e.jsx(a,{value:"42",label:"Tasks Completed"}),e.jsx(a,{value:"%87",label:"Completion Rate"}),e.jsx(a,{value:"128",label:"Total Users"}),e.jsx(a,{value:"%92",label:"Satisfaction"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: '32',
    label: 'Tests Written'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: '%80',
    label: 'Overall Average'
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Edit fontSize="large" />,
    value: '42',
    label: 'Custom Icon'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    gap: 3,
    padding: 4,
    backgroundColor: theme => theme.palette.background.default,
    borderRadius: 2,
    flexWrap: 'wrap'
  }}>
      <StatsCard value="32" label="Tests Written" />
      <StatsCard value="%80" label="Overall Average" />
    </Box>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      md: 'repeat(2, 1fr)'
    },
    gap: 2,
    padding: 4,
    backgroundColor: theme => theme.palette.background.default,
    borderRadius: 2,
    maxWidth: {
      xs: '100%',
      md: '1000px'
    }
  }}>
      <StatsCard value="32" label="Tests Written" />
      <StatsCard value="%80" label="Overall Average" />
      <StatsCard value="15" label="Projects" />
      <StatsCard value="%80" label="Success Rate" />
    </Box>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: '100',
    label: 'No Icon Example'
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)'
    },
    gap: 3,
    padding: 4,
    backgroundColor: theme => theme.palette.background.default,
    borderRadius: 2,
    maxWidth: '1200px'
  }}>
      <StatsCard value="%80" label="Overall Average" />
      <StatsCard value="%95" label="Success Rate" />
      <StatsCard value="%87" label="Completion Rate" />
      <StatsCard value="%92" label="Accuracy" />
      <StatsCard value="%78" label="Progress" />
      <StatsCard value="%85" label="Efficiency" />
    </Box>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(4, 1fr)'
    },
    gap: 2,
    padding: 4,
    backgroundColor: theme => theme.palette.background.default,
    borderRadius: 2,
    maxWidth: '1400px'
  }}>
      <StatsCard value="32" label="Tests Written" />
      <StatsCard value="%80" label="Overall Average" />
      <StatsCard value="15" label="Projects" />
      <StatsCard value="%95" label="Success Rate" />
      <StatsCard value="42" label="Tasks Completed" />
      <StatsCard value="%87" label="Completion Rate" />
      <StatsCard value="128" label="Total Users" />
      <StatsCard value="%92" label="Satisfaction" />
    </Box>
}`,...p.parameters?.docs?.source}}};const P=["Default","OverallAverage","WithCustomIcon","MultipleCards","CardsInGrid","NoIcon","AllPercentageCards","MixedCards"];export{c as AllPercentageCards,d as CardsInGrid,s as Default,p as MixedCards,o as MultipleCards,u as NoIcon,l as OverallAverage,t as WithCustomIcon,P as __namedExportsOrder,B as default};
