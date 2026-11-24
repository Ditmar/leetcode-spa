import{A as t}from"./iframe-C-HTgiSH.js";import{C as s,N as n}from"./NavShell-DTdtB6aM.js";import"./preload-helper-ByM0tCHO.js";import"./NavigationMenu-7c1BHtq1.js";import"./Close-DLW6cDFQ.js";import"./createSvgIcon-BWiOL6hV.js";import"./memoTheme-DV8ubpnv.js";import"./Menu-DPwrQ0Rb.js";import"./useTheme-4FqZpYNv.js";import"./Fade-C2wAa4Yi.js";import"./useTimeout-BG86KaUw.js";import"./index-Bwlfs2xJ.js";import"./index-yjiqDSdO.js";import"./useForkRef-BWBekdY0.js";import"./getReactElementRef-DAIQ561Q.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-hpt02GPe.js";import"./useTheme-DUuEZu3K.js";import"./index-rXH0Ed5Q.js";import"./getThemeProps-BKfZ6QrH.js";import"./Box-BgLAskFu.js";import"./List-BboKssE1.js";import"./Drawer-DuOx-Q3H.js";import"./useSlot-CRcxbKCz.js";import"./mergeSlotProps-CXda_2yG.js";import"./mergeSlotProps-D-PJlaDW.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-D5XgvbIL.js";import"./Portal-xhjw-lTJ.js";import"./Modal-Dq8bjOGc.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-Qjonux-I.js";import"./useSlotProps-CpuxzgdI.js";import"./useControlled-Chm9Ga-o.js";import"./ListItemButton-BA-LAGYL.js";import"./ButtonBase-Bmm-_fr_.js";import"./IconButton-C_G1RPRX.js";import"./CircularProgress-awnbhT-x.js";import"./Button-BAP5fAnF.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
