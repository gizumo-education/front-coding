import $ from "jquery";

$(function () {
  console.log('環境構築完了');

  //ハンバーガーメニュー
  const ham = $('#js-hamburger');
  const nav = $('#js-nav');
  ham.on('click', function () {
    ham.toggleClass('active');
    nav.toggleClass('active');

  });

})
