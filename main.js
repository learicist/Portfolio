$(document).ready(function() {
  $(".dropdown").mouseenter(function() {
    $(this).css("background-color", "white");
  });
  
  $(".dropdown").mouseleave(function() {
    $(this).css("background-color", "black");
  });
  
  $("#myName").mouseenter(function() {
    $(this).css("background-color", "white");
    $(this).css("color", "black");
  });
  
  $("#myName").mouseleave(function() {
    $(this).css("background-color", "#3374ad");
    $(this).css("color", "white");
  });
  
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#scrollUp').fadeIn(200);    // Fade in the arrow
    } else {
        $('#scrollUp').fadeOut(200);   // Else fade out the arrow
    }
  }); 
  
  $('#scrollUp').click(function() {      // When arrow is clicked
    $('body, html').animate({
        scrollTop : 0                       // Scroll to top of body
      }, 500);
    }); 
  
  
});

