(function(e){function t(t){for(var o,i,s=t[0],a=t[1],l=t[2],f=0,d=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);u&&u(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,s=1;s<n.length;s++){var a=n[s];0!==r[a]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},c=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=a;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"39e3":function(e,t,n){"use strict";n("6fef")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=Object(o["e"])("h1",null,"Reaction Timer Start Game",-1);function c(e,t,n,c,i,s){var a=Object(o["g"])("Block"),l=Object(o["g"])("Results");return Object(o["f"])(),Object(o["c"])(o["a"],null,[r,Object(o["e"])("button",{onClick:t[1]||(t[1]=function(){return s.start&&s.start.apply(s,arguments)}),disabled:i.isPlaying},"Play",8,["disabled"]),i.isPlaying?(Object(o["f"])(),Object(o["c"])(a,{key:0,delay:i.delay,onEnd:s.endGame},null,8,["delay","onEnd"])):Object(o["d"])("",!0),i.showResults?(Object(o["f"])(),Object(o["c"])(l,{key:1,score:i.score},null,8,["score"])):Object(o["d"])("",!0)],64)}function i(e,t,n,r,c,i){return c.showBlock?(Object(o["f"])(),Object(o["c"])("div",{key:0,class:"block",onClick:t[1]||(t[1]=function(){return i.stopTimer&&i.stopTimer.apply(i,arguments)})}," click me ")):Object(o["d"])("",!0)}var s={props:["delay"],data:function(){return{showBlock:!1,timer:null,reactionTime:0}},mounted:function(){var e=this;console.log("component mounted"),setTimeout((function(){e.showBlock=!0,e.startTimer(),console.log(e.delay)}),this.delay)},updated:function(){console.log("component updated")},unmounted:function(){console.log("unmounted")},methods:{startTimer:function(){var e=this;this.timer=setInterval((function(){e.reactionTime+=10}),10)},stopTimer:function(){clearInterval(this.timer),console.log(this.reactionTime),this.$emit("end",this.reactionTime)}}};n("39e3");s.render=i;var a=s,l={class:"rank"};function u(e,t,n,r,c,i){return Object(o["f"])(),Object(o["c"])(o["a"],null,[Object(o["e"])("p",null,"Reaction time "+Object(o["h"])(n.score)+"ms",1),Object(o["e"])("p",l,Object(o["h"])(c.rank),1)],64)}var f={props:["score"],data:function(){return{rank:null}},mounted:function(){this.score<250?this.rank="Ninja Fingers":this.score<400?this.rank="Rapid Reflexes":this.rank="Snail pace..."}};n("8e99");f.render=u;var d=f,p={name:"App",components:{Block:a,Results:d},data:function(){return{isPlaying:!1,delay:null,score:null,showResults:!1}},methods:{start:function(){this.delay=2e3+5e3*Math.random(),this.isPlaying=!0,this.showResults=!1,console.log(this.delay)},endGame:function(e){this.score=e,this.isPlaying=!1,this.showResults=!0}}};n("d4dc");p.render=c;var h=p;Object(o["b"])(h).mount("#app")},"6fef":function(e,t,n){},8162:function(e,t,n){},"8e99":function(e,t,n){"use strict";n("8162")},c86a:function(e,t,n){},d4dc:function(e,t,n){"use strict";n("c86a")}});
//# sourceMappingURL=app.be56d599.js.map