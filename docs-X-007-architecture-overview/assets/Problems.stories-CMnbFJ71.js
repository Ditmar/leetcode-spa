import{A as e}from"./iframe-PPhW77SP.js";import{C as s,N as n}from"./NavShell-BaxRqIAk.js";import"./preload-helper-D_jPuLxS.js";import"./NavigationMenu-BTbUoye3.js";import"./Close-crwmfDuw.js";import"./createSvgIcon-Df-b-yNY.js";import"./memoTheme-BZwrmlfc.js";import"./Menu-gDtSCly9.js";import"./useTheme-CHpGK9qs.js";import"./Fade-BOKUvgXo.js";import"./useTimeout-BEMy3wkD.js";import"./index-CRiDiub6.js";import"./index-BR302GvZ.js";import"./useForkRef-BXkaWqUp.js";import"./getReactElementRef-BAhHQwGR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-BELPVVJv.js";import"./useTheme-DusB3UUK.js";import"./index-D-PcDdlm.js";import"./getThemeProps-C8H1m-gC.js";import"./Box-CH3VJnFE.js";import"./List-B1UegLZn.js";import"./Drawer-B__EmrqO.js";import"./useSlot-B_iT2Gyw.js";import"./mergeSlotProps-C1_OhqDt.js";import"./mergeSlotProps-B_MttGWu.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-BSFsTNQw.js";import"./Portal-CFhok5gx.js";import"./Modal-jlnHn7uw.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-BqvmZ6vQ.js";import"./useSlotProps-NMuzR0bI.js";import"./useControlled-DVyM5UtC.js";import"./ListItemButton-EXsN9_NB.js";import"./ButtonBase-B7OebAmK.js";import"./IconButton-Bkg-a-3S.js";import"./CircularProgress-CwNrAg2p.js";import"./Button-CgEY1Qh9.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/problems"}){return e.jsx(s,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"Problems PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ProblemsPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/problems'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ProblemsPage",component:a,decorators:[i=>e.jsx(s,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Full page for browsing coding problems. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/problems"}}}},args:{currentPath:"/problems"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Problems" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Problems item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
