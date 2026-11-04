import{A as e}from"./iframe-CfGraOrS.js";import{C as a,N as n}from"./NavShell-Dahxdciy.js";import"./preload-helper-2mYZUPB7.js";import"./NavigationMenu-DSjHm999.js";import"./Close-DrDU0WBT.js";import"./createSvgIcon-p9VVQ3Tv.js";import"./memoTheme-6uBBnYsk.js";import"./Menu-CguGJbR9.js";import"./useTheme-Dwmq5vLe.js";import"./Fade-CtkGgJYB.js";import"./useTimeout-BLDkx8t-.js";import"./index-Cp4bOHpj.js";import"./index-DOpqREs6.js";import"./useForkRef-BCofdFVR.js";import"./getReactElementRef-_2kTzqLE.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-DLRMBrUs.js";import"./useTheme-lH8BfNSi.js";import"./index-Ceydq8x8.js";import"./getThemeProps-BP6CKRo9.js";import"./Box-CZVpbuQj.js";import"./List-Be8gNIcN.js";import"./Drawer-B1Qxzw6D.js";import"./useSlot--qOg39J8.js";import"./mergeSlotProps-BIZ2xSY-.js";import"./mergeSlotProps-CMOC6BPR.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-BPBUliuF.js";import"./Portal-22O3n-mJ.js";import"./Modal-BJDHYu_d.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-D_HAqY3l.js";import"./useSlotProps-Bw6uhwfm.js";import"./useControlled-C4zINcr_.js";import"./ListItemButton-Lyt1Ob1_.js";import"./ButtonBase-BJXTSD8R.js";import"./IconButton-BTZwEHay.js";import"./CircularProgress-BR2plDdB.js";import"./Button-Dber-V16.js";import"./schemas-CxL56DE6.js";function s({currentPath:i="/explore"}){return e.jsx(a,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"EXPLORE PAGE "})})})}s.__docgenInfo={description:"",methods:[],displayName:"ExplorePage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/explore'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],Q={title:"pages/ExplorePage",component:s,decorators:[i=>e.jsx(a,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Explore landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/explore"}}}},args:{currentPath:"/explore"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Explore" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Explore item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Explore" marked as the active route.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    currentPath: '/'
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Navigation state simulated from controls — a different route ("/") is active, so the Explore item renders in its inactive state.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const W=["Default","InactiveNavigation","MobileViewport"];export{t as Default,r as InactiveNavigation,o as MobileViewport,W as __namedExportsOrder,Q as default};
