$(document).ready(function() {
	
	//IS THIS SHIT WORKING YET?!
	
	$(".openingChoice").on({
		mouseenter: function () {
			$(this).css("background-color", "black"); 
			$(this).css("color", "white");
			if (this.id == "chooseCoding") {
				$(this).click(function () {
					//console.log("test");
					// FADEOUT/SETTIMEOUT HERE
					$("#openingQuestion").addClass("hidden");
					$(".codePage").removeClass("hidden");
				});
			} else if (this.id == "chooseMusic") {
				$(this).click(function () {
					//console.log("test");
					// FADEOUT/SETTIMEOUT HERE
					$("#openingQuestion").addClass("hidden");
					$(".musicPage").removeClass("hidden");
				});
			}
		},
		mouseleave: function () {
			$(this).css("background-color", "white");
			$(this).css("color", "black");
		}
	});

	$(".navbar-brand").on({
		// MOUSEENTER STUFF??
		// ADD FADEOUT/SETTIMEOUT FEATURES
		click: function () {
			if ($('.musicPage').hasClass("hidden")) {
				$(".codePage").addClass("hidden");
				$(".musicPage").removeClass("hidden");
			} else if ($('.codePage').hasClass("hidden")) {
				$(".musicPage").addClass("hidden");
				$(".codePage").removeClass("hidden");
			}
		}
	});

	$(".dropdown").on({
		mouseenter: function() {
			$(this).css("background-color", "white");
		},
		mouseleave: function() {
			$(this).css("background-color", "black");
		}
	});

	$("#myName").on({
		mouseenter: function() {
			$(this).css("background-color", "white");
			$(this).css("color", "black");
		},
		mouseleave: function() {
			$(this).css("background-color", "#3374ad");
			$(this).css("color", "white");
		}
	});

	$(".codeBody").on("click", function () {
		if ($("#codeMenu").attr("aria-expanded") === "true") {
			console.log('test');
			$("#codeMenu").trigger("click");
		}
	});

	$(".musicBody").on("click", function () {
		if ($("#musicMenu").attr("aria-expanded") === "true") {
			console.log('test');
			$("#musicMenu").trigger("click");
		}
	});


	$(window).scroll(function() {
		// If page is scrolled more than 50px
		if ($(this).scrollTop() >= 50) {   
			// Fade in the arrow
			$('#scrollUp').fadeIn(200);    
		} else {
			$('#scrollUp').fadeOut(200);  
		}
	}); 

	// When arrow is clicked
	$('#scrollUp').click(function() {      
		$('body, html').animate({
			 // Scroll to top of body
			scrollTop : 0                      
		}, 500);
	}); 


});
