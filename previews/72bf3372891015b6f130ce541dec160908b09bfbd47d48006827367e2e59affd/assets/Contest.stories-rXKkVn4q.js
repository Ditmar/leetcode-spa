import{A as t}from"./iframe-t5oMKe35.js";import{C as s,N as n}from"./NavShell-CS8sY06F.js";import"./preload-helper-Go4V9iJU.js";import"./NavigationMenu-D3zkKc9b.js";import"./Close-CHFTfdx2.js";import"./createSvgIcon-D5yaXrYS.js";import"./memoTheme-CdGlbD1a.js";import"./Menu-BGaApr33.js";import"./useTheme-BfJlZd0Y.js";import"./Fade-Bg9Gvs8N.js";import"./useTimeout-kK4B6XON.js";import"./index-B3ZdwB5V.js";import"./index-BSlfty_3.js";import"./useForkRef-DVO87udu.js";import"./getReactElementRef-Dm_dJzM-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-DyOviJck.js";import"./useTheme-3-XQR_6v.js";import"./index-CF0w3PT4.js";import"./getThemeProps-9MjwVMt7.js";import"./Box-C8UlfCgv.js";import"./List-DkzQW2b3.js";import"./Drawer-DZCy6pnz.js";import"./useSlot-CPLaH2N1.js";import"./mergeSlotProps-01kpcsbP.js";import"./mergeSlotProps-6w-2uiU8.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-CWBlAz7F.js";import"./Portal-DhOEHKCR.js";import"./Modal-CXoFWhsT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-DJVV4M0W.js";import"./useSlotProps-CC6Clry1.js";import"./useControlled-BxedBKr4.js";import"./ListItemButton-CprofLYw.js";import"./ButtonBase-ByHjRzRo.js";import"./IconButton-Bk2VBgbW.js";import"./CircularProgress-B_ND-4uY.js";import"./Button-HZzgikxU.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
