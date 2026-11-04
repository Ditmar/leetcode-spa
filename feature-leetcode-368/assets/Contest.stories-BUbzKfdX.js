import{A as t}from"./iframe-DYYSU1pd.js";import{C as s,N as n}from"./NavShell-Dwn4UX4H.js";import"./preload-helper-cpKAyJF1.js";import"./NavigationMenu-OUT4iacX.js";import"./Close-CoXcL71j.js";import"./createSvgIcon-Cc7-G3ns.js";import"./memoTheme-iZcd6Uir.js";import"./Menu-CsnbOuPZ.js";import"./useTheme-D4htTH9h.js";import"./Fade-ln0_nc0q.js";import"./useTimeout-v0bEL6wF.js";import"./index-CGh7Uk5T.js";import"./index-BGYiARWV.js";import"./useForkRef-BZBD2lJc.js";import"./getReactElementRef-DLBQYiP1.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-B6xSNhrv.js";import"./useTheme-DDqb48qo.js";import"./index-Dcv4MNuo.js";import"./getThemeProps-DE8s8Da4.js";import"./Box-DThD0Rex.js";import"./List-B9jwZjm1.js";import"./Drawer-Ctfi5sRz.js";import"./useSlot-CAJsL5v5.js";import"./mergeSlotProps-O7GG674T.js";import"./mergeSlotProps-CQZZleQ-.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-BSvQtf_g.js";import"./Portal-vEdO6wI2.js";import"./Modal-7pkyOnFw.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-Df9SF7kG.js";import"./useSlotProps-B4Njm9a-.js";import"./useControlled-CQPcZ2pq.js";import"./ListItemButton-BtBfxZuW.js";import"./ButtonBase-bj_E8f3Z.js";import"./IconButton-9A6l7f2W.js";import"./CircularProgress-C5PUJt55.js";import"./Button-BXkQzypQ.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
