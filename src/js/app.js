import $ from "jquery";
import "slick-carousel";

$(function () {
  // Smooth Scroll
  $(function () {
    $('a[href^="#"]').on('click', function () {
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - 150;
      $('body,html').animate({ scrollTop: position }, 600, 'swing');
      return false;
    });
  });

  // slide menu
  $(function () {
    $('.p-hamburgermenu__icon').on('click', function () {
      $(".p-hamburgermenu").toggleClass("u-active__menu");
      $(".p-hamburgermenu__icon").toggleClass("u-active__close");
      noScroll();
    });
  });

  // no scroll
  function noScroll() {
    if ($(".u-active__menu").length) {
      $("body").css('overflow', 'hidden');
    } else {
      $("body").css('overflow', 'auto');
    }
  }

  // slick
  $('.responsive').slick({
    infinite: true,
    arrow: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          arrow: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});