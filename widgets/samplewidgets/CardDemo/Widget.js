// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

//>>built
define(["dojo/_base/declare", "jimu/BaseWidget", "dojo/dom-construct", "jimu/dijit/GridLayout"], function (c, d, a, e) {
    return c([d], {
        baseClass: "jimu-widget-card", _hasContent: null, postCreate: function () { this.inherited(arguments); this._initLayout() }, _initLayout: function () {
            var b = [{ id: 1, content: a.create("div", { innerHTML: "component 1", "class": "grid-label" }) }, { id: 2, content: a.create("div", { innerHTML: "component 2", "class": "grid-label" }) }, { id: 3, content: a.create("div", { innerHTML: "component 3", "class": "grid-label" }) }];
            this.layout = new e({
                components: b, layoutDefinition: [{ type: "column", isClosable: !0, content: [{ type: "stack", isClosable: !0, reorderEnabled: !0, content: [{ type: "component", isClosable: !0, componentName: "jimu grid", componentState: { id: 1 } }] }, { type: "stack", isClosable: !0, reorderEnabled: !0, content: [{ type: "component", isClosable: !0, componentName: "jimu grid", componentState: { id: 2 } }] }, { type: "stack", isClosable: !0, reorderEnabled: !0, content: [{ type: "component", isClosable: !0, componentName: "jimu grid", componentState: { id: 3 } }] }] }],
                container: this.domNode, editable: !1
            })
        }, resize: function () { this.layout.resize(); var b = this.layout.getComponentSize(1), a = this.layout.getSize(); console.log("component 1 size: w\x3d" + b.w + ", h\x3d" + b.h); console.log("layout size:: w\x3d" + a.w + ", h\x3d" + a.h) }
    })
});