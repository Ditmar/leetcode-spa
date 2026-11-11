import{A as e}from"./iframe-KXLXUwCf.js";import{C as s,N as n}from"./NavShell-rJEHov5T.js";import"./preload-helper-BeV6rJVZ.js";import"./NavigationMenu-VSbEHDxG.js";import"./Close-BoiprY5E.js";import"./createSvgIcon-C0EIRdPW.js";import"./memoTheme-CA1osHRU.js";import"./Menu-rXVq0uOX.js";import"./useTheme-ByvVGgwG.js";import"./Fade-CBldTXc0.js";import"./useTimeout-DvPsw4U2.js";import"./index-B-hapypF.js";import"./index-whiniqrN.js";import"./useForkRef-Bl5d-U9p.js";import"./getReactElementRef-3jSzbywU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-ZamgTBuV.js";import"./useTheme-CuS3w6SC.js";import"./index-BpaJvW_O.js";import"./getThemeProps-DhrJTUCn.js";import"./Box-aP1AYsdC.js";import"./List-CW5ujhVz.js";import"./Drawer-CllTKh2u.js";import"./useSlot-DJIp1Zp0.js";import"./mergeSlotProps-DnPsBM_g.js";import"./mergeSlotProps-PP42tRPt.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-Btn-oWYm.js";import"./Portal-C3OxPxTs.js";import"./Modal-DFLJnUEN.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-BPq1NjcY.js";import"./useSlotProps-Bfnu77ae.js";import"./useControlled-BE-v3ThP.js";import"./ListItemButton-6hEizIf9.js";import"./ButtonBase-CnlIRdOL.js";import"./IconButton-BV2ee-yq.js";import"./CircularProgress-1Sfco4yv.js";import"./Button-OqrkoXWl.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/problems"}){return e.jsx(s,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"Problems PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ProblemsPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/problems'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ProblemsPage",component:a,decorators:[i=>e.jsx(s,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Full page for browsing coding problems. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/problems"}}}},args:{currentPath:"/problems"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Problems" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Problems item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
