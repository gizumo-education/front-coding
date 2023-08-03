import $ from "jquery";
import "slick-carousel";

$(function () {
  console.log("環境構築完了");

  $('a[href^="#"]').on("click", function () {
    const speed = 400;
    const href = $(this).attr("href");
    const target = $(href === "#" || href === "" ? "html" : href);
    const position = target.offset().top;
    $("body,html").animate({ scrollTop: position - 75 }, speed, "swing");
    return;
  });

  $(".l-header__toggle-box").on("click", function () {
    $("body").toggleClass("is-open");
    $(".l-header__nav-content").toggleClass("is-open");
  });

  $(".l-header__menu-item a").on("click", function () {
    $(".l-header__toggle-box").trigger("click");
  });

  $(".p-news__inner__list").slick({
    adaptiveHeight: true,
    variableWidth: true,
    prevArrow: "<button type=button class=slick-prev></button>",
    nextArrow: "<button type=button class=slick-next></button>",
    speed: 300,
    slidesToShow: 1,
  });
});
