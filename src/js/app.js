import $ from "jquery";

$(function() {
  console.log('環境構築完了');

  // ハンバーガーメニュー
  $('.c-hamburger').click(function() {
    $('.c-hamburger__patty').toggleClass('active');
    $('.p-contentsLink').toggleClass('active');
    $('body').toggleClass('u-no-scroll');
  });

  // スムーズなスクロール
  $('a[href^="#"]').click(function(event) {
    event.preventDefault();
    var target = $(this.hash);
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 400);
    }
  });
});

