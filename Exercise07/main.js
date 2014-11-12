function $(id){
	'use strict'
	if(typeof id != 'undefined'){
		return document.getElementById(id).value;
	}
}

function reroll()
{
	points_health=Math.floor((Math.random()*16)+3);
	points_speed=Math.floor((Math.random()*16)+3);
	points_strength=Math.floor((Math.random()*16)+3);
	document.getElementById('health').value=points_health;
	document.getElementById('speed').value=points_speed;
	document.getElementById('strength').value=points_strength;
	document.getElementById('unspent').value=0;
}


function subtract(id){
	var spent=parseInt($(id));
	var unspent=parseInt($('unspent'));
	if(spent>0){
		spent-=1;
		unspent+=1;
		document.getElementById(id).value=spent;
		document.getElementById('unspent').value=unspent;
	}
}

function add(id){
	var spent=parseInt($(id));
	var unspent=parseInt($('unspent'));
	if(unspent>0){
		spent+=1;
		unspent-=1;
		document.getElementById(id).value=spent;
		document.getElementById('unspent').value=unspent;
	}
}

window.onload=reroll;