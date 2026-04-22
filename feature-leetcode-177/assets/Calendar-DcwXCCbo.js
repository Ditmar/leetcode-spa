import{j as e}from"./iframe-Cj4f5zk7.js";import{useMDXComponents as r}from"./index-y5YszAwQ.js";import{M as a,C as d,a as l}from"./index-BwtRZqj-.js";import{C as t,S as o,D as c,M as h,a as x,b as j,F as p}from"./Calendar.stories-BBm4wzfa.js";import"./preload-helper-BCwkP0sp.js";import"./index-BxKAQ_YB.js";import"./index-lDVqSe_7.js";import"./index-B_FO-4dC.js";import"./ButtonBase-D7xQUmxf.js";import"./Box-DOCqjkK-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./IconButton-CUHiI_Ar.js";import"./CircularProgress-X0hEkq4k.js";import"./useTheme-CNwWqQEe.js";import"./Fade-BZpMRPJ9.js";import"./createSvgIcon-ZFtWB0gP.js";function i(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:t}),`
`,e.jsx(n.h1,{id:"calendar",children:"Calendar"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"fully-responsive"}),", ",e.jsx(n.strong,{children:"accessible"}),` date-picker component built on
`,e.jsxs(n.a,{href:"https://mui.com/x/react-date-pickers/date-calendar/",rel:"nofollow",children:["MUI X ",e.jsx(n.code,{children:"DateCalendar"})]}),`
with the `,e.jsx(n.code,{children:"dayjs"})," adapter."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Calendar"})," component supports three selection modes via the ",e.jsx(n.code,{children:"mode"})," prop:"]}),`
`,e.jsxs(n.p,{children:[`| Mode     | Description                           |
| -------- | ------------------------------------- |
| `,e.jsx(n.code,{children:"single"}),` | Pick one date at a time (default)     |
| `,e.jsx(n.code,{children:"range"}),`  | Pick a start and an end date          |
| `,e.jsx(n.code,{children:"multi"}),"  | Toggle any number of individual dates |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Already in your project — just add MUI X and dayjs:
yarn add @mui/x-date-pickers dayjs
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Your project already ships ",e.jsx(n.code,{children:"@mui/material"})," v7 and ",e.jsx(n.code,{children:"@emotion/*"}),". No extra peer deps needed."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"quick-start",children:"Quick Start"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useState } from 'react';
import dayjs, { type Dayjs } from 'dayjs';
import { Calendar } from '@/components/Calendar';
import type { DateRange } from '@/components/Calendar/Calendar.types';

// Single date
function SingleExample() {
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  return <Calendar mode="single" value={date} onChange={setDate} />;
}

// Date range
function RangeExample() {
  const [range, setRange] = useState<DateRange>({ start: dayjs(), end: dayjs().add(7, 'day') });
  return <Calendar mode="range" value={range} onChange={setRange} />;
}

// Multi date
function MultiExample() {
  const [dates, setDates] = useState<Dayjs[]>([dayjs(), dayjs().add(3, 'day')]);
  return <Calendar mode="multi" value={dates} onChange={setDates} />;
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"stories",children:"Stories"}),`
`,e.jsx(n.h3,{id:"single-date",children:"Single Date"}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(n.h3,{id:"date-range",children:"Date Range"}),`
`,e.jsx(d,{of:c}),`
`,e.jsx(n.h3,{id:"multi-date",children:"Multi Date"}),`
`,e.jsx(d,{of:h}),`
`,e.jsx(n.h3,{id:"disabled-weekends",children:"Disabled Weekends"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"shouldDisableDate"})," to restrict selectable days."]}),`
`,e.jsx(d,{of:x}),`
`,e.jsx(n.h3,{id:"min--max-bounds",children:"Min / Max Bounds"}),`
`,e.jsx(n.p,{children:"Restrict navigation and selection to a date window."}),`
`,e.jsx(d,{of:j}),`
`,e.jsx(n.h3,{id:"full-width-at-320-px",children:"Full Width at 320 px"}),`
`,e.jsx(n.p,{children:"The calendar is fluid and meets WCAG 2.5.5 tap-target requirements at every viewport."}),`
`,e.jsx(d,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"controls",children:"Controls"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"prop-reference",children:"Prop Reference"}),`
`,e.jsx(n.h3,{id:"common-props-all-modes",children:"Common props (all modes)"}),`
`,e.jsxs(n.p,{children:[`| Prop                | Type                             | Default       | Description                               |
| ------------------- | -------------------------------- | ------------- | ----------------------------------------- |
| `,e.jsx(n.code,{children:"mode"}),"              | ",e.jsx(n.code,{children:"'single' \\| 'range' \\| 'multi'"})," | —             | ",e.jsx(n.strong,{children:"Required."}),` Selection mode.             |
| `,e.jsx(n.code,{children:"minDate"}),"           | ",e.jsx(n.code,{children:"Dayjs"}),`                          | —             | Earliest selectable date.                 |
| `,e.jsx(n.code,{children:"maxDate"}),"           | ",e.jsx(n.code,{children:"Dayjs"}),`                          | —             | Latest selectable date.                   |
| `,e.jsx(n.code,{children:"shouldDisableDate"})," | ",e.jsx(n.code,{children:"(day: Dayjs) => boolean"}),`        | —             | Predicate to disable individual days.     |
| `,e.jsx(n.code,{children:"fullWidth"}),"         | ",e.jsx(n.code,{children:"boolean"}),"                        | ",e.jsx(n.code,{children:"true"}),`        | Stretch to 100% of container width.       |
| `,e.jsx(n.code,{children:"aria-label"}),"        | ",e.jsx(n.code,{children:"string"}),"                         | mode-specific | Accessible label for the calendar widget. |"]}),`
`,e.jsxs(n.h3,{id:"modesingle-specific-props",children:[e.jsx(n.code,{children:'mode="single"'})," specific props"]}),`
`,e.jsxs(n.p,{children:[`| Prop       | Type                            | Description               |
| ---------- | ------------------------------- | ------------------------- |
| `,e.jsx(n.code,{children:"value"}),"    | ",e.jsx(n.code,{children:"Dayjs \\| null"}),`                 | Controlled selected date. |
| `,e.jsx(n.code,{children:"onChange"})," | ",e.jsx(n.code,{children:"(date: Dayjs \\| null) => void"})," | Fired on day click.       |"]}),`
`,e.jsxs(n.h3,{id:"moderange-specific-props",children:[e.jsx(n.code,{children:'mode="range"'})," specific props"]}),`
`,e.jsxs(n.p,{children:[`| Prop       | Type                                           | Description             |
| ---------- | ---------------------------------------------- | ----------------------- |
| `,e.jsx(n.code,{children:"value"}),"    | ",e.jsx(n.code,{children:"{ start: Dayjs \\| null; end: Dayjs \\| null }"}),` | Controlled range.       |
| `,e.jsx(n.code,{children:"onChange"})," | ",e.jsx(n.code,{children:"(range: DateRange) => void"}),"                   | Fired after each click. |"]}),`
`,e.jsxs(n.h3,{id:"modemulti-specific-props",children:[e.jsx(n.code,{children:'mode="multi"'})," specific props"]}),`
`,e.jsxs(n.p,{children:[`| Prop       | Type                       | Description                         |
| ---------- | -------------------------- | ----------------------------------- |
| `,e.jsx(n.code,{children:"value"}),"    | ",e.jsx(n.code,{children:"Dayjs[]"}),`                  | Controlled array of selected dates. |
| `,e.jsx(n.code,{children:"onChange"})," | ",e.jsx(n.code,{children:"(dates: Dayjs[]) => void"})," | Fired after each toggle.            |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Day grid uses ",e.jsx(n.code,{children:'role="grid"'})," / ",e.jsx(n.code,{children:'role="gridcell"'})," — screen-reader friendly."]}),`
`,e.jsxs(n.li,{children:["Arrow keys (",e.jsx(n.code,{children:"← → ↑ ↓"}),") move focus between day cells."]}),`
`,e.jsxs(n.li,{children:["Navigation arrows are reachable via ",e.jsx(n.code,{children:"Tab"})," and operable with ",e.jsx(n.code,{children:"Enter"})," / ",e.jsx(n.code,{children:"Space"}),"."]}),`
`,e.jsxs(n.li,{children:["All interactive elements display a ",e.jsx(n.code,{children:":focus-visible"})," ring styled from the MUI theme."]}),`
`,e.jsxs(n.li,{children:["Disabled days carry ",e.jsx(n.code,{children:'aria-disabled="true"'})," and are skipped by keyboard navigation."]}),`
`,e.jsxs(n.li,{children:["Component passes ",e.jsx(n.code,{children:"axe-core"})," / WCAG 2.1 AA checks (via ",e.jsx(n.code,{children:"@storybook/addon-a11y"}),")."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"responsive-behaviour",children:"Responsive Behaviour"}),`
`,e.jsxs(n.p,{children:[`| Viewport | Layout                                                   |
| -------- | -------------------------------------------------------- |
| 320 px   | Full-width, day cells ≥ 44 × 44 px (`,e.jsx(n.code,{children:"2.75rem"}),`)           |
| 375 px   | Full-width, comfortable spacing                          |
| 768 px   | Constrained to `,e.jsx(n.code,{children:"theme.spacing(48)"}),`, centred in container |
| 1024 px+ | Inline within parent layout, same max-width constraint   |`]}),`
`,e.jsxs(n.p,{children:["All sizing is expressed in ",e.jsx(n.code,{children:"theme.spacing()"})," or ",e.jsx(n.code,{children:"rem"})," — no hardcoded ",e.jsx(n.code,{children:"px"})," values."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"file-structure",children:"File Structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Calendar/
├── Calendar.tsx           # Component logic & JSX
├── Calendar.types.ts      # TypeScript interfaces extending MUI X
├── Calendar.constants.ts  # View enums, tap-target value, breakpoint aliases
├── Calendar.hook.ts       # useSingleDate / useDateRange / useMultiDate
├── Calendar.styles.ts     # MUI styled() components — no external CSS
├── Calendar.utils.ts      # Pure date helpers (format, range, multi)
├── Calendar.test.tsx      # Vitest + Testing Library test suite
├── Calendar.stories.tsx   # Storybook 9 CSF stories
└── Calendar.docs.mdx      # This file
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"stack",children:"Stack"}),`
`,e.jsxs(n.p,{children:[`| Package                     | Role                     |
| --------------------------- | ------------------------ |
| `,e.jsx(n.code,{children:"@mui/material"}),` v7          | Theme, Box, styled       |
| `,e.jsx(n.code,{children:"@mui/x-date-pickers"}),`       | DateCalendar, PickersDay |
| `,e.jsx(n.code,{children:"@emotion/react"})," / ",e.jsx(n.code,{children:"styled"}),` | CSS-in-JS runtime        |
| `,e.jsx(n.code,{children:"dayjs"}),`                     | Date manipulation        |
| `,e.jsx(n.code,{children:"AdapterDayjs"}),"              | MUI X ↔ dayjs bridge    |"]})]})}function F(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{F as default};
