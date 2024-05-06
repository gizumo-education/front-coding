import $ from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');
})

$(function () {
  $('.slick-recruitment').slick({
    prevArrow: '<img src="./img/icon/news-page-arrow.png" alt="スクロールボタン左矢印" class="p-scloll__size"></img>',
    nextArrow: '<img src="./img/icon/news-page-arrow.png" alt="スクロールボタン左矢印" class="p-scloll__size__second"></img>',
    slidesToShow: '4',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
        slidesToShow: 1,
        },
      },
    ],
    responsive: [
      {
        breakpoint: 767,
        settings: {
        slidesToShow: 1,
        },
      },
    ],
  });
});