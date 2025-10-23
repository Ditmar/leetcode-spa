import{j as e}from"./iframe-BX28-QpQ.js";import{useMDXComponents as i}from"./index-yOuJe4Qc.js";import"./preload-helper-PPVm8Dsz.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"página-de-clasificación-leaderboardpage",children:"Página de Clasificación (LeaderboardPage)"}),`
`,e.jsx(n.p,{children:"La página de clasificación muestra a los usuarios con mejor rendimiento en función de sus puntos, actividad reciente y desempeño en las pruebas."}),`
`,e.jsx(n.h2,{id:"descripción-general",children:"Descripción General"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"LeaderboardPage"})," es un componente de nivel superior que renderiza una vista de clasificación con soporte para búsqueda, ordenamiento, filtrado y diseño adaptable a diferentes tamaños de pantalla."]}),`
`,e.jsx(n.h2,{id:"comportamiento-del-componente",children:"Comportamiento del Componente"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Carga de datos"}),": Obtiene la información de los usuarios desde un hook personalizado ",e.jsx(n.code,{children:"useLeaderboard"}),", que simula una llamada a API."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Búsqueda"}),": Permite filtrar usuarios por nombre completo o nombre de usuario mediante el componente ",e.jsx(n.code,{children:"SearchBar"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ordenamiento"}),": Soporta orden por puntos (",e.jsx(n.code,{children:"points"}),"), pruebas aprobadas (",e.jsx(n.code,{children:"testsPassed"}),") o actividad reciente (",e.jsx(n.code,{children:"recentActivity"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Filtros"}),": Ofrece opciones de filtrado por período de tiempo y categoría."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Responsive Design"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["En escritorio (",e.jsx(n.code,{children:"md"})," o superior) muestra los datos en una tabla (",e.jsx(n.code,{children:"LeaderboardTable"}),")."]}),`
`,e.jsxs(n.li,{children:["En dispositivos móviles muestra tarjetas (",e.jsx(n.code,{children:"RankingList"}),")."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Usuario actual"}),": Destaca visualmente al usuario autenticado con un fondo diferenciado."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Manejo de errores y carga"}),": Muestra mensajes amigables y botones de reintento si la carga falla."]}),`
`]}),`
`,e.jsx(n.h2,{id:"propiedades-y-tipos",children:"Propiedades y Tipos"}),`
`,e.jsxs(n.p,{children:["El componente no recibe props directamente, sino que administra su propio estado mediante el hook ",e.jsx(n.code,{children:"useLeaderboard"}),"."]}),`
`,e.jsxs(n.h3,{id:"interfaz-user",children:["Interfaz ",e.jsx(n.code,{children:"User"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface User {
  id: string;
  rank: number;
  avatar?: string;
  fullName: string;
  username: string;
  points: number;
  testsPassed: number;
  recentActivity?: string;
  isCurrentUser?: boolean;
}
`})}),`
`,e.jsxs(n.h3,{id:"interfaz-leaderboardfilters",children:["Interfaz ",e.jsx(n.code,{children:"LeaderboardFilters"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface LeaderboardFilters {
  search: string;
  sortBy: 'points' | 'testsPassed' | 'recentActivity';
  timePeriod?: 'all' | 'week' | 'month' | 'year';
  category?: string;
}
`})}),`
`,e.jsx(n.h2,{id:"ejemplo-de-uso",children:"Ejemplo de Uso"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { LeaderboardPage } from './components/LeaderboardPage';

export default function App() {
  return <LeaderboardPage />;
}
`})}),`
`,e.jsx(n.h2,{id:"accesibilidad",children:"Accesibilidad"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Se recomienda que los componentes internos (",e.jsx(n.code,{children:"LeaderboardTable"}),", ",e.jsx(n.code,{children:"RankingList"}),") utilicen atributos ",e.jsx(n.code,{children:"aria-label"})," y roles semánticos (",e.jsx(n.code,{children:"table"}),", ",e.jsx(n.code,{children:"row"}),", ",e.jsx(n.code,{children:"cell"}),")."]}),`
`,e.jsxs(n.li,{children:["Los elementos interactivos deben incluir ",e.jsx(n.code,{children:'aria-current="true"'})," para el usuario actual y ",e.jsx(n.code,{children:"aria-label"})," para botones de paginación."]}),`
`]}),`
`,e.jsx(n.h2,{id:"buenas-prácticas",children:"Buenas Prácticas"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Mantener el hook ",e.jsx(n.code,{children:"useLeaderboard"})," desacoplado de la UI para permitir pruebas unitarias."]}),`
`,e.jsxs(n.li,{children:["Asegurar que los estilos sean consistentes con el tema de MUI (",e.jsx(n.code,{children:"theme.spacing"}),", ",e.jsx(n.code,{children:"theme.palette"}),")."]}),`
`,e.jsx(n.li,{children:"Incluir pruebas automatizadas de accesibilidad y renderizado para cada subcomponente."}),`
`]})]})}function c(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{c as default};
