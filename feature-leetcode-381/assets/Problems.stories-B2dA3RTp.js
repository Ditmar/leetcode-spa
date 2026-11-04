import{A as e}from"./iframe-BL9bMQrD.js";import{C as s,N as n}from"./NavShell-BVrPhluY.js";import"./preload-helper-DPeJKUM_.js";import"./NavigationMenu-ChL9Od6x.js";import"./Close-BbucOY6m.js";import"./createSvgIcon-D9s8pHZY.js";import"./memoTheme-DzTTVsRp.js";import"./Menu-Di8fNUiG.js";import"./useTheme-R9Gnyj-Z.js";import"./Fade-BO-FOhz9.js";import"./useTimeout-CLOhO1_f.js";import"./index-Bg3oHr_R.js";import"./index-BScXA9v4.js";import"./useForkRef-BRSKArtI.js";import"./getReactElementRef-ufiuzPv7.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-DxLoUZoA.js";import"./useTheme-BmsB_YfM.js";import"./index-CF173N0Z.js";import"./getThemeProps-B3cR_FFA.js";import"./Box-ByBmVANV.js";import"./List-COU0zajS.js";import"./Drawer-Df417AU1.js";import"./useSlot-CC0T79kl.js";import"./mergeSlotProps-CqShx6Bk.js";import"./mergeSlotProps-CKzCMjbU.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-CrHilqXF.js";import"./Portal-Lr6S1oTg.js";import"./Modal-AzqZmiKn.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-rOu6y5Cd.js";import"./useSlotProps-CbFOKt8-.js";import"./useControlled-DpN0C78f.js";import"./ListItemButton-COT2KhY7.js";import"./ButtonBase-Bcdy6NN9.js";import"./IconButton-BwWcoPVJ.js";import"./CircularProgress-CXI6ul6I.js";import"./Button-BED6WB4e.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/problems"}){return e.jsx(s,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"Problems PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ProblemsPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/problems'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ProblemsPage",component:a,decorators:[i=>e.jsx(s,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Full page for browsing coding problems. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/problems"}}}},args:{currentPath:"/problems"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Problems" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Problems item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
