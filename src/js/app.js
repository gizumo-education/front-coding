import $ from "jquery";

$(function() {
  console.log('環境構築完了');
})

const ham = $('#js-header__nav__toggle');
const nav = $('#js-header__nav');
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
  ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
});

const header = $('#header');

$('a[href^="#"]').on('click', function() {
  const gap = header.outerHeight();
  const speed = 500;
  const href = $(this).attr("href");
  const target = $(href == "#" || href == "" ? "html" : href);
  const position = target.offset().top - gap;
  
  $("html, body").animate({ scrollTop: position }, speed, "swing");
  return false;
});