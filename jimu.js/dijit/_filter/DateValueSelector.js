// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/_filter/DateValueSelector.html":'\x3cdiv\x3e\r\n\t\x3cinput data-dojo-type\x3d"dijit/form/DateTextBox" data-dojo-attach-point\x3d"dateTextBox" class\x3d"custom-date-text-box" data-dojo-attach-event\x3d"change:_onDateTextBoxChanged" data-dojo-props\x3d\'required:false,trim:true\' /\x3e\r\n\x3c/div\x3e'}});
define("dojo/aspect dojo/Evented dojo/on dojo/_base/html dojo/dom-construct dojo/_base/lang dojo/_base/array dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./DateValueSelector.html jimu/filterUtils jimu/utils dijit/form/Select dijit/form/DateTextBox".split(" "),function(e,g,f,b,h,c,k,l,m,n,p,q,d,r,t){return l([m,n,p,g],{templateString:q,virtualDates:null,customId:null,postMixInProperties:function(){this.inherited(arguments);this.nls=window.jimuNls.filterBuilder},
postCreate:function(){this.inherited(arguments);b.addClass(this.domNode,"jimu-date-value-selector");var a={};this.customId&&(this.customId+="_select",a=b.toDom('\x3clabel for\x3d"'+this.customId+'" class\x3d"screen-readers-only"\x3e'+this.prompt+"\x3c/label\x3e"),b.place(a,this.domNode),a={id:this.customId});this.dateTypeSelect=new t(a);b.addClass(this.dateTypeSelect.domNode,"date-type-select");b.addClass(this.dateTypeSelect.domNode,"restrict-select-width");this.dateTypeSelect.placeAt(this.domNode);
a=b.toDom('\x3ccaption class\x3d"screen-readers-only-no-position"\x3e'+this.prompt+"\x3c/caption\x3e");h.place(a,this.dateTypeSelect.domNode,"first");this.own(e.before(this.dateTypeSelect,"change",c.hitch(this,function(){this._onDateTypeSelectChanged()})));b.setAttr(this.dateTextBox.textbox,"tabindex","-1");this.own(f(this.dateTextBox.textbox,"focus",c.hitch(this,function(){this.dateTypeSelect.domNode.focus()})));this.virtualDates&&0<this.virtualDates.length||(this.virtualDates=[d.VIRTUAL_DATE_TODAY,
d.VIRTUAL_DATE_YESTERDAY,d.VIRTUAL_DATE_TOMORROW]);this.dateTypeSelect.addOption({value:"",label:"\x26nbsp;"});this.dateTypeSelect.addOption({value:"custom",label:this.nls.custom});k.map(this.virtualDates,c.hitch(this,function(a){var b={value:a,label:a};switch(a){case d.VIRTUAL_DATE_TODAY:b.label=this.nls.today;break;case d.VIRTUAL_DATE_YESTERDAY:b.label=this.nls.yesterday;break;case d.VIRTUAL_DATE_TOMORROW:b.label=this.nls.tomorrow}this.dateTypeSelect.addOption(b)}));this._showDateTypeSelect();this.own(f(b.byId("main-page"),
"click",c.hitch(this,function(){this.dateTextBox&&this.dateTextBox.closeDropDown()})));this.own(e.before(this.dateTypeSelect,"openDropDown",c.hitch(this,function(){"custom"===this.dateTypeSelect.getValue()&&this.dateTextBox.getValue()&&(this.dateTypeSelect.textDirNode.innerText=this._formatDate(this.dateTextBox.getValue()))})));this.own(e.after(this.dateTypeSelect,"closeDropDown",c.hitch(this,function(){"custom"===this.dateTypeSelect.getValue()&&this.dateTextBox.getValue()&&(this.dateTypeSelect.textDirNode.innerText=
this._formatDate(this.dateTextBox.getValue()));this.customId||b.setAttr(this.dateTypeSelect,"aria-label",this.dateTypeSelect.textDirNode.innerText);setTimeout(c.hitch(this,function(){this._dateTextBoxDisplayed&&this.dateTextBox&&this.dateTextBox.dropDown&&this.dateTextBox.dropDown.focus()}),200)})));this.own(e.after(this.dateTypeSelect.dropDown,"onItemClick",c.hitch(this,function(a){a&&"custom"===a.option.value?(this._showDateTextBox(),this._dateTextBoxDisplayed=!0):this._dateTextBoxDisplayed=!1}),
!0));this.popupInfo&&this.popupInfo.fieldInfos&&(this.fieldInfo=this.popupInfo.fieldInfos.filter(c.hitch(this,function(a){return a.fieldName===this._fieldInfo.name}))[0])},getDijits:function(){return[]},setValueObject:function(a){a.virtualDate&&"custom"!==a.virtualDate?(this.dateTypeSelect.set("value",a.virtualDate,!1),this.customId||b.setAttr(this.dateTypeSelect,"aria-label",a.virtualDate)):(this.dateTypeSelect.set("value","custom",!1),a.value&&(this.dateTextBox.set("value",new Date(a.value),!1),
this.dateTypeSelect.textDirNode.innerText=this._formatDate(new Date(a.value)),this.customId||b.setAttr(this.dateTypeSelect,"aria-label",this.dateTypeSelect.textDirNode.innerText)))},getValueObject:function(){return this.isValidValue()?this.tryGetValueObject():null},tryGetValueObject:function(){if(this.isInvalidValue())return null;var a={value:null,virtualDate:""},b=this.dateTypeSelect.get("value"),c=null;"custom"===b?(c=this.dateTextBox.get("value"),a.value=c?c.toDateString():null,a.virtualDate=""):
(c=d.getRealDateByVirtualDate(b),a.virtualDate=b,c?a.value=c.toDateString():a=null);return a},setRequired:function(a){this.dateTextBox.set("required",a)},getStatus:function(){return"custom"===this.dateTypeSelect.get("value")?this._getStatusForDijit(this.dateTextBox):""===this.dateTypeSelect.get("value")?0:1},_getStatusForDijit:function(a){return a.validate()?a.get("DisplayedValue")?1:0:-1},isInvalidValue:function(){return 0>this.getStatus()},isEmptyValue:function(){return 0===this.getStatus()},isValidValue:function(){return 0<
this.getStatus()},_showDateTypeSelect:function(){this.dateTextBox.closeDropDown()},_showDateTextBox:function(){this.dateTextBox.openDropDown();this.dateTextBoxClickBinded=!0},_onDateTypeSelectChanged:function(){"custom"===this.dateTypeSelect.get("value")&&this._showDateTextBox();this.emit("change")},_onDateTextBoxChanged:function(a){this.dateTypeSelect.textDirNode.innerText=this._formatDate(a);this.emit("change")},_formatDate:function(a){return this.fieldInfo?r.localizeDateByFieldInfo(a,this.fieldInfo):
a.toDateString()}})});