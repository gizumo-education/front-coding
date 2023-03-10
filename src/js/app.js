import $ from "jquery";
import "slick-carousel";

$(function () {
  // Smooth Scroll
  $(function () {
    $('a[href^="#"]').on('click', function () {
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - $(".l-header").height();
      $('body,html').animate({ scrollTop: position }, 600, 'swing');
      $(".p-hamburgermenu").toggleClass("u-active__menu");
      $(".p-hamburgermenu__icon").toggleClass("u-active__close");
      noScroll();
      return false;
    });
  });

  // slide menu
  $(function () {
    $(".p-hamburgermenu__icon").on("click", function () {
      $(".p-hamburgermenu").toggleClass("u-active__menu");
      $(".p-hamburgermenu__icon").toggleClass("u-active__close");
      $(".p-hamburgermenu").addClass("u-active__transitionTime");
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
  const breakPointWidth = 768;
  let windowWidth = window.innerWidth;
  const slideNum = $(".p-information__list").length;

  function slickPC() {
    $(".js-slider").not('.slick-initialized').slick({
      infinite: true,
      arrow: true,
      slidesToShow: 4,
      slidesToScroll: 4,
    });
  }

  function slickSP() {
    $(".js-slider").not('.slick-initialized').slick({
      infinite: true,
      arrow: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }

  function slickConfirm() {
    if ($('.slick-initialized').length > 0) {
      $('.slick-initialized').slick('unslick');
    } else {
      $('.slick').slick('unslick');
    }
  
    if (windowWidth >= breakPointWidth) {
      if (slideNum > 4) {
        slickPC();
      }
    } else {
      if (slideNum > 1) {
        slickSP();
      }
    }
  }

  slickConfirm();

  $(window).on('resize', function () {
    windowWidth = window.innerWidth;
    slickConfirm();
  });
});
