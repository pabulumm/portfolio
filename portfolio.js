

function loadAboutPage() {
	$('#name-container').hide().delay(1000).fadeIn(2000);
	$('#about-container').hide().delay(2000).fadeIn(2000);
	$('#work-select').hide().delay(3000).fadeIn(2000);
	$('#skills-select').hide().delay(3000).fadeIn(2000);
	$('.contact').hide().delay(3000).fadeIn(2000);
	$('.contact-box').hide();
	hideSkills();
}

function hideSkills() {
	$('#close-skills').hide(); 
	$('.skill-wrap').hide();
}

function loadWorkPage() {
	$('#about-select').delay(1000).fadeIn(2000);
	$('.contact').hide().delay(1000).fadeIn(2000);
	$('.contact-box').hide();
}


$(function() {

	// content hiding and fades
	$('#work-content').hide();
	$('#about-select').hide();
	loadAboutPage();

	// switch view when work is selected.
	$('#work-select').click(function() {
		loadWorkPage();
		console.log('Clicked WORK link');
		$('#work-content').show();
		$('#content').animate({
			left: "-100%"},
			1000, function() {
				$('#work-content').toggleClass('in-front');
				//reset position of content page
				$('#content').toggleClass('in-front').css("left", "0");
		});
	})

	$('#about-select').click(function() {
		console.log('Clicked ABOUT link');
		loadAboutPage();

		// slide work content out
		$('#work-content').animate({
			right: "-100%"},
			1000, function() {
				$('#content').toggleClass('in-front');

				//reset position of work-content page
				$('#work-content').toggleClass('in-front').css("right", "0");
		});
	});


	$('#skills-select').click(function() {
		console.log('Clicked SKILLS button');
		$('#skills-container').addClass('skills-open').addClass('rotating');
		$('#skills-select').fadeOut(500);
		$('#skills-container').animate({
			height: "300px",
			width: "300px",
			left: "-=115px",
			bottom: "-=130px"},
			1300, function() {
				$('#close-skills').fadeIn(500);
				$('#skills-container').removeClass('rotating');
				for (i = 1; i< 5; i++) {
					$('#skill-wrap'+i).fadeIn(i*500);
				}
		});
	})

	$('#close-skills').click(function() {
		console.log('Clicked CLOSE SKILLS button');
		hideSkills();

		$('#skills-select').fadeOut(500);
		$('#skills-container').animate({
			height: "40px",
			width: "70px",
			left: "+=115px",
			bottom: "+=130px"},
			1000, function() {
				$('#skills-container').removeClass('skills-open');
				$('#skills-select').fadeIn(100);
		});
	});

	$('.contact').click(function() {
		$('.contact').fadeOut(500);
		$('.contact-box').fadeIn(500);
	})
})


