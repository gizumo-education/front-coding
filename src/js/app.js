import $ from "jquery";
import { scrollToTheSection, toggleHamburgerMenuButton, toggleMenu } from "./functions";

$(function() {
  // ハンバーガーメニュークリック時 表示/非表示切り替え
  $("#hamburger-menu").on('click',function() {
    toggleMenu()
    toggleHamburgerMenuButton($(this))
  })

  // ハンバーガーメニュー内ページ内リンク スムーススクロール
  $(".l-header__sp-menu__items")
  .children()
  .on('click',function() {
    scrollToTheSection($(this))
    toggleMenu()
    toggleHamburgerMenuButton($("#hamburger-menu"))
  })
  // 画面幅を取得
  let windowWidth = $(window).width();
  let tabFontSize = windowWidth / 12; // タブのフォントサイズを算出

  // Swiperのbreakpointsプロパティ値
  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 4,
      spaceBetween: tabFontSize * 0.2, // タブのフォントサイズをspaceBetweenに設定
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  };

  // カルーセルスライダー
  const swiper = new Swiper('.p-job-list__items', {
    loop: true,
    breakpoints,
  })

  $('.p-job-list__back-button')
  .on('click', function() {
    swiper.slidePrev();
  })

  $('.p-job-list__forward-button')
  .on('click', function() {
    console.log(swiper.slideNext());
    swiper.slideNext();
  })

  $(window).on('resize', function() {
    // 画面幅を再取得
    windowWidth = $(window).width();
    // タブのフォントサイズを再算出
    tabFontSize = windowWidth / 12;
    // レスポンシブ設定でspaceBetweenを再設定
    swiper.params.breakpoints = breakpoints
    swiper.update();
  })
})
