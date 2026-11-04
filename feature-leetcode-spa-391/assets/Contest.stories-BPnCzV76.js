import{A as t}from"./iframe-CfGraOrS.js";import{C as s,N as n}from"./NavShell-Dahxdciy.js";import"./preload-helper-2mYZUPB7.js";import"./NavigationMenu-DSjHm999.js";import"./Close-DrDU0WBT.js";import"./createSvgIcon-p9VVQ3Tv.js";import"./memoTheme-6uBBnYsk.js";import"./Menu-CguGJbR9.js";import"./useTheme-Dwmq5vLe.js";import"./Fade-CtkGgJYB.js";import"./useTimeout-BLDkx8t-.js";import"./index-Cp4bOHpj.js";import"./index-DOpqREs6.js";import"./useForkRef-BCofdFVR.js";import"./getReactElementRef-_2kTzqLE.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-DLRMBrUs.js";import"./useTheme-lH8BfNSi.js";import"./index-Ceydq8x8.js";import"./getThemeProps-BP6CKRo9.js";import"./Box-CZVpbuQj.js";import"./List-Be8gNIcN.js";import"./Drawer-B1Qxzw6D.js";import"./useSlot--qOg39J8.js";import"./mergeSlotProps-BIZ2xSY-.js";import"./mergeSlotProps-CMOC6BPR.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-BPBUliuF.js";import"./Portal-22O3n-mJ.js";import"./Modal-BJDHYu_d.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-D_HAqY3l.js";import"./useSlotProps-Bw6uhwfm.js";import"./useControlled-C4zINcr_.js";import"./ListItemButton-Lyt1Ob1_.js";import"./ButtonBase-BJXTSD8R.js";import"./IconButton-BTZwEHay.js";import"./CircularProgress-BR2plDdB.js";import"./Button-Dber-V16.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    currentPath: '/'
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const X=["Default","InactiveNavigation","MobileViewport"];export{e as Default,o as InactiveNavigation,r as MobileViewport,X as __namedExportsOrder,W as default};
