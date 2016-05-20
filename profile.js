$(function() {
	$('#work-content').hide();
	$('#bio-content').hide().delay(500).slideDown(1000, "swing").addClass('selected');

	$('#bio-select').click(function() {
		console.log('Clicked BIO link');
		$('#bio-content').slideUp(1000);
		if (!$('#bio-content').hasClass('selected')) {
			$('.selected').slideUp('fast', "swing").removeClass('selected');
			$('#bio-content').slideDown("slow", "swing").addClass('selected');
		}
	});

	$('#work-select').click(function() {
		console.log('Clicked WORK link');
		if (!$('#work-content').hasClass('selected')) {
			$('.selected').slideUp('fast', "swing").removeClass('selected');
			$('#work-content').delay(500).slideDown("slow", "swing").addClass('selected');
		}

	})



});
