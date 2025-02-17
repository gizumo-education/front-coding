import $ from "jquery";
import "slick-carousel";

$(function() {
  console.log('環境構築完了');
})

  $('.p-main__recruit__container__wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  });