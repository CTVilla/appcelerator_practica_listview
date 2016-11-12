function doClick(e) {
    alert($.label.text);
}

var tidevfeed=$.localLibrary;

tidevfeed.fetch({
	requestMethod: 'GET',
	localOnly:false,		
	success:function(col){
		// working			
		console.log("Resultado: " + JSON.stringify(col));
		
	},
	error:function(err){
		// something is wrong.. 
		console.log("something is wrong");
	}
});

$.index.open();
