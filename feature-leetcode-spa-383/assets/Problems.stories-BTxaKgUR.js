import{A as e}from"./iframe-Ch6mqscc.js";import{C as s,N as n}from"./NavShell-fVh9z04a.js";import"./preload-helper-le9zrrzk.js";import"./NavigationMenu-dFJxyu7g.js";import"./Close-Dadztn9n.js";import"./createSvgIcon-B2wdE6lq.js";import"./memoTheme-ZENwZfRs.js";import"./Menu-z1UJhU-h.js";import"./useTheme-DbZpHlCU.js";import"./Fade-Bw__eflt.js";import"./useTimeout-DjedGv4r.js";import"./index-BWTYNxeG.js";import"./index-BllQE0lz.js";import"./useForkRef-B5Sc03vW.js";import"./getReactElementRef-UpOUJPS6.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-Bx4hAzMk.js";import"./useTheme-D2Khcg9u.js";import"./index-3uihUxHu.js";import"./getThemeProps-DsIN0EM0.js";import"./Box-BGS-f_85.js";import"./List-BUSndAIb.js";import"./Drawer-BUMOYsJW.js";import"./useSlot-Czh6T9TR.js";import"./mergeSlotProps-DshjxGG6.js";import"./mergeSlotProps-Bw8A7ay5.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-BCM3eQ2V.js";import"./Portal-CYAW80Vd.js";import"./Modal-ByP5HCl2.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-B1fTxIJs.js";import"./useSlotProps-BlC9e14m.js";import"./useControlled-IU_d2CfP.js";import"./ListItemButton-DlVZZvMz.js";import"./ButtonBase-CS3x_4ZY.js";import"./IconButton-BD_4aqqi.js";import"./CircularProgress-DRCDCKyD.js";import"./Button-Br-dMd4-.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/problems"}){return e.jsx(s,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"Problems PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ProblemsPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/problems'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ProblemsPage",component:a,decorators:[i=>e.jsx(s,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Full page for browsing coding problems. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/problems"}}}},args:{currentPath:"/problems"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Problems" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Problems item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
