import $ from "jquery";
import 'slick-carousel'

$(function() {
  console.log('環境構築完了');

  //メニュースクロールイン
  const hamMenu = document.querySelector(".l-header__hamburger");
  const navMenu = document.querySelector(".l-header__nav-menu");

  hamMenu.addEventListener("click", (event) => {
    hamMenu.classList.toggle('l-header__hamburger__active');
    navMenu.classList.toggle('l-header__nav-menu__active');
    if (document.querySelector('.l-header__nav-menu__active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  })

  //該当セクションスクロール
  $('a[href^="#"]').click(function () {
    const speed = 600;
    let href = $(this).attr("href");
    let target = $(href === "#" || href === "" ? "html" : href);
    let position = target.offset().top;
    $("body,html").animate({ scrollTop: position - 60 }, speed, "swing");
    hamMenu.classList.remove('l-header__hamburger__active');
    navMenu.classList.remove('l-header__nav-menu__active');
    document.body.style.overflow = 'auto';
    return false;
  });

  //無限スライダー
  $('#p-news__wrapper').slick({
    autoplay: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});
