import $ from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');
})


// ハンバーガーをクリック後Xに
$(function() {
  $('.c-button__hamburger__bar').on('click', function() {
    $('.c-button__hamburger__bar__span').toggleClass('open'); 
  })
});


// 背景固定
$(function () {
  $(".c-button__hamburger__bar").click(function() {
    $(this).toggleClass("active");
    $(".c-button__hamburger__content").toggleClass("active");
    $("body").toggleClass("active");
  });
});


// リンククリック時ハンバーガーメニュー閉じて移動
$('.c-button__hamburger__content__list__title').on('click', function() {
  $('.c-button__hamburger__bar').trigger('click');
});

// ページ内へスクロール
$('a[href^="#"]').click(function() {
  const adjust = 60;
  const speed = 500;
  const href = $(this).attr("href");
  const target = $(href == "#" || href == "" ? 'html' : href);
  const position = target.offset().top - adjust;
  $('body,html').animate({ scrollTop: position }, speed, 'swing');
  return;
});



// カルーセル
  $('.p-offer__newoffer__lists').slick({
    variableWidth: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    
    responsive: [
      {
      breakpoint: 767,
      settings: {
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      },
    ],
  });
