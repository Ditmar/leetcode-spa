import{j as e}from"./iframe-CEn1ZBP7.js";import{useMDXComponents as s}from"./index-DyNtegzv.js";import{M as r}from"./index-DMGJPAMX.js";import{P as i}from"./Button.stories-DcYmNLxY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bf4FHVoc.js";import"./index-B85ovEQ7.js";import"./index-Ct1CJF-j.js";import"./Button-Bem5xikL.js";import"./styled-BKjXqy8l.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components/PrimaryButton",of:i}),`
`,e.jsx(n.h1,{id:"primarybutton-component",children:"PrimaryButton Component"}),`
`,e.jsxs(n.p,{children:["El componente ",e.jsx(n.strong,{children:"PrimaryButton"})," está diseñado para ofrecer botones estilizados con soporte para variantes y tamaños."]}),`
`,e.jsx(n.h2,{id:"estructura-de-archivos",children:"Estructura de Archivos"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"PrimaryButton.tsx"}),": Contiene la implementación del componente."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"PrimaryButton.styles.ts"}),": Archivos con los estilos personalizados utilizando ",e.jsx(n.code,{children:"styled-components"})," de Material-UI."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"PrimaryButton.constants.ts"}),": Definiciones de constantes y enumeraciones de variantes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"PrimaryButton.test.tsx"}),": Pruebas unitarias del componente."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"PrimaryButton.stories.tsx"}),": Historias de Storybook para ver los diferentes estados y variantes del botón."]}),`
`]}),`
`,e.jsx(n.h2,{id:"propiedades",children:"Propiedades"}),`
`,e.jsxs(n.p,{children:["El componente ",e.jsx(n.strong,{children:"PrimaryButton"})," acepta las siguientes propiedades:"]}),`
`,e.jsxs(n.p,{children:[`| Propiedad  | Tipo             | Descripción                                                           |
|------------|------------------|-----------------------------------------------------------------------|
| `,e.jsx(n.code,{children:"$variant"})," | ",e.jsx(n.code,{children:"ButtonVariant"}),`  | Define el tipo de variante del botón (primario o secundario).         |
| `,e.jsx(n.code,{children:"$size"}),"    | ",e.jsx(n.code,{children:"ButtonSize"}),`     | Define el tamaño del botón.                                           |
| `,e.jsx(n.code,{children:"$shape"}),"   | ",e.jsx(n.code,{children:"ButtonShape"}),`    | Define la forma del botón (por ejemplo, redondeado).                   |
| `,e.jsx(n.code,{children:"$loading"})," | ",e.jsx(n.code,{children:"boolean"}),"        | Si es ",e.jsx(n.code,{children:"true"}),", muestra un indicador de carga en el botón.               |"]}),`
`,e.jsx(n.h2,{id:"estilos",children:"Estilos"}),`
`,e.jsxs(n.p,{children:["Los estilos del botón están definidos mediante ",e.jsx(n.code,{children:"styled-components"})," de Material-UI. Los colores y los gradientes se toman del tema, lo que permite personalizar fácilmente los colores del botón."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const getGradients = (theme: unknown): ButtonGradients => {
  if (typeof theme === 'object' && theme !== null && 'gradients' in theme) {
    const maybe = (theme as { gradients?: ButtonGradients }).gradients;
    return maybe ?? {};
  }
  return {};
};
`})})]})}function y(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{y as default};
