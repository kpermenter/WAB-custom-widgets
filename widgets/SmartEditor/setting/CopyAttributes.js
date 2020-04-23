// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SmartEditor/setting/CopyAttributes.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"settingsDesc" data-dojo-attach-point\x3d"validationDesc"\x3e${nls.actionPage.description}\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"copyAttributeTable"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"settingsNotes"\x3e${nls.actionPage.copyAttributesNote}\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/Evented dojo/query dojo/dom-style dojo/_base/lang dojo/_base/array dojo/on dojo/dom-construct dojo/text!./CopyAttributes.html dijit/_TemplatedMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable jimu/dijit/Popup esri/lang ./Intersection ./Coordinates ./Address".split(" "),function(l,m,n,p,e,f,g,h,q,r,t,u,k,v,w,x,y){return l([t,m,r],{baseClass:"jimu-widget-smartEditor-rule-table",templateString:q,_resourceInfo:null,_url:null,_fieldName:null,_fieldValues:null,_configuredFieldValues:null,
_layerId:null,_validGeocoderFields:[],_fieldsPopUp:null,_removeGroupInfo:null,ValidFieldsForCoordinates:["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString"],ValidFieldsByType:{esriFieldTypeOID:["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],esriFieldTypeSmallInteger:["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],esriFieldTypeInteger:["esriFieldTypeOID",
"esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],esriFieldTypeDouble:["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],esriFieldTypeSingle:["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],esriFieldTypeGUID:["esriFieldTypeGUID","esriFieldTypeGlobalID"],esriFieldTypeDate:["esriFieldTypeDate"],esriFieldTypeString:"esriFieldTypeSmallInteger esriFieldTypeInteger esriFieldTypeSingle esriFieldTypeDouble esriFieldTypeString esriFieldTypeGUID esriFieldTypeDate esriFieldTypeOID esriFieldTypeGlobalID".split(" ")},
postCreate:function(){this.inherited(arguments);this._fieldsPopUp=null;this._configuredFieldValues=[];this._removeGroupInfo=null;this._initActionsTable();this._setActionsTable()},getSettings:function(){return this._fieldValues},_getConfigActionOrder:function(){var a=[],b=[];this.isRelatedLayer?b=["Preset"]:(b=["Intersection"],this._validGeocoderFields=this._getValidGeocoderFields(),this._validGeocoderFields.length&&b.push("Address"),-1<this.ValidFieldsForCoordinates.indexOf(this._fieldType)&&b.push("Coordinates"),
b.push("Preset"));return void 0!==this._fieldValues&&null!==this._fieldValues&&this._fieldValues.hasOwnProperty(this._fieldName)&&(f.forEach(this._fieldValues[this._fieldName],function(c){-1<b.indexOf(c.actionName)&&a.push(c.actionName)}),null!==a&&0!==a.length)?a:b},_getValidGeocoderFields:function(){var a=[],b=[],a=this.ValidFieldsByType[this._fieldType];this._geocoderSettings&&this._geocoderSettings.hasOwnProperty("url")&&(b=f.filter(this._geocoderSettings.fields,function(b){return-1<a.indexOf(b.type)?
!0:!1}));return b},_getConfigAction:function(a){var b=null;void 0!==this._fieldValues&&null!==this._fieldValues&&this._fieldValues.hasOwnProperty(this._fieldName)&&f.some(this._fieldValues[this._fieldName],function(c){return c.actionName===a?(b=c,!0):!1});return b},_nlsActionToConfig:function(a){switch(a){case this.nls.actionPage.copyAction.intersection:return"Intersection";case this.nls.actionPage.copyAction.address:return"Address";case this.nls.actionPage.copyAction.coordinates:return"Coordinates";
case this.nls.actionPage.copyAction.preset:return"Preset";default:return a}},popupActionsPage:function(){this._fieldsPopUp&&(this._fieldsPopUp.close(),this._fieldsPopUp=null);this._fieldsPopUp=new k({titleLabel:v.substitute({fieldname:this._fieldName},this.nls.actionPage.title),width:920,maxHeight:600,autoHeight:!0,content:this,buttons:[{label:this.nls.ok,onClick:e.hitch(this,function(){var a=this._copyAttrTable.getRows();if(void 0===this._fieldValues||null===this._fieldValues)this._fieldValues={};
this._fieldValues[this._fieldName]=[];f.forEach(a,function(b){var a;a=this._copyAttrTable.getRowData(b);b={};b.actionName=this._nlsActionToConfig(a.actionName);this._configuredFieldValues[b.actionName]?e.mixin(b,this._configuredFieldValues[b.actionName]):e.mixin(b,{enabled:!1});e.mixin(b,{enabled:a.enabled});"Preset"===b.actionName&&this._configuredPresetInfos&&!this._configuredPresetInfos.hasOwnProperty(this._fieldName)&&(this._configuredPresetInfos[this._fieldName]=[""]);!b.enabled&&a.attributeActionGroupName&&
(a={groupName:a.attributeActionGroupName,layerId:this._layerId,fieldName:this._fieldName,action:b.actionName},this.removeFromGroup(a),delete b.attributeActionGroupName);this._fieldValues[this._fieldName].push(b)},this);this._fieldsPopUp.close()})},{label:this.nls.cancel,classNames:["jimu-btn jimu-btn-vacation"],onClick:e.hitch(this,function(){this._fieldsPopUp.close()})}],onClose:e.hitch(this,function(){})})},_initActionsTable:function(){this._copyAttrTable=new u({fields:[{name:"enabled",title:this.nls.actionPage.copyAction.enableText,
type:"checkbox",width:"15%"},{name:"actionName",title:this.nls.actionPage.copyAction.actionText,type:"text"},{name:"attributeActionGroupName",title:this.nls.actionPage.actionsSettingsTable.groupName,type:"text"},{name:"actions",title:this.nls.actionPage.copyAction.criteriaText,type:"actions",actions:["up","down","edit"],"class":"actions"}],selectable:!1,style:{height:"300px",maxHeight:"300px"}});this._copyAttrTable.placeAt(this.copyAttributeTable);this._copyAttrTable.startup();this.own(g(this._copyAttrTable,
"actions-edit",e.hitch(this,this._onActionEdit)))},_onActionEdit:function(a){var b;this._removeGroupInfo=null;b=this._copyAttrTable.getRowData(a);if(b.attributeActionGroupName){var c,d;c=h.create("div");h.create("div",{innerHTML:this.nls.actionPage.editOptionsPopup.editAttributeGroup,className:"settingsDesc"},c);h.create("div",{innerHTML:this.nls.actionPage.editOptionsPopup.editAttributeGroupHint,className:"editGroupHint"},c);d=new k({titleLabel:this.nls.actionPage.editOptionsPopup.popupTitle,width:500,
maxHeight:445,autoHeight:!0,content:c,"class":this.baseClass,buttons:[{label:this.nls.actionPage.editOptionsPopup.editGroupButton,onClick:e.hitch(this,function(){this._editGroup(b);d.close()})},{label:this.nls.actionPage.editOptionsPopup.editIndependentlyButton,onClick:e.hitch(this,function(){b.attributeActionGroupName&&(this._removeGroupInfo={groupName:b.attributeActionGroupName,layerId:this._layerId,fieldName:this._fieldName,action:this._nlsActionToConfig(b.actionName)});this._onEditFieldInfoClick(a);
d.close()})}]})}else this._onEditFieldInfoClick(a)},_onEditFieldInfoClick:function(a){switch(this._copyAttrTable.getRowData(a).actionName){case this.nls.actionPage.copyAction.intersection:this._createIntersectionPanel(a);break;case this.nls.actionPage.copyAction.address:this._geocoderSettings&&this._geocoderSettings.hasOwnProperty("url")?this._createAddressPanel(a):this.emit("SetGeocoder");break;case this.nls.actionPage.copyAction.coordinates:this._createCoordinatesPanel(a)}},_removeFromGroup:function(a){this._removeGroupInfo&&
(this.removeFromGroup(this._removeGroupInfo),this._copyAttrTable.editRow(a,{attributeActionGroupName:null}))},_createIntersectionPanel:function(a){this._intersectionDijit=w({nls:this.nls,_fieldValues:this._configuredFieldValues,layerInfos:this.layerInfos,map:this.map,_fieldType:this._fieldType,isGroup:!1,ValidFieldsByType:this.ValidFieldsByType});this.own(g(this._intersectionDijit,"attributeActionUpdated",e.hitch(this,function(){this._removeFromGroup(a)})))},_createCoordinatesPanel:function(a){this._coordinatesDijit=
x({nls:this.nls,isGroup:!1,_fieldType:this._fieldType,_fieldValues:this._configuredFieldValues});this.own(g(this._coordinatesDijit,"attributeActionUpdated",e.hitch(this,function(){this._removeFromGroup(a)})))},_createAddressPanel:function(a){this._addressDijit=y({nls:this.nls,_fieldValues:this._configuredFieldValues,_geocoderSettings:this._geocoderSettings,_validGeocoderFields:this._validGeocoderFields,isGroup:!1});this.own(g(this._addressDijit,"attributeActionUpdated",e.hitch(this,function(){this._removeFromGroup(a)})))},
_setActionsTable:function(){var a=this._getConfigActionOrder();f.forEach(a,function(b){var a=this._getConfigAction(b),d=b;switch(b){case "Intersection":this.nls.actionPage.hasOwnProperty("copyAction")&&this.nls.actionPage.copyAction.hasOwnProperty("intersection")&&(d=this.nls.actionPage.copyAction.intersection);break;case "Address":this.nls.actionPage.hasOwnProperty("copyAction")&&this.nls.actionPage.copyAction.hasOwnProperty("address")&&(d=this.nls.actionPage.copyAction.address);break;case "Coordinates":this.nls.actionPage.hasOwnProperty("copyAction")&&
this.nls.actionPage.copyAction.hasOwnProperty("coordinates")&&(d=this.nls.actionPage.copyAction.coordinates);break;case "Preset":this.nls.actionPage.hasOwnProperty("copyAction")&&this.nls.actionPage.copyAction.hasOwnProperty("preset")&&(d=this.nls.actionPage.copyAction.preset);break;default:d=b}d={actionName:d};void 0!==a&&null!==a?this._configuredFieldValues[b]=a:(this._configuredFieldValues[b]={enabled:!1},"Intersection"===b&&(this._configuredFieldValues[b].fields=[]),"Coordinates"===b&&(this._configuredFieldValues[b].coordinatesSystem=
"MapSpatialReference",this._configuredFieldValues[b].field="x"));d.enabled=this._configuredFieldValues[b].enabled;this._configuredFieldValues[b].hasOwnProperty("attributeActionGroupName")&&(d.attributeActionGroupName=this._configuredFieldValues[b].attributeActionGroupName);a=this._copyAttrTable.addRow(d);"Preset"===b&&(b=n(".jimu-icon-edit",a.tr))&&0<b.length&&p.set(b[0],"display","none")},this)},geocoderConfigured:function(){this._geocoderSettings&&this._geocoderSettings.hasOwnProperty("url")&&this._createAddressPanel()},
_editGroup:function(a){var b,c;b=a.attributeActionGroupName;c=this._nlsActionToConfig(a.actionName);this._copyAttrTable&&(a=this._attributeActionsTable[c].getRows(),f.some(a,function(a){if(this._attributeActionsTable[c].getRowData(a).name===b)return this._fieldsPopUp.close(),this.onGroupEditingStart(this.nls.layersPage.attributeActionsTabTitle),this._attributeActionsTable[c]._onActionsEdit(a),!0},this))},onGroupEditingStart:function(a){this.emit("onGroupEditingStart",a)},removeFromGroup:function(a){this.emit("removeFromGroup",
a)}})});