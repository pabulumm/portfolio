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
	});
	initSkillItems();

	$('#prog-lang').hover(function() {
		$('#prog-skills').children('.skill-item').each(function(index) {
			$(this).delay(100*index).removeClass('skill-item-hidden').animate({
				"right": 250+index*200+"px"},
				500, function() {
				/* stuff to do after animation is complete */
			});
		});
	}, function() {
		$('#prog-skills').children('.skill-item').each(function() {
			// $(this).removeClass('skill-item-hidden');
			$(this).animate({
				"right": "150%"},
				"fast", function() {
					$(this).addClass('skill-item-hidden');
			});
		}).delay(500);
	});

	$('#app-dev').hover(function() {
		$('#app-skills').children('.skill-item').each(function(index) {
			$(this).delay(100*index).removeClass('skill-item-hidden').animate({
				"right": 250+index*200+"px"},
				500, function() {
				/* stuff to do after animation is complete */
			});
		});
	}, function() {
		$('#app-skills').children('.skill-item').each(function() {
			// $(this).removeClass('skill-item-hidden');
			$(this).animate({
				"right": "150%"},
				"fast", function() {
					$(this).addClass('skill-item-hidden');
			});
		});
	});

	$('#design').hover(function() {
		$('#des-skills').children('.skill-item').each(function(index) {
			$(this).delay(100*index).removeClass('skill-item-hidden').animate({
				"right": 250+index*200+"px"},
				500, function() {
				/* stuff to do after animation is complete */
			});
		});
	}, function() {
		$('#des-skills').children('.skill-item').each(function() {
			// $(this).removeClass('skill-item-hidden');
			$(this).animate({
				"right": "150%"},
				"fast", function() {
					$(this).addClass('skill-item-hidden');
			});
		});
	});

	// $('#skill-content').hover(function() {
	// 	$('.skill-item').each(function() {
	// 		// $(this).removeClass('skill-item-hidden');
	// 		$(this).animate({
	// 			"marginRight": "20px"},
	// 			1000, function() {
	// 			/* stuff to do after animation is complete */
	// 		});
	// 	});
	// }, function() {
	// 	$('.skill-item').each(function() {
	// 		$(this).addClass('skill-item-hidden');
	// 	});
	// });

	// slideInChildren('.skill-category');

})


