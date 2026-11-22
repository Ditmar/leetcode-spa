import{A as e}from"./iframe-DxxIjkKv.js";import{C as a,N as n}from"./NavShell-Cmz38g6Y.js";import"./preload-helper-DTrIYJOe.js";import"./NavigationMenu-DBGwqObX.js";import"./Close-CUSkQgIn.js";import"./createSvgIcon-CNiNlz7c.js";import"./memoTheme-BDZ49KXN.js";import"./Menu-C1Yza7Ra.js";import"./useTheme-lyl9eOFU.js";import"./Fade-CYrCD-FE.js";import"./useTimeout-BGHBR-8X.js";import"./index-DeEoUr93.js";import"./index-CxtC6YVF.js";import"./useForkRef-CAaZf_u2.js";import"./getReactElementRef-CNIrLW_4.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-CCYfc_VF.js";import"./useTheme-u6taii-B.js";import"./index-BPEEX7qy.js";import"./getThemeProps-EnqVG4-m.js";import"./Box-Dkx-TViV.js";import"./List-DZVtoFcq.js";import"./Drawer-BgGT7GyA.js";import"./useSlot-B53DNB-1.js";import"./mergeSlotProps-rItQ1gvh.js";import"./mergeSlotProps-XQkjkIFN.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-C_K5xCHj.js";import"./Portal-B_JO3Pcb.js";import"./Modal-A93Vzq1p.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-B5OvVYYJ.js";import"./useSlotProps-CzmIUoO5.js";import"./useControlled-DlLEbMU6.js";import"./ListItemButton-Bd08jaNX.js";import"./ButtonBase-DSCUs5nZ.js";import"./IconButton-Dxg7mWs_.js";import"./CircularProgress-Ro5haQPh.js";import"./Button-UlVdD7HN.js";import"./schemas-CxL56DE6.js";function s({currentPath:i="/explore"}){return e.jsx(a,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"EXPLORE PAGE "})})})}s.__docgenInfo={description:"",methods:[],displayName:"ExplorePage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/explore'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],Q={title:"pages/ExplorePage",component:s,decorators:[i=>e.jsx(a,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Explore landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/explore"}}}},args:{currentPath:"/explore"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Explore" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Explore item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
