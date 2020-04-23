// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/Query/TaskSetting.html":'\x3cdiv\x3e\r\n  \x3ctable class\x3d"top"\x3e\r\n    \x3ctr\x3e\r\n      \x3ctd class\x3d"first-td"\x3e\r\n        \x3cdiv class\x3d"back-arrow feature-action icon-arrow-back" data-dojo-attach-event\x3d"onclick:_onBtnParamsBackClicked"\x3e\x3c/div\x3e\r\n      \x3c/td\x3e\r\n      \x3ctd class\x3d"second-td"\x3e\r\n        \x3cdiv class\x3d"task-name jimu-ellipsis" data-dojo-attach-point\x3d"taskNameDiv"\x3e\x3c/div\x3e\r\n      \x3c/td\x3e\r\n      \x3ctd class\x3d"third-td"\x3e\x3c/td\x3e\r\n    \x3c/tr\x3e\r\n  \x3c/table\x3e\r\n  \x3cdiv class\x3d"content-container"\x3e\r\n\r\n    \x3cdiv class\x3d"params-container" data-dojo-attach-point\x3d"paramsContainer"\x3e\r\n      \x3cdiv class\x3d"not-visible" data-dojo-attach-point\x3d"noFilterTip"\x3e${nls.noAttributeSpatialFilterTip}\x3c/div\x3e\r\n      \x3cdiv class\x3d"attributes-section" data-dojo-attach-point\x3d"attributesSectionDiv"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"criteiraLabelDiv" class\x3d"first-stress attribute-filter-label"\x3e${nls.queryCriteira}\x3c/div\x3e\r\n        \x3cdiv class\x3d"sql-div jimu-widget-note" data-dojo-attach-point\x3d"sqlDiv"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"spatial-section" data-dojo-attach-point\x3d"spatialSectionDiv"\x3e\r\n        \x3cdiv class\x3d"spearator not-visible" data-dojo-attach-point\x3d"spatialSpearator"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"spatialFilterLabelDiv" class\x3d"first-stress spatial-filter-label"\x3e${nls.spatialFilter}\x3c/div\x3e\r\n        \x3cdiv class\x3d"spatial-filter-tip" data-dojo-attach-point\x3d"spatialFilterTip"\x3e\x3c/div\x3e\r\n        \x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"spatialTypeSelect" data-dojo-attach-event\x3d"change:_onSpatialTypeSelectChanged" class\x3d"restrict-select-width" style\x3d"width:100%;box-sizing:border-box;"\x3e\x3c/select\x3e\r\n        \x3cdiv class\x3d"spatial-filter-content" data-dojo-attach-point\x3d"spatialFilterContent"\x3e\r\n          \x3cdiv class\x3d"drawing-section" data-dojo-attach-point\x3d"drawingSection"\x3e\x3c/div\x3e\r\n          \x3cdiv class\x3d"features-section" data-dojo-attach-point\x3d"featuresSection"\x3e\r\n            \x3cdiv class\x3d"relationship-section"\x3e\r\n              \x3cdiv class\x3d"second-stress relationship-tip"\x3e${nls.spatialRelationship}\x3c/div\x3e\r\n              \x3cselect data-dojo-attach-point\x3d"relationshipSelect" data-dojo-type\x3d"dijit/form/Select" class\x3d"restrict-select-width relationship-select" style\x3d"width:100%;box-sizing:border-box;"\x3e\x3c/select\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"layerNameContainer" class\x3d"result-name-container"\x3e\r\n      \x3cdiv class\x3d"first-stress"\x3e${nls.layerName}\x3c/div\x3e\r\n      \x3cdiv class\x3d"result-name-text" data-dojo-attach-point\x3d"layerNameTextBox" data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-event\x3d"change:_onLayerNameTextChanged"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"jimu-btn btn-execute" data-dojo-attach-point\x3d"btnExecute" data-dojo-attach-event\x3d"onclick:_onBtnApplyClicked"\x3e${nls.apply}\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingIndicator" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/Evented dojo/text!./TaskSetting.html dojo/on dojo/Deferred dojo/_base/lang dojo/_base/html dojo/_base/array dojo/promise/all jimu/filterUtils jimu/dijit/FilterParameters ./utils jimu/utils ./SingleQueryLoader ./SpatialFilterByDrawing jimu/dijit/SpatialFilterByFeatures esri/tasks/query".split(" "),function(r,t,u,v,w,x,h,k,d,b,m,y,z,A,n,p,B,C,D,E){return r([t,u,v,w],{baseClass:"query-task-setting",
templateString:x,askForValues:!1,_defaultRelationship:"SPATIAL_REL_INTERSECTS",nls:null,map:null,currentAttrs:null,layerInfosObj:null,postCreate:function(){this.inherited(arguments);this._initSelf()},run:function(){var a=this._getCleanClonedCurrentAttrs(this.currentAttrs);a.query.relationship=this._getRestRelationship();var f=this.getWhere(),g=this.getGeometry();y([f,g]).then(d.hitch(this,function(f){this.deactivate();a.query.where=f[0];a.query.geometry=f[1];if("function"===typeof this.onApply)this.onApply(a)}),
d.hitch(this,function(a){console.error(a)}))},hideTempLayers:function(){this.spatialFilterByDrawing&&this.spatialFilterByDrawing.hideTempLayers();this.spatialFilterByFeatures&&this.spatialFilterByFeatures.hideTempLayers()},showTempLayers:function(){this.spatialFilterByDrawing&&this.spatialFilterByDrawing.showTempLayers();this.spatialFilterByFeatures&&this.spatialFilterByFeatures.showTempLayers()},_getCleanClonedCurrentAttrs:function(a){var f=B.getCleanCurrentAttrsTemplate(),g=null,b;for(b in a)"queryTr"!==
b&&"query"!==b&&"layerObject"!==b&&(g=a[b],f[b]=d.clone(g));f.queryTr=a.queryTr;f.query.maxRecordCount=a.query.maxRecordCount;return f},onGetQueryResponse:function(){this.deactivate();this._tryResetSpatialFilterByDrawing();this._tryResetSpatialFilterByFeatures()},getWhere:function(){var a=new k,f=this._getWhereInfo();if(1===f.status){var b=this.currentAttrs.config.webMapLayerId;if(b){var d=null,d=n.isTable(this.currentAttrs.layerInfo)?this.layerInfosObj.getTableInfoById(b):this.layerInfosObj.getLayerInfoById(b),
b="";d&&(b=d.getFilter());d=f.where;b&&(d="("+b+") AND ("+f.where+")");a.resolve(d)}else a.resolve(f.where)}else a.reject("Can't get a valid sql");return a},_getWhereInfo:function(){var a={status:0,where:""};if(this.askForValues){var b=this.filterParams.getFilterExpr();b&&"string"===typeof b?(a.status=1,a.where=b):(a.status=-1,a.where=null)}else a.status=1,a.where=this.currentAttrs.config.filter.expr;1!==a.status||a.where||(a.where="1\x3d1");return a},_updateExecuteButtonStatus:function(){var a=this._isValidWhereToExecute()&&
this._isValidGeometryToExecute()&&this._isValidLayerNameToExecute();a?b.removeClass(this.btnExecute,"disabled"):b.addClass(this.btnExecute,"disabled");return a},_isValidWhereToExecute:function(){return 0<this._getWhereInfo().status},_isValidLayerNameToExecute:function(){return this.layerNameTextBox.get("value")},_isValidGeometryToExecute:function(){var a=this.spatialTypeSelect.get("value");if("currentMapExtent"!==a){if("drawing"===a)return!!this.spatialFilterByDrawing.getGeometryInfo().geometry;if("useFeatures"===
a)return this.spatialFilterByFeatures.isValidSearchDistance()}return!0},getGeometry:function(){var a=new k,b=this.spatialTypeSelect.get("value");"currentMapExtent"===b?a.resolve(this.map.extent):"drawing"===b?(b=this.spatialFilterByDrawing.getGeometryInfo(),0>b.status?a.reject("Invalid search distance"):(0===b.status&&console.log("User doesn't draw anything"),a.resolve(b.geometry))):"useFeatures"===b?this.spatialFilterByFeatures.getGeometryInfo().then(d.hitch(this,function(b){-2===b.status?a.reject("Invalid search distance"):
(-1===b.status?console.log("User doesn't select a layer"):0===b.status&&console.log("User doesn't select any features"),a.resolve(b.geometry))}),d.hitch(this,function(b){a.reject(b)})):a.resolve(null);return a},deactivate:function(){this.spatialFilterByDrawing&&this.spatialFilterByDrawing.deactivate();this.spatialFilterByFeatures&&this.spatialFilterByFeatures.deactivate()},clearAllGraphics:function(){this.spatialFilterByDrawing&&this.spatialFilterByDrawing.clearAllGraphics();this.spatialFilterByFeatures&&
this.spatialFilterByFeatures.clearAllGraphics()},canAutoRunning:function(){return this._canAttributeFilterAutoRunning()&&this._canSpatialFilterAutoRunning()},_canAttributeFilterAutoRunning:function(){return 0<this._getWhereInfo().status&&!this.askForValues},_canSpatialFilterAutoRunning:function(){var a=this.spatialTypeSelect.getOptions()||[];return 0===a.length?!0:1===a.length?(a=this.spatialTypeSelect.get("value"),"drawing"!==a&&"useFeatures"!==a):!1},_initSelf:function(){var a=this.currentAttrs.config,
f=this.currentAttrs.layerInfo,g=this.currentAttrs.layerObject||f,l=a.name||"",l=p.sanitizeHTML(l);this.taskNameDiv.innerHTML=l;this.taskNameDiv.title=this.taskNameDiv.innerHTML;a.customResultName?this._showLayerNameContainer():this._hideLayerNameContainer();var c=this.criteiraLabel||"",c=p.sanitizeHTML(c);this.criteiraLabelDiv.innerHTML=c;this.criteiraLabelDiv.title=this.criteiraLabelDiv.innerHTML;c=this.spatialFilterLabel||"";c=p.sanitizeHTML(c);this.spatialFilterLabelDiv.innerHTML=c;this.spatialFilterLabelDiv.title=
this.spatialFilterLabelDiv.innerHTML;this.showFilterLabel?(this._showCriteiraLabelDiv(),this._showSpatialFilterLabelDiv()):(this._hideCriteiraLabelDiv(),this._hideSpatialFilterLabelDiv());this.filterParams=new A;this.filterParams.placeAt(this.sqlDiv,"before");var k={ifDisplaySQL:!0};this.own(h(this.filterParams,"change",d.hitch(this,this._updateExecuteButtonStatus)));this.own(h(this.filterParams,"enter",d.hitch(this,this._onBtnApplyClicked)));c=d.clone(a.filter);this.filterParams.build(a.url,g,c,
a.webMapLayerId);g=new z;c=this.currentAttrs.config.filter;this.askForValues=g.isAskForValues(c);var e=!0,g=!1;if(this.askForValues){e=!0;c.displaySQL?this.sqlDiv.innerHTML=c.displaySQL:c.expr&&(this.sqlDiv.innerHTML=c.expr);if(c=this.filterParams.getFilterExpr(k))this.sqlDiv.innerHTML=c;this.own(h(this.filterParams,"change",d.hitch(this,function(){this.sqlDiv.innerHTML="";var a=this.filterParams.getFilterExpr(k);a&&(this.sqlDiv.innerHTML=a)})))}else this.currentAttrs.config.showSQL?e="1\x3d1"!==
c.expr:(e=!1,g="1\x3d1"===c.expr),this.sqlDiv.innerHTML=c.displaySQL?c.displaySQL:c.expr;this.currentAttrs.config.showSQL?b.removeClass(this.sqlDiv,"not-visible"):b.addClass(this.sqlDiv,"not-visible");e?b.removeClass(this.attributesSectionDiv,"not-visible"):b.addClass(this.attributesSectionDiv,"not-visible");c=this.currentAttrs.config.spatialFilter;e=null;c||(c={});n.isTable(f)&&(c={});c.currentMapExtent&&(e={value:"currentMapExtent",label:this.nls.useCurrentExtentTip},this.spatialTypeSelect.addOption(e),
c.currentMapExtent["default"]&&this.spatialTypeSelect.set("value",e.value));c.drawing&&(e={value:"drawing",label:this.nls.useDrawGraphicTip},this.spatialTypeSelect.addOption(e),c.drawing["default"]&&this.spatialTypeSelect.set("value",e.value),e=c.drawing.buffer,this.spatialFilterByDrawing=new C({drawBoxOption:{map:this.map,geoTypes:c.drawing.geometryTypes},nls:this.nls,enableBuffer:!!e,distance:d.getObject("defaultDistance",!1,e)||0,unit:d.getObject("defaultUnit",!1,e)||""}),this.own(h(this.spatialFilterByDrawing,
"change",d.hitch(this,this._updateExecuteButtonStatus))),this.spatialFilterByDrawing.placeAt(this.drawingSection));if(c.useFeatures){e={value:"useFeatures",label:this.nls.useFeaturesTip};this.spatialTypeSelect.addOption(e);c.useFeatures["default"]&&this.spatialTypeSelect.set("value",e.value);var e=c.useFeatures.buffer,q=[];a.webMapLayerId&&q.push(a.webMapLayerId);this.spatialFilterByFeatures=new D({map:this.map,nls:this.nls,enableBuffer:!!e,distance:d.getObject("defaultDistance",!1,e)||0,unit:d.getObject("defaultUnit",
!1,e)||"",showLoading:!1,ignoredFeaturelayerIds:q});this.spatialFilterByFeatures.tipNode&&b.setStyle(this.spatialFilterByFeatures.tipNode,"display","block");this.spatialFilterByFeatures.placeAt(this.featuresSection);this.own(h(this.spatialFilterByFeatures,"loading",d.hitch(this,function(){this.domNode&&this.shelter.show()})));this.own(h(this.spatialFilterByFeatures,"unloading",d.hitch(this,function(){this.domNode&&this.shelter.hide()})));this.own(h(this.spatialFilterByFeatures,"search-distance-change",
d.hitch(this,this._updateExecuteButtonStatus)));(a=c.useFeatures.relationships)&&0<a.length?m.forEach(a,d.hitch(this,function(a){this.relationshipSelect.addOption({value:a.relationship,label:a.label})})):this.relationshipSelect.addOption({value:this._defaultRelationship,label:this._defaultRelationship})}c.fullLayerExtent&&(e={value:"fullLayerExtent",label:this.nls.noSpatialLimitTip},this.spatialTypeSelect.addOption(e),c.fullLayerExtent["default"]&&this.spatialTypeSelect.set("value",e.value));a=!0;
c=this.spatialTypeSelect.getOptions()||[];0===c.length?(a=!1,this.spatialFilterTip.innerHTML=this.nls.noSpatialLimitTip):1===c.length?(a="fullLayerExtent"!==c[0].value,this.spatialFilterTip.innerHTML=c[0].label,b.addClass(this.spatialTypeSelect.domNode,"not-visible")):a=!0;n.isTable(f)&&(a=!1);a?b.removeClass(this.spatialSectionDiv,"not-visible"):b.addClass(this.spatialSectionDiv,"not-visible");this._onSpatialTypeSelectChanged();g&&!a&&b.removeClass(this.noFilterTip,"not-visible");f=this._getBestQueryName(l);
this.layerNameTextBox.set("value",f)},getQueryResultName:function(){return this.layerNameTextBox.get("value")},_getConstantRelationship:function(){var a=this._defaultRelationship;"useFeatures"===this.spatialTypeSelect.get("value")&&(a=this.relationshipSelect.get("value"));return a},_getRestRelationship:function(){var a=this._getConstantRelationship();return E[a]},_onSpatialTypeSelectChanged:function(){var a=this.spatialTypeSelect.get("value");"drawing"===a?b.setStyle(this.drawingSection,"display",
"block"):(b.setStyle(this.drawingSection,"display","none"),this._tryResetSpatialFilterByDrawing());"useFeatures"===a?b.setStyle(this.featuresSection,"display","block"):(b.setStyle(this.featuresSection,"display","none"),this._tryResetSpatialFilterByFeatures());this.spatialTypeSelect.domNode.title="";a&&(a=this.spatialTypeSelect.getOptions(a))&&(this.spatialTypeSelect.domNode.title=a.label);this._updateExecuteButtonStatus()},_tryResetSpatialFilterByDrawing:function(){this.spatialFilterByDrawing&&this.spatialFilterByDrawing.reset()},
_tryResetSpatialFilterByFeatures:function(){this.spatialFilterByFeatures&&this.spatialFilterByFeatures.reset()},_onBtnParamsBackClicked:function(){this._tryResetSpatialFilterByDrawing();this._tryResetSpatialFilterByFeatures();if("function"===typeof this.onBack)this.onBack()},_getBestQueryName:function(a){for(var b=a=a?a+(" _"+this.nls.queryResult):a+this.nls.queryResult,g=m.map(this.map.graphicsLayerIds,d.hitch(this,function(a){return this.map.getLayer(a).name})),h=2;0<=m.indexOf(g,b);)b=a+"_"+h,
h++;return b},_onLayerNameTextChanged:function(){this._updateExecuteButtonStatus()},_onBtnApplyClicked:function(){this._updateExecuteButtonStatus()&&this.run()},_showLayerNameContainer:function(){b.setStyle(this.layerNameContainer,"display","block")},_hideLayerNameContainer:function(){b.setStyle(this.layerNameContainer,"display","none")},_showCriteiraLabelDiv:function(){b.setStyle(this.criteiraLabelDiv,"display","block")},_hideCriteiraLabelDiv:function(){b.setStyle(this.criteiraLabelDiv,"display",
"none")},_showSpatialFilterLabelDiv:function(){b.setStyle(this.spatialFilterLabelDiv,"display","block")},_hideSpatialFilterLabelDiv:function(){b.setStyle(this.spatialFilterLabelDiv,"display","none")}})});