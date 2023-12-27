import $ from "jquery";
import 'slick-carousel';


$(function () {
  console.log('環境構築完了');
})



// カルーセル
$('#c-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});



// ハンバーガーメニュー
$(function () {
  $('.l-header__hamburger').click(function () {
    $('.l-header__hamburger, .l-header__menu').toggleClass('active');
  });
});



// スムーススクロール
$('#page-link a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href');
  var pos = $(elmHash).offset().top;
  $('body,html').animate({ scrollTop: pos }, 500);
  $('.l-header__hamburger, .l-header__menu').toggleClass('active');
  return false;
});
