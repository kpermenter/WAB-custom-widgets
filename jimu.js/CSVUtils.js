// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("exports dojo/_base/lang dojo/_base/array dojo/_base/html dojo/has dojo/Deferred jimu/utils esri/lang esri/tasks/QueryTask esri/tasks/query esri/graphic jimu/ArcadeUtils".split(" "),function(e,l,n,u,q,p,t,w,x,y,z,A){function v(c){var a=l.clone(c.attributes);(c=c.geometry)&&"point"===c.type&&("x"in a?a._x=c.x:a.x=c.x,"y"in a?a._y=c.y:a.y=c.y);return a}e.exportCSV=function(c,a,b){return e._createCSVStr(a,b).then(function(a){return e._download(c+".csv",a)})};e.exportCSVFromFeatureLayer=function(c,
a,b){b=b||{};return e._getExportData(a,{datas:b.datas,objectIds:b.objectIds,fromClient:b.fromClient,withGeometry:b.withGeometry,outFields:b.outFields,filterExpression:b.filterExpression,outSpatialReference:b.outSpatialReference,arcadeExpressions:b.arcadeExpressions,geometry:b.geometry,orderByFields:b.orderByFields,start:b.start,num:b.num}).then(function(d){return e._formattedData(a,d,{formatNumber:b.formatNumber,formatDate:b.formatDate,formatCodedValue:b.formatCodedValue,richText:{clearFormat:b.richTextFieldsToClear&&
!!b.richTextFieldsToClear.length,fieldsToClear:b.richTextFieldsToClear||[]},popupInfo:b.popupInfo}).then(function(a){return e.exportCSV(c,a.datas,a.columns)})})};e.exportCSVByAttributes=function(c,a,b,d){d=l.mixin({},d);d.datas=b;return e.exportCSVFromFeatureLayer(c,a,d)};e.exportCSVByGraphics=function(c,a,b,d){b=n.map(b,function(a){return a.attributes});return e.exportCSVByAttributes(c,a,b,d)};e._createCSVStr=function(c,a){var b=new p,d="",e=0,f=0,g="",h="";try{a=n.map(a,function(a){return"string"===
typeof a?{name:a}:a});n.forEach(a,function(a){a=a.alias||a.name;-1<a.toString().indexOf(",")&&(a='"'+a+'"');d=d+g+a;g=","});for(var d=d+"\r\n",e=c.length,f=a.length,k=0;k<e;k++){for(var g="",r=0;r<f;r++)(h=c[k][a[r].name])||"number"===typeof h||(h=""),h&&/[",\r\n]/g.test(h)&&(h='"'+h.replace(/(")/g,'""')+'"'),d=d+g+h,g=",";d+="\r\n"}b.resolve(d)}catch(B){console.error(B),b.resolve("")}return b};e._isIE11=function(){return 11===t.has("ie")};e._isEdge=function(){return t.has("edge")};e._getDownloadUrl=
function(c){return window.Blob&&window.URL&&window.URL.createObjectURL?(c=new Blob(["\ufeff"+c],{type:"text/csv"}),URL.createObjectURL(c)):"data:attachment/csv;charset\x3dutf-8,\ufeff"+encodeURIComponent(c)};e._download=function(c,a){var b=new p;try{if(q("ie")&&10>q("ie")){var d=window.top.open("about:blank","_blank");d.document.write("sep\x3d,\r\n"+a);d.document.close();d.document.execCommand("SaveAs",!0,c);d.close()}else if(10===q("ie")||e._isIE11()||e._isEdge()){var m=new Blob(["\ufeff"+a],{type:"text/csv"});
navigator.msSaveBlob(m,c)}else{var f=u.create("a",{href:e._getDownloadUrl(a),target:"_blank",download:c},document.body);if(q("safari")){var g=document.createEvent("MouseEvents");g.initEvent("click",!0,!0);f.dispatchEvent(g)}else f.click();u.destroy(f)}b.resolve()}catch(h){b.reject(h)}return b};e._getExportData=function(c,a){var b=new p,d=null,m=[],f=a.datas,g=a.withGeometry,h=!!a.arcadeExpressions,d=a.outFields;d&&d.length||(d=c.fields);d=l.clone(d);if(g&&!(f&&0<f.length)){h?(m=n.filter(c.fields,
function(a){return-1===a.name.indexOf("expression/")}),m=l.clone(m)):m=l.clone(d);var k="",k=-1!==d.indexOf("x")?"_x":"x";d.push({name:k,alias:k,format:{digitSeparator:!1,places:6},show:!0,type:"esriFieldTypeDouble"});k=-1!==d.indexOf("y")?"_y":"y";d.push({name:k,alias:k,format:{digitSeparator:!1,places:6},show:!0,type:"esriFieldTypeDouble"})}f&&0<f.length?(h&&(f=e._getAttrsWithExpressionsBatch(f,a.arcadeExpressions)),b.resolve({data:f||[],outFields:d})):a.fromClient?(f=n.map(c.graphics,function(b){b=
g?v(b):l.clone(b);return b=h?e._getAttrsWithExpressions(b,a.arcadeExpressions):b}),b.resolve({data:f||[],outFields:d})):e._getExportDataFromServer(c,m,a).then(function(c){h&&(c=e._getAttrsWithExpressionsBatch(c,a.arcadeExpressions));b.resolve({data:c||[],outFields:d})});return b};e._getExportDataFromServer=function(c,a,b){var d=new p;if("esri.layers.FeatureLayer"!==c.declaredClass)return d.resolve([]),d;var e=new x(c.url),f=new y;f.where=b.filterExpression||c.getDefinitionExpression&&c.getDefinitionExpression()||
"1\x3d1";0<a.length?(c=n.map(a,function(a){return a.name}),f.outFields=c):f.outFields=["*"];f.objectIds=b.objectIds;f.returnGeometry=b.withGeometry;f.outSR=b.spatialReference;f.geometry=b.geometry;f.orderByFields=b.orderByFields;f.start=b.start;f.num=b.num;e.execute(f,function(a){a=n.map(a.features,function(a){return v(a)});d.resolve(a)},function(a){console.error(a);d.resolve([])});return d};e._formattedData=function(c,a,b){var d=new p,m=[],f=a.data;a=a.outFields;for(var g=0,h=f.length;g<h;g++){for(var k=
{},r=0;r<a.length;r++){var l=a[r];k[l.name]=e._getExportValue(f[g][l.name],l,c.objectIdField,c.typeIdField,f[g][c.typeIdField],c.types,b)}m.push(k)}c=n.map(a,function(a){return{alias:a.alias,name:a.name}});d.resolve({datas:m,columns:c});return d};e._getExportValue=function(c,a,b,d,e,f,g){function h(a){if(l&&w.isDefined(l.fieldInfos))for(var b=0,c=l.fieldInfos.length;b<c;b++){var d=l.fieldInfos[b];if(d.fieldName===a)return d.format}return null}function k(a){for(var b=0,c=m.length;b<c;b++)if(m[b].fieldName===
a)return!0;return!1}var l=g.popupInfo,m=g.richText.fieldsToClear,p=!!a.domain&&g.formatCodedValue,q="esriFieldTypeDate"===a.type&&g.formatDate,u=b&&a.name===b;d=d&&a.name===d;k="esriFieldTypeString"===a.type&&g.richText.clearFormat&&k(a.name);return q?t.fieldFormatter.getFormattedDate(c,h(a.name)):d?t.fieldFormatter.getTypeName(c,f):p?t.fieldFormatter.getCodedValue(a.domain,c):k?c?(a=document.createElement("span"),a.innerHTML=c,a.textContent||a.innerText||""):c:p||q||u||d||k?c:(g=null,b&&f&&0<f.length&&
(b=(b=n.filter(f,function(a){return a.id===e}))&&b[0])&&b.domains&&b.domains[a.name]&&b.domains[a.name].codedValues&&(g=t.fieldFormatter.getCodedValue(b.domains[a.name],c)),null!==g?g:c)};e._getAttrsWithExpressions=function(c,a){var b=l.getObject("expressionInfos",!1,a);a=l.getObject("layerDefinition",!1,a);var d=new z(null,null,c);return A.customExpr.getAttributesFromCustomArcadeExpr(b,d,a)||c};e._getAttrsWithExpressionsBatch=function(c,a){var b=[];return b=n.map(c,function(b){return e._getAttrsWithExpressions(b,
a)})}});