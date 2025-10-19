import{j as e}from"./iframe-RR7BU3fE.js";import{useMDXComponents as o}from"./index-C4a36iSC.js";import"./preload-helper-PPVm8Dsz.js";function r(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"donutprogress",children:"DonutProgress"}),`
`,e.jsx(n.p,{children:"A circular progress indicator component that displays progress as a percentage in a donut chart format."}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic color schemes"}),": Changes color based on progress thresholds in 'auto' mode"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Theme integration"}),": Uses MUI theme palette colors (primary, success, error, warning)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessible"}),": Full ARIA support with progressbar role and appropriate attributes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Customizable"}),": Adjustable size, stroke width, and colors"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Animated"}),": Smooth transitions for progress changes (optional)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Compact"}),": Default size of 38x38px, perfect for dashboards and compact UIs"]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';
import { DonutProgress } from './DonutProgress';

// Basic usage with auto color mode (default 38x38px)
<DonutProgress percentage={28} />

// High progress with auto color (turns green)
<DonutProgress percentage={75} />

// With theme palette color
<DonutProgress percentage={75} color="success" />

// Custom size and styling
<DonutProgress 
  percentage={60} 
  size={100} 
  strokeWidth={15}
  animated={false}
/>

// With custom CSS color
<DonutProgress percentage={85} color="#9c27b0" />
`})}),`
`,e.jsx(n.h2,{id:"color-modes",children:"Color Modes"}),`
`,e.jsx(n.h3,{id:"auto-mode-default",children:"Auto Mode (default)"}),`
`,e.jsxs(n.p,{children:["In ",e.jsx(n.code,{children:'color="auto"'})," mode, the component automatically adjusts color based on percentage:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Red"})," (< 50%): Indicates low progress - ",e.jsx(n.code,{children:"#D32F2F"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Orange"})," (50-74%): Indicates medium progress - ",e.jsx(n.code,{children:"#FB8C00"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Green"})," (≥ 75%): Indicates high progress - ",e.jsx(n.code,{children:"#2E7D32"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"theme-palette-colors",children:"Theme Palette Colors"}),`
`,e.jsxs(n.p,{children:["Use MUI theme palette tokens: ",e.jsx(n.code,{children:"primary"}),", ",e.jsx(n.code,{children:"success"}),", ",e.jsx(n.code,{children:"error"}),", ",e.jsx(n.code,{children:"warning"})]}),`
`,e.jsx(n.p,{children:"These colors are automatically mapped to your theme's palette:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<DonutProgress percentage={75} color="primary" />  // Uses theme.palette.primary.main
<DonutProgress percentage={90} color="success" />  // Uses theme.palette.success.main
<DonutProgress percentage={25} color="error" />    // Uses theme.palette.error.main
<DonutProgress percentage={60} color="warning" />  // Uses theme.palette.warning.main
`})}),`
`,e.jsx(n.h3,{id:"custom-colors",children:"Custom Colors"}),`
`,e.jsx(n.p,{children:"Pass any valid CSS color string (hex, rgb, hsl, etc.):"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<DonutProgress percentage={50} color="#9c27b0" />
<DonutProgress percentage={50} color="rgb(156, 39, 176)" />
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"percentage"})," | ",e.jsx(n.code,{children:"number"}),` | required | Progress value (0-100, values are clamped) |
| `,e.jsx(n.code,{children:"color"})," | ",e.jsx(n.code,{children:"'auto' \\| ColorName \\| string"})," | ",e.jsx(n.code,{children:"'auto'"}),` | Color scheme |
| `,e.jsx(n.code,{children:"size"})," | ",e.jsx(n.code,{children:"number"})," | ",e.jsx(n.code,{children:"38"}),` | Diameter in pixels (Figma spec) |
| `,e.jsx(n.code,{children:"strokeWidth"})," | ",e.jsx(n.code,{children:"number"})," | ",e.jsx(n.code,{children:"6"}),` | Progress stroke width in pixels |
| `,e.jsx(n.code,{children:"animated"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"})," | Enable smooth transitions |"]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:"The component implements proper accessibility:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Uses ",e.jsx(n.code,{children:'role="progressbar"'})," for screen reader support"]}),`
`,e.jsxs(n.li,{children:["Includes ",e.jsx(n.code,{children:"aria-valuenow"}),", ",e.jsx(n.code,{children:"aria-valuemin"}),", and ",e.jsx(n.code,{children:"aria-valuemax"})," attributes"]}),`
`,e.jsxs(n.li,{children:["Provides descriptive ",e.jsx(n.code,{children:"aria-label"}),' (e.g., "Progress: 75%")']}),`
`,e.jsxs(n.li,{children:["Visual text is marked ",e.jsx(n.code,{children:"aria-hidden"})," to avoid duplication"]}),`
`,e.jsx(n.li,{children:"Keyboard navigable and fully accessible"}),`
`]}),`
`,e.jsx(n.h2,{id:"design-specifications",children:"Design Specifications"}),`
`,e.jsx(n.p,{children:"Based on Figma design system:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default size"}),": 38x38px"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default stroke width"}),": 6px"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Font"}),": Inherits from theme (Poppins recommended)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Font weight"}),": 500 (Medium)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Colors"}),": Theme-aware with fallbacks"]}),`
`]}),`
`,e.jsx(n.h2,{id:"theme-integration",children:"Theme Integration"}),`
`,e.jsx(n.p,{children:"The component integrates with your MUI theme and can use custom theme tokens:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// In your theme configuration
const theme = createTheme({
  palette: {
    donutProgress: {
      track: 'rgba(200, 200, 200, 0.3)',
      trackDark: 'rgba(107, 104, 104, 0.3)',
      low: '#D32F2F',
      medium: '#FB8C00',
      high: '#2E7D32',
      text: 'rgba(0, 0, 0, 0.87)',
      textDark: '#FFFFFF',
    },
  },
  typography: {
    donutProgress: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '8px',  // Scales with component size
      fontWeight: 500,
      lineHeight: 1,
    },
  },
});
`})}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"dashboard-usage",children:"Dashboard Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Box display="flex" gap={2}>
  <DonutProgress percentage={28} color="auto" />
  <DonutProgress percentage={75} color="auto" />
