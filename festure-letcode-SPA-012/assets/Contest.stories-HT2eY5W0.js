import{A as t}from"./iframe-jui-tTow.js";import{C as s,N as n}from"./NavShell-DYGgqv7E.js";import"./preload-helper-haQr58nt.js";import"./NavigationMenu-B8HjKyGE.js";import"./Close-BYQd2deT.js";import"./createSvgIcon-9mmq9S6B.js";import"./memoTheme-DYqnqm4B.js";import"./Menu-BXl9r5Gs.js";import"./useTheme-ngT8YbJo.js";import"./Fade-Dqqo6bwL.js";import"./useTimeout-D5xW6fTf.js";import"./index-xu_6bhwZ.js";import"./index-BUQ9flQh.js";import"./useForkRef-DXfX_hX8.js";import"./getReactElementRef-aJZBaZzD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-T7kwbqb5.js";import"./useTheme-dphBUTMT.js";import"./index-CwzdRkLX.js";import"./getThemeProps-BzF07Pc0.js";import"./Box-DZxUqZXA.js";import"./List-B4n1dE7Q.js";import"./Drawer-BzuC3NMK.js";import"./useSlot-CWMNyz64.js";import"./mergeSlotProps-C-iIn9QA.js";import"./mergeSlotProps-Bu0iinyk.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-SjyBaYIh.js";import"./Portal-CXMsEm_Q.js";import"./Modal-DtilG3rC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-Dzbq2PFA.js";import"./useSlotProps-X-FPmsxy.js";import"./useControlled-Cx2T30i8.js";import"./ListItemButton-BBxAmvF-.js";import"./ButtonBase-Cd8smN84.js";import"./IconButton-CKeC1D-E.js";import"./CircularProgress-CqcVaqEn.js";import"./Button-BfYjL_6s.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
