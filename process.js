$(document).ready(function() {
	$("#formSubmitButton").click(function() {
		$("#myform").hide();
		$("#loading").show();
		setTimeout(function(){
			$("#results").show();
			$("#loading").hide();
		},500);


		var firstName = $("#fn").val();
		var lastName = $("#ln").val();
		var address = $("#address").val();
		var address2 = $("#address2").val();
		var state = $("#state option:selected").text();
		var city = $("#city").val();
		var zipCode = $("#zip").val();

		$("#resultinfo").html("Results For: " + firstName + " " + lastName + "<br>Customer Lookup #: " + customerLookupNumber())
		$("#"+resultBox()).show();
		
	})
});



//Refresh page for 'Home' button
function refreshPage() {
	window.location.reload();
}

function customerLookupNumber () {
	number = Math.floor(Math.random() * 92881);
	number = number + 7000000
	return number
}

function resultBox () {
	randomNum = Math.floor(Math.random()*3);
	colors = ["red","yellow","green"]
	color = colors[randomNum]
	return color
}



