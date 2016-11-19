/**
 * We define the listview.
 */
var lsv_tidev=$.localLibrary;

/**
 * Event OnItemSelected
 * This function is used to open another window
 * sending the item selected.
 * @param {Object} e Event variable
 */
function OnItemSelected(e) {
	itemSelected = lsv_tidev.at(e.itemIndex);
	view_detail = Alloy.createController('detail', itemSelected).getView();
	$.index.openWindow(view_detail);
}
/**
 * Calling the funcion to fill the listview.
 */
fetchListview(lsv_tidev, GET, false, OnSuccessCallback, OnErrorCallback);
/**
 * Function to recieve the success response
 * @param {Object} response
 */
function OnSuccessCallback(response) {
	print("Success");
}
/**
 * Function to catch the error.
 * @param {Object} response
 */
function OnErrorCallback(response) {
	print("something is wrong");
	print(err);
}
/**
 * Open the index view.
 */
$.index.open();