// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"themes/PlateauTheme/widgets/HeaderController/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:themes/PlateauTheme/widgets/HeaderController/setting/Setting.html":'\x3cdiv style\x3d"width:100%;height:100%;"\x3e\r\n  \x3cdiv class\x3d"main-label"\x3e${nls.groupSetLabel}\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"tableInfo"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"noGroupTip" class\x3d"tip-message"\x3e${nls.noGroup}\x3c/div\x3e\r\n\x3c/div\x3e',
"url:themes/PlateauTheme/widgets/HeaderController/setting/css/style.css":".jimu-widget-headercontroller-setting{margin:0; padding:0; font-size:15px;}.jimu-widget-headercontroller-setting .group{width: 120px;}.jimu-widget-headercontroller-setting .main-label{font-size:16px; margin-bottom: 20px;}.jimu-widget-headercontroller-setting .tip-message{position: absolute; left: 50%; top: 50%; margin-left: -100px;}","*now":function(f){f(['dojo/i18n!*preload*themes/PlateauTheme/widgets/HeaderController/setting/nls/Setting*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},
"*noref":1}});
define("dojo/_base/declare dojo/_base/html jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin jimu/dijit/SimpleTable dijit/form/Button dijit/form/ValidationTextBox".split(" "),function(f,c,g,h,k){return f([g,h],{baseClass:"jimu-widget-headercontroller-setting",openAll:"openAll",dropDown:"dropDown",startup:function(){this.inherited(arguments);this.config.groupSetting||(this.config.groupSetting=[]);this.displayFieldsTable=new k({fields:[{name:"group",title:this.nls.group,type:"text"},{name:"openAll",
title:this.nls.openAll,type:"radio",radio:"row"},{name:"dropDown",title:this.nls.dropDown,type:"radio",radio:"row"}],selectable:!1});this.displayFieldsTable.placeAt(this.tableInfo);this.displayFieldsTable.startup();this.setConfig(this.config)},setConfig:function(b){this.config=b;this.displayFieldsTable.clear();if(void 0===this.appConfig.widgetPool.groups||0===this.appConfig.widgetPool.groups.length)c.setStyle(this.noGroupTip,"display","block"),c.setStyle(this.tableInfo,"display","none");else{c.setStyle(this.noGroupTip,
"display","none");c.setStyle(this.tableInfo,"display","block");for(var e=this.appConfig.widgetPool.groups.length,d=0;d<e;d++){var a={};a.group=this.appConfig.widgetPool.groups[d].label;a.openAll=this.isOpenAll(b,a.group);a.dropDown=!this.isOpenAll(b,a.group);this.displayFieldsTable.addRow(a)}}},isOpenAll:function(b,e){for(var d=b.groupSetting.length,a=0;a<d;a++)if(b.groupSetting[a].label===e)if(b.groupSetting[a].type===this.openAll)break;else return!1;return!0},getConfig:function(){for(var b=this.displayFieldsTable.getData(),
e=[],d=b.length,a=0;a<d;a++){var c={};c.label=b[a].group;c.type=b[a].openAll?this.openAll:this.dropDown;e.push(c)}this.config.groupSetting=e;return this.config}})});