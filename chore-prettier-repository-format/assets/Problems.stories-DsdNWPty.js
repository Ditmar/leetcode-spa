import{A as e}from"./iframe-44MlSHf1.js";import{C as s,N as n}from"./NavShell--NiZcW_t.js";import"./preload-helper-C7tQJBod.js";import"./NavigationMenu-CF448dCc.js";import"./Close-75QZA5o-.js";import"./createSvgIcon-CC0r7S6c.js";import"./memoTheme-iJqxc3Mq.js";import"./Menu-NYZG2r04.js";import"./useTheme-KUEpAZwz.js";import"./Fade-Do8dzLn8.js";import"./useTimeout-CLMXh6cq.js";import"./index-BJlh8jt0.js";import"./index-DuMDxQet.js";import"./useForkRef-BcCuoEKJ.js";import"./getReactElementRef-D9N9NK4n.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-1zCUtbnS.js";import"./useTheme-Jk_sHqRx.js";import"./index-DJOtmXOU.js";import"./getThemeProps-Bitbfygo.js";import"./Box-DgGHpP6b.js";import"./List-Cc09NDvz.js";import"./Drawer-CqpFpPKU.js";import"./useSlot-BTLX2t2K.js";import"./mergeSlotProps-CMJ5gz0C.js";import"./mergeSlotProps-C_HW4HYn.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-psovco4L.js";import"./Portal-6mf7KBin.js";import"./Modal-C3AOSUNx.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-DbWCS3b4.js";import"./useSlotProps-SdsnX0Z9.js";import"./useControlled-u46TJp_p.js";import"./ListItemButton-Cp8cSyWM.js";import"./ButtonBase-Tv79IywX.js";import"./IconButton-Bp2YMNZq.js";import"./CircularProgress-h48s2oRb.js";import"./Button-BGfvNszt.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/problems"}){return e.jsx(s,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"Problems PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ProblemsPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/problems'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ProblemsPage",component:a,decorators:[i=>e.jsx(s,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Full page for browsing coding problems. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/problems"}}}},args:{currentPath:"/problems"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Problems" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Problems item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
