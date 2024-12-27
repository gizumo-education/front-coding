import $ from "jquery";
import 'slick-carousel';

$(function () {
  console.log('環境構築完了');

  //スライダー
  $(".slick-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
    appendArrows: $('.arrow_box'),
    prevArrow: '<div class="slide-arrow prev-arrow"></div>',
    nextArrow: '<div class="slide-arrow next-arrow"></div>',

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });


  // ハンバーガーメニュー
  const ham = document.querySelector('.l-header__hamburger');
  const nav = document.querySelector('.l-header__nav-sp');
  const body = document.querySelector('body');

  ham.addEventListener('click', function () {
    ham.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('active');
  });


  // ページ内リンク
  $('.l-header__nav-sp__items a[href^="#"]').click(function () {
    var adjust = 80;
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
})

