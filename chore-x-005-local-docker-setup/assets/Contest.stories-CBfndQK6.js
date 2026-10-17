import{A as t}from"./iframe-DVJonEpS.js";import{C as s,N as n}from"./NavShell-BZzNQNcE.js";import"./preload-helper-DBG63zVc.js";import"./NavigationMenu-DoFPIdLA.js";import"./Close-BsGoMU5q.js";import"./createSvgIcon-BJcxZOOm.js";import"./memoTheme-ganAKz59.js";import"./Menu-DFpGp4sc.js";import"./useTheme-4dHTm5lw.js";import"./Fade-CCWvNSbH.js";import"./useTimeout-BeTkft1a.js";import"./index-h_nRZA54.js";import"./index-lfITqCAk.js";import"./useForkRef-Ciq-fWmn.js";import"./getReactElementRef-jfJQEUaH.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-DT5WYRjw.js";import"./useTheme-WEPfZGTX.js";import"./index-C5uUKj5V.js";import"./getThemeProps-8kpFdPTS.js";import"./Box-C2c1PSQb.js";import"./List-r-K_Ttlt.js";import"./Drawer-xP_HiEDi.js";import"./useSlot-DGYXoWVe.js";import"./mergeSlotProps-BdElEZnw.js";import"./mergeSlotProps-wDOYC06N.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-DNiCvWP6.js";import"./Portal-VdlzkXPn.js";import"./Modal-BO93bvL_.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-Bb9l83qb.js";import"./useSlotProps-x1e7XiGG.js";import"./useControlled-DSY99oRo.js";import"./ListItemButton-BuwGkBS5.js";import"./ButtonBase-KvMybpq-.js";import"./IconButton-C2DJGiXG.js";import"./CircularProgress-Z0PU7N8T.js";import"./Button-V8W1wX4W.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
