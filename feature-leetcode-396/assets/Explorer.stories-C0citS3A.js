import{A as e}from"./iframe-Cu_PCo60.js";import{C as a,N as n}from"./NavShell-CgBf2yHT.js";import"./preload-helper-qDAWCIhP.js";import"./NavigationMenu-CdxcS4k6.js";import"./Close-B3dxV9tH.js";import"./createSvgIcon-pZ6o8rfu.js";import"./memoTheme-DVp4jLY2.js";import"./Menu-4PMGbVTO.js";import"./useTheme-DIYNfwEO.js";import"./Fade-BAB2XHOA.js";import"./useTimeout-ChuNykei.js";import"./index-Br2x8zLw.js";import"./index-A9drAO4e.js";import"./useForkRef-BCUAq2nW.js";import"./getReactElementRef-BrviCrFL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-Df3PWWxo.js";import"./useTheme-C1muPG5f.js";import"./index-BZvkQfCV.js";import"./getThemeProps-EIreW9cu.js";import"./Box-HoCEEnDs.js";import"./List-RZmuYEYH.js";import"./Drawer-DBGuYLd4.js";import"./useSlot-0AzjYRt-.js";import"./mergeSlotProps-x4XYOjgs.js";import"./mergeSlotProps-DwaZwMNP.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-DymSn2e3.js";import"./Portal-BPHCY9tn.js";import"./Modal-D0-kjMcO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-AnXgLKiz.js";import"./useSlotProps-DPCsVQYc.js";import"./useControlled-ae5Exb2Y.js";import"./ListItemButton-CCQ0GVb7.js";import"./ButtonBase-DpFzEyyU.js";import"./IconButton-BGvCvibD.js";import"./CircularProgress-CvuycyDv.js";import"./Button-Dd_TT0R7.js";import"./schemas-CxL56DE6.js";function s({currentPath:i="/explore"}){return e.jsx(a,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"EXPLORE PAGE "})})})}s.__docgenInfo={description:"",methods:[],displayName:"ExplorePage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/explore'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],Q={title:"pages/ExplorePage",component:s,decorators:[i=>e.jsx(a,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Explore landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/explore"}}}},args:{currentPath:"/explore"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Explore" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Explore item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
