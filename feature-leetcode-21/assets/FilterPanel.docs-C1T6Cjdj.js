import{j as e}from"./iframe-DQhRnWGi.js";import{useMDXComponents as a}from"./index-LVmQKMJ1.js";import"./FilterPanel-DYqCvVqM.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-B5baH0_b.js";import"./Box-DMxmtKy8.js";function o(l){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...a(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"filterpanel",children:"FilterPanel"}),`
`,e.jsxs(n.p,{children:["El componente ",e.jsx(n.code,{children:"FilterPanel"})," permite seleccionar un filtro entre varias opciones, mostrando el estado seleccionado y disparando un callback al cambiar."]}),`
`,e.jsx(n.h2,{id:"ejemplo-básico",children:"Ejemplo básico"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<FilterPanel
  filters={DEFAULT_FILTERS}
  selectedValue="all"
  onSelect={(value) => alert(\`Seleccionado: \${value}\`)}
/>
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:[`| Prop           | Tipo                                      | Descripción                                 |
|----------------|-------------------------------------------|---------------------------------------------|
| filters        | `,e.jsx(n.code,{children:"{ label: string; value: string }[]"}),`       | Lista de opciones de filtro                 |
| selectedValue  | `,e.jsx(n.code,{children:"string"}),`                                  | Valor actualmente seleccionado              |
| onSelect       | `,e.jsx(n.code,{children:"(value: string) => void"}),`                  | Callback al seleccionar un filtro           |
| panelVariant   | `,e.jsx(n.code,{children:"'primary' | 'secondary'"}),`                  | Variante de color del panel (opcional)      |
| size           | `,e.jsx(n.code,{children:"'medium' | 'large' | 'xlarge'"}),"            | Tamaño de los botones (opcional)            |"]}),`
`,e.jsx(n.h2,{id:"ejemplo-con-variante-secundaria",children:"Ejemplo con variante secundaria"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<FilterPanel
  filters={DEFAULT_FILTERS}
  selectedValue="submitted"
  onSelect={(value) => console.log(value)}
  panelVariant="secondary"
/>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Puedes personalizar el panel usando las props ",e.jsx(n.code,{children:"panelVariant"})," para adaptarlo a tu diseño, ademas de poder determinar el color por el global."]}),`
`]})]})}function p(l={}){const{wrapper:n}={...a(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(o,{...l})}):o(l)}export{p as default};
