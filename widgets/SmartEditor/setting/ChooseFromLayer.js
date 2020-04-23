// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SmartEditor/setting/ChooseFromLayer.html":'\x3cdiv data-dojo-attach-point\x3d"layerSelectorPopUpDiv" class\x3d"esriCTlayerSelectorPopUpDiv"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"layerSelectorWrapper" class\x3d"esriCTWrapper"\x3e\r\n        \x3cdiv class\x3d"esriCTPopUpLabel"\x3e${nls.layersPage.layerSettingsTable.label}\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTPopupSelect"\x3e\r\n            \x3cdiv class\x3d"esriCTLayerSelect" style\x3d"width: 100%" data-dojo-attach-point\x3d"layerSelectorDiv"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTWrapper"\x3e\r\n        \x3cdiv class\x3d"esriCTPopUpLabel"\x3e${nls.chooseFromLayer.fieldLabel}\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTPopupSelect"\x3e\r\n            \x3cdiv class\x3d"esriCTlayerField" style\x3d"width: 100%" data-dojo-attach-point\x3d"domainFieldsDropDownDiv"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTWrapper"\x3e\r\n        \x3cdiv class\x3d"esriCTPopUpLabel"\x3e${nls.chooseFromLayer.valueLabel}\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTPopupSelect"\x3e\r\n            \x3cdiv class\x3d"esriCTlayerFieldvalue" style\x3d"width: 100%" data-dojo-attach-point\x3d"domainFieldValuesDropDownDiv"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/on dojo/text!./ChooseFromLayer.html dijit/_TemplatedMixin jimu/BaseWidgetSetting jimu/dijit/Popup dijit/form/Select jimu/dijit/LayerChooserFromMap jimu/dijit/LayerChooserFromMapWithDropbox dojo/Evented".split(" "),function(h,c,f,e,k,l,m,n,g,d,p,q){return h([m,q,l],{baseClass:"jimu-widget-smartEditor-setting-chooseFromLayer",templateString:k,layerSelector:null,fieldSelect:null,domainFieldsDropdown:null,domainFieldValuesDropdown:null,
ChooseFromLayerPopup:null,postCreate:function(){this.inherited(arguments);this.domainFieldsDropdown=new g({style:{width:"100%"}});this.domainFieldsDropdown.placeAt(this.domainFieldsDropDownDiv);this.domainFieldsDropdown.startup();this.domainFieldValuesDropdown=new g({style:{width:"100%"}});this.domainFieldValuesDropdown.placeAt(this.domainFieldValuesDropDownDiv);this.domainFieldValuesDropdown.startup();this._createPopUp()},_addLayerSelectors:function(){var a;a=this._createLayerChooserMapArgs();a=
new d(a);a.startup();this.layerSelector=new p({layerChooser:a});this.layerSelector.placeAt(this.layerSelectorDiv);this.layerSelector.startup();0<this.layerSelector.layerChooser.getAllItems().length&&this.layerSelector.setSelectedLayer(this.layerSelector.setSelectedLayer(this.layerSelector.layerChooser.getAllItems()[0].layerInfo.layerObject));this._addLayerFieldsOptions();this._addLayerFieldsValueDropdown()},_createLayerChooserMapArgs:function(){return{multiple:!1,createMapResponse:this.map.webMapResponse,
filter:this._createFiltersForLayerSelector()}},_createFiltersForLayerSelector:function(){var a,b;a=d.createFeaturelayerFilter(["point","polyline","polygon"],!1,!1);b=d.createImageServiceLayerFilter(!0);a=d.orCombineFilters([a,b]);b=this._createDomainFieldFilter();return d.andCombineFilters([a,b])},_createDomainFieldFilter:function(){return function(a){var b=!1;a.getLayerObject().then(function(a){f.some(a.fields,function(a){if(a.domain&&"codedValue"===a.domain.type)return this._domainFields=a,b=!0})});
return b}},_addLayerFieldsOptions:function(){this.domainFieldsDropdown.set("options",this._createFieldsDropDownOpt());this.domainFieldsDropdown.set("value",this.domainFieldsDropdown.options[0]);this.own(e(this.domainFieldsDropdown,"change",c.hitch(this,function(){this._addLayerFieldsValueDropdown()})))},_addLayerFieldsValueDropdown:function(){this.domainFieldValuesDropdown.set("options",this._createFieldValueDropDownOpt());this.domainFieldValuesDropdown.set("value",this.domainFieldValuesDropdown.options[0]);
this.own(e(this.domainFieldValuesDropdown,"change",c.hitch(this,function(){})))},_createFieldsDropDownOpt:function(){var a,b;b=[];this.layerSelector.getSelectedItem()&&(a=this.layerSelector.getSelectedItem().layerInfo.layerObject,f.forEach(a.fields,c.hitch(this,function(a){a.domain&&"codedValue"===a.domain.type&&b.push({label:a.alias||a.name,value:a.name})})));return b},_createFieldValueDropDownOpt:function(){var a,b,c,d=[];if(this.layerSelector.getSelectedItem()&&(a=this.domainFieldsDropdown.getValue(),
c=this.layerSelector.getSelectedItem().layerInfo.layerObject,"codedValue"===c.getDomain(a).type))for(b in a=c.getDomain(a).codedValues,a)d.push({label:a[b].name,value:a[b].code});return d},_createPopUp:function(){this._addLayerSelectors();this.ChooseFromLayerPopup=new n({titleLabel:this.nls.chooseFromLayer.selectValueLabel,width:500,maxHeight:300,autoHeight:!0,"class":this.baseClass,content:this,buttons:[{label:this.nls.ok,onClick:c.hitch(this,function(){this._getDomainFieldValue();this.ChooseFromLayerPopup.close()})},
{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:c.hitch(this,function(){this.ChooseFromLayerPopup.close()})}]});this.own(e(this.layerSelector,"selection-change",c.hitch(this,function(){this._addLayerFieldsOptions()})))},_getDomainFieldValue:function(){this.emit("updatePresetValue",this.domainFieldValuesDropdown.value)}})});