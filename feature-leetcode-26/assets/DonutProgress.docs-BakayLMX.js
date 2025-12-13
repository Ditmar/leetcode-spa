import{j as e}from"./iframe-BYnqHnf9.js";import{useMDXComponents as s}from"./index-Dlwsqb3J.js";import"./preload-helper-PPVm8Dsz.js";function o(r){const n={code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"donutprogress",children:"DonutProgress"}),`
`,e.jsx(n.p,{children:"A circular progress indicator component that displays progress as a percentage in a donut chart format."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic color schemes"}),": Changes color based on progress thresholds in 'auto' mode"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Theme integration"}),": Uses MUI theme palette colors (primary, success, error, warning)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessible"}),": Full ARIA support with progressbar role and appropriate attributes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Customizable"}),": Adjustable size, stroke width, and colors"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Animated"}),": Smooth transitions for progress changes (optional)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Compact"}),": Default size of 38x38px, perfect for dashboards and compact UIs"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @mui/material @emotion/react @emotion/styled
Basic Usage
tsx
import React from 'react';
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
Props
Prop	Type	Default	Description
percentage	number	required	Progress value (0-100, values are clamped)
color	'auto' | 'primary' | 'success' | 'error' | 'warning' | string	'auto'	Color scheme for the progress indicator
size	number	38	Diameter in pixels
strokeWidth	number	6	Progress stroke width in pixels
animated	boolean	true	Enable smooth transitions
Color Modes
Auto Mode (default)
In color="auto" mode, the component automatically adjusts color based on percentage:

Red (< 50%): #D21515

Orange (50-74%): #FB8C00

Green (≥ 75%): #0DD715

Theme Palette Colors
Use MUI theme palette tokens: primary, success, error, warning

These colors are automatically mapped to your theme's palette:

tsx
<DonutProgress percentage={75} color="primary" />  // Uses theme.palette.primary.main
<DonutProgress percentage={90} color="success" />  // Uses theme.palette.success.main
<DonutProgress percentage={25} color="error" />    // Uses theme.palette.error.main
<DonutProgress percentage={60} color="warning" />  // Uses theme.palette.warning.main
Custom Colors
Pass any valid CSS color string (hex, rgb, hsl, etc.):

tsx
<DonutProgress percentage={50} color="#9c27b0" />
<DonutProgress percentage={50} color="rgb(156, 39, 176)" />
Examples
Dashboard Usage
tsx
import { Box } from '@mui/material';
import { DonutProgress } from './DonutProgress';

function Dashboard() {
  return (
    <Box display="flex" gap={2}>
      <DonutProgress percentage={28} color="auto" />
      <DonutProgress percentage={60} color="auto" />
      <DonutProgress percentage={85} color="auto" />
    </Box>
  );
}
Status Indicators
tsx
import { Stack, Box, Typography } from '@mui/material';
import { DonutProgress } from './DonutProgress';

function StatusIndicators() {
  return (
    <Stack direction="row" spacing={3}>
      <Box>
        <Typography variant="caption">Server Health</Typography>
        <DonutProgress percentage={92} color="success" />
      </Box>
      <Box>
        <Typography variant="caption">Memory Usage</Typography>
        <DonutProgress percentage={68} color="warning" />
      </Box>
      <Box>
        <Typography variant="caption">Error Rate</Typography>
        <DonutProgress percentage={15} color="error" />
      </Box>
    </Stack>
  );
}
Multiple Sizes
tsx
import { Box } from '@mui/material';
import { DonutProgress } from './DonutProgress';

function SizeComparison() {
  return (
    <Box display="flex" gap={4} alignItems="center">
      <DonutProgress percentage={75} size={24} strokeWidth={4} />
      <DonutProgress percentage={75} size={38} />
      <DonutProgress percentage={75} size={64} strokeWidth={10} />
      <DonutProgress percentage={75} size={120} strokeWidth={18} />
    </Box>
  );
}
Without Animation
tsx
import { DonutProgress } from './DonutProgress';

function StaticProgress() {
  return (
    <DonutProgress 
      percentage={60} 
      animated={false}
    />
  );
}
Accessibility
The component implements proper accessibility:

Uses role="progressbar" for screen reader support

Includes aria-valuenow, aria-valuemin, and aria-valuemax attributes

Provides descriptive aria-label (e.g., "Progress: 75%")

Visual text is marked aria-hidden to avoid duplication

Keyboard navigable and fully accessible

Dark Mode Support
The track color automatically adjusts based on theme mode:

typescript
// Light mode
trackColor: 'rgba(200, 200, 200, 0.3)'

// Dark mode  
trackColor: 'rgba(107, 104, 104, 0.3)'
Edge Cases Handling
The component intelligently handles edge cases:

tsx
// Negative values are clamped to 0
<DonutProgress percentage={-50} />  // Displays 0%

// Values over 100 are clamped to 100
<DonutProgress percentage={150} />  // Displays 100%

// Decimal values are rounded
<DonutProgress percentage={45.7} />  // Displays 46%
<DonutProgress percentage={45.4} />  // Displays 45%
Best Practices
Use color="auto" for data-driven visualizations where color indicates status

Use theme colors (primary, success, etc.) for branded components

Keep default size (38px) for compact layouts and dashboards

Use larger sizes (100px+) for prominent hero displays

Disable animation when rendering multiple instances for performance

Browser Support
Chrome/Edge: ✅ Full support

Firefox: ✅ Full support

Safari: ✅ Full support

Mobile browsers: ✅ Full support

File Structure
text
DonutProgress/
├── DonutProgress.tsx          # Main component
├── DonutProgress.types.ts     # TypeScript types
├── DonutProgress.constants.ts # Configuration constants
├── DonutProgress.styles.ts    # Styled components
├── DonutProgress.hook.ts      # useDonutColor hook
├── DonutProgress.test.tsx     # Unit tests
└── DonutProgress.stories.tsx  # Storybook stories
Related Resources
`})})]})}function c(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{c as default};
