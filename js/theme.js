/**
 * Theme JS
 */

'use strict';


// btn to Top
var toTopButton = (function() {
	// Variables
	var topButton = $('#back-to-top');
	var scrollTop = $(window).scrollTop();
	var isActive = true;

	// Methods	

	// Events
	$(window).scroll(function() {

		scrollTop = $(window).scrollTop();
		if (scrollTop > 100 && !isActive) {
	        isActive = true;
			topButton.fadeIn();
	
	    } else if (scrollTop <= 100 && isActive) {
	        isActive = false;
			topButton.fadeOut();

		}
	});
})();

/*** Smooth scroll to anchor ***/
var smoothScroll = (function() {

	// Variables
	var link = $('a[href^="#section__"]');
	var duration = 1000;

	// Methods
	function scrollTo(link) {
		var target = $(link.attr('href'));
		var navbar = $('.navbar');
		var navbarHeight = navbar.outerHeight();
		if ( target.length ) {
			$('html, body').animate({
				scrollTop: target.offset().top - navbarHeight 
			}, duration);
		}
	}
	// Events
	link.on('click', function(e) {
		e.preventDefault();
		scrollTo( $(this) );
	});

})();


/**
 * Newsletter
 */

$(function() {
	/*** Own Carousel (For Gallery Section) ***/
	
	var $carouselGallery = $("#gallery__carousel");

	if ($carouselGallery.length) {
		$carouselGallery.owlCarousel({
 			margin:10,
    		nav:true,
 			slideSpeed:150,
      		animateOut:'fadeOut',
      		responsiveClass:true,
      		responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:4
		        }
		    }
 		});
	};

	/*** Own Carousel (For Testimonials Section) ***/

	var $carouselTestimonials = $("#testimonials__carousel");

	if ($carouselTestimonials.length) {

		$carouselTestimonials.owlCarousel({
 			margin:10,
 			slideSpeed:150,
      		responsiveClass:true,
      		responsive:{
		        0:{
		            items:1
		        },
		        1000:{
		            items:2
		        }
		    }
 		});
	};

		var $carouselRoomDetail = $("#room-detail__carousel");

	if ($carouselRoomDetail.length) {

		$carouselRoomDetail.owlCarousel({
			items:1,
 			margin:10,
 			nav:false,
 			animateOut:'fadeOut',
 			slideSpeed:150
 		});
	};
});


	