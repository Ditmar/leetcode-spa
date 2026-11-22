import{A as e}from"./iframe-CIfoK06K.js";import{C as a,N as n}from"./NavShell-ChLK-85G.js";import"./preload-helper-DkKiy0xf.js";import"./NavigationMenu-Cb5ydnrp.js";import"./Close-Dg2XISgE.js";import"./createSvgIcon-DmQXQPCx.js";import"./memoTheme-DCvm1L0v.js";import"./Menu-Cc7r_ez-.js";import"./useTheme-BDLthpVz.js";import"./Fade-DKBrXDMf.js";import"./useTimeout-Q6YjNAxr.js";import"./index-Cl1eN8Hl.js";import"./index-d4HnHexB.js";import"./useForkRef-vP6zHNwY.js";import"./getReactElementRef-R_kkZbMk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-CQVGXiyo.js";import"./useTheme-CAutXAiz.js";import"./index-DqrbIs-n.js";import"./getThemeProps-CPmLI11Z.js";import"./Box-DzyOsEr_.js";import"./List-uaXdZvIH.js";import"./Drawer-tC6cu1y9.js";import"./useSlot-jB-xZPAH.js";import"./mergeSlotProps-WQeGneF1.js";import"./mergeSlotProps-85U6zOAG.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-DoJoa6C6.js";import"./Portal-CYFncQn7.js";import"./Modal-BOXfKFWU.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-CqNFyLu3.js";import"./useSlotProps-CHXM1ZsZ.js";import"./useControlled-DD91xvL5.js";import"./ListItemButton-Dghcl8t1.js";import"./ButtonBase-NTt0z9IV.js";import"./IconButton-BOHTGPcP.js";import"./CircularProgress-BoA0aWlI.js";import"./Button-CHzijCVv.js";import"./schemas-CxL56DE6.js";function s({currentPath:i="/explore"}){return e.jsx(a,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"EXPLORE PAGE "})})})}s.__docgenInfo={description:"",methods:[],displayName:"ExplorePage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/explore'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],Q={title:"pages/ExplorePage",component:s,decorators:[i=>e.jsx(a,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Explore landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/explore"}}}},args:{currentPath:"/explore"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Explore" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Explore item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
