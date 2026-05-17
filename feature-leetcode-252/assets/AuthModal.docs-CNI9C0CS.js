import{j as o}from"./iframe-B-ONXQuN.js";import{useMDXComponents as r}from"./index-Epn8ZLg0.js";import{M as e}from"./index-BezhpEW4.js";import{A as s}from"./AuthModal.stories-BUQ9eLaN.js";import"./preload-helper-5qi1Gm5S.js";import"./index-BBpM5wXj.js";import"./index-CIFLY7qq.js";import"./index-Bvw_ygRU.js";import"./createSvgIcon-ioV-qjne.js";import"./memoTheme-BOnLbDzn.js";import"./Close-CJrJkPIc.js";import"./schemas-CwulLXk1.js";import"./DialogContent-v2zjqCLE.js";import"./useTheme-BpqcXsTO.js";import"./useSlot-C_vgHDSy.js";import"./mergeSlotProps-5SGQMSjI.js";import"./useForkRef-C0pYz4D2.js";import"./Paper-G0dKosXw.js";import"./Fade-BVGy0Ld6.js";import"./useTimeout-Ba4qrsba.js";import"./getReactElementRef-DJLci-TO.js";import"./Modal-ZuV6lIVf.js";import"./Portal-CHLbik5d.js";import"./Box-BhoXg9BA.js";import"./index-D3ArMpyw.js";import"./getThemeProps-wdyZ96gZ.js";import"./IconButton-DpEjsszo.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BH6RbHgz.js";import"./CircularProgress-B4RlEQck.js";import"./Typography-DBukypIc.js";import"./TextField-ZMJGIF8j.js";import"./FormHelperText-F1zkSzmT.js";import"./List-Da8RqqsC.js";import"./Menu-DJ0H4ara.js";import"./useSlotProps-PlBV-4oo.js";import"./mergeSlotProps-D2eFVGOh.js";import"./useControlled-D6CiMFS8.js";import"./InputAdornment-_u9CZOpj.js";import"./FormControlLabel-CtICKXZL.js";import"./Button-DdLfCON9.js";import"./Divider-D-_1a2s3.js";import"./dividerClasses-fnhCoQVT.js";function n(i){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:s}),`
`,o.jsx(t.h1,{id:"authmodal",children:"AuthModal"}),`
`,o.jsxs(t.p,{children:["The ",o.jsx(t.code,{children:"AuthModal"})," component provides a unified interface for user authentication, supporting both Sign In and Sign Up flows within a responsive Material UI Dialog."]}),`
`,o.jsx(t.h2,{id:"features",children:"Features"}),`
`,o.jsxs(t.ul,{children:[`
`,o.jsxs(t.li,{children:[o.jsx(t.strong,{children:"CDD Architecture"}),": Separated logic (hooks), styles, and types."]}),`
`,o.jsxs(t.li,{children:[o.jsx(t.strong,{children:"Form Validation"}),": Powered by ",o.jsx(t.code,{children:"react-hook-form"})," and ",o.jsx(t.code,{children:"zod"}),"."]}),`
`,o.jsxs(t.li,{children:[o.jsx(t.strong,{children:"Responsive"}),": Fullscreen on mobile devices (",o.jsx(t.code,{children:"< 600px"}),") and max-width 480px on desktop."]}),`
`,o.jsxs(t.li,{children:[o.jsx(t.strong,{children:"Accessibility (a11y)"}),": Focus trapped, valid aria-labels for social buttons, and 44px minimum touch targets on mobile."]}),`
`]}),`
`,o.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-tsx",children:`import { useState } from 'react';
import { AuthModal } from './AuthModal';
import { AuthMode } from './AuthModal.types';

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Login</button>
      <AuthModal isOpen="{isOpen}" onClose="{()"> setIsOpen(false)} 
        initialMode={AuthMode.SIGN_IN} 
      />
    </>
  );
};
`})})]})}function W(i={}){const{wrapper:t}={...r(),...i.components};return t?o.jsx(t,{...i,children:o.jsx(n,{...i})}):n(i)}export{W as default};
