// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/lang dojo/on dojo/_base/html dojo/keys jimu/utils dijit/a11yclick".split(" "),function(b,c,h,d,e,f){var g={a11y_init:function(a){e.initFirstFocusNode(this.domNode,this.locateButton);a&&a.isHidePopmenu?e.initLastFocusNode(this.domNode,this.locateButton):e.initLastFocusNode(this.domNode,this.foldableNode)},a11y_initEvents:function(){this.own(c(this.locateButton,f,b.hitch(this,this.onLocateButtonClick)));this.own(c(this.foldContainer,f,b.hitch(this,this.onFoldContainerClick)));this.own(c(this.foldContainer,
"keydown",b.hitch(this,function(a){if(a.keyCode===d.UP_ARROW||a.keyCode===d.DOWN_ARROW)this.onFoldContainerClick()})))},a11y_setCoordinateInfo:function(a){var b=this.coordinateInfo,c=this.domNode;b&&(b.innerHTML=a);c&&h.setAttr(c,"aria-label",a)},_isKeyEvent:function(a){return a&&a._origType?!0:!1},a11y_initPopMenuEvents:function(){this.own(c(this.popMenu.domNode,"keydown",b.hitch(this,function(a){a.keyCode===d.ESCAPE&&(a.stopPropagation(),a.preventDefault(),this.onFoldContainerClick(),setTimeout(b.hitch(this,
function(){this.foldableNode.focus()}),0))})))},a11y_bindMenuItemEvent:function(a){this.own(c(a,"click",b.hitch(this,function(a){g._isKeyEvent(a)&&setTimeout(b.hitch(this,function(){this.a11y_focusToPopMenuBtn()}),0)})))},a11y_focusMenuItem:function(){this.selectedItem.domNode.focus()},a11y_focusToPopMenuBtn:function(){this.foldableNode.focus()}};return g});