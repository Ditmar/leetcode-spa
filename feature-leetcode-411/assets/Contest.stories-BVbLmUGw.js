import{A as t}from"./iframe-D6sm_f3u.js";import{C as s,N as n}from"./NavShell-9DIlX0V7.js";import"./preload-helper-BiLPYPSP.js";import"./NavigationMenu-CG55-2ss.js";import"./Close-DfjsfY2z.js";import"./createSvgIcon-B0eLqJLU.js";import"./memoTheme-hXiGWDKO.js";import"./Menu-Dl1-d9IA.js";import"./useTheme-D3mYd3lE.js";import"./Fade-c06q8nU6.js";import"./useTimeout-4GcHn-ue.js";import"./index-CufxrmvS.js";import"./index-DXfbhz0E.js";import"./useForkRef-BZX0hKJc.js";import"./getReactElementRef-BoLFAew5.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-BG8-P91O.js";import"./useTheme-D7-iQQeB.js";import"./index-DL8W84iE.js";import"./getThemeProps-D0o9Uf3l.js";import"./Box-D6PtXyAv.js";import"./List-C7qFgTXU.js";import"./Drawer-moHKwWBP.js";import"./useSlot-B_jiKQp1.js";import"./mergeSlotProps-Od8Qz1yo.js";import"./mergeSlotProps-DBxEfQBz.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-rvViaPeH.js";import"./Portal-CpRhhqKq.js";import"./Modal-B0Nd3ggL.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-Bg2qwEKy.js";import"./useSlotProps-CubvxMW-.js";import"./useControlled-DKvCcuGy.js";import"./ListItemButton-6HMp8BX-.js";import"./ButtonBase-CXgwNjZh.js";import"./IconButton-DBWitAn5.js";import"./CircularProgress-BrTsmEXg.js";import"./Button-C2bOcWMz.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
