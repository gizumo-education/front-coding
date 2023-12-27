import $ from "jquery";
import 'slick-carousel';


$(function () {
  $('#c-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.l-header__hamburger').click(function () {
    $('.l-header__hamburger, .l-header__menu').toggleClass('active');
  });

  $('#page-link a[href*="#"]').click(function () {
    const elmHash = $(this).attr('href');
    const headerHeight = $('.l-header').outerHeight();
    $('html, body').animate({
      scrollTop: $(elmHash).offset().top - headerHeight
    }, 500);
    $('.l-header__hamburger, .l-header__menu').toggleClass('active');
  });
})