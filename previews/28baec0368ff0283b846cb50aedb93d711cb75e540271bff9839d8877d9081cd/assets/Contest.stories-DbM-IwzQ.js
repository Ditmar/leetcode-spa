import{A as t}from"./iframe-B-cujqn9.js";import{C as s,N as n}from"./NavShell-BSWMfcrD.js";import"./preload-helper-CPfDJUH0.js";import"./NavigationMenu-DDbRLr8f.js";import"./Close-BH96bfjG.js";import"./createSvgIcon-B1ddKOJ8.js";import"./memoTheme-CF34DA2W.js";import"./Menu-BvBcYPjM.js";import"./useTheme-DmcGdzjD.js";import"./Fade-C3rMC-dQ.js";import"./useTimeout-DIhsF-AR.js";import"./index-wVpzaqdd.js";import"./index-BK1qRSg7.js";import"./useForkRef-C145fjMl.js";import"./getReactElementRef-CgtOJq1a.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-SWeUrAEK.js";import"./useTheme-1TEtRJHe.js";import"./index-40idvSmt.js";import"./getThemeProps-DgKWTPMZ.js";import"./Box-Dcy8TLqn.js";import"./List-B6WKqmil.js";import"./Drawer-DE38pKc-.js";import"./useSlot-FViU0ahu.js";import"./mergeSlotProps-B7w8OaGi.js";import"./mergeSlotProps-DBCWNC-L.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-DxVyn2Eq.js";import"./Portal-CvbneHEg.js";import"./Modal-CqgJ0QTp.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-HgVUn2_j.js";import"./useSlotProps-7QwTHbx6.js";import"./useControlled-DWiThNIF.js";import"./ListItemButton-Dq_GAoGg.js";import"./ButtonBase-A0CcS1Kf.js";import"./IconButton-B7a3WHgS.js";import"./CircularProgress-CIlmbjIK.js";import"./Button-DKKnppmH.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
