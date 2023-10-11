import $, { event } from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');
})

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
  autoplay: false,//自動的な動き
  infinite: true,//スライドをループ
  slidesToShow: 4,//スライドを画面
  slidesToScroll: 1,//1回のスクロール
  variableWidth:false,
  prevArrow: '<button type="button" class="slick-arrow slick-prev">Previous</button>',//矢印部分Preview
  nextArrow: '<button type="button" class="slick-arrow slick-next">Next</button>',//矢印部分Next
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