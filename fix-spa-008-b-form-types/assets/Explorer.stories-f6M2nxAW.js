import{A as e}from"./iframe-iHyKvJjc.js";import{C as a,N as n}from"./NavShell-DWusON-p.js";import"./preload-helper-5dQNS59x.js";import"./NavigationMenu-BgwgqOTT.js";import"./Close-CXvVeSvL.js";import"./createSvgIcon-DCcAL96m.js";import"./memoTheme-CQtFTGD0.js";import"./Menu-CBBxX2AG.js";import"./useTheme-C1Zkx9NT.js";import"./Fade-D2eq1Tyw.js";import"./useTimeout-BVs3iiwp.js";import"./index-B-rRb_qG.js";import"./index-BHLUom-c.js";import"./useForkRef-Ta486qm3.js";import"./getReactElementRef-CC1OeVhp.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-DgD15Bvl.js";import"./useTheme-CVIh99uE.js";import"./index-CN58pcMO.js";import"./getThemeProps-CpKPaEsB.js";import"./Box-CsZGxt8Y.js";import"./List-nfKppvvI.js";import"./Drawer-Dr4tsW95.js";import"./useSlot-Dy5nFIXH.js";import"./mergeSlotProps-BkOPNRi1.js";import"./mergeSlotProps-Ct6YKGNj.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-Dyo3wsgu.js";import"./Portal-flRYDdm-.js";import"./Modal-OedumEst.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-HaSt9Yy6.js";import"./useSlotProps-B9qjYVfX.js";import"./useControlled-Byf1l-fR.js";import"./ListItemButton-Bd5uOGNw.js";import"./ButtonBase-yq_aMWA6.js";import"./IconButton-Cj40BTSS.js";import"./CircularProgress-CXCxOpzg.js";import"./Button-DVlsAaYZ.js";import"./schemas-CxL56DE6.js";function s({currentPath:i="/explore"}){return e.jsx(a,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"EXPLORE PAGE "})})})}s.__docgenInfo={description:"",methods:[],displayName:"ExplorePage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/explore'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],Q={title:"pages/ExplorePage",component:s,decorators:[i=>e.jsx(a,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Explore landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/explore"}}}},args:{currentPath:"/explore"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Explore" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Explore item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
