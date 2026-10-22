import{A as e}from"./iframe-DzBbparI.js";import{C as s,N as n}from"./NavShell-Wp5-rXbJ.js";import"./preload-helper-5dQNS59x.js";import"./NavigationMenu-8R8Nylr7.js";import"./Close-DnGqsT4m.js";import"./createSvgIcon-B7imnGLF.js";import"./memoTheme-Cnz0XleI.js";import"./Menu-D-OGn2dr.js";import"./useTheme-C0TTcrxf.js";import"./Fade-C16NoCVi.js";import"./useTimeout-XHyQwpqf.js";import"./index-CA4EX6n9.js";import"./index-B4g8640I.js";import"./useForkRef-CQKh4RFS.js";import"./getReactElementRef-T30XykWl.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-buMaNtFN.js";import"./useTheme-D86peA0f.js";import"./index-D3d9iW87.js";import"./getThemeProps-CCtr75ao.js";import"./Box-CQyHARyV.js";import"./List-BlBVH8XW.js";import"./Drawer-C7VOSRFz.js";import"./useSlot-BRkK0agX.js";import"./mergeSlotProps-BQqsfi0V.js";import"./mergeSlotProps-CseHa1xw.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-DXiOSn3k.js";import"./Portal-Cl97jlsP.js";import"./Modal-R-ox5Bcm.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-DnqpkFs2.js";import"./useSlotProps-a6yHaodA.js";import"./useControlled-DlT6I8DN.js";import"./ListItemButton-B_LM3FAC.js";import"./ButtonBase-BsrNl8r1.js";import"./IconButton-LlQ7wveI.js";import"./CircularProgress-DVT1y_yX.js";import"./Button-2Cn-AnU_.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/problems"}){return e.jsx(s,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"Problems PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ProblemsPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/problems'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ProblemsPage",component:a,decorators:[i=>e.jsx(s,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Full page for browsing coding problems. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/problems"}}}},args:{currentPath:"/problems"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Problems" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Problems item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
