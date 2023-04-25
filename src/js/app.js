import $ from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');
})

$(function() {
  $('.l-header__sp').click(function() {
    $(this).toggleClass('active');
    $('.l-header__nav').toggleClass('navActive');
  });
  $('.l-header__nav a').click(function() {
    $('.l-header__sp').removeClass('active');
    $('.l-header__nav').removeClass('navActive');
  });
})

$(function() {
  $('a[href^="#"]').click(function() {
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, 400, 'swing');
    return false;
  });
});
