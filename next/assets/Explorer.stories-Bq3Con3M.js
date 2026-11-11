import{A as e}from"./iframe-CV7YGEUY.js";import{C as a,N as n}from"./NavShell-BjH_8n4y.js";import"./preload-helper-B1AL8F-k.js";import"./NavigationMenu-BtZJgKvl.js";import"./Close-Db3SLu7E.js";import"./createSvgIcon-DB5MoLd-.js";import"./memoTheme-BVeWlUMh.js";import"./Menu-DjFRmw37.js";import"./useTheme-Czja2uFF.js";import"./Fade-BZNs_MhG.js";import"./useTimeout-vQQ9Z4H0.js";import"./index-n52kbJWt.js";import"./index-Bziomjsf.js";import"./useForkRef-CTN92cm4.js";import"./getReactElementRef-Wr-PrCp_.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-BNFTG4eP.js";import"./useTheme-BdMmPvWa.js";import"./index-DAideMd8.js";import"./getThemeProps-CMslt5sp.js";import"./Box-BKy4ULEJ.js";import"./List-vfQjjbYy.js";import"./Drawer-DuMWAwoc.js";import"./useSlot-C6ckAt0q.js";import"./mergeSlotProps-DGiqJ6vT.js";import"./mergeSlotProps-BvcPOnMj.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-Dg3Gsz1W.js";import"./Portal-CqYR9rob.js";import"./Modal-Coh_mVbr.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-Dysnwssq.js";import"./useSlotProps-Cpm7W3fq.js";import"./useControlled-CIaFfA8g.js";import"./ListItemButton-AyKhzJAp.js";import"./ButtonBase-2OPtH1Na.js";import"./IconButton-CcGpUTYA.js";import"./CircularProgress-D2Zf6gk1.js";import"./Button-D-83P2Hs.js";import"./schemas-CxL56DE6.js";function s({currentPath:i="/explore"}){return e.jsx(a,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"EXPLORE PAGE "})})})}s.__docgenInfo={description:"",methods:[],displayName:"ExplorePage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/explore'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],Q={title:"pages/ExplorePage",component:s,decorators:[i=>e.jsx(a,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Explore landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/explore"}}}},args:{currentPath:"/explore"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Explore" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Explore item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
