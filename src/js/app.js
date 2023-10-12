import $, { event } from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');
  //ハンバーガーメニューの処理
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
    console.log(hamMenu)
    console.log(navMenu)
  })

  //スライダー表示処理
  $('.p-recruit__lists').slick({
    autoplay: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-arrow slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next">Next</button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
  // ページ内スクロール
  $('a[href^="#"]').click(function () {
    const speed = 600;
    let href = $(this).attr("href");
    let target = $(href === "#" || href === "" ? "html" : href);
    let position = target.offset().top;
    $("body,html").animate({ scrollTop: position - 80 }, speed, "swing");
    hamMenu.classList.remove('l-header__hamburger__active');
    navMenu.classList.remove('l-header__nav-menu__active');
    document.body.style.overflow = 'auto';
    return false;
  });
})
