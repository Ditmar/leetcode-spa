import{A as t}from"./iframe-X1vWZ9cN.js";import{C as s,N as n}from"./NavShell-BMcxTWKJ.js";import"./preload-helper-BJoZg9pk.js";import"./NavigationMenu-yW1TWFXc.js";import"./Close-DlsWqD-b.js";import"./createSvgIcon-BPC1in8T.js";import"./memoTheme-B8wbSL-F.js";import"./Menu-BDQvd9vc.js";import"./useTheme-Cg2Zzqo5.js";import"./Fade-D4Fzfo8I.js";import"./useTimeout-BWNNf3g6.js";import"./index-Diz0AtIq.js";import"./index-Bx8ZwgH0.js";import"./useForkRef-pLY4gUjj.js";import"./getReactElementRef-Cr7PgVuD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-B8_El9Hp.js";import"./useTheme-DVTCVP6W.js";import"./index-C5J9GldY.js";import"./getThemeProps-Y6MT5xsf.js";import"./Box-feA7THFF.js";import"./List-Ccx4gjog.js";import"./Drawer-iQyOVFmX.js";import"./useSlot-DJucFQU4.js";import"./mergeSlotProps-DsCADUwM.js";import"./mergeSlotProps-BYqqnuYf.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow--lqI0BCE.js";import"./Portal-D3VeFSMZ.js";import"./Modal-DOIYKqXT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-CJbWK_GH.js";import"./useSlotProps-P1fzrCFy.js";import"./useControlled-BmiXwslX.js";import"./ListItemButton-CtmpcoJ2.js";import"./ButtonBase-C0j75r39.js";import"./IconButton-BahbV62T.js";import"./CircularProgress-BsMLE3XI.js";import"./Button-Btk8fnUI.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
