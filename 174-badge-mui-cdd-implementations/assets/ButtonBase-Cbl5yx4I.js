import{a as u,f as Ie,e as Y,_ as we,c as x,j as N,h as le,p as Q}from"./iframe-CDDFuPZZ.js";import{g as ce,s as ee,a as Be,u as se,c as Se}from"./useForkRef-DrZUISyf.js";function H(e){const t=u.useRef(e);return Ie(()=>{t.current=e}),u.useRef((...n)=>(0,t.current)(...n)).current}function De(e,t){if(e==null)return{};var n={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;n[s]=e[s]}return n}function Z(e,t){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,s){return n.__proto__=s,n},Z(e,t)}function je(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Z(e,t)}const ie=Y.createContext(null);function Le(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function te(e,t){var n=function(r){return t&&u.isValidElement(r)?t(r):r},s=Object.create(null);return e&&u.Children.map(e,function(o){return o}).forEach(function(o){s[o.key]=n(o)}),s}function Ne(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var s=Object.create(null),o=[];for(var r in e)r in t?o.length&&(s[r]=o,o=[]):o.push(r);var i,c={};for(var l in t){if(s[l])for(i=0;i<s[l].length;i++){var p=s[l][i];c[s[l][i]]=n(p)}c[l]=n(l)}for(i=0;i<o.length;i++)c[o[i]]=n(o[i]);return c}function L(e,t,n){return n[t]!=null?n[t]:e.props[t]}function Oe(e,t){return te(e.children,function(n){return u.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:L(n,"appear",e),enter:L(n,"enter",e),exit:L(n,"exit",e)})})}function ke(e,t,n){var s=te(e.children),o=Ne(t,s);return Object.keys(o).forEach(function(r){var i=o[r];if(u.isValidElement(i)){var c=r in t,l=r in s,p=t[r],d=u.isValidElement(p)&&!p.props.in;l&&(!c||d)?o[r]=u.cloneElement(i,{onExited:n.bind(null,i),in:!0,exit:L(i,"exit",e),enter:L(i,"enter",e)}):!l&&c&&!d?o[r]=u.cloneElement(i,{in:!1}):l&&c&&u.isValidElement(p)&&(o[r]=u.cloneElement(i,{onExited:n.bind(null,i),in:p.props.in,exit:L(i,"exit",e),enter:L(i,"enter",e)}))}}),o}var $e=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Fe={component:"div",childFactory:function(t){return t}},ne=(function(e){je(t,e);function t(s,o){var r;r=e.call(this,s,o)||this;var i=r.handleExited.bind(Le(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,r){var i=r.children,c=r.handleExited,l=r.firstRender;return{children:l?Oe(o,c):ke(o,i,c),firstRender:!1}},n.handleExited=function(o,r){var i=te(this.props.children);o.key in i||(o.props.onExited&&o.props.onExited(r),this.mounted&&this.setState(function(c){var l=we({},c.children);return delete l[o.key],{children:l}}))},n.render=function(){var o=this.props,r=o.component,i=o.childFactory,c=De(o,["component","childFactory"]),l=this.state.contextValue,p=$e(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,r===null?Y.createElement(ie.Provider,{value:l},p):Y.createElement(ie.Provider,{value:l},Y.createElement(r,c,p))},t})(Y.Component);ne.propTypes={};ne.defaultProps=Fe;const ae={};function pe(e,t){const n=u.useRef(ae);return n.current===ae&&(n.current=e(t)),n}const Ue=[];function ze(e){u.useEffect(e,Ue)}class oe{static create(){return new oe}currentId=null;start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear}function _e(){const e=pe(oe.create).current;return ze(e.disposeEffect),e}function ue(e){try{return e.matches(":focus-visible")}catch{}return!1}class G{static create(){return new G}static use(){const t=pe(G.create).current,[n,s]=u.useState(!1);return t.shouldMount=n,t.setShouldMount=s,u.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=Ye(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...t){this.mount().then(()=>this.ref.current?.start(...t))}stop(...t){this.mount().then(()=>this.ref.current?.stop(...t))}pulsate(...t){this.mount().then(()=>this.ref.current?.pulsate(...t))}}function Ae(){return G.use()}function Ye(){let e,t;const n=new Promise((s,o)=>{e=s,t=o});return n.resolve=e,n.reject=t,n}function Xe(e){const{className:t,classes:n,pulsate:s=!1,rippleX:o,rippleY:r,rippleSize:i,in:c,onExited:l,timeout:p}=e,[d,h]=u.useState(!1),M=x(t,n.ripple,n.rippleVisible,s&&n.ripplePulsate),P={width:i,height:i,top:-(i/2)+r,left:-(i/2)+o},b=x(n.child,d&&n.childLeaving,s&&n.childPulsate);return!c&&!d&&h(!0),u.useEffect(()=>{if(!c&&l!=null){const B=setTimeout(l,p);return()=>{clearTimeout(B)}}},[l,c,p]),N.jsx("span",{className:M,style:P,children:N.jsx("span",{className:b})})}const g=ce("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,Ke=80,We=Q`
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
`,Je=u.forwardRef(function(t,n){const s=le({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:r={},className:i,...c}=s,[l,p]=u.useState([]),d=u.useRef(0),h=u.useRef(null);u.useEffect(()=>{h.current&&(h.current(),h.current=null)},[l]);const M=u.useRef(!1),P=_e(),b=u.useRef(null),B=u.useRef(null),C=u.useCallback(f=>{const{pulsate:y,rippleX:R,rippleY:$,rippleSize:S,cb:F}=f;p(E=>[...E,N.jsx(Ze,{classes:{ripple:x(r.ripple,g.ripple),rippleVisible:x(r.rippleVisible,g.rippleVisible),ripplePulsate:x(r.ripplePulsate,g.ripplePulsate),child:x(r.child,g.child),childLeaving:x(r.childLeaving,g.childLeaving),childPulsate:x(r.childPulsate,g.childPulsate)},timeout:J,pulsate:y,rippleX:R,rippleY:$,rippleSize:S},d.current)]),d.current+=1,h.current=F},[r]),O=u.useCallback((f={},y={},R=()=>{})=>{const{pulsate:$=!1,center:S=o||y.pulsate,fakeElement:F=!1}=y;if(f?.type==="mousedown"&&M.current){M.current=!1;return}f?.type==="touchstart"&&(M.current=!0);const E=F?null:B.current,V=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let I,T,w;if(S||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)I=Math.round(V.width/2),T=Math.round(V.height/2);else{const{clientX:U,clientY:D}=f.touches&&f.touches.length>0?f.touches[0]:f;I=Math.round(U-V.left),T=Math.round(D-V.top)}if(S)w=Math.sqrt((2*V.width**2+V.height**2)/3),w%2===0&&(w+=1);else{const U=Math.max(Math.abs((E?E.clientWidth:0)-I),I)*2+2,D=Math.max(Math.abs((E?E.clientHeight:0)-T),T)*2+2;w=Math.sqrt(U**2+D**2)}f?.touches?b.current===null&&(b.current=()=>{C({pulsate:$,rippleX:I,rippleY:T,rippleSize:w,cb:R})},P.start(Ke,()=>{b.current&&(b.current(),b.current=null)})):C({pulsate:$,rippleX:I,rippleY:T,rippleSize:w,cb:R})},[o,C,P]),X=u.useCallback(()=>{O({},{pulsate:!0})},[O]),k=u.useCallback((f,y)=>{if(P.clear(),f?.type==="touchend"&&b.current){b.current(),b.current=null,P.start(0,()=>{k(f,y)});return}b.current=null,p(R=>R.length>0?R.slice(1):R),h.current=y},[P]);return u.useImperativeHandle(n,()=>({pulsate:X,start:O,stop:k}),[X,O,k]),N.jsx(qe,{className:x(g.root,r.root,i),ref:B,...c,children:N.jsx(ne,{component:null,exit:!0,children:l})})});function Qe(e){return Be("MuiButtonBase",e)}const et=ce("MuiButtonBase",["root","disabled","focusVisible"]),tt=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:s,classes:o}=e,i=Se({root:["root",t&&"disabled",n&&"focusVisible"]},Qe,o);return n&&s&&(i.root+=` ${s}`),i},nt=ee("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${et.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),st=u.forwardRef(function(t,n){const s=le({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:r=!1,children:i,className:c,component:l="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:P,LinkComponent:b="a",onBlur:B,onClick:C,onContextMenu:O,onDragLeave:X,onFocus:k,onFocusVisible:f,onKeyDown:y,onKeyUp:R,onMouseDown:$,onMouseLeave:S,onMouseUp:F,onTouchEnd:E,onTouchMove:V,onTouchStart:I,tabIndex:T=0,TouchRippleProps:w,touchRippleRef:U,type:D,...z}=s,_=u.useRef(null),m=Ae(),fe=se(m.ref,U),[j,K]=u.useState(!1);p&&j&&K(!1),u.useImperativeHandle(o,()=>({focusVisible:()=>{K(!0),_.current.focus()}}),[]);const de=m.shouldMount&&!d&&!p;u.useEffect(()=>{j&&M&&!d&&m.pulsate()},[d,M,j,m]);const he=v(m,"start",$,h),me=v(m,"stop",O,h),be=v(m,"stop",X,h),ge=v(m,"stop",F,h),Me=v(m,"stop",a=>{j&&a.preventDefault(),S&&S(a)},h),Re=v(m,"start",I,h),ye=v(m,"stop",E,h),Ee=v(m,"stop",V,h),xe=v(m,"stop",a=>{ue(a.target)||K(!1),B&&B(a)},!1),Ce=H(a=>{_.current||(_.current=a.currentTarget),ue(a.target)&&(K(!0),f&&f(a)),k&&k(a)}),q=()=>{const a=_.current;return l&&l!=="button"&&!(a.tagName==="A"&&a.href)},Te=H(a=>{M&&!a.repeat&&j&&a.key===" "&&m.stop(a,()=>{m.start(a)}),a.target===a.currentTarget&&q()&&a.key===" "&&a.preventDefault(),y&&y(a),a.target===a.currentTarget&&q()&&a.key==="Enter"&&!p&&(a.preventDefault(),C&&C(a))}),ve=H(a=>{M&&a.key===" "&&j&&!a.defaultPrevented&&m.stop(a,()=>{m.pulsate(a)}),R&&R(a),C&&a.target===a.currentTarget&&q()&&a.key===" "&&!a.defaultPrevented&&C(a)});let W=l;W==="button"&&(z.href||z.to)&&(W=b);const A={};W==="button"?(A.type=D===void 0?"button":D,A.disabled=p):(!z.href&&!z.to&&(A.role="button"),p&&(A["aria-disabled"]=p));const Pe=se(n,_),re={...s,centerRipple:r,component:l,disabled:p,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:j},Ve=tt(re);return N.jsxs(nt,{as:W,className:x(Ve.root,c),ownerState:re,onBlur:xe,onClick:C,onContextMenu:me,onFocus:Ce,onKeyDown:Te,onKeyUp:ve,onMouseDown:he,onMouseLeave:Me,onMouseUp:ge,onDragLeave:be,onTouchEnd:ye,onTouchMove:Ee,onTouchStart:Re,ref:Pe,tabIndex:p?-1:T,type:D,...A,...z,children:[i,de?N.jsx(Je,{ref:fe,center:r,...w}):null]})});function v(e,t,n,s=!1){return H(o=>(n&&n(o),s||e[t](o),!0))}export{st as B,ie as T,je as _,De as a,_e as b,ne as c,ue as i,H as u};
