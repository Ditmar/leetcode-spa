import{A as e}from"./iframe-DP5e9LxL.js";import{C as s,N as n}from"./NavShell-DqpDSTPQ.js";import"./preload-helper-Go4V9iJU.js";import"./NavigationMenu-Rv1Mt8Nu.js";import"./Close-Ba7xyTNf.js";import"./createSvgIcon-D1rUAc7u.js";import"./memoTheme-D4Fw1gEm.js";import"./Menu-CHhxtdye.js";import"./useTheme-R6ehDmKf.js";import"./Fade-DmPd0FNO.js";import"./useTimeout-BpRL2wO5.js";import"./index-BtMq0Pg0.js";import"./index-CtsXbO-I.js";import"./useForkRef-DWbApqxr.js";import"./getReactElementRef-C-wZEOo5.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-BqmeYjPp.js";import"./useTheme-Bq7Y_Pl8.js";import"./index-CJZ9Zv1r.js";import"./getThemeProps-C-DmEgDU.js";import"./Box-CJq9IUZX.js";import"./List-nFSg3pHO.js";import"./Drawer-CribPuff.js";import"./useSlot-CtRRnjgn.js";import"./mergeSlotProps-ChAX5rew.js";import"./mergeSlotProps-EE2uThXF.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-njn1Urp6.js";import"./Portal-xzI2b4pY.js";import"./Modal-DPoE24Eo.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-BUnE5EOn.js";import"./useSlotProps-CjcJTIKS.js";import"./useControlled-DuOQnNiD.js";import"./ListItemButton-lNh7stWt.js";import"./ButtonBase-DMMWm1Jk.js";import"./IconButton-D8ksBk1M.js";import"./CircularProgress-i2ZQV8fc.js";import"./Button-Dwxwig5G.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/problems"}){return e.jsx(s,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"Problems PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ProblemsPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/problems'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ProblemsPage",component:a,decorators:[i=>e.jsx(s,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Full page for browsing coding problems. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/problems"}}}},args:{currentPath:"/problems"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Problems" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Problems item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
