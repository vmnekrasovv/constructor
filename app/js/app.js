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
			if(pageYOffset > $('.header').outerHeight(true)){
				$('.navbar').addClass('fixed');
			} else {
				$('.navbar').removeClass('fixed');
			}

			/*if($(window).outerWidth(true) < 1440 && $(window).outerHeight(true) < 769){
				console.log($(window).outerWidth(true));
				console.log($(window).outerHeight(true));
				$('.header').css('background-position', 'center ' + ((pageYOffset / 3.7)) + 'px');
			} else {
				console.log($(window).outerWidth(true));
				$('.header').css('background-position', 'center ' + ((pageYOffset / 3.7) + -85) + 'px');
			}*/
		});


		$('.header').parallax({
			imageSrc: 'images/dest/header_bg.jpg',
			speed: .7,
		});

	});
})(jQuery);