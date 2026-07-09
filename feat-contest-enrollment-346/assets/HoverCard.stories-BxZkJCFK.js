import{H as t,B as o}from"./iframe-CHN44os1.js";import{e as f}from"./memoTheme-BSGq_kzm.js";import{B as k}from"./Box-1JC36yOX.js";import{P as B}from"./Paper-ByrO4jrs.js";import{P as O}from"./Popper-DQ89u_DV.js";import{F as A}from"./Fade-C8FvEqLN.js";import{C as F}from"./ClickAwayListener-DCMfJpCd.js";import{B as D}from"./Button-BG4UtU_q.js";import{T as N}from"./Tooltip-DyhSfOR9.js";import{T as H}from"./Typography-OEVPT_GD.js";import{S as w}from"./Stack-DP6AdtBt.js";const W=200,S=300,I=200,L="bottom-start",z=8,E=8;function M(){return typeof window>"u"?!1:"ontouchstart"in window||navigator.maxTouchPoints>0}const U=({openDelay:e=S,closeDelay:i=W,controlledOpen:b,onOpen:y,onClose:g,disabled:l=!1}={})=>{const n=b!==void 0,[j,v]=t.useState(!1),T=n?b:j,P=t.useRef(null),s=t.useRef(null),d=t.useRef(null),a=t.useRef(M()),r=t.useCallback(()=>{s.current!==null&&(clearTimeout(s.current),s.current=null),d.current!==null&&(clearTimeout(d.current),d.current=null)},[]),c=t.useCallback(()=>{l||(r(),n||v(!0),y?.())},[r,l,n,y]),u=t.useCallback(()=>{r(),n||v(!1),g?.()},[r,n,g]),C=t.useCallback(()=>{l||(r(),s.current=setTimeout(c,e))},[r,l,c,e]),p=t.useCallback(()=>{r(),d.current=setTimeout(u,i)},[r,u,i]);return t.useEffect(()=>()=>r(),[r]),{isOpen:T,anchorRef:P,triggerProps:{onMouseEnter:()=>{a.current||C()},onMouseLeave:()=>{a.current||p()},onFocus:()=>{a.current||C()},onBlur:()=>{a.current||p()},onClick:()=>{a.current&&(T?u():c())}},open:c,close:u}},V=f(B)(({theme:e})=>({backgroundColor:e.palette.background.paper,padding:e.spacing(2),borderRadius:typeof e.shape.borderRadius=="number"?e.shape.borderRadius*3:e.shape.borderRadius,boxShadow:e.shadows[4],outline:`1px solid ${e.palette.divider}`,overflowWrap:"break-word",wordBreak:"break-word",maxWidth:"maxWidth",[e.breakpoints.down("sm")]:{padding:e.spacing(1.5),width:`calc(100vw - ${e.spacing(4)})`}})),q=f("span")({display:"inline-block"}),$=f(k)(({theme:e})=>({backgroundColor:e.palette.grey[100],minHeight:"100vh",padding:e.spacing(3)})),Y=f("h1")(({theme:e})=>({margin:0,fontWeight:700,fontSize:e.typography.h5.fontSize,lineHeight:e.typography.h5.lineHeight,color:e.palette.text.primary})),G=f("p")(({theme:e})=>({margin:`${e.spacing(.5)} 0 ${e.spacing(3)}`,fontSize:e.typography.body2.fontSize,color:e.palette.text.secondary})),J=f(k)(({theme:e})=>({backgroundColor:e.palette.background.paper,borderRadius:typeof e.shape.borderRadius=="number"?e.shape.borderRadius*3:e.shape.borderRadius,padding:e.spacing(3),display:"inline-flex",flexDirection:"column",gap:e.spacing(1.5),border:`1px solid ${e.palette.divider}`})),K=(e,i=[0,E])=>[{name:"preventOverflow",options:{padding:e,boundary:"viewport"}},{name:"flip",options:{padding:e,fallbackPlacements:["top-start","bottom-end","top-end"]}},{name:"offset",options:{offset:i}}],R=({trigger:e,children:i,openDelay:b=W,closeDelay:y=S,PaperProps:g,maxWidth:l=280,placement:n=L,open:j,onOpen:v,onClose:T,disabled:P=!1,...s})=>{const{isOpen:d,anchorRef:a,triggerProps:r,close:c}=U({openDelay:b,closeDelay:y,controlledOpen:j,onOpen:v,onClose:T,disabled:P}),u=K(z,[0,E]),C=t.isValidElement(e)?t.cloneElement(e,{ref:a,...r}):o.jsx(q,{ref:a,...r,children:e});return o.jsxs(o.Fragment,{children:[C,o.jsx(O,{open:d,anchorEl:a.current,placement:n,transition:!0,sx:{zIndex:p=>p.zIndex.modal},modifiers:u,disablePortal:s.disablePortal,keepMounted:s.keepMounted,children:({TransitionProps:p})=>o.jsx(A,{...p,timeout:I,children:o.jsx("div",{children:o.jsx(F,{onClickAway:c,children:o.jsx(V,{elevation:4,role:"tooltip",...g,sx:{maxWidth:l,...g?.sx??{}},children:i})})})})})]})};R.displayName="HoverCard";R.__docgenInfo={description:"@example",methods:[],displayName:"HoverCard",props:{openDelay:{defaultValue:{value:"200",computed:!1},required:!1},closeDelay:{defaultValue:{value:"300",computed:!1},required:!1},maxWidth:{defaultValue:{value:"280",computed:!1},required:!1},placement:{defaultValue:{value:"'bottom-start'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};function _(){return o.jsx(w,{spacing:1.5,sx:{minWidth:220},children:o.jsx(w,{direction:"row",spacing:1.5,alignItems:"center",children:o.jsxs(k,{children:[o.jsx(H,{variant:"subtitle2",fontWeight:700,children:"This is a Hover Card"}),o.jsx(H,{variant:"caption",color:"text.secondary",children:"This is a Hover Card from my PR"})]})})})}const Q={title:"component-catalog/HoverCard",component:R,argTypes:{trigger:{control:!1},children:{control:!1},PaperProps:{control:!1},openDelay:{control:{type:"number",min:0,max:2e3,step:50}},closeDelay:{control:{type:"number",min:0,max:2e3,step:50}},placement:{control:"select",options:["bottom-start","bottom","bottom-end","top-start","top","top-end","left-start","left","left-end","right-start","right","right-end"]},disabled:{control:"boolean"},maxWidth:{control:"number"}}},x={render:()=>o.jsxs($,{children:[o.jsx(Y,{children:"Tooltips & Hover Cards"}),o.jsx(G,{children:"Contextual information on hover"}),o.jsxs(J,{children:[o.jsx(N,{title:"This is a Tooltip from my PR",placement:"right",arrow:!0,children:o.jsx(D,{variant:"outlined",sx:{borderRadius:2,textTransform:"none",fontWeight:500,justifyContent:"flex-start",minWidth:180},children:"Hover Tooltip"})}),o.jsx(R,{trigger:o.jsx(D,{variant:"outlined",sx:{borderRadius:2,textTransform:"none",fontWeight:500,justifyContent:"flex-start",minWidth:180},children:"Hover Card"}),openDelay:200,closeDelay:300,placement:"bottom-start",maxWidth:280,children:o.jsx(_,{})})]})]})},m={args:{openDelay:200,closeDelay:300,placement:"bottom-start",disabled:!1,maxWidth:280,trigger:o.jsx(D,{variant:"outlined",sx:{textTransform:"none",borderRadius:2},children:"Hover Card"}),children:o.jsx(_,{})}},h={args:{...m.args,openDelay:0,closeDelay:0,trigger:o.jsx(D,{variant:"outlined",sx:{textTransform:"none",borderRadius:2},children:"Hover Card"}),children:o.jsx(H,{variant:"body2",children:"Opens and closes without delay."})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <DemoPageRoot>
      <DemoPageTitle>Tooltips &amp; Hover Cards</DemoPageTitle>
      <DemoPageSubtitle>Contextual information on hover</DemoPageSubtitle>

      <DemoTriggerContainer>
        {}
        <Tooltip title="This is a Tooltip from my PR" placement="right" arrow>
          <Button variant="outlined" sx={{
          borderRadius: 2,
          textTransform: 'none',
          fontWeight: 500,
          justifyContent: 'flex-start',
          minWidth: 180
        }}>
            Hover Tooltip
          </Button>
        </Tooltip>

        {}
        <HoverCard trigger={<Button variant="outlined" sx={{
        borderRadius: 2,
        textTransform: 'none',
        fontWeight: 500,
        justifyContent: 'flex-start',
        minWidth: 180
      }}>
              Hover Card
            </Button>} openDelay={200} closeDelay={300} placement="bottom-start" maxWidth={280}>
          <UserCard />
        </HoverCard>
      </DemoTriggerContainer>
    </DemoPageRoot>
}`,...x.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    openDelay: 200,
    closeDelay: 300,
    placement: 'bottom-start',
    disabled: false,
    maxWidth: 280,
    trigger: <Button variant="outlined" sx={{
      textTransform: 'none',
      borderRadius: 2
    }}>
        Hover Card
      </Button>,
    children: <UserCard />
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    openDelay: 0,
    closeDelay: 0,
    trigger: <Button variant="outlined" sx={{
      textTransform: 'none',
      borderRadius: 2
    }}>
        Hover Card
      </Button>,
    children: <Typography variant="body2">Opens and closes without delay.</Typography>
  }
}`,...h.parameters?.docs?.source}}};const X=["FigmaDemo","Default","NoDelay"],ue=Object.freeze(Object.defineProperty({__proto__:null,Default:m,FigmaDemo:x,NoDelay:h,__namedExportsOrder:X,default:Q},Symbol.toStringTag,{value:"Module"}));export{m as D,h as N,ue as S};
