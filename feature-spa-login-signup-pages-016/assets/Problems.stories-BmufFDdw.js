import{A as e}from"./iframe-Cgd6iH0w.js";import{C as s,N as n}from"./NavShell-lJiWjruz.js";import"./preload-helper-QjnpxqjM.js";import"./NavigationMenu-BKdlco8z.js";import"./Close-lpUWO5JV.js";import"./createSvgIcon-CY_wNKwv.js";import"./memoTheme-Cm3lXLeS.js";import"./Menu-jBOYZJDs.js";import"./useTheme-CdfPbR-B.js";import"./Fade-Dj2IJacl.js";import"./useTimeout-CAksdg_n.js";import"./index-Ncs9zfwV.js";import"./index-BShSlAkQ.js";import"./useForkRef-Dnk4gJ6B.js";import"./getReactElementRef-gaZ-epUa.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-BsEeG3Nv.js";import"./useTheme-CQQgW3FV.js";import"./index-CcaKpgMa.js";import"./getThemeProps-COoAoDfz.js";import"./Box-BGi8nruK.js";import"./List-ZIoZHWaL.js";import"./Drawer-CW2qMp6B.js";import"./useSlot-DTnAHNgy.js";import"./mergeSlotProps-CwIsmJc3.js";import"./mergeSlotProps-CtRzj3OH.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-r_BozKlq.js";import"./Portal-GqINlmgU.js";import"./Modal-CMa0UArY.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-901ARhhW.js";import"./useSlotProps-DlIdd_9k.js";import"./useControlled-DkB-bchN.js";import"./ListItemButton-BSO1Y--k.js";import"./ButtonBase-CaBBMaRw.js";import"./IconButton-cbJscC-B.js";import"./CircularProgress-CfC_IYL-.js";import"./Button-DkpcPpnU.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/problems"}){return e.jsx(s,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"Problems PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ProblemsPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/problems'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ProblemsPage",component:a,decorators:[i=>e.jsx(s,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Full page for browsing coding problems. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/problems"}}}},args:{currentPath:"/problems"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Problems" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Problems item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
