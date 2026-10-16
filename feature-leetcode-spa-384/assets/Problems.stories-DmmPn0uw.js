import{A as e}from"./iframe-K--wHrin.js";import{C as s,N as n}from"./NavShell-CCMp6WOy.js";import"./preload-helper-BRCJ-Lm3.js";import"./NavigationMenu-CvyZLOEC.js";import"./Close-DNK0t7kV.js";import"./createSvgIcon-QhbJcauu.js";import"./memoTheme-Bj4gjl5k.js";import"./Menu-DgxPamhz.js";import"./useTheme-D18GWKj6.js";import"./Fade-56SfDmYJ.js";import"./useTimeout-C3iQz2Kd.js";import"./index-BramyaUy.js";import"./index-BBxlc46r.js";import"./useForkRef-BBy6sD7t.js";import"./getReactElementRef-CuDTMuSF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-Do_V3OCK.js";import"./useTheme-Bg3_UD1W.js";import"./index-V_tpPaFE.js";import"./getThemeProps-DC4l5qMI.js";import"./Box-BncOlawL.js";import"./List-CA_GPW9B.js";import"./Drawer-Dk8RYBXN.js";import"./useSlot-BTJTGoHr.js";import"./mergeSlotProps-C4oYL9-G.js";import"./mergeSlotProps-x9jrH-xS.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-CTkmWknH.js";import"./Portal-CpD6PjBJ.js";import"./Modal-DUgX-c9x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-B5--OENh.js";import"./useSlotProps-B22OQ-K9.js";import"./useControlled-REahV_YM.js";import"./ListItemButton-D97uVFwS.js";import"./ButtonBase-D4JFNDec.js";import"./IconButton-CgYOYtm5.js";import"./CircularProgress-2fLUC-_m.js";import"./Button-B7EJaVzx.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/problems"}){return e.jsx(s,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"Problems PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ProblemsPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/problems'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ProblemsPage",component:a,decorators:[i=>e.jsx(s,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Full page for browsing coding problems. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/problems"}}}},args:{currentPath:"/problems"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Problems" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Problems item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
