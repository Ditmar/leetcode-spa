import{A as t}from"./iframe-D5QP-BAD.js";import{C as s,N as n}from"./NavShell-B-aBqmek.js";import"./preload-helper-BiuNoLlu.js";import"./NavigationMenu-DbN6CKMA.js";import"./Close-Czto7RV7.js";import"./createSvgIcon-Unl73LuB.js";import"./memoTheme-BcFE_cDL.js";import"./Menu-DVkSNQWZ.js";import"./useTheme-uTFUKpPQ.js";import"./Fade-BMdgkIIw.js";import"./useTimeout-BOnYTiQp.js";import"./index-DykWYaZ9.js";import"./index-C5uWqxWM.js";import"./useForkRef-C5cyvrgn.js";import"./getReactElementRef-DkIGM2Pc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-DMmCYNWk.js";import"./useTheme-BWaJDllZ.js";import"./index-BW8DfeZG.js";import"./getThemeProps-CwEVplFP.js";import"./Box-wpZud9xF.js";import"./List-ilckUhpu.js";import"./Drawer-B0ezdSlG.js";import"./useSlot-DRQO-GyS.js";import"./mergeSlotProps-CY-lGTJd.js";import"./mergeSlotProps-u3HnUmZ9.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-DZzWIh4W.js";import"./Portal-CVFsMrrH.js";import"./Modal-BLBrXjGg.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-BNJyvmNG.js";import"./useSlotProps-DB7F_U4F.js";import"./useControlled-i-mgS2lE.js";import"./ListItemButton-gC9E6JYI.js";import"./ButtonBase-BUAeeN1p.js";import"./IconButton-IG05-hyr.js";import"./CircularProgress-4MIDTjka.js";import"./Button-W756ePPe.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/contest"}){return t.jsx(s,{children:t.jsx(n,{currentPath:i,children:t.jsx("h1",{children:"Contest PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ContestPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/contest'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ContestPage",component:a,decorators:[i=>t.jsx(s,{children:t.jsx(i,{})})],parameters:{docs:{description:{component:"Contest landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/contest"}}}},args:{currentPath:"/contest"}},e={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Contest" marked as the active route.'}}}},o={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Contest item renders in its inactive state.'}}}},r={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
