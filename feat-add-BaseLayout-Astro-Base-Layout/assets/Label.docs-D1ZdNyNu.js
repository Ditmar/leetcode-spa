import{B as e}from"./iframe-i5aAiZGf.js";import{useMDXComponents as o}from"./index-sge4CLbs.js";import{b as i}from"./index-CV2X-rh9.js";import{L as a}from"./Label.stories-TbryPcD3.js";import"./preload-helper-B5STKH-6.js";import"./index-DcGWZChy.js";import"./index-BccQI5Ws.js";import"./index-BCugj4up.js";import"./InfoOutlined-Cn6oCjlp.js";import"./createSvgIcon-Cpl6ocRy.js";import"./memoTheme-G2IPkKVh.js";import"./TextField-CPLIrPRL.js";import"./useSlot-DPGVpJ1Q.js";import"./mergeSlotProps-CnMQlIst.js";import"./useForkRef-B9wCnRkg.js";import"./Select-v-VApWP7.js";import"./Menu-BTbDA_7s.js";import"./useSlotProps-DuV7dwhU.js";import"./Popover-Ccg-1LMA.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BnB0xiYB.js";import"./useTheme-Bib4beSE.js";import"./Fade-V3pTatS3.js";import"./useTimeout-DhQqVkF_.js";import"./getReactElementRef-D10idIba.js";import"./mergeSlotProps-D0Wi9dHv.js";import"./Modal-MfyvQjx1.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-B_sWgyTI.js";import"./Paper-9Si04HIR.js";import"./List-zWyVyEY3.js";import"./utils-D3LovPrC.js";import"./useControlled-DaggY5p2.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormLabel-Bu-98IrF.js";import"./FormHelperText-Cdm9maQ7.js";import"./FormControl-DojlefSd.js";import"./isMuiElement-D_PqAvg9.js";import"./Typography-DWzLyB6E.js";import"./IconButton-CJ0gEGd7.js";import"./ButtonBase-hTzR2NAP.js";import"./CircularProgress-DJFQqP1f.js";import"./Tooltip-CTKGg623.js";import"./Popper-dK6afHHw.js";import"./Box-Bfgmatyp.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
