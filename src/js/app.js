import $ from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');
})

$('.slider').slick({
  infinite: true,
  variableWidth: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button type=button class=slick-prev><div class="slick-arrow-left"></div></button>',
  nextArrow: '<button type=button class=slick-next><div class="slick-arrow-right"></div></button>',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

function menuOpen() {
  $('.l-header__sp-nav').toggleClass('menu-open')
  $('.l-header__hamburger__btn').toggleClass('is-active')
  $('#top').toggleClass('no-scroll')
}

$('.js-hamburger').on('click', menuOpen)
$('.js-link').on('click', menuOpen)