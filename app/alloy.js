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
/**
 * Variables for the connection with the web services.
 */
var IP_SERVER = "192.168.0.19";
var PORT = ":3000";
var END_POINT = IP_SERVER + PORT;
var WS_GET_FEED = END_POINT + "/feed";
/**
 * Request Methods.
 * This variables are used to define the type in request method
 */
var GET = 'GET';
var POST = 'POST';
var PUT = 'PUT';
var DELETE = 'DELETE';

/**
 * Function to print in console
 * @param {Object} o Object to print
 */
var print = function(o) {
	console.log(o);
};
/**
 * Anonimous function to Stringtify
 */
var tojson = JSON.stringify;

/**
 * Anonimous function to Fetch the data
 * in a listview
 * @param {Object} listview Listview element
 * @param {Object} method Request method(GET, POST, PUT, DELETE)
 * @param {Object} isLocalOnly Boolean to define if the data could be saved locally.
 * @param {Object} successCallback Function to execute in success case.
 * @param {Object} errorCallback Function to execute in error case.
 */
var fetchListview = function (listview, method, isLocalOnly, successCallback, errorCallback){
	listview.fetch({
		requestMethod: method,
		localOnly:isLocalOnly,		
		success:successCallback,
		error:errorCallback
	});
};