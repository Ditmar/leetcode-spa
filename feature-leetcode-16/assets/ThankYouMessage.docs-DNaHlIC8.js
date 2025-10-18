import{j as e}from"./iframe-iuGEbNzr.js";import{useMDXComponents as i}from"./index-BtfJd1FX.js";import{M as r}from"./blocks-AkdUi2pY.js";import{T as a}from"./ThankYouMessage-CiEvq9ro.js";import"./preload-helper-PPVm8Dsz.js";import"./index-QZ3l-gyv.js";import"./memoTheme-iKJOukaK.js";import"./Box-D_lOtFMG.js";function o(s){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components/ThankYouMessage",component:a}),`
`,e.jsx(n.h1,{id:"thankyoumessage--documentación-detallada",children:"ThankYouMessage — Documentación detallada"}),`
`,e.jsx(n.p,{children:"Este documento está pensado para explicar de forma ordenada qué hicimos, qué archivos tocamos y qué variables/componentes se usan en cada archivo. Está escrito para que puedas copiarlo directamente en el repositorio sin líneas sueltas ni imports redundantes."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"1-resumen-rápido",children:"1) Resumen rápido"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Propósito: Mostrar una pantalla de agradecimiento con título, mensaje, ilustración y una notificación opcional."}),`
`,e.jsxs(n.li,{children:["Destacado: una capa decorativa (GIF) aplicada vía ",e.jsx(n.code,{children:"::before"})," en el contenedor que siempre se muestra delante de la ilustración y respeta ",e.jsx(n.code,{children:"prefers-reduced-motion"}),"."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"2-archivos-modificados-y-variableselementos-usados",children:"2) Archivos modificados y variables/elementos usados"}),`
`,e.jsxs(n.p,{children:["Abajo se listan los archivos en ",e.jsx(n.code,{children:"src/components/ThankYouMessage/"})," con las variables/elementos clave que modificamos o añadimos. Esto ayuda a revisar cambios durante code review."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ThankYouMessage.tsx"})," (componente)"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Props utilizados: ",e.jsx(n.code,{children:"title"}),", ",e.jsx(n.code,{children:"message"}),", ",e.jsx(n.code,{children:"illustration"}),", ",e.jsx(n.code,{children:"showNotification"}),", ",e.jsx(n.code,{children:"notificationText"}),"."]}),`
`,e.jsxs(n.li,{children:["Test ids: ",e.jsx(n.code,{children:"thank-you-title"}),", ",e.jsx(n.code,{children:"thank-you-message"}),", ",e.jsx(n.code,{children:"thank-you-illustration"}),", ",e.jsx(n.code,{children:"thank-you-notification"}),"."]}),`
`,e.jsxs(n.li,{children:["Export por defecto: ",e.jsx(n.code,{children:"ThankYouMessage"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ThankYouMessage.styles.ts"})," (estilos)"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Exportaciones principales: ",e.jsx(n.code,{children:"Container"}),", ",e.jsx(n.code,{children:"Title"}),", ",e.jsx(n.code,{children:"Message"}),", ",e.jsx(n.code,{children:"MessageReducedMotion"}),", ",e.jsx(n.code,{children:"Illustration"}),", ",e.jsx(n.code,{children:"Notification"}),"."]}),`
`,e.jsxs(n.li,{children:["Variables/claves modificadas:",`
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
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ThankYouMessage.types.ts"})," (tipos)"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Tipos exportados: ",e.jsx(n.code,{children:"IThankYouMessageProps"})," (shape/optionals de las props)"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ThankYouMessage.constants.ts"})," (constantes)"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Constantes: URLs por defecto o textos por defecto (si existen)"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Si alguno de estos archivos no existe en la rama local, los nombres arriba indican dónde buscar y qué revisar."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"3-cómo-lo-construimos-pasos-aplicados",children:"3) Cómo lo construimos (pasos aplicados)"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Restauramos la carga de fuentes en el provider para garantizar ",e.jsx(n.code,{children:"Syne"})," en Storybook y SSR: añadimos ",e.jsx(n.code,{children:"import './fonts.css'"})," en ",e.jsx(n.code,{children:"src/style-library/provider/MuiThemeProvider.tsx"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Implementamos el GIF decorativo en ",e.jsx(n.code,{children:"ThankYouMessage.styles.ts"})," usando ",e.jsx(n.code,{children:"Container::before"}),":"]}),`
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
`,e.jsxs(n.p,{children:["Aseguramos stacking correcto poniendo ",e.jsx(n.code,{children:"Illustration"})," con ",e.jsx(n.code,{children:"position: 'relative'"})," y ",e.jsx(n.code,{children:"zIndex: 1"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Ajustamos ",e.jsx(n.code,{children:"top"})," y ",e.jsx(n.code,{children:"width/height"})," del ",e.jsx(n.code,{children:"::before"})," por breakpoint (",e.jsx(n.code,{children:"sm"}),", ",e.jsx(n.code,{children:"md"}),", ",e.jsx(n.code,{children:"lg"}),") para mover el GIF más arriba en mobile/tablet."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Añadimos ",e.jsx(n.code,{children:"prefers-reduced-motion"})," para ocultar el ",e.jsx(n.code,{children:"::before"})," y remover animaciones cuando el usuario lo solicita."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Mantuvimos la ",e.jsx(n.code,{children:"Paper"}),"/card sin halo: ",e.jsx(n.code,{children:"boxShadow: 'none'"})," en la regla ",e.jsx(n.code,{children:".MuiPaper-root"})," dentro del ",e.jsx(n.code,{children:"Container"}),"."]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"4-fragmentos-y-ejemplo-de-cambios-por-archivo-detalle",children:"4) Fragmentos y ejemplo de cambios por archivo (detalle)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ThankYouMessage.tsx"})," (puntos clave)"]}),`
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
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ThankYouMessage.styles.ts"})," (puntos clave)"]}),`
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
`,e.jsx(n.p,{children:"Estos fragmentos son extractos representativos; consulta los archivos reales para ver los valores exactos."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"5-props-y-ejemplos-de-uso-copiarpegar",children:"5) Props y ejemplos de uso (copiar/pegar)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import ThankYouMessage from '@/components/ThankYouMessage/ThankYouMessage';

<ThankYouMessage
  title="Thanks — you're all set!"
  message="We sent a confirmation email. Check your inbox to continue."
  illustration="https://example.com/assets/illustration.png"
  notificationText="If you don't see the email, check Spam or try again."
/>;
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"6-cómo-insertar-tu-imagen-copypaste",children:"6) Cómo insertar tu imagen (copy/paste)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Opción A — URL remota:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ThankYouMessage illustration="https://cdn.example.com/my-illustration.png" />
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Opción B — Import local:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import myIllustration from './assets/my-illustration.png';
<ThankYouMessage illustration={myIllustration} />;
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"7-verificación-y-checklist-antes-de-merge",children:"7) Verificación y checklist antes de merge"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["[ ] Abrir Storybook y revisar ",e.jsx(n.code,{children:"Components / ThankYouMessage"}),"."]}),`
`,e.jsx(n.li,{children:"[ ] Probar viewports: small mobile, large mobile, tablet, desktop."}),`
`,e.jsxs(n.li,{children:["[ ] Activar ",e.jsx(n.code,{children:"prefers-reduced-motion"})," y confirmar que GIF/animaciones se desactivan."]}),`
`,e.jsx(n.li,{children:"[ ] Confirmar que no hay imports sueltos ni texto fuera de bloques en el MDX (esto ya fue corregido)."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"8-notas-de-mantenimiento",children:"8) Notas de mantenimiento"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["se expuso la URL del GIF como prop, añade ",e.jsx(n.code,{children:"decorativeGif?: string"})," al tipo y usa ",e.jsx(n.code,{children:"ThankYouMessage.constants.ts"})," para el valor por defecto."]}),`
`,e.jsx(n.li,{children:"Para optimize: se considero convertir el GIF a WebP animado o usar Lottie para menos peso."}),`
`]})]})}function p(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{p as default};
