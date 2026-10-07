import{A as t}from"./iframe-pY0v0rmm.js";import{C as s,N as n}from"./NavShell-CWmd7BKY.js";import"./preload-helper-BM-c1V4b.js";import"./NavigationMenu-DYnbTeBp.js";import"./Close-BqbnyqS_.js";import"./createSvgIcon-CYgkyfQa.js";import"./memoTheme-DezqM1XZ.js";import"./Menu-CK77m_ua.js";import"./useTheme-BaDGgrDp.js";import"./Fade-DDlCpxhw.js";import"./useTimeout-C_9QD-0Q.js";import"./index-Ctwydg8q.js";import"./index-CUkki-S_.js";import"./useForkRef-CNpKdEs8.js";import"./getReactElementRef-BtGMABll.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-D17adWlf.js";import"./useTheme-Dso8v3Or.js";import"./index-CbhXv17b.js";import"./getThemeProps-2hY-gHtY.js";import"./Box-BUSefOP3.js";import"./List-B80y66eg.js";import"./Drawer-rD3FMklI.js";import"./useSlot-Dw3zRXyi.js";import"./mergeSlotProps-BDn4MQ4W.js";import"./mergeSlotProps-w1S5STco.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-CHvtYav7.js";import"./Portal-BjEGdVzO.js";import"./Modal-C08lyKOQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-CHD7kLkZ.js";import"./useSlotProps-BDZGQIFu.js";import"./useControlled-BHmaMkz_.js";import"./ListItemButton-D-frWolb.js";import"./ButtonBase-CHT9I_f0.js";import"./IconButton-BcGKHXm_.js";import"./CircularProgress-Dq6z0VjT.js";import"./Button-B4IUXRb4.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
