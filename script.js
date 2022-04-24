/*
	WEB 303 Assignment 1 - jQuery
	Harshil Hingu
*/

$(document).ready(function () {

	$("#yearly-salary").keyup(function(){
	  changeSalary();
	});

	$("#percent").keyup(function(){
	  changeSalary();
	});

	function changeSalary() {
		let salary = $("#yearly-salary").val();
		let percentage = $("#percent").val();
		let spend = (salary * percentage) / 100;
		$("#amount").html('$'+spend.toFixed(2));
	}

});