import $ from "jquery";
import 'slick-carousel';

$(function () {
  console.log('環境構築完了');
})

// ハンバーガーメニュー
$(".toggle").on("click", function () {
  $(".toggle, .hamburger").toggleClass("show");
  if ($(".hamburger").hasClass("show")) {
    $("body").css("overflow", "hidden");
  } else {
    $("body").css("overflow", "");
  }
});

$(".hamburger_menu_li a").on("click", function () {
  $(".toggle, .hamburger").removeClass("show");
  $("body").css("overflow", "");
});

// ナビゲーション
$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    var target = $(this.getAttribute('href'));
    if (target.length) {
      var headerHeight = 100;
      var targetOffset = target.offset().top - headerHeight;
      $('html, body').stop().animate({
        scrollTop: targetOffset
      }, 500);
    }
  });
});

// スライダー
$('.slider').slick({
  autoplay: false,//自動的な動き
  infinite: true,//スライドをループ
  slidesToShow: 4,//スライドを画面
  slidesToScroll: 1,//1回のスクロール
  prevArrow: '<div class="slick-prev"></div>',//矢印部分Preview
  nextArrow: '<div class="slick-next"></div>',//矢印部分Next
  responsive: [
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }
]
});