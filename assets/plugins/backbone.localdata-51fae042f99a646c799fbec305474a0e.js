!function(e,t){"function"==typeof define&&define.amd?define(["underscore","backbone"],function(a,n){return t(a||e._,n||e.Backbone)}):t(_,Backbone)}(this,function(e,t){return t.LocalData=function(e){this.name=e},e.extend(t.LocalData.prototype,{get_data:function(){this.store_data=$("script[id='"+this.name+"']");var e=null;return this.store_data.get(0)&&(e=JSON.parse(this.store_data.html()),"true"!=this.store_data.attr("persist")&&this.store_data.remove()),e||[]},hasData:function(){return $("script[id='"+this.name+"']").get(0)?!0:!1}}),t.dataRealSync=t.sync,t.LocalData.sync=t.dataSync=function(e,a,n){var i,r,s=a.localData||a.collection.localData,o=$.Deferred&&$.Deferred();try{n.data||a.toJSON();switch(e){case"read":if(!s.hasData())return t.dataRealSync.apply(this,arguments);i=s.get_data();break;case"create":return t.dataRealSync.apply(this,arguments);case"update":return t.dataRealSync.apply(this,arguments);case"delete":return t.dataRealSync.apply(this,arguments)}}catch(d){r=d.code===DOMException.QUOTA_EXCEEDED_ERR&&0===s._storageSize()?"Private browsing is unsupported":d.message}return i?(a.trigger("sync",a,i,n),n&&n.success&&("0.9.10"===t.VERSION?n.success(a,i,n):n.success(i)),o&&o.resolve(i)):(r=r?r:"Record Not Found",a.trigger("error",a,r,n),n&&n.error&&("0.9.10"===t.VERSION?n.error(a,r,n):n.error(r)),o&&o.reject(r)),n&&n.complete&&n.complete(JSON.stringify(i)),o&&o.promise()},t.getDataSyncMethod=function(e){return e.localData||e.collection&&e.collection.localData?t.dataSync:t.dataRealSync},t.sync=function(e,a,n){return t.getDataSyncMethod(a).apply(this,[e,a,n])},t.LocalData});