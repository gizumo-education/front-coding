import $ from "jquery";

$(function () {
  console.log('環境構築完了');

  // Smooth Scroll
  $(function () {
    $('a[href^="#"]').on('click', function () {
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - 150;
      $('body,html').animate({ scrollTop: position }, 400, 'swing');
      return false;
    });
  });

  // slide menu
  $(function () {
    $('.p-hamburgermenu__icon').on('click', function () {
      $(".p-hamburgermenu").toggleClass("u-active");
      noScroll();
    });
  });

  function noScroll() {
    if ($(".u-active").length) {
      $("body").css('overflow', 'hidden');
    } else {
      $("body").css('overflow', 'auto');
    }
  }

});