import{A as t}from"./iframe-zbSNoveG.js";import{C as s,N as n}from"./NavShell-N3D2K2Fo.js";import"./preload-helper-B1xIpxrd.js";import"./NavigationMenu-B8OhMfUB.js";import"./Close-rfWiC-6l.js";import"./createSvgIcon-DsBQJtLb.js";import"./memoTheme-Dz7CnC_K.js";import"./Menu-BL9Jsx3r.js";import"./useTheme-YVxK5lpu.js";import"./Fade-DSNWaJDN.js";import"./useTimeout-DneD41hn.js";import"./index-qpzBec1c.js";import"./index-73QmUw7x.js";import"./useForkRef-BRZOan00.js";import"./getReactElementRef-CmrE3MCG.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-s1gkjd3G.js";import"./index-DmfwCT8e.js";import"./getThemeProps-D6Fj1PkH.js";import"./useTheme-CxKX8Je1.js";import"./Box-tHJkx1Fo.js";import"./List-DD7H3_Dc.js";import"./Drawer-k5akkFNb.js";import"./useSlot-CyPRyoSz.js";import"./mergeSlotProps-CxNyZ8WV.js";import"./mergeSlotProps-dlToF-_s.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-CBFsZmUe.js";import"./Portal-DinPvxl7.js";import"./Modal-DKfVQRMY.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-DBGNJJEG.js";import"./useSlotProps-BUcSDCJE.js";import"./useControlled-CE-tHEpA.js";import"./ListItemButton-B5BAe5m3.js";import"./ButtonBase-DFkJNUvg.js";import"./IconButton-DrHklKSH.js";import"./CircularProgress-Db7oqdlK.js";import"./Button-BpKY0J50.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
