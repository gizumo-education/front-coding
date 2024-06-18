import $ from "jquery";

$(function () {
  console.log('環境構築完了');
})

//メニュー開閉時のハンバーガー
$(function () {
  $(".l-header__wrapper").click(function () {
    $(this).toggleClass("l-header__close");
  });
});

$(function () {
  // ハンバーガーメニューのクリックイベント
  $(".l-header__wrapper").click(function () {
    $(".l-header__wrapper").toggleClass("is-active");
    $("#nav").toggleClass("is-active");
  });
});

//メニュー表示時は背景がスクロールしない
$(document).ready(function () {
  $('.l-header__wrapper').click(function () {
    $('body').toggleClass('l-header__overflow');
  });
});
