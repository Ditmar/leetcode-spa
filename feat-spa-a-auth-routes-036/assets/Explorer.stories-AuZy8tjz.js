import{A as e}from"./iframe-D8RUmib0.js";import{C as a,N as n}from"./NavShell-DVuaR0Vk.js";import"./preload-helper-OpR8vj8w.js";import"./NavigationMenu-Df9ahkKQ.js";import"./Close-DmLO5EYA.js";import"./createSvgIcon-DBgWSfl0.js";import"./memoTheme-Do04pYKV.js";import"./Menu-D9kOvF9g.js";import"./useTheme-DpjdtkWC.js";import"./Fade-B_qKS2vN.js";import"./useTimeout-DLchrsdn.js";import"./index-Dta0lw4e.js";import"./index-DmM5k-N6.js";import"./useForkRef-DtxPg96m.js";import"./getReactElementRef-7a-L6kLf.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-D-Chvovy.js";import"./useTheme-C3KkDaYe.js";import"./index-2zRx6KFR.js";import"./getThemeProps-DDOmcjxt.js";import"./Box-Bn3uxN3Z.js";import"./List-CQs7iHVh.js";import"./Drawer-Cd1KMQ9Z.js";import"./useSlot-Bx05JF4a.js";import"./mergeSlotProps-B9Z3Ps14.js";import"./mergeSlotProps-B-r3rCwv.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-CmBSwc9U.js";import"./Portal-CDh5gHIs.js";import"./Modal-CDhB8ylV.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-D29W-Qky.js";import"./useSlotProps-CrvWeVKv.js";import"./useControlled-Cw4YXh0K.js";import"./ListItemButton-BmtFwWOL.js";import"./ButtonBase-sisKGtws.js";import"./IconButton-dGFeUYqR.js";import"./CircularProgress-DvgJzcQd.js";import"./Button-DvtyeRQM.js";import"./schemas-CxL56DE6.js";function s({currentPath:i="/explore"}){return e.jsx(a,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"EXPLORE PAGE "})})})}s.__docgenInfo={description:"",methods:[],displayName:"ExplorePage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/explore'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],Q={title:"pages/ExplorePage",component:s,decorators:[i=>e.jsx(a,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Explore landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/explore"}}}},args:{currentPath:"/explore"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Explore" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Explore item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
