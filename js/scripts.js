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
	return (num1 / num2).toFixed(2);
}

//front-end logic
$(document).ready(function() {

	/* Old lesson script
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
	*/

	$("form#calculator").submit(function(event) {
		var num1 = parseInt($("input#input1").val());
		var num2 = parseInt($("input#input2").val());
		var choice = $("input[type=radio][name=operator]:checked").val();
		var result;

		//if inputs are numbers calculate else alert not numbers
		if(!(isNaN(num1) || isNaN(num2)))
		{
			//apply correct function to operator choice
			switch (choice) {
				case "add":
					result = add(num1, num2);
					break;
				case "subtract":
					result = subtract(num1, num2);
					break;
				case "multiply":
					result = multiply(num1, num2);
					break;
				case "divide":
					result = divide(num1, num2);
					break;
			}
			
			//print result
			$("#output").text(result);
		}
		else
			$("#output").text("Sorry you did not enter valid numbers!");

		event.preventDefault();
	});


}); //end ready
