import $ from "jquery";
import './lib/swiper-bundle.min.js';

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.swiper')) {
    const swiper = new Swiper('.swiper', {
      loop: true,
      slidePerView: 4,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
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