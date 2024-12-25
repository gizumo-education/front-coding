import $ from "jquery";
import 'slick-carousel';

$(function () {
  console.log('環境構築完了');

  $(".slick-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: $('.arrow_box'),
    prevArrow: '<div class="slide-arrow prev-arrow"></div>',
    nextArrow: '<div class="slide-arrow next-arrow"></div>',

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],



  });


  const ham = document.querySelector('.l-header__hamburger');
  const nav = document.querySelector('.l-header__nav-sp');

  ham.addEventListener('click', function () {
    console.log('ok!');
    nav.classList.toggle('active');

  });
})

