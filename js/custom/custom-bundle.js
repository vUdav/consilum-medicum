$(document).ready(function() {

	// Init functions
	mobileMenu();
	actualSlider();

	// Mobile menu
	function mobileMenu() {
		$('#menu-show').on('click',function(e){
			e.preventDefault();
			$('.page-header__menu').toggleClass('page-header__menu--active');
		});
	}

	// Actual slider
	function actualSlider() {
		// Init functions on load page
		carouselChangeInfo();

		// Init variables
		var carousel = $('#actual-slider');

		// Carousel settings
		carousel.owlCarousel({
			nav: false,
			dots: false,
			center: true,
			loop: true,
			responsive: {
				0: {
					items: 2
				},
				854: {
					items: 3
				}
			}
		});

		// Change info on carousel top
		function carouselChangeInfo(){
			setTimeout(function(){
				// Init variables
				var carouselHead = $('#actual-slider-head');
				var sliderCenter = $('.actual__slider-items .center');
				var sliderItem = $('.actual__slider-item');

				// Get data
				var img = carousel.find(sliderCenter).find(sliderItem).data('img');
				var link = carousel.find(sliderCenter).find(sliderItem).data('link');
				var text = carousel.find(sliderCenter).find('.actual__slider-item-title').text();
				var watch = carousel.find(sliderCenter).find('.actual__slider-item-watch').text();

				// Append data
				carouselHead.find('p').text(text);
				carouselHead.find('.actual__slide-description-watch').text(watch);
				carouselHead.find('.actual__slider-img').attr('src',img);
				carouselHead.find('.actual__slider-link').attr('href',link);
			},100);
		}

		// Active item on click
		carousel.on('click','.actual__slider-item',function() {
			var carouselData = carousel.data('owl.carousel');
			carouselData.to(carouselData.relative($(this).parent().index()), false, true);
		});

		// Arrow triggers
		$('.actual__slider-left').click(function(e) {
			e.preventDefault();
			carousel.trigger('prev.owl.carousel');
		});
		$('.actual__slider-right').click(function(e) {
			e.preventDefault();
			carousel.trigger('next.owl.carousel');
		});

		// Change carousel top info when carousel changed
		carousel.on('changed.owl.carousel',carouselChangeInfo);
	}

});