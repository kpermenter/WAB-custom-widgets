// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/DistanceAndDirection/templates/TabRange.html":'\x3cdiv class\x3d"tabPanel" data-dojo-attach-point\x3d"rangeContainer"\x3e\r\n  \x3cdiv class\x3d"controls"\x3e\r\n    \x3cdiv class\x3d"controlGroup"\x3e\r\n      \x3clabel\x3e${nls.lineTypeLabel}\x3c/label\x3e\r\n      \x3cdiv class\x3d"controlItem"\x3e\r\n        \x3cselect data-dojo-attach-point\x3d"rangeType" style\x3d"width: 225px" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n          \x3coption selected\x3d"selected" value\x3d"Interactive"\x3e${nls.interactiveLabel}\x3c/option\x3e\r\n          \x3coption value\x3d"Fixed"\x3e${nls.fixedLabel}\x3c/option\x3e\r\n          \x3coption value\x3d"Origin"\x3e${nls.originLabel}\x3c/option\x3e\r\n          \x3coption value\x3d"Cumulative"\x3e${nls.cumulativeLabel}\x3c/option\x3e\r\n        \x3c/select\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"controlGroup"\x3e\r\n      \x3clabel data-dojo-attach-point\x3d\'rangeCenterLabel\'\x3e${nls.centerPointLabel}\x3c/label\x3e\r\n      \x3cdiv class\x3d"controlItem"\x3e\r\n        \x3cinput class\x3d"jimu-input coordInput" placeholder\x3d"${nls.startPointPlaceHolderLabel}" data-dojo-attach-point\x3d"rangeCenter"\r\n        /\x3e\r\n        \x3cdiv class\x3d"controlItem paddedLeft"\x3e\r\n          \x3cdiv class\x3d\'add-with-icon\'\x3e\r\n            \x3cspan title\x3d"${nls.formatInputLabel}" class\x3d"jimu-icon settingBtn safariOnly" data-dojo-attach-point\x3d"coordinateFormatButton"\x3e\x3c/span\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv class\x3d\'add-with-icon\'\x3e\r\n            \x3cdiv title\x3d"${nls.addPointLabel}" class\x3d"drawPointBtn" data-dojo-attach-point\x3d"addPointBtn"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"controlGroup controlGroupHidden" data-dojo-attach-point\x3d"numRingsContainer"\x3e\r\n      \x3clabel\x3e${nls.numberOfRingsLabel}\x3c/label\x3e\r\n      \x3cdiv class\x3d"controlItem" data-dojo-attach-point\x3d"numRingsDiv"\x3e\r\n        \x3cinput data-dojo-attach-point\x3d"numRingsInput" type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" name\x3d"numRings" required\x3d"true"\r\n          , value\x3d"5" data-dojo-props\x3d"constraints:{min:1, max: 100, places: 0}" /\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"controlGroup controlGroupHidden" data-dojo-attach-point\x3d"distancebetweenRingsContainer"\x3e\r\n      \x3clabel\x3e${nls.distanceBetweenRingsLabel}\x3c/label\x3e\r\n      \x3cdiv class\x3d"controlItem" data-dojo-attach-point\x3d"ringIntervalDiv"\x3e\r\n        \x3cinput style\x3d"width: 122px" data-dojo-type\x3d"dijit/form/NumberTextBox" required\x3d"true" value\x3d"1000" data-dojo-props\x3d"\r\n                    constraints:{places: 2},\r\n                    invalidMessage: \'${nls.ringsDecimalErrorMessage}\'" data-dojo-attach-point\x3d"ringIntervalInput" /\x3e\r\n        \x3cselect data-dojo-attach-point\x3d"ringIntervalUnitsDD" style\x3d"width: 100px" class\x3d"controlSpace noResize" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n          \x3coption value\x3d"feet"\x3e${nls.units.feet}\x3c/option\x3e\r\n          \x3coption value\x3d"kilometers"\x3e${nls.units.kilometers}\x3c/option\x3e\r\n          \x3coption value\x3d"miles"\x3e${nls.units.miles}\x3c/option\x3e\r\n          \x3coption value\x3d"meters" selected\x3d"selected"\x3e${nls.units.meters}\x3c/option\x3e\r\n          \x3coption value\x3d"nautical-miles"\x3e${nls.units.nauticalMiles}\x3c/option\x3e\r\n          \x3coption value\x3d"yards"\x3e${nls.units.yards}\x3c/option\x3e\r\n        \x3c/select\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"controlGroup" data-dojo-attach-point\x3d"distanceUnitsContainer"\x3e\r\n      \x3clabel\x3e${nls.distanceUnitsLabel}\x3c/label\x3e\r\n      \x3cdiv class\x3d"controlItem"\x3e\r\n        \x3cselect data-dojo-attach-point\x3d"distanceUnitsDD" style\x3d"width: 225px" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n          \x3coption value\x3d"feet"\x3e${nls.units.feet}\x3c/option\x3e\r\n          \x3coption value\x3d"kilometers"\x3e${nls.units.kilometers}\x3c/option\x3e\r\n          \x3coption value\x3d"miles"\x3e${nls.units.miles}\x3c/option\x3e\r\n          \x3coption value\x3d"meters" selected\x3d"selected"\x3e${nls.units.meters}\x3c/option\x3e\r\n          \x3coption value\x3d"nautical-miles"\x3e${nls.units.nauticalMiles}\x3c/option\x3e\r\n          \x3coption value\x3d"yards"\x3e${nls.units.yards}\x3c/option\x3e\r\n        \x3c/select\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"controlGroup controlGroupHidden" data-dojo-attach-point\x3d"distanceTableContainer"\x3e\r\n      \x3cdiv class\x3d"add-with-icon" data-dojo-attach-point\x3d"btnAddDistance"\x3e\r\n        \x3cspan class\x3d"jimu-icon jimu-icon-add" data-dojo-attach-point\x3d"btnAirframeIcon"\x3e\x3c/span\x3e\r\n        \x3cspan class\x3d"add-label"\x3e${nls.distancesLabel}\x3c/span\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"distanceTable" style\x3d"width: 225px"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"controlGroup" data-dojo-attach-point\x3d"numRadialsContainer"\x3e\r\n      \x3clabel\x3e${nls.numberOfRadialsLabel}\x3c/label\x3e\r\n      \x3cdiv class\x3d"controlItem" data-dojo-attach-point\x3d"numRadialsInputDiv"\x3e\r\n        \x3cinput data-dojo-type\x3d"dijit/form/NumberTextBox" required\x3d"false" value\x3d"3" data-dojo-props\x3d"\r\n                  constraints:{min: 0, max: 360, places: 0}" data-dojo-attach-point\x3d"numRadialsInput" /\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"buttonContainer" data-dojo-attach-point\x3d"buttonContainer"\x3e\r\n      \x3cdiv class\x3d\'jimu-btn jimu-state-disabled\' data-dojo-attach-point\x3d\'okButton\' data-dojo-attach-event\x3d"onclick: okButtonClicked"\x3e${nls.common.ok}\x3c/div\x3e\r\n      \x3cdiv class\x3d\'jimu-btn\' data-dojo-attach-point\x3d\'clearGraphicsButton\'\x3e${nls.clearGraphicsLabel}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/kernel dojo/dom-construct dojo/on dojo/dom-class dojo/topic dojo/string dojo/mouse dojo/keys dojo/number dijit/registry dijit/_WidgetBase dijit/_TemplatedMixin dijit/TooltipDialog dijit/popup dijit/form/NumberTextBox jimu/dijit/Message jimu/dijit/SimpleTable jimu/LayerInfos/LayerInfos jimu/utils dijit/_WidgetsInTemplateMixin dojo/text!../templates/TabRange.html esri/geometry/Circle esri/geometry/Polyline esri/geometry/Point esri/geometry/geometryEngine esri/graphic esri/layers/GraphicsLayer esri/layers/FeatureLayer esri/layers/LabelClass esri/tasks/FeatureSet esri/symbols/TextSymbol esri/symbols/SimpleFillSymbol esri/symbols/SimpleLineSymbol esri/symbols/SimpleMarkerSymbol esri/geometry/webMercatorUtils ../views/CoordinateInput ../views/EditOutputCoordinate ../models/RangeRingFeedback dijit/form/Select jimu/dijit/CheckBox".split(" "),
function(r,c,h,t,z,d,f,k,A,p,u,l,v,B,C,D,g,E,w,F,x,G,H,I,m,n,J,y,q,K,L,M,N,O,P,Q,R,S,T,U,V){return r([B,C,H],{templateString:I,baseClass:"jimu-widget-TabRange",startPoint:null,firstDistance:!0,_setStartPointAttr:function(){this._set("startPoint")},_getStartPointAttr:function(){return this.startPoint},constructor:function(a){r.safeMixin(this,a)},postCreate:function(){this._ptSym=new R(this.pointSymbol);this._circleSym=new P(this.circleSymbol);this._lineSym=new Q(this.lineSymbol);this._labelSym=new O(this.labelSymbol);
this._tsGL=new K;this.map.addLayer(this._tsGL);this.map.addLayer(this.getLayer());this._initDistanceTable();if(this._gl.loaded){var a=x.getInstanceSync().getLayerInfoById("Distance \x26 Direction - Range Graphics");a.showLabels();a.enablePopup()}else this._gl.on("load",c.hitch(this,function(){var a=x.getInstanceSync().getLayerInfoById("Distance \x26 Direction - Range Graphics");a.showLabels();a.enablePopup()}));this.coordTool=new T({appConfig:this.appConfig,nls:this.nls},this.rangeCenter);this.coordTool.inputCoordinate.formatType=
"DD";this.coordinateFormat=new D({content:new U({nls:this.nls}),style:"width: 400px"});"DartTheme"===this.appConfig.theme.name&&f.add(this.coordinateFormat.domNode,"dartThemeClaroDijitTooltipContainerOverride");this.dt=new V({map:this.map,coordTool:this.coordTool.inputCoordinate.util,nls:this.nls});this.dt.setFillSymbol(this._circleSym);this.dt.set("lengthLayer",this._lengthLayer);this.syncEvents();this._distanceTable.addRow({});this.checkValidInputs();this.numRingsInput.invalidMessage=this.nls.ringsErrorMessage;
this.numRingsInput.rangeMessage=this.nls.ringsErrorMessage;this.numRadialsInput.invalidMessage=this.nls.radialsInvalidMessage;this.numRadialsInput.rangeMessage=this.nls.radialsErrorMessage},_initDistanceTable:function(){var a=[{name:"Value",title:this.nls.valueLabel,type:"extension","class":"label",create:c.hitch(this,this._createValueField),getValue:c.hitch(this,this._getValueFieldValue)},{name:"actions",title:this.nls.actionLabel,width:"65px",type:"actions",actions:["up","down","delete"],"class":"label"}];
this._distanceTable=new F({fields:a,autoHeight:!0});this._distanceTable.placeAt(this.distanceTable);this._distanceTable.startup()},_createValueField:function(a){var b=new E({style:"height: 24px;",id:v.getUniqueId("ntb"),required:"true",placeHolder:this.nls.valueText,invalidMessage:this.nls.numericInvalidMessage,value:this.firstDistance?"":0,constraints:{places:2},"class":"numberTextBox"});z.place(b.domNode,a);this.own(d(b,"focus",c.hitch(this,function(){0===b.get("value")&&b.set("value","")})),d(b,
"blur",c.hitch(this,function(){var a=this._distanceTable.getRows();h.forEach(a,c.hitch(this,function(b){!this._distanceTable.getRowData(b).Value.valid&&1<a.length&&this._distanceTable.deleteRow(b)}))})));b.focus();this.firstDistance=!1},_getValueFieldValue:function(a){a=v.byNode(a.childNodes[0]);return{value:a.get("value"),valid:a.isValid()}},getLayer:function(){if(!this._gl){var a=new M({labelExpressionInfo:{value:"{Interval}"}});a.labelPlacement="center-end";a.symbol=this._labelSym;a={layerDefinition:{geometryType:"esriGeometryPolyline",
extent:{xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:{wkid:102100,latestWkid:102100}},objectIdField:"ObjectID",fields:[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"Interval",type:"esriFieldTypeString",alias:"Interval"}]},featureSet:new N};this._gl=new L(a,{id:"Distance \x26 Direction - Range Graphics",showLabels:!0});this.own(d(this._gl,"visibility-change",c.hitch(this,function(a){this._tsGL.setVisibility(a.visible)})))}return this._gl},syncEvents:function(){k.subscribe("TAB_SWITCHED",
c.hitch(this,this.tabSwitched));k.subscribe("DD-WIDGET-CLOSED",c.hitch(this,this._closeDijit));this.dt.watch("startPoint",c.hitch(this,function(a,b,c){this.coordTool.inputCoordinate.set("coordinateEsriGeometry",c);this.dt.addStartGraphic(c,this._ptSym)}));this.coordTool.inputCoordinate.watch("outputString",c.hitch(this,function(a,b,c){this.coordTool.manualInput||this.coordTool.set("value",c)}));this.own(d(this.coordTool,"keyup",c.hitch(this,this.coordToolKeyWasPressed)),this.dt.on("draw-complete",
c.hitch(this,this.feedbackDidComplete)),d(this.rangeType,"change",c.hitch(this,this.rangeTypeDropDownChanged)),d(this.ringIntervalUnitsDD,"change",c.hitch(this,this.ringIntervalUnitsDidChange)),d(this.coordinateFormatButton,"click",c.hitch(this,this.coordinateFormatButtonWasClicked)),d(this.addPointBtn,"click",c.hitch(this,this.pointButtonWasClicked)),d(this.coordinateFormat.content.applyButton,"click",c.hitch(this,function(){var a=this.coordinateFormat.content.formats[this.coordinateFormat.content.ct],
b=a.defaultFormat,c=this.coordinateFormat.content.frmtSelect.get("value");a.useCustom&&(b=a.customFormat);this.coordTool.inputCoordinate.set("formatPrefix",this.coordinateFormat.content.addSignChkBox.checked);this.coordTool.inputCoordinate.set("formatString",b);this.coordTool.inputCoordinate.set("formatType",c);this.setCoordLabel(c);g.close(this.coordinateFormat)})),d(this.coordinateFormat.content.cancelButton,"click",c.hitch(this,function(){g.close(this.coordinateFormat)})),d(this.clearGraphicsButton,
"click",c.hitch(this,this.clearGraphics)),d(this.numRingsDiv,p.leave,c.hitch(this,this.checkValidInputs)),d(this.ringIntervalDiv,p.leave,c.hitch(this,this.checkValidInputs)),d(this.numRadialsInputDiv,p.leave,c.hitch(this,this.checkValidInputs)),d(this.btnAddDistance,"click",c.hitch(this,function(){var a=this._distanceTable.getRows(),b=!1;h.forEach(a,c.hitch(this,function(a){this._distanceTable.getRowData(a).Value.valid&&(b=!0)}));b&&this._distanceTable.addRow({})})),d(this._distanceTable.tbody,"keyup",
c.hitch(this,function(a){a.keyCode===u.ENTER&&this._distanceTable.addRow({})})))},setCoordLabel:function(a){this.rangeCenterLabel.innerHTML=G.sanitizeHTML(A.substitute(this.nls.centerPointLabel+" (${crdType})",{crdType:a}))},rangeTypeDropDownChanged:function(){this.tabSwitched();switch(this.rangeType.get("value")){case "Interactive":f.add(this.numRingsContainer,"controlGroupHidden");f.add(this.distancebetweenRingsContainer,"controlGroupHidden");f.add(this.distanceTableContainer,"controlGroupHidden");
f.remove(this.distanceUnitsContainer,"controlGroupHidden");break;case "Fixed":f.remove(this.numRingsContainer,"controlGroupHidden");f.remove(this.distancebetweenRingsContainer,"controlGroupHidden");f.add(this.distanceUnitsContainer,"controlGroupHidden");f.add(this.distanceTableContainer,"controlGroupHidden");break;case "Origin":case "Cumulative":f.add(this.numRingsContainer,"controlGroupHidden"),f.add(this.distancebetweenRingsContainer,"controlGroupHidden"),f.remove(this.distanceUnitsContainer,"controlGroupHidden"),
f.remove(this.distanceTableContainer,"controlGroupHidden")}this.checkValidInputs()},coordToolKeyWasPressed:function(a){this.dt.removeStartGraphic();a.keyCode===u.ENTER&&this.coordTool.inputCoordinate.getInputType().then(c.hitch(this,function(a){"UNKNOWN"===a.inputType?(new w({message:this.nls.invalidCoordinateTypeMessage}),this.coordTool.inputCoordinate.coordinateEsriGeometry=null):(k.publish("manual-rangering-center-point-input",this.coordTool.inputCoordinate.coordinateEsriGeometry),this.setCoordLabel(a.inputType),
this.coordTool.inputCoordinate.set("formatString",this.coordinateFormat.content.formats[a.inputType].defaultFormat),this.coordTool.inputCoordinate.set("formatType",a.inputType),this.dt.addStartGraphic(a.coordinateEsriGeometry,this._ptSym));this.checkValidInputs()}))},coordinateFormatButtonWasClicked:function(){this.coordinateFormat.content.set("ct",this.coordTool.inputCoordinate.formatType);g.open({popup:this.coordinateFormat,around:this.coordinateFormatButton})},_closeDijit:function(){this.coordinateFormat&&
this.coordinateFormat.domNode.offsetParent&&g.close(this.coordinateFormat)},pointButtonWasClicked:function(){f.contains(this.addPointBtn,"drawPointBtn-active")?(this.dt.deactivate(),this.map.enableMapNavigation()):(this.coordTool.manualInput=!1,k.publish("clear-points"),this.map.disableMapNavigation(),"Interactive"===this.rangeType.get("value")?this.dt.activate("polyline"):this.dt.activate("point"));f.toggle(this.addPointBtn,"drawPointBtn-active")},ringIntervalUnitsDidChange:function(){this.ringIntervalUnit=
this.ringIntervalUnitsDD.get("value")},okButtonClicked:function(){if(!f.contains(this.okButton,"jimu-state-disabled")){var a,b,d;switch(this.rangeType.get("value")){case "Fixed":b=this.ringIntervalInput.get("value");a=this.numRingsInput.get("value");d=this.ringIntervalUnitsDD.get("value");break;case "Origin":case "Cumulative":if(d=this.distanceUnitsDD.get("value"),this.checkTableValues())if(b=this._distanceTable.getRows(),"Origin"===this.rangeType.get("value"))b=h.map(b,c.hitch(this,function(a){return this._distanceTable.getRowData(a).Value.value}));
else{var W=0;b=h.map(b,c.hitch(this,function(a){a=this._distanceTable.getRowData(a);return W+=a.Value.value}))}else{new w({message:this.nls.distanceTableErrorMessage});return}}a={centerPoint:this.dt.get("startPoint")||this.coordTool.inputCoordinate.coordinateEsriGeometry,numRings:a,numRadials:this.numRadialsInput.get("value"),radius:0,circle:null,circles:[],lastCircle:null,r:0,c:0,radials:0,ringInterval:b,ringIntervalUnitsDD:d,circleSym:this._circleSym};this.createRangeRings(a);this.coordTool.clear()}},
checkTableValues:function(){return 0<this._distanceTable.getRows().length},createRangeRings:function(a){if(a.centerPoint){a.centerPoint.spatialReference.wkid!==this.map.spatialReference.wkid&&(a.centerPoint=S.geographicToWebMercator(a.centerPoint));if(a.ringInterval&&a.ringIntervalUnitsDD)if(a.ringInterval.constructor===Array)for(e=0;e<a.ringInterval.length;e++)a.ringInterval[e]=this.coordTool.inputCoordinate.util.convertToMeters(parseFloat(a.ringInterval[e]),a.ringIntervalUnitsDD);else a.ringDistance=
this.coordTool.inputCoordinate.util.convertToMeters(parseFloat(a.ringInterval),a.ringIntervalUnitsDD);this.dt.removeStartGraphic();if(0===a.circles.length)if(a.ringInterval.constructor===Array)for(e=0;e<a.ringInterval.length;e++)a.radius+=a.ringDistance,a.circle=new m({center:a.centerPoint,geodesic:!0,radius:a.ringInterval[e],numberOfPoints:360}),a.circles.push(a.circle);else for(a.r=0;a.r<a.numRings;a.r++)a.radius+=a.ringDistance,a.circle=new m({center:a.centerPoint,geodesic:!0,radius:a.radius,numberOfPoints:360}),
a.circles.push(a.circle);e=a.ringIntervalUnitsDD;for(a.c=0;a.c<a.circles.length;a.c++){var b=new n({paths:[a.circles[a.c].rings[0]],spatialReference:this.map.spatialReference}),d=window.isRTL?this._getLengthAbbrevation(this.distanceUnitsDD.get("value"))+" "+l.format(l.round(this.coordTool.inputCoordinate.util.convertMetersToUnits(a.circles[a.c].radius,e),2),{places:2,locale:t.locale}):l.format(l.round(this.coordTool.inputCoordinate.util.convertMetersToUnits(a.circles[a.c].radius,e),2),{places:2,locale:t.locale})+
" "+this._getLengthAbbrevation(this.distanceUnitsDD.get("value")),f=new q(b,this._lineSym,{Interval:d});this._gl.add(f);b=new J(b.paths[0][0][0],b.paths[0][0][1],a.centerPoint.spatialReference);this._tsGL.add(new q(b,c.clone(this._labelSym).setText(d).setOffset(0,10)))}for(var e=a.largestRadius=0;e<a.circles.length;e++)a.circles[e].radius>a.largestRadius&&(a.largestRadius=a.circles[e].radius);e=new m({center:a.centerPoint,geodesic:!0,radius:a.largestRadius,numberOfPoints:a.numRadials});if(0!==a.numRadials)for(d=
0;d<e.rings[0].length-1;d++)b=new n(a.centerPoint.spatialReference),b.addPath([c.clone(a.centerPoint),e.getPoint(0,d)]),b=new n(y.geodesicDensify(b,1E4),a.centerPoint.spatialReference),this._gl.add(new q(b,this._lineSym,{Interval:""}));this._gl.redraw();this.map.setExtent(e.getExtent().expand(3))}},feedbackDidComplete:function(a){var b=null;if(a.geometry.hasOwnProperty("circlePoints")){for(var b=a.geometry.circlePoints[0],c={centerPoint:b,numRadials:this.numRadialsInput.get("value"),circles:[],circleSym:this._circleSym,
r:0,c:0,radials:0,ringIntervalUnitsDD:this.distanceUnitsDD.get("value"),intervalUnits:this.distanceUnitsDD.get("value")},d,e=1;e<a.geometry.circlePoints.length;e++)d=new n(a.geometry.spatialReference),d.addPath([b,a.geometry.circlePoints[e]]),d=y.geodesicLength(d,9001),d=new m({center:b,geodesic:!0,radius:d,numberOfPoints:360}),c.circles.push(d);this.createRangeRings(c)}else b=a.geometry,this.checkValidInputs();f.remove(this.addPointBtn,"drawPointBtn-active");this.dt.deactivate();this.map.enableMapNavigation()},
clearGraphics:function(){this._gl&&(this._tsGL.clear(),this._gl.clear(),this._gl.refresh(),this.dt.removeStartGraphic(),this.coordTool.clear());this.checkValidInputs();for(var a=0;a<this.map.graphicsLayerIds.length;a++)this.map.getLayer(this.map.graphicsLayerIds[a]).refresh()},setGraphicsHidden:function(){this._gl&&this._gl.hide()},setGraphicsShown:function(){this._gl&&this._gl.show()},checkValidInputs:function(){f.add(this.okButton,"jimu-state-disabled");"Interactive"!==this.rangeType.get("value")&&
null!==this.coordTool.inputCoordinate.coordinateEsriGeometry&&this.numRingsInput.isValid()&&this.ringIntervalInput.isValid()&&this.numRadialsInput.isValid()&&f.remove(this.okButton,"jimu-state-disabled")},tabSwitched:function(){this.dt.deactivate();this.dt.cleanup();this.dt.disconnectOnMouseMoveHandlers();this.map.enableMapNavigation();this.dt.removeStartGraphic();f.remove(this.addPointBtn,"drawPointBtn-active");g.close(this.coordinateFormat)},_getLengthAbbrevation:function(a){var b=null;if(a)switch(a){case "feet":b=
this.nls.abbrevFeetLabel;break;case "kilometers":b=this.nls.abbrevKmLabel;break;case "miles":b=this.nls.abbrevMilesLabel;break;case "meters":b=this.nls.abbrevMetersLabel;break;case "nautical-miles":b=this.nls.abbrevNauticalMilesLabel;break;case "yards":b=this.nls.abbrevYardsLabel;break;default:b=a}return b},_getDegreeAbbreviation:function(a){var b=null;if(a)switch(a){case "degrees":b=this.nls.abbrevDegreesLabel;break;case "mils":b=this.nls.abbrevMilsLabel;break;default:b=a}return b}})});