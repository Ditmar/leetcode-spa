import{j as e}from"./iframe-CaQK_4Z9.js";import{useMDXComponents as t}from"./index-zaaNMmyz.js";import{T as o}from"./TestCard-CjT8ljxM.js";import"./preload-helper-PPVm8Dsz.js";import"./styled-D4K7uuE0.js";import"./Card-D-AQDvdM.js";import"./memoTheme--ZqcCiNG.js";import"./Paper-jOCSX4si.js";import"./useTheme-BGNiwR14.js";import"./useSlot-C5FqI0KW.js";import"./useForkRef-DIbOZPp9.js";import"./ButtonBase-DJRDXSj0.js";function s(i){const n={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"-testcard--interactive-visual-card",children:"🧩 TestCard — Interactive Visual Card"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"TestCard"})," component displays an image (or React node) with a title and description, either overlaid or arranged horizontally.",e.jsx(n.br,{}),`
`,"It is designed for use cases where you want to highlight visual elements (such as products, users, or courses) with an elegant, accessible, and adaptable appearance."]}),`
`,e.jsxs(n.p,{children:["This component uses ",e.jsx(n.code,{children:"CardActionArea"})," internally to ensure keyboard accessibility and supports ",e.jsx(n.code,{children:"onSelect"})," as a standard React mouse event handler."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-vertical-example",children:"🌆 Vertical Example"}),`
`,e.jsx(o,{logo:"https://i.postimg.cc/KckvLBVj/codigo.jpg"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-horizontal-example",children:"🧭 Horizontal Example"}),`
`,e.jsx(o,{logo:"https://i.postimg.cc/xTFCBQZ6/istockphoto-1164357236-612x612.jpg",orientation:"horizontal"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"️-interaction-with-onselect",children:"🖱️ Interaction with onSelect"}),`
`,e.jsxs(n.p,{children:["You can handle clicks with ",e.jsx(n.code,{children:"onSelect"})," 👇"]}),`
`,e.jsx(o,{logo:"https://i.postimg.cc/KckvLBVj/codigo.jpg",onSelect:r=>console.log("Card clicked",r)}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["✅ ",e.jsx(n.code,{children:"onSelect"})," uses ",e.jsx(n.code,{children:"React.MouseEvent<HTMLButtonElement>"})," so you can access the event if needed."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-double-card-comparison",children:"🧩 Double Card (Comparison)"}),`
`,e.jsx(n.p,{children:"Example showing two cards side by side with different images and descriptions."}),`
`,e.jsxs("div",{style:{display:"flex",gap:"24px",justifyContent:"center",flexWrap:"wrap"},children:[e.jsx(o,{logo:"https://i.postimg.cc/KckvLBVj/codigo.jpg",title:"Card A",description:"Based on main Figma design"}),e.jsx(o,{logo:"https://i.postimg.cc/FRZFpXcM/X-tipos-de-lenguaje-de-programaci-n-m-s-buscados-por-las-empresas.jpg",title:"Card B",description:"Second card with a different image"})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"️-main-props",children:"⚙️ Main Props"}),`
`,e.jsxs(n.p,{children:[`| Property      | Type                                         | Description                                                         |
| ------------- | -------------------------------------------- | ------------------------------------------------------------------- |
| `,e.jsx(n.code,{children:"logo"}),"        | ",e.jsx(n.code,{children:"string \\| ReactNode"}),`                        | Main image or React node displayed in the card.                     |
| `,e.jsx(n.code,{children:"title"}),"       | ",e.jsx(n.code,{children:"string"}),`                                     | Title displayed in overlay.                                         |
| `,e.jsx(n.code,{children:"description"})," | ",e.jsx(n.code,{children:"string"}),`                                     | Descriptive text shown in overlay.                                  |
| `,e.jsx(n.code,{children:"orientation"})," | ",e.jsx(n.code,{children:"'vertical' \\| 'horizontal'"}),"                 | Layout orientation of the card. Defaults to ",e.jsx(n.code,{children:"'vertical'"}),`.           |
| `,e.jsx(n.code,{children:"onSelect"}),"    | ",e.jsx(n.code,{children:"React.MouseEventHandler<HTMLButtonElement>"}),` | Function called when the card is clicked, receives the click event. |
| `,e.jsx(n.code,{children:"cardProps"}),"   | ",e.jsx(n.code,{children:"Omit<CardProps, 'onClick'>"}),"                 | Optional props to pass to the underlying MUI ",e.jsx(n.code,{children:"Card"})," component.      |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-usage-recommendations",children:"💡 Usage Recommendations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use images with similar proportions (ideally ",e.jsx(n.strong,{children:"202×285 px"}),") for consistent presentation."]}),`
`,e.jsx(n.li,{children:"Avoid overly long titles or descriptions."}),`
`,e.jsx(n.li,{children:"Ideal for interactive panels, dashboards, or galleries."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onSelect"})," allows keyboard and mouse accessibility."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"-code-example",children:"🧠 Code Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { TestCard } from '@/components/TestCard';

export const Example = () => (
  <TestCard
    logo="https://i.postimg.cc/KckvLBVj/codigo.jpg"
    title="My Card"
    description="Usage example inside a React application"
    orientation="vertical"
    onSelect={(event) => console.log('Card clicked!', event)}
  />
);
`})})]})}function y(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{y as default};
