import{A as t}from"./iframe-CLrQJv_a.js";import{C as s,N as n}from"./NavShell-BPkhJhJJ.js";import"./preload-helper-Bw0f1Tue.js";import"./NavigationMenu-DUI5LSmS.js";import"./Close-BKH6Ygcd.js";import"./createSvgIcon-C1Mr_yoq.js";import"./memoTheme-BO_7CdOi.js";import"./Menu-DL-TDq5f.js";import"./useTheme-CbszIVMn.js";import"./Fade-BZfV_J86.js";import"./useTimeout-ZK1ILCxH.js";import"./index-DfsYuhrK.js";import"./index-CK2XXBqq.js";import"./useForkRef-CfQLQGRD.js";import"./getReactElementRef-OwzMr_RN.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-Br-zN32S.js";import"./useTheme-PoaHXLXG.js";import"./index-BwJzYO-7.js";import"./getThemeProps-jKeS8oQq.js";import"./Box-DrFziY_N.js";import"./List-Q4eD5Aj_.js";import"./Drawer-QwVgeFVB.js";import"./useSlot-BU1XSp-u.js";import"./mergeSlotProps-BgZUJYp4.js";import"./mergeSlotProps-DWvK5iIB.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-Czw3DXSY.js";import"./Portal-Dqrbapn7.js";import"./Modal-eb1-9QbE.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-NqP_0Mth.js";import"./useSlotProps-6CvjUKki.js";import"./useControlled-BZzIp_Ws.js";import"./ListItemButton-McvERVGN.js";import"./ButtonBase-B_FMP5jY.js";import"./IconButton-Vdx-HdYx.js";import"./CircularProgress-RT6Mn_h6.js";import"./Button-D_xIGoak.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
