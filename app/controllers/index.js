var lsv_tidev=$.localLibrary;
var view_detail;
function OnItemSelected(e) {
	//Utilizamos la funcion at por que lsv_tidev es del tipo Titanium.UI.Collection
	itemSelected = lsv_tidev.at(e.itemIndex);
	print(itemSelected);
	if(view_detail == null){
		view_detail = Alloy.createController('detail').getView();
	}
	view_detail.open();
	
}
lsv_tidev.fetch({
	requestMethod: 'GET',
	localOnly:false,		
	success:function(col){
		print("Success");
	},
	error:function(err){
		print("something is wrong");
		jprint(err);
	}
});
$.index.open();