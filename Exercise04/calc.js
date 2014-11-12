function calc(){
	'use strict';
	var exercises=document.getElementById('exercises').value;
	var mini=document.getElementById('mini').value;
	var final=document.getElementById('Final').value;
	var name1=document.getElementById('name1').value;
	var name2=document.getElementById('name2').value;
	var name3=document.getElementById('name3').value;
	var name4=document.getElementById('name4').value;
	var grade1=document.getElementById('grade1').value;
	var grade2=document.getElementById('grade2').value;
	var grade3=document.getElementById('grade3').value;
	var grade4=document.getElementById('grade4').value;
	var mult1=1;
	var mult2=1;
	var mult3=1;
	var mult4=1;
	var maximum=0;
	var points=0;
	var total=0;
		
	switch(type1.value){
		case 'exercise':
			mult1=exercises/100;
			break;
		case 'mini':
			mult1=mini/100;
			break;
		case 'Final':
			mult1=final/100;
			break;
	}
	
	switch(type2.value){
		case 'exercise':
			mult2=exercises/100;
			break;
		case 'mini':
			mult2=mini/100;
			break;
		case 'Final':
			mult2=final/100;
			break;
	}
	
	switch(type3.value){
		case 'exercise':
			mult3=exercises/100;
			break;
		case 'mini':
			mult3=mini/100;
			break;
		case 'Final':
			mult3=final/100;
			break;
	}
	
	switch(type4.value){
		case 'exercise':
			mult4=exercises/100;
			break;
		case 'mini':
			mult4=mini/100;
			break;
		case 'Final':
			mult4=final/100;
			break;
	}
	
	if (name1.length<21 && name2.length<21 && name3.length<21 && name4.length<21) {
		if (parseInt(exercises)+parseInt(mini)+parseInt(final)==100){
			if (grade1 && grade2 && grade3 && grade4){
				if (parseInt(exercises, 10)>0 && parseInt(mini, 10)>0 && parseInt(final, 10)>0 && parseInt(grade1, 10)>0 && parseInt(grade2, 10)>0 && parseInt(grade3, 10)>0 && parseInt(grade4, 10)>0){
					points=mult1*grade1+mult2*grade2+mult3*grade3+mult4*grade4;
					maximum=(mult1+mult2+mult3+mult4)*100;
					total=(points/maximum)*100;
					document.getElementById('total').value=total;
				}
				else{
					alert("Be sure all the grades and ruberic fields are numbers!");
				}
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
} //end of calc funtion

function init() {
	'use strict';
	var table=document.getElementById('form');
	form.onsubmit=calc;
}
window.onload=init;// JavaScript Document