/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Mobile Menu Js
03. Sidebar Js
04. Sticky Header Js
05. Brand Slider Js
06. Course Slider Js
07. Launch Carrer Slider Js
08. Digital Skills Slider Js
09. Expert Trainer Slider Js
10. Testimonial Slider Js
11. Incomplete Course Slider Js
12. After Login Slider Js
13. Masonary Js
14. Counter Js
15. InHover Active Js
16. Search Js
17. Filter Common Slider Js
18. Profile Image Upload Js

****************************************************/

(function ($) {
"use strict";

	var windowOn = $(window);
	////////////////////////////////////////////////////
    // 01. PreLoader Js
	windowOn.on('load',function() {
		$("#loading").fadeOut(500);
	});

	////////////////////////////////////////////////////
    // 02. Mobile Menu Js
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "1199",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});

	////////////////////////////////////////////////////
    // 02. Mobile Menu Js
	$('#mobile-menu2').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "1199",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});

	////////////////////////////////////////////////////
    // 03. Sidebar Js
	$("#sidebar-toggle").on("click", function () {
		$(".sidebar__area").addClass("sidebar-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".sidebar__close-btn").on("click", function () {
		$(".sidebar__area").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});

	////////////////////////////////////////////////////
    // 03. Sidebar Js
	$("#sidebar-toggle2").on("click", function () {
		$(".sidebar__area").addClass("sidebar-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".sidebar__close-btn").on("click", function () {
		$(".sidebar__area").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});

	////////////////////////////////////////////////////
    // 04. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("sticky");
		} else {
			$("#header-sticky").addClass("sticky");
		}
	});

	////////////////////////////////////////////////////
    // 05. Module Slider Js

	$('.module__slider').owlCarousel({
		center: false,
		items:1,
		loop: true,
		stagePadding: 0,
		margin: 30,
		autoplay: true,
		pauseOnHover: false,
		dots: true,
		nav: true,
		navText : ["<i class='fa-light fa-arrow-right-long'></i>","<i class='fa-light fa-arrow-left-long'></i>"],
		responsive:{
			300:{
			
			  items: 1,
			  nav: false
			},
			700:{
			
				items: 2,
				nav: false
			},
			1000:{
			
			  items: 4
			},
			1200:{
			
			  items: 4
			},
			1300:{
			
			  items: 5
			}
		}
	}); 

})(jQuery);

