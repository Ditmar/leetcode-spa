import{B as e}from"./iframe-oErozK25.js";import{C as s,N as n}from"./NavShell-3WrcgD47.js";import"./preload-helper-C3L6Q04T.js";import"./NavigationMenu-CUKd6i0t.js";import"./Close-BGeDT4q1.js";import"./createSvgIcon-zI-pCpUv.js";import"./memoTheme-BKIpZ1Aq.js";import"./Menu-jK6gz_bF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-BoaH14M1.js";import"./useTheme-B6rT6Pst.js";import"./useTheme-4kJkJhDG.js";import"./index-BcyJA9Z6.js";import"./getThemeProps-CSjNXFb1.js";import"./Box-DNcFwdZM.js";import"./List-BJ8XA5LW.js";import"./Drawer-CotuT2JO.js";import"./useSlot-y20szoAq.js";import"./mergeSlotProps-5jOoTde7.js";import"./useForkRef-Cx2yRqd2.js";import"./mergeSlotProps-BZTSjL7j.js";import"./Fade-CUezFCPy.js";import"./useTimeout-Dh2xCq7t.js";import"./index-CAOGLRAG.js";import"./index-BP4FS1Pl.js";import"./getReactElementRef-BDJTLHeG.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-B3TZoa2Y.js";import"./Portal-CGRe1j85.js";import"./Modal-BeB80-ou.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-DeeE-L-f.js";import"./useSlotProps-CH3AOZOL.js";import"./useControlled-B-2wRsFc.js";import"./Collapse-CU6OKMKb.js";import"./ListItemButton-3czuqaqy.js";import"./ButtonBase-BQj7DzMF.js";import"./IconButton-6x7Uchzm.js";import"./CircularProgress-BGxt7oHU.js";import"./Button-B7fnZXqU.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/problems"}){return e.jsx(s,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"Problems PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ProblemsPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/problems'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],X={title:"pages/ProblemsPage",component:a,decorators:[i=>e.jsx(s,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Full page for browsing coding problems. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/problems"}}}},args:{currentPath:"/problems"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Problems" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Problems item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Y=["Default","InactiveNavigation","MobileViewport"];export{t as Default,r as InactiveNavigation,o as MobileViewport,Y as __namedExportsOrder,X as default};
