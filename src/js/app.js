import $ from "jquery";
import 'slick-carousel';

// ハンバーガーメニュー
$(function () {
  const ham = document.querySelector('.l-header__hamburger');
  const nav = document.querySelector('.l-header__sp-nav');

  ham.addEventListener('click', function () {
    ham.classList.toggle('active');
    nav.classList.toggle('active');

    if ($('body').css('overflow') === 'hidden') {
      $('body').css({ overflow: '' });
    } else {
      $('body').css({ overflow: 'hidden' });
    }
  });
});

// カルーセル
$(function () {
  $('.slick-carousel').slick({
    swipeToSlide: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      }
    ],
  });
});