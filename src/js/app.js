import Swiper from 'swiper/bundle';
import 'swiper/css';

const swiper = new Swiper(".swiper",{
  loop: true,
  centeredSlides: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  speed: 400,
  effect: 'slide',
  direction: 'horizontal',
  spaceBetween: 0,
  navigation: {
    nextEl: ".p-newOffers__postButton",
    prevEl: ".p-newOffers__preButton",
  },
  breakpoints: {
    768: {
      spaceBetween: window.innerWidth / 80,
      slidesPerView: 4,
    },
    1200: {
      spaceBetween: 20,
      slidesPerView: 4,
    }
  }
});

window.onload = function () {
  const hamburger = document.getElementById('hamburger');
  const hamburgerLine = hamburger.querySelectorAll('span');
  const spMenu = document.getElementById('spMenu');
  function bodyHiddenSwitch(body, bodyStyle) {
    if (bodyStyle.overflow === "hidden") {
      body.style.height = "";
      body.style.overflow = "";
    } else {
      body.style.height = "100%";
      body.style.overflow = "hidden";
    }
  }

  hamburger.addEventListener('click', function () {
    spMenu.classList.toggle('open');
    hamburgerLine.forEach((line) => line.classList.toggle('open'));

    let body = document.body;
    let bodyStyle = window.getComputedStyle(body);
    bodyHiddenSwitch(body, bodyStyle);
  });



  const headerHeight = document.querySelector('header').offsetHeight;

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = anchor.getAttribute('href');
      const target = document.getElementById(href.replace('#', ''));
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      const hamburger = document.getElementById('hamburger');
      const hamburgerLine = hamburger.querySelectorAll('span');
      const spMenu = document.getElementById('spMenu');
      let body = document.body;
      let bodyStyle = window.getComputedStyle(body);
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      spMenu.classList.toggle('open');
      hamburgerLine.forEach((line) => line.classList.toggle('open'));
      bodyHiddenSwitch(body, bodyStyle);
    });
  });
};