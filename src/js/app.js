import $ from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');

/* ハンバーガーメニューの操作 */
  $('.l-header__nav__burgermenu').click(() => {
    $('.l-header__nav__burgermenu__bar').toggleClass('active');
    $('.l-header__dropdown').toggleClass('no-scroll');
    $.popSlideLeft();
    $.preventScroll();
  });

/* 任意の要素へ移動 */
  var locationTop = $('.p-keyvisual').offset().top;
  var locationNews = $('.p-news').offset().top;
  var locationSupport = $('.p-support').offset().top;
  var locationProcess = $('.p-process').offset().top;
  var locationGuidance = $('.p-guidance').offset().top;

  $('#scroll-keyvisual').click(() => {
    $(window).scrollTop(locationTop);
  });
  $('#scroll-news').click(() => {
    $(window).scrollTop(locationNews);
  });
  $('#scroll-support').click(() => {
    $(window).scrollTop(locationSupport);
  });
  $('#scroll-process').click(() => {
    $(window).scrollTop(locationProcess);
  });
  $('#scroll-guidance').click(() => {
    $(window).scrollTop(locationGuidance);
  });
})

/* スライドショーの操作 */
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

$('.slick-slide').removeAttr('style');

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