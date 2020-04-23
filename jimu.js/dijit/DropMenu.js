// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dijit/_WidgetBase dojo/_base/lang dojo/_base/array dojo/_base/html dojo/query dojo/on dijit/focus dojo/keys dojo/Evented ../utils".split(" "),function(m,n,f,p,c,l,k,q,r,t,u){return m([n,t],{baseClass:"jimu-dropmenu",declaredClass:"jimu.dijit.DropMenu",focusNodeWhenLeave:null,constructor:function(){this.state="closed"},postCreate:function(){this.btnNode=c.create("div",{"class":"popup-menu-button"},this.domNode);this.own(k(this.btnNode,"click",f.hitch(this,this._onBtnClick)));
this.box||(this.box=this.domNode.parentNode);this.own(k(this.box,"click",f.hitch(this,function(){this.dropMenuNode&&this.closeDropMenu()})))},_onBtnClick:function(a){a.stopPropagation();this.dropMenuNode||this._createDropMenuNode();"closed"===this.state?this.openDropMenu():this.closeDropMenu()},_createDropMenuNode:function(){this.dropMenuNode=c.create("div",{"class":"drop-menu",style:{display:"none"}},this.domNode);this.items||(this.items=[]);p.forEach(this.items,function(a){var d;a.key&&"separator"===
a.key?c.create("hr",{"class":"menu-item-identification menu-item-line",itemId:a.key},this.dropMenuNode):a.key&&(d=c.create("div",{"class":"menu-item-identification menu-item",tabindex:"0",itemId:a.key,role:"button",innerHTML:a.label},this.dropMenuNode),this.own(k(d,"click",f.hitch(this,function(b){this.selectItem(a,b)}))),this.own(k(d,"keydown",f.hitch(this,function(b){if(b.keyCode===r.ENTER){b.stopPropagation();b.preventDefault();var c=l("a",d)[0];c?(b=document.createEvent("MouseEvents"),b.initEvent("click",
!0,!0),c.dispatchEvent(b)):this.selectItem(a,b)}}))))},this);this.focusNodeWhenLeave||(this.focusNodeWhenLeave=this.domNode.parentNode)},_getDropMenuPosition:function(){var a=c.getContentBox(this.box),d=c.getMarginBox(this.domNode),b=c.getMarginBox(this.btnNode),g=c.getMarginBox(this.dropMenuNode),e={},h,f;e.l=d.l;e.t=d.t+b.h;e.t+g.h>a.h&&(f=d.t,h=a.h-d.t-b.h,h=Math.max(f,h),h===f&&(e.t=0-g.h));e.l+g.w>a.w&&(g=d.l,a=a.w-d.l-b.w,h=Math.max(g,a),h===g&&(e.l="",e.r=0));e.left=e.l;e.top=e.t;e.right=e.r;
return e},getMenuItemNodeByItemKey:function(a){var d;l(".menu-item",this.dropMenuNode).some(function(b){return c.getAttr(b,"itemId")===a?(d=b,!0):!1},this);return d},selectItem:function(a){this.closeDropMenu();this.emit("onMenuClick",a)},openDropMenu:function(){this.state="opened";c.setStyle(this.dropMenuNode,"display","");c.setStyle(this.dropMenuNode,u.getPositionStyle(this._getDropMenuPosition()));this.emit("onOpenMenu")},closeDropMenu:function(){"opened"===this.state&&q.focus(this.focusNodeWhenLeave);
this.state="closed";c.setStyle(this.dropMenuNode,"display","none");this.emit("onCloseMenu")}})});