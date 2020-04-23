// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/Share/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Share/setting/Setting.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"title"\x3e${nls.selectSocialNetwork}\x3c/div\x3e\r\n  \x3cdiv class\x3d"row"\x3e\r\n    \x3cdiv class\x3d"cb" data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"email" data-dojo-props\x3d\'label:"${nls.email}"\'\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"row"\x3e\r\n    \x3cdiv class\x3d"cb" data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"facebook" data-dojo-props\x3d\'label:"${nls.facebook}"\'\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"row"\x3e\r\n    \x3cdiv class\x3d"cb" data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"twitter" data-dojo-props\x3d\'label:"${nls.twitter}"\'\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"row"\x3e\r\n    \x3cdiv class\x3d"cb" data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"googlePlus" data-dojo-props\x3d\'label:"${nls.googlePlus}"\'\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"row use-org hide" data-dojo-attach-point\x3d"useOrgUrlContent"\x3e\r\n    \x3cdiv class\x3d"cb" data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"useOrganizationUrl" data-dojo-props\x3d\'label:"${nls.useOrganization}"\'\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/Share/setting/css/style.css":".jimu-widget-share-setting {font-size: 14px;}.jimu-widget-share-setting .title{font-size: 16px;}.jimu-widget-share-setting .row {height: 30px; line-height: 30px; vertical-align: middle;}.jimu-widget-share-setting .cb {vertical-align: middle; margin: 0 5px;}.jimu-widget-share-setting .cb .label {display: inline-block; vertical-align: middle;}.jimu-widget-share-setting .hide {display: none}.jimu-widget-share-setting .use-org {margin-top: 30px;}","*now":function(b){b(['dojo/i18n!*preload*widgets/Share/setting/nls/Setting*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},
"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html jimu/utils dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/portalUrlUtils jimu/dijit/CheckBox".split(" "),function(b,c,d,e,f,g,h){return b([g,f],{baseClass:"jimu-widget-share-setting",postMixInProperties:function(){this.inherited(arguments);this.nls.email=window.jimuNls.shareLink.shareEmail;this.nls.facebook=window.jimuNls.shareLink.shareFacebook;this.nls.googlePlus=window.jimuNls.shareLink.shareGooglePlus;this.nls.twitter=window.jimuNls.shareLink.shareTwitter},
startup:function(){this.inherited(arguments);this.config||(this.config={});h.isOnline(e.getAppHref())&&d.removeClass(this.useOrgUrlContent,"hide");this.setConfig(this.config)},setConfig:function(a){this.config=a;this.email.setValue(!0);this.facebook.setValue(!0);this.twitter.setValue(!0);this.googlePlus.setValue(!0);a.socialMedias&&(!1===a.socialMedias.email&&this.email.setValue(!1),!1===a.socialMedias.facebook&&this.facebook.setValue(!1),!1===a.socialMedias.twitter&&this.twitter.setValue(!1),!1===
a.socialMedias.googlePlus&&this.googlePlus.setValue(!1));this.useOrganizationUrl.setValue(!1);a.useOrgUrl&&this.useOrganizationUrl.setValue(!0)},getConfig:function(){var a={},a=c.mixin(a,this.config.socialMedias);this.email&&(a.email=this.email.getValue());this.facebook&&(a.facebook=this.facebook.getValue());this.twitter&&(a.twitter=this.twitter.getValue());this.googlePlus&&(a.googlePlus=this.googlePlus.getValue());this.config.socialMedias=a;this.config.useOrgUrl=this.useOrganizationUrl.getValue();
return this.config}})});