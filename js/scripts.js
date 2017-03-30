//back-end logic
function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

//front-end logic
$(document).ready(function() {

	$("form#add").submit(function(event){
		var number1 = parseInt($("#add1").val()); //Put nums in submit otherwise
		var number2 = parseInt($("#add2").val()); //grabs form elements before submit
		var result = add(number1,number2);
		$("#output").text(result);

		event.preventDefault();
	});

	$("form#subtract").submit(function(event){
		var number1 = parseInt($("#sub1").val()); //Put nums in submit otherwise
		var number2 = parseInt($("#sub2").val()); //grabs form elements before submit
		var result = subtract(number1,number2);
		$("#output").text(result);

		event.preventDefault();
	});


}); //end ready
