import{j as e,E as d}from"./iframe-DuM1ZD4a.js";import{s as c}from"./memoTheme-D4sBX-KZ.js";import{B as r}from"./Box-C7W6aTn5.js";import{T as n}from"./Typography-Dw3OduMW.js";const m=c(r)({width:"100%",position:"relative",overflow:"hidden"}),x=c(r)({position:"absolute",inset:0,width:"100%",height:"100%",display:"flex"}),u=t=>{if(t==null)return 1;if(typeof t=="number")return t;const o=t.includes("/")?"/":":",[i,s]=t.split(o).map(Number);return Number.isNaN(i)||Number.isNaN(s)||s===0?1:i/s},p=({ratio:t=1,children:o,sx:i})=>{const s=u(t);return e.jsx(m,{sx:{aspectRatio:s,minHeight:d.spacing(15),...i},children:e.jsx(x,{children:o})})};p.__docgenInfo={description:"",methods:[],displayName:"AspectRatio",props:{ratio:{required:!1,tsType:{name:"union",raw:"number | `${number}/${number}` | `${number}:${number}`",elements:[{name:"number"},{name:"literal",value:"`${number}/${number}`"},{name:"literal",value:"`${number}:${number}`"}]},description:"",defaultValue:{value:"1",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["BoxProps"]};const h={title:"Components/AspectRatio",component:p},l=({label:t})=>e.jsx(r,{sx:o=>({width:"100%",height:"100%",backgroundColor:o.palette.grey[300],borderRadius:o.spacing(.5),display:"flex",alignItems:"center",justifyContent:"center",color:o.palette.text.secondary,fontWeight:o.typography.fontWeightMedium}),children:t}),a={render:()=>e.jsxs(r,{sx:{p:3},children:[e.jsx(n,{variant:"h5",gutterBottom:!0,children:"Aspect Ratio"}),e.jsx(n,{variant:"body2",color:"text.secondary",sx:{mb:3},children:"Maintain aspect ratios"}),e.jsxs(r,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",md:"1fr 1fr"},gap:3,width:"100%",maxWidth:"900px"},children:[e.jsxs(r,{children:[e.jsx(n,{sx:{mb:1},children:"16:9 Ratio"}),e.jsx(p,{ratio:"16/9",children:e.jsx(l,{label:"16:9"})})]}),e.jsxs(r,{children:[e.jsx(n,{sx:{mb:1},children:"1:1 Ratio"}),e.jsx(p,{ratio:"1/1",children:e.jsx(l,{label:"1:1"})})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 3
  }}>
      {/* Header */}
      <Typography variant="h5" gutterBottom>
        Aspect Ratio
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{
      mb: 3
    }}>
        Maintain aspect ratios
      </Typography>

      {/* Ratios */}
      <Box sx={{
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',
        md: '1fr 1fr'
      },
      gap: 3,
      width: '100%',
      maxWidth: '900px'
    }}>
        {/* 16:9 */}
        <Box>
          <Typography sx={{
          mb: 1
        }}>16:9 Ratio</Typography>

          <AspectRatio ratio="16/9">
            <DemoContent label="16:9" />
          </AspectRatio>
        </Box>

        {/* 1:1 */}
        <Box>
          <Typography sx={{
          mb: 1
        }}>1:1 Ratio</Typography>

          <AspectRatio ratio="1/1">
            <DemoContent label="1:1" />
          </AspectRatio>
        </Box>
      </Box>
    </Box>
}`,...a.parameters?.docs?.source}}};const y=["MultipleRatios"],j=Object.freeze(Object.defineProperty({__proto__:null,MultipleRatios:a,__namedExportsOrder:y,default:h},Symbol.toStringTag,{value:"Module"}));export{j as S};
