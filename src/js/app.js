import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";

//ハンバーガーメニュー
$(function () {
  $("#hamburger").on("click", function () {
    $("#nav").toggleClass("is-active");
    $("#span1").toggleClass("span1");
    $("#span2").toggleClass("span2");
    $("#span3").toggleClass("span3");
    $("#body").toggleClass("fixed");
  });
  $(".p-nav__item__link").on("click", function () {
    $("#nav").removeClass("is-active");
    $("#span1").removeClass("span1");
    $("#span2").removeClass("span2");
    $("#span3").removeClass("span3");
    $("#body").removeClass("fixed");
  });

  // //スムーススクロール
  $("a[href^='#']").on("click", function (e) {
    e.preventDefault();
    const headerHeight = $(".l-header").outerHeight();
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href === "#" || href === "" ? "html" : href);
    const position = target.offset().top - headerHeight;

    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  // //スライダー
  $(".slick")
    .on("init", function (event, slick) {
      $(".slick-slide > div").addClass("slick-slide-class");
    })
    .slick({
      infinite: true,
      arrows: true,
      appendArrows: $(".p-recruit__area__wrapper"),
      prevArrow: '<div class="p-recruit__area__wrapper-arrow left"></div>',
      nextArrow: '<div class="p-recruit__area__wrapper-arrow right"></div>',
      slidesToShow: 4,
      slidesToScroll: 1,
      swipeToSlide: true,
      variableWidth: false,
      adaptiveHeight: true,
      centerMode: false,

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false,
          },
        },
      ],
    });
});
