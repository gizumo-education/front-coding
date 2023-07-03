import $ from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');
  $('.l-header-hamburger').click(function() {
    console.log('クリックされたよ！')
    $('body, .l-header-hamburger-line, .l-header-slide-menu').toggleClass('active');
  });
  $('a[href^="#"]').click(function(event) {
    event.preventDefault();
    var target =$(this).attr("href");
    $('body,html').animate({
      scrollTop: $(target).offset().top - 90
    },
    'swing');
    $('body, .l-header-hamburger-line, .l-header-slide-menu').toggleClass('active');
  });
  $('.p-news-contents').slick({
    adaptiveHeight: true,
    variableWidth: true,
    dots: true,
    slidesToShow: 1,
    dots: false,
    zIndex: 0,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
        slidesToShow: 1,
        fade: true,
        variableWidth: false,
        },
      },
    ],
  });
});