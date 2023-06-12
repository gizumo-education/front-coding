import $ from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');
})


// ハンバーガーをクリック後Xに
$(function () {
  $('.c-button__hamburger__bar').on('click', function () {
    $('.c-button__hamburger__bar__span').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })
});


// 背景固定
var state = false;
var scrollpos;
$('.c-button__hamburger__bar').on('click', function(){
  $('ul').toggleClass('open');
  if(state == false) {
    scrollpos = $(window).scrollTop();
    $('body').addClass('fixed').css({'top': -scrollpos});
    state = true;
  } else {
    $('body').removeClass('fixed').css({'top': 0});
    state = false;
  }
});


// リンククリック時ハンバーガーメニュー閉じて移動
$('.c-button__hamburger__content__list__title').on('click', function(event) {
  $('.c-button__hamburger__bar').trigger('click');
});

// ページ内へスクロール
$('a[href^="#"]').click(function () {
  var adjust = 100;
  var speed = 500;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top - adjust;
  $('body,html').animate({ scrollTop: position }, speed, 'swing');
  return false;
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
        centerPadding:"0", 
      },
      },
    ],
  });
