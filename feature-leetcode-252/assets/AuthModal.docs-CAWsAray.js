import{A as o}from"./iframe-8_0BICeb.js";import{useMDXComponents as n}from"./index-GI5rRxTi.js";import{b as e}from"./index-CpNgC0Oh.js";import{A as s}from"./AuthModal.stories-CJZIEPwQ.js";import"./preload-helper-5qi1Gm5S.js";import"./index-B1KTp_w4.js";import"./index-53bHqdsI.js";import"./index-DDjDvtTS.js";import"./createSvgIcon-DNvUHo4-.js";import"./memoTheme-CwKFI7Tj.js";import"./Close-BIeOlQ4R.js";import"./schemas-CdRWBGen.js";import"./DialogContent-d0_5DfV6.js";import"./useTheme-JBPWhhcc.js";import"./useSlot-DkKRlOlm.js";import"./mergeSlotProps-DIk1tr1W.js";import"./useForkRef-BWnf4xbo.js";import"./Paper-DzvZ1RIE.js";import"./Fade-DKfhYNby.js";import"./useTimeout-D5Nhv0sY.js";import"./getReactElementRef-CfWC_572.js";import"./Modal-DlFCrPtj.js";import"./ownerWindow-PG_ucfhS.js";import"./Portal-BMQbBrTg.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Box-BohJVesG.js";import"./index-BY-EMutY.js";import"./getThemeProps-CQbzKjPz.js";import"./IconButton-gohi7piI.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DXswqW70.js";import"./CircularProgress-BrGSg2cV.js";import"./Typography-CHXf4fTl.js";import"./TextField-tjBxD1La.js";import"./FormHelperText-BAjUM4Le.js";import"./debounce-Be36O1Ab.js";import"./FormLabel-C5dUkd8Z.js";import"./Menu-CogqFKDw.js";import"./useSlotProps-BGrSctoA.js";import"./Popover-BgoAKCsu.js";import"./Grow-BJ_lOWAi.js";import"./mergeSlotProps-DG2JCNEK.js";import"./List-Bgisxdpy.js";import"./useControlled-C2lah51V.js";import"./InputAdornment-8OK-AvfU.js";import"./FormControlLabel-C8koCtyG.js";import"./Checkbox-D_jlKyUg.js";import"./Button-BGHwNTLA.js";import"./Divider-CGBnaRMh.js";import"./dividerClasses-DoflcWWy.js";function r(i){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:s}),`
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
`})})]})}function ro(i={}){const{wrapper:t}={...n(),...i.components};return t?o.jsx(t,{...i,children:o.jsx(r,{...i})}):r(i)}export{ro as default};
