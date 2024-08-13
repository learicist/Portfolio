$(document).ready(function() {

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
	
	$(".openingChoice").on({
		mouseenter: function () {
			$(this).css("background-color", "black"); 
			$(this).css("color", "white");
		},

		//If user chooses Developer
		click: function () {
			if (this.id == "chooseCoding") {
				//Prompts and choices slide away from each other
				$("#questionRow").animate({marginTop: "-450px"}, 3000);
				$("#choiceRow").animate({marginTop: "1050px"}, 3000);

				//Landing page fades away, switches flip on visibility
				$("html").fadeOut(2000, "linear", function () {
					//$("#openingQuestion").addClass("hidden");
					//$("#codePageOne, #codePageTwo, #codePageFive").removeClass("hidden");
					//Chosen page fades in
					//$("webDev.html").fadeIn(3000, "linear");
					window.location = "webDev.html";
				});
					
				$("#favicon").attr("href", "https://res.cloudinary.com/learicist/image/upload/v1678062766/Portfolio/favicon-code.ico");	
			
			//If user chooses Musician
			} else if (this.id == "chooseMusic") {
				//Prompts and choices slide away from each other
				$("#questionRow").animate({marginTop: "-450px"}, 3000);
				$("#choiceRow").animate({marginTop: "1050px"}, 3000);

				//Landing page fades away, switches flip on visibility
				$("html").fadeOut(2000, "linear", function () {
					// $("#openingQuestion").addClass("hidden");
					// $("#musicPageOne, #musicPageTwo, #musicPageFive").removeClass("hidden");
					window.location = "music.html";
				});

				//Chosen page fades in
				//$("music.html").fadeIn(3500, "linear");	
				$("#favicon").attr("href", "https://res.cloudinary.com/learicist/image/upload/v1678062766/Portfolio/favicon-guitar.ico");
			}
		},

		mouseleave: function () {
			$(this).css("background-color", "white");
			$(this).css("color", "black");
		}
	});

	//User clicks logo icon
	$(".navbar-brand").on({
		click: function (e) {
			e.preventDefault();
			//console.log("I was clicked bitch");
			//If Coding Page is on screen
			if (this.id == "eighthNoteBtn") {
				//Fade out page user is leaving, flip switches
				$("html").fadeOut(1000, "linear", function() {
					$(".codePage").addClass("hidden");
					window.location = "music.html";
				});

				$("#favicon").attr("href", "https://res.cloudinary.com/learicist/image/upload/v1678062766/Portfolio/favicon-guitar.ico");

			} else if (this.id == "htmlTags") {

				//Fade out page user is leaving, flip switches
				$("html").fadeOut(1000, "linear", function() {
					$(".musicPage").addClass("hidden");
					window.location = "webDev.html";
				});

				$("#favicon").attr("href", "https://res.cloudinary.com/learicist/image/upload/v1678062766/Portfolio/favicon-code.ico");
			}
		}
	});

	//Hover on Nav options
	$(".dropdown").on({
		mouseenter: function() {
			$(this).css("background-color", "#337ab7");
			$("span", this).css("color", "white");
		},
		mouseleave: function() {
			$(this).css("background-color", "white");
			$("span", this).css("color", "#337ab7");
		}
	});

	//User chooses Nav options
	$(".codeLinks").on({
		click: function(e) {
			e.preventDefault();
			console.log($(this).attr("id"));
			//If chosen button ...
			switch ($(this).attr("id")) {
				//...is About
				case "codeAboutBtn":
					$(".codeBody").hide();
					$("#codePageTwo").show();
					$("#codeMenu").trigger("click");
					$("#scrollUp").trigger("click");
					break
				//...is Portfolio
				case "codePortBtn":
					$(".codeBody").hide();
					$("#codePageThree").show();
					$("#codeMenu").trigger("click");
					$("#scrollUp").trigger("click");
					break
				//...is Contact
				case "codeContactBtn":
					$(".codeBody").hide();
					$("#codePageFour").show();
					$("#codeMenu").trigger("click");
					$("#scrollUp").trigger("click");
					break
			}
		}
	});

	$(".musicLinks").on({
		click: function (e) {
			e.preventDefault();
			console.log("music link clicked, codepage has hidden");
			//If chosen button...
			switch ($(this).attr("id")) {
				//...is About
				case "musicAboutBtn":
					$(".musicBody").hide();
					$("#musicPageTwo").show();
					$("#musicMenu").trigger("click");
					$("#scrollUp").trigger("click");
					break
				//...is Portfolio
				case "musicPortBtn":
					$(".musicBody").hide();
					$("#musicPageThree").show();
					$("#musicMenu").trigger("click");
					$("#scrollUp").trigger("click");
					break
				//...is Gallery
				case "musicGalleryBtn":
					$(".musicBody").hide();
					$("#musicPageFour").show();
					$("#musicMenu").trigger("click");
					$("#scrollUp").trigger("click");
					break
				//...is Contact
				case "musicContactBtn":
					$(".musicBody").hide();
					$("#musicPageFive").show();
					$("#musicMenu").trigger("click");
					$("#scrollUp").trigger("click");
					break
			}
		}
	});

	//Music page release of info
	$(".accordionTriggers").on({
		click: function() {
			//console.log($(this).text());
			switch ($(this).text()) {
				case "Instruments:":
					if ($("#instrumentCard").hasClass("hidden")) {
						$(".accordionCards").hide();
						$("#instrumentCard").show();
						if (window.innerWidth < 770) {
							scrollTo(0, 400);
						}
					} else {
						$("#instrumentCard").hide();
					}
					break
				case "On Stage:":
					if ($("#stageCard").hasClass("hidden")) {
						$(".accordionCards").hide();
						$("#stageCard").show();
						if (window.innerWidth < 770) {
							scrollTo(0, 400);
						}
					} else {
						$("#stageCard").hide();
					}
					break
				case "Recording:":
					if ($("#recordingCard").hasClass("hidden")) {
						$(".accordionCards").hide();
						$("#recordingCard").show();
						if (window.innerWidth < 770) {
							scrollTo(0, 400);
						}
					} else {
						$("#recordingCard").hide();
					}
					break
				case "Writing:":
					if ($("#writingCard").hasClass("hidden")) {
						$(".accordionCards").hide();
						$("#writingCard").show();
						if (window.innerWidth < 770) {
							scrollTo(0, 400);
						}
					} else {
						$("#writingCard").hide();
					}
					break
			}
		}
	});

	// Stage location reveals
	$(".venueLink").on("click", function () {
		switch ($(this).text()) {
			case "Hudson Valley, NY":
				$(".venueList").hide();
				$("#hudson").show();
				break
			case "New York City":
				$(".venueList").hide();
				$("#nyc").show();
				break
			case "Binghamton, NY":
				$(".venueList").hide();
				$("#bing").show();
				break
		}
	});

	// Change size of accordion reveal div for mobile
	if (window.innerWidth <= 650) {
		$(".accordionCards").removeClass("col-md-8");
		$(".accordionCards").addClass("col-md-4");
	} else if (window.innerWidth > 651) {
		$(".accordionCards").removeClass("col-md-4");
		$(".accordionCards").addClass("col-md-8");
	}

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
	$(".codePage").on("click", function () {
		if ($("#codeMenu").attr("aria-expanded") === "true")  {
			//console.log('test');
			$("#codeMenu").trigger("click");
		}
	});

	//Same as above
	$(".musicPage").on("click", function () {
		if ($("#musicMenu").attr("aria-expanded") === "true") {
			//console.log('test');
			$("#musicMenu").trigger("click");
		}
	});


	scrollUp();

});
