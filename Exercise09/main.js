// JavaScript Document
function getCookie(name){
	'use strict'
	var len=name.length;
	var cookies = document.cookie.split(';');
	
	for (var i = 0, count = cookies.length; i < count; i++) {
		if (cookies[i].slice(0,1)==' '){
			var value=cookies[i].slice(1)
		}
		else{
			var value=cookies[i];
		}
		value=decodeURIComponent(value);
		if(value.slice(0,len)==name){
			return cookies[i].split('=')[1];
		}
	}
	return false;
}

function setCookie(name, value){
	document.cookie=name+"="+escape(value);
}

function change(e){
	change=e.target.id;
	if (change=='first'){
		setCookie('first', document.getElementById("first").value);
	}
	if (change=='last'){
		setCookie('last',document.getElementById("last").value);
	}
	if (change=='address'){
		setCookie('address',document.getElementById("address").value);
	}
	if (change=='city'){
		setCookie('city',document.getElementById("city").value);
	}
	if (change=='state'){
		setCookie('state',document.getElementById("state").value);
	}
	if (change=='zip'){
		setCookie('zip',document.getElementById("zip").value);
	}
	if (change=='phone'){
		setCookie('phone',document.getElementById("phone").value);
	}
	if (change=='tuner'){
		if (document.getElementById('tuner_quantity').value==0){
			document.getElementById('tuner_quantity').value=1;
			setCookie('tuner_quantity',document.getElementById('tuner_quantity').value);
		}
		if (document.getElementById('tuner').checked==false){
			document.getElementById('tuner_quantity').value=0;
			setCookie('tuner_quantity',document.getElementById('tuner_quantity').value);
		}
	}
	if (change=='tuner_quantity'){
		num=parseInt(document.getElementById('tuner_quantity').value);
		if (num>0){
			document.getElementById('tuner').checked=true;
			setCookie('tuner_quantity',document.getElementById('tuner_quantity').value);
		}
		if (num==0){
			document.getElementById('tuner').checked=false;
			setCookie('tuner_quantity',document.getElementById('tuner_quantity').value);
		}
		if(isNaN(num)){
			alert('Please Enter a Number');
		}
	}
	if (change=='case'){
		if (document.getElementById('case_quantity').value==0){
			document.getElementById('case_quantity').value=1;
			setCookie('case_quantity',document.getElementById('case_quantity').value);
		}
		if (document.getElementById('case').checked==false){
			document.getElementById('case_quantity').value=0;
			setCookie('case_quantity',document.getElementById('case_quantity').value);
		}
	}
	if (change=='case_quantity'){
		num=parseInt(document.getElementById('case_quantity').value);
		if (num>0){
			document.getElementById('case').checked=true;
			setCookie('case_quantity',document.getElementById('case_quantity').value);
		}
		if (num==0){
			document.getElementById('case').checked=false;
			setCookie('case_quantity',document.getElementById('case_quantity').value);
		}
		if(isNaN(num)){
			alert('Please Enter a Number');
		}
	}
	if (change=='pick'){
		if (document.getElementById('pick_quantity').value==0){
			document.getElementById('pick_quantity').value=1;
			setCookie('pick_quantity',document.getElementById('pick_quantity').value);
		}
		if (document.getElementById('pick').checked==false){
			document.getElementById('pick_quantity').value=0;
			setCookie('pick_quantity',document.getElementById('pick_quantity').value);

		}
	}
	if (change=='pick_quantity'){
		num=parseInt(document.getElementById('pick_quantity').value);
		if (num>0){
			document.getElementById('pick').checked=true;
			setCookie('pick_quantity',document.getElementById('pick_quantity').value);
		}
		if (num==0){
			document.getElementById('pick').checked=false;
			setCookie('pick_quantity',document.getElementById('pick_quantity').value);
		}
		if(isNaN(num)){
			alert('Please Enter a Number');
		}
	}
}
function open_modal(){
	'use strict'
	document.getElementById('modal').style.display='inline-block';
}
function close_modal(){
	'use strict'
	document.getElementById('modal').style.display='none';
}

function checkout(){
	if (document.getElementById('tuner').checked==true || document.getElementById('pick').checked==true || document.getElementById('pick').checked==true){
		document.location.href='checkout.html';
	}
	else{
		open_modal();
	}
}
function print_page(){
	if(typeof window.print=='function'){
		window.print() ;
	}
}

window.onload=function(){
	'use strict'
	document.addEventListener('change', change);
	var test=document.getElementById('mainname');
	if(test!=null){
		test=document.getElementById('mainname').innerHTML=getCookie('first')+' '+getCookie('last');
		setCookie('tuner_quantity',0);
		setCookie('case_quantity',0);
		setCookie('pick_quantity',0);
	}
	var test=document.getElementById('cust');
	if(test!=null){
		document.getElementById('cust').innerHTML=getCookie('first')+' '+getCookie('last');
		document.getElementById('items').innerHTML=parseInt(getCookie('tuner_quantity'))+parseInt(getCookie('case_quantity'))+parseInt(getCookie('pick_quantity'));
		document.getElementById('cost').innerHTML=parseInt(getCookie('tuner_quantity'))*12+parseInt(getCookie('case_quantity'))*50+parseInt(getCookie('pick_quantity'))*1;

	}
	
}