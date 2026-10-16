import{A as t}from"./iframe-BOK941v2.js";import{C as s,N as n}from"./NavShell-CRKzGA62.js";import"./preload-helper-D27beMqt.js";import"./NavigationMenu-C1WMDoJV.js";import"./Close-DNmeWT5s.js";import"./createSvgIcon-BZZ1ujFY.js";import"./memoTheme-KRPj4Rd3.js";import"./Menu-Cv5G2vK3.js";import"./useTheme-IjrTi2RS.js";import"./Fade-C7dxhMqv.js";import"./useTimeout-DFZEagkf.js";import"./index-B3AmPxPF.js";import"./index-CXlO4-_Z.js";import"./useForkRef-De9ezXoH.js";import"./getReactElementRef-LHW2th-w.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-T8F-RvFK.js";import"./useTheme-Dnqa9HLq.js";import"./index-BhMUe5rF.js";import"./getThemeProps-CuXJhsgO.js";import"./Box-D70rIt59.js";import"./List-CTFo-W5U.js";import"./Drawer-Cm9yFg6O.js";import"./useSlot-J516ePhw.js";import"./mergeSlotProps-DnEJyT15.js";import"./mergeSlotProps-Dq0eS-gw.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-D5waOdgG.js";import"./Portal-Da_OSPo6.js";import"./Modal-CGw3qCT4.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-DMbMH0dA.js";import"./useSlotProps-CAG0PiKZ.js";import"./useControlled-BqQproMm.js";import"./ListItemButton-D2WoNNKP.js";import"./ButtonBase-BtN9NctZ.js";import"./IconButton-9P0VkXlF.js";import"./CircularProgress-BUslHgoF.js";import"./Button-fM5vR_fs.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
