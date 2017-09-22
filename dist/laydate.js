/*! laydate-v5.0.7 日期与时间组件 MIT License  http://www.layui.com/laydate/  By 贤心 */
 ;!function(){"use strict";function e(e,t){try{var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0)}catch(a){}e.fireEvent?e.fireEvent("on"+t):e.dispatchEvent(n)}var t=window.layui&&layui.define,n={getPath:function(){var e=document.scripts,t=e[e.length-1],n=t.src;if(!t.getAttribute("merge"))return n.substring(0,n.lastIndexOf("/")+1)}(),getStyle:function(e,t){var n=e.currentStyle?e.currentStyle:window.getComputedStyle(e,null);return n[n.getPropertyValue?"getPropertyValue":"getAttribute"](t)},link:function(e,t,i){if(a.path){var r=document.getElementsByTagName("head")[0],o=document.createElement("link");"string"==typeof t&&(i=t);var s=(i||e).replace(/\.|\//g,""),l="layuicss-"+s,d=0;o.rel="stylesheet",o.href=a.path+e,o.id=l,document.getElementById(l)||r.appendChild(o),"function"==typeof t&&!function c(){return++d>80?window.console&&console.error("laydate.css: Invalid"):void(1989===parseInt(n.getStyle(document.getElementById(l),"width"))?t():setTimeout(c,100))}()}}},a={v:"5.0.7",config:{},index:window.laydate&&window.laydate.v?1e5:0,path:n.getPath,set:function(e){var t=this;return t.config=n.extend({},t.config,e),t},ready:function(e){var i="laydate",r="",o=(t?"modules/laydate/":"theme/")+"default/laydate.css?v="+a.v+r;return t?layui.addcss(o,e,i):n.link(o,e,i),this}},i=function(){var e=this;return{hint:function(t){e.hint.call(e,t)},config:e.config}},r="laydate",o=".layui-laydate",s="layui-this",l="laydate-disabled",d="开始日期超出了结束日期<br>建议重新选择",c=[100,2e5],m="layui-laydate-static",u="layui-laydate-list",h="laydate-selected",y="layui-laydate-hint",f="laydate-day-prev",p="laydate-day-next",g="layui-laydate-footer",v=".laydate-btns-confirm",D="laydate-time-text",T=".laydate-btns-time",w=function(e){var t=this;t.index=++a.index,t.config=C.extend({},t.config,a.config,e),a.ready(function(){t.init()})},C=function(e){return new x(e)},x=function(e){for(var t=0,n="object"==typeof e?[e]:(this.selector=e,document.querySelectorAll(e||null));t<n.length;t++)this.push(n[t])};x.prototype=[],x.prototype.constructor=x,C.extend=function(){var e=1,t=arguments,n=function(e,t){e=e||(t.constructor===Array?[]:{});for(var a in t)e[a]=t[a]&&t[a].constructor===Object?n(e[a],t[a]):t[a];return e};for(t[0]="object"==typeof t[0]?t[0]:{};e<t.length;e++)"object"==typeof t[e]&&n(t[0],t[e]);return t[0]},C.ie=function(){var e=navigator.userAgent.toLowerCase();return!!(window.ActiveXObject||"ActiveXObject"in window)&&((e.match(/msie\s(\d+)/)||[])[1]||"11")}(),C.stope=function(e){e=e||win.event,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},C.each=function(e,t){var n,a=this;if("function"!=typeof t)return a;if(e=e||[],e.constructor===Object){for(n in e)if(t.call(e[n],n,e[n]))break}else for(n=0;n<e.length&&!t.call(e[n],n,e[n]);n++);return a},C.digit=function(e,t,n){var a="";e=String(e),t=t||2;for(var i=e.length;i<t;i++)a+="0";return e<Math.pow(10,t)?a+(0|e):e},C.elem=function(e,t){var n=document.createElement(e);return C.each(t||{},function(e,t){n.setAttribute(e,t)}),n},x.addStr=function(e,t){return e=e.replace(/\s+/," "),t=t.replace(/\s+/," ").split(" "),C.each(t,function(t,n){new RegExp("\\b"+n+"\\b").test(e)||(e=e+" "+n)}),e.replace(/^\s|\s$/,"")},x.removeStr=function(e,t){return e=e.replace(/\s+/," "),t=t.replace(/\s+/," ").split(" "),C.each(t,function(t,n){var a=new RegExp("\\b"+n+"\\b");a.test(e)&&(e=e.replace(a,""))}),e.replace(/\s+/," ").replace(/^\s|\s$/,"")},x.prototype.find=function(e){var t=this,n=0,a=[],i="object"==typeof e;return this.each(function(r,o){for(var s=i?[e]:o.querySelectorAll(e||null);n<s.length;n++)a.push(s[n]);t.shift()}),i||(t.selector=(t.selector?t.selector+" ":"")+e),C.each(a,function(e,n){t.push(n)}),t},x.prototype.each=function(e){return C.each.call(this,this,e)},x.prototype.addClass=function(e,t){return this.each(function(n,a){a.className=x[t?"removeStr":"addStr"](a.className,e)})},x.prototype.removeClass=function(e){return this.addClass(e,!0)},x.prototype.hasClass=function(e){var t=!1;return this.each(function(n,a){new RegExp("\\b"+e+"\\b").test(a.className)&&(t=!0)}),t},x.prototype.attr=function(e,t){var n=this;return void 0===t?function(){if(n.length>0)return n[0].getAttribute(e)}():n.each(function(n,a){a.setAttribute(e,t)})},x.prototype.removeAttr=function(e){return this.each(function(t,n){n.removeAttribute(e)})},x.prototype.html=function(e){return this.each(function(t,n){n.innerHTML=e})},x.prototype.val=function(t){return this.each(function(n,a){a.value=t,e(a,"change"),e(a,"blur")})},x.prototype.append=function(e){return this.each(function(t,n){"object"==typeof e?n.appendChild(e):n.innerHTML=n.innerHTML+e})},x.prototype.remove=function(e){return this.each(function(t,n){e?n.removeChild(e):n.parentNode.removeChild(n)})},x.prototype.on=function(e,t){return this.each(function(n,a){a.attachEvent?a.attachEvent("on"+e,function(e){e.target=e.srcElement,t.call(a,e)}):a.addEventListener(e,t,!1)})},x.prototype.off=function(e,t){return this.each(function(n,a){a.detachEvent?a.detachEvent("on"+e,t):a.removeEventListener(e,t,!1)})},w.isLeapYear=function(e){return e%4===0&&e%100!==0||e%400===0},w.prototype.config={type:"date",range:!1,format:"yyyy-MM-dd",value:null,min:"1900-1-1",max:"2099-12-31",trigger:"focus",show:!1,showBottom:!0,btns:["clear","now","confirm"],lang:"cn",theme:"default",position:null,calendar:!1,mark:{},zIndex:null,done:null,change:null},w.prototype.lang=function(){var e=this,t=e.config,n={cn:{weeks:["日","一","二","三","四","五","六"],time:["时","分","秒"],timeTips:"选择时间",startTime:"开始时间",endTime:"结束时间",dateTips:"返回日期",month:["一","二","三","四","五","六","七","八","九","十","十一","十二"],tools:{confirm:"确定",clear:"清空",now:"现在"}},en:{weeks:["Su","Mo","Tu","We","Th","Fr","Sa"],time:["Hours","Minutes","Seconds"],timeTips:"Select Time",startTime:"Start Time",endTime:"End Time",dateTips:"Select Date",month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tools:{confirm:"Confirm",clear:"Clear",now:"Now"}}};return n[t.lang]||n.cn},w.prototype.init=function(){var e=this,t=e.config,n="yyyy|y|MM|M|dd|d|HH|H|mm|m|ss|s",a="static"===t.position,i={year:"yyyy",month:"yyyy-MM",date:"yyyy-MM-dd",time:"HH:mm:ss",datetime:"yyyy-MM-dd HH:mm:ss"};t.elem=C(t.elem),t.eventElem=C(t.eventElem),t.elem[0]&&(t.range===!0&&(t.range="-"),t.format===i.date&&(t.format=i[t.type]),e.format=t.format.match(new RegExp(n+"|.","g"))||[],e.EXP_IF="",e.EXP_SPLIT="",C.each(e.format,function(t,a){var i=new RegExp(n).test(a)?"\\d{"+function(){return new RegExp(n).test(e.format[0===t?t+1:t-1]||"")?/^yyyy|y$/.test(a)?4:a.length:/^yyyy$/.test(a)?"1,4":/^y$/.test(a)?"1,308":"1,2"}()+"}":"\\"+a;e.EXP_IF=e.EXP_IF+i,e.EXP_SPLIT=e.EXP_SPLIT+"("+i+")"}),e.EXP_IF=new RegExp("^"+(t.range?e.EXP_IF+"\\s\\"+t.range+"\\s"+e.EXP_IF:e.EXP_IF)+"$"),e.EXP_SPLIT=new RegExp("^"+e.EXP_SPLIT+"$",""),e.isInput(t.elem[0])||"focus"===t.trigger&&(t.trigger="click"),t.elem.attr("lay-key")||(t.elem.attr("lay-key",e.index),t.eventElem.attr("lay-key",e.index)),t.mark=C.extend({},t.calendar&&"cn"===t.lang?{"0-1-1":"元旦","0-2-14":"情人","0-3-8":"妇女","0-3-12":"植树","0-4-1":"愚人","0-5-1":"劳动","0-5-4":"青年","0-6-1":"儿童","0-9-10":"教师","0-9-18":"国耻","0-10-1":"国庆","0-12-25":"圣诞"}:{},t.mark),C.each(["min","max"],function(e,n){var a=[],i=[];if("number"==typeof t[n]){var r=t[n],o=(new Date).getTime(),s=864e5,l=new Date(r?r<s?o+r*s:r:o);a=[l.getFullYear(),l.getMonth()+1,l.getDate()],r<s||(i=[l.getHours(),l.getMinutes(),l.getSeconds()])}else a=(t[n].match(/\d+-\d+-\d+/)||[""])[0].split("-"),i=(t[n].match(/\d+:\d+:\d+/)||[""])[0].split(":");t[n]={year:0|a[0]||(new Date).getFullYear(),month:a[1]?(0|a[1])-1:(new Date).getMonth(),date:0|a[2]||(new Date).getDate(),hours:0|i[0],minutes:0|i[1],seconds:0|i[2]}}),e.elemID="layui-laydate"+t.elem.attr("lay-key"),(t.show||a)&&e.render(),a||e.events(),t.value&&(t.value.constructor===Date?e.setValue(e.parse(0,e.systemDate(t.value))):e.setValue(t.value)))},w.prototype.render=function(){var e=this,t=e.config,n=e.lang(),a="static"===t.position,i=e.elem=C.elem("div",{id:e.elemID,"class":["layui-laydate",t.range?" layui-laydate-range":"",a?" "+m:"",t.theme&&"default"!==t.theme&&!/^#/.test(t.theme)?" laydate-theme-"+t.theme:""].join("")}),r=e.elemMain=[],o=e.elemHeader=[],s=e.elemCont=[],l=e.table=[],d=e.footer=C.elem("div",{"class":g});if(t.zIndex&&(i.style.zIndex=t.zIndex),C.each(new Array(2),function(e){if(!t.range&&e>0)return!0;var a=C.elem("div",{"class":"layui-laydate-header"}),i=[function(){var e=C.elem("i",{"class":"layui-icon laydate-icon laydate-prev-y"});return e.innerHTML="&#xe65a;",e}(),function(){var e=C.elem("i",{"class":"layui-icon laydate-icon laydate-prev-m"});return e.innerHTML="&#xe603;",e}(),function(){var e=C.elem("div",{"class":"laydate-set-ym"}),t=C.elem("span"),n=C.elem("span");return e.appendChild(t),e.appendChild(n),e}(),function(){var e=C.elem("i",{"class":"layui-icon laydate-icon laydate-next-m"});return e.innerHTML="&#xe602;",e}(),function(){var e=C.elem("i",{"class":"layui-icon laydate-icon laydate-next-y"});return e.innerHTML="&#xe65b;",e}()],d=C.elem("div",{"class":"layui-laydate-content"}),c=C.elem("table"),m=C.elem("thead"),u=C.elem("tr");C.each(i,function(e,t){a.appendChild(t)}),m.appendChild(u),C.each(new Array(6),function(e){var t=c.insertRow(0);C.each(new Array(7),function(a){if(0===e){var i=C.elem("th");i.innerHTML=n.weeks[a],u.appendChild(i)}t.insertCell(a)})}),c.insertBefore(m,c.children[0]),d.appendChild(c),r[e]=C.elem("div",{"class":"layui-laydate-main laydate-main-list-"+e}),r[e].appendChild(a),r[e].appendChild(d),o.push(i),s.push(d),l.push(c)}),C(d).html(function(){var e=[],i=[];return"datetime"===t.type&&e.push('<span lay-type="datetime" class="laydate-btns-time">'+n.timeTips+"</span>"),C.each(t.btns,function(e,r){var o=n.tools[r]||"btn";t.range&&"now"===r||(a&&"clear"===r&&(o="cn"===t.lang?"重置":"Reset"),i.push('<span lay-type="'+r+'" class="laydate-btns-'+r+'">'+o+"</span>"))}),e.push('<div class="laydate-footer-btns">'+i.join("")+"</div>"),e.join("")}()),C.each(r,function(e,t){i.appendChild(t)}),t.showBottom&&i.appendChild(d),/^#/.test(t.theme)){var c=C.elem("style"),u=["#{{id}} .layui-laydate-header{background-color:{{theme}};}","#{{id}} .layui-this{background-color:{{theme}} !important;}"].join("").replace(/{{id}}/g,e.elemID).replace(/{{theme}}/g,t.theme);"styleSheet"in c?(c.setAttribute("type","text/css"),c.styleSheet.cssText=u):c.innerHTML=u,C(i).addClass("laydate-theme-molv"),i.appendChild(c)}e.remove(w.thisElem),a?t.elem.append(i):(document.body.appendChild(i),e.position()),e.checkDate().calendar(),e.changeEvent(),w.thisElem=e.elemID,"function"==typeof t.ready&&t.ready(C.extend({},t.dateTime,{month:t.dateTime.month+1}))},w.prototype.remove=function(e){var t=this,n=(t.config,C("#"+(e||t.elemID)));return n[0]&&!n.hasClass(m)&&t.checkDate(function(){n.remove()}),t},w.prototype.position=function(){var e=this,t=e.config,n=e.bindElem||t.elem[0],a=n.getBoundingClientRect(),i=e.elem.offsetWidth,r=e.elem.offsetHeight,o=function(e){return e=e?"scrollLeft":"scrollTop",document.body[e]|document.documentElement[e]},s=function(e){return document.documentElement[e?"clientWidth":"clientHeight"]},l=5,d=a.left,c=a.bottom;d+i+l>s("width")&&(d=s("width")-i-l),c+r+l>s()&&(c=a.top>r?a.top-r:s()-r,c-=2*l),t.position&&(e.elem.style.position=t.position),e.elem.style.left=d+("fixed"===t.position?0:o(1))+"px",e.elem.style.top=c+("fixed"===t.position?0:o())+"px"},w.prototype.hint=function(e){var t=this,n=(t.config,C.elem("div",{"class":y}));n.innerHTML=e||"",C(t.elem).find("."+y).remove(),t.elem.appendChild(n),clearTimeout(t.hinTimer),t.hinTimer=setTimeout(function(){C(t.elem).find("."+y).remove()},3e3)},w.prototype.getAsYM=function(e,t,n){return n?t--:t++,t<0&&(t=11,e--),t>11&&(t=0,e++),[e,t]},w.prototype.systemDate=function(e){var t=e||new Date;return{year:t.getFullYear(),month:t.getMonth(),date:t.getDate(),hours:e?e.getHours():0,minutes:e?e.getMinutes():0,seconds:e?e.getSeconds():0}},w.prototype.checkDate=function(e){var t,n,i=this,r=(new Date,i.config),o=r.dateTime=r.dateTime||i.systemDate(),s=i.bindElem||r.elem[0],l=(i.isInput(s)?"val":"html",i.isInput(s)?s.value:"static"===r.position?"":s.innerHTML),d=function(e){e.year>c[1]&&(e.year=c[1],n=!0),e.month>11&&(e.month=11,n=!0),e.hours>23&&(e.hours=0,n=!0),e.minutes>59&&(e.minutes=0,e.hours++,n=!0),e.seconds>59&&(e.seconds=0,e.minutes++,n=!0),t=a.getEndDate(e.month+1,e.year),e.date>t&&(e.date=t,n=!0)},m=function(e,t,a){var o=["startTime","endTime"];t=(t.match(i.EXP_SPLIT)||[]).slice(1),a=a||0,r.range&&(i[o[a]]=i[o[a]]||{}),C.each(i.format,function(s,l){var d=parseFloat(t[s]);t[s].length<l.length&&(n=!0),/yyyy|y/.test(l)?(d<c[0]&&(d=c[0],n=!0),e.year=d):/MM|M/.test(l)?(d<1&&(d=1,n=!0),e.month=d-1):/dd|d/.test(l)?(d<1&&(d=1,n=!0),e.date=d):/HH|H/.test(l)?(d<1&&(d=0,n=!0),e.hours=d,r.range&&(i[o[a]].hours=d)):/mm|m/.test(l)?(d<1&&(d=0,n=!0),e.minutes=d,r.range&&(i[o[a]].minutes=d)):/ss|s/.test(l)&&(d<1&&(d=0,n=!0),e.seconds=d,r.range&&(i[o[a]].seconds=d))}),d(e)};return"limit"===e?(d(o),i):(l=l||r.value,"string"==typeof l&&(l=l.replace(/\s+/g," ").replace(/^\s|\s$/g,"")),i.startState&&!i.endState&&(delete i.startState,i.endState=!0),"string"==typeof l&&l?i.EXP_IF.test(l)?r.range?(l=l.split(" "+r.range+" "),i.startDate=i.startDate||i.systemDate(),i.endDate=i.endDate||i.systemDate(),r.dateTime=C.extend({},i.startDate),C.each([i.startDate,i.endDate],function(e,t){m(t,l[e],e)})):m(o,l):(i.hint("日期格式不合法<br>必须遵循下述格式：<br>"+(r.range?r.format+" "+r.range+" "+r.format:r.format)+"<br>已为你重置"),n=!0):l&&l.constructor===Date?r.dateTime=i.systemDate(l):(r.dateTime=i.systemDate(),delete i.startState,delete i.endState,delete i.startDate,delete i.endDate,delete i.startTime,delete i.endTime),d(o),n&&l&&i.setValue(r.range?i.endDate?i.parse():"":i.parse()),e&&e(),i)},w.prototype.mark=function(e,t){var n,a=this,i=a.config;return C.each(i.mark,function(e,a){var i=e.split("-");i[0]!=t[0]&&0!=i[0]||i[1]!=t[1]&&0!=i[1]||i[2]!=t[2]||(n=a||t[2])}),n&&e.html('<span class="laydate-day-mark">'+n+"</span>"),a},w.prototype.limit=function(e,t,n,a){var i,r=this,o=r.config,s={},d=o[n>41?"endDate":"dateTime"],c=C.extend({},d,t||{});return C.each({now:c,min:o.min,max:o.max},function(e,t){s[e]=r.newDate(C.extend({year:t.year,month:t.month,date:t.date},function(){var e={};return C.each(a,function(n,a){e[a]=t[a]}),e}())).getTime()}),i=s.now<s.min||s.now>s.max,e&&e[i?"addClass":"removeClass"](l),i},w.prototype.calendar=function(e){var t,n,i,r=this,o=r.config,l=e||o.dateTime,d=new Date,m=r.lang(),u="date"!==o.type&&"datetime"!==o.type,h=e?1:0,y=C(r.table[h]).find("td"),f=C(r.elemHeader[h][2]).find("span");if(l.year<c[0]&&(l.year=c[0],r.hint("最低只能支持到公元"+c[0]+"年")),l.year>c[1]&&(l.year=c[1],r.hint("最高只能支持到公元"+c[1]+"年")),r.firstDate||(r.firstDate=C.extend({},l)),d.setFullYear(l.year,l.month,1),t=d.getDay(),n=a.getEndDate(l.month,l.year),i=a.getEndDate(l.month+1,l.year),C.each(y,function(e,a){var d=[l.year,l.month],c=0;a=C(a),a.removeAttr("class"),e<t?(c=n-t+e,a.addClass("laydate-day-prev"),d=r.getAsYM(l.year,l.month,"sub")):e>=t&&e<i+t?(c=e-t,o.range||c+1===l.date&&a.addClass(s)):(c=e-i-t,a.addClass("laydate-day-next"),d=r.getAsYM(l.year,l.month)),d[1]++,d[2]=c+1,a.attr("lay-ymd",d.join("-")).html(d[2]),r.mark(a,d).limit(a,{year:d[0],month:d[1]-1,date:d[2]},e)}),C(f[0]).attr("lay-ym",l.year+"-"+(l.month+1)),C(f[1]).attr("lay-ym",l.year+"-"+(l.month+1)),"cn"===o.lang?(C(f[0]).attr("lay-type","year").html(l.year+"年"),C(f[1]).attr("lay-type","month").html(l.month+1+"月")):(C(f[0]).attr("lay-type","month").html(m.month[l.month]),C(f[1]).attr("lay-type","year").html(l.year)),u&&(o.range&&(e?r.endDate=r.endDate||{year:l.year+("year"===o.type?1:0),month:l.month+("month"===o.type?0:-1)}:r.startDate=r.startDate||{year:l.year,month:l.month},e&&(r.listYM=[[r.startDate.year,r.startDate.month+1],[r.endDate.year,r.endDate.month+1]],r.list(o.type,0).list(o.type,1),"time"===o.type?r.setBtnStatus("时间",C.extend({},r.systemDate(),r.startTime),C.extend({},r.systemDate(),r.endTime)):r.setBtnStatus(!0))),o.range||(r.listYM=[[l.year,l.month+1]],r.list(o.type,0))),o.range&&!e){var p=r.getAsYM(l.year,l.month);r.calendar(C.extend({},l,{year:p[0],month:p[1]}))}return o.range||r.limit(C(r.footer).find(v),null,0,["hours","minutes","seconds"]),o.range&&e&&!u&&r.stampRange(),r},w.prototype.list=function(e,t){var n=this,a=n.config,i=a.dateTime,r=n.lang(),o=a.range&&"date"!==a.type&&"datetime"!==a.type,d=C.elem("ul",{"class":u+" "+{year:"laydate-year-list",month:"laydate-month-list",time:"laydate-time-list"}[e]}),c=n.elemHeader[t],m=C(c[2]).find("span"),h=n.elemCont[t||0],y=C(h).find("."+u)[0],f="cn"===a.lang,p=f?"年":"",g=n.listYM[t]||{},w=["hours","minutes","seconds"],x=["startTime","endTime"][t];if(g[0]<1&&(g[0]=1),"year"===e){var M,b=M=g[0]-7;b<1&&(b=M=1),C.each(new Array(15),function(e){var i=C.elem("li",{"lay-ym":M}),r={year:M};M==g[0]&&C(i).addClass(s),i.innerHTML=M+p,d.appendChild(i),M<n.firstDate.year?(r.month=a.min.month,r.date=a.min.date):M>=n.firstDate.year&&(r.month=a.max.month,r.date=a.max.date),n.limit(C(i),r,t),M++}),C(m[f?0:1]).attr("lay-ym",M-8+"-"+g[1]).html(b+p+" - "+(M-1+p))}else if("month"===e)C.each(new Array(12),function(e){var i=C.elem("li",{"lay-ym":e}),o={year:g[0],month:e};e+1==g[1]&&C(i).addClass(s),i.innerHTML=r.month[e]+(f?"月":""),d.appendChild(i),g[0]<n.firstDate.year?o.date=a.min.date:g[0]>=n.firstDate.year&&(o.date=a.max.date),n.limit(C(i),o,t)}),C(m[f?0:1]).attr("lay-ym",g[0]+"-"+g[1]).html(g[0]+p);else if("time"===e){var E=function(){C(d).find("ol").each(function(e,a){C(a).find("li").each(function(a,i){n.limit(C(i),[{hours:a},{hours:n[x].hours,minutes:a},{hours:n[x].hours,minutes:n[x].minutes,seconds:a}][e],t,[["hours"],["hours","minutes"],["hours","minutes","seconds"]][e])})}),a.range||n.limit(C(n.footer).find(v),n[x],0,["hours","minutes","seconds"])};a.range?n[x]||(n[x]={hours:0,minutes:0,seconds:0}):n[x]=i,C.each([24,60,60],function(e,t){var a=C.elem("li"),i=["<p>"+r.time[e]+"</p><ol>"];C.each(new Array(t),function(t){i.push("<li"+(n[x][w[e]]===t?' class="'+s+'"':"")+">"+C.digit(t,2)+"</li>")}),a.innerHTML=i.join("")+"</ol>",d.appendChild(a)}),E()}if(y&&h.removeChild(y),h.appendChild(d),"year"===e||"month"===e)C(n.elemMain[t]).addClass("laydate-ym-show"),C(d).find("li").on("click",function(){var r=0|C(this).attr("lay-ym");if(!C(this).hasClass(l)){if(0===t)i[e]=r,o&&(n.startDate[e]=r),n.limit(C(n.footer).find(v),null,0);else if(o)n.endDate[e]=r;else{var c="year"===e?n.getAsYM(r,g[1]-1,"sub"):n.getAsYM(g[0],r,"sub");C.extend(i,{year:c[0],month:c[1]})}"year"===a.type||"month"===a.type?(C(d).find("."+s).removeClass(s),C(this).addClass(s),"month"===a.type&&"year"===e&&(n.listYM[t][0]=r,o&&(n[["startDate","endDate"][t]].year=r),n.list("month",t))):(n.checkDate("limit").calendar(),n.closeList()),n.setBtnStatus(),a.range||n.done(null,"change"),C(n.footer).find(T).removeClass(l)}});else{var S=C.elem("span",{"class":D}),k=function(){C(d).find("ol").each(function(e){var t=this,a=C(t).find("li");t.scrollTop=30*(n[x][w[e]]-2),t.scrollTop<=0&&a.each(function(e,n){if(!C(this).hasClass(l))return t.scrollTop=30*(e-2),!0})})},H=C(c[2]).find("."+D);k(),S.innerHTML=a.range?[r.startTime,r.endTime][t]:r.timeTips,C(n.elemMain[t]).addClass("laydate-time-show"),H[0]&&H.remove(),c[2].appendChild(S),C(d).find("ol").each(function(e){var t=this;C(t).find("li").on("click",function(){var r=0|this.innerHTML;C(this).hasClass(l)||(a.range?n[x][w[e]]=r:i[w[e]]=r,C(t).find("."+s).removeClass(s),C(this).addClass(s),E(),k(),(n.endDate||"time"===a.type)&&n.done(null,"change"),n.setBtnStatus())})})}return n},w.prototype.listYM=[],w.prototype.closeList=function(){var e=this;e.config;C.each(e.elemCont,function(t,n){C(this).find("."+u).remove(),C(e.elemMain[t]).removeClass("laydate-ym-show laydate-time-show")}),C(e.elem).find("."+D).remove()},w.prototype.setBtnStatus=function(e,t,n){var a,i=this,r=i.config,o=C(i.footer).find(v),s=r.range&&"date"!==r.type&&"time"!==r.type;s&&(t=t||i.startDate,n=n||i.endDate,a=i.newDate(t).getTime()>i.newDate(n).getTime(),i.limit(null,t)||i.limit(null,n)?o.addClass(l):o[a?"addClass":"removeClass"](l),e&&a&&i.hint("string"==typeof e?d.replace(/日期/g,e):d))},w.prototype.parse=function(e,t){var n=this,a=n.config,i=t||(e?C.extend({},n.endDate,n.endTime):a.range?C.extend({},n.startDate,n.startTime):a.dateTime),r=n.format.concat();return C.each(r,function(e,t){/yyyy|y/.test(t)?r[e]=C.digit(i.year,t.length):/MM|M/.test(t)?r[e]=C.digit(i.month+1,t.length):/dd|d/.test(t)?r[e]=C.digit(i.date,t.length):/HH|H/.test(t)?r[e]=C.digit(i.hours,t.length):/mm|m/.test(t)?r[e]=C.digit(i.minutes,t.length):/ss|s/.test(t)&&(r[e]=C.digit(i.seconds,t.length))}),a.range&&!e?r.join("")+" "+a.range+" "+n.parse(1):r.join("")},w.prototype.newDate=function(e){return new Date(e.year||1,e.month||0,e.date||1,e.hours||0,e.minutes||0,e.seconds||0)},w.prototype.setValue=function(e){var t=this,n=t.config,a=t.bindElem||n.elem[0],i=t.isInput(a)?"val":"html";return"static"===n.position||C(a)[i](e||""),this},w.prototype.stampRange=function(){var e,t,n=this,a=n.config,i=C(n.elem).find("td");if(a.range&&!n.endDate&&C(n.footer).find(v).addClass(l),n.endDate)return e=n.newDate({year:n.startDate.year,month:n.startDate.month,date:n.startDate.date}).getTime(),t=n.newDate({year:n.endDate.year,month:n.endDate.month,date:n.endDate.date}).getTime(),e>t?n.hint(d):void C.each(i,function(a,i){var r=C(i).attr("lay-ymd").split("-"),o=n.newDate({year:r[0],month:r[1]-1,date:r[2]}).getTime();C(i).removeClass(h+" "+s),o!==e&&o!==t||C(i).addClass(C(i).hasClass(f)||C(i).hasClass(p)?h:s),o>e&&o<t&&C(i).addClass(h)})},w.prototype.done=function(e,t){var n=this,a=n.config,i=C.extend({},n.startDate?C.extend(n.startDate,n.startTime):a.dateTime),r=C.extend({},C.extend(n.endDate,n.endTime));return C.each([i,r],function(e,t){"month"in t&&C.extend(t,{month:t.month+1})}),e=e||[n.parse(),i,r],"function"==typeof a[t||"done"]&&a[t||"done"].apply(a,e),n},w.prototype.choose=function(e){var t=this,n=t.config,a=n.dateTime,i=C(t.elem).find("td"),r=e.attr("lay-ymd").split("-"),o=function(e){new Date;e&&C.extend(a,r),n.range&&(t.startDate?C.extend(t.startDate,r):t.startDate=C.extend({},r,t.startTime),t.startYMD=r)};if(r={year:0|r[0],month:(0|r[1])-1,date:0|r[2]},!e.hasClass(l))if(n.range){if(C.each(["startTime","endTime"],function(e,n){t[n]=t[n]||{hours:0,minutes:0,seconds:0}}),t.endState)o(),delete t.endState,delete t.endDate,t.startState=!0,i.removeClass(s+" "+h),e.addClass(s);else if(t.startState){if(e.addClass(s),t.endDate?C.extend(t.endDate,r):t.endDate=C.extend({},r,t.endTime),t.newDate(r).getTime()<t.newDate(t.startYMD).getTime()){var d=C.extend({},t.endDate,{hours:t.startDate.hours,minutes:t.startDate.minutes,seconds:t.startDate.seconds});C.extend(t.endDate,t.startDate,{hours:t.endDate.hours,minutes:t.endDate.minutes,seconds:t.endDate.seconds}),t.startDate=d}n.showBottom||t.done(),t.stampRange(),t.endState=!0,t.done(null,"change")}else e.addClass(s),o(),t.startState=!0;C(t.footer).find(v)[t.endDate?"removeClass":"addClass"](l)}else"static"===n.position?(o(!0),t.calendar().done().done(null,"change")):"date"===n.type?(o(!0),t.setValue(t.parse()).remove().done()):"datetime"===n.type&&(o(!0),t.calendar().done(null,"change"))},w.prototype.tool=function(e,t){var n=this,a=n.config,i=a.dateTime,r="static"===a.position,o={datetime:function(){C(e).hasClass(l)||(n.list("time",0),a.range&&n.list("time",1),C(e).attr("lay-type","date").html(n.lang().dateTips))},date:function(){n.closeList(),C(e).attr("lay-type","datetime").html(n.lang().timeTips)},clear:function(){n.setValue("").remove(),r&&(C.extend(i,n.firstDate),n.calendar()),a.range&&(delete n.startState,delete n.endState,delete n.endDate,delete n.startTime,delete n.endTime),n.done(["",{},{}])},now:function(){var e=new Date;C.extend(i,n.systemDate(),{hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds()}),n.setValue(n.parse()).remove(),r&&n.calendar(),n.done()},confirm:function(){if(a.range){if(!n.endDate)return n.hint("请先选择日期范围");if(C(e).hasClass(l))return n.hint("time"===a.type?d.replace(/日期/g,"时间"):d)}else if(C(e).hasClass(l))return n.hint("不在有效日期或时间范围内");n.done(),n.setValue(n.parse()).remove()}};o[t]&&o[t]()},w.prototype.change=function(e){var t=this,n=t.config,a=n.dateTime,i=n.range&&("year"===n.type||"month"===n.type),r=t.elemCont[e||0],o=t.listYM[e],s=function(s){var l=["startDate","endDate"][e],d=C(r).find(".laydate-year-list")[0],c=C(r).find(".laydate-month-list")[0];return d&&(o[0]=s?o[0]-15:o[0]+15,t.list("year",e)),c&&(s?o[0]--:o[0]++,t.list("month",e)),(d||c)&&(C.extend(a,{year:o[0]}),i&&(t[l].year=o[0]),n.range||t.done(null,"change"),t.setBtnStatus(),n.range||t.limit(C(t.footer).find(v),{year:o[0]})),d||c};return{prevYear:function(){s("sub")||(a.year--,t.checkDate("limit").calendar(),n.range||t.done(null,"change"))},prevMonth:function(){var e=t.getAsYM(a.year,a.month,"sub");C.extend(a,{year:e[0],month:e[1]}),t.checkDate("limit").calendar(),n.range||t.done(null,"change")},nextMonth:function(){var e=t.getAsYM(a.year,a.month);C.extend(a,{year:e[0],month:e[1]}),t.checkDate("limit").calendar(),n.range||t.done(null,"change")},nextYear:function(){s()||(a.year++,t.checkDate("limit").calendar(),n.range||t.done(null,"change"))}}},w.prototype.changeEvent=function(){var e=this;e.config;C(e.elem).on("click",function(e){C.stope(e)}),C.each(e.elemHeader,function(t,n){C(n[0]).on("click",function(n){e.change(t).prevYear()}),C(n[1]).on("click",function(n){e.change(t).prevMonth()}),C(n[2]).find("span").on("click",function(n){var a=C(this),i=a.attr("lay-ym"),r=a.attr("lay-type");i&&(i=i.split("-"),e.listYM[t]=[0|i[0],0|i[1]],e.list(r,t),C(e.footer).find(T).addClass(l))}),C(n[3]).on("click",function(n){e.change(t).nextMonth()}),C(n[4]).on("click",function(n){e.change(t).nextYear()})}),C.each(e.table,function(t,n){var a=C(n).find("td");a.on("click",function(){e.choose(C(this))})}),C(e.footer).find("span").on("click",function(){var t=C(this).attr("lay-type");e.tool(this,t)})},w.prototype.isInput=function(e){return/input|textarea/.test(e.tagName.toLocaleLowerCase())},w.prototype.events=function(){var e=this,t=e.config,n=function(n,a){n.on(t.trigger,function(){a&&(e.bindElem=this),e.render()})};t.elem[0]&&!t.elem[0].eventHandler&&(n(t.elem,"bind"),n(t.eventElem),C(document).on("click",function(n){n.target!==t.elem[0]&&n.target!==t.eventElem[0]&&n.target!==C(t.closeStop)[0]&&e.remove()}).on("keydown",function(t){13===t.keyCode&&C("#"+e.elemID)[0]&&e.elemID===w.thisElem&&(t.preventDefault(),C(e.footer).find(v)[0].click())}),C(window).on("resize",function(){return!(!e.elem||!C(o)[0])&&void e.position()}),t.elem[0].eventHandler=!0)},a.render=function(e){var t=new w(e);return i.call(t)},a.getEndDate=function(e,t){var n=new Date;return n.setFullYear(t||n.getFullYear(),e||n.getMonth()+1,1),new Date(n.getTime()-864e5).getDate()},window.lay=window.lay||C,t?(a.ready(),layui.define(function(e){a.path=layui.cache.dir,e(r,a)})):"function"==typeof define&&define.amd?define(function(){return a}):function(){a.ready(),window.laydate=a}()}();