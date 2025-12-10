import{j as e,T as g,c as b,C as f}from"./iframe-DZletXc6.js";import{c as m}from"./createSvgIcon-BhpE0Oup.js";import{D as I,A as l}from"./AvatarMenu-BkWoKFvR.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-DGbHPd1I.js";import"./styled-C1Vbkyu9.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./IconButton-nGiDmS7T.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BZ1Kqq5s.js";import"./useForkRef-CbYG7ca0.js";import"./CircularProgress-FMknK80G.js";import"./Typography-O0XgXUfI.js";import"./useTheme-BmZQiMgc.js";import"./Avatar-B529ofyV.js";import"./useSlot-MQbnNAPV.js";import"./Menu-BgW-u6bF.js";import"./Paper-CjdXzTPl.js";import"./index-WWHqfVWD.js";import"./index-E5Pa4id8.js";import"./createChainedFunction-BO_9K8Jh.js";const y=m(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"})),v=m(e.jsx("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"})),C=m(e.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"})),S=b(),u={profile:e.jsx(y,{fontSize:"small"}),settings:e.jsx(C,{fontSize:"small"}),logout:e.jsx(v,{fontSize:"small"})},k=I.map(t=>{const a=t.key;return a&&u[a]?{...t,icon:t.icon??u[a]}:t}),x=[{label:"Dark Mode",onClick:()=>console.log("Dark Mode"),"data-testid":"dark-mode-option"},{label:"Help",onClick:()=>console.log("Help"),"data-testid":"help-option"},{label:"Logout",onClick:()=>console.log("Logout"),divider:!0}],q={title:"Components/AvatarMenu",component:l,decorators:[t=>e.jsxs(g,{theme:S,children:[e.jsx(f,{}),e.jsx(t,{})]})],parameters:{layout:"centered",docs:{description:{component:"Dropdown menu component for authenticated user"}}},argTypes:{avatarUrl:{control:"text"},username:{control:"text"},fullWidth:{control:"boolean"},menuItems:{control:"object"},dataTestId:{control:"text"},onItemClicked:{action:"menuItemClicked"}},args:{avatarUrl:"https://i.ibb.co/mV26g4B7/b2cc1d5a59644f92c2391dcdd5cde3c11e4770fe.jpg",username:"User Example",fullWidth:!1,onItemClicked:()=>{},menuItems:k,dataTestId:"avatar-menu"},render:t=>{const{dataTestId:a,...p}=t,h=p.menuItems?.map(d=>({...d,onClick:()=>{d.onClick()}}))||[];return e.jsx(l,{...t,menuItems:h,"data-testid":a})}},s={args:{username:"Standard User"},parameters:{docs:{description:{story:"Standard menu with default items and avatar with image"}}}},r={args:{username:"Administrator",menuItems:x},parameters:{docs:{description:{story:"Menu with custom items and specific actions"}}}},n={args:{avatarUrl:"",username:"Fallback User"},parameters:{docs:{description:{story:"Avatar without image"}}}},o={args:{username:"User Without Menu",menuItems:[]},parameters:{docs:{description:{story:"Empty menu with no options available"}}}},c={args:{username:"Disabled User",menuItems:[{label:"Option 1",onClick:()=>{},disabled:!0},{label:"Option 2",onClick:()=>{},disabled:!0,divider:!0}],fullWidth:!1},parameters:{docs:{description:{story:"Disabled items that cannot be selected"}}}},i={args:{username:"",fullWidth:!0},parameters:{layout:"padded",docs:{description:{story:"Layout variants: without username and fullWidth"}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    username: 'Standard User'
  },
  parameters: {
    docs: {
      description: {
        story: 'Standard menu with default items and avatar with image'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    username: 'Administrator',
    menuItems: customItems
  },
  parameters: {
    docs: {
      description: {
        story: 'Menu with custom items and specific actions'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    avatarUrl: '',
    username: 'Fallback User'
  },
  parameters: {
    docs: {
      description: {
        story: 'Avatar without image'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    username: 'User Without Menu',
    menuItems: []
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty menu with no options available'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    username: 'Disabled User',
    menuItems: [{
      label: 'Option 1',
      onClick: () => {},
      disabled: true
    }, {
      label: 'Option 2',
      onClick: () => {},
      disabled: true,
      divider: true
    }],
    fullWidth: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled items that cannot be selected'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    username: '',
    fullWidth: true
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Layout variants: without username and fullWidth'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const G=["Standard","CustomActions","AvatarFallback","EmptyMenu","DisabledItems","LayoutVariants"];export{n as AvatarFallback,r as CustomActions,c as DisabledItems,o as EmptyMenu,i as LayoutVariants,s as Standard,G as __namedExportsOrder,q as default};
