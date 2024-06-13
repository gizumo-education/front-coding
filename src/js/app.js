import $ from "jquery";

$(function() {
  console.log('環境構築完了');
})

const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }
});


const hamburger = document.querySelector('.l-header__hamburger');
const menu = document.querySelector('.l-header__menu');

hamburger.addEventListener('click', function() {
  menu.classList.toggle('is-open');
});

const menuButton = document.querySelectorAll('.l-header__menu-item-text');

menuButton.forEach(function(button) {
  button.addEventListener('click', function() {
    menu.classList.remove('is-open');
  });
});