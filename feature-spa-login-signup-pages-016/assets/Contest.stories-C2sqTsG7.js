import{A as t}from"./iframe-Cgd6iH0w.js";import{C as s,N as n}from"./NavShell-lJiWjruz.js";import"./preload-helper-QjnpxqjM.js";import"./NavigationMenu-BKdlco8z.js";import"./Close-lpUWO5JV.js";import"./createSvgIcon-CY_wNKwv.js";import"./memoTheme-Cm3lXLeS.js";import"./Menu-jBOYZJDs.js";import"./useTheme-CdfPbR-B.js";import"./Fade-Dj2IJacl.js";import"./useTimeout-CAksdg_n.js";import"./index-Ncs9zfwV.js";import"./index-BShSlAkQ.js";import"./useForkRef-Dnk4gJ6B.js";import"./getReactElementRef-gaZ-epUa.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-BsEeG3Nv.js";import"./useTheme-CQQgW3FV.js";import"./index-CcaKpgMa.js";import"./getThemeProps-COoAoDfz.js";import"./Box-BGi8nruK.js";import"./List-ZIoZHWaL.js";import"./Drawer-CW2qMp6B.js";import"./useSlot-DTnAHNgy.js";import"./mergeSlotProps-CwIsmJc3.js";import"./mergeSlotProps-CtRzj3OH.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-r_BozKlq.js";import"./Portal-GqINlmgU.js";import"./Modal-CMa0UArY.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-901ARhhW.js";import"./useSlotProps-DlIdd_9k.js";import"./useControlled-DkB-bchN.js";import"./ListItemButton-BSO1Y--k.js";import"./ButtonBase-CaBBMaRw.js";import"./IconButton-cbJscC-B.js";import"./CircularProgress-CfC_IYL-.js";import"./Button-DkpcPpnU.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
