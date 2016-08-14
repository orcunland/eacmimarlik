$(document).ready(function(){

/*==========================================================*/
/* Swiper slider
/*==========================================================*/

	swiper = new Swiper('.swiper', {
		loop: false,
		onSlideChangeStart: function() {
			// Hide arrow on first and last slide
			if (swiper.activeIndex == 0) {
				$('.nav-left').addClass('hidden');
			} else {
				$('.nav-left').removeClass('hidden');
			}
			if (swiper.activeIndex == (swiper.slides.length - 1)) {
				$('.nav-right').addClass('hidden');
			} else {
				$('.nav-right').removeClass('hidden');
			}
		}
	});

	// Bind navigation arrows
	$('.swiper').children('.nav-left').on('click', function(e){
		e.preventDefault()
		swiper.swipePrev()
	});
	$('.swiper').children('.nav-right').on('click', function(e){
		e.preventDefault()
		swiper.swipeNext()
	});

});