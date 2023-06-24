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
						$("#codePageOne, #codePageTwo, #codePageFive").removeClass("hidden");
					});

					//Chosen page fades in
					$("#codePageTwo, #codePageFive").fadeIn(3000, "linear");	
					$("#favicon").attr("href", "https://res.cloudinary.com/learicist/image/upload/v1678062766/Portfolio/favicon-code.ico");				
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
						$("#musicPageOne, #musicPageTwo, #musicPageFive").removeClass("hidden");
					});

					//Chosen page fades in
					$("#musicPageTwo, #musicPageFive").fadeIn(3500, "linear");	
					$("#favicon").attr("href", "https://res.cloudinary.com/learicist/image/upload/v1678062766/Portfolio/favicon-guitar.ico");			
				});
			}
		},
		mouseleave: function () {
			$(this).css("background-color", "white");
			$(this).css("color", "black");
		}
	});

	//User clicks logo icon
	$(".navbar-brand").on({
		click: function () {
			console.log("I was clicked bitch");
			//If Coding Page is on screen
			if (this.id == "eighthNoteBtn") {

				//Fade out page user is leaving, flip switches
				$(".codePage").fadeOut(1000, "linear", function() {
					$(".codePage").addClass("hidden");
					$("#musicPageOne, #musicPageTwo, #musicPageFive").removeClass("hidden");
				});

				//Navbar fades in earlier
				$("#musicPageOne").fadeIn(800, "linear");

				//Chosen page fades in
				$("#musicPageTwo, #musicPageFive").fadeIn(2000, "linear");
				$("#favicon").attr("href", "https://res.cloudinary.com/learicist/image/upload/v1678062766/Portfolio/favicon-guitar.ico");

			} else if (this.id == "htmlTags") {

				//Fade out page user is leaving, flip switches
				$(".musicPage").fadeOut(1000, "linear", function() {
					$(".musicPage").addClass("hidden");
					$("#codePageOne, #codePageTwo, #codePageFive").removeClass("hidden");
				});

				//Navbar fades in earlier
				$("#codePageOne").fadeIn(800, "linear");

				//Chosen page fades in
				$("#codePageTwo, #codePageFive").fadeIn(2000, "linear");
				$("#favicon").attr("href", "https://res.cloudinary.com/learicist/image/upload/v1678062766/Portfolio/favicon-code.ico");
			}
		}
	});

	//Hover on Nav options
	$(".dropdown").on({
		mouseenter: function() {
			$(this).css("background-color", "white");
		},
		mouseleave: function() {
			$(this).css("background-color", "black");
		}
	});

	//User chooses Nav options
	$(".codeLinks").on({
		click: function() {
			console.log($(this).attr("id"));
			//If chosen button ...
			switch ($(this).attr("id")) {
				//...is About
				case "codeAboutBtn":
					$("#codePageTwo").removeClass("hidden");
					$("#codePageThree, #codePageFour").addClass("hidden");
					$("#codeMenu").trigger("click");
					break
				//...is Portfolio
				case "codePortBtn":
					$("#codePageThree").removeClass("hidden");
					$("#codePageTwo, #codePageFour").addClass("hidden");
					$("#codeMenu").trigger("click");
					break
				//...is Contact
				case "codeContactBtn":
					$("#codePageFour").removeClass("hidden");
					$("#codePageTwo, #codePageThree").addClass("hidden");
					$("#codeMenu").trigger("click");
					break
			}
		}
	});

	$(".musicLinks").on({
		click: function () {
			console.log("music link clicked, codepage has hidden");
			//If chosen button...
			switch ($(this).attr("id")) {
				//...is About
				case "musicAboutBtn":
					console.log("music link clicked, codepage has hidden, about btn clicked");
					$("#musicPageTwo").removeClass("hidden");
					$("#musicPageThree, #musicPageFour").addClass("hidden");
					$("#musicMenu").trigger("click");
					break
				//...is Portfolio
				case "musicPortBtn":
					$("#musicPageThree").removeClass("hidden");
					$("#musicPageTwo, #musicPageFour").addClass("hidden");
					$("#musicMenu").trigger("click");
					break
				//...is Contact
				case "musicContactBtn":
					$("#musicPageFour").removeClass("hidden");
					$("#musicPageTwo, #musicPageThree").addClass("hidden");
					$("#musicMenu").trigger("click");
					break
			}
		}
	});

	//Music page release of info
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

	//Name at bottom of page
	$(".myName").on({
		mouseenter: function() {
			$(this).css({
				backgroundColor: "white",
				color: "black",
				textDecoration: "none",
				padding: "5px",
				borderRadius: "5px"
			})
		},
		mouseleave: function() {
			$(this).css({
				backgroundColor: "transparent",
				color: "white"
			})
		}
	});

	//Snap hamburger back in (mostly for mobile users)
	$(".codeBody").on("click", function () {
		if ($("#codeMenu").attr("aria-expanded") === "true") {
			console.log('test');
			$("#codeMenu").trigger("click");
		}
	});

	//Same as above
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
