// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/TimeSlider/SpeedMenu.html":'\x3cdiv class\x3d"speed-container jimu-float-trailing" data-dojo-attach-point\x3d"speedContainerNode"\x3e\r\n\t\x3cdiv class\x3d"speed-label" data-dojo-attach-point\x3d"speedLabelNode" data-dojo-attach-event\x3d"click:_onSpeedLabelClick"\x3e1x\x3c/div\x3e\r\n\t\x3cdiv class\x3d"speed-menu hide" data-dojo-attach-point\x3d"speedMenu" data-dojo-attach-event\x3d"click:_onSelectSpeedItem"\x3e\r\n\t\t\x3c!--\x3cdiv class\x3d"speed-menu-item item-label jimu-ellipsis" title\x3d"${nls.speedLabel}"\x3e${nls.speedLabel}\x3c/div\x3e--\x3e\r\n\t\t\x3cdiv class\x3d"speed-menu-item" data-speed\x3d"0.25" data-dojo-attach-point\x3d"item025"\x3e\r\n\t\t\t\x3cspan data-dojo-attach-point\x3d"x025"\x3e\x3c/span\x3e\r\n\t\t\t\x3cdiv class\x3d"jimu-float-trailing check hide"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"speed-menu-item" data-speed\x3d"0.5" data-dojo-attach-point\x3d"item05"\x3e\r\n\t\t\t\x3cspan data-dojo-attach-point\x3d"x05"\x3e\x3c/span\x3e\r\n\t\t\t\x3cdiv class\x3d"jimu-float-trailing check hide"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"speed-menu-item" data-speed\x3d"1" data-dojo-attach-point\x3d"item1"\x3e\r\n\t\t\t\x3cspan data-dojo-attach-point\x3d"x1"\x3e\x3c/span\x3e\r\n\t\t\t\x3cdiv class\x3d"jimu-float-trailing check hide"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"speed-menu-item" data-speed\x3d"1.5" data-dojo-attach-point\x3d"item15"\x3e\r\n\t\t\t\x3cspan data-dojo-attach-point\x3d"x15"\x3e\x3c/span\x3e\r\n\t\t\t\x3cdiv class\x3d"jimu-float-trailing check hide"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"speed-menu-item" data-speed\x3d"2" data-dojo-attach-point\x3d"item2"\x3e\r\n\t\t\t\x3cspan data-dojo-attach-point\x3d"x2"\x3e\x3c/span\x3e\r\n\t\t\t\x3cdiv class\x3d"jimu-float-trailing check hide"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./SpeedMenu.html dojo/on dojo/query jimu/utils".split(" "),function(h,e,c,k,l,m,n,p,q,f,g,r){return h([m,n,p,l],{baseClass:"speed-container",templateString:q,nls:null,menuBox:{w:75,h:120},_speedList:{x025:.25,x05:.5,x1:1,x15:1.5,x2:2},postCreate:function(){this.inherited(arguments);this._initSpeedMenu()},startup:function(){this.inherited(arguments)},
destroy:function(){this.inherited(arguments)},_initSpeedMenu:function(){Object.keys(this._speedList).forEach(e.hitch(this,function(a){this[a].innerText=r.localizeNumber(this._speedList[a])+"x"}));this.own(f(this.domNode,"click",e.hitch(this,this._closeSpeedMenu)));this._checks=g(".check",this.speedMenu);this.setSpeed("1")},_onSelectSpeedItem:function(a){k.map(this._checks,e.hitch(this,function(a){c.addClass(a,"hide")}));var b,d;a.target&&((b=c.getAttr(a.target,"data-speed"))?d=a.target:(d=a.target.parentNode,
b=c.getAttr(d,"data-speed")));d&&((a=g(".check",d)[0])&&c.removeClass(a,"hide"),this.speedLabelNode.innerHTML=d.innerText,this._speed=b,this.emit("selected",b))},getSpeed:function(){return this._speed},setSpeed:function(a){var b=null;switch(a){case "0.25":b=this.item025;break;case "0.5":b=this.item05;break;case "1":b=this.item1;break;case "1.5":b=this.item15;break;case "2":b=this.item2;break;default:b=null}b&&f.emit(b,"click",{cancelable:!1,bubbles:!0})},_setMenuPosition:function(){var a=c.position(this.speedLabelNode);
0>a.y-this.menuBox.h-2&&c.setStyle(this.speedMenu,{top:"27px",bottom:"auto"});var b=c.getMarginBox(this.domNode);window.isRTL?0>a.x-this.menuBox.w&&c.setStyle(this.speedMenu,{left:0}):a.x+this.menuBox.w>b.w&&c.setStyle(this.speedMenu,{right:0})},_onSpeedLabelClick:function(a){a.stopPropagation();a.preventDefault();c.hasClass(this.speedMenu,"hide")?(this._setMenuPosition(),this._showSpeedMenu()):this._closeSpeedMenu()},_showSpeedMenu:function(){c.removeClass(this.speedMenu,"hide");this.emit("open")},
_closeSpeedMenu:function(){c.addClass(this.speedMenu,"hide");this.emit("close")}})});