import{r as l,_ as Te,e as H,c as x,j as N,b as re,s as Q}from"./iframe-D0HkvEHP.js";import{a as ae,s as Z,g as ve,c as Pe}from"./memoTheme-Hsc52r-A.js";import{_ as Ve,b as Be,T as ie,d as Se,a as we,u as oe,c as _}from"./useTimeout-3kA3z-RC.js";function De(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ee(e,t){var i=function(o){return t&&l.isValidElement(o)?t(o):o},a=Object.create(null);return e&&l.Children.map(e,function(n){return n}).forEach(function(n){a[n.key]=i(n)}),a}function Le(e,t){e=e||{},t=t||{};function i(d){return d in t?t[d]:e[d]}var a=Object.create(null),n=[];for(var o in e)o in t?n.length&&(a[o]=n,n=[]):n.push(o);var s,c={};for(var u in t){if(a[u])for(s=0;s<a[u].length;s++){var p=a[u][s];c[a[u][s]]=i(p)}c[u]=i(u)}for(s=0;s<n.length;s++)c[n[s]]=i(n[s]);return c}function k(e,t,i){return i[t]!=null?i[t]:e.props[t]}function je(e,t){return ee(e.children,function(i){return l.cloneElement(i,{onExited:t.bind(null,i),in:!0,appear:k(i,"appear",e),enter:k(i,"enter",e),exit:k(i,"exit",e)})})}function ke(e,t,i){var a=ee(e.children),n=Le(t,a);return Object.keys(n).forEach(function(o){var s=n[o];if(l.isValidElement(s)){var c=o in t,u=o in a,p=t[o],d=l.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[o]=l.cloneElement(s,{onExited:i.bind(null,s),in:!0,exit:k(s,"exit",e),enter:k(s,"enter",e)}):!u&&c&&!d?n[o]=l.cloneElement(s,{in:!1}):u&&c&&l.isValidElement(p)&&(n[o]=l.cloneElement(s,{onExited:i.bind(null,s),in:p.props.in,exit:k(s,"exit",e),enter:k(s,"enter",e)}))}}),n}var Ne=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},$e={component:"div",childFactory:function(t){return t}},te=(function(e){Ve(t,e);function t(a,n){var o;o=e.call(this,a,n)||this;var s=o.handleExited.bind(De(o));return o.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},o}var i=t.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,o){var s=o.children,c=o.handleExited,u=o.firstRender;return{children:u?je(n,c):ke(n,s,c),firstRender:!1}},i.handleExited=function(n,o){var s=ee(this.props.children);n.key in s||(n.props.onExited&&n.props.onExited(o),this.mounted&&this.setState(function(c){var u=Te({},c.children);return delete u[n.key],{children:u}}))},i.render=function(){var n=this.props,o=n.component,s=n.childFactory,c=Be(n,["component","childFactory"]),u=this.state.contextValue,p=Ne(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,o===null?H.createElement(ie.Provider,{value:u},p):H.createElement(ie.Provider,{value:u},H.createElement(o,c,p))},t})(H.Component);te.propTypes={};te.defaultProps=$e;function se(e){try{return e.matches(":focus-visible")}catch{}return!1}class G{static create(){return new G}static use(){const t=Se(G.create).current,[i,a]=l.useState(!1);return t.shouldMount=i,t.setShouldMount=a,l.useEffect(t.mountEffect,[i]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=Ie(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...t){this.mount().then(()=>this.ref.current?.start(...t))}stop(...t){this.mount().then(()=>this.ref.current?.stop(...t))}pulsate(...t){this.mount().then(()=>this.ref.current?.pulsate(...t))}}function Fe(){return G.use()}function Ie(){let e,t;const i=new Promise((a,n)=>{e=a,t=n});return i.resolve=e,i.reject=t,i}function Ue(e){const{className:t,classes:i,pulsate:a=!1,rippleX:n,rippleY:o,rippleSize:s,in:c,onExited:u,timeout:p}=e,[d,h]=l.useState(!1),M=x(t,i.ripple,i.rippleVisible,a&&i.ripplePulsate),P={width:s,height:s,top:-(s/2)+o,left:-(s/2)+n},b=x(i.child,d&&i.childLeaving,a&&i.childPulsate);return!c&&!d&&h(!0),l.useEffect(()=>{if(!c&&u!=null){const w=setTimeout(u,p);return()=>{clearTimeout(w)}}},[u,c,p]),N.jsx("span",{className:M,style:P,children:N.jsx("span",{className:b})})}const g=ae("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,ze=80,Oe=Q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Ae=Q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Xe=Q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Ye=Z("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Ke=Z(Ue,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${g.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Oe};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${g.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${g.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${g.childLeaving} {
    opacity: 0;
    animation-name: ${Ae};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${g.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Xe};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,We=l.forwardRef(function(t,i){const a=re({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:o={},className:s,...c}=a,[u,p]=l.useState([]),d=l.useRef(0),h=l.useRef(null);l.useEffect(()=>{h.current&&(h.current(),h.current=null)},[u]);const M=l.useRef(!1),P=we(),b=l.useRef(null),w=l.useRef(null),C=l.useCallback(f=>{const{pulsate:y,rippleX:R,rippleY:I,rippleSize:D,cb:U}=f;p(E=>[...E,N.jsx(Ke,{classes:{ripple:x(o.ripple,g.ripple),rippleVisible:x(o.rippleVisible,g.rippleVisible),ripplePulsate:x(o.ripplePulsate,g.ripplePulsate),child:x(o.child,g.child),childLeaving:x(o.childLeaving,g.childLeaving),childPulsate:x(o.childPulsate,g.childPulsate)},timeout:J,pulsate:y,rippleX:R,rippleY:I,rippleSize:D},d.current)]),d.current+=1,h.current=U},[o]),$=l.useCallback((f={},y={},R=()=>{})=>{const{pulsate:I=!1,center:D=n||y.pulsate,fakeElement:U=!1}=y;if(f?.type==="mousedown"&&M.current){M.current=!1;return}f?.type==="touchstart"&&(M.current=!0);const E=U?null:w.current,V=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let B,T,S;if(D||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)B=Math.round(V.width/2),T=Math.round(V.height/2);else{const{clientX:z,clientY:L}=f.touches&&f.touches.length>0?f.touches[0]:f;B=Math.round(z-V.left),T=Math.round(L-V.top)}if(D)S=Math.sqrt((2*V.width**2+V.height**2)/3),S%2===0&&(S+=1);else{const z=Math.max(Math.abs((E?E.clientWidth:0)-B),B)*2+2,L=Math.max(Math.abs((E?E.clientHeight:0)-T),T)*2+2;S=Math.sqrt(z**2+L**2)}f?.touches?b.current===null&&(b.current=()=>{C({pulsate:I,rippleX:B,rippleY:T,rippleSize:S,cb:R})},P.start(ze,()=>{b.current&&(b.current(),b.current=null)})):C({pulsate:I,rippleX:B,rippleY:T,rippleSize:S,cb:R})},[n,C,P]),Y=l.useCallback(()=>{$({},{pulsate:!0})},[$]),F=l.useCallback((f,y)=>{if(P.clear(),f?.type==="touchend"&&b.current){b.current(),b.current=null,P.start(0,()=>{F(f,y)});return}b.current=null,p(R=>R.length>0?R.slice(1):R),h.current=y},[P]);return l.useImperativeHandle(i,()=>({pulsate:Y,start:$,stop:F}),[Y,$,F]),N.jsx(Ye,{className:x(g.root,o.root,s),ref:w,...c,children:N.jsx(te,{component:null,exit:!0,children:u})})});function He(e){return ve("MuiButtonBase",e)}const _e=ae("MuiButtonBase",["root","disabled","focusVisible"]),Ge=e=>{const{disabled:t,focusVisible:i,focusVisibleClassName:a,classes:n}=e,s=Pe({root:["root",t&&"disabled",i&&"focusVisible"]},He,n);return i&&a&&(s.root+=` ${a}`),s},qe=Z("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${_e.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),et=l.forwardRef(function(t,i){const a=re({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:o=!1,children:s,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:P,LinkComponent:b="a",onBlur:w,onClick:C,onContextMenu:$,onDragLeave:Y,onFocus:F,onFocusVisible:f,onKeyDown:y,onKeyUp:R,onMouseDown:I,onMouseLeave:D,onMouseUp:U,onTouchEnd:E,onTouchMove:V,onTouchStart:B,tabIndex:T=0,TouchRippleProps:S,touchRippleRef:z,type:L,...O}=a,A=l.useRef(null),m=Fe(),le=oe(m.ref,z),[j,K]=l.useState(!1);p&&j&&K(!1),l.useImperativeHandle(n,()=>({focusVisible:()=>{K(!0),A.current.focus()}}),[]);const ue=m.shouldMount&&!d&&!p;l.useEffect(()=>{j&&M&&!d&&m.pulsate()},[d,M,j,m]);const ce=v(m,"start",I,h),pe=v(m,"stop",$,h),fe=v(m,"stop",Y,h),de=v(m,"stop",U,h),he=v(m,"stop",r=>{j&&r.preventDefault(),D&&D(r)},h),me=v(m,"start",B,h),be=v(m,"stop",E,h),ge=v(m,"stop",V,h),Me=v(m,"stop",r=>{se(r.target)||K(!1),w&&w(r)},!1),Re=_(r=>{A.current||(A.current=r.currentTarget),se(r.target)&&(K(!0),f&&f(r)),F&&F(r)}),q=()=>{const r=A.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},ye=_(r=>{M&&!r.repeat&&j&&r.key===" "&&m.stop(r,()=>{m.start(r)}),r.target===r.currentTarget&&q()&&r.key===" "&&r.preventDefault(),y&&y(r),r.target===r.currentTarget&&q()&&r.key==="Enter"&&!p&&(r.preventDefault(),C&&C(r))}),Ee=_(r=>{M&&r.key===" "&&j&&!r.defaultPrevented&&m.stop(r,()=>{m.pulsate(r)}),R&&R(r),C&&r.target===r.currentTarget&&q()&&r.key===" "&&!r.defaultPrevented&&C(r)});let W=u;W==="button"&&(O.href||O.to)&&(W=b);const X={};W==="button"?(X.type=L===void 0?"button":L,X.disabled=p):(!O.href&&!O.to&&(X.role="button"),p&&(X["aria-disabled"]=p));const xe=oe(i,A),ne={...a,centerRipple:o,component:u,disabled:p,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:j},Ce=Ge(ne);return N.jsxs(qe,{as:W,className:x(Ce.root,c),ownerState:ne,onBlur:Me,onClick:C,onContextMenu:pe,onFocus:Re,onKeyDown:ye,onKeyUp:Ee,onMouseDown:ce,onMouseLeave:he,onMouseUp:de,onDragLeave:fe,onTouchEnd:be,onTouchMove:ge,onTouchStart:me,ref:xe,tabIndex:p?-1:T,type:L,...X,...O,children:[s,ue?N.jsx(We,{ref:le,center:o,...S}):null]})});function v(e,t,i,a=!1){return _(n=>(i&&i(n),a||e[t](n),!0))}export{et as B,te as T,se as i};
