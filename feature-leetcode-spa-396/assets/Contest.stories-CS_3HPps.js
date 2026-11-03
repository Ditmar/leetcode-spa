import{A as t}from"./iframe-BbGLnvuo.js";import{C as s,N as n}from"./NavShell-CzFbTK_3.js";import"./preload-helper-CKBKVluw.js";import"./NavigationMenu-fNkAtDI2.js";import"./Close-B9PwST20.js";import"./createSvgIcon-CEwZZJp_.js";import"./memoTheme-CA4c3R6p.js";import"./Menu-8CAWiAZ5.js";import"./useTheme-BcvMcVig.js";import"./Fade-BqMb0qgG.js";import"./useTimeout-C6wAdi79.js";import"./index-BujdREZi.js";import"./index-1BuDwbso.js";import"./useForkRef-CRljDdhb.js";import"./getReactElementRef-CZMcmj6v.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-AcglnVwa.js";import"./useTheme-BQNHX05j.js";import"./index-DP4cFZZL.js";import"./getThemeProps-CSJTnkDS.js";import"./Box-Dep7Ht1j.js";import"./List-DPaKoOTD.js";import"./Drawer-CGjUSIqu.js";import"./useSlot-CyTimpXR.js";import"./mergeSlotProps-CXC0LEHM.js";import"./mergeSlotProps-gpMN8GvW.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-BYZovvj3.js";import"./Portal-ByVlcs5r.js";import"./Modal-MZBJzjZm.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-DtPxDUnt.js";import"./useSlotProps-EZANqq4e.js";import"./useControlled-B5MAVQgF.js";import"./ListItemButton-DbDym9Eb.js";import"./ButtonBase-Cg5hJdhp.js";import"./IconButton-B76DRVnP.js";import"./CircularProgress-wteUxasR.js";import"./Button-B5NJXEjI.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
