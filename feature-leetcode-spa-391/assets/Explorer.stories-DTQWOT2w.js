import{A as e}from"./iframe-hbaCatXG.js";import{C as a,N as n}from"./NavShell-ceINkdBy.js";import"./preload-helper-2mYZUPB7.js";import"./NavigationMenu-C_p6GeuO.js";import"./Close-B_vfncAE.js";import"./createSvgIcon-BxBmYxQR.js";import"./memoTheme-DE3jO2tg.js";import"./Menu-DUu6LU8M.js";import"./useTheme-DbBkdE3Q.js";import"./Fade-CZtH7cCx.js";import"./useTimeout-XvIGoXsC.js";import"./index-CNlmmdV7.js";import"./index-CHCMqeN8.js";import"./useForkRef-CxVEAmMH.js";import"./getReactElementRef-Fo-VUnF9.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-BJcLq-wS.js";import"./useTheme-DdUifjzQ.js";import"./index-DthOVAq7.js";import"./getThemeProps-3MUgS9xb.js";import"./Box-Bywh8tUG.js";import"./List-BP7SwQwB.js";import"./Drawer-CiKL_ATy.js";import"./useSlot-Ddhg0kiH.js";import"./mergeSlotProps-ep4pEPFo.js";import"./mergeSlotProps-BGMwFw51.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-CAnpwcAR.js";import"./Portal-lO8N-f_P.js";import"./Modal-Ca7gZT9e.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-qGp1B4Qa.js";import"./useSlotProps-CRdjXiZp.js";import"./useControlled-CzbjDWqr.js";import"./ListItemButton-Crv73V2W.js";import"./ButtonBase-BN3l-X-s.js";import"./IconButton-5Gambx1b.js";import"./CircularProgress-CBAd9wKx.js";import"./Button-Dxl7NO6Y.js";import"./schemas-CxL56DE6.js";function s({currentPath:i="/explore"}){return e.jsx(a,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"EXPLORE PAGE "})})})}s.__docgenInfo={description:"",methods:[],displayName:"ExplorePage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/explore'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],Q={title:"pages/ExplorePage",component:s,decorators:[i=>e.jsx(a,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Explore landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/explore"}}}},args:{currentPath:"/explore"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Explore" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Explore item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
