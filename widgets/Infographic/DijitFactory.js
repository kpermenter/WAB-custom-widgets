// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/aspect dojo/_base/lang ./dijits/TextDijit ./dijits/ImageDijit ./dijits/ChartDijit ./dijits/GaugeDijit ./dijits/NumberDijit".split(" "),function(m,k,n,p,q,r,t){var b={},c={},l=null,e=null,f=null,g=null,h={};b._dijits=c;b.createDijit=function(a){var d=null;if(c[a.id])return(d=c[a.id])&&"function"===typeof d.setVisible&&d.setVisible(a.visible),d;var b;switch(a.type){case "text":b=n;break;case "image":b=p;break;case "chart":b=q;break;case "gauge":b=r;break;case "number":b=t}if(!b)return console.error("Unknow type:",
a.type),null;d={nls:l,config:a.config,map:e,inSettingPage:f,appConfig:g,jsonId:a.id,visible:a.visible};k.mixin(d,h);d=new b(d);m.after(d,"destroy",function(){delete c[a.id]});return c[a.id]=d};b.setNls=function(a){l=a};b.setMap=function(a){e=a;Object.keys(c).forEach(function(a){c[a].setMap(e)})};b.setInSettingPage=function(a){f=a;Object.keys(c).forEach(function(a){c[a].setInSettingPage(f)})};b.setAppConfig=function(a){g=a;Object.keys(c).forEach(function(a){c[a].setAppConfig(g)})};b.setContext=function(a){h=
a;Object.keys(c).forEach(function(a){k.mixin(c[a],h)})};return b});