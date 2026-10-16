import{j as t}from"./iframe-BiMTwmGh.js";import{C as s,N as n}from"./NavShell-DOvX1u_y.js";import"./preload-helper-QjnpxqjM.js";import"./NavigationMenu-CGeRTeTM.js";import"./Close-JMgUeJCA.js";import"./createSvgIcon-CadDkHY3.js";import"./memoTheme-DNFFLYqL.js";import"./Menu-DUaR1BpD.js";import"./useTheme-ESR-b7gY.js";import"./Fade-5zNDyNKS.js";import"./useTimeout-GAlfmcie.js";import"./index-C8uQYGDo.js";import"./index-DXGFk5tN.js";import"./useForkRef-CKblKqbU.js";import"./getReactElementRef-tDBqBRrN.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-DudAbPz2.js";import"./useTheme-BC-FqrSw.js";import"./index-CWz-qfz7.js";import"./getThemeProps-SbSu8Yik.js";import"./List-Nxo9QykH.js";import"./Box-Dl8g5sWU.js";import"./ListItemButton-e5QY8H1n.js";import"./ButtonBase-BJYHaqpS.js";import"./Drawer-C7dh8fHJ.js";import"./useSlot-C8UgSzC5.js";import"./mergeSlotProps-B3QbFWa6.js";import"./mergeSlotProps-C0LurdPm.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-BoZTM-g0.js";import"./Portal-LQfoGS2Y.js";import"./Modal-BmazOWhg.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-DTEA2QOV.js";import"./Popper-1RZDmVIO.js";import"./useSlotProps-C7E_9nzN.js";import"./IconButton-D96PxO94.js";import"./CircularProgress-Bdwbhe1H.js";import"./Button-BG1qsm5G.js";import"./schemas-Dd9zJoxN.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
