import{j as r}from"./iframe-MChe8Sk-.js";import{T as i}from"./TestCard-BdVBsmtM.js";import"./preload-helper-PPVm8Dsz.js";import"./styled-B3tOFZ84.js";import"./Card-yuTeg5fS.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./memoTheme-D8qkuffd.js";import"./Paper-C-lWPSFK.js";import"./useTheme-D7pfh4mx.js";import"./useSlot-B0pCyc6s.js";import"./useForkRef-CuQl-QY0.js";import"./ButtonBase-Bu5JEoBA.js";const C={title:"Components/TestCard",component:i,parameters:{layout:"centered"},argTypes:{onSelect:{action:"selected"}}},t={args:{logo:"https://i.postimg.cc/KckvLBVj/codigo.jpg",title:"",description:""}},o={args:{logo:"https://i.postimg.cc/xTFCBQZ6/istockphoto-1164357236-612x612.jpg",title:"A long title example",description:"This story demonstrates how long titles behave visually."}},e={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px"},children:[r.jsx(i,{logo:"https://i.postimg.cc/KckvLBVj/codigo.jpg",title:"Card A",description:"First custom logo card"}),r.jsx(i,{logo:"https://i.postimg.cc/FRZFpXcM/X-tipos-de-lenguaje-de-programaci-n-m-s-buscados-por-las-empresas.jpg",title:"Card B",description:"Second custom logo card"})]})},s={args:{logo:"https://i.postimg.cc/FRZFpXcM/X-tipos-de-lenguaje-de-programaci-n-m-s-buscados-por-las-empresas.jpg",title:"With onSelect event",description:"Click the card to trigger an action in the Actions panel."}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    logo: 'https://i.postimg.cc/KckvLBVj/codigo.jpg',
    title: '',
    description: ''
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    logo: 'https://i.postimg.cc/xTFCBQZ6/istockphoto-1164357236-612x612.jpg',
    title: 'A long title example',
    description: 'This story demonstrates how long titles behave visually.'
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px'
  }}>
      <TestCard logo="https://i.postimg.cc/KckvLBVj/codigo.jpg" title="Card A" description="First custom logo card" />
      <TestCard logo="https://i.postimg.cc/FRZFpXcM/X-tipos-de-lenguaje-de-programaci-n-m-s-buscados-por-las-empresas.jpg" title="Card B" description="Second custom logo card" />
    </div>
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    logo: 'https://i.postimg.cc/FRZFpXcM/X-tipos-de-lenguaje-de-programaci-n-m-s-buscados-por-las-empresas.jpg',
    title: 'With onSelect event',
    description: 'Click the card to trigger an action in the Actions panel.'
  }
}`,...s.parameters?.docs?.source}}};const v=["Default","LongTitle","CustomShowcase","Clickable"];export{s as Clickable,e as CustomShowcase,t as Default,o as LongTitle,v as __namedExportsOrder,C as default};
