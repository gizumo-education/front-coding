import $ from "jquery";
import "slick-carousel";

$(function () {
  console.log("環境構築完了");
  $('a[href^="#"]').on("click", function () {
    let speed = 500;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
  const menuBtn = $("#hamburger-btn");
  const spMenu = $("#hamburger-menu");
  const html = $("html");
  const body = $("body");
  const anchorLink = $(".anchorLink");
  menuBtn.on("click", function () {
    spMenu.toggleClass("active");
    html.toggleClass("active");
    body.toggleClass("active");
  });
  anchorLink.on("click", function () {
    spMenu.removeClass("active");
    html.removeClass("active");
    body.removeClass("active");
  });

  $(".p-new__cards").slick({
    infinite: true,
    autoplay: false,
    arrows: true,
    slidesToShow: 4,
    prevArrow: '<button class="slide-arrow p-new__prev"></button>',
    nextArrow: '<button class="slide-arrow p-new__next"></button>',
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 1,
          initialSlide: 0,
        },
      },
    ],
  });
});
