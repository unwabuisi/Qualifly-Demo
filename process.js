$(document).ready(function() {
	$("#formSubmitButton").click(function() {
		$("#myform").hide();
		$("#loading").show();
		setTimeout(function(){
			$("#results").show();
			$("#loading").hide();
		},500);

	})
});



//Refresh page for 'Home' button
function refreshPage() {
	window.location.reload();
}



function alerter() {
	// alert('fak')
	
	console.log('f')
}


