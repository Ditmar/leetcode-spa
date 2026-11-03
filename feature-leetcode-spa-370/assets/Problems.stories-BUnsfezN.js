import{A as e}from"./iframe-D8hkfxhy.js";import{C as s,N as n}from"./NavShell-BzC1JjzE.js";import"./preload-helper-DNNRISap.js";import"./NavigationMenu-Dx5va93_.js";import"./Close-DP6fSAGn.js";import"./createSvgIcon-aMLtpGkD.js";import"./memoTheme-Bkdn4zO2.js";import"./Menu-6LnKaZPW.js";import"./useTheme-CdwMQDm8.js";import"./Fade-D8zJsIDi.js";import"./useTimeout-CsK6f9QT.js";import"./index-CcMymPDs.js";import"./index-C5NC8b3c.js";import"./useForkRef-CKU5wNls.js";import"./getReactElementRef-BMWNQQ09.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-Bh4pPY3q.js";import"./useTheme-XnteQGVv.js";import"./index-DkZF2sYp.js";import"./getThemeProps-pgViUMz_.js";import"./Box-CWoriG5b.js";import"./List-BVPJVG2Z.js";import"./Drawer-CrFTwgB8.js";import"./useSlot-CQY_c1tJ.js";import"./mergeSlotProps-C3KWjgLd.js";import"./mergeSlotProps-C-uakJbm.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-DNT2aS3N.js";import"./Portal-SJYuoN7y.js";import"./Modal-D9xNDWiK.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Popper-BV_8_Ol_.js";import"./useSlotProps-BmlM5Tgj.js";import"./useControlled-D6cTiZ25.js";import"./ListItemButton-DR_RvfpP.js";import"./ButtonBase-U5PNHhA3.js";import"./IconButton-Cz7K1Hwc.js";import"./CircularProgress-Cotciavq.js";import"./Button-C7n0Dk2S.js";import"./schemas-CxL56DE6.js";function a({currentPath:i="/problems"}){return e.jsx(s,{children:e.jsx(n,{currentPath:i,children:e.jsx("h1",{children:"Problems PAGE "})})})}a.__docgenInfo={description:"",methods:[],displayName:"ProblemsPage",props:{currentPath:{required:!1,tsType:{name:"string"},description:"Route highlighted as active in the navigation bar.",defaultValue:{value:"'/problems'",computed:!1}}}};const p=["/","/explore","/problems","/contest","/discuss"],W={title:"pages/ProblemsPage",component:a,decorators:[i=>e.jsx(s,{children:e.jsx(i,{})})],parameters:{docs:{description:{component:"Full page for browsing coding problems. Renders inside the shared NavShell (top NavigationMenu built from the navShell entries in src/config/default.json) wrapped by ClientOnlyMuiProvider. The active route is injectable through the currentPath prop so navigation state can be simulated from the Storybook controls panel instead of being read from window.location."}}},argTypes:{currentPath:{control:"select",options:p,description:"Route highlighted as active in the NavShell navigation bar",table:{type:{summary:"string"},defaultValue:{summary:"/problems"}}}},args:{currentPath:"/problems"}},t={parameters:{layout:"fullscreen",docs:{description:{story:'Default desktop state — NavShell navigation bar (Home, Explore, Problems, Contest, Discuss) with "Problems" marked as the active route.'}}}},r={args:{currentPath:"/"},parameters:{layout:"fullscreen",docs:{description:{story:'Navigation state simulated from controls — a different route ("/") is active, so the Problems item renders in its inactive state.'}}}},o={parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
