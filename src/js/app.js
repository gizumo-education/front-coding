import $ from 'jquery';
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

// $(function () {
//   console.log('環境構築完了');
//   $('.c-hamburger').on('click', function () {
//     $(this).toggleClass('js-active');
//     $('.l-header__nav__list--sp').toggleClass('js-active');

//     // スクロールロックのトグル処理
//     $('body').toggleClass('u-scroll-lock');
//     if (isScrollable) {
//       $(window).on('touchmove.noScroll', function (e) {
//         e.preventDefault();
//       });
//       isScrollable = !isScrollable;
//     } else {
//       isScrollable = !isScrollable;
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  console.log('vanilla js called');
  // スライダー実装
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

  // スクロールロック系処理
  let isScrollable = true;
  const banScroll = (e) => {
    e.preventDefault();
  };

  document
    .getElementsByClassName('c-hamburger')[0]
    .addEventListener('click', function () {
      this.classList.toggle('js-active');
      document
        .getElementsByClassName('l-header__nav__list--sp')[0]
        .classList.toggle('js-active');

      // スクロールロックトグル処理;
      if (isScrollable) {
        document.addEventListener('wheel', banScroll, { passive: false });
        document.addEventListener('touchmove', banScroll, { passive: false });
        isScrollable = !isScrollable;
      } else {
        document.removeEventListener('wheel', banScroll);
        document.removeEventListener('touchmove', banScroll);
        isScrollable = !isScrollable;
      }
    });
});
