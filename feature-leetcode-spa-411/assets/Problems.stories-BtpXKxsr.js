import{A as e}from"./iframe-CtrD74S3.js";import{C as s,N as n}from"./NavShell-D_26l4jm.js";import"./preload-helper-Cy4qdi3V.js";import"./NavigationMenu-JUGL6Lkm.js";import"./Close-D5rnVXIe.js";import"./createSvgIcon-CQIyO0T9.js";import"./memoTheme-BZVSOjW0.js";import"./Menu-BtpHOOvV.js";import"./useTheme-DG-i9Tcd.js";import"./Fade-DW9XsXXy.js";import"./useTimeout-DO8XJdxs.js";import"./index-xMex3yUO.js";import"./index-CxNgLJVz.js";import"./useForkRef-C1yNLEsu.js";import"./getReactElementRef-CFL1iz8-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-Zs7KpnOz.js";import"./useTheme-BrhzG3a3.js";import"./index-HyxpPQl7.js";import"./getThemeProps-df90iyNB.js";import"./Box-ChptDyR9.js";import"./List-Cox8fk0B.js";import"./Drawer-LxKoHhqg.js";import"./useSlot-ZbCbSWm1.js";import"./mergeSlotProps-Dkooe8Yx.js";import"./mergeSlotProps-CslibSDZ.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-BZdJ55vs.js";import"./Portal-CBWH3_dT.js";import"./Modal-BhBv-j6b.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-13E9iiil.js";import"./useSlotProps-DzttpWiE.js";import"./useControlled-ZyNPO9fe.js";import"./ListItemButton-B8pMyMO2.js";import"./ButtonBase-D94s69OQ.js";import"./IconButton-CIU1rd2_.js";import"./CircularProgress-BmS9Pbgj.js";import"./Button-BSbGZOT4.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/problems"}){return e.jsx(s,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"Problems PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ProblemsPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/problems'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ProblemsPage",component:a,decorators:[i=>e.jsx(s,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Full page for browsing coding problems. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/problems"}}}},args:{currentPath:"/problems"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Problems" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Problems item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Problems" marked as the active route.'
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
        story: 'Navigation state simulated from controls — a different route ("/") is active, so the Problems item renders in its inactive state.'
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
}`,...o.parameters?.docs?.source}}};const X=["Default","InactiveNavigation","MobileViewport"];export{t as Default,r as InactiveNavigation,o as MobileViewport,X as __namedExportsOrder,W as default};
