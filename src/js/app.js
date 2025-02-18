import $ from "jquery";
import "slick-carousel";

$(function() {
  console.log('環境構築完了');
})

  $('.p-main__recruit__container__wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: $('.c-arrowBox'),
    prevArrow: '<div class="c-slideArrow c-prevArrow"></div>',
    nextArrow: '<div class="c-slideArrow c-nextArrow"></div>',
  });