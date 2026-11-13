import{A as t}from"./iframe-DXm4qwPe.js";import{C as s,N as n}from"./NavShell-BprkRvrV.js";import"./preload-helper-BJoZg9pk.js";import"./NavigationMenu-CH0kYh82.js";import"./Close-B4-408Xx.js";import"./createSvgIcon-CJzgPa-w.js";import"./memoTheme-D9qlqSBv.js";import"./Menu-BqghQPWQ.js";import"./useTheme-CnSXaV8n.js";import"./Fade-BtEi4C5N.js";import"./useTimeout-ehy0Moo6.js";import"./index-BfMyYkhi.js";import"./index-D3k1so32.js";import"./useForkRef-CegaQ6tG.js";import"./getReactElementRef-D5SSwie-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-ZiJ5mvKa.js";import"./useTheme-B77A1cD1.js";import"./index-C02P1lYG.js";import"./getThemeProps-BFeuIlO7.js";import"./Box-_1KI9PRi.js";import"./List-GXVdZTLN.js";import"./Drawer-BhqrbIG8.js";import"./useSlot-DdokL4i3.js";import"./mergeSlotProps-CSSJ-Cy5.js";import"./mergeSlotProps-CJuCyY_X.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-CIGH2vvu.js";import"./Portal-CXh8RRO5.js";import"./Modal-B5jj1WFR.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-CZ7VDxrY.js";import"./useSlotProps-5gx5WvD6.js";import"./useControlled-B0BEuWwZ.js";import"./ListItemButton-Xrt2LY97.js";import"./ButtonBase-CtLg5eOM.js";import"./IconButton-wOTKwGa4.js";import"./CircularProgress-BbY9ltLx.js";import"./Button-khQjOLuS.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
