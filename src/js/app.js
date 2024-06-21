import $ from "jquery";
import slick from "slick-carousel";

$(function() {
  $('.l-header__hamburger').click(function() {
    $('.l-header__hamburger').toggleClass('active');
    $('.l-header__sp-nav').toggleClass('active');

    if ($("body").css("overflow") === "hidden") {
      $("body").css({ height: "", overflow: "" });
    } else {
      $("body").css({ height: "100%", overflow: "hidden" });
    }
  });

  $('a[href^="#"]').click(function () {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
  });

  $('.p-newinfo__list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="p-newinfo__back-button"></button>',
    nextArrow: '<button class="p-newinfo__next-button"></button>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }]
  });
});