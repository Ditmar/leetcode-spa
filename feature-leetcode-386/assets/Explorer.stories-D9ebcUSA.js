import{A as e}from"./iframe-CAwO8Tdk.js";import{C as a,N as n}from"./NavShell-CQBzMDcL.js";import"./preload-helper-BgZDdcYC.js";import"./NavigationMenu-DG68Lu7R.js";import"./Close-DOfZNwIM.js";import"./createSvgIcon-7eu4qDhE.js";import"./memoTheme-B8CYpCs9.js";import"./Menu-BzjJTO0x.js";import"./useTheme-ZIS749BR.js";import"./Fade-BCxXOlHc.js";import"./useTimeout-Ckm-jwWq.js";import"./index-B6fnKJuD.js";import"./index-D5ptcoaH.js";import"./useForkRef-0cwvHFdw.js";import"./getReactElementRef-C0gb0Ofh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-CAsAEeDc.js";import"./useTheme-DdaVXWtU.js";import"./index-CegZZBnk.js";import"./getThemeProps-DM09q0SY.js";import"./Box-DNWSyugl.js";import"./List-fQgOVOpx.js";import"./Drawer-yx3oTlf2.js";import"./useSlot-YYHjMZzV.js";import"./mergeSlotProps-4LGv6c44.js";import"./mergeSlotProps-DfU8thNv.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-BL7XLRSJ.js";import"./Portal-Y-3qqFQ0.js";import"./Modal-CqMp0l1f.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-BmFGertz.js";import"./useSlotProps-DN6eFpBH.js";import"./useControlled-DECqhRQY.js";import"./ListItemButton-DEQ2EuBI.js";import"./ButtonBase-BvOwXcYC.js";import"./IconButton-Ck1J3zB-.js";import"./CircularProgress-CTsYf7MY.js";import"./Button-SaeZhOwU.js";import"./schemas-CxL56DE6.js";function s({currentPath:i="/explore"}){return e.jsx(a,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"EXPLORE PAGE "})})})}s.__docgenInfo={description:"",methods:[],displayName:"ExplorePage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/explore'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],Q={title:"pages/ExplorePage",component:s,decorators:[i=>e.jsx(a,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Explore landing page. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/explore"}}}},args:{currentPath:"/explore"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Explore" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Explore item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
