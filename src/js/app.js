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
  });
});

//SPメニューを押下で該当セクションンにスムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const target = document.querySelector(link.hash);
    const adjust = 70;
    const offsetTop = window.pageYOffset + target.getBoundingClientRect().top - adjust;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })

    if (document.getElementById('l-header__wrapper').classList.contains('l-header__close')) {
      const timerId = setInterval(() => {
        const currentScroll = window.pageYOffset;
        if ((offsetTop === 0 && currentScroll < 1) || Math.abs(currentScroll - offsetTop) < 1) {
          clearInterval(timerId);
          document.getElementById('l-header__nav').classList.remove('is-active');
          document.getElementById('l-header__wrapper').classList.remove('l-header__close');
          document.getElementById('header').classList.remove('l-header__overflow');
        }
      }, 16);
    }
  });
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


//スライドショー
//   $(document).ready(function () {
//     console.log('成功');
//     $(".u-container__position--job").slick({
//       arrows: true
//     });

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

$(function () {
  // let element = document.querySelector('div.slick-slide.slick-active');
  // element.style.width = '280px'; // 幅を280pxに設定
  // element.style.removeProperty('width'); // 幅のプロパティを削除
});
// $(function() {
//   let element = document.querySelector('div.slick-active');
//   element.style.width = '280px'; // 幅を280pxに設定
// element.style.removeProperty('width'); // 幅のプロパティを削除
// });

$(function () {
  let elements = document.querySelectorAll('div.slick-slide.slick-active');
  elements.forEach(function (element) {
    element.style.width = '280px';
  });
});
// $(function() {
//   let elements = document.querySelectorAll('div.slick-slide.slick-current.slick-active');
//   elements.forEach(function(elements) {
//     elements.style.width = '400px';
//   });
// });
// });
