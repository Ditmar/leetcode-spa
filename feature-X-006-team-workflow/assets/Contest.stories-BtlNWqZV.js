import{A as t}from"./iframe-2LA1YBlS.js";import{C as s,N as n}from"./NavShell-CkOeSUPc.js";import"./preload-helper-BUNF0GJV.js";import"./NavigationMenu-BOaTzbAz.js";import"./Close-DwDnExhk.js";import"./createSvgIcon-BKeJUnfb.js";import"./memoTheme-ZKLrDYwJ.js";import"./Menu-CCjyX63R.js";import"./useTheme-DBPpV6js.js";import"./Fade-BK__jhKM.js";import"./useTimeout-Du8MJccV.js";import"./index-DuTTz2I-.js";import"./index-R8222lbr.js";import"./useForkRef-BLpo_Lpk.js";import"./getReactElementRef-a_sRHiaS.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-CFNCfnu2.js";import"./useTheme-CXrGV6e_.js";import"./index-Dp9OfxNR.js";import"./getThemeProps-mR2cK7d2.js";import"./Box-B-k9AyL2.js";import"./List-HNBgDPOh.js";import"./Drawer-By-BoFSN.js";import"./useSlot-Dh4orJia.js";import"./mergeSlotProps-CBE3QeIN.js";import"./mergeSlotProps-CtyhJzsc.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-Bn96Vp8n.js";import"./Portal-B_P6-smA.js";import"./Modal-JEbZKjmw.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-D1SVVRDw.js";import"./useSlotProps-VqkWFC0b.js";import"./useControlled-DkeL52oS.js";import"./ListItemButton-B6v119kY.js";import"./ButtonBase-B-w4vM6_.js";import"./IconButton-BtzymX61.js";import"./CircularProgress-C6HBts90.js";import"./Button-zSXelqmU.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
