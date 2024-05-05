import $ from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');
})

$(function () {
  $('.slick-recruitment').slick({
    prevArrow: '<img src="./img/icon/news-page-arrow.png"></img>',
    nextArrow: '<img src="./img/icon/news-page-arrow.png"></img>',
    slidesToShow: '4',
  });
});