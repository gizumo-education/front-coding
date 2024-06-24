const $ = require('jquery');
require('slick-carousel');

$(function () {
  console.log('環境構築完了');
})

//メニュー開閉時のハンバーガー
$(function () {
  $(".l-header__wrapper").click(function () {
    $(this).toggleClass("l-header__close");
  });


$(function () {
  // ハンバーガーメニューのクリックイベント
  $(".l-header__wrapper").click(function () {
    $(".l-header__wrapper").toggleClass("is-active");
    $(".l-header__nav").toggleClass("is-active");
  });
});

//メニュー表示時は背景がスクロールしない
$(document).ready(function () {
  $('.l-header__wrapper').click(function () {
    $('body').toggleClass('l-header__overflow');
  });

  //スライドショー
//   $(document).ready(function () {
//     console.log('成功');
//     $(".u-container__position--job").slick({
//       arrows: true
//     });
//   });
});

//スライドショー
// $(function () {
//   console.log('成功２');
//   $('.l-inner__job--container').slick({
//     infinite: true,
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       arrows: true,
//       appendArrows: $('.c-button__box'),
//       prevArrow: '<div class="slide-arrow prev-arrow"></div>',
//       nextArrow: '<div class="slide-arrow next-arrow"></div>'
//   });
// });

//SPメニューを押下で該当セクションンにスムーススクロール
function linkscroll(target) {
  $('html, body').animate({ scrollTop: $(target).offset().top }, 800, 'swing');
}

$('#link__id1').on(function () {
  linkscroll('#target__id1');
});
$('#link__id2').on(function () {
  linkscroll('#target__id2');
});
$('#link__id3').on(function () {
  linkscroll('#target__id3');
});
$('#link__id4').on(function () {
  linkscroll('#target__id4');
});
$('#link__id5').on(function () {
  linkscroll('#target__id5');
});


// スライドショー
$('.l-inner__job--container').not('slick-initialized').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  responsive: [{
    breakpoint: 1199,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    },
  },
    {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
  ]
});

// $(function() {
//   $('body *').removeAttr('style');
// });

// $('body *').removeAttr('width');
// 		$('body *').removeAttr('height');
// $(".slick-slide .slick-current .slick-active").removeAttr("width");
// slick-slide slick-current slick-active

// $(function() {
//   let element = document.querySelector('div.slick-slide.slick-active');
//   element.style.width = null;
// });

// $(function() {
// element.style.width = '280px';
//     let element = document.querySelector('div.slick-slide.slick-active');
//     element.style.removeProperty('width');
// });

$(function() {
  // let element = document.querySelector('div.slick-slide.slick-active');
  // element.style.width = '280px'; // 幅を280pxに設定
  // element.style.removeProperty('width'); // 幅のプロパティを削除
});
// $(function() {
//   let element = document.querySelector('div.slick-active');
//   element.style.width = '280px'; // 幅を280pxに設定
  // element.style.removeProperty('width'); // 幅のプロパティを削除
// });

$(function() {
  let elements = document.querySelectorAll('div.slick-slide.slick-active');
  elements.forEach(function(element) {
    element.style.width = '280px';
  });
});
// $(function() {
//   let elements = document.querySelectorAll('div.slick-slide.slick-current.slick-active');
//   elements.forEach(function(elements) {
//     elements.style.width = '400px';
//   });
// });
});
