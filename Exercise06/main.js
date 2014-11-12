var player_list= new Array();

function process(){
	'use strict';
	var first=document.getElementById('first_name').value;
	var last=document.getElementById('last_name').value;
	var character=document.getElementById('character').value;
	var player={
		first: first,
		last: last,
		character: character,
		}
		
	player_list.push(player);
	table.innerHTML="";
	
	for (var i=0;i<player_list.length;i++){
		table.innerHTML+=player_list[i].first+"\t\t"+player_list[i].last+"\t\t"+player_list[i].character+"\n";
		}
	
	document.getElementById('first_name').value="";
	document.getElementById('last_name').value="";
	return false;
}

function init(){
	'use strict';
	document.getElementById('form').onsubmit=process;
}

window.onload=init;