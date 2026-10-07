import{A as e}from"./iframe-DZgjBaCI.js";import{C as s,N as n}from"./NavShell-DLQe8WrM.js";import"./preload-helper-B1AL8F-k.js";import"./NavigationMenu-DDhsgyzL.js";import"./Close-D4A2m0tB.js";import"./createSvgIcon-BFkghpTZ.js";import"./memoTheme-BxvpuuMX.js";import"./Menu-DpKNznXD.js";import"./useTheme-cMA2141u.js";import"./Fade-C-MiHodg.js";import"./useTimeout-BDtcG89I.js";import"./index-e3Chn4Fh.js";import"./index-wrTMXIIN.js";import"./useForkRef-iOp8-Dwt.js";import"./getReactElementRef-COQh1J24.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-iuB_lG1W.js";import"./useTheme-DUL3flCP.js";import"./index-D042E6_K.js";import"./getThemeProps-C2pvk4lt.js";import"./Box-B7Lua5o6.js";import"./List-DmlQLALT.js";import"./Drawer-C5y6ez7f.js";import"./useSlot-DR01-SX0.js";import"./mergeSlotProps-jLDR-QGk.js";import"./mergeSlotProps-oUmEhf5R.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-CqTmoGL0.js";import"./Portal-CUxd2qQf.js";import"./Modal-C41uklSG.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-CbbWW-wG.js";import"./useSlotProps-D4DDpToA.js";import"./useControlled-B8PfquY8.js";import"./ListItemButton-BwCVMGGM.js";import"./ButtonBase-Bpu3Txz4.js";import"./IconButton-BD-giEia.js";import"./CircularProgress-DBQ7hgPw.js";import"./Button-Cksm60XM.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/problems"}){return e.jsx(s,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"Problems PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ProblemsPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/problems'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ProblemsPage",component:a,decorators:[i=>e.jsx(s,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Full page for browsing coding problems. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/problems"}}}},args:{currentPath:"/problems"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Problems" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Problems item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Problems" marked as the active route.'
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
        story: 'Navigation state simulated from controls — a different route ("/") is active, so the Problems item renders in its inactive state.'
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
}`,...o.parameters?.docs?.source}}};const X=["Default","InactiveNavigation","MobileViewport"];export{t as Default,r as InactiveNavigation,o as MobileViewport,X as __namedExportsOrder,W as default};
