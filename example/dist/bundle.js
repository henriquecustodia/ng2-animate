webpackJsonp([0],{0:function(t,o,n){"use strict";var e=n(1),a=n(337);e.platformBrowserDynamic().bootstrapModule(a.AppModule)},337:function(t,o,n){"use strict";var e=this&&this.__decorate||function(t,o,n,e){var a,s=arguments.length,r=s<3?o:null===e?e=Object.getOwnPropertyDescriptor(o,n):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,o,n,e);else for(var i=t.length-1;i>=0;i--)(a=t[i])&&(r=(s<3?a(r):s>3?a(o,n,r):a(o,n))||r);return s>3&&r&&Object.defineProperty(o,n,r),r},a=this&&this.__metadata||function(t,o){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,o)},s=n(11),r=n(203),i=n(338),f=n(376),l=function(){function t(){}return t=e([s.NgModule({imports:[r.BrowserModule,i.FormsModule],declarations:[f.AppComponent],bootstrap:[f.AppComponent]}),a("design:paramtypes",[])],t)}();o.AppModule=l},376:function(t,o,n){"use strict";var e=this&&this.__decorate||function(t,o,n,e){var a,s=arguments.length,r=s<3?o:null===e?e=Object.getOwnPropertyDescriptor(o,n):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,o,n,e);else for(var i=t.length-1;i>=0;i--)(a=t[i])&&(r=(s<3?a(r):s>3?a(o,n,r):a(o,n))||r);return s>3&&r&&Object.defineProperty(o,n,r),r},a=this&&this.__metadata||function(t,o){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,o)},s=n(11),r=n(377),i=function(){function t(){this.show=!0,this.animations=["fadeIn","fadeInDown","fadeInLeft","fadeInRight","fadeInUp","bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight","slideIn","slideInDown","slideInLeft","slideInRight","slideInUp"],this.animations=this.animations.map(function(t){return{key:t,show:!0,bg:Math.floor(16777215*Math.random()).toString(16)}})}return t.prototype.onToggle=function(){this.animations.forEach(function(t){return t.show=!t.show})},t=e([s.Component({selector:"app",template:n(383),styles:[n(384)],animations:[r.animateFactory(500)]}),a("design:paramtypes",[])],t)}();o.AppComponent=i},377:function(t,o,n){"use strict";var e=n(11),a=n(378),s=n(379),r=n(380),i=n(381),f=n(382);o.animateFactory=function(t,o,n){void 0===t&&(t=500),void 0===o&&(o=0),void 0===n&&(n="linear");var l=["number"==typeof t?t+"ms":t,"number"==typeof o?o+"ms":o,n].join(" ");return e.trigger("animate",a.fade(l).concat(s.bounce(l),r.rotate(l),i.slide(l),f.zoom(l)))}},378:function(t,o,n){"use strict";var e=n(11);o.fade=function(t){return[e.transition("* => fadeIn",[e.animate(t,e.keyframes([e.style({opacity:0,offset:0}),e.style({opacity:1,offset:1})]))]),e.transition("fadeIn => void",[e.animate(t,e.keyframes([e.style({opacity:1,offset:0}),e.style({opacity:0,offset:1})]))]),e.transition("* => fadeInDown",[e.animate(t,e.keyframes([e.style({opacity:0,transform:"translate3d(0, -100%, 0)",offset:0}),e.style({opacity:1,transform:"translate3d(0, 0, 0)",offset:1})]))]),e.transition("fadeInDown => void",[e.animate(t,e.keyframes([e.style({opacity:1,transform:"translate3d(0, 0, 0)",offset:0}),e.style({opacity:0,transform:"translate3d(0, 100%, 0)",offset:1})]))]),e.transition("* => fadeInLeft",[e.animate(t,e.keyframes([e.style({opacity:0,transform:"translate3d(-100%, 0, 0)",offset:0}),e.style({opacity:1,transform:"translate3d(0, 0, 0)",offset:1})]))]),e.transition("fadeInLeft => void",[e.animate(t,e.keyframes([e.style({opacity:1,transform:"translate3d(0, 0, 0)",offset:0}),e.style({opacity:0,transform:"translate3d(100%, 0, 0)",offset:1})]))]),e.transition("* => fadeInRight",[e.animate(t,e.keyframes([e.style({opacity:0,transform:"translate3d(100%, 0, 0)",offset:0}),e.style({opacity:1,transform:"translate3d(0, 0, 0)",offset:1})]))]),e.transition("fadeInRight => void",[e.animate(t,e.keyframes([e.style({opacity:1,transform:"translate3d(0, 0, 0)",offset:0}),e.style({opacity:0,transform:"translate3d(-100%, 0, 0)",offset:1})]))]),e.transition("* => fadeInUp",[e.animate(t,e.keyframes([e.style({opacity:0,transform:"translate3d(0, 100%, 0)",offset:0}),e.style({opacity:1,transform:"translate3d(0, 0, 0)",offset:1})]))]),e.transition("fadeInUp => void",[e.animate(t,e.keyframes([e.style({opacity:1,transform:"translate3d(0, 0, 0)",offset:0}),e.style({opacity:0,transform:"translate3d(0, -100%, 0)",offset:1})]))])]}},379:function(t,o,n){"use strict";var e=n(11);o.bounce=function(t){return[e.transition("* => bounceIn",[e.animate(t,e.keyframes([e.style({opacity:0,transform:"scale3d(.3, .3, .3)",offset:0}),e.style({transform:"scale3d(1.1, 1.1, 1.1)",offset:.2}),e.style({transform:"scale3d(.9, .9, .9)",offset:.4}),e.style({transform:"scale3d(1.03, 1.03, 1.03)",offset:.6}),e.style({transform:"scale3d(.97, .97, .97)",offset:.8}),e.style({opacity:1,transform:"scale3d(1, 1, 1)",offset:1})]))]),e.transition("bounceIn => void",[e.animate(t,e.keyframes([e.style({transform:"scale3d(.9, .9, .9)",offset:.2}),e.style({opacity:1,transform:"scale3d(1.1, 1.1, 1.1)",offset:.5}),e.style({opacity:0,transform:"scale3d(.3, .3, .3)",offset:1})]))]),e.transition("* => bounceInDown",[e.animate(t,e.keyframes([e.style({opacity:0,transform:"translate3d(0, -1000px, 0)",offset:0}),e.style({opacity:1,transform:"translate3d(0, 20px, 0)",offset:.6}),e.style({transform:"translate3d(0, -10px, 0)",offset:.75}),e.style({transform:"translate3d(0, 5px, 0)",offset:.9}),e.style({transform:"translate3d(0, 0, 0)",offset:1})]))]),e.transition("bounceInDown => void",[e.animate(t,e.keyframes([e.style({transform:"translate3d(0, 10px, 0)",offset:.2}),e.style({opacity:1,transform:"translate3d(0, -20px, 0)",offset:.5}),e.style({opacity:0,transform:"translate3d(0, 1000px, 0)",offset:1})]))]),e.transition("* => bounceInLeft",[e.animate(t,e.keyframes([e.style({opacity:0,transform:"translate3d(-1000px, 0, 0)",offset:0}),e.style({opacity:1,transform:"translate3d(20px, 0, 0)",offset:.6}),e.style({transform:"translate3d(-10px, 0, 0)",offset:.75}),e.style({transform:"translate3d(5px, 0, 0)",offset:.9}),e.style({transform:"translate3d(0, 0, 0)",offset:1})]))]),e.transition("bounceInLeft => void",[e.animate(t,e.keyframes([e.style({opacity:1,transform:"translate3d(-20px, 0, 0)",offset:.2}),e.style({opacity:0,transform:"translate3d(1000px, 0, 0)",offset:1})]))]),e.transition("* => bounceInRight",[e.animate(t,e.keyframes([e.style({opacity:0,transform:"translate3d(1000px, 0, 0)",offset:0}),e.style({opacity:1,transform:"translate3d(-20px, 0, 0)",offset:.6}),e.style({transform:"translate3d(10px, 0, 0)",offset:.75}),e.style({transform:"translate3d(-5px, 0, 0)",offset:.9}),e.style({transform:"translate3d(0, 0, 0)",offset:1})]))]),e.transition("bounceInRight => void",[e.animate(t,e.keyframes([e.style({opacity:1,transform:"translate3d(20px, 0, 0)",offset:.2}),e.style({opacity:0,transform:"translate3d(-1000px, 0, 0)",offset:1})]))]),e.transition("* => bounceInUp",[e.animate(t,e.keyframes([e.style({opacity:0,transform:"translate3d(0, 1000px, 0)",offset:0}),e.style({opacity:1,transform:"translate3d(0, -20px, 0)",offset:.6}),e.style({transform:"translate3d(0, 10px, 0)",offset:.75}),e.style({transform:"translate3d(0, -5px, 0)",offset:.9}),e.style({transform:"translate3d(0, 0, 0)",offset:1})]))]),e.transition("bounceInUp => void",[e.animate(t,e.keyframes([e.style({transform:"translate3d(0, -10px, 0)",offset:.2}),e.style({opacity:1,transform:"translate3d(0, 20px, 0)",offset:.5}),e.style({opacity:0,transform:"translate3d(0, -1000px, 0)",offset:1})]))])]}},380:function(t,o,n){"use strict";var e=n(11);o.rotate=function(t){return[e.transition("* => rotateIn",[e.animate(t,e.keyframes([e.style({opacity:0,transformOrigin:"center",transform:"rotate3d(0, 0, 1, -200deg)",offset:0}),e.style({opacity:1,transformOrigin:"center",transform:"rotate3d(0, 0, 1, 0deg)",offset:1})]))]),e.transition("rotateIn => void",[e.animate(t,e.keyframes([e.style({opacity:1,transformOrigin:"center",transform:"rotate3d(0, 0, 1, 0deg)",offset:0}),e.style({opacity:0,transformOrigin:"center",transform:"rotate3d(0, 0, 1, 200deg)",offset:1})]))]),e.transition("* => rotateInDownLeft",[e.animate(t,e.keyframes([e.style({opacity:0,transformOrigin:"left bottom",transform:"rotate3d(0, 0, 1, -45deg)",offset:0}),e.style({opacity:1,transformOrigin:"left bottom",transform:"rotate3d(0, 0, 1, 0deg)",offset:1})]))]),e.transition("rotateInDownLeft => void",[e.animate(t,e.keyframes([e.style({opacity:1,transformOrigin:"left bottom",transform:"rotate3d(0, 0, 1, 0deg)",offset:0}),e.style({opacity:0,transformOrigin:"left bottom",transform:"rotate3d(0, 0, 1, 45deg)",offset:1})]))]),e.transition("* => rotateInDownRight",[e.animate(t,e.keyframes([e.style({opacity:0,transformOrigin:"right bottom",transform:"rotate3d(0, 0, 1, 45deg)",offset:0}),e.style({opacity:1,transformOrigin:"right bottom",transform:"rotate3d(0, 0, 1, 0deg)",offset:1})]))]),e.transition("rotateInDownRight => void",[e.animate(t,e.keyframes([e.style({opacity:1,transformOrigin:"right bottom",transform:"rotate3d(0, 0, 1, 0deg)",offset:0}),e.style({opacity:0,transformOrigin:"right bottom",transform:"rotate3d(0, 0, 1, -45deg)",offset:1})]))]),e.transition("* => rotateInUpLeft",[e.animate(t,e.keyframes([e.style({opacity:0,transformOrigin:"left bottom",transform:"rotate3d(0, 0, 1, 45deg)",offset:0}),e.style({opacity:1,transformOrigin:"left bottom",transform:"rotate3d(0, 0, 1, 0deg)",offset:1})]))]),e.transition("rotateInUpLeft => void",[e.animate(t,e.keyframes([e.style({opacity:1,transformOrigin:"left bottom",transform:"rotate3d(0, 0, 1, 0deg)",offset:0}),e.style({opacity:0,transformOrigin:"left bottom",transform:"rotate3d(0, 0, 1, -45deg)",offset:1})]))]),e.transition("* => rotateInUpRight",[e.animate(t,e.keyframes([e.style({opacity:0,transformOrigin:"right bottom",transform:"rotate3d(0, 0, 1, -45deg)",offset:0}),e.style({opacity:1,transformOrigin:"right bottom",transform:"rotate3d(0, 0, 1, 0deg)",offset:1})]))]),e.transition("rotateInUpRight => void",[e.animate(t,e.keyframes([e.style({opacity:1,transformOrigin:"right bottom",transform:"rotate3d(0, 0, 1, 0deg)",offset:0}),e.style({opacity:0,transformOrigin:"right bottom",transform:"rotate3d(0, 0, 1, 45deg)",offset:1})]))])]}},381:function(t,o,n){"use strict";var e=n(11);o.slide=function(t){return[e.transition("* => slideInDown",[e.animate(t,e.keyframes([e.style({transform:"translate3d(0, -100%, 0)",offset:0}),e.style({transform:"translate3d(0, 0, 0)",offset:1})]))]),e.transition("slideInDown => void",[e.animate(t,e.keyframes([e.style({transform:"translate3d(0, 0, 0)",offset:0}),e.style({transform:"translate3d(0, 100%, 0)",offset:1})]))]),e.transition("* => slideInLeft",[e.animate(t,e.keyframes([e.style({transform:"translate3d(-100%, 0, 0)",offset:0}),e.style({transform:"translate3d(0, 0, 0)",offset:1})]))]),e.transition("slideInLeft => void",[e.animate(t,e.keyframes([e.style({transform:"translate3d(0, 0, 0)",offset:0}),e.style({transform:"translate3d(100%, 0, 0)",offset:1})]))]),e.transition("* => slideInRight",[e.animate(t,e.keyframes([e.style({transform:"translate3d(100%, 0, 0)",offset:0}),e.style({transform:"translate3d(0, 0, 0)",offset:1})]))]),e.transition("slideInRight => void",[e.animate(t,e.keyframes([e.style({transform:"translate3d(0, 0, 0)",offset:0}),e.style({transform:"translate3d(-100%, 0, 0)",offset:1})]))]),e.transition("* => slideInUp",[e.animate(t,e.keyframes([e.style({transform:"translate3d(0, 100%, 0)",offset:0}),e.style({transform:"translate3d(0, 0, 0)",offset:1})]))]),e.transition("slideInUp => void",[e.animate(t,e.keyframes([e.style({transform:"translate3d(0, 0, 0)",offset:0}),e.style({transform:"translate3d(0, -100%, 0)",offset:1})]))])]}},382:function(t,o,n){"use strict";var e=n(11);o.zoom=function(t){return[e.transition("* => zoomIn",[e.animate(t,e.keyframes([e.style({opacity:0,transform:"scale3d(.1, .1, .1)",offset:0}),e.style({opacity:1,transform:"scale3d(1, 1, 1)",offset:1})]))]),e.transition("zoomIn => void",[e.animate(t,e.keyframes([e.style({opacity:1,transform:"scale3d(1, 1, 1)",offset:0}),e.style({opacity:0,transform:"scale3d(.1, .1, .1)",offset:1})]))]),e.transition("* => zoomInDown",[e.animate(t,e.keyframes([e.style({opacity:0,transform:"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)",offset:0}),e.style({opacity:1,transform:"scale3d(.475, .475, .475) translate3d(0, 60px, 0)",offset:.6}),e.style({transform:"scale3d(1, 1, 1) translate3d(0, 0, 0)",offset:1})]))]),e.transition("zoomInDown => void",[e.animate(t,e.keyframes([e.style({opacity:1,transform:"scale3d(1, 1, 1) translate3d(0, 0, 0)",offset:0}),e.style({transform:"scale3d(.475, .475, .475) translate3d(0, 60px, 0)",offset:.4}),e.style({opacity:0,transform:"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)",offset:1})]))]),e.transition("* => zoomInLeft",[e.animate(t,e.keyframes([e.style({opacity:0,transform:"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)",offset:0}),e.style({opacity:1,transform:"scale3d(.475, .475, .475) translate3d(10px, 0, 0)",offset:.6}),e.style({transform:"scale3d(1, 1, 1) translate3d(0, 0, 0)",offset:1})]))]),e.transition("zoomInLeft => void",[e.animate(t,e.keyframes([e.style({opacity:1,transform:"scale3d(1, 1, 1) translate3d(0, 0, 0)",offset:0}),e.style({transform:"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)",offset:.6}),e.style({opacity:0,transform:"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)",offset:1})]))]),e.transition("* => zoomInRight",[e.animate(t,e.keyframes([e.style({opacity:0,transform:"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)",offset:0}),e.style({opacity:1,transform:"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)",offset:.6}),e.style({transform:"scale3d(1, 1, 1) translate3d(0, 0, 0)",offset:1})]))]),e.transition("zoomInRight => void",[e.animate(t,e.keyframes([e.style({opacity:1,transform:"scale3d(1, 1, 1) translate3d(0, 0, 0)",offset:0}),e.style({transform:"scale3d(.475, .475, .475) translate3d(10px, 0, 0)",offset:.6}),e.style({opacity:0,transform:"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)",offset:1})]))]),e.transition("* => zoomInUp",[e.animate(t,e.keyframes([e.style({opacity:0,transform:"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)",offset:0}),e.style({opacity:1,transform:"scale3d(.475, .475, .475) translate3d(0, -60px, 0)",offset:.6}),e.style({transform:"scale3d(1, 1, 1) translate3d(0, 0, 0)",offset:1})]))]),e.transition("zoomInUp => void",[e.animate(t,e.keyframes([e.style({opacity:1,transform:"scale3d(1, 1, 1) translate3d(0, 0, 0)",offset:0}),e.style({transform:"scale3d(.475, .475, .475) translate3d(0, -60px, 0)",offset:.4}),e.style({opacity:0,transform:"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)",offset:1})]))])]}},383:function(t,o){t.exports='<div class="container">\n  <h2 (click)="onToggle()">Ng2 Animate</h2>\n  <div class="wrap">\n    <div class="demo-wrap" *ngFor="let item of animations" (click)="item.show = !item.show">\n      <div class="demo-item" *ngIf="item.show" [@animate]="item.key" [ngStyle]="{\'background-color\': \'#\' + item.bg}">\n        {{item.key}}\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class="container" style="display: none;">\n\n\n  <div class="wrap">\n    <h1 [@animate]="state" *ngIf="show"></h1>\n\n\n  </div>\n\n  <div>\n\n    <select [(ngModel)]="state" (change)="show = true" name="state">\n      <optgroup label="Fading Entrances">\n        <option value="fadeIn">fadeIn</option>\n        <option value="fadeInDown">fadeInDown</option>\n        <option value="fadeInLeft">fadeInLeft</option>\n        <option value="fadeInRight">fadeInRight</option>\n        <option value="fadeInUp">fadeInUp</option>\n      </optgroup>\n\n      <optgroup label="Bouncing Entrances">\n        <option value="bounceIn">bounceIn</option>\n        <option value="bounceInDown">bounceInDown</option>\n        <option value="bounceInLeft">bounceInLeft</option>\n        <option value="bounceInRight">bounceInRight</option>\n        <option value="bounceInUp">bounceInUp</option>\n      </optgroup>\n\n      <!--<optgroup label="Attention Seekers">-->\n      <!--<option value="bounce">bounce</option>-->\n      <!--<option value="flash">flash</option>-->\n      <!--<option value="pulse">pulse</option>-->\n      <!--<option value="rubberBand">rubberBand</option>-->\n      <!--<option value="shake">shake</option>-->\n      <!--<option value="swing">swing</option>-->\n      <!--<option value="tada">tada</option>-->\n      <!--<option value="wobble">wobble</option>-->\n      <!--<option value="jello">jello</option>-->\n      <!--</optgroup>-->\n\n\n      <!--<optgroup label="Bouncing Exits">-->\n      <!--<option value="bounceOut">bounceOut</option>-->\n      <!--<option value="bounceOutDown">bounceOutDown</option>-->\n      <!--<option value="bounceOutLeft">bounceOutLeft</option>-->\n      <!--<option value="bounceOutRight">bounceOutRight</option>-->\n      <!--<option value="bounceOutUp">bounceOutUp</option>-->\n      <!--</optgroup>-->\n\n\n      <!--<optgroup label="Fading Exits">-->\n      <!--<option value="fadeOut">fadeOut</option>-->\n      <!--<option value="fadeOutDown">fadeOutDown</option>-->\n      <!--<option value="fadeOutDownBig">fadeOutDownBig</option>-->\n      <!--<option value="fadeOutLeft">fadeOutLeft</option>-->\n      <!--<option value="fadeOutLeftBig">fadeOutLeftBig</option>-->\n      <!--<option value="fadeOutRight">fadeOutRight</option>-->\n      <!--<option value="fadeOutRightBig">fadeOutRightBig</option>-->\n      <!--<option value="fadeOutUp">fadeOutUp</option>-->\n      <!--<option value="fadeOutUpBig">fadeOutUpBig</option>-->\n      <!--</optgroup>-->\n\n      <!--<optgroup label="Flippers">-->\n      <!--<option value="flip">flip</option>-->\n      <!--<option value="flipInX">flipInX</option>-->\n      <!--<option value="flipInY">flipInY</option>-->\n      <!--<option value="flipOutX">flipOutX</option>-->\n      <!--<option value="flipOutY">flipOutY</option>-->\n      <!--</optgroup>-->\n\n      <!--<optgroup label="Lightspeed">-->\n      <!--<option value="lightSpeedIn">lightSpeedIn</option>-->\n      <!--<option value="lightSpeedOut">lightSpeedOut</option>-->\n      <!--</optgroup>-->\n\n      <optgroup label="Rotating Entrances">\n        <option value="rotateIn">rotateIn</option>\n        <option value="rotateInDownLeft">rotateInDownLeft</option>\n        <option value="rotateInDownRight">rotateInDownRight</option>\n        <option value="rotateInUpLeft">rotateInUpLeft</option>\n        <option value="rotateInUpRight">rotateInUpRight</option>\n      </optgroup>\n\n      <!--<optgroup label="Rotating Exits">-->\n      <!--<option value="rotateOut">rotateOut</option>-->\n      <!--<option value="rotateOutDownLeft">rotateOutDownLeft</option>-->\n      <!--<option value="rotateOutDownRight">rotateOutDownRight</option>-->\n      <!--<option value="rotateOutUpLeft">rotateOutUpLeft</option>-->\n      <!--<option value="rotateOutUpRight">rotateOutUpRight</option>-->\n      <!--</optgroup>-->\n\n      <optgroup label="Sliding Entrances">\n        <option value="slideInUp">slideInUp</option>\n        <option value="slideInDown">slideInDown</option>\n        <option value="slideInLeft">slideInLeft</option>\n        <option value="slideInRight">slideInRight</option>\n\n        <!--</optgroup>-->\n        <!--<optgroup label="Sliding Exits">-->\n        <!--<option value="slideOutUp">slideOutUp</option>-->\n        <!--<option value="slideOutDown">slideOutDown</option>-->\n        <!--<option value="slideOutLeft">slideOutLeft</option>-->\n        <!--<option value="slideOutRight">slideOutRight</option>-->\n\n        <!--</optgroup>-->\n\n        <optgroup label="Zoom Entrances">\n          <option value="zoomIn">zoomIn</option>\n          <option value="zoomInDown">zoomInDown</option>\n          <option value="zoomInLeft">zoomInLeft</option>\n          <option value="zoomInRight">zoomInRight</option>\n          <option value="zoomInUp">zoomInUp</option>\n        </optgroup>\n\n        <!--<optgroup label="Zoom Exits">-->\n        <!--<option value="zoomOut">zoomOut</option>-->\n        <!--<option value="zoomOutDown">zoomOutDown</option>-->\n        <!--<option value="zoomOutLeft">zoomOutLeft</option>-->\n        <!--<option value="zoomOutRight">zoomOutRight</option>-->\n        <!--<option value="zoomOutUp">zoomOutUp</option>-->\n        <!--</optgroup>-->\n\n        <!--<optgroup label="Specials">-->\n        <!--<option value="hinge">hinge</option>-->\n        <!--<option value="rollIn">rollIn</option>-->\n        <!--<option value="rollOut">rollOut</option>-->\n        <!--</optgroup>-->\n    </select>\n\n    <button (click)="show = !show">Toggle</button>\n  </div>\n  <a href="https://github.com/yuyang041060120/ng2-animate">View on GitHub</a>\n</div>'},384:function(t,o){t.exports=".container {\n  margin: 0 auto;\n  max-width: 960px;\n}\n\nh2 {\n  color: #f35626;\n  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -webkit-animation: hue 60s infinite linear;\n  text-align: center;\n}\n\n.wrap {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.demo-wrap {\n  color: #eeeeee;\n  width: 130px;\n  height: 130px;\n  margin: 5px;\n  background-color: #898b8b;\n}\n\n.demo-item {\n  width: 100%;\n  height: 100%;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #339966;\n}\n\n@-webkit-keyframes hue {\n  from {\n    -webkit-filter: hue-rotate(0deg);\n  }\n\n  to {\n    -webkit-filter: hue-rotate(-360deg);\n  }\n}"}});
//# sourceMappingURL=bundle.js.map