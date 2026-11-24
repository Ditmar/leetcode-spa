import{A as t}from"./iframe-YyoHJJ4b.js";import{C as s,N as n}from"./NavShell-5X_bZz8f.js";import"./preload-helper-BeCl0kSw.js";import"./NavigationMenu-JXwAOAF1.js";import"./Close-DoGOtKbJ.js";import"./createSvgIcon-eW7rjowb.js";import"./memoTheme-DcT2otyo.js";import"./Menu-BlYAcEkJ.js";import"./useTheme-B86qc51m.js";import"./Fade-Cx8Eok7n.js";import"./useTimeout-B3xAaK5X.js";import"./index-DBk4jZg0.js";import"./index-DfP4OsuK.js";import"./useForkRef-BdHkEnjm.js";import"./getReactElementRef-C4jVxbVp.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-Ie0iuieB.js";import"./useTheme-Bdp80QKt.js";import"./index-BzZr2rQ6.js";import"./getThemeProps-CPAW8CMz.js";import"./Box-BHrzO5GN.js";import"./List-IGs-G4_n.js";import"./Drawer-gghdVNHQ.js";import"./useSlot-BKGBxZej.js";import"./mergeSlotProps-CmXARLEq.js";import"./mergeSlotProps-4CakUtMr.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-f6xVshyD.js";import"./Portal-DrOg0lHK.js";import"./Modal-C5hWxcRl.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-BWZDzyHu.js";import"./useSlotProps-ABuI0Z-T.js";import"./useControlled-DxRy7a-d.js";import"./ListItemButton-Cgvefu95.js";import"./ButtonBase-DoRSl830.js";import"./IconButton-BiP442fn.js";import"./CircularProgress-BOCxU4yd.js";import"./Button-BA3V-POA.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
