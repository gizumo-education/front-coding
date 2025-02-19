import $ from "jquery";
import "slick-carousel";

$(function() {
  console.log('環境構築完了');
})

  $('.c-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="c-prev-arrow"></button>',
    nextArrow: '<button class="c-next-arrow"></button>',
  });