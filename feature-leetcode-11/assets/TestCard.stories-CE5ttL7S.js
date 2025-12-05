import{j as r}from"./iframe-BFPM0_7v.js";import{T as i}from"./TestCard-qTPWTlyD.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-D84DMyRJ.js";import"./Card-BVa3E29u.js";import"./Paper-DnE5kCD_.js";import"./useTheme-CYTbxrz4.js";import"./useSlot-u3VpWGTx.js";import"./useForkRef-BKor41Qq.js";import"./ButtonBase-DW7ashA1.js";const j={title:"Components/TestCard",component:i,parameters:{layout:"centered"},argTypes:{onSelect:{action:"selected"}}},t={args:{logo:"https://i.postimg.cc/KckvLBVj/codigo.jpg",title:"",description:""}},o={args:{logo:"https://i.postimg.cc/xTFCBQZ6/istockphoto-1164357236-612x612.jpg",title:"A long title example",description:"This story demonstrates how long titles behave visually."}},e={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px"},children:[r.jsx(i,{logo:"https://i.postimg.cc/KckvLBVj/codigo.jpg",title:"Card A",description:"First custom logo card"}),r.jsx(i,{logo:"https://i.postimg.cc/FRZFpXcM/X-tipos-de-lenguaje-de-programaci-n-m-s-buscados-por-las-empresas.jpg",title:"Card B",description:"Second custom logo card"})]})},s={args:{logo:"https://i.postimg.cc/FRZFpXcM/X-tipos-de-lenguaje-de-programaci-n-m-s-buscados-por-las-empresas.jpg",title:"With onSelect event",description:"Click the card to trigger an action in the Actions panel."}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const x=["Default","LongTitle","CustomShowcase","Clickable"];export{s as Clickable,e as CustomShowcase,t as Default,o as LongTitle,x as __namedExportsOrder,j as default};
