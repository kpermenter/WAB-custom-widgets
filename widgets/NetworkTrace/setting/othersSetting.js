// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/NetworkTrace/setting/othersSetting.html":'\x3cdiv class\x3d"ParameterDiv"\x3e\r\n    \x3cdiv\x3e\r\n        \x3cfieldset class\x3d"esriCTFieldset"\x3e\r\n            \x3clegend class\x3d"esriCTLegendTitle"\x3e ${nls.generalSettings.displayTextForButtonLegend}\x3c/legend\x3e\r\n            \x3cdiv class\x3d"esriCTOthersData"\x3e\r\n                \x3cdiv class\x3d"field"\x3e\r\n                    \x3clabel class\x3d"esriCTImg esriCTLayoutLeft" title\x3d"${nls.generalSettings.displayTextForButton}"\x3e\r\n                        ${nls.generalSettings.displayTextForButton}\x3c/label\x3e\r\n                    \x3cinput data-dojo-attach-point\x3d"displayTextforRun" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n                        title\x3d"${nls.generalSettings.displayTextForButton}" class\x3d"common-input " data-dojo-props\x3d"required: true"\r\n                        value\x3d"${nls.generalSettings.displayTextforButtonDefaultValue}"\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/fieldset\x3e\r\n        \x3cfieldset class\x3d"esriCTFieldset"\x3e\r\n            \x3clegend class\x3d"esriCTLegendTitle"\x3e ${nls.generalSettings.autoZoomAfterTrace}\x3c/legend\x3e\r\n            \x3cdiv class\x3d"esriCTOthersData"\x3e\r\n                \x3cdiv class\x3d"field"\x3e\r\n                    \x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"autoZoomAfterTrace" class\x3d"jimu-checkbox"\r\n                        title\x3d"${nls.generalSettings.zoomText}" label\x3d"${nls.generalSettings.zoomText}"\x3e\r\n                    \x3c/div\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define(["dojo/_base/declare","dojo/text!./othersSetting.html","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin"],function(a,b,c,d,e){return a([c,d,e],{templateString:b,ImageChooser:null,startup:function(){this.inherited(arguments)},postCreate:function(){this._createOthersPanel()},_createOthersPanel:function(){this._createOthersDataPanel()},getOthersForm:function(){return{displayTextForRunButton:this.displayTextforRun&&this.displayTextforRun.value?this.displayTextforRun.value:
"",autoZoomAfterTrace:this.autoZoomAfterTrace.getValue()}},_createOthersDataPanel:function(){this.displayTextforRun.set("value",this.displayTextForRunButton);this.autoZoomAfterTraceCheckedState?this.autoZoomAfterTrace.setValue(!0):this.autoZoomAfterTrace.setValue(!1)}})});