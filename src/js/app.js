import $ from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');

  // ハンバーガーメニュー
  $('.c-hamburger').click(function() {
    $('.c-hamburger__patty').toggleClass('active');
    $('.p-contentsLink').toggleClass('active');
    $('body').toggleClass('u-no-scroll');
  });

// スクロール
$('a[href^="#"]').click(function(event) {
  event.preventDefault();
  const target = $(this.hash);
  const headerHeight = $('.l-header').outerHeight();
  if (target.length) {
    $('html, body').animate({
      scrollTop: target.offset().top - headerHeight
    }, 400, function() {
      $('.c-hamburger__patty').removeClass('active');
      $('.p-contentsLink').removeClass('active');
      $('body').removeClass('u-no-scroll');
    });
  }
});

  // スライダー
  $('.p-job-file').slick({
    prevArrow: '<button class="p-job-file__arrow-btn c-circle-button"><span class="c-left-arrow"></span></button>',
    nextArrow: '<button class="p-job-file__arrow-btn c-circle-button"><span class="c-right-arrow"></span></button>',
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
