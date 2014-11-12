// JavaScript Document
function calc(){
	'use strict';
	var Exercises=document.getElementById('Exercises').value;
	var Mini=document.getElementById('Mini').value;
	var Final=document.getElementById('Final').value;
	
	var name_1=document.getElementById('name_1').value;
	var name_2=document.getElementById('name_2').value;
	var name_3=document.getElementById('name_3').value;
	var name_4=document.getElementById('name_4').value;
	
	var grade_1=document.getElementById('grade_1').value;
	var grade_2=document.getElementById('grade_2').value;
	var grade_3=document.getElementById('grade_3').value;
	var grade_4=document.getElementById('grade_4').value;
	
	var weight_1=0;
	var weight_2=0;
	var weight_3=0;
	var weight_4=0;
	
	var maximum=0;
	var points=0;
	var total=0;
	var numbers = /^[0-9]+$/;  
		
	switch(type_1.value){
		case 'Exercises':
			weight_1=Exercises/100;
			break;
		case 'Mini':
			weight_1=Mini/100;
			break;
		case 'Final':
			weight_1=Final/100;
			break;
	}
	
	switch(type_2.value){
		case 'Exercises':
			weight_2=Exercises/100;
			break;
		case 'Mini':
			weight_2=Mini/100;
			break;
		case 'Final':
			weight_2=Final/100;
			break;
	}
	
	switch(type_3.value){
		case 'Exercises':
			weight_3=Exercises/100;
			break;
		case 'Mini':
			weight_3=Mini/100;
			break;
		case 'Final':
			weight_3=Final/100;
			break;
	}
	
	switch(type_4.value){
		case 'Exercises':
			weight_4=Exercises/100;
			break;
		case 'Mini':
			weight_4=Mini/100;
			break;
		case 'Final':
			weight_4=Final/100;
			break;
	}
	
	if (name_1.length<21 && name_2.length<21 && name_3.length<21 && name_4.length<21) {
		if (parseInt(Exercises)+parseInt(Mini)+parseInt(Final)==100){
			if (grade_1 && grade_2 && grade_3 && grade_4){
					points=weight_1*grade_1+weight_2*grade_2+weight_3*grade_3+weight_4*grade_4;
					maximum=100;
					total=(points/maximum)*100;
					document.getElementById('total').value=total;
			}
			else{
				alert("Make sure all 4 grades are entered.")
			}
		}
		else{
			alert("Make sure the ruberic scores add up to 100!")
		}
	}
	else{
		alert("Names must be 20 characters or less!")
	}
	return false;
}

function init() {
	'use strict';
	var Form=document.getElementById('form');
	form.onsubmit=calc;
}
window.onload=init;