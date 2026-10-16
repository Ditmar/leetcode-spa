import{A as t}from"./iframe-BOs7SGJu.js";import{C as s,N as n}from"./NavShell-BwQjSHe6.js";import"./preload-helper-BSL-Of2U.js";import"./NavigationMenu-CqrbCQ2I.js";import"./Close-u5XHat22.js";import"./createSvgIcon-DXldOrOe.js";import"./memoTheme-BORqS73i.js";import"./Menu-BWNCbHai.js";import"./useTheme-e-d89uoI.js";import"./Fade-Dfx2CLls.js";import"./useTimeout-Bf8Ks3KG.js";import"./index-C7uPot2r.js";import"./index-BXEkjFRt.js";import"./useForkRef-CoGeQQHX.js";import"./getReactElementRef-B3hqEZ0X.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-Tx1N0YVs.js";import"./useTheme-DQdjlI_C.js";import"./index-B_Ih8-Vf.js";import"./getThemeProps-B0VRPaXb.js";import"./Box-BFNbwYqC.js";import"./List-k9sRafNR.js";import"./Drawer-WMA0n0OO.js";import"./useSlot-B7LIS-7t.js";import"./mergeSlotProps-BRvNqneg.js";import"./mergeSlotProps-DQkHvT6f.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-XqFnnHdV.js";import"./Portal-3461uYy-.js";import"./Modal-C2OIv1H9.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-DNGkatR1.js";import"./useSlotProps-DP2QJL0L.js";import"./useControlled-hd_N9nqk.js";import"./ListItemButton-CX5m14dF.js";import"./ButtonBase-6HC7_Fup.js";import"./IconButton-Dw_CF92C.js";import"./CircularProgress--E11HQZ2.js";import"./Button-XjSmbl2K.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
