import $ from "jquery";
import "slick-carousel";

$(function () {

  const toggleMenu = function () {
    $(".l-header__menu").toggleClass("is-open");
    $(".l-header__hamburger").children("span").toggleClass("is-open");
    $("body").css("overflow") === "hidden"
      ? $("body").css("overflow", "visible")
      : $("body").css("overflow", "hidden");
  };

  $(".l-header__hamburger").on("click", toggleMenu);

  $('a[href^="#"]').on("click", function () {
    toggleMenu();

    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const position = target.offset().top - $(".l-header").outerHeight();
    const speed = 500;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
    return false;
  });

  $(function () {
    $(".p-new-job__lists").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
});
