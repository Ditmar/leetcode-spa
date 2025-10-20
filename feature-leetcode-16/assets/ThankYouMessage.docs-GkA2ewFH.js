import{j as e}from"./iframe-D7Z-mCtE.js";import{useMDXComponents as t}from"./index-YuKOpul-.js";import{M as o}from"./blocks-LlAK-_q9.js";import{T as r}from"./ThankYouMessage-Bkln3C0U.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BgqZe841.js";import"./memoTheme-CWusH88B.js";import"./Box-BRxF-HpV.js";function i(s){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/ThankYouMessage",component:r}),`
`,e.jsx(n.h1,{id:"thankyoumessage--detailed-documentation",children:"ThankYouMessage — Detailed documentation"}),`
`,e.jsx(n.p,{children:"This document is designed to explain in an organized way what we did, which files we touched, and which variables/components are used in each file. It's written so you can copy it directly into the repository without any extra lines or redundant imports."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"1-quick-summary",children:"1) Quick Summary"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Purpose: Display a thank you screen with a title, message, artwork, and an optional notification."}),`
`,e.jsxs(n.li,{children:["Highlight: A decorative layer (GIF) applied via ",e.jsx(n.code,{children:"::before"})," to the container that always appears in front of the artwork and respects ",e.jsx(n.code,{children:"prefers-reduced-motion"}),"."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"2-modified-files-and-variablesassets-used",children:"2) Modified files and variables/assets used"}),`
`,e.jsxs(n.p,{children:["Listed below are the files in ",e.jsx(n.code,{children:"src/components/ThankYouMessage/"})," with the key variables/elements we modified or added. This helps review changes during code review."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ThankYouMessage.tsx"})," (componente)"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Props uses: ",e.jsx(n.code,{children:"title"}),", ",e.jsx(n.code,{children:"message"}),", ",e.jsx(n.code,{children:"illustration"}),", ",e.jsx(n.code,{children:"showNotification"}),", ",e.jsx(n.code,{children:"notificationText"}),"."]}),`
`,e.jsxs(n.li,{children:["Test ids: ",e.jsx(n.code,{children:"thank-you-title"}),", ",e.jsx(n.code,{children:"thank-you-message"}),", ",e.jsx(n.code,{children:"thank-you-illustration"}),", ",e.jsx(n.code,{children:"thank-you-notification"}),"."]}),`
`,e.jsxs(n.li,{children:["Export default: ",e.jsx(n.code,{children:"ThankYouMessage"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ThankYouMessage.styles.ts"})," (estilos)"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Main Export: ",e.jsx(n.code,{children:"Container"}),", ",e.jsx(n.code,{children:"Title"}),", ",e.jsx(n.code,{children:"Message"}),", ",e.jsx(n.code,{children:"MessageReducedMotion"}),", ",e.jsx(n.code,{children:"Illustration"}),", ",e.jsx(n.code,{children:"Notification"}),"."]}),`
`,e.jsxs(n.li,{children:["Modified variables/keys:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Container::before"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"backgroundImage"}),": URL del GIF decorativo"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"zIndex"}),": alto (ej. ",e.jsx(n.code,{children:"999"}),") para overlay"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pointerEvents: 'none'"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"top"})," y ",e.jsx(n.code,{children:"width/height"})," adaptados por breakpoints (",e.jsx(n.code,{children:"sm"}),", ",e.jsx(n.code,{children:"md"}),", ",e.jsx(n.code,{children:"lg"}),")"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Illustration"}),": ",e.jsx(n.code,{children:"position: 'relative'"}),", ",e.jsx(n.code,{children:"zIndex: 1"})," para permitir overlay"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Message"}),": ",e.jsx(n.code,{children:"transform: 'scaleX(1.06)'"})," en ",e.jsx(n.code,{children:"md+"})," y reglas de ",e.jsx(n.code,{children:"prefers-reduced-motion"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ThankYouMessage.types.ts"})," (types)"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Types in export: ",e.jsx(n.code,{children:"IThankYouMessageProps"})," (shape/optionals props)"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ThankYouMessage.constants.ts"})," (constantes)"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Constans: Default URLs or default texts (if any)"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.blockquote,{children:`
`}),`
`,e.jsx(n.h2,{id:"if-any-of-these-files-dont-exist-in-the-local-branch-the-names-above-indicate-where-to-look-and-what-to-check",children:"If any of these files don't exist in the local branch, the names above indicate where to look and what to check."}),`
`,e.jsx(n.h2,{id:"3-how-we-built-it-steps-applied",children:"3) How we built it (steps applied)"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["We restored font loading in the provider to guarantee ",e.jsx(n.code,{children:"Syne"})," in Storybook and SSR: we added ",e.jsx(n.code,{children:"import './fonts.css'"})," in ",e.jsx(n.code,{children:"src/style-library/provider/MuiThemeProvider.tsx"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["We implemented the decorative GIF in ",e.jsx(n.code,{children:"ThankYouMessage.styles.ts"})," using ",e.jsx(n.code,{children:"Container::before"}),":"]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// excerpt from ThankYouMessage.styles.ts
&::before: {
	content: "''",
	position: 'absolute',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	backgroundImage: "url('https://.../decorative.gif')",
	backgroundSize: 'contain',
	pointerEvents: 'none',
	zIndex: 999,
}
`})}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["We ensured proper stacking by setting ",e.jsx(n.code,{children:"Illustration"})," with ",e.jsx(n.code,{children:"position: 'relative'"})," and ",e.jsx(n.code,{children:"zIndex: 1"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["We adjusted the ",e.jsx(n.code,{children:"top"})," and ",e.jsx(n.code,{children:"width/height"})," of the ",e.jsx(n.code,{children:"::before"})," pseudo-element per breakpoint (",e.jsx(n.code,{children:"sm"}),", ",e.jsx(n.code,{children:"md"}),", ",e.jsx(n.code,{children:"lg"}),") to move the GIF higher on mobile/tablet."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["We added ",e.jsx(n.code,{children:"prefers-reduced-motion"})," to hide the ",e.jsx(n.code,{children:"::before"})," and remove animations when the user requests reduced motion."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["We kept the ",e.jsx(n.code,{children:"Paper"}),"/card without a halo: ",e.jsx(n.code,{children:"boxShadow: 'none'"})," in the ",e.jsx(n.code,{children:".MuiPaper-root"})," rule inside the ",e.jsx(n.code,{children:"Container"}),"."]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"4-code-snippets-and-example-of-per-file-changes-detailed",children:"4) Code snippets and example of per-file changes (detailed)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ThankYouMessage.tsx"})," (key points)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export default function ThankYouMessage({
  title = 'Thanks For Participating',
  message = 'Your Test Has Completed!',
  illustration,
  showNotification = true,
  notificationText = 'You will be notified when your test results are released',
}) {
  return (
    <Container>
      <Title data-testid="thank-you-title">{title}</Title>
      <Message data-testid="thank-you-message">{message}</Message>
      {illustration && (
        <Illustration
          src={typeof illustration === 'string' ? illustration : undefined}
          data-testid="thank-you-illustration"
        >
          {typeof illustration !== 'string' ? illustration : null}
        </Illustration>
      )}
      {showNotification && (
        <Notification data-testid="thank-you-notification">{notificationText}</Notification>
      )}
    </Container>
  );
}
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ThankYouMessage.styles.ts"})," (key points)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export const Container = styled(Box)(({ theme }) => ({
  position: 'relative',
  '&::before': {
    content: "''",
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundImage: "url('https://.../decorative.gif')",
    zIndex: 999,
    pointerEvents: 'none',
  },
  '& .MuiPaper-root': { boxShadow: 'none' },
}));
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"These snippets are representative extracts; refer to the actual files to see the exact values."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"5-props-and-usage-examples-copypaste",children:"5) Props and usage examples (copy/paste)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import ThankYouMessage from '@/components/ThankYouMessage/ThankYouMessage';

<ThankYouMessage
  title="Thanks — you're all set!"
  message="We sent a confirmation email. Check your inbox to continue."
  illustration="https://example.com/assets/illustration.png"
  notificationText="If you don't see the email, check Spam or try again."
/>;
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"6-how-to-insert-your-image-copypaste",children:"6) How to insert your image (copy/paste)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Option A — Remote URL:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ThankYouMessage illustration="https://cdn.example.com/my-illustration.png" />
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Option B — Local import:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import myIllustration from './assets/my-illustration.png';
<ThankYouMessage illustration={myIllustration} />;
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"7-verification-and-checklist-before-merging",children:"7) Verification and checklist before merging"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["[ ] Open Storybook and review ",e.jsx(n.code,{children:"Components / ThankYouMessage"}),"."]}),`
`,e.jsx(n.li,{children:"[ ] Test viewports: small mobile, large mobile, tablet, desktop."}),`
`,e.jsxs(n.li,{children:["[ ] Enable ",e.jsx(n.code,{children:"prefers-reduced-motion"})," and confirm that GIF/animations are disabled."]}),`
`,e.jsx(n.li,{children:"[ ] Confirm there are no stray imports or text outside of blocks in the MDX (this was already fixed)."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"8-maintenance-notes",children:"8) Maintenance notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The GIF URL was exposed as a prop — add ",e.jsx(n.code,{children:"decorativeGif?: string"})," to the type and use ",e.jsx(n.code,{children:"ThankYouMessage.constants.ts"})," for the default value."]}),`
`,e.jsx(n.li,{children:"For optimization: consider converting the GIF to an animated WebP or using Lottie for lighter performance."}),`
`]})]})}function u(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{u as default};
