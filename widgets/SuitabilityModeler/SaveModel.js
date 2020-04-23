// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SuitabilityModeler/SaveModel.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"header"\x3e\r\n    \x3ch4\x3e${i18n.saveModel.save}\x3c/h4\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"body"\x3e\r\n    \x3cdiv class\x3d"row"\x3e\r\n      \x3cspan class\x3d"lbl"\x3e\x3clabel for\x3d"${id}_title"\x3e${i18n.saveModel.title}\x3clabel\x3e\x3c/span\x3e\r\n      \x3cinput id\x3d"${id}_title" type\x3d"text" class\x3d"jimu-input" data-dojo-attach-point\x3d"titleNode"\x3e\x3c/input\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"row"\x3e\r\n      \x3cspan class\x3d"lbl"\x3e\x3clabel for\x3d"${id}_summary"\x3e${i18n.saveModel.summary}\x3clabel\x3e\x3c/span\x3e\r\n      \x3cinput id\x3d"${id}_summary" type\x3d"text" class\x3d"jimu-input" data-dojo-attach-point\x3d"summaryNode"\x3e\x3c/input\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"row"\x3e\r\n      \x3cspan class\x3d"lbl"\x3e\x3clabel for\x3d"${id}_description"\x3e${i18n.saveModel.description}\x3clabel\x3e\x3c/span\x3e\r\n      \x3ctextarea id\x3d"${id}_description" class\x3d"jimu-input" data-dojo-attach-point\x3d"descriptionNode"\x3e\x3c/textarea\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"row"\x3e\r\n      \x3cspan class\x3d"lbl"\x3e\x3clabel for\x3d"${id}_title"\x3e${i18n.saveModel.tags}\x3clabel\x3e\x3c/span\x3e\r\n      \x3cinput id\x3d"${id}_tags" type\x3d"text" class\x3d"jimu-input" value\x3d"weightedOverlayModel, geodesign"\r\n        data-dojo-attach-point\x3d"tagsNode"\x3e\x3c/input\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"row" data-dojo-attach-point\x3d"folderDiv"\x3e\r\n      \x3cspan class\x3d"lbl"\x3e\x3clabel for\x3d"${id}_folderSelect"\x3e${i18n.saveModel.folder}\x3clabel\x3e\x3c/span\x3e\r\n      \x3cselect id\x3d"${id}_folderSelect" class\x3d"folder-select-dropdown"\r\n        data-dojo-attach-point\x3d"folderSelect"\x3e\r\n      \x3c/select\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"footer"\x3e\r\n    \x3cdiv class\x3d"message" data-dojo-attach-point\x3d"messageNode"\x3e\x3c/div\x3e\r\n    \x3cbutton data-dojo-attach-point\x3d"okButton"\r\n      class\x3d"jimu-btn"\r\n      data-dojo-attach-event\x3d"onClick: okClicked"\r\n      \x3e${i18n.saveModel.save}\r\n    \x3c/button\x3e\r\n    \x3cbutton data-dojo-attach-point\x3d"cancelButton"\r\n      class\x3d"jimu-btn"\r\n      data-dojo-attach-event\x3d"onClick: cancelClicked"\r\n      \x3e${i18n.general.cancel}\r\n    \x3c/button\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/array dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./SaveModel.html ./wro/PortalUtil dojo/i18n!./nls/strings".split(" "),function(k,l,m,n,p,q,r,t){return k([m,n,p],{baseClass:"jimu-widget-suitability-modeler-save-model",i18n:t,templateString:q,dialog:null,itemData:null,layer:null,portal:null,portalUser:null,saveAs:!1,userContentUrl:null,username:null,wabWidget:null,postCreate:function(){this.inherited(arguments)},allowFolders:function(){return!this.saveAs&&
this.layer.xtnWroItem&&this.layer.xtnWroItem.id?!1:!0},cancelClicked:function(){this.hide()},checkTags:function(a){var b="";a.split(",").forEach(function(a){a=a.trim();0<a.length&&(0<b.length&&(b+=","),b+=a)});return b},hide:function(){var a=this;this.wroWidget.hideSavePanel().then(function(){a.destroyRecursive(!1)})},initUI:function(a){a&&!this.saveAs&&(this.summaryNode.value=a.snippet,this.descriptionNode.value=a.description,this.tagsNode.value=a.tags,this.titleNode.value=a.title)},okClicked:function(){this.validateAndSave()},
populateFolders:function(a,b){var e=this;this.allowFolders()?a.user.getContent().then(function(a){a=a.folders;var d=new Option;d.value="";d.text=e.i18n.saveModel.homeFolderPattern.replace("{username}",e.username);e.folderSelect.add(d);l.forEach(a,function(a){var b=new Option;b.value=a.id;b.text=a.title;e.folderSelect.add(b)});b&&"string"===typeof b.folderId&&0<b.folderId.length&&(e.folderSelect.value=b.folderId)}):this.folderDiv.style.display="none"},show:function(){var a=this.wabWidget._wroWidget.savePanelNode,
b=this.layer.xtnWroItem;this.populateFolders(this.portal,b);this.initUI(b);a.appendChild(this.domNode);this.wroWidget.showSavePanel()},validateAndSave:function(){this.okButton.disabled=!0;var a=this.layer,b=null,e=this.username,g=this.folderSelect.value||"";this.messageNode.innerHTML="";var d=this.checkTags(this.tagsNode.value.trim());if(null===d||0===d.length)d="weightedOverlayModel";var c={type:"Image Service"};c.text=window.JSON.stringify(this.itemData);c.url=a.url;c.snippet=this.summaryNode.value.trim();
c.description=this.descriptionNode.value.trim();c.tags=d;c.typeKeywords="geodesignModelerLayer";c.clearEmptyFields=!0;c.title=this.titleNode.value.trim();if(0===c.title.length)this.okButton.disabled=!1;else{a.xtnWroItem&&!this.saveAs&&(b=a.xtnWroItem.id,g=a.xtnWroItem.folderId);var h={id:b,title:c.title,snippet:c.snippet,description:c.description,tags:c.tags,folderId:g},f=this;(new r({portal:this.portal,portalUser:this.portalUser,userContentUrl:this.userContentUrl})).saveItem(b,c,g,e).then(function(b){h.id=
b.id;a.xtnWroItem=h;f.hide()}).otherwise(function(a){console.warn("Save Model failed.");console.warn(a);f.okButton.disabled=!1;f.messageNode.innerHTML=f.i18n.saveModel.failed})}}})});