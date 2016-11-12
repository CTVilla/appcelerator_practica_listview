function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId17(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId17.opts || {};
        var models = __alloyId16.models;
        var len = models.length;
        var __alloyId12 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId13 = models[i];
            __alloyId13.__transform = _.isFunction(__alloyId13.transform) ? __alloyId13.transform() : __alloyId13.toJSON();
            var __alloyId15 = {
                titlelbl: {
                    text: __alloyId13.__transform.title
                },
                descriptionlbl: {
                    text: __alloyId13.__transform.description
                }
            };
            __alloyId12.push(__alloyId15);
        }
        opts.animation ? $.__views.__alloyId11.setItems(__alloyId12, opts.animation) : $.__views.__alloyId11.setItems(__alloyId12);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.localLibrary = Alloy.createCollection("feed");
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    var __alloyId0 = {};
    var __alloyId3 = [];
    var __alloyId5 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId6 = [];
            var __alloyId8 = {
                type: "Ti.UI.Label",
                bindId: "titlelbl",
                properties: {
                    width: Titanium.UI.FILL,
                    height: "35dp",
                    color: "#000",
                    font: "14sp",
                    fontWeight: "bold",
                    bindId: "titlelbl"
                }
            };
            __alloyId6.push(__alloyId8);
            var __alloyId10 = {
                type: "Ti.UI.Label",
                bindId: "descriptionlbl",
                properties: {
                    width: Titanium.UI.FILL,
                    height: "35dp",
                    color: "#CCC",
                    font: "12sp",
                    bindId: "descriptionlbl"
                }
            };
            __alloyId6.push(__alloyId10);
            return __alloyId6;
        }(),
        properties: {
            top: "5dp",
            left: "5dp",
            height: Ti.UI.SIZE,
            width: Titanium.UI.FILL,
            layout: "vertical"
        }
    };
    __alloyId3.push(__alloyId5);
    var __alloyId2 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId3
    };
    __alloyId0["template"] = __alloyId2;
    $.__views.__alloyId11 = Ti.UI.createListSection({
        id: "__alloyId11"
    });
    var __alloyId16 = Alloy.Collections["$.localLibrary"] || $.localLibrary;
    __alloyId16.on("fetch destroy change add remove reset", __alloyId17);
    var __alloyId18 = [];
    __alloyId18.push($.__views.__alloyId11);
    $.__views.list = Ti.UI.createListView({
        top: "0dp",
        left: "0dp",
        height: Ti.UI.FILL,
        width: Titanium.UI.FILL,
        sections: __alloyId18,
        templates: __alloyId0,
        id: "list",
        defaultItemTemplate: "template"
    });
    $.__views.index.add($.__views.list);
    exports.destroy = function() {
        __alloyId16 && __alloyId16.off("fetch destroy change add remove reset", __alloyId17);
    };
    _.extend($, $.__views);
    var tidevfeed = $.localLibrary;
    tidevfeed.fetch({
        requestMethod: "GET",
        localOnly: false,
        success: function(col) {
            print("Success");
            print_json(col);
        },
        error: function() {
            print("something is wrong");
        }
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;