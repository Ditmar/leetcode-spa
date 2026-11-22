import{A as t}from"./iframe-CuQJ7Lof.js";import{C as s,N as n}from"./NavShell-DzOjM-YS.js";import"./preload-helper-erMFQjWq.js";import"./NavigationMenu-DdAFiHt2.js";import"./Close-TzIpLdDG.js";import"./createSvgIcon-PargAk8z.js";import"./memoTheme-DNtaTH2X.js";import"./Menu-CSpdHNwS.js";import"./useTheme-B8UebmjW.js";import"./Fade-D67Hebf-.js";import"./useTimeout-eREnkY_z.js";import"./index-C-kvbF0L.js";import"./index-B31KFx_2.js";import"./useForkRef-DsTgApk0.js";import"./getReactElementRef-B3lCnqdx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-BvSsbE2q.js";import"./useTheme-Eee8qISS.js";import"./index-CPZt2bch.js";import"./getThemeProps-Bf05bU0c.js";import"./Box-CKcHIzeN.js";import"./List-CQtoELnh.js";import"./Drawer-6DdHV-U8.js";import"./useSlot-C6gHfblL.js";import"./mergeSlotProps-CGsWrCVY.js";import"./mergeSlotProps-DQfKT_ig.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-hSPL4Jfx.js";import"./Portal-MJQ7qjr0.js";import"./Modal-Dlx9Dn2r.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-BtM7MrtE.js";import"./useSlotProps-BO2-hVMf.js";import"./useControlled-C7dvaoCO.js";import"./ListItemButton-DBxxAQFB.js";import"./ButtonBase-B9Uh8uSh.js";import"./IconButton-jEwRHXk0.js";import"./CircularProgress-BxA_ePRO.js";import"./Button-JqiqbmF0.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
