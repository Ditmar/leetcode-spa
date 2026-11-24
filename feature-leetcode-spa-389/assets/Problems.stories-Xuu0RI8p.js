import{A as e}from"./iframe-C-HTgiSH.js";import{C as s,N as n}from"./NavShell-DTdtB6aM.js";import"./preload-helper-ByM0tCHO.js";import"./NavigationMenu-7c1BHtq1.js";import"./Close-DLW6cDFQ.js";import"./createSvgIcon-BWiOL6hV.js";import"./memoTheme-DV8ubpnv.js";import"./Menu-DPwrQ0Rb.js";import"./useTheme-4FqZpYNv.js";import"./Fade-C2wAa4Yi.js";import"./useTimeout-BG86KaUw.js";import"./index-Bwlfs2xJ.js";import"./index-yjiqDSdO.js";import"./useForkRef-BWBekdY0.js";import"./getReactElementRef-DAIQ561Q.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-hpt02GPe.js";import"./useTheme-DUuEZu3K.js";import"./index-rXH0Ed5Q.js";import"./getThemeProps-BKfZ6QrH.js";import"./Box-BgLAskFu.js";import"./List-BboKssE1.js";import"./Drawer-DuOx-Q3H.js";import"./useSlot-CRcxbKCz.js";import"./mergeSlotProps-CXda_2yG.js";import"./mergeSlotProps-D-PJlaDW.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-D5XgvbIL.js";import"./Portal-xhjw-lTJ.js";import"./Modal-Dq8bjOGc.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-Qjonux-I.js";import"./useSlotProps-CpuxzgdI.js";import"./useControlled-Chm9Ga-o.js";import"./ListItemButton-BA-LAGYL.js";import"./ButtonBase-Bmm-_fr_.js";import"./IconButton-C_G1RPRX.js";import"./CircularProgress-awnbhT-x.js";import"./Button-BAP5fAnF.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/problems"}){return e.jsx(s,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"Problems PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ProblemsPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/problems'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ProblemsPage",component:a,decorators:[i=>e.jsx(s,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Full page for browsing coding problems. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/problems"}}}},args:{currentPath:"/problems"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Problems" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Problems item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
