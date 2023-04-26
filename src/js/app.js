import $ from "jquery";
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';

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
    var adjust = -100;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, 700, 'swing');
    return false;
  });
});

$(function() {
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }],
  });
})
