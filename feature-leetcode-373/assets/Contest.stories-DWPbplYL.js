import{A as t}from"./iframe-B92Ge10w.js";import{C as s,N as n}from"./NavShell-DdGTuf8a.js";import"./preload-helper-BgEhTuto.js";import"./NavigationMenu-DuWz7LDx.js";import"./Close-dITv4pqI.js";import"./createSvgIcon-AoSM6NVh.js";import"./memoTheme-DmPiZqwI.js";import"./Menu-Cfg-iWhg.js";import"./useTheme-c_vKFP7F.js";import"./Fade-DYdRxWh_.js";import"./useTimeout-BiL0eB0l.js";import"./index-DGus10U0.js";import"./index-CxkACx1J.js";import"./useForkRef-DVtr2zJ5.js";import"./getReactElementRef-BtxbQuiw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-CxWSLp2M.js";import"./useTheme-sQKv93BO.js";import"./index-Ce_8y92Q.js";import"./getThemeProps-B8A9D3Ve.js";import"./Box-CIXHh8se.js";import"./List-BGNbXbxr.js";import"./Drawer-l_BuVhAr.js";import"./useSlot-DUM_PlAb.js";import"./mergeSlotProps-wGpGTrJ7.js";import"./mergeSlotProps-ByJZiNQk.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-BbKqazUY.js";import"./Portal-DX20c_SL.js";import"./Modal-ovfq6WmY.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-DPNT9Ikt.js";import"./useSlotProps-DhO3aVGK.js";import"./useControlled-CtHfSsa1.js";import"./ListItemButton-CDXgkbJd.js";import"./ButtonBase-noxFhqdT.js";import"./IconButton-CFoHQJzI.js";import"./CircularProgress-I5FvKGan.js";import"./Button-DEWk-gC6.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
