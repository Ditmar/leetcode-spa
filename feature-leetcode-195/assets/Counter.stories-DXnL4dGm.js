import{r as c,b as s,a as t}from"./iframe-Buz5lkfP.js";import"./preload-helper-PPVm8Dsz.js";function a(){const[r,n]=c.useState(1);return s("div",{children:[s("p",{children:["Count: ",r]}),t("button",{onClick:()=>{n(r+1)},children:"Increment"})]})}a.__docgenInfo={description:"",methods:[],displayName:"Counter"};const u={title:"UI/Counter",component:a,parameters:{layout:"centered"},tags:["autodocs"]},e={},o={decorators:[r=>t("div",{style:{padding:"2rem",backgroundColor:"#f0f0f0",borderRadius:"8px"},children:t(r,{})})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    padding: '2rem',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};const m=["Default","WithCustomStyling"];export{e as Default,o as WithCustomStyling,m as __namedExportsOrder,u as default};
