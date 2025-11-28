import{a,c as Ie,e as Y,_ as we,i as x,j as k,f as le,o as Q}from"./iframe-CsaoamCi.js";import{g as ce,s as ee,a as Be,c as Se}from"./memoTheme-9xLPcqwE.js";function H(e){const t=a.useRef(e);return Ie(()=>{t.current=e}),a.useRef((...n)=>(0,t.current)(...n)).current}function ie(...e){const t=a.useRef(void 0),n=a.useCallback(o=>{const i=e.map(r=>{if(r==null)return null;if(typeof r=="function"){const s=r,c=s(o);return typeof c=="function"?c:()=>{s(null)}}return r.current=o,()=>{r.current=null}});return()=>{i.forEach(r=>r?.())}},e);return a.useMemo(()=>e.every(o=>o==null)?null:o=>{t.current&&(t.current(),t.current=void 0),o!=null&&(t.current=n(o))},e)}function De(e,t){if(e==null)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)!==-1)continue;n[o]=e[o]}return n}function Z(e,t){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},Z(e,t)}function je(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Z(e,t)}const se=Y.createContext(null);function Le(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function te(e,t){var n=function(r){return t&&a.isValidElement(r)?t(r):r},o=Object.create(null);return e&&a.Children.map(e,function(i){return i}).forEach(function(i){o[i.key]=n(i)}),o}function ke(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var o=Object.create(null),i=[];for(var r in e)r in t?i.length&&(o[r]=i,i=[]):i.push(r);var s,c={};for(var l in t){if(o[l])for(s=0;s<o[l].length;s++){var p=o[l][s];c[o[l][s]]=n(p)}c[l]=n(l)}for(s=0;s<i.length;s++)c[i[s]]=n(i[s]);return c}function L(e,t,n){return n[t]!=null?n[t]:e.props[t]}function Ne(e,t){return te(e.children,function(n){return a.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:L(n,"appear",e),enter:L(n,"enter",e),exit:L(n,"exit",e)})})}function Oe(e,t,n){var o=te(e.children),i=ke(t,o);return Object.keys(i).forEach(function(r){var s=i[r];if(a.isValidElement(s)){var c=r in t,l=r in o,p=t[r],d=a.isValidElement(p)&&!p.props.in;l&&(!c||d)?i[r]=a.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:L(s,"exit",e),enter:L(s,"enter",e)}):!l&&c&&!d?i[r]=a.cloneElement(s,{in:!1}):l&&c&&a.isValidElement(p)&&(i[r]=a.cloneElement(s,{onExited:n.bind(null,s),in:p.props.in,exit:L(s,"exit",e),enter:L(s,"enter",e)}))}}),i}var $e=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Fe={component:"div",childFactory:function(t){return t}},ne=(function(e){je(t,e);function t(o,i){var r;r=e.call(this,o,i)||this;var s=r.handleExited.bind(Le(r));return r.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(i,r){var s=r.children,c=r.handleExited,l=r.firstRender;return{children:l?Ne(i,c):Oe(i,s,c),firstRender:!1}},n.handleExited=function(i,r){var s=te(this.props.children);i.key in s||(i.props.onExited&&i.props.onExited(r),this.mounted&&this.setState(function(c){var l=we({},c.children);return delete l[i.key],{children:l}}))},n.render=function(){var i=this.props,r=i.component,s=i.childFactory,c=De(i,["component","childFactory"]),l=this.state.contextValue,p=$e(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,r===null?Y.createElement(se.Provider,{value:l},p):Y.createElement(se.Provider,{value:l},Y.createElement(r,c,p))},t})(Y.Component);ne.propTypes={};ne.defaultProps=Fe;const ue={};function pe(e,t){const n=a.useRef(ue);return n.current===ue&&(n.current=e(t)),n}const Ue=[];function ze(e){a.useEffect(e,Ue)}class re{static create(){return new re}currentId=null;start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear}function _e(){const e=pe(re.create).current;return ze(e.disposeEffect),e}function ae(e){try{return e.matches(":focus-visible")}catch{}return!1}class G{static create(){return new G}static use(){const t=pe(G.create).current,[n,o]=a.useState(!1);return t.shouldMount=n,t.setShouldMount=o,a.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=Ye(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...t){this.mount().then(()=>this.ref.current?.start(...t))}stop(...t){this.mount().then(()=>this.ref.current?.stop(...t))}pulsate(...t){this.mount().then(()=>this.ref.current?.pulsate(...t))}}function Ae(){return G.use()}function Ye(){let e,t;const n=new Promise((o,i)=>{e=o,t=i});return n.resolve=e,n.reject=t,n}function Xe(e){const{className:t,classes:n,pulsate:o=!1,rippleX:i,rippleY:r,rippleSize:s,in:c,onExited:l,timeout:p}=e,[d,h]=a.useState(!1),M=x(t,n.ripple,n.rippleVisible,o&&n.ripplePulsate),P={width:s,height:s,top:-(s/2)+r,left:-(s/2)+i},b=x(n.child,d&&n.childLeaving,o&&n.childPulsate);return!c&&!d&&h(!0),a.useEffect(()=>{if(!c&&l!=null){const B=setTimeout(l,p);return()=>{clearTimeout(B)}}},[l,c,p]),k.jsx("span",{className:M,style:P,children:k.jsx("span",{className:b})})}const g=ce("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,Ke=80,We=Q`
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
`,Je=a.forwardRef(function(t,n){const o=le({props:t,name:"MuiTouchRipple"}),{center:i=!1,classes:r={},className:s,...c}=o,[l,p]=a.useState([]),d=a.useRef(0),h=a.useRef(null);a.useEffect(()=>{h.current&&(h.current(),h.current=null)},[l]);const M=a.useRef(!1),P=_e(),b=a.useRef(null),B=a.useRef(null),C=a.useCallback(f=>{const{pulsate:R,rippleX:y,rippleY:$,rippleSize:S,cb:F}=f;p(E=>[...E,k.jsx(Ze,{classes:{ripple:x(r.ripple,g.ripple),rippleVisible:x(r.rippleVisible,g.rippleVisible),ripplePulsate:x(r.ripplePulsate,g.ripplePulsate),child:x(r.child,g.child),childLeaving:x(r.childLeaving,g.childLeaving),childPulsate:x(r.childPulsate,g.childPulsate)},timeout:J,pulsate:R,rippleX:y,rippleY:$,rippleSize:S},d.current)]),d.current+=1,h.current=F},[r]),N=a.useCallback((f={},R={},y=()=>{})=>{const{pulsate:$=!1,center:S=i||R.pulsate,fakeElement:F=!1}=R;if(f?.type==="mousedown"&&M.current){M.current=!1;return}f?.type==="touchstart"&&(M.current=!0);const E=F?null:B.current,V=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let I,T,w;if(S||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)I=Math.round(V.width/2),T=Math.round(V.height/2);else{const{clientX:U,clientY:D}=f.touches&&f.touches.length>0?f.touches[0]:f;I=Math.round(U-V.left),T=Math.round(D-V.top)}if(S)w=Math.sqrt((2*V.width**2+V.height**2)/3),w%2===0&&(w+=1);else{const U=Math.max(Math.abs((E?E.clientWidth:0)-I),I)*2+2,D=Math.max(Math.abs((E?E.clientHeight:0)-T),T)*2+2;w=Math.sqrt(U**2+D**2)}f?.touches?b.current===null&&(b.current=()=>{C({pulsate:$,rippleX:I,rippleY:T,rippleSize:w,cb:y})},P.start(Ke,()=>{b.current&&(b.current(),b.current=null)})):C({pulsate:$,rippleX:I,rippleY:T,rippleSize:w,cb:y})},[i,C,P]),X=a.useCallback(()=>{N({},{pulsate:!0})},[N]),O=a.useCallback((f,R)=>{if(P.clear(),f?.type==="touchend"&&b.current){b.current(),b.current=null,P.start(0,()=>{O(f,R)});return}b.current=null,p(y=>y.length>0?y.slice(1):y),h.current=R},[P]);return a.useImperativeHandle(n,()=>({pulsate:X,start:N,stop:O}),[X,N,O]),k.jsx(qe,{className:x(g.root,r.root,s),ref:B,...c,children:k.jsx(ne,{component:null,exit:!0,children:l})})});function Qe(e){return Be("MuiButtonBase",e)}const et=ce("MuiButtonBase",["root","disabled","focusVisible"]),tt=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:o,classes:i}=e,s=Se({root:["root",t&&"disabled",n&&"focusVisible"]},Qe,i);return n&&o&&(s.root+=` ${o}`),s},nt=ee("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${et.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),it=a.forwardRef(function(t,n){const o=le({props:t,name:"MuiButtonBase"}),{action:i,centerRipple:r=!1,children:s,className:c,component:l="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:P,LinkComponent:b="a",onBlur:B,onClick:C,onContextMenu:N,onDragLeave:X,onFocus:O,onFocusVisible:f,onKeyDown:R,onKeyUp:y,onMouseDown:$,onMouseLeave:S,onMouseUp:F,onTouchEnd:E,onTouchMove:V,onTouchStart:I,tabIndex:T=0,TouchRippleProps:w,touchRippleRef:U,type:D,...z}=o,_=a.useRef(null),m=Ae(),fe=ie(m.ref,U),[j,K]=a.useState(!1);p&&j&&K(!1),a.useImperativeHandle(i,()=>({focusVisible:()=>{K(!0),_.current.focus()}}),[]);const de=m.shouldMount&&!d&&!p;a.useEffect(()=>{j&&M&&!d&&m.pulsate()},[d,M,j,m]);const he=v(m,"start",$,h),me=v(m,"stop",N,h),be=v(m,"stop",X,h),ge=v(m,"stop",F,h),Me=v(m,"stop",u=>{j&&u.preventDefault(),S&&S(u)},h),ye=v(m,"start",I,h),Re=v(m,"stop",E,h),Ee=v(m,"stop",V,h),xe=v(m,"stop",u=>{ae(u.target)||K(!1),B&&B(u)},!1),Ce=H(u=>{_.current||(_.current=u.currentTarget),ae(u.target)&&(K(!0),f&&f(u)),O&&O(u)}),q=()=>{const u=_.current;return l&&l!=="button"&&!(u.tagName==="A"&&u.href)},Te=H(u=>{M&&!u.repeat&&j&&u.key===" "&&m.stop(u,()=>{m.start(u)}),u.target===u.currentTarget&&q()&&u.key===" "&&u.preventDefault(),R&&R(u),u.target===u.currentTarget&&q()&&u.key==="Enter"&&!p&&(u.preventDefault(),C&&C(u))}),ve=H(u=>{M&&u.key===" "&&j&&!u.defaultPrevented&&m.stop(u,()=>{m.pulsate(u)}),y&&y(u),C&&u.target===u.currentTarget&&q()&&u.key===" "&&!u.defaultPrevented&&C(u)});let W=l;W==="button"&&(z.href||z.to)&&(W=b);const A={};W==="button"?(A.type=D===void 0?"button":D,A.disabled=p):(!z.href&&!z.to&&(A.role="button"),p&&(A["aria-disabled"]=p));const Pe=ie(n,_),oe={...o,centerRipple:r,component:l,disabled:p,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:j},Ve=tt(oe);return k.jsxs(nt,{as:W,className:x(Ve.root,c),ownerState:oe,onBlur:xe,onClick:C,onContextMenu:me,onFocus:Ce,onKeyDown:Te,onKeyUp:ve,onMouseDown:he,onMouseLeave:Me,onMouseUp:ge,onDragLeave:be,onTouchEnd:Re,onTouchMove:Ee,onTouchStart:ye,ref:Pe,tabIndex:p?-1:T,type:D,...A,...z,children:[s,de?k.jsx(Je,{ref:fe,center:r,...w}):null]})});function v(e,t,n,o=!1){return H(i=>(n&&n(i),o||e[t](i),!0))}export{it as B,se as T,je as _,De as a,H as b,_e as c,ae as i,ie as u};
