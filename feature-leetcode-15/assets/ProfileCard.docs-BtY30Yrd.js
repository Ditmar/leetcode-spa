import{j as e}from"./jsx-runtime-xF634gn_.js";import{useMDXComponents as i}from"./index-o2KxC7bF.js";import"./index-C-7etoUd.js";function r(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"profilecard",children:"ProfileCard"}),`
`,e.jsx(n.p,{children:"Un componente reutilizable para mostrar la información de perfil de un usuario, incluyendo avatar, nombre, nombre de usuario, rol y estadísticas clave como cursos inscritos, puntos y ranking."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-descripción-general",children:"📋 Descripción general"}),`
`,e.jsxs(n.p,{children:["El componente ",e.jsx(n.code,{children:"ProfileCard"})," proporciona una forma flexible y personalizable de mostrar la información de un perfil de usuario. Admite múltiples variantes de tamaño y diseño, y maneja correctamente casos como avatares faltantes o nombres largos."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-características",children:"✨ Características"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Avatar Display:"})," Muestra el avatar del usuario con un fallback automático a iniciales o ícono por defecto"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"User Information:"})," Presenta nombre, nombre de usuario y rol opcional"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Statistics Section:"})," Muestra cursos, puntos y ranking con íconos descriptivos"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Size Variants:"})," Tres tamaños disponibles (pequeño, mediano y grande)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Layout Variants:"})," Tres diseños disponibles (por defecto, compacto y expandido)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Responsive Design:"})," Manejo automático de texto largo con truncamiento y tooltips"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessible:"})," Uso correcto de atributos ARIA y HTML semántico"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Customizable:"})," Soporte para clases CSS personalizadas y todas las props de MUI Card"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-instalación-y-uso",children:"📦 Instalación y uso"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ProfileCard } from '@/components/ProfileCard';
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-props",children:"🎯 Props"}),`
`,e.jsx(n.h3,{id:"props-requeridas",children:"Props Requeridas"}),`
`,e.jsxs(n.p,{children:[`| Prop | Tipo | Descripción |
|------|------|-------------|
| `,e.jsx(n.code,{children:"name"})," | ",e.jsx(n.code,{children:"string"}),` | Nombre completo del usuario |
| `,e.jsx(n.code,{children:"username"})," | ",e.jsx(n.code,{children:"string"})," | Nombre de usuario o handle |"]}),`
`,e.jsx(n.h3,{id:"props-opcionales",children:"Props Opcionales"}),`
`,e.jsxs(n.p,{children:[`| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"avatarUrl"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"undefined"}),` | URL del avatar del usuario |
| `,e.jsx(n.code,{children:"role"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"undefined"}),` | Rol o título del usuario |
| `,e.jsx(n.code,{children:"stats"})," | ",e.jsx(n.code,{children:"ProfileStatsProps"})," | ",e.jsx(n.code,{children:"{ courses: 0, points: 0, ranking: 0 }"}),` | Objeto con estadísticas del usuario |
| `,e.jsx(n.code,{children:"size"})," | ",e.jsx(n.code,{children:"'small' \\| 'medium' \\| 'large'"})," | ",e.jsx(n.code,{children:"'medium'"}),` | Tamaño del card |
| `,e.jsx(n.code,{children:"variant"})," | ",e.jsx(n.code,{children:"'default' \\| 'compact' \\| 'expanded'"})," | ",e.jsx(n.code,{children:"'default'"}),` | Variante de layout |
| `,e.jsx(n.code,{children:"showStats"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"}),` | Muestra u oculta la sección de estadísticas |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"undefined"}),` | Clase CSS personalizada |
| `,e.jsx(n.code,{children:"data-testid"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'profile-card'"})," | ID para testing |"]}),`
`,e.jsxs(n.h3,{id:"tipo-profilestatsprops",children:["Tipo ",e.jsx(n.code,{children:"ProfileStatsProps"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface ProfileStatsProps {
  courses: number;  // Número de cursos completados o inscritos
  points: number;   // Total de puntos acumulados
  ranking: number;  // Posición actual en el ranking (0 = sin ranking)
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-ejemplos-de-uso",children:"🚀 Ejemplos de uso"}),`
`,e.jsx(n.h3,{id:"ejemplo-básico",children:"Ejemplo básico"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ProfileCard } from '@/components/ProfileCard';

const MyComponent = () => {
  return (
    <ProfileCard
      name="John Doe"
      username="johndoe"
      role="Senior Developer"
      avatarUrl="https://example.com/avatar.jpg"
      stats={{ courses: 12, points: 3450, ranking: 23 }}
    />
  );
};
`})}),`
`,e.jsx(n.h3,{id:"sin-avatar-muestra-iniciales",children:"Sin avatar (muestra iniciales)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ProfileCard
  name="Michael Chen"
  username="mchen"
  role="Data Scientist"
  stats={{ courses: 15, points: 4200, ranking: 7 }}
/>
`})}),`
`,e.jsx(n.h3,{id:"sin-estadísticas",children:"Sin estadísticas"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ProfileCard
  name="Emily Davis"
  username="emilyd"
  role="Product Manager"
  showStats={false}
/>
`})}),`
`,e.jsx(n.h3,{id:"tamaño-pequeño-con-variante-compacta",children:"Tamaño pequeño con variante compacta"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ProfileCard
  name="Lisa Anderson"
  username="lisaa"
  role="UX Designer"
  size="small"
  variant="compact"
  stats={{ courses: 6, points: 1800, ranking: 89 }}
/>
`})}),`
`,e.jsx(n.h3,{id:"con-nombres-largos-truncamiento-automático",children:"Con nombres largos (truncamiento automático)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ProfileCard
  name="Alexander Christopher Montgomery III"
  username="verylongusernamethatexceedstheavailablespace"
  role="Chief Technology Officer"
  avatarUrl="https://example.com/avatar.jpg"
  stats={{ courses: 25, points: 8950, ranking: 1 }}
/>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-variantes-de-tamaño",children:"🎨 Variantes de tamaño"}),`
`,e.jsx(n.h3,{id:"small",children:"Small"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Avatar: 48px"}),`
`,e.jsx(n.li,{children:"Padding: 16px"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ideal para:"})," Listas densas, sidebars, comentarios"]}),`
`]}),`
`,e.jsx(n.h3,{id:"medium-default",children:"Medium (default)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Avatar: 64px"}),`
`,e.jsx(n.li,{children:"Padding: 20px"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ideal para:"})," Uso general, dashboards, grids"]}),`
`]}),`
`,e.jsx(n.h3,{id:"large",children:"Large"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Avatar: 80px"}),`
`,e.jsx(n.li,{children:"Padding: 24px"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ideal para:"})," Páginas de perfil, headers destacados"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-variantes-de-layout",children:"🔧 Variantes de layout"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Layout vertical centrado"}),`
`,e.jsx(n.li,{children:"Avatar arriba, información abajo"}),`
`,e.jsx(n.li,{children:"Estadísticas en fila horizontal"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ideal para:"})," Cards independientes, grids"]}),`
`]}),`
`,e.jsx(n.h3,{id:"compact",children:"Compact"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Layout horizontal"}),`
`,e.jsx(n.li,{children:"Avatar a la izquierda"}),`
`,e.jsx(n.li,{children:"Información a la derecha"}),`
`,e.jsx(n.li,{children:"Estadísticas en fila"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ideal para:"})," Listas de usuarios, comentarios, sidebars"]}),`
`]}),`
`,e.jsx(n.h3,{id:"expanded",children:"Expanded"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Layout vertical centrado"}),`
`,e.jsx(n.li,{children:"Estadísticas en columna vertical"}),`
`,e.jsx(n.li,{children:"Mayor espacio entre elementos"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ideal para:"})," Páginas de perfil detalladas, modales"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-accesibilidad",children:"♿ Accesibilidad"}),`
`,e.jsx(n.p,{children:"El componente incluye soporte completo de accesibilidad según WCAG 2.1:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["✅ ",e.jsx(n.strong,{children:"ARIA roles:"})," ",e.jsx(n.code,{children:'role="article"'})," para el card, ",e.jsx(n.code,{children:'role="region"'})," para estadísticas"]}),`
`,e.jsxs(n.li,{children:["✅ ",e.jsx(n.strong,{children:"ARIA labels:"})," ",e.jsx(n.code,{children:"aria-label"})," descriptivos para lectores de pantalla"]}),`
`,e.jsxs(n.li,{children:["✅ ",e.jsx(n.strong,{children:"Alt text:"})," Texto alternativo apropiado para avatares"]}),`
`,e.jsxs(n.li,{children:["✅ ",e.jsx(n.strong,{children:"Semantic HTML:"})," Estructura semántica correcta con heading para nombre"]}),`
`,e.jsxs(n.li,{children:["✅ ",e.jsx(n.strong,{children:"Keyboard navigation:"})," Totalmente navegable por teclado"]}),`
`,e.jsxs(n.li,{children:["✅ ",e.jsx(n.strong,{children:"Screen readers:"})," Optimizado para experiencia con lectores de pantalla"]}),`
`,e.jsxs(n.li,{children:["✅ ",e.jsx(n.strong,{children:"Title attributes:"})," Tooltips para texto truncado"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-personalización",children:"🎭 Personalización"}),`
`,e.jsx(n.h3,{id:"usando-classname",children:"Usando className"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ProfileCard
  className="custom-profile-card"
  name="Jane Doe"
  username="janedoe"
/>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.custom-profile-card {
  border: 2px solid #007bff;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
`})}),`
`,e.jsx(n.h3,{id:"usando-mui-sx-prop",children:"Usando MUI sx prop"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ProfileCard
  sx={{
    backgroundColor: 'background.paper',
    boxShadow: 3,
    '&:hover': {
      boxShadow: 6,
    },
  }}
  name="Jane Doe"
  username="janedoe"
/>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Nota:"})," Todos los estilos usan el sistema de diseño de MUI (",e.jsx(n.code,{children:"theme.spacing"}),", ",e.jsx(n.code,{children:"theme.palette"}),"). No se usan valores hardcodeados ni clases CSS externas."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-responsive-design",children:"📱 Responsive Design"}),`
`,e.jsx(n.p,{children:"El componente incluye breakpoints responsive automáticos:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mobile (< 600px):"})," Layout vertical forzado, tamaños reducidos"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tablet (600px - 960px):"})," Ajusta según variante seleccionada"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Desktop (> 960px):"})," Layout completo según configuración"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Los breakpoints usan el sistema de MUI (",e.jsx(n.code,{children:"theme.breakpoints"}),")."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-mejores-prácticas",children:"✅ Mejores prácticas"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Siempre proporciona name y username:"})," Son props requeridas"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Usa avatares cuando estén disponibles:"})," Mejora significativamente la UX"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Elige el tamaño apropiado:"})," Según el contexto y espacio disponible"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Considera la variante de layout:"})," Según el diseño de tu interfaz"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Oculta estadísticas si no son relevantes:"})," Usa ",e.jsx(n.code,{children:"showStats={false}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Proporciona stats completas:"})," Incluye courses, points y ranking"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Usa data-testid en tests:"})," Para facilitar las pruebas automatizadas"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Valida datos antes de pasar:"})," Asegúrate de que los números sean válidos"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-testing",children:"🧪 Testing"}),`
`,e.jsx(n.p,{children:"El componente está completamente testeado usando selectores semánticos. Ejemplos:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { render, screen } from '@testing-library/react';
import { ProfileCard } from './ProfileCard';

describe('ProfileCard', () => {
  it('renders correctly', () => {
    render(
      <ProfileCard
        name="John Doe"
        username="johndoe"
        role="Developer"
        stats={{ courses: 10, points: 2500, ranking: 15 }}
      />
    );

    // Usa selectores semánticos, no data-testid
    expect(screen.getByRole('article')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /john doe/i })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /user statistics/i })).toBeInTheDocument();
  });

  it('shows initials when no avatar', () => {
    render(
      <ProfileCard
        name="Jane Doe"
        username="janedoe"
      />
    );

    const avatar = screen.getByTestId('profile-avatar');
    expect(avatar).toHaveTextContent('JD');
  });
});
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Nota:"})," Se priorizan selectores semánticos (",e.jsx(n.code,{children:"getByRole"}),", ",e.jsx(n.code,{children:"getByText"}),") sobre ",e.jsx(n.code,{children:"getByTestId"})," para mejorar accesibilidad y robustez de las pruebas."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-troubleshooting",children:"🔍 Troubleshooting"}),`
`,e.jsx(n.h3,{id:"el-avatar-no-se-muestra",children:"El avatar no se muestra"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Verifica que la URL sea válida y accesible"}),`
`,e.jsx(n.li,{children:"Comprueba los CORS si la imagen es externa"}),`
`,e.jsx(n.li,{children:"Asegúrate de que el formato sea compatible (jpg, png, webp, gif)"}),`
`]}),`
`,e.jsx(n.h3,{id:"las-estadísticas-se-muestran-incorrectamente",children:"Las estadísticas se muestran incorrectamente"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Verifica que los valores sean números válidos (no strings)"}),`
`,e.jsxs(n.li,{children:["Asegúrate de pasar el objeto ",e.jsx(n.code,{children:"stats"})," completo con todos los campos"]}),`
`,e.jsxs(n.li,{children:["Comprueba que ",e.jsx(n.code,{children:"showStats"})," no sea ",e.jsx(n.code,{children:"false"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"el-texto-se-trunca-demasiado-pronto",children:"El texto se trunca demasiado pronto"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Verifica el ancho del contenedor padre"}),`
`,e.jsxs(n.li,{children:["Considera usar un tamaño más grande (",e.jsx(n.code,{children:'size="large"'}),")"]}),`
`,e.jsx(n.li,{children:"Los tooltips están incluidos automáticamente (usa hover para ver texto completo)"}),`
`]}),`
`,e.jsx(n.h3,{id:"los-estilos-no-se-aplican",children:"Los estilos no se aplican"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Asegúrate de tener ",e.jsx(n.code,{children:"ThemeProvider"})," de MUI a nivel superior"]}),`
`,e.jsx(n.li,{children:"Verifica que los estilos no sean sobrescritos por CSS global"}),`
`,e.jsxs(n.li,{children:["Comprueba la especificidad de CSS si usas ",e.jsx(n.code,{children:"className"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"rankings-no-se-formatean-correctamente",children:"Rankings no se formatean correctamente"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"El componente maneja automáticamente 1st, 2nd, 3rd, 4th, 11th, 21st, 22nd, 23rd, etc."}),`
`,e.jsx(n.li,{children:'Ranking 0 se muestra como "-" (sin ranking)'}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-detalles-de-implementación",children:"📝 Detalles de implementación"}),`
`,e.jsx(n.h3,{id:"formato-de-números",children:"Formato de números"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Los puntos usan separador de miles en formato US (ej: 2,500)"}),`
`,e.jsxs(n.li,{children:["Se usa ",e.jsx(n.code,{children:"toLocaleString('en-US')"})," para consistencia"]}),`
`]}),`
`,e.jsx(n.h3,{id:"formato-de-ranking",children:"Formato de ranking"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Usa sufijos ordinales correctos en inglés"}),`
`,e.jsx(n.li,{children:"Casos especiales: 11th, 12th, 13th (no 11st, 12nd, 13rd)"}),`
`,e.jsx(n.li,{children:"Números regulares: 1st, 2nd, 3rd, 4th, 21st, 22nd, 23rd, etc."}),`
`]}),`
`,e.jsx(n.h3,{id:"iniciales",children:"Iniciales"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Se generan automáticamente del nombre"}),`
`,e.jsx(n.li,{children:"Usa primera letra de primer y último nombre"}),`
`,e.jsx(n.li,{children:"Nombres de una palabra: solo primera letra"}),`
`,e.jsx(n.li,{children:'Fallback: "?" si no hay nombre válido'}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-componentes-relacionados",children:"🔗 Componentes relacionados"}),`
`,e.jsx(n.p,{children:"Componentes de MUI usados internamente:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Avatar:"})," Para mostrar imagen o iniciales"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Card:"})," Contenedor base del componente"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Typography:"})," Para texto consistente"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Box:"})," Para layouts flexibles"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icons (@mui/icons-material):"})," SchoolIcon, StarIcon, EmojiEventsIcon"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-recursos-adicionales",children:"📚 Recursos adicionales"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://mui.com/material-ui/react-card/",rel:"nofollow",children:"Documentación de MUI Card"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://mui.com/material-ui/react-avatar/",rel:"nofollow",children:"Documentación de MUI Avatar"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/",rel:"nofollow",children:"Guía de accesibilidad ARIA"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.componentdriven.org/",rel:"nofollow",children:"Component-Driven Development"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://testing-library.com/docs/queries/about/#priority",rel:"nofollow",children:"Testing Library Best Practices"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-contribuciones",children:"🤝 Contribuciones"}),`
`,e.jsx(n.p,{children:"Para contribuir al componente:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Sigue las convenciones CDD establecidas"}),`
`,e.jsx(n.li,{children:"Usa exportaciones nombradas (no default exports)"}),`
`,e.jsx(n.li,{children:"Añade tests con selectores semánticos"}),`
`,e.jsx(n.li,{children:"Actualiza la documentación MDX"}),`
`,e.jsxs(n.li,{children:["Usa ",e.jsx(n.code,{children:"theme.spacing"})," y ",e.jsx(n.code,{children:"theme.palette"})," (no valores hardcodeados)"]}),`
`,e.jsx(n.li,{children:"Mantén la accesibilidad (ARIA, roles, labels)"}),`
`,e.jsxs(n.li,{children:["Asegúrate de que los tests pasen: ",e.jsx(n.code,{children:"yarn test"})]}),`
`]})]})}function c(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{c as default};
