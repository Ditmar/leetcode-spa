import{A as e}from"./iframe-oJPYXRwt.js";import{C as s,N as n}from"./NavShell-_G8cxRIp.js";import"./preload-helper-DNchgG-B.js";import"./NavigationMenu-DxhEkePh.js";import"./Close-0QS9TyUA.js";import"./createSvgIcon-CL-DZ44j.js";import"./memoTheme-OFH_LFeU.js";import"./Menu-Bx0uIh5c.js";import"./useTheme-Dd8phPIC.js";import"./Fade-COKXc11B.js";import"./useTimeout-C9KKM8yV.js";import"./index-CBfbC8Iy.js";import"./index-D425b9xU.js";import"./useForkRef-CBXx6Lwz.js";import"./getReactElementRef-Oz8fyv55.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-CrSmPSyK.js";import"./useTheme-HDW1LUDz.js";import"./index-C1BpPapW.js";import"./getThemeProps-B453ZMBt.js";import"./Box-BooNTkdS.js";import"./List-DGuGfyh9.js";import"./Drawer-BpQiQhqW.js";import"./useSlot-BKgtapzq.js";import"./mergeSlotProps-DYYldJQM.js";import"./mergeSlotProps-4g7kcs2D.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-DmKScCBI.js";import"./Portal-w7Y5VR3x.js";import"./Modal-5StRm07A.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-l9AW64Re.js";import"./useSlotProps-Cc4wOV4O.js";import"./useControlled-CajQuQ-V.js";import"./ListItemButton-BatsMjz6.js";import"./ButtonBase-RIeNvmTX.js";import"./IconButton-CrOk8ZUF.js";import"./CircularProgress-CPQktEBh.js";import"./Button-leLE8AYt.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/problems"}){return e.jsx(s,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"Problems PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ProblemsPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/problems'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ProblemsPage",component:a,decorators:[i=>e.jsx(s,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Full page for browsing coding problems. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/problems"}}}},args:{currentPath:"/problems"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Problems" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Problems item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
