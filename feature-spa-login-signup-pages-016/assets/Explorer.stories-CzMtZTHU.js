import{j as e}from"./iframe-BiMTwmGh.js";import{C as a,N as n}from"./NavShell-DOvX1u_y.js";import"./preload-helper-QjnpxqjM.js";import"./NavigationMenu-CGeRTeTM.js";import"./Close-JMgUeJCA.js";import"./createSvgIcon-CadDkHY3.js";import"./memoTheme-DNFFLYqL.js";import"./Menu-DUaR1BpD.js";import"./useTheme-ESR-b7gY.js";import"./Fade-5zNDyNKS.js";import"./useTimeout-GAlfmcie.js";import"./index-C8uQYGDo.js";import"./index-DXGFk5tN.js";import"./useForkRef-CKblKqbU.js";import"./getReactElementRef-tDBqBRrN.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-DudAbPz2.js";import"./useTheme-BC-FqrSw.js";import"./index-CWz-qfz7.js";import"./getThemeProps-SbSu8Yik.js";import"./List-Nxo9QykH.js";import"./Box-Dl8g5sWU.js";import"./ListItemButton-e5QY8H1n.js";import"./ButtonBase-BJYHaqpS.js";import"./Drawer-C7dh8fHJ.js";import"./useSlot-C8UgSzC5.js";import"./mergeSlotProps-B3QbFWa6.js";import"./mergeSlotProps-C0LurdPm.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-BoZTM-g0.js";import"./Portal-LQfoGS2Y.js";import"./Modal-BmazOWhg.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-DTEA2QOV.js";import"./Popper-1RZDmVIO.js";import"./useSlotProps-C7E_9nzN.js";import"./IconButton-D96PxO94.js";import"./CircularProgress-Bdwbhe1H.js";import"./Button-BG1qsm5G.js";import"./schemas-Dd9zJoxN.js";function s({currentPath:i="/explore"}){return e.jsx(a,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"EXPLORE PAGE "})})})}s.__docgenInfo={description:"",methods:[],displayName:"ExplorePage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/explore'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],Q={title:"pages/ExplorePage",component:s,decorators:[i=>e.jsx(a,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Explore landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/explore"}}}},args:{currentPath:"/explore"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Explore" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Explore item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Explore" marked as the active route.'
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
        story: 'Navigation state simulated from controls — a different route ("/") is active, so the Explore item renders in its inactive state.'
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
}`,...o.parameters?.docs?.source}}};const W=["Default","InactiveNavigation","MobileViewport"];export{t as Default,r as InactiveNavigation,o as MobileViewport,W as __namedExportsOrder,Q as default};
