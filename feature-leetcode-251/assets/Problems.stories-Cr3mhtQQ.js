import{A as e}from"./iframe-BcdLNA4-.js";import{C as s,N as n}from"./NavShell-bQuZg45o.js";import"./preload-helper-DvqeKrQo.js";import"./NavigationMenu-CtliQIDf.js";import"./Close-dZx9X5o7.js";import"./createSvgIcon-C9N6HdTL.js";import"./memoTheme-iV-bAlzg.js";import"./Menu-DeazMfCg.js";import"./useTheme-t4TJXPNV.js";import"./Fade-D6lpNUfp.js";import"./useTimeout-Cxa06NzC.js";import"./index-A0sWd5wf.js";import"./index-R0gx3Vjr.js";import"./useForkRef-MsZdDTb-.js";import"./getReactElementRef-C6GO8z5Y.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-CsPGya0U.js";import"./useTheme-Cgtw06Ln.js";import"./index-BZSEuQer.js";import"./getThemeProps-CRROEovk.js";import"./Box-CgUfgOub.js";import"./List-BmgAPfDV.js";import"./Drawer-4EWW9VZ2.js";import"./useSlot-DO1QiOFZ.js";import"./mergeSlotProps-DbOPqMXI.js";import"./mergeSlotProps-ajt5NaL0.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-BnlJyIJg.js";import"./Portal-Hxikq3Ac.js";import"./Modal-Cn3vfKZJ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-BzLvBA9y.js";import"./useSlotProps-CzZGUJz5.js";import"./useControlled-DEUsMqvr.js";import"./ListItemButton-bVla5LiH.js";import"./ButtonBase-DGJEa8f7.js";import"./IconButton-BhKRmA9A.js";import"./CircularProgress-TCXKDq6Y.js";import"./Button-BX4vwGJs.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/problems"}){return e.jsx(s,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"Problems PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ProblemsPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/problems'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ProblemsPage",component:a,decorators:[i=>e.jsx(s,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Full page for browsing coding problems. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/problems"}}}},args:{currentPath:"/problems"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Problems" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Problems item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
