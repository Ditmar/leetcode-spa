import{B as e}from"./iframe-tk7sO9Ud.js";import{useMDXComponents as o}from"./index-Ctxw55SU.js";import{b as i}from"./index-D3kHcXQA.js";import{L as a}from"./Label.stories-B92TTCK-.js";import"./preload-helper-B1AL8F-k.js";import"./index-D2NamB8z.js";import"./index-XSSnK5bI.js";import"./index-DU4SIKrt.js";import"./InfoOutlined-BmFUN0Cl.js";import"./createSvgIcon-B0ofi3kl.js";import"./memoTheme-C92La38Y.js";import"./TextField-D3Vojns8.js";import"./useSlot-CLu5VNmh.js";import"./mergeSlotProps-DCpkljWe.js";import"./useForkRef-D9H7kmY3.js";import"./Select-CoXSPfkh.js";import"./Menu-DvjDIQ-T.js";import"./useSlotProps-9hPgKJ_0.js";import"./Popover-BQYYm3AU.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-Bz0-oSU7.js";import"./useTheme-CJfOpeFQ.js";import"./Fade-m2JmnfgB.js";import"./useTimeout-DmkeAC2w.js";import"./getReactElementRef-CIQjZO92.js";import"./mergeSlotProps-Cr8f-BOJ.js";import"./Modal-FMFTGWHr.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DA_W8xIO.js";import"./Paper-Dpid6gM6.js";import"./List-Dm5HSgiO.js";import"./utils-onxr1b-R.js";import"./useControlled-DmBGfa7W.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-DnSS4Fbk.js";import"./FormHelperText-C4MJ06_w.js";import"./FormControl-CB3BwDAV.js";import"./isMuiElement-2JQe42eo.js";import"./Typography-Bz3agc31.js";import"./IconButton-DYa8LHWu.js";import"./ButtonBase-BOABSdGF.js";import"./CircularProgress-DD7OSYmJ.js";import"./Tooltip-B6KbeM8B.js";import"./Popper-BE9eSqr0.js";import"./Box-4p_dsRTM.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
`,e.jsx(t.h1,{id:"label",children:"Label"}),`
`,e.jsxs(t.p,{children:[`An accessible, responsive, and theme-aware form label component built on top
of MUI's `,e.jsx(t.code,{children:"InputLabel"})," family. It links text with form controls programmatically."]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Label"})," component provides proper HTML association via ",e.jsx(t.code,{children:"htmlFor"}),`, manages
mutually exclusive indicators (required vs. optional), handles error and disabled visual states,
and supports an optional contextual help tooltip.`]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"quick-start",children:"Quick Start"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import Label from './Label';

function Example() {
  return (
    <>
      <Label htmlFor="email-input" required>
        Email address
      </Label>
      <input id="email-input" type="email" required />
    </>
  );
}

Stories 
DefaultThe baseline presentation of a structural form label.

Required
Appends an asterisk and forces screen reader compliance.

Optional
Displays a fallback indicator text when fields are non-mandatory.

Error
Applies semantic error feedback colors derived from the active theme palette.

Disabled
Reduces parent element opacity to 60% and strips nested element interactivity.

With Tooltip
Includes an interactive help icon trigger for contextual descriptions.

Narrow Viewport
Validates wrap thresholds at 320px screen boundaries under 200% font scaling.

Prop Reference
LabelComponentProps



├── Label.tsx            # Component logic & JSX layout
├── Label.types.ts       # TypeScript interface rules and unions
├── Label.constants.ts   # Core string templates and indicator symbols
├── Label.hook.ts        # Isolated state control managing tooltips
├── Label.styles.ts      # MUI styled() styling declarations — no external CSS
├── Label.utils.ts       # Logic resolving exclusive visual parameters
├── Label.test.tsx       # Vitest + Testing Library structural test suite
├── Label.stories.tsx    # Component Story Format stories configuration
└── Label.docs.mdx       # This fileStackPackageRole@mui/materialv7InputLabel, Tooltip, IconButton, styled@mui/icons-materialContextual helper icons@emotion/reactCSS-in-JS style runtime environmentreactFunctional hooks and rendering engine
`})})]})}function ee(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{ee as default};
