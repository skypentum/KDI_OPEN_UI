$(document).ready(function(){
	console.log("init javascript");
	loadText();
});

function loadText() {
	$("#mainFrame").attr({
		"src":"form/text/text.html",
		"scrolling":"no"
	});
}