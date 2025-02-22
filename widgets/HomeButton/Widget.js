// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

//>>built
require({
    cache: {
        "esri/dijit/HomeButton": function () {
            define("dojo/Evented dojo/_base/declare dojo/_base/lang dojo/has ../kernel dijit/_WidgetBase dijit/a11yclick dijit/_TemplatedMixin dojo/on dojo/Deferred dojo/text!./templates/HomeButton.html dojo/i18n!../nls/jsapi dojo/dom-class dojo/dom-style".split(" "), function (d, g, c, q, l, r, h, t, m, n, k, a, p, u) {
                d = g("esri.dijit.HomeButton", [r, t, d], {
                    templateString: k, options: { theme: "HomeButton", map: null, extent: null, fit: !1, visible: !0 }, constructor: function (f, b) {
                        f = c.mixin({},
                            this.options, f); this.domNode = b; this._i18n = a; this.set("map", f.map); this.set("theme", f.theme); this.set("visible", f.visible); this.set("extent", f.extent); this.set("fit", f.fit); this.watch("theme", this._updateThemeWatch); this.watch("visible", this._visible); this._css = { container: "homeContainer", home: "home", loading: "loading" }
                    }, postCreate: function () { this.inherited(arguments); this.own(m(this._homeNode, h, c.hitch(this, this.home))) }, startup: function () {
                        this.inherited(arguments); this.map || (this.destroy(), console.log("HomeButton::map required"));
                        if (this.map.loaded) this._init(); else m.once(this.map, "load", c.hitch(this, function () { this._init() }))
                    }, destroy: function () { this.inherited(arguments) }, home: function () {
                        var a = new n, b = this.get("extent"); this._showLoading(); var e = { extent: b }; b ? this.map.extent !== b ? this.map.setExtent(b, this.get("fit")).then(c.hitch(this, function () { this._hideLoading(); this.emit("home", e); a.resolve(e) }), c.hitch(this, function (b) { b || (b = Error("HomeButton::Error setting map extent")); e.error = b; this.emit("home", e); a.reject(b) })) : (this._hideLoading(),
                            this.emit("home", e), a.resolve(e)) : (this._hideLoading(), b = Error("HomeButton::home extent is undefined"), e.error = b, this.emit("home", e), a.reject(b)); return a.promise
                    }, show: function () { this.set("visible", !0) }, hide: function () { this.set("visible", !1) }, _init: function () { this._visible(); this.get("extent") || this.set("extent", this.map.extent); this.set("loaded", !0); this.emit("load", {}) }, _showLoading: function () { p.add(this._homeNode, this._css.loading) }, _hideLoading: function () { p.remove(this._homeNode, this._css.loading) },
                    _updateThemeWatch: function (a, b, e) { p.remove(this.domNode, b); p.add(this.domNode, e) }, _visible: function () { this.get("visible") ? u.set(this.domNode, "display", "block") : u.set(this.domNode, "display", "none") }
                }); q("extend-esri") && c.setObject("dijit.HomeButton", d, l); return d
            })
        }, "widgets/HomeButton/_build-generate_module": function () { define(["dojo/text!./css/style.css", "dojo/i18n!./nls/strings"], function () { }) }, "url:esri/dijit/templates/HomeButton.html": '\x3cdiv class\x3d"${theme}" role\x3d"presentation"\x3e\r\n    \x3cdiv class\x3d"${_css.container}"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_homeNode" title\x3d"${_i18n.widgets.homeButton.home.title}" role\x3d"button" class\x3d"${_css.home}" tabindex\x3d"0"\x3e\x3cspan\x3e${_i18n.widgets.homeButton.home.button}\x3c/span\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e',
        "url:widgets/HomeButton/css/style.css": ".jimu-widget-homebutton {background-color: #555; border-radius: 5px; border: 1px solid #999;}.jimu-widget-homebutton .HomeButton .home {background-color: #555;}.jimu-widget-homebutton.inHome {background-color: #000;}.jimu-widget-homebutton .HomeButton .home:hover {background-color: #333;}.jimu-widget-homebutton.inHome .HomeButton .home {background-color: #000;}", "*now": function (d) { d(['dojo/i18n!*preload*widgets/HomeButton/nls/Widget*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]']) },
        "*noref": 1
    }
});
define("dojo/_base/declare dojo/_base/lang jimu/BaseWidget esri/dijit/HomeButton esri/geometry/Extent esri/SpatialReference dojo/_base/html dojo/dom-construct dojo/topic dojo/keys dojo/on".split(" "), function (d, g, c, q, l, r, h, t, m, n, k) {
    return d([c], {
        name: "HomeButton", baseClass: "jimu-widget-homebutton", moveTopOnActive: !1, postCreate: function () { h.setAttr(this.domNode, "aria-label", window.apiNls.widgets.homeButton.home.title); this.own(m.subscribe("appConfigChanged", g.hitch(this, this.onAppConfigChanged))) }, startup: function () {
            var a =
                null; this.inherited(arguments); this.own(k(this.map, "extent-change", g.hitch(this, "onExtentChange"))); a = (a = this.appConfig && this.appConfig.map && this.appConfig.map.mapOptions && this.appConfig.map.mapOptions.extent) ? new l(a.xmin, a.ymin, a.xmax, a.ymax, new r(a.spatialReference)) : this.map._initialExtent || this.map.extent; this.createHomeDijit({ map: this.map, extent: a })
        }, createHomeDijit: function (a) {
        this.homeDijit = new q(a, t.create("div")); this.own(k(this.homeDijit, "home", g.hitch(this, "onHome"))); this.own(k(this.domNode,
            "keydown", g.hitch(this, this.onHomeKeyDown))); h.place(this.homeDijit.domNode, this.domNode); this.homeDijit.startup()
        }, onAppConfigChanged: function (a, d, c) { "mapOptionsChange" === d && c && a && c.extent && (a = new l(c.extent), this.homeDijit.set("extent", a)) }, onExtentChange: function () { h.removeClass(this.domNode, "inHome") }, onHomeKeyDown: function (a) { a.keyCode !== n.ENTER && a.keyCode !== n.SPACE || this.homeDijit.home() }, onHome: function (a) { a && a.error || h.addClass(this.domNode, "inHome") }
    })
});