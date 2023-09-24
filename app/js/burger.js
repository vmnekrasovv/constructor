(function($){
	$(document).ready(function(){

		$('.burger').append("<span class='burger__element'></span>");

		let btn = $('.burger, .main-menu');

		btn.click(function(){
			btn.toggleClass('active');
			$('body').toggleClass('lock');
		});

	});
})(jQuery);