(function ($) {
	"use strict";
	
	$('.arrow').on('click', function(event){
		
		event.preventDefault();
		var id = $(this).attr('href'),
				tOff = $(id).offset().top;
		
		$('html, body').animate({scrollTop: tOff}, 500);
		
	});
	
})(jQuery);