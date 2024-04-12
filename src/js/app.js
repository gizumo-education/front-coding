import Swiper from 'swiper/bundle';

const swiper = new Swiper(".p-newOffers__inner",{
  loop: true,
  centeredSlides: false,
  slidesPerView: 4,
  slidesPerGroup: 1,
  speed: 600,
  effect: 'slide',
  direction: 'horizontal',
  navigation: {
    nextEl: ".p-newOffers__postButton",
    prevEl: ".p-newOffers__preButton",
  },
});

window.onload = function () {
  const hamburger = document.getElementById('hamburger');
  const hamburgerLine = hamburger.querySelectorAll('span');
  const spMenu = document.getElementById('spMenu');

  hamburger.addEventListener('click', function () {
    spMenu.classList.toggle('open');
    hamburgerLine.forEach((line) => line.classList.toggle('open'));

    var body = document.body;
    var bodyStyle = window.getComputedStyle(body);
    if (bodyStyle.overflow === "hidden") {
      body.style.height = "";
      body.style.overflow = "";
    } else {
      body.style.height = "100%";
      body.style.overflow = "hidden";
    }
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
      var body = document.body;
      var bodyStyle = window.getComputedStyle(body);
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      spMenu.classList.toggle('open');
      hamburgerLine.forEach((line) => line.classList.toggle('open'));
      if (bodyStyle.overflow === "hidden") {
        body.style.height = "";
        body.style.overflow = "";
      } else {
        body.style.height = "100%";
        body.style.overflow = "hidden";
      }
    });
  });
};