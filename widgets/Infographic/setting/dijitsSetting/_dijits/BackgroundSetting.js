// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/Infographic/setting/dijitsSetting/_dijits/BackgroundSetting.html":'\x3cdiv class\x3d"style-selector"\x3e\r\n  \x3cdiv class\x3d"setting-items align clearFix"\x3e\r\n    \x3cdiv class\x3d"label-position jimu-float-leading" title\x3d"${nls.alignment}"\x3e${nls.alignment}\x3c/div\x3e\r\n    \x3cdiv class\x3d"setting-wapper jimu-float-trailing clearFix"\x3e\r\n      \x3cdiv class\x3d"align-group jimu-float-leading"\x3e\r\n        \x3cdiv class\x3d"align-btn jimu-float-leading left" data-dojo-attach-point\x3d"alignLeft"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"align-btn jimu-float-leading center" data-dojo-attach-point\x3d"alignCenter"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"align-btn jimu-float-leading right" data-dojo-attach-point\x3d"alignRight"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"align-group jimu-float-leading"\x3e\r\n        \x3cdiv class\x3d"align-btn jimu-float-leading top" data-dojo-attach-point\x3d"alignTop"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"align-btn jimu-float-leading middle" data-dojo-attach-point\x3d"alignMiddle"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"align-btn jimu-float-leading bottom" data-dojo-attach-point\x3d"alignBottom"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"setting-items background clearFix"\x3e\r\n    \x3cdiv class\x3d"label-position jimu-float-leading" title\x3d"${nls.backgroundColor}"\x3e${nls.backgroundColor}\x3c/div\x3e\r\n    \x3cdiv class\x3d"setting-wapper jimu-float-trailing"\x3e\r\n      \x3cdiv class\x3d"background-btn" data-dojo-attach-point\x3d"backgroundBtn"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"setting-items link clearFix"\x3e\r\n    \x3cdiv class\x3d"label-position jimu-float-leading" title\x3d"${nls.link}"\x3e${nls.link}\x3c/div\x3e\r\n    \x3cdiv class\x3d"setting-wapper jimu-float-trailing"\x3e\r\n      \x3cinput type\x3d"text" data-dojo-type\x3d"jimu/dijit/URLInput" data-dojo-props\x3d"required:false,rest:false"\r\n        placeHolder\x3d"" data-dojo-attach-point\x3d"linkText"/\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/on dojo/_base/html dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./BackgroundSetting.html jimu/dijit/ColorPickerPopup jimu/dijit/Message dijit/form/ComboBox jimu/dijit/CheckBox jimu/dijit/ImageChooser jimu/dijit/URLInput".split(" "),function(e,b,d,c,f,g,h,k,l,m,n){return e([g,h,k,f],{templateString:l,nls:null,_FONTS:null,_DEFAULT_CONFIG:null,postCreate:function(){this.inherited(arguments);this._FONTS="Arial;Comic Sans MS;Courier New;Garamond;Tahoma;Times New Roman;Verdana".split(";");
this._DEFAULT_CONFIG={backgroundColor:"#FFF",alignment:{horizontal:"center",vertical:"middle"},link:""};this.config=b.mixin(this._DEFAULT_CONFIG,this.config);this.backgroundColorPicker=new m({appearance:{showTransparent:!1,showColorPalette:!0,showCoustom:!0,showCoustomRecord:!0},recordUID:this.recordUID});this.backgroundColorPicker.placeAt(this.backgroundBtn);this.backgroundColorPicker.startup();this.own(d(this.backgroundColorPicker,"change",b.hitch(this,function(a){if(this.config.backgroundColor!==
a)this.onSettingChange({backgroundColor:a.toHex()})})));this.own(d(this.alignLeft,"click",b.hitch(this,function(){this.alignmentBtnClickd("left");this.onSettingChange({alignment:{horizontal:"left",vertical:this.config.alignment.vertical}})})));this.own(d(this.alignCenter,"click",b.hitch(this,function(){this.alignmentBtnClickd("center");this.onSettingChange({alignment:{horizontal:"center",vertical:this.config.alignment.vertical}})})));this.own(d(this.alignRight,"click",b.hitch(this,function(){this.alignmentBtnClickd("right");
this.onSettingChange({alignment:{horizontal:"right",vertical:this.config.alignment.vertical}})})));this.own(d(this.alignTop,"click",b.hitch(this,function(){this.alignmentBtnClickd(null,"top");this.onSettingChange({alignment:{horizontal:this.config.alignment.horizontal,vertical:"top"}})})));this.own(d(this.alignMiddle,"click",b.hitch(this,function(){this.alignmentBtnClickd(null,"middle");this.onSettingChange({alignment:{horizontal:this.config.alignment.horizontal,vertical:"middle"}})})));this.own(d(this.alignBottom,
"click",b.hitch(this,function(){this.alignmentBtnClickd(null,"bottom");this.onSettingChange({alignment:{horizontal:this.config.alignment.horizontal,vertical:"bottom"}})})));this.own(d(this.linkText,"change",b.hitch(this,function(){if(this.config.link!==this.linkText.getValue()&&""!==this.linkText.getValue()&&!1!==this.linkText.isValid())this.onSettingChange({link:this._formatLinkValue(this.linkText.getValue())})})));this.own(d(this.linkText,"blur",b.hitch(this,function(){if(this.config.link!==this.linkText.getValue()&&
""!==this.linkText.getValue()&&!1!==this.linkText.isValid()){var a=this._formatLinkValue(this.linkText.getValue());this.onSettingChange({link:a})}})))},startup:function(){this.inherited(arguments);this.setConfig(this.config);this.refresh()},onSettingChange:function(a){this.config=b.mixin(this.config,a);this.onChange(this.config)},onChange:function(a){this.emit("change",a)},refresh:function(){this.onSettingChange({})},isValid:function(){if(!1===this.linkText.isValid()){var a=new n({message:window.jimuNls.urlInput.invalidUrl,
buttons:[{label:this.nls.ok,onClick:b.hitch(this,function(){a.content=null;a.close()})}]});return!1}return!0},getConfig:function(){return this.isValid()?this.config:!1},setConfig:function(a){if("undefined"!==typeof a){if("undefined"===typeof a.backgroundColor||""===a.backgroundColor)a.backgroundColor="#FFF";this.config.backgroundColor=a.backgroundColor;c.setStyle(this.backgroundColorPicker.domNode,"backgroundColor",this.config.backgroundColor);this.backgroundColorPicker.picker.refreshRecords();this.backgroundColorPicker.picker.setColor(this.config.backgroundColor,
!1,!0);"undefined"!==typeof a.alignment&&(this.config.alignment=a.alignment,this.alignmentBtnClickd(this.config.alignment.horizontal,this.config.alignment.vertical));"undefined"!==typeof a.link&&(this.config.link=a.link,this.linkText.setValue(this.config.link))}},alignmentBtnClickd:function(a,b){if(a)switch(c.removeClass(this.alignLeft,"selected"),c.removeClass(this.alignCenter,"selected"),c.removeClass(this.alignRight,"selected"),a){case "left":c.addClass(this.alignLeft,"selected");break;case "center":c.addClass(this.alignCenter,
"selected");break;case "right":c.addClass(this.alignRight,"selected")}if(b)switch(c.removeClass(this.alignTop,"selected"),c.removeClass(this.alignMiddle,"selected"),c.removeClass(this.alignBottom,"selected"),b){case "top":c.addClass(this.alignTop,"selected");break;case "middle":c.addClass(this.alignMiddle,"selected");break;case "bottom":c.addClass(this.alignBottom,"selected")}},_formatLinkValue:function(a){var b="";return b=/^http(s?):\/\//.test(a)?a:/^\/\//.test(a)?"http:"+a:"http://"+a}})});