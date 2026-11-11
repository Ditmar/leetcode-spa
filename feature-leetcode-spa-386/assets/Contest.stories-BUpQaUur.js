import{A as t}from"./iframe-CKaTJbzS.js";import{C as s,N as n}from"./NavShell-CD4hzpgy.js";import"./preload-helper-BeV6rJVZ.js";import"./NavigationMenu-B---Rus_.js";import"./Close-CJVrTXza.js";import"./createSvgIcon-Ch9Xnp4U.js";import"./memoTheme-dPN-qUyN.js";import"./Menu-AaKb6Uho.js";import"./useTheme-BtCoo5uO.js";import"./Fade-9phOKodI.js";import"./useTimeout-CDByCrjo.js";import"./index-DKTgtBtl.js";import"./index-CA0Egui5.js";import"./useForkRef-gibMa5mQ.js";import"./getReactElementRef-bzxn1sH4.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-C5BW5zW1.js";import"./useTheme-di9RbakE.js";import"./index-C9l3O8oh.js";import"./getThemeProps-83M-iBd6.js";import"./Box-CcQjHkWJ.js";import"./List-1nnBUOfV.js";import"./Drawer--cLLGYcH.js";import"./useSlot-DAwylW3v.js";import"./mergeSlotProps-CNIXHbxh.js";import"./mergeSlotProps-YBxXFQcx.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-BoZPVdKz.js";import"./Portal-WPujSpPj.js";import"./Modal-C-biISEN.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-C9f1dxtD.js";import"./useSlotProps-CjRFlzQw.js";import"./useControlled-DJCmj0dr.js";import"./ListItemButton-Bf4IyF-m.js";import"./ButtonBase-CeU7IQ7W.js";import"./IconButton-DW1jMDyH.js";import"./CircularProgress-dxpFKeqP.js";import"./Button-CPEqjCoi.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
