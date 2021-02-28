(function(){var e=this,t=e._,n={},a=Array.prototype,i=Object.prototype,r=Function.prototype,s=a.push,o=a.slice,l=a.concat,d=(a.unshift,i.toString),u=i.hasOwnProperty,m=a.forEach,c=a.map,h=a.reduce,p=a.reduceRight,f=a.filter,y=a.every,g=a.some,M=a.indexOf,v=a.lastIndexOf,b=Array.isArray,_=Object.keys,w=r.bind,k=function(e){return e instanceof k?e:this instanceof k?void(this._wrapped=e):new k(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=k),exports._=k):e._=k,k.VERSION="1.4.2";var x=k.each=k.forEach=function(e,t,a){if(null!=e)if(m&&e.forEach===m)e.forEach(t,a);else if(e.length===+e.length){for(var i=0,r=e.length;r>i;i++)if(t.call(a,e[i],i,e)===n)return}else for(var s in e)if(k.has(e,s)&&t.call(a,e[s],s,e)===n)return};k.map=k.collect=function(e,t,n){var a=[];return null==e?a:c&&e.map===c?e.map(t,n):(x(e,function(e,i,r){a[a.length]=t.call(n,e,i,r)}),a)},k.reduce=k.foldl=k.inject=function(e,t,n,a){var i=arguments.length>2;if(null==e&&(e=[]),h&&e.reduce===h)return a&&(t=k.bind(t,a)),i?e.reduce(t,n):e.reduce(t);if(x(e,function(e,r,s){i?n=t.call(a,n,e,r,s):(n=e,i=!0)}),!i)throw new TypeError("Reduce of empty array with no initial value");return n},k.reduceRight=k.foldr=function(e,t,n,a){var i=arguments.length>2;if(null==e&&(e=[]),p&&e.reduceRight===p)return a&&(t=k.bind(t,a)),arguments.length>2?e.reduceRight(t,n):e.reduceRight(t);var r=e.length;if(r!==+r){var s=k.keys(e);r=s.length}if(x(e,function(o,l,d){l=s?s[--r]:--r,i?n=t.call(a,n,e[l],l,d):(n=e[l],i=!0)}),!i)throw new TypeError("Reduce of empty array with no initial value");return n},k.find=k.detect=function(e,t,n){var a;return C(e,function(e,i,r){return t.call(n,e,i,r)?(a=e,!0):void 0}),a},k.filter=k.select=function(e,t,n){var a=[];return null==e?a:f&&e.filter===f?e.filter(t,n):(x(e,function(e,i,r){t.call(n,e,i,r)&&(a[a.length]=e)}),a)},k.reject=function(e,t,n){var a=[];return null==e?a:(x(e,function(e,i,r){t.call(n,e,i,r)||(a[a.length]=e)}),a)},k.every=k.all=function(e,t,a){t||(t=k.identity);var i=!0;return null==e?i:y&&e.every===y?e.every(t,a):(x(e,function(e,r,s){return(i=i&&t.call(a,e,r,s))?void 0:n}),!!i)};var C=k.some=k.any=function(e,t,a){t||(t=k.identity);var i=!1;return null==e?i:g&&e.some===g?e.some(t,a):(x(e,function(e,r,s){return i||(i=t.call(a,e,r,s))?n:void 0}),!!i)};k.contains=k.include=function(e,t){var n=!1;return null==e?n:M&&e.indexOf===M?-1!=e.indexOf(t):n=C(e,function(e){return e===t})},k.invoke=function(e,t){var n=o.call(arguments,2);return k.map(e,function(e){return(k.isFunction(t)?t:e[t]).apply(e,n)})},k.pluck=function(e,t){return k.map(e,function(e){return e[t]})},k.where=function(e,t){return k.isEmpty(t)?[]:k.filter(e,function(e){for(var n in t)if(t[n]!==e[n])return!1;return!0})},k.max=function(e,t,n){if(!t&&k.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);if(!t&&k.isEmpty(e))return-(1/0);var a={computed:-(1/0)};return x(e,function(e,i,r){var s=t?t.call(n,e,i,r):e;s>=a.computed&&(a={value:e,computed:s})}),a.value},k.min=function(e,t,n){if(!t&&k.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.min.apply(Math,e);if(!t&&k.isEmpty(e))return 1/0;var a={computed:1/0};return x(e,function(e,i,r){var s=t?t.call(n,e,i,r):e;s<a.computed&&(a={value:e,computed:s})}),a.value},k.shuffle=function(e){var t,n=0,a=[];return x(e,function(e){t=k.random(n++),a[n-1]=a[t],a[t]=e}),a};var A=function(e){return k.isFunction(e)?e:function(t){return t[e]}};k.sortBy=function(e,t,n){var a=A(t);return k.pluck(k.map(e,function(e,t,i){return{value:e,index:t,criteria:a.call(n,e,t,i)}}).sort(function(e,t){var n=e.criteria,a=t.criteria;if(n!==a){if(n>a||void 0===n)return 1;if(a>n||void 0===a)return-1}return e.index<t.index?-1:1}),"value")};var D=function(e,t,n,a){var i={},r=A(t);return x(e,function(t,s){var o=r.call(n,t,s,e);a(i,o,t)}),i};k.groupBy=function(e,t,n){return D(e,t,n,function(e,t,n){(k.has(e,t)?e[t]:e[t]=[]).push(n)})},k.countBy=function(e,t,n){return D(e,t,n,function(e,t,n){k.has(e,t)||(e[t]=0),e[t]++})},k.sortedIndex=function(e,t,n,a){n=null==n?k.identity:A(n);for(var i=n.call(a,t),r=0,s=e.length;s>r;){var o=r+s>>>1;n.call(a,e[o])<i?r=o+1:s=o}return r},k.toArray=function(e){return e?e.length===+e.length?o.call(e):k.values(e):[]},k.size=function(e){return e.length===+e.length?e.length:k.keys(e).length},k.first=k.head=k.take=function(e,t,n){return null==t||n?e[0]:o.call(e,0,t)},k.initial=function(e,t,n){return o.call(e,0,e.length-(null==t||n?1:t))},k.last=function(e,t,n){return null==t||n?e[e.length-1]:o.call(e,Math.max(e.length-t,0))},k.rest=k.tail=k.drop=function(e,t,n){return o.call(e,null==t||n?1:t)},k.compact=function(e){return k.filter(e,function(e){return!!e})};var S=function(e,t,n){return x(e,function(e){k.isArray(e)?t?s.apply(n,e):S(e,t,n):n.push(e)}),n};k.flatten=function(e,t){return S(e,t,[])},k.without=function(e){return k.difference(e,o.call(arguments,1))},k.uniq=k.unique=function(e,t,n,a){var i=n?k.map(e,n,a):e,r=[],s=[];return x(i,function(n,a){(t?a&&s[s.length-1]===n:k.contains(s,n))||(s.push(n),r.push(e[a]))}),r},k.union=function(){return k.uniq(l.apply(a,arguments))},k.intersection=function(e){var t=o.call(arguments,1);return k.filter(k.uniq(e),function(e){return k.every(t,function(t){return k.indexOf(t,e)>=0})})},k.difference=function(e){var t=l.apply(a,o.call(arguments,1));return k.filter(e,function(e){return!k.contains(t,e)})},k.zip=function(){for(var e=o.call(arguments),t=k.max(k.pluck(e,"length")),n=new Array(t),a=0;t>a;a++)n[a]=k.pluck(e,""+a);return n},k.object=function(e,t){for(var n={},a=0,i=e.length;i>a;a++)t?n[e[a]]=t[a]:n[e[a][0]]=e[a][1];return n},k.indexOf=function(e,t,n){if(null==e)return-1;var a=0,i=e.length;if(n){if("number"!=typeof n)return a=k.sortedIndex(e,t),e[a]===t?a:-1;a=0>n?Math.max(0,i+n):n}if(M&&e.indexOf===M)return e.indexOf(t,n);for(;i>a;a++)if(e[a]===t)return a;return-1},k.lastIndexOf=function(e,t,n){if(null==e)return-1;var a=null!=n;if(v&&e.lastIndexOf===v)return a?e.lastIndexOf(t,n):e.lastIndexOf(t);for(var i=a?n:e.length;i--;)if(e[i]===t)return i;return-1},k.range=function(e,t,n){arguments.length<=1&&(t=e||0,e=0),n=arguments[2]||1;for(var a=Math.max(Math.ceil((t-e)/n),0),i=0,r=new Array(a);a>i;)r[i++]=e,e+=n;return r};var j=function(){};k.bind=function(e,t){var n,a;if(e.bind===w&&w)return w.apply(e,o.call(arguments,1));if(!k.isFunction(e))throw new TypeError;return a=o.call(arguments,2),n=function(){if(this instanceof n){j.prototype=e.prototype;var i=new j,r=e.apply(i,a.concat(o.call(arguments)));return Object(r)===r?r:i}return e.apply(t,a.concat(o.call(arguments)))}},k.bindAll=function(e){var t=o.call(arguments,1);return 0==t.length&&(t=k.functions(e)),x(t,function(t){e[t]=k.bind(e[t],e)}),e},k.memoize=function(e,t){var n={};return t||(t=k.identity),function(){var a=t.apply(this,arguments);return k.has(n,a)?n[a]:n[a]=e.apply(this,arguments)}},k.delay=function(e,t){var n=o.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},k.defer=function(e){return k.delay.apply(k,[e,1].concat(o.call(arguments,1)))},k.throttle=function(e,t){var n,a,i,r,s,o,l=k.debounce(function(){s=r=!1},t);return function(){n=this,a=arguments;var d=function(){i=null,s&&(o=e.apply(n,a)),l()};return i||(i=setTimeout(d,t)),r?s=!0:(r=!0,o=e.apply(n,a)),l(),o}},k.debounce=function(e,t,n){var a,i;return function(){var r=this,s=arguments,o=function(){a=null,n||(i=e.apply(r,s))},l=n&&!a;return clearTimeout(a),a=setTimeout(o,t),l&&(i=e.apply(r,s)),i}},k.once=function(e){var t,n=!1;return function(){return n?t:(n=!0,t=e.apply(this,arguments),e=null,t)}},k.wrap=function(e,t){return function(){var n=[e];return s.apply(n,arguments),t.apply(this,n)}},k.compose=function(){var e=arguments;return function(){for(var t=arguments,n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},k.after=function(e,t){return 0>=e?t():function(){return--e<1?t.apply(this,arguments):void 0}},k.keys=_||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)k.has(e,n)&&(t[t.length]=n);return t},k.values=function(e){var t=[];for(var n in e)k.has(e,n)&&t.push(e[n]);return t},k.pairs=function(e){var t=[];for(var n in e)k.has(e,n)&&t.push([n,e[n]]);return t},k.invert=function(e){var t={};for(var n in e)k.has(e,n)&&(t[e[n]]=n);return t},k.functions=k.methods=function(e){var t=[];for(var n in e)k.isFunction(e[n])&&t.push(n);return t.sort()},k.extend=function(e){return x(o.call(arguments,1),function(t){for(var n in t)e[n]=t[n]}),e},k.pick=function(e){var t={},n=l.apply(a,o.call(arguments,1));return x(n,function(n){n in e&&(t[n]=e[n])}),t},k.omit=function(e){var t={},n=l.apply(a,o.call(arguments,1));for(var i in e)k.contains(n,i)||(t[i]=e[i]);return t},k.defaults=function(e){return x(o.call(arguments,1),function(t){for(var n in t)null==e[n]&&(e[n]=t[n])}),e},k.clone=function(e){return k.isObject(e)?k.isArray(e)?e.slice():k.extend({},e):e},k.tap=function(e,t){return t(e),e};var T=function(e,t,n,a){if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return e===t;e instanceof k&&(e=e._wrapped),t instanceof k&&(t=t._wrapped);var i=d.call(e);if(i!=d.call(t))return!1;switch(i){case"[object String]":return e==String(t);case"[object Number]":return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if("object"!=typeof e||"object"!=typeof t)return!1;for(var r=n.length;r--;)if(n[r]==e)return a[r]==t;n.push(e),a.push(t);var s=0,o=!0;if("[object Array]"==i){if(s=e.length,o=s==t.length)for(;s--&&(o=T(e[s],t[s],n,a)););}else{var l=e.constructor,u=t.constructor;if(l!==u&&!(k.isFunction(l)&&l instanceof l&&k.isFunction(u)&&u instanceof u))return!1;for(var m in e)if(k.has(e,m)&&(s++,!(o=k.has(t,m)&&T(e[m],t[m],n,a))))break;if(o){for(m in t)if(k.has(t,m)&&!s--)break;o=!s}}return n.pop(),a.pop(),o};k.isEqual=function(e,t){return T(e,t,[],[])},k.isEmpty=function(e){if(null==e)return!0;if(k.isArray(e)||k.isString(e))return 0===e.length;for(var t in e)if(k.has(e,t))return!1;return!0},k.isElement=function(e){return!!e&&1===e.nodeType},k.isArray=b||function(e){return"[object Array]"==d.call(e)},k.isObject=function(e){return e===Object(e)},x(["Arguments","Function","String","Number","Date","RegExp"],function(e){k["is"+e]=function(t){return d.call(t)=="[object "+e+"]"}}),k.isArguments(arguments)||(k.isArguments=function(e){return!!e&&!!k.has(e,"callee")}),"function"!=typeof/./&&(k.isFunction=function(e){return"function"==typeof e}),k.isFinite=function(e){return k.isNumber(e)&&isFinite(e)},k.isNaN=function(e){return k.isNumber(e)&&e!=+e},k.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"==d.call(e)},k.isNull=function(e){return null===e},k.isUndefined=function(e){return void 0===e},k.has=function(e,t){return u.call(e,t)},k.noConflict=function(){return e._=t,this},k.identity=function(e){return e},k.times=function(e,t,n){for(var a=0;e>a;a++)t.call(n,a)},k.random=function(e,t){return null==t&&(t=e,e=0),e+(0|Math.random()*(t-e+1))};var H={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};H.unescape=k.invert(H.escape);var I={escape:new RegExp("["+k.keys(H.escape).join("")+"]","g"),unescape:new RegExp("("+k.keys(H.unescape).join("|")+")","g")};k.each(["escape","unescape"],function(e){k[e]=function(t){return null==t?"":(""+t).replace(I[e],function(t){return H[e][t]})}}),k.result=function(e,t){if(null==e)return null;var n=e[t];return k.isFunction(n)?n.call(e):n},k.mixin=function(e){x(k.functions(e),function(t){var n=k[t]=e[t];k.prototype[t]=function(){var e=[this._wrapped];return s.apply(e,arguments),L.call(this,n.apply(k,e))}})};var N=0;k.uniqueId=function(e){var t=N++;return e?e+t:t},k.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var $=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},F=/\\|'|\r|\n|\t|\u2028|\u2029/g;k.template=function(e,t,n){n=k.defaults({},n,k.templateSettings);var a=new RegExp([(n.escape||$).source,(n.interpolate||$).source,(n.evaluate||$).source].join("|")+"|$","g"),i=0,r="__p+='";e.replace(a,function(t,n,a,s,o){r+=e.slice(i,o).replace(F,function(e){return"\\"+z[e]}),r+=n?"'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":a?"'+\n((__t=("+a+"))==null?'':__t)+\n'":s?"';\n"+s+"\n__p+='":"",i=o+t.length}),r+="';\n",n.variable||(r="with(obj||{}){\n"+r+"}\n"),r="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+r+"return __p;\n";try{var s=new Function(n.variable||"obj","_",r)}catch(o){throw o.source=r,o}if(t)return s(t,k);var l=function(e){return s.call(this,e,k)};return l.source="function("+(n.variable||"obj")+"){\n"+r+"}",l},k.chain=function(e){return k(e).chain()};var L=function(e){return this._chain?k(e).chain():e};k.mixin(k),x(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=a[e];k.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),("shift"==e||"splice"==e)&&0===n.length&&delete n[0],L.call(this,n)}}),x(["concat","join","slice"],function(e){var t=a[e];k.prototype[e]=function(){return L.call(this,t.apply(this._wrapped,arguments))}}),k.extend(k.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);