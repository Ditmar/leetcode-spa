import{A as e}from"./iframe-CY_A5GdY.js";import{C as a,N as n}from"./NavShell-Cfa7ckVj.js";import"./preload-helper-Pxg3Du0I.js";import"./NavigationMenu-COwDmMdb.js";import"./Close-DGnkPZoy.js";import"./createSvgIcon-BXkDmmg8.js";import"./memoTheme-CRWAPR6U.js";import"./Menu-DNrW8cCw.js";import"./useTheme-D6NjAIMh.js";import"./Fade-CNz0Or_n.js";import"./useTimeout-BnIO4RIC.js";import"./index-BO5DATpR.js";import"./index-BOFYwVxi.js";import"./useForkRef-BQ-HskD2.js";import"./getReactElementRef-BkwoT8HF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-BdBRqzAY.js";import"./useTheme-C5xWWP52.js";import"./index-Bj18Fzoe.js";import"./getThemeProps-Brif4Yvn.js";import"./Box-DvLNX4nG.js";import"./List-Ct08NHN1.js";import"./Drawer-4zwPY8dZ.js";import"./useSlot-DcZbhgnZ.js";import"./mergeSlotProps-Bn_CLZUQ.js";import"./mergeSlotProps-CeQAk1a0.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-Bfp2WLY-.js";import"./Portal-j17tVqLk.js";import"./Modal-IpaX5ZDq.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-DJtZMLwn.js";import"./useSlotProps-BllvPmPj.js";import"./useControlled-DjVfZD7V.js";import"./ListItemButton-D5AsICml.js";import"./ButtonBase-Dkmias09.js";import"./IconButton-Z6nqFGCy.js";import"./CircularProgress-Bb-azGNP.js";import"./Button-5W6QT4jo.js";import"./schemas-CxL56DE6.js";function s({currentPath:i="/explore"}){return e.jsx(a,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"EXPLORE PAGE "})})})}s.__docgenInfo={description:"",methods:[],displayName:"ExplorePage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/explore'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],Q={title:"pages/ExplorePage",component:s,decorators:[i=>e.jsx(a,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Explore landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/explore"}}}},args:{currentPath:"/explore"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Explore" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Explore item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
