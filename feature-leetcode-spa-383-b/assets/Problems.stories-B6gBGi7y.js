import{A as e}from"./iframe-BOsTvTJg.js";import{C as s,N as n}from"./NavShell-CjcvrJCA.js";import"./preload-helper-BJoZg9pk.js";import"./NavigationMenu-CtP4zsuM.js";import"./Close-BB3-0U_A.js";import"./createSvgIcon-BWECuLUb.js";import"./memoTheme-DlAW3ykT.js";import"./Menu-Dja2a3E5.js";import"./useTheme-B86jdoSE.js";import"./Fade-D4xUv49F.js";import"./useTimeout-BLw7l4AI.js";import"./index-BtbJXSoc.js";import"./index-DcpO78dw.js";import"./useForkRef-ESHAouiM.js";import"./getReactElementRef-Bk2kDdhl.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-CK8R2Crk.js";import"./useTheme-DlneiJ4d.js";import"./index-Uasl8DW3.js";import"./getThemeProps-B4MBFyde.js";import"./Box-D_h8pZ0G.js";import"./List-1rFCOgAd.js";import"./Drawer-DToby2yb.js";import"./useSlot-DorkVOEn.js";import"./mergeSlotProps-DEXW2Agf.js";import"./mergeSlotProps-_092iVz0.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-EKkYu_IB.js";import"./Portal-C0Jmm9v6.js";import"./Modal-CQorQKmH.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-Dky3-FZs.js";import"./useSlotProps-BSRU_csO.js";import"./useControlled-B6UdhvJ3.js";import"./ListItemButton-CKsCIgi0.js";import"./ButtonBase-DEavttc5.js";import"./IconButton-C1AEKQ_4.js";import"./CircularProgress--0SUx8Nj.js";import"./Button-DLi6PnSq.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/problems"}){return e.jsx(s,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"Problems PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ProblemsPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/problems'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ProblemsPage",component:a,decorators:[i=>e.jsx(s,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Full page for browsing coding problems. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/problems"}}}},args:{currentPath:"/problems"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Problems" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Problems item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
