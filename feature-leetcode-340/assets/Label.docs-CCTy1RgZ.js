import{B as e}from"./iframe-DkbLt1st.js";import{useMDXComponents as o}from"./index-C1IVr3Nq.js";import{b as i}from"./index-DAfdTcwu.js";import{L as a}from"./Label.stories-Bny4eJTC.js";import"./preload-helper-BAofFq-6.js";import"./index-DBlIf_uV.js";import"./index-B5epo7Kk.js";import"./index-DJpa4R43.js";import"./InfoOutlined-DMgdTZAC.js";import"./createSvgIcon-D_Twb4cl.js";import"./memoTheme-CziLom1K.js";import"./TextField-Dw2iocsr.js";import"./useSlot-D8JpP_6o.js";import"./mergeSlotProps-CUKUHMTf.js";import"./useForkRef-CzpV1kc8.js";import"./Select-BfOFMIv2.js";import"./Menu-C06KuO2C.js";import"./useSlotProps--GHdCK-V.js";import"./Popover-BHEZiWXp.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-Ber5fIuE.js";import"./useTheme-DWy3xPpK.js";import"./Fade-DhcwFCLD.js";import"./useTimeout-BMmyq6zP.js";import"./getReactElementRef-DX_b39BE.js";import"./mergeSlotProps-7AxbFjoZ.js";import"./Modal-Cu_1X9fI.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CFYjXTkp.js";import"./Paper-DmCGZy4q.js";import"./List-DzNjpdyK.js";import"./utils-DLX9i65f.js";import"./useControlled-C8hRGD62.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-jZ-9bP9o.js";import"./FormHelperText-CBbglJKc.js";import"./FormControl-CNCJtsNm.js";import"./isMuiElement-DOraQ_q2.js";import"./Typography-DG2K-Zm1.js";import"./IconButton-BsAn0KWj.js";import"./ButtonBase-BqjnVzS_.js";import"./CircularProgress-B2RUQlzl.js";import"./Tooltip-CYbDUgt3.js";import"./Popper-Cdap1nJb.js";import"./Box-C0MJMDKd.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
