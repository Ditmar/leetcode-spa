import{j as e}from"./iframe-MChe8Sk-.js";import{useMDXComponents as t}from"./index-DPeJJMkp.js";import{M as a,C as s,S as o}from"./index-BXYP33Gl.js";import{T as c}from"./TestExecutionPage.stories-C5KtnheB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dly0CiF6.js";import"./index-CXww-IMm.js";import"./index-D5oWENfN.js";import"./Button-Du7I5N0j.js";import"./styled-B3tOFZ84.js";import"./memoTheme-D8qkuffd.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./ButtonBase-Bu5JEoBA.js";import"./useForkRef-CuQl-QY0.js";import"./CircularProgress-DTy8RJcJ.js";import"./CountdownTimer-BT_93lPk.js";import"./Box-B-7HSNXH.js";import"./Typography-DU_cI_vs.js";function r(i){const n={br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c,title:"Pages/TestExecutionPage"}),`
`,e.jsx(n.h1,{id:"testexecutionpage",children:"TestExecutionPage"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"TestExecutionPage"})," permite a los usuarios ejecutar un test tipo ",e.jsx(n.em,{children:"LeetCode"})," con:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Preguntas de opción múltiple."}),`
`,e.jsx(n.li,{children:"Preguntas de programación con editor de código."}),`
`,e.jsx(n.li,{children:"Temporizador global del test."}),`
`,e.jsx(n.li,{children:"Navegación entre preguntas."}),`
`,e.jsx(n.li,{children:"Envío de respuestas a una API (mock)."}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.h3,{id:"testid-string-requerido",children:[e.jsx(n.code,{children:"testId: string"})," ",e.jsx(n.em,{children:"(requerido)"})]}),`
`,e.jsxs(n.p,{children:["Identificador del test a ejecutar.",e.jsx(n.br,{}),`
`,"En este ejemplo se usa un mock almacenado en ",e.jsx(n.code,{children:"TestExecutionPage.constants.ts"}),", pero en un escenario real se puede reemplazar por una llamada a API que obtenga la configuración del test desde el backend."]}),`
`,e.jsx(n.h3,{id:"onsubmitted-testid-string--void",children:e.jsx(n.code,{children:"onSubmitted?: (testId: string) => void"})}),`
`,e.jsxs(n.p,{children:["Callback opcional que se ejecuta cuando el test se envía correctamente.",e.jsx(n.br,{}),`
`,"Puede usarse para navegación (por ejemplo, redirigir a un resumen de resultados) o para tracking (analytics)."]}),`
`,e.jsx(n.p,{children:"Si no se define, el envío se realiza pero no se ejecuta ninguna acción adicional."}),`
`,e.jsx(n.h2,{id:"composición",children:"Composición"}),`
`,e.jsx(n.p,{children:"La página se construye a partir de los siguientes componentes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"NavigationSidebar"})," para la navegación lateral entre preguntas."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DonutProgress"})," para mostrar el avance del test."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CountdownTimer"})," para mostrar el tiempo restante."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"AnswerOption"})," para las respuestas de opción múltiple."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ConsoleIO"})," (o un editor equivalente) para las preguntas de programación."]}),`
`]}),`
`,e.jsx(n.p,{children:"Las decisiones de diseño siguen las convenciones CDD del proyecto:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Estilos con MUI (",e.jsx(n.code,{children:"styled"})," y ",e.jsx(n.code,{children:"sx"}),")."]}),`
`,e.jsx(n.li,{children:"Tipado estricto con TypeScript."}),`
`,e.jsx(n.li,{children:"Layout responsivo adaptado a mobile y desktop."}),`
`]}),`
`,e.jsx(n.h2,{id:"accesibilidad",children:"Accesibilidad"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Las opciones de respuesta usan ",e.jsx(n.code,{children:"AnswerOption"}),", que expone atributos ARIA (por ejemplo ",e.jsx(n.code,{children:"aria-pressed"})," o ",e.jsx(n.code,{children:"aria-checked"}),") para comunicar el estado seleccionado a lectores de pantalla."]}),`
`,e.jsx(n.li,{children:"La navegación entre preguntas y el temporizador son accesibles mediante teclado."}),`
`]}),`
`,e.jsx(n.h2,{id:"ejemplos",children:"Ejemplos"}),`
`,e.jsx(n.h3,{id:"test-completo-opción-múltiple--código",children:"Test completo (opción múltiple + código)"}),`
`,e.jsx(s,{children:e.jsx(o,{id:"pages-testexecutionpage--multiple-choice-and-code"})}),`
`,e.jsx(n.h3,{id:"vista-móvil",children:"Vista móvil"}),`
`,e.jsx(s,{children:e.jsx(o,{id:"pages-testexecutionpage--mobile-view"})})]})}function A(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{A as default};
