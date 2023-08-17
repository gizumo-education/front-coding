import $ from "jquery";
import "slick-carousel";



$(document).ready(function() {
  $("#drawer_toggle").click(function() {
    var isMenuOpen = $(this).hasClass("open");
    // メニューの展開/閉じる状態を切り替える
    $(this).toggleClass("open");
    $("#global_nav").toggleClass("sp_open");
    // ハンバーガーメニューを開いた時に背景を固定した
    if ($(this).hasClass("open")) {
      $("body").addClass("no-scroll");
    } else {
      $("body").removeClass("no-scroll");
    }
    // メニューを展開した状態でメニューアイテムをクリックした場合
    if (isMenuOpen) {
      $('#global_nav').removeClass('sp_open');
      $("body").removeClass("no-scroll");
    }
  });
  // <li>をクリックした際のスクロール処理
  $("#global_nav ul li a").on("click", function(event) {
    event.preventDefault();
    var targetSection = $(this).attr("href"); // クリックされたリンクのhref属性を取得
    var targetOffset = $(targetSection).offset().top; // セクションの上端までの距離
    targetOffset += -120; // スクロールした時に上に１２０px足す
    // メニューを閉じる
    $('#drawer_toggle').removeClass('open');
    $("#global_nav").removeClass("sp_open");
    $("body").removeClass("no-scroll");
    // 該当セクションにスムーススクロール
    $("html, body").animate(
      {scrollTop: targetOffset},
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
