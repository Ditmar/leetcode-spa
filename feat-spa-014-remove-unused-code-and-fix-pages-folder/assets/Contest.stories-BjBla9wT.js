import{A as t}from"./iframe-Dw-bi4UG.js";import{C as s,N as n}from"./NavShell-DUxUiLt6.js";import"./preload-helper-CdgN7wQz.js";import"./NavigationMenu-Dt9zR84N.js";import"./Close-BsfE7Qut.js";import"./createSvgIcon-Dw0-ZnJw.js";import"./memoTheme-Dlvt2v3D.js";import"./Menu-Bvzy7EEG.js";import"./useTheme-KkX66NEG.js";import"./Fade-CN3PBwcV.js";import"./useTimeout-8VVI6OLn.js";import"./index-BBaczVjh.js";import"./index-7ELz7ema.js";import"./useForkRef-BvKBADx2.js";import"./getReactElementRef-C-YtUPm6.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-CdyQyTIz.js";import"./useTheme-W_Qh4dWS.js";import"./index-D9dyyNf3.js";import"./getThemeProps-BHnZtyE7.js";import"./Box-BhXwAWW-.js";import"./List-k_PwzSnA.js";import"./Drawer-D4x6y_d-.js";import"./useSlot-BOT0wzGK.js";import"./mergeSlotProps-Bz58LTyH.js";import"./mergeSlotProps-DV5S27O1.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-CJAScpjO.js";import"./Portal-B5qa-RXV.js";import"./Modal-BF8QRU7j.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-AP2tzogc.js";import"./useSlotProps--NsgrLvM.js";import"./useControlled-CYuIKQy3.js";import"./ListItemButton-DNZt6mDZ.js";import"./ButtonBase-DIn-lg21.js";import"./IconButton-BwuOKhF9.js";import"./CircularProgress-BFRltHup.js";import"./Button-BNCym33g.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
