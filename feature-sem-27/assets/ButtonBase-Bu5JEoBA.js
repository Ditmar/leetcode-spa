import{r as u,p as Ie,e as _,a8 as we,c as x,j as N,b as le,l as Q}from"./iframe-MChe8Sk-.js";import{g as ce,a as Be}from"./generateUtilityClasses-CoM_PQv9.js";import{s as ee}from"./styled-B3tOFZ84.js";import{u as ie}from"./useForkRef-CuQl-QY0.js";import{c as Se}from"./memoTheme-D8qkuffd.js";function H(e){const t=u.useRef(e);return Ie(()=>{t.current=e}),u.useRef((...n)=>(0,t.current)(...n)).current}function De(e,t){if(e==null)return{};var n={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(t.indexOf(i)!==-1)continue;n[i]=e[i]}return n}function Z(e,t){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Z(e,t)}function je(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Z(e,t)}const se=_.createContext(null);function Le(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function te(e,t){var n=function(r){return t&&u.isValidElement(r)?t(r):r},i=Object.create(null);return e&&u.Children.map(e,function(o){return o}).forEach(function(o){i[o.key]=n(o)}),i}function Ne(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var i=Object.create(null),o=[];for(var r in e)r in t?o.length&&(i[r]=o,o=[]):o.push(r);var s,c={};for(var l in t){if(i[l])for(s=0;s<i[l].length;s++){var p=i[l][s];c[i[l][s]]=n(p)}c[l]=n(l)}for(s=0;s<o.length;s++)c[o[s]]=n(o[s]);return c}function L(e,t,n){return n[t]!=null?n[t]:e.props[t]}function Oe(e,t){return te(e.children,function(n){return u.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:L(n,"appear",e),enter:L(n,"enter",e),exit:L(n,"exit",e)})})}function ke(e,t,n){var i=te(e.children),o=Ne(t,i);return Object.keys(o).forEach(function(r){var s=o[r];if(u.isValidElement(s)){var c=r in t,l=r in i,p=t[r],d=u.isValidElement(p)&&!p.props.in;l&&(!c||d)?o[r]=u.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:L(s,"exit",e),enter:L(s,"enter",e)}):!l&&c&&!d?o[r]=u.cloneElement(s,{in:!1}):l&&c&&u.isValidElement(p)&&(o[r]=u.cloneElement(s,{onExited:n.bind(null,s),in:p.props.in,exit:L(s,"exit",e),enter:L(s,"enter",e)}))}}),o}var $e=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Fe={component:"div",childFactory:function(t){return t}},ne=(function(e){je(t,e);function t(i,o){var r;r=e.call(this,i,o)||this;var s=r.handleExited.bind(Le(r));return r.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,r){var s=r.children,c=r.handleExited,l=r.firstRender;return{children:l?Oe(o,c):ke(o,s,c),firstRender:!1}},n.handleExited=function(o,r){var s=te(this.props.children);o.key in s||(o.props.onExited&&o.props.onExited(r),this.mounted&&this.setState(function(c){var l=we({},c.children);return delete l[o.key],{children:l}}))},n.render=function(){var o=this.props,r=o.component,s=o.childFactory,c=De(o,["component","childFactory"]),l=this.state.contextValue,p=$e(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,r===null?_.createElement(se.Provider,{value:l},p):_.createElement(se.Provider,{value:l},_.createElement(r,c,p))},t})(_.Component);ne.propTypes={};ne.defaultProps=Fe;const ae={};function pe(e,t){const n=u.useRef(ae);return n.current===ae&&(n.current=e(t)),n}const Ue=[];function ze(e){u.useEffect(e,Ue)}class oe{static create(){return new oe}currentId=null;start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear}function Ae(){const e=pe(oe.create).current;return ze(e.disposeEffect),e}function ue(e){try{return e.matches(":focus-visible")}catch{}return!1}class G{static create(){return new G}static use(){const t=pe(G.create).current,[n,i]=u.useState(!1);return t.shouldMount=n,t.setShouldMount=i,u.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=_e(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...t){this.mount().then(()=>this.ref.current?.start(...t))}stop(...t){this.mount().then(()=>this.ref.current?.stop(...t))}pulsate(...t){this.mount().then(()=>this.ref.current?.pulsate(...t))}}function Ye(){return G.use()}function _e(){let e,t;const n=new Promise((i,o)=>{e=i,t=o});return n.resolve=e,n.reject=t,n}function Xe(e){const{className:t,classes:n,pulsate:i=!1,rippleX:o,rippleY:r,rippleSize:s,in:c,onExited:l,timeout:p}=e,[d,h]=u.useState(!1),M=x(t,n.ripple,n.rippleVisible,i&&n.ripplePulsate),P={width:s,height:s,top:-(s/2)+r,left:-(s/2)+o},b=x(n.child,d&&n.childLeaving,i&&n.childPulsate);return!c&&!d&&h(!0),u.useEffect(()=>{if(!c&&l!=null){const B=setTimeout(l,p);return()=>{clearTimeout(B)}}},[l,c,p]),N.jsx("span",{className:M,style:P,children:N.jsx("span",{className:b})})}const g=ce("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,Ke=80,We=Q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,He=Q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Ge=Q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,qe=ee("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Ze=ee(Xe,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${g.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${We};
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
    animation-name: ${He};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${g.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Ge};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,Je=u.forwardRef(function(t,n){const i=le({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:r={},className:s,...c}=i,[l,p]=u.useState([]),d=u.useRef(0),h=u.useRef(null);u.useEffect(()=>{h.current&&(h.current(),h.current=null)},[l]);const M=u.useRef(!1),P=Ae(),b=u.useRef(null),B=u.useRef(null),C=u.useCallback(f=>{const{pulsate:y,rippleX:R,rippleY:$,rippleSize:S,cb:F}=f;p(E=>[...E,N.jsx(Ze,{classes:{ripple:x(r.ripple,g.ripple),rippleVisible:x(r.rippleVisible,g.rippleVisible),ripplePulsate:x(r.ripplePulsate,g.ripplePulsate),child:x(r.child,g.child),childLeaving:x(r.childLeaving,g.childLeaving),childPulsate:x(r.childPulsate,g.childPulsate)},timeout:J,pulsate:y,rippleX:R,rippleY:$,rippleSize:S},d.current)]),d.current+=1,h.current=F},[r]),O=u.useCallback((f={},y={},R=()=>{})=>{const{pulsate:$=!1,center:S=o||y.pulsate,fakeElement:F=!1}=y;if(f?.type==="mousedown"&&M.current){M.current=!1;return}f?.type==="touchstart"&&(M.current=!0);const E=F?null:B.current,V=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let I,T,w;if(S||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)I=Math.round(V.width/2),T=Math.round(V.height/2);else{const{clientX:U,clientY:D}=f.touches&&f.touches.length>0?f.touches[0]:f;I=Math.round(U-V.left),T=Math.round(D-V.top)}if(S)w=Math.sqrt((2*V.width**2+V.height**2)/3),w%2===0&&(w+=1);else{const U=Math.max(Math.abs((E?E.clientWidth:0)-I),I)*2+2,D=Math.max(Math.abs((E?E.clientHeight:0)-T),T)*2+2;w=Math.sqrt(U**2+D**2)}f?.touches?b.current===null&&(b.current=()=>{C({pulsate:$,rippleX:I,rippleY:T,rippleSize:w,cb:R})},P.start(Ke,()=>{b.current&&(b.current(),b.current=null)})):C({pulsate:$,rippleX:I,rippleY:T,rippleSize:w,cb:R})},[o,C,P]),X=u.useCallback(()=>{O({},{pulsate:!0})},[O]),k=u.useCallback((f,y)=>{if(P.clear(),f?.type==="touchend"&&b.current){b.current(),b.current=null,P.start(0,()=>{k(f,y)});return}b.current=null,p(R=>R.length>0?R.slice(1):R),h.current=y},[P]);return u.useImperativeHandle(n,()=>({pulsate:X,start:O,stop:k}),[X,O,k]),N.jsx(qe,{className:x(g.root,r.root,s),ref:B,...c,children:N.jsx(ne,{component:null,exit:!0,children:l})})});function Qe(e){return Be("MuiButtonBase",e)}const et=ce("MuiButtonBase",["root","disabled","focusVisible"]),tt=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:i,classes:o}=e,s=Se({root:["root",t&&"disabled",n&&"focusVisible"]},Qe,o);return n&&i&&(s.root+=` ${i}`),s},nt=ee("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${et.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),ut=u.forwardRef(function(t,n){const i=le({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:r=!1,children:s,className:c,component:l="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:P,LinkComponent:b="a",onBlur:B,onClick:C,onContextMenu:O,onDragLeave:X,onFocus:k,onFocusVisible:f,onKeyDown:y,onKeyUp:R,onMouseDown:$,onMouseLeave:S,onMouseUp:F,onTouchEnd:E,onTouchMove:V,onTouchStart:I,tabIndex:T=0,TouchRippleProps:w,touchRippleRef:U,type:D,...z}=i,A=u.useRef(null),m=Ye(),fe=ie(m.ref,U),[j,K]=u.useState(!1);p&&j&&K(!1),u.useImperativeHandle(o,()=>({focusVisible:()=>{K(!0),A.current.focus()}}),[]);const de=m.shouldMount&&!d&&!p;u.useEffect(()=>{j&&M&&!d&&m.pulsate()},[d,M,j,m]);const he=v(m,"start",$,h),me=v(m,"stop",O,h),be=v(m,"stop",X,h),ge=v(m,"stop",F,h),Me=v(m,"stop",a=>{j&&a.preventDefault(),S&&S(a)},h),Re=v(m,"start",I,h),ye=v(m,"stop",E,h),Ee=v(m,"stop",V,h),xe=v(m,"stop",a=>{ue(a.target)||K(!1),B&&B(a)},!1),Ce=H(a=>{A.current||(A.current=a.currentTarget),ue(a.target)&&(K(!0),f&&f(a)),k&&k(a)}),q=()=>{const a=A.current;return l&&l!=="button"&&!(a.tagName==="A"&&a.href)},Te=H(a=>{M&&!a.repeat&&j&&a.key===" "&&m.stop(a,()=>{m.start(a)}),a.target===a.currentTarget&&q()&&a.key===" "&&a.preventDefault(),y&&y(a),a.target===a.currentTarget&&q()&&a.key==="Enter"&&!p&&(a.preventDefault(),C&&C(a))}),ve=H(a=>{M&&a.key===" "&&j&&!a.defaultPrevented&&m.stop(a,()=>{m.pulsate(a)}),R&&R(a),C&&a.target===a.currentTarget&&q()&&a.key===" "&&!a.defaultPrevented&&C(a)});let W=l;W==="button"&&(z.href||z.to)&&(W=b);const Y={};W==="button"?(Y.type=D===void 0?"button":D,Y.disabled=p):(!z.href&&!z.to&&(Y.role="button"),p&&(Y["aria-disabled"]=p));const Pe=ie(n,A),re={...i,centerRipple:r,component:l,disabled:p,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:j},Ve=tt(re);return N.jsxs(nt,{as:W,className:x(Ve.root,c),ownerState:re,onBlur:xe,onClick:C,onContextMenu:me,onFocus:Ce,onKeyDown:Te,onKeyUp:ve,onMouseDown:he,onMouseLeave:Me,onMouseUp:ge,onDragLeave:be,onTouchEnd:ye,onTouchMove:Ee,onTouchStart:Re,ref:Pe,tabIndex:p?-1:T,type:D,...Y,...z,children:[s,de?N.jsx(Je,{ref:fe,center:r,...w}):null]})});function v(e,t,n,i=!1){return H(o=>(n&&n(o),i||e[t](o),!0))}export{ut as B,se as T,je as _,De as a,Ae as b,ue as i,H as u};
