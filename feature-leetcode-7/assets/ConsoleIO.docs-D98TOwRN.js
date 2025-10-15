import{j as n}from"./iframe-ClRr0LkW.js";import{useMDXComponents as r}from"./index-B2WVsRz5.js";import"./preload-helper-PPVm8Dsz.js";function o(s){const e={br:"br",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"consoleio",children:"ConsoleIO"}),`
`,n.jsxs(e.p,{children:["El componente ",n.jsx(e.strong,{children:"ConsoleIO"})," representa una ",n.jsx(e.strong,{children:"consola de entrada de datos con dos pestañas"}),": ",n.jsx(e.strong,{children:"Sample"})," y ",n.jsx(e.strong,{children:"Custom"}),".",n.jsx(e.br,{}),`
`,"Permite mostrar valores de ejemplo o personalizados, capturar los cambios mediante callbacks y mantener los tabs visibles incluso si el contenido es largo.",n.jsx(e.br,{}),`
`,"Está diseñado con ",n.jsx(e.strong,{children:"Material UI"}),", sigue principios de ",n.jsx(e.strong,{children:"accesibilidad (ARIA)"})," y diseño responsivo, y se integra fácilmente con Storybook y pruebas automatizadas."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"propósito",children:"Propósito"}),`
`,n.jsx(e.p,{children:"El componente se utiliza para simular la entrada de datos en una consola interactiva, ideal para:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Pruebas de casos de ejemplo en algoritmos."}),`
`,n.jsx(e.li,{children:"Entradas personalizadas del usuario."}),`
`,n.jsx(e.li,{children:"Integración con simulaciones educativas o evaluaciones interactivas."}),`
`,n.jsx(e.li,{children:"Mantener una UI limpia con scroll invisible en áreas de texto extensas."}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"sampleValue?: string"})}),n.jsx(e.br,{}),`
`,"Valor inicial de la pestaña ",n.jsx(e.strong,{children:"Sample"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"customValue?: string"})}),n.jsx(e.br,{}),`
`,"Valor inicial de la pestaña ",n.jsx(e.strong,{children:"Custom"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"onSampleChange?: (value: string) => void"})}),n.jsx(e.br,{}),`
`,"Callback que se ejecuta cuando cambia el valor en la pestaña ",n.jsx(e.strong,{children:"Sample"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"onCustomChange?: (value: string) => void"})}),n.jsx(e.br,{}),`
`,"Callback que se ejecuta cuando cambia el valor en la pestaña ",n.jsx(e.strong,{children:"Custom"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"defaultTab?: 'sample' | 'custom'"})}),n.jsx(e.br,{}),`
`,"Define cuál pestaña se muestra por defecto.",n.jsx(e.br,{}),`
`,"Valor por defecto: ",n.jsx(e.code,{children:"'sample'"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"height?: number | string"})}),n.jsx(e.br,{}),`
`,"Altura del contenedor de la consola.",n.jsx(e.br,{}),`
`,"Valor por defecto: ",n.jsx(e.code,{children:"502px"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"width?: number | string"})}),n.jsx(e.br,{}),`
`,"Ancho del contenedor de la consola.",n.jsx(e.br,{}),`
`,"Valor por defecto: ",n.jsx(e.code,{children:"100%"})," hasta un máximo de ",n.jsx(e.code,{children:"260px"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"data-testid?: string"})}),n.jsx(e.br,{}),`
`,"Identificador para pruebas unitarias con ",n.jsx(e.code,{children:"React Testing Library"}),"."]}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"ejemplo-básico-de-uso",children:"Ejemplo básico de uso"}),`
`,n.jsx(e.p,{children:"Este ejemplo muestra cómo usar el componente con valores de ejemplo y personalizados:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { ConsoleIO } from './ConsoleIO';

function App() {
  const handleSampleChange = (value: string) => {
    console.log('Sample changed:', value);
  };

  const handleCustomChange = (value: string) => {
    console.log('Custom changed:', value);
  };

  return (
    <ConsoleIO
      sampleValue={\`2\\n6 3\\n0 5 5 6 6 6\\n8 2\\n0 0 1 1 2 2 2 2\`}
      customValue="Aquí puedes ingresar tu propio texto"
      defaultTab="sample"
      height={502}
      width={260}
      onSampleChange={handleSampleChange}
      onCustomChange={handleCustomChange}
      data-testid="consoleio-root"
    />
  );
}
`})})]})}function c(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(o,{...s})}):o(s)}export{c as default};
