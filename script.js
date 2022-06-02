'use strict';

$(function() {
  $('.bl_hamburger').on('click', function() {
    $('.bl_hamburger').toggleClass('is_active');
    $('.bl_headerNav').toggleClass('is_active');
  });
});

$(function() {
  $('#button').hover(function() {
    $('.bl_headerNav_btn_wrapper').stop().slideToggle(200);
  });
});
