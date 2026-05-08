import{j as e}from"./iframe-CxSufmUV.js";import{s as c}from"./memoTheme-Bx2fLMyo.js";import{B as r}from"./Box-D6rzV6KQ.js";import{T as n}from"./Typography-ykz6LRYv.js";const d=c(r)(()=>({width:"100%",position:"relative",overflow:"hidden"})),m=c(r)(()=>({position:"absolute",inset:0,width:"100%",height:"100%",display:"flex"})),u=t=>{if(!t)return 1;if(typeof t=="number")return t;const o=t.includes("/")?"/":":",[s,i]=t.split(o).map(Number);return!s||!i?1:s/i},p=({ratio:t=1,children:o,sx:s})=>{const i=u(t);return e.jsx(d,{sx:{aspectRatio:i,width:"100%",minHeight:120,...s},children:e.jsx(m,{children:o})})};p.__docgenInfo={description:"",methods:[],displayName:"AspectRatio",props:{ratio:{required:!1,tsType:{name:"union",raw:"number | `${number}/${number}` | `${number}:${number}`",elements:[{name:"number"},{name:"literal",value:"`${number}/${number}`"},{name:"literal",value:"`${number}:${number}`"}]},description:"",defaultValue:{value:"1",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["BoxProps"]};const x={title:"Components/AspectRatio",component:p},l=({label:t})=>e.jsx(r,{sx:o=>({width:"100%",height:"100%",backgroundColor:o.palette.grey[300],borderRadius:o.spacing(.5),display:"flex",alignItems:"center",justifyContent:"center",color:o.palette.text.secondary,fontWeight:600}),children:t}),a={render:()=>e.jsxs(r,{sx:t=>({p:3,backgroundColor:t.palette.grey[100],minHeight:"100vh"}),children:[e.jsx(n,{variant:"h5",gutterBottom:!0,children:"Aspect Ratio"}),e.jsx(n,{variant:"body2",color:"text.secondary",sx:{mb:3},children:"Maintain aspect ratios"}),e.jsxs(r,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",md:"1fr 1fr"},gap:3,width:"100%",maxWidth:900},children:[e.jsxs(r,{children:[e.jsx(n,{mb:1,children:"16:9 Ratio"}),e.jsx(p,{ratio:"16/9",children:e.jsx(l,{label:"16:9"})})]}),e.jsxs(r,{children:[e.jsx(n,{mb:1,children:"1:1 Ratio"}),e.jsx(p,{ratio:"1/1",children:e.jsx(l,{label:"1:1"})})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={theme => ({
    p: 3,
    backgroundColor: theme.palette.grey[100],
    minHeight: '100vh'
  })}>
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
      maxWidth: 900
    }}>
        {/* 16:9 */}
        <Box>
          <Typography mb={1}>16:9 Ratio</Typography>

          <AspectRatio ratio="16/9">
            <DemoContent label="16:9" />
          </AspectRatio>
        </Box>

        {/* 1:1 */}
        <Box>
          <Typography mb={1}>1:1 Ratio</Typography>

          <AspectRatio ratio="1/1">
            <DemoContent label="1:1" />
          </AspectRatio>
        </Box>
      </Box>
    </Box>
}`,...a.parameters?.docs?.source}}};const h=["MultipleRatios"],R=Object.freeze(Object.defineProperty({__proto__:null,MultipleRatios:a,__namedExportsOrder:h,default:x},Symbol.toStringTag,{value:"Module"}));export{R as A,a as M};
