!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}([function(e,t,n){"use strict";var i=n(10),o=n(31);window.Vue=i,new i({el:"body",components:{app:o}})},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t,n){function i(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=f[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(c(i.parts[r],t))}else{for(var s=[],r=0;r<i.parts.length;r++)s.push(c(i.parts[r],t));f[i.id]={id:i.id,refs:1,parts:s}}}}function o(e){for(var t=[],n={},i=0;i<e.length;i++){var o=e[i],r=o[0],s=o[1],a=o[2],l=o[3],c={css:s,media:a,sourceMap:l};n[r]?n[r].parts.push(c):t.push(n[r]={id:r,parts:[c]})}return t}function r(e,t){var n=b(),i=x[x.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",r(e,t),t}function c(e,t){var n,i,o;if(t.singleton){var r=m++;n=h||(h=a(t)),i=d.bind(null,n,r,!1),o=d.bind(null,n,r,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),i=p.bind(null,n),o=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),i=u.bind(null,n),o=function(){s(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}function d(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=k(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function u(e,t){var n=t.css,i=t.media;t.sourceMap;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,i=(t.media,t.sourceMap);i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([n],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(o),r&&URL.revokeObjectURL(r)}var f={},v=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},g=v(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=v(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,m=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=g()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return i(n,t),function(e){for(var r=[],s=0;s<n.length;s++){var a=n[s],l=f[a.id];l.refs--,r.push(l)}if(e){var c=o(e);i(c,t)}for(var s=0;s<r.length;s++){var l=r[s];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete f[l.id]}}}};var k=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){"use strict";var n=t;n.delimeter=navigator.platform.match(/win/i)?"\\":"/",n.resolveFileName=function(e){var t=e.split(/[\/\\]/g),i=t.pop(),o=t.join(n.delimeter),r=i.indexOf("."),s=i,a="";return-1!==r&&(s=i.substring(0,r),a=i.substring(r)),{fullname:e,filename:i,directory:o,basename:s,extname:a}},n.extend=function(e,t){for(var n=Object.keys(t),i=n.length;i--;)e[n[i]]=t[n[i]];return e},n.floor=function(e){return~~e},n.rand=function(e,t){return void 0===t&&(t=e,e=0),n.floor(Math.random()*(t-e))+e},n.padding=function(e,t){var n=arguments.length<=2||void 0===arguments[2]?" ":arguments[2];for(e=""+e;e.length<t;)e=n+e;return e},n.qsa=function(e){var t=arguments.length<=1||void 0===arguments[1]?document:arguments[1];return[].slice.call(t.querySelectorAll(e),0)},n.hsv2rgb=function(e,t,i){var o,r,s;if(0==t)o=r=s=i;else{e/=60;var a=n.floor(e),l=e-a,c=i*(1-t),d=i*(1-t*l),u=i*(1-t*(1-l));switch(a){case 0:o=i,r=u,s=c;break;case 1:o=d,r=i,s=c;break;case 2:o=c,r=i,s=u;break;case 3:o=c,r=d,s=i;break;case 4:o=u,r=c,s=i;break;case 5:o=i,r=c,s=d}}return o=n.floor(255*o),r=n.floor(255*r),s=n.floor(255*s),[o,r,s]},n.rgb2hex=function(e,t,i){return"#"+n.padding(e.toString(16),2,"0")+n.padding(t.toString(16),2,"0")+n.padding(i.toString(16),2,"0")},n.formatDuration=function(e){var t=arguments.length<=1||void 0===arguments[1]?!1:arguments[1];if(isNaN(e))return"--:--";var i=e%1e3;e=n.floor(e/1e3);var o=e%60;e=n.floor(e/60);var r=e%60;e=n.floor(e/60);var s=e,a="";return s>0&&(a+=s+":"),(!t||r>0)&&(a+=(a?n.padding(r,2,"0"):r)+":"),a+=a?n.padding(o,2,"0"):o,t&&(a+=":"+n.padding(i,3,"0")),a}},,,,,,function(e,t,n){n(24),e.exports=n(14),("function"==typeof e.exports?e.exports.options:e.exports).template=n(29)},function(e,t){e.exports=Vue},function(e,t,n){"use strict";var i=n(3);e.exports={data:function(){return{selectedFiles:[],groupCount:0,selectedFile:null,selectedAd:null,loading:!1,loadingProgress:0}},methods:{addFile:function(e){if(!this.selectedFiles.some(function(t){return t.fullname===e})){var t={length:NaN,ads:[]};i.extend(t,i.resolveFileName(e)),t.length=i.rand(123456),this.selectedFiles.push(t)}},openFile:function(){var e=this;bound.openFile("添加文件","音频文件(*.mp3)|*.mp3",function(t,n){n=JSON.parse(n),n.forEach(e.addFile)})},openDirectory:function(){var e=this;bound.openDirectory("*.mp3",function(t,n){n=JSON.parse(n),n.forEach(e.addFile)})},removeFile:function(e){return this.selectedFiles.$remove(e),!1},selectAd:function(e,t){this.selectedFile=e,this.selectedAd=t},detectAd:function(){var e=this;this.selectAd(null,null),this.loading=!0,this.loadingProgress=0,bound.detectAD(JSON.stringify(this.selectedFiles.map(function(e){return e.fullname})),function(t,n){e.loading=!1,n=JSON.parse(n);var i=[];n.forEach(function(t,n){var o=e.selectedFiles[n];o.length=t.length;var r=t.ads;r.forEach(function(e,t){var n=e.gid;-1===i.indexOf(n)&&i.push(n),e.ignored=!1}),o.ads=r}),e.groupCount=i.length},function(t){return e.loadingProgress=t})},cut:function(){var e=this;this.loadingProgress=0,bound.selectDirectory(function(t,n){n=JSON.parse(n),n&&(e.loading=!0,bound.cut(JSON.stringify(e.selectedFiles),n,function(t,i){alert(JSON.stringify(["cut",t,i,n],null,"  ")),e.loading=!1},function(t){return e.loadingProgress=t}))})},showDevTools:function(){bound.showDevTools()}},components:{FileList:n(33),ControlPanel:n(32),ProgressBar:n(9)}}},function(e,t,n){"use strict";var i=n(3);e.exports={props:["ad","file"],computed:{disable:function(){return!(this.ad&&this.file)},duration:function(){if(!this.ad)return"--:---";var e=this.ad.end-this.ad.start;return i.formatDuration(e,!1)},tagButtonText:function(){return this.ad?this.ad.ignored?"这是广告":"不是广告":""}},methods:{play:function(){alert("播放："+JSON.stringify({fullname:this.file.fullname,start:this.ad.start,end:this.ad.end},null,"  ")),console.log(this.file.fullname,this.ad.start,this.ad.end);var e=new Audio;e.src="file:///"+this.file.fullname.replace(/\\/g,"/"),e.play()},tagAd:function(){this.ad.ignored=!this.ad.ignored}},components:{ProgressBar:n(9)}}},function(e,t,n){"use strict";var i=n(34);e.exports={props:["files","group-count","selected-ad"],data:function(){return{expand:!0}},computed:{expandButtonText:function(){return this.expand?"-":"+"}},methods:{adMouseover:function(e){this.$broadcast("ad-active",e)},adMouseout:function(e){this.$broadcast("ad-deactive",e)}},components:{TrackViewer:i}}},function(e,t){"use strict";e.exports={props:["progress"],computed:{percent:function n(){var n=100*+this.progress;return n>100&&(n=100),0>n&&(n=0),n+"%"}}}},function(e,t,n){"use strict";var i=n(10),o=n(3);i.filter("musicTime",function(e){var t=arguments.length<=1||void 0===arguments[1]?!1:arguments[1];return o.formatDuration(e,t)}),i.filter("segmentStyle",function(e,t,n){var i={top:0,bottom:0};if(i.left=e.start/t.length*100+"%",i.right=100*(1-e.end/t.length)+"%",n>0){var r=e.gid/n*350+10,s=o.hsv2rgb(r,.8,.9),a=s[0],l=s[1],c=s[2],d=o.rgb2hex(a,l,c);i.backgroundColor=d}return i}),e.exports={props:["file","group-count","selected-ad"],data:function(){return{activeGroup:null}},methods:{removeFile:function(e){this.$dispatch("remove",this.file)},mouseover:function(e){this.$dispatch("ad-mouseover",e)},mouseout:function(e){this.$dispatch("ad-mouseout",e)},select:function(e){this.$dispatch("select-ad",this.file,e),this.selectedAd=e},tagAd:function(e){e.ignored=!e.ignored},playSegment:function(e){console.log("playSegment",e)}},events:{"ad-active":function(e){this.activeGroup=e.gid},"ad-deactive":function(e){this.activeGroup=null}}}},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".pure-button{color:#fff;border-radius:4px;text-shadow:0 1px 1px rgba(0,0,0,.2)}.pure-button-success{background:#1cb841}.pure-button-error{background:#ca3c3c}.pure-button-warning{background:#df7514}.pure-button-secondary{background:#42b8dd}.h-box,.v-box{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.v-box{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}*{box-sizing:border-box}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.spinner{-webkit-animation:spin 2s infinite ease-in-out;animation:spin 2s infinite ease-in-out}body{font:100% Helvetica,Microsoft YaHei,sans-serif;color:#333;background-color:#fff}#wrap{position:absolute;width:100%;height:100%;min-height:320px}#header{width:100%;z-index:500;box-shadow:0 0 10px #000}#body{width:100%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}#sidebar{width:120px;padding:10px 4px 0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}#sidebar button{width:100%;margin-bottom:10px}#main{min-width:360px;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;overflow-x:hidden;overflow-y:auto}#loading{position:absolute;width:100%;height:100%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:hsla(0,0%,100%,.8);z-index:999}#loading i{font-size:120px}#loading div{font-size:24px}#loading .progress{width:80%}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".control-panel[_v-1140326b]{position:relative;height:45px}.mask[_v-1140326b]{position:absolute;width:100%;height:100%;top:0;left:0;background:hsla(0,0%,100%,.8)}.player[_v-1140326b]{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.player .control[_v-1140326b],.player[_v-1140326b]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.player .control[_v-1140326b]{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-right:4px}.player .control .time[_v-1140326b]{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-right:8px}.player .control i[_v-1140326b]{font-size:30px;margin:0 4px;cursor:pointer}.player .control i[_v-1140326b]:hover{color:#000}.player .progress[_v-1140326b]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.ad-control[_v-1140326b]{padding-right:4px;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".file-list ul[_v-487615b4]{list-style:none;margin:0;padding:0}.file-list ul>li.item[_v-487615b4]{position:relative;margin-bottom:4px;background-color:#eee}.file-list ul>li.item>header[_v-487615b4]{position:absolute;left:0;top:0}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".progress-bar[_v-c2251d28]{width:100%;height:16px}.progress-bar .slot[_v-c2251d28]{position:relative;width:100%;height:100%;background-color:#fff;box-shadow:inset -2px -2px 2px #333,inset 2px 2px 2px #333}.progress-bar .slot .current[_v-c2251d28]{position:absolute;left:0;top:0;height:100%;background-color:rgba(0,88,255,.5);-webkit-transition:width .2s;transition:width .2s}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".track-viewer[_v-724d354d]{height:36px}.track-viewer .time[_v-724d354d]{position:absolute;right:0;bottom:0;padding:2px 4px;background-color:hsla(0,0%,100%,.6);font-size:12px;z-index:10}.track-viewer>.remove[_v-724d354d]{position:absolute;right:2px;top:2px;opacity:.6;cursor:pointer;z-index:30}.track-viewer>.remove[_v-724d354d]:hover{opacity:1}.track-viewer .track[_v-724d354d]{position:relative;width:100%;height:100%}.track-viewer .track>.segment[_v-724d354d]{position:absolute;height:100%;z-index:20;opacity:.6;cursor:pointer}.track-viewer .track>.segment.active[_v-724d354d],.track-viewer .track>.segment.selected[_v-724d354d]{opacity:1}.track-viewer .track>.segment.selected[_v-724d354d],.track-viewer .track>.segment[_v-724d354d]:hover{box-shadow:inset -2px -2px 2px #669bff,inset 2px 2px 2px #669bff}.track-viewer .track>.segment.ignored[_v-724d354d]:not(:hover){opacity:.2}.track-viewer .track>.segment .control[_v-724d354d]{visibility:hidden;position:absolute;top:50%;left:50%;width:36px;height:18px;margin-top:-9px;margin-left:-18px;text-align:center;z-index:100}.track-viewer .track>.segment .control>i[_v-724d354d]{font-size:18px;cursor:pointer;color:#666}.track-viewer .track>.segment .control>i[_v-724d354d]:hover{color:#000}.track-viewer .track>.segment .control.active[_v-724d354d],.track-viewer .track>.segment:hover .control[_v-724d354d]{visibility:visible}",""])},function(e,t,n){var i=n(16);"string"==typeof i&&(i=[[e.id,i,""]]);n(2)(i,{});i.locals&&(e.exports=i.locals)},function(e,t,n){var i=n(17);"string"==typeof i&&(i=[[e.id,i,""]]);n(2)(i,{});i.locals&&(e.exports=i.locals)},function(e,t,n){var i=n(18);"string"==typeof i&&(i=[[e.id,i,""]]);n(2)(i,{});i.locals&&(e.exports=i.locals)},function(e,t,n){var i=n(19);"string"==typeof i&&(i=[[e.id,i,""]]);n(2)(i,{});i.locals&&(e.exports=i.locals)},function(e,t,n){var i=n(20);"string"==typeof i&&(i=[[e.id,i,""]]);n(2)(i,{});i.locals&&(e.exports=i.locals)},function(e,t){e.exports='<div id=wrap class=v-box><div id=header><control-panel :ad=selectedAd :file=selectedFile></control-panel></div><div id=body class=h-box><div id=sidebar class=v-box><button class="pure-button pure-button-primary" @click=openFile><i class="fa fa-file-o"></i> <span>添加文件</span></button> <button class="pure-button pure-button-primary" @click=openDirectory><i class="fa fa-folder-open-o"></i> <span>添加目录</span></button> <button class="pure-button pure-button-secondary" :disabled="selectedFiles.length === 0" @click=detectAd><i class="fa fa-search"></i> <span>算！</span></button> <button class="pure-button pure-button-secondary" :disabled="selectedFiles.length === 0" @click=cut><i class="fa fa-scissors"></i> <span>干！</span></button> <button class="pure-button pure-button-warning" @click=showDevTools><i class="fa fa-cog"></i> <span>DevTools</span></button></div><div id=main class=v-box><file-list :files=selectedFiles :selected-ad.sync=selectedAd @remove=removeFile @select-ad=selectAd :group-count=groupCount></file-list></div></div></div><div id=loading v-show=loading class=v-box><i class="fa fa-spinner spinner"></i><div>玩命计算中</div><div class=progress><progress-bar :progress=loadingProgress></progress-bar></div></div>'},function(e,t){e.exports='<div class="control-panel h-box" _v-1140326b=""><div class="player h-box" _v-1140326b=""><div class="control h-box" _v-1140326b=""><span class="time h-box" _v-1140326b="">片段时长：{{duration}}</span> <i class="play fa fa-play" @click=play _v-1140326b=""></i></div></div><div class="ad-control h-box" _v-1140326b=""><button class="pure-button pure-button-warning" v-show=ad @click=tagAd _v-1140326b="">{{tagButtonText}}</button></div><div class=mask v-show=disable _v-1140326b=""></div></div>'},function(e,t){e.exports='<div class=file-list _v-487615b4=""><div class=control _v-487615b4=""></div><ul class=list v-show=expand _v-487615b4=""><li v-for="file in files" class="item v-box" _v-487615b4=""><header class=h-box _v-487615b4=""><span _v-487615b4="">{{file.filename}}</span></header><track-viewer :file=file :group-count=groupCount :selected-ad=selectedAd @ad-mouseover=adMouseover @ad-mouseout=adMouseout _v-487615b4=""></track-viewer></li></ul></div>'},function(e,t){e.exports='<div class=progress-bar _v-c2251d28=""><div class=slot _v-c2251d28=""><div class=current :style="{ width: percent }" _v-c2251d28=""></div></div></div>'},function(e,t){e.exports='<div class=track-viewer _v-724d354d=""><div class=track v-el:track="" _v-724d354d=""><div class=segment v-if="file.ads.length > 0" v-for="ad in file.ads" :class="{ active: ad.gid === activeGroup, ignored: ad.ignored, selected: ad === selectedAd }" :style="ad | segmentStyle file groupCount" @mouseover=mouseover(ad) @mouseout=mouseout(ad) @click=select(ad) _v-724d354d=""></div></div><span class=time _v-724d354d="">{{file.length | musicTime true}}</span> <i class="remove fa fa-times" @click=removeFile _v-724d354d=""></i></div>'},function(e,t,n){n(21),e.exports=n(11),("function"==typeof e.exports?e.exports.options:e.exports).template=n(26)},function(e,t,n){n(22),e.exports=n(12),("function"==typeof e.exports?e.exports.options:e.exports).template=n(27)},function(e,t,n){n(23),e.exports=n(13),("function"==typeof e.exports?e.exports.options:e.exports).template=n(28)},function(e,t,n){n(25),e.exports=n(15),("function"==typeof e.exports?e.exports.options:e.exports).template=n(30)}]);