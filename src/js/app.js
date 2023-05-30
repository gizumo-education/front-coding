import $ from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');

/* ハンバーガーメニューの操作 */
  $('.l-header__nav__burgermenu').click(function() {
    $('.l-header__nav__burgermenu__bar').toggleClass('active');
    $('.l-header__dropdown').toggleClass('no-scroll');
    $.popSlideLeft();
    $.preventScroll();
  });

/* 任意の要素へ移動 */
  $('.l-header__dropdown__list li a').click(function() {
    var getHash = $(this).attr('href');
    var headerH = $('.l-header').outerHeight(true);
    if($('.l-header').length) {
      var pos = Math.round($(getHash).offset().top-headerH);
    }
    $('body,html').animate({scrollTop: pos}, 300);
    return false;
  });

  /* slick */
  $('#slideshow').slick({
    infinite: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 767,
        settings: {
        slidesToShow: 1,
        },
      },
    ],
  });

  /* カスタムメソッド */
  $.extend({
    popSlideLeft() {
      if ($('.l-header__nav__burgermenu__bar').hasClass('active')) {
        $('.l-header__dropdown').animate({ left: 0 }, 300);
      } else {
        $('.l-header__dropdown').animate({ left: '4rem' }, 300);
      }
    },
    preventScroll() {
      if($(".no-scroll").length) {
        $("body").css('overflow','hidden');
      } else {
        $("body").css('overflow','auto');
      }
    },
  });
});