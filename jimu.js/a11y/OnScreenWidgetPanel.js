// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/lang","dojo/on","dojo/_base/html","dojo/keys"],function(d,e,c,b){return{a11y_init:function(){c.setAttr(this.domNode,"role","application");this.own(e(this.domNode,"keydown",d.hitch(this,function(a){c.hasClass(a.target,"close-btn")||a.keyCode!==b.ESCAPE||(a.stopPropagation(),this.closeNode.focus())})))},_onMaxBtnKeyDown:function(a){a.keyCode!==b.ENTER&&a.keyCode!==b.SPACE||this._onMaxBtnClicked(a)},_onFoldableBtnKeyDown:function(a){a.keyCode===b.ENTER||a.keyCode===b.SPACE?this._onFoldableBtnClicked(a):
a.keyCode===b.TAB&&a.shiftKey&&a.preventDefault()},_onCloseBtnKey:function(a){a.keyCode===b.ENTER||a.keyCode===b.SPACE?this._onCloseBtnClicked(a):a.keyCode===b.TAB&&a.shiftKey&&(window.appInfo.isRunInMobile||a.preventDefault())}}});