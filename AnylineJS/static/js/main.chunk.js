(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{258:function(e,t,n){e.exports=n.p+"static/media/anyIcon.png"},268:function(e,t,n){e.exports=n(610)},42:function(e,t,n){"use strict";function i(){return parseInt(window.innerWidth*window.devicePixelRatio,10)}function o(){return parseInt(window.innerHeight*window.devicePixelRatio,10)}n.d(t,"b",function(){return i}),n.d(t,"a",function(){return o})},606:function(e,t,n){},608:function(e,t,n){},610:function(e,t,n){"use strict";n.r(t);n(269);var i,o=n(0),r=n.n(o),a=n(82),c=n.n(a),s=n(9),u=n(16),l=n(41),d=n(10),f=n(2),h=n(254),b=n.n(h),p=n(49),m=n.n(p),g=n(119),v=n(120),w=n(121),y=function(){function e(){Object(v.a)(this,e)}return Object(w.a)(e,[{key:"set",value:function(e,t){this[e]=t}}]),e}(),k=Object(f.f)({refs:new y}),O=n(638);var C=function(){if(i)return i;var e={},t=function(t,n){return e[t]?e[t].next(n):(console.warn("".concat(t," does not have any registered listeners. Publish cancelled.")),!1)};return i={getSinks:function(){return e},publish:t,subscribe:function(t,n){return n?(e[t]||Object.assign(e,Object(l.a)({},t,new O.a)),e[t].subscribe(n)):(console.warn("No callback provided for subscription. Subscription cancelled."),!1)}},window.publish=t,i}(),j=s.b.video.withConfig({displayName:"Webcam__StyledVideo",componentId:"sc-1mn95t8-0"})(["display:block;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);@media screen and (max-aspect-ratio:1920/1080) and (orientation:landscape){height:100%;}@media screen and (min-aspect-ratio:1920/1080) and (orientation:landscape){width:100%;}"]),E=Object(f.a)(k,Object(f.b)({onUserMedia:function(){},screenshotFormat:"image/jpeg"}),Object(f.c)({componentDidMount:function(){var e=Object(g.a)(m.a.mark(function e(){var t,n,i=this;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.refs.video,e.prev=1,e.next=4,navigator.mediaDevices.getUserMedia(this.props.mediaConstraints);case 4:n=e.sent,t.srcObject=n,t.getScreenshot=function(e){var n=e||document.createElement("canvas");return n.width=t.offsetWidth,n.height=t.offsetHeight,n.getContext("2d").drawImage(t,0,0,t.offsetWidth,t.offsetHeight),n.toDataURL(i.props.screenshotFormat,1)},this.props.onUserMedia(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),C.publish("setCameraDisabled",!0);case 13:case"end":return e.stop()}},e,this,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),componentWillUnmount:function(){clearInterval(this.props.intervalInstance)}}))(function(e){var t=e.refs;e.style;return r.a.createElement("div",null,r.a.createElement(j,{autoPlay:!0,muted:!0,playsInline:!0,ref:function(e){return t.set("video",e)},id:"anylineVideo"}))}),S=Object(f.a)(Object(f.b)({fps:10,onFrame:function(){},height:720,width:1280,mediaConstraints:{video:{width:1280,height:720,facingMode:"user"}}}),Object(f.g)("intervalInstance","setIntervalInstance"),k,Object(f.e)({startStreaming:function(e){var t=e.fps,n=e.onFrame,i=e.setIntervalInstance;return function(e){var o=setInterval(function(){var t=e.getScreenshot();t&&n(t)},1e3/t);i(o)}}}),Object(f.c)({componentWillUnmount:function(){clearInterval(this.props.intervalInstance)}}))(function(e){var t=e.style,n=e.width,i=e.height,o=e.startStreaming,a=e.mediaConstraints;return r.a.createElement(E,{style:t,audio:!1,height:i,screenshotFormat:"image/jpeg",width:n,mediaConstraints:a,onUserMedia:o})});var A,I,F,x,D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.compression,i=void 0===n?1:n,o=t.stretch,r=void 0===o?1:o,a=t.left,c=void 0===a?0:a,s=t.top,u=void 0===s?0:s,l=t.width,d=void 0===l?10:l,f=t.height,h=void 0===f?10:f,b=document.getElementById("anylineVideo"),p=document.createElement("canvas");return p.width=d,p.height=h,p.getContext("2d").drawImage(e,b.offsetWidth/2-window.innerWidth/2+c,b.offsetHeight/2-window.innerHeight/2+u,d,h,0,0,d*r,h*r),p.toDataURL("image/jpeg",i)},R=n(70),L=n(266),W=n(257),_=n(267),M=n(126),U=function(e){function t(){var e,n;Object(v.a)(this,t);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(n=Object(L.a)(this,(e=Object(W.a)(t)).call.apply(e,[this].concat(o)))).state={logs:[]},n}return Object(_.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(M.Hook)(window.console,function(t){e.setState(function(e){var n=e.logs;return{logs:[].concat(Object(R.a)(n),[Object(M.Decode)(t)])}})})}},{key:"render",value:function(){return r.a.createElement("div",{style:Object(d.a)({backgroundColor:"#242424",height:"100%",overflow:"scroll","-webkit-overflow-scrolling":"touch"},this.props.customStyle||{})},r.a.createElement(M.Console,{logs:this.state.logs,variant:"dark"}))}}]),t}(r.a.Component),N=n(258),P=n.n(N),T={},z={width:"100vw",height:"100vh"},J={video:{width:1280,height:720,facingMode:"environment"},audio:!1},H={color:"white",fontFamily:"system-ui",fontSize:20,textAlign:"center",marginRight:30,marginLeft:30},B=function(e){T=Object(d.a)({},e)},V=Object(f.a)(Object(f.g)("maskConfig","setMaskConfig"),Object(f.g)("debugOutputImages","setDebugOutputImages",{}),Object(f.g)("cutoutImageData","setCutoutImageData",{}),Object(f.g)("isLoadingAnyline","setIsLoadingAnyline",!0),Object(f.g)("isCameraDisabled","setAnylineCameraDisabled",!1),Object(f.g)("isAnylineDeviceSlow","setAnylineDeviceSlow",!1),Object(f.e)({handleFrameUpdate:function(e){var t=e.setCutoutImageData;return function(e){var n=new Image;n.onload=function(){var e=Object.values(T).reduce(function(e,t){var i=t.rect;return Object(d.a)({},e,Object(l.a)({},t.id,D(n,{left:i.left,top:i.top,width:i.right-i.left,height:i.bottom-i.top})))},{});window.cutoutImageData=e,t(e)},n.src=e}}}),Object(f.c)({componentDidMount:function(){var e=this;A=C.subscribe("setDebugOutputImage",function(t){return e.props.setDebugOutputImages({output:t})}),I=C.subscribe("setAnylineLoading",function(t){return e.props.setIsLoadingAnyline(t)}),F=C.subscribe("setCameraDisabled",function(t){return e.props.setAnylineCameraDisabled(t)}),x=C.subscribe("setAnylineDeviceSlow",function(t){return e.props.setAnylineDeviceSlow(t)}),document.addEventListener("touchmove",function(t){e.props.debugMode||t.preventDefault()},{passive:!1})},componentWillUnmount:function(){A.unsubscribe(),I.unsubscribe(),F.unsubscribe(),x.unsubscribe()}}))(function(e){var t=e.handleFrameUpdate,n=e.cutoutImageData,i=e.height,o=e.width,a=e.debugMode,c=e.debugOutputImages,s=e.isLoadingAnyline,u=e.isCameraDisabled,l=e.isAnylineDeviceSlow;return r.a.createElement("div",{style:{height:"100%"}},s&&r.a.createElement($,null,r.a.createElement(K,{src:P.a,alt:"Anyline Logo"}),r.a.createElement(Q,{sizeUnit:"px",size:100,color:"#FFFFFF"})),u&&r.a.createElement($,null,r.a.createElement("p",{style:H},"Hello, please allow camera access for Anyline to scan and reload the page!")),l&&s&&r.a.createElement($,null,r.a.createElement("p",{style:H},"It seems like loading is taking unusually long. AnylineJS is cutting edge technology that will work best on devices released since 2016...")),r.a.createElement("div",null,a&&r.a.createElement(X,{debugOutputImages:c,cutoutImageData:n}),r.a.createElement(S,{height:i,width:o,mediaConstraints:J,style:z,fps:"3",onFrame:t})))}),G=s.b.div.withConfig({displayName:"Anyline-JS__OutputDebugWrapper",componentId:"sc-1968ct5-0"})(["height:100%;overflow:auto;-webkit-overflow-scrolling:touch;"]),q=s.b.div.withConfig({displayName:"Anyline-JS__DebugImageWrapper",componentId:"sc-1968ct5-1"})(["outline:1px solid red;"]),Y=s.b.p.withConfig({displayName:"Anyline-JS__ImageTitle",componentId:"sc-1968ct5-2"})(["color:red;position:absolute;"]),Z=s.b.div.withConfig({displayName:"Anyline-JS__DebugInfoWrapper",componentId:"sc-1968ct5-3"})(["z-index:100;height:150px;position:absolute;margin:5px;display:flex;"]),$=s.b.div.withConfig({displayName:"Anyline-JS__StyledLoadingOverlay",componentId:"sc-1968ct5-4"})(["position:fixed;height:100vh;width:100vw;background-color:black;z-index:1000;display:flex;justify-content:center;align-items:center;flex-direction:row;"]),K=s.b.img.withConfig({displayName:"Anyline-JS__StyledLoadingImage",componentId:"sc-1968ct5-5"})(["width:150px;z-index:1001;position:absolute;"]),Q=Object(s.b)(b.a).withConfig({displayName:"Anyline-JS__StyledMoonLoader",componentId:"sc-1968ct5-6"})(["width:100px;z-index:1002;"]),X=function(e){var t=e.cutoutImageData,n=e.debugOutputImages;return r.a.createElement(Z,null,r.a.createElement(ee,{imageData:Object(d.a)({},t,n)}),r.a.createElement(U,{customStyle:{flex:1}}))},ee=function(e){var t=e.imageData,n=e.style;return r.a.createElement(G,{style:n},Object.entries(t).map(function(e){var t=Object(u.a)(e,2),n=t[0],i=t[1];return r.a.createElement(te,{key:n,title:n,src:i})}))},te=function(e){var t=e.title,n=e.src;return r.a.createElement(q,null,r.a.createElement(Y,null,t),r.a.createElement("img",{alt:"debug img output: ".concat(t),src:n}))},ne=n(259),ie=n(31),oe=n.n(ie),re=n(260),ae=n.n(re),ce=n(261),se=n.n(ce),ue=function(e,t){return e.reduce(function(e,n){return Object(d.a)({},e,Object(l.a)({},n[t],n))},{})},le=n(252),de=n(262),fe=n.n(de);var he=n(250),be=n(69),pe=n(263),me=n.n(pe);function ge(e,t,n,i,o,r){i<2*r&&(r=i/2),o<2*r&&(r=o/2),e.beginPath(),e.moveTo(t+r,n),e.arcTo(t+i,n,t+i,n+o,r),e.arcTo(t+i,n+o,t,n+o,r),e.arcTo(t,n+o,t,n,r),e.arcTo(t,n,t+i,n,r),e.closePath()}function ve(){var e=Object(he.a)(["\n    animation: dash ","s linear;\n    animation-fill-mode: forwards;\n\n    @keyframes dash {\n      to {\n        stroke-dashoffset: 0;\n      }\n    }\n  "]);return ve=function(){return e},e}var we=s.b.svg.withConfig({displayName:"SvgCutout__CutoutSVG",componentId:"sc-1i0vs71-0"})([""]),ye=s.b.path.withConfig({displayName:"SvgCutout__BackgroundCutoutStroke",componentId:"sc-1i0vs71-1"})(["   fill:",";stroke:",";stroke-width:",";"],function(e){return e.fill||"none"},function(e){return Object(be.a)(e.strokeColor)},function(e){return e.strokeWidth}),ke=Object(s.b)(ye).withConfig({displayName:"SvgCutout__AnimatedCutoutStroke",componentId:"sc-1i0vs71-2"})([""," stroke:",";"],function(e){return e.animate&&e.delay&&Object(s.a)(ve(),e.delay)},function(e){return e.scanning&&!e.isAnimating?Object(be.a)(e.feedbackStrokeColor||e.strokeColor):Object(be.a)(e.strokeColor)}),Oe=function(e){var t=e.onAnimationStateChanged,n=void 0===t?function(){}:t,i=e.animate,a=e.rect,c=e.cornerRadius,s=e.fill,l=e.strokeWidth,d=e.inactiveStrokeColor,f=e.feedbackStrokeColor,h=e.strokeColor,b=e.scanning,p=e.delay,m=e.children,g=Object(o.useRef)(),v=Object(o.useState)(),w=Object(u.a)(v,2),y=w[0],k=w[1],O=Object(o.useState)(i),C=Object(u.a)(O,2),j=C[0],E=C[1];Object(o.useEffect)(function(){var e=g.current;if(e&&e.getTotalLength)return e.addEventListener("webkitAnimationEnd",i,!1),e.addEventListener("animationend",i,!1),e.addEventListener("oanimationend",i,!1),e.addEventListener("webkitAnimationStart",t,!1),e.addEventListener("animationstart",t,!1),e.addEventListener("oanimationstart",t,!1),function(){e.removeEventListener("webkitAnimationEnd",i,!1),e.removeEventListener("animationend",i,!1),e.removeEventListener("oanimationend",i,!1),e.removeEventListener("webkitAnimationStart",t,!1),e.removeEventListener("animationstart",t,!1),e.removeEventListener("oanimationstart",t,!1)};function t(){k(!0),E(!0),n(!0)}function i(){k(!1),E(!1),n(!1)}},[g.current]),d||(y&&k(!1),j&&E(!1));var S=a.right-a.left+l,A=a.bottom-a.top+l,I=function(e){var t=e.rect,n=e.width,i=e.height,o=e.cornerRadius,r=void 0===o?0:o,a=e.strokeWidth,c=void 0===a?0:a,s=new me.a(n,i);r<c&&(r=c);var u=t.top,l=t.left;return ge(s,1.5*c-c,1.5*c-c,t.right-l-c+2*c,t.bottom-u-c+2*c,r),s.closePath(),s.stroke(),s.getSvg().childNodes[1].childNodes[0].getAttribute("d")}({rect:a,cornerRadius:c,strokeWidth:l,width:S+l,height:A+l});return r.a.createElement("div",{style:{position:"fixed",width:S+l,height:A+l,left:a.left-l,top:a.top-l}},r.a.createElement(we,{width:S+l,height:A+l,version:"2.0"},j&&r.a.createElement(ye,{d:I,fill:s,rect:a,strokeColor:d,strokeWidth:l,cornerRadius:c}),r.a.createElement(ke,{d:I,isAnimating:y,animate:i,strokeDasharray:2*S+2*A,strokeDashoffset:d?2*S+2*A:0,scanning:b,feedbackStrokeColor:f,ref:g,rect:a,strokeColor:h,strokeWidth:l,cornerRadius:c,delay:p})),m)},Ce=r.a.lazy(function(){return Promise.all([n.e(3),n.e(1)]).then(n.bind(null,639))}),je=function(){var e;return function(t,n){clearTimeout(e),e=setTimeout(n,t)}}(),Ee=function(e){var t=e.scanFeedbackConfig,n=e.inactiveStrokeColor;return Object(d.a)({},t,{strokeColor:n,fillColor:"00000000"})},Se=function(e,t,n){return{width:e.right-e.left,height:e.bottom-e.top,top:-t,left:-t,borderRadius:n}},Ae=function(){return{fade:500,zoom:500}[(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toLowerCase()]||0};function Ie(e,t){if(e){var n=e-Ae(t)/1e3;return n>=0?n:0}}var Fe,xe=Object(f.a)(Object(f.g)("show","setShow"),Object(f.g)("scanning","setScanning"),Object(f.g)("isAnimating","setIsAnimating"),Object(f.g)("isDelayAnimating","setIsDelayAnimating"),Object(f.b)({rect:{left:0,top:0,right:100,bottom:100},strokeWidth:2,strokeColor:"FFFFFF",cornerRadius:8,onEnter:function(){},onEntered:function(){},onExit:function(){},onExited:function(){}}),Object(f.e)({handleEnter:function(e){var t=e.setIsAnimating,n=e.onEnter;return function(){t(!0),n()}},handleEntered:function(e){var t=e.setIsAnimating,n=e.onEntered;return function(){t(!1),n()}},handleExit:function(e){e.setIsAnimating;var t=e.onExit;return function(){t()}},handleExited:function(e){var t=e.setIsAnimating,n=e.onExited;return function(){t(!1),n()}},resetScanTimeout:function(e){var t=e.setScanning,n=e.scanFeedback;return function(){t(!0),je(n.timeout||1e3,function(){return t(!1)})}}}),Object(f.f)(function(e){var t=e.scanFeedback,n=e.delay,i=e.classNames,o=e.rect,r=e.strokeWidth,a=e.cornerRadius,c=e.isAnimating,s=e.inactiveStrokeColor;return{enterAnimationTimeout:Ae(i),doAnimateDelay:!!s&&!c,renderFeedback:!c&&t.elements&&!!t.elements.length,delay:Ie(n,i),initialRectStyle:Se(o,r,a),polygonOffset:{top:o.top,left:o.left}}}),Object(f.f)(function(e){var t=e.scanFeedback,n=e.inactiveStrokeColor;return{scanFeedbackConfig:e.isDelayAnimating?Ee({scanFeedbackConfig:t,inactiveStrokeColor:n}):t}}),Object(f.c)({componentDidMount:function(){this.props.setShow(!0)},componentWillReceiveProps:function(e){e.scanFeedback.lastFeedbackUpdate!==this.props.scanFeedback.lastFeedbackUpdate&&this.props.resetScanTimeout()}}))(function(e){e.show;var t=e.setIsDelayAnimating,n=e.renderFeedback,i=e.scanFeedbackConfig,a=e.handleEntered,c=e.handleEnter,s=e.handleExit,u=e.handleExited,l=e.initialRectStyle,d=e.polygonOffset,f=e.doAnimateDelay,h=e.enterAnimationTimeout,b=Object(le.a)(e,["show","setIsDelayAnimating","renderFeedback","scanFeedbackConfig","handleEntered","handleEnter","handleExit","handleExited","initialRectStyle","polygonOffset","doAnimateDelay","enterAnimationTimeout"]);return r.a.createElement(fe.a,Object.assign({timeout:h},b,{onEntered:a,onEnter:c,onExit:s,onExited:u}),r.a.createElement(Oe,{onAnimationStateChanged:t,animate:f,rect:b.rect,inactiveStrokeColor:b.inactiveStrokeColor,cornerRadius:b.cornerRadius,delay:b.delay,strokeWidth:b.strokeWidth,feedbackStrokeColor:b.feedbackStrokeColor,strokeColor:b.strokeColor,scanning:b.scanning},n&&r.a.createElement(o.Suspense,{fallback:r.a.createElement("span",null)},r.a.createElement(Ce,{initialRectStyle:l,hide:!b.scanning,cutoutId:b.id,polygonOffset:d,config:i}))))}),De=function(e,t){return Object.keys(t).filter(function(t){return!Object.keys(e).includes(t)})},Re=s.b.canvas.withConfig({displayName:"Mask__Canvas",componentId:"lpvzzy-0"})(["position:absolute;width:100%;height:100%;"]),Le=function(e){return function(t){return e.set("canvas",t)}},We=Object(f.a)(k,Object(f.b)({outerColor:"FFFFFF",outerAlpha:0,onInit:function(){}}),Object(f.e)({initializeMaskService:function(e){var t=e.outerColor,n=e.outerAlpha,i=e.refs.canvas;return function(){i.width=window.innerWidth,i.height=window.innerHeight,Fe=function(e){var t=e.canvasEl,n=e.outerColor,i=void 0===n?"000000":n,o=e.outerAlpha,r=void 0===o?0:o,a=e.rerenderOnAdd,c=void 0===a||a,s=e.rerenderOnRemove,u=void 0===s||s,l={},d=Object(be.b)(i,r),f=t.getContext("2d");function h(e){var t=e.rect,n=e.cornerRadius,i=void 0===n?0:n,o=e.strokeWidth,r=void 0===o?0:o;i<r&&(i=r);var a=t.top,c=t.left,s=t.right,u=t.bottom;ge(f,c-r,a-r,s-c+2*r,u-a+2*r,1.5*i),f.fillStyle="black",f.fill()}function b(e){f.fillStyle=e,f.fillRect(0,0,t.width,t.height)}function p(){f.clearRect(0,0,t.width,t.height),f.globalCompositeOperation="source-over",b(d),f.globalCompositeOperation="destination-out",Object.values(l).forEach(h)}return b(d),function e(){return requestAnimationFrame(e)}(),{addCutout:function(e){l[e.id]=e,c&&p()},modifyCutout:function(e){l[e.id]=e,p()},removeCutout:function(e){delete l[e],u&&p()},render:p,setConfig:function(e,t){d=Object(be.b)(e,t),p()}}}({canvasEl:i,outerColor:t,outerAlpha:n,rerenderOnAdd:!1})}},updateCanvasDimensions:function(e){var t=e.refs.canvas;return function(){t.width=t.offsetWidth,t.height=t.offsetHeight,Fe&&Fe.render()}}}),Object(f.c)({componentDidMount:function(){this.props.initializeMaskService(),window.addEventListener("resize",this.props.updateCanvasDimensions),this.props.onInit(Fe)},componentWillUnmount:function(){window.removeEventListener("resize",this.props.updateCanvasDimensions)},componentWillReceiveProps:function(e){var t=this;return e.outerColor===this.props.outerColor&&e.outerAlpha===this.props.outerAlpha||Fe&&Fe.setConfig(e.outerColor,e.outerAlpha),De(this.props.cutouts,e.cutouts).length?(Fe||e.initializeMaskService(),void Object.values(e.cutouts).filter(function(e){return!t.props.cutouts[e.id]}).forEach(Fe.addCutout)):De(e.cutouts,this.props.cutouts).length?(Fe||e.initializeMaskService(),void Object.values(this.props.cutouts).filter(function(t){return!e.cutouts[t.id]}).map(function(e){return e.id}).forEach(Fe.removeCutout)):void Object.values(e.cutouts).filter(function(e){return t.props.cutouts[e.id]&&e.lastUpdate!==t.props.cutouts[e.id].lastUpdate}).forEach(Fe.modifyCutout)}}))(function(e){var t=e.refs;return r.a.createElement(Re,{ref:Le(t)})});function _e(e,t){if(!e)return{};var n=e.reduce(function(e,t){var n=Object(u.a)(t,2),i=n[0],o=n[1];return{x1:e.x1&&e.x1<i?e.x1:i,y1:e.y1&&e.y1<o?e.y1:o,x2:e.x2&&e.x2>i?e.x2:i,y2:e.y2&&e.y2>o?e.y2:o}},{});return{x:n.x1-t.left,y:n.y1-t.top,width:n.x2-n.x1,height:n.y2-n.y1}}function Me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0;if(!t.length||e.length>1||!e[0].points)return e;if(1===e.length&&1===t.length){var i=_e(t[0].points,{left:0,top:0}),o=_e(e[0].points,{left:0,top:0}),r=i.x,a=i.y,c=i.width,s=i.height,u=o.x,l=o.y,d=o.width,f=o.height;if(Math.abs(r-u)>=n||Math.abs(a-l)>=n||Math.abs(c-d)>=n||Math.abs(s-f)>=n)return e}return t}n(606);var Ue,Ne,Pe,Te,ze,Je,He={cutouts:oe.a.object.isRequired},Be=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).filter(function(e){return Object.keys(e).length})},Ve=function(e){return e.visible},Ge=function(e,t){return t.map(function(t){return Object(d.a)({},t,{svgOffset:{top:e.rect.top,left:e.rect.left}})})},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return Object(f.a)(Object(f.g)("maskConfig","setMaskConfig"),Object(f.b)({onCutoutListUpdate:function(){},onReady:function(){}}),Object(f.h)(function(){return{cutouts:{}}},{setCutouts:function(e,t){Object(ne.a)(e);var n=t.onCutoutListUpdate;return function(e){return n(e),{cutouts:e}}}}),Object(f.e)({handleAnimatonEnterStart:function(e){return e.cutouts,function(e){return function(){e.animation&&"none"!==e.animation.toLowerCase()||Je.render()}}},handleAnimatonEnterEnd:function(){return function(e){return function(){Je.render()}}},handleAnimatonExitEnd:function(){return function(e){return function(){}}},handleMaskInit:function(){return function(e){Je=e}},setupCutouts:function(e){var t=e.setCutouts,n=e.cutouts;return function(e){var i=e.map(function(e){return Object(d.a)({},n[e.id]||{},e,{scanFeedback:Object(d.a)({},n[e.id]&&n[e.id].scanFeedback||{},e.scanFeedback||{},{elements:[]}),lastUpdate:Date.now(),visible:"undefined"!==typeof e.visible?e.visible:!!n[e.id]&&n[e.id].visible})}),o=ue(i,"id");t(Object(d.a)({},n,o))}},updateFeedback:function(e){var t=e.setCutouts,n=e.cutouts;return function(e){var i=Object.entries(e).filter(function(e){var t=Object(u.a)(e,2),i=t[0],o=t[1];return n[i]&&o.length}).map(function(e){var t=Object(u.a)(e,2),i=t[0],o=t[1];return Object(d.a)({},n[i],{scanFeedback:Object(d.a)({},n[i].scanFeedback,{lastFeedbackUpdate:Date.now(),elements:Ge(n[i],Me(Be(o),Be(n[i].scanFeedback.elements),5))})})}),o=ue(i,"id");t(Object(d.a)({},n,o))}},removeCutouts:function(e){var t=e.setCutouts,n=e.cutouts;return function(e){var i=function(e,t){var n=t.map(function(e){return e.toString()});return Object.entries(e).reduce(function(e,t){var i=Object(u.a)(t,2),o=i[0],r=i[1];return n.includes(o)?e:Object(d.a)({},e,Object(l.a)({},o,r))},{})}(n,e);t(i)}}}),Object(f.e)({resetDelay:function(e){var t=e.setupCutouts,n=e.cutouts;return function(e){var i=e.filter(function(e){return n[e]}),o=i.map(function(e){return{id:e,inactiveStrokeColor:void 0}});t(o);var r=i.map(function(e){return{id:e,inactiveStrokeColor:n[e].inactiveStrokeColor}});setTimeout(function(){return t(r)},0)}}}),e,Object(f.f)(function(e){var t=e.cutouts,n=Object.values(t).filter(Ve);return{cutouts:ue(n,"id")}}),Object(f.c)({componentDidMount:function(){Te=C.subscribe("setupMask",this.props.setMaskConfig),Ue=C.subscribe("setupCutouts",this.props.setupCutouts),Pe=C.subscribe("updateFeedback",ae()(this.props.updateFeedback,25)),Ne=C.subscribe("removeCutouts",this.props.removeCutouts),ze=C.subscribe("resetDelay",this.props.resetDelay),this.props.onReady()},componentWillUnmount:function(){Te.unsubscribe(),Ue.unsubscribe(),Ne.unsubscribe(),Pe.unsubscribe(),ze.unsubscribe()}}),Object(f.d)(He))}()(function(e){var t=e.cutouts,n=e.maskConfig,i=e.handleMaskInit,o=e.handleAnimatonEnterEnd,a=e.handleAnimatonExitEnd,c=e.handleAnimatonEnterStart,s=e.style;return r.a.createElement("div",{style:s},r.a.createElement(We,Object.assign({},n,{cutouts:t,onInit:i})),r.a.createElement(se.a,null,Object.values(t).map(function(e){return r.a.createElement(xe,Object.assign({onEntered:o(e),onEnter:c(e),onExited:a(e),classNames:e.animation?e.animation.toLowerCase():"",key:"Cutout_".concat(e.id)},e))})))}),Ye=s.b.div.withConfig({displayName:"CutoutUI__Wrapper",componentId:"dwp0ge-0"})([""]),Ze=s.b.div.withConfig({displayName:"CutoutUI__LayerWrapper",componentId:"dwp0ge-1"})(["position:relative;height:100%;"]),$e=s.b.div.withConfig({displayName:"CutoutUI__Layer",componentId:"dwp0ge-2"})(["width:100%;height:100%;position:absolute;"]),Ke=Object({NODE_ENV:"production",PUBLIC_URL:".",REACT_APP_USE_ANYLINE_JS:"true"}).REACT_APP_DEBUG_MODE,Qe=function(e){var t=e.style,n=e.onReady,i=e.useAnylineJS;return r.a.createElement(Ye,{style:t},r.a.createElement(Ze,null,i&&r.a.createElement($e,null,r.a.createElement(V,{debugMode:Ke,width:t.width,height:t.height})),r.a.createElement($e,null,r.a.createElement(qe,{onReady:n,onCutoutListUpdate:B}))))},Xe=n(42),et=n(264),tt=n.n(et),nt=function(){var e=Object(o.useState)(Object(Xe.b)()),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(o.useState)(Object(Xe.a)()),a=Object(u.a)(r,2),c=a[0],s=a[1];return Object(o.useEffect)(function(){var e=tt()(function(){i(Object(Xe.b)()),s(Object(Xe.a)())},250);return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),{width:n,height:c}},it=r.a.createContext({width:Object(Xe.b)(),height:Object(Xe.a)()}),ot=s.b.div.withConfig({displayName:"App__Wrapper",componentId:"sc-10dd9xx-0"})(["width:100%;height:100%;"]),rt=function(){window.publish("setupMask",{outerColor:"000000",outerAlpha:.5})},at=function(){var e=nt();return r.a.createElement(ot,null,r.a.createElement(it.Provider,{value:e},r.a.createElement(Qe,{useAnylineJS:"true",style:{height:e.height/window.devicePixelRatio,width:e.width/window.devicePixelRatio},onReady:rt})))},ct=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function st(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var ut=function(e){return new Promise(function(t){return setTimeout(t,e)})};function lt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(R.a)(e);return{getFeedbacks:function(){return t},set:function(e){return t=Object(R.a)(e)},add:function(e){return t=[].concat(Object(R.a)(t),[e])}}}function dt(){return(dt=Object(g.a)(m.a.mark(function e(){var t,n,i,o,r,a,c,s,u,l,f,h=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=h.length>0&&void 0!==h[0]?h[0]:{},n=t.setupCutoutsConfig,i=void 0===n?{}:n,o=t.feedbackCount,r=void 0===o?8:o,window.publish("setupMask",{outerColor:"000000",outerAlpha:.3}),window.publish("setupCutouts",[Object(d.a)({scanFeedback:{animation:"RESIZE",redrawTimeout:0,fillColor:"220099FF",strokeWidth:2,strokeColor:"FF0099FF",cornerRadius:4,feedbackStyle:"contour_point",animationDuration:1e3},feedbackStrokeColor:"FF0099FF",id:"1",visible:1,animation:"none",rect:{bottom:210,top:110,left:150,right:250},strokeWidth:2,cornerRadius:20,strokeColor:"FFFFFFFF"},i)]),a=function(e,t){return Object(d.a)({},e,t)},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return Math.floor(Math.random()*t)+e},s=Array.apply(void 0,Object(R.a)(Array(r))).map(function(e,t){return{y:250,x:c(1,1200),width:14.351851267873542,height:20.833332485622833}}),u=lt(s),f=m.a.mark(function e(){var t,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.time("loop"),t=400-2*l,n=u.set(s.map(function(e){return a(e,{y:t})})),window.publish("updateFeedback",{1:n}),console.timeEnd("loop"),e.next=7,ut(30);case 7:case"end":return e.stop()}},e,this)}),l=0;case 9:if(!(l<=100)){e.next=14;break}return e.delegateYield(f(),"t0",11);case 11:l+=1,e.next=9;break;case 14:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}window.runFeedbackBenchmark=function(){return dt.apply(this,arguments)};n(608);var ft,ht=document.getElementById("root");document.body.style.height="".concat(window.innerHeight,"px"),c.a.render(r.a.createElement(at,null),ht),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}),ft=at,c.a.render(r.a.createElement(ft,null),ht),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat(".","/service-worker.js");ct?(function(e,t){fetch(e).then(function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):st(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):st(t,e)})}}()},69:function(e,t,n){"use strict";function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e=e.replace("#","");var n=parseInt(e.slice(0,2),16),i=parseInt(e.slice(2,4),16),o=parseInt(e.slice(4,6),16);return"rgba(".concat(n,", ").concat(i,", ").concat(o,", ").concat(t,")")}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e=e.replace("#",""),![6,8].includes(e.length))throw Error("invalid hey HexARGB string use length of 6 or 8");if(6===e.length){var t=parseInt(e.substring(0,2),16),n=parseInt(e.substring(2,4),16),i=parseInt(e.substring(4,6),16);return"rgb(".concat(t,", ").concat(n,", ").concat(i,")")}if(8===e.length){var o=parseInt(e.substring(0,2),16)/255,r=parseInt(e.substring(2,4),16),a=parseInt(e.substring(4,6),16),c=parseInt(e.substring(6,8),16);return"rgba(".concat(r,", ").concat(a,", ").concat(c,", ").concat(o,")")}}n.d(t,"b",function(){return i}),n.d(t,"a",function(){return o})}},[[268,4,2]]]);