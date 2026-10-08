import $ from "jquery";
import './lib/swiper-bundle.min.js';

const swiper = new Swiper('.l-main__new-recruit-area', {
  loop: true,
  loopedSlides: 4,
  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
  breakpoints: {
    767: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },

  observer: true,
  observeParents: true,
});

$(function() {
  console.log('環境構築完了');
})

$(function() {
  $('#sp_hamburger').on('click',function(){
    $('#sp_hamburger').toggleClass("open");
    $('#sp_nav_menu').slideToggle();
  });
});