</Box>
`})}),`
`,e.jsx(n.h3,{id:"large-display",children:"Large Display"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<DonutProgress 
  percentage={85} 
  color="success"
  size={200}
  strokeWidth={30}
/>
`})}),`
`,e.jsx(n.h3,{id:"disabled-animation",children:"Disabled Animation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<DonutProgress 
  percentage={60} 
  animated={false}
/>
`})}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:'color="auto"'})," for data-driven visualizations"]}),`
`,e.jsxs(n.li,{children:["Use theme colors (",e.jsx(n.code,{children:"primary"}),", ",e.jsx(n.code,{children:"success"}),", etc.) for branded components"]}),`
`,e.jsx(n.li,{children:"Keep default size (38px) for compact layouts"}),`
`,e.jsx(n.li,{children:"Use larger sizes (100px+) for prominent displays"}),`
`,e.jsx(n.li,{children:"Disable animation when rendering many instances for performance"}),`
`]}),`
`,e.jsx(n.h2,{id:"browser-support",children:"Browser Support"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Chrome/Edge: ✅ Full support"}),`
`,e.jsx(n.li,{children:"Firefox: ✅ Full support"}),`
`,e.jsx(n.li,{children:"Safari: ✅ Full support"}),`
`,e.jsx(n.li,{children:"Mobile browsers: ✅ Full support"}),`
`]}),`
`,e.jsx(n.h2,{id:"see-also",children:"See Also"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#",children:"Storybook Examples"})," - Interactive demos"]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://mui.com/material-ui/customization/theming/",rel:"nofollow",children:"MUI Theme Documentation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/meter/",rel:"nofollow",children:"ARIA Progressbar Pattern"})}),`
`]})]})}function t(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{t as default};
