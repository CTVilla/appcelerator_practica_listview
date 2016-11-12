var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var print = console.log;

var jstr = JSON.stringify;

var print_json = function(json) {
    print(jstr(json));
};

var IP_SERVER = "192.168.8.149";

var PORT = ":3000";

var END_POINT = IP_SERVER + PORT;

var WS_GET_FEED = END_POINT + "/feed";

Alloy.createController("index");