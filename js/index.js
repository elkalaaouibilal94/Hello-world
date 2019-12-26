$(document).ready(function() {
    
    $(window).scroll(function() {
        if ($(document).scrollTop() > 980) {
          $('nav').addClass('transparent');
        } else {
          $('nav').removeClass('transparent');
        }
      });

      $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
      });  

      $( "#FirstTimelineList li" ).hover(function() {
          $(this).toggleClass('special');
          
        });

        $( "#SecondTimelineList li" ).hover(function() {
          $(this).toggleClass('special');
        });

     


});

