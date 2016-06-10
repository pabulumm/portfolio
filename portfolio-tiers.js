function bounceArrow() {
$("#scroll-arrow").animate({
	"top": "-=50px",
	"bottom": "+=50px"},
	1000).animate({
		"top": "+=50px",
		"bottom": "-=50px"},
		1000);
}

function loadAboutPage() {
	$('#name-container').hide().delay(1000).fadeIn(2000);
	$('#about-container').hide().delay(2000).fadeIn(2000);
	$('.contact').hide().delay(2000).fadeIn(2000);
	$('.contact-box').hide();
	$('#scroll-arrow').hide().delay(2000).fadeIn(2000);
}

function extend(selector) {
	$(selector).animate({
		"width": "1400px"},
		"slow", function() {
			$(this).children('.work-display-text').show();
			$(this).children('.work-display-image').show();
		});
}

function retract(selector) {
	$(selector).animate({
		"width": "230px",},
		"slow", function() {
			$(this).children('.work-display-text').hide();
			$(this).children('.work-display-image').hide();
		});
}


$(function() {

	// content hiding and fades
	$('#about-select').hide();
	loadAboutPage();
	
	$('.work-display-image').each(function() {
		$(this).hide();
	});

	$('.work-display-text').each(function() {
		$(this).hide();
	});

	$('.contact').click(function() {
		$('.contact').fadeOut(500);
		$('.contact-box').fadeIn(500);
	});

	var bouncing = setInterval(function() {
		bounceArrow();
	}, 2000);

	$('#work-content').hover(function() {
		clearInterval(bouncing);
		// $('#scroll-arrow').hide();
	})


	// WORK DISPLAY HOVER FUNCTION - extends and retracts the div
	// also using a timer to only allow execution every 2000 ms.
	var timer;
	$('.work-display-container').hover(function() {
		if(!($(this).is(':animated'))) {
			extend(this);
		}
	}, function() {
		if (!($(this).hasClass('extended'))) {
			retract(this);
		}
	});

	$('.work-display-container').click(function() {
		if ($(this).hasClass('extended')) {
			retract(this);
			$(this).removeClass('extended');
		}
		else {
			retract('.extended');
			$('extended').removeClass('.extended');

			$(this).addClass('extended');
			extend(this);
		}
	})

})


