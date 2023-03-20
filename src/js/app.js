import $ from 'jquery';
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

$(function () {
  console.log('環境構築完了');
  $('.c-hamburger').on('click', function () {
    $(this).toggleClass('js-active');
    $('.l-header__nav__list--sp').toggleClass('js-active');

    // スクロールロックのトグル処理
    if ($('body').css('overflow-y') === 'visible') {
      $('body').css('overflow-y', 'hidden');
    } else {
      $('body').css('overflow-y', 'visible');
    }

    //
  });
});

// スライダー実装ここから
document.addEventListener('DOMContentLoaded', function () {
  console.log('vanilla js called');
  Swiper.use(Navigation);
  new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
