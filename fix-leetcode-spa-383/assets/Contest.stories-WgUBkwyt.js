import{A as t}from"./iframe-DZKZgqTv.js";import{C as s,N as n}from"./NavShell-C-7UpRPM.js";import"./preload-helper-Cq74H6dr.js";import"./NavigationMenu-bDXLD2ub.js";import"./Close-jO_zbv36.js";import"./createSvgIcon-DrWp1gjb.js";import"./memoTheme-DnxyvKhW.js";import"./Menu-BfxbKwmg.js";import"./useTheme-BLFQqPqW.js";import"./Fade-DydT2HCp.js";import"./useTimeout-D0f-m__Z.js";import"./index-DAzMHNXQ.js";import"./index-B-5wG9G-.js";import"./useForkRef-GnjNt-wP.js";import"./getReactElementRef-aHa6RHcF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-Bny9Baek.js";import"./useTheme-CE-O-Ckt.js";import"./index-CSUWN12o.js";import"./getThemeProps-B-kjU_sv.js";import"./Box-Bd__148N.js";import"./List-kRKC7xyw.js";import"./Drawer-lKucqRyj.js";import"./useSlot-DqDeX3W3.js";import"./mergeSlotProps-8HxXAz4s.js";import"./mergeSlotProps-BxLlf20M.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-Dx3nGe9T.js";import"./Portal-CDHmm3aM.js";import"./Modal-OKmHgaUa.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-DzB6QyT5.js";import"./useSlotProps-BvJEAPG9.js";import"./useControlled-B0aMi6Q1.js";import"./ListItemButton-Ch40Z0f2.js";import"./ButtonBase-DDUWusln.js";import"./IconButton-CdDrVJg6.js";import"./CircularProgress-Ba1HHMIl.js";import"./Button-Z624ujog.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
