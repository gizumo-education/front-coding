import $ from "jquery";
import "slick-carousel";

$(function() {

  $('.c-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }],
    prevArrow: '<button class="c-prev-arrow"></button>',
    nextArrow: '<button class="c-next-arrow"></button>',
  });

  $('.l-header__hamburger').click(function() {
  $('.l-header__hamburger').toggleClass('active');
  $('.c-hamMenu').toggleClass('open');

  if ($("body").css("overflow") === "hidden") {
    $("body").css({ height: "", overflow: "" });
  } else {
    $("body").css({ height: "100%", overflow: "hidden" });
  }
  });

  $('.c-hamMenu__text').click(function() {
    $('.c-hamMenu').removeClass('open');
  });
})
