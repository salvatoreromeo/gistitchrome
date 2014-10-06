


var selection = window.getSelection();	 
var range = selection.getRangeAt(0);
var allWithinRangeParent = range.commonAncestorContainer.getElementsByTagName("*");

var allSelected = [];
for (var i=0, el; el = allWithinRangeParent[i]; i++) {
  if (selection.containsNode(el, true) ) {
	if(el.id)allSelected.push(el.id.replace( /^\D+/g, ''));
  }
}

var min, max;

if(allSelected){
	if(allSelected.length > 0)
		min = allSelected[0] - 1;
	if(allSelected.length > 1)
		max = allSelected[allSelected.length - 1];
}

var minmax = {min:min,max:max}

chrome.runtime.sendMessage(minmax, function(response) {
  console.log(response);
});
