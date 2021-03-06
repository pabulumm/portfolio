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
	$('#name-container').hide().delay(500).fadeIn(1500);
	$('#about-container').hide().delay(1000).fadeIn(1500);
	$('.contact').hide().delay(1500).fadeIn(1500);
	$('.contact-box').hide();
	$('#scroll-arrow').hide().delay(1500).fadeIn(1500);
}

function extend(selector) {
	$(selector).animate({
		"width": "90%"},
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

function initSkillItems() {
	$('.skill-item').each(function() {
		$(this).addClass('skill-item-hidden');
	});
}

function slideInChildren(selector) {
	$(selector).children('.skill-item').each (function() {
		$(this).removeClass('skill-item-hidden');
	});
}

function slideOutChildren(selector) {

}

// FOR USE WITH HTML5 CANVAS
function drawSkillsDiagram() {
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	var thickness=50;
	var ctx_x = 100;
	var ctx_y = 75;
	var ctx_radius = 75;

	// upper left quad
	ctx.beginPath();
	ctx.arc(ctx_x,ctx_y,ctx_radius,Math.PI/2,Math.PI);
	ctx.strokeStyle="blue"
	ctx.lineWidth=thickness;
	ctx.stroke();

	// upper right quad
	ctx.beginPath();
	ctx.arc(ctx_x,ctx_y,ctx_radius,0,Math.PI/2);
	ctx.strokeStyle="green"
	ctx.lineWidth=thickness;
	ctx.stroke();

	// lower left quad
	ctx.beginPath();
	ctx.arc(ctx_x,ctx_y,ctx_radius,Math.PI,3*Math.PI/2);
	ctx.strokeStyle="red"
	ctx.lineWidth=thickness;
	ctx.stroke();

	// lower right quad
	ctx.beginPath();
	ctx.arc(ctx_x,ctx_y,ctx_radius,3*Math.PI/2,2*Math.PI);
	ctx.strokeStyle="black"
	ctx.lineWidth=thickness;
	ctx.stroke();
}



var skill_init_padding, skill_spacing;

function formatPage() {
	var win_width = $(window).width();
	console.log("Current window width: " + win_width);
	if (win_width > 1650) { 
		skill_init_padding = 250;
		skill_spacing = 200;
	}
	else if (win_width > 1550) {
		skill_init_padding = 230;
		skill_spacing = 180;
	}
	else if (win_width > 1450) {
		skill_init_padding = 210;
		skill_spacing = 160;
	}
	else if (win_width > 1250) {
		skill_init_padding = 200;
		skill_spacing = 140;
	}
	else if (win_width > 1000) {
		skill_init_padding = 250;
		skill_spacing = 130;
	}
	else {
		skill_init_padding = 250;
		skill_spacing = 200;
	}
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

	$('#skill-content').hover(function() {
		clearInterval(bouncing);
		// $('#scroll-arrow').hide();
	});

	// window formatting
	formatPage();
	$(window).resize(function() {
		formatPage();
	});
	


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
	});
	initSkillItems();

	$('#prog-lang').hover(function() {
		$('#prog-skills').children('.skill-item').each(function(index) {
			$(this).delay(100*index).removeClass('skill-item-hidden').animate({
				"right": skill_init_padding+index*skill_spacing+"px"},
				500, function() {
				/* stuff to do after animation is complete */
			});
		});
	}, function() {
		$('#prog-skills').children('.skill-item').each(function() {
			// $(this).removeClass('skill-item-hidden');
			$(this).animate({
				"right": "150%"},
				250, function() {
					$(this).addClass('skill-item-hidden');
			});
		}).delay(500);
	});

	$('#app-dev').hover(function() {
		$('#app-skills').children('.skill-item').each(function(index) {
			$(this).delay(100*index).removeClass('skill-item-hidden').animate({
				"right": skill_init_padding+index*skill_spacing+"px"},
				500, function() {
				/* stuff to do after animation is complete */
			});
		});
	}, function() {
		$('#app-skills').children('.skill-item').each(function() {
			// $(this).removeClass('skill-item-hidden');
			$(this).animate({
				"right": "150%"},
				250, function() {
					$(this).addClass('skill-item-hidden');
			});
		});
	});

	$('#design').hover(function() {
		$('#des-skills').children('.skill-item').each(function(index) {
			$(this).delay(100*index).removeClass('skill-item-hidden').animate({
				"right": skill_init_padding+index*skill_spacing+"px"},
				500, function() {
				/* stuff to do after animation is complete */
			});
		});
	}, function() {
		$('#des-skills').children('.skill-item').each(function() {
			// $(this).removeClass('skill-item-hidden');
			$(this).animate({
				"right": "150%"},
				250, function() {
					$(this).addClass('skill-item-hidden');
			});
		});
	});

	$('#bug-info span').click(function() {
		$('#bug-info').hide();
	})
})


