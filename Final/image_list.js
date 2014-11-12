$(document).ready(function() {
	$('.movie_list li').fadeTo('fast', 0.5);
	$('.movie_list li').mouseenter(function() {
		$(this).animate({
			opacity: 1,
		});
		$('.movie_list li').css('cursor','pointer');
	});
	$('.movie_list li').mouseleave(function() {
		$(this).animate({
			opacity: 0.5,
		});
	});
});


$(document).ready(function() {
	$('.titles_list li').fadeTo('fast', 0.5);
	$('.titles_list li').mouseenter(function() {
		$(this).animate({
			opacity: 1,
		});
		$('.titles_list li').css('cursor','pointer');
	});
	$('.titles_list li').mouseleave(function() {
		$(this).animate({
			opacity: 0.5,
		});
	});
});

function validateForm()
{
var x=document.forms["myForm"]["tuning"].value;
if (x==null || x=="")
  {
  alert("First name must be filled out");
   return false;
  }
else {
	alert("Submission Recived!")
	myForm.reset();
}
  }


