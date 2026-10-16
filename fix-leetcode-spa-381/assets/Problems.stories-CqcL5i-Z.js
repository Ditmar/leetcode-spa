import{A as e}from"./iframe-CJ2YWbuw.js";import{C as s,N as n}from"./NavShell-huuIpGbZ.js";import"./preload-helper-BR6VID4v.js";import"./NavigationMenu-BJ6kR9_T.js";import"./Close-sdC4Y-f6.js";import"./createSvgIcon-BU-NLHNJ.js";import"./memoTheme-oPEgWdMD.js";import"./Menu-BUhPImuE.js";import"./useTheme-COw51Hdr.js";import"./Fade-Bgih3qsb.js";import"./useTimeout-DAwAm7Lu.js";import"./index-S3AeJaVw.js";import"./index-ex0UwEfM.js";import"./useForkRef-CzOXpEoD.js";import"./getReactElementRef-O1dW-tP4.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-Bt7YYI44.js";import"./useTheme-CGDebHz4.js";import"./index-Hkfd6OCI.js";import"./getThemeProps-DR7ODUpv.js";import"./Box-C2pf5kB_.js";import"./List-DY2PfYnM.js";import"./Drawer-CNMaktSN.js";import"./useSlot-2vb1pYjJ.js";import"./mergeSlotProps-NQbv1F_X.js";import"./mergeSlotProps-VMJh5Lzc.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-AijbOynG.js";import"./Portal-CiQbQ4WN.js";import"./Modal-BXcBQBse.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-uq-DdimG.js";import"./useSlotProps-DBdmNSHY.js";import"./useControlled-3JXJm6Ll.js";import"./ListItemButton-Cg0mYPmj.js";import"./ButtonBase-DUlvrsS5.js";import"./IconButton-CdGMu3-Q.js";import"./CircularProgress-DQ6jv0XF.js";import"./Button-Cwa7_LSF.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/problems"}){return e.jsx(s,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"Problems PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ProblemsPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/problems'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ProblemsPage",component:a,decorators:[i=>e.jsx(s,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Full page for browsing coding problems. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/problems"}}}},args:{currentPath:"/problems"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Problems" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Problems item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
