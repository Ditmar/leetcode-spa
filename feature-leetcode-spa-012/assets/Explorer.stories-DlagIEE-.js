import{A as e}from"./iframe-Do3wfGQQ.js";import{C as a,N as n}from"./NavShell-zowvsTm7.js";import"./preload-helper-CDzCA4Gc.js";import"./NavigationMenu-BhME1tyS.js";import"./Close-CQaqqAxH.js";import"./createSvgIcon-CDMk0PQn.js";import"./memoTheme-BnTcv8wb.js";import"./Menu-DX6q5xUL.js";import"./useTheme-D0QNU5Gn.js";import"./Fade-D94N2BrH.js";import"./useTimeout-2v51K8ZZ.js";import"./index-CgmPXMP2.js";import"./index-CDQhdsVf.js";import"./useForkRef-UtJBLmHe.js";import"./getReactElementRef-DcOci50F.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-LiSd17Ap.js";import"./useTheme-BWLeLR-q.js";import"./index-Bc48t0Nx.js";import"./getThemeProps-B4muWoZO.js";import"./Box-BdCM6NEi.js";import"./List-2Pc9XLCq.js";import"./Drawer-DsQCRVto.js";import"./useSlot-BUuXq1u_.js";import"./mergeSlotProps-DeK--foA.js";import"./mergeSlotProps-BTfzTb9G.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-CdX5o-sq.js";import"./Portal-B7Qox2X4.js";import"./Modal-CxmoLJ4N.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-Cnohhn9J.js";import"./useSlotProps-DKbf8drx.js";import"./useControlled-D3LRH9UF.js";import"./ListItemButton-TcLijHbt.js";import"./ButtonBase-B7iXetFM.js";import"./IconButton-CKvTeYil.js";import"./CircularProgress-BVPAMF84.js";import"./Button-nIwEQZ4J.js";import"./schemas-CxL56DE6.js";function s({currentPath:i="/explore"}){return e.jsx(a,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"EXPLORE PAGE "})})})}s.__docgenInfo={description:"",methods:[],displayName:"ExplorePage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/explore'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],Q={title:"pages/ExplorePage",component:s,decorators:[i=>e.jsx(a,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Explore landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/explore"}}}},args:{currentPath:"/explore"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Explore" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Explore item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
