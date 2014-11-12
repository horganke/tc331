var canvas;
var ctx;

var width  = 320;
var height = 240;

var speedX      = 0;    //how fast the ball is moving in the horizontal direction
var speedY      = 0;    //how fast the ball is moving in the vertical direction

var radius      = 10;


var x   = width  / 2  - radius;  //starting horizontal position
var y   = height / 2  - radius;  //starting vertical position


var circleColor                         = "#FF0000";

var rectangleColorBg            = "#FFFFFF";
var rectangleColorStroke        = "#000000";


function init() {
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
		window.onkeypress = key_pressed;
        return setInterval(draw, 10);
		
}

function key_pressed(e){
  var evt=window.event? event : e
  var character = String.fromCharCode(evt.which);
  if(character == "w")
  {
		  speedY -=1;
  }
  if(character == "a")
  {
		  speedX -= 1;
  }
  if(character == "s")
  {
		  speedY += 1;
  }
  if(character == "d")
  {
		  speedX += 1;
  }
}


function circle(x,y,r, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI*2, true);
        ctx.fill();
}

function rect(x,y,w,h) {
        ctx.fillStyle   = rectangleColorBg;
        ctx.strokeStyle = rectangleColorStroke;
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
}

function draw() {
	x+=speedX;
	y+=speedY;
	
	if (speedX>0){ 
	  if (x>=320){
		  speedX=-speedX+1;
	  }
	  if (x>=321){
		  	x=320;
		}
	}
	if (speedX<0){
		if (x<=0){
			speedX=-speedX-1;
		}
		if(x<=-1){
		  x=0;
	  }
	}
	if (speedY>=0){
			if(y>=240){
			speedY=-speedY+1;
		}
		if (y>=241){
				y=240;
		}
	}
	if (speedY<0){
		if(y<=0){
			speedY=-speedY-1;
		}
		if(y<=-1){
		  y=0;
	  }
	}
 
 
  //draw the background - see function above
  rect(0,0,width,height);
  //draw the circle - see function above
  circle(x, y, radius, circleColor);
}


init();