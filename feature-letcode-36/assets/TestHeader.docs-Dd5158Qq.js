import{j as e}from"./iframe-DNuoC9DH.js";import{useMDXComponents as o}from"./index-BPvNqeHr.js";import"./preload-helper-PPVm8Dsz.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"testheader",children:"TestHeader"}),`
`,e.jsxs(n.p,{children:["El componente ",e.jsx(n.strong,{children:"TestHeader"})," muestra la sección de identificación principal para un cuestionario o competencia, con un logo, título y subtítulo en un diseño limpio y responsivo. Se adapta automáticamente a vistas móviles y de escritorio, garantizando una experiencia consistente en todos los dispositivos."]}),`
`,e.jsx(n.h2,{id:"características",children:"Características"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Muestra un logo, título y subtítulo con espaciado y jerarquía consistentes."}),`
`,e.jsx(n.li,{children:"Totalmente responsivo: cambia a un diseño vertical (apilado) en pantallas pequeñas."}),`
`,e.jsxs(n.li,{children:["Variantes flexibles: soporta orientaciones horizontal y vertical mediante la propiedad ",e.jsx(n.code,{children:"variant"}),"."]}),`
`,e.jsx(n.li,{children:"Estado de carga: muestra placeholders (MUI Skeleton) mientras se cargan los datos."}),`
`,e.jsxs(n.li,{children:["Tamaños escalables: permite elegir entre ",e.jsx(n.code,{children:"small"}),", ",e.jsx(n.code,{children:"medium"})," o ",e.jsx(n.code,{children:"large"})," para el logo y el texto."]}),`
`,e.jsxs(n.li,{children:["Cumple con el sistema de diseño: utiliza componentes ",e.jsx(n.code,{children:"Box"}),", ",e.jsx(n.code,{children:"Card"})," y ",e.jsx(n.code,{children:"Typography"})," de MUI con tokens del tema."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accesible:"})," incluye roles semánticos, atributos ",e.jsx(n.code,{children:"alt"})," y descripciones ARIA para lectores de pantalla."]}),`
`]}),`
`,e.jsx(n.h2,{id:"propiedades",children:"Propiedades"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"logoSrc"})," (string, opcional): Ruta o URL de la imagen del logo. Muestra un placeholder si está vacío. Valor por defecto: logo predeterminado de TCS."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"title"}),' (string, opcional): Título principal del cuestionario o competencia. Valor por defecto: "TCS Quiz Competition".']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"subtitle"}),' (string, opcional): Texto descriptivo secundario mostrado debajo del título. Valor por defecto: "TCS Campus Drive - 2023".']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"variant"})," (horizontal | vertical, opcional): Controla la orientación del diseño. Valor por defecto: ",e.jsx(n.code,{children:"horizontal"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"size"})," (small | medium | large, opcional): Ajusta el tamaño del logo y la tipografía. Valor por defecto: ",e.jsx(n.code,{children:"medium"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"isLoading"})," (boolean, opcional): Muestra placeholders de carga si es ",e.jsx(n.code,{children:"true"}),". Valor por defecto: ",e.jsx(n.code,{children:"false"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"accesibilidad",children:"Accesibilidad"}),`
`,e.jsxs(n.p,{children:["El componente ",e.jsx(n.strong,{children:"TestHeader"})," ha sido diseñado siguiendo buenas prácticas de accesibilidad (A11y) para garantizar una experiencia inclusiva para todos los usuarios."]}),`
`,e.jsx(n.h3,{id:"implementación-en-el-código",children:"Implementación en el código"}),`
`,e.jsxs(n.p,{children:["Dentro del archivo ",e.jsx(n.code,{children:"TestHeader.tsx"}),", se aplican las siguientes medidas:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Rol semántico de cabecera:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<div role="banner" data-testid="header-wrapper" ...>
`})}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"ejemplo-de-uso",children:"Ejemplo de uso"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import TestHeader from '@/components/TestHeader';
import tcsLogo from './assets/tcs-logo.svg';

function Example() {
  return (
    <TestHeader
      logoSrc={tcsLogo}
      title="TCS Quiz Competition"
      subtitle="Campus Drive - 2023"
      variant="horizontal"
      size="medium"
    />
  );
}
`})})]})}function t(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{t as default};
