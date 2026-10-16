import{A as t}from"./iframe-CIGW3SEc.js";import{C as s,N as n}from"./NavShell-Dmh2mDRZ.js";import"./preload-helper-CMZ_9_9e.js";import"./NavigationMenu-C_HzUEtl.js";import"./Close-CCLQRbBd.js";import"./createSvgIcon-DYxp3iXS.js";import"./memoTheme-Dp5okTq2.js";import"./Menu-C8Fl8eiK.js";import"./useTheme-CxKMYs0U.js";import"./Fade-DOYY3S6v.js";import"./useTimeout-Bwzd-W2T.js";import"./index-BkGIoBS-.js";import"./index-Dw-uZC29.js";import"./useForkRef-Cphwav12.js";import"./getReactElementRef-BHPnvY1z.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-DbdBMx4W.js";import"./useTheme-CBjV8l7V.js";import"./index-xf23HKWs.js";import"./getThemeProps-CLDf9rSZ.js";import"./Box-CVA7TAkN.js";import"./List-BCWBJvUN.js";import"./Drawer-BXs-QoGk.js";import"./useSlot-r3tQdjzT.js";import"./mergeSlotProps-JxWstqmf.js";import"./mergeSlotProps-1yQz0MhQ.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-CewqVvm3.js";import"./Portal-DhGYDQYv.js";import"./Modal-CyV_b-mb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-CtPPeNsZ.js";import"./useSlotProps-BE03b5eA.js";import"./useControlled-Ct0JExRR.js";import"./ListItemButton-BY-zb5mD.js";import"./ButtonBase-2wsu0UWp.js";import"./IconButton-CZyJ36sn.js";import"./CircularProgress-CEQ4ZmpT.js";import"./Button-wPYQ4CP9.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
