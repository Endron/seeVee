$(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('header').addClass('shrink');
      $('.cv').addClass('shrink-cv');
    } else {
      $('header').removeClass('shrink');
      $('.cv').removeClass('shrink-cv');
    }
  });
});