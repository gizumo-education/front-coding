import $ from "jquery";
import 'slick-carousel';

$(function () {
  console.log('環境構築完了');
})

window.addEventListener('load', () => {
  $('.slick').slick({
    arrows: true,
    slidesToShow: 4,
    infinite: true,
    swipeToSlide: false,
    accessibility: true,
    appendArrows: $('.is-relative'),
    prevArrow: '<div class="prev-arrow"></div>',
    nextArrow: '<div class="next-arrow"></div>',
    variableWidth: true,
  });
});