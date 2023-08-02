(()=>{var t={104:t=>{var e="undefined"!=typeof process&&process.pid?process.pid.toString(36):"";function n(){var t=Date.now(),e=n.last||t;return n.last=t>e?t:e+1}t.exports=t.exports.default=function(t,r){return(t||"")+""+e+n().toString(36)+(r||"")},t.exports.process=function(t,r){return(t||"")+e+n().toString(36)+(r||"")},t.exports.time=function(t,e){return(t||"")+n().toString(36)+(e||"")}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(104),e=n.n(t);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function o(t){a(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===r(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function i(t){return t.sort(((t,e)=>{const n=function(t,e){a(2,arguments);var n=o(t),r=o(e),i=n.getTime()-r.getTime();return i<0?-1:i>0?1:i}(t.dueDate,e.dueDate);return 0===n?t.priority-e.priority:n}))}class s{#t;#e=new Map;constructor(t,n=e()()){this.name=t,this.#t=n}getId(){return this.#t}getTasks(){return this.#e}getTaskById(t){return this.#e.get(t)}getTasksAsArray(){return[...this.getTasks().values()]}getSortedTasks(){return i(this.getTasksAsArray())}addTask(t){t.setProject(this),this.#e.set(t.getId(),t)}removeTaskById(t){this.#e.delete(t)}toJSON(){return{id:this.#t,name:this.name}}}function u(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function d(t){a(1,arguments);var e=o(t),n=e.getUTCDay(),r=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function c(t){a(1,arguments);var e=o(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=d(r),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var u=d(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=u.getTime()?n:n-1}var l={};function m(){return l}function h(t,e){var n,r,i,s,d,c,l,h;a(1,arguments);var g=m(),f=u(null!==(n=null!==(r=null!==(i=null!==(s=null==e?void 0:e.weekStartsOn)&&void 0!==s?s:null==e||null===(d=e.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==i?i:g.weekStartsOn)&&void 0!==r?r:null===(l=g.locale)||void 0===l||null===(h=l.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==n?n:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=o(t),w=v.getUTCDay(),b=(w<f?7:0)+w-f;return v.setUTCDate(v.getUTCDate()-b),v.setUTCHours(0,0,0,0),v}function g(t,e){var n,r,i,s,d,c,l,g;a(1,arguments);var f=o(t),v=f.getUTCFullYear(),w=m(),b=u(null!==(n=null!==(r=null!==(i=null!==(s=null==e?void 0:e.firstWeekContainsDate)&&void 0!==s?s:null==e||null===(d=e.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==i?i:w.firstWeekContainsDate)&&void 0!==r?r:null===(l=w.locale)||void 0===l||null===(g=l.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==n?n:1);if(!(b>=1&&b<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(v+1,0,b),y.setUTCHours(0,0,0,0);var p=h(y,e),T=new Date(0);T.setUTCFullYear(v,0,b),T.setUTCHours(0,0,0,0);var k=h(T,e);return f.getTime()>=p.getTime()?v+1:f.getTime()>=k.getTime()?v:v-1}function f(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const v=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return f("yy"===e?r%100:r,e.length)},w=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):f(n+1,2)},b=function(t,e){return f(t.getUTCDate(),e.length)},y=function(t,e){return f(t.getUTCHours()%12||12,e.length)},p=function(t,e){return f(t.getUTCHours(),e.length)},T=function(t,e){return f(t.getUTCMinutes(),e.length)},k=function(t,e){return f(t.getUTCSeconds(),e.length)},j=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return f(Math.floor(r*Math.pow(10,n-3)),e.length)};var P={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return v(t,e)},Y:function(t,e,n,r){var a=g(t,r),o=a>0?a:1-a;return"YY"===e?f(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):f(o,e.length)},R:function(t,e){return f(c(t),e.length)},u:function(t,e){return f(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return f(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return f(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return w(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return f(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var i=function(t,e){a(1,arguments);var n=o(t),r=h(n,e).getTime()-function(t,e){var n,r,o,i,s,d,c,l;a(1,arguments);var f=m(),v=u(null!==(n=null!==(r=null!==(o=null!==(i=null==e?void 0:e.firstWeekContainsDate)&&void 0!==i?i:null==e||null===(s=e.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==o?o:f.firstWeekContainsDate)&&void 0!==r?r:null===(c=f.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==n?n:1),w=g(t,e),b=new Date(0);return b.setUTCFullYear(w,0,v),b.setUTCHours(0,0,0,0),h(b,e)}(n,e).getTime();return Math.round(r/6048e5)+1}(t,r);return"wo"===e?n.ordinalNumber(i,{unit:"week"}):f(i,e.length)},I:function(t,e,n){var r=function(t){a(1,arguments);var e=o(t),n=d(e).getTime()-function(t){a(1,arguments);var e=c(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),d(n)}(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):f(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):b(t,e)},D:function(t,e,n){var r=function(t){a(1,arguments);var e=o(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=n-e.getTime();return Math.floor(r/864e5)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):f(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return f(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return f(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return f(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return y(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):p(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):f(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):f(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):T(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):k(t,e)},S:function(t,e){return j(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return E(a);case"XXXX":case"XX":return M(a);default:return M(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return E(a);case"xxxx":case"xx":return M(a);default:return M(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+D(a,":");default:return"GMT"+M(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+D(a,":");default:return"GMT"+M(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return f(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return f((r._originalDate||t).getTime(),e.length)}};function D(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+f(o,2)}function E(t,e){return t%60==0?(t>0?"-":"+")+f(Math.abs(t)/60,2):M(t,e)}function M(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+f(Math.floor(a/60),2)+n+f(a%60,2)}const C=P;var I=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},S=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},x={p:S,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return I(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",I(a,e)).replace("{{time}}",S(o,e))}};const N=x;function A(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var U=["D","DD"],O=["YY","YYYY"];function _(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var L={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Y(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var W,B={date:Y({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Y({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Y({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},q={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function F(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,s=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[s]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function H(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,s=o[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(u)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(s))return n}(u):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(s))return n}(u);return i=t.valueCallback?t.valueCallback(d):d,{value:i=n.valueCallback?n.valueCallback(i):i,rest:e.slice(s.length)}}}const V={code:"en-US",formatDistance:function(t,e,n){var r,a=L[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:B,formatRelative:function(t,e,n,r){return q[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:F({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:F({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:F({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:F({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:F({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(W={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(W.matchPattern);if(!n)return null;var r=n[0],a=t.match(W.parsePattern);if(!a)return null;var o=W.valueCallback?W.valueCallback(a[0]):a[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(r.length)}}),era:H({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:H({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:H({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:H({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:H({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var R=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,z=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,J=/^'([^]*?)'?$/,Q=/''/g,G=/[a-zA-Z]/;function X(t,e,n){var i,s,d,c,l,h,g,f,v,w,b,y,p,T,k,j,P,D;a(2,arguments);var E=String(e),M=m(),I=null!==(i=null!==(s=null==n?void 0:n.locale)&&void 0!==s?s:M.locale)&&void 0!==i?i:V,S=u(null!==(d=null!==(c=null!==(l=null!==(h=null==n?void 0:n.firstWeekContainsDate)&&void 0!==h?h:null==n||null===(g=n.locale)||void 0===g||null===(f=g.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==l?l:M.firstWeekContainsDate)&&void 0!==c?c:null===(v=M.locale)||void 0===v||null===(w=v.options)||void 0===w?void 0:w.firstWeekContainsDate)&&void 0!==d?d:1);if(!(S>=1&&S<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var x=u(null!==(b=null!==(y=null!==(p=null!==(T=null==n?void 0:n.weekStartsOn)&&void 0!==T?T:null==n||null===(k=n.locale)||void 0===k||null===(j=k.options)||void 0===j?void 0:j.weekStartsOn)&&void 0!==p?p:M.weekStartsOn)&&void 0!==y?y:null===(P=M.locale)||void 0===P||null===(D=P.options)||void 0===D?void 0:D.weekStartsOn)&&void 0!==b?b:0);if(!(x>=0&&x<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!I.localize)throw new RangeError("locale must contain localize property");if(!I.formatLong)throw new RangeError("locale must contain formatLong property");var L=o(t);if(!function(t){if(a(1,arguments),!function(t){return a(1,arguments),t instanceof Date||"object"===r(t)&&"[object Date]"===Object.prototype.toString.call(t)}(t)&&"number"!=typeof t)return!1;var e=o(t);return!isNaN(Number(e))}(L))throw new RangeError("Invalid time value");var Y=function(t,e){return a(2,arguments),function(t,e){a(2,arguments);var n=o(t).getTime(),r=u(e);return new Date(n+r)}(t,-u(e))}(L,A(L)),W={firstWeekContainsDate:S,weekStartsOn:x,locale:I,_originalDate:L};return E.match(z).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,N[e])(t,I.formatLong):t})).join("").match(R).map((function(r){if("''"===r)return"'";var a,o,i=r[0];if("'"===i)return(o=(a=r).match(J))?o[1].replace(Q,"'"):a;var s,u=C[i];if(u)return null!=n&&n.useAdditionalWeekYearTokens||(s=r,-1===O.indexOf(s))||_(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!function(t){return-1!==U.indexOf(t)}(r)||_(r,e,String(t)),u(Y,r,I.localize,W);if(i.match(G))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return r})).join("")}class ${#t=e()();#n;#r;static DEFAULT_DESCRIPTION="No description.";constructor(t,e,n,r){this.setValues(t,e,n,r)}setValues(t,e,n,r){this.title=t,this.desc=e,this.dueDate=n,this.priority=r}get desc(){return this._desc}set desc(t){""===t&&(t=$.DEFAULT_DESCRIPTION),this._desc=t}get dueDate(){return this._dueDate}set dueDate(t){this._dueDate=new Date(t)}getId(){return this.#t}setProject(t){this.#n=t.getId(),this.#r=t.name}getProjectId(){return this.#n}getProjectName(){return this.#r}toJSON(){return{projectId:this.#n,projectName:this.#r,title:this.title,desc:this.desc===$.DEFAULT_DESCRIPTION?"":this.desc,dueDate:X(this.dueDate,"yyyy-MM-dd"),priority:this.priority}}}const K=new class{#a=[];setProjects(t){this.#a=t}addProject(t){this.#a.push(t)}removeProjectById(t){this.#a=this.#a.filter((e=>e.getId()!==t))}getProjects(){return this.#a}getProjectById(t){return this.#a.find((e=>e.getId()===t))}getDefaultProject(){return this.getProjectById(ft.getDefaultProjectId())}getActiveProject(){return this.getProjectById(ft.getActiveProjectId())}getAllTasks(){return this.#a.reduce(((t,e)=>t.concat(e.getTasksAsArray())),[])}getAllTasksSorted(){return i(this.getAllTasks())}};Math.pow(10,8);function Z(t){a(1,arguments);var e=o(t);return e.setHours(0,0,0,0),e}function tt(t,e){a(2,arguments);var n=Z(t),r=Z(e),o=n.getTime()-A(n),i=r.getTime()-A(r);return Math.round((o-i)/864e5)}function et(t,e){a(2,arguments);var n=o(t),r=o(e);return 12*(n.getFullYear()-r.getFullYear())+(n.getMonth()-r.getMonth())}function nt(t){a(1,arguments);var e=o(t);return Math.floor(e.getMonth()/3)+1}function rt(t,e){a(2,arguments);var n=o(t),r=o(e);return 4*(n.getFullYear()-r.getFullYear())+(nt(n)-nt(r))}function at(t,e){var n,r,i,s,d,c,l,h;a(1,arguments);var g=m(),f=u(null!==(n=null!==(r=null!==(i=null!==(s=null==e?void 0:e.weekStartsOn)&&void 0!==s?s:null==e||null===(d=e.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==i?i:g.weekStartsOn)&&void 0!==r?r:null===(l=g.locale)||void 0===l||null===(h=l.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==n?n:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=o(t),w=v.getDay(),b=(w<f?7:0)+w-f;return v.setDate(v.getDate()-b),v.setHours(0,0,0,0),v}function ot(t,e,n){a(2,arguments);var r=at(t,n),o=at(e,n),i=r.getTime()-A(r),s=o.getTime()-A(o);return Math.round((i-s)/6048e5)}function it(t,e){a(2,arguments);var n=o(t),r=o(e);return n.getFullYear()-r.getFullYear()}function st(t,e){return a(2,arguments),o(t).getTime()-o(e).getTime()}var ut={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}},dt="trunc";function ct(t){return t?ut[t]:ut[dt]}function lt(t,e,n){a(2,arguments);var r=st(t,e)/36e5;return ct(null==n?void 0:n.roundingMethod)(r)}function mt(t,e,n){a(2,arguments);var r=st(t,e)/6e4;return ct(null==n?void 0:n.roundingMethod)(r)}function ht(t,e,n){a(2,arguments);var r=st(t,e)/1e3;return ct(null==n?void 0:n.roundingMethod)(r)}class gt{static currentDate=new Date;static ALL_PROJECT_ID=0;static init(){gt.renderProjects(),gt.renderTasks(),gt.registerEventHandlers()}static checkIfProjectDeletable(t){return Number(t)!==gt.ALL_PROJECT_ID&&t!==ft.getDefaultProjectId()}static handleProjectButtonClick(t,e){t.target.classList.contains("sidebar__button-icon")?(ft.getActiveProjectId()===e&&ft.setActiveProjectId(ft.getDefaultProjectId()),K.removeProjectById(e),gt.renderProjects()):(ft.setActiveProjectId(e),gt.displayActiveProject())}static createProjectDeleteIcon(t,e){if(!gt.checkIfProjectDeletable(e))return;const n=document.createElement("i");n.className="sidebar__button-icon fa-solid fa-xmark",t.appendChild(n)}static createProjectButton(t,e){const n=document.createElement("button");return n.className="sidebar__button button",n.dataset.projectId=e,n.textContent=t,n.addEventListener("click",(t=>gt.handleProjectButtonClick(t,e))),gt.createProjectDeleteIcon(n,e),n}static resetActiveProject(){document.querySelectorAll("#js-projects-container .button").forEach((t=>t.classList.remove("sidebar__button--active")))}static setProjectText(t){const e=Number(t)===gt.ALL_PROJECT_ID?"All":K.getProjectById(t).name;document.getElementById("js-project-heading").innerText=`Viewing ${e}`}static displayActiveProject(){gt.resetActiveProject();const t=ft.getActiveProjectId();document.querySelector(`[data-project-id="${t}"]`).classList.add("sidebar__button--active"),gt.setProjectText(t),gt.renderTasks(),ft.save()}static renderProjects(){gt.resetElement("js-projects-container");const t=document.getElementById("js-projects-container"),e=gt.createProjectButton("All",0);t.appendChild(e),K.getProjects().forEach((e=>t.appendChild(gt.createProjectButton(e.name,e.getId())))),gt.displayActiveProject()}static createTaskCard(t){const e=document.createElement("article");e.className="task-card",e.dataset.id=t.getId(),e.dataset.priority=t.priority,e.dataset.projectId=t.getProjectId();const n=document.createElement("h3");n.className="task-card__heading",n.textContent=t.title;const r=document.createElement("p");r.className="task-card__due-date",r.textContent=`Due ${function(t,e,n){a(2,arguments);var r,i=0,s=o(t),u=o(e);if(null!=n&&n.unit)"second"===(r=null==n?void 0:n.unit)?i=ht(s,u):"minute"===r?i=mt(s,u):"hour"===r?i=lt(s,u):"day"===r?i=tt(s,u):"week"===r?i=ot(s,u):"month"===r?i=et(s,u):"quarter"===r?i=rt(s,u):"year"===r&&(i=it(s,u));else{var d=ht(s,u);Math.abs(d)<60?(i=ht(s,u),r="second"):Math.abs(d)<3600?(i=mt(s,u),r="minute"):Math.abs(d)<86400&&Math.abs(tt(s,u))<1?(i=lt(s,u),r="hour"):Math.abs(d)<604800&&(i=tt(s,u))&&Math.abs(i)<7?r="day":Math.abs(d)<2629746?(i=ot(s,u),r="week"):Math.abs(d)<7889238?(i=et(s,u),r="month"):Math.abs(d)<31556952&&rt(s,u)<4?(i=rt(s,u),r="quarter"):(i=it(s,u),r="year")}return new Intl.RelativeTimeFormat(null==n?void 0:n.locale,{localeMatcher:null==n?void 0:n.localeMatcher,numeric:(null==n?void 0:n.numeric)||"auto",style:null==n?void 0:n.style}).format(i,r)}(t.dueDate,gt.currentDate,{unit:"day"})}`;const i=document.createElement("section");i.className="task-card__text-container";const s=document.createElement("p");s.className="task-card__project-name task-card__project-name--hidden",Number(ft.getActiveProjectId())===gt.ALL_PROJECT_ID&&(s.classList.toggle("task-card__project-name--hidden"),s.textContent=K.getProjectById(t.getProjectId()).name);const u=document.createElement("p");u.className="task-card__desc",u.textContent=t.desc,i.appendChild(s),i.appendChild(u);const d=document.createElement("section");d.className="task-card__buttons-container";const c=document.createElement("button");c.className="task-card__button button button--red",c.innerHTML='<i class="fa-solid fa-trash"></i>',c.addEventListener("click",(()=>{K.getProjectById(e.dataset.projectId).removeTaskById(e.dataset.id),gt.renderTasks()}));const l=document.createElement("button");return l.className="task-card__button button button--blue",l.innerHTML='<i class="fa-solid fa-pencil"></i>',l.addEventListener("click",(()=>gt.editTask(e))),d.appendChild(c),d.appendChild(l),e.appendChild(n),e.appendChild(r),e.appendChild(i),e.appendChild(d),e}static renderTasks(){gt.resetElement("js-tasks-container");const t=ft.getActiveProjectId();let e;e=Number(t)===gt.ALL_PROJECT_ID?K.getAllTasksSorted():K.getProjectById(t).getSortedTasks();const n=document.getElementById("js-tasks-container");e.forEach((t=>n.appendChild(gt.createTaskCard(t))))}static getElementValue(t){return document.getElementById(t)?.value}static setElementValue(t,e){const n=document.getElementById(t);n&&(n.value=e)}static resetElement(t){document.getElementById(t).innerHTML=""}static openDialog(t){document.getElementById(t).showModal()}static closeDialogs(){document.querySelectorAll(".dialog").forEach((t=>t.close()))}static resetForms(){document.querySelectorAll(".form").forEach((t=>t.reset()))}static toggleSidebar(){document.querySelector(".sidebar").classList.toggle("sidebar--expanded")}static registerEventHandlers(){const t=document.getElementById("js-add-project-button"),e=document.getElementById("js-add-project-form"),n=document.getElementById("js-add-task-button"),r=document.getElementById("js-add-task-form"),a=document.querySelectorAll(".js-cancel-button"),o=document.querySelectorAll(".dialog"),i=document.getElementById("js-edit-task-form"),s=document.getElementById("js-menu-button"),u=document.getElementById("js-sidebar-close-button");t.addEventListener("click",(()=>gt.openDialog("js-add-project-dialog"))),e.addEventListener("submit",(()=>gt.addNewProject())),n.addEventListener("click",(()=>gt.openDialog("js-add-task-dialog"))),r.addEventListener("submit",(()=>gt.addNewTask())),a.forEach((t=>t.addEventListener("click",(()=>gt.closeDialogs())))),o.forEach((t=>t.addEventListener("close",(()=>gt.resetForms())))),i.addEventListener("submit",(()=>gt.saveTask())),s.addEventListener("click",(()=>gt.toggleSidebar())),u.addEventListener("click",(()=>gt.toggleSidebar()))}static addNewProject(){const t=gt.getElementValue("project-name"),e=new s(t);K.addProject(e),ft.setActiveProjectId(e.getId()),gt.renderProjects(),ft.save()}static addNewTask(){const t=gt.getElementValue("task-title"),e=gt.getElementValue("task-desc"),n=gt.getElementValue("task-due"),r=gt.getElementValue("task-priority");let a=K.getActiveProject();Number(ft.getActiveProjectId())===gt.ALL_PROJECT_ID&&(a=K.getDefaultProject()),a.addTask(new $(t,e,n,r)),gt.renderTasks(),ft.save()}static editTask(t){const e=K.getProjectById(t.dataset.projectId).getTaskById(t.dataset.id);gt.setElementValue("edit-task-title",e.title),gt.setElementValue("edit-task-desc",gt.getDescStr(e.desc)),gt.setElementValue("edit-task-due",X(e.dueDate,"yyyy-MM-dd")),gt.setElementValue("edit-task-priority",e.priority),gt.setElementValue("edit-task-project-id",t.dataset.projectId),gt.setElementValue("edit-task-id",t.dataset.id),gt.openDialog("js-edit-task-dialog")}static saveTask(){const t=gt.getElementValue("edit-task-title"),e=gt.getElementValue("edit-task-desc"),n=gt.getElementValue("edit-task-due"),r=gt.getElementValue("edit-task-priority"),a=gt.getElementValue("edit-task-project-id"),o=gt.getElementValue("edit-task-id");K.getProjectById(a).getTaskById(o).setValues(t,e,n,r),gt.renderTasks(),ft.save()}static getDescStr(t){return t===$.DEFAULT_DESCRIPTION?"":t}}class ft{static KEY_NAMES=["projects","tasks","activeProjectId","defaultProjectId"];static init(){const t=new s("Default");t.addTask(new $("Example","","2023-12-31",2)),K.setProjects([t]),ft.setActiveProjectId(t.getId()),ft.setDefaultProjectId(t.getId()),ft.save(),gt.init()}static save(){localStorage.setItem("projects",JSON.stringify(K.getProjects())),localStorage.setItem("tasks",JSON.stringify(K.getAllTasks()))}static checkStorageProperties(){for(const t of ft.KEY_NAMES)if(!localStorage.hasOwnProperty(t))return!1;return!0}static load(){if(!ft.checkStorageProperties())return void ft.init();const t=JSON.parse(localStorage.getItem("projects")),e=[];t.forEach((t=>{e.push(new s(t.name,t.id))}));const n=localStorage.getItem("activeProjectId"),r=localStorage.getItem("defaultProjectId");K.setProjects(e,n,r),JSON.parse(localStorage.getItem("tasks")).forEach((t=>{const e=new $(t.title,t.desc,t.dueDate,t.priority);K.getProjectById(t.projectId).addTask(e)})),gt.init()}static getActiveProjectId(){return localStorage.getItem("activeProjectId")}static setActiveProjectId(t){localStorage.setItem("activeProjectId",t)}static getDefaultProjectId(){return localStorage.getItem("defaultProjectId")}static setDefaultProjectId(t){localStorage.setItem("defaultProjectId",t)}}ft.load()})()})();