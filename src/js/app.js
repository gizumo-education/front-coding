import $ from "jquery";
import "slick-carousel";

$(document).ready(function() {
  // ハンバーガーメニューをクリックしたとき
  $("#drawer_toggle").click(function() {
    const isMenuOpen = $(this).hasClass("open");
    // メニューの展開・閉じる状態の切り替え
    $(this).toggleClass("open");
    $("#global_nav").toggleClass("sp_open");
    // ハンバーガーメニューを開いた時に背景を固定
    if ($(this).hasClass("open")) {
      $("body").addClass("no-scroll");
    } else {
      $("body").removeClass("no-scroll");
    }
  });
  // ＜li＞をクリックした際のスクロール処理
  $("#global_nav ul li a").on("click", function(event) {
    event.preventDefault();
    // メニューを閉じる
    $('#drawer_toggle').removeClass('open');
    $("#global_nav").removeClass("sp_open");
    $("body").removeClass("no-scroll");
    // クリックされたリンクのhref属性を取得
    const targetSection = $(this).attr("href");
    // スクロールした時に上から120px離す
    $("html, body").animate(
      {scrollTop: $(targetSection).offset().top - 120},
      300
    );
  });
});

$(function(){
  // スライダーの画像のところ
  $("#slider").slick({
    adaptiveHeight: true,
    variableWidth: true,
    arrows: true,
    autoplay: true, //自動再生
    speed: 1000,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
  });
});
