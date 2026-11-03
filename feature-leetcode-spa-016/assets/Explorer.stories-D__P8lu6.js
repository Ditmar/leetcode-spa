import{A as e}from"./iframe-BYTej8MO.js";import{C as a,N as n}from"./NavShell-CK3tA0OM.js";import"./preload-helper-BS7PQ9Dx.js";import"./NavigationMenu-DgOI3CWg.js";import"./Close-kyH3cHdU.js";import"./createSvgIcon-DDgMztin.js";import"./memoTheme-Dw-T3osH.js";import"./Menu-Dfzq1S7x.js";import"./useTheme-DssVEXdk.js";import"./Fade-rPO1ibu6.js";import"./useTimeout-CXTUyTcE.js";import"./index-C35rdF3z.js";import"./index-BHLq7kkv.js";import"./useForkRef-COisOWWj.js";import"./getReactElementRef-CAtMDzQb.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-CkphYdJT.js";import"./useTheme-LG7q7Ef5.js";import"./index-VrxgsCbv.js";import"./getThemeProps-CHkgYkVb.js";import"./Box-DaBq72Zt.js";import"./List-DzRKCBzY.js";import"./Drawer-Br6tZkdu.js";import"./useSlot-Dq_zfhyS.js";import"./mergeSlotProps-Bj9_Le8x.js";import"./mergeSlotProps-Uxqq28yQ.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-BLHF5Rmo.js";import"./Portal-BKZMZE4o.js";import"./Modal-DHd_fwNV.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-DhM-6zPd.js";import"./useSlotProps-B4nxu0L4.js";import"./useControlled-Bp6ekLRT.js";import"./ListItemButton-DM2LRHL5.js";import"./ButtonBase-CmU1moud.js";import"./IconButton-CxASA-SP.js";import"./CircularProgress-BIFaE2M5.js";import"./Button-BPP-iBrn.js";import"./schemas-CxL56DE6.js";function s({currentPath:i="/explore"}){return e.jsx(a,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"EXPLORE PAGE "})})})}s.__docgenInfo={description:"",methods:[],displayName:"ExplorePage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/explore'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],Q={title:"pages/ExplorePage",component:s,decorators:[i=>e.jsx(a,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Explore landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/explore"}}}},args:{currentPath:"/explore"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Explore" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Explore item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
