// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["dojo/_base/declare","./_BasicServiceChooserContent","./GeocodeServiceBrowser"],function(a,b,c){return a([b],{baseClass:"jimu-geocode-service-chooser-content",_examples:["http://myserver/arcgis/rest/services","http://myserver/arcgis/rest/services/folder","http://myserver/arcgis/rest/services/myservice/GeocodeServer"],_createServiceBrowser:function(a){return new c(a)}})});