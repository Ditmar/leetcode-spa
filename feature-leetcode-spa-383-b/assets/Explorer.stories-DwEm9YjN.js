import{A as e}from"./iframe-DXm4qwPe.js";import{C as a,N as n}from"./NavShell-BprkRvrV.js";import"./preload-helper-BJoZg9pk.js";import"./NavigationMenu-CH0kYh82.js";import"./Close-B4-408Xx.js";import"./createSvgIcon-CJzgPa-w.js";import"./memoTheme-D9qlqSBv.js";import"./Menu-BqghQPWQ.js";import"./useTheme-CnSXaV8n.js";import"./Fade-BtEi4C5N.js";import"./useTimeout-ehy0Moo6.js";import"./index-BfMyYkhi.js";import"./index-D3k1so32.js";import"./useForkRef-CegaQ6tG.js";import"./getReactElementRef-D5SSwie-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-ZiJ5mvKa.js";import"./useTheme-B77A1cD1.js";import"./index-C02P1lYG.js";import"./getThemeProps-BFeuIlO7.js";import"./Box-_1KI9PRi.js";import"./List-GXVdZTLN.js";import"./Drawer-BhqrbIG8.js";import"./useSlot-DdokL4i3.js";import"./mergeSlotProps-CSSJ-Cy5.js";import"./mergeSlotProps-CJuCyY_X.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-CIGH2vvu.js";import"./Portal-CXh8RRO5.js";import"./Modal-B5jj1WFR.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-CZ7VDxrY.js";import"./useSlotProps-5gx5WvD6.js";import"./useControlled-B0BEuWwZ.js";import"./ListItemButton-Xrt2LY97.js";import"./ButtonBase-CtLg5eOM.js";import"./IconButton-wOTKwGa4.js";import"./CircularProgress-BbY9ltLx.js";import"./Button-khQjOLuS.js";import"./schemas-CxL56DE6.js";function s({currentPath:i="/explore"}){return e.jsx(a,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"EXPLORE PAGE "})})})}s.__docgenInfo={description:"",methods:[],displayName:"ExplorePage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/explore'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],Q={title:"pages/ExplorePage",component:s,decorators:[i=>e.jsx(a,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Explore landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/explore"}}}},args:{currentPath:"/explore"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Explore" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Explore item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Explore" marked as the active route.'
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
        story: 'Navigation state simulated from controls — a different route ("/") is active, so the Explore item renders in its inactive state.'
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
}`,...o.parameters?.docs?.source}}};const W=["Default","InactiveNavigation","MobileViewport"];export{t as Default,r as InactiveNavigation,o as MobileViewport,W as __namedExportsOrder,Q as default};
