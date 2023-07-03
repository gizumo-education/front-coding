import $ from "jquery";

$(function() {
  console.log('環境構築完了');
})

$('a[href^="#"]').click(function () {
  var speed = 400;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? "html" : href);
  var position = target.offset().top;
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});

$('.l-header__hamburger').on('click', function(){
  $(this).toggleClass('is-active');
  $('.sp-menu').toggleClass('show-menu');
  $('body').toggleClass('scroll-prevent');
});

$('.sp-menu ul li a').click(function() {
  $('.l-header__hamburger').trigger('click');
});

