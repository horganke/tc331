
function pi_off ()
{
mySong1=document.getElementById("pi_off");
}
function pi_on ()
{
mySong2=document.getElementById("pi_on");
}
function chron_off ()
{
mySong3=document.getElementById("chron_off");
}
function chron_on ()
{
mySong4=document.getElementById("chron_on");
}

function playSong1()
	{
		mySong1.play();
	}
function pauseSong1()
	{
		mySong1.pause();
	}
function upVolume1()
	{
		mySong1.volume+=0.1;
	}
function downVolume1()
	{
		mySong1.volume-=0.1;
	}
function playSong2()
	{
		mySong2.play();
	}
function pauseSong2()
	{
		mySong2.pause();
	}
function upVolume2()
	{
		mySong2.volume+=0.1;
	}
function downVolume2()
	{
		mySong2.volume-=0.1;
	}
function playSong3()
	{
		mySong3.play();
	}
function pauseSong3()
	{
		mySong3.pause();
	}
function upVolume3()
	{
		mySong3.volume+=0.1;
	}
function downVolume3()
	{
		mySong3.volume-=0.1;
	}
function playSong4()
	{
		mySong4.play();
	}
function pauseSong4()
	{
		mySong4.pause();
	}
function upVolume4()
	{
		mySong4.volume+=0.1;
	}
function downVolume4()
	{
		mySong4.volume-=0.1;
	}
	
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}
addLoadEvent(pi_off);
addLoadEvent(pi_on);
addLoadEvent(chron_off);
addLoadEvent(chron_on);



// JavaScript Document