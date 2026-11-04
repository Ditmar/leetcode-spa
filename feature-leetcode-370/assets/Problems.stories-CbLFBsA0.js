import{A as e}from"./iframe-Ctcs4pnw.js";import{C as s,N as n}from"./NavShell-Co1NDsBp.js";import"./preload-helper-lInzFIsi.js";import"./NavigationMenu-YMvO9mVo.js";import"./Close-D7j23h1b.js";import"./createSvgIcon-CjjCy35f.js";import"./memoTheme-BpP3szts.js";import"./Menu-Dl3vnHU-.js";import"./useTheme-eBMHDU18.js";import"./Fade-B35XueeY.js";import"./useTimeout-IlvarrMI.js";import"./index-B27dxslq.js";import"./index-D6mKsKkd.js";import"./useForkRef-CQLeiel8.js";import"./getReactElementRef-COujS00Q.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-RyecMQCU.js";import"./useTheme-xWRModlx.js";import"./index-B2obr1PD.js";import"./getThemeProps-BT2LYL54.js";import"./Box-CjCjlWFI.js";import"./List-CFGV39-F.js";import"./Drawer-F0aWWG4x.js";import"./useSlot-Co-n7iE9.js";import"./mergeSlotProps-DK82XII1.js";import"./mergeSlotProps-BiWVz_dv.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-CFD_4XjK.js";import"./Portal-BaxpNUl1.js";import"./Modal-C7XTuAMM.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-BhMgnWm9.js";import"./useSlotProps-DDttePLL.js";import"./useControlled-C07Lh0JE.js";import"./ListItemButton-DNs8gXKN.js";import"./ButtonBase-BvJP5N-W.js";import"./IconButton-sAz3U93Z.js";import"./CircularProgress-BBuTmye7.js";import"./Button-BEjXfQY1.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/problems"}){return e.jsx(s,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"Problems PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ProblemsPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/problems'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ProblemsPage",component:a,decorators:[i=>e.jsx(s,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Full page for browsing coding problems. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/problems"}}}},args:{currentPath:"/problems"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Problems" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Problems item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
