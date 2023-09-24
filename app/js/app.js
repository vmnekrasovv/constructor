(function($){
	$(document).ready(function(){ 

		$('.scroll-down').on('click', function(){
			$('html, body').animate({
				scrollTop: $('.navbar').offset().top
			}, 500, function(){
				//console.log('callback function');
			});
		});

		$(window).on('scroll', function(e){

			console.log(pageYOffset);
			console.log($('.header').outerHeight(true));

			if(pageYOffset > $('.header').outerHeight(true)){
				$('.navbar').addClass('fixed');
			} else {
				$('.navbar').removeClass('fixed');
			}
		});
	});
})(jQuery);