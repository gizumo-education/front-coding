import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

// バニラjs系
document.addEventListener('DOMContentLoaded', function () {
  console.log('vanilla js called');

  // スライダー実装
  Swiper.use(Navigation);
  new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 27,
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // ハンバーガーメニュー系の処理ここから↓
  const hamburger = document.getElementsByClassName('c-hamburger')[0];

  // 開閉処理の定義
  let isScrollable = true;
  const banScroll = (e) => {
    e.preventDefault();
  };
  const toggleHamburger = () => {
    hamburger.classList.toggle('js-active');
    document
      .getElementsByClassName('l-header__nav__list--sp')[0]
      .classList.toggle('js-active');
    if (isScrollable) {
      document.body.style.overflowY = 'hidden';
      document.addEventListener('wheel', banScroll, { passive: false });
      document.addEventListener('touchmove', banScroll, { passive: false });
    } else {
      document.body.style.overflowY = '';
      document.removeEventListener('wheel', banScroll);
      document.removeEventListener('touchmove', banScroll);
    }
    isScrollable = !isScrollable;
  };

  // 開閉処理のイベント登録
  hamburger.addEventListener('click', function () {
    toggleHamburger();
  });

  // ハンバーガーメニュー内のリンククリック時、ハンバガーメニューを閉じる処理
  const listSpItems = [
    ...document.getElementsByClassName('l-header__nav__list--sp__item'),
  ]; // 配列に変換

  // イベント登録
  listSpItems.forEach((item) => {
    item.addEventListener('click', function () {
      toggleHamburger();
    });
  });
});
