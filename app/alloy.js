// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

var print = function(o) {
	console.log(o);
};
var tojson = JSON.stringify;

var IP_SERVER = "192.168.0.20";
var PORT = ":3000";
var END_POINT = IP_SERVER + PORT;
var WS_GET_FEED = END_POINT + "/feed";