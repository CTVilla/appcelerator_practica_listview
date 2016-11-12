function doClick(e) {
    alert($.label.text);
}
var tidevfeed=$.localLibrary;
tidevfeed.fetch({
	requestMethod: 'GET',
	localOnly:false,		
	success:function(col){
		// working
		print("Success");
		print_json(col);
	},
	error:function(err){
		// something is wrong.. 
		print("something is wrong");
	}
});
$.index.open();