
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
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const target = document.querySelector(link.hash);
    const adjust = 70;
    const offsetTop = window.pageYOffset + target.getBoundingClientRect().top - adjust;

    window.scroll({
      top: offsetTop,
      behavior: 'smooth',
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

// スライドショー
$('.l-inner__job--container').
  filter(function () { return !$(this).hasClass('slick-initialized'); }).slick({

    infinite: true,
    slidesToShow: 4,
    respondTo: 'slider',
    slidesToScroll: 1,

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
      },
    },
    ]
  });

  // PC_新着求人のwidth
  $(function () {
    let elementsWidth = document.querySelectorAll('div.slick-slide.slick-current.slick-active');
    elementsWidth.forEach(function (element) {
    element.style.width = '300px';
    });
    });