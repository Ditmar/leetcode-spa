import{H as o,B as r}from"./iframe-D4NL2jQP.js";import{e as T}from"./memoTheme-D8RofDGO.js";import{B as H}from"./Box-gFKjZ2qA.js";import{P as B}from"./Paper-BXSwlSKf.js";import{P as A}from"./Popper-D5VfC7_g.js";import{F}from"./Fade-CrJSceYE.js";import{u as N}from"./useForkRef-wumd-VD6.js";import{g as I}from"./getReactElementRef-BYc4Ml28.js";import{u as M}from"./useTimeout-BlWXe-6c.js";import{o as j}from"./Portal-DD9x7tgL.js";import{B as E}from"./Button-DW-VjbyU.js";import{T as z}from"./Tooltip-BYtNwMa0.js";import{T as k}from"./Typography-Dtns6REN.js";import{S as w}from"./Stack-BAM1HwIE.js";function S(e){return e.substring(2).toLowerCase()}function U(e,i){return i.documentElement.clientWidth<e.clientX||i.documentElement.clientHeight<e.clientY}function V(e){const{children:i,disableReactTree:v=!1,mouseEvent:d="onClick",onClickAway:x,touchEvent:l="onTouchEnd"}=e,u=o.useRef(!1),p=o.useRef(null),m=o.useRef(!1),g=o.useRef(!1);o.useEffect(()=>(setTimeout(()=>{m.current=!0},0),()=>{m.current=!1}),[]);const C=N(I(i),p),s=M(t=>{const n=g.current;g.current=!1;const a=j(p.current);if(!m.current||!p.current||"clientX"in t&&U(t,a))return;if(u.current){u.current=!1;return}let h;t.composedPath?h=t.composedPath().includes(p.current):h=!a.documentElement.contains(t.target)||p.current.contains(t.target),!h&&(v||!n)&&x(t)}),f=t=>n=>{g.current=!0;const a=i.props[t];a&&a(n)},c={ref:C};return l!==!1&&(c[l]=f(l)),o.useEffect(()=>{if(l!==!1){const t=S(l),n=j(p.current),a=()=>{u.current=!0};return n.addEventListener(t,s),n.addEventListener("touchmove",a),()=>{n.removeEventListener(t,s),n.removeEventListener("touchmove",a)}}},[s,l]),d!==!1&&(c[d]=f(d)),o.useEffect(()=>{if(d!==!1){const t=S(d),n=j(p.current);return n.addEventListener(t,s),()=>{n.removeEventListener(t,s)}}},[s,d]),o.cloneElement(i,c)}const W=200,L=300,q=200,$="bottom-start",Y=8,O=8;function X(){return typeof window>"u"?!1:"ontouchstart"in window||navigator.maxTouchPoints>0}const G=({openDelay:e=L,closeDelay:i=W,controlledOpen:v,onOpen:d,onClose:x,disabled:l=!1}={})=>{const u=v!==void 0,[p,m]=o.useState(!1),g=u?v:p,C=o.useRef(null),s=o.useRef(null),f=o.useRef(null),c=o.useRef(X()),t=o.useCallback(()=>{s.current!==null&&(clearTimeout(s.current),s.current=null),f.current!==null&&(clearTimeout(f.current),f.current=null)},[]),n=o.useCallback(()=>{l||(t(),u||m(!0),d?.())},[t,l,u,d]),a=o.useCallback(()=>{t(),u||m(!1),x?.()},[t,u,x]),h=o.useCallback(()=>{l||(t(),s.current=setTimeout(n,e))},[t,l,n,e]),b=o.useCallback(()=>{t(),f.current=setTimeout(a,i)},[t,a,i]);return o.useEffect(()=>()=>t(),[t]),{isOpen:g,anchorRef:C,triggerProps:{onMouseEnter:()=>{c.current||h()},onMouseLeave:()=>{c.current||b()},onFocus:()=>{c.current||h()},onBlur:()=>{c.current||b()},onClick:()=>{c.current&&(g?a():n())}},open:n,close:a}},J=T(B)(({theme:e})=>({backgroundColor:e.palette.background.paper,padding:e.spacing(2),borderRadius:typeof e.shape.borderRadius=="number"?e.shape.borderRadius*3:e.shape.borderRadius,boxShadow:e.shadows[4],outline:`1px solid ${e.palette.divider}`,overflowWrap:"break-word",wordBreak:"break-word",maxWidth:"maxWidth",[e.breakpoints.down("sm")]:{padding:e.spacing(1.5),width:`calc(100vw - ${e.spacing(4)})`}})),K=T("span")({display:"inline-block"}),Q=T(H)(({theme:e})=>({backgroundColor:e.palette.grey[100],minHeight:"100vh",padding:e.spacing(3)})),Z=T("h1")(({theme:e})=>({margin:0,fontWeight:700,fontSize:e.typography.h5.fontSize,lineHeight:e.typography.h5.lineHeight,color:e.palette.text.primary})),ee=T("p")(({theme:e})=>({margin:`${e.spacing(.5)} 0 ${e.spacing(3)}`,fontSize:e.typography.body2.fontSize,color:e.palette.text.secondary})),te=T(H)(({theme:e})=>({backgroundColor:e.palette.background.paper,borderRadius:typeof e.shape.borderRadius=="number"?e.shape.borderRadius*3:e.shape.borderRadius,padding:e.spacing(3),display:"inline-flex",flexDirection:"column",gap:e.spacing(1.5),border:`1px solid ${e.palette.divider}`})),re=(e,i=[0,O])=>[{name:"preventOverflow",options:{padding:e,boundary:"viewport"}},{name:"flip",options:{padding:e,fallbackPlacements:["top-start","bottom-end","top-end"]}},{name:"offset",options:{offset:i}}],P=({trigger:e,children:i,openDelay:v=W,closeDelay:d=L,PaperProps:x,maxWidth:l=280,placement:u=$,open:p,onOpen:m,onClose:g,disabled:C=!1,...s})=>{const{isOpen:f,anchorRef:c,triggerProps:t,close:n}=G({openDelay:v,closeDelay:d,controlledOpen:p,onOpen:m,onClose:g,disabled:C}),a=re(Y,[0,O]),h=o.isValidElement(e)?o.cloneElement(e,{ref:c,...t}):r.jsx(K,{ref:c,...t,children:e});return r.jsxs(r.Fragment,{children:[h,r.jsx(A,{open:f,anchorEl:c.current,placement:u,transition:!0,sx:{zIndex:b=>b.zIndex.modal},modifiers:a,disablePortal:s.disablePortal,keepMounted:s.keepMounted,children:({TransitionProps:b})=>r.jsx(F,{...b,timeout:q,children:r.jsx("div",{children:r.jsx(V,{onClickAway:n,children:r.jsx(J,{elevation:4,role:"tooltip",...x,sx:{maxWidth:l,...x?.sx??{}},children:i})})})})})]})};P.displayName="HoverCard";P.__docgenInfo={description:"@example",methods:[],displayName:"HoverCard",props:{openDelay:{defaultValue:{value:"200",computed:!1},required:!1},closeDelay:{defaultValue:{value:"300",computed:!1},required:!1},maxWidth:{defaultValue:{value:"280",computed:!1},required:!1},placement:{defaultValue:{value:"'bottom-start'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};function _(){return r.jsx(w,{spacing:1.5,sx:{minWidth:220},children:r.jsx(w,{direction:"row",spacing:1.5,alignItems:"center",children:r.jsxs(H,{children:[r.jsx(k,{variant:"subtitle2",fontWeight:700,children:"This is a Hover Card"}),r.jsx(k,{variant:"caption",color:"text.secondary",children:"This is a Hover Card from my PR"})]})})})}const oe={title:"component-catalog/HoverCard",component:P,argTypes:{trigger:{control:!1},children:{control:!1},PaperProps:{control:!1},openDelay:{control:{type:"number",min:0,max:2e3,step:50}},closeDelay:{control:{type:"number",min:0,max:2e3,step:50}},placement:{control:"select",options:["bottom-start","bottom","bottom-end","top-start","top","top-end","left-start","left","left-end","right-start","right","right-end"]},disabled:{control:"boolean"},maxWidth:{control:"number"}}},R={render:()=>r.jsxs(Q,{children:[r.jsx(Z,{children:"Tooltips & Hover Cards"}),r.jsx(ee,{children:"Contextual information on hover"}),r.jsxs(te,{children:[r.jsx(z,{title:"This is a Tooltip from my PR",placement:"right",arrow:!0,children:r.jsx(E,{variant:"outlined",sx:{borderRadius:2,textTransform:"none",fontWeight:500,justifyContent:"flex-start",minWidth:180},children:"Hover Tooltip"})}),r.jsx(P,{trigger:r.jsx(E,{variant:"outlined",sx:{borderRadius:2,textTransform:"none",fontWeight:500,justifyContent:"flex-start",minWidth:180},children:"Hover Card"}),openDelay:200,closeDelay:300,placement:"bottom-start",maxWidth:280,children:r.jsx(_,{})})]})]})},y={args:{openDelay:200,closeDelay:300,placement:"bottom-start",disabled:!1,maxWidth:280,trigger:r.jsx(E,{variant:"outlined",sx:{textTransform:"none",borderRadius:2},children:"Hover Card"}),children:r.jsx(_,{})}},D={args:{...y.args,openDelay:0,closeDelay:0,trigger:r.jsx(E,{variant:"outlined",sx:{textTransform:"none",borderRadius:2},children:"Hover Card"}),children:r.jsx(k,{variant:"body2",children:"Opens and closes without delay."})}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};const ne=["FigmaDemo","Default","NoDelay"],ye=Object.freeze(Object.defineProperty({__proto__:null,Default:y,FigmaDemo:R,NoDelay:D,__namedExportsOrder:ne,default:oe},Symbol.toStringTag,{value:"Module"}));export{y as D,D as N,ye as S};
