import $ from "jquery";
import "slick-carousel";

$(function () {
  console.log("環境構築完了");
  $('a[href^="#"]').on("click", function () {
    const adjust = 100;
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href === "#" || href === "" ? "html" : href);
    const position = target.offset().top - adjust;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
  const menuBtn = $("#hamburger-btn");
  const spMenu = $("#hamburger-menu");
  const isClose = $(".hamburger-close");
  const isNone = $(".hamburger-none");
  const html = $("html");
  const body = $("body");
  const anchorLink = $(".anchorLink");

  menuBtn.on("click", function () {
    menuBtn.toggleClass("open");
    spMenu.toggleClass("active");
    isClose.toggleClass("is-close");
    isNone.toggleClass("is-none");
    html.toggleClass("active");
    body.toggleClass("active");
  });

  anchorLink.on("click", function () {
    spMenu.removeClass("active");
    menuBtn.removeClass("open");
    isClose.removeClass("is-close");
    isNone.removeClass("is-none");
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
