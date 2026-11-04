import{A as e}from"./iframe-DQaWcoAv.js";import{C as a,N as n}from"./NavShell-Cip1x7GC.js";import"./preload-helper-DaLixyBB.js";import"./NavigationMenu-DtXAR-r3.js";import"./Close-DFVtV8Pv.js";import"./createSvgIcon-rolwS5JZ.js";import"./memoTheme-D7oIC4EW.js";import"./Menu-7WleR2Xw.js";import"./useTheme-D5VZhyXh.js";import"./Fade-BE6sk7Bi.js";import"./useTimeout-CoS3pW46.js";import"./index-BMYZXwpH.js";import"./index-DTmfhyJI.js";import"./useForkRef-C6xR6iJh.js";import"./getReactElementRef-CXQyuwVJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-DGWblved.js";import"./useTheme-CpaTILzx.js";import"./index-CLXsRUp5.js";import"./getThemeProps-CbstCUBb.js";import"./Box-B3jk6b4V.js";import"./List-CbDsoCDR.js";import"./Drawer-CQUbB-Kw.js";import"./useSlot-xKjCHmMy.js";import"./mergeSlotProps-CUqdgTpY.js";import"./mergeSlotProps-DviMc6Gm.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-C_e4tGUb.js";import"./Portal-D-tB4MWL.js";import"./Modal-zwJDJiTr.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-f2bQB_C_.js";import"./useSlotProps-klres5hy.js";import"./useControlled-Cl7H2eyc.js";import"./ListItemButton-Bz51bKEz.js";import"./ButtonBase-DhD5dLnc.js";import"./IconButton-CssAja2R.js";import"./CircularProgress-Scs8-cmM.js";import"./Button-2eH9tZtH.js";import"./schemas-CxL56DE6.js";function s({currentPath:i="/explore"}){return e.jsx(a,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"EXPLORE PAGE "})})})}s.__docgenInfo={description:"",methods:[],displayName:"ExplorePage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/explore'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],Q={title:"pages/ExplorePage",component:s,decorators:[i=>e.jsx(a,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Explore landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/explore"}}}},args:{currentPath:"/explore"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Explore" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Explore item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
