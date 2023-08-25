$(document).ready(function () {
	// new WOW().init();

	//------- Owl Carusel  js --------//

	$("#slide").owlCarousel({
		loop: true, // cho lap lại
		items: 1, // xuất hiện 1 ảnh thôi
		smartSpeed: 1000, // tốc độ thay đổi ảnh
		autoplay: true, // cho phép tự động chạy
		autoplayTimeout: 5000, // thời gian chờ khi chuyển ảnh khi chạy tự động
		nav: true, // cho xuất hiện bộ nút tới lui
		dots: true,
		
	});

	$("#banner-slide").owlCarousel({
		loop: true,
		margin: 20,
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 4,
			},
		},
	});
	$("#manu-slide").owlCarousel({
		loop: true,
		margin: 20,
		nav: false,
		dots: true,
		autoplay: 0.3,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 4,
			},
		},
	});

	//------- menu active  js --------//
	$(window).scroll(function (e) {
		// Detect how far are we from the top of the page
		let windowTop = $(this).scrollTop();
		// Loop through every navigation menu item
		$(".nav-nav > ul > li > a").each(function (event) {
			// Check for the current navigation item associated section
			// Check how far the associated section is from the top
			// If the associated section is as far as the user have scrolled, add 'active' class to the item.
			if (windowTop >= $($(this).attr("href")).offset().top - 100) {
				// Remove 'active' from previously highlighted menu items
				$(".nav-nav > ul > li > a.active-nav").removeClass("active-nav");
				// Highlight the current menu item by adding 'active' class

				$(this).addClass("active-nav");
			}
		});

		$(".subMenu > li >a").each(function (event) {
			if (windowTop >= $($(this).attr("href")).offset().top - 100) {
				$(".subMenu > li > a.active-subnav").removeClass("active-subnav");
				$(this).addClass("active-subnav");
			}
		});

		$(".nav-m-sidebar > ul > li > a").each(function (event) {
			if (windowTop >= $($(this).attr("href")).offset().top - 100) {
				$(".nav-m-sidebar > ul > li > a.active-mobile-nav").removeClass("active-mobile-nav");
				$(this).addClass("active-mobile-nav");
			}
		});
	});

	//------- smooth scroll --------//
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, "") ==
				this.pathname.replace(/^\//, "") &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length
					? target
					: $("[name=" + this.hash.slice(1) + "]");
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$("html, body").animate(
						{
							scrollTop: target.offset().top,
						},
						1000,
						function () {
							// Callback after animation
							// Must change focus!
							var $target = $(target);
							$target.focus();
							if ($target.is(":focus")) {
								// Checking if the target was focused
								return false;
							} else {
								$target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
								$target.focus(); // Set focus again
							}
						}
					);
				}
			}
		});
	// Enable hidden nav bar

	{
		let navbar = $(".navbar");
		let navLogo = $(".nav-logo");
		let navNav = $(".nav-nav");
		let navButton = $(".nav-button");
		let navMenu = $(".nav-nav > ul");
		let navMenuA = $(".nav-nav > ul > li > a");
		let navMobile = $(".nav-mobile");
		let lastScrollY = window.scrollY;
		$(window).scroll(function (e) {
			if (lastScrollY < window.scrollY) {
				navbar.addClass("nav--hidden");
				navLogo.addClass("nav--hidden");
				navNav.addClass("nav--hidden");
				navButton.addClass("nav--hidden");
				navMenu.css("height", "70px");
				navMenuA.css("height", "70px");
				navMobile.css("height", "70px");
			} else {
				navbar.removeClass("nav--hidden");
				navLogo.removeClass("nav--hidden");
				navNav.removeClass("nav--hidden");
				navButton.removeClass("nav--hidden");
				navMenu.css("height", "90px");
				navMenuA.css("height", "90px");
				navMobile.css("height", "90px");
			}

			lastScrollY = window.scrollY;
		});
	}

	// Form contact
	$('form#contact_form').on("submit", async function (event) {
		// link ='contact/save';
		link = '#';
		let $inputFName = $('#contact_form :input[name=fName]');
		let $inputLName = $('#contact_form :input[name=lName]');
		let $inputEmail = $('#contact_form :input[name=email]');
		
		let $inputMessage = $('#contact_form :input[name=message]');
		let $inputSubject = $('#contact_form :input[name=subject]');

		if (!$inputFName.val() || !$inputEmail.val() || !$inputLName.val() || !$inputMessage.val() || !$inputSubject.val()) {
			if (!$inputFName.val()) {
				$('#contact_form :input[name=fName]').notify("Your first name is empty!", { position: "top", className: 'info' });
			}
			if (!$inputLName.val()) {
				$('#contact_form :input[name=lName]').notify("Your last name is empty!", { position: "top", className: 'info' });
			}
			if (!$inputEmail.val()) {
				$('#contact_form :input[name=email]').notify("Please jot down your email!", { position: "top", className: 'info' });
			}
			
			if (!$inputSubject.val()) {
				$('#contact_form :input[name=subject]').notify("Please don't skip this one!", { position: "top", className: 'info' });
			}
			if (!$inputMessage.val()) {
				$('#contact_form :input[name=message]').notify("Please don't skip this one!", { position: "top", className: 'info' });
			}
			console.log('false submit');
			event.preventDefault();
			return false;
		} else {
			window.location.href = link;

		}
	});


});
