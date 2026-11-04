import{A as t}from"./iframe-CqDu9OBE.js";import{C as s,N as n}from"./NavShell-tq-XKPRc.js";import"./preload-helper-BiLPYPSP.js";import"./NavigationMenu-DEbhAtq1.js";import"./Close-DD_w4krF.js";import"./createSvgIcon-D1w2QfR3.js";import"./memoTheme-3KI59E3r.js";import"./Menu-DuDtsGc7.js";import"./useTheme-Cgf5bQNJ.js";import"./Fade-DRjMyt8l.js";import"./useTimeout-DT19T1TP.js";import"./index-BCx6jhAW.js";import"./index-B_t_w9hT.js";import"./useForkRef-BfnlKeHc.js";import"./getReactElementRef-B8aG6vvx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-IcQE3N0D.js";import"./useTheme-D77q7NpO.js";import"./index-sEorGFoD.js";import"./getThemeProps-CkHT2AMA.js";import"./Box-C9TRyb47.js";import"./List-Bo4KxnOP.js";import"./Drawer-CcVKwqV0.js";import"./useSlot-R4T9nFs0.js";import"./mergeSlotProps-GmcxALb7.js";import"./mergeSlotProps-DiUuK90M.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-0mXSOzg2.js";import"./Portal-Kpk2o83u.js";import"./Modal-BoD9WJ83.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-BpwifvzT.js";import"./useSlotProps-CPVw5rMo.js";import"./useControlled-mLxHv3-u.js";import"./ListItemButton-CMdDb_RH.js";import"./ButtonBase-O1lnr1Sz.js";import"./IconButton-W6Odlst6.js";import"./CircularProgress-wgiwZCiu.js";import"./Button-BuGV3Dlg.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
