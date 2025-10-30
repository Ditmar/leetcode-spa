import{j as e}from"./iframe-B9hIqimg.js";import{useMDXComponents as o}from"./index-CkqV0QnN.js";import"./preload-helper-PPVm8Dsz.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"-signuppage---página-de-registro",children:"📝 SignUpPage - Página de Registro"}),`
`,e.jsxs(n.p,{children:["El componente ",e.jsx(n.code,{children:"SignUpPage"})," permite a los usuarios registrarse en la plataforma usando un formulario con validaciones en tiempo real. Además de los campos de entrada, ofrece botones para iniciar sesión con cuentas sociales y proporciona un spinner de carga cuando se procesa el registro."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-propósito-y-características",children:"🎯 Propósito y Características"}),`
`,e.jsx(n.h3,{id:"propósito",children:"Propósito"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Gestionar el registro de usuarios con ",e.jsx(n.strong,{children:"email"}),", ",e.jsx(n.strong,{children:"nombre de usuario"})," y ",e.jsx(n.strong,{children:"contraseña"}),"."]}),`
`,e.jsx(n.li,{children:"Validar la entrada de datos en tiempo real."}),`
`,e.jsxs(n.li,{children:["Proveer opciones de ",e.jsx(n.strong,{children:"autenticación social"})," (Google, GitHub, Facebook)."]}),`
`,e.jsxs(n.li,{children:["Mostrar un ",e.jsx(n.strong,{children:"spinner de carga"})," mientras se procesa la información."]}),`
`]}),`
`,e.jsx(n.h3,{id:"-características",children:"✨ Características"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Campos de entrada para ",e.jsx(n.strong,{children:"Email"}),", ",e.jsx(n.strong,{children:"Nombre de Usuario"})," y ",e.jsx(n.strong,{children:"Contraseña"})," con validaciones."]}),`
`,e.jsx(n.li,{children:"Funcionalidad de carga con desactivación del botón mientras se envía el formulario."}),`
`,e.jsxs(n.li,{children:["Inclusión de iconos para login social con ",e.jsx(n.strong,{children:"Google"}),", ",e.jsx(n.strong,{children:"GitHub"})," y ",e.jsx(n.strong,{children:"Facebook"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Enlaces de navegación"})," a la página de login y políticas legales (Términos de servicio y Política de privacidad)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Responsivo"})," y accesible."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"️-props-del-componente",children:"⚙️ Props del Componente"}),`
`,e.jsxs(n.p,{children:[`| Prop                | Tipo         | Descripción                                          |
| :------------------ | :----------- | :--------------------------------------------------- |
| `,e.jsx(n.code,{children:"loading"}),"           | ",e.jsx(n.code,{children:"boolean"}),`    | Muestra el spinner de carga en el botón de registro. |
| `,e.jsx(n.code,{children:"buttonText"}),"        | ",e.jsx(n.code,{children:"string"}),`     | Texto del botón de registro.                         |
| `,e.jsx(n.code,{children:"disabled"}),"          | ",e.jsx(n.code,{children:"boolean"}),"    | Desactiva el botón de registro si es ",e.jsx(n.code,{children:"true"}),`.         |
| `,e.jsx(n.code,{children:"onSubmit"}),"          | ",e.jsx(n.code,{children:"() => void"}),` | Función de callback al enviar el formulario.         |
| `,e.jsx(n.code,{children:"loginText"}),"         | ",e.jsx(n.code,{children:"string"}),`     | Texto del enlace para iniciar sesión ("Log In").     |
| `,e.jsx(n.code,{children:"signupWithText"}),"    | ",e.jsx(n.code,{children:"string"}),`     | Texto antes de los iconos de autenticación social.   |
| `,e.jsx(n.code,{children:"showSocialIcons"}),"   | ",e.jsx(n.code,{children:"boolean"}),`    | Muestra u oculta los iconos sociales.                |
| `,e.jsx(n.code,{children:"showLegalText"}),"     | ",e.jsx(n.code,{children:"boolean"}),`    | Muestra u oculta el texto legal de reCAPTCHA.        |
| `,e.jsx(n.code,{children:"googleLoginUrl"}),"    | ",e.jsx(n.code,{children:"string"}),`     | URL de redirección para el login de Google.          |
| `,e.jsx(n.code,{children:"privacyPolicyUrl"}),"  | ",e.jsx(n.code,{children:"string"}),`     | URL de la Política de Privacidad.                    |
| `,e.jsx(n.code,{children:"termsOfServiceUrl"})," | ",e.jsx(n.code,{children:"string"}),"     | URL de los Términos de Servicio.                     |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-estructura-y-archivos",children:"🧩 Estructura y Archivos"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SignUpPage.tsx"}),": Componente principal con la lógica del formulario y la interfaz de usuario."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SignUpPage.types.ts"}),": Tipos y interfaces de las props utilizadas en el componente."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SignUpPage.constants.ts"}),": Constantes utilizadas para validaciones o textos, opcional."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SignUpPage.styles.ts"}),": Estilos para el componente usando MUI y ",e.jsx(n.code,{children:"sx"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SignUpPage.test.tsx"}),": Pruebas unitarias con Jest y Testing Library."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SignUpPage.stories.tsx"}),": Historias de Storybook para ver los diferentes estados de la página."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SignUpPage.docs.mdx"}),": Documentación del componente."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-dependencias-y-notas-sobre-la-implementación",children:"🚨 Dependencias y Notas sobre la Implementación"}),`
`,e.jsx(n.h3,{id:"dependencias-pendientes",children:"Dependencias Pendientes"}),`
`,e.jsxs(n.p,{children:["Los siguientes componentes son esenciales para la funcionalidad completa, pero aún no están disponibles. Deben dejarse como ",e.jsx(n.strong,{children:"placeholders"})," hasta que los componentes reales estén listos:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Logo"}),": Componente para el logo de la aplicación."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"FormInput"}),": Componente utilizado para los campos de entrada (email, nombre de usuario, contraseña)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"PrimaryButton"}),": Componente utilizado para el botón de registro."]}),`
`]}),`
`,e.jsx(n.h3,{id:"pasos-a-seguir-para-la-integración",children:"Pasos a Seguir para la Integración"}),`
`,e.jsxs(n.p,{children:[`| Paso                           | Descripción                                                                                                                                        | Ejemplo de Código (Al estar disponible)              |
| :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------- |
| `,e.jsx(n.strong,{children:"1. Reemplazar Placeholders"})," | Sustituir las líneas comentadas por las ",e.jsx(n.strong,{children:"importaciones reales"})," de los componentes.                                                               | ",e.jsx(n.code,{children:'import { Logo } from "../../components/Logo/Logo";'}),` |
| `,e.jsx(n.strong,{children:"2. Eliminar Comentarios"}),"    | Descomentar las líneas de importación y asegurarse de que el componente esté importado correctamente, ",e.jsx(n.strong,{children:"eliminando los placeholders"}),`.             | N/A                                                  |
| `,e.jsx(n.strong,{children:"3. Probar Integración"}),"      | Realizar pruebas de integración para asegurar que los valores, la validación y el comportamiento (spinner de carga, etc.) funcionen correctamente. | N/A                                                  |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-diseño-y-estilos",children:"🎨 Diseño y Estilos"}),`
`,e.jsxs(n.p,{children:["El diseño está basado en ",e.jsx(n.strong,{children:"Material UI"}),", priorizando la consistencia y la accesibilidad."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Fuente"}),": Syne, peso negrita (",e.jsx(n.strong,{children:"700"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Espaciado"}),": Utiliza ",e.jsx(n.code,{children:"theme.spacing()"})," para tamaños y márgenes, garantizando una apariencia responsiva."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Color"}),": Uso de ",e.jsx(n.code,{children:"theme.palette"})," para asegurar la consistencia de colores."]}),`
`]}),`
`,e.jsx(n.h3,{id:"-referencia-de-estilo-visual",children:"🧾 Referencia de Estilo Visual"}),`
`,e.jsxs(n.p,{children:[`| Elemento              | Propiedad        | Valor     |
| :-------------------- | :--------------- | :-------- |
| `,e.jsx(n.strong,{children:"Texto del Botón"}),`   | Tamaño de fuente | 16px      |
| `,e.jsx(n.strong,{children:"Iconos Sociales"}),`   | Tamaño de icono  | 24px      |
| `,e.jsx(n.strong,{children:"Texto de Política"})," | Color            | ",e.jsx(n.code,{children:"#0044FF"})," |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-accesibilidad",children:"♿ Accesibilidad"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Uso de roles semánticos (",e.jsx(n.code,{children:'role="img"'}),", ",e.jsx(n.code,{children:"aria-label"}),") para iconos y otros elementos interactivos."]}),`
`,e.jsxs(n.li,{children:["Compatible con ",e.jsx(n.strong,{children:"lectores de pantalla"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Navegación por teclado"})," y ",e.jsxs(n.strong,{children:["enlaces con ",e.jsx(n.code,{children:"aria-label"})]})," para mejorar la accesibilidad."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-pruebas-unitarias",children:"🧪 Pruebas Unitarias"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Pruebas de validación"}),": Verificar que los campos ",e.jsx(n.strong,{children:"Email"}),", ",e.jsx(n.strong,{children:"Username"})," y ",e.jsx(n.strong,{children:"Password"})," se validen correctamente según las reglas definidas."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Pruebas de botón"}),": Verificar que el botón se ",e.jsx(n.strong,{children:"desactive"})," correctamente durante el estado de carga (",e.jsx(n.code,{children:"loading: true"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Pruebas de llamadas a la API"}),": Mocking de las llamadas a la API para asegurar que la función ",e.jsx(n.code,{children:"onSubmit"})," se ejecute correctamente."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-uso-en-storybook",children:"📦 Uso en Storybook"}),`
`,e.jsx(n.p,{children:"Se definieron varias historias para mostrar el comportamiento del componente en diferentes estados."}),`
`,e.jsxs(n.p,{children:["| Historia       | Descripción                                                     | Cambios en ",e.jsx(n.code,{children:"args"}),`                 |
| :------------- | :-------------------------------------------------------------- | :-------------------------------- |
| `,e.jsx(n.strong,{children:"Default"}),`    | Muestra la página con los valores predeterminados de las props. | N/A                               |
| `,e.jsx(n.strong,{children:"Loading"}),"    | Activa el estado de carga y muestra el spinner.                 | ",e.jsx(n.code,{children:"loading: true"}),", ",e.jsx(n.code,{children:"disabled: true"}),` |
| `,e.jsx(n.strong,{children:"Disabled"}),"   | Desactiva el botón de registro.                                 | ",e.jsx(n.code,{children:"disabled: true"}),`                  |
| `,e.jsx(n.strong,{children:"No Socials"})," | Muestra la página sin los iconos de autenticación social.       | ",e.jsx(n.code,{children:"showSocialIcons: false"}),`          |
| `,e.jsx(n.strong,{children:"Compact"}),"    | Muestra la página sin el texto legal de reCAPTCHA.              | ",e.jsx(n.code,{children:"showLegalText: false"}),`            |
| `,e.jsx(n.strong,{children:"CustomText"})," | Personaliza los textos de los botones y enlaces.                | ",e.jsx(n.code,{children:"buttonText"}),", ",e.jsx(n.code,{children:"loginText"}),", etc.   |"]}),`
`,e.jsx(n.h3,{id:"ejemplos-de-historias-storybook",children:"Ejemplos de Historias (Storybook)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// En SignUpPage.stories.tsx

// 1. Historia por Defecto (Hereda TODOS los args de 'meta')
export const Default: Story = {};

// 2. Estado de Carga (Solo definimos lo que CAMBIA)
export const Loading: Story = {
  args: {
    loading: true,
    buttonText: 'Registering...',
    disabled: true, // Desactivamos el botón durante el proceso de carga
  },
};

// 3. Estado Deshabilitado (Solo definimos lo que CAMBIA)
export const Disabled: Story = {
  args: {
    disabled: true,
    buttonText: 'Register (Disabled)',
  },
};
`})})]})}function c(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{c as default};
