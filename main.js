$(document).ready(function() {
	
	$(".openingChoice").on({
		mouseenter: function () {
			$(this).css("background-color", "black"); 
			$(this).css("color", "white");

			//If user chooses Developer
			if (this.id == "chooseCoding") {
				$(this).click(function () {

					//Prompts and choices slide away from each other
					$("#questionDiv").animate({bottom: "450px"}, 2500);
					$("#choiceDiv").animate({top: "450px"}, 2500);

					//Landing page fades away, switches flip on visibility
					$("#openingQuestion").fadeOut(2000, "linear", function () {
						$("#openingQuestion").addClass("hidden");
						$(".codePage").removeClass("hidden");
					});

					//Chosen page fades in
					$(".codePage").fadeIn(3000, "linear");
					
				});

			//If user chooses Musician
			} else if (this.id == "chooseMusic") {
				$(this).click(function () {
					
					//Prompts and choices slide away from each other
					$("#questionDiv").animate({bottom: "450px"}, 2500);
					$("#choiceDiv").animate({top: "450px"}, 2500);

					//Landing page fades away, switches flip on visibility
					$("#openingQuestion").fadeOut(2000, "linear", function () {
						$("#openingQuestion").addClass("hidden");
						$(".musicPage").removeClass("hidden");
					});

					//Chosen page fades in
					$(".musicPage").fadeIn(3500, "linear");
					
				});
			}
		},
		mouseleave: function () {
			$(this).css("background-color", "white");
			$(this).css("color", "black");
		}
	});

	$(".navbar-brand").on({
		click: function () {
			if ($('.musicPage').hasClass("hidden")) {

				//Fade out page user is leaving, flip switches
				$(".codePage").fadeOut(1500, "linear", function() {
					$(".codePage").addClass("hidden");
					$(".musicPage").removeClass("hidden");
				});

				//Chosen page fades in
				$(".musicPage").fadeIn(3000, "linear");

			} else if ($('.codePage').hasClass("hidden")) {

				//Fade out page user is leaving, flip switches
				$(".musicPage").fadeOut(1500, "linear", function() {
					$(".musicPage").addClass("hidden");
					$(".codePage").removeClass("hidden");
				});

				//Chosen page fades in
				$(".codePage").fadeIn(3000, "linear");
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

	$(".accordionTriggers").on({
		click: function() {
			console.log($(this).text());
			switch ($(this).text()) {
				case "Instruments:":
					$("#stageCard").addClass("hidden");
					$("#recordingCard").addClass("hidden");
					$("#writingCard").addClass("hidden");
					if ($("#instrumentCard").hasClass("hidden")) {
						$("#instrumentCard").removeClass("hidden");
					} else {
						$("#instrumentCard").addClass("hidden");
					}
					break
				case "Stage:":
					$("#instrumentCard").addClass("hidden");
					$("#recordingCard").addClass("hidden");
					$("#writingCard").addClass("hidden");
					if ($("#stageCard").hasClass("hidden")) {
						$("#stageCard").removeClass("hidden");
					} else {
						$("#stageCard").addClass("hidden");
					}
					break
				case "Recording:":
					$("#instrumentCard").addClass("hidden");
					$("#stageCard").addClass("hidden");
					$("#writingCard").addClass("hidden");
					if ($("#recordingCard").hasClass("hidden")) {
						$("#recordingCard").removeClass("hidden");
					} else {
						$("#recordingCard").addClass("hidden");
					}
					break
				case "Writing:":
					$("#instrumentCard").addClass("hidden");
					$("#stageCard").addClass("hidden");
					$("#recordingCard").addClass("hidden");
					if ($("#writingCard").hasClass("hidden")) {
						$("#writingCard").removeClass("hidden");
					} else {
						$("#writingCard").addClass("hidden");
					}
					break
			}
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

	// ADD myMusicFace AFTER fatbottomgirls WHEN WIDTH IS BELOW X


});
