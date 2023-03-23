import $ from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');


  // ハンバーガーメニュー
  $(".l-header__hamburger").on('click', function () {
    $(this).toggleClass('active');
    $(".l-header__hamburger__nav").toggleClass('open');
    $('body').toggleClass('fixed');
  });

  $(".l-header__hamburger__item a").on('click', function () {
    $(".l-header__hamburger").removeClass('active');
    $(".l-header__hamburger__nav").removeClass('open');
    $("body").removeClass("fixed");
  });


    // SPページ内リンク
  const header = $('#header'); // #headerを取得

  $('a[href^="#"]').on('click', function() {
    const gap = header.outerHeight(); // #headerの高さを取得
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const position = target.offset().top - gap;
    // offset()でドキュメントの左上を起点に指定位置までの距離を取得。offset().topでY位置を取得。
    // - gapは最初に定義した#headerの高さで、スクロールした際に、header分が被ってしまうことを防ぐ。

    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });


  // スリックカルーセル
  $('.slick-latest').slick({
    autoplay: true,
    cssEase: 'linear',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }]
  });

})
