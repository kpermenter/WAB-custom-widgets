// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/on","dijit/_WidgetBase","dijit/_TemplatedMixin"],function(a,b,c,d,e){return a([d,e],{templateString:"\x3cdiv\x3e\x3c/div\x3e",postCreate:function(){this.own(c(window,"resize",b.hitch(this,this._onWindowResize)))},getConfig:function(){},getDataSources:function(){},resize:function(){},_onWindowResize:function(){this.resize()}})});