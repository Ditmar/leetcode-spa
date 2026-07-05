import{A as g}from"./iframe-3ZZd6O1_.js";import{a as v,N as S}from"./NavigationMenu-Drzpnfuz.js";const a=["Premium","Explore","Problems","Contest","Discuss"],y={title:"component-catalog/NavigationMenu",component:S,parameters:{layout:"fullscreen"},argTypes:{size:{control:"select",options:["small","medium","large"],description:"Navigation menu size variant"},variant:{control:"select",options:["primary","secondary"],description:"Navigation menu color variant"},navSections:{table:{disable:!0}},currentPath:{table:{disable:!0}},onItemClick:{table:{disable:!0}},useScrollHide:{table:{disable:!0}},drawerProps:{table:{disable:!0}},toolbarProps:{table:{disable:!0}},onMobileMenuToggle:{table:{disable:!0}},forceHamburger:{table:{disable:!0}},logo:{table:{disable:!0}}}},e=p=>[{id:"main",items:p.map(s=>({id:s.toLowerCase().replace(/\s+/g,"-"),label:s,href:`/${s.toLowerCase().replace(/\s+/g,"-")}`}))}],r=()=>p=>{const s=p.navSections||e(a);return g.jsx(S,{...p,navSections:s})},t={args:{navSections:e(a),size:"medium",variant:"primary"},render:r()},n={args:{navSections:e(a),logo:v,size:"medium",variant:"primary"}},o={args:{navSections:e(a),logo:v,size:"medium",variant:"primary"}},i={args:{navSections:e(a),logo:void 0,size:"medium",variant:"primary"}},c={args:{navSections:e(a),currentPath:"/premium",size:"medium",variant:"primary"},render:r(),parameters:{docs:{description:{story:"Shows Premium as active. Active items display in white."}}}},m={args:{navSections:e(a),size:"small",variant:"primary"},render:r()},d={args:{navSections:e(a),size:"large",variant:"primary"},render:r()},u={args:{navSections:e(a),size:"medium",variant:"secondary"},render:r()},l={args:{navSections:e(["Premium2","Explore2","Problems2","Contest2","Discuss2"]),size:"medium",variant:"primary"},render:r(),parameters:{docs:{description:{story:"Example showing custom labels. Edit navSections in Controls to change the menu items."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    navSections: createNavSections(defaultNavItems),
    size: 'medium',
    variant: 'primary'
  },
  render: createStoryRender()
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    navSections: createNavSections(defaultNavItems),
    logo: NavigationMenuLogo,
    size: 'medium',
    variant: 'primary'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    navSections: createNavSections(defaultNavItems),
    logo: NavigationMenuLogo,
    size: 'medium',
    variant: 'primary'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    navSections: createNavSections(defaultNavItems),
    logo: undefined,
    size: 'medium',
    variant: 'primary'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    navSections: createNavSections(defaultNavItems),
    currentPath: '/premium',
    size: 'medium',
    variant: 'primary'
  },
  render: createStoryRender(),
  parameters: {
    docs: {
      description: {
        story: 'Shows Premium as active. Active items display in white.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    navSections: createNavSections(defaultNavItems),
    size: 'small',
    variant: 'primary'
  },
  render: createStoryRender()
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    navSections: createNavSections(defaultNavItems),
    size: 'large',
    variant: 'primary'
  },
  render: createStoryRender()
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    navSections: createNavSections(defaultNavItems),
    size: 'medium',
    variant: 'secondary'
  },
  render: createStoryRender()
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    navSections: createNavSections(['Premium2', 'Explore2', 'Problems2', 'Contest2', 'Discuss2']),
    size: 'medium',
    variant: 'primary'
  },
  render: createStoryRender(),
  parameters: {
    docs: {
      description: {
        story: 'Example showing custom labels. Edit navSections in Controls to change the menu items.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const b=["Default","WithLogo","Desktop","Mobile","ActiveState","SizeSmall","SizeLarge","VariantSecondary","CustomLabels"],f=Object.freeze(Object.defineProperty({__proto__:null,ActiveState:c,CustomLabels:l,Default:t,Desktop:o,Mobile:i,SizeLarge:d,SizeSmall:m,VariantSecondary:u,WithLogo:n,__namedExportsOrder:b,default:y},Symbol.toStringTag,{value:"Module"}));export{c as A,l as C,t as D,f as N,d as S,u as V,n as W,m as a};
