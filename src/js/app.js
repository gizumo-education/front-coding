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

  // ハンバーガーメニュー系処理
  const hamburger = document.getElementsByClassName('c-hamburger')[0];

  // 開閉処理
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
      document.addEventListener('wheel', banScroll, { passive: false });
      document.addEventListener('touchmove', banScroll, { passive: false });
      isScrollable = !isScrollable;
    } else {
      document.removeEventListener('wheel', banScroll);
      document.removeEventListener('touchmove', banScroll);
      isScrollable = !isScrollable;
    }
  };

  // スクロールロック系処理
  hamburger.addEventListener('click', function () {
    toggleHamburger();
  });

  // ハンバーガーメニュー内のリンククリック時、ハンバガーメニューを閉じる処理
  const listSpItems = [
    ...document.getElementsByClassName('l-header__nav__list--sp__item'),
  ]; // HTMLCollectionを配列に変換

  listSpItems.forEach((item) => {
    item.addEventListener('click', function () {
      toggleHamburger();
    });
  });
});
