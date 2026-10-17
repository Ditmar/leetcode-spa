import{A as e}from"./iframe-DT-HZvgC.js";import{C as s,N as n}from"./NavShell-CXScaxnw.js";import"./preload-helper-0R7PtKqv.js";import"./NavigationMenu-Dw2jSCDX.js";import"./Close-990YJWyo.js";import"./createSvgIcon-CcBEZU4y.js";import"./memoTheme-DEH8MSCl.js";import"./Menu--PjhOWi_.js";import"./useTheme-C_Q5KaQp.js";import"./Fade-CYP6vhjv.js";import"./useTimeout-Tk3B6mlv.js";import"./index-BspA3NDb.js";import"./index-S2BnRfZB.js";import"./useForkRef-CwIMl22c.js";import"./getReactElementRef-BJChrHq5.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-V7tHVzvM.js";import"./useTheme-BABLPiEt.js";import"./index-X5BPUAth.js";import"./getThemeProps-Dikaxuyw.js";import"./Box-BEp5PVaV.js";import"./List-Ax8lPYUy.js";import"./Drawer-CkvxOKvw.js";import"./useSlot-CPHDHk1F.js";import"./mergeSlotProps-C-u0ldwb.js";import"./mergeSlotProps-Te7HMynm.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-CkinTJAP.js";import"./Portal-DJKuAjCz.js";import"./Modal-DBcQAwMT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-l5wPvz4t.js";import"./useSlotProps-DWu8mh3H.js";import"./useControlled-Bb50ziR6.js";import"./ListItemButton-Dx5KuO5-.js";import"./ButtonBase-CWeyOE6v.js";import"./IconButton-D6tqK_9u.js";import"./CircularProgress-DynT_NaN.js";import"./Button-kZccTsPi.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/problems"}){return e.jsx(s,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"Problems PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ProblemsPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/problems'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ProblemsPage",component:a,decorators:[i=>e.jsx(s,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Full page for browsing coding problems. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/problems"}}}},args:{currentPath:"/problems"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Problems" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Problems item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
