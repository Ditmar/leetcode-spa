import{B as e}from"./iframe-zQ3flwLg.js";import{useMDXComponents as o}from"./index-DrIXQ0cA.js";import{b as i}from"./index-BFx5h3US.js";import{L as a}from"./Label.stories-BvRJznBl.js";import"./preload-helper-xDaQ_xos.js";import"./index-6yLFrf_I.js";import"./index-D11i1LGJ.js";import"./index-CETaw6vT.js";import"./InfoOutlined-BwcGF_yA.js";import"./createSvgIcon-Mgr1Pj6n.js";import"./memoTheme-R3vhdyl3.js";import"./TextField-oFBHe54q.js";import"./useSlot-lW8Vi8vb.js";import"./mergeSlotProps-CVArDhFr.js";import"./useForkRef-ZgvATJMz.js";import"./Select-CFt8AOSQ.js";import"./Menu-B7gqZrgW.js";import"./useSlotProps-eB8kOTfN.js";import"./Popover-ny_flyQe.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-DZttY0Ll.js";import"./useTheme-CkeB5zKd.js";import"./Fade-DsbOZ4I5.js";import"./useTimeout-DlSYCrrQ.js";import"./getReactElementRef-C9Wn5jSo.js";import"./mergeSlotProps-DrChm1Ey.js";import"./Modal-DrfabuMp.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CvjAW7Dx.js";import"./Paper-Cgs4-jTa.js";import"./List-DKd_eRpu.js";import"./utils-B2m_-6-6.js";import"./useControlled-BNNNDcCI.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-Bz01kLpL.js";import"./FormHelperText-pYxaDCPr.js";import"./FormControl-BgiGtYLP.js";import"./isMuiElement-VFo0ehhR.js";import"./Typography-Rw5y22wu.js";import"./IconButton-Cbf-rMZL.js";import"./ButtonBase-B94pXTD1.js";import"./CircularProgress-DjgIjkyq.js";import"./Tooltip-CUhZC87W.js";import"./Popper-C8H6ZonL.js";import"./Box-Dy7CDmjt.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
