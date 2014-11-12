function calc() {
	'use strict';
	var width=document.getElementById('width').value;
	var height=document.getElementById('height').value;
	var length=document.getElementById('length').value;
	var volume=width*height*length;
	var gallon=0.004329;
	var gallon_volume=gallon*volume
	var weight=8.33
	var pound_weight=gallon_volume*weight
	
	document.getElementById('volume').value=gallon_volume.toFixed(1);
	if (pound_weight>=150)
		{
		document.getElementById('weight').style.color="red";
		}
	else
		{
		document.getElementById('weight').style.color="black";
		}
	
	document.getElementById('weight').value=pound_weight.toFixed(1);
			
	
	return false;
}

function init() {
	'use strict';
	var Form=document.getElementById('Form');
	Form.onsubmit=calc;
}
window.onload=init;