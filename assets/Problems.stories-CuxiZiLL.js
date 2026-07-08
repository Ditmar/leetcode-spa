import{A as e}from"./iframe-zz27OWl7.js";import{C as s,N as n}from"./NavShell-dx7Vgp1R.js";import"./preload-helper-BiuNoLlu.js";import"./NavigationMenu-Cr30KyG8.js";import"./Close-1-VjaKAE.js";import"./createSvgIcon-BMolhLzS.js";import"./memoTheme-DNTPu91G.js";import"./Menu--n1wBVdB.js";import"./useTheme-BPvFBTab.js";import"./Fade-Dh-syzAn.js";import"./useTimeout-DSuV1qtB.js";import"./index-BYaSfhdT.js";import"./index-EWtZHYIa.js";import"./useForkRef-DldptWYb.js";import"./getReactElementRef-DZMQhoqA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-pFUOELFf.js";import"./useTheme-BvZoYzUV.js";import"./index-FdTz7DPG.js";import"./getThemeProps-CwzVO9n7.js";import"./Box-D8zk2tTr.js";import"./List-uyYz9w__.js";import"./Drawer-Dfkvu9j0.js";import"./useSlot-CDD6LH8J.js";import"./mergeSlotProps-Bpa0gNIK.js";import"./mergeSlotProps-CoeQtUML.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-Bc5nxN97.js";import"./Portal-DvvU3qZl.js";import"./Modal-BtZeZjjv.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-Be_rAIoP.js";import"./useSlotProps-BbC8CCHW.js";import"./useControlled-BXkOwvwg.js";import"./ListItemButton-DqigY5K7.js";import"./ButtonBase-CocqPFpQ.js";import"./IconButton-tifkmo3l.js";import"./CircularProgress-BPoFEdXf.js";import"./Button-DxyCIRJC.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/problems"}){return e.jsx(s,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"Problems PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ProblemsPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/problems'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ProblemsPage",component:a,decorators:[i=>e.jsx(s,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Full page for browsing coding problems. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/problems"}}}},args:{currentPath:"/problems"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Problems" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Problems item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
