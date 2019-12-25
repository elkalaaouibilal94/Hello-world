$(document).ready(function() {
    
    $(window).scroll(function() {
        if ($(document).scrollTop() > 980) {
          $('nav').addClass('transparent');
        } else {
          $('nav').removeClass('transparent');
        }
      });
